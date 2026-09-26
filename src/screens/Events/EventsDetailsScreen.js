import React, {useEffect} from 'react';
import Details from '../../components/Details';
import {useDispatch, useSelector} from 'react-redux';
import {GetEventsDetailsAction} from '../../redux/actions/GetEventsDetailsAction';
import {images} from '../../assets/images';
import {eventImageURL} from '../../utils/constant';
import moment from 'moment';

const EventsDetailsScreen = ({route}) => {
  const dispatch = useDispatch();
  const eventsState = useSelector(
    state =>
      state?.eventsDetailsReducer?.eventsDetails
        ?.GetAllIDWiseEventDetailsResult,
  );

  const fetchEventDetails = id => dispatch(GetEventsDetailsAction(id));

  useEffect(() => {
    fetchEventDetails(route.params.id);
  }, []);

  return (
    <>
      {eventsState?.map(item => {
        return (
          <Details
            key={item.EventId}
            headerTitle="Event Details"
            source={
              item?.Images?.length > 0
                ? {uri: `${eventImageURL}${item.Images}`}
                : images.dummyDetailImage
            }
            eventTitle={item.EventTitle}
            eventDetails={item.EventDetails}
            EntryDate={moment(item.EntryDate).format('DD/MM/YYYY')}
          />
        );
      })}
    </>
  );
};

export default EventsDetailsScreen;
