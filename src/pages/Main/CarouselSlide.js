import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarouselSlide() {
  const slideSetting = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <CarouselWrapper>
      <CarouselsList {...slideSetting}>
        {items.map(item => {
          return (
            <CarouselsItem key={item.id}>
              <ItemImg src={item.url} />
            </CarouselsItem>
          );
        })}
      </CarouselsList>
      {/* <SliderBtn /> */}
    </CarouselWrapper>
  );
}
const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselsList = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const CarouselsItem = styled.div``;

const ItemImg = styled.img`
  margin: 0 auto;
  width: 100%;
  height: 900px;
`;

const SliderBtn = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 250px;
  height: 130px;
  background-color: black;
  opacity: 0.7;
`;

const items = [
  { id: 1, url: '/images/main_planet2.jpg' },
  { id: 2, url: '/images/main_planet1.jpg' },
  { id: 3, url: '/images/main_planet3.jpeg' },
  { id: 4, url: '/images/main_planet4.jpeg' },
  { id: 5, url: '/images/main_planet5.jpeg' },
  { id: 6, url: '/images/main_planet6.jpeg' },
];
