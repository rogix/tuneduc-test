import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import avatar from '../../assets/images/avatar-woman.png';

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
          {users.map((user) => (
            <li key={user.id}>
              <img src={avatar} alt="avatar" />
              <span>
                <span>{user.name}</span>
                <Link to={`/posts/${user.id}`}>
                  <button type="button">View Posts</button>
                </Link>
              </span>
            </li>
          ))}
        </List>
      </section>
    </Container>
  );
}
