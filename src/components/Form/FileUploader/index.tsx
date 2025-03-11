'use client';
import clsx from 'clsx';
import { Fragment, type FC } from 'react';
import FileInput from './FileInput';
import SingleModePreview from './SingleModePreview';
import type { FileType, FileUploaderProps } from './types';

import '@/src/styles.css';

const FileUploader: FC<FileUploaderProps> = (props) => {
  const { mode, fileInputProps, isError, disabled, onChange, files, previewProps, className } =
    props;
  const haveFiles = Array.isArray(files) ? files.length > 0 : Boolean(files);

  const wrapperClassName = clsx(
    Boolean(mode === 'multiple' && previewProps?.type === 'grid') &&
      'dgs-ui-kit-flex dgs-ui-kit-space-x-2 rtl:dgs-ui-kit-space-x-reverse',
    className,
  );
  const WrapperElement = wrapperClassName ? 'div' : Fragment;

  return (
    <WrapperElement className={wrapperClassName}>
      {((!haveFiles && mode === 'single') || mode !== 'single') && (
        <FileInput
          {...fileInputProps}
          disabled={disabled}
          isError={isError}
          onChange={onChange}
        />
      )}
      {haveFiles && mode === 'single' && (
        <SingleModePreview
          {...previewProps}
          files={files as FileType}
        />
      )}
    </WrapperElement>
  );
};

export default FileUploader;
