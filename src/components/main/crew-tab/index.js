import Component from '../../../core/Component.js';

export default class CrewTab extends Component {
  template() {
    return `
        <div data-component="product-add-form"></div>
        <br>
        <div data-component="product-table"></div>
      `;
  }

  mounted() {
    const { tabData, addProduct } = this.$props;
    const $form = this.$target.querySelector('[data-component="product-add-form"]');
    const $table = this.$target.querySelector('[data-component="product-table"]');

    new ProductAddForm($form, { addProduct });
    new ProductTable($table, { tabData });
  }
}
