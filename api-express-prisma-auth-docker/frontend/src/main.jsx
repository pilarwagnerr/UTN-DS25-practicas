import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import UsuarioProvider from './context/UsuarioContext.jsx';
import './App.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UsuarioProvider>
      <App />
    </UsuarioProvider>
  </BrowserRouter>
); 