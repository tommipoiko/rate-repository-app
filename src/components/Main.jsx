import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import theme from '../theme';
import RepositoryPage from './RepositoryPage';
import CreateReview from './CreateReview';
import MyReviews from './MyReviews';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/sign-in" element={<SignIn />} exact />
        <Route path="/sign-up" element={<SignUp />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/:id" element={<RepositoryPage exact />} />
        <Route path="/createReview" element={<CreateReview />} exact />
        <Route path="/myReviews" element={<MyReviews />} exact />
      </Routes>
    </View>
  );
};

export default Main;