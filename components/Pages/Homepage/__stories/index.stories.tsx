import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Calculator } from '../';

export default {
  title: 'Example/Calculator',
  component: Calculator,
} as Meta;

const Template: Story = (args) => <Calculator {...args} />;

export const Default = Template.bind({});
