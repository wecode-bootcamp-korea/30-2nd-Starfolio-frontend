import React from 'react';
import styled from 'styled-components';

const SubTitle = () => {
  return (
    <Layout>
      <Preface>FIND STAR</Preface>
      <SubPreface>머무르는 것 자체로 영화가 되는 공간</SubPreface>
    </Layout>
  );
};

const Layout = styled.div`
  text-align: center;
  height: 290px;
  width: 100%;
  padding-top: 70px;
`;

const Preface = styled.div`
  font-family: Lato-Bold;
  font-size: 18px;
  letter-spacing: 14px;
  text-indent: 14px;
  text-align: center;
  padding-top: 70px;
`;
const SubPreface = styled.div`
  font-size: 15px;
  line-height: 28px;
  margin: 10px 0 0;
  text-align: center;
`;

export default SubTitle;
