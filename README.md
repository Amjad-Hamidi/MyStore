# 🛒 MyStore - Angular E-Commerce Application

MyStore is a high-performance Single Page Application (SPA) built using **Angular 21**. This project is the final submission for the **Udacity Angular Nanodegree**, designed to showcase advanced front-end development skills, including component architecture, state management, and client-side routing.

## 📝 Project Overview
The application simulates a real-world e-commerce flow where users can browse products, view specific details, manage their shopping cart, and complete an order through a validated checkout system.

## ✨ Key Features (Rubric Compliant)
* **Dynamic Product Catalog:** Asynchronous data fetching using Angular's `HttpClient`.
* **Product Details:** Dynamic routing to display rich information for each item.
* **Shopping Cart System:** * Real-time total price calculation.
    * Capability to update quantities and remove products.
    * Instant user feedback via alerts upon adding items.
* **Secure Checkout:** Form validation including character length checks for user data.
* **Success Confirmation:** A dedicated order confirmation page triggered after successful checkout.

## 🛠️ Tech Stack
* **Framework:** Angular 21 (Standalone Components)
* **Language:** TypeScript (Strictly Typed)
* **Navigation:** Angular Router for seamless SPA transitions.
* **Styling:** Custom CSS3 with Flexbox/Grid for a modern UI.

## 📂 Project Structure
Based on the project's architecture:

```text
mystore/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── cart/                 # Shopping cart logic
│   │   │   ├── checkout/             # Validated order form
│   │   │   ├── confirmation/         # Order success view
│   │   │   ├── product-detail/       # Detailed item description
│   │   │   ├── product-item/         # Reusable product card (Child)
│   │   │   └── product-list/         # Main catalog display (Parent)
│   │   ├── models/
│   │   │   └── product.model.ts      # Product interface definition
│   │   ├── services/
│   │   │   ├── cart.service.ts       # Centralized cart state
│   │   │   └── product.service.ts    # API/Data fetching service
│   │   ├── app.routes.ts             # Navigation paths configuration
│   │   ├── app.ts                    # Root component logic
│   │   ├── app.html                  # Main layout (Header/Footer)
│   │   └── app.css                   # Global component styles
│   ├── assets/                       # Static data and images
│   └── styles.css                    # Main application stylesheet
├── .gitignore                        # Version control exclusions
├── package.json                      # Dependencies and scripts
└── README.md                         # Project documentation
```

# 🚀 Installation & Usage

## 1. Clone the Project
```bash
git clone https://github.com/Amjad-Hamidi/MyStore.git
cd MyStore
```

## 2. Install Dependencies
```bash
npm install
```

## 3. Start Development Server
```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---
*© 2026 Amjad Hamidi - MyStore Project. All rights reserved.*