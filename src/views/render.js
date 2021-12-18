import { header, crewManageComponent, teamGenerateComponent } from "./view.js";

export function initialRedering() {
    header();
    crewManageComponent();
    teamGenerateComponent();
}