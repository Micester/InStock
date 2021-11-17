import React from "react";
import './SearchInv.css';

function SearchInv() {
  return (
    //Inventory-Main__Contact Information (Address, Name, Phone #)
    <section className="Search">
      <h1 className="Search-Title">Inventory</h1>
      <div className="Search-Bar">
        <input className="Search-Bar__Box" id="text" name="text" type="text" placeholder="Search..."></input>
      </div>
      <button className="Search-Button">+ Add New Item </button>
    </section>
  )
}
export default SearchInv;
