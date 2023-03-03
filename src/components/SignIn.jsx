import { View, Pressable, Text, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { Formik } from 'formik';
import theme from './Theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  submitButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.languageTag,
    marginTop: 10,
    marginHorizontal: 10,
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  submitText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const initialValues = {
  username: '',
  password: ''
};

const SignInForm = ({onSubmit}) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.submitText}>Sign In</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  const onSubmit = values => {
    const username = values.username
    const password = values.password
    console.log(`Username: ${username} - Password: ${password}`)
  }

  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
};

export default SignIn;
