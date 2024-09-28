import clsx from 'clsx';
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import type { SelectableInputBaseUnionProps } from '../Wrappers/SelectableInputWrapper/SelectableInputWrapper';
import SelectableInputWrapper from '../Wrappers/SelectableInputWrapper/SelectableInputWrapper';

type RadioButtonProps = SelectableInputBaseUnionProps &
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'>;

const RadioButton = (props: RadioButtonProps) => {
  const { className, ...rest } = props;

  return (
    <SelectableInputWrapper {...rest}>
      {({ inputClassName, checkedInputClassName }) => (
        <>
          <input
            type="radio"
            className={clsx('rounded-full', inputClassName, className)}
            {...rest}
          />
          <div className={checkedInputClassName}>
            <div className="bg-white rounded-full w-2 h-2" />
          </div>
        </>
      )}
    </SelectableInputWrapper>
  );
};

export default RadioButton;
