import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";
//.filter(lst => lst.title.toLowerCase().includes(props.searchTerm))
const Amazon = ({ searchTerm, handleClick }) => {
  return (
    <section>
      {list.filter(lst => lst.title.toLowerCase().includes(searchTerm.toLowerCase()) || lst.author.toLowerCase().includes(searchTerm.toLowerCase()) || lst.price.toString().toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
