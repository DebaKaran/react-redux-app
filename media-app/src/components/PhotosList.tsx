import React from "react";
import type { Album } from "../types/media";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";
import Button from "./Button";

interface PhotosListProps {
  album: Album;
}

const PhotosList: React.FC<PhotosListProps> = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);

  const [addPhoto, results] = useAddPhotoMutation();
  console.log(results);

  let content;
  if (isFetching) {
    content = <Skeleton times={4} className="h-10 w-full" />;
  } else if (error) {
    content = <div> Error Fetching Photos</div>;
  } else if (data) {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos for {album.title}</h3>

        <Button onClick={handleAddPhoto} loading={results.isLoading}>
          + Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
};

export default PhotosList;
