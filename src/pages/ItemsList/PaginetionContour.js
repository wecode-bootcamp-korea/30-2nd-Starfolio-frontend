import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const PaginetionContour = ({
  updateOffset,
  previousOffset,
  moveToTop,
  setPageQuery,
}) => {
  return (
    <Layout onClick={() => moveToTop()}>
      <FaChevronLeft className="previousBtn" onClick={() => previousOffset()} />
      <PageBtn onClick={() => updateOffset(0)}>1</PageBtn>
      <PageBtn onClick={() => updateOffset(1)}>2</PageBtn>
      <PageBtn onClick={() => updateOffset(2)}>3</PageBtn>
      <FaChevronRight className="nextBtn" />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  border-top: 1px solid black;
`;

const PageBtn = styled.div`
  padding: 0 10px;
  font-size: 20px;
  opacity: 0.3;
  cursor: pointer;
`;

export default PaginetionContour;
