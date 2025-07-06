import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { consLogged } from '../../../../const/consLogged';

import Breadcrumb from '../../../../components/ui/Breadcrumb';
import CarImages from './CarImages/CarImages';
import CarInfo from './CarInfo/CarInfo';
import CarTabs from './CarTabs/CarTabs';
import RelatedCars from './RelatedCars/RelatedCars';

import { carDetailConfig } from './carDetailConfig';
import { getCarDetail } from '../../../../api/api'; // Debes crear esta función

const CarDetail = () => {
  // params
  const { id } = useParams();
  
  // auth state
  const { logged, user } = useSelector(state => state.userReducer);
  const isAuthenticated = logged === consLogged.LOGGED;
  
  // state
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  const [, setTick] = useState(0);
  const sliderRef = useRef();

  // config
  const { data, helpers } = carDetailConfig;

  // effects
  useEffect(() => {
    setLoading(true);
    getCarDetail(id)
      .then(data => {
        setCar(data);
        setLoading(false);
      })
      .catch(err => {
        setError('No se pudo cargar el auto');
        setLoading(false);
      });
    // timer for auction countdown
    const interval = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, [id]);

  // Inicializa Owl Carousel cuando car.imagenes cambia
  useEffect(() => {
    if (car && car.imagenes && window.$ && window.$(sliderRef.current).owlCarousel) {
      window.$(sliderRef.current).owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        navText: [
          "<i class='fal fa-long-arrow-left'></i>",
          "<i class='fal fa-long-arrow-right'></i>"
        ],
      });
    }
  }, [car]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;
  if (!car) return null;

  const timeLeft = helpers.getTimeLeft(car.fechaFin);
  const isActive = timeLeft !== 'Subasta terminada';

  // Agrupar especificaciones por categoría
  const detallesVehiculoCampos = [
    'Marca', 'Version', 'Submarca', 'Modelo', 'Origen', 'Carrocería', 'Edición Especial', 'Pais de Origen', 'Combustible', 'Transmision', 'Km', 'No Dueños', 'Motor', 'Color'
  ];
  const detallesVehiculo = car && car.valores ? car.valores.filter(spec => detallesVehiculoCampos.includes(spec.campo)) : [];
  const infoAdicional = car && car.valores ? car.valores.filter(spec => !detallesVehiculoCampos.includes(spec.campo)) : [];

  return (
    <>
      <Breadcrumb 
        title={data.breadcrumb.title} 
        currentPage={data.breadcrumb.currentPage}
      />
      <div className="car-item-single py-120">
        <div className="container">
          <div className="car-single-wrapper">
            <div className="row">
              <div className="col-lg-8">
                {/* Slider principal de imágenes (Owl Carousel) */}
                <div className="car-single-slider-box mb-3">
                  <div className="car-single-slider owl-carousel owl-theme" ref={sliderRef}>
                    {car.imagenes && car.imagenes.map(img => (
                      <div key={img.articuloDocumentoID}>
                        <img src={img.url} alt={img.nombre} style={{width:'100%',maxHeight:350,objectFit:'cover',borderRadius:12}} />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Galería de imágenes */}
                <div className="car-gallery mt-4">
                  <h4>Galería</h4>
                  <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                    {car.imagenes && car.imagenes.map(img => (
                      <img key={img.articuloDocumentoID} src={img.url} alt={img.nombre} style={{width:100,borderRadius:8}} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                {/* Aquí solo va el título, estado, timer y puja, sin specs */}
                <CarInfo 
                  car={car} 
                  timeLeft={timeLeft} 
                  isActive={isActive} 
                  helpers={helpers}
                />
              </div>
            </div>
          </div>
          {/* Etiquetas de navegación inferiores */}
          <div className="car-bottom-tabs mt-5">
            <ul className="nav nav-tabs" id="carDetailTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="detalles-tab" data-bs-toggle="tab" data-bs-target="#detalles" type="button" role="tab" aria-controls="detalles" aria-selected="true">Detalles del vehículo</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="false">Información adicional</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="historial-tab" data-bs-toggle="tab" data-bs-target="#historial" type="button" role="tab" aria-controls="historial" aria-selected="false">Historial de pujas (05)</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="comentarios-tab" data-bs-toggle="tab" data-bs-target="#comentarios" type="button" role="tab" aria-controls="comentarios" aria-selected="false">Comentarios (04)</button>
              </li>
            </ul>
            <div className="tab-content" id="carDetailTabsContent">
              <div className="tab-pane fade show active" id="detalles" role="tabpanel" aria-labelledby="detalles-tab">
                <ul style={{listStyle:'none',padding:0,marginTop:16}}>
                  {detallesVehiculo.map(spec => (
                    <li key={spec.campo}><b>{spec.campo}:</b> {spec.valor}</li>
                  ))}
                </ul>
              </div>
              <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                <ul style={{listStyle:'none',padding:0,marginTop:16}}>
                  {infoAdicional.map(spec => (
                    <li key={spec.campo}><b>{spec.campo}:</b> {spec.valor}</li>
                  ))}
                </ul>
              </div>
              <div className="tab-pane fade" id="historial" role="tabpanel" aria-labelledby="historial-tab">
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
                        <div className="bid-avatar-container position-relative">
                          <div className="user-avatar">
                            <i className="fas fa-user"></i>
                          </div>
                          <span className="badge bg-success position-absolute winning-badge">
                            #1
                          </span>
                        </div>
                        <div className="blog-comments-content">
                          <h5>
                            Usuario***23
                            <span className="badge bg-primary ms-2">Manual</span>
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
                          <div className="user-avatar">
                            <i className="fas fa-robot"></i>
                          </div>
                        </div>
                        <div className="blog-comments-content">
                          <h5>
                            AutoBid***67
                            <span className="badge bg-secondary ms-2">Automática</span>
                          </h5>
                          <span><i className="far fa-clock"></i> 15/03/2024 14:28</span>
                          <p><strong>Monto de la puja: $28,000,000</strong></p>
                        </div>
                      </div>
                      
                      <div className="blog-comments-single">
                        <div className="bid-avatar-container">
                          <div className="user-avatar">
                            <i className="fas fa-user"></i>
                          </div>
                        </div>
                        <div className="blog-comments-content">
                          <h5>
                            Usuario***45
                            <span className="badge bg-primary ms-2">Manual</span>
                          </h5>
                          <span><i className="far fa-clock"></i> 15/03/2024 14:25</span>
                          <p><strong>Monto de la puja: $27,500,000</strong></p>
                        </div>
                      </div>
                      
                      <div className="blog-comments-single">
                        <div className="bid-avatar-container">
                          <div className="user-avatar">
                            <i className="fas fa-user"></i>
                          </div>
                        </div>
                        <div className="blog-comments-content">
                          <h5>
                            BidMaster***12
                            <span className="badge bg-primary ms-2">Manual</span>
                          </h5>
                          <span><i className="far fa-clock"></i> 15/03/2024 14:20</span>
                          <p><strong>Monto de la puja: $27,000,000</strong></p>
                        </div>
                      </div>
                      
                      <div className="blog-comments-single">
                        <div className="bid-avatar-container">
                          <div className="user-avatar">
                            <i className="fas fa-robot"></i>
                          </div>
                        </div>
                        <div className="blog-comments-content">
                          <h5>
                            AutoBid***89
                            <span className="badge bg-secondary ms-2">Automática</span>
                          </h5>
                          <span><i className="far fa-clock"></i> 15/03/2024 14:15</span>
                          <p><strong>Monto de la puja: $26,500,000</strong></p>
                        </div>
                      </div>
                    </div>

                    {isActive && (
                      <div className="blog-comments-form">
                        <h3>Realizar Puja</h3>
                        {!isAuthenticated ? (
                          <div className="alert alert-warning text-center">
                            <i className="fas fa-sign-in-alt fs-2 mb-3"></i>
                            <h5>Debes ingresar para hacer una oferta</h5>
                            <p className="mb-3">Para participar en las subastas necesitas tener una cuenta activa</p>
                            <a href="/login" className="theme-btn me-2">
                              <i className="fas fa-sign-in-alt"></i> Iniciar Sesión
                            </a>
                            <a href="/register" className="theme-btn theme-btn-outline">
                              <i className="fas fa-user-plus"></i> Registrarse
                            </a>
                          </div>
                        ) : (
                          <div>
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
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <textarea 
                                      className="form-control" 
                                      rows="3" 
                                      placeholder="Comentario opcional sobre tu puja..."
                                    />
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
                    )}
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="comentarios" role="tabpanel" aria-labelledby="comentarios-tab">
                <div className="car-single-review">
                  <div className="blog-comments">
                    <h3>Comentarios (05)</h3>
                    <div className="blog-comments-wrapper">
                      <div className="blog-comments-single">
                        <div className="bid-avatar-container">
                          <div className="user-avatar">
                            <i className="fas fa-user"></i>
                          </div>
                        </div>
                        <div className="blog-comments-content">
                          <h5>María González</h5>
                          <span><i className="far fa-clock"></i> 15 Marzo, 2024</span>
                          <p>¿El motor tiene algún problema conocido? ¿Se siente suave al acelerar?</p>
                          <a href="#"><i className="far fa-reply"></i> Responder</a>
                        </div>
                      </div>
                      
                      <div className="blog-comments-single">
                        <div className="bid-avatar-container">
                          <div className="user-avatar">
                            <i className="fas fa-user"></i>
                          </div>
                        </div>
                        <div className="blog-comments-content">
                          <h5>Carlos Rodríguez</h5>
                          <span><i className="far fa-clock"></i> 12 Marzo, 2024</span>
                          <p>¿Los neumáticos son originales? ¿Cuánto falta para el próximo cambio de aceite?</p>
                          <a href="#"><i className="far fa-reply"></i> Responder</a>
                        </div>
                      </div>
                      
                      <div className="blog-comments-single">
                        <div className="bid-avatar-container">
                          <div className="user-avatar">
                            <i className="fas fa-user"></i>
                          </div>
                        </div>
                        <div className="blog-comments-content">
                          <h5>Ana López</h5>
                          <span><i className="far fa-clock"></i> 10 Marzo, 2024</span>
                          <p>¿El aire acondicionado funciona perfectamente? ¿Ha tenido algún trabajo de hojalatería?</p>
                          <a href="#"><i className="far fa-reply"></i> Responder</a>
                        </div>
                      </div>
                      
                      <div className="blog-comments-single">
                        <div className="bid-avatar-container">
                          <div className="user-avatar">
                            <i className="fas fa-user"></i>
                          </div>
                        </div>
                        <div className="blog-comments-content">
                          <h5>Diego Silva</h5>
                          <span><i className="far fa-clock"></i> 8 Marzo, 2024</span>
                          <p>¿Están incluidas las llaves de repuesto? ¿Todos los sistemas eléctricos funcionan bien?</p>
                          <a href="#"><i className="far fa-reply"></i> Responder</a>
                        </div>
                      </div>
                      
                      <div className="blog-comments-single">
                        <div className="bid-avatar-container">
                          <div className="user-avatar">
                            <i className="fas fa-user"></i>
                          </div>
                        </div>
                        <div className="blog-comments-content">
                          <h5>Laura Martínez</h5>
                          <span><i className="far fa-clock"></i> 5 Marzo, 2024</span>
                          <p>¿Se puede hacer una inspección mecánica antes de finalizar? ¿Está al día con la revisión técnico-mecánica?</p>
                          <a href="#"><i className="far fa-reply"></i> Responder</a>
                        </div>
                      </div>
                    </div>

                    <div className="blog-comments-form">
                      <h3>Hacer una Pregunta</h3>
                      {!isAuthenticated ? (
                        <div className="alert alert-warning text-center">
                          <i className="fas fa-sign-in-alt fs-2 mb-3"></i>
                          <h5>Debes ingresar para hacer un comentario</h5>
                          <p className="mb-3">Para hacer preguntas sobre el vehículo necesitas tener una cuenta</p>
                          <a href="/login" className="theme-btn me-2">
                            <i className="fas fa-sign-in-alt"></i> Iniciar Sesión
                          </a>
                          <a href="/register" className="theme-btn theme-btn-outline">
                            <i className="fas fa-user-plus"></i> Registrarse
                          </a>
                        </div>
                      ) : (
                        <form>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea 
                                  className="form-control" 
                                  rows="4" 
                                  placeholder="Escribe tu pregunta sobre el vehículo..."
                                />
                              </div>
                              <button type="submit" className="theme-btn">
                                <i className="far fa-comment"></i> Enviar Pregunta
                              </button>
                            </div>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RelatedCars helpers={helpers} />
        </div>
      </div>
    </>
  );
};

export default CarDetail;