import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {

  const dispatch = useDispatch();
 
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
   firebase.auth().onAuthStateChanged( (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsloggedIn(true)
      } else {
        setIsloggedIn(false)
      }
      setChecking(false)
   });
  }, [dispatch, setChecking, setIsloggedIn])

  if (checking) {
    return (
      <h1>Wait...</h1>
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes 
            path="/auth" 
            isAuthenticated={isLoggedIn}
            component={AuthRouter} />

          <PrivateRoute 
            exact
            isAuthenticated={isLoggedIn} 
            path="/" 
            component={JournalScreen} />

          <Route to="/auth/login"/> 
        </Switch>
      </div>
    </Router>
  )
}
