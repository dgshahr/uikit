import clsx from 'clsx';
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import CheckmarkIcon from '@/src/icons/Checkmark';
import Minus4Icon from '@/src/icons/Minus4';
import type { SelectableInputBaseUnionProps } from '../Wrappers/SelectableInputWrapper/SelectableInputWrapper';
import SelectableInputWrapper from '../Wrappers/SelectableInputWrapper/SelectableInputWrapper';

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
            {...rest}
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
    </SelectableInputWrapper>
  );
};

export default Checkbox;
