import { createTableRaw } from "../util/util.js";

export const renderMembers = members => {
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";
  members.forEach((member, index) =>
    tbody.appendChild(createTableRaw(member, index + 1))
  );
};
