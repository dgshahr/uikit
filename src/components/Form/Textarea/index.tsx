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
  const { dir = 'rtl', placeholderDir = dir, ...restProps } = props;

  return (
    <TextFieldWrapper {...props}>
      {({ handleChangeField }) => (
        <textarea
          {...restProps}
          ref={ref}
          className={clsx(
            'text-gray-800 bg-transparent w-full h-full focus:outline-none ss02 flex-1 resize-none',
            dir === 'rtl' ? 'text-right' : '!text-left',
            placeholderDir === 'rtl' ? 'placeholder:text-right' : 'placeholder:text-left',
            restProps.className,
          )}
          onChange={handleChangeField}
          rows={restProps.rows ?? 5}
        />
      )}
    </TextFieldWrapper>
  );
});

export default Textarea;
