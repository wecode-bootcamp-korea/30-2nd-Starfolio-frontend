import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

export default function ModalContainer({ modalToggler, children, menuTitle }) {
  return (
    <ModalWrapper onClick={modalToggler}>
      <ModalLayout onClick={e => e.stopPropagation()}>
        <MenuTitle>
          <span>{menuTitle}</span>
        </MenuTitle>
        <Inner>{children}</Inner>
        <OffBtn onClick={modalToggler}>X</OffBtn>
      </ModalLayout>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalLayout = styled.div`
  position: relative;
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  padding: 80px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 10px;
  outline: 0;
  z-index: 1000;
  background-color: #fff;
`;

const MenuTitle = styled.div`
  /* width: 100%; */
  padding: 40px 0;
  border-bottom: 1px solid ${theme.borderLightGrayColor};
  span {
    font-size: 35px;
  }
`;

const Inner = styled.div`
  padding: 50px 0;
  margin: 0 auto;
`;

const OffBtn = styled.div`
  position: absolute;
  top: 120px;
  right: 80px;
  font-size: 40px;
  cursor: pointer;
`;
