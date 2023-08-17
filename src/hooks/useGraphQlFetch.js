import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URI } from '../services/BASE_URI';
import headers from '../services/config/Auth';

const useGraphQlFetch = (query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'POST',
          url: BASE_URI,
          headers: headers,
          data: {
            query: query
          }
        };

        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
};

export default useGraphQlFetch;
