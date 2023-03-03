import { View, StyleSheet, Image } from 'react-native';
import theme from '../Theme';
import RepositoryBody from './RepositoryBody';
import RepositoryFooter from './RepositoryFooter';

const styles = StyleSheet.create({
  container: {
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: theme.colors.white
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 5
  }
});

const RepositoryItem = ({repo}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Image style={styles.tinyLogo} source={{uri: repo.ownerAvatarUrl}}/>
        <RepositoryBody repo={repo} />
      </View>
      <RepositoryFooter repo={repo} />
    </View>
  )
}

export default RepositoryItem;