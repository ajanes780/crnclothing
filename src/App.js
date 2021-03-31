import React, { useState, useEffect } from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/HomepageComponent";
import { ShopComponent } from "./pages/shop/shopComponent";
import { Switch, Route } from "react-router-dom";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import { SignInPageAndSignUpPage } from "./pages/signInPage/signInAndSignUpPage";
import { auth } from "./firebase/firebase.utilis";

function App() {
  const [state, setState] = useState({
    currentUser: null,
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setState((prev) => ({ ...prev, currentUser: user }));
      console.log(`This is user `, user.displayName, user.photoURL);
    });
  }, [auth]);

  return (
    <div className="App">
      <HeaderComponent userPhoto={state.currentUser.photoURL} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopComponent} />
        <Route path="/signin" component={SignInPageAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
