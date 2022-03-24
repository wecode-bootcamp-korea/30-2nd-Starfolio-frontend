import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { client_id, REDIRECT_URI } from './Oauth.js';
import { API, BASE_URL } from '../../config.js';

const Redirect = () => {
  const navigate = useNavigate();
  let accessCode = new URL(window.location.href).searchParams.get('code');

  const goToMain = () => {
    window.alert('로그인 되었습니다.');
    navigate('/');
  };

  const goToLogin = () => {
    window.alert('로그인에 실패하였습니다.');
    navigate('/login');
  };

  const bodyData = {
    grant_type: 'authorization_code',
    client_id,
    redirect_uri: REDIRECT_URI,
    code: accessCode,
  };

  const queryStringBody = Object.keys(bodyData)
    .map(el => encodeURIComponent(el) + '=' + encodeURI(bodyData[el]))
    .join('&');

  useEffect(() => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;',
        Accept: 'application/json',
      },
      body: queryStringBody,
    })
      .then(res => res.json())
      .then(result => {
        !!result.access_token
          ? fetch(`${BASE_URL}/users/kakao-login`, {
              method: 'GET',
              headers: {
                Authorization: result.access_token,
              },
            })
              .then(res => res.json())
              .then(result => {
                console.log(result);
                localStorage.setItem('token', result.data.access_token);
                localStorage.setItem('email', result.data.email);
                localStorage.setItem('name', result.data.name);
                goToMain();
              })
          : goToLogin();
      });
  });

  return <> </>;
};

export default Redirect;
