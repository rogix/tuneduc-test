import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container } from './styles';

export default function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('/users');

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <section>
        <h1>Author</h1>
        <ul>
          {data.map(user => (
            <li key={user.id}>
              <span>{user.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
