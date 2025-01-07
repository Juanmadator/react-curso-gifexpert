import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp.jsx';

// así aplicamos los estilos de forma global
import './styles.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
)
