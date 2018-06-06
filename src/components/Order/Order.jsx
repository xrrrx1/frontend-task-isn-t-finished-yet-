import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const OrderssContainer = styled.div`
  border: 1px grey solid;
`;
const OrdersContainer = styled.div`
  border: 1px grey solid;
`;

const Order = () => (
  <OrderssContainer>
    <OrdersContainer>
      <p>ФИО пол и дата рождения заказчика</p>
      <p>Название выбранного отеля</p>
      <p>Стоимость</p>
    </OrdersContainer>
    <OrdersContainer>
      <p>ФИО пол и дата рождения заказчика</p>
      <p>Название выбранного отеля</p>
      <p>Стоимость</p>
    </OrdersContainer>
  </OrderssContainer>
);

Order.propTypes = {};

export default Order;
