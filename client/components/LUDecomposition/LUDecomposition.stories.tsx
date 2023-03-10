import { ComponentStory, ComponentMeta } from '@storybook/react';
import LUDecomposition, { ILUDecomposition } from './LUDecomposition';
import { mockLUDecompositionProps } from './LUDecomposition.mocks';

export default {
  title: 'templates/LUDecomposition',
  component: LUDecomposition,

  argTypes: {},
} as ComponentMeta<typeof LUDecomposition>;

const Template: ComponentStory<typeof LUDecomposition> = (args) => (
  <LUDecomposition {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockLUDecompositionProps.base,
} as ILUDecomposition;
