import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



// import React from "react";
// import ReactDOM from "react-dom/client";
// // import { BrowserRouter } from "react-router-dom";

// import App from "./App";
// import "./styles/globals.css";

// import { CartProvider } from "./context/CartContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>

//     <BrowserRouter>

//       <CartProvider>
//         <App />
//       </CartProvider>

//     </BrowserRouter>

//   </React.StrictMode>
// );
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

// import App from "./App.jsx";

// import "./styles/global.css";
// import "./styles/components.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
