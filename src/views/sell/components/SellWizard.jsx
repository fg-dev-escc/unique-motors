import React, { useState } from 'react';

export default function ModernSellWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Datos personales
    nombre: '',
    email: '',
    telefono: '',
    // Información del auto
    marca: '',
    modelo: '',
    año: '',
    combustible: '',
    transmision: '',
    kilometraje: '',
    color: '',
    motor: '',
    precio: '',
    descripcion: '',
    // Imagen
    images: []
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      updateFormData('images', [...formData.images, ...files].slice(0, 5));
    }
  };

  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    updateFormData('images', newImages);
  };

  const steps = [
    { number: 1, title: 'Datos Personales', icon: 'fas fa-user', description: 'Tu información de contacto' },
    { number: 2, title: 'Información del Auto', icon: 'fas fa-car', description: 'Detalles de tu vehículo' },
    { number: 3, title: 'Fotos y Finalización', icon: 'fas fa-camera', description: 'Sube fotos y completa' }
  ];

  const handleSubmit = () => {
    console.log('Datos del formulario:', formData);
    alert('¡Auto registrado exitosamente!');
  };

  return (
    <div className="sell-wizard-area py-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            {/* Header */}
            <div className="text-center mb-5">
              <div className="site-heading">
                <span className="site-title-tagline">
                  <i className="fas fa-car"></i> Vender Auto
                </span>
                <h2 className="site-title">
                  Publica tu <span>Vehículo</span> en 3 pasos
                </h2>
                <p>Completa la información para que otros usuarios puedan ver tu auto</p>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="row mb-5">
              {steps.map((step, index) => (
                <div key={step.number} className="col-md-4">
                  <div className={`wizard-step ${currentStep >= step.number ? 'active' : ''}`}>
                    <div className="wizard-step-icon">
                      <i className={step.icon}></i>
                    </div>
                    <div className="wizard-step-content">
                      <h5>{step.title}</h5>
                      <p>{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="wizard-step-connector"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form Card */}
            <div className="wizard-form-card">
              <div className="wizard-form-header">
                <h4>
                  <i className={steps[currentStep - 1].icon}></i>
                  {steps[currentStep - 1].title}
                </h4>
              </div>
              
              <div className="wizard-form-body">
                {/* Step 1: Datos Personales */}
                {currentStep === 1 && (
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <h5 className="mb-3">
                        <i className="fas fa-user me-2"></i>
                        Información de Contacto
                      </h5>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          <i className="fas fa-user me-2"></i>
                          Nombre Completo
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.nombre}
                          onChange={(e) => updateFormData('nombre', e.target.value)}
                          placeholder="Tu nombre completo"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          <i className="fas fa-envelope me-2"></i>
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          <i className="fas fa-phone me-2"></i>
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          value={formData.telefono}
                          onChange={(e) => updateFormData('telefono', e.target.value)}
                          placeholder="Tu número de teléfono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Información del Auto */}
                {currentStep === 2 && (
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <h5 className="mb-3">
                        <i className="fas fa-car me-2"></i>
                        Detalles del Vehículo
                      </h5>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          <i className="fas fa-industry me-2"></i>
                          Marca
                        </label>
                        <select 
                          className="form-control"
                          value={formData.marca}
                          onChange={(e) => updateFormData('marca', e.target.value)}
                        >
                          <option value="">Seleccionar marca</option>
                          <option value="Toyota">Toyota</option>
                          <option value="Honda">Honda</option>
                          <option value="Ford">Ford</option>
                          <option value="BMW">BMW</option>
                          <option value="Mercedes">Mercedes</option>
                          <option value="Volkswagen">Volkswagen</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          <i className="fas fa-car-side me-2"></i>
                          Modelo
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.modelo}
                          onChange={(e) => updateFormData('modelo', e.target.value)}
                          placeholder="Ej: Corolla, Civic, etc."
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          <i className="fas fa-calendar me-2"></i>
                          Año
                        </label>
                        <select 
                          className="form-control"
                          value={formData.año}
                          onChange={(e) => updateFormData('año', e.target.value)}
                        >
                          <option value="">Seleccionar año</option>
                          {Array.from({length: 30}, (_, i) => 2024 - i).map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          <i className="fas fa-gas-pump me-2"></i>
                          Combustible
                        </label>
                        <select 
                          className="form-control"
                          value={formData.combustible}
                          onChange={(e) => updateFormData('combustible', e.target.value)}
                        >
                          <option value="">Tipo de combustible</option>
                          <option value="Gasolina">Gasolina</option>
                          <option value="Diesel">Diesel</option>
                          <option value="Híbrido">Híbrido</option>
                          <option value="Eléctrico">Eléctrico</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          <i className="fas fa-cogs me-2"></i>
                          Transmisión
                        </label>
                        <select 
                          className="form-control"
                          value={formData.transmision}
                          onChange={(e) => updateFormData('transmision', e.target.value)}
                        >
                          <option value="">Tipo de transmisión</option>
                          <option value="Manual">Manual</option>
                          <option value="Automática">Automática</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          <i className="fas fa-road me-2"></i>
                          Kilometraje
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={formData.kilometraje}
                          onChange={(e) => updateFormData('kilometraje', e.target.value)}
                          placeholder="Kilómetros recorridos"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          <i className="fas fa-palette me-2"></i>
                          Color
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.color}
                          onChange={(e) => updateFormData('color', e.target.value)}
                          placeholder="Color del vehículo"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          <i className="fas fa-dollar-sign me-2"></i>
                          Precio
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={formData.precio}
                          onChange={(e) => updateFormData('precio', e.target.value)}
                          placeholder="Precio de venta"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>
                          <i className="fas fa-comment me-2"></i>
                          Descripción
                        </label>
                        <textarea
                          className="form-control"
                          rows="4"
                          value={formData.descripcion}
                          onChange={(e) => updateFormData('descripcion', e.target.value)}
                          placeholder="Describe tu vehículo, menciona características especiales, estado, etc."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Fotos */}
                {currentStep === 3 && (
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <h5 className="mb-3">
                        <i className="fas fa-camera me-2"></i>
                        Fotos del Vehículo
                      </h5>
                      <p className="text-muted">
                        Sube hasta 5 fotos de tu vehículo. Las fotos de calidad ayudan a vender más rápido.
                      </p>
                    </div>
                    
                    {/* Upload Area */}
                    <div className="col-md-12">
                      <div className="upload-area">
                        <div className="upload-content">
                          <i className="fas fa-cloud-upload-alt"></i>
                          <h5>Arrastra fotos aquí o haz clic para seleccionar</h5>
                          <p>Formatos: JPG, PNG, WEBP (máx. 5 fotos)</p>
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="upload-input"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Preview Images */}
                    {formData.images.length > 0 && (
                      <div className="col-md-12 mt-4">
                        <h6>Fotos seleccionadas:</h6>
                        <div className="row">
                          {formData.images.map((image, index) => (
                            <div key={index} className="col-md-3 mb-3">
                              <div className="image-preview">
                                <img 
                                  src={URL.createObjectURL(image)} 
                                  alt={`Preview ${index + 1}`}
                                  className="preview-img"
                                />
                                <button
                                  type="button"
                                  className="remove-image-btn"
                                  onClick={() => removeImage(index)}
                                >
                                  <i className="fas fa-times"></i>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Summary */}
                    <div className="col-md-12 mt-4">
                      <div className="summary-card">
                        <h6><i className="fas fa-check-circle me-2"></i>Resumen</h6>
                        <div className="row">
                          <div className="col-md-6">
                            <p><strong>Vendedor:</strong> {formData.nombre}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Teléfono:</strong> {formData.telefono}</p>
                          </div>
                          <div className="col-md-6">
                            <p><strong>Vehículo:</strong> {formData.marca} {formData.modelo} {formData.año}</p>
                            <p><strong>Precio:</strong> ${formData.precio}</p>
                            <p><strong>Fotos:</strong> {formData.images.length}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="wizard-form-footer">
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className={`theme-btn ${currentStep === 1 ? 'disabled' : ''}`}
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Anterior
                  </button>
                  
                  <div className="step-indicator">
                    Paso {currentStep} de {steps.length}
                  </div>
                  
                  {currentStep < steps.length ? (
                    <button
                      type="button"
                      className="theme-btn"
                      onClick={nextStep}
                    >
                      Siguiente
                      <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="theme-btn"
                      onClick={handleSubmit}
                    >
                      <i className="fas fa-check me-2"></i>
                      Publicar Auto
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}