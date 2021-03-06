import * as storybook from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Smartbox',
  url: 'https://github.com/smartlogic/smartbox/',
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true,
  maxPropsIntoLine: 1
});

const req = require.context('../stories', true, /\.stories\.js$/)
storybook.configure(() => req.keys().forEach((filename) => req(filename)), module);
