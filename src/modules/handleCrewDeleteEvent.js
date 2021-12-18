import updateStorage from '../store/updateStorage.js';

export default function handleCrewDeleteEvent(storageType) {
  const buttonList = document.querySelectorAll('.delete-crew-button');
  buttonList.forEach((item) => {
    item.addEventListener('click', (e) => {
      const parentNode = e.target.parentNode.parentNode;
      updateStorage(parentNode.className, storageType);
    });
  });
}
