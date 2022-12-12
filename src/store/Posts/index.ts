import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createSlice, current} from '@reduxjs/toolkit';
import api from '../../services';
import {IPost} from '../models';

type PostState = {
  data: IPost[];
  loading: boolean;
  error: string;
};

const INITIAL_STATE: PostState = {
  data: [],
  loading: false,
  error: '',
};

const PostsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: INITIAL_STATE,
    postId: 100,
  },
  reducers: {
    getAllPostsStart(state) {
      state.posts.loading = true;
      state.posts.data = [];
      state.posts.error = '';
    },
    getAllPostsSuccess(state, action) {
      state.posts.loading = false;
      state.posts.data = action.payload;
      state.posts.error = '';
    },
    getAllPostsFail(state, action) {
      state.posts.loading = false;
      state.posts.data = [];
      state.posts.error = action.payload;
    },
    addPostStart(state) {
      state.posts.loading = true;
      state.posts.error = '';
    },
    addPostSuccess(state, action) {
      if (state.posts.data) {
        let posts = [...current(state.posts.data)];
        posts.unshift(action.payload);
        state.posts.data = posts;
      }
      state.postId += 1;
      state.posts.loading = false;
      state.posts.error = '';
    },
    addPostFail(state, action) {
      state.posts.loading = false;
      state.posts.error = action.payload;
    },
    deletePostStart(state) {
      state.posts.loading = true;
      state.posts.error = '';
    },
    deletePostSuccess(state, action) {
      if (state.posts.data) {
        let posts = [...current(state.posts.data)];
        let filteredPosts = posts.filter(a => {
          return a.id != action.payload;
        });
        state.posts.data = filteredPosts;
      }

      state.posts.loading = false;
      state.posts.error = '';
    },
    deletePostFail(state, action) {
      state.posts.loading = false;
      state.posts.error = action.payload;
    },
  },
});

export const getAllPosts = () => async (dispatch: React.Dispatch<any>) => {
  try {
    dispatch(getAllPostsStart());
    const response = await api.get('posts');
    if (response && response.data) {
      dispatch(getAllPostsSuccess(response.data));
    }
  } catch (error: any) {
    dispatch(getAllPostsFail(error.message));
  }
};

export const addPost =
  ({title, body, userId, id}: IPost) =>
  async (dispatch: React.Dispatch<any>) => {
    try {
      dispatch(addPostStart());
      const response = await api.post('posts', {
        title,
        body,
        userId,
        id,
      });
      if (response && response.data) {
        dispatch(
          addPostSuccess({
            title,
            body,
            userId,
            id,
          }),
        );
      }
    } catch (error: any) {
      dispatch(addPostFail(error.message));
    }
  };

export const deletePost =
  (id: number) => async (dispatch: React.Dispatch<any>) => {
    try {
      dispatch(deletePostStart());
      const response = await api.delete(`posts/${id}`);
      if (response && response.data) {
        dispatch(deletePostSuccess(id));
      }
    } catch (error: any) {
      dispatch(deletePostFail(error.message));
    }
  };

const {
  getAllPostsFail,
  getAllPostsStart,
  getAllPostsSuccess,
  addPostStart,
  addPostSuccess,
  addPostFail,
  deletePostStart,
  deletePostSuccess,
  deletePostFail,
} = PostsSlice.actions;
export default PostsSlice.reducer;
