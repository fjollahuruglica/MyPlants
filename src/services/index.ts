import {Alert} from 'react-native';
import axios from 'axios';
import {Config} from '../config/Config';

const instance = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
});

interface Error {
  message: string;
  data?: string;
}

export const handleError = ({message, data}: Error) => {
  return Alert.alert(!data ? message : 'Something went wrong!');
};

instance.interceptors.response.use(
  response => response,
  ({message, response: {data}}) => {
    return handleError({message, data});
  },
);

export default instance;
