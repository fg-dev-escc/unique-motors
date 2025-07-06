import React from 'react';

import { counterConfig } from './counterConfig';

const CounterSection = () => {

  const { data } = counterConfig;

  return (
    <div className="counter-area pt-30 pb-30">
      <div className="container">
        <div className="row">
          {data.counters.map((counter, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                  <img src={counter.icon} alt="" />
                </div>
                <div>
                  <span 
                    className="counter" 
                    data-count="+" 
                    data-to={counter.dataTo} 
                    data-speed="3000"
                  >
                    {counter.value}
                  </span>
                  <h6 className="title">
                    {counter.title}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;