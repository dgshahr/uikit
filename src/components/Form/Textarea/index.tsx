import clsx from 'clsx';
import {
  forwardRef,
  type DetailedHTMLProps,
  type ForwardedRef,
  type TextareaHTMLAttributes,
} from 'react';
import omitObject from '@/src/utils/omitObjects';
import type { TextFieldBaseProps } from '../Wrappers/TextFieldWrapper/TextFieldWrapper';
import TextFieldWrapper from '../Wrappers/TextFieldWrapper/TextFieldWrapper';

interface TextareaProps
  extends Omit<
      DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
      'dir' | 'onClick'
    >,
    TextFieldBaseProps {}

const Textarea = forwardRef(function Textarea(
  props: TextareaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  const { dir = 'rtl', placeholderDir = dir, className, ...restProps } = props;
  const inputProps = omitObject(restProps, [
    'labelAddon',
    'labelContent',
    'link',
    'rightIcon',
    'isError',
    'errorMessage',
    'hintMessage',
    'wrapperClassName',
    'showMaxLength',
    'containerClassName',
  ]);

  return (
    <TextFieldWrapper {...props}>
      <textarea
        {...inputProps}
        ref={ref}
        className={clsx(
          'dgsuikit:bg-transparent dgsuikit:leading-normal dgsuikit:w-full dgsuikit:h-full dgsuikit:focus:outline-none dgsuikit:ss02 dgsuikit:flex-1 dgsuikit:resize-none',
          dir === 'rtl' ? 'dgsuikit:text-right' : 'dgsuikit:!text-left',
          placeholderDir === 'rtl'
            ? 'dgsuikit:placeholder:text-right'
            : 'dgsuikit:placeholder:text-left',
          className,
        )}
        rows={restProps.rows ?? 5}
      />
    </TextFieldWrapper>
  );
});

export default Textarea;
