import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from './Components/Style/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Components/Provider/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme} >
          <App />
        </ThemeProvider>
      </AuthProvider>    
    </BrowserRouter> 
  </React.StrictMode>
);