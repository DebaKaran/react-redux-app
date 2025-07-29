import React from "react";
import type { User } from "../types/media";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

interface AlbumsListProps {
  user: User;
}
const AlbumsList: React.FC<AlbumsListProps> = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  const [addAlbum, results] = useAddAlbumMutation();
  console.log(results);

  let content;
  if (isLoading) {
    content = <Skeleton times={4} />;
  } else if (error) {
    content = <div> Error Loading Albums</div>;
  } else if (data) {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of Photos in the albums
        </ExpandablePanel>
      );
    });
  }

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>

        <Button onClick={handleAddAlbum} loading={results.isLoading}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumsList;
