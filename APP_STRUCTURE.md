# Meridian Real Estate Platform - Application Structure

## Overview
This document outlines the structure and components of the Meridian real estate platform, a premium real estate investment platform targeting the Dominican Republic and expanding to the USA.

## Technology Stack
- **Frontend**: Next.js 15 (React 19) with TypeScript
- **Styling**: Tailwind CSS
- **Mobile**: React Native (planned)
- **Backend**: Node.js with Express (planned)
- **Database**: Supabase (planned)
- **Authentication**: Supabase Auth (planned)
- **Storage**: Cloudflare R2 (planned)
- **Maps**: Google Maps API (planned)
- **Deployment**: Cloudflare Workers with D1 database (planned)

## Application Pages

### 1. Homepage (`/`)
- Landing page with platform overview
- Call-to-action buttons for browsing properties and listing properties
- Key features presentation
- How-it-works section

### 2. Authentication
- **Signup** (`/signup`)
  - User registration form with validation
  - Social signup options (Google, Facebook)
  - Terms and conditions acceptance
- **Signup Success** (`/signup/success`)
  - Confirmation page after successful registration
- **Login** (`/login`)
  - User authentication form
  - Social login options
  - Password recovery option

### 3. Dashboard (`/dashboard`)
- User overview with profile completion status
- Property statistics (listed, sold, inquiries)
- Tabbed interface for:
  - Overview
  - My Properties
  - Saved Searches
  - Settings

### 4. Properties
- **Properties Listing** (`/properties`)
  - Searchable and filterable property listings
  - Property cards with key details
  - Pagination controls
- **Property Detail** (`/properties/[id]`)
  - Detailed property information
  - Photo gallery
  - Feature list
  - Location map
  - Contact agent functionality

### 5. Property Management
- **List Property** (`/list-property`)
  - Multi-step form for property listing:
    1. Basic Information
    2. Property Details
    3. Features & Amenities
    4. Media Upload
    5. Review & Publish

### 6. Search (`/search`)
- Dual-purpose search interface:
  - **Search Properties**: Filter existing listings
  - **Post Requirements**: Define property preferences for matching

### 7. Communication
- **Messages** (`/messages`)
  - Conversation list
  - Real-time chat interface
  - Support for multiple user roles (buyers, sellers, agents, lawyers, notaries)

## User Roles
1. **Property Owners/Sellers**
2. **Buyers**
3. **Renters**
4. **Investors**
5. **Real Estate Agents**
6. **Lawyers**
7. **Notary Public**

## Key Features
- Property listing and management
- Advanced search with filters
- Real-time messaging system
- Notification system for new matches
- Map integration for property locations
- User profiles with role-based access
- Multi-language support (English/Spanish)

## Design Elements
- Gold accent color scheme for luxury branding
- Responsive design for all device sizes
- Elegant typography and spacing
- Intuitive navigation
- Consistent UI components across pages

## Future Enhancements
- Virtual property tours
- Mortgage calculator
- Neighborhood information
- User reviews and ratings
- Scheduling system for viewings
- Advanced analytics for property owners