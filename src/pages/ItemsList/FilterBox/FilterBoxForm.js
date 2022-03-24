import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillCaretDown } from 'react-icons/ai';
import Category from './Category';
import NumBtnModal from './NumBtnModal';
import PriceBtnModal from './PriceBtnModal';
import ThemeBtnModal from './ThemeBtnModal';

const FilterBoxForm = ({
  handleSort,
  makeQueryString,
  setSortQuery,
  setThemeQuery,
  setRangeQuery,
  rangeQuery,
}) => {
  const [themeName, setThemeName] = useState('테마');
  const [priceName, setPriceName] = useState('가격 범위');

  const [isModalBtn, setIsModalBtn] = useState({
    isNumBtn: false,
    isPriceBtn: false,
    isThemeBtn: false,
  });

  const makeModal = ({ target }) => {
    if (target.name === 'num') {
      setIsModalBtn(prev => ({ ...prev, isNumBtn: !isModalBtn.isNumBtn }));
      setIsModalBtn(prev => ({ ...prev, isPriceBtn: false }));
      setIsModalBtn(prev => ({ ...prev, isThemeBtn: false }));
    } else if (target.name === 'price') {
      setIsModalBtn(prev => ({ ...prev, isPriceBtn: !isModalBtn.isPriceBtn }));
      setIsModalBtn(prev => ({ ...prev, isNumBtn: false }));
      setIsModalBtn(prev => ({ ...prev, isThemeBtn: false }));
    } else if (target.name === 'theme') {
      setIsModalBtn(prev => ({ ...prev, isThemeBtn: !isModalBtn.isThemeBtn }));
      setIsModalBtn(prev => ({ ...prev, isNumBtn: false }));
      setIsModalBtn(prev => ({ ...prev, isPriceBtn: false }));
    } else {
      setIsModalBtn(prev => ({ ...prev, isPriceBtn: false }));
      setIsModalBtn(prev => ({ ...prev, isNumBtn: false }));
      setIsModalBtn(prev => ({ ...prev, isThemeBtn: false }));
    }
  };

  return (
    <div>
      <FilterRow>
        <LocationSort>행성</LocationSort>
        <SerchGalaxyInput type="text" />
        <PlanetBtn>은하계전체</PlanetBtn>
        <CheckInOut>
          <CheckSort>체크인</CheckSort>
          <CheckInput />
          <AiFillCaretDown className="checkin" />
          <CheckSort>체크아웃</CheckSort>
          <CheckInput />
          <AiFillCaretDown className="checkout" />
        </CheckInOut>
      </FilterRow>
      <FilterRow>
        <NumDownBtn name="num" onClick={e => makeModal(e)}>
          <AiFillCaretDown className="btn" />
          인원
        </NumDownBtn>
        {isModalBtn.isNumBtn && (
          <NumBtnModal setIsModalBtn={setIsModalBtn} makeModal={makeModal} />
        )}
        <PriceDownBtn name="price" onClick={e => makeModal(e)}>
          <AiFillCaretDown className="btn" />
          {`${priceName.toLocaleString()}`}
        </PriceDownBtn>
        {isModalBtn.isPriceBtn && (
          <PriceBtnModal
            makeModal={makeModal}
            setRangeQuery={setRangeQuery}
            rangeQuery={rangeQuery}
            setPriceName={setPriceName}
            setIsModalBtn={setIsModalBtn}
          />
        )}
        <ThemeDownBtn name="theme" onClick={e => makeModal(e)}>
          <AiFillCaretDown className="btn" />
          {themeName}
        </ThemeDownBtn>
        {isModalBtn.isThemeBtn && (
          <ThemeBtnModal
            setIsModalBtn={setIsModalBtn}
            makeModal={makeModal}
            setThemeName={setThemeName}
            setThemeQuery={setThemeQuery}
          />
        )}
      </FilterRow>
      <Category
        handleSort={handleSort}
        makeQueryString={makeQueryString}
        setSortQuery={setSortQuery}
      />
    </div>
  );
};

const FilterRow = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  position: relative;
`;

const LocationSort = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-right: 10px;
  line-height: 36px;
`;

const SerchGalaxyInput = styled.input`
  border: 1px solid #e4e4e4;
  width: 200px;
  height: 36px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  padding: 0 10px;
  outline: none;
`;

const PlanetBtn = styled.button`
  padding: 0 15px;
  margin: 0 5px 0 0;
  background-color: #f2f2f2;
  border: none;
  width: 140px;
  margin-left: 15px;
  margin-right: 50px;
  cursor: pointer;
  border-radius: 5px;
  line-height: 36px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
`;

const CheckInOut = styled.div`
  position: relative;
  display: flex;
  .checkin {
    position: absolute;
    top: 10px;
    left: 230px;
  }
  .checkout {
    position: absolute;
    top: 10px;
    left: 500px;
  }
`;

const CheckSort = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  margin-right: 10px;
`;

const CheckInput = styled.input`
  width: 164px;
  height: 36px;
  padding: 0 33px 0 12px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
  outline: none;
  cursor: pointer;
`;

const NumDownBtn = styled.button`
  position: relative;
  width: 200px;
  margin-right: 8px;
  padding: 0 23px 0 12px;
  background-color: white;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  font-size: 14px;
  font-family: 'SpoqaHan Sans Neo Regular';
  font-weight: 500;
  text-align: left;
  line-height: 36px;
  cursor: pointer;
  .btn {
    position: absolute;
    top: 10px;
    left: 175px;
  }
`;

const PriceDownBtn = styled.button`
  position: relative;
  width: 200px;
  margin-right: 8px;
  padding: 0 23px 0 12px;
  background-color: white;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  font-size: 14px;
  font-family: 'SpoqaHan Sans Neo Regular';
  font-weight: 500;
  text-align: left;
  line-height: 36px;
  cursor: pointer;
  .btn {
    position: absolute;
    top: 10px;
    left: 175px;
  }
`;

const ThemeDownBtn = styled.button`
  position: relative;
  width: 200px;
  margin-right: 8px;
  padding: 0 23px 0 12px;
  background-color: white;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  font-size: 14px;
  font-family: 'SpoqaHan Sans Neo Regular';
  font-weight: 500;
  text-align: left;
  line-height: 36px;
  cursor: pointer;
  .btn {
    position: absolute;
    top: 10px;
    left: 175px;
  }
`;

export default FilterBoxForm;
