import Input from '../_classes/input/Input';
import Choices from 'choices.js/public/assets/scripts/choices.js';
import _ from 'lodash';

export default class TagsComponent extends Input {
  static schema(...extend) {
    return Input.schema({
      type: 'tags',
      label: 'Tags',
      key: 'tags',
      delimeter: ',',
      storeas: 'string',
      maxTags: 0
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Tags',
      icon: 'tags',
      group: 'advanced',
      documentation: 'http://help.form.io/userguide/#tags',
      weight: 30,
      schema: TagsComponent.schema()
    };
  }

  init() {
    super.init();
  }

  get emptyValue() {
    return '';
  }

  get defaultSchema() {
    return TagsComponent.schema();
  }

  get inputInfo() {
    const info = super.inputInfo;
    info.type = 'input';
    info.attr.type = 'text';
    info.changeEvent = 'change';
    return info;
  }

  get delimiter() {
    return this.component.delimeter || ',';
  }

  attachElement(element, index) {
    super.attachElement(element, index);
    if (!element) {
      return;
    }
    element.setAttribute('dir', this.i18next.dir());
    this.choices = new Choices(element, {
      delimiter: this.delimiter,
      editItems: true,
      maxItemCount: this.component.maxTags,
      removeItemButton: true,
      duplicateItemsAllowed: false,
    });
    this.choices.itemList.element.tabIndex = element.tabIndex;
  }

  detach() {
    super.detach();
    if (this.choices) {
      this.choices.destroyed = true;
      this.choices.destroy();
      this.choices = null;
    }
  }

  setValue(value) {
    if (this.component.storeas === 'string' && (typeof value === 'string')) {
      value = value.split(this.delimiter);
    }
    if (value && !_.isArray(value)) {
      value = [value];
    }
    const changed = super.setValue(value);
    if (this.choices) {
      this.choices.removeActiveItems();
      if (value) {
        this.choices.setValue(value);
      }
    }
    return changed;
  }

  getValue() {
    if (this.choices) {
      const value = this.choices.getValue(true);
      return (this.component.storeas === 'string') ? value.join(this.delimiter) : value;
    }
    return this.dataValue;
  }

  set disabled(disabled) {
    super.disabled = disabled;
    if (!this.choices) {
      return;
    }
    if (disabled) {
      this.choices.disable();
    }
    else {
      this.choices.enable();
    }
  }

  get disabled() {
    return super.disabled;
  }
}
