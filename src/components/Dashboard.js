// src/components/Dashboard.js
import React, { useState } from 'react';
import Category from './Category';
import Subcategory from './Subcategory';
import ImagePicker from './ImagePicker';
import categoriesData from '../data/categories';
import images from '../data/images';
import './Dashboard.css';

const Dashboard = () => {
  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newSubcategoryName, setNewSubcategoryName] = useState('');
  const [image, setImage] = useState(null);

  const handleAddCategory = () => {
    const newCategory = {
      id: categories.length + 1,
      name: newCategoryName,
      subcategories: [],
      image: image,
      hidden: false
    };
    setCategories([...categories, newCategory]);
    setNewCategoryName('');
    setImage(null);
  };

  const handleHideCategory = (categoryId) => {
    setCategories(categories.map(category =>
      category.id === categoryId ? { ...category, hidden: true } : category
    ));
  };

  const handleHideSubcategory = (subcategoryId) => {
    const updatedCategories = categories.map(category => {
      if (category.id === selectedCategory.id) {
        return {
          ...category,
          subcategories: category.subcategories.map(subcategory =>
            subcategory.id === subcategoryId ? { ...subcategory, hidden: true } : subcategory
          )
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const handleAddSubcategory = () => {
    const updatedCategories = categories.map(category => {
      if (category.id === selectedCategory.id) {
        const newSubcategory = {
          id: category.subcategories.length + 1,
          name: newSubcategoryName,
          image: image,
          hidden: false
        };
        return { ...category, subcategories: [...category.subcategories, newSubcategory] };
      }
      return category;
    });
    setCategories(updatedCategories);
    setNewSubcategoryName('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="dashboard">
      {selectedCategory ? (
        <div className="subcategories">
          <h2>{selectedCategory.name}</h2>
          <button onClick={() => setSelectedCategory(null)}>Back</button>
          <div className="subcategories-grid">
            {selectedCategory.subcategories.map(subcategory => (
              !subcategory.hidden && (
                <div key={subcategory.id}>
                  <Subcategory subcategory={subcategory} />
                  <button onClick={() => handleHideSubcategory(subcategory.id)}>Hide</button>
                </div>
              )
            ))}
          </div>
          <input
            type="text"
            value={newSubcategoryName}
            onChange={(e) => setNewSubcategoryName(e.target.value)}
            placeholder="New Subcategory Name"
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <ImagePicker images={images} onSelect={setImage} />
          <button onClick={handleAddSubcategory}>Add Subcategory</button>
        </div>
      ) : (
        <div>
          <div className="categories-grid">
            {categories.map(category => (
              !category.hidden && (
                <div key={category.id}>
                  <Category category={category} onClick={setSelectedCategory} />
                  <button onClick={() => handleHideCategory(category.id)}>Hide</button>
                </div>
              )
            ))}
          </div>
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="New Category Name"
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <ImagePicker images={images} onSelect={setImage} />
          <button onClick={handleAddCategory}>Add Category</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
