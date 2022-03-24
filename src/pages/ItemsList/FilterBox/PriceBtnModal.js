import React, { useState } from 'react';
import styled from 'styled-components';

const PriceBtnModal = ({ makeModal, setRangeQuery, setPriceName }) => {
  const [priceInfo, setPriceInfo] = useState(0);
  return (
    <Layout>
      <div className="themeLayout">
        <div>가격 범위</div>
        <CloseBtn onClick={makeModal}>X</CloseBtn>
      </div>
      <div className="applicationBtnContainer">
        <div
          className="applicationBtn"
          onClick={e => {
            makeModal(e);
            setRangeQuery(priceInfo);
            setPriceName(`₩0원 ~ ₩${priceInfo.toLocaleString()}원`);
          }}
        >
          적용하기
        </div>
      </div>
      <div className="RangeBox">
        <input
          type="range"
          max="99999999"
          step="1000000"
          onInput={e => setPriceInfo(Number(e.target.value))}
        />
        <div className="priceRange">{`₩${priceInfo.toLocaleString()}원`}</div>
      </div>
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
  left: 210px;
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
  .RangeBox {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 200px;
    height: 100px;
    input {
      background-color: black;
      input[type='range'] {
        background-color: black;
      }
      input[type='range']::-webkit-slider-thumb {
        background-color: black;
      }
      input[type='range']::-moz-range-thumb {
        -webkit-appearance: none;
        background: black;
      }
    }
    div {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;

const CloseBtn = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

export default PriceBtnModal;
