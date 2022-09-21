import React from "react";
import Productissuepage from "pages/Productissuepage";
import Producteventpage from "pages/Producteventpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Producteventpage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/productissuepage" element={<Productissuepage />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
