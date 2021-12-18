import { CONFIRM_MSG } from '../constants/constants.js';

export default function showConfirm() {
  if (confirm(CONFIRM_MSG)) {
    return true;
  }
  return false;
}
