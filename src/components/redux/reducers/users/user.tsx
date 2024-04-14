import { createSlice } from '@reduxjs/toolkit';
import { fetchUserData } from '../../actions/users';
// Import your user list action here

interface UserState {
    value: number;
    users: any[]; // Change the 'never' type to the appropriate type for your user data
    status: string;
    loading: boolean;
}

const initialState: UserState = {
    value: 0,
    users: [], // Provide an appropriate initial value
    status: 'idle',
    loading: false,
};

const usersSlice = createSlice({    
    name: 'user',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.pending, (state) => {
            state.users = [];
            state.loading = true;
        });
        builder.addCase(fetchUserData.rejected, (state, action) => {
            state.users = [];
            state.loading = false;
        });
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
        });
    },
});

export default usersSlice.reducer;
