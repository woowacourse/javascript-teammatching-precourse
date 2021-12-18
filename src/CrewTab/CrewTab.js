import Course from '../Models/Course.js';
import { customCreateElement } from '../utils/createElements.js';
import { getChildDom } from '../utils/handleDOM.js';
import {
  CLASS_NAME_SPAN,
  COURSE_LIST,
  ID_ADD_CREW_BUTTON,
  ID_CONTAINER,
  ID_FORM_SECTION,
  ID_TABLE_BODY,
  ID_TABLE_SECTION,
  TEMPLATE_BASE,
  TEMPLATE_FORM,
  TEMPLATE_TABLE,
  TEMPLATE_TABLE_ROW,
} from './constants.js';
import { addCrew, removeCrew } from './eventHandler.js';

const CrewTab = () => {
  const Container = customCreateElement({ tag: 'section', id: ID_CONTAINER });
  Container.innerHTML = TEMPLATE_BASE;

  // functions
  const addFormNames = function addNamesToFromTemplate(container, name) {
    const nameSpans = container.querySelectorAll(`.${CLASS_NAME_SPAN}`);
    const stringName = COURSE_LIST[name];
    nameSpans.forEach((span) => (span.innerText = stringName));
  };

  const renderTableRows = function renderAllTableRows(course, name) {
    return course.crewList.map((crew, i) => {
      const row = document.createElement('tr');
      row.innerHTML = TEMPLATE_TABLE_ROW;
      getChildDom(row, '.crew-index').innerText = i + 1;
      getChildDom(row, '.crew-name').innerText = crew;
      getChildDom(row, '#delete-crew-buttton').addEventListener('click', (e) =>
        removeCrew(e, course, renderTable, name)
      );
      return row;
    });
  };

  const renderTable = function renderTableTemplate(
    formContainer,
    name,
    course
  ) {
    const TableContainer = getChildDom(formContainer, `#${ID_TABLE_SECTION}`);
    TableContainer.innerHTML = TEMPLATE_TABLE;
    const TableBody = getChildDom(TableContainer, `#${ID_TABLE_BODY}`);
    TableBody.append(...renderTableRows(course, name));
    addFormNames(formContainer, name);
  };

  const renderForm = function renderFormTemplate(name) {
    const FormSection = getChildDom(Container, `#${ID_FORM_SECTION}`);
    const course = new Course(name);
    FormSection.dataset.courseName = name;
    FormSection.innerHTML = '';
    FormSection.innerHTML += TEMPLATE_FORM;
    renderTable(FormSection, name, course);
    addFormNames(FormSection, name);

    const addButton = getChildDom(FormSection, `#${ID_ADD_CREW_BUTTON}`);
    addButton.addEventListener('click', () =>
      addCrew(course, FormSection, name, renderTable)
    );
  };

  // event listeners
  const RadioButtons = Container.querySelectorAll('input');
  RadioButtons.forEach((button) =>
    button.addEventListener('click', (e) => renderForm(e.target.value))
  );

  return Container;
};

export default CrewTab;
