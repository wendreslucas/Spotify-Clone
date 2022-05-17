import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 15vh;
  position: sticky;
  top: 0;
  transition: 0.3s ease-in-out;
  background-color: ${({ navBackground }) =>
    navBackground ? 'rgba(0,0,0,0.7)' : 'none'};

  .searchBar {
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    input {
      border: none;
      height: 2rem;
      width: 100%;

      &:focus {
        outline: none;
      }
    }
  }

  .avatar {
    background-color: black;
    padding: 0.3rem 0.4rem;
    padding-right: 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      justify-content: center;
      gap: 0.5rem;
      color: #b3b3b3;

      font-weight: bold;

      img {
        border-radius: 1rem;
        padding: 0.2rem;
        width: 2.5rem;
      }

      /* svg {
        font-size: 1.3rem;
        background-color: #282828;
        padding: 0.2rem;
        border-radius: 1rem;
        color: #c7c5c5c5;
      } */
    }
  }
`
