import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './global/styles';

import { AppRoutes } from './routes/app.routes';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <AppRoutes />
  </BrowserRouter>
);

export default App;
