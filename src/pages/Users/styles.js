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
    background: #dadbde;
    padding: 30px 16px;
    margin: 10px 0;
    border-radius: 5px;
    color: #3e3b3b;
    font-family: Roboto;
    font-weight: 700;
    font-size: 20px;

    span {
      display: flex;
      align-items: center;
    }

    a {
      color: #fff;
      padding: 8px 15px;
      background: rgba(45, 45, 178, 0.53);
      text-decoration: none;
      border-radius: 5px;
    }

    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
`;
