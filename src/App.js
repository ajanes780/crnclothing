import React, { useState, useEffect } from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/HomepageComponent";
import { ShopComponent } from "./pages/shop/shopComponent";
import { Switch, Route } from "react-router-dom";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import { SignInPageAndSignUpPage } from "./pages/signInPage/signInAndSignUpPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utilis";

function App() {
  const [state, setState] = useState({
    currentUser: null,
  });

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      let unsubscribeFromAuth = null;
      // this is a aysne call to the data base  cant update state till it gets returned
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        await userRef.onSnapshot((snapShot) => {
          setState((prev) => ({
            ...prev,
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          }));
        });
      }
      // when they log out we set the current user to null
      setState({ currentUser: null });
      return () => unsubscribeFromAuth();
    });
  }, []);

  return (
    <div className="App">
      <HeaderComponent
        currentUser={state.currentUser}
        userPhoto={state.currentUser}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopComponent} />
        <Route path="/signin" component={SignInPageAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
