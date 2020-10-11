import React, { useEffect, useState } from "react";
import * as videoService from "./videoService";

import { Video } from "./Video";
import VideoItem from "./VideoItem";

const VideoList = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<Video[]>([]);

  const loadVideos = async () => {
    const res = await videoService.getVideos();

    const formatedVideos = res.data
      .map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setVideos(formatedVideos);
    setLoading(false);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  if (loading)
    return (
      <div className="row">
        <div className="col-md-12 my-auto">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );

  if (videos.length === 0) return <div>there are no videos yet</div>;

  return (
    <div className="row">
      {videos.map((video) => (
        <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
      ))}
    </div>
  );
};

export default VideoList;
