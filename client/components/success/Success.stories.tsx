import { ComponentStory, ComponentMeta } from '@storybook/react';
import Success, { ISuccess } from './Success';
import { mockSuccessProps } from './Success.mocks';

export default {
  title: 'components/Success',
  component: Success,
  argTypes: {},
} as ComponentMeta<typeof Success>;

const Template: ComponentStory<typeof Success> = (args) => (
  <Success {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSuccessProps.base,
} as ISuccess;
