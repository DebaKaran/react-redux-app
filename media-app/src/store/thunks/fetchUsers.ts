import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { User } from "../../types/media";

const fetchUsers = createAsyncThunk<User[]>("users/fetch", async () => {
  const response = await axios.get<User[]>("http://localhost:3005/users");
  return response.data;
});

export { fetchUsers };
