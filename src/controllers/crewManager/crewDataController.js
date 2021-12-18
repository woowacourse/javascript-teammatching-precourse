const addCrew = (course, name) => {
  const crews = JSON.parse(localStorage.getItem("crews"));

  if (crews) {
    localStorage.setItem("crews", JSON.stringify(`${crews},${course}/${name}`));
  } else {
    localStorage.setItem("crews", JSON.stringify(`${course}/${name}`));
  }
};

export { addCrew };
