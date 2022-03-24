import React, { useState } from 'react';
import styled from 'styled-components';
import CheckBox from '../CheckButton/CheckBox';
import THEME_BTN_DATA from './ThemeBtnData';

const ThemeBtnModal = ({ makeModal, setThemeName, setThemeQuery }) => {
  const [themeData, setThemeData] = useState([]);
  const [themeDataName, setThemeDataName] = useState();
  const [saveThemeId, setSaveThemeId] = useState(1);

  const checkCheckBox = ({ target }) => {
    if (target.checked) {
      setThemeData([target.id]);
      setThemeDataName(target.name);
    }
  };

  return (
    <Layout>
      <div className="themeLayout">
        <div>테마</div>
        <CloseBtn onClick={makeModal}>X</CloseBtn>
      </div>
      <div className="applicationBtnContainer">
        <div
          className="applicationBtn"
          onClick={e => {
            makeModal(e);
            setThemeQuery(saveThemeId);
            setThemeName(themeDataName);
          }}
        >
          적용하기
        </div>
      </div>
      <div>
        {THEME_BTN_DATA.map(themeInfo => {
          return (
            <CheckBox
              key={themeInfo.id}
              id={themeInfo.id}
              name={themeInfo.name}
              themeData={themeData}
              checkCheckBox={checkCheckBox}
              setThemeName={setThemeName}
              setSaveThemeId={setSaveThemeId}
            />
          );
        })}
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
  height: 450px;
  top: 65px;
  left: 415px;
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

export default ThemeBtnModal;
