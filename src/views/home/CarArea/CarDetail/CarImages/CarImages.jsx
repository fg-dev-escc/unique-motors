import React from 'react';

const CarImages = ({ car }) => {
  return (
    <div className="car-single-slider-box">
      <div className="car-single-slider owl-carousel owl-theme">
        {car.imagenes?.map((imagen, index) => (
          <div key={index}>
            <img src={imagen} alt={`${car.nombre} - ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarImages;