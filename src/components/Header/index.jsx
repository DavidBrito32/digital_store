import { styled } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import cart from "./assets/Cart_items.svg";
import "boxicons";
import { useState } from "react";
import Cart from "./Cart";

const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 6.5rem;
  position: sticky;
  top: 0;
  transition-duration: 400ms;
  z-index: 15;
  background-color: white;

  & .Search_Oculto {
    display: none;
    transition-duration: 400ms;
  }

  & .burguer {
    width: 25px;
    height: 20px;
    display: none;
    cursor: pointer;
    position: relative;
    transition-duration: 400ms;

    & span {
      width: 100%;
      height: 4px;
      border-radius: 8px;
      background-color: black;
      transition: all ease-in-out 200ms;
    }

    &.active {
      & span {
        position: absolute;

        &:nth-child(1) {
          display: none;
        }
        &:nth-child(2) {
          top: 50%;
          transform: rotate(45deg);
        }
        &:nth-child(3) {
          top: 50%;
          transform: rotate(-45deg);
        }
      }
    }
  }

  & .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 36px;
    font-weight: 600;
    color: var(--pink);
    transition-duration: 400ms;

    & .logo-icon {
      width: 33px;
      height: 33px;
      border-radius: 5px;
      background-color: var(--pink);
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-top: 4px solid #ffffff;
        border-right: 4px solid #ffffff;
        top: 10px;
        left: 3px;
        transform: rotate(45deg);
      }

      &::before {
        content: "";
        width: 8px;
        height: 3px;
        position: absolute;
        background-color: #ffffff;
        top: 21px;
        left: 18px;
        animation: piscar 400ms linear infinite;
        -webkit-animation: piscar ease-in-out infinite 1.5s;
        -moz-animation: piscar ease-in-out infinite 1.5s;
        -ms-animation: piscar ease-in-out infinite 1.5s;
      }
    }
  }

  & .buscar {
    flex: 1;
    margin-left: 30px;
    margin-right: 30px;
    background-color: #47474710;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    transition-duration: 400ms;

    & input {
      width: 100%;
      height: 60px;
      background-color: transparent;
      padding: 16px;
      border: 2px solid transparent;
      border-radius: 5px;
      transition-duration: 200ms;
      font-size: 16px;
      letter-spacing: 0.75px;

      &:focus {
        & + box-icon {
          fill: var(--pink);
        }
        border-color: var(--pink);
      }
    }

    & box-icon {
      transition-duration: 00ms;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 30px;
      fill: #47474740;
      cursor: pointer;
      width: 30px;
      height: 30px;
      &:hover {
        fill: var(--pink);
      }
    }
  }

  & .acoes {
    display: flex;
    align-items: center;
    gap: 16px;
    transition-duration: 400ms;

    & a {
      display: block;
      line-height: 40px;
      color: #474747;
      font-size: 14px;
      &.underline {
        text-decoration: underline;
      }

      &.btn {
        padding: 0 16px;
        color: #ffffff;
        font-weight: bold;
        border-radius: 5px;
        background-color: var(--pink);
      }
    }
  }

  & nav {
    width: 100%;
    margin-top: 40px;

    & ul {
      width: 100%;
      display: flex;
      gap: 32px;
      transition-duration: 400ms;
      overflow: hidden;

      & h3 {
        display: none;
      }

      & a {
        color: #474747;
        transition: all ease-in-out 100ms;
        line-height: 26px;
        display: block;

        &:hover {
          color: var(--pink);
        }

        &.active {
          color: var(--pink);
          font-weight: bold;
          border-bottom: 3px solid var(--pink);
        }
      }
    }
  }

  & .carrinho {
    position: relative;
    margin-left: 30px;
    transition-duration: 400ms;
    & img{
      cursor: pointer;

        &:active{
          scale: 0.97;
        }
    }

    & span {
      position: absolute;
      line-height: 16px;
      min-width: 16px;
      top: -4px;
      left: 16px;
      font-weight: bold;
      border-radius: 50%;
      background-color: var(--red);
      padding: 0 4px;
      font-size: 10px;
      border-radius: 10px;
      text-align: center;
      color: white;
    }
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 20px 0px;
    justify-content: center;

    & .burguer {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      position: absolute;
      left: 20px;
    }

    & .Search_Oculto {
      display: block;
      position: absolute;
      right: 55px;
      cursor: pointer;

      &:active {
        scale: 0.97;
        fill: var(--pink);
      }
    }

    & .logo {
      font-size: 19px;

      & .logo-icon {
        width: 25px;
        height: 25px;

        &::after {
          width: 5px;
          height: 5px;
          top: 8px;
        }

        &::before {
          width: 6px;
          height: 3px;
          top: 18px;
          left: 15px;
        }
      }
    }

    & .buscar {
      flex: none;
      width: 95%;
      margin: 20px auto 0px;
      position: absolute;
      visibility: hidden;
      opacity: 0;
      transition: all ease-in-out 400ms;
      height: 60px;
      top: 0;
      z-index: 11;

      &.active {
        /* position: relative; */
        visibility: visible;
        top: 12vh;
        opacity: 1;
        & box-icon {
          top: 50%;
          right: 10px;
        }
      }
    }

    & .acoes {
      & a {
        position: absolute;
        bottom: -450px;
        left: 0;
      }

      & .btn {
        width: 65%;
        height: 40px;
        text-align: center;
        left: -50%;
        bottom: -600px;
        visibility: hidden;
        opacity: 0;
        transition-duration: 400ms;
        &.active {
          z-index: 11;
          left: 7%;
          visibility: visible;
          opacity: 1;
        }
      }

      & .underline {
        width: 65%;
        height: 40px;
        text-align: center;
        left: -50%;
        bottom: -650px;
        visibility: hidden;
        opacity: 0;
        transition-duration: 400ms;
        &.active {
          left: 7%;
          visibility: visible;
          opacity: 1;
          z-index: 11;
        }
      }
    }

    & nav {
      width: 100%;
      height: calc(100vh - 3.3vh);
      position: absolute;
      top: 3.3vh;
      left: 0;
      display: flex;
      justify-content: left;
      background-color: #00000080;
      overflow: hidden;
      visibility: hidden;
      opacity: 0;
      transition-duration: 400ms;
      z-index: 10;

      &.active {
        visibility: visible;
        opacity: 1;

        & ul {
          width: 80%;
        }
      }

      & ul {
        background-color: white;
        border-bottom: 2px solid gray;
        flex-direction: column;
        width: 0%;
        height: 100%;
        padding-top: 5%;
        padding-left: 5%;
        overflow: hidden;

        & a {
          display: inline;
        }

        & h3 {
          display: block;
        }
      }
    }

    & .carrinho {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    width: 100%;
    padding: 20px 0px;
    justify-content: center;

    & .burguer {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      position: absolute;
      left: 20px;
    }

    & .Search_Oculto {
      display: block;
      position: absolute;
      right: 66px;
      cursor: pointer;

      &:active {
        scale: 0.97;
        fill: var(--pink);
      }
    }

    & .logo {
      font-size: 19px;

      & .logo-icon {
        width: 25px;
        height: 25px;

        &::after {
          width: 5px;
          height: 5px;
          top: 8px;
        }

        &::before {
          width: 6px;
          height: 3px;
          top: 18px;
          left: 15px;
        }
      }
    }

    & .buscar {
      flex: none;
      width: 95%;
      margin: 20px auto 0px;
      position: absolute;
      visibility: hidden;
      opacity: 0;
      transition: all ease-in-out 400ms;
      height: 60px;
      top: 0;

      &.active {
        /* position: relative; */
        visibility: visible;
        top: 12vh;
        opacity: 1;
        & box-icon {
          top: 50%;
          right: 10px;
        }
      }
    }

    & .acoes {
      & a {
        position: absolute;
        bottom: -450px;
        left: 0;
        z-index: 11;
      }

      & .btn {
        width: 30%;
        height: 40px;
        text-align: center;
        left: -50%;
        bottom: -650px;
        visibility: hidden;
        opacity: 0;
        transition-duration: 400ms;
        &.active {
          left: 5%;
          visibility: visible;
          opacity: 1;
        }
      }

      & .underline {
        width: 30%;
        height: 40px;
        text-align: center;
        left: -50%;
        bottom: -700px;
        visibility: hidden;
        opacity: 0;
        transition-duration: 400ms;
        &.active {
          left: 5%;
          visibility: visible;
          opacity: 1;
        }
      }
    }

    & nav {
      width: 100%;
      height: calc(100vh - 3vh);
      position: absolute;
      top: 3vh;
      left: 0;
      display: flex;
      justify-content: left;
      background-color: #00000080;
      overflow: hidden;
      visibility: hidden;
      opacity: 0;
      transition-duration: 400ms;
      z-index: 10;

      &.active {
        visibility: visible;
        opacity: 1;

        & ul {
          width: 40%;
        }
      }

      & ul {
        background-color: white;
        border-bottom: 2px solid gray;
        flex-direction: column;
        width: 0%;
        height: 100%;
        padding-top: 5%;
        padding-left: 5%;

        & a {
          display: inline;
        }

        & h3 {
          display: block;
        }
      }
    }

    & .carrinho {
      position: absolute;
      top: 50%;
      right: 31px;
      transform: translateY(-50%);
    }
  }
`;

const Header = () => {
  const [burger, setBurguer] = useState(false);
  const [search, setSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const openToCart = () => {
    setOpenCart(!openCart);
    setSearch(false);
    setBurguer(false);
  };

  const alteraBurguer = () => {
    setBurguer(!burger);
    setSearch(false);
    setOpenCart(false);
  };
  const abrePesquisa = () => {
    setSearch(!search);
    setBurguer(false);
    setOpenCart(false);
  };

  return (
    <>
      <ContainerHeader>
        <div
          onClick={alteraBurguer}
          className={burger ? "burguer active" : "burguer"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="logo">
          <div className="logo-icon"></div>
          Digital Store
        </div>
        <div className="Search_Oculto" onClick={abrePesquisa}>
          <box-icon name="search"></box-icon>
        </div>
        <div className={search ? "buscar active" : "buscar"}>
          <input type="text" placeholder="Pesquisar produto..." />
          <box-icon name="search"></box-icon>
        </div>
        <div className="acoes">
          <Link
            to="/cadastro"
            className={burger ? "underline active" : "underline"}
          >
            Cadastre-se
          </Link>
          <Link to="/login" className={burger ? "btn active" : "btn"}>
            Entrar
          </Link>
          <div className="carrinho" onClick={openToCart}>
            <img src={cart} alt="carrinho" />
            <span>1</span>
          </div>
            <Cart openCart={openCart} />
        </div>
        <nav className={burger ? "active" : ""}>
          <ul>
            <h3>Paginas</h3>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Produtos</NavLink>
            </li>
            <li>
              <NavLink to="/categorias">Categorias</NavLink>
            </li>
            <li>
              <NavLink to="/meus-pedidos">Meus Pedidos</NavLink>
            </li>
          </ul>
        </nav>
      </ContainerHeader>
    </>
  );
};

export default Header;
