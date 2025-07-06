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
            className={`nav-link ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
            type="button"
          >
            {data.tabs.details}
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
          <button 
            className={`nav-link ${activeTab === 'comments' ? 'active' : ''}`}
            onClick={() => setActiveTab('comments')}
            type="button"
          >
            {data.tabs.comments} (04)
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {activeTab === 'details' && (
          <div className="tab-pane fade show active">
            <div className="car-single-desc">
              {/* 
                DETALLES DEL VEHÍCULO - Solo especificaciones técnicas en listas
                La API debe retornar estos campos en el objeto car:
                - modeloAnio, modelo, marca, transmision, tipoCombustible, kilometraje
                - motor, cilindros, potencia, capacidad, color, colorInterior
                - puertas, rendimiento, estado, tipoVehiculo, version, placa
                Si un campo no existe en la API, no se muestra esa línea
              */}
              <div className="row">
                <div className="col-md-6">
                  <h5>Especificaciones técnicas</h5>
                  <ul className="list-unstyled">
                    {car.modeloAnio && <li><strong>Año:</strong> {car.modeloAnio}</li>}
                    {car.modelo && <li><strong>Modelo:</strong> {car.modelo}</li>}
                    {car.marca && <li><strong>Marca:</strong> {car.marca}</li>}
                    {car.transmision && <li><strong>Transmisión:</strong> {car.transmision}</li>}
                    {car.tipoCombustible && <li><strong>Combustible:</strong> {car.tipoCombustible}</li>}
                    {car.kilometraje && <li><strong>Kilometraje:</strong> {car.kilometraje} km</li>}
                    {car.motor && <li><strong>Motor:</strong> {car.motor}</li>}
                    {car.cilindros && <li><strong>Cilindros:</strong> {car.cilindros}</li>}
                    {car.potencia && <li><strong>Potencia:</strong> {car.potencia}</li>}
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5>Características adicionales</h5>
                  <ul className="list-unstyled">
                    {car.capacidad && <li><strong>Capacidad:</strong> {car.capacidad} personas</li>}
                    {car.color && <li><strong>Color:</strong> {car.color}</li>}
                    {car.colorInterior && <li><strong>Color interior:</strong> {car.colorInterior}</li>}
                    {car.puertas && <li><strong>Puertas:</strong> {car.puertas}</li>}
                    {car.rendimiento && <li><strong>Rendimiento:</strong> {car.rendimiento}</li>}
                    {car.estado && <li><strong>Estado:</strong> {car.estado}</li>}
                    {car.tipoVehiculo && <li><strong>Tipo:</strong> {car.tipoVehiculo}</li>}
                    {car.version && <li><strong>Versión:</strong> {car.version}</li>}
                    {car.placa && <li><strong>Placa:</strong> {car.placa}</li>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'additional' && (
          <div className="tab-pane fade show active">
            <div className="car-single-additional-info">
              {/* 
                INFORMACIÓN ADICIONAL - Solo párrafos de texto
                La API debe retornar estos campos como strings en el objeto car:
                - descripcion: Descripción general del vehículo
                - informacionAdicional: Información técnica adicional
                - observaciones: Observaciones importantes
                - historialMantenimiento: Historia de mantenimiento
                - condicionesVenta: Términos y condiciones
                - garantia: Información de garantía
                Si un campo no existe en la API, no se muestra esa sección
              */}
              {car.descripcion && (
                <div className="mb-3">
                  <h6>Descripción</h6>
                  <p>{car.descripcion}</p>
                </div>
              )}
              
              {car.informacionAdicional && (
                <div className="mb-3">
                  <h6>Información adicional</h6>
                  <p>{car.informacionAdicional}</p>
                </div>
              )}
              
              {car.observaciones && (
                <div className="mb-3">
                  <h6>Observaciones</h6>
                  <p>{car.observaciones}</p>
                </div>
              )}
              
              {car.historialMantenimiento && (
                <div className="mb-3">
                  <h6>Historial de mantenimiento</h6>
                  <p>{car.historialMantenimiento}</p>
                </div>
              )}
              
              {car.condicionesVenta && (
                <div className="mb-3">
                  <h6>Condiciones de venta</h6>
                  <p>{car.condicionesVenta}</p>
                </div>
              )}
              
              {car.garantia && (
                <div className="mb-3">
                  <h6>Garantía</h6>
                  <p>{car.garantia}</p>
                </div>
              )}
              
              {/* Si no hay información adicional específica, mostrar texto por defecto */}
              {!car.descripcion && !car.informacionAdicional && !car.observaciones && 
               !car.historialMantenimiento && !car.condicionesVenta && !car.garantia && (
                <p className="text-muted">No hay información adicional disponible para este vehículo.</p>
              )}
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

        {activeTab === 'comments' && (
          <div className="tab-pane fade show active">
            <div className="car-single-review">
              <div className="blog-comments">
                <h3>{data.tabs.comments} (04)</h3>
                <div className="blog-comments-wrapper">
                  {data.content.comments.map((comment, index) => (
                    <div key={index} className="blog-comments-single">
                      <img src={comment.avatar} alt="thumb" />
                      <div className="blog-comments-content">
                        <h5>
                          {comment.author}
                          {comment.isVendor && (
                            <span className="badge bg-primary ms-2">Vendedor</span>
                          )}
                        </h5>
                        <span><i className="far fa-clock"></i> {comment.date}</span>
                        <p>{comment.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {isActive && (
                  <div className="blog-comments-form">
                    <h3>Realizar pregunta</h3>
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input 
                              type="text" 
                              className="form-control" 
                              placeholder="Su nombre"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input 
                              type="email" 
                              className="form-control" 
                              placeholder="Su email"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea 
                              className="form-control" 
                              rows="4" 
                              placeholder="Escriba su pregunta sobre el vehículo..."
                            />
                          </div>
                          <button type="submit" className="theme-btn">
                            <i className="far fa-comment"></i> Enviar pregunta
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