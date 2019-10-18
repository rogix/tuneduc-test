import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import { Container } from './styles';

export default function User({ match }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const repoName = match.params.userId;

    const fetchData = async () => {
      const result = await api.get(`/posts?userId=${repoName}`);

      setData(result.data);
    };

    fetchData();
  }, [match.params.userId]);

  return (
    <Container>
      <section>
        {data.map(post => (
          <div key={post.id}>{post.id}</div>
        ))}
      </section>
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
