import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
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
  const bodyRef = useRef()
  const [navBackground, setNavBackground] = useState(false)
  const [headerBackground, setHeaderBackground] = useState(false)

  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false)

    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false)
  }

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
        userName: data.display_name,
        userImage: data.images[0].url
      }
      console.log(data)
      dispatch({ type: reducerCases.SET_USER, userInfo })
    }
    getUserInfo()
  }, [dispatch, token])

  return (
    <Container>
      <div className="spotifyBody">
        <LeftMenu />
        <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
          <Navbar navBackground={navBackground} />
          <div className="bodyContent">
            <Body headerBackground={headerBackground} />
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
