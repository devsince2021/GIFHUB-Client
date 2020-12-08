import axios from 'axios';
import { SERVER_URL, mediaFileRoute } from '../constants/http';

export async function uploadMediaFile(mediaFile) {
  try {
    const response = await axios.post(
      `${SERVER_URL}${mediaFileRoute.ROOT}`,
      // 'http://www.localhost:4000/mediaFile'
      mediaFile
    );
    return response.data;
  } catch (err) {
    throw new Error('Error in uploadMediaFile:', err)
  }
}
