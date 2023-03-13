import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import theme from '../theme';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.divider
  },
  picker: {
    height: 100,
    justifyContent: 'center'
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDir, setOrderDir] = useState('DESC');

  const { repositories } = useRepositories({ orderBy: orderBy, orderDirection: orderDir });
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const changePicker = (val) => {
    if (val === 'latest') {
      setOrderBy('CREATED_AT');
      setOrderDir('DESC')
    } else if (val === 'highest') {
      setOrderBy('RATING_AVERAGE');
      setOrderDir('DESC')
    } else if (val === 'lowest') {
      setOrderBy('RATING_AVERAGE');
      setOrderDir('ASC')
    }
  }

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <RepositoryItem repository={item} />}
      ListHeaderComponent={() =>
        <Picker
          style={styles.picker}
          selectedValue={orderBy}
          onValueChange={(itemValue, itemIndex) => changePicker(itemValue) }
        >
          <Picker.Item label="Select filter" value="default" />
          <Picker.Item label="Latest repositories" value="latest" />
          <Picker.Item label="Highest rated repositories" value="highest" />
          <Picker.Item label="Lowest rated repositories" value="lowest" />
        </Picker>
      }
      ItemSeparatorComponent={ItemSeparator}
    />
  )
};

export default RepositoryList;