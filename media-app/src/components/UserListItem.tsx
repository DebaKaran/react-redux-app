import React from "react";
import type { User } from "../types/media";
import useThunk from "../hooks/useThunk";
import { deleteUser } from "../store";
import Button from "./Button";
import { GoTrash } from "react-icons/go";

interface UserListItemProps {
  user: User;
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  const [doRemoverUser, isLoading, error] = useThunk(deleteUser);

  const handleClick = () => {
    doRemoverUser(user.id);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <Button loading={isLoading} onClick={handleClick}>
          <GoTrash />
        </Button>
        {error && <div>Error deleting user</div>}
        {user.name}
      </div>
    </div>
  );
};

export default UserListItem;
