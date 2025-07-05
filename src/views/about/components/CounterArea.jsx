import React from 'react';

const CounterArea = () => {
  const counters = [
    {
      number: '5000+',
      title: 'Vehículos Vendidos',
      icon: 'fas fa-car'
    },
    {
      number: '3000+',
      title: 'Clientes Satisfechos',
      icon: 'fas fa-users'
    },
    {
      number: '150+',
      title: 'Subastas Activas',
      icon: 'fas fa-gavel'
    },
    {
      number: '10+',
      title: 'Años de Experiencia',
      icon: 'fas fa-award'
    }
  ];

  return (
    <div className="counter-area py-120">
      <div className="container">
        <div className="row">
          {counters.map((counter, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="counter-box">
                <div className="counter-icon">
                  <i className={counter.icon}></i>
                </div>
                <div className="counter-content">
                  <span className="counter-number">{counter.number}</span>
                  <h6 className="counter-title">{counter.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterArea;