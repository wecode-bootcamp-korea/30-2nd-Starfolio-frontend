import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import kakaoImg from './kakao_login_medium_wide.png';
import { KAKAO_AUTH_URL } from './Oauth.js';

function Login() {
  return (
    <LoginBox>
      <ContentsSubTilte>
        <Title>LOGIN</Title>
        <Text>로그인</Text>
      </ContentsSubTilte>
      <LoginWrap>
        <FormWrap>
          <InputBox>
            <LoginForm>
              <Input type="email" placeholder="이메일 아이디" />
            </LoginForm>
            <LoginForm>
              <Input type="current-password" placeholder="비밀번호" />
            </LoginForm>
          </InputBox>
        </FormWrap>
        <LoginBtn buttontype="submit">LOGIN</LoginBtn>
        <NonMembersWrap>
          <NonMembersBtn>비회원 예약 조회</NonMembersBtn>
        </NonMembersWrap>
        <Etc>
          <StyledLink to="">회원가입</StyledLink>
          <StyledLink to="">비밀번호 찾기</StyledLink>
        </Etc>
        <SnsLogin>
          <SnsTitle>SNS 계정으로 로그인하기</SnsTitle>
          <SnsLink href={KAKAO_AUTH_URL}>
            <SnsImg alt="카카오 로그인" />
          </SnsLink>
        </SnsLogin>
      </LoginWrap>
    </LoginBox>
  );
}

const LoginBox = styled.div`
  margin: 0px auto;
  text-align: center;
`;

const ContentsSubTilte = styled.div`
  margin-top: 70px;
  margin-bottom: 80px;
  text-align: center;
  font-size: 18px;
  font-family: Lato-Bold;
  letter-spacing: 14px;
`;

const Title = styled.div`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
  font-family: Lato-Bold;
  text-indent: 14px;
  letter-spacing: 14px;
`;

const Text = styled.div`
  margin: 10px 0 0;
  font-size: 14px;
  letter-spacing: 0px;
`;

const LoginWrap = styled.form`
  margin: 0 auto;
  border-top: 1px solid black;
  width: 360px;
`;

const FormWrap = styled.div`
  margin-top: 30px;
`;

const InputBox = styled.div`
  margin-bottom: 30px;
`;

const LoginForm = styled.div`
  margin-top: 13px;
  border-bottom: 1px solid #ddd;
  height: 46px;
  width: 100%;

  &::placeholder {
    color: gray;
    font-size: 12px;
    font-weight: 400;
  }
`;

const Input = styled.input`
  border: 0;
  border-radius: 0;
  outline: none;
  width: 100%;
  height: 45px;
  color: black;
  font-size: 16px;
  font-family: SpoqaHanSans;
  font-weight: 600;
  vertical-align: middle;
`;

const LoginBtn = styled.button`
  border: none;
  color: white;
  background-color: black;
  width: 360px;
  height: 55px;
  font-weight: 400;
  font-family: SpoqaHanSans;
  letter-spacing: 2px;
  text-indent: 2px;
  cursor: pointer;
`;

const NonMembersWrap = styled.div`
  margin-top: 10px;
`;

const NonMembersBtn = styled.button`
  border: none;
  width: 360px;
  height: 45px;
  color: white;
  background-color: #d8d8d8;
  font-weight: 400;
  font-family: SpoqaHanSans;
  letter-spacing: 2px;
  text-indent: 2px;
  cursor: pointer;
`;

const Etc = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  color: #646464;
  font-size: 14px;
  text-decoration: none;
`;

const SnsLogin = styled.div`
  margin-top: 80px;
`;

const SnsTitle = styled.div`
  margin-bottom: 30px;
  font-size: 16px;
  font-family: Lato-Bold;
  font-weight: 500;
`;

const SnsLink = styled.a`
  border: none;
  background: none;
  cursor: pointer;
`;

const SnsImg = styled.img`
  content: url(${kakaoImg});
`;
export default Login;
