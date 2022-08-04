import React from "react";

export default function Header(props) {
  const {countCartItems} = props;
  return (
    <>
      <header className="row bg center">
        <div className="logo">
          <a href="#/">
            <h1>React Shopping Cart</h1>
          </a>
        </div>
        <div className="login">
          <a href="#/cart">
            Cart{' '}
            {countCartItems ? (
              <button className="badge">{countCartItems}</button>
            ) : (
              ''
            )}
            </a>
          <a href="#/login">Login</a>
        </div>
      </header>
    </>
  );
}
