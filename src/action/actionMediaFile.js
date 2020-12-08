import { apiMediaFile as api } from '../api';
import { createPromiseThunk } from '../utils';
import { UPLOAD_MEDIA_FILE } from '../constants/actionTypes';

export const upload = createPromiseThunk(UPLOAD_MEDIA_FILE, api.uploadMediaFile);
