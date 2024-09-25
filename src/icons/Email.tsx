import type { SVGProps } from 'react';
const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.847 6.41A.75.75 0 0 1 3.9 6.295l6.523 5.259c.944.748 2.28.749 3.225 0l6.465-5.257a.75.75 0 0 1 .947 1.164l-6.476 5.265a4.1 4.1 0 0 1-5.097 0l-.004-.003-6.524-5.26a.75.75 0 0 1-.113-1.055"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M16.431 20.85H7.567a5.05 5.05 0 0 1-3.643-1.48 5.96 5.96 0 0 1-1.674-4.28V8.913A5.44 5.44 0 0 1 7.582 3.15h8.836a5.44 5.44 0 0 1 5.332 5.763v6.177a5.96 5.96 0 0 1-1.674 4.275 5.05 5.05 0 0 1-3.645 1.485m-8.851-1.5h8.849a3.58 3.58 0 0 0 2.587-1.043 4.47 4.47 0 0 0 1.234-3.217V8.913c0-2.47-1.611-4.263-3.832-4.263H7.582c-2.221 0-3.832 1.793-3.832 4.263v6.177a4.47 4.47 0 0 0 1.234 3.213 3.58 3.58 0 0 0 2.585 1.043z"
    />
  </svg>
);
export default EmailIcon;
