import { useEffect, useState } from "react";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Skeleton from "./Skeleton";
import type { User } from "../types/media";

const UsersList = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState<null | string>(
    null
  );
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState<null | string>(
    null
  );

  const dispatch = useAppDispatch(); //properly typed dispatch
  const { data } = useAppSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .then(() => {
        console.log("Success");
      })
      .catch((err) => {
        setLoadingUsersError(err);
      })
      .finally(() => setIsLoadingUsers(false));
  }, [dispatch]);

  if (isLoadingUsers) {
    return <Skeleton times={5} className="h-6 w-48" />;
  }

  if (loadingUsersError) {
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
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch((err) => setCreatingUserError(err))
      .finally(() => setIsCreatingUser(true));
  };

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {isCreatingUser ? (
          "Creating User..."
        ) : (
          <Button onClick={handleUserAdd}>+ Add User</Button>
        )}
        {creatingUserError}
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
