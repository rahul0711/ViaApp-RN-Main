import React, {useEffect} from 'react';
import Details from '../../components/Details';
import {useDispatch, useSelector} from 'react-redux';
import {GetNewsDetailsAction} from '../../redux/actions/GetNewsDetailsAction';
import {images} from '../../assets/images';
import {newsImageURL} from '../../utils/constant';
import moment from 'moment';

const NewsDetailsScreen = ({route}) => {
  const dispatch = useDispatch();
  const newsState = useSelector(
    state =>
      state?.newsDetailsReducer?.newsDetails?.GetAllIDWiseNewsDetailsResult,
  );

  const fetchNewsDetails = id => dispatch(GetNewsDetailsAction(id));

  useEffect(() => {
    fetchNewsDetails(route.params.id);
  }, []);

  return (
    <>
      {newsState?.map(item => {
        return (
          <Details
            key={item.NewsId}
            headerTitle="News Details"
            source={
              item?.Images?.length > 0
                ? {uri: `${newsImageURL}${item.Images}`}
                : images.dummyDetailImage
            }
            eventTitle={item.NewsTitle}
            eventDetails={item.NewsDetails}
            EntryDate={moment(item.EntryDate).format('DD/MM/YYYY')}
          />
        );
      })}
    </>
  );
};

export default NewsDetailsScreen;
