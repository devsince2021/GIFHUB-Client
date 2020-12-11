import axios from 'axios';
import { SERVER_URL, mediaFileRoute } from '../constants/http';

export async function uploadMediaFile(mediaFile) {
  try {
    const config = {
      header: { 'content-type': 'multipart/form-data'}
    }

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
