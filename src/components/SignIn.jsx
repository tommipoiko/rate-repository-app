import { View, Pressable, Text, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { Formik } from 'formik';
import theme from './Theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
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
  },
  inputField: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 10,
    alignSelf: 'stretch'
  }
});

const initialValues = {
  username: '',
  password: ''
};

const SignInForm = ({onSubmit}) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.inputField} name="username" placeholder="Username" />
      <FormikTextInput style={styles.inputField} name="password" placeholder="Password" />
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
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
};

export default SignIn;
