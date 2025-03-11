import clsx from 'clsx';
import { useState, type DragEvent, type FC } from 'react';
import IconPlus4 from '@/src/icons/IconPlus4';
import FileInputIcon from './FileInputIcon';
import Button from '../../../Button';
import FieldBottomInfo from '../../Common/FieldBottomInfo/FieldBottomInfo';
import {
  DEFAULT_SIZE_CLASS,
  DISABLED_CLASS,
  DRAG_CLASS,
  ERROR_CLASS,
  FOCUS_CLASS,
} from '../constants';
import type { FileInputProps } from '../types';

function renderUploadButton(button: FileInputProps['button']) {
  const zIndexClass = 'dgs-ui-kit-relative dgs-ui-kit-z-10';
  if (typeof button === 'boolean') {
    return (
      <Button
        className={zIndexClass}
        rightIcon={<IconPlus4 />}
        size="small"
      />
    );
  } else {
    return (
      <Button
        {...button}
        className={clsx(zIndexClass, button?.className)}
      >
        {button?.children}
      </Button>
    );
  }
}

const FileInput: FC<FileInputProps> = (props) => {
  const {
    title,
    description,
    button = true,
    hideIcon,
    isError,
    className,
    onChange,
    helperProps,
    ...rest
  } = props;
  const [isOnDrag, setIsOnDrag] = useState(false);

  function handleDrop(e: DragEvent<HTMLInputElement>) {
    e.preventDefault();
    setIsOnDrag(false);
    onChange(e.dataTransfer.files?.[0]);
  }

  return (
    <div className="dgs-ui-kit-space-y-2">
      <div
        className={clsx(
          'dgs-ui-kit-relative dgs-ui-kit-text-center dgs-ui-kit-bg-white dgs-ui-kit-transition-all',
          'dgs-ui-kit-space-y-4 dgs-ui-kit-p-4',
          'dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-justify-center dgs-ui-kit-items-center',
          'dgs-ui-kit-border dgs-ui-kit-border-gray-300 dgs-ui-kit-border-dashed dgs-ui-kit-rounded-lg',
          'hover:dgs-ui-kit-ring-4 hover:dgs-ui-kit-ring-gray-100',
          FOCUS_CLASS,
          DISABLED_CLASS,
          (isError || helperProps?.errorMessage) && ERROR_CLASS,
          isOnDrag && DRAG_CLASS,
          DEFAULT_SIZE_CLASS,
          className,
        )}
      >
        {title ? (
          <p className="dgs-ui-kit-font-p1-medium dgs-ui-kit-text-primary-500 [font-feature-settings:inherit]">
            {title}
          </p>
        ) : null}
        {description ? (
          <pre className="dgs-ui-kit-font-caption-demibold dgs-ui-kit-text-primary-200 [font-feature-settings:inherit]">
            {description}
          </pre>
        ) : null}
        {button ? renderUploadButton(button) : null}
        {!hideIcon && <FileInputIcon />}
        <input
          className="!dgs-ui-kit-mt-0 dgs-ui-kit-absolute dgs-ui-kit-inset-0 dgs-ui-kit-size-full dgs-ui-kit-opacity-0 dgs-ui-kit-cursor-pointer disabled:dgs-ui-kit-cursor-not-allowed dgs-ui-kit-z-10"
          type="file"
          onDragEnter={() => setIsOnDrag(true)}
          onDragLeave={() => setIsOnDrag(false)}
          onDrop={handleDrop}
          onChange={(e) => onChange(e.currentTarget.files?.[0])}
          {...rest}
        />
      </div>

      {Object.keys(helperProps ?? {}).length > 0 && <FieldBottomInfo {...helperProps} />}
    </div>
  );
};

export default FileInput;
