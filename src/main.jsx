import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css';
import './styles/fonts.css';
import App from './App.jsx'
import { ThemesProvider } from "./context/themes.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemesProvider>
      <App />
    </ThemesProvider>
  </StrictMode>,
)
