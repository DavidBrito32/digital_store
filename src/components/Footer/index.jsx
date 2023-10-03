import { styled } from "styled-components";
import { Link } from "react-router-dom";
import facebookIcon from "./assets/facebook-icon.svg";
import digitalLogo from "./assets/digital-logo.svg";
import instaIcon from "./assets/insta-icon.svg";
import twitterIcon from "./assets/twitter-icon.svg";

const Rodape = styled.footer`
  background-color: #1f1f1f;
  position: relative;
  bottom: 0;
  padding: 60px 104px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & a,
  h1,
  p,
  small,
  h4 {
    color: #ffffff;
  }

  & .links {
    display: flex;
    border-bottom: 1px solid #ffffff30;
    align-items: flex-start;
    padding-bottom: 2.25em;

    & section {
      flex: 1;
    }

    & .business {
      & h1 {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 36px;
        font-weight: 600;
      }

      & p {
        font-size: 14px;
        font-weight: 400;
        line-height: 26px;
        text-align: justify;
        padding: 2.7em 0;
      }

      & nav ul {
        display: flex;
        gap: 2em;
      }
    }

    & .infos {
      display: flex;
      justify-content: center;

      & div {
        display: flex;
        flex-direction: column;
        gap: 2em;

        & nav ul {
          display: flex;
          flex-direction: column;
          gap: 6px;

          & li {
            line-height: 26px;
          }
        }
      }
    }

    & .categories {
      display: flex;
      justify-content: center;

      & div {
        display: flex;
        flex-direction: column;
        gap: 2em;

        & nav ul {
          display: flex;
          flex-direction: column;
          gap: 6px;

          & li {
            line-height: 26px;
          }
        }
      }
    }

    & .contact {
      & div {
        display: flex;
        flex-direction: column;
        gap: 2em;

        & nav ul {
          display: flex;
          flex-direction: column;
          gap: 6px;

          & li {
            line-height: 26px;
          }
        }
      }
    }
  }

  & .copy {
    position: absolute;
    bottom: 5%;
  }
`;

const Footer = () => {
  return (
    <>
      <Rodape>
        <div className="links">
          <section className="business">
            <h1>
              <img src={digitalLogo} />
              Digital Store
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, eius nulla mollitia excepturi eligendi hic
              sapiente nostrum saepe ea delectus aspernatur.
            </p>
            <nav>
              <ul>
                <li>
                  <Link>
                    <img src={facebookIcon} />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={instaIcon} />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={twitterIcon} />
                  </Link>
                </li>
              </ul>
            </nav>
          </section>

          <section className="infos">
            <div>
              <h4>Informação</h4>
              <nav>
                <ul>
                  <li>
                    <Link>Sobre Drip Store</Link>
                  </li>
                  <li>
                    <Link>Segurança</Link>
                  </li>
                  <li>
                    <Link>Wishlist</Link>
                  </li>
                  <li>
                    <Link>Blog</Link>
                  </li>
                  <li>
                    <Link>Trabalhe conosco</Link>
                  </li>
                  <li>
                    <Link>Meus Pedidos</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </section>

          <section className="categories">
            <div>
              <h4>Categorias</h4>
              <nav>
                <ul>
                  <li>
                    <Link>Camisetas</Link>
                  </li>
                  <li>
                    <Link>Calças</Link>
                  </li>
                  <li>
                    <Link>Bonés</Link>
                  </li>
                  <li>
                    <Link>Headphones</Link>
                  </li>
                  <li>
                    <Link>Tênis</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </section>

          <section className="contact">
            <div>
              <h4>Contato</h4>
              <nav>
                <ul>
                  <li>
                    <Link>
                      Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza -
                      CE, 60150-161
                    </Link>
                  </li>
                  <li>
                    <Link>&#40;85&#41; 3051-3411</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </div>
        <small className="copy">@ 2022 Digital College</small>
      </Rodape>
    </>
  );
};

export default Footer;
