import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

const stories = storiesOf('Hello', module);

import Hello from '../src/components/Hello';

stories.add('Hello', () => (
  <Hello name="123"/>
));