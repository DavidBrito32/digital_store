import styled from "styled-components";

const HeaderAuth = () => {  

    return (
        <>
            <AuthHeader>
                <div className="logo">
                    <div className="logo-icon"></div>
                        Digital Store
                </div>
            </AuthHeader>
        </>
    )
}

const AuthHeader = styled.header`
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
`;

export default HeaderAuth;