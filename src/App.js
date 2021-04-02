import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import { HomePage } from "./pages/homepage/HomepageComponent";
import { ShopComponent } from "./pages/shop/shopComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import { SignInPageAndSignUpPage } from "./pages/signInPage/signInAndSignUpPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utilis";
import setCurrentUser from "./redux/user/userActions";

function App(props) {
  // const [state, setState] = useState({
  //   currentUser: null,
  // });
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      let unsubscribeFromAuth = null;
      // const { setCurrentUser } = props;
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
      <HeaderComponent
      // currentUser={state.currentUser}
      // userPhoto={state.currentUser}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopComponent} />
        <Route path="/signin" component={SignInPageAndSignUpPage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
