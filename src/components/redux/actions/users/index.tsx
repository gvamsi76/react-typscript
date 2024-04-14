import { createAsyncThunk } from '@reduxjs/toolkit'


const usersList = async (url: string) => {
    const response = await fetch(url);
    return response.json();
  };
  
  // Create an async thunk action
  export const fetchUserData = createAsyncThunk('user/usersList', async () => {
    const response = await usersList(`https://jsonplaceholder.typicode.com/users`);
    return response;
  });
  
// type UsersListAction = ReturnType<typeof usersList.fulfilled>;