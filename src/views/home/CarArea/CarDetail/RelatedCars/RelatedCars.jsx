import React from 'react';

import { relatedCarsConfig } from './relatedCarsConfig';

const RelatedCars = ({ helpers }) => {
  // config
  const { data } = relatedCarsConfig;

  return (
    <div className="car-related-item pt-80">
      <div className="car-related-item-heading">
        <h3 className="car-related-item-title">{data.labels.youMayLike}</h3>
        <a href="#">{data.labels.viewMore} <i className="far fa-arrow-right"></i></a>
      </div>
      <div className="row align-items-center">
        {data.content.relatedCars.map((relatedCar, index) => (
          <div key={index} className="col-lg-6 col-xl-4">
            <div className="car-item">
              <div className="car-img">
                <img src={relatedCar.image} alt={relatedCar.name} />
              </div>
              <div className="car-content">
                <div className="car-top">
                  <h4><a href="#">{relatedCar.name}</a></h4>
                  <span><i className="fas fa-star"></i> {relatedCar.rating}</span>
                </div>
                <ul className="car-list">
                  <li><i className="far fa-car"></i>{data.labels.model}: {relatedCar.model}</li>
                  <li><i className="far fa-user-tie"></i>{relatedCar.capacity} {data.labels.people}</li>
                  <li><i className="far fa-gas-pump"></i>{relatedCar.fuel}</li>
                  <li><i className="far fa-road"></i>{relatedCar.efficiency}</li>
                  <li><i className="far fa-steering-wheel"></i>{relatedCar.transmission}</li>
                </ul>
                <div className="car-footer">
                  <span className="car-price">
                    {helpers.formatPrice(relatedCar.price)} 
                    <sub>{data.labels.currentBid}</sub>
                  </span>
                  <a href="#" className="car-favorite-btn"><i className="far fa-heart"></i></a>
                  <a href="#" className="theme-btn">{data.labels.viewAuction}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedCars;