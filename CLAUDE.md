# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Project Architecture

This is a React 19 application built with Vite that implements a car rental website with auction functionality. The project uses a **feature-based architecture** with Redux Toolkit for state management and Firebase for data persistence.

### Key Technologies
- **React 19** with React Router DOM v7 for routing
- **Redux Toolkit** for state management organized by features
- **Firebase/Firestore** for database operations
- **Vite** for build tooling and development
- **Custom fetch API** for HTTP communication
- **Bootstrap 5** with custom styling

### Feature-Based Architecture

The application follows a feature-based structure where each major functionality is self-contained:

**🔐 Authentication Feature** (`src/redux/features/auth/`)
- `userSlice.js` - User authentication and session management
- `registroSlice.js` - User registration workflows  
- `thunks.js` - Login, registration, and token refresh logic

**🚗 Auction Feature** (`src/redux/features/auction/`)
- `subastaSlice.js` - Auction state and bidding functionality
- `thunks.js` - Auction operations and real-time updates

**🔍 Search Feature** (`src/redux/features/search/`)
- `busquedaSlice.js` - Search and filtering logic
- `thunks.js` - Search operations and results management

**💰 Sell Feature** (`src/redux/features/sell/`)
- `venderSlide.js` - Car selling/listing functionality
- `thunks.js` - Vehicle submission and management

**🌐 Shared State** (`src/redux/shared/`)
- `modalSlice.js` - Global modal management
- `loaderSlice.js` - Loading states across the app
- `slideshowSlice.js` - Image carousel management
- `onboardingSlice.js` - User onboarding flows

### API Layer

The application uses a custom API wrapper (`src/api/api.js`) with:
- `fetch()` - Authenticated requests with JWT tokens
- `fetchSinToken()` - Unauthenticated requests
- `postFile()` - File upload functionality
- `getFile()` - File download with authentication

### Component Structure

The components are organized by type and reusability:

**🎨 UI Components** (`src/components/ui/`)
- `Breadcrumb.jsx` - Navigation breadcrumbs
- `ScrollTop.jsx` - Scroll to top functionality

**📝 Form Components** (`src/components/forms/`)
- `InputText.jsx`, `InputPassword.jsx` - Input field components
- `InputSelect.jsx`, `InputDatePicker.jsx` - Specialized inputs
- `LabelFile.jsx`, `OneFile.jsx` - File upload components

**💬 Feedback Components** (`src/components/feedback/`)
- `Loading.jsx` - Loading states and spinners
- `MensajeSesion.jsx` - Session and notification messages

**🔄 Common Components** (`src/components/common/`)
- `AboutArea.jsx`, `BlogArea.jsx` - Reusable page sections
- `FaqArea.jsx`, `TestimonialArea.jsx` - Content sections
- `CounterArea.jsx`, `TeamArea.jsx` - About page components

**🏗️ Layout Components** (`src/layout/`)
- `Header.jsx`, `Footer.jsx` - Main navigation and footer
- `Layout.jsx` - Main application wrapper
- `LayoutPage.jsx` - Protected routes layout
- `GlobalMessage.jsx` - Global messaging system

### Firebase Integration

Firebase is configured in `src/db/firebase.js` with Firestore for data persistence. The configuration is imported from `src/db/config/firebase.js`.

### Directory Structure

```
src/
├── api/                    # API layer and HTTP utilities
│   └── api.js              # Custom fetch wrapper with authentication
├── components/             # Reusable React components by type
│   ├── ui/                 # UI utilities (Breadcrumb, ScrollTop)
│   ├── forms/              # Form input components (InputText, etc.)
│   ├── feedback/           # Loading, messages, notifications
│   └── common/             # Common reusable components
├── const/                  # Constants and configuration
│   ├── consLogged.js       # Authentication state constants
│   ├── options.js          # App configuration options
│   └── url.js              # API endpoints configuration
├── db/                     # Firebase configuration
│   ├── firebase.js         # Firebase app initialization
│   └── config/firebase.js  # Firebase credentials
├── hooks/                  # Custom React hooks
│   └── useWindowSize.js    # Window size tracking hook
├── layout/                 # Layout wrapper components
│   ├── Layout.jsx          # Main app layout wrapper
│   ├── LayoutPage.jsx      # Protected routes layout
│   ├── Header.jsx          # Main navigation header
│   ├── Footer.jsx          # Site footer
│   └── GlobalMessage.jsx   # Global messaging system
├── redux/                  # Redux store organized by features
│   ├── features/           # Feature-based state management
│   │   ├── auth/           # Authentication (login, register, tokens)
│   │   ├── auction/        # Auction and bidding functionality
│   │   ├── search/         # Search and filtering
│   │   └── sell/           # Vehicle selling/listing
│   ├── shared/             # Shared state across features
│   │   ├── modalSlice.js   # Global modal management
│   │   ├── loaderSlice.js  # Loading states
│   │   └── slideshowSlice.js # Image carousels
│   └── store.js            # Redux store configuration
├── router/                 # Routing configuration
│   ├── AppRouter.jsx       # Main application router
│   ├── PrivateRoute.jsx    # Private route wrapper
│   ├── ProtectedRoutes.jsx # Protected routes component
│   └── PublicRoute.jsx     # Public route wrapper
├── utils/                  # Utility functions
│   ├── formatoMoneda.js    # Currency formatting
│   ├── crearCronometro.js  # Timer/countdown utilities
│   ├── formValidations.js  # Form validation helpers
│   └── parseJwt.js         # JWT token parsing
└── views/                  # Feature-based view components
    ├── auth/               # Authentication pages
    │   ├── Login.jsx       # Login page
    │   └── Register.jsx    # Registration page
    ├── auction/            # Auction functionality
    │   ├── pages/          # Auction pages
    │   │   ├── Subastas.jsx # Auction listings
    │   │   └── Detalle.jsx  # Auction detail view
    │   └── components/     # Auction-specific components
    │       └── PujasMartillo.jsx # Bidding component
    ├── search/             # Search functionality
    │   └── components/     # Search-specific components
    │       ├── Busqueda.jsx # Search interface
    │       ├── CarSidebar.jsx # Filter sidebar
    │       └── Resultados.jsx # Search results
    ├── sell/               # Vehicle selling
    │   └── Vender.jsx      # Sell vehicle page
    ├── home/               # Home page
    │   ├── Home.jsx        # Main home page
    │   └── components/     # Home-specific components
    │       ├── HeroSection.jsx # Hero banner
    │       ├── CarArea.jsx     # Featured cars
    │       └── FindCarForm.jsx # Car search form
    ├── about/              # About page
    ├── contact/            # Contact page  
    ├── services/           # Services page
    └── blog/               # Blog page
```

## Working with the Codebase

### Adding New Features
1. **Create Feature Directory**: Add new feature in `src/views/[feature-name]/`
   - Create `pages/` subdirectory for main views
   - Create `components/` subdirectory for feature-specific components
2. **Redux State**: Add feature slice in `src/redux/features/[feature-name]/`
   - `[feature]Slice.js` for state management
   - `thunks.js` for async operations
3. **API Integration**: Add API functions in `src/api/api.js` if needed
4. **Routing**: Update `src/router/AppRouter.jsx` with new routes
5. **Components**: Follow existing naming conventions and structure

### Feature-Based Development Workflow
```
📁 views/[new-feature]/
├── pages/                  # Main feature pages
│   └── FeaturePage.jsx
├── components/             # Feature-specific components
│   └── FeatureComponent.jsx
📁 redux/features/[new-feature]/
├── featureSlice.js         # State management
└── thunks.js               # Async operations
```

### Router Architecture
The application uses a sophisticated routing system with authentication:

- **AppRouter**: Main router handling authentication state and route rendering
- **Layout Components**: Consistent structure across the application
- **Route Protection**: PrivateRoute and PublicRoute components for access control
- **Authentication Flow**: JWT tokens with automatic refresh functionality

### State Management Patterns
- **Feature-Based Slices**: Each feature has its own Redux slice
- **Shared State**: Common functionality in `src/redux/shared/`
- **Async Operations**: Use thunks for API calls and side effects
- **State Access**: `useSelector` for state, `useDispatch` for actions

### API Integration
- **Authenticated Requests**: `fetch()` function with JWT token headers
- **Public Requests**: `fetchSinToken()` for unauthenticated endpoints  
- **Loading States**: Managed through `loaderSlice` for consistent UX
- **Error Handling**: Centralized error management in API wrapper

### Component Conventions
- **Functional Components**: Use React hooks for state and effects
- **Naming**: PascalCase for components, camelCase for functions
- **Styling**: Bootstrap 5 classes with custom CSS overrides
- **File Organization**: Components grouped by type and reusability

### Authentication System
- **Login/Register**: Standalone pages (`/login`, `/register`) instead of modals
- **Header Navigation**: Dynamic user menu showing login/register when logged out, profile options when logged in
- **Route Protection**: Automatic redirection based on authentication state
- **Token Management**: JWT tokens with automatic refresh functionality

## Firebase Setup

The project requires Firebase configuration in `src/db/config/firebase.js`. Ensure this file contains valid Firebase project credentials before running the application.

## Important Notes

- **No Index Files**: The project does not use barrel exports (index.js files) to keep imports explicit
- **Feature Isolation**: Each feature is self-contained with its own components and state
- **Clean Architecture**: Components are organized by reusability, not by feature
- **Consistent Styling**: Use existing Bootstrap classes and custom CSS, avoid adding new styles without justification