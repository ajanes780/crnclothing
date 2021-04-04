import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.css";

import { HomePage } from "./pages/homepage/HomepageComponent";
import { ShopComponent } from "./pages/shop/shopComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import { SignInPageAndSignUpPage } from "./pages/signInPage/signInAndSignUpPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utilis";
import setCurrentUser from "./redux/user/userActions";

function App(props) {
  let location = useLocation();
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      let unsubscribeFromAuth = null;
      // this is a aysne call to the data base  cant update state till it gets returned
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        await userRef.onSnapshot((snapShot) => {
          props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      // when they log out we set the current user to null
      props.setCurrentUser(userAuth);
      return () => unsubscribeFromAuth();
    });
  }, []);

  return (
    <div className="App">
      <HeaderComponent />
      <Switch location={location}>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopComponent} />
        <Route
          exact
          path="/signin"
          render={() =>
            props.currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInPageAndSignUpPage />
            )
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
