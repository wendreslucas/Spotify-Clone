import React from 'react'

import { Container } from './styles'
import CurrentTrack from './../CurrentTrack/index'
import PlayerControls from '../PlayerControls'
import Volume from '../Volume'

function Footer() {
  return (
    <Container>
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </Container>
  )
}

export default Footer
