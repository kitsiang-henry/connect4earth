import React, { useState } from 'react';
import './App.css';
import AppBar2 from './components/navigation/AppBar';
import Cookies from 'js-cookie';
import 'intro.js/introjs.css';
import ReportVulnerability from './components/navigation/ReportVulnerability';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  credits: {
    position: 'fixed',
    bottom: 0,
    top: 'auto'
  }
}));

// const Login = () => {
//   const Auth = React.useContext(AuthApi);
//   const handleOnClick = () => {
//     Auth.setAuth(true);
//     Cookies.set("user", "loginTrue")
//   }
//   return (
//     <div>
//       <h1>Welcome to C4E Quiz</h1>
//       <button onClick={handleOnClick}>Login</button>
//     </div>
//   )
// }

// const Dashboard = () => {
//   const Auth = React.useContext(AuthApi);
//   const handleOnClick = () => {
//     Auth.setAuth(false);
//     Cookies.remove("user");
//   }
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <button onClick={handleOnClick}>Logout</button>
//     </div>
//   )
// }

//   const Routes = () => {
//     const Auth = React.useContext(AuthApi);
//     return (
//       <Switch>
//         <ProtectedLogin path='/login' auth={Auth.auth} component={Login}/>
//         <ProtectedRoute path='/dashboard2' auth={Auth.auth} component={Dashboard}/>
//       </Switch>
//     )
//   }

// const ProtectedRoute = ({auth, component: Component, ...rest }) => {
//   return(
//     <Route
//     {...rest}
//     render = { () => auth? (
//       <Component />
//     ) : (
//       <Redirect to='/login' />
//     )
//     }
//     />
//   )
// }

// const ProtectedLogin = ({auth, component: Component, ...rest }) => {
//   return(
//     <Route
//     {...rest}
//     render = { () => !auth? (
//       <Component />
//     ) : (
//       <Redirect to='/dashboard2' />
//     )
//     }
//     />
//   )
// }

const App = () => {
  const [auth, setAuth] = useState(false);
  const classes = useStyles();

  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    }
  }

  React.useEffect(() => {
    readCookie();
  }, [])

  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" />
      </head>
      <AppBar2 />
      {/* <AuthApi.Provider value={{auth, setAuth}}>
        <Router>
          <Routes/>
        </Router>
      </AuthApi.Provider> */}
      <ReportVulnerability className={classes.credits}/>
    </div>
  );
}

export default withStyles(useStyles)(App);
