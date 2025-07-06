import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

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

  // render
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
                <div className="py-3">Historial de pujas aquí...</div>
              </div>
              <div className="tab-pane fade" id="comentarios" role="tabpanel" aria-labelledby="comentarios-tab">
                <div className="py-3">Comentarios aquí...</div>
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