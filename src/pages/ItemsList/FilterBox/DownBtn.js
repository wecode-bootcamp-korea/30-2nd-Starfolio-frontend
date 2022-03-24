import React from 'react';
import styled from 'styled-components';
import { AiFillCaretDown } from 'react-icons/ai';

const DownBtn = ({ name }) => {
  return (
    <Btn>
      <AiFillCaretDown className="btn" />
      <div>{name}</div>
    </Btn>
  );
};

const Btn = styled.button`
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

export default DownBtn;
