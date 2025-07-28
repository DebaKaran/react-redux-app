import { useEffect } from "react";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import { useAppSelector } from "../store/hooks";
import Skeleton from "./Skeleton";
import useThunk from "../hooks/useThunk";
import UserListItem from "./UserListItem";
const UsersList = () => {
  const { data } = useAppSelector((state) => {
    return state.users;
  });

  const [doAddUser, isAddingUser, addUserError] = useThunk(addUser);
  const [doLoadUsers, isUsersLoading, usersLoadingError] = useThunk(fetchUsers);

  useEffect(() => {
    doLoadUsers(undefined);
  }, [doLoadUsers]);

  let content;

  if (isUsersLoading) {
    content = <Skeleton times={5} className="h-6 w-48" />;
  } else if (usersLoadingError) {
    content = <div>Error Fetching data ...</div>;
  } else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
  }

  const handleUserAdd = () => {
    doAddUser(undefined);
  };

  return (
    <div>
      <h1 className="m-2 text-xl">Users</h1>
      <Button onClick={handleUserAdd} loading={isAddingUser}>
        + Add User
      </Button>
      {addUserError && "Error creating user..."}
      {content}
    </div>
  );
};

export default UsersList;
