// src/components/ImagePicker.js
import React from 'react';

const ImagePicker = ({ images, onSelect }) => (
  <div className="image-picker">
    {images.map((image, index) => (
      <img
        key={index}
        src={image.src}
        alt={image.name}
        onClick={() => onSelect(image.src)}
        style={{ cursor: 'pointer', margin: '10px', maxWidth: '100px' }}
      />
    ))}
  </div>
);

export default ImagePicker;
