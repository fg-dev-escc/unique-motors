import React, { useState } from 'react';
import ProfileLayout from './ProfileLayout';

const Favorites = () => {
  // Mock data - en producción esto vendría de Redux/API
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      image: '/assets/img/car/01.jpg',
      name: 'Toyota Sports Car',
      rating: 5.0,
      model: '2020',
      people: '4 People',
      fuel: 'Hybrid',
      consumption: '10.15km / 1-litre',
      transmission: 'Automatic',
      price: 390,
      period: 'month'
    },
    {
      id: 2,
      image: '/assets/img/car/02.jpg',
      name: 'BMW X5 SUV',
      rating: 4.8,
      model: '2021',
      people: '5 People',
      fuel: 'Petrol',
      consumption: '8.5km / 1-litre',
      transmission: 'Automatic',
      price: 520,
      period: 'month'
    },
    {
      id: 3,
      image: '/assets/img/car/03.jpg',
      name: 'Mercedes C-Class',
      rating: 4.9,
      model: '2019',
      people: '4 People',
      fuel: 'Diesel',
      consumption: '12.2km / 1-litre',
      transmission: 'Manual',
      price: 450,
      period: 'month'
    }
  ]);

  const handleRemoveFavorite = (carId) => {
    if (window.confirm('Remove this car from favorites?')) {
      setFavorites(prev => prev.filter(car => car.id !== carId));
      // TODO: Dispatch remove from favorites action
      console.log('Removed from favorites:', carId);
    }
  };

  const handleRentNow = (carId) => {
    // TODO: Navigate to booking page
    console.log('Rent car:', carId);
    alert(`Redirecting to booking for car ${carId}`);
  };

  return (
    <ProfileLayout title="Favorites">
      <div className="user-profile-card">
        <div className="user-profile-card-title">
          <h4>My Favorite Cars</h4>
        </div>
        
        {favorites.length > 0 ? (
          <div className="car-area">
            <div className="row">
              {favorites.map((car) => (
                <div key={car.id} className="col-lg-6 col-xl-6">
                  <div className="car-item">
                    <div className="car-img">
                      <img src={car.image} alt={car.name} />
                    </div>
                    <div className="car-content">
                      <div className="car-top">
                        <h4>
                          <a href={`/car/${car.id}`}>{car.name}</a>
                        </h4>
                        <span>
                          <i className="fas fa-star"></i> {car.rating}
                        </span>
                      </div>
                      <ul className="car-list">
                        <li>
                          <i className="far fa-car"></i>Model: {car.model}
                        </li>
                        <li>
                          <i className="far fa-user-tie"></i>{car.people}
                        </li>
                        <li>
                          <i className="far fa-gas-pump"></i>{car.fuel}
                        </li>
                        <li>
                          <i className="far fa-road"></i>{car.consumption}
                        </li>
                        <li>
                          <i className="far fa-steering-wheel"></i>{car.transmission}
                        </li>
                      </ul>
                      <div className="car-footer">
                        <span className="car-price">
                          ${car.price} <sub>/ {car.period}</sub>
                        </span>
                        <button 
                          className="car-favorite-btn active"
                          onClick={() => handleRemoveFavorite(car.id)}
                          title="Remove from favorites"
                        >
                          <i className="fas fa-heart"></i>
                        </button>
                        <button 
                          className="theme-btn"
                          onClick={() => handleRentNow(car.id)}
                        >
                          Rent Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-state text-center py-5">
            <i className="far fa-heart" style={{ fontSize: '4rem', color: '#ccc', marginBottom: '1.5rem' }}></i>
            <h5>No favorite cars yet</h5>
            <p className="text-muted mb-4">
              Browse our car collection and add your favorites by clicking the heart icon.
            </p>
            <a href="/" className="theme-btn">
              <i className="far fa-search"></i> Browse Cars
            </a>
          </div>
        )}
      </div>

      {/* Favorites Statistics */}
      {favorites.length > 0 && (
        <div className="user-profile-card mt-4">
          <div className="user-profile-card-title">
            <h4>Favorites Overview</h4>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="favorite-stat">
                <div className="favorite-stat-icon text-primary">
                  <i className="far fa-heart"></i>
                </div>
                <div className="favorite-stat-info">
                  <h5>{favorites.length}</h5>
                  <span>Total Favorites</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="favorite-stat">
                <div className="favorite-stat-icon text-success">
                  <i className="far fa-gas-pump"></i>
                </div>
                <div className="favorite-stat-info">
                  <h5>{favorites.filter(car => car.fuel === 'Hybrid').length}</h5>
                  <span>Hybrid Cars</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="favorite-stat">
                <div className="favorite-stat-icon text-warning">
                  <i className="far fa-steering-wheel"></i>
                </div>
                <div className="favorite-stat-info">
                  <h5>{favorites.filter(car => car.transmission === 'Automatic').length}</h5>
                  <span>Automatic</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="favorite-stat">
                <div className="favorite-stat-icon text-info">
                  <i className="far fa-dollar-sign"></i>
                </div>
                <div className="favorite-stat-info">
                  <h5>${Math.round(favorites.reduce((sum, car) => sum + car.price, 0) / favorites.length)}</h5>
                  <span>Avg. Price</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ProfileLayout>
  );
};

export default Favorites;