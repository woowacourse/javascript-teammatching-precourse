const addCrew = (course, name) => {
  const crews = JSON.parse(localStorage.getItem("crews"));

  if (crews) {
    localStorage.setItem("crews", JSON.stringify(`${crews},${course}/${name}`));
  } else {
    localStorage.setItem("crews", JSON.stringify(`${course}/${name}`));
  }
};

const deleteCrew = name => {
  const crews = JSON.parse(localStorage.getItem("crews")).split(",");
  const newCrews = [];

  for (let i = 0; i < crews.length; i++) {
    const info = crews[i].split("/");
    if (name !== info[1]) {
      newCrews.push(crews[i]);
    }
  }

  localStorage.setItem("crews", JSON.stringify(newCrews.join(",")));
};

export { addCrew, deleteCrew };
