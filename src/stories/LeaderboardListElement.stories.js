import LeaderboardListElement from '../Atoms/Leaderboard/LeaderboardListElement';

export default {
  title: 'LeaderboardListElement',
  component: LeaderboardListElement,
};
const Template = (args) => <LeaderboardListElement {...args} />;

export const Leaderboard = Template.bind({});
Leaderboard.args = {
  text: 'test',
};
