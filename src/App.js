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
    let unsubscribeFromAuth = null;
    auth.onAuthStateChanged((userAuth) => {
      // check and if not present add user to database
      const userRef = createUserProfileDocument(userAuth);

      userRef.snapshot((snapShot) => {
        setState((prev) => ({
          ...prev,
          currentUser: {
            id: userRef.snapShot.id,
            displayPic: userAuth.photoURL,
            ...snapShot.data(),
          },
        }));
      });

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
