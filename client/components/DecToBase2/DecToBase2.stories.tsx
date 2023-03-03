import { ComponentStory, ComponentMeta } from '@storybook/react';
import DecToBase2, { IDecToBase2 } from './DecToBase2';
import { mockDecToBase2Props } from './DecToBase2.mocks';

export default {
  title: 'templates/DecToBase2',
  component: DecToBase2,

  argTypes: {},
} as ComponentMeta<typeof DecToBase2>;

const Template: ComponentStory<typeof DecToBase2> = (args) => (
  <DecToBase2 {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockDecToBase2Props.base,
} as IDecToBase2;
