import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FounderDeskScreen from '../screens/FounderDesk/FounderDeskScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import EventsScreen from '../screens/Events/EventsScreen';
import EventsDetailsScreen from '../screens/Events/EventsDetailsScreen';
import NewsScreen from '../screens/News/NewsScreen';
import NewsDetailsScreen from '../screens/News/NewsDetailsScreen';
import MeetingsScreen from '../screens/Meetings/MeetingsScreen';
import MeetingsDetailsScreen from '../screens/Meetings/MeetingsDetailsScreen';
import OfficeBearers from '../screens/OfficeBearers/OfficeBearers';
import DrawerNavigator from './DrowerNavigator';
import CommitteeScreen from '../screens/Committee/CommitteeScreen';
import AmbulanceService from '../screens/AmbulanceService/AmbulanceServiceScreen';
import EmergencyContact from '../screens/EmargencyContacts/EmargencyContactsScreen';
import ExpertPanel from '../screens/ExpertPanel/ExpertPanelScreen';
import DirectorVGEL from '../screens/DirectorsOfVGEL/DirectorsOfVGELScreen';
import AssetsDetail from '../screens/AssetsDetail/AssetsDetailScreen';
import SportsAndGamesScreen from '../screens/SportsAndGames/SportsAndGamesScreen';
import Feedback from '../screens/Feedback/FeedbackScreen';
import ContactUs from '../screens/ContactUs/ContactUsScreen';
import ImpGovOfficers from '../screens/ImpGovOfficers/ImpGovOfficersScreen';
import DepartmentScreen from '../screens/Department/DepartmentScreen';
import ImportantContactsScreen from '../screens/ImportantContacts/ImportantContactsScreen';
import VgelDashboardScreen from '../screens/VgelDashboard/VgelDashboardScreen';
import ElectedMembers from '../screens/ElectedMembers/ElectedMembersScreen';
import PastPresidentScreen from '../screens/PastPresidents/PastPresidentScreen';
import InviteMembers from '../screens/InviteeMembers/InviteeMemberScreen';
import CenterOfExcellenceScreen from '../screens/CenterOfExcellence/CenterOfExcellenceScreen';
import CetpScreen from '../screens/CETP/CetpScreen';
import {NavigationContainer} from '@react-navigation/native';
import Registration from '../screens/Registration/RegistrationScreen';
import Messages from '../screens/Messages/MessagesScreen';
import MessageDetail from '../screens/MessageDetails/MessageDetailScreen';
import CommitteeDetailsScreen from '../screens/Committee/CommiteeDetailsScreen';
import {AuthScreen} from '../screens/Auth/AuthScreen';
import DepartmentDetails from '../screens/Department/DepartmentDetails';
import SurroundingIndustrial from '../screens/SurroundingIndustrial/SurroundingIndustrialScreen';
import Onbording from '../screens/Onbording/OnbordingScreen';
import OtpScreen from '../screens/Otp/OtpScreen';
import COEDashboardScreen from '../screens/COEDashboard/COEDashboardScreenDashboardScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <GestureHandlerRootView>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="Onbording" component={Onbording} />
        <Stack.Screen name="FounderDesk" component={FounderDeskScreen} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="event" component={EventsScreen} />
        <Stack.Screen name="eventDetails" component={EventsDetailsScreen} />
        <Stack.Screen name="news" component={NewsScreen} />
        <Stack.Screen name="newsDetails" component={NewsDetailsScreen} />
        <Stack.Screen name="meeting" component={MeetingsScreen} />
        <Stack.Screen name="meetingDetails" component={MeetingsDetailsScreen} />
        <Stack.Screen name="officeBearers" component={OfficeBearers} />
        <Stack.Screen name="AmbulanceService" component={AmbulanceService} />
        <Stack.Screen name="EmergencyContact" component={EmergencyContact} />
        <Stack.Screen name="ExpertPanel" component={ExpertPanel} />
        <Stack.Screen name="DirectorVGEL" component={DirectorVGEL} />
        <Stack.Screen name="Committee" component={CommitteeScreen} />
        <Stack.Screen
          name="CommitteeDetails"
          component={CommitteeDetailsScreen}
        />
        <Stack.Screen name="Department" component={DepartmentScreen} />
        <Stack.Screen
          name="SurroundingIndustrial"
          component={SurroundingIndustrial}
        />
        <Stack.Screen name="AssetsDetail" component={AssetsDetail} />
        <Stack.Screen name="SportsAndGames" component={SportsAndGamesScreen} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="ImpGovOfficers" component={ImpGovOfficers} />
        <Stack.Screen
          name="ImportantContact"
          component={ImportantContactsScreen}
        />
        <Stack.Screen name="VgelDashboard" component={VgelDashboardScreen} />
        <Stack.Screen name="CeoDashboard" component={COEDashboardScreen} />
        <Stack.Screen name="ElectedMembers" component={ElectedMembers} />
        <Stack.Screen name="PastPresident" component={PastPresidentScreen} />
        <Stack.Screen name="InviteMembers" component={InviteMembers} />
        <Stack.Screen name="COE" component={CenterOfExcellenceScreen} />
        <Stack.Screen name="CETP" component={CetpScreen} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="MessageDetail" component={MessageDetail} />
        <Stack.Screen name="DepartmentDetails" component={DepartmentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default StackNavigator;
