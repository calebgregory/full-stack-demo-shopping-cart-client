import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Errors from './components/Errors';
import Products from './components/Products';

const API_ROOT_URL = 'http://localhost:3001/';

class App extends Component {
  state = {
    products: [],
    errors: {},
  }

  componentDidMount() {
    const path = 'products/get-all'
    fetch(API_ROOT_URL+path, {
      method: 'POST',
      body: '{}',
      headers: {'Content-Type': 'application/json'}
    }).then((resp) => resp.json().then((json) => ({ json, resp })))
      .then(({ resp, json }) => {
        if (resp.statusCode > 400) {
          this.setState({
            errors: {
              [path]: json.error,
            }
          })
          return
        }
        this.setState({ products: json.products })
      })
  }

  render() {
    const { errors, products } = this.state;
    return (
      <div className="App">
        <Errors errors={errors} />
        <Products products={products} />
      </div>
    );
  }
}

export default App;
