import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Container } from '@mui/material'
import './index.css'
import App from './App.tsx'
import First from './First.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <Container sx={{alignItems: 'center'} }  >
      <App />
      <First />
    </Container>
  </StrictMode>,
)
