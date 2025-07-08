import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { Route, createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Certificates from './components/Certificates.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import SeeCertificate from './components/SeeCertificate.jsx'
import NotFound from './components/NotFound.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/certificates/:id" element={<SeeCertificate />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
