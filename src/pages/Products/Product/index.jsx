import { Link } from "react-router-dom";
import styled from "styled-components";
import "boxicons";

const Product = () => {
  return (
    <>
      <ProdutoContainer>
        <ProdutoBreadCrumps>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to={"/products"}>Productos</Link>
            </li>
            <li>/</li>
            <li>
              <Link to={"/categorias/tenis"}>Tênis</Link>
            </li>
            <li>/</li>
            <li>
              <Link to={"/categorias/tenis/nike"}>Nike</Link>
            </li>
            <li>/</li>
            <li>Tênis Nike Revolution Next Nature Masculino </li>
          </ul>
        </ProdutoBreadCrumps>
        <ProdutoCarrousel>gakdnldaskn</ProdutoCarrousel>
        <ProdutoInfo>
          <h2>NOME DO PRODUTO</h2>
          <span>Casual | Nike | REF: 2356895</span>
          <div className="avaliacoes">
            <div className="estrelas">
              <box-icon type="solid" name="star" color="#ffaa00"></box-icon>
              <box-icon type="solid" name="star" color="#ffaa00"></box-icon>
              <box-icon type="solid" name="star" color="#ffaa00"></box-icon>
              <box-icon type="solid" name="star" color="#ffaa00"></box-icon>
              <box-icon name="star" color="#ffaa00"></box-icon>
            </div>

            <div className="pontos">
              ({`4.7`}
              <box-icon type="solid" name="star"></box-icon>)
            </div>

            <div className="comentarios">{`(90 Avaliações)`}</div>
          </div>
        </ProdutoInfo>
      </ProdutoContainer>
    </>
  );
};

const ProdutoContainer = styled.div`
  background-color: #f9f8fe;
  overflow: hidden;
  padding: 0 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 0 40px;
`;

const ProdutoBreadCrumps = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;

  & ul {
    display: flex;
    gap: 8px;

    & li {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.25px;
      color: #474747;
      &:first-child {
        font-weight: bold;
      }
      & a {
        color: currentColor;
      }
    }
  }
`;

const ProdutoCarrousel = styled.div`
  width: 700px;
  border: 1px solid red;
`;

const ProdutoInfo = styled.div`
  flex: 1;
  border: 1px solid green;

  & h2 {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1px;
    color: var(--dark-gray);
    margin-bottom: 10px;
    + span {
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.5px;
      margin-bottom: 10px;
      color: #666666;
    }
  }

  & .avaliacoes {
    display: flex;
    align-items: center;

    & .estrelas {
      display: flex;
      align-items: center;
      gap: 5px;

      & box-icon {
        fill: var(--WARNING);
      }
    }

    & .pontos {
      display: flex;
      align-items: center;
      & box-icon {
        fill: var(--WARNING);
      }
    }
  }
`;

export default Product;
