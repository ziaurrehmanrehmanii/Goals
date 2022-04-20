import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboad";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
