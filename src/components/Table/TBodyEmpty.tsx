import type { FC } from 'react';
import { useTableContext } from './context';

const TBodyEmpty: FC = () => {
  const { columns, emptyContent } = useTableContext();

  return (
    <tbody>
      <tr>
        <td colSpan={columns.length}>{emptyContent}</td>
      </tr>
    </tbody>
  );
};

export default TBodyEmpty;
