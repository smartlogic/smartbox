import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryContainer from './storyHelpers/StoryContainer';

export default storiesOf('Welcome', module)
  .addDecorator((getStory) => (
    <StoryContainer bg='white'>{ getStory() }</StoryContainer>
  ))
  .add('to Smartbox', () => (
    <div>
      <h1>Welcome to Smartbox</h1>
      <p>
        This is a component dev environment for the <a href='http://github.com/SmartLogic/2web2ui/' target='_blank'>SmartLogic React WebUI</a>.
      </p>
    </div>
  ));
