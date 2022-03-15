import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import { SiNaver, SiNasa } from 'react-icons/si';

function Footer() {
  return (
    <Wrapper>
      <Inner>
        <Infomation>
          <Logo src="/images/starfolio_logo.png" alt="starfolio_logo" />
          <CompanyInfo>
            <div>상호 : STARFOLIO INC.</div>
            <div>
              우리은하 지구자치구 XA-XII 스테이션
              <span>support@starfolio.com</span>
            </div>
          </CompanyInfo>
          <CompanyName>© STARFOLIO</CompanyName>
        </Infomation>
        <LinkMenu>
          <SocialLinks>
            <li>
              <FiFacebook />
            </li>
            <li>
              <FiInstagram />
            </li>
            <li>
              <SiNaver />
            </li>
            <li>
              <FiYoutube />
            </li>
            <li>
              <SiNasa />
            </li>
          </SocialLinks>
          <CompanyLinks>
            <li>ABOUT</li>
            <li>NEWSLETTERS</li>
            <li>CONTAT US</li>
            <li>이용약관</li>
            <li>개인정보 처리방침</li>
          </CompanyLinks>
        </LinkMenu>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin-top: 120px;
  border-top: 2px solid #555;
  background-color: #f2f2f2;
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  min-width: 1350px;
  max-width: 1800px;
  margin: 0 auto;
  padding: 70px 20px;
  font-family: 'Abel Regular', 'SpoqaHan Sans Neo Regular';
  color: #333;
`;

const Infomation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 85%;
  border-right: 1px solid #c8c8c8;
  padding-right: 15px;
  font-size: 14px;
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
`;

const CompanyInfo = styled.div`
  line-height: 2.5;
  span {
    margin-left: 15px;
  }
`;

const CompanyName = styled.div``;

const LinkMenu = styled.div`
  width: 15%;
  padding-left: 15px;
`;

const SocialLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  font-size: 22px;
`;

const CompanyLinks = styled.ul`
  margin-top: 40px;
  font-size: 14px;
  line-height: 2;
`;

export default Footer;
