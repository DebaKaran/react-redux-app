import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import type { Album } from "../types/media";
import { GoTrash } from "react-icons/go";
import { useDeleteAlbumMutation } from "../store";
import Button from "./Button";
import PhotosList from "./PhotosList";

interface AlbumsListItemProps {
  album: Album;
}

const AlbumsListItem: React.FC<AlbumsListItemProps> = ({ album }) => {
  const [deleteAlbum, results] = useDeleteAlbumMutation();

  const handleRemoveAlbum = () => {
    deleteAlbum(album);
  };
  const header = (
    <>
      <Button
        className="mr-2"
        onClick={handleRemoveAlbum}
        loading={results.isLoading}
      >
        <GoTrash />
      </Button>

      {album.title}
    </>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
