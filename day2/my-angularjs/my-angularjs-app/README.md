# My AngularJS App

This is a simple AngularJS application that displays a list of products. The application is structured to separate concerns and enhance maintainability.

## Project Structure

```
my-angularjs-app
├── app
│   ├── components
│   │   └── getProductList
│   │       ├── getProductList.html
│   │       ├── getProductList.controller.js
│   │       └── getProductList.service.js
│   ├── app.module.js
│   ├── app.config.js
│   └── app.routes.js
├── assets
│   ├── images
│   │   └── background.jpg
│   └── styles
│       └── styles.css
├── index.html
└── README.md
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```
   cd my-angularjs-app
   ```

3. **Install dependencies**:
   Ensure you have Node.js and npm installed, then run:
   ```
   npm install
   ```

4. **Run the application**:
   You can use a local server to serve the `index.html` file. For example, you can use the `http-server` package:
   ```
   npx http-server
   ```

5. **Open your browser**:
   Navigate to `http://localhost:8080` (or the port specified by your server) to view the application.

## Usage Guidelines

- The application fetches product data and displays it in a list format.
- You can modify the product list by updating the data source in `getProductList.service.js`.
- Customize styles in `assets/styles/styles.css` to change the appearance of the application.

## License

This project is licensed under the MIT License. See the LICENSE file for details.