import React from 'react';
import styled from 'styled-components';
import NewContents from './NewContents';
import CarouselSlide from './CarouselSlide';

const recommendPlanet = [
  {
    id: 1,
    title: 'Acamar',
    location: '에리다누스',
    price: 34000000,
    imgUrl: '/images/planet_recommend1.jpg',
  },
  {
    id: 2,
    title: 'Graffias',
    location: '카시오페아',
    price: 52000000,
    imgUrl: '/images/planet_recommend2.jpg',
  },
  {
    id: 3,
    title: 'Sargas',
    location: '센타우루스',
    price: 47000000,
    imgUrl: '/images/planet_recommend3.jpg',
  },
];

function Main() {
  return (
    <MainWrapper>
      <MainInner>
        <CarouselSlide />
      </MainInner>
      <NewContentsInner>
        <ContentsTitle>
          <span>지금 스타폴리오에서만</span>
        </ContentsTitle>
        <ContentsList>
          {recommendPlanet.map(key => {
            return (
              <NewContents
                key={key.id}
                imgUrl={key.imgUrl}
                title={key.title}
                location={key.location}
                price={key.price}
              />
            );
          })}
        </ContentsList>
      </NewContentsInner>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  max-width: 1800px;
  min-height: 800px;
`;

const MainInner = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
`;

const NewContentsInner = styled.div`
  margin: 100px auto 0;
  padding: 0 20px;
  max-width: 1330px;
  min-width: 1000px;
  font-family: 'SpoqaHan Sans Neo Regular';
`;

const ContentsTitle = styled.div`
  text-align: center;
  font-family: 'SpoqaHan Sans Neo Medium';
  margin-bottom: 90px;

  span {
    font-size: 18px;
    margin-left: 10px;
    letter-spacing: 8px;
  }
`;

const ContentsList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Main;
