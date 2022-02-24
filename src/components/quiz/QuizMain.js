import React, { Component, useState, useEffect } from 'react';
import { withCookies, useCookies } from "react-cookie";
import QuizApp from "./Quiz";
import Cookies from 'js-cookie';
import QuizProfile from './QuizProfile';
// import QuizApp from './components/QuizApp';
import QuizIntroPage from './QuizIntroPage';

const QuizMain = () => {
    const [cookies, setCookie] = useCookies();
    const isLogged = cookies.Name ? true : false
    const hasResults = cookies.Result ? true : false

    const [auth, setAuth] = useState(false);

    const readCookie = () => {
      if (isLogged) {
        setAuth(true);
      }
    }
  
    useEffect(() => {
      readCookie();
    }, []) 

    return (
        <div>
          <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" />
          </head>
          {(isLogged && hasResults) && <QuizProfile />}
          {/* {!cookies.Result && <QuizApp />} */}
          {(!hasResults)&& <QuizApp />}
        </div>
    );
}

export default withCookies(QuizMain);