import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/items.json')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <Layout>
      <WishBtn type="button" />
      <RoomTitle>
        <Name>{items.name}</Name>
        <RoomKind>{items.kind}</RoomKind>
      </RoomTitle>
      <RoomInfo>
        <Paragraph>
          <div />
          <div>
            <Country>{items.country}</Country>
            <Num>기준 2명(최대 4명)</Num>
            <Price>
              {`₩${items.price}`} ~ {`₩${items.price}`}
            </Price>
          </div>
          <div>
            <ReserveBtn>예약하기</ReserveBtn>
          </div>
        </Paragraph>
        <RoomImage>
          <Image src={items.image} alt="test를 위한 사진입니다" />
        </RoomImage>
      </RoomInfo>
    </Layout>
  );
}

const Layout = styled.div`
  padding: 70px 0 50px 90px;
  width: 50%;
  position: relative;
`;

const WishBtn = styled.button`
  position: absolute;
  left: 610px;
  top: 330px;
`;

const RoomInfo = styled.div`
  display: flex;
`;

const Name = styled.div`
  display: inline-block;
  font-size: 32px;
  margin-bottom: 5px;
`;

const RoomKind = styled.div``;

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Country = styled.div`
  margin-bottom: 10px;
`;

const Num = styled.div`
  margin-bottom: 10px;
`;

const Price = styled.div`
  margin-bottom: 10px;
`;

const ReserveBtn = styled.button`
  margin-top: 30px;
`;

const RoomTitle = styled.div`
  height: 50px;
`;

const RoomImage = styled.div``;

const Image = styled.img`
  width: 407px;
  height: 230px;
  margin-left: 50px;
`;

export default Items;
