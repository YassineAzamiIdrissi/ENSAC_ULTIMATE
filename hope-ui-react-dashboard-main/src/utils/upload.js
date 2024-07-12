// cloudinary.config({
//     cloud_name: 'dg9qkizkk',
//     api_key: '924827724625761',
//     api_secret: 'HSj_TDnOaOz-YgwPisCPE_bR1ck'
//   });
import axios from "axios";
export const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");
  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dg9qkizkk/image/upload",
      data
    );
    const { url } = res.data;
    return url;
  } catch (err) {
    console.log("ERREUR DANS L'UPLOAD PICTURE DE CLOUDINARY : ");
    console.log(err);
  }
};

export const uploadVideo = async (video) => {
  const data = new FormData();
  data.append("file", video);
  data.append("upload_preset", "fiverr");
  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dg9qkizkk/video/upload",
      data
    );

    const { url } = res.data;
    return url;
    // const result = await cloudinary.upload(video, {resource_type: 'video'});
    // cloudinary.v2.uploader.upload_large("my_large_video.mp4",{ resource_type: "video" },
    //   function (error, result) {
    //     console.log(result, error);
    //   }
    // );
  } catch (error) {
    console.log("CLOUDINARY -VIDEO- ERREUUUUUUUR : ");
    console.log(error);
    // TODO:
  }
};
