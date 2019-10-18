import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, List } from './styles';

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
        <List>
          {data.map(user => (
            <li key={user.id}>
              <span>{user.name}</span>
              <Link to={`/user/${user.id}`}>details</Link>
            </li>
          ))}
        </List>
      </section>
    </Container>
  );
}
