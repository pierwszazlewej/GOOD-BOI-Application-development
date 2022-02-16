import '../src/Styles/globalStyles';
import '../src/index.css';

// import { GlobalStyles } from '../src/Styles/globalStyles';
import { ThemeProvider } from 'styled-components';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme="default">
      <Story />
    </ThemeProvider>
  ),
];
