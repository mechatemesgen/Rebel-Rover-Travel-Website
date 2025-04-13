import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/AboutUs';
import Package from '../pages/Package';
import Blog from '../pages/SingleBlog';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Destination from '../pages/Destination';
import Layout from '../components/Layout/Layout';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/package" element={<Package />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default AppRoutes;
