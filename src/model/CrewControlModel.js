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

}