/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const Cart = ({openCart}) => {
  return (
    <>
      <CartContainer className={openCart && "active"}>
        <CartTitle>Meu Carrinho</CartTitle>

        <CartList>
          <CartListItem>
            <CardImgContainer>
              <CartItemImg src={""} alt={"imagem"} />
            </CardImgContainer>
            <CartItemTitle>
              {" Produto Lorem ipsum quod quo, voluptates aliquam cumque esse."}
            </CartItemTitle>
            <CartPriceProduct>
              {"R$ 219,00"}
              <CartPriceDiscount>{"219,00"}</CartPriceDiscount>
            </CartPriceProduct>
          </CartListItem>
        </CartList>

        <CardTotal>
          Valor Total: <CardValue>{"R$: 219,00"}</CardValue>
        </CardTotal>

        <CardActions>
          <CardEmpty>Esvaziar</CardEmpty>
          <CardButton>Ver Carrinho</CardButton>
        </CardActions>
      </CartContainer>
    </>
  );
};

const CartContainer = styled.div`
  width: 0px;
  height: 0px;
  background-color: white;
  position: absolute;
  top: 4.5rem;
  right: 100px;
  transition-duration: 300ms;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  box-shadow: 0px 4px 25px 0px #00000026;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;

  &.active {
    width: 315px;
    height: 454px;
    visibility: visible;
    opacity: 1;

      @media only screen and (max-width: 480px){
        width: 95%;
        top: 8vh;
        right: 2%;
      }

      @media only screen and (min-width: 480px) and (max-width: 768px){
        right: 3%;
      }

  }

`;

const CartTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.75px;
  text-align: left;
`;

const CartList = styled.ul`
  width: 100%;
  height: 246px;
  border-top: 1px solid var(--pink);
  border-bottom: 1px solid var(--pink);
  overflow-y: auto;
`;

const CartListItem = styled.li`
  width: 100%;
  margin: 8px 0;
  height: 93px;
  border: 1px solid black;
  display: flex;
  box-sizing: border-box;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
`;

const CardImgContainer = styled.div`
  width: 71px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--spacial-blue);
`;

const CartItemImg = styled.img`
  width: 51px;
  height: 26px;
  object-fit: contain;
  display: block;
`;

const CartItemTitle = styled.h3`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  height: 40px;
  overflow: hidden;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.75px;
  text-align: left;
  color: var(--dark-gray);
  width: 60%;
  text-overflow: ellipsis;
`;

const CartPriceProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.75px;
  text-align: center;
  gap: 20px;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const CartPriceDiscount = styled.h2`
  font-size: 12px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.75px;
  text-align: center;
  text-decoration: line-through;
  font-style: italic;
  color: var(--light-gray-2);
`;

const CardTotal = styled.h5`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.75px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardValue = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.75px;
  color: var(--pink);
`;

const CardActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 480px){
    justify-content: space-between;
  }
`;

const CardEmpty = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  text-align: left;
  text-decoration: underline;
  text-underline-offset: 3px;
  border: none;
  background-color: transparent;

  @media only screen and (max-width: 480px){
    font-size: 12px;
  }

`;

const CardButton = styled.button`
  width: 125px;
  height: 40px;
  border: none;
  cursor: pointer;
  background-color: var(--pink);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.75px;
  text-align: center;
  color: var(--light-gray-3);

    &:active{
        scale: .97;
    }

    @media only screen and (max-width: 480px){
      width: 100px;
      font-size: 12px;
    }
`;

export default Cart;
