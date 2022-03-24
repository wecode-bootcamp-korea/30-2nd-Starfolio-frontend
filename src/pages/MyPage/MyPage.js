import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LikeItemCard from './Component/LikeItemCard';
import { API } from '../../config.js';

function MyPage(id) {
  const [likeList, setLikeList] = useState([]);
  const userEmail = localStorage.getItem('email');
  const userName = localStorage.getItem('name');

  const menuTextList = ['예약 정보', '취소 내역', '이용권', 'WishList'];

  useEffect(() => {
    fetch(`${API}/wishlists${id}`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(result => {
        !!result.wishlist_lists.join('') && setLikeList(result.wishlist_lists);
      });
  }, []);

  // useEffect(() => {
  //   fetch('/data/wish.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       !!data.wishlist_lists.join('') && setLikeList(data.wishlist_lists);
  //     });
  // }, []);

  return (
    <MyPageWrap>
      <ContentsSubTilte>
        <Title>MY PAGE</Title>
        <Text>마이 페이지</Text>
      </ContentsSubTilte>
      <MyPageContainer>
        <MyPageInfo>
          <Greet>
            <span>{userName}</span>님 반가워요!
          </Greet>
          <Text>스타 폴리오와 함께 0번의 여행을 했어요.</Text>
          <MyEdit>
            <Email>{userEmail}</Email>
            <ProfileEdit to="">회원정보 수정</ProfileEdit>
          </MyEdit>
        </MyPageInfo>
        <MyPageComponent>
          <MyPageMenu>
            <ul>
              <li>
                <MenuTitle to="/mypage">My Stay</MenuTitle>
              </li>
              {menuTextList.map((el, idx) => {
                return (
                  <li key={idx}>
                    <MenuText to="/mypage">{el}</MenuText>
                  </li>
                );
              })}
            </ul>
          </MyPageMenu>
          <LikeContent>
            {!!likeList.join('') ? (
              likeList.map((el, idx) => {
                return (
                  <LikeItemCard
                    key={idx}
                    plantName={el.planet_name}
                    galaxyName={el.galaxy_name}
                    themeName={el.theme_name}
                    minOfPeple={el.accomodation_info[0].min_of_people}
                    maxOfPeple={el.accomodation_info[0].max_of_people}
                    price={el.accomodation_info[0].price}
                    id={el.wishlist_id}
                    plantImg={el.planet_thumbnail}
                  />
                );
              })
            ) : (
              <LikeContentNull>
                <span>아직 추가된 wish list가 없어요.</span>
              </LikeContentNull>
            )}
          </LikeContent>
        </MyPageComponent>
      </MyPageContainer>
    </MyPageWrap>
  );
}
const MyPageWrap = styled.div`
  width: 100%;
  margin: 50px auto;
  text-align: center;
`;

const ContentsSubTilte = styled.div`
  min-width: 1100px;
  margin-top: 70px 0px 80px 0px;
  text-align: center;
  font-size: 18px;
  font-family: Lato-Bold;
`;

const Title = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  text-indent: 14px;
  letter-spacing: 14px;
`;

const Text = styled.div`
  margin: 10px 0 0;
  color: #999;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
`;

const MyPageContainer = styled.div`
  margin: 0 auto;
  width: 1100px;
  text-align: center;
`;

const MyPageInfo = styled.div`
  padding-bottom: 80px;
  margin-bottom: 60px;
  border-bottom: 3px solid black;
`;

const Greet = styled(Title)`
  color: #000;
  font-size: 30px;
  font-family: SpoqaHanSans;
  font-weight: 400;
  text-indent: 0px;
  letter-spacing: 0px;
`;

const MyEdit = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 15px 0 0;
`;

const Email = styled.div`
  padding: 0px 10px;
  margin: 5px 0px;
  font-size: 16px;
  font-family: SpoqaHanSans;
  font-weight: 500;
`;

const ProfileEdit = styled(Link)`
  display: inline-block;
  padding: 0px 10px;
  margin: 5px 0px;
  border-left: 1px solid #999;
  color: #999;
  text-decoration: none;
  font-size: 12px;
`;

const MyPageComponent = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

const MyPageMenu = styled.div`
  float: left;
  width: 25.47%;
  height: 100%;
  text-align: left;
`;

const LikeContent = styled.div`
  float: right;
  width: 74.53%;
  height: 100%;
  padding: 9px 0 0;
  margin: 0 0 60px;
  border-bottom: 1px solid #ddd;
  color: #181818;
  background-color: #fff;
  font-size: 14px;
  font-weight: 300;
  line-height: 1;
`;

const LikeContentNull = styled.div`
  margin-top: 100px;
  height: 300px;
  color: #999;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
`;

const MenuTitle = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  line-height: 38px;
  clear: both;

  :hover::after {
    content: '';
    width: 1px;
    height: 1px;
    border: 2px solid #000;
    margin: 0 0 2px 10px;
  }
`;

const MenuText = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 14px;
  line-height: 38px;
  font-family: SpoqaHanSans;
  :hover::after {
    content: '';
    width: 1px;
    height: 1px;
    border: 1px solid #000;
    margin: 0 0 2px 10px;
  }
`;

export default MyPage;
