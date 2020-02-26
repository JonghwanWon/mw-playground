import { configure, addParameters } from "@storybook/react";

addParameters({
  backgrounds: [
    { name: "twitter", value: "#00aced", default: true },
    { name: "facebook", value: "#3b5998" }
  ]
});

const req = require.context("../src/components", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
