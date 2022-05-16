import React from 'react'

import { Container } from './styles'
import CurrentTrack from './../CurrentTrack/index'
import PlayerControls from '../PlayerControls'

function Footer() {
  return (
    <Container>
      <CurrentTrack />
      <PlayerControls />
    </Container>
  )
}

export default Footer
