import React from 'react'
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PlantPage from './pages/PlantPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HOME_ROUTE,LOGIN_ROUTE,REGISTER_ROUTE,DASHBOARD_ROUTE,PLANTS_ROUTE} from './utils/routes';

function App() {
  return (
      <div className="App">
        <Router>
        <Navbar/>
          <Routes>
            <Route exact path={HOME_ROUTE} element={<Home />} />
            <Route path={LOGIN_ROUTE} element={<Login/>}/>
            <Route path={REGISTER_ROUTE} element={<Register />} />
            <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
            <Route path={PLANTS_ROUTE} element={<PlantPage />} />
          </Routes>
        </Router>
      
      </div> 
  );
}

export default App;
