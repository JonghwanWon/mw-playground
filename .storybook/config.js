import { configure, addParameters, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@src/theme";

addParameters({
  backgrounds: [
    { name: "twitter", value: "#00aced", default: true },
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
