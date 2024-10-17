import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Getstudentdata from './Components/Getstudentdata.jsx'
import AddStudentdata from './Components/AddStudentdata.jsx'
import './index.css'
import Practise from './Components/Practise.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Getstudentdata />
  <AddStudentdata />
  <Practise />
  </StrictMode>,
)
