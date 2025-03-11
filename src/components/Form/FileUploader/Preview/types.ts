import type { FilePreviewProps, FileType } from '../types';

export interface PreviewProps<T extends FileType | FileType[]> extends FilePreviewProps {
  files: T;
}
