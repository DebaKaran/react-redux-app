import { useEffect } from "react";
import { fetchUsers } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const UsersList = () => {
  const dispath = useAppDispatch(); //properly typed dispatch
  const { isLoading, data, error } = useAppSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispath(fetchUsers());
  }, [dispath]);
  console.log("Loading:", isLoading, "Error:", error, "Data:", data);

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  if (error) {
    return <div>Error Fetching data ...</div>;
  }
  return <div>{data.length}</div>;
};

export default UsersList;
