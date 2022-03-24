import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineWifi, AiOutlineCloud, AiFillAudio } from 'react-icons/ai';
import { GiBarracks, GiCardboardBoxClosed, GiUltrasound } from 'react-icons/gi';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { BASE_URL } from '../../config';

function ItemsDetail() {
  const params = useParams();
  const [featureList, setFeatureList] = useState([]);
  const [itemImg, setItemImg] = useState();
  const AMENITIES_COMENTS = [
    '블루투스 스피커',
    'DSLR',
    'AI스피커',
    '관광욕 우주복',
    '히말라야 산소통',
    'WIFI',
    '스마트폰 방지용 끈',
  ];

  const FEATURE_CONTENTS = [
    {
      id: 1,
      icon: <AiOutlineWifi />,
      text: 'WIFI',
    },
    {
      id: 2,
      icon: <GiBarracks />,
      text: '베이스캠프',
    },
    {
      id: 3,
      icon: <AiOutlineCloud />,
      text: '클라우드 서비스',
    },
    {
      id: 4,
      icon: <AiFillAudio />,
      text: '음성 인식',
    },
    {
      id: 5,
      icon: <GiCardboardBoxClosed />,
      text: '배송 서비스',
    },
    {
      id: 6,
      icon: <GiUltrasound />,
      text: '통신 서비스',
    },
  ];

  useEffect(() => {
    fetch(`${BASE_URL}/planets/planet/${params.id}/accomodation/${params.id}`)
      .then(res => res.json())
      .then(data => {
        if (data.result.images && data.result.images.length > 0) {
          setFeatureList(data.result);
          setItemImg(featureList.images[0]);
        }
      });
  }, [params.id, featureList.images]);

  return (
    <DetailWrapper>
      <TitleBox>
        <Title>BOOKING</Title>
        <Booking>
          <span>클라우드나인</span>
          {/* <DatePicker /> */}
          <PaymentBtn>결제하기</PaymentBtn>
        </Booking>
      </TitleBox>
      <DetailBox>
        <RoomInfo>
          <InfoBox>
            <BoxTitle>ROOM INFORMATION</BoxTitle>
            <PlanetTitle>{featureList.name}</PlanetTitle>
            <PlanetPrice>{featureList.price}</PlanetPrice>
            <Description>{featureList.description}</Description>
            <Detail>
              <div>체크인 15:00 / 체크아웃 12:00</div>
              <div>
                기준 인원 {featureList.min_of_people}명 (최대 인원
                {featureList.max_of_people}명)
              </div>
              <div>객실면적 899㎡</div>
              <div>킹 침대 {featureList.num_of_bed}</div>
              <div>킹 이불 3</div>
            </Detail>
          </InfoBox>
          <RoomImageBox>
            <RoomImage src={itemImg} alt="없음" />
          </RoomImageBox>
        </RoomInfo>

        <RoomService>
          <Features>
            <FeatureTitle>FEATURES</FeatureTitle>
            <FeatureContents>
              {FEATURE_CONTENTS.map((e, idx) => {
                return (
                  <FeatureContentsWrap key={idx}>
                    <IconWrap>{e.icon}</IconWrap>
                    <FetureText>{e.text}</FetureText>
                  </FeatureContentsWrap>
                );
              })}
            </FeatureContents>
          </Features>
          <Amenities>
            <AmenityTitle>AMENITIES</AmenityTitle>
            <AmenityContents>
              {AMENITIES_COMENTS.map((e, idx) => {
                return <AmentiyText key={idx}>{e}</AmentiyText>;
              })}
            </AmenityContents>
          </Amenities>
        </RoomService>
      </DetailBox>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div``;

const TitleBox = styled.div`
  margin: 0 auto;
  min-width: 1100px;
  max-width: 1350px;
  height: 210px;
  padding: 80px 20px 0;
`;

const Title = styled.div`
  font-family: 'Abel Regular';
  font-size: 28px;
  text-align: center;
  letter-spacing: 12px;
`;

const Booking = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  height: 60px;
  border-bottom: 2px solid #ccc;
  font-family: 'SpoqaHan Sans Neo Regular';

  span {
    font-size: 26px;
  }
`;

const PaymentBtn = styled.button`
  border: none;
  background-color: #000;
  color: #fff;
  width: 240px;
  height: 45px;
  font-size: 17px;
  cursor: pointer;
`;

const DetailBox = styled.div`
  margin: 0 auto;
  min-width: 1250px;
  max-width: 1350px;
  padding: 100px 20px;
`;

const RoomInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoBox = styled.div`
  font-family: 'Abel Regular', 'SpoqaHan Sans Neo Regular';
  width: 25%;
`;

const BoxTitle = styled.div`
  font-size: 14px;
  letter-spacing: 4px;
`;

const PlanetTitle = styled.div`
  font-size: 30px;
  margin-top: 30px;
`;

const PlanetPrice = styled.div`
  font-size: 20px;
  margin-top: 25px;
`;

const Description = styled.div`
  height: 300px;
  margin-top: 40px;
  font-size: 14px;
  line-height: 2;
`;

const Detail = styled.div`
  font-size: 14px;
  word-spacing: 5px;
  line-height: 1.8;
`;

const RoomImageBox = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
`;

const RoomImage = styled.img`
  height: 580px;
`;

const RoomService = styled.div`
  height: 300px;
  margin-top: 70px;
`;

const Features = styled.div`
  display: flex;
  height: 150px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
`;

const FeatureTitle = styled.div`
  display: flex;
  width: 25%;
  height: inherit;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 3px;
`;

const FeatureContents = styled.div`
  display: flex;
  width: 75%;
  height: inherit;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const FeatureContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrap = styled.div`
  color: #777;
  font-size: 30px;
`;

const FetureText = styled.span`
  align-self: center;
  text-align: center;
  font-size: 15px;
  color: #777;
  margin: 5px 0px 10px;
`;

const Amenities = styled.div`
  display: flex;
  height: 150px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
`;

const AmenityTitle = styled.div`
  display: flex;
  width: 25%;
  height: inherit;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 3px;
`;

const AmenityContents = styled.div`
  display: flex;
  width: 75%;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-self: center;
`;

const AmentiyText = styled.span`
  align-self: center;
  text-align: center;
  font-size: 15px;
  color: #777;
  margin: 20px 0px;
`;

export default ItemsDetail;
