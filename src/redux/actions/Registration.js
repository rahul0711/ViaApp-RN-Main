import {apiInstance} from '../../httpclient';

export const Registration = async data => {
  try {
    const res = await apiInstance.post('InsertMobileAppRegistration', data);
    return res.data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export const GetOtpAction = async mobileNumber => {
  try {
    const res = await apiInstance.get(
      `GetOTPCode?MobileNumber=${mobileNumber}`,
    );
    return res.data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export const otpVerify = async data => {
  try {
    const res = await apiInstance.post('InsertVerifiedAppUser', data);
    return res.data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};
