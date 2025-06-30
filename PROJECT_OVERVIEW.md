# Project Overview: Beauty Parlor App Shell

## 🏗️ Architecture

This is a **Micro-Frontend Application Shell** for a Beauty Parlor management system built using **Module Federation** with React. The app shell serves as the main container that orchestrates multiple independent micro-applications.

## 📋 Project Summary

- **Name**: `app-shell`
- **Type**: Micro-frontend shell application
- **Framework**: React 18.3.1 with React Router
- **Build Tool**: Webpack 5 with Module Federation
- **Styling**: Tailwind CSS
- **Deployment**: AWS S3 via Jenkins CI/CD

## 🎯 Purpose

The app shell provides:
- Main navigation and layout
- Route management between micro-apps
- Shared authentication context
- Common UI components and styling
- Centralized configuration

## 🏛️ Micro-Frontend Architecture

### Remote Applications
The shell integrates the following micro-applications:

| Service | Port | Description |
|---------|------|-------------|
| `dashboard` | 3001 | Main dashboard view |
| `booking` | 3002 | Appointment booking system |
| `profile` | 3003 | User profile management |
| `feedback` | 3004 | Customer feedback system |
| `auth` | 3005 | Authentication handling |
| `layout` | 3006 | Shared layout components |

### Shared Dependencies
- React & React DOM (singleton)
- React Router DOM (singleton)
- `@mtbs/shared-lib` (shared component library)

## 📁 Project Structure

```
├── src/
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point (imports bootstrap)
│   ├── bootstrap.jsx    # App initialization with providers
│   └── index.css        # Tailwind CSS imports
├── public/
│   └── mockServiceWorker.js  # MSW for API mocking
├── webpack.config.js    # Module Federation configuration
├── package.json         # Dependencies and scripts
├── Jenkinsfile         # CI/CD pipeline
└── tailwind.config.js  # Tailwind CSS configuration
```

## 🚀 Key Features

### 1. Module Federation Setup
- **Container**: Acts as the shell/host application
- **Remotes**: Consumes micro-apps as federated modules
- **Dynamic Imports**: Lazy-loads micro-apps for performance

### 2. Routing Structure
```
/ or /login          → Auth App
/dashboard/*         → Dashboard App
/profile/*           → Profile App  
/booking/*           → Booking App
/feedback/*          → Feedback App
```

### 3. Development Features
- **Mock API**: MSW (Mock Service Worker) integration
- **Mock Auth**: Configurable authentication provider
- **Environment Variables**: Dotenv support
- **Hot Reload**: Webpack dev server

### 4. Shared State Management
- **ToastProvider**: Global notification system
- **AuthProvider**: Authentication context
- **MockAuthProvider**: Development authentication

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1**: UI framework
- **React Router 6.20.0**: Client-side routing
- **Tailwind CSS**: Utility-first styling
- **Webpack 5**: Module bundler with Federation

### Development Tools
- **Babel**: JavaScript transpilation
- **PostCSS**: CSS processing
- **MSW**: API mocking
- **ESLint/Prettier**: Code quality (implied)

### DevOps
- **Jenkins**: CI/CD pipeline
- **AWS S3**: Static hosting
- **Node.js 18**: Runtime environment

## 🔧 Development Setup

### Available Scripts
```bash
npm run dev    # Start development server (port 3000)
npm run build  # Build for production
```

### Environment Configuration
- Development mocking via `MOCK_API=true`
- Authentication mocking via `MOCK_AUTH=true`
- Environment-specific builds for dev/prod

## 🚀 Deployment

### CI/CD Pipeline (Jenkins)
1. **Environment Injection**: Loads environment-specific variables
2. **Build**: Installs dependencies and builds the app
3. **Deploy**: Syncs build artifacts to S3 bucket

### Deployment Targets
- **Development**: `dev` environment
- **Production**: `prod` environment

## 🔍 Key Components

### App Shell (`src/App.jsx`)
- Main navigation bar with Beauty Parlor branding
- Route definitions for all micro-apps
- Suspense boundaries for lazy loading
- Responsive layout with Tailwind CSS

### Bootstrap (`src/bootstrap.jsx`)
- App initialization
- Provider setup (Auth, Toast)
- MSW integration for development
- React 18 concurrent features

## 🌐 Integration Points

1. **Authentication**: Shared auth context across all micro-apps
2. **Navigation**: Centralized routing in the shell
3. **Notifications**: Global toast notification system
4. **Styling**: Shared Tailwind configuration
5. **API**: Optional mock service worker for development

## 🔒 Security & Performance

- **Code Splitting**: Automatic with Module Federation
- **Lazy Loading**: Micro-apps loaded on demand
- **Singleton Dependencies**: Shared React instances
- **Environment Isolation**: Separate dev/prod configurations

This architecture enables independent development and deployment of micro-applications while maintaining a cohesive user experience through the shared shell.