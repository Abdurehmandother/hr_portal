import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./components/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
