import { View, Image, StyleSheet, FlatList } from 'react-native';
import Button from './Button';
import theme from '../theme';
import Text from './Text';
import formatInThousands from '../utils/formatInThousands';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import * as Linking from 'expo-linking';
import format from 'date-fns/format'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatarContainer: {
    flexGrow: 0,
    marginRight: 20,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  nameText: {
    marginBottom: 5,
  },
  descriptionText: {
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: theme.roundness,
  },
  countItem: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  countItemCount: {
    marginBottom: 5,
  },
  languageContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  languageText: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundness,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  linkButton: {
    marginTop: 15
  },
  separator: {
    height: 10,
    backgroundColor: theme.colors.divider
  },
  reviewColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: theme.colors.primary,
    width: 30,
    height: 30
  },
  reviewRow: {
    flexDirection: 'row'
  },
  reviewInfoColumn: {
    flexDirection: 'column',
    paddingHorizontal: 15
  },
  scoreText: {
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.primary
  },
  usernameText: {
    fontWeight: theme.fontWeights.bold,
    font: theme.fonts.main,
    paddingBottom: 5
  },
  dateText: {
    fontWeight: theme.fontWeights.normal,
    font: theme.fonts.main,
    paddingBottom: 5
  }
});

const CountItem = ({ label, count }) => {
  return (
    <View style={styles.countItem}>
      <Text style={styles.countItemCount} fontWeight="bold">
        {formatInThousands(count)}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

const RepositoryInfo = ({ repository }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
    url
  } = repository;

  const onPress = () => {
    Linking.openURL(url);
  }

  return (
    <View>
      <View testID="repositoryInfo" style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
          </View>
          <View style={styles.contentContainer}>
            <Text
              style={styles.nameText}
              fontWeight="bold"
              fontSize="subheading"
              numberOfLines={1}
            >
              {fullName}
            </Text>
            <Text style={styles.descriptionText} color="textSecondary">
              {description}
            </Text>
            {language ? (
              <View style={styles.languageContainer}>
                <Text style={styles.languageText}>{language}</Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <CountItem count={stargazersCount} label="Stars" />
          <CountItem count={forksCount} label="Forks" />
          <CountItem count={reviewCount} label="Reviews" />
          <CountItem count={ratingAverage} label="Rating" />
        </View>
        <View>
          <Button style={styles.linkButton} onPress={onPress} >
            Open in GitHub
          </Button>
        </View>
      </View>
      <ItemSeparator />
    </View>
  );
}

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review }) => {
  const readableDate = format(new Date(review.createdAt), 'dd.MM.yyyy');

  return (
    <View style={styles.container}>
      <View style={styles.reviewRow}>
        <View style={styles.reviewColumn}>
          <Text style={styles.scoreText}>
            {review.rating}
          </Text>
        </View>
        <View style={styles.reviewInfoColumn}>
          <Text style={styles.usernameText}>
            {review.user.username}
          </Text>
          <Text style={styles.dateText}>
            {readableDate}
          </Text>
          <Text style={styles.descriptionText}>
            {review.text}
          </Text>
        </View>
      </View>
    </View>
  )
}

const RepositoryPage = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  if ( !repository ) {
    return <View><Text>Loading...</Text></View>
  }

  const {
    reviews
  } = repository;

  const reviewList = reviews.edges.map(r => r.node);

  return (
    <View>
      <FlatList
        data={reviewList}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        ItemSeparatorComponent={ItemSeparator} />
    </View>
  );
};

export default RepositoryPage;