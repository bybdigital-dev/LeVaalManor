# Le Vaal Manor - Luxury Short-Term Rental Website

## Overview

This is a single-page application (SPA) for Le Vaal Manor, a luxury short-term rental property located on Parys Golf Estate, South Africa. The website showcases the property professionally, highlights amenities, displays guest testimonials, and allows visitors to submit booking enquiries. The application uses a React frontend with an Express backend, featuring smooth section transitions and a responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with CSS custom properties for theming (navy blue primary, soft gold accent)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: React Query (@tanstack/react-query) for server state, React useState for local state
- **Form Handling**: react-hook-form with Zod validation
- **Navigation Pattern**: Single-page application with section-based navigation (Home, About, Gallery, Amenities, Contact) - sections are toggled with smooth fade/slide transitions rather than route-based navigation

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints prefixed with `/api/`
- **Current Endpoints**:
  - `POST /api/booking-enquiry` - Submit booking enquiry
  - `GET /api/booking-enquiries` - Retrieve all enquiries

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` - contains table definitions and Zod validation schemas
- **Current Storage**: In-memory storage (`MemStorage` class) as fallback, ready for PostgreSQL migration
- **Tables**: `users` and `booking_enquiries`

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # React components including section views
│   │   │   └── ui/       # shadcn/ui components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utilities and query client
│   │   └── pages/        # Page components (404, etc.)
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   ├── static.ts     # Static file serving for production
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between frontend/backend
│   └── schema.ts     # Drizzle schema and Zod types
└── migrations/       # Drizzle database migrations
```

### Build System
- **Development**: `tsx` for TypeScript execution, Vite HMR for frontend
- **Production Build**: Custom build script using esbuild for server, Vite for client
- **Output**: `dist/` directory with `index.cjs` (server) and `public/` (client assets)

## External Dependencies

### Database
- **PostgreSQL**: Required for production (configured via `DATABASE_URL` environment variable)
- **Drizzle Kit**: Used for schema migrations (`npm run db:push`)

### Key Frontend Libraries
- **@tanstack/react-query**: Server state management and API caching
- **react-hook-form**: Form state management
- **zod**: Schema validation (shared between frontend and backend via drizzle-zod)
- **embla-carousel-react**: Carousel/gallery functionality
- **lucide-react**: Icon library
- **react-icons**: Additional icons (social media)
- **date-fns**: Date manipulation
- **vaul**: Drawer component
- **cmdk**: Command menu component

### Backend Libraries
- **express**: Web framework
- **drizzle-orm**: Database ORM
- **connect-pg-simple**: PostgreSQL session store (available for future auth)
- **nanoid**: Unique ID generation

### Development Tools
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` for enhanced Replit development experience