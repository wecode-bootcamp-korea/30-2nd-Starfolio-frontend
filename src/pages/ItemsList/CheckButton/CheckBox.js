import React from 'react';
import styled from 'styled-components';

const CheckBox = ({ id, name, checkCheckBox, themeData, setSaveThemeId }) => {
  return (
    <CheckBoxContainer htmlFor={id}>
      <CheckBoxInput
        name={name}
        id={id}
        checked={themeData.includes(String(id))}
        // checked={themeData.includes(String(id)) ? true : false}
        onChange={e => checkCheckBox(e)}
        onClick={e => setSaveThemeId(e.target.id)}
      />
      <Info>{name}</Info>
    </CheckBoxContainer>
  );
};

const CheckBoxContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CheckBoxInput = styled.input.attrs({ type: 'checkbox' })`
  margin-top: 1px;
`;

const Info = styled.div`
  margin-left: 15px;
`;

export default CheckBox;
