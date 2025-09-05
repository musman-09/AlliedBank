import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Login from './src/Screens/Login';
import Home from './src/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import MyPendingRequest from './src/Screens/MyPendingRequest';
import PendingApproval from './src/Screens/PendingApproval';
import RecentHrCirculars from './src/Screens/RecentHrCirculars';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          {/* <Login /> */}
          <MyPendingRequest />
          {/* <PendingApproval/> */}
          {/* <RecentHrCirculars/> */}
          {/* <Home /> */}
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
