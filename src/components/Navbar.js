import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

import React from "react";

const Navbar = () => {
  const amount = useSelector((store) => store.cart.amount);

  return (
    <nav>
      <div className="nav-flex">
        <h3>redux toolkit</h3>

        <div className="cart-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
