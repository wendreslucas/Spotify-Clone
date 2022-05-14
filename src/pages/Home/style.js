import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  background-color: #0d0c0c;
  display: grid;
  grid-template-rows: 85vh 15vh;

  .spotifyBody {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background-color: #0d0c0c;
  }

  .body {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .bodyContent {
  }

  .spotifyFooter {
  }
`
