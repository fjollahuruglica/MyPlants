import {configureStore} from '@reduxjs/toolkit';
import posts from './Posts';
import auth from './Auth';

const store = configureStore({
  reducer: {
    posts,
    auth,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store};
