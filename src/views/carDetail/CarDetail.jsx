import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import Breadcrumb from '../../components/ui/Breadcrumb';

import { carDetailConfig } from './carDetailConfig';

const CarDetail = () => {
  // params
  const { id } = useParams();
  
  // state
  const [activeTab, setActiveTab] = useState('description');
  const [, setTick] = useState(0);

  // redux
  const dispatch = useDispatch();
  
  // config
  const { data, styles, helpers } = carDetailConfig;

  // effects
  useEffect(() => {
    // timer for auction countdown
    const interval = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // mock car data - replace with Redux call
  const car = {
    id: id,
    nombre: "Toyota Corolla 2020",
    precio: 250000,
    modelo: "2020",
    capacidad: "5",
    tipoCombustible: "Híbrido",
    rendimiento: "18.5km / 1-litro",
    transmision: "Automático",
    fechaFin: "2024-12-31T23:59:59",
    urlImgPrincipal: "/assets/img/car/01.jpg",
    imagenes: [
      "/assets/img/car/01.jpg",
      "/assets/img/car/02.jpg", 
      "/assets/img/car/03.jpg",
      "/assets/img/car/04.jpg",
      "/assets/img/car/05.jpg"
    ],
    descripcion: "Vehículo en excelente estado, ideal para ciudad y carretera. Mantenimiento al día y listo para nuevo propietario.",
    vendedor: "AutoDealer Premium",
    comisionTransferencia: 500,
    comisionDisposicion: 750
  };

  const timeLeft = helpers.getTimeLeft(car.fechaFin);
  const isActive = timeLeft !== 'Subasta terminada';

  // render
  return (
    <>
      <Breadcrumb 
        title={data.breadcrumb.title} 
        currentPage={data.breadcrumb.currentPage}
      />
      
      {/* car single */}
      <div className="car-item-single py-120">
        <div className="container">
          <div className="car-single-wrapper">
            <div className="row">
              <div className="col-lg-8">
                <div className="car-single-slider-box">
                  <div className="car-single-slider owl-carousel owl-theme">
                    {car.imagenes?.map((imagen, index) => (
                      <div key={index}>
                        <img src={imagen} alt={`${car.nombre} - ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
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
              </div>
            </div>
          </div>
          
          <div className="car-single-details pt-50">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button 
                  className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveTab('description')}
                  type="button"
                >
                  {data.tabs.description}
                </button>
                <button 
                  className={`nav-link ${activeTab === 'additional' ? 'active' : ''}`}
                  onClick={() => setActiveTab('additional')}
                  type="button"
                >
                  {data.tabs.additionalInfo}
                </button>
                <button 
                  className={`nav-link ${activeTab === 'bids' ? 'active' : ''}`}
                  onClick={() => setActiveTab('bids')}
                  type="button"
                >
                  {data.tabs.bidHistory} (05)
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              {activeTab === 'description' && (
                <div className="tab-pane fade show active">
                  <div className="car-single-desc">
                    <p>{car.descripcion}</p>
                    <p>{data.content.descriptionText}</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'additional' && (
                <div className="tab-pane fade show active">
                  <div className="car-single-additional-info">
                    <p>{data.content.additionalInfoText}</p>
                  </div>
                </div>
              )}

              {activeTab === 'bids' && (
                <div className="tab-pane fade show active">
                  <div className="car-single-review">
                    <div className="blog-comments">
                      <h3>{data.tabs.bidHistory} (05)</h3>
                      <div className="blog-comments-wrapper">
                        {data.content.bidHistory.map((bid, index) => (
                          <div key={index} className="blog-comments-single">
                            <img src={bid.avatar} alt="thumb" />
                            <div className="blog-comments-content">
                              <h5>{bid.bidder}</h5>
                              <span><i className="far fa-clock"></i> {bid.date}</span>
                              <p><strong>{data.labels.bidAmount}: {bid.amount}</strong> - {bid.comment}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {isActive && (
                        <div className="blog-comments-form">
                          <h3>{data.labels.placeBid}</h3>
                          <form>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>{data.labels.bidAmount}</label>
                                  <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder={data.placeholders.bidAmount}
                                    min={car.precio + 1000}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder={data.placeholders.yourName}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder={data.placeholders.yourEmail}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea 
                                    className="form-control" 
                                    rows="3" 
                                    placeholder={data.placeholders.comment}
                                  />
                                </div>
                                <button type="submit" className="theme-btn">
                                  <i className="far fa-gavel"></i> {data.labels.submitBid}
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
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
        </div>
      </div>
    </>
  );
};

export default CarDetail;