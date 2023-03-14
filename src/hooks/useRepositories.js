import { useQuery } from '@apollo/client';
import { ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection, searchKeyword }) => {
  const { data, loading, error, refetch } = useQuery(ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy,
      orderDirection,
      searchKeyword
    }
  });

  if (data) {
    return { repositories: data.repositories, loading, error, refetch };
  } else {
    return { repositories: null, loading, error, refetch };
  }
};

export default useRepositories;