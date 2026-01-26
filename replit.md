# Le Vaal Manor - Luxury Short-Term Rental Website

## Overview
A clean, modern, and fully responsive single-page application (SPA) for Le Vaal Manor, a luxury short-term rental property on Parys Golf Estate, South Africa.

## Project Structure
- **Frontend**: React + TypeScript + TailwindCSS
- **Backend**: Express.js with in-memory storage
- **Styling**: Custom navy blue & gold color palette

## Key Features
- **SPA Navigation**: Smooth fade transitions between sections (Home, About, Gallery, Amenities, Contact)
- **Responsive Design**: Mobile hamburger menu, responsive grid layouts
- **Hero Section**: Full-screen hero with property branding and CTA
- **Guest Testimonials**: Card-based review display
- **Image Gallery**: Grid layout with modal lightbox view
- **Amenities**: Icon-based feature cards
- **Booking Form**: Full enquiry form with validation
- **Google Maps**: Embedded location map
- **Social Links**: Footer with Facebook, Instagram, WhatsApp

## Technical Details

### Frontend Components
Located in `client/src/components/`:
- `Header.tsx` - Sticky navigation with mobile menu
- `HomeSection.tsx` - Hero + testimonials
- `AboutSection.tsx` - Property description + features
- `GallerySection.tsx` - Image grid with lightbox
- `AmenitiesSection.tsx` - Amenities cards
- `ContactSection.tsx` - Booking form + map
- `Footer.tsx` - Social links
- `ScrollToTop.tsx` - Floating scroll button

### API Endpoints
- `POST /api/booking-enquiry` - Submit booking enquiry
- `GET /api/booking-enquiries` - List all enquiries

### Design Tokens
- **Primary**: Navy blue (220 60% 25%)
- **Accent**: Gold (45 75% 50%)
- **Typography**: Playfair Display (headings), Inter/DM Sans (body)

## Development
The application runs on port 5000 with `npm run dev`. The Vite dev server handles hot reloading for frontend changes.

## Recent Changes
- Initial build: Complete SPA with all sections
- Navy blue + gold color scheme implementation
- Booking enquiry form with backend storage
- Responsive mobile navigation
- Image gallery with modal viewer
