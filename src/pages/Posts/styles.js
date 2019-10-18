import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 20px 50px;

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 70px;

    li {
      background: #dadbde;
      margin: 10px;
      width: 300px;
      height: 200px;
      padding: 20px;
      font: 24px Roboto;
    }
  }
`;
