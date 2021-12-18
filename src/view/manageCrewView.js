import { createBackEndTableRaw, createFrontEndTableRaw } from "../util/util.js";

export const renderFrontEndMembers = members => {
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";
  members.forEach((member, index) =>
    tbody.appendChild(createFrontEndTableRaw(member, index + 1))
  );
};

export const renderBackEndMembers = members => {
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";
  members.forEach((member, index) =>
    tbody.appendChild(createBackEndTableRaw(member, index + 1))
  );
};
