import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CategoryrBtn from './categoryBtn';
import SORT_DATA from './sortData';
import API from '../../../config';

// const Category = ({ handleSort }) => {
const Category = ({ makeQueryString, handleSort, setSortQuery }) => {
  const navigate = useNavigate();

  return (
    <Layout>
      <CategoryInfo>
        {SORT_DATA.map(sort => {
          return (
            <CategoryrBtn
              key={sort.id}
              id={sort.id}
              name={sort.name}
              sort={sort.sort}
              // handleSort={handleSort}
              makeQueryString={makeQueryString}
              handleSort={handleSort}
              setSortQuery={setSortQuery}
            />
          );
        })}
      </CategoryInfo>
    </Layout>
  );
};

const Layout = styled.div`
  margin-top: 200px;
  border-bottom: 2px solid #000;
  font-size: 14px;
`;

const CategoryInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export default Category;
