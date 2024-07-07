import React from 'react';
import { useParams } from 'react-router-dom';
import PredefinedData from '../data/categories';

const WordList = () => {
  const { categoryId } = useParams();
  const category = PredefinedData.categories[categoryId];

  return (
    <div>
      <h1>{category.name}</h1>
      <ul>
        {category.words.map((word, index) => (
          <li key={index}>{word.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;
