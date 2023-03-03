import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from './Theme';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
    backgroundColor: theme.colors.primary
  },
  text: {
    color: theme.colors.white,
    font: theme.fonts.main,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  }
});

const repositoriesOnPress = () => {
  console.log("Pressed Repositories")
};

const AppBar = () => {
  return (
    <View style={styles.flexContainer}>
      <Pressable onPress={repositoriesOnPress}>
        <Text style={styles.text}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
