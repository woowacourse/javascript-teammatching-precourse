const hideElement = (selector) => {
  selector.style.display = "none";
};

const showElement = (selector) => {
  selector.style.display = "";
};

export { hideElement, showElement };
