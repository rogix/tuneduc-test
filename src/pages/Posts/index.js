import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import { Container } from './styles';

export default function User({ match }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const { userId } = match.params;

    const fetchData = async () => {
      const result = await api.get(`/posts?userId=${userId}`);

      setData(result.data);
    };

    fetchData();
  }, [match.params]);

  return (
    <Container>
      <ul>
        {data.map(post => (
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
