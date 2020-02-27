import capitalize from 'lodash/capitalize';
import * as React from 'react';
import styled from 'styled-components';

import { BaseButton, DefaultButton } from '@src/components/Buttons';
import { variantTypes } from '@src/components/Buttons/theme/variantStyles';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { text, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

const Card = styled.div`
  margin-bottom: 24px;
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(26, 54, 126, 0.125);
  box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03),
    0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03),
    0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05),
    0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
`;

const CardBody = styled.div`
  & > ${BaseButton} {
    margin: 0 12px 12px 0;
  }
`;

const CardTitle = styled.h5`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;

storiesOf("Button", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add("Button", () => {
    const message = text("message", "message");
    const variant = select("variant", ["primary", "secondary"], "primary");

    return (
      <>
        <DefaultButton variant={variant} onClick={action("action")}>
          {message}
        </DefaultButton>
      </>
    );
  });

storiesOf("Buttons", module).add("Buttons", () => {
  return (
    <Card>
      <CardTitle>SOLID</CardTitle>
      <CardBody>
        {variantTypes.map(variantType => (
          <DefaultButton variant={variantType}>
            {capitalize(variantType)}
          </DefaultButton>
        ))}
      </CardBody>
    </Card>
  );
});
