import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiTwotoneHeart } from 'react-icons/ai';

function ItemCard() {
  const [items, setItems] = useState([]);
  const [isToggle, setIsToggle] = useState(false);

  //TODO: 부모 컴포넌트에서 해당 state를 관리하고 props로 전달 예정
  useEffect(() => {
    fetch('/data/items.json')
      .then(response => response.json())
      .then(data => setItems(data));
    // .then(data => console.log(data));
  }, []);

  if (!items.result) {
    return null;
  }

  return (
    <Layout>
      <WishBtn type="button">
        <AiTwotoneHeart
          className="wish"
          onClick={() => setIsToggle(!isToggle)}
          style={{ color: isToggle ? `red` : `white` }}
        />
      </WishBtn>
      <RoomTitle>
        <Name>{items.result[0].name}</Name>
        <div>{items.result[0].galaxy}</div>
      </RoomTitle>
      <RoomInfo>
        <Paragraph>
          <RoomContent>
            <Info>기준 2명(최대 4명)</Info>
            <Info>{`₩${items.result[0].accomodation_info.price.toLocaleString()}원`}</Info>
          </RoomContent>
          <ReserveBtn>예약하기</ReserveBtn>
        </Paragraph>
        <RoomImage>
          <Image src={items.result[0].image} alt="test를 위한 사진입니다" />
        </RoomImage>
      </RoomInfo>
    </Layout>
  );
}

const Layout = styled.div`
  padding: 70px 0 50px 90px;
`;

const WishBtn = styled.button`
  position: absolute;
  left: 610px;
  top: 345px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  .wish {
    font-size: 30px;
    opacity: 0.5;
    /* color: red; */
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
