import React, { useState } from 'react';
import moment from 'moment';
import { DateRange } from 'react-date-range';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './DateModal.scss';

export default function ModalDate({ setIsModalOpened }) {
  const navigate = useNavigate();
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const dateSearch = () => {
    navigate(`/itemslist?check_in=${startDate}&check_out=${endDate}`);
    setIsModalOpened(false);
  };

  let startDate = moment(dateState[0].startDate).format('YYYY-MM-DD');
  let endDate = moment(dateState[0].endDate).format('YYYY-MM-DD');

  return (
    <>
      <DateRange
        onChange={item => setDateState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={dateState}
        months={2}
        direction="horizontal"
        minDate={new Date()}
      />
      <SearchBtn onClick={dateSearch}>SEARCH {'>'}</SearchBtn>
    </>
  );
}

const SearchBtn = styled.button`
  position: absolute;
  width: 180px;
  left: 500px;
  bottom: 30px;
  background-color: #000;
  color: #fff;
  height: 60px;
  border: none;
  border-radius: 40px;
  font-family: 'Abel Regular';
  font-size: 20px;
  cursor: pointer;
`;
