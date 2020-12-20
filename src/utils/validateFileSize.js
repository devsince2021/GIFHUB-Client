import { MAX_SIZE, EXCEED_MAX_SIZE } from '../constants';

const validateFileSize = file => {
  if (file.size > MAX_SIZE) {
    alert(EXCEED_MAX_SIZE);
    return false;
  }
  return true;
};

export default validateFileSize;
