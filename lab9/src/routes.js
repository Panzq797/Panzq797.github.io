import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import Brands from "./static-pages/brands";
import Zara from "./static-pages/collection";
import Hm from "./static-pages/collection1";
import Forever21 from "./static-pages/collection2";
import Checkout from "./static-pages/checkout";
import Bags from "./static-pages/bags";
import Clothing from "./static-pages/clothing";
import Shoes from "./static-pages/shoes";
import BrandF from "./static-pages/brandfrench"

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}
/*
 * Defines the Routing for the app
 */
const Routes = () => (
  <Switch>
    <ScrollToTop>
      {
        // The exact keyword is used to denote the default/index/welcome page
        // The path prop to denotes the url path
        // The component prop denotes the component to render at the path
      }
      <Route exact path="/" component={App} />
      <Route path="/brands" component={Brands} />
      <Route path="/zara" component={Zara} />
      <Route path="/H&M" component={Hm} />
      <Route path="/FOREVER21" component={Forever21} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/bags" component={Bags} />
      <Route path="/clothing" component={Clothing} />
      <Route path="/shoes" component={Shoes} />
      <Route path="/french" component={BrandF} />

    </ScrollToTop>
  </Switch>
);

export default Routes;
