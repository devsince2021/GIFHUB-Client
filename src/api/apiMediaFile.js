import axios from 'axios';

export async function uploadMediaFile(mediaFile) {
  try {
    const response = await axios.post(
      'http://www.localhost:4000/mediaFile',
      mediaFile
    );
    return response.data;
  } catch (err) {
    throw new Error('Error in uploadMediaFile:', err)
  }
}
