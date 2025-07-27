import { useEffect } from "react";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import { useAppSelector } from "../store/hooks";
import Skeleton from "./Skeleton";
import useThunk from "../hooks/useThunk";
const UsersList = () => {
  const { data } = useAppSelector((state) => {
    return state.users;
  });

  const [doAddUser, isAddingUser, addUserError] = useThunk(addUser);
  const [doLoadUsers, isUsersLoading, usersLoadingError] = useThunk(fetchUsers);

  useEffect(() => {
    doLoadUsers(undefined);
  }, [doLoadUsers]);

  if (isUsersLoading) {
    return <Skeleton times={5} className="h-6 w-48" />;
  }

  if (usersLoadingError) {
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
    doAddUser(undefined);
  };

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {isAddingUser ? (
          "Creating User..."
        ) : (
          <Button onClick={handleUserAdd}>+ Add User</Button>
        )}
        {addUserError}
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
