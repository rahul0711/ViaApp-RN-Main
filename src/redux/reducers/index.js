import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistCombineReducers} from 'redux-persist';
import {eventsReducer} from './GetEventsReducer';
import {eventsDetailsReducer} from './GetEventsDetailsReducer';
import {newsReducer} from './GetNewsReducer';
import {newsDetailsReducer} from './GetNewsDetailsReducer';
import {officeBearersReducer} from './GetOfficeBearers';
import {electedMembersReducer} from './GetElectedMembers';
import {inviteMembersReducer} from './GetInviteMembers';
import {pastPresidentsReducer} from './GetPastPresidents';
import {assetsDetailReducer} from './GetAssetsDetail';
import {sportsGamesReducer} from './GetSportsGames';
import {industrialReducer} from './GetIndustrail';
import {departmentReducer} from './GetDepartment';
import {govContactsReducer} from './GetGovContacts';
import {meetingsReducer} from './GetMeetingsReducer';
import {meetingsDetailsReducer} from './GetMeetingsDetailsReducer';
import {emergencyContactsReducer} from './GetEmergencyContacts';
import {expertPanelReducer} from './GetExpertPanel';
import {directorsOfVgelReducer} from './GetDirectorsOfVgel';
import {MessagesReducer} from './GetMasseges';
import {MessagesDetailsReducer} from './GetMessagesDetails';
import {committeReducer} from './GetCommitte';
import {committeDetailReducer} from './GetCommitteDetail';
import {createFeedbackReducer} from './CreateFeedback';
import {advertisementDetailsReducer} from './GetAdvertisementDetails';
import {departmentDetailsReducer} from './GetDepartmentDetail';
import {welcomeMessageReducer} from './GetWelcomeMessage';

const config = {
  key: 'primary',
  storage: AsyncStorage,
};

const state = {
  advertisementDetailsReducer,
  eventsReducer,
  eventsDetailsReducer,
  newsReducer,
  newsDetailsReducer,
  officeBearersReducer,
  electedMembersReducer,
  inviteMembersReducer,
  pastPresidentsReducer,
  assetsDetailReducer,
  sportsGamesReducer,
  industrialReducer,
  departmentReducer,
  govContactsReducer,
  meetingsReducer,
  meetingsDetailsReducer,
  emergencyContactsReducer,
  expertPanelReducer,
  directorsOfVgelReducer,
  MessagesReducer,
  MessagesDetailsReducer,
  committeReducer,
  committeDetailReducer,
  createFeedbackReducer,
  departmentDetailsReducer,
  welcomeMessageReducer,
};

export default persistCombineReducers(config, state);
