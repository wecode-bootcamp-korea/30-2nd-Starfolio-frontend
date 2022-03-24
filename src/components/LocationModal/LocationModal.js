import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/theme';

const themeList = [
  {
    id: 1,
    theme: '아이스에이지',
  },
  {
    id: 2,
    theme: '서바이벌',
  },
  {
    id: 3,
    theme: '심해수영장',
  },
  {
    id: 4,
    theme: '미지와의조우',
  },
  {
    id: 5,
    theme: '나를찾아서',
  },
  {
    id: 6,
    theme: '용암노천탕',
  },
];

export default function LocationModal() {
  const navigate = useNavigate();
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  return (
    <LocationWrapper>
      <Title>테마</Title>
      <Filters>
        {themeList.map(item => (
          <ThemeBtn
            key={item.id}
            onClick={setIsFilterClicked(!isFilterClicked)}
          >
            {item.theme}
          </ThemeBtn>
        ))}
      </Filters>
    </LocationWrapper>
  );
}

const LocationWrapper = styled.div``;

const Title = styled.div``;

const Filters = styled.div``;

const ThemeBtn = styled.button`
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
  box-shadow: 13px 15px 30px 0 rgb(0 0 0 / 40%);
`;
