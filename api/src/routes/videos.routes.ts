import { Router } from "express";
const router = Router();

import {
  createVideo,
  deleteVideo,
  getVideo,
  getVideos,
  updateVideo,
} from "../controllers/videos.controller";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { CreateVideoSchema } from "../schema/video.schema";

router.get("/videos", getVideos);

router.get("/videos/:id", getVideo);

router.post("/videos", validateSchema(CreateVideoSchema), createVideo);

router.delete("/videos/:id", deleteVideo);

router.put("/videos/:id", updateVideo);

export default router;
