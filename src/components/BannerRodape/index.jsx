import { styled } from "styled-components";
import Nike from "./assets/Nike_T_Shirts.svg";

const BannerRodape = () => {
  return (
    <>
      <ContainerBanner>
        <ContainerImage>
          <Image src={Nike} alt="Tenis da Nike" />
        </ContainerImage>
        <ContainerText>
          <SupTitle>Oferta especial</SupTitle>
          <Title>Air Jordan edição de colecionador</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sit
            distinctio expedita, eaque voluptate voluptatum aliquam magnam
            blanditiis enim, quasi dignissimos quaerat obcaecati officia
            pariatur perferendis vero. Placeat, nulla natus.
          </Description>
          <Button>Ver Oferta</Button>
        </ContainerText>
      </ContainerBanner>
    </>
  );
};

const ContainerBanner = styled.div`
  width: 100%;
  height: 70vh;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 70px;
  height: auto;
  padding: 100px 0;

  @media only screen and (max-width: 480px) {
    align-items: initial;
    height: auto;
    padding: 0 10px;
    margin: 100px 0;
  }
`;

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 466px;
    height: 466px;
    background: linear-gradient(
      180deg,
      rgba(66, 0, 255, 0.25) -40.67%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 0;
    top: -30px;
    left: 45%;
    transform: translateX(-40%);
    border-radius: 50%;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 0 10px;
    margin: 30px 0;

    &::after {
      content: "";
      position: absolute;
      width: 281px;
      height: 281px;
      top: -30px;
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    &::after {
      content: "";
      position: absolute;
      width: 330px;
      height: 330px;
      top: 0px;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

const ContainerText = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 0 10px 30px 10px;
  }

  @media only screen and (min-width: 768px) {
    padding: 0 10px 30px 10px;
  }

  @media only screen and (min-width: 769px) {
    width: 40%;
    display: flex;
    flex-direction: column;
  }
`;

const SupTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  color: var(--pink);
  margin-bottom: 12px;
  letter-spacing: 1px;

  @media only screen and (max-width: 768px) {
    color: var(--WARNING);
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 50px;
  margin-bottom: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: var(--dark-gray-2);
  margin-bottom: 30px;
  text-align: justify;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 8px;
  background-color: var(--pink);
  color: white;
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;

  &:active {
    scale: 0.98;
  }
`;

const Image = styled.img`
  display: block;
  width: 35rem;
  height: 21rem;
  object-fit: contain;
  z-index: 1;

  @media only screen and (max-width: 480px) {
    width: 290px;
    height: 173px;

  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    width: 380px;
    height: 300px;
  }
`;

export default BannerRodape;
