import clsx from 'clsx';
import {
  forwardRef,
  type DetailedHTMLProps,
  type ForwardedRef,
  type TextareaHTMLAttributes,
} from 'react';
import type { TextFieldBaseProps } from '../Wrappers/TextFieldWrapper/TextFieldWrapper';
import TextFieldWrapper from '../Wrappers/TextFieldWrapper/TextFieldWrapper';

interface TextareaProps
  extends Omit<
      DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
      'dir'
    >,
    TextFieldBaseProps {}

const Textarea = forwardRef(function Textarea(
  props: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  const { dir = 'rtl', placeholderDir = dir, className, ...restProps } = props;

  return (
    <TextFieldWrapper {...props}>
      {({ handleChangeField }) => (
        <textarea
          {...restProps}
          ref={ref}
          className={clsx(
            'dgs-ui-kit-text-gray-800 dgs-ui-kit-bg-transparent dgs-ui-kit-w-full dgs-ui-kit-h-full focus:dgs-ui-kit-outline-none ss02 dgs-ui-kit-flex-1 dgs-ui-kit-resize-none',
            dir === 'rtl' ? 'dgs-ui-kit-text-right' : '!dgs-ui-kit-text-left',
            placeholderDir === 'rtl'
              ? 'placeholder:dgs-ui-kit-text-right'
              : 'placeholder:dgs-ui-kit-text-left',
            className,
          )}
          onChange={handleChangeField}
          rows={restProps.rows ?? 5}
        />
      )}
    </TextFieldWrapper>
  );
});

export default Textarea;
