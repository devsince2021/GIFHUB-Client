import axios from 'axios';

export async function requestSaveMediaFile(mediaFile) {
  try {
    const response = await axios.post(
      'http://www.localhost:4000/mediaFile',
      mediaFile
    );
    return response.data;
  } catch (err) {
    throw new Error('Error in requestSaveMediaFile:', err)
  }
}
