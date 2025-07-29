import React from "react";
import type { User } from "../types/media";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

interface AlbumsListProps {
  user: User;
}
const AlbumsList: React.FC<AlbumsListProps> = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  const [addAlbum, results] = useAddAlbumMutation();
  console.log(results);

  let content;
  if (isLoading) {
    content = <Skeleton times={4} className="h-10 w-full" />;
  } else if (error) {
    content = <div> Error Loading Albums</div>;
  } else if (data) {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />;
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
