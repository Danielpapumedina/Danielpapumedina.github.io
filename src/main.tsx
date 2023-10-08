import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import AppRouter from './Router/Approuter.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  </React.StrictMode>,
)
