import styled from 'styled-components';

export default function NewContent({ id, imgUrl, location, title, price }) {
  return (
    <NewContents>
      <ContentImage src={imgUrl} alt="New_Contents" />
      <ContentTitle>{title}</ContentTitle>
      <ContentInfo>
        <span>{location}</span>
        <span> ・ </span>
        <span>{`₩${price.toLocaleString()}`}</span>
      </ContentInfo>
      <MoreBtn>read more</MoreBtn>
    </NewContents>
  );
}

const NewContents = styled.div`
  text-align: center;
`;

const ContentImage = styled.img`
  width: 400px;
  height: 300px;
`;

const ContentTitle = styled.div`
  font-family: 'SpoqaHan Sans Neo Regular';
  font-size: 22px;
  margin-top: 35px;
`;

const ContentInfo = styled.div`
  font-family: 'SpoqaHan Sans Neo Light';
  font-size: 14px;
  margin-top: 20px;
`;

const MoreBtn = styled.button`
  background-color: white;
  font-size: 13px;
  margin-top: 20px;
  border: none;
  font-family: 'Abel Regular';
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 5px;
`;
