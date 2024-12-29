import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

// Material Design Bootstrap & Fort Awesome/Font Awesome
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// App Component
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
