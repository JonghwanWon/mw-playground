import * as React from 'react';

import Button from '@src/components/Button';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

storiesOf("Button", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add("Button", () => {
    const message = text("message", "message");
    const type = select("type", ["button", "reset", "submit"], "button");

    return (
      <Button type={type} onClick={action("action")}>
        {message}
      </Button>
    );
  });
