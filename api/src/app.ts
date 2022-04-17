import express from "express";
import morgan from "morgan";
import cors from "cors";

import videosRoutes from "./routes/videos.routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(videosRoutes);

app.use((req, res, next) => {
  const error: any = new Error("Not found");
  error.status = 404;
  next(error);
}
);

app.use((error: any, req: any, res: any, next: any) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
})

export default app;
