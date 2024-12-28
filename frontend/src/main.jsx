import { createRoot } from "react-dom/client";

import "./index.css";

// Material Design Bootstrap & Fort Awesome/Font Awesome
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// App Component
import App from "./App.jsx";

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// // Import Pages
// import Home from "./pages/Home";
// import CreateUser from "./pages/CreateUser";
// import DisplayUser from "./pages/DisplayUser";
// import EditUser from "./pages/EditUser.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index={true} path="/" element={<Home />} />
//       <Route path="/display-user" element={<DisplayUser />} />
//       <Route path="/add-user" element={<CreateUser />} />
//       <Route path="/edit-user" element={<EditUser />} />
//     </Route>
//   )
// );

createRoot(document.getElementById("root")).render(<App />);
