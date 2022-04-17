import { Response, Request, NextFunction } from "express";
import Video from "../models/video.model";
import { CreateVideoType } from "../schema/video.schema";

export const createVideo = async (
  req: Request<unknown, unknown, CreateVideoType>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, video } = req.body;

    // search an existing video with the same title
    const videoFound = await Video.findOne({ title });

    // if a video with the same title is found
    if (videoFound)
      return res.status(400).json({ message: "Video already exists" });

    // create a new video
    const newVideo = new Video({ title, description });

    // create an slug from title
    newVideo.slug = newVideo.title.toLowerCase().replace(/\s/g, "-");

    const savedVideo = await newVideo.save();

    res.json(savedVideo);
  } catch (error) {
    next(error);
  }
};

export const getVideos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const videos = await Video.find();
    return res.json(videos);
  } catch (error) {
    next(error);
  }
};

export const getVideo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const videoFound = await Video.findById(req.params.id);
    if (!videoFound) return res.status(204).json();
    return res.json(videoFound);
  } catch (error) {
    next(error);
  }
};

export const deleteVideo = async (req: Request, res: Response) => {
  const videoFound = await Video.findByIdAndDelete(req.params.id);

  if (!videoFound) return res.status(204).json();

  return res.status(204).json();
};

export const updateVideo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!videoUpdated) return res.status(204).json();
  return res.json(videoUpdated);
};
