// src/data/categories.js
const categories = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Category ${i + 1}`,
  subcategories: Array.from({ length: 20 }, (_, j) => ({
    id: j + 1,
    name: `Subcategory ${j + 1}`
  }))
}));

export default categories;
