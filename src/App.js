import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/dashboard/Sidebar";
import Doctors from "./components/pages/Admin/Doctors/Doctors";


function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
       <Route path="/doctor" element={<Doctors />} />
      </Routes>
    </Router>
  );
}
  
export default App;
