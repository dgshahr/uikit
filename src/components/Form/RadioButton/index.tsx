import clsx from 'clsx';
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import omitObject from '@/src/utils/omitObjects';
import type { SelectableInputBaseUnionProps } from '../Wrappers/SelectableInputWrapper/SelectableInputWrapper';
import SelectableInputWrapper from '../Wrappers/SelectableInputWrapper/SelectableInputWrapper';

export type RadioButtonProps = SelectableInputBaseUnionProps &
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'>;

const RadioButton = (props: RadioButtonProps) => {
  const { className, ...rest } = props;
  const inputProps = omitObject(rest, [
    'label',
    'isError',
    'errorMessage',
    'helperMessage',
    'containerClassName',
  ]);

  return (
    <SelectableInputWrapper {...rest}>
      {({ inputClassName, checkedInputClassName }) => (
        <>
          <input
            {...inputProps}
            type="radio"
            className={clsx(
              'dgs-ui-kit-rounded-full dgs-ui-kit-shrink-0',
              inputClassName,
              className,
            )}
          />
          <div className={checkedInputClassName}>
            <div className="dgs-ui-kit-bg-white dgs-ui-kit-rounded-full dgs-ui-kit-w-2 dgs-ui-kit-h-2" />
          </div>
        </>
      )}
    </SelectableInputWrapper>
  );
};

export default RadioButton;
