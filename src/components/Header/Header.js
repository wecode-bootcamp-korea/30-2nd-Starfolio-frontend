import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal/ModalContainer';
import DateModal from '../DateModal/DateModal';
import LocationModal from '../LocationModal/LocationModal';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { MdOutlineLocationOn, MdOutlineDarkMode } from 'react-icons/md';
import API from '../../config';

const MENU_LIST = [
  {
    name: 'FIND STAR',
    to: '/itemslist',
  },
  {
    name: 'PROMOTION',
    to: '/',
  },
  {
    name: 'JOURNAL',
    to: '/',
  },
  {
    name: 'PRE-ORDER',
    to: '/',
  },
];

const Header = () => {
  const [isModalOpened, setIsModalOpened] = useState({
    dateModal: false,
    locationModal: false,
  });
  const [isLogined, setIsLogined] = useState();
  useEffect(() => {
    setIsLogined(localStorage.getItem('token'));
    console.log('hi');
  });
  const navigate = useNavigate();

  const modalToggler = type => {
    if (type === 'where')
      setIsModalOpened(prev => ({ ...prev, locationModal: true }));
    else if (type === 'when')
      setIsModalOpened(prev => ({ ...prev, dateModal: true }));
    else {
      setIsModalOpened({
        locationModal: false,
        dateModal: false,
      });
    }
  };

  return (
    <>
      {(isModalOpened.dateModal || isModalOpened.locationModal) && (
        <Modal
          isModalOpened={isModalOpened}
          modalToggler={modalToggler}
          menuTitle={
            isModalOpened.locationModal ? '어디로 떠날까요?' : '언제 떠날까요?'
          }
          dateSearch="dateSearch"
        >
          {isModalOpened.locationModal && (
            <LocationModal setIsModalOpened={setIsModalOpened} />
          )}
          {isModalOpened.dateModal && (
            <DateModal setIsModalOpened={setIsModalOpened} />
          )}
        </Modal>
      )}
      <HeaderWrapper>
        <Inner>
          <Link to="/">
            <Logo src="/images/starfolio_logo.png" alt="starfolio_logo" />
          </Link>
          <ReservationBox>
            <WhereBox
              onClick={() => {
                modalToggler('where');
              }}
            >
              <MdOutlineLocationOn className="location" />
              <span>어디로 떠날까요?</span>
            </WhereBox>
            <WhenBox onClick={() => modalToggler('when')}>
              <AiOutlineCalendar className="calender" />
              <span>언제 떠날까요?</span>
            </WhenBox>
          </ReservationBox>

          <Nav>
            <MenuBox>
              {MENU_LIST.map(({ name, to }, idx) => (
                <Menu key={idx} to={to}>
                  {name}
                </Menu>
              ))}
            </MenuBox>
            <EtcMenuBox>
              {isLogined ? (
                <>
                  <Menu
                    to="/"
                    onClick={() => {
                      localStorage.removeItem('token');
                      localStorage.removeItem('name');
                      localStorage.removeItem('email');
                      setIsLogined(false);
                    }}
                  >
                    LOGOUT
                  </Menu>
                  <BsPersonCircle
                    className="mypage"
                    onClick={() => {
                      navigate('/mypage');
                    }}
                  />
                </>
              ) : (
                <Menu to="/login">LOGIN</Menu>
              )}

              <MdOutlineDarkMode className="dark" />
            </EtcMenuBox>
          </Nav>
        </Inner>
      </HeaderWrapper>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  position: sticky;
  border-bottom: solid 1px ${({ theme }) => theme.borderLightGrayColor};
  padding: 0 20px;
  background-color: #fff;
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 76px;
  margin: 0 auto;
  min-width: 1350px;
  max-width: 1800px;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

const ReservationBox = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  margin-left: -170px;
  width: 350px;
  font-family: 'SpoqaHan Sans Neo Regular';
`;

const WhereBox = styled.div`
  display: flex;
  align-items: center;
  padding-right: 25px;
  cursor: pointer;
  .location {
    font-size: 28px;
  }

  span {
    margin-left: 5px;
    font-size: 15px;
  }
`;

const WhenBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
  cursor: pointer;
  .calender {
    font-size: 28px;
  }
  border-left: 1px solid black;

  span {
    margin-left: 5px;
    font-size: 15px;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  width: 650px;
`;

const MenuBox = styled.ul`
  display: flex;
  margin-left: 10%;
  margin-right: 20px;
  text-decoration: none;
  border-right: 1px solid black;
`;

const EtcMenuBox = styled.ul`
  display: flex;
  align-items: center;

  .mypage {
    font-size: 20px;
    cursor: pointer;
    margin-right: 15px;
  }
  .dark {
    font-size: 20px;
    cursor: pointer;
  }
`;

const Menu = styled(Link)`
  position: relative;
  text-decoration: none;
  color: black;
  font-family: 'Lato Sans KR Bold';
  font-size: 15px;
  margin-right: 25px;
  text-align: center;
  padding: 0.2em 0;

  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: black;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }
`;
