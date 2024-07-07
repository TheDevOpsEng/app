// src/components/Subcategory.js
import React from 'react';

const Subcategory = ({ subcategory }) => (
  <div className="subcategory">
    <p>{subcategory.name}</p>
  </div>
);

export default Subcategory;
