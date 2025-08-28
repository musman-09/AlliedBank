import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/Screens/Login';

function App() {
  return <Login />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
