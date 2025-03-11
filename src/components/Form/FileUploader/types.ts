import type { DetailedHTMLProps, InputHTMLAttributes, MouseEvent } from 'react';
import type { ButtonProps } from '../../Button';
import type { FieldBottomInfoProps } from '../Common/FieldBottomInfo/FieldBottomInfo';

interface FileTypeBase extends Omit<FieldBottomInfoProps, 'disabled' | 'extraHelper'> {
  file?: File;
  src?: string;
  loading?: boolean | number;
  status?: 'warning' | 'error' | 'default';
  title?: string;
}

export type FileType = FileTypeBase &
  (Required<Pick<FileTypeBase, 'file'>> | Required<Pick<FileTypeBase, 'src'>>);

interface PreviewCustomButtonInterface extends Omit<ButtonProps, 'onClick'> {
  onClick?: (file: FileType, e: MouseEvent<HTMLButtonElement>) => void;
}

export interface FilePreviewProps {
  type?: 'list' | 'grid';
  leftButton?: boolean | PreviewCustomButtonInterface;
  rightButton?: boolean | PreviewCustomButtonInterface;
  exteraButton?: PreviewCustomButtonInterface;
  wrapperClassName?: string;
  previewClassName?: string;
}

export interface FileInputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'type' | 'onChange' | 'onDragEnter' | 'onDragLeave' | 'onDrop'
  > {
  title?: string;
  description?: string;
  hideIcon?: boolean;
  button?: boolean | ButtonProps;
  isError?: boolean;
  onChange: FileUploaderPropsBase['onChange'];
  helperProps?: Omit<FieldBottomInfoProps, 'disabled'>;
}

interface FileUploaderPropsBase {
  fileInputProps?: Omit<FileInputProps, 'isError' | 'disabled' | 'onChange'>;
  isError?: boolean;
  disabled?: boolean;
  onChange: (file: File | undefined) => void;
  className?: string;
}

interface FileUploaderSingleMode {
  mode?: 'single';
  files?: FileType;
  previewProps?: Omit<FilePreviewProps, 'type'>;
}

interface FileUploaderMultipleMode {
  mode: 'multiple';
  files?: FileType[];
  previewProps?: FilePreviewProps;
}

export type FileUploaderProps = FileUploaderPropsBase &
  (FileUploaderSingleMode | FileUploaderMultipleMode);
