import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Button from './Button';
import { useNavigate } from 'react-router-native';
import useCreateReview from '../hooks/useCreateReview';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  fieldContainer: {
    marginBottom: 15,
  },
});

const initialValues = {
  owner: '',
  name: '',
  rating: '',
  review: ''
};

const validationSchema = yup.object().shape({
  owner: yup.string().required('Repository owner name is required'),
  name: yup.string().required('Repository name is required'),
  rating: yup.number().required('Rating is required').min(0, 'Minimum is 0').max(100, 'Maximum is 100'),
  review: yup.string().nullable().notRequired()
});

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="owner" placeholder="Repository owner name" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="name" placeholder="Repository name" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="rating" placeholder="Rating between 0-100" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="review" placeholder="Review" />
      </View>
      <Button onPress={onSubmit}>Create a review</Button>
    </View>
  );
};

const CreateReview = () => {
  const navigate = useNavigate();
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    const { owner, name, rating, review } = values;

    try {
      const ret = await createReview({ owner, name, rating: Number(rating), review });
      const parts = ret.data.createReview.id.split('.');
      const id = `${parts[1]}.${parts[2]}`;
      navigate(`/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default CreateReview;