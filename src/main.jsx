import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'reset-css'
import '@/assets/global.scss'
import '@/utils/setHtmlFontSize'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
