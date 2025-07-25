import { useEffect } from "react";
import { fetchUsers } from "../store";
import { useAppDispatch } from "../store/hooks";

const UsersList = () => {
  const dispath = useAppDispatch(); //properly typed dispatch
  useEffect(() => {
    dispath(fetchUsers());
  }, [dispath]);
  return <div>Users List</div>;
};

export default UsersList;
