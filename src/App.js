import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router"
import CreateEmployee from "./components/CreateEmployee";


function App() {
  return (
    <div>
      <Router>
          <Header />
          <div className=" container">
            <Routes>
                <Route path="/" element={<EmployeeList />} />
                <Route path= "/employees" element = {<EmployeeList />} />
                <Route path="/add-employee" element={<CreateEmployee />} />
            </Routes>
          </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
