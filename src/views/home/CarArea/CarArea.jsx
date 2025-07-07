import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGetFeaturedCars, startSearchCars } from '../../../redux/features/home/thunks';
import { setSearchQuery, setSortBy } from '../../../redux/features/home/homeSlice';
import { AuctionTimer } from '../../../components/ui/AuctionTimer';

// data
const carData = {
  sectionTitle: {
    tagline: "Cars",
    title: "Featured",
    titleSpan: "Cars"
  },
  searchPlaceholder: "Search",
  sortOptions: [
    { value: "1", label: "Sort By Default" },
    { value: "5", label: "Sort By Featured" },
    { value: "2", label: "Sort By Latest" },
    { value: "3", label: "Sort By Low Price" },
    { value: "4", label: "Sort By High Price" }
  ],
  labels: {
    model: "Model",
    people: "People",
    perMonth: "/ month",
    loadMore: "Load More",
    rentNow: "Ver Subasta"
  },
  messages: {
    loading: "Loading cars...",
    noResults: "No cars found."
  },
  defaults: {
    image: '/assets/img/car/01.jpg',
    capacity: '4',
    fuel: 'Hybrid',
    efficiency: '10.15km / 1-litre',
    transmission: 'Automatic',
    price: '$390',
    rating: '5.0'
  }
};

// styles
const carStyles = {
  sectionContainer: {
    padding: '120px 0'
  },
  sortContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '30px'
  },
  searchInput: {
    padding: '12px 45px 12px 15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '14px',
    width: '250px'
  },
  searchButton: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#6c63ff',
    cursor: 'pointer'
  },
  sortSelect: {
    padding: '12px 15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '14px',
    minWidth: '200px'
  }
};

// helpers
const carHelpers = {
  getCarImage: (car) => {
    if (car.urlImgPrincipal) return car.urlImgPrincipal;
    return carData.defaults.image;
  },

  getTimeLeft: (fechaFin) => {
    if (!fechaFin) return '';
    const end = new Date(fechaFin);
    const now = new Date();
    let diff = end - now;
    if (diff <= 0) return 'Subasta terminada';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    const seconds = Math.floor(diff / 1000);
    
    const pad = (n) => n.toString().padStart(2, '0');
    return `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  },

  getStatus: (car) => {
    if (car.fechaFin) {
      const end = new Date(car.fechaFin);
      if (end <= new Date()) return 'Inactivo';
      return 'Activo';
    }
    if (car.activo !== undefined) return car.activo ? 'Activo' : 'Inactivo';
    return 'Inactivo';
  },

  formatPrice: (price) => {
    return price ? `$${Number(price).toLocaleString('en-US')}` : carData.defaults.price;
  }
};

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

  if (loading) return <div className="text-center py-5">{carData.messages.loading}</div>;
  if (error) return <div className="text-center py-5 text-danger">{error}</div>;

  // render
  return (
    <div className="car-area bg py-120" style={carStyles.sectionContainer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">{carData.sectionTitle.tagline}</span>
              <h2 className="site-title">
                {carData.sectionTitle.title} <span>{carData.sectionTitle.titleSpan}</span>
              </h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        
        {/* search and sort */}
        <div className="col-md-12 mb-4">
          <div className="car-sort" style={carStyles.sortContainer}>
            <div className="car-widget p-0 m-0">
              <div className="car-search-form">
                <form onSubmit={handleSearchSubmit}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder={carData.searchPlaceholder}
                      value={searchQuery} 
                      onChange={e => dispatch(setSearchQuery(e.target.value))} 
                      style={carStyles.searchInput}
                    />
                    <button type="submit" style={carStyles.searchButton}>
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
                style={carStyles.sortSelect}
              >
                {carData.sortOptions.map(option => (
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
                <div className="car-item position-relative">
                  {/* Timer badge */}
                  {car.fechaVencimiento && (
                    <AuctionTimer endDate={car.fechaVencimiento} />
                  )}
                  <div className="car-img">
                    <img 
                      src={carHelpers.getCarImage(car)} 
                      alt={car.nombre || car.name || 'Car'} 
                    />
                  </div>
                  <div className="car-content">
                    <div className="car-top">
                      <h4><a href="#">{car.nombre || car.name || 'Vehicle'}</a></h4>
                      <span><i className="fas fa-star"></i> {carData.defaults.rating}</span>
                    </div>
                    <ul className="car-list">
                      <li><i className="far fa-car"></i>{carData.labels.model}: {car.modelo || car.modeloAnio || 'N/A'}</li>
                      <li><i className="far fa-user-tie"></i>{car.capacidad || carData.defaults.capacity} {carData.labels.people}</li>
                      <li><i className="far fa-gas-pump"></i>{car.tipoCombustible || carData.defaults.fuel}</li>
                      <li><i className="far fa-road"></i>{car.rendimiento || carData.defaults.efficiency}</li>
                      <li><i className="far fa-steering-wheel"></i>{car.transmision || carData.defaults.transmission}</li>
                    </ul>
                    <div className="car-footer">
                      <span className="car-price">
                        {carHelpers.formatPrice(car.precio)} 
                        <sub>{carData.labels.perMonth}</sub>
                      </span>
                      <a href="#" className="car-favorite-btn"><i className="far fa-heart"></i></a>
                      <a href={`/subasta/${car.torreID || car.id}`} className="theme-btn">{carData.labels.rentNow}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <div className="alert alert-info">{carData.messages.noResults}</div>
            </div>
          )}
        </div>
        
        <div className="text-center mt-4">
          <a href="#" className="theme-btn" onClick={handleLoadMore}>
            {carData.labels.loadMore} <i className="far fa-arrow-rotate-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarArea;