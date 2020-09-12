import { Router } from "express";
const router = Router();

import * as videosCtrl from "./videos.controller";

router.get("/videos", videosCtrl.getVideos);

router.get("/videos/:id", videosCtrl.getVideo);

router.post("/videos", videosCtrl.createVideo);

router.delete("/videos/:id", videosCtrl.deleteVideo);

router.put("/videos/:id", videosCtrl.updateVideo);

export default router;
