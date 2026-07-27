# The Artisan Kiln - Ceramic Tile Order Form

This is a responsive, interactive single-page application built for "The Artisan Kiln" to order ceramic tiles and visualize custom designs.

## Features

- **Responsive Design**: Pixel-perfect layout tailored for both Mobile (vertical stack) and Desktop (3-column layout) environments.
- **Interactive Shopping Cart**: Add, remove, and adjust quantities of tiles with real-time total calculations and framer-motion animations.
- **Design Visualizer Tool (Desktop Only)**: A 7x7 interactive grid allowing users to drag/click-to-place tiles from a diverse palette to visualize their design.
- **Checkout Form**: Comprehensive form with validation (email, phone, credit card format, expiry, CVV) and payment method selection.
- **Redux State Management**: Uses Redux Toolkit for centralized state management across Cart, Design Grid, and Checkout layers.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (with custom design tokens in `globals.css`)
- **State Management:** Redux Toolkit (`react-redux`)
- **Animations:** Framer Motion
- **Testing:** Jest

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```

3. **Open the Application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Running Tests

To run the unit tests for the business logic:
```bash
npm run test
```

## Build for Production

```bash
npm run build
npm run start
```
