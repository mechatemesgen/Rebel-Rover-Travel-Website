

---

![logo](https://github.com/user-attachments/assets/2ba64e41-7323-499d-94b7-779fdef5b9e3)

# Rebel Rover Travel Website

A modern, responsive travel booking platform built with **React**, **Tailwind CSS**, and **React Router**, integrating a **Mock API** to simulate real-world backend functionality.

---

## Project Summary

This project transforms the **Rebel Rover** Figma design into a fully functional travel website. It demonstrates key front-end development skills, including:

- UI Development from Figma
- API Integration using [MockAPI.io](https://mockapi.io)
- Routing, State Management, and CRUD operations

---

## 🌐 Live Demo

[🔗 View The Website](https://rebel-rover-travel-capstone.vercel.app/)

---
## 🤝 Contributors

We proudly acknowledge the amazing work of our contributors:

| 👩‍💻 GitHub Username | Role |
|----------------------|------|
| [@mecmesgen](https://github.com/mechatemesgen) | Developer |
| [@helenlemessa](https://github.com/helenlemessa) | Developer |
| [@Abdurazakm](https://github.com/Abdurazakm) | Developer |
| [@SuadAbrar](https://github.com/SuadAbrar) | Developer |
| [@MuniraAbdulkerim](https://github.com/MuniraAbdulkerim) | Developer |
| [@Heluhz](https://github.com/Heluhz) | Developer |

🔍 [See Full Contribution Graph on GitHub](https://github.com/helenlemessa/Rebel-Rover-Travel-Website/pulse)

## Tech Stack

- **React**
- **React Router**
- **Tailwind CSS**
- **MockAPI.io** (Backend Simulation)

---

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/helenlemessa/Rebel-Rover-Travel-Website.git
cd Rebel-Rover-Travel-Website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Your project will run on [http://localhost:5173](http://localhost:5173).

## Design Reference

Access the Figma design for this project:

[Rebel Rover | Travel Website Theme](https://www.figma.com/design/layfhpZL6cBoAgV41xp7qq/Rebel-Rover-%7C-Travel-Website-Theme-Figma-(Community)?node-id=1-2&t=mRUtU3iOi4o9tare-0)

---

## Features

### 🔹 Home Page
- Hero banner
- Featured destinations
- Customer testimonials

### 🔹 Destinations Page
- Searchable destination grid
- Filters by country and price

### 🔹 Booking Page
- Multi-step booking form
- Date picker integration

### 🔹 User Profile Page
- View booking history
- Update account settings

---

## API Integration

We use MockAPI.io for backend simulation.

**Base URL**:  
`https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/`

**Endpoint Example**:  
**Destinations**  
`GET/POST/PUT/DELETE: /Destinations`

Fields include:
- `id`
- `name`
- `country`
- `price`
- `image` (URL)
- `description`

_Fields may slightly vary — always test in Postman first._

---

## Folder Structure

```bash
Rebel-Rover-Travel-Website/
├── public/                           # Static files
│   └── index.html                    # Main HTML template
├── src/                              # Source code
│   ├── assets/                       # Images, icons, etc.
│   ├── components/                   # Reusable UI components
│   │   ├── DestinationCard/          # Destination card component
│   │   ├── BookingStepper/           # Multi-step booking component
│   │   ├── TestimonialCard/          # Testimonial card component
│   │   └── Button.jsx                # Reusable button component
│   ├── features/                     # Feature-specific components & logic
│   │   ├── home/                     # Home page components
│   │   │   ├── Hero.jsx              # Hero section component
│   │   │   ├── FeaturedDestinations.jsx  # Featured destinations component
│   │   │   └── Testimonials.jsx      # Testimonials section
│   │   ├── destinations/             # Destinations page components
│   │   │   ├── DestinationList.jsx   # List of destinations
│   │   │   ├── DestinationFilter.jsx # Filter component for destinations
│   │   │   └── DestinationDetail.jsx # Detailed destination view
│   │   ├── booking/                  # Booking page components
│   │   │   ├── BookingForm.jsx       # Booking form component
│   │   │   └── BookingConfirmation.jsx # Booking confirmation component
│   │   └── profile/                  # User profile components
│   │       ├── BookingHistory.jsx    # Booking history view
│   │       └── AccountSettings.jsx   # Account settings component
│   ├── layouts/                      # Layout components
│   │   ├── MainLayout.jsx            # Main layout for public pages
│   │   └── DashboardLayout.jsx       # Dashboard layout for user profiles
│   ├── pages/                        # Route-specific pages
│   │   ├── Home.jsx                  # Home page
│   │   ├── Destinations.jsx          # Destinations listing page
│   │   ├── Booking.jsx               # Booking page
│   │   ├── Profile.jsx               # User profile page
│   │   └── NotFound.jsx              # 404 error page
│   ├── routes/                       # Routing configuration
│   │   └── AppRoutes.jsx             # Application routes
│   ├── services/                     # API utilities
│   │   ├── apiClient.js              # API client configuration
│   │   └── destinations.js           # Destinations API calls
│   ├── hooks/                        # Custom React hooks
│   │   └── useFetchDestinations.js   # Hook for fetching destinations
│   ├── contexts/                     # Global state management
│   │   └── AuthContext.jsx           # Authentication context
│   ├── styles/                       # Global and Tailwind CSS styles
│   │   └── index.css                 # Main CSS file
│   ├── App.jsx                       # Root component
│   └── main.jsx                      # Application entry point
├── .env                              # Environment variables
├── .gitignore                        # Git ignore configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── postcss.config.js                 # PostCSS configuration
├── package.json                      # Project dependencies and scripts
├── README.md                         # Project README file
└── vite.config.js                    # Vite configuration
```

---


