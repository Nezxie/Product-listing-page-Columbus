# Product Listing Page - Columbus

This is a product listing application built with **Next.js** as part of the recruitment process for the Junior Frontend Developer position at Columbus.  
The project simulates a basic e-commerce product listing page, where products are fetched asynchronously from REST API and displayed in a responsive UI.

## Live Demo

https://product-listing-page-columbus.vercel.app/

## Project Overview

The goal of this project was to build a clean, functional product listing page.

The application:
- Fetches product data asynchronously from a REST API
- Displays products in a structured, responsive layout
- Implements a cart system with a dynamic badge counter
- Follows semantic HTML structure and modular component design
- Uses TypeScript types generated from the provided API schema

## Features

- Product listing with:
  - Image
  - Title
  - Description
  - Brand name and brand logo
  - Price
  - Discount label and recalculated price (if available)

- Shopping cart functionality:
  - Add-to-cart button per product
  - Fake API request simulation
  - Dynamic cart counter in header

## Tech Stack

- Next.js
- React
- TypeScript
- CSS Modules
- Lucide Icons

## Getting Started

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/Nezxie/Product-listing-page-Columbus.git

# Install dependencies
npm install

# Run the development server
npm run dev

```
Then open

```bash
http://localhost:3000
```

To run the project correctly, you need to provide API credentials:
```bash
API_URL=your_api_url_here
API_KEY=your_api_key_here
```

Create a .env.local file in the root directory and add the values above.
