import clsx from 'clsx';
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import CheckmarkIcon from '@/src/icons/Checkmark';
import Minus4Icon from '@/src/icons/Minus4';
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
            className={clsx('dgs-ui-kit-rounded', inputClassName, className)}
          />
          <div className={checkedInputClassName}>
            {isIndeterminate ? (
              <Minus4Icon
                width={16}
                height={16}
              />
            ) : (
              <CheckmarkIcon
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
