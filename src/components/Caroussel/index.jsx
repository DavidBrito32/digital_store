/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import tenis1 from "./assets/Caroussel/Tenis1.png";
import tenis2 from "./assets/Caroussel/Tenis2.png";
import tenis3 from "./assets/Caroussel/Tenis3.png";
import { useEffect, useState } from "react";

const Caroussel = () => {
  const [itemAtivo, setItemAtivo] = useState(0);
  const [banners, setBanners] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true)
    // await fetch(`http://localhost:3000/banners`)
    // .then((response) => response.json())
    // .then((result) => setBanners(result))
    // .catch (e => {
    //   console.log(`DEU ERRO ${e.response}`);
    // })
    // .finally(()=>{
    //   setIsLoading(false)
    // })
    try{
      const request = await fetch(`http://localhost:3000/banners`);
      setBanners(await request.json());
    }catch (e){
      console.log(e.response);
    }

    setIsLoading(false)
  }
  useEffect(()=>{
    getData();
  },[])

  const alteraImage = (image) => {
    if(image === "tenis1"){
      return tenis1;
    }else if(image === "tenis2"){
      return tenis2
    }else if(image === "tenis3"){
      return tenis3
    }
  }

  return (
    <>
      <CarousselContainer>
        <CarousselItems $slide={itemAtivo} $largura={banners.length}>
          {isLoading && <p>carregando dados...</p>}
          {banners.map((banner, index) => (
              <CarousselItem key={index}>
                <CarousselContent>
                  <CarousselSupTitle>
                    {banner.supTitle}
                  </CarousselSupTitle>

                  <CarousselTitle>{banner.title}</CarousselTitle>

                  <CarousselDescription>
                    {banner.description}
                  </CarousselDescription>

                  <CarousselButton>{banner.buttonText}</CarousselButton>
                </CarousselContent>
                <CarousselImage src={alteraImage(banner.image)} />
              </CarousselItem>
          ))}
        </CarousselItems>
        <CarousselPagination>
          {banners.map((item, index) => 
            (<CarousselPaginationPill
              key={index} 
              className={itemAtivo === index ? "active" : ""}
              onClick={() => setItemAtivo(index)}
            />              
            ))
          }
        </CarousselPagination>
      </CarousselContainer>
    </>
  );
};

const CarousselContainer = styled.div`
  //---------VARIAVEIS---------------
  --Yellow: #f6aa1c;
  --DarkGray: #1f1f1f;
  --DarkGray2: #474747;
  --Pink: #c92071;
  --PinkHover: #991956;
  --LightGray: #f5f5f5;
  --LightGray2: #cccccc;
  --letter-spacing: 0.75px;
  //---------------------------------
  position: relative;
  background-color: var(--LightGray);
  padding: 80px 0;
  overflow: hidden;

  @media only screen and (max-width: 480px){
    overflow-x: initial;
  }
`;

const CarousselItems = styled.div`
  display: flex;
  width: calc(100vw * ${(props) => props.$largura || 1});
  position: relative;
  left: calc(-100vw * ${(props) => props.$slide || 0});
  transition-duration: 400ms;
`;

const CarousselItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 100px;
  width: 100vw;

  @media only screen and (max-width: 480px){
      flex-direction: column-reverse;
      padding: 0 10px;
    }
  
    @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding: 0 10px;
  }


  
`;

const CarousselContent = styled.div`
  width: 45%;
  @media only screen and (max-width: 768px){
      width: 100%;
      margin: 30px 0;
    }
`;

const CarousselSupTitle = styled.h6`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: var(--letter-spacing);
  color: var(--Yellow);

    
  @media only screen and (max-width: 480px){
      font-size: 14px;
      letter-spacing: none;
      text-align: center;
      color: var(--Pink);
      margin-top: 10px;
    }
`;

const CarousselTitle = styled.h2`
  font-weight: 800;
  font-size: 64px;
  line-height: 66px;
  color: var(--DarkGray);
  margin: 20px 0;

  @media only screen and (max-width: 480px){
      font-size: 40px;
      text-align: center;
      line-height: 50px;
    }

    @media only screen and (min-width: 480px) and (max-width: 1024px){
      font-size: 50px;
    }
`;

const CarousselDescription = styled.p`
  font-size: 18px;
  line-height: 34px;
  letter-spacing: var(--letter-spacing);
  color: var(--DarkGray2);
  margin-bottom: 40px;

  
  @media only screen and (max-width: 768px){
      width: 100%;
      font-size: 14px;
    }
`;

const CarousselButton = styled.button`
  width: 220px;
  height: 48px;
  border-radius: 5px;
  background-color: var(--Pink);
  color: var(--LightGray);
  font-weight: 700;
  letter-spacing: var(--letter-spacing);
  cursor: pointer;
  transition-duration: 200ms;
  &:hover {
    background-color: var(--PinkHover);
  }

    
  @media only screen and (max-width: 480px){
      width: 100%;
    }
`;

const CarousselImage = styled.img`
  transform: rotate(-10deg);
  flex: 1;
  object-fit: none;

  @media only screen and (max-width: 480px){
      width: 80vw;
      margin: 0 auto;
      flex: none;
      display: block;
      object-fit: contain;
    }

  @media only screen and (min-width: 481px) and (max-width: 768px){
    width: 50vw;
    object-fit: contain;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px){
    width: 50vw;
    object-fit: contain;
  }
`;

const CarousselPagination = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const CarousselPaginationPill = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--LightGray2);
  transition: all ease 200ms;
  cursor: pointer;

  &.active {
    background-color: var(--Pink);
  }

  &:active {
    scale: 0.9;
  }
`;

export default Caroussel;
