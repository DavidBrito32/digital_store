import { styled } from "styled-components";
import Camisa from "./assets/Camisa.svg";
import Card from "./Card";
import Tenis from "./assets/Tenis.svg";
import HeadPhone from "./assets/Headphone.svg";
import CardCategory from "./CardCategory";

import camisaCategory from "./assets/camisaCategory.svg";
import Calcacategory from "./assets/CalcaCategory.svg";
import Bone from "./assets/boneCategory.svg";
import AirPodsMax from "./assets/fone.svg";
import TenisCategory from "./assets/tenisCategory.svg";

const Colecoes = () => {
  const colections = [
    {
      id: 1,
      title: "Novo Drop Supreme",
      discount: "50% OFF",
      image: Camisa,
    },
    {
      id: 2,
      title: "Coleção Adidas",
      discount: "35% OFF",
      image: Tenis,
    },
    {
      id: 3,
      title: "Novo Beats Bass",
      discount: "20% OFF",
      image: HeadPhone,
    },
  ];

  return (
    <>
      <ContainerColecao>
        <SupTitle>Coleções em destaque</SupTitle>
        <CardsContainer>
          {colections.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              discount={item.discount}
              image={item.image}
            />
          ))}
        </CardsContainer>
        <SupTitle $Mtop={"100px"} $Talign={"center"}>
          Categorias em Destaque
        </SupTitle>
        <ContainerCategory>
          <CardCategory subTitle={"Camisas"} Imagem={camisaCategory} />
          <CardCategory subTitle={"Calças"} Imagem={Calcacategory} />
          <CardCategory subTitle={"Bonés"} Imagem={Bone} />
          <CardCategory subTitle={"Headphones"} Imagem={AirPodsMax} />
          <CardCategory subTitle={"Tênis"} Imagem={TenisCategory} />
        </ContainerCategory>
      </ContainerColecao>
    </>
  );
};

const ContainerColecao = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 40px 100px;

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;

const SupTitle = styled.h3`
  font-size: ${(props) => props.$size || "24px"};
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0.75px;
  text-align: ${(props) => props.$Talign || "left"};
  margin-top: ${(props) => props.$Mtop || 0};
  margin-bottom: 20px;
`;

const CardsContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;

  @media only screen and (max-width: 768px) {
    padding: 0;
    justify-content: center;
  }
`;

const ContainerCategory = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 45px;
  align-items: center;
  overflow: hidden;

  @media only screen and (max-width: 480px) {
    width: 80%;
    padding: 0 200px 0 350px;
    margin: 0 auto;
    overflow-x: initial;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    width: 100%;
  }
`;

export default Colecoes;
