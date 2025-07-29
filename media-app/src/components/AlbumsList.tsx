import React from "react";
import type { User } from "../types/media";
import { useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";

interface AlbumsListProps {
  user: User;
}
const AlbumsList: React.FC<AlbumsListProps> = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  let content;
  if (isLoading) {
    content = <Skeleton times={4} />;
  } else if (error) {
    content = <div> Error Loading Albums</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of Photos in the albums
        </ExpandablePanel>
      );
    });
  }

  return (
    <div>
      <div>Albums for {user.name}</div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumsList;
