export const generateCrewTable = crew =>
  crew
    .map((name, index) => {
      return `
    <tr>
    <td>${index + 1}</td>
    <td>${name}</td>
    <td>
        <button class="delete-crew-buttton" data-crew-name=${name}>삭제</button>
    </td>
    </tr>
    `;
    })
    .join('');
