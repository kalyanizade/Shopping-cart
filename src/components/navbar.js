// import React, from{useState} "react";

import React, { useState, useEffect } from "react";

import "../styles/navbar.css";

const Navbar = ({ searchTerm,setShow, size }) => {

  const [search,setSearch]=useState('');

  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Shoping
        </span>
        <div className="app">
      <input id="bar" type="text" onChange={(e) => {
        searchTerm(e.target.value);
      }} placeholder="Search..." className="search..." />
     
      </div>


        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
