import {apiInstance} from '../../httpclient';

export const CreateFeedBack = async InsertFeedBack => {
  try {
    const response = await apiInstance.post('InsertFeedBack', InsertFeedBack);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};
