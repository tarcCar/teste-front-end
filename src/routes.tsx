import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Map } from '@/screens';

const Router: React.FC = (props) => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/map" element={<Map/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
