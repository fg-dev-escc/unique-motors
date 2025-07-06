import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import Breadcrumb from '../../../../components/ui/Breadcrumb';
import CarImages from './CarImages/CarImages';
import CarInfo from './CarInfo/CarInfo';
import CarTabs from './CarTabs/CarTabs';
import RelatedCars from './RelatedCars/RelatedCars';

import { carDetailConfig } from './carDetailConfig';

const CarDetail = () => {
  // params
  const { id } = useParams();
  
  // state
  const [activeTab, setActiveTab] = useState('description');
  const [, setTick] = useState(0);

  // redux
  const dispatch = useDispatch();
  
  // config
  const { data, helpers } = carDetailConfig;

  // effects
  useEffect(() => {
    // timer for auction countdown
    const interval = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // mock car data - replace with Redux call
  const car = {
    id: id,
    nombre: "Toyota Corolla 2020",
    precio: 250000,
    modelo: "2020",
    capacidad: "5",
    tipoCombustible: "Híbrido",
    rendimiento: "18.5km / 1-litro",
    transmision: "Automático",
    fechaFin: "2024-12-31T23:59:59",
    urlImgPrincipal: "/assets/img/car/01.jpg",
    imagenes: [
      "/assets/img/car/01.jpg",
      "/assets/img/car/02.jpg", 
      "/assets/img/car/03.jpg",
      "/assets/img/car/04.jpg",
      "/assets/img/car/05.jpg"
    ],
    descripcion: "Vehículo en excelente estado, ideal para ciudad y carretera. Mantenimiento al día y listo para nuevo propietario.",
    vendedor: "AutoDealer Premium",
    comisionTransferencia: 500,
    comisionDisposicion: 750
  };

  const timeLeft = helpers.getTimeLeft(car.fechaFin);
  const isActive = timeLeft !== 'Subasta terminada';

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
                <CarImages car={car} />
              </div>
              <div className="col-lg-4">
                <CarInfo 
                  car={car} 
                  timeLeft={timeLeft} 
                  isActive={isActive} 
                  helpers={helpers}
                />
              </div>
            </div>
          </div>
          
          <CarTabs 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            car={car}
            isActive={isActive}
          />
          
          <RelatedCars helpers={helpers} />
        </div>
      </div>
    </>
  );
};

export default CarDetail;