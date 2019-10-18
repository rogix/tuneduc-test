import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 80px;
  padding: 0 20px 50px;

  h1 {
    padding: 20px 0;
    text-align: center;
    font-family: Roboto;
    font-weight: 700;
    font-size: 30px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      position: relative;
      background: #dadbde;
      margin: 10px;
      width: 300px;
      height: 200px;
      padding: 20px;
      font: 24px Roboto;
      z-index: 0;

      span {
        position: absolute;
        bottom: 5px;
        display: flex;
        /* align-items: center; */
        margin-top: 20px;
        font-size: 12px;
      }
    }
  }
`;
