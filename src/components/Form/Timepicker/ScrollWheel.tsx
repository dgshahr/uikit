// import clsx from 'clsx';
// import { type FC } from 'react';
// import type { ScrollWheelProps } from './types';
// import { useScrollWheel } from './useScrollWheel';

// const ScrollWheel: FC<ScrollWheelProps> = ({
//   items,
//   defaultValue,
//   onValueChange,
//   className,
//   formatValue = (value) => String(value).padStart(2, '0'),
// }) => {
//   const { containerRef, itemRefs } = useScrollWheel(items, defaultValue, onValueChange);

//   return (
//     <div className="dgsuikit:relative dgsuikit:h-28 dgsuikit:w-full">
//       {/* اسکرولر */}
//       <div
//         ref={containerRef}
//         className={clsx(
//           'dgsuikit:h-28 dgsuikit:w-full dgsuikit:py-8 dgsuikit:overflow-y-scroll dgsuikit:snap-y dgsuikit:snap-mandatory dgsuikit:scroll-smooth dgsuikit:no-scrollbar',
//           className,
//         )}
//       >
//         {items.map((item, index) => (
//           <div
//             key={item}
//             ref={(el) => {
//               itemRefs.current[index] = el;
//             }}
//             className="dgsuikit:h-10 dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:snap-center dgsuikit:font-p1-regular"
//           >
//             {formatValue(item)}
//           </div>
//         ))}
//       </div>

//       {/* فید بالا */}
//       <div className="dgsuikit:absolute dgsuikit:top-0 dgsuikit:left-0 dgsuikit:right-0 dgsuikit:h-14 dgsuikit:bg-gradient-to-b dgsuikit:from-white dgsuikit:to-transparent dgsuikit:pointer-events-none" />

//       {/* فید پایین */}
//       <div className="dgsuikit:absolute dgsuikit:bottom-0 dgsuikit:left-0 dgsuikit:right-0 dgsuikit:h-14 dgsuikit:bg-gradient-to-t dgsuikit:from-white dgsuikit:to-transparent dgsuikit:pointer-events-none" />
//     </div>
//   );
// };

// export default ScrollWheel;

import clsx from 'clsx';
import { type FC } from 'react';
import type { ScrollWheelProps } from './types';
import { useScrollWheel } from './useScrollWheel';

const ScrollWheel: FC<ScrollWheelProps> = ({
  items,
  defaultValue,
  onValueChange,
  className,
  formatValue = (value) => String(value).padStart(2, '0'),
}) => {
  const { containerRef, itemRefs } = useScrollWheel(items, defaultValue, onValueChange);

  return (
    <div className="dgsuikit:relative dgsuikit:h-28 dgsuikit:w-full">
      {/* اسکرولر */}
      <div
        ref={containerRef}
        className={clsx(
          'dgsuikit:h-28 dgsuikit:w-full dgsuikit:py-8 dgsuikit:overflow-y-scroll dgsuikit:snap-y dgsuikit:snap-mandatory dgsuikit:scroll-smooth dgsuikit:no-scrollbar',
          className,
        )}
      >
        {items.map((item, index) => (
          <div
            key={item}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="dgsuikit:h-10 dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:snap-center dgsuikit:font-p1-regular"
          >
            {formatValue(item)}
          </div>
        ))}
      </div>

      <div
        className="dgsuikit:absolute dgsuikit:bottom-0 dgsuikit:left-0 dgsuikit:right-0 dgsuikit:h-12 dgsuikit:pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.54) 0%, rgba(255, 255, 255, 0.90) 70.29%)',
        }}
      />

      <div
        className="dgsuikit:absolute dgsuikit:top-0 dgsuikit:left-0 dgsuikit:right-0 dgsuikit:h-12 dgsuikit:pointer-events-none"
        style={{
          background:
            'linear-gradient(0deg, rgba(255, 255, 255, 0.54) 0%, rgba(255, 255, 255, 0.90) 70.29%)',
        }}
      />
    </div>
  );
};

export default ScrollWheel;
