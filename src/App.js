//components
import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import { auth, createUserProfileDocument } from "./firebase/firebase.utilis";
import setCurrentUser from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/userSelectors";

//styles
import "./App.css";
//pages
import { HomePage } from "./pages/homepage/HomepageComponent";
import { ShopComponent } from "./pages/shop/shopComponent";
import { SignInPageAndSignUpPage } from "./pages/signInPage/signInAndSignUpPage";
import checkoutPageComponent from "./pages/checkout/checkoutPageComponent";

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
        <Route path="/checkout" component={checkoutPageComponent} />
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
