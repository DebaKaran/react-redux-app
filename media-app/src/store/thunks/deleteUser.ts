import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk<number, number>(
  "users/remove",
  async (userId: number) => {
    await axios.delete(`http://localhost:3005/users/${userId}`);
    return userId;
  }
);

export { deleteUser };
