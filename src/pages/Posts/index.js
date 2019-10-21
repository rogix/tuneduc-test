import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { Container } from './styles';

export default function Posts({ match }) {
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
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
            <span>
              Post Id: {post.id}
              <button type="button">Read</button>
            </span>
          </li>
        ))}
      </ul>
    </Container>
  );
}

Posts.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string,
    }),
  }).isRequired,
};
