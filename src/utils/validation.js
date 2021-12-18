export default class Validation {
  checkCrewName(name) {
    if (this.checkCrewNameCorrect(name) && this.checkCrewNameLength(name)) {
      return true;
    }
    return false;
  }
  
  checkCrewNameCorrect(name) {
    if (name === undefined || !name.trim()) {
      return false;
    }
    return true;
  }

  checkCrewNameLength(name) {
    if(name.length > 5) {
        return false;
    }
    return true;
  }  

  checkNumber(number, totalNumber) {
    if(this.checkIsNumber(number) && this.checkIsNegative(number) && this.checkIsExceed(number, totalNumber)) {
      return true;
    }
    return false;
  }
  
  checkIsNumber(number) {
   if (Number.isNaN(Number(number)) || !number.trim()) {
     return false;
   }
   return true;
  }

  checkIsNegative(number) {
    if (number < 0) {
      return false;
    }
    return true;
  }

  checkIsExceed(number, totalNumber) {
    if (totalNumber < number) {
      return false;
    }
    return true;
  }
}