import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.component';
import EnterCoinsPage from './pages/EnterCoinsPage/EnterCoinsPage.component';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage.component';
import WalletTrackerPage from './pages/WalletTrackerPage/WalletTrackerPage.component';
import Dashboard from './pages/Dashboard/Dashboard.component';
import Version from './components/version/Version.component';

import HeaderLogedIn from './components/header/HeaderLogedIn.component';
import HeaderLogedOut from './components/header/HeaderLogedOut.component';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.component';
import HomePageRoute from './components/homePageRoute/HomePageRoute.component';
import { isUserLogedIn, activeSpinnerLoader } from './redux/user/user.actions';
import Spinner from './components/Spinner/Spinner';

function App({ activeSpinnerLoader, spinnerLoader, theme, isUserLogedIn, logedIn }) {

  // using sagas and redux, storing user in reducer.
  // on componentDidMount sending query to backand asking if user is actually
  // authorized by jwt in cookie. 

 
  useEffect(() => {
    activeSpinnerLoader();
    isUserLogedIn();
  }, [])

  if (!spinnerLoader) {
  return (
    <div >  
          {
            logedIn ? <HeaderLogedIn /> : <HeaderLogedOut />
          }
          <Switch>
            <HomePageRoute path='/' component={HomePage} exact  />
            <PrivateRoute path='/enterCoins' component={EnterCoinsPage} exact/>
            <PrivateRoute path='/dashboard' component={Dashboard} exact />
            <PrivateRoute path='/wallet' component={WalletTrackerPage} exact />
          <Route exact path='/signUpSignIn' component={SignInAndSignUpPage} />
          </Switch>
          <Version />
    </div>
  );
  } else {
    return <Spinner color='#511db8' />
  }
}

const mapDispatchToProps = dispatch => ({
  isUserLogedIn: () => dispatch(isUserLogedIn()),
  activeSpinnerLoader: () => dispatch(activeSpinnerLoader())
});

const mapStateToProps = state => ({
  logedIn: state.user.logedIn,
  theme: state.user.theme,
  spinnerLoader: state.user.spinnerLoader
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
