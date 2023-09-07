import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'
import './App.css'
import { PortfolioProvider } from './context/PortfolioProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioProvider>
      <RouterProvider router={ router } />
    </PortfolioProvider>
  </React.StrictMode>,
)
