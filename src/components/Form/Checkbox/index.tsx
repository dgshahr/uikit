import clsx from 'clsx';
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import IconCheckmark from '@/src/icons/IconCheckmark';
import IconMinus4 from '@/src/icons/IconMinus4';
import omitObject from '@/src/utils/omitObjects';
import type { RadioCheckboxBaseUnionProps } from '../Wrappers/RadioCheckboxWrapper/RadioCheckboxWrapper';
import RadioCheckboxWrapper from '../Wrappers/RadioCheckboxWrapper/RadioCheckboxWrapper';

export type CheckboxProps = RadioCheckboxBaseUnionProps &
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> & {
    isIndeterminate?: boolean;
  };

const Checkbox = (props: CheckboxProps) => {
  const { className, isIndeterminate, ...rest } = props;
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
            type="checkbox"
            className={clsx('dgsuikit:rounded', inputClassName, className)}
          />
          <div className={checkedInputClassName}>
            {isIndeterminate ? (
              <IconMinus4
                width={16}
                height={16}
              />
            ) : (
              <IconCheckmark
                width={16}
                height={16}
              />
            )}
          </div>
        </>
      )}
    </RadioCheckboxWrapper>
  );
};

export default Checkbox;
