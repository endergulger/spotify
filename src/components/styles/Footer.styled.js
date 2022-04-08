import styled from 'styled-components';

export const FooterStyled = styled.div`
  position: absolute;
  height: 10vh;
  width: 100vw;
  background: #282828;
  box-shadow: 0px -1px 0px #000000;
  border-radius: 0px;
  .music {
    padding: 20px;
    display: flex;
    align-items: center;
    .playerfull {
      margin-left: 500px;
      .top-player {
        display: flex;
        justify-content: space-evenly;
      }
      .player {
      }
      .skipback {
        margin-left: 250px;
        margin-top: 10px;
      }
      .skip {
        margin-top: 10px;
      }
    }
  }
`;
