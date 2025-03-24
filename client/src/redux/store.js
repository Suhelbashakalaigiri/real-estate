import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReduder from './user/userSlice.js';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({user: userReduder});

const persistConfig ={
  key:'root',
  storage,
  Version: 1,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
    serializableCheck: false,
  })  
})
export const persistor = persistStore(store);