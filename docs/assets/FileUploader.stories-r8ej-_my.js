'use client';
import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as v } from './index-CTzypqlY.js';
import { c as d } from './clsx-B-dksMZM.js';
import { B as y } from './index-mEH1fkcA.js';
import { F as j } from './FieldBottomInfo-COD-BNdl.js';
import { P as V } from './index-abplzN06.js';
import { I as W } from './IconEye-Cb9e2e14.js';
/* empty css               */ import './IconInfoCircleOutline-Dd1i2qLz.js';
const q = (t) =>
  e.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...t,
    children: e.jsx('path', {
      fill: 'currentColor',
      d: 'M12 5a.75.75 0 0 1 .75.75V11H18a.75.75 0 0 1 0 1.5h-5.25v5.25a.75.75 0 0 1-1.5 0V12.5H6A.75.75 0 0 1 6 11h5.25V5.75A.75.75 0 0 1 12 5',
    }),
  });
q.__docgenInfo = { description: '', methods: [], displayName: 'IconPlus4' };
const E = () =>
  e.jsxs('svg', {
    className:
      '!dgs-ui-kit-mt-0 dgs-ui-kit-absolute dgs-ui-kit-bottom-0 dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2',
    width: '81',
    height: '27',
    viewBox: '0 0 81 27',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: [
      e.jsx('rect', {
        width: '33.7825',
        height: '29.7449',
        rx: '5.5752',
        transform: 'matrix(0.983147 0.182818 -0.186455 0.982463 40.3638 14.8927)',
        stroke: '#F0F3FF',
        strokeWidth: '3.7168',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
      e.jsx('ellipse', {
        cx: '3.75361',
        cy: '3.71811',
        rx: '3.75361',
        ry: '3.71811',
        transform: 'matrix(0.983147 0.182818 -0.186455 0.982463 46.3579 23.571)',
        stroke: '#F0F3FF',
        strokeWidth: '3.7168',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
      e.jsx('path', {
        d: 'M61.1192 26.3159L64.8095 27.0022',
        stroke: '#F0F3FF',
        strokeWidth: '3.7168',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
      e.jsx('rect', {
        width: '33.7586',
        height: '29.7452',
        rx: '5.5752',
        transform: 'matrix(0.98127 -0.192639 0.196195 0.980565 7.47998 15.3789)',
        fill: 'white',
        stroke: '#F0F3FF',
        strokeWidth: '3.7168',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
      e.jsx('ellipse', {
        cx: '3.75096',
        cy: '3.71815',
        rx: '3.75096',
        ry: '3.71815',
        transform: 'matrix(0.98127 -0.192639 0.196195 0.980565 16.2998 21.2255)',
        stroke: '#F0F3FF',
        strokeWidth: '3.7168',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
      e.jsx('path', {
        d: 'M31.0227 18.3353L34.7034 17.6127',
        stroke: '#F0F3FF',
        strokeWidth: '3.7168',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
      e.jsx('path', {
        d: 'M32.4822 25.627L36.1629 24.9045',
        stroke: '#F0F3FF',
        strokeWidth: '3.7168',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    ],
  });
E.__docgenInfo = { description: '', methods: [], displayName: 'FileInputIcon' };
const _ = 'dgs-ui-kit-h-[190px] dgs-ui-kit-w-[330px]',
  S = 'dgs-ui-kit-size-[120px]',
  M =
    '!dgs-ui-kit-absolute dgs-ui-kit-top-1/2 dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-y-1/2 -dgs-ui-kit-translate-x-1/2',
  Z =
    'dgs-ui-kit-ring-offset-1 dgs-ui-kit-ring-offset-transparent has-[:focus]:dgs-ui-kit-ring-offset-white dgs-ui-kit-ring-[3px] dgs-ui-kit-ring-transparent has-[:focus]:dgs-ui-kit-ring-primary-300',
  J = '!dgs-ui-kit-border-error-500 dgs-ui-kit-ring-4 !dgs-ui-kit-ring-error-50',
  K =
    '!dgs-ui-kit-border-primary-500 dgs-ui-kit-ring-4 !dgs-ui-kit-ring-gray-100 !dgs-ui-kit-bg-gray-50',
  Q = 'has-[:disabled]:dgs-ui-kit-opacity-50',
  b = {
    default: 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-text-primary-500',
    loading: 'dgs-ui-kit-bg-gray-500 dgs-ui-kit-text-white',
    error: 'dgs-ui-kit-bg-error-50 dgs-ui-kit-text-error-500',
    warning: 'dgs-ui-kit-bg-warning-50 dgs-ui-kit-text-warning-700',
  };
function X(t) {
  const i = 'dgs-ui-kit-relative dgs-ui-kit-z-10';
  return typeof t == 'boolean'
    ? e.jsx(y, { className: i, rightIcon: e.jsx(q, {}), size: 'small' })
    : e.jsx(y, { ...t, className: d(i, t?.className), children: t?.children });
}
const A = (t) => {
  const {
      title: i,
      description: r,
      button: a = !0,
      hideIcon: n,
      isError: s,
      className: l,
      onChange: o,
      helperProps: u,
      previewtype: c,
      ...f
    } = t,
    [p, g] = v.useState(!1),
    h = c === 'grid';
  function G(w) {
    w.preventDefault(), g(!1), o(w.dataTransfer.files?.[0]);
  }
  return e.jsxs('div', {
    className: 'dgs-ui-kit-space-y-2',
    children: [
      e.jsxs('div', {
        className: d(
          'dgs-ui-kit-relative dgs-ui-kit-text-center dgs-ui-kit-bg-white dgs-ui-kit-transition-all',
          'dgs-ui-kit-space-y-4 dgs-ui-kit-p-4',
          'dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-justify-center dgs-ui-kit-items-center',
          'dgs-ui-kit-border dgs-ui-kit-border-gray-300 dgs-ui-kit-border-dashed dgs-ui-kit-rounded-lg',
          'hover:dgs-ui-kit-ring-4 hover:dgs-ui-kit-ring-gray-100',
          Z,
          Q,
          (s || u?.errorMessage) && J,
          p && K,
          h ? S : _,
          l,
        ),
        children: [
          i
            ? e.jsx('p', {
                className:
                  'dgs-ui-kit-font-p1-medium dgs-ui-kit-text-primary-500 [font-feature-settings:inherit]',
                children: i,
              })
            : null,
          r
            ? e.jsx('pre', {
                className:
                  'dgs-ui-kit-font-caption-demibold dgs-ui-kit-text-primary-200 [font-feature-settings:inherit]',
                children: r,
              })
            : null,
          a ? X(a) : null,
          !n && e.jsx(E, {}),
          e.jsx('input', {
            className:
              '!dgs-ui-kit-mt-0 dgs-ui-kit-absolute dgs-ui-kit-inset-0 dgs-ui-kit-size-full dgs-ui-kit-opacity-0 dgs-ui-kit-cursor-pointer disabled:dgs-ui-kit-cursor-not-allowed dgs-ui-kit-z-10',
            type: 'file',
            onDragEnter: () => g(!0),
            onDragLeave: () => g(!1),
            onDrop: G,
            onChange: (w) => o(w.currentTarget.files?.[0]),
            ...f,
          }),
        ],
      }),
      !h && Object.keys(u ?? {}).length > 0 && e.jsx(j, { ...u }),
    ],
  });
};
A.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'FileInput',
  props: {
    title: { required: !1, tsType: { name: 'string' }, description: '' },
    description: { required: !1, tsType: { name: 'string' }, description: '' },
    hideIcon: { required: !1, tsType: { name: 'boolean' }, description: '' },
    button: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'boolean | ButtonProps',
        elements: [{ name: 'boolean' }, { name: 'ButtonProps' }],
      },
      description: '',
    },
    isError: { required: !1, tsType: { name: 'boolean' }, description: '' },
    onChange: {
      required: !0,
      tsType: {
        name: "FileUploaderPropsBase['onChange']",
        raw: "FileUploaderPropsBase['onChange']",
      },
      description: '',
    },
    helperProps: {
      required: !1,
      tsType: {
        name: 'Omit',
        elements: [{ name: 'FieldBottomInfoProps' }, { name: 'literal', value: "'disabled'" }],
        raw: "Omit<FieldBottomInfoProps, 'disabled'>",
      },
      description: '',
    },
    previewtype: {
      required: !1,
      tsType: { name: "FilePreviewProps['type']", raw: "FilePreviewProps['type']" },
      description: '',
    },
  },
  composes: ['Omit'],
};
const N = (t) =>
  e.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...t,
    children: [
      e.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M3.485 7.168a.75.75 0 0 1 .75-.75h16.53a.75.75 0 0 1 0 1.5H4.235a.75.75 0 0 1-.75-.75M5.53 9.565a.75.75 0 0 1 .802.693l.612 8.376a2.57 2.57 0 0 0 2.56 2.38h5.993a2.567 2.567 0 0 0 2.56-2.38l.612-8.376a.75.75 0 0 1 1.496.11l-.612 8.376a4.067 4.067 0 0 1-4.056 3.77H9.504c-2.131 0-3.9-1.646-4.056-3.771l-.612-8.376a.75.75 0 0 1 .693-.802',
        clipRule: 'evenodd',
      }),
      e.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M10.444 3.016h4.12a2 2 0 0 1 1.94 1.526l.503 2.476a.75.75 0 0 1-1.47.298l-.497-2.448a.5.5 0 0 0-.476-.352H10.44a.5.5 0 0 0-.479.351L9.47 7.315a.75.75 0 0 1-1.47-.296l.497-2.476.011-.046a2 2 0 0 1 1.937-1.481',
        clipRule: 'evenodd',
      }),
    ],
  });
N.__docgenInfo = { description: '', methods: [], displayName: 'IconDelete1' };
const B = (t) =>
  e.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...t,
    children: e.jsx('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d: 'M21.084 14.664a.75.75 0 0 1 .75.75v2.511a3.825 3.825 0 0 1-3.826 3.825h-2.51a.75.75 0 0 1 0-1.5h2.51a2.325 2.325 0 0 0 2.326-2.325v-2.51a.75.75 0 0 1 .75-.75M3.084 14.664a.75.75 0 0 1 .75.75v2.511A2.325 2.325 0 0 0 6.16 20.25h2.51a.75.75 0 0 1 0 1.5H6.16a3.825 3.825 0 0 1-3.826-3.825v-2.51a.75.75 0 0 1 .75-.75M6.16 3.75a2.325 2.325 0 0 0-2.326 2.326v2.51a.75.75 0 1 1-1.5 0v-2.51A3.825 3.825 0 0 1 6.16 2.25h2.51a.75.75 0 0 1 0 1.5zM14.748 3a.75.75 0 0 1 .75-.75h2.51a3.825 3.825 0 0 1 3.826 3.826v2.51a.75.75 0 0 1-1.5 0v-2.51a2.325 2.325 0 0 0-2.326-2.326h-2.51a.75.75 0 0 1-.75-.75',
      clipRule: 'evenodd',
    }),
  });
B.__docgenInfo = { description: '', methods: [], displayName: 'IconMinimize' };
const Y =
    "data:image/svg+xml,%3csvg%20viewBox='0%200%2096%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20rx='8'%20fill='%23F1F5F9'/%3e%3cpath%20d='M45.9176%2066.4015C45.2%2066.4011%2044.4904%2066.2499%2043.8352%2065.9575C43.18%2065.6655%2042.5932%2065.2387%2042.1136%2064.7055L38.7415%2060.9495L34.5496%2065.3495C33.9972%2065.9051%2033.2495%2066.2227%2032.4661%2066.2343C31.6827%2066.2455%2030.9259%2065.9503%2030.3574%2065.4111C29.789%2064.8719%2029.4539%2064.1319%2029.4241%2063.3487C29.3942%2062.5659%2029.6718%2061.8023%2030.1975%2061.2215L35.0457%2056.1095C36.066%2055.1195%2037.4205%2054.5487%2038.8415%2054.5095C39.5477%2054.5215%2040.2436%2054.6795%2040.886%2054.9735C41.5284%2055.2675%2042.1028%2055.6907%2042.5736%2056.2175L45.9056%2059.9215L53.5576%2050.8895C54.0196%2050.3439%2054.5908%2049.9011%2055.234%2049.5899C55.8776%2049.2783%2056.5788%2049.1051%2057.2936%2049.0815C58.0104%2049.0551%2058.7244%2049.1819%2059.3888%2049.4527C60.0528%2049.7239%2060.6516%2050.1331%2061.1456%2050.6535L67.7736%2057.5135C68.326%2058.0863%2068.6288%2058.8551%2068.6144%2059.6511C68.6004%2060.4471%2068.2704%2061.2047%2067.6976%2061.7575C67.1248%2062.3103%2066.3556%2062.6127%2065.5596%2062.5983C64.764%2062.5843%2064.0064%2062.2543%2063.4536%2061.6815L57.5016%2055.5135L49.8296%2064.5695C49.3552%2065.1291%2048.766%2065.5807%2048.1024%2065.8931C47.4384%2066.2059%2046.7152%2066.3723%2045.9816%2066.3815L45.9176%2066.4015Z'%20fill='%23748297'/%3e%3cpath%20d='M65.0008%2087H33.1767C30.8059%2086.9584%2028.4666%2086.4488%2026.2933%2085.5004C24.1201%2084.5524%2022.1557%2083.184%2020.5128%2081.4744C18.87%2079.7644%2017.5809%2077.7468%2016.7201%2075.5376C15.8593%2073.3284%2015.4437%2070.9704%2015.4967%2068.6V26.628C15.6171%2021.9306%2017.5604%2017.4643%2020.9154%2014.1742C24.2704%2010.8842%2028.7737%209.0286%2033.4725%209H56.1448C57.6536%209.00228%2059.1468%209.3084%2060.5352%209.90008C61.9232%2010.4918%2063.178%2011.357%2064.2248%2012.444L79.3848%2028.24C81.3932%2030.3232%2082.512%2033.1063%2082.5044%2036V68.652C82.5536%2073.3884%2080.7516%2077.9568%2077.482%2081.384C74.2124%2084.8108%2069.734%2086.826%2065.0008%2087ZM33.4845%2015C30.3566%2015.0102%2027.3555%2016.2368%2025.1159%2018.4204C22.8763%2020.6041%2021.5738%2023.5733%2021.4845%2026.7V68.652C21.4387%2070.2356%2021.7073%2071.8124%2022.2741%2073.292C22.8409%2074.7712%2023.6948%2076.124%2024.787%2077.2712C25.8792%2078.4188%2027.1878%2079.3388%2028.6373%2079.9784C30.0869%2080.6176%2031.6487%2080.9632%2033.2325%2080.996H64.8684C68.0276%2080.8528%2071.0072%2079.4864%2073.1768%2077.1856C75.346%2074.8848%2076.5352%2071.83%2076.4924%2068.668V36C76.4924%2034.6581%2075.9736%2033.3682%2075.0444%2032.4L59.8804%2016.6C59.3956%2016.0947%2058.814%2015.6925%2058.1696%2015.4176C57.5256%2015.1426%2056.8328%2015.0006%2056.1328%2015H33.4725H33.4845Z'%20fill='%23748297'/%3e%3cpath%20d='M79.2498%2037.062H68.2938C64.7902%2037.0461%2061.4354%2035.6443%2058.9622%2033.1628C56.4886%2030.6812%2055.0981%2027.3216%2055.0938%2023.818V12.25C55.0938%2011.4544%2055.4101%2010.6913%2055.9725%2010.1287C56.5353%209.56604%2057.2982%209.25%2058.0938%209.25C58.8893%209.25%2059.6525%209.56604%2060.2153%2010.1287C60.7777%2010.6913%2061.0938%2011.4544%2061.0938%2012.25V23.818C61.0938%2025.7316%2061.8509%2027.5675%2063.2001%2028.9248C64.5489%2030.282%2066.3802%2031.0504%2068.2938%2031.062H79.2417C80.0373%2031.062%2080.8005%2031.3781%2081.3633%2031.9407C81.9257%2032.5033%2082.2417%2033.2663%2082.2417%2034.062C82.2417%2034.8576%2081.9257%2035.6207%2081.3633%2036.1833C80.8005%2036.7459%2080.0373%2037.062%2079.2417%2037.062H79.2498Z'%20fill='%23748297'/%3e%3cpath%20d='M37.9659%2048.8068C40.1992%2048.8068%2042.01%2046.9959%2042.01%2044.7627C42.01%2042.5291%2040.1992%2040.7188%2037.9659%2040.7188C35.7324%2040.7188%2033.9219%2042.5291%2033.9219%2044.7627C33.9219%2046.9959%2035.7324%2048.8068%2037.9659%2048.8068Z'%20fill='%23748297'/%3e%3c/svg%3e",
  I = (t) => {
    const { file: i, children: r, className: a } = t,
      n = i.file ? URL.createObjectURL(i.file) : (i.src ?? '');
    function s(l) {
      const o = l.currentTarget;
      (o.src = Y), o.classList.add('dgs-ui-kit-bg-gray-100');
    }
    return e.jsxs('div', {
      className: d('dgs-ui-kit-relative dgs-ui-kit-rounded-lg dgs-ui-kit-overflow-hidden', _, a),
      children: [
        e.jsx('img', {
          className: 'dgs-ui-kit-w-full dgs-ui-kit-h-full',
          src: n,
          alt: 'image-preview',
          onError: s,
        }),
        e.jsxs('div', {
          className: d(
            'dgs-ui-kit-bg-black dgs-ui-kit-transition-colors dgs-ui-kit-absolute dgs-ui-kit-w-full dgs-ui-kit-h-full dgs-ui-kit-top-0 dgs-ui-kit-left-0',
            i.loading ? 'dgs-ui-kit-bg-opacity-70' : 'dgs-ui-kit-bg-opacity-50',
          ),
          children: [
            typeof i.loading == 'boolean' &&
              i.loading &&
              e.jsx('div', { className: d('dot-flashing', M) }),
            typeof i.loading == 'number' &&
              e.jsxs('div', {
                className: d(
                  'dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-items-center dgs-ui-kit-justify-center',
                  M,
                ),
                children: [
                  e.jsx(V, {
                    current: i.loading,
                    total: 100,
                    color: 'gray',
                    size: 30,
                    strokeSize: 4,
                  }),
                  e.jsxs('div', {
                    className:
                      'dgs-ui-kit-font-oveline-regular dgs-ui-kit-text-gray-50 ss02 dgs-ui-kit-mt-1',
                    children: [i.loading, ' %'],
                  }),
                ],
              }),
            !i.loading && r,
          ],
        }),
      ],
    });
  };
I.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'FilePreview',
  props: {
    children: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    file: {
      required: !0,
      tsType: {
        name: 'intersection',
        raw: `FileTypeBase &
(Required<Pick<FileTypeBase, 'file'>> | Required<Pick<FileTypeBase, 'src'>>)`,
        elements: [{ name: 'FileTypeBase' }, { name: 'unknown' }],
      },
      description: '',
    },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
function k(t, i, r) {
  return t
    ? e.jsx(y, {
        className: d('dgs-ui-kit-opacity-50 dgs-ui-kit-z-10', r?.className, t?.className),
        type: 'button',
        rightIcon: r?.icon,
        size: 'small',
        ...r,
        ...(typeof t == 'boolean' ? {} : t),
        onClick: (a) => {
          typeof t != 'boolean' && typeof t.onClick == 'function' && t.onClick(i, a);
        },
        children: t?.children,
      })
    : null;
}
function T(t, i) {
  return d(
    'dgs-ui-kit-border dgs-ui-kit-border-transparent dgs-ui-kit-rounded-lg',
    i && i !== 'default' && 'dgs-ui-kit-p-1',
    {
      '!dgs-ui-kit-border-error-500': !t && i === 'error',
      '!dgs-ui-kit-border-warning-600': !t && i === 'warning',
    },
  );
}
k.__docgenInfo = { description: '', methods: [], displayName: 'renderPreviewDefaultAction' };
const R = (t) => {
  const {
    files: i,
    previewClassName: r,
    leftButton: a = !0,
    rightButton: n = !0,
    wrapperClassName: s,
  } = t;
  return e.jsx('div', {
    className: d(T(i.loading, i.errorMessage ? 'error' : i.status), S, s),
    children: e.jsxs(I, {
      file: i,
      className: d('!dgs-ui-kit-size-full', r),
      children: [
        k(a, i, {
          color: 'error',
          icon: e.jsx(N, {}),
          className: '!dgs-ui-kit-absolute dgs-ui-kit-left-2 dgs-ui-kit-top-2',
        }),
        k(n, i, {
          color: 'gray',
          icon: e.jsx(B, {}),
          className: '!dgs-ui-kit-absolute dgs-ui-kit-right-2 dgs-ui-kit-bottom-2',
        }),
      ],
    }),
  });
};
R.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'GridTypePreview',
  props: {
    type: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'list' | 'grid'",
        elements: [
          { name: 'literal', value: "'list'" },
          { name: 'literal', value: "'grid'" },
        ],
      },
      description: '',
    },
    leftButton: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'boolean | PreviewCustomButtonInterface',
        elements: [{ name: 'boolean' }, { name: 'PreviewCustomButtonInterface' }],
      },
      description: '',
    },
    rightButton: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'boolean | PreviewCustomButtonInterface',
        elements: [{ name: 'boolean' }, { name: 'PreviewCustomButtonInterface' }],
      },
      description: '',
    },
    exteraButton: {
      required: !1,
      tsType: { name: 'PreviewCustomButtonInterface' },
      description: '',
    },
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    previewClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    files: { required: !0, tsType: { name: 'T' }, description: '' },
  },
};
const D = (t) =>
  e.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...t,
    children: [
      e.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M5.53 9.565a.75.75 0 0 1 .802.693l.612 8.376a2.57 2.57 0 0 0 2.56 2.38h5.993a2.567 2.567 0 0 0 2.56-2.38l.612-8.376a.75.75 0 0 1 1.496.11l-.612 8.376a4.067 4.067 0 0 1-4.056 3.77H9.504c-2.131 0-3.9-1.646-4.056-3.771l-.612-8.376a.75.75 0 0 1 .693-.802M3.485 7.168a.75.75 0 0 1 .75-.75h16.53a.75.75 0 0 1 0 1.5H4.235a.75.75 0 0 1-.75-.75',
        clipRule: 'evenodd',
      }),
      e.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M10.443 3.016h4.12a2 2 0 0 1 1.94 1.526l.503 2.476a.75.75 0 1 1-1.47.298l-.497-2.448a.5.5 0 0 0-.476-.352H10.44a.5.5 0 0 0-.479.351l-.492 2.448a.75.75 0 0 1-1.47-.296l.497-2.476.011-.046a2 2 0 0 1 1.937-1.481M10.602 11.797a.75.75 0 0 1 .75.75v4.508a.75.75 0 0 1-1.5 0v-4.508a.75.75 0 0 1 .75-.75m3.38 0a.75.75 0 0 1 .75.75v4.508a.75.75 0 0 1-1.5 0v-4.508a.75.75 0 0 1 .75-.75',
        clipRule: 'evenodd',
      }),
    ],
  });
D.__docgenInfo = { description: '', methods: [], displayName: 'IconDelete' };
const H = (t) => {
  const {
      files: i,
      previewClassName: r,
      leftButton: a = !0,
      rightButton: n = !0,
      exteraButton: s,
    } = t,
    { status: l, errorMessage: o, hintMessage: u, loading: c, title: f } = i,
    p = f ?? i.file?.name,
    g = !!(o ?? u);
  return e.jsxs('div', {
    className: d(
      'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-2 dgs-ui-kit-space-x-reverse dgs-ui-kit-w-0 dgs-ui-kit-min-w-full',
      T(c, o ? 'error' : l),
      (!l || l === 'default') && !o && 'dgs-ui-kit-p-1 !dgs-ui-kit-border-gray-200',
      r,
    ),
    children: [
      e.jsx(I, { file: i, className: '!dgs-ui-kit-size-[72px] dgs-ui-kit-shrink-0' }),
      !!(p ?? g) &&
        e.jsxs('div', {
          className: 'dgs-ui-kit-space-y-1 dgs-ui-kit-overflow-hidden dgs-ui-kit-w-full',
          children: [
            !!p &&
              e.jsx('span', {
                className:
                  'dgs-ui-kit-font-p2-medium dgs-ui-kit-text-gray-700 dgs-ui-kit-break-words dgs-ui-kit-line-clamp-1',
                children: p,
              }),
            g && e.jsx(j, { hintMessage: u, errorMessage: o }),
          ],
        }),
      (a || n || s) &&
        e.jsxs('div', {
          className:
            'dgs-ui-kit-flex dgs-ui-kit-space-x-1 dgs-ui-kit-space-x-reverse dgs-ui-kit-shrink-0',
          children: [
            s &&
              e.jsx(y, {
                ...s,
                onClick: (h) => {
                  typeof s.onClick == 'function' && s.onClick(i, h);
                },
                children: s.children,
              }),
            k(n, i, {
              color: 'gray',
              icon: e.jsx(W, {}),
              variant: 'text',
              className: '!dgs-ui-kit-opacity-100',
            }),
            k(a, i, {
              color: 'error',
              icon: e.jsx(D, {}),
              variant: 'text',
              className: '!dgs-ui-kit-opacity-100',
            }),
          ],
        }),
    ],
  });
};
H.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'ListTypePreview',
  props: {
    type: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'list' | 'grid'",
        elements: [
          { name: 'literal', value: "'list'" },
          { name: 'literal', value: "'grid'" },
        ],
      },
      description: '',
    },
    leftButton: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'boolean | PreviewCustomButtonInterface',
        elements: [{ name: 'boolean' }, { name: 'PreviewCustomButtonInterface' }],
      },
      description: '',
    },
    rightButton: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'boolean | PreviewCustomButtonInterface',
        elements: [{ name: 'boolean' }, { name: 'PreviewCustomButtonInterface' }],
      },
      description: '',
    },
    exteraButton: {
      required: !1,
      tsType: { name: 'PreviewCustomButtonInterface' },
      description: '',
    },
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    previewClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    files: { required: !0, tsType: { name: 'T' }, description: '' },
  },
};
function L(t) {
  return t.file ? URL.createObjectURL(t.file) : (t.src ?? '');
}
const O = (t) => {
  const { files: i, type: r = 'list', wrapperClassName: a } = t;
  return r === 'grid'
    ? i.map((n) => e.jsx(R, { ...t, files: n }, L(n)))
    : e.jsx('div', {
        className: d('dgs-ui-kit-mt-4 dgs-ui-kit-space-y-2', a),
        children: i.map((n) => e.jsx(H, { ...t, files: n }, L(n))),
      });
};
O.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'MultipleModePreveiw',
  props: {
    type: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'list' | 'grid'",
        elements: [
          { name: 'literal', value: "'list'" },
          { name: 'literal', value: "'grid'" },
        ],
      },
      description: '',
    },
    leftButton: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'boolean | PreviewCustomButtonInterface',
        elements: [{ name: 'boolean' }, { name: 'PreviewCustomButtonInterface' }],
      },
      description: '',
    },
    rightButton: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'boolean | PreviewCustomButtonInterface',
        elements: [{ name: 'boolean' }, { name: 'PreviewCustomButtonInterface' }],
      },
      description: '',
    },
    exteraButton: {
      required: !1,
      tsType: { name: 'PreviewCustomButtonInterface' },
      description: '',
    },
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    previewClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    files: { required: !0, tsType: { name: 'T' }, description: '' },
  },
};
function $(t, i, r = 'default') {
  return t ? b.loading : i ? b.error : b[r];
}
const z = (t) => {
  const {
      files: i,
      leftButton: r = !0,
      rightButton: a = !0,
      exteraButton: n,
      wrapperClassName: s,
      previewClassName: l,
    } = t,
    { errorMessage: o, file: u, hintMessage: c, loading: f, status: p, title: g } = i;
  return e.jsxs('div', {
    className: 'dgs-ui-kit-space-y-2',
    children: [
      e.jsxs('div', {
        className: d(T(f, o ? 'error' : p), s),
        children: [
          e.jsxs(I, {
            file: i,
            className: l,
            children: [
              k(r, i, {
                color: 'error',
                icon: e.jsx(N, {}),
                className: '!dgs-ui-kit-absolute dgs-ui-kit-left-2 dgs-ui-kit-top-2',
              }),
              k(a, i, {
                color: 'gray',
                icon: e.jsx(B, {}),
                className: '!dgs-ui-kit-absolute dgs-ui-kit-right-2 dgs-ui-kit-bottom-2',
              }),
              n
                ? e.jsx(y, {
                    className: d(
                      n.className,
                      '!dgs-ui-kit-absolute dgs-ui-kit-top-1/2 dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-y-1/2 -dgs-ui-kit-translate-x-1/2',
                    ),
                    ...n,
                    onClick: (h) => {
                      typeof n.onClick == 'function' && n.onClick(i, h);
                    },
                    children: n.children,
                  })
                : null,
            ],
          }),
          !!(g ?? u?.name) &&
            e.jsx('div', {
              className: d(
                $(f, o, p),
                'dgs-ui-kit-px-3 dgs-ui-kit-py-1.5 dgs-ui-kit-rounded-lg dgs-ui-kit-font-p2-medium dgs-ui-kit-text-center dgs-ui-kit-line-clamp-1 dgs-ui-kit-mt-1 dgs-ui-kit-w-0 dgs-ui-kit-min-w-full',
              ),
              children: g ?? u?.name,
            }),
        ],
      }),
      (c ?? o) ? e.jsx(j, { errorMessage: o, hintMessage: c }) : null,
    ],
  });
};
z.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'SingleModePreview',
  props: {
    type: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'list' | 'grid'",
        elements: [
          { name: 'literal', value: "'list'" },
          { name: 'literal', value: "'grid'" },
        ],
      },
      description: '',
    },
    leftButton: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'boolean | PreviewCustomButtonInterface',
        elements: [{ name: 'boolean' }, { name: 'PreviewCustomButtonInterface' }],
      },
      description: '',
    },
    rightButton: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'boolean | PreviewCustomButtonInterface',
        elements: [{ name: 'boolean' }, { name: 'PreviewCustomButtonInterface' }],
      },
      description: '',
    },
    exteraButton: {
      required: !1,
      tsType: { name: 'PreviewCustomButtonInterface' },
      description: '',
    },
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    previewClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    files: { required: !0, tsType: { name: 'T' }, description: '' },
  },
};
const F = (t) => {
  const {
      mode: i,
      fileInputProps: r,
      isError: a,
      disabled: n,
      onChange: s,
      files: l,
      previewProps: o,
      className: u,
    } = t,
    c = Array.isArray(l) ? l.length > 0 : !!l,
    p = d(
      i === 'multiple' &&
        o?.type === 'grid' &&
        'dgs-ui-kit-flex dgs-ui-kit-space-x-2 dgs-ui-kit-space-x-reverse',
      u,
    )
      ? 'div'
      : v.Fragment;
  return e.jsxs(p, {
    ...(p === 'div' ? { className: u } : {}),
    children: [
      ((!c && i === 'single') || i !== 'single') &&
        e.jsx(A, { ...r, previewtype: o?.type, disabled: n, isError: a, onChange: s }),
      c &&
        e.jsx(e.Fragment, {
          children: i === 'single' ? e.jsx(z, { ...o, files: l }) : e.jsx(O, { ...o, files: l }),
        }),
    ],
  });
};
F.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'FileUploader',
  props: {
    fileInputProps: {
      required: !1,
      tsType: {
        name: 'Omit',
        elements: [
          { name: 'FileInputProps' },
          {
            name: 'union',
            raw: "'isError' | 'disabled' | 'onChange'",
            elements: [
              { name: 'literal', value: "'isError'" },
              { name: 'literal', value: "'disabled'" },
              { name: 'literal', value: "'onChange'" },
            ],
          },
        ],
        raw: "Omit<FileInputProps, 'isError' | 'disabled' | 'onChange'>",
      },
      description: '',
    },
    isError: { required: !1, tsType: { name: 'boolean' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    onChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(file: File | undefined) => void',
        signature: {
          arguments: [
            {
              type: {
                name: 'union',
                raw: 'File | undefined',
                elements: [{ name: 'File' }, { name: 'undefined' }],
              },
              name: 'file',
            },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
const ue = {
    title: 'Components/Form/FileUploader',
    component: F,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport FileUploader from '@dgshahr/ui-kit/Form/FileUploader';\nOr\nimport { FileUploader } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      fileInputProps: {
        table: {
          type: {
            summary: 'FileInputProps',
            detail: `FileInputProps
          extends Omit<
            InputElement,
            'type' | 'onChange' | 'onDragEnter' | 'onDragLeave' | 'onDrop'
          > {
          title?: string;
          description?: string;
          hideIcon?: boolean;
          button?: boolean | ButtonProps;
          helperProps?: {
            errorMessage?: string;
            hintMessage?: string;
            extraHelper?: ReactNode;
            className?: string;
            };
        }`,
          },
        },
      },
      mode: {
        control: 'select',
        options: ['single', 'multiple'],
        table: { type: { summary: 'single, multiple' }, defaultValue: { summary: 'single' } },
      },
      files: {
        table: {
          type: {
            summary: 'FileType (array on multiple mode)',
            detail: `FileTyp {
            file?: File;
            src?: string;
            loading?: boolean | number;
            status?: 'warning' | 'error' | 'default';
            title?: string;
            errorMessage?: string;
            hintMessage?: string;
            className?: string;
          }`,
          },
        },
      },
      previewProps: {
        table: {
          type: {
            summary: 'FilePreviewProps (type is omited in single mode)',
            detail: `FilePreviewProps {
            type?: 'list' | 'grid';
            leftButton?: boolean | Omit<ButtonProps, 'onClick'> {
              onClick?: (file: FileType, e: MouseEvent<HTMLButtonElement>) => void;
            };
            rightButton?: boolean | Omit<ButtonProps, 'onClick'> {
              onClick?: (file: FileType, e: MouseEvent<HTMLButtonElement>) => void;
            };
            exteraButton?: Omit<ButtonProps, 'onClick'> {
              onClick?: (file: FileType, e: MouseEvent<HTMLButtonElement>) => void;
            };
            wrapperClassName?: string;
            previewClassName?: string;
          }`,
          },
        },
      },
    },
  },
  m = {
    onChange: () => {},
    fileInputProps: {
      title: 'عنوان',
      className: 'ss02',
      helperProps: { hintMessage: 'پیام راهنما' },
    },
  },
  ee = (t) => {
    const [i, r] = v.useState(),
      a = v.useRef();
    function n(s) {
      if (((a.current = void 0), !s)) {
        r(void 0);
        return;
      }
      r({ file: s, loading: 40 });
    }
    return (
      v.useEffect(
        () => (
          i &&
            typeof i.loading == 'number' &&
            !a.current &&
            (a.current = setInterval(() => {
              r((s) => s && { ...s, loading: s.loading + 20 });
            }, 1e3)),
          () => {
            a.current &&
              (i?.loading === 80 || !i) &&
              (clearInterval(a.current), r((s) => s && { ...s, loading: !1 }));
          }
        ),
        [i],
      ),
      e.jsx(F, {
        ...t,
        mode: 'single',
        files: i,
        onChange: n,
        previewProps: { ...t.previewProps, leftButton: { onClick: () => n(void 0) } },
      })
    );
  },
  x = {
    args: {
      ...m,
      fileInputProps: {
        ...m.fileInputProps,
        description: `فرمت‌های قابل قبول JPG , PNG
حداکثر حجم تا 5Mb`,
      },
      previewProps: {
        ...m.previewProps,
        exteraButton: { variant: 'secondary', children: 'عنوان', size: 'small' },
      },
    },
    render: (t) => e.jsx(ee, { ...t }),
  },
  U = (t) => {
    const [i, r] = v.useState([]);
    function a(s) {
      s && r((l) => [...l, { file: s }]);
    }
    function n(s) {
      r((l) => l.filter((o) => o !== s));
    }
    return e.jsx(F, {
      ...t,
      mode: 'multiple',
      files: i,
      onChange: a,
      previewProps: { ...t.previewProps, leftButton: { onClick: n } },
    });
  },
  C = {
    args: { ...m, mode: 'multiple', previewProps: { ...m.previewProps, type: 'grid' } },
    render: (t) => e.jsx(U, { ...t }),
  },
  P = {
    args: {
      ...m,
      mode: 'multiple',
      fileInputProps: {
        ...m.fileInputProps,
        description: `فرمت‌های قابل قبول JPG , PNG
حداکثر حجم تا 5Mb`,
      },
      previewProps: { ...m.previewProps, type: 'list' },
    },
    render: (t) => e.jsx(U, { ...t }),
  };
x.parameters = {
  ...x.parameters,
  docs: {
    ...x.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    ...defaultArgs,
    fileInputProps: {
      ...defaultArgs.fileInputProps,
      description: \`فرمت‌های قابل قبول JPG , PNG
حداکثر حجم تا 5Mb\`
    },
    previewProps: {
      ...defaultArgs.previewProps,
      exteraButton: {
        variant: 'secondary',
        children: 'عنوان',
        size: 'small'
      }
    }
  },
  render: args => <SingleFileInputExample {...args} />
}`,
      ...x.parameters?.docs?.source,
    },
  },
};
C.parameters = {
  ...C.parameters,
  docs: {
    ...C.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(defaultArgs as any),
    mode: 'multiple',
    previewProps: {
      ...defaultArgs.previewProps,
      type: 'grid'
    }
  },
  render: args => <MultipleFileInputExample {...args} />
}`,
      ...C.parameters?.docs?.source,
    },
  },
};
P.parameters = {
  ...P.parameters,
  docs: {
    ...P.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(defaultArgs as any),
    mode: 'multiple',
    fileInputProps: {
      ...defaultArgs.fileInputProps,
      description: \`فرمت‌های قابل قبول JPG , PNG
حداکثر حجم تا 5Mb\`
    },
    previewProps: {
      ...defaultArgs.previewProps,
      type: 'list'
    }
  },
  render: args => <MultipleFileInputExample {...args} />
}`,
      ...P.parameters?.docs?.source,
    },
  },
};
const pe = ['Default', 'MultipleGrid', 'MultipleList'];
export {
  x as Default,
  C as MultipleGrid,
  P as MultipleList,
  pe as __namedExportsOrder,
  ue as default,
};
