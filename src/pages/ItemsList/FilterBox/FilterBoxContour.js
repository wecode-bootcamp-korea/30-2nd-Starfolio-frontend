import React from 'react';
import styled from 'styled-components';

const FilterBoxContour = ({ children }) => {
  return (
    <Layout>
      <FilterBoxContourLayout>{children}</FilterBoxContourLayout>
    </Layout>
  );
};

const Layout = styled.div`
  height: 300px;
`;

const FilterBoxContourLayout = styled.div`
  border-top: 3px solid #000;
  z-index: 20;
  height: 500px;
`;

export default FilterBoxContour;
