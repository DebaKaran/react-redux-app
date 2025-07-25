import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { type User } from "../../types/media";

const addUser = createAsyncThunk<User, void>("users/add", async () => {
  const response = await axios.post<User>("http://localhost:3005/users", {
    name: faker.name.fullName(),
  });
  return response.data;
});

export { addUser };
