//home,login,register imports
import { React, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/invoices";
import PlantDetailsPage from "./pages/PlantDetailsPage";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  DASHBOARD_ROUTE,
  TEAM_ROUTE,
  CONTACT_ROUTE,
  INVOICE_ROUTE,
  FORM_ROUTE,
  BAR_ROUTE,
  PIE_ROUTE,
  LINE_ROUTE,
  FAQ_ROUTE,
  CALENDAR_ROUTE,
  GEO_ROUTE,
  PLANT_DETAILS_ROUTE,
} from "./utils/routes";

//Dashboard imports
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Team from "./pages/team/index";
import Contacts from "./pages/contacts";
import Bar from "./pages/bar";
import Form from "./pages/form";
import Line from "./pages/line";
import Pie from "./pages/pie";
import FAQ from "./pages/faq";
import Geography from "./pages/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./pages/calendar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={HOME_ROUTE} element={<Home />} />
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={REGISTER_ROUTE} element={<Register />} />
        </Routes>

        <div className="dashbord_routes">
          <Routes>
            <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
            <Route path={TEAM_ROUTE} element={<Team />} />
            <Route path={CONTACT_ROUTE} element={<Contacts />} />
            <Route path={INVOICE_ROUTE} element={<Invoices />} />
            <Route path={PLANT_DETAILS_ROUTE} element={<PlantDetailsPage />} />

            <Route path={FORM_ROUTE} element={<Form />} />
            <Route path={BAR_ROUTE} element={<Bar />} />
            <Route path={PIE_ROUTE} element={<Pie />} />
            <Route path={LINE_ROUTE} element={<Line />} />
            <Route path={FAQ_ROUTE} element={<FAQ />} />
            <Route path={CALENDAR_ROUTE} element={<Calendar />} />
            <Route path={GEO_ROUTE} element={<Geography />} />
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;
