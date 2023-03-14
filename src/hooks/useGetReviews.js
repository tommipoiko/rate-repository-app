import { useQuery } from '@apollo/client';
import { MY_REVIEWS } from '../graphql/queries';

const useRepositories = () => {
  const { data, loading, error, refetch } = useQuery(MY_REVIEWS, {fetchPolicy: 'cache-and-network'});

  if (data) {
    return { me: data.me, loading, error, refetch };
  } else {
    return { me: null, loading, error, refetch };
  }
};

export default useRepositories;