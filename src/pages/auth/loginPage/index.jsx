/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "boxicons";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import um from "./assets/um.svg";
import dois from "./assets/dois.svg";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, setValue, reset } = useForm();

  const login = (data) => {
    console.log(data);

    // fetch('url', {
    //     method: "POST",
    //     headers: {
    //     "content-type": "application/json"
    //     },
    //     body: data
    // });
  };

  const setDados = () => {
    setValue("email", "melissa@gmail.com");
    setValue("password", "adcd1234");
    setTimeout(() => {
      reset();
    }, 2000);
  };

  return (
    <>
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit(login)}>
          <h3>Acesse sua conta:</h3>
          <p>
            Novo Cliente? então Registre-se <Link onClick={setDados}>aqui</Link>
          </p>
          <div className="input-field">
            <input
              type="text"
              id="email"
              name="email"
              required
              placeholder="Insira seu login ou email"
              {...register("email", { required: true })}
            />
            <label htmlFor="email">Login: *</label>
          </div>
          <div className="input-field">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              placeholder="Insira sua senha"
              {...register("password", { required: true })}
            />
            <label htmlFor="password">Senha: *</label>
            <box-icon
              name={showPassword ? "show" : "hide"}
              onClick={() => setShowPassword(!showPassword)}
            ></box-icon>
          </div>
          <Link to={"/auth/remenber-password"}>Esqueci minha senha</Link>
          <button>Acessar conta</button>
          <div className="social-login">
            Ou faça login com
            <box-icon type="logo" name="gmail"></box-icon>
            <box-icon
              name="facebook-circle"
              type="logo"
              color="#000000"
            ></box-icon>
          </div>
        </LoginForm>
        <LoginBG src={um} />
        <LoginBG src={um} />
      </LoginContainer>
    </>
  );
};

const LoginContainer = styled.div`
  padding: 120px 100px 160px 100px;
  background: linear-gradient(#b5b6f2, #efefff);
  display: flex;
  align-items: center;
`;

const LoginForm = styled.form`
  background-color: white;
  border-radius: 4px;
  padding: 30px;
  width: 500px;

  & h3 {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1px;
    color: #1f1f1f;
    margin-bottom: 20px;
  }

  & p {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
    color: var(--dark-gray-2);
    margin-bottom: 30px;

    & a {
      display: initial;
      margin: 0;
    }
  }

  & .input-field {
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    margin-bottom: 20px;
    & input {
      height: 60px;
      border-radius: 4px;
      background-color: #47474710;
      padding-left: 16px;
      border: none;

      &::placeholder {
        color: transparent;
        transition-duration: 200ms;
      }

      &:focus::placeholder {
        color: initial;
      }

      &:focus,
      &:valid {
        + label {
          bottom: 60px;
          transform: scale(0.7, 0.7);
          left: 0;
        }
      }
    }

    & label {
      font-weight: bold;
      color: var(--dark-gray-2);
      font-size: 16px;
      letter-spacing: 0.75px;
      line-height: 30px;
      position: absolute;
      bottom: 15px;
      left: 16px;
      transition-duration: 200ms;
    }

    & box-icon {
      position: absolute;
      bottom: 18px;
      right: 16px;
      opacity: 0.6;
      cursor: pointer;
      transition-duration: 200ms;

      &[name="show"] {
        opacity: 1;
      }

      &&[name="hide"] {
        opacity: 1;
      }
    }
  }

  & a {
    display: block;
    margin: 30px 0;
    color: var(--dark-gray-2);
    text-decoration: underline;
    transition-duration: 200ms;

    &:hover {
      color: var(--pink);
    }
  }

  & button {
    width: 100%;
    height: 48px;
    border-radius: 4px;
    background-color: var(--pink);
    cursor: pointer;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.75px;
    text-align: center;
    margin-bottom: 30px;
    transition-duration: 200ms;
    &:hover {
      background-color: var(--dark-pink);
    }
  }
`;

const LoginBG = styled.img``;

export default LoginPage;
