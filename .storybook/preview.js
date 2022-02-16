import '../src/Styles/globalStyles';
import '../src/index.css';

// import { GlobalStyles } from '../src/Styles/globalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// export const decorators = [
//   (Story) => (
//     <>
//       <GlobalStyles />
//       <Story />
//     </>
//   ),
// ];
