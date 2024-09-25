import '@/src/styles.css';

interface DividerProps {
  type: 'horizontal' | 'vertical';
  size?: 'thin' | 'thick';
  color?: 'white' | 'gray';
  className?: string;
}

function styleDivider({ type, size = 'thin', color = 'gray', className }: DividerProps) {
  const typeClassName = type === 'horizontal' ? 'w-full' : 'h-full';

  const sizeClassName: Record<
    Required<DividerProps>['type'],
    Record<Required<DividerProps>['size'], string>
  > = {
    horizontal: {
      thin: 'h-[1px]',
      thick: 'h-1',
    },
    vertical: {
      thin: 'w-[1px]',
      thick: 'w-1',
    },
  };

  const colorClassName = color === 'gray' ? 'bg-gray-200' : 'bg-gray-100';

  return [typeClassName, sizeClassName[type][size], colorClassName, className ?? '']
    .slice()
    .join(' ');
}

const Divider = (props: DividerProps) => {
  return <div className={styleDivider(props)} />;
};

export default Divider;
