import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer, {
  userReducerInititalState,
} from 'store/reducers/userReducer';
import adminReducer from 'store/reducers/adminReducer';
import publicReducer from 'store/reducers/publicReducer';
import cartReducer from 'store/reducers/cartReducer';

export const initialState = {
  user: userReducerInititalState,
};

const userReducerConfig = {
  key: 'userReducer',
  storage,
};

const adminReducerConfig = {
  key: 'adminReducer',
  storage,
};

export default combineReducers({
  user: persistReducer(userReducerConfig, userReducer),
  admin: adminReducer,
  public: publicReducer,
  cart: cartReducer,
});
