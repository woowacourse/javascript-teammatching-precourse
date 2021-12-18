export default class CrewControlModel {
  
  toLocalCrewName(course, crew) {
    course === '프론트엔드'
    ? this.toLocalFrontCrew(crew)
    : this.toLocalBackCrew(crew);
  }

  toLocalFrontCrew(crew) {
    const fromLocalFrontCrew = JSON.parse(localStorage.getItem("FRONT_CREW"));
    fromLocalFrontCrew 
    ? localStorage.setItem("FRONT_CREW", JSON.stringify(fromLocalFrontCrew.concat(crew)))
    : localStorage.setItem("FRONT_CREW", JSON.stringify([crew]));
  }

  toLocalBackCrew(crew) {
    const fromLocalBackCrew = JSON.parse(localStorage.getItem("BACK_CREW"));
    fromLocalBackCrew 
    ? localStorage.setItem("BACK_CREW", JSON.stringify(fromLocalBackCrew.concat(crew)))
    : localStorage.setItem("BACK_CREW", JSON.stringify(crew));
  }

  fromLocalFrontCrew() {
    const fromLocalFrontCrew = JSON.parse(localStorage.getItem("FRONT_CREW"));

    return fromLocalFrontCrew;
  }

  fromLocalBackCrew() {
    const fromLocalBackCrew = JSON.parse(localStorage.getItem("BACK_CREW"));

    return fromLocalBackCrew;
  }

  handleDeleteCrew(course, deleteCrewIndex) {
    let deleteCourse;
    course === '프론트엔드'
    ? deleteCourse = JSON.parse(localStorage.getItem("FRONT_CREW"))
    : deleteCourse = JSON.parse(localStorage.getItem("BACK_CREW"));
    deleteCourse.find((crew, index) => index === deleteCrewIndex - 1 ? deleteCourse.splice(index, 1) : "");
    course === '프론트엔드'
    ? localStorage.setItem("FRONT_CREW", JSON.stringify(deleteCourse))
    : localStorage.setItem("BACK_CREW", JSON.stringify(deleteCourse));
  }

}