import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Client from '../components/Client/Client';
import Header from '../components/Header/Header';
import Hotels from '../components/Hotels/Hotels';
import Orders from '../components/Orders/Orders';

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
  static propTypes = {};
  state = {};

  render() {
    return (
      <StyledDiv>
        <HeaderContainerDiv>
          <Header />
        </HeaderContainerDiv>

        <ClientsContainerDiv>
          <Client />
        </ClientsContainerDiv>

        <HotelsContainerDiv>
          <Hotels />
        </HotelsContainerDiv>

        <OrdersContainerDiv>
          <Orders />
        </OrdersContainerDiv>
      </StyledDiv>
    );
  }
}

export default connect(
  () => ({}),
  {},
)(App);
