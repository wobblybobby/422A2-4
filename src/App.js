import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "./pages/HomePage";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import ProductListingPage from './pages/ProductListingPage';
import DummyPage from './pages/DummyPage';
import ProductContext from './context/ProductContext';

function App() {

  //
  const [products, setProducts ] = useState([{}]);
  /* const [categories, setCategories ] = useState([]); */


  //
    return (
      <Router>
        <ProductContext.Provider value ={{products, setProducts}}>
        <Switch>

          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/product/:category">
            <ProductCategoryPage/>
          </Route>
          <Route exact path="/productDescription">
            <ProductDescriptionPage/>
          </Route>
          <Route exact path="/allProducts">
            <ProductListingPage/>
          </Route>
          <Route exact path="/dummy">
            <DummyPage/>
          </Route>
          
        </Switch>
        </ProductContext.Provider>
      </Router>
    );
} 
export default App;