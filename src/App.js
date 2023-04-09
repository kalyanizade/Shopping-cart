import React, { useState, useEffect } from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Data from "./data";


const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");


  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const updateSearch = (query) => {
    setQuery(query);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);
  // console.log(query);
  // console.log(Data.filter(data => data.title.toLowerCase().includes("My")));

  return (
    <React.Fragment>
      <Navbar searchTerm={updateSearch} setShow={setShow} size={cart.length} />
      <div className="app">
        {/* <input type= "text" placeholder="Search..." className="seach" onChange={(e) => setQuery(e.target.value)}/> */}
        {/* <ul className="list">
          {Data.filter(data=>
          data.title.toLowerCase().includes(query)).map((data) => (
            <li key = {data.id} lassName="listItems">{data.title}</li>
          ) )}
        </ul> */}
      </div>
      {show ? (
        <Amazon searchTerm={query} handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;
