import * as React from 'react';

import { DefaultButton } from '@src/components/Buttons';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

storiesOf("Button", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add("Button", () => {
    const message = text("message", "message");
    const variant = select("variant", ["primary", "secondary"], "primary");

    return (
      <DefaultButton variant={variant} onClick={action("action")}>
        {message}
      </DefaultButton>
    );
  });
