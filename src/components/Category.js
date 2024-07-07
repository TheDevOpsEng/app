// src/components/Category.js
import React from 'react';

const Category = ({ category, onClick }) => (
  <div className="category" onClick={() => onClick(category)}>
    <p>{category.name}</p>
  </div>
);

export default Category;
