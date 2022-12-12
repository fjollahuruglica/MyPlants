import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {MOCK_PASSWORD, MOCK_USERNAME} from '../../navigators/RootContainer';
import IUser from '../models/auth';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
  },
  reducers: {
    checkAuthSuccess(state, action) {
      state.email = action.payload;
    },
  },
});

export const login =
  ({username, password}: IUser) =>
  async (dispatch: React.Dispatch<any>) => {
    try {
      if (username === MOCK_USERNAME && password === MOCK_PASSWORD) {
        AsyncStorage.setItem('username', username);
        AsyncStorage.setItem('password', password);
        // If the username and password match the mock data, simulate a successful login
        // You can redirect the user to the home screen or display a success message here
      } else {
        console.log('Incorrect username or password.');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
export const logout = () => async (dispatch: React.Dispatch<any>) => {
  try {
    await AsyncStorage.clear();
  } catch (error) {}
};

export const checkAuth = () => async (dispatch: React.Dispatch<any>) => {
  try {
    const email = await AsyncStorage.getItem('username');
    if (email) {
      dispatch(checkAuthSuccess(email));
    }
  } catch (error) {}
};

const {checkAuthSuccess} = AuthSlice.actions;
export default AuthSlice.reducer;
