import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/Screens/Login';
import Home from './src/Screens/Home';

function App() {
  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
