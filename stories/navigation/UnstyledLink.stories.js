import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';

import { UnstyledLink } from '@smartlogic/smartbox';

export default storiesOf('Navigation|UnstyledLink', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .add('with an on click action', withInfo()(() => (
    <UnstyledLink onClick={action('Handle Click')}>A link</UnstyledLink>
  )))

  .add('with an external link', withInfo()(() => (
    <UnstyledLink to='https://google.com' external>Google</UnstyledLink>
  )));
