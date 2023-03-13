import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import useMe from '../hooks/useMe';
import theme from '../theme';
import Text from './Text';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollView: {
    flexDirection: 'row',
  },
  tabTouchable: {
    flexGrow: 0,
  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
  },
});

const AppBarTab = ({ children, ...props }) => {
  return (
    <Link style={styles.tabTouchable} {...props}>
      <View style={styles.tabContainer}>
        <Text fontWeight="bold" style={styles.tabText}>
          {children}
        </Text>
      </View>
    </Link>
  );
};

const SignOutButton = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <Pressable onPress={signOut}>
      <View style={styles.tabContainer}>
        <Text fontWeight="bold" style={styles.tabText}>
          Sign out
        </Text>
      </View>
    </Pressable>
  );
};

const AppBar = () => {
  const { me } = useMe();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        { me ? <AppBarTab to="/createReview">Create a review</AppBarTab> : null }
        { me ? <SignOutButton /> : <AppBarTab to="/sign-in">Sign in</AppBarTab> }
        { !me ? <AppBarTab to="/sign-up">Sign up</AppBarTab> : null }
      </ScrollView>
    </View>
  );
};

export default AppBar;