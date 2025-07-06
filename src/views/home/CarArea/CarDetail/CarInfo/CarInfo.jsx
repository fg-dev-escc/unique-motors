import React from 'react';

import { carInfoConfig } from './carInfoConfig';

const CarInfo = ({ car, timeLeft, isActive, helpers }) => {
  // config
  const { data } = carInfoConfig;

  // render
  return (
    <div className="car-single-info">
      <h3 className="car-single-title">{car.nombre}</h3>
      <div className="car-single-rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
        <i className="far fa-star"></i>
        <span className="rating-count"> ({data.labels.customerReviews})</span>
      </div>
      
      {/* auction status */}
      <div className="car-single-auction-status mb-3">
        {isActive ? (
          <>
            <span className="badge bg-success mb-2">
              <i className="far fa-clock me-1"></i>
              {data.labels.activeAuction}
            </span>
            <div className="auction-countdown">
              <strong>{data.labels.timeRemaining}: </strong>
              <span className="text-danger fw-bold">{timeLeft}</span>
            </div>
          </>
        ) : (
          <span className="badge bg-danger text-white">
            <i className="far fa-clock me-1"></i>
            {data.labels.auctionEnded}
          </span>
        )}
      </div>

      <div className="car-single-price">
        <span className="car-price">
          {helpers.formatPrice(car.precio)} 
          <sub>{data.labels.currentBid}</sub>
        </span>
        <a href="#" className="car-favorite-btn"><i className="far fa-heart"></i></a>
        {isActive ? (
          <a href="#" className="theme-btn">{data.labels.placeBid}</a>
        ) : (
          <span className="theme-btn disabled">{data.labels.auctionEnded}</span>
        )}
      </div>
      
      <div className="car-single-details">
        <h5 className="mb-2">{data.labels.carDetails}</h5>
        <ul className="car-list m-0">
          <li><i className="far fa-car"></i>{data.labels.model}: {car.modelo}</li>
          <li><i className="far fa-user-tie"></i>{car.capacidad} {data.labels.people}</li>
          <li><i className="far fa-gas-pump"></i>{car.tipoCombustible}</li>
          <li><i className="far fa-road"></i>{car.rendimiento}</li>
          <li><i className="far fa-steering-wheel"></i>{car.transmision}</li>
        </ul>
      </div>
      
      <div className="car-single-terms mb-3">
        <h5 className="mb-2">{data.labels.auctionTerms}</h5>
        <ul className="car-single-terms-list">
          <li>{data.labels.seller}: <span>{car.vendedor}</span></li>
          <li>{data.labels.transferFee}: <span>{helpers.formatPrice(car.comisionTransferencia)}</span></li>
          <li>{data.labels.dispositionFee}: <span>{helpers.formatPrice(car.comisionDisposicion)}</span></li>
        </ul>
      </div>
      
      <div className="car-single-share">
        <h5 className="mb-3">{data.labels.shareAuction}</h5>
        <div className="car-single-share-icon">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;