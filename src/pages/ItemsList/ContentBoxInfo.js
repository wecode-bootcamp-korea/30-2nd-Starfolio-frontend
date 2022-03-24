import React from 'react';
import styled from 'styled-components';
import ItemCard from '../../components/ItemCard/ItemCard';
import PaginetionContour from './PaginetionContour';

const ContentBoxInfo = ({ items, updateOffset }) => {
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      <div>
        <InfoLayout>
          {items.map(itemCard => {
            return (
              <ItemCard
                key={itemCard.id}
                id={itemCard.id}
                name={itemCard.name}
                thumbnail={itemCard.thumbnail}
                galaxy={itemCard.galaxy}
                price={Number(itemCard.accomodation_info[0].price)}
              />
            );
          })}
        </InfoLayout>
      </div>
      <PaginetionContour updateOffset={updateOffset} moveToTop={moveToTop} />
    </div>
  );
};

const InfoLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default ContentBoxInfo;
