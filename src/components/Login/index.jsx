import React from 'react'
import { Container } from './style'

const Login = () => {
  const handleClick = () => {
    const clientId = 'fca5f69815ef46cba540f65c0c1b7ae2'
    const redirectUrl = 'http://localhost:3000'
    //const redirectUrl = 'https://spotify-clone-nine-gilt.vercel.app/'
    const apiUrl = 'https://accounts.spotify.com/authorize'
    const scope = [
      'user-read-email',
      'user-read-private',
      'user-modify-playback-state',
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-top-read'
    ]
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      ' '
    )}&response_type=token&show_dialog=true`
  }

  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="spotify"
      />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  )
}

export default Login
