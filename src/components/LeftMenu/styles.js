import styled from 'styled-components'

export const Container = styled.div`
  color: #b3b3b3;
  width: 100%;
  height: 100%;
  background: rgba(34, 34, 34, 0.6);

  padding: 25px 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  .topLinks {
    display: flex;
    flex-direction: column;
  }

  .logo {
    text-align: center;
    margin: 1rem 0;

    img {
      max-inline-size: 80%;
      block-size: auto;
    }
  }

  .logoContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f1f1f1;
  }

  .logoContainer .logo {
    display: flex;
    align-items: center;
  }

  .logoContainer .logo i {
    font-size: 30px;
  }

  .logoContainer .logo h2 {
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    li {
      display: flex;
      gap: 1rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        color: white;
      }
    }
  }

  .trackList {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .trackList .top {
    display: flex;
    align-items: center;
  }

  .trackList .top img {
    width: 50px !important;
  }

  .trackList .top p {
    margin-left: 15px;
    color: #f1f1f1;
    font-size: 14px;
  }

  .trackList .top p span {
    display: block;
    font-size: 12px;
    color: #848484;
  }

  .trackList .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    color: #848484;
  }

  .trackList .bottom i {
    font-size: 18px;
  }

  .trackList .bottom i:hover {
    color: #f1f1f1;
    transition: 0.3s;
    cursor: pointer;
  }

  .trackList .bottom input {
    position: relative;
    height: 5px;
    border: none;
    outline: none;
    appearance: none;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
  }

  /* chrome and safari browser */
  .trackList .bottom input::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    background: #49e12e;
    width: 50%;
    height: 100%;
    border-radius: 10px;
    z-index: 2;
    transition: width 250ms linear;
  }

  .trackList .bottom input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 20px;
    border-radius: 10px;
    border: 2px solid #000;
    cursor: pointer;
    position: relative;
    margin: -2px 0 0 0;
    z-index: 3;
    box-sizing: border-box;
    transition: all 250ms linear;
    background: #f1f1f1;
  }

  @media screen and (max-width: 550px) {
    .leftMenu {
      min-width: 64px;
      width: 64px;
    }

    .leftMenu .searchBox {
      display: none;
    }

    .leftMenu .trackList {
      display: none;
    }

    .leftMenu .playListContainer {
      display: none;
    }

    .leftMenu .menuContainer ul li a span {
      display: none;
    }

    .leftMenu .menuContainer ul li a i {
      font-size: 24px;
    }

    .leftMenu .menuContainer ul li {
      margin: 25px 0;
    }
  }
`
