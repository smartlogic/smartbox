# Smartbox
Smartbox is an open source React component library, built for [SmartLogic's UI](https://github.com/SmartLogic/2web2ui).

[![Build Status](https://img.shields.io/travis/SmartLogic/smartbox/master.svg?style=flat-square)](https://travis-ci.org/SmartLogic/smartbox)
[![Coverage Status](https://img.shields.io/coveralls/github/SmartLogic/smartbox/master.svg?style=flat-square)](https://coveralls.io/github/SmartLogic/smartbox?branch=master)

#### Links:
- [Component Demo](https://smartlogic.github.io/smartbox/)
- [Sass Documentation](src/styles/README.md)
- [Unreleased Changes](unreleased.md)

---

## Usage
### 1. Installation

In your React project, use npm to install smartbox:
```bash
npm install @smartlogic/smartbox --save
```

### 2. Include Styles

```scss
 // Import smartbox's styles
 @import '~@smartlogic/smartbox/styles.scss';
 // Optionally include config.scss for sass functions and mixins
 @import '~@smartlogic/smartbox/src/styles/config.scss';
```

### 3. Use the React components
In-depth usage docs coming in the future. For now, reference [storybook](https://smartlogic.github.io/smartbox/).
```js
import React from ‘react’;
import { Panel } from '@smartlogic/smartbox';

const YourComponent = () => (
 <Panel accent title='Hey!'>
  <Panel.Section>
    Section Content
  </Panel.Section>
 </Panel>
);
```

## Storybook Development
[React Storybook](https://github.com/storybooks/storybook) is included for local development.
```bash
# Runs storybook at localhost:9001
npm run start:storybook
```

## Running Tests

### Unit Testing
When running tests for the first time locally:
```bash
npm run pretest
```

After the initial setup, tests can be run at any time via:
```bash
npm run test:unit
```

### End to End Testing
End to end tests can be run locally, either in headless mode or with a GUI.

First, run storybook with a local server:
```bash
npm run start:storybook
```

Then, either run Cypress in headless mode:
```bash
npm run test:e2e:headless
```

Or, run Cypress with the GUI
```bash
npm run test:e2e:gui
```

## Publishing
```bash
# First merge your PR into master
# Move into the package you want to publish
cd packages/smartbox

# Bump version number
npm version x.x.x

# Commit the release
git add .
git commit -m "Publish @smartlogic/smartbox x.x.x"
git push

# Run the build and publish to NPM with your 2fa code
npm run build
npm publish --otp=xxxxxx
```
