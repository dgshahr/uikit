import clsx from 'clsx';
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import omitObject from '@/src/utils/omitObjects';
import type { RadioCheckboxBaseUnionProps } from '../Wrappers/RadioCheckboxWrapper/RadioCheckboxWrapper';
import RadioCheckboxWrapper from '../Wrappers/RadioCheckboxWrapper/RadioCheckboxWrapper';

export type RadioButtonProps = RadioCheckboxBaseUnionProps &
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
    <RadioCheckboxWrapper {...rest}>
      {({ inputClassName, checkedInputClassName }) => (
        <>
          <input
            {...inputProps}
            type="radio"
            className={clsx('dgs-ui-kit-rounded-full', inputClassName, className)}
          />
          <div className={checkedInputClassName}>
            <div className="dgs-ui-kit-bg-white dgs-ui-kit-rounded-full dgs-ui-kit-w-2 dgs-ui-kit-h-2 dgs-ui-kit-mt-[1px]" />
          </div>
        </>
      )}
    </RadioCheckboxWrapper>
  );
};

export default RadioButton;
