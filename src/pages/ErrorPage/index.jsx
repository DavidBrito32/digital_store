import { styled } from 'styled-components';
import bg from './assets/art.svg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <>
            <ErrorContainer>
                <ErrorText>
                    <ErrorTitle>Desculpe, a pagina solicitada foi removida ou pode estar em manutenção</ErrorTitle>
                    <Link to={"/"}>Votlar a segurança</Link>
                </ErrorText>
                <ErrorImage></ErrorImage>
            </ErrorContainer>
        </>
    )
}

const ErrorContainer = styled.div`
    width: 100%;
    height: calc(100vh - 3vh);
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 480px){
        flex-direction: column;
    }

`;

const ErrorText = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    flex-direction: column;

        & a{
            width: 200px;
            height: 35px;
            border-radius: 8px;
            background-color: var(--pink);
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-weight: bold;
        }

    @media only screen and (max-width: 480px){
        width: 100%;
        padding: 0 10px;
    }
`;

const ErrorTitle = styled.h1`
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 2px;

        @media only screen and (max-width: 480px){
            font-size: 16px;
        }
`;

const ErrorImage = styled.div`
    width: 50%;
    height: 100%;
    background: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media only screen and (max-width: 480px){
        width: 100%;
        background-size: cover;
    }
    
`;

export default ErrorPage;