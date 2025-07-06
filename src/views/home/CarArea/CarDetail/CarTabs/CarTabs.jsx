import React from 'react';

import { carTabsConfig } from './carTabsConfig';

const CarTabs = ({ activeTab, setActiveTab, car, isActive }) => {
  // config
  const { data, helpers } = carTabsConfig;

  // render
  return (
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
  );
};

export default CarTabs;