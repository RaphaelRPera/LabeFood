import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, wait, screen } from "@testing-library/react";
import App from '../../App';
import Home from './Home'
import Busca from './Busca'
import userEvent from "@testing-library/user-event";
import axios from 'axios'



const renderPage = (page) => {
    axios.get = jest.fn().mockResolvedValue({
        data:{
            restaurants: [
                {
                    address: "Rua das Margaridas, 110 - Jardim das Flores",
                    category: "Árabe",
                    deliveryTime: 60,
                    description: "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
                    id: "1",
                    logoUrl: "http://soter.ninja/futureFoods/logos/habibs.jpg",
                    name: "Habibs",
                    shipping: 6,
                },

                {
                    address: "Avenida dos Papagaios, 1350 - Sta. Efigênia",
                    category: "Hamburguer",
                    deliveryTime: 15,
                    description: "McDonald's Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer, servindo cerca de 68 milhões de clientes por dia em 119 países através de 37 mil pontos de venda.",
                    id: "2",
                    logoUrl: "http://soter.ninja/futureFoods/logos/mcdonalds.png",
                    name: "McDonalds",
                    shipping: 19,
                }
            ]
        }
    })

    render(page)
}

describe('testa a página Home de forma geral', () => {
    const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA'
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlVHSDRzV0g1U1Eza2pleFZDdzVEIiwibmFtZSI6IlJhcGhhZWwiLCJlbWFpbCI6InJhcGhhZWxAZW1haWwuY29tIiwiY3BmIjoiMTIzLjQ1Ni43ODktMDAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUnVhIExhYmVuaWRhLCAyMDIwLCA4MyAtIExhcmdvIGRhIENhc2NhdGEiLCJpYXQiOjE2MDIxMjU3MjV9.5OXBMF1I1lQONI7944zfIefGZaqYVIruRQVxp45WE5Q'
    const baseHeader = {headers:{auth: token}}

    test('escrever no input de busca', async () => {
        renderPage(<Home/>)
        await wait()

        const inputSearch = await screen.findByPlaceholderText('Restaurante')
        const txt = 'hab'
        await userEvent.type(inputSearch, txt)
        expect(inputSearch).toHaveValue(txt)
    })

    test('clicar no search e ser direcionado para a página "Busca"', async () => {
        renderPage(<Home/>)
        await wait()

        const inputSearch = await screen.findByPlaceholderText('Restaurante')
        userEvent.click(inputSearch)
        // const titleBuscar = await screen.findByText('Busca')
    })

    test('clicar na categoria', async () => {
        renderPage(<Home/>)
        await wait()

        expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/restaurants`, {"headers": {"auth": null}})
        
        const catButton = await screen.findByText('Árabe')
        userEvent.click(catButton)
        const cardName = await screen.findByText('Habibs Jardim das Flores')
        const cardName2 = screen.queryByText('McDonalds Sta. Efigênia')
        expect(cardName2).toEqual(null)
    })

    test('clicar no card de restaurante', async () => {
        renderPage(<Home/>)
        await wait()

        expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/restaurants`, {"headers": {"auth": null}})
        
        const cardRest = await screen.findByText('Habibs Jardim das Flores')
        // userEvent.click(cardRest)
    })
})




describe('testar página de busca', () => {
    test('buscar o texto "hab" e encontrar o card correspondente', async () => {
        renderPage(<Busca/>)
        await wait()

        const inputSearch = await screen.findByPlaceholderText('Restaurante')
        const txt = 'hab'
        await userEvent.type(inputSearch, txt)

        const cardName = await screen.findByText('Habibs Jardim das Flores')
        const cardName2 = screen.queryByText('McDonalds Sta. Efigênia')
        expect(cardName2).toEqual(null)
    })
})
