import React, { useState } from 'react';
import ProfileLayout from './ProfileLayout';

const MyListings = () => {
  // Mock data - en producción esto vendría de Redux/API
  const [listings] = useState([
    {
      id: 1,
      image: '/assets/img/car/01.jpg',
      name: 'Toyota Sports Car',
      year: 2020,
      transmission: 'Automatic',
      fuelType: 'Hybrid',
      price: '$600'
    },
    {
      id: 2,
      image: '/assets/img/car/02.jpg',
      name: 'BMW X5 2021',
      year: 2021,
      transmission: 'Automatic',
      fuelType: 'Petrol',
      price: '$800'
    },
    {
      id: 3,
      image: '/assets/img/car/03.jpg',
      name: 'Mercedes C-Class',
      year: 2019,
      transmission: 'Manual',
      fuelType: 'Diesel',
      price: '$750'
    }
  ]);

  const handleRemoveListing = (id) => {
    if (window.confirm('Are you sure you want to remove this listing?')) {
      // TODO: Dispatch remove listing action
      console.log('Remove listing:', id);
    }
  };

  return (
    <ProfileLayout title="My Car Listing">
      <div className="user-profile-card">
        <div className="user-profile-card-title">
          <h4>My Car Listing</h4>
        </div>
        <div className="car-table-content">
          <div className="car-table table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Car Info</th>
                  <th scope="col">Year</th>
                  <th scope="col">Transmission</th>
                  <th scope="col">Fuel Type</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {listings.length > 0 ? (
                  listings.map((car) => (
                    <tr key={car.id}>
                      <td>
                        <div className="car-table-name">
                          <img src={car.image} alt={car.name} />
                          <h6>{car.name}</h6>
                        </div>
                      </td>
                      <td>{car.year}</td>
                      <td>{car.transmission}</td>
                      <td>{car.fuelType}</td>
                      <td>{car.price}</td>
                      <td>
                        <button 
                          className="car-table-btn"
                          onClick={() => handleRemoveListing(car.id)}
                          title="Remove listing"
                        >
                          <i className="far fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      <div className="empty-state">
                        <i className="far fa-car" style={{ fontSize: '3rem', color: '#ccc', marginBottom: '1rem' }}></i>
                        <h5>No car listings found</h5>
                        <p className="text-muted">You haven't listed any cars yet.</p>
                        <a href="/vender" className="theme-btn mt-3">
                          <i className="far fa-plus"></i> Add Your First Car
                        </a>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default MyListings;