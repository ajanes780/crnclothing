import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/HomepageComponent";
import { ShopComponent } from "./pages/shop/shopComponent";
import { Switch, Route } from "react-router-dom";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopComponent} />
      </Switch>
    </div>
  );
}

export default App;
