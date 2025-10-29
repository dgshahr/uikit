'use client';

import clsx from 'clsx';
import { Fragment, type FC } from 'react';
import FileInput from './Input/FileInput';
import MultipleModePreview from './Preview/MultipleMode/MultipleModePreview';
import SingleModePreview from './Preview/SingleMode/SingleModePreview';
import type { FileType, FileUploaderMultipleMode, FileUploaderProps } from './types';

import '@/src/styles.css';

const FileUploader: FC<FileUploaderProps> = (props) => {
  const { mode, fileInputProps, isError, disabled, onChange, files, previewProps, className } =
    props;
  const hideFileInput = (props as FileUploaderMultipleMode).hideFileInput;
  const haveFiles = Array.isArray(files) ? files.length > 0 : Boolean(files);

  const wrapperClassName = clsx(
    Boolean(mode === 'multiple' && previewProps?.type === 'grid') &&
      'dgsuikit:flex dgsuikit:space-x-2',
    className,
  );
  const WrapperElement = wrapperClassName ? 'div' : Fragment;

  return (
    <WrapperElement {...(WrapperElement === 'div' ? { className: wrapperClassName } : {})}>
      {((!haveFiles && mode === 'single') || (mode === 'multiple' && !hideFileInput)) && (
        <FileInput
          {...fileInputProps}
          previewType={previewProps?.type}
          disabled={disabled}
          isError={isError}
          onChange={onChange}
        />
      )}
      {haveFiles && (
        <>
          {mode === 'single' ? (
            <SingleModePreview
              {...previewProps}
              files={files as FileType}
            />
          ) : (
            <MultipleModePreview
              {...previewProps}
              files={files as FileType[]}
            />
          )}
        </>
      )}
    </WrapperElement>
  );
};

export default FileUploader;
export * from './types';
