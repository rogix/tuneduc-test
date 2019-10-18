import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 80px;

  h1 {
    padding: 20px 0;
  }
`;

export const List = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    background: gray;
    padding: 20px 8px;
    margin: 8px 0;
    border-radius: 5px;
    cursor: pointer;
  }
`;