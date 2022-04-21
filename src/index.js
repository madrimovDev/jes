import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import UserContextProvider from './Contexts/UserContext'
import TestContextProvider from './Contexts/TestContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <UserContextProvider>
    <TestContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TestContextProvider>
  </UserContextProvider>
)
