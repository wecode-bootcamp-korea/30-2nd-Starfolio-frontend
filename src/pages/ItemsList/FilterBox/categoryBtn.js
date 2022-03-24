import React from 'react';
import styled from 'styled-components';

function CategoryBtn({ name, sort, setSortQuery }) {
  return <SortBtn onClick={() => setSortQuery(sort)}>{name}</SortBtn>;
}

const SortBtn = styled.div`
  margin-right: 40px;
  font-size: 14px;
  cursor: pointer;
`;

export default CategoryBtn;
