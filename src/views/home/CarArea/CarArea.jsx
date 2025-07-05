import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { startGetFeaturedCars, startSearchCars } from '../../../redux/features/home/thunks';
import { setSearchQuery, setSortBy } from '../../../redux/features/home/homeSlice';

import { carConfig } from './carConfig';

const CarArea = ({ scope = 'main' }) => {
  // redux
  const dispatch = useDispatch();
  const carsState = useSelector(state => state.homeReducer.carsByScope?.[scope] || {});
  const { featuredCars = [], loading, error } = carsState;
  const {
    searchQuery,
    sortBy,
    pagination
  } = useSelector(state => state.homeReducer);
  
  // state
  const [, setTick] = useState(0);

  // config
  const { data, styles, helpers } = carConfig;

  // effects
  useEffect(() => {
    dispatch(startGetFeaturedCars(1, 6, '1', scope));
  }, [dispatch, scope]);

  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // handlers
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(startSearchCars(searchQuery, 1, 6, sortBy, 'main'));
  };

  const handleSortChange = (e) => {
    const newSortBy = e.target.value;
    dispatch(setSortBy(newSortBy));
    if (searchQuery) {
      dispatch(startSearchCars(searchQuery, 1, 6, newSortBy, 'main'));
    } else {
      dispatch(startGetFeaturedCars(1, 6, newSortBy, 'main'));
    }
  };

  const handleLoadMore = () => {
    const nextPage = pagination.currentPage + 1;
    if (searchQuery) {
      dispatch(startSearchCars(searchQuery, nextPage, 6, sortBy, 'main'));
    } else {
      dispatch(startGetFeaturedCars(nextPage, 6, sortBy, 'main'));
    }
  };

  if (loading) return <div className="text-center py-5">{data.messages.loading}</div>;
  if (error) return <div className="text-center py-5 text-danger">{error}</div>;

  // render
  return (
    <div className="car-area bg py-120" style={styles.sectionContainer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">{data.sectionTitle.tagline}</span>
              <h2 className="site-title">
                {data.sectionTitle.title} <span>{data.sectionTitle.titleSpan}</span>
              </h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        
        {/* search and sort */}
        <div className="col-md-12 mb-4">
          <div className="car-sort" style={styles.sortContainer}>
            <div className="car-widget p-0 m-0">
              <div className="car-search-form">
                <form onSubmit={handleSearchSubmit}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder={data.searchPlaceholder}
                      value={searchQuery} 
                      onChange={e => dispatch(setSearchQuery(e.target.value))} 
                      style={styles.searchInput}
                    />
                    <button type="submit" style={styles.searchButton}>
                      <i className="far fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="car-sort-box">
              <select 
                className="form-select" 
                value={sortBy} 
                onChange={handleSortChange}
                style={styles.sortSelect}
              >
                {data.sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* cars grid */}
        <div className="row">
          {featuredCars && featuredCars.length > 0 ? (
            featuredCars.map((car) => (
              <div key={car.torreID || car.id} className="col-lg-6 col-xl-4">
                <div className="car-item">
                  <div className="car-img">
                    <img 
                      src={helpers.getCarImage(car)} 
                      alt={car.nombre || car.name || 'Car'} 
                    />
                  </div>
                  <div className="car-content">
                    <div className="car-top">
                      <h4><a href="#">{car.nombre || car.name || 'Vehicle'}</a></h4>
                      <span><i className="fas fa-star"></i> {data.defaults.rating}</span>
                    </div>
                    <ul className="car-list">
                      <li><i className="far fa-car"></i>{data.labels.model}: {car.modelo || car.modeloAnio || 'N/A'}</li>
                      <li><i className="far fa-user-tie"></i>{car.capacidad || data.defaults.capacity} {data.labels.people}</li>
                      <li><i className="far fa-gas-pump"></i>{car.tipoCombustible || data.defaults.fuel}</li>
                      <li><i className="far fa-road"></i>{car.rendimiento || data.defaults.efficiency}</li>
                      <li><i className="far fa-steering-wheel"></i>{car.transmision || data.defaults.transmission}</li>
                    </ul>
                    <div className="car-footer">
                      <span className="car-price">
                        {helpers.formatPrice(car.precio)} 
                        <sub>{data.labels.perMonth}</sub>
                      </span>
                      <a href="#" className="car-favorite-btn"><i className="far fa-heart"></i></a>
                      <a href={`/subasta/${car.torreID || car.id}`} className="theme-btn">{data.labels.rentNow}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <div className="alert alert-info">{data.messages.noResults}</div>
            </div>
          )}
        </div>
        
        <div className="text-center mt-4">
          <a href="#" className="theme-btn" onClick={handleLoadMore}>
            {data.labels.loadMore} <i className="far fa-arrow-rotate-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarArea;