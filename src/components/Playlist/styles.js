import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  overflow: hidden;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 52vh;
    max-height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    li {
      display: flex;
      font-size: 14px;
      gap: 1rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        color: white;
      }
    }
  }
`
