import axios from 'axios'
import React, { useEffect } from 'react'
import '../../App.css'
import Body from '../../components/Body'
import Footer from '../../components/Footer'
import LeftMenu from '../../components/LeftMenu'
import Navbar from '../../components/Navbar'
import { reducerCases } from '../../service/Constants'
import { useStateProvider } from '../../service/StateProvider'
import { Container } from './style'

const Home = () => {
  const [{ token }, dispatch] = useStateProvider()

  useEffect(() => {
    document.title = 'Spotify Clone | Home'
  }, [])

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      const userInfo = {
        userId: data.id,
        userName: data.display_name
      }

      dispatch({ type: reducerCases.SET_USER, userInfo })
    }
    getUserInfo()
  }, [dispatch, token])

  return (
    <Container>
      <div className="spotifyBody">
        <LeftMenu />
        <div className="body">
          <Navbar />
          <div className="bodyContent">
            <Body />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Container>
  )
}

export default Home
