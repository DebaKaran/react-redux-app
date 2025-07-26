import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { User } from "../../types/media";

const fetchUsers = createAsyncThunk<User[]>("users/fetch", async () => {
  await pause(2000); // ssimulate network delay or loading pause
  const response = await axios.get<User[]>("http://localhost:3005/users");
  return response.data;
});

//DEV only

const pause = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
