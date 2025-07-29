import React from "react";
import { useDeletePhotoMutation } from "../store";
import { GoTrash } from "react-icons/go";
import type { Photo } from "../types/media";
import ExpandablePanel from "./ExpandablePanel";

interface PhotosListItemProps {
  photo: Photo;
}

const PhotosListItem: React.FC<PhotosListItemProps> = ({ photo }) => {
  const [deletePhoto] = useDeletePhotoMutation();

  const handleRemovePhoto = () => {
    deletePhoto(photo);
  };
  const header = (
    <div className="relative m-2 cursor-pointer" onClick={handleRemovePhoto}>
      <img className="h-20 w-20" src={photo.url} alt="Random pics" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrash className="text-3xl" />
      </div>
    </div>
  );

  return (
    <ExpandablePanel
      key={photo.id}
      header={header}
      children={undefined}
    ></ExpandablePanel>
  );
};

export default PhotosListItem;
