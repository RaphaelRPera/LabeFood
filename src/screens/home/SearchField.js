import React from 'react'
import { SearchBox, SearchIcon, SearchInput } from './styled'
import searchPNG from './img/search.png'
import useForm from '../../hooks/useForm'
import { goToSearch } from '../../router/GoToPages'



export const SearchField = (props) => {
    const {form, onChange} = useForm({search:''})
    const history = props.history

    const handleInputChange = (event) =>{
        const { name, value } = event.target
        onChange(name, value)
        props.setSearchString && props.setSearchString(value)
      } 

    const onClickSearch = () => {
        history && goToSearch(history)
    }

    return (
        <SearchBox onClick={onClickSearch} >
            <SearchIcon>
                <img  src={searchPNG} alt={'lupa'}/>
            </SearchIcon>

            <SearchInput
                placeholder='Restaurante'
                name={'search'}
                onChange={handleInputChange}
                value={form.search}
                type='text'
            />
        </SearchBox>
    )
}