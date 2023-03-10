import { ComponentStory, ComponentMeta } from '@storybook/react';
import Error, { IError } from './Error';
import { mockErrorProps } from './Error.mocks';

export default {
  title: 'components/Error',
  component: Error,
  argTypes: {},
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockErrorProps.base,
} as IError;
