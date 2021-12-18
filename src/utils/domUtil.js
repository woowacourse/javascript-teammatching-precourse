/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
import { cellStyle, tableStyle } from './style.js';

const createTableHead = (ths) => {
  return `
  <tr>
    ${ths.map((th) => `<th style='${cellStyle}'> ${th} </th>`).join('')}
  </tr>
  `;
};

export const createCrewListTable = (ths, tableData) => {
  return `
  <table style='${tableStyle}' border='1' id="crew-table">
    <thead>
      ${createTableHead(ths)}
    </thead>
    <tbody>
    ${tableData
      .map(
        (name, index) => `
      <tr>
        <td style='${cellStyle}'>${index + 1}</td>
        <td style='${cellStyle}'>${name}</td>
        <td style='${cellStyle}'>
          <button class="delete-crew-buttton" data-index=${index}>삭제</button>
        </td>
      </tr>
      `
      )
      .join('')}
    </tbody>
  </table>
  `;
};
