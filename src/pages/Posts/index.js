import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { Container } from './styles';

export default function User({ match }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const { userId } = match.params;

    const fetchData = async () => {
      const result = await api.get(`/posts?userId=${userId}`);

      setPosts(result.data);
    };

    fetchData();
  }, [match.params]);

  return (
    <Container>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </Container>
  );
}

User.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string,
    }),
  }).isRequired,
};
