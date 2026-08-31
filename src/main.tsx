import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Fira Sans
import '@fontsource/fira-sans/200.css'
import '@fontsource/fira-sans/300.css'
import '@fontsource/fira-sans/400.css'
import '@fontsource/fira-sans/600.css'
import '@fontsource/fira-sans/700.css'

// Azeret Mono
import '@fontsource/azeret-mono/400.css'
import '@fontsource/azeret-mono/500.css'

// Cascadia Code
import '@fontsource/cascadia-code/200.css'
import '@fontsource/cascadia-code/200-italic.css'
import '@fontsource/cascadia-code/400.css'
import '@fontsource/cascadia-code/400-italic.css'
import '@fontsource/cascadia-code/600.css'
import '@fontsource/cascadia-code/600-italic.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
