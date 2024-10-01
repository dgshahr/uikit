import '@/src/styles.css';

interface DividerProps {
  type: 'horizontal' | 'vertical';
  size?: 'thin' | 'thick';
  color?: 'white' | 'gray';
  className?: string;
}

function styleDivider({ type, size = 'thin', color = 'gray', className }: DividerProps) {
  const typeClassName = type === 'horizontal' ? 'dgs-ui-kit-w-full' : 'dgs-ui-kit-h-full';

  const sizeClassName: Record<
    Required<DividerProps>['type'],
    Record<Required<DividerProps>['size'], string>
  > = {
    horizontal: {
      thin: 'dgs-ui-kit-h-[1px]',
      thick: 'dgs-ui-kit-h-1',
    },
    vertical: {
      thin: 'dgs-ui-kit-w-[1px]',
      thick: 'dgs-ui-kit-w-1',
    },
  };

  const colorClassName = color === 'gray' ? 'dgs-ui-kit-bg-gray-200' : 'dgs-ui-kit-bg-gray-100';

  return [typeClassName, sizeClassName[type][size], colorClassName, className ?? '']
    .slice()
    .join(' ');
}

const Divider = (props: DividerProps) => {
  return <div className={styleDivider(props)} />;
};

export default Divider;
