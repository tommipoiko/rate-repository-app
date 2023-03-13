import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import Button from './Button';
import FormikTextInput from './FormikTextInput';

import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';

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
  username: '',
  password: '',
  passwordConfirmation: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required').min(1).max(30),
  password: yup.string().required('Password is required').min(5).max(50),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null]).required('Password confirmation is required')
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="username" placeholder="Username" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput
          name="passwordConfirmation"
          placeholder="Password confirmation"
          secureTextEntry
        />
      </View>
      <Button onPress={onSubmit}>Sign up</Button>
    </View>
  );
};

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit}/>
  );
};

export default SignUp;