import React from 'react';

import { carTabsConfig } from './carTabsConfig';

const CarTabs = ({ activeTab, setActiveTab, car, isActive }) => {
  // config
  const { data, helpers } = carTabsConfig;

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
                <h3>Historial de Pujas (08)</h3>
                
                <div className="auction-summary mb-4 p-3 bg-light rounded">
                  <div className="row">
                    <div className="col-md-3">
                      <strong>Puja Actual:</strong><br />
                      <span className="text-primary fs-5">$28,500,000</span>
                    </div>
                    <div className="col-md-3">
                      <strong>Puja Inicial:</strong><br />
                      <span>$20,000,000</span>
                    </div>
                    <div className="col-md-3">
                      <strong>Precio Reserva:</strong><br />
                      <span>$30,000,000</span>
                    </div>
                    <div className="col-md-3">
                      <strong>Tiempo Restante:</strong><br />
                      <span className="text-danger">2 días 14 horas</span>
                    </div>
                  </div>
                </div>

                <div className="blog-comments-wrapper">
                  <div className="blog-comments-single">
                    <div className="bid-avatar-container">
                      <i className="fas fa-user fs-3 text-primary"></i>
                      <span className="badge bg-success position-absolute top-0 start-100 translate-middle">
                        Ganando
                      </span>
                    </div>
                    <div className="blog-comments-content">
                      <h5>
                        Usuario***23
                        <span className="badge bg-secondary ms-2">Puja Manual</span>
                      </h5>
                      <span><i className="far fa-clock"></i> 15/03/2024 14:30</span>
                      <p>
                        <strong>Monto de la puja: $28,500,000</strong>
                        <span className="text-success ms-2">
                          <i className="fas fa-trophy"></i> Puja ganadora actual
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="blog-comments-single">
                    <div className="bid-avatar-container">
                      <i className="fas fa-robot fs-3 text-primary"></i>
                    </div>
                    <div className="blog-comments-content">
                      <h5>
                        AutoBid***67
                        <span className="badge bg-secondary ms-2">Puja Automática</span>
                      </h5>
                      <span><i className="far fa-clock"></i> 15/03/2024 14:28</span>
                      <p><strong>Monto de la puja: $28,000,000</strong></p>
                    </div>
                  </div>
                  
                  <div className="blog-comments-single">
                    <div className="bid-avatar-container">
                      <i className="fas fa-user fs-3 text-primary"></i>
                    </div>
                    <div className="blog-comments-content">
                      <h5>
                        Usuario***45
                        <span className="badge bg-secondary ms-2">Puja Manual</span>
                      </h5>
                      <span><i className="far fa-clock"></i> 15/03/2024 14:25</span>
                      <p><strong>Monto de la puja: $27,500,000</strong></p>
                    </div>
                  </div>
                  
                  <div className="blog-comments-single">
                    <div className="bid-avatar-container">
                      <i className="fas fa-user fs-3 text-primary"></i>
                    </div>
                    <div className="blog-comments-content">
                      <h5>
                        BidMaster***12
                        <span className="badge bg-secondary ms-2">Puja Manual</span>
                      </h5>
                      <span><i className="far fa-clock"></i> 15/03/2024 14:20</span>
                      <p><strong>Monto de la puja: $27,000,000</strong></p>
                    </div>
                  </div>
                </div>

                {isActive && (
                  <div className="blog-comments-form">
                    <h3>Realizar Puja</h3>
                    <div className="alert alert-info">
                      <i className="fas fa-info-circle"></i> 
                      Tu puja debe ser mayor a $28,500,000. Incremento mínimo: $500,000
                    </div>
                    
                    <form>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Monto de la Puja</label>
                            <input 
                              type="number" 
                              className="form-control" 
                              placeholder="Mínimo: $29,000,000"
                              min="29000000"
                              step="500000"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Tu Nombre*" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="email" className="form-control" placeholder="Tu Email*" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea className="form-control" rows="3" placeholder="Comentario opcional sobre tu puja..."></textarea>
                          </div>
                          <button type="submit" className="theme-btn">
                            <i className="fas fa-gavel"></i> Realizar Puja
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
                <h3>Comentarios (05)</h3>
                <div className="blog-comments-wrapper">
                  <div className="blog-comments-single">
                    <img src="assets/img/blog/com-1.jpg" alt="thumb" />
                    <div className="blog-comments-content">
                      <h5>María González</h5>
                      <div className="mb-2">
                        <div className="car-single-rating d-inline-block me-3">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span><i className="far fa-clock"></i> 15 Marzo, 2024</span>
                      </div>
                      <p>Excelente vehículo, muy bien cuidado. El proceso de puja fue muy transparente y la comunicación con el vendedor fue perfecta. Totalmente recomendado.</p>
                      <a href="#"><i className="far fa-reply"></i> Responder</a>
                    </div>
                  </div>
                  
                  <div className="blog-comments-single">
                    <img src="assets/img/blog/com-2.jpg" alt="thumb" />
                    <div className="blog-comments-content">
                      <h5>Carlos Rodríguez</h5>
                      <div className="mb-2">
                        <div className="car-single-rating d-inline-block me-3">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <span><i className="far fa-clock"></i> 12 Marzo, 2024</span>
                      </div>
                      <p>Buen auto, aunque tiene algunos detalles menores. El precio final fue justo considerando el estado del vehículo. La entrega fue puntual.</p>
                      <a href="#"><i className="far fa-reply"></i> Responder</a>
                    </div>
                  </div>
                  
                  <div className="blog-comments-single">
                    <img src="assets/img/blog/com-3.jpg" alt="thumb" />
                    <div className="blog-comments-content">
                      <h5>Ana López</h5>
                      <div className="mb-2">
                        <div className="car-single-rating d-inline-block me-3">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span><i className="far fa-clock"></i> 10 Marzo, 2024</span>
                      </div>
                      <p>Increíble experiencia de compra. El auto superó mis expectativas y el vendedor fue muy honesto con todos los detalles. Definitivamente volvería a comprar aquí.</p>
                      <a href="#"><i className="far fa-reply"></i> Responder</a>
                    </div>
                  </div>
                </div>

                {isActive && (
                  <div className="blog-comments-form">
                    <h3>Dejar un Comentario</h3>
                    <form>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group car-review-rating">
                            <label>Tu Calificación</label>
                            <div>
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                              <i className="far fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Tu Nombre*" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="email" className="form-control" placeholder="Tu Email*" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea className="form-control" rows="5" placeholder="Tu Comentario*"></textarea>
                          </div>
                          <button type="submit" className="theme-btn">
                            <i className="far fa-paper-plane"></i> Enviar Comentario
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