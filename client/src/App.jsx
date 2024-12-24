import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

// Import Components
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";

// Import Pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <h2 className="mb-4 text-center">User Profile Manager App</h2>
        <Container className="my-2">
          <Outlet />
        </Container>
      </div>
    </>
  );
}

export default App;
