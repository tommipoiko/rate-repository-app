import { Text, View, StyleSheet } from "react-native";
import theme from '../Theme';

const styles = StyleSheet.create({
  containerCol: {
    display: 'flex',
    flexDirection: "column"
  },
  textHeader: {
    fontWeight: theme.fontWeights.bold,
    marginTop: 5,
    marginLeft: 15,
    font: theme.fonts.main,
    fontSize: theme.fontSizes.normal
  },
  textBody: {
    fontWeight: theme.fontWeights.normal,
    marginTop: 10,
    marginLeft: 15,
    font: theme.fonts.main,
    fontSize: theme.fontSizes.normal
  },
  textLanguage: {
    fontWeight: theme.fontWeights.normal,
    marginTop: 10,
    marginLeft: 15,
    padding: 5,
    font: theme.fonts.main,
    fontSize: theme.fontSizes.normal,
    backgroundColor: theme.colors.languageTag,
    color: theme.colors.white,
    alignSelf: 'flex-start',
    borderRadius: 10,
    overflow: 'hidden'
  }
});

const RepositoryBody = ({repo}) => {
  return (
    <View style={styles.containerCol}>
      <Text style={styles.textHeader}>{repo.fullName}</Text>
      <Text style={styles.textBody}>{repo.description}</Text>
      <Text style={styles.textLanguage}>{repo.language}</Text>
    </View>
  )
}

export default RepositoryBody;