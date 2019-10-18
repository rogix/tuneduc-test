import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, List } from './styles';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('/users');

      setUsers(result.data);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <section>
        <h1>Users</h1>
        <List>
          {users.map(user => (
            <li key={user.id}>
              <span>{user.name}</span>
              <Link to={`/posts/${user.id}`}>View Posts</Link>
            </li>
          ))}
        </List>
      </section>
    </Container>
  );
}
