import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers, type AppDispatch } from "../store";

const UsersList = () => {
  const dispath = useDispatch<AppDispatch>();

  useEffect(() => {
    dispath(fetchUsers());
  }, [dispath]);
  return <div>Users List</div>;
};

export default UsersList;
