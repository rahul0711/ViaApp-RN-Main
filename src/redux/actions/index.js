import {createAction} from 'redux-actions';
import * as constant from '../../utils/constant';

export const getAdvertisementRequest = createAction(
  constant.GET_ADVERTISEMENT_REQUEST,
);
export const getAdvertisementSuccess = createAction(
  constant.GET_ADVERTISEMENT_SUCCESS,
);
export const getAdvertisementError = createAction(
  constant.GET_ADVERTISEMENT_ERROR,
);

export const getEventsRequest = createAction(constant.GET_EVENTS_REQUEST);
export const getEventsSuccess = createAction(constant.GET_EVENTS_SUCCESS);
export const getEventsError = createAction(constant.GET_EVENTS_ERROR);

export const getEventsDetailsRequest = createAction(
  constant.GET_EVENTS_DETAILS_REQUEST,
);
export const getEventsDetailsSuccess = createAction(
  constant.GET_EVENTS_DETAILS_SUCCESS,
);
export const getEventsDetailsError = createAction(
  constant.GET_EVENTS_DETAILS_ERROR,
);

export const getNewsRequest = createAction(constant.GET_NEWS_REQUEST);
export const getNewsSuccess = createAction(constant.GET_NEWS_SUCCESS);
export const getNewsError = createAction(constant.GET_NEWS_ERROR);

export const getNewsDetailsRequest = createAction(
  constant.GET_NEWS_DETAILS_REQUEST,
);
export const getNewsDetailsSuccess = createAction(
  constant.GET_NEWS_DETAILS_SUCCESS,
);
export const getNewsDetailsError = createAction(
  constant.GET_NEWS_DETAILS_ERROR,
);
export const getOfficeBearersRequest = createAction(
  constant.GET_OFFICE_BEARERS_REQUEST,
);
export const getOfficeBearersSuccess = createAction(
  constant.GET_OFFICE_BEARERS_SUCCESS,
);
export const getOfficeBearersError = createAction(
  constant.GET_OFFICE_BEARERS_ERROR,
);

export const getElectedMembersRequest = createAction(
  constant.GET_ELECTED_MEMBERS_REQUEST,
);
export const getElectedMembersSuccess = createAction(
  constant.GET_ELECTED_MEMBERS_SUCCESS,
);
export const getElectedMembersError = createAction(
  constant.GET_ELECTED_MEMBERS_ERROR,
);

export const getInviteMembersRequest = createAction(
  constant.GET_INVITE_MEMBERS_REQUEST,
);
export const getInviteMembersSuccess = createAction(
  constant.GET_INVITE_MEMBERS_SUCCESS,
);
export const getInviteMembersError = createAction(
  constant.GET_INVITE_MEMBERS_ERROR,
);

export const getPastPresidentsRequest = createAction(
  constant.GET_PAST_PRESIDENTS_REQUEST,
);
export const getPastPresidentsSuccess = createAction(
  constant.GET_PAST_PRESIDENTS_SUCCESS,
);
export const getPastPresidentsError = createAction(
  constant.GET_PAST_PRESIDENTS_ERROR,
);

export const getAssetsDetailRequest = createAction(
  constant.GET_ASSETS_DETAIL_REQUEST,
);
export const getAssetsDetailSuccess = createAction(
  constant.GET_ASSETS_DETAIL_SUCCESS,
);
export const getAssetsDetailError = createAction(
  constant.GET_ASSETS_DETAIL_ERROR,
);

export const getSportsGamesRequest = createAction(
  constant.GET_SPORTS_GAMES_REQUEST,
);
export const getSportsGamesSuccess = createAction(
  constant.GET_SPORTS_GAMES_SUCCESS,
);
export const getSportsGamesError = createAction(
  constant.GET_SPORTS_GAMES_ERROR,
);

export const getIndustrialRequest = createAction(
  constant.GET_INDUSTRIAL_REQUEST,
);
export const getIndustrialSuccess = createAction(
  constant.GET_INDUSTRIAL_SUCCESS,
);
export const getIndustrialError = createAction(constant.GET_INDUSTRIAL_ERROR);

export const getDepartmentRequest = createAction(
  constant.GET_DEPARTMENT_REQUEST,
);
export const getDepartmentSuccess = createAction(
  constant.GET_DEPARTMENT_SUCCESS,
);
export const getDepartmentError = createAction(constant.GET_DEPARTMENT_ERROR);

export const getGovContactsRequest = createAction(
  constant.GET_GOV_CONTACTS_REQUEST,
);
export const getGovContactsSuccess = createAction(
  constant.GET_GOV_CONTACTS_SUCCESS,
);
export const getGovContactsError = createAction(
  constant.GET_GOV_CONTACTS_ERROR,
);

export const getMeetingsRequest = createAction(constant.GET_MEETINGS_REQUEST);
export const getMeetingsSuccess = createAction(constant.GET_MEETINGS_SUCCESS);
export const getMeetingsError = createAction(constant.GET_MEETINGS_ERROR);

export const getMeetingsDetailsRequest = createAction(
  constant.GET_MEETINGS_DETAILS_REQUEST,
);
export const getMeetingsDetailsSuccess = createAction(
  constant.GET_MEETINGS_DETAILS_SUCCESS,
);
export const getMeetingsDetailsError = createAction(
  constant.GET_MEETINGS_DETAILS_ERROR,
);
export const getEmergencyContactsRequest = createAction(
  constant.GET_EMERGENCY_CONTACTS_REQUEST,
);
export const getEmergencyContactsSuccess = createAction(
  constant.GET_EMERGENCY_CONTACTS_SUCCESS,
);
export const getEmergencyContactsError = createAction(
  constant.GET_EMERGENCY_CONTACTS_ERROR,
);

export const getExpertPanelRequest = createAction(
  constant.GET_EXPERT_PANEL_REQUEST,
);
export const getExpertPanelSuccess = createAction(
  constant.GET_EXPERT_PANEL_SUCCESS,
);
export const getExpertPanelError = createAction(
  constant.GET_EXPERT_PANEL_ERROR,
);

export const getDirectorsOfVgelRequest = createAction(
  constant.GET_DIRECTORS_VGEL_REQUEST,
);
export const getDirectorsOfVgelSuccess = createAction(
  constant.GET_DIRECTORS_VGEL_SUCCESS,
);
export const getDirectorsOfVgelError = createAction(
  constant.GET_DIRECTORS_VGEL_ERROR,
);

export const getMessagesRequest = createAction(constant.GET_MESSAGES_REQUEST);
export const getMessagesSuccess = createAction(constant.GET_MESSAGES_SUCCESS);
export const getMessagesError = createAction(constant.GET_MESSAGES_ERROR);

export const getMessagesDetailsRequest = createAction(
  constant.GET_MESSAGES_DETAILS_REQUEST,
);
export const getMessagesDetailsSuccess = createAction(
  constant.GET_MESSAGES_DETAILS_SUCCESS,
);
export const getMessagesDetailsError = createAction(
  constant.GET_MESSAGES_DETAILS_ERROR,
);

export const getCommitteRequest = createAction(constant.GET_COMMITTE_REQUEST);
export const getCommitteSuccess = createAction(constant.GET_COMMITTE_SUCCESS);
export const getCommitteError = createAction(constant.GET_COMMITTE_ERROR);

export const getCommitteDetailsRequest = createAction(
  constant.GET_COMMITTE_DETAILS_REQUEST,
);
export const getCommitteDetailsSuccess = createAction(
  constant.GET_COMMITTE_DETAILS_SUCCESS,
);
export const getCommitteDetailsError = createAction(
  constant.GET_COMMITTE_DETAILS_ERROR,
);

export const createFeedbackRequest = createAction(
  constant.CREATE_FEEDBACK_REQUEST,
);
export const createFeedbackSuccess = createAction(
  constant.CREATE_FEEDBACK_SUCCESS,
);
export const createFeedbackError = createAction(constant.CREATE_FEEDBACK_ERROR);

export const getDepartmentDetailRequest = createAction(
  constant.GET_DEPARTMENT_DETAIL_REQUEST,
);
export const getDepartmentDetailSuccess = createAction(
  constant.GET_DEPARTMENT_DETAIL_SUCCESS,
);
export const getDepartmentDetailError = createAction(
  constant.GET_DEPARTMENT_DETAIL_ERROR,
);

export const getWelcomeMessageRequest = createAction(
  constant.GET_WELCOME_MESSAGE_REQUEST,
);
export const getWelcomeMessageSuccess = createAction(
  constant.GET_WELCOME_MESSAGE_SUCCESS,
);
export const getWelcomeMessageError = createAction(
  constant.GET_WELCOME_MESSAGE_ERROR,
);
