import { IBaseTemplate } from './BaseTemplate';

const base: IBaseTemplate = {
  sampleTextProp: 'Hello world!',
};

const alt: IBaseTemplate = {
  sampleTextProp: 'Alt text world!',
};

export const mockBaseTemplateProps = {
  base,
  alt,
};
