import React from 'react';

import { sellConfirmationConfig } from './sellConfirmationConfig';

const SellConfirmation = ({ formData, onNewSubmission }) => {
  // config
  const { data } = sellConfirmationConfig;

  // handlers
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="booking-confirm py-120">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="booking-confirm-content">
              <i className="far fa-check"></i>
              <h3>{data.confirmation.title}</h3>
              <p>{data.confirmation.description}</p>
              <button onClick={onNewSubmission} className="theme-btn">
                {data.confirmation.button}
              </button>
            </div>
          </div>
          <div className="col-md-8 mx-auto mt-5">
            <div className="booking-summary">
              <h3>{data.summary.title} (#{data.summary.orderId})</h3>
              <div className="booking-summary-content">
                <div className="row g-5">
                  <div className="col-lg-6">
                    <div className="booking-summary-list">
                      <h6>{data.summary.sections.carInfo.title}</h6>
                      <ul>
                        <li>{data.summary.sections.carInfo.fields.brand} <span>{formData.marca || 'N/A'}</span></li>
                        <li>{data.summary.sections.carInfo.fields.model} <span>{formData.modelo || 'N/A'}</span></li>
                        <li>{data.summary.sections.carInfo.fields.year} <span>{formData.año || 'N/A'}</span></li>
                        <li>{data.summary.sections.carInfo.fields.fuel} <span>{formData.combustible || 'N/A'}</span></li>
                        <li>{data.summary.sections.carInfo.fields.transmission} <span>{formData.transmision || 'N/A'}</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="booking-summary-list">
                      <h6>{data.summary.sections.carDetails.title}</h6>
                      <ul>
                        <li>{data.summary.sections.carDetails.fields.mileage} <span>{formData.kilometraje || 'N/A'} km</span></li>
                        <li>{data.summary.sections.carDetails.fields.color} <span>{formData.color || 'N/A'}</span></li>
                        <li>{data.summary.sections.carDetails.fields.engine} <span>{formData.motor || 'N/A'}</span></li>
                        <li>{data.summary.sections.carDetails.fields.price} <span>${formData.precio || 'N/A'}</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="booking-summary-list">
                      <h6>{data.summary.sections.personalInfo.title}</h6>
                      <ul>
                        <li>{data.summary.sections.personalInfo.fields.name} <span>{formData.nombre || 'N/A'}</span></li>
                        <li>{data.summary.sections.personalInfo.fields.email} <span>{formData.email || 'N/A'}</span></li>
                        <li>{data.summary.sections.personalInfo.fields.phone} <span>{formData.telefono || 'N/A'}</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="booking-summary-list">
                      <h6>{data.summary.sections.submissionInfo.title}</h6>
                      <ul>
                        <li>{data.summary.sections.submissionInfo.fields.submissionId} <span>#{data.summary.orderId}</span></li>
                        <li>{data.summary.sections.submissionInfo.fields.status} <span className="text-warning">{data.summary.sections.submissionInfo.statusValue}</span></li>
                        <li>{data.summary.sections.submissionInfo.fields.submissionDate} <span>{new Date().toLocaleDateString('es-ES')}</span></li>
                        <li>{data.summary.sections.submissionInfo.fields.images} <span>{formData.images?.length || 0} {data.summary.sections.submissionInfo.imagesUnit}</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={handlePrint} className="theme-btn">
                {data.summary.printButton} <i className="far fa-print"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellConfirmation;