// src/components/Category.js
import React from 'react';

const Category = ({ category, onClick }) => (
  <div className="category" onClick={() => onClick(category)}>
    {category.image && <img src={category.image} alt={category.name} />}
    <p>{category.name}</p>
  </div>
);

export default Category;
