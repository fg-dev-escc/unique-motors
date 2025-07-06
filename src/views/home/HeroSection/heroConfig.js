// data
export const heroData = {
  buttons: {
    aboutMore: "Saber Más",
    learnMore: "Explorar Autos"
  },
  routes: {
    about: "/about",
    cars: "/cars"
  },
  slides: [
    {
      image: '/assets/img/slider/slider-1.jpg',
      subtitle: 'Encuentra tu Auto Ideal',
      title: 'Subastas de Vehículos <span>Premium</span>',
      description: 'Descubre miles de vehículos de calidad en nuestras subastas en línea. Los mejores precios, la mayor variedad y la confianza que necesitas para tu próxima compra.'
    },
    {
      image: '/assets/img/slider/slider-2.jpg',
      subtitle: 'Mejores Precios Garantizados',
      title: 'Compra y Vende con <span>Confianza</span>',
      description: 'Nuestra plataforma te ofrece seguridad y transparencia en cada transacción. Participa en subastas en tiempo real y encuentra el vehículo perfecto para ti.'
    },
    {
      image: '/assets/img/slider/slider-3.jpg',
      subtitle: 'Subastas en Tiempo Real',
      title: 'La Mejor Experiencia de <span>Compra</span>',
      description: 'Únete a nuestra comunidad de compradores y vendedores. Accede a un catálogo exclusivo de vehículos verificados y certificados por nuestros expertos.'
    }
  ]
};

// styles
export const heroStyles = {
  heroSingle: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },
  heroContent: {
    color: 'white',
    textAlign: 'left'
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#ffb300',
    marginBottom: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    lineHeight: '1.2',
    marginBottom: '1.5rem'
  },
  heroDescription: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
    opacity: '0.9',
    maxWidth: '500px'
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  primaryButton: {
    backgroundColor: '#6c63ff',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '8px',
    color: 'white',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease'
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    border: '2px solid white',
    padding: '12px 30px',
    borderRadius: '8px',
    color: 'white',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease'
  }
};

// helpers
export const heroHelpers = {
  getSlideBackground: (image) => {
    return `url(${image})`;
  },
  
  formatSlideTitle: (title) => {
    return { __html: title };
  },
  
  isValidSlideIndex: (index, totalSlides) => {
    return index >= 0 && index < totalSlides;
  }
};