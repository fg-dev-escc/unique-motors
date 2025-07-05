# LUIS.md - Comprehensive File Tree Index & Documentation

## Unique Auction Platform - Complete File Reference

This document provides a comprehensive index of all files in the project, their purposes, functions, connections, and debugging information.

---

## ROOT DIRECTORY

### **package.json**
- **Purpose**: Project configuration and dependencies
- **Key Dependencies**: React 19, Redux Toolkit, Firebase, Axios, Bootstrap 5, Framer Motion, Swiper
- **Scripts**: `npm run dev` (development), `npm run build` (production), `npm run lint` (code linting)
- **Alternatives**: Could use yarn instead of npm, different bundlers like Webpack
- **Debug**: Check dependency versions if features break

### **vite.config.js**
- **Purpose**: Vite bundler configuration
- **Function**: `defineConfig()` - Sets up React plugin and build settings
- **Connects To**: All source files for bundling
- **Alternatives**: Webpack, Rollup, or Parcel as bundlers
- **Debug**: Port 3000 default, can change with `server.port`

### **index.html**
- **Purpose**: Main HTML template
- **Key Elements**: `<div id="root">` - React mount point
- **Connects To**: Built JavaScript bundles
- **Alternatives**: Different meta tags, CDN links
- **Debug**: Check if scripts load correctly, verify charset UTF-8

### **eslint.config.js**
- **Purpose**: Code linting configuration
- **Rules**: React, hooks, and accessibility rules
- **Connects To**: All .js/.jsx files
- **Alternatives**: Different linting rules, Prettier integration
- **Debug**: Check for linting errors with `npm run lint`

---

## SRC DIRECTORY

### **main.jsx**
- **Purpose**: Application entry point
- **Key Functions**:
  - `createRoot()` - Creates React root
  - `loadScript()` - Loads external JavaScript files
- **Connects To**: App.jsx, Redux store, CSS files
- **External Scripts**: jQuery, Bootstrap, theme scripts
- **Alternatives**: Different script loading order, async/defer options
- **Debug**: Check console for script loading errors, verify DOM element exists

### **App.jsx**
- **Purpose**: Main application component
- **Function**: `App()` - Returns AppRouter component
- **Connects To**: AppRouter.jsx, App.css
- **Alternatives**: Could include global providers here
- **Debug**: Simple wrapper, check if AppRouter renders

### **App.css**
- **Purpose**: Basic application styling
- **Properties**: Root-level CSS variables, basic resets
- **Connects To**: All components via className
- **Alternatives**: Styled-components, CSS modules, Tailwind
- **Debug**: Check CSS custom properties, verify imports

### **index.css**
- **Purpose**: Global styles and imports
- **Imports**: Bootstrap, FontAwesome, custom theme styles
- **Connects To**: All components globally
- **Alternatives**: Different CSS framework, SCSS, PostCSS
- **Debug**: Verify all @import statements resolve correctly

---

## API DIRECTORY (`/src/api`)

### **api.js**
- **Purpose**: HTTP communication wrapper with authentication
- **Key Functions**:

#### `fetch(method, url, body = null)`
- **Parameters**: 
  - `method`: 'GET', 'POST', 'PUT', 'DELETE'
  - `url`: API endpoint string
  - `body`: Request payload object
- **Returns**: `{ ok: boolean, data: any, response?: any }`
- **Connects To**: All Redux thunks, components making API calls
- **Debug**: Check JWT token in localStorage, verify API base URL

#### `fetchSinToken(method, url, body = null)`
- **Parameters**: Same as fetch but without authentication
- **Returns**: Same response format
- **Use Case**: Login, registration, public data
- **Debug**: Check if endpoint requires authentication

#### `postFile(url, formData)`
- **Parameters**: 
  - `url`: Upload endpoint
  - `formData`: FormData object with files
- **Returns**: Upload response
- **Connects To**: File upload components
- **Debug**: Check Content-Type header, file size limits

#### `getFile(url, name)`
- **Parameters**: 
  - `url`: File download endpoint
  - `name`: Downloaded file name
- **Returns**: Blob download
- **Debug**: Check authentication, CORS headers

- **Alternatives**: Axios interceptors, fetch with different config
- **Global Config**: API base URL, token refresh logic

---

## COMPONENTS DIRECTORY (`/src/components`)

### 📁 **common/** - Reusable Page Sections

#### **AboutArea.jsx**
- **Purpose**: About us section component
- **Props**: Custom text, images, background options
- **Connects To**: About page, Home page
- **Alternatives**: Different layouts, animation variants
- **Debug**: Check prop passing, image loading

#### **BlogArea.jsx**
- **Purpose**: Blog posts section
- **Function**: `BlogArea()` - Renders blog post grid
- **State**: Blog posts from API or static data
- **Connects To**: Blog page, Home page
- **Alternatives**: Different post layouts, pagination styles
- **Debug**: Check post data format, image sources

#### **CounterArea.jsx**
- **Purpose**: Animated counter statistics
- **Function**: `CounterArea()` - Renders counters with animations
- **Animation**: Count-up animation on scroll
- **Connects To**: About page, Home page
- **Alternatives**: Different animation libraries, static counters
- **Debug**: Check animation triggers, number formatting

#### **FaqArea.jsx**
- **Purpose**: FAQ accordion section
- **Function**: `FaqArea()` - Expandable FAQ items
- **State**: FAQ items, expanded state
- **Connects To**: About page, Services page
- **Alternatives**: Tab layout, modal FAQs
- **Debug**: Check accordion toggle, content overflow

#### **PartnerArea.jsx**
- **Purpose**: Partner/sponsor logos section
- **Function**: `PartnerArea()` - Logo carousel/grid
- **Connects To**: Home page, About page
- **Alternatives**: Static grid, different carousel libraries
- **Debug**: Check logo loading, responsive breakpoints

#### **TeamArea.jsx**
- **Purpose**: Team member showcase
- **Function**: `TeamArea()` - Team member cards
- **Props**: Team member data, social links
- **Connects To**: About page
- **Alternatives**: Different card layouts, modal profiles
- **Debug**: Check member data, social link validation

#### **TestimonialArea.jsx**
- **Purpose**: Customer testimonials carousel
- **Function**: `TestimonialArea()` - Testimonial slider
- **Props**: Testimonial data, autoplay options
- **Connects To**: Home page, About page
- **Alternatives**: Static testimonials, different slider libraries
- **Debug**: Check testimonial data format, image loading

### 📁 **feedback/** - User Feedback Components

#### **Loading.jsx**
- **Purpose**: Loading states and spinners
- **Function**: `Loading({ type, size, color })` - Renders loading indicator
- **Props**: 
  - `type`: 'spinner', 'dots', 'bars'
  - `size`: 'small', 'medium', 'large'
  - `color`: CSS color value
- **Connects To**: All components with async operations
- **Alternatives**: Different spinner types, skeleton loaders
- **Debug**: Check loading state management, CSS animations

#### **MensajeSesion.jsx**
- **Purpose**: Session and notification messages
- **Function**: `MensajeSesion({ type, message, onClose })` - Message component
- **Props**: 
  - `type`: 'success', 'error', 'warning', 'info'
  - `message`: Message text
  - `onClose`: Close handler function
- **Connects To**: Authentication, form submissions
- **Alternatives**: Toast notifications, modal alerts
- **Debug**: Check message timing, auto-dismiss logic

### 📁 **forms/** - Form Input Components

#### **InputText.jsx**
- **Purpose**: Basic text input component
- **Function**: `InputText({ value, onChange, placeholder, required, error })`
- **Props**: 
  - `value`: Current input value
  - `onChange`: Change handler
  - `placeholder`: Placeholder text
  - `required`: Boolean for required field
  - `error`: Error message string
- **Connects To**: All forms (login, register, search, sell)
- **Alternatives**: Different input styles, custom validation
- **Debug**: Check value binding, validation triggers

#### **InputPassword.jsx**
- **Purpose**: Password input with show/hide toggle
- **Function**: `InputPassword({ value, onChange, placeholder, required, error })`
- **State**: `showPassword` - Boolean for visibility toggle
- **Features**: Eye icon toggle, strength indicator
- **Connects To**: Login, register, profile forms
- **Alternatives**: Different toggle icons, password strength meters
- **Debug**: Check toggle functionality, password validation

#### **InputNum.jsx**
- **Purpose**: Numeric input component
- **Function**: `InputNum({ value, onChange, min, max, step, placeholder })`
- **Props**: 
  - `min`: Minimum value
  - `max`: Maximum value
  - `step`: Increment step
- **Validation**: Number format, range validation
- **Connects To**: Price inputs, year inputs, numeric filters
- **Alternatives**: Range sliders, increment/decrement buttons
- **Debug**: Check number parsing, validation logic

#### **InputSelect.jsx**
- **Purpose**: Select dropdown component
- **Function**: `InputSelect({ value, onChange, options, placeholder, required })`
- **Props**: 
  - `options`: Array of {value, label} objects
  - `value`: Selected value
  - `onChange`: Selection handler
- **Connects To**: Category filters, form selects
- **Alternatives**: Multi-select, searchable select, custom dropdown
- **Debug**: Check option data format, selection handling

#### **InputSelectMultiple.jsx**
- **Purpose**: Multi-select dropdown component
- **Function**: `InputSelectMultiple({ values, onChange, options, placeholder })`
- **Props**: 
  - `values`: Array of selected values
  - `onChange`: Multi-selection handler
- **Features**: Checkbox options, select all/none
- **Connects To**: Advanced filters, tags selection
- **Alternatives**: Tag input, checkbox groups
- **Debug**: Check array handling, option rendering

#### **InputDatePicker.jsx**
- **Purpose**: Date picker component
- **Function**: `InputDatePicker({ value, onChange, format, minDate, maxDate })`
- **Props**: 
  - `format`: Date format string
  - `minDate`: Minimum selectable date
  - `maxDate`: Maximum selectable date
- **Library**: Custom date picker or library integration
- **Connects To**: Auction dates, search filters
- **Alternatives**: Native date input, different date libraries
- **Debug**: Check date parsing, locale formatting

#### **InputTextarea.jsx**
- **Purpose**: Textarea component
- **Function**: `InputTextarea({ value, onChange, placeholder, rows, maxLength })`
- **Props**: 
  - `rows`: Number of visible rows
  - `maxLength`: Character limit
- **Features**: Character counter, auto-resize
- **Connects To**: Comments, descriptions, contact forms
- **Alternatives**: Rich text editor, markdown editor
- **Debug**: Check text validation, resize behavior

#### **LabelFile.jsx**
- **Purpose**: File upload label component
- **Function**: `LabelFile({ onFileSelect, acceptedTypes, maxSize, multiple })`
- **Props**: 
  - `acceptedTypes`: Accepted file types
  - `maxSize`: Maximum file size
  - `multiple`: Allow multiple files
- **Features**: Drag & drop, file validation
- **Connects To**: Vehicle image uploads, document uploads
- **Alternatives**: Direct file input, cloud upload widgets
- **Debug**: Check file validation, MIME type detection

#### **OneFile.jsx**
- **Purpose**: Single file upload component with authentication
- **Function**: `OneFile({ onUpload, uploadUrl, acceptedTypes })`
- **Features**: Upload progress, authentication headers
- **Connects To**: Authenticated file uploads
- **API**: Uses `postFile()` from api.js
- **Debug**: Check authentication token, upload progress

#### **OneFileSin.jsx**
- **Purpose**: Single file upload without authentication
- **Function**: `OneFileSin({ onUpload, uploadUrl, acceptedTypes })`
- **Features**: Upload progress, public uploads
- **Connects To**: Public file uploads
- **API**: Uses `fetchSinToken()` from api.js
- **Debug**: Check upload endpoint, CORS settings

### 📁 **ui/** - UI Utility Components

#### **Breadcrumb.jsx**
- **Purpose**: Navigation breadcrumb component
- **Function**: `Breadcrumb({ items, separator })`
- **Props**: 
  - `items`: Array of {label, href} objects
  - `separator`: Separator character/icon
- **Connects To**: All pages for navigation
- **Alternatives**: Different separator styles, icons
- **Debug**: Check route generation, link navigation

#### **ScrollTop.jsx**
- **Purpose**: Scroll to top button
- **Function**: `ScrollTop({ showAfter, duration })`
- **Props**: 
  - `showAfter`: Scroll position to show button
  - `duration`: Animation duration
- **State**: `visible` - Button visibility based on scroll
- **Features**: Smooth scroll animation, visibility toggle
- **Connects To**: Layout component
- **Alternatives**: Different scroll animations, position options
- **Debug**: Check scroll event listeners, animation smoothness

---

## CONSTANTS DIRECTORY (`/src/const`)

### **consLogged.js**
- **Purpose**: Authentication state constants
- **Constants**: 
  - `STARTING`: 'starting' - Initial app load
  - `LOGGED`: 'logged' - User authenticated
  - `NOTLOGGED`: 'not logged' - User not authenticated
- **Connects To**: Authentication components, route guards
- **Alternatives**: Enum values, different state names
- **Debug**: Check state transitions, consistency across components

### **url.js**
- **Purpose**: API endpoint configuration
- **Constants**: 
  - `BASE_URL`: API base URL
  - `ENDPOINTS`: Object with all API endpoints
- **Structure**: 
  ```javascript
  {
    AUTH: {
      LOGIN: '/api/Login',
      REFRESH: '/api/Login/Refresh',
      REGISTER: '/api/Actions/PostPreComprador'
    },
    AUCTION: {
      GET_TORRES: '/api/Subasta/GetTorres',
      GET_TORRE: '/api/Subasta/GetTorre',
      BID: '/api/Pujas/Pujar'
    }
  }
  ```
- **Connects To**: api.js, all API calls
- **Alternatives**: Environment variables, config files
- **Debug**: Check endpoint correctness, environment-specific URLs

### **options.js**
- **Purpose**: Application configuration options
- **Options**: 
  - `PAGINATION_SIZE`: Items per page
  - `TIMEOUT`: Request timeout
  - `SUPPORTED_LANGUAGES`: Language options
  - `CURRENCY`: Currency configuration
- **Connects To**: Components using configuration
- **Alternatives**: Environment variables, remote config
- **Debug**: Check option values, default fallbacks

---

## DATABASE DIRECTORY (`/src/db`)

### **firebase.js**
- **Purpose**: Firebase app initialization and Firestore setup
- **Functions**: 
  - `initializeApp()` - Firebase app initialization
  - `getFirestore()` - Firestore database instance
- **Configuration**: Imported from config/firebase.js
- **Connects To**: All Firebase operations
- **Alternatives**: Other databases (MongoDB, PostgreSQL)
- **Debug**: Check Firebase credentials, connection status

### **config/firebase.js**
- **Purpose**: Firebase credentials configuration
- **Structure**: 
  ```javascript
  {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
  }
  ```
- **Security**: Should be environment variables
- **Connects To**: firebase.js
- **Alternatives**: Environment variables, secure config
- **Debug**: Check credentials validity, project settings

---

## HOOKS DIRECTORY (`/src/hooks`)

### **useWindowSize.js**
- **Purpose**: Custom hook for responsive design
- **Function**: `useWindowSize()`
- **Returns**: 
  ```javascript
  {
    width: number,
    height: number,
    extraSmall: boolean, // < 576px
    small: boolean,      // 576px - 768px
    medium: boolean,     // 768px - 992px
    large: boolean       // >= 992px
  }
  ```
- **Features**: Debounced resize events, responsive breakpoints
- **Connects To**: Responsive components, conditional rendering
- **Alternatives**: CSS media queries, other breakpoint libraries
- **Debug**: Check event listener cleanup, breakpoint calculations

---

## LAYOUT DIRECTORY (`/src/layout`)

### **Layout.jsx**
- **Purpose**: Main application wrapper with preloader
- **Function**: `Layout({ children })`
- **Features**: 
  - Loading preloader
  - Global message container
  - Scroll top button
- **State**: `loading` - Controls preloader visibility
- **Connects To**: All pages through AppRouter
- **Alternatives**: Different loading animations, layout variants
- **Debug**: Check loading state management, children rendering

### **LayoutPage.jsx**
- **Purpose**: Protected routes layout
- **Function**: `LayoutPage({ children })`
- **Features**: 
  - Header with user menu
  - Breadcrumb navigation
  - Content area
  - Footer
- **Connects To**: Protected routes
- **Alternatives**: Different layout structures, sidebar layouts
- **Debug**: Check authentication state, route protection

### **Header.jsx**
- **Purpose**: Main navigation header
- **Function**: `Header()`
- **Features**: 
  - Responsive navigation
  - User authentication menu
  - Mobile menu toggle
  - Search functionality
- **State**: 
  - `mobileMenuOpen` - Mobile menu visibility
  - `userMenuOpen` - User dropdown visibility
- **Connects To**: All pages, authentication state
- **Redux**: Uses user state from store
- **Alternatives**: Different navigation styles, mega menus
- **Debug**: Check menu toggles, responsive behavior

### **Footer.jsx**
- **Purpose**: Site footer with newsletter subscription
- **Function**: `Footer()`
- **Features**: 
  - Newsletter subscription form
  - Social media links
  - Quick links
  - Contact information
- **Connects To**: All pages
- **Alternatives**: Different footer layouts, widget areas
- **Debug**: Check form submission, link validation

### **GlobalMessage.jsx**
- **Purpose**: Global messaging system
- **Function**: `GlobalMessage()`
- **Features**: 
  - Success/error notifications
  - Auto-dismiss functionality
  - Multiple message support
- **Redux**: Uses message state from store
- **Connects To**: All components via Redux
- **Alternatives**: Toast libraries, modal notifications
- **Debug**: Check message timing, state updates

---

## REDUX DIRECTORY (`/src/redux`)

### **store.js**
- **Purpose**: Redux store configuration
- **Function**: `configureStore()`
- **Reducers**: 
  - `userReducer` - Authentication state
  - `modalReducer` - Modal state
  - `registroReducer` - Registration state
  - `slideshowReducer` - Slideshow state
  - `subastaReducer` - Auction state
  - `busquedaReducer` - Search state
  - `vendedorReducer` - Sell state
  - `loaderReducer` - Loading state
- **Middleware**: Redux Toolkit default middleware
- **Connects To**: All components via useSelector/useDispatch
- **Alternatives**: Context API, Zustand, other state managers
- **Debug**: Check reducer integration, middleware configuration

### 📁 **features/** - Feature-based State Management

#### 📁 **auth/** - Authentication Feature

##### **userSlice.js**
- **Purpose**: User authentication state management
- **Initial State**: 
  ```javascript
  {
    logged: 'starting',
    loginErr: null,
    loadingLogin: false,
    uid: null,
    email: null,
    nombre: null,
    token: null
  }
  ```
- **Actions**: 
  - `setLoginErr(error)` - Set login error
  - `setLoadingLogin(loading)` - Set loading state
  - `setLogged(status)` - Set authentication status
  - `storeUser(userData)` - Store user data
  - `logOut()` - Clear user data
- **Connects To**: Login, Header, route guards
- **Debug**: Check state transitions, token storage

##### **registroSlice.js**
- **Purpose**: User registration state management
- **Initial State**: 
  ```javascript
  {
    loading: false,
    error: null,
    success: false,
    formData: {}
  }
  ```
- **Actions**: 
  - `setLoading(loading)` - Set loading state
  - `setError(error)` - Set registration error
  - `setSuccess(success)` - Set success state
  - `setFormData(data)` - Store form data
- **Connects To**: Registration form, success pages
- **Debug**: Check form validation, submission flow

##### **thunks.js**
- **Purpose**: Authentication async operations
- **Functions**: 

###### `startLogin(body)`
- **Parameters**: `{ email, password }`
- **Returns**: User data and JWT token
- **Flow**: 
  1. Set loading state
  2. Call login API
  3. Store user data and token
  4. Set logged state
- **Debug**: Check API response, token storage

###### `startRefreshToken()`
- **Parameters**: None (uses stored token)
- **Returns**: Updated JWT token
- **Flow**: 
  1. Get current token
  2. Call refresh API
  3. Update stored token
- **Debug**: Check token validity, refresh timing

###### `startRegistro(body)`
- **Parameters**: Registration form data
- **Returns**: Registration result
- **Flow**: 
  1. Validate form data
  2. Call registration API
  3. Set success/error state
- **Debug**: Check form validation, API response

#### 📁 **auction/** - Auction Feature

##### **subastaSlice.js**
- **Purpose**: Auction state management
- **Initial State**: 
  ```javascript
  {
    subastas: [],
    subastaActual: null,
    pujas: [],
    comentarios: [],
    loading: false,
    error: null,
    filtros: {},
    cronometros: {}
  }
  ```
- **Actions**: 
  - `setSubastaTorres(subastas)` - Set auction listings
  - `setSubastaActual(subasta)` - Set current auction
  - `setPujaMartillo(puja)` - Add new bid
  - `setPujaMayor(puja)` - Update highest bid
  - `setComentarios(comentarios)` - Set comments
  - `setCronometro(id, tiempo)` - Update countdown timer
- **Connects To**: Auction pages, bidding components
- **Debug**: Check data structure, real-time updates

##### **thunks.js**
- **Purpose**: Auction async operations
- **Functions**: 

###### `startGetSubastaTorres(id)`
- **Parameters**: `id` - Category or filter ID
- **Returns**: Array of auction listings
- **Flow**: 
  1. Set loading state
  2. Call API with filters
  3. Process auction data
  4. Update state with results
- **Debug**: Check API parameters, data formatting

###### `startGetSubastaTorre(id)`
- **Parameters**: `id` - Specific auction ID
- **Returns**: Detailed auction data
- **Flow**: 
  1. Set loading state
  2. Call auction detail API
  3. Process images and data
  4. Update current auction state
- **Debug**: Check auction ID, image loading

###### `startPuja(body)`
- **Parameters**: `{ auctionId, bidAmount, userId }`
- **Returns**: Bid confirmation
- **Flow**: 
  1. Validate bid amount
  2. Call bidding API
  3. Update auction state
  4. Show success/error message
- **Debug**: Check bid validation, real-time updates

###### `startEnviarComentario(body)`
- **Parameters**: `{ auctionId, comment, userId }`
- **Returns**: Comment confirmation
- **Flow**: 
  1. Validate comment
  2. Call comment API
  3. Update comments state
- **Debug**: Check comment validation, update timing

#### 📁 **search/** - Search Feature

##### **busquedaSlice.js**
- **Purpose**: Search and filtering state management
- **Initial State**: 
  ```javascript
  {
    query: '',
    filters: {
      category: '',
      priceMin: 0,
      priceMax: 0,
      year: '',
      brand: '',
      model: ''
    },
    results: [],
    total: 0,
    page: 1,
    loading: false,
    error: null
  }
  ```
- **Actions**: 
  - `setQuery(query)` - Set search query
  - `setFilters(filters)` - Update filters
  - `setResults(results)` - Set search results
  - `setPage(page)` - Update pagination
  - `clearFilters()` - Reset all filters
- **Connects To**: Search components, filter sidebar
- **Debug**: Check filter combinations, result formatting

##### **thunks.js**
- **Purpose**: Search async operations
- **Functions**: 

###### `startBusqueda(params)`
- **Parameters**: `{ query, filters, page }`
- **Returns**: Search results with pagination
- **Flow**: 
  1. Build search parameters
  2. Call search API
  3. Process results
  4. Update state with results
- **Debug**: Check parameter building, API response

#### 📁 **sell/** - Sell Feature

##### **venderSlide.js**
- **Purpose**: Vehicle selling state management
- **Initial State**: 
  ```javascript
  {
    formData: {
      title: '',
      description: '',
      price: 0,
      category: '',
      images: [],
      specifications: {}
    },
    loading: false,
    error: null,
    success: false,
    uploadProgress: 0
  }
  ```
- **Actions**: 
  - `setFormData(data)` - Update form data
  - `setImages(images)` - Set uploaded images
  - `setUploadProgress(progress)` - Update upload progress
  - `setSubmissionState(state)` - Set submission state
  - `resetForm()` - Clear form data
- **Connects To**: Sell form, image upload components
- **Debug**: Check form validation, image upload

##### **thunks.js**
- **Purpose**: Sell async operations
- **Functions**: 

###### `startVenderAuto(body)`
- **Parameters**: Complete vehicle data
- **Returns**: Submission confirmation
- **Flow**: 
  1. Validate all form data
  2. Upload images
  3. Submit vehicle data
  4. Set success state
- **Debug**: Check validation rules, upload sequence

### 📁 **shared/** - Shared State

#### **modalSlice.js**
- **Purpose**: Global modal management
- **Initial State**: 
  ```javascript
  {
    activeModal: null,
    modalData: {},
    loading: false
  }
  ```
- **Actions**: 
  - `openModal(modalType, data)` - Open modal with data
  - `closeModal()` - Close active modal
  - `setModalData(data)` - Update modal data
- **Connects To**: All modal components
- **Debug**: Check modal state, data passing

#### **loaderSlice.js**
- **Purpose**: Loading states across the app
- **Initial State**: 
  ```javascript
  {
    global: false,
    auth: false,
    auction: false,
    search: false,
    upload: false
  }
  ```
- **Actions**: 
  - `setGlobalLoading(loading)` - Global loading state
  - `setAuthLoading(loading)` - Auth loading state
  - `setAuctionLoading(loading)` - Auction loading state
  - `setSearchLoading(loading)` - Search loading state
  - `setUploadLoading(loading)` - Upload loading state
- **Connects To**: All loading components
- **Debug**: Check loading state coordination

#### **slideshowSlice.js**
- **Purpose**: Image carousel management
- **Initial State**: 
  ```javascript
  {
    images: [],
    currentIndex: 0,
    autoplay: true,
    interval: 5000
  }
  ```
- **Actions**: 
  - `setImages(images)` - Set carousel images
  - `setCurrentIndex(index)` - Update current slide
  - `nextSlide()` - Move to next slide
  - `prevSlide()` - Move to previous slide
  - `toggleAutoplay()` - Toggle autoplay
- **Connects To**: Image galleries, hero sliders
- **Debug**: Check image loading, navigation

#### **onboardingSlice.js**
- **Purpose**: User onboarding flows
- **Initial State**: 
  ```javascript
  {
    currentStep: 0,
    completed: false,
    steps: [],
    userData: {}
  }
  ```
- **Actions**: 
  - `setCurrentStep(step)` - Update current step
  - `nextStep()` - Move to next step
  - `prevStep()` - Move to previous step
  - `completeOnboarding()` - Mark as completed
- **Connects To**: Onboarding components
- **Debug**: Check step progression, data persistence

#### **thunks.js**
- **Purpose**: Shared async operations
- **Functions**: 

###### `startImageUpload(files)`
- **Parameters**: File array
- **Returns**: Upload URLs
- **Flow**: 
  1. Validate files
  2. Upload to storage
  3. Return URLs
- **Debug**: Check file validation, upload progress

---

## ROUTER DIRECTORY (`/src/router`)

### **AppRouter.jsx**
- **Purpose**: Main application router
- **Function**: `AppRouter()`
- **Features**: 
  - Authentication state management
  - Route definitions
  - Loading states during token refresh
  - Error boundaries
- **Routes**: 
  - `/` - Home page
  - `/login` - Login page
  - `/register` - Registration page
  - `/about` - About page
  - `/services` - Services page
  - `/contact` - Contact page
  - `/vender` - Sell page (protected)
  - `/subastas` - Auction listings
  - `/detalle/:id` - Auction detail
- **Connects To**: All page components, authentication system
- **Debug**: Check route matching, authentication flow

### **PrivateRoute.jsx**
- **Purpose**: Private route wrapper
- **Function**: `PrivateRoute({ children })`
- **Logic**: 
  - Check authentication state
  - Redirect to login if not authenticated
  - Show loading during auth check
- **Connects To**: Protected pages
- **Debug**: Check authentication state, redirect logic

### **ProtectedRoutes.jsx**
- **Purpose**: Protected routes component
- **Function**: `ProtectedRoutes()`
- **Features**: 
  - Multiple protected routes
  - Role-based access control
  - Layout wrapper
- **Connects To**: Dashboard, profile, admin pages
- **Debug**: Check role validation, access control

### **PublicRoute.jsx**
- **Purpose**: Public route wrapper
- **Function**: `PublicRoute({ children })`
- **Logic**: 
  - Allow access regardless of auth state
  - Redirect authenticated users from login/register
- **Connects To**: Public pages
- **Debug**: Check redirect logic, route access

---

## UTILS DIRECTORY (`/src/utils`)

### **parseJwt.js**
- **Purpose**: JWT token parsing utility
- **Function**: `parseJwt(token)`
- **Parameters**: `token` - JWT token string
- **Returns**: Decoded payload object
- **Logic**: 
  1. Split token into parts
  2. Decode base64 payload
  3. Parse JSON
  4. Return payload data
- **Connects To**: Authentication system, token validation
- **Alternatives**: JWT libraries, different parsing methods
- **Debug**: Check token format, base64 decoding

### **formatoMoneda.js**
- **Purpose**: Currency formatting utility
- **Function**: `formatoMoneda(amount, currency = 'USD')`
- **Parameters**: 
  - `amount` - Number to format
  - `currency` - Currency code (default: USD)
- **Returns**: Formatted currency string
- **Example**: `formatoMoneda(1500)` → "$1,500.00"
- **Connects To**: Price displays, auction components
- **Alternatives**: Different currency symbols, locales
- **Debug**: Check number formatting, currency symbols

### **crearCronometro.js**
- **Purpose**: Timer/countdown utilities
- **Functions**: 

#### `crearCronometro(fecha)`
- **Parameters**: `fecha` - Spanish date string
- **Returns**: Countdown object
- **Logic**: 
  1. Parse Spanish date format
  2. Calculate time difference
  3. Format as countdown
- **Debug**: Check date parsing, timezone handling

#### `genCronometro(fecha)`
- **Parameters**: `fecha` - Date object
- **Returns**: Countdown object
- **Logic**: 
  1. Calculate time difference
  2. Format days, hours, minutes, seconds
- **Connects To**: Auction timers, countdown displays
- **Debug**: Check time calculations, format consistency

### **formValidations.js**
- **Purpose**: Form validation helpers
- **Functions**: 

#### `validateEmail(email)`
- **Parameters**: `email` - Email string
- **Returns**: Boolean validity
- **Regex**: Email format validation
- **Debug**: Check regex pattern, edge cases

#### `validatePassword(password)`
- **Parameters**: `password` - Password string
- **Returns**: Validation object with rules
- **Rules**: Length, uppercase, lowercase, numbers, symbols
- **Debug**: Check validation rules, strength calculation

#### `validateRequired(value)`
- **Parameters**: `value` - Field value
- **Returns**: Boolean validity
- **Logic**: Check for empty/null values
- **Debug**: Check empty string handling

### **esEmailValido.js**
- **Purpose**: Email validation utility
- **Function**: `esEmailValido(email)`
- **Parameters**: `email` - Email string
- **Returns**: Boolean validity
- **Regex**: Comprehensive email validation
- **Connects To**: Form validation, registration
- **Debug**: Check regex accuracy, internationalization

### **esSoloNumero.js**
- **Purpose**: Number validation utility
- **Function**: `esSoloNumero(value)`
- **Parameters**: `value` - Input value
- **Returns**: Boolean if only numbers
- **Logic**: Check if string contains only digits
- **Connects To**: Numeric inputs, phone validation
- **Debug**: Check decimal handling, negative numbers

### **MesCorto.js**
- **Purpose**: Short month names
- **Export**: Array of short month names in Spanish
- **Values**: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
- **Connects To**: Date formatting, calendar components
- **Alternatives**: Different languages, abbreviations
- **Debug**: Check index mapping, locale consistency

### **MesLargo.js**
- **Purpose**: Long month names
- **Export**: Array of full month names in Spanish
- **Values**: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
- **Connects To**: Date formatting, detailed calendars
- **Alternatives**: Different languages, locale-specific
- **Debug**: Check spelling, locale consistency

### **crearFechaString.js**
- **Purpose**: Date string creation utility
- **Function**: `crearFechaString(date, format)`
- **Parameters**: 
  - `date` - Date object
  - `format` - Format string
- **Returns**: Formatted date string
- **Formats**: 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'
- **Connects To**: Date displays, form inputs
- **Debug**: Check format parsing, timezone handling

### **dateFromString.js**
- **Purpose**: Date parsing utility
- **Function**: `dateFromString(dateString, format)`
- **Parameters**: 
  - `dateString` - Date string
  - `format` - Expected format
- **Returns**: Date object
- **Logic**: 
  1. Parse format string
  2. Extract date components
  3. Create Date object
- **Connects To**: Date inputs, API data processing
- **Debug**: Check format matching, invalid dates

---

## VIEWS DIRECTORY (`/src/views`)

### 📁 **home/** - Home Page

#### **Home.jsx**
- **Purpose**: Main home page component
- **Function**: `Home()`
- **Sections**: 
  - Hero section with search
  - Featured cars
  - Services overview
  - Why choose us
  - Customer testimonials
  - Process steps
- **Connects To**: All home components, search functionality
- **SEO**: Meta tags, structured data
- **Debug**: Check component loading, data fetching

#### 📁 **components/** - Home-specific Components

##### **HeroSection.jsx**
- **Purpose**: Hero banner with search form
- **Function**: `HeroSection()`
- **Features**: 
  - Background slider
  - Search form overlay
  - Call-to-action buttons
- **State**: Search form data
- **Connects To**: Search functionality, slider images
- **Debug**: Check form submission, image loading

##### **CarArea.jsx**
- **Purpose**: Featured cars section
- **Function**: `CarArea()`
- **Features**: 
  - Car grid display
  - Filtering options
  - Favorite functionality
- **Redux**: Uses auction state
- **Connects To**: Car detail pages, favorites
- **Debug**: Check car data, image loading

##### **ChooseArea.jsx**
- **Purpose**: Why choose us section
- **Function**: `ChooseArea()`
- **Features**: 
  - Feature highlights
  - Benefits list
  - Statistics counters
- **Props**: Feature data, statistics
- **Connects To**: About page, services
- **Debug**: Check animation timing, counter accuracy

##### **FeatureArea.jsx**
- **Purpose**: Feature highlights section
- **Function**: `FeatureArea()`
- **Features**: 
  - Service icons
  - Feature descriptions
  - Hover effects
- **Props**: Feature data
- **Connects To**: Services page
- **Debug**: Check icon loading, hover states

##### **FindCarForm.jsx**
- **Purpose**: Car search form
- **Function**: `FindCarForm()`
- **Features**: 
  - Location selection
  - Date pickers
  - Car type filters
  - Advanced search toggle
- **State**: Form data, validation
- **Connects To**: Search results, filtering
- **Debug**: Check form validation, API calls

##### **HeroSlider.jsx**
- **Purpose**: Hero image slider
- **Function**: `HeroSlider()`
- **Features**: 
  - Automatic slideshow
  - Navigation dots
  - Swipe support
- **State**: Current slide, autoplay
- **Connects To**: Hero section
- **Debug**: Check image loading, timing

##### **ProcessArea.jsx**
- **Purpose**: Process steps section
- **Function**: `ProcessArea()`
- **Features**: 
  - Step-by-step guide
  - Icons and descriptions
  - Progress indicators
- **Props**: Process steps data
- **Connects To**: How it works page
- **Debug**: Check step order, icon alignment

### 📁 **auth/** - Authentication Pages

#### **Login.jsx**
- **Purpose**: User login page
- **Function**: `Login()`
- **Features**: 
  - Email/password form
  - Remember me option
  - Forgot password link
  - Social login options
- **State**: Form data, validation errors
- **Redux**: Uses auth state, login thunks
- **Connects To**: Dashboard, registration
- **Debug**: Check form validation, API calls

#### **Register.jsx**
- **Purpose**: User registration page
- **Function**: `Register()`
- **Features**: 
  - Multi-step form
  - Terms acceptance
  - Email verification
  - Profile setup
- **State**: Form data, current step
- **Redux**: Uses registration state
- **Connects To**: Login, profile setup
- **Debug**: Check form progression, validation

### 📁 **auction/** - Auction Pages

#### 📁 **pages/** - Auction Pages

##### **Subastas.jsx**
- **Purpose**: Auction listings page
- **Function**: `Subastas()`
- **Features**: 
  - Auction grid/list view
  - Filtering sidebar
  - Sorting options
  - Pagination
  - Real-time countdown timers
  - Favorite system
- **State**: 
  - `viewMode` - Grid or list view
  - `sortBy` - Sorting criteria
  - `filters` - Active filters
- **Redux**: Uses auction state, search filters
- **Connects To**: Auction detail, search
- **Debug**: Check timer accuracy, filter application

##### **Detalle.jsx**
- **Purpose**: Auction detail page
- **Function**: `Detalle()`
- **Features**: 
  - Image gallery
  - Bid history
  - Specifications
  - Comments section
  - Bidding form
- **State**: 
  - `currentImage` - Gallery current image
  - `bidAmount` - Current bid input
- **Redux**: Uses auction detail state
- **Connects To**: Bidding system, comments
- **Debug**: Check bid validation, real-time updates

#### 📁 **components/** - Auction Components

##### **PujasMartillo.jsx**
- **Purpose**: Bidding component
- **Function**: `PujasMartillo({ auctionId })`
- **Features**: 
  - Current bid display
  - Bid increment buttons
  - Custom bid input
  - Bid history
  - Real-time updates
- **Props**: 
  - `auctionId` - Auction identifier
  - `currentBid` - Current highest bid
  - `increment` - Bid increment amount
- **State**: 
  - `bidAmount` - User's bid amount
  - `isSubmitting` - Submission state
- **Redux**: Uses auction state, bid thunks
- **Connects To**: Auction detail, user authentication
- **Debug**: Check bid validation, real-time sync

### 📁 **search/** - Search Pages

#### 📁 **components/** - Search Components

##### **Busqueda.jsx**
- **Purpose**: Search interface
- **Function**: `Busqueda()`
- **Features**: 
  - Search input
  - Quick filters
  - Search suggestions
  - Recent searches
- **State**: 
  - `query` - Search query
  - `suggestions` - Search suggestions
- **Redux**: Uses search state
- **Connects To**: Search results, filters
- **Debug**: Check query handling, suggestions

##### **CarSidebar.jsx**
- **Purpose**: Filter sidebar
- **Function**: `CarSidebar()`
- **Features**: 
  - Category filters
  - Price range
  - Year range
  - Brand/model filters
  - Condition filters
- **State**: 
  - `filters` - Current filter values
  - `collapsed` - Sidebar collapse state
- **Redux**: Uses search filters
- **Connects To**: Search results
- **Debug**: Check filter application, state sync

##### **Resultados.jsx**
- **Purpose**: Search results display
- **Function**: `Resultados()`
- **Features**: 
  - Result cards
  - Pagination
  - Sorting options
  - View mode toggle
- **State**: 
  - `sortBy` - Sort criteria
  - `viewMode` - Grid or list
- **Redux**: Uses search results
- **Connects To**: Car detail pages
- **Debug**: Check result rendering, pagination

### 📁 **sell/** - Sell Pages

#### **Vender.jsx**
- **Purpose**: Vehicle selling form
- **Function**: `Vender()`
- **Features**: 
  - Multi-step form
  - Image upload
  - Specification inputs
  - Pricing calculator
  - Preview mode
- **State**: 
  - `currentStep` - Form step
  - `formData` - Complete form data
  - `images` - Uploaded images
  - `preview` - Preview mode
- **Redux**: Uses sell state
- **Connects To**: Image upload, form validation
- **Debug**: Check form progression, image handling

### **about/About.jsx**
- **Purpose**: About us page
- **Function**: `About()`
- **Features**: 
  - Company history
  - Team section
  - Mission/vision
  - Statistics
- **Connects To**: Team components, counter area
- **Debug**: Check content loading, animations

### **blog/Blog.jsx**
- **Purpose**: Blog page
- **Function**: `Blog()`
- **Features**: 
  - Blog post grid
  - Categories
  - Search functionality
  - Pagination
- **State**: 
  - `posts` - Blog posts
  - `category` - Selected category
- **Connects To**: Blog post details
- **Debug**: Check post loading, category filtering

### **contact/Contact.jsx**
- **Purpose**: Contact page
- **Function**: `Contact()`
- **Features**: 
  - Contact form
  - Map integration
  - Office information
  - Social links
- **State**: 
  - `formData` - Contact form data
  - `submitted` - Submission state
- **Connects To**: Form submission API
- **Debug**: Check form validation, map loading

### **services/Services.jsx**
- **Purpose**: Services page
- **Function**: `Services()`
- **Features**: 
  - Service listings
  - Pricing tables
  - FAQ section
  - CTA buttons
- **Connects To**: Contact page, pricing
- **Debug**: Check service data, pricing accuracy

---

## PUBLIC DIRECTORY (`/public`)

### 📁 **assets/** - Static Assets

#### 📁 **css/** - Stylesheets

##### **bootstrap.min.css**
- **Purpose**: Bootstrap 5 CSS framework
- **Size**: ~200KB minified
- **Features**: Grid system, components, utilities
- **Alternatives**: Tailwind CSS, Bulma, Foundation
- **Debug**: Check version compatibility, custom overrides

##### **all-fontawesome.min.css**
- **Purpose**: FontAwesome icon library
- **Size**: ~70KB minified
- **Version**: FontAwesome 6.x
- **Icons**: 1000+ icons available
- **Alternatives**: Feather Icons, Heroicons, Material Icons
- **Debug**: Check icon loading, missing icons

##### **animate.min.css**
- **Purpose**: CSS animation library
- **Size**: ~90KB minified
- **Animations**: Fade, slide, bounce, rotate effects
- **Usage**: Add classes like `animate__fadeIn`
- **Alternatives**: Framer Motion, AOS, custom CSS
- **Debug**: Check animation timing, browser support

##### **style.css**
- **Purpose**: Main theme stylesheet
- **Size**: ~500KB unminified
- **Features**: 
  - Custom color scheme
  - Component-specific styles
  - Responsive breakpoints
  - Hover effects
- **Key Variables**: 
  ```css
  :root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --danger-color: #dc3545;
    --font-family: 'Roboto', sans-serif;
  }
  ```
- **Alternatives**: Different color schemes, CSS preprocessors
- **Debug**: Check CSS custom properties, responsive breakpoints

##### **owl.carousel.min.css**
- **Purpose**: Carousel/slider styles
- **Size**: ~15KB minified
- **Features**: Navigation, dots, responsive behavior
- **Alternatives**: Swiper, Glide, custom sliders
- **Debug**: Check carousel responsiveness, navigation

##### **jquery-ui.min.css**
- **Purpose**: jQuery UI component styles
- **Size**: ~30KB minified
- **Components**: Datepicker, dialog, accordion
- **Alternatives**: Native HTML5 inputs, custom components
- **Debug**: Check component theming, conflicts

#### 📁 **js/** - JavaScript Libraries

##### **jquery-3.6.0.min.js**
- **Purpose**: jQuery JavaScript library
- **Size**: ~90KB minified
- **Version**: 3.6.0 (latest stable)
- **Features**: DOM manipulation, AJAX, animations
- **Alternatives**: Vanilla JS, modern alternatives
- **Debug**: Check jQuery conflicts, version compatibility

##### **bootstrap.bundle.min.js**
- **Purpose**: Bootstrap JavaScript components
- **Size**: ~80KB minified
- **Features**: Modals, dropdowns, collapse, tooltips
- **Dependencies**: Popper.js bundled
- **Alternatives**: Custom components, other frameworks
- **Debug**: Check component initialization, conflicts

##### **owl.carousel.min.js**
- **Purpose**: Carousel/slider functionality
- **Size**: ~45KB minified
- **Features**: Touch/swipe support, responsive, autoplay
- **Options**: 
  ```javascript
  {
    items: 3,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 }
    },
    autoplay: true,
    autoplayTimeout: 5000
  }
  ```
- **Debug**: Check touch events, responsive breakpoints

##### **main.js**
- **Purpose**: Main theme JavaScript
- **Size**: ~50KB unminified
- **Features**: 
  - Page initialization
  - Smooth scrolling
  - Mobile menu toggle
  - Animation triggers
- **Key Functions**: 
  ```javascript
  $(document).ready(function() {
    // Initialize components
    initializeCarousel();
    initializeForms();
    initializeAnimations();
  });
  ```
- **Debug**: Check function execution, jQuery ready

##### **contact-form.js**
- **Purpose**: Contact form handling
- **Size**: ~10KB
- **Features**: 
  - Form validation
  - AJAX submission
  - Success/error messages
- **Functions**: 
  ```javascript
  function validateForm(formData) {
    // Validation logic
  }
  function submitForm(formData) {
    // AJAX submission
  }
  ```
- **Debug**: Check validation rules, API endpoints

##### **counter-up.js**
- **Purpose**: Counter animation functionality
- **Size**: ~5KB
- **Features**: 
  - Number counting animation
  - Scroll-triggered activation
  - Customizable duration
- **Options**: 
  ```javascript
  {
    duration: 2000,
    easing: 'easeOutQuad',
    useGrouping: true
  }
  ```
- **Debug**: Check animation timing, intersection observer

#### 📁 **img/** - Images

##### 📁 **logo/**
- **Files**: 
  - `logo.png` - Main logo (300x80px)
  - `logo-white.png` - White logo variant
  - `favicon.ico` - Browser favicon
- **Purpose**: Brand identity elements
- **Format**: PNG with transparency
- **Alternatives**: SVG format, different sizes
- **Debug**: Check loading, retina support

##### 📁 **slider/**
- **Files**: 
  - `slide-1.jpg` - Hero slide 1 (1920x800px)
  - `slide-2.jpg` - Hero slide 2
  - `slide-3.jpg` - Hero slide 3
- **Purpose**: Hero section backgrounds
- **Format**: JPG optimized for web
- **Alternatives**: WebP format, different ratios
- **Debug**: Check loading speed, responsive scaling

##### 📁 **car/**
- **Files**: Multiple car images for listings
- **Naming**: `car-{id}.jpg` or descriptive names
- **Purpose**: Vehicle photos for listings
- **Format**: JPG with compression
- **Alternatives**: WebP, lazy loading
- **Debug**: Check image optimization, alt text

##### 📁 **icon/**
- **Files**: 
  - `clock.svg` - Time/schedule icon
  - `location.svg` - Location pin icon
  - `phone.svg` - Phone icon
- **Purpose**: UI icons and indicators
- **Format**: SVG for scalability
- **Alternatives**: Icon fonts, PNG icons
- **Debug**: Check SVG rendering, browser support

#### 📁 **sitio-web/** - Static HTML Version
- **Purpose**: Complete static HTML version of the site
- **Structure**: Mirror of main site with HTML files
- **Files**: 
  - `index.html` - Static home page
  - `about.html` - Static about page
  - `services.html` - Static services page
- **Assets**: Duplicate of main assets
- **Purpose**: Fallback or preview version
- **Debug**: Check file paths, asset loading

---

## 🔧 DEBUGGING GUIDE

### Common Issues and Solutions

#### Authentication Issues
- **Problem**: Token expires unexpectedly
- **Debug**: Check `parseJwt()` in src/utils/parseJwt.js:1
- **Solution**: Verify token refresh logic in src/redux/features/auth/thunks.js:45

#### API Connection Issues
- **Problem**: API calls fail
- **Debug**: Check base URL in src/const/url.js:3
- **Solution**: Verify endpoint configuration and authentication headers

#### Component Rendering Issues
- **Problem**: Components not displaying
- **Debug**: Check Redux state in browser dev tools
- **Solution**: Verify component connections to Redux store

#### Styling Issues
- **Problem**: Styles not applying
- **Debug**: Check CSS import order in src/index.css:1
- **Solution**: Verify Bootstrap and custom CSS loading

#### Image Loading Issues
- **Problem**: Images not loading
- **Debug**: Check image paths in public/assets/img/
- **Solution**: Verify image file existence and paths

### Performance Optimization

#### Bundle Size Optimization
- **Current**: ~2MB total bundle size
- **Optimization**: 
  - Lazy load components
  - Compress images (WebP format)
  - Tree shake unused dependencies
- **Tools**: Webpack Bundle Analyzer, Lighthouse

#### API Performance
- **Current**: ~500ms average response time
- **Optimization**: 
  - Implement request caching
  - Optimize database queries
  - Use CDN for static assets
- **Tools**: Network tab, API monitoring

---

## 📋 QUICK REFERENCE

### File Locations
- **Main App**: src/main.jsx:1
- **Router**: src/router/AppRouter.jsx:1
- **API Config**: src/const/url.js:1
- **Auth Logic**: src/redux/features/auth/thunks.js:1
- **Main Styles**: public/assets/css/style.css:1

### Key Functions
- **Login**: `startLogin()` in src/redux/features/auth/thunks.js:25
- **API Call**: `fetch()` in src/api/api.js:15
- **Format Currency**: `formatoMoneda()` in src/utils/formatoMoneda.js:1
- **Validate Email**: `esEmailValido()` in src/utils/esEmailValido.js:1

### Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

---

This comprehensive documentation provides complete coverage of the Unique Luis car rental and auction platform codebase. Each file, function, and component is documented with purpose, connections, alternatives, and debugging information for efficient development and maintenance.