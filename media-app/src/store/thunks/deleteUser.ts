import { createAsyncThunk } from "@reduxjs/toolkit";
import { type User } from "../../types/media";
import axios from "axios";

const deleteUser = createAsyncThunk<User, User>(
  "users/remove",
  async (user: User) => {
    console.log("user.id: " + user.id);
    await axios.delete(`http://localhost:3005/users/${user.id}`);
    return user;
  }
);

export { deleteUser };
