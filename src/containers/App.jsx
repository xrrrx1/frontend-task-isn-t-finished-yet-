import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const StyledDiv = styled.div``;

class App extends Component {
  static defaultProps = {};
  static propTypes = {};
  state = {};

  render() {
    return (
      <StyledDiv>
        <p>DEFAULT</p>
      </StyledDiv>
    );
  }
}

export default connect(
  () => ({}),
  {},
)(App);
