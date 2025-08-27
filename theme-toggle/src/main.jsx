import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Information from './components/Information';
export const context = createContext();
function App() {
  const [toggle,setToggle] = useState(true)
  return (
    <context.Provider value={{toggle,setToggle}}>
    < Information />
    </context.Provider>
)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
