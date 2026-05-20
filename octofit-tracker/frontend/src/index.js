
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Set the codespace URL for API calls
const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
const protocol = window.location.protocol;
const port = '8000';
const codespaceUrl = codespaceName
  ? `${protocol}//${codespaceName}-${port}.app.github.dev`
  : '';
process.env.REACT_APP_CODESPACE_URL = codespaceUrl;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
