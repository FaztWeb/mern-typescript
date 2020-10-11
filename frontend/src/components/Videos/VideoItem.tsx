import React from "react";
import ReactPlayer from "react-player";
import {useHistory} from 'react-router-dom'

import * as videoService from "./videoService";
import { Video } from "./Video";

import "./VideoItem.css";

interface Props {
  video: Video;
  loadVideos: () => void;
}

const VideoItem = (props: Props) => {
  const { video, loadVideos } = props;

  const history = useHistory();

  const handleDelete = async (id: string) => {
    await videoService.deleteVideoById(id);
    loadVideos();
  };

  return (
    <div className="col-md-4 p-2">
      <div
        className="card card-body video-card animate__animated animate__backInUp"
        style={{ cursor: "pointer" }}
        onClick={() => history.push(`/update/${video._id}`)}
      >
        <div className="d-flex justify-content-between">
          <h5>{video.title}</h5>
          <span
            className="text-danger"
            onClick={() => video._id && handleDelete(video._id)}
          >
            X
          </span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
