/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const Card = ({title, image, discount}) => {
  return (
    <>
      <CardItems>
        <Pill>
          <PillTitle>{discount}</PillTitle>
        </Pill>
        <TitleCard>{title}</TitleCard>
        <CardButton>{"Comprar"}</CardButton>
        <FigCard src={image} alt="Camisa_Star_Wars" />
      </CardItems>
    </>
  );
};

const CardItems = styled.div`
  width: 25.3rem;
  height: 15.6rem;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  justify-content: space-between;
  padding: 25px;
  overflow: hidden;
  background-color: var(--spacial-blue);

    @media only screen and (max-width: 480px){
      width: 95%;
      margin: 0 auto;
    }
`;

const TitleCard = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.99px;
  text-align: left;
  width: 52%;
`;

const Pill = styled.span`
  width: 100px;
  height: 33px;
  border-radius: 29px;
  background-color: var(--YellowGreen);
`;

const PillTitle = styled.h3`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.75px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: var(--dark-gray-2);
`;

const CardButton = styled.button`
  width: 9.5rem;
  height: 3rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--pink);
  border: none;
  font-weight: bold;
  cursor: pointer;
  background-color: var(--light-gray-3);
  z-index: 1;
  transition-duration: 200ms;
    &:active{
        scale: .97;
    }
    &:hover{
        background-color: var(--light-gray-3-hover);
    }
`;

const FigCard = styled.img`
    display: block;
    width: 16rem;
    height: 15rem;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
`

export default Card;