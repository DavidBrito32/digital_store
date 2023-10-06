import { styled } from "styled-components";
import ProductCard from "./Card";

const ProductsHome = () => {
  return (
    <>
      <ProductsList>
        <Action>Produtos em alta <Ancor>Ver todos &rarr;</Ancor></Action>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsList>
    </>
  );
};

const ProductsList = styled.ul`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 0 120px;
  margin-top: 20px;
  transition-duration: 400ms;

     @media only screen and (max-width: 350px){
        padding: 0;
        gap: 10px;
    }

    @media only screen and (max-width: 480px){
        padding: 0 5px;
    }
    @media only screen and (min-width: 480px) and (max-width: 768px){
        padding: 0 20px;
    }
`;

const Action = styled.h3`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--dark-gray-2);
`;

const Ancor = styled.a`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0.75px;
  text-align: left;
  color: var(--pink);
`;

export default ProductsHome;
