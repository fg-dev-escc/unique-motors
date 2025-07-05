## DIRECTORIO SRC

### **main.jsx**
- **Propósito**: Punto de entrada de la aplicación React con carga de dependencias externas
- **Funciones Clave**:
  - `createRoot()` - Inicializa React 19
  - `loadScript()` - Carga scripts externos de forma asíncrona
  - `loadAllScripts()` - Gestiona la carga secuencial de librerías
- **Scripts Externos**: jQuery, Bootstrap, Owl Carousel, WOW.js, jQuery UI
- **Conecta Con**: App.jsx, archivos CSS globales
- **Alternativas**: 
  ```javascript
  // Carga dinámica con error handling
  const loadScriptWithFallback = async (src, fallback) => {
    try {
      await loadScript(src);
    } catch (error) {
      console.warn(`Failed to load ${src}, using fallback`);
      if (fallback) await loadScript(fallback);
    }
  };

  // Lazy loading de scripts no críticos
  const loadNonCriticalScripts = () => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => loadScript('/assets/js/analytics.js'));
    }
  };
  ```
- **Depuración**: Verificar orden de carga y dependencias entre librerías
- **Tip Corporativo**: Implementar monitoreo de errores de carga y estrategias de fallback para scripts críticos

### **App.jsx**
- **Propósito**: Componente raíz que configura la estructura principal de la aplicación
- **Función**: `App()` - Configura router, preloader y componentes de layout
- **Características**: 
  - Preloader animado
  - Configuración de rutas
  - Layout wrapper
  - Scroll to top
- **Conecta Con**: Router, Header, Footer, ScrollTop
- **Alternativas**: 
  ```jsx
  // App con providers globales y error boundary
  function App() {
    return (
      <ErrorBoundary>
        <ThemeProvider>
          <AuthProvider>
            <div className="App">
              <Suspense fallback={<GlobalLoader />}>
                <Router>
                  <Routes>
                    {/* Rutas */}
                  </Routes>
                </Router>
              </Suspense>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </ErrorBoundary>
    );
  }
  ```

### **App.css** & **index.css**
- **Propósito**: Estilos globales y configuración CSS
- **Imports Principales**: 
  - Bootstrap 5.3.7
  - FontAwesome 6.7.2
  - Animate.css
  - Owl Carousel
  - jQuery UI
  - Estilos personalizados del tema
- **Características**: 
  - Variables CSS customizadas
  - Reset de estilos
  - Animaciones de preloader
  - Responsive design
- **Alternativas**: 
  ```css
  /* Usando CSS custom properties para theming */
  :root {
    --primary-hue: 210;
    --primary-sat: 100%;
    --primary-light: 50%;
    --primary-color: hsl(var(--primary-hue), var(--primary-sat), var(--primary-light));
    --primary-dark: hsl(var(--primary-hue), var(--primary-sat), 30%);
    
    /* Sistema de espaciado consistente */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
  }
  ```

---

## DIRECTORIO COMPONENTS

### 📁 **layout/** - Componentes de Estructura

#### **Header.jsx**
- **Propósito**: Cabecera de navegación principal con funcionalidad completa
- **Función**: `Header()` - Navegación responsive con múltiples características
- **Estado**: 
  - `isNavCollapsed` - Control del menú móvil
  - `location` - Ruta actual para navegación activa
- **Características**: 
  - Header top con información de contacto
  - Navegación principal responsive
  - Menú de usuario con dropdown
  - Toggle para dispositivos móviles
  - Enlaces sociales
- **Conecta Con**: Sistema de rutas, autenticación
- **Alternativas**: 
  ```jsx
  // Header con hook personalizado para navegación
  const useNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    
    const isActive = useCallback((path) => {
      return location.pathname === path;
    }, [location.pathname]);
    
    return { isOpen, setIsOpen, isActive };
  };

  const Header = () => {
    const { isOpen, setIsOpen, isActive } = useNavigation();
    
    return (
      <header className="header">
        <TopBar />
        <MainNav isOpen={isOpen} onToggle={setIsOpen} isActive={isActive} />
      </header>
    );
  };
  ```
- **Tip Corporativo**: Implementar analytics para tracking de navegación y A/B testing de elementos del header

#### **Footer.jsx**
- **Propósito**: Pie de página con información corporativa y suscripción
- **Función**: `Footer()` - Footer completo con múltiples secciones
- **Estado**: `email` - Gestión de suscripción a newsletter
- **Características**: 
  - Información de la empresa
  - Enlaces rápidos organizados
  - Formulario de newsletter
  - Enlaces sociales
  - Copyright dinámico
- **Conecta Con**: Formularios, redes sociales, páginas internas
- **Alternativas**: 
  ```jsx
  // Footer modular con componentes especializados
  const Footer = () => {
    return (
      <footer className="footer-area">
        <FooterWidgets>
          <CompanyInfo />
          <QuickLinks />
          <HelpCenter />
          <NewsletterWidget />
        </FooterWidgets>
        <CopyrightBar />
      </footer>
    );
  };

  // Hook para newsletter
  const useNewsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    
    const subscribe = async (email) => {
      setStatus('loading');
      try {
        await api.post('/newsletter/subscribe', { email });
        setStatus('success');
        setEmail('');
      } catch (error) {
        setStatus('error');
      }
    };
    
    return { email, setEmail, status, subscribe };
  };
  ```

### 📁 **sections/** - Secciones de Contenido Reutilizables

#### **HeroSlider.jsx**
- **Propósito**: Carrusel principal de la homepage con contenido promocional
- **Función**: `HeroSlider()` - Slider avanzado con animaciones
- **Datos**: Array de slides con configuración completa
- **Características**: 
  - Autoplay con pausa en hover
  - Navegación con flechas
  - Animaciones de contenido (fadeIn, slideIn)
  - Responsive design
  - Enlaces a secciones específicas
- **Librerías**: Owl Carousel, Animate.css
- **Alternativas**: 
  ```jsx
  // Slider moderno con Swiper
  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Autoplay, Navigation, EffectFade } from 'swiper/modules';

  const ModernHeroSlider = () => {
    return (
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        loop
        className="hero-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  ```
- **Tip Corporativo**: Usar lazy loading para imágenes y implementar métricas de engagement por slide

#### **FindCarForm.jsx**
- **Propósito**: Formulario avanzado de búsqueda de vehículos
- **Función**: `FindCarForm()` - Formulario complejo con validación
- **Estado**: `formData` - Objeto con todos los campos de búsqueda
- **Características**: 
  - Date pickers con restricciones
  - Time pickers
  - Autocompletado de ubicaciones
  - Validación en tiempo real
  - Responsive layout
- **Librerías**: jQuery UI, Timepicker
- **Alternativas**: 
  ```jsx
  // Formulario con react-hook-form y validación avanzada
  import { useForm, Controller } from 'react-hook-form';
  import { yupResolver } from '@hookform/resolvers/yup';
  import * as yup from 'yup';

  const schema = yup.object({
    car: yup.string().required('Selecciona un tipo de vehículo'),
    pickupLocation: yup.string().required('Ubicación de recogida requerida'),
    pickupDate: yup.date().min(new Date(), 'La fecha debe ser futura').required(),
    pickupTime: yup.string().required('Hora de recogida requerida')
  });

  const AdvancedFindCarForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    });

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="pickupDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              minDate={new Date()}
              placeholderText="Fecha de recogida"
              className={errors.pickupDate ? 'error' : ''}
            />
          )}
        />
      </form>
    );
  };
  ```

#### **CarArea.jsx**
- **Propósito**: Sección de vehículos destacados con funcionalidad interactiva
- **Función**: `CarArea()` - Grid de vehículos con sistema de favoritos
- **Estado**: `favorites` - Array de IDs de vehículos favoritos
- **Características**: 
  - Cards de vehículos con información detallada
  - Sistema de favoritos persistente
  - Botones de acción (rentar, ver detalles)
  - Ratings con estrellas
  - Responsive grid
- **Conecta Con**: Páginas de detalle, sistema de favoritos, reservas
- **Alternativas**: 
  ```jsx
  // Sistema de favoritos con Context API
  const FavoritesContext = createContext();

  export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
      throw new Error('useFavorites must be used within FavoritesProvider');
    }
    return context;
  };

  export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
      const saved = localStorage.getItem('favorites');
      return saved ? JSON.parse(saved) : [];
    });

    const toggleFavorite = useCallback((carId) => {
      setFavorites(prev => {
        const newFavorites = prev.includes(carId)
          ? prev.filter(id => id !== carId)
          : [...prev, carId];
        
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        return newFavorites;
      });
    }, []);

    return (
      <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
        {children}
      </FavoritesContext.Provider>
    );
  };
  ```

#### **CounterArea.jsx**
- **Propósito**: Sección de estadísticas animadas con contadores
- **Función**: `CounterArea()` - Contadores con animación en scroll
- **Estado**: 
  - `counts` - Valores actuales de los contadores
  - `hasAnimated` - Control de animación única
- **Características**: 
  - Animación activada por Intersection Observer
  - Contadores incrementales suaves
  - Iconografía personalizada
  - Responsive design
- **Alternativas**: 
  ```jsx
  // Hook reutilizable para contadores animados
  const useAnimatedCounter = (target, duration = 2000, trigger = true) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!trigger) return;
      
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * target));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [target, duration, trigger]);
    
    return count;
  };

  const CounterItem = ({ target, title, icon, inView }) => {
    const count = useAnimatedCounter(target, 2000, inView);
    
    return (
      <div className="counter-box">
        <div className="icon">
          <img src={icon} alt="" />
        </div>
        <div>
          <span className="counter">{count.toLocaleString()}</span>
          <h6 className="title">{title}</h6>
        </div>
      </div>
    );
  };
  ```

### 📁 **ui/** - Componentes de Interfaz de Usuario

#### **Breadcrumb.jsx**
- **Propósito**: Componente de navegación breadcrumb para orientación del usuario
- **Función**: `Breadcrumb({ title, currentPage })` - Ruta de navegación visual
- **Props**: 
  - `title` - Título principal de la página
  - `currentPage` - Nombre de la página actual
- **Características**: 
  - Fondo personalizable
  - Enlaces navegables
  - Separadores estilizados
- **Conecta Con**: Sistema de rutas, navegación
- **Alternativas**: 
  ```jsx
  // Breadcrumb automático basado en rutas
  const AutoBreadcrumb = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const pathnames = location.pathname.split('/').filter(x => x);
    
    const breadcrumbNameMap = {
      '/cars': 'Vehículos',
      '/about': 'Acerca de',
      '/contact': 'Contacto',
      '/services': 'Servicios'
    };
    
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb-menu">
          <li>
            <button onClick={() => navigate('/')}>Inicio</button>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNameMap[routeTo] || name;
            
            return (
              <li key={name} className={isLast ? 'active' : ''}>
                {isLast ? (
                  <span>{displayName}</span>
                ) : (
                  <button onClick={() => navigate(routeTo)}>
                    {displayName}
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  };
  ```

#### **ScrollTop.jsx**
- **Propósito**: Botón de scroll hacia arriba con funcionalidad suave
- **Función**: `ScrollTop()` - Botón flotante para navegación rápida
- **Estado**: `isVisible` - Visibilidad basada en posición de scroll
- **Características**: 
  - Aparición/desaparición suave
  - Scroll animado hacia arriba
  - Posición fija responsive
- **Alternativas**: 
  ```jsx
  // Hook para scroll management
  const useScrollTop = (showAfter = 300) => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      const toggleVisibility = throttle(() => {
        setIsVisible(window.pageYOffset > showAfter);
      }, 100);
      
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, [showAfter]);
    
    const scrollToTop = useCallback(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, []);
    
    return { isVisible, scrollToTop };
  };

  // Componente optimizado
  const ScrollTop = ({ showAfter = 300, className = '' }) => {
    const { isVisible, scrollToTop } = useScrollTop(showAfter);
    
    return (
      <button
        className={`scroll-top ${className} ${isVisible ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Volver arriba"
        style={{
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? 'visible' : 'hidden',
          transition: 'all 0.3s ease'
        }}
      >
        <i className="far fa-arrow-up"></i>
      </button>
    );
  };
  ```

#### **CarSidebar.jsx**
- **Propósito**: Sidebar de filtros para búsqueda avanzada de vehículos
- **Función**: `CarSidebar({ onFilterChange })` - Panel de filtros interactivo
- **Estado**: 
  - `searchTerm` - Término de búsqueda
  - `selectedBrands` - Marcas seleccionadas
  - `selectedTransmission` - Tipos de transmisión
  - `selectedFuel` - Tipos de combustible
- **Características**: 
  - Búsqueda en tiempo real
  - Filtros múltiples por categoría
  - Checkboxes con estado persistente
  - Callback para comunicación con componente padre
- **Alternativas**: 
  ```jsx
  // Sidebar con reducer para estado complejo
  const filtersReducer = (state, action) => {
    switch (action.type) {
      case 'SET_SEARCH':
        return { ...state, search: action.payload };
      case 'TOGGLE_BRAND':
        const brands = state.brands.includes(action.payload)
          ? state.brands.filter(b => b !== action.payload)
          : [...state.brands, action.payload];
        return { ...state, brands };
      case 'RESET_FILTERS':
        return initialFilters;
      default:
        return state;
    }
  };

  const AdvancedCarSidebar = ({ onFilterChange }) => {
    const [filters, dispatch] = useReducer(filtersReducer, initialFilters);
    
    useEffect(() => {
      onFilterChange(filters);
    }, [filters, onFilterChange]);
    
    return (
      <aside className="car-sidebar">
        <SearchWidget 
          value={filters.search}
          onChange={(search) => dispatch({ type: 'SET_SEARCH', payload: search })}
        />
        <BrandFilter
          selected={filters.brands}
          onToggle={(brand) => dispatch({ type: 'TOGGLE_BRAND', payload: brand })}
        />
        <button onClick={() => dispatch({ type: 'RESET_FILTERS' })}>
          Limpiar Filtros
        </button>
      </aside>
    );
  };
  ```

---

## DIRECTORIO PAGES

### **Home.jsx**
- **Propósito**: Página principal con todas las secciones de inicio
- **Función**: `Home()` - Orquesta todos los componentes de la homepage
- **Secciones Incluidas**: 
  - HeroSlider - Carrusel principal
  - FindCarForm - Formulario de búsqueda
  - FeatureArea - Características del servicio
  - AboutArea - Sección sobre nosotros
  - CarArea - Vehículos destacados
  - ProcessArea - Proceso paso a paso
  - ChooseArea - Por qué elegirnos
  - FaqArea - Preguntas frecuentes
  - TestimonialArea - Testimonios
  - PartnerArea - Socios
  - BlogArea - Blog/noticias
- **Optimizaciones**: Lazy loading de secciones no críticas
- **Alternativas**: 
  ```jsx
  // Home con lazy loading y error boundaries
  const LazySection = lazy(() => import('./LazySection'));

  const Home = () => {
    return (
      <>
        <HeroSlider />
        <FindCarForm />
        <FeatureArea />
        
        <Suspense fallback={<SectionSkeleton />}>
          <ErrorBoundary fallback={<SectionError />}>
            <LazySection />
          </ErrorBoundary>
        </Suspense>
      </>
    );
  };
  ```

### **About.jsx**
- **Propósito**: Página "Acerca de nosotros" con información corporativa
- **Función**: `About()` - Información completa de la empresa
- **Secciones**: 
  - Breadcrumb de navegación
  - AboutArea - Historia y misión
  - CounterArea - Estadísticas de la empresa
  - FaqArea - Preguntas frecuentes
  - TestimonialArea - Testimonios de clientes
  - TeamArea - Equipo de trabajo
  - PartnerArea - Socios comerciales
- **SEO**: Meta tags optimizados para empresa

### **Cars.jsx**
- **Propósito**: Página de listado de vehículos con filtros avanzados
- **Función**: `Cars()` - Catálogo completo de vehículos
- **Estado**: 
  - `favorites` - Vehículos favoritos
  - `sortBy` - Criterio de ordenamiento
  - `filters` - Filtros aplicados
- **Características**: 
  - Sidebar de filtros
  - Grid responsive de vehículos
  - Sistema de ordenamiento
  - Paginación
  - Favoritos persistentes
- **Alternativas**: 
  ```jsx
  // Cars con infinite scroll y virtual scrolling
  const CarsWithInfiniteScroll = () => {
    const {
      data,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage
    } = useInfiniteQuery(['cars'], fetchCars);
    
    return (
      <InfiniteScroll
        dataLength={data?.pages.flatMap(page => page.cars).length || 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<CarSkeleton />}
      >
        <VirtualizedCarGrid cars={data?.pages.flatMap(page => page.cars) || []} />
      </InfiniteScroll>
    );
  };
  ```

### **Contact.jsx**
- **Propósito**: Página de contacto con formulario y información
- **Función**: `Contact()` - Formulario de contacto y datos de la empresa
- **Estado**: 
  - `formData` - Datos del formulario
  - `isSubmitting` - Estado de envío
  - `submitMessage` - Mensaje de respuesta
- **Características**: 
  - Formulario validado
  - Información de contacto
  - Mapa integrado
  - Manejo de estados de envío
- **Alternativas**: 
  ```jsx
  // Contact con validación avanzada y captcha
  import ReCAPTCHA from 'react-google-recaptcha';

  const AdvancedContactForm = () => {
    const [captchaValue, setCaptchaValue] = useState(null);
    
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(contactSchema)
    });
    
    const onSubmit = async (data) => {
      if (!captchaValue) {
        toast.error('Por favor completa el captcha');
        return;
      }
      
      try {
        await submitContact({ ...data, captcha: captchaValue });
        toast.success('Mensaje enviado correctamente');
      } catch (error) {
        toast.error('Error al enviar el mensaje');
      }
    };
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Campos del formulario */}
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onChange={setCaptchaValue}
        />
      </form>
    );
  };
  ```

### **Services.jsx**
- **Propósito**: Página de servicios ofrecidos
- **Función**: `Services()` - Catálogo de servicios con detalles
- **Datos**: Array de servicios con iconos, descripciones y enlaces
- **Características**: 
  - Grid de servicios
  - Iconografía consistente
  - Enlaces a páginas de detalle
  - Responsive design

---