import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ( repositoryId ) => {
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { repositoryId }
  });

  if (data) {
    return { repository: data.repository, loading, error, refetch };
  } else {
    return { repository: null, loading, error, refetch };
  }
};

export default useRepository;