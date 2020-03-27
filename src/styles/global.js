import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

 * {
     margin: 0;
     padding: 0;
     outline: 0;
     box-sizing: border-box;
 }

 *:focus{
     outline: 0;
 }

 html, body, #root {
     height: 100%;
 }

 body{
     -webkit-font-smoothing: antialiased;
     margin: 0;
 }

 body, input, button {
     font-size: 14px;
     font-family: Roboto, sans-serif;
 }

 a {
     text-decoration: none;
 }

 ul {
     list-style: none;
 }

 button {
     cursor: pointer;
 }


 table{
    width: 100%;
    text-align: center;
    margin: 20px auto;
    border-collapse:separate; 
    border-spacing: 0 1em;
 }



 thead {
    color: #fff;
    width: 100%;
    margin-bottom: 10px;

    tr{
        width: 100%;
        border-radius: 15px;
        margin-top: 10px;
    }

    tr:last-child th:last-child {  
        text-align: right; 
        padding-right: 10px;   
        width: 50px;
        min-width: 30px;
        max-width: 50px; 
        word-break: break-all;
    }

    tr:first-child th:first-child { 
        text-align: left; 
        padding-left: 10px;
        width: 100px;
        min-width: 100px;
        max-width: 100px;
        word-break: break-all;
    }

    th{
        width: 180px;
    }
 }

 tbody{
    color: #fff;
    width: 100%;
    margin-top: 10px;

    tr{
        width: 100%;
        background: rgba(0,0,0,0.3);
        border: 1px solid #000;
        border-radius: 15px;
        height: 50px;
        margin-top: 10px;
    }

    tr td:first-child { 
        border-top-left-radius: 4px; 
        border-bottom-left-radius: 4px;   
        width: 50px;
        min-width: 30px;
        max-width: 50px;
        word-break: break-all; 
    }

    tr td:last-child { 
        border-top-right-radius: 4px; 
        border-bottom-right-radius: 4px; 
        text-align: right;
        padding-right: 20px; 
        width: 100px;
        min-width: 100px;
        max-width: 100px;
        word-break: break-all;
    }


    td{
        width: 180px;
        padding: 5px;
        text-align: center;
    }
 }

`;
