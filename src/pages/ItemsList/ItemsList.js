import React from 'react';
import styled from 'styled-components';
import Main from './Main';

function ItemsList() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}

const Layout = styled.div`
  padding: 0 60px;
`;

export default ItemsList;
