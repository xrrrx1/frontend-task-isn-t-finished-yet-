import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// const HotelssContainer = styled.div``;

const HotelContainer = styled.div`
  border: 1px grey solid;
`;

class Hotel extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    available: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
  };
  state = {};

  render() {
    const { id, name, city, price, available, rating } = this.props;
    console.log(id);
    return (
      <HotelContainer>
        <p>Название: {name}</p>
        <p>Город: {city}</p>
        <p>Цена: {price}</p>
        <p>Свободно: {available}</p>
        <p>Рейтинг: {rating}</p>
      </HotelContainer>
    );
  }
}

Hotel.propTypes = {};

export default Hotel;
