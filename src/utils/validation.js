function isExistProductName(localName, newName) {
  let result = localName.every((name) => {
    if (name === newName) {
      return alert("이미 존재하는 이름입니다.");
    }
    return true;
  });
  return result;
}

export { isExistProductName };
