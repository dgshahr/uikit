import type { FC } from 'react';
import { useDatepickerContext } from './context';
import Days from './Days';
import { DateTypes } from './types';

const Body: FC = () => {
  const { dateType } = useDatepickerContext();

  switch (dateType) {
    case DateTypes.Day:
      return <Days />;
    case DateTypes.Month:
      return null;
    case DateTypes.Year:
      return null;
    default:
      return null;
  }
};

export default Body;
