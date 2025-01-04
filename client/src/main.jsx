import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  
  <GoogleOAuthProvider clientId='311424798443-f0mbc3kp9hkgqcsecttujdgcrbqbr86k.apps.googleusercontent.com'>
    
    <App />

  </GoogleOAuthProvider>
)
