import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import AuthApi from '../../../AuthApi';
import Cookies from 'js-cookie';
import { withCookies, useCookies } from "react-cookie";
import { Card, CardContent, Typography, Box, Container } from '@material-ui/core';
import resultsRank from "./ResultsRankMap";
import Pledges from '../Pledges';
import QuizLeaderboard from '../QuizLeaderboard';
import TextField from '@mui/material/TextField';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Button } from '@material-ui/core';
import ResultsRankChart from '../ResultsRankChart';
import Alert from '@mui/material/Alert';
import planet_protector from '../../../assets/quiz/planet_protector.jpg';
import cc_advocate from '../../../assets/quiz/cc_advocate.jpg';
import tree_forest from '../../../assets/quiz/tree_forest.jpg';
import growing_plant from '../../../assets/quiz/growing_plant.jpg';
import young_seedling from '../../../assets/quiz/young_seedling.jpg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// const CSSTransitionGroup = require('react-transition-group');

function Result(props) {
  const [result, setResult] = useState(null);
  const [cookies, setCookie] = useCookies();
  const [score, setScore] = useState(null);
  const [alert, setAlert] = useState(false);
  const [invalid, setInvalid] = useState(false);
  
  const ViewResultsCredentials = () => {
    const Auth = React.useContext(AuthApi);
    setResult(props.quizResult)
    const handleOnClick = () => {
      if (name!='' && email!='') {
        Auth.setAuth(true);
        // Cookies.set("user", "loginTrue")
        setCookie('Name', name, { path: '/' });
        setCookie('Email', email, { path: '/' });
        if (ValidateEmail(email)) {
          setCookie('Result', props.quizResult, { path: '/'})
          setCookie('Score', score, { path: '/'});
        } 
        createQuizProfile();
      } else {
        setTimeout(() => {
          setAlert(false);
        }, 3000);
        setAlert(true);
        return;
      }
    }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const createQuizProfile = () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(
          { 
          "userCookieId": name,
          "quizTotalScore": JSON.stringify({"total": score}),
          "userEmail": email,
          "quizProfile": props.quizResult
          }
        )
      };
      fetch('https://7pbmplsc5c.execute-api.us-east-1.amazonaws.com/latest/create/api/quiz', requestOptions)
        .then(async res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
    }

    useEffect(() => {
        setName(cookies.Name);
        setEmail(cookies.Email);
        setResult(props.quizResult);
        setScore(props.quizScore);
    }, [])

    function ValidateEmail(mail) 
      {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
          return (true)
        }
          // alert("You have entered an invalid email address!")
          setTimeout(() => {
            setInvalid(false);
          }, 3000);
          setInvalid(true);
          return (false)
      }

      return (
      <div style={{height: "100vh"}}>
        <h1 style={{fontFamily: 'Montserrat', margin: 0}}>View your Results</h1>
        <h5 style={{fontFamily: 'Open Sans', fontVariant: "all-small-caps", fontSize: "larger"}}>Enter your name and e-mail address to get a copy of your results and save them for access at a later date.</h5>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <TextField
            required
            label="Name"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          <TextField
            required
            label="Valid Email"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{margin: '30px 0'}}
            />
          <Button variant="contained" onClick={handleOnClick}>Show me my score</Button>
          {alert && <Alert severity="error">Please fill in all fields!</Alert>}
          {invalid && <Alert severity="error">You have entered an invalid email!</Alert>}
        </div>
      </div>
    )
  }

  const [auth, setAuth] = useState(false);

  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    }
  }

  useEffect(() => {
    readCookie();
  }, [])

  const handleRestartQuiz = () => {
    Cookies.remove("Result");   
    window.location.reload();
  }

  const handleSubmitPledge = () => {
    alert("Check your email!")
  }

  const getImage = (rank) => {
    switch (rank) {
      case "Planet Protector":
        return planet_protector;
      case "Climate Change Advocate":
        return cc_advocate;
      case "Tree in the Forest":
        return tree_forest;
      case "Growing Plant":
        return growing_plant;
      case "Young Seedling":
        return young_seedling;
      default:
        return planet_protector;
    }
  }

  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
    <AuthApi.Provider value={{auth, setAuth}}>
      {cookies.Result &&
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row', placeContent: 'space-between'}}>
          <Card style={{minHeight: "200px", marginBottom: "3%", width: "52%", display: "flex"}}>
            <CardContent style={{textAlign: 'left'}}>
              <h1 style={{fontFamily: 'Montserrat', margin: 0}}><AccountCircleIcon />Your Results</h1>
              <br/>
              <div>
                Hello <strong>{cookies.Name},</strong>
                <br/><br/>
                You are a <strong>{props.quizResult}</strong>!
                <br/><br/>
                {resultsRank[props.quizResult]}
                <br/><br/>
                Your total score is <strong>{props.quizScore} out of 200</strong>
              </div>
              <br/>
              <Button variant="outlined" onClick={handleRestartQuiz}>Restart Quiz</Button>
            </CardContent>
            <CardContent style={{placeSelf: 'center'}}>
              <img style={{height:150}} src={getImage(props.quizResult)} />
            </CardContent>
          </Card>
          <Card style={{minHeight: "200px", marginBottom: "3%", maxWidth: "45%"}}>
            <CardContent>
              <ResultsRankChart />
            </CardContent>
          </Card>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', placeContent: 'space-between'}}>
          <Pledges />
          <QuizLeaderboard />
        </div> 
      </div>
      }
      {!cookies.Result &&
        <ViewResultsCredentials />
      }
    </AuthApi.Provider>

    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
  isLogged: PropTypes.bool,
  quizScore: PropTypes.string
};

export default Result;