import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { PetProvider } from './contexts/PetContext'

function App() {
  useEffect(() => {
    axios.get('http://localhost:3001/pets').then(res => console.log(res.data))
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PetProvider>
          <Header />
          <Router />
        </PetProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App
