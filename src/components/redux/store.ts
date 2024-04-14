import { configureStore } from '@reduxjs/toolkit'

// import rootReducer from './reducer'
import usersSlice from "./reducers/users/user"

const store = configureStore({
    reducer: {
        usersList: usersSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

// Store has all of the default middleware added, _plus_ the logger middleware
export default store;
export type AppDispatch = typeof store.dispatch;
