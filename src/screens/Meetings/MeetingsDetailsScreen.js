import React, {useEffect} from 'react';
import Details from '../../components/Details';
import {useDispatch, useSelector} from 'react-redux';
import {GetMeetingsDetailsAction} from '../../redux/actions/GetMeetingsDetailsAction';
import {meetingsImageURL} from '../../utils/constant';
import {images} from '../../assets/images';

const MeetingsDetailsScreen = ({route}) => {
  const dispatch = useDispatch();
  const meetingsState = useSelector(
    state =>
      state?.meetingsDetailsReducer?.meetingsDetails
        ?.GetAllIDWiseMeetingDetailsResult,
  );
  const fetchMeetingsDetails = id => dispatch(GetMeetingsDetailsAction(id));

  useEffect(() => {
    fetchMeetingsDetails(route.params.id);
  }, []);
  return (
    <>
      {meetingsState?.map((item, index) => {
        return (
          <Details
            key={item.MeetingId}
            headerTitle="Meetings"
            source={
              item?.Image?.length > 0
                ? {uri: `${meetingsImageURL}${item.Image}`}
                : images.dummyDetailImage
            }
            eventTitle={item.MeetingTitle}
            eventDetails={item.MeetingDetails}
          />
        );
      })}
    </>
  );
};

export default MeetingsDetailsScreen;
