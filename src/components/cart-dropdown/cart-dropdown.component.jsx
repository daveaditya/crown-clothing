import React from 'react';

import './cart-component.styles.scss';

import CustomButton from './../custom-button/custom-button.component';


const Cart = () => (
  <div className="cart-dropdown">
    <div className="cart-items">

    </div>
    <CustomButton type='button'>GO TO CHECKOUT</CustomButton>
  </div>
)


export default Cart;