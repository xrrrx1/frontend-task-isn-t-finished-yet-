import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const HeaderContainer = styled.div`
  border: 1px grey solid;
`;

const Header = () => (
  <HeaderContainer>
    <p>Система бронирования отелей</p>
  </HeaderContainer>
);

Header.propTypes = {};

export default Header;
