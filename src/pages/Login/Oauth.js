export const client_id = process.env.REACT_APP_CLIENT_ID;
export const REDIRECT_URI = 'http://localhost:3000/oauth/kakao';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${REDIRECT_URI}&response_type=code`;
