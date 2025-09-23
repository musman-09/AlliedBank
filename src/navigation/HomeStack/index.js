import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from '../authStack';
import MyPendingRequest from '../../Screens/MyPendingRequest';
import PendingApproval from '../../Screens/PendingApproval';
import Home from '../../Screens/Home';
import EmployeeDetails from '../../Screens/EmployeeDetails';
import RecentHrCirculars from '../../Screens/RecentHrCirculars';
import PaySlip from '../../Screens/PaySlip';
import UsefulLinks from '../../Screens/UsefulLinks';
import TaxCertificate from '../../Screens/TaxCertificate';
import PerformanceManagement from '../../Screens/PerformanceManagement';
import ClaimStatus from '../../Screens/ClaimStatus';
import LeaveManagement from '../../Screens/LeaveManagement';
import AttendanceStatus from '../../Screens/AttendanceStatus';

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="pendingApproval" component={PendingApproval} />
      <Stack.Screen name="MyPendingRequest" component={MyPendingRequest} />
      <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
      <Stack.Screen name="RecentHrCirculars" component={RecentHrCirculars} />
      <Stack.Screen name="PaySlip" component={PaySlip} />
      <Stack.Screen name="AttendanceStatus" component={AttendanceStatus} />
      <Stack.Screen name="UsefulLinks" component={UsefulLinks} />
      <Stack.Screen name="ClaimStatus" component={ClaimStatus} />
      <Stack.Screen
        name="PerformanceManagement"
        component={PerformanceManagement}
      />
      <Stack.Screen name="LeaveManagement" component={LeaveManagement} />
      <Stack.Screen name="TaxCertificate" component={TaxCertificate} />
    </Stack.Navigator>
  );
};

export default HomeStack;
