import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ owner, name, rating, review }) => {
    const { data } = await mutate({ 
      variables: {
        review: {
          ownerName: owner,
          repositoryName: name,
          rating: rating,
          text: review
        }
      }
    });
    return { data };
  };

  return [createReview, result];
};

export default useCreateReview;

// EDIT THIS THIS DOESNT WORK NOW