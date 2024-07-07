// src/components/Subcategory.js
import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const Subcategory = ({ subcategory }) => {
  const { speak } = useSpeechSynthesis();

  return (
    <div className="subcategory" onClick={() => speak({ text: subcategory.name })}>
      {subcategory.image && <img src={subcategory.image} alt={subcategory.name} />}
      <p>{subcategory.name}</p>
    </div>
  );
};

export default Subcategory;
