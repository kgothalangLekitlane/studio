# Global Wanderer - Travel Blog

This project is a Next.js-based travel blog website showcasing global travel destinations. It allows users to explore various locations, read about their history, discover scenic spots and popular eateries, and get inspired for their next adventure.

## Features

*   **Homepage:** Welcoming introduction, featured destinations, and call to action.
*   **Destinations Listing:** Browse all available destinations with search functionality.
*   **Destination Details:** In-depth information for each destination, including:
    *   Overview and image.
    *   Detailed history.
    *   List of must-see scenic spots.
    *   Popular local eateries with types.
    *   Ideas for related articles (placeholder).
    *   Quick facts (continent, coordinates, population).
*   **About Page:** Information about the blog's mission and the founder.
*   **Contact Page:** A functional form to send messages and contact information.
*   **Responsive Design:** Adapts to different screen sizes (desktop, tablet, mobile).
*   **Styling:** Uses Tailwind CSS and ShadCN UI components for a modern look and feel.
*   **Search Functionality:** Filter destinations based on name, continent, description, or history teaser.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (version 18 or later recommended)
*   npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:9002](http://localhost:9002) (or the specified port) with your browser to see the result.

The application uses Next.js with Turbopack for faster development builds.

## Project Structure

```
.
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router directory
│   │   ├── about/          # About page route
│   │   ├── contact/        # Contact page route
│   │   ├── destinations/   # Destinations routes
│   │   │   ├── [slug]/     # Dynamic route for individual destinations
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx    # Main destinations listing page
│   │   ├── favicon.ico
│   │   ├── globals.css     # Global styles and ShadCN theme
│   │   ├── layout.tsx      # Root layout component
│   │   └── page.tsx        # Homepage route
│   ├── components/
│   │   ├── layout/         # Layout components (Header)
│   │   └── ui/             # ShadCN UI components
│   ├── data/
│   │   └── destinations.ts # Data source for all destinations
│   ├── hooks/              # Custom React hooks (use-mobile, use-toast)
│   ├── lib/
│   │   └── utils.ts        # Utility functions (cn)
├── .eslintrc.json
├── .gitignore
├── components.json         # ShadCN UI configuration
├── next.config.ts          # Next.js configuration
├── package.json
├── postcss.config.mjs
├── README.md               # This file
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Data Structure (`src/data/destinations.ts`)

The core content of the blog resides in the `destinations.ts` file. It exports an array of `Destination` objects. Each object represents a travel destination and follows this structure:

```typescript
export interface ScenicSpot {
  name: string;
  description: string;
}

export interface Eatery {
  name: string;
  description: string;
  type: string; // e.g., "Restaurant", "Cafe", "Street Food"
}

export interface Destination {
  slug: string;           // Unique identifier for URL (e.g., "paris")
  name: string;           // Full name (e.g., "Paris, France")
  description: string;    // Short description for cards
  historyTeaser: string;  // Short history hint for cards
  historyDetails: string; // Longer history for detail page
  image: string;          // URL for the main image
  imageHint: string;      // Keywords for AI image search if needed
  continent: string;
  coordinates: string;    // e.g., "48.8566° N, 2.3522° E"
  population: string;     // e.g., "2.1 million (city)"
  scenicSpots: ScenicSpot[];
  popularEateries: Eatery[];
  articleIdeas: string[]; // Placeholder titles/ideas for articles
}
```

To add a new destination, simply add a new `Destination` object to the `destinations` array in this file, ensuring the `slug` is unique.

## Key Components & Pages

*   **Layout (`src/app/layout.tsx`, `src/components/layout/header.tsx`):** Defines the overall page structure, including the sticky header (with navigation), main content area, and footer. It also sets up fonts and integrates the `Toaster` component for notifications.
*   **Homepage (`src/app/page.tsx`):** The main landing page featuring a hero section, a grid of featured destinations (linking to their detail pages), and a call-to-action section.
*   **Destinations Page (`src/app/destinations/page.tsx`):** Displays all destinations in a grid format. Includes a search bar (`<Input>`) that filters the destinations client-side based on user input. Uses `useState` and `useEffect` for search state management.
*   **Destination Detail Page (`src/app/destinations/[slug]/page.tsx`):** A dynamic route that renders detailed information for a specific destination based on the URL `slug`. It fetches data using `getDestinationBySlug` and displays history, scenic spots, eateries, etc., using ShadCN `Card` components. Uses `generateStaticParams` for static site generation (SSG) of known destinations.
*   **About Page (`src/app/about/page.tsx`):** Provides information about the blog's mission and founder, Isaac Lekitlane. Uses static content and images.
*   **Contact Page (`src/app/contact/page.tsx`):** Contains a contact form built with `react-hook-form` and `zod` for validation. On submission, it simulates sending a message and displays a toast notification using the `useToast` hook. Also includes static contact information.

## Styling

*   **Tailwind CSS:** Used for utility-first styling. Configuration is in `tailwind.config.ts`.
*   **ShadCN UI:** Provides pre-built, accessible UI components (located in `src/components/ui/`). Configuration is in `components.json`.
*   **Theme:** Custom color themes (light and dark mode) are defined using CSS variables in `src/app/globals.css`. Colors primarily use HSL values for easy customization.

## Dependencies

Key dependencies include:

*   **Next.js:** React framework for building the application.
*   **React:** JavaScript library for building user interfaces.
*   **TypeScript:** Superset of JavaScript adding static typing.
*   **Tailwind CSS:** Utility-first CSS framework.
*   **ShadCN UI:** Re-usable UI components built with Radix UI and Tailwind CSS.
*   **Lucide React:** Icon library.
*   **Zod:** Schema declaration and validation library (used in forms).
*   **React Hook Form:** Library for managing form state and validation.
*   **@hookform/resolvers:** Resolver for using Zod with React Hook Form.

See `package.json` for a full list of dependencies.
```