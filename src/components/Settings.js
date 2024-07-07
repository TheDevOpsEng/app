// src/components/Settings.js
import React, { useState } from 'react';
import categoriesData from '../data/categories';

const Settings = () => {
  const [categories, setCategories] = useState(categoriesData);

  const handleShowCategory = (categoryId) => {
    setCategories(categories.map(category =>
      category.id === categoryId ? { ...category, hidden: false } : category
    ));
  };

  const handleShowSubcategory = (categoryId, subcategoryId) => {
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          subcategories: category.subcategories.map(subcategory =>
            subcategory.id === subcategoryId ? { ...subcategory, hidden: false } : subcategory
          )
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="categories-settings">
        {categories.map(category => (
          category.hidden && (
            <div key={category.id}>
              <p>{category.name}</p>
              <button onClick={() => handleShowCategory(category.id)}>Show</button>
              <div className="subcategories-settings">
                {category.subcategories.map(subcategory => (
                  subcategory.hidden && (
                    <div key={subcategory.id}>
                      <p>{subcategory.name}</p>
                      <button onClick={() => handleShowSubcategory(category.id, subcategory.id)}>Show</button>
                    </div>
                  )
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Settings;
