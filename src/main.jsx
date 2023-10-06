import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components';

export const Estilo =createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;
    font-family: 'Inter', sans-serif;
  }

  :root{
    --pink: #c92071;
    --red: #EE4266;
    --dark-gray: #1F1F1F;
    --dark-gray-2: #474747;
    --WARNING: #F6AA1C;
    --YellowGreen:#E7FF86;
    --light-gray: #8F8F8F;
    --light-gray-2: #CCCCCC;
    --light-gray-3: #F5F5F5;
    --light-gray-3-hover: #ece9e9;
    --spacial-blue: #D8E3F2;
;


  }

`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Estilo />
    <App />
  </React.StrictMode>,
)
