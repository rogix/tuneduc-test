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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;

    li {
      position: relative;
      z-index: 0;

      background: #1919a6;
      color: #fff;

      height: 200px;
      padding: 20px;

      border-radius: 5px;

      text-transform: capitalize;
      font: 24px Roboto;

      span {
        position: absolute;
        bottom: 15px;
        left: 20px;
        right: 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border-top: 1px solid #fff;
        padding-top: 5px;
        margin-top: 20px;
        font-size: 12px;

        button {
          border: 0;
          border-radius: 5px;

          padding: 5px 12px;

          background: #0c0059;
          color: #fff;

          font-family: Roboto;
          font-weight: 700;
        }
      }
    }
  }
`;
