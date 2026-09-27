import { UploadApiResponse } from "cloudinary";
import streamifier from "streamifier";
import cloudinary from "../config/cloudinary";

const uploadToCloudinary = async (
  buffer: Buffer
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "new-aps-products",
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }

        resolve((result as UploadApiResponse).secure_url);
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

export default uploadToCloudinary;