Overview

This ReactJS application interacts with the Fake Store API to fetch and display a list of products. Users can browse products, add them to a shopping cart, and manage their cart items through a modal interface.

Features
The application fetches product data from the Fake Store API and displays it in a responsive layout. Each product showcases key details such as its image, title, and price. Users can add products to the cart using the "Add to Cart" button, and the application prevents duplicate entries by displaying an alert message, "Item already added to the cart", when necessary. The Navbar displays the current count of items in the cart, and clicking the "Cart" button opens a modal that lists all the products currently added to the cart. Within the modal, users can view details of each product and remove items using the "Remove from Cart" button. The cart count and total value update dynamically as products are added or removed, ensuring accurate and real-time updates. The application is designed to provide a clean and user-friendly interface, adhering to responsive design principles for optimal usability across devices.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
