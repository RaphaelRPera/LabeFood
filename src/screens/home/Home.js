import React, { useEffect, useState } from 'react'
import { FilterBar, FilterButton, PageBox, Main } from './styled'
import RestaurantCard from './RestaurantCard'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { SearchField } from './SearchField'
import { HeaderTop } from '../../components/HeaderTop/HeaderTop'
import { baseUrl } from '../../constants/axiosConstants'
import Alert from '../../components/Alert/Alert'
import { useProtectPage } from '../../hooks/useProtectPage'


function Home() {
    useProtectPage()
    const [restaurants, setRestaurants] = useState([])
    const [category, setCategory] = useState('')
    const [activeOrder, setActiveOrder] = useState()
    const history = useHistory()

    const token = localStorage.getItem('token')
    const baseHeader = {headers:{auth: token}}

    const getRestaurants = () => {
      axios.get(`${baseUrl}/restaurants`, baseHeader)
        .then(response=>{
          setRestaurants(response.data.restaurants)
        })
        .catch(err=>{
          console.log(err)
        })
    }

    const getActiveOrder = () => {
      axios.get(`${baseUrl}/active-order`, baseHeader)
        .then(response=>{
          console.log('Home > getActiveOrder:', response.data.order)
          setActiveOrder(response.data.order)
        })
        .catch(err=>{
          console.log(err)
        })
    }


    useEffect(()=>{
      getRestaurants()
      getActiveOrder()
    },[])


    const renderCards = () => {
      if (restaurants.length > 0) {
        return restaurants.map(rest=>{
          if (rest.category === category || category === '') {
            return (<RestaurantCard key={rest.id} restaurant={rest}></RestaurantCard>)
          }
        })
      }
    }


    const renderCategories = () => {
      let newCats = []

      let categories = 
        restaurants
          .map(restaurant => {
            if (!newCats.includes(restaurant.category)) {
              newCats.push(restaurant.category)
              return restaurant.category
            }
          })
          .sort()
          .map((cat, index) => {
            if (cat === category) {
              return <FilterButton key={index} active={true} onClick={()=>onClickCategory(cat)} > {cat} </FilterButton>
            } else {
              return <FilterButton key={index} onClick={()=>onClickCategory(cat)}> {cat} </FilterButton>
            }
            
          })
        return categories
      }

      const renderActiveOrder = () => {
        if (activeOrder) {
          return <Alert activeOrder={activeOrder} />
        }
      }

      const onClickCategory = (category) => {
        setCategory(category)
      }

    return (
      <Main>
        <HeaderTop backButton={false} title={'FutureEats'} />
        <PageBox activeOrder={activeOrder} >
          <SearchField history={history} />
          <FilterBar> {renderCategories()} </FilterBar>
          {renderCards()}
        </PageBox>
        {renderActiveOrder()}
      </Main>
    )
  }
  
  export default Home;
