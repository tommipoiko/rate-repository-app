import { Text, View, StyleSheet } from "react-native";
import theme from '../Theme';

const styles = StyleSheet.create({
  containerRow: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-evenly'
  },
  containerCol: {
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center'
  },
  textHeader: {
    fontWeight: theme.fontWeights.bold,
    marginTop: 10,
    font: theme.fonts.main,
    fontSize: theme.fontSizes.normal
  }
});

const transformThousands = (value) => {
  if (value >= 1000) {
    return `${Math.round(value / 1000 * 10) / 10} K`;
  } else {
    return value;
  }
}

const RepositoryFooter = ({repo}) => {
  const stars = transformThousands(repo.stargazersCount)
  const forks = transformThousands(repo.forksCount)
  const reviews = transformThousands(repo.reviewCount)
  const ratings = transformThousands(repo.ratingAverage)

  return (
    <View style={styles.containerRow}>
      <View style={styles.containerCol}>
        <Text style={styles.textHeader}>{stars}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.containerCol}>
        <Text style={styles.textHeader}>{forks}</Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.containerCol}>
        <Text style={styles.textHeader}>{reviews}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.containerCol}>
        <Text style={styles.textHeader}>{ratings}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  )
}

export default RepositoryFooter;