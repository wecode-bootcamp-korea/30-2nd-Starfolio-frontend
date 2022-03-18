import React from 'react';
import styled from 'styled-components';

function LikeItemCard({
  plantName,
  galaxyName,
  themeName,
  minOfPeple,
  maxOfPeple,
  price,
  id,
  plantImg,
}) {
  const priceComa = Math.round(price).toLocaleString();

  return (
    <LikeItemCardWrap>
      <TextWrap>
        <LikeTitle>{plantName}</LikeTitle>
        <LikeTextWrap>
          <LikeText>
            {galaxyName} / {themeName}
          </LikeText>
          <LikeText>
            최소 인원 : {minOfPeple} / 최대 인원 : {maxOfPeple}
          </LikeText>
          <LikeText>
            ₩{priceComa} ~ ₩{priceComa}
          </LikeText>
        </LikeTextWrap>
        <BookBtn>예약하기</BookBtn>
      </TextWrap>
      <PlantImg alt={id} src={plantImg} />
    </LikeItemCardWrap>
  );
}

const LikeItemCardWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 70px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LikeTitle = styled.span`
  margin-bottom: 5px;
  font-size: 32px;
  line-height: 100%;
  font-weight: 500;
  text-align: left;
`;

const LikeTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const LikeText = styled.span`
  font-family: SpoqaHanSans;
  font-size: 15px;
  color: black;
  font-weight: 400;
  text-align: left;
  margin: 3px 0px;
`;

const BookBtn = styled.button`
  border: none;
  width: 150px;
  height: 45px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: white;
  background-color: black;
`;

const PlantImg = styled.img`
  width: 372px;
  height: 250px;
`;

export default LikeItemCard;
