import clsx from 'clsx';
import type { SelectableInputBaseUnionProps } from '../Wrappers/SelectableInputWrapper/SelectableInputWrapper';
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import SelectableInputWrapper from '../Wrappers/SelectableInputWrapper/SelectableInputWrapper';
import Minus4Icon from '@/src/icons/Minus4';
import CheckmarkIcon from '@/src/icons/Checkmark';

type CheckboxProps = SelectableInputBaseUnionProps &
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> & {
    isIndeterminate?: boolean;
  };

const Checkbox = (props: CheckboxProps) => {
  const { className, isIndeterminate, ...rest } = props;
  return (
    <SelectableInputWrapper {...rest}>
      {({ inputClassName, checkedInputClassName }) => (
        <>
          <input
            type="checkbox"
            className={clsx('rounded', inputClassName, className)}
            {...rest}
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
    </SelectableInputWrapper>
  );
};

export default Checkbox;
