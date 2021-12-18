export const htmlToElement = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
};

export const $ = (selector) => {
  const collection = document.querySelectorAll(selector);
  if (collection.length === 0) {
    return null;
  }
  if (collection.length === 1) {
    return collection[0];
  }
  return collection;
};

export const getTrimedInputValues = ($inputs) => {
  return $inputs.map(($input) => $input.value.trim());
};

export const clearInputs = ($inputs) => {
  $inputs.forEach(($input) => {
    $input.value = '';
  });
};
