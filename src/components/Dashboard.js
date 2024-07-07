// src/components/Dashboard.js
import React, { useState } from 'react';
import Category from './Category';
import Subcategory from './Subcategory';
import categoriesData from '../data/categories';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="dashboard">
      {selectedCategory ? (
        <div className="subcategories">
          <h2>{selectedCategory.name}</h2>
          <button onClick={() => setSelectedCategory(null)}>Back</button>
          <div className="subcategories-grid">
            {selectedCategory.subcategories.map((subcategory) => (
              <Subcategory key={subcategory.id} subcategory={subcategory} />
            ))}
          </div>
        </div>
      ) : (
        <div className="categories-grid">
          {categoriesData.map((category) => (
            <Category key={category.id} category={category} onClick={setSelectedCategory} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
