/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";

const ProductCard = ({ discount }) => {
  return (
    <>
      <Product>
        <ContainerImage>
          {true && <Discount>{"30% OFF"}</Discount>}
          <Image
            src="https://gifs.eco.br/wp-content/uploads/2023/07/imagens-de-tenis-nike-png-0.png"
            alt="image"
          />
        </ContainerImage>
        <Category>Tênis</Category>
        <Title>K-Swiss V8 - Masculino</Title>
        <ContainerPrice>
          <OldPrice>$200</OldPrice>
          <Price>$100</Price>
        </ContainerPrice>
      </Product>
    </>
  );
};

const Product = styled.li`
  width: 295px;
  height: 440px;
  display: flex;
  flex-direction: column;

    @media only screen and (max-width: 350px){
        width: 100%;
    }

    @media only screen and (max-width: 480px){
        width: 147px;
        height: 310px;
    }
`;

const ContainerImage = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
  background-color: var(--light-gray-3);
  transition-duration: 400ms;

  @media only screen and (max-width: 350px){
        width: 100%;
        height: 80%;
    }

  @media only screen and (max-width: 480px){
   height: 60%;
  }
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 80%;
  object-fit: contain;
  display: block;
  transition-duration: 400ms;
`;

const Discount = styled.span`
  width: 96px;
  height: 32px;
  border-radius: 29px;
  background-color: var(--WARNING);
  color: var(--dark-gray-2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 400ms;
`;

const Category = styled.h4`
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.75px;
  text-align: left;
  color: var(--light-gray);
  transition-duration: 400ms;
`;

const Title = styled.h3`
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0.75px;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition-duration: 400ms;

  @media only screen and (max-width: 480px){
    font-size: 14px;
    line-height: 14px;
  }
`;

const ContainerPrice = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  transition-duration: 400ms;
`;

const OldPrice = styled.h3`
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0.75px;
  text-align: left;
  text-decoration: line-through;
  color: var(--light-gray);
  transition-duration: 400ms;
  
  @media only screen and (max-width: 480px){
    font-size: 14px;
  }
`;

const Price = styled.h3`
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0.75px;
  text-align: left;
  color: var(--dark-gray);
  transition-duration: 400ms;

  @media only screen and (max-width: 480px){
    font-size: 14px;
  }
`;
export default ProductCard;
