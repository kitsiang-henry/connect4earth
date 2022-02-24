import React from 'react';
import { useCookies } from "react-cookie";
import Result from './components/Result';
// import AuthApi from '../../AuthApi';

const QuizProfile = () => {
    const [cookies, setCookie] = useCookies();
    // const Auth = React.useContext(AuthApi);
    
    return (
        <div>
            <Result quizResult={cookies.Result} quizScore={cookies.Score} isLogged={cookies.Result?true:false}/>
        </div>
    )
};

export default QuizProfile;