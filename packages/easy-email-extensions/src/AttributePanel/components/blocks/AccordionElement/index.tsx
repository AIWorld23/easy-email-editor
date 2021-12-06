import React from 'react';
import { Padding } from '../../attributes/Padding';
import { TextAlign } from '../../attributes/TextAlign';
import { Border } from '../../attributes/Border';
import { BackgroundColor } from '../../attributes/BackgroundColor';
import { Color } from '../../attributes/Color';
import { Link } from '../../attributes/Link';
import { TextAreaField } from '../../../../components/Form';
import { Width } from '../../attributes/Width';
import { ContainerBackgroundColor } from '../../attributes/ContainerBackgroundColor';
import { Align } from '../../attributes/Align';
import { FontSize } from '../../attributes/FontSize';
import { FontStyle } from '../../attributes/FontStyle';
import { FontWeight } from '../../attributes/FontWeight';
import { FontFamily } from '../../attributes/FontFamily';
import { TextDecoration } from '../../attributes/TextDecoration';
import { TextTransform } from '../../attributes/TextTransform';
import { LineHeight } from '../../attributes/LineHeight';
import { LetterSpacing } from '../../attributes/LetterSpacing';
import { AttributesPanelWrapper } from '../../attributes/AttributesPanelWrapper';
import { Stack, useFocusIdx } from 'easy-email-editor';

export function AccordionElement() {
  const { focusIdx } = useFocusIdx();
  return (
    <AttributesPanelWrapper>
      <Stack vertical>
        <TextAreaField
          label='Content'
          name={`${focusIdx}.data.value.content`}
          inline
        />
        <Color />
        <FontSize />
        <LineHeight />

        <FontStyle />
        <FontWeight />
        <LetterSpacing />
        <FontFamily />
        <TextDecoration />
        <TextTransform />
        <BackgroundColor />
        <Width />
        <Align />
        <Padding title='Inner padding' attributeName='inner-padding' />
        <Padding title='Padding' attributeName='padding' />
        <Link />
        <Border />
        <ContainerBackgroundColor />
        <TextAlign />
      </Stack>
    </AttributesPanelWrapper>
  );
}