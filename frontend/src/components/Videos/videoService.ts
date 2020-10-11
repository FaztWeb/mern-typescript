import axios from "axios";
import { Video } from "./Video";

const API = process.env.REACT_APP_API;

export const getVideos = async () => {
  return await axios.get<Video[]>(`${API}/videos`);
};

export const getVideoById = async (id: string) => {
  return await axios.get<Video>(`${API}/videos/${id}`);
};

export const createNewVideo = async (video: Video) => {
  return await axios.post(`${API}/videos`, video);
};

export const deleteVideoById = async (id: string) => {
  return await axios.delete(`${API}/videos/${id}`);
};

export const updateVideo = async (id: string, video: Video) => {
  return await axios.put(`${API}/videos/${id}`, video);
};
