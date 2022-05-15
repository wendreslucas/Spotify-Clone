import axios from 'axios'
import React, { useEffect } from 'react'
import { reducerCases } from '../../service/Constants'
import { useStateProvider } from '../../service/StateProvider'
import { Container } from './styles'

function Playlist() {
  const [{ token, playlists }, dispatch] = useStateProvider()

  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        'https://api.spotify.com/v1/me/playlists',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
      const { items } = response.data
      const playlists = items.map(({ id, name }) => {
        return {
          id,
          name
        }
      })

      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists })
    }
    getPlaylistData()
  }, [token, dispatch])

  return (
    <Container>
      <ul>
        {playlists.map(({ id, name }) => {
          return <li key={id}>{name}</li>
        })}
      </ul>
    </Container>
  )
}

export default Playlist
