import { useState, useEffect } from 'react';
import axios from 'axios';

const useGraphQlFetch = (query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'POST',
          url: 'https://parseapi.back4app.com/graphql',
          headers: {
            "X-Parse-Application-Id": "DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL",
            'X-Parse-Master-Key': '0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9',
            "X-Parse-Client-Key": 'zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V',
            "Content-Type": "application/json"
          },
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
