import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const ClienttContainer = styled.div``;

const ClientContainer = styled.div`
  border: 1px grey solid;
`;

const Client = () => (
  <ClienttContainer>
    <ClientContainer>
      <form action="">
        <div>
          <input type="text" placeholder="ФИО" required />
        </div>
        <div>
          <select>
            <option value="A">Man</option>
            <option value="B">Women</option>
          </select>
        </div>
        <div>
          <input type="date" required />
        </div>
        <button>Create client</button>
      </form>
    </ClientContainer>
    <ClientContainer>
      <form action="">
        <div>
          <input type="text" placeholder="ФИО" required />
        </div>
        <div>
          <select>
            <option value="A">Man</option>
            <option value="B">Women</option>
          </select>
        </div>
        <div>
          <input type="date" required />
        </div>
        <button>Create client</button>
      </form>
    </ClientContainer>
  </ClienttContainer>
);

Client.propTypes = {};

export default Client;
