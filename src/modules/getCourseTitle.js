import {
  FROINTEND_STORAGE_NAME,
  FRONT_END_TABLE_NAME,
  BACK_END_TABLE_NAME,
} from '../constants/constants.js';

export default function getCourseTitle(courseType) {
  if (courseType === FROINTEND_STORAGE_NAME) {
    return FRONT_END_TABLE_NAME;
  } else {
    return BACK_END_TABLE_NAME;
  }
}
