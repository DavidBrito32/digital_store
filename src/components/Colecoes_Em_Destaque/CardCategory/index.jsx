/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const CardCategory = ({subTitle, Imagem}) => {
  return (
    <>
      <Container>
        <ImageContainer>
          <Image src={Imagem} alt={subTitle} />
        </ImageContainer>
        <SubTitle>{subTitle}</SubTitle>
      </Container>
    </>
  );
};

const Container = styled.div`
margin-top: 10px;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition-duration: 200ms;
  cursor: pointer;

    &:hover{
      scale: 1.1;
    }

`;

const ImageContainer = styled.div`
  width: 104px;
  height: 104px;
  background-color: var(--light-gray-3);
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  display: block;
  width: 90%;
  height: 90%;
`;

const SubTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.75px;
  text-align: center;
`;

export default CardCategory;
