import React, { useEffect, useState } from 'react'
import { FilterBar, FilterButton, PageBox, Main } from './styled'
import RestaurantCard from './RestaurantCard'
import { useHistory } from 'react-router-dom'
import { SearchField } from './SearchField'
import { HeaderTop } from '../../components/HeaderTop/HeaderTop'
import Alert from '../../components/Alert/Alert'
import { useProtectPage } from '../../hooks/useProtectPage'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from '../../store/Restaurants/Restaurants.actions'


function Home() {
    useProtectPage()
    const [categoryFilter, setCategoryFilter] = useState('')
    const [activeOrder, setActiveOrder] = useState()

    const history = useHistory()
    const dispatch = useDispatch()

    const restaurants = useSelector(state => state.restaurantList)

    
    // const getActiveOrder = () => {
    //   axios.get(`${baseUrl}/active-order`, baseHeader)
    //     .then(response=>{
    //       console.log('Home > getActiveOrder:', response.data.order)
    //       setActiveOrder(response.data.order)
    //     })
    //     .catch(err=>{
    //       console.log(err)
    //     })
    // }


    useEffect(()=>{
      // getRest()
      // dispatch(getRestaurants())
      // getActiveOrder()
    },[])


    const cards = restaurants &&
        restaurants.map((rest) => {
            const categories = rest.categories
            if (categories.includes(categoryFilter) || !categoryFilter || categoryFilter === 'Todos') {
                return (<RestaurantCard key={rest.id} restaurant={rest}></RestaurantCard>)
            }
    })


    let categoryList = []
    if (restaurants) {
        restaurants.forEach(rest => {
            const restCategories = rest.categories
            restCategories.forEach(cat => {
                if (!categoryList.includes(cat)) {
                  categoryList.push(cat)
                }
            })
        });
    }
    categoryList && categoryList.sort()

    const categories = categoryList && 
        [<FilterButton key={-1} active={categoryFilter === 'Todos'} onClick={() => setCategoryFilter('Todos')} > {'Todos'} </FilterButton>,
            ...categoryList.map((cat, index) => {
              return <FilterButton key={index} active={cat === categoryFilter} onClick={() => setCategoryFilter(cat)} > {cat} </FilterButton>
          })
        ]


    const renderActiveOrder = () => {
      if (activeOrder) {
        return <Alert activeOrder={activeOrder} />
      }
    }


    return (
        <Main>
            <HeaderTop backButton={false} title={'FutureEats'} />
            <PageBox activeOrder={activeOrder} >
                <SearchField history={history} />
                <FilterBar> {categories} </FilterBar>
                {cards}
            </PageBox>
            {renderActiveOrder()}
        </Main>
    )
}
  
  export default Home;
