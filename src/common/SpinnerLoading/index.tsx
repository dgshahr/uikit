import clsx from 'clsx';
import type { FC, SVGProps } from 'react';

const SpinnerLoading: FC<SVGProps<SVGSVGElement>> = (props) => {
  const { className, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={clsx(
        'dgsuikit:m-auto dgsuikit:bg-none dgsuikit:block dgsuikit:text-primary-500',
        className,
      )}
      {...rest}
    >
      <g transform="translate(79,50)">
        <g transform="rotate(0)">
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="currentColor"
            fillOpacity="1"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.875s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.875s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(70.50609665440987,70.50609665440987)">
        <g transform="rotate(45)">
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="currentColor"
            fillOpacity="0.875"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.75s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.75s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(50,79)">
        <g transform="rotate(90)">
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="currentColor"
            fillOpacity="0.75"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.625s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.625s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(29.493903345590123,70.50609665440987)">
        <g transform="rotate(135)">
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="currentColor"
            fillOpacity="0.625"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.5s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.5s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(21,50)">
        <g transform="rotate(180)">
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="currentColor"
            fillOpacity="0.5"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.375s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.375s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(29.493903345590116,29.493903345590123)">
        <g transform="rotate(225)">
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="currentColor"
            fillOpacity="0.375"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.25s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.25s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(49.99999999999999,21)">
        <g transform="rotate(270)">
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="currentColor"
            fillOpacity="0.25"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.125s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.125s"
            ></animate>
          </circle>
        </g>
      </g>
      <g transform="translate(70.50609665440987,29.493903345590116)">
        <g transform="rotate(315)">
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="currentColor"
            fillOpacity="0.125"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="0s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
            ></animateTransform>
            <animate
              attributeName="fill-opacity"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              values="1;0"
              begin="0s"
            ></animate>
          </circle>
        </g>
      </g>
    </svg>
  );
};

export default SpinnerLoading;
