import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const HotelssContainer = styled.div``;

const HotelsContainer = styled.div`
  border: 1px grey solid;
`;

const Hotels = () => (
  <HotelssContainer>
    <HotelsContainer>
      <p>Название отеля: Апартаменты La Suitte Lantne</p>
      <p>Город: Челябинск</p>
      <p>Цена бронирования: 4580 руб.</p>
      <p>Свободно номеров: 4</p>
      <p>Рейтинг: ****</p>
    </HotelsContainer>
    <HotelsContainer>
      <p>Название отеля: Апартаменты La Suitte Lantne</p>
      <p>Город: Челябинск</p>
      <p>Цена бронирования: 4580 руб.</p>
      <p>Свободно номеров: 4</p>
      <p>Рейтинг: ****</p>
    </HotelsContainer>
  </HotelssContainer>
);

Hotels.propTypes = {};

export default Hotels;
