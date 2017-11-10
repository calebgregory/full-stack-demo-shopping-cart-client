import React from 'react';

function Product(props) {
  return <div>
    <span>{props.description}</span> <span>{props.price}</span>
  </div>
}

function Products(props) {
  return <div>
    <h1>Products</h1>
    {props.products.map((p, i) => {
      return <Product key={i} description={p.Description} price={p.Price} />
    })}
  </div>
}

export default Products;
