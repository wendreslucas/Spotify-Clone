import React, { useEffect } from 'react'
import '../../App.css'
import { Container } from './style'
import LeftMenu from '../../components/LeftMenu'
import Navbar from '../../components/Navbar'
import Body from '../../components/Body'
import Footer from '../../components/Footer'

const Home = () => {
  useEffect(() => {
    document.title = 'Supliu Tecnologia | Home'
  }, [])

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
