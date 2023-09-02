import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Middle from './Middle.jsx'
import Footer from './footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   { <App></App>}
    <Middle></Middle>
    <Footer></Footer>
  </React.StrictMode>,
)
