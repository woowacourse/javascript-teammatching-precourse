import { customCreateElement } from '../utils/createElements.js';
import { getChildDom } from '../utils/handleDOM.js';
import {
  CLASS_NAME_SPAN,
  ID_CONTAINER,
  ID_FORM_SECTION,
  TEMPLATE_BASE,
  TEMPLATE_FORM,
  TEMPLATE_TABLE,
} from './constants.js';
import { handlerCourseSelect } from './eventHandler.js';

const CrewTab = () => {
  const Container = customCreateElement({ tag: 'section', id: ID_CONTAINER });
  Container.innerHTML = TEMPLATE_BASE;

  // functions
  const addFormNames = function addNamesToFromTemplate(container, name) {
    const nameSpans = container.querySelectorAll(`.${CLASS_NAME_SPAN}`);

    nameSpans.forEach((span) => (span.innerText = name));
  };

  const renderForm = function renderFormTemplate(name) {
    const FormSection = getChildDom(Container, `#${ID_FORM_SECTION}`);
    FormSection.innerHTML = '';
    FormSection.innerHTML += TEMPLATE_FORM + TEMPLATE_TABLE;
    addFormNames(FormSection, name);
  };

  const RadioButtons = Container.querySelectorAll('input');
  RadioButtons.forEach((button) =>
    button.addEventListener('click', (e) => handlerCourseSelect(e, renderForm))
  );

  return Container;
};

export default CrewTab;
