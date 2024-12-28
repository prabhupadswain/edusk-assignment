import "./App.css";
// import { Outlet } from "react-router-dom";

// React Router DOM
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Import Main Layout
import MainLayout from "./layouts/MainLayout";

// Import Pages
import HomePage from "./pages/HomePage";
import AddUserPage from "./pages/AddUserPage";
import DisplayUsersPage from "./pages/DisplayUsersPage";
import EditUserPage from "./pages/EditUserPage";

// Create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />{" "}
      <Route path="/display-user" element={<DisplayUsersPage />} />
      <Route path="/add-user" element={<AddUserPage />} />
      <Route path="/edit-user" element={<EditUserPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/* <div>
        {/* <Header />
        <Hero /> */}
      {/* <UsersList /> */}
      {/* <h2 className="mb-4 text-center">User Profile Manager App</h2> */}
      {/* <Container className="my-2">
          <Outlet />
        </Container> 
      </div> */}
    </>
  );
}

export default App;
