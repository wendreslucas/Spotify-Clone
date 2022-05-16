import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import Login from './components/Login'
import Home from './pages/Home'
import { reducerCases } from './service/Constants'
import { useStateProvider } from './service/StateProvider'

function App() {
  const [{ token }, dispatch] = useStateProvider()

  useEffect(() => {
    const hash = window.location.hash

    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1]

      dispatch({ type: reducerCases.SET_TOKEN, token })
    }
  }, [token, dispatch])

  return (
    <BrowserRouter>
      <GlobalStyle />
      {token ? <Home /> : <Login />}
    </BrowserRouter>
  )
}

export default App
