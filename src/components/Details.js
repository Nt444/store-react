import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {id, company, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanded text-blue my-56">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model : {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    mady by : 
                    <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    price : <span>$</span>
                    {price}
                  </h4>
                  <p className="text-capitalize font-wieght-bold mt-3 mb-0">
                    some info about the product
                  </p>
                  <p className="text-muted lead">
                    {info}
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    )
  }
}
