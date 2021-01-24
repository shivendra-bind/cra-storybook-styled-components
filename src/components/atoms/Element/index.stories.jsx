import Element from '.';

const ElementStory = {
  title: 'Design System/Atoms/Element',
  component: Element,
};

export default ElementStory;

// displayText required for story only
const Template = (args) => (
  <Element {...args}>
    {args.displayText}
  </Element>
);

export const Default = Template.bind({});

Default.args = {
  bg: 'oldLavender',
  p: 2,
  color: 'white',
  displayText: 'This is base element for the design system and can be used as different HTML elements',
};

export const Button = Template.bind({});

Button.args = {
  ...Default.args,
  as: 'button',
  displayText: 'Button',
  borderRadius: '0.5em',
  width: '200px',
  fontSize: 2,
};

Button.storyName = 'Element as Button';

export const Styles = () => (
  <Element fontSize={0} m={1} p={1} bg="melon">
    Example: How to style a paragraph
  </Element>
);
