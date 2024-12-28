import "./App.css";
// import { Outlet } from "react-router-dom";

// Import Components
import Header from "./components/Header";
import Hero from "./components/Hero";

// Import Pages
// import Home from "./pages/Home";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        {/* <h2 className="mb-4 text-center">User Profile Manager App</h2> */}
        {/* <Container className="my-2">
          <Outlet />
        </Container> */}
      </div>
    </>
  );
}

export default App;
