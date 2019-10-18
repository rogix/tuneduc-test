import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1020px;
  min-height: 100vh;
  margin: 0px auto;
  margin-top: 80px;
  padding: 0 20px 50px;

  h1 {
    padding: 20px 0;
    text-align: center;
    font-family: Roboto;
    font-weight: 700;
    font-size: 30px;
  }
`;

export const List = styled.ul`
  li {
    display: flex;
    justify-content: space-between;

    background: #1919a6;
    padding: 30px 16px;
    margin: 10px 0;
    border-radius: 5px;

    font-family: Roboto;
    font-weight: 700;
    font-size: 20px;
    color: #3e3b3b;

    span {
      display: grid;
      justify-items: end;
      color: #fff;
    }

    button {
      border: 0;
      border-radius: 5px;

      padding: 12px 15px;

      background: #0c0059;
      color: #fff;

      font-family: Roboto;
      font-weight: 700;
      font-size: 20px;
    }

    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
`;
