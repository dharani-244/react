import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Anime from './Animal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Anime></Anime>
  </StrictMode>
)
