import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiTwotoneHeart } from 'react-icons/ai';
import API from '../../config';

function ItemCard({ id, name, thumbnail, galaxy, price }) {
  const [isToggle, setIsToggle] = useState(false);

  const postWishList = () => {
    fetch(`${API.itemsList}/wishlists/${id}`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
  };

  return (
    <Layout>
      <WishBtn type="button" onClick={postWishList}>
        <AiTwotoneHeart
          className="wish"
          onClick={() => setIsToggle(!isToggle)}
          style={{ color: isToggle ? `red` : `white` }}
        />
      </WishBtn>
      <RoomTitle>
        <Link className="titleLink" to={`/itemsdetail/${id}`}>
          <Name>{name}</Name>
          <div>{galaxy}</div>
        </Link>
      </RoomTitle>
      <RoomInfo>
        <Paragraph>
          <RoomContent>
            <Link className="roomContentLink" to={`/itemsdetail/${id}`}>
              <Info>기준 2명(최대 4명)</Info>
              <Info>{`₩${price.toLocaleString()}원`}</Info>
            </Link>
          </RoomContent>
          <ReserveBtn>예약하기</ReserveBtn>
        </Paragraph>
        <RoomImage>
          <Link to={`/itemsdetail/${id}`}>
            <Image src={thumbnail} alt="test를 위한 사진입니다" />
          </Link>
        </RoomImage>
      </RoomInfo>
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  margin: 70px 25px 50px 25px;
`;

const WishBtn = styled.button`
  position: absolute;
  right: 10px;
  bottom: 14px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  .wish {
    font-size: 30px;
    opacity: 0.7;
    color: white;
    transition: all 0.4s ease-in-out;
  }
`;

const RoomInfo = styled.div`
  display: flex;
`;

const Name = styled.div`
  display: inline-block;
  font-size: 32px;
  margin-bottom: 5px;
`;

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const RoomContent = styled.div`
  font-family: 'SpoqaHan Sans Neo Regular';
  font-size: 14px;
  line-height: 2;
  display: inline-block;
  cursor: pointer;
  .roomContentLink {
    text-decoration: none;
    color: black;
  }
`;

const Info = styled.div`
  margin-bottom: 10px;
`;

const ReserveBtn = styled.p`
  width: 53px;
  margin-top: 20px;
  border-bottom: 1px solid #000;
  font-size: 14px;
  font-family: 'SpoqaHan Sans Neo Regular';
  line-height: 30px;
  font-weight: 700;
  cursor: pointer;
`;

const RoomTitle = styled.div`
  height: 50px;
  cursor: pointer;
  font-family: 'SpoqaHan Sans Neo Regular';
  .titleLink {
    text-decoration: none;
    color: black;
  }
`;

const RoomImage = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  width: 407px;
  height: 230px;
  margin-left: 50px;
`;

export default ItemCard;
