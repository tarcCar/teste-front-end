import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@/screens';

const Router: React.FC = (props) => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
