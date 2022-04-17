import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

class VideoURL {
  @prop({ type: String })
  url: string;

  @prop({ type: String })
  public_id: string;
}

@modelOptions({
  schemaOptions: {
    versionKey: false,
    timestamps: true,
  },
})
class Video {
  @prop({ type: String, required: true, trim: true })
  title: string;

  @prop({ type: String, required: true, unique: true })
  slug: string;

  @prop({ type: String, trim: true })
  description: string;

  @prop({ type: () => VideoURL })
  url: VideoURL;
}

const VideoModel = getModelForClass(Video);
export default VideoModel;
