import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from './Theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    marginHorizontal: 10,
    color: theme.colors.errorColor
  },
  noErrorText: {
    marginTop: 5,
    marginHorizontal: 10,
    color: theme.colors.white
  },
  inputField: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 10,
    alignSelf: 'stretch'
  },
  errorInputField: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.errorColor,
    marginTop: 10,
    marginHorizontal: 10,
    alignSelf: 'stretch'
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={showError ? styles.errorInputField : styles.inputField}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
      {!showError && <Text style={styles.noErrorText}>Username or Password Required HAHAHAA</Text>}
    </>
  );
};

export default FormikTextInput;