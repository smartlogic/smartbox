import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';

import { Snackbar } from '@smartlogic/smartbox';


export default storiesOf('Feedback|Snackbar', module)
  .addDecorator((getStory) => (
    <StoryContainer>{ getStory() }</StoryContainer>
  ))

  .add('Default', withInfo()(() => (
    <Snackbar onDismiss={action('Dismissed')}>Template deleted</Snackbar>
  )))

  .add('Success', withInfo()(() => (
    <Snackbar status='success' onDismiss={action('Dismissed')}>Template deleted</Snackbar>
  )))

  .add('Danger or Error', withInfo()(() => (
    <Snackbar status='danger' onDismiss={action('Dismissed')}>Template deleted</Snackbar>
  )))

  .add('Warning', withInfo()(() => (
    <Snackbar status='warning' onDismiss={action('Dismissed')}>Yer suspended</Snackbar>
  )))

  .add('Large', withInfo()(() => (
    <Snackbar maxWidth={700}>This one is large enough to get into some bacon ipsum dolor amet pork loin tri-tip turkey capicola. Rump doner short ribs biltong burgdoggen meatloaf. Prosciutto pork loin bacon, biltong landjaeger salami ham spare ribs flank cupim porchetta leberkas.</Snackbar>
  )));
