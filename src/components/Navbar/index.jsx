import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { Container } from './styles'
import { useStateProvider } from '../../service/StateProvider'

function Navbar({ navBackground }) {
  const [{ userInfo }] = useStateProvider()
  return (
    <Container navBackground={navBackground}>
      <div className="searchBar">
        <FaSearch />
        <input type="text" placeholder="Artists, songs, or podcasts" />
      </div>
      <div className="avatar">
        <a href="#">
          <CgProfile />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </Container>
  )
}

export default Navbar
