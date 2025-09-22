import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from '../authStack';
import MyPendingRequest from '../../Screens/MyPendingRequest';
import PendingApproval from '../../Screens/PendingApproval';

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="pendingApproval" component={PendingApproval} />
      <Stack.Screen name="MyPendingRequest" component={MyPendingRequest} />
    </Stack.Navigator>
  );
};

export default HomeStack;
