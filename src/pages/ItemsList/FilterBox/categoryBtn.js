import React from 'react';
import styled from 'styled-components';

function CategoryBtn({ id, name, sort, makeQueryString, setSortQuery }) {
  // return <SortBtn onClick={() => handleSort(id, sort)}>{name}</SortBtn>;
  // return <SortBtn onClick={() => makeQueryString(id, sort)}>{name}</SortBtn>;
  return <SortBtn onClick={() => setSortQuery(sort)}>{name}</SortBtn>;
}

const SortBtn = styled.div`
  margin-right: 40px;
  font-size: 14px;
  cursor: pointer;
`;

export default CategoryBtn;
