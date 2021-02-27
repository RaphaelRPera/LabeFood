import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useProtectPage } from '../../hooks/useProtectPage'
import { Address, CategoryContainer, CategoryItem, Container, Delivery, ImgContainer, InfoContainer, MainContainer, Name, ProductContainer, Shipping, ShippingContainer, Title } from './style'
// import { ProductCard } from './ProductCard/ProductCard'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { HeaderTop } from '../../components/HeaderTop/HeaderTop'



const RestaurantPage = () => {
    useProtectPage()

    const [pathId, setPathId] = useState('')
    const [restaurant, setRestaurant] = useState('')
    const {name, address, deliveryTime, logoUrl, shipping, categories, products} = restaurant

    const pathParams = useParams()

    const restaurants = useSelector(state => state.restaurantList)

    const getRestaurant = () => {
        restaurants && restaurants.forEach(rest => {
            if (rest.id === pathId) {
                setRestaurant(rest)
            }
        });
    }

    const productCards = products &&
        products.map((product, index) => 
            <ProductCard key={index} product={product} restaurant={restaurant} />
        )



    useEffect(() => {
        setPathId(pathParams.id)
        getRestaurant()
    }, [pathId])

    return (
        <MainContainer>
            <Container>
                <HeaderTop backButton={true}  title={"FutureEats"} />
                {restaurant &&
                    <>
                        <ImgContainer image={logoUrl} >
                            <InfoContainer>
                                <Name> {name} </Name>
                                <ShippingContainer>
                                    <Delivery> {`${deliveryTime} min`} </Delivery>
                                    <Shipping> {`Frete R$${shipping},00`}</Shipping>
                                </ShippingContainer>
                            </InfoContainer>
                        </ImgContainer>

                        <CategoryContainer>
                            <CategoryItem> {`• ${categories[0]}`} </CategoryItem>
                            <CategoryItem> {`• ${categories[1]}`} </CategoryItem>
                        </CategoryContainer>

                        <Address> {address} </Address>

                        <ProductContainer>
                            <Title> Sugestões para você </Title>
                            {productCards}
                        </ProductContainer>
                    </>
                }
            </Container>
        </MainContainer>
    )
}

export default RestaurantPage;
