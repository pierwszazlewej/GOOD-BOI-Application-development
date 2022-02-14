import MainButton from '../Atoms/MainButton/MainButton';

export default {
  title: 'Main Button',
  component: MainButton,
};
// export const primary = () => <MainButton primary text="aloha" />;

const Template = (args) => <MainButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: 'aloha',
  secondary: false,
  ternary: false,
};
