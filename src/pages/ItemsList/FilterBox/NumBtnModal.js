import React from 'react';
import styled from 'styled-components';

const NumBtnModal = ({ makeModal }) => {
  return (
    <Layout>
      <div className="themeLayout">
        <div>인원</div>
        <CloseBtn onClick={makeModal}>X</CloseBtn>
      </div>
      <div className="applicationBtnContainer">
        <div className="applicationBtn" onClick={makeModal}>
          적용하기
        </div>
      </div>
      <div />
    </Layout>
  );
};

const Layout = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 350px;
  top: 65px;
  left: 0px;
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid #e4e4e4;
  font-size: 14px;
  font-weight: 500;
  z-index: 30;
  .themeLayout {
    display: flex;
    justify-content: space-between;
    width: 180px;
    margin-bottom: 50px;
    div {
      font-size: 25px;
    }
  }
  .applicationBtnContainer {
    .applicationBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 140px;
      height: 35px;
      background-color: black;
      font-size: 15px;
      color: white;
      border-radius: 100px;
      margin-bottom: 50px;
      cursor: pointer;
    }
  }
`;

const CloseBtn = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

export default NumBtnModal;
