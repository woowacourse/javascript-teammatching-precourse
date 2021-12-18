export const createAttribute = function createAttributeNode(name, value) {
  const attribute = document.createAttribute(name);
  attribute.value = value;
  return attribute;
};

// attrObj: { name1: value1, name2: value2 ... }
const createAttributes = function createAttributeNodesArray(attrObj) {
  return Object.keys(attrObj)
    .filter((attribute) => attrObj[attribute]) // filter attributes without value
    .map((attribute) => {
      return createAttribute(attribute, attrObj[attribute]);
    });
};

const attachAttr = function attachAttributeToElement(element, attrNodes) {
  return attrNodes.reduce((e, attribute) => {
    e.setAttributeNode(attribute); // set each attribute to element
    return e;
  }, element);
};

export const customCreateElement = function createCompleteElement({
  tag,
  className,
  id,
  attributes,
  text,
}) {
  const attributeNodes = attributes ? createAttributes(attributes) : [];
  const element = attachAttr(document.createElement(tag), attributeNodes);
  element.innerText = text || ''; // add text to element if provided
  if (className) element.className = className;
  if (id) element.id = id;

  return element;
};

export const createInput = function createInputElement({
  type,
  placeholder,
  className,
  id,
}) {
  return customCreateElement({
    tag: 'input',
    attributes: { type, placeholder },
    className,
    id,
  });
};

export const createButton = function createButtonElement({
  text,
  className,
  id,
}) {
  return customCreateElement({
    tag: 'button',
    attributes: {
      type: 'button', // prevent form submit
    },
    className,
    id,
    text,
  });
};

export const createTd = function createTdElement({
  className,
  id,
  text,
  attributes,
}) {
  return customCreateElement({
    tag: 'td',
    attributes: {
      ...attributes,
      // height: `${VAL_ROW_SIZE}`,
      // style: STYLE_TABLE_BORDER,
    },
    className,
    id,
    text,
  });
};
