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
import LoanHistory from '../../Screens/LoanHistory';
import RateThis from '../../Screens/RateThis';


const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PendingApproval" component={PendingApproval} />
      <Stack.Screen name="MyPendingRequest" component={MyPendingRequest} />
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
      <Stack.Screen name="LoanHistory" component={LoanHistory} />
      <Stack.Screen name="RateThis" component={RateThis} />
    </Stack.Navigator>
  );
};

export default HomeStack;
