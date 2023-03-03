import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from './Theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight / 2,
    backgroundColor: theme.colors.primary,
    justifyContent: 'space-evenly'
  },
  text: {
    color: theme.colors.white,
    font: theme.fonts.main,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    paddingBottom: 10,
    paddingHorizontal: 15
  }
});

const AppBar = () => {
  return (
    <View style={styles.flexContainer}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to="/SignIn">
          <Text style={styles.text}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
