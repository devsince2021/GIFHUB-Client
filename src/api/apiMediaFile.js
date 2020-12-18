import axios from 'axios';
import { SERVER_URL, mediaFileRoute } from '../constants/http';

const config = {
  header: { 'content-type': 'multipart/form-data'}
}

export async function uploadMediaFile(mediaFile) {
  try {
    const response = await axios.post(
      `${SERVER_URL}${mediaFileRoute.ROOT}`,
      mediaFile,
      config,
    );

    return response.data;

  } catch (err) {
    throw new Error('Error in uploadMediaFile:', err)
  }
}

export async function createFinalFile(options) {
  try {
    console.log(options, 'api')
    const {
      uploadedFile,
      imageFile,
      duration,
      startTime,
      format,
      imageSizeAndPosition,
    } = options;

    const { top, left, width, height } = imageSizeAndPosition;

    const url = `
      http://localhost:4000/mediaFile/${uploadedFile._id}/finalFile?format=${format}&startTime=${startTime}&duration=${duration}&top=${top}&left=${left}&width=${width}&height=${height}
    `;

    const response = await axios.post(
      url,
      imageFile,
      config,
    );

    return response.data;
  } catch (err) {
    throw new Error('Error in createFinalFile:', err)
  }
}
