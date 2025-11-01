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
  type?: 'default' | 'compact' | 'list' | 'grid';
  leftButton?: boolean | PreviewCustomButtonInterface;
  rightButton?: boolean | PreviewCustomButtonInterface;
  exteraButton?: PreviewCustomButtonInterface;
  wrapperClassName?: string;
  previewClassName?: string;
}
export interface SingleFilePreviewProps extends Omit<FilePreviewProps, 'type'> {
  type?: 'default' | 'compact';
}
export interface MultipleFilePreviewProps extends Omit<FilePreviewProps, 'type'> {
  type?: 'list' | 'grid';
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
  onChange: (file: File | undefined, files: FileList | null) => void;
  className?: string;
}

export interface FileUploaderSingleMode {
  mode?: 'single';
  files?: FileType;
  previewProps?: SingleFilePreviewProps;
}

export interface FileUploaderMultipleMode {
  mode: 'multiple';
  files?: FileType[];
  previewProps?: MultipleFilePreviewProps;
  hideFileInput?: boolean;
}

export type FileUploaderProps = FileUploaderPropsBase &
  (FileUploaderSingleMode | FileUploaderMultipleMode);

export type ActionConfig = Omit<ButtonProps, 'rightIcon' | 'leftIcon'> & {
  icon?: ButtonProps['rightIcon'];
};
