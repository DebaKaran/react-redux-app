import { useEffect } from "react";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Skeleton from "./Skeleton";

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
    return <Skeleton times={5} className="h-6 w-48" />;
  }

  if (error) {
    return <div>Error Fetching data ...</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  const handleUserAdd = () => {
    dispath(addUser());
  };

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd}>+ Add User</Button>
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
