import React from 'react';
import { QuantityPage, QuantityContainer, QuantityText, QuantitySelect, QuantityButton } from './styled';

const ConfirmQuantity = (props) => {
    return (
        <QuantityPage>
            <QuantityContainer>
                <QuantityText> Selecione a quantidade desejada </QuantityText>
                <QuantitySelect
                name={props.selectQuantity}
                value={props.selectQuantity}
                onChange={props.onChangeSelect}
                >
                <option value={1} > 1 </option>
                <option value={2} > 2 </option>
                <option value={3} > 3 </option>
                <option value={4} > 4 </option>
                <option value={5} > 5 </option>
                <option value={6} > 6 </option>
                <option value={7} > 7 </option>
                <option value={8} > 8 </option>
                <option value={9} > 9 </option>
                <option value={10} > 10 </option>
                </QuantitySelect>
                <QuantityButton type="submit" onClick={props.onClickCartAdd} >
                ADICIONAR AO CARRINHO
                </QuantityButton>
            </QuantityContainer>
        </QuantityPage>
    )
}

export default ConfirmQuantity