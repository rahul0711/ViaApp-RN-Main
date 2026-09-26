import Axios from 'axios';
import {handleApiError, handleRequest, handleResponse} from './clintHelper';

export function axiosClient(baseURL) {
  const clientInstance = Axios.create({
    baseURL,
  });

  clientInstance.interceptors.request.use(handleRequest);
  clientInstance.interceptors.response.use(handleResponse, handleApiError);

  return clientInstance;
}
