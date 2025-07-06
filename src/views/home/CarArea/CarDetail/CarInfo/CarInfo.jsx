import React from 'react';
import { useSelector } from 'react-redux';

import { carInfoConfig } from './carInfoConfig';
import BiddingInterface from './BiddingInterface/BiddingInterface';

const CarInfo = ({ car, timeLeft, isActive, helpers }) => {
  // config
  const { data } = carInfoConfig;
  
  // redux state
  const { user } = useSelector(state => state.userReducer);

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
      </div>
      
      {/* Bidding Interface - Only show if user is logged in */}
      {user && (
        <div className="car-single-bidding mb-4">
          <BiddingInterface car={car} isActive={isActive} />
        </div>
      )}
      
      {/* Show login message if user is not logged in */}
      {!user && (
        <div className="car-single-auth-message mb-4">
          <div className="alert alert-info">
            <i className="fas fa-info-circle me-2"></i>
            <strong>Inicia sesión para participar en la subasta</strong>
            <br />
            <small>Para realizar ofertas y ver el historial de pujas completo, debes iniciar sesión.</small>
          </div>
        </div>
      )}

      
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