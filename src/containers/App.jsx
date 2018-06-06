import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Client from '../components/Client/Client';
import Header from '../components/Header/Header';
import Hotel from '../components/Hotel/Hotel';
import Order from '../components/Order/Order';
import { getHotels } from '../actions/hotelsAC';
import hotelsSelector from '../selectors/hotelsSelector';
import dataSelector from '../selectors/dataSelector';
import loadingSelector from '../selectors/loadingSelector';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const HeaderContainerDiv = styled.div`
  padding: 5px;
`;

const ClientsContainerDiv = styled.div`
  height: 150px;
  overflow-y: scroll;
  padding: 5px;
`;

const HotelsContainerDiv = styled.div`
  overflow-y: scroll;
  height: 350px;
  padding: 5px;
`;

const OrdersContainerDiv = styled.div`
  height: 180px;
  overflow-y: scroll;
  padding: 5px;
`;

class App extends Component {
  static defaultProps = {};
  static propTypes = {
    getHotels: PropTypes.func.isRequired,
    hotels: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasData: PropTypes.bool.isRequired,
  };
  state = {};

  componentDidMount() {
    this.props.getHotels();
  }

  render() {
    const { hotels, isLoading, hasData } = this.props;

    return isLoading ? (
      <p>LOADING</p>
    ) : (
      <StyledDiv>
        <HeaderContainerDiv>
          <Header />
        </HeaderContainerDiv>

        <ClientsContainerDiv>
          <Client />
        </ClientsContainerDiv>

        <HotelsContainerDiv>
          {hasData
            ? hotels.map(hotel => (
                <Hotel
                  key={hotel.id}
                  id={hotel.id}
                  name={hotel.name}
                  city={hotel.city}
                  price={hotel.price}
                  available={hotel.available}
                  rating={hotel.rating}
                />
              ))
            : null}
        </HotelsContainerDiv>

        <OrdersContainerDiv>
          <Order />
        </OrdersContainerDiv>
      </StyledDiv>
    );
  }
}

export default connect(
  store => ({
    hotels: hotelsSelector(store),
    hasData: dataSelector(store),
    isLoading: loadingSelector(store),
  }),
  { getHotels },
)(App);
