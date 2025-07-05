import React, { useState } from 'react';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ModernSellWizard from './components/SellWizard';

const Sell = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    marca: '',
    modelo: '',
    año: '',
    kilometraje: '',
    color: '',
    motor: '',
    transmision: '',
    combustible: '',
    precio: '',
    descripcion: '',
    telefono: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const marcas = [
    'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai', 
    'Kia', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Otro'
  ];

  const transmisiones = ['Manual', 'Automática', 'CVT'];
  const combustibles = ['Gasolina', 'Diésel', 'Híbrido', 'Eléctrico'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Aquí iría la lógica real de envío del formulario
      // Por ahora simulamos el envío
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitMessage('¡Gracias! Tu vehículo ha sido registrado exitosamente. Nos pondremos en contacto contigo pronto.');
      setFormData({
        nombre: '',
        marca: '',
        modelo: '',
        año: '',
        kilometraje: '',
        color: '',
        motor: '',
        transmision: '',
        combustible: '',
        precio: '',
        descripcion: '',
        telefono: '',
        email: ''
      });
    } catch (error) {
      setSubmitMessage('Lo sentimos, hubo un error al registrar tu vehículo. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ModernSellWizard />
    </>
  );
};

export default Sell;