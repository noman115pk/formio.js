import baseEditForm from '../_classes/component/Component.form';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: [
        {
          type: 'textfield',
          label: 'Image Url',
          input: true,
          key: 'imageUrl',
          weight: 20,
        },
        {
          type: 'textfield',
          label: 'Width',
          input: true,
          key: 'width',
          weight: 20
        },
        {
          type: 'textfield',
          label: 'Height',
          input: true,
          key: 'height',
          weight: 20
        },
        {
          type: 'textfield',
          label: 'Default Zoom',
          input: true,
          key: 'defaultZoom',
          placeholder: '100',
          weight: 20
        },
        {
          key: 'placeholder',
          ignore: true
        },
        {
          key: 'tabindex',
          ignore: true
        },
        {
          key: 'autofocus',
          ignore: true
        },
      ]
    },
    {
      key: 'data',
      components: [
        {
          key: 'multiple',
          ignore: true
        },
        {
          key: 'encrypted',
          ignore: true
        },
        {
          key: 'dbIndex',
          ignore: true
        },
        {
          key: 'defaultValue',
          ignore: true
        },
      ]
    },
    {
      key: 'validation',
      components: [
        {
          key: 'unique',
          ignore: true
        },
        {
          key: 'validateOn',
          ignore: true
        },
      ]
    }
  ], ...extend);
}
