import { ThemeProvider } from 'styled-components';

import { theme } from '@src/theme';
import { configure, addParameters, addDecorator } from '@storybook/react';

addParameters({
  backgrounds: [
    { name: "white", value: "#fff", default: true },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" }
  ]
});

addDecorator(StoryFn => (
  <ThemeProvider theme={theme}>
    <StoryFn />
  </ThemeProvider>
));

const req = require.context("../src/components", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
