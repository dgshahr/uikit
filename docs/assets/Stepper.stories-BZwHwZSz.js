'use client';
import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as v, R as I } from './index-DatCARk7.js';
import { c as r } from './clsx-B-dksMZM.js';
import { I as k } from './IconCheckCircleBold-EXAR5RF5.js';
import { I as f } from './IconQuestionMarkCircle-BuJs7Hhg.js';
const M = (t) => typeof t > 'u' || t === null,
  j = v.createContext({ activeStep: 1, stepOrientation: 'horizontal', size: 'medium' }),
  T = () => {
    const t = v.useContext(j);
    if (!t) throw new Error('useStepperContext must be used within a StepperProvider');
    return t;
  },
  z = (t, i) => (t === i ? 'current' : t > i ? 'complete' : 'incomplete'),
  R = {
    complete: 'dgs-ui-kit-bg-teal-500 dgs-ui-kit-opacity-100',
    current: 'dgs-ui-kit-bg-gray-300 dgs-ui-kit-opacity-75',
    incomplete: 'dgs-ui-kit-bg-gray-200 dgs-ui-kit-opacity-50',
  },
  b = ({ index: t }) => {
    const { activeStep: i, stepOrientation: n } = T(),
      s = z(i, t - 1);
    return e.jsx('div', {
      className: r(
        'dgs-ui-kit-flex dgs-ui-kit-min-w-5 dgs-ui-kit-items-center dgs-ui-kit-w-full',
        n === 'vertical' ? 'dgs-ui-kit-h-10' : 'dgs-ui-kit-h-15',
      ),
      children: e.jsx('div', {
        className: r('dgs-ui-kit-h-0.5 dgs-ui-kit-w-full dgs-ui-kit-rounded-md', R[s]),
      }),
    });
  };
b.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Connector',
  props: { index: { required: !0, tsType: { name: 'number' }, description: '' } },
};
const _ = {
    complete: 'dgs-ui-kit-text-secondary-400 dgs-ui-kit-rounded-lg',
    current: 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-text-primary-400 dgs-ui-kit-rounded-lg',
    incomplete: 'dgs-ui-kit-bg-gray-50 dgs-ui-kit-text-gray-400 dgs-ui-kit-rounded-lg',
  },
  O = {
    medium: 'dgs-ui-kit-w-10 dgs-ui-kit-h-10 dgs-ui-kit-text-xl',
    small: 'dgs-ui-kit-w-10 dgs-ui-kit-h-10 dgs-ui-kit-text-lg',
  },
  w = (t) => {
    const { status: i, icon: n, activeIcon: s, completeIcon: c } = t,
      { size: a } = T(),
      l = { incomplete: n, current: s, complete: c }[i] ?? n,
      p = r(
        _[i],
        O[a],
        'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-min-w-10',
      );
    return e.jsx('div', { className: p, children: l });
  };
w.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'StepIcon',
  props: {
    status: {
      required: !0,
      tsType: {
        name: 'union',
        raw: "'complete' | 'incomplete' | 'current'",
        elements: [
          { name: 'literal', value: "'complete'" },
          { name: 'literal', value: "'incomplete'" },
          { name: 'literal', value: "'current'" },
        ],
      },
      description: '',
    },
    icon: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    activeIcon: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    completeIcon: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
  },
};
const A = {
    complete: 'dgs-ui-kit-text-secondary-500',
    current: 'dgs-ui-kit-text-primary-500 dgs-ui-kit-font-medium dgs-ui-kit-font-semibold',
    incomplete: 'dgs-ui-kit-text-gray-400',
  },
  E = { small: 'dgs-ui-kit-text-sm', medium: 'dgs-ui-kit-text-base' },
  B = {
    horizontal: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2',
    vertical: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2 dgs-ui-kit-flex-col',
  },
  o = (t) => {
    const {
        index: i,
        title: n,
        activeTitle: s,
        completeTitle: c,
        subTitle: a,
        icon: m,
        activeIcon: l,
        completeIcon: p,
        classname: g,
      } = t,
      x = v.useRef(null),
      { size: N, activeStep: S, stepOrientation: C } = T();
    if (M(i))
      throw new Error(
        `expected index to be a number but instead got: ${i}, you are probably rendering <Step /> component outside of <Stepper />`,
      );
    const d = z(S, i),
      q = { current: s, incomplete: n, complete: c }[d] ?? n,
      H = r('dgs-ui-kit-flex dgs-ui-kit-flex-grow dgs-ui-kit-min-w-max', g, A[d], E[N], B[C]);
    return (
      v.useEffect(() => {
        d === 'current' &&
          x.current?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }, [d]),
      e.jsxs(e.Fragment, {
        children: [
          i !== 0 && e.jsx(b, { index: i }),
          e.jsxs('div', {
            className: H,
            ref: x,
            children: [
              e.jsx(w, { status: d, icon: m, activeIcon: l, completeIcon: p }),
              e.jsxs('div', {
                className: r(
                  'dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-gap-1 dgs-ui-kit-mt-0',
                  C === 'vertical' && 'dgs-ui-kit-items-center',
                ),
                children: [
                  i === S &&
                    e.jsx('p', {
                      className: 'dgs-ui-kit-font-normal dgs-ui-kit-text-gray-400',
                      children: a,
                    }),
                  e.jsx('p', { className: 'dgs-ui-kit-text-center', children: q }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  };
o.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'HorizontalStep',
  props: {
    title: { required: !0, tsType: { name: 'string' }, description: '' },
    activeTitle: { required: !1, tsType: { name: 'string' }, description: '' },
    completeTitle: { required: !1, tsType: { name: 'string' }, description: '' },
    subTitle: { required: !1, tsType: { name: 'string' }, description: '' },
    icon: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    completeIcon: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    activeIcon: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    index: { required: !1, tsType: { name: 'number' }, description: '' },
    classname: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
const y = (t) => {
  const {
      stepOrientation: i = 'horizontal',
      size: n = 'medium',
      activeStep: s = 0,
      children: c,
      classname: a,
    } = t,
    m = I.Children.toArray(c).filter(I.isValidElement),
    l = s ?? 0,
    p = m.map((g, x) => I.cloneElement(g, { index: x, ...g.props }));
  return e.jsx(j.Provider, {
    value: { activeStep: l, stepOrientation: i, size: n },
    children: e.jsx('div', {
      className: r(
        a,
        'dgs-ui-kit-flex dgs-ui-kit-flex-row dgs-ui-kit-gap-5 no-scrollbar dgs-ui-kit-overflow-x-auto',
      ),
      children: p,
    }),
  });
};
y.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'HorizontalStepper',
  props: {
    stepOrientation: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'vertical' | 'horizontal'",
        elements: [
          { name: 'literal', value: "'vertical'" },
          { name: 'literal', value: "'horizontal'" },
        ],
      },
      description: '',
    },
    size: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'small' | 'medium'",
        elements: [
          { name: 'literal', value: "'small'" },
          { name: 'literal', value: "'medium'" },
        ],
      },
      description: '',
    },
    activeStep: { required: !1, tsType: { name: 'number' }, description: '' },
    classname: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
const u = (t) =>
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
      d: 'M3.75 5.766a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m0 9.333a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75M6.418 10.43a.75.75 0 0 1 .75-.75h10.667a.75.75 0 0 1 0 1.5H7.168a.75.75 0 0 1-.75-.75m0 9.334a.75.75 0 0 1 .75-.75h10.667a.75.75 0 0 1 0 1.5H7.168a.75.75 0 0 1-.75-.75',
      clipRule: 'evenodd',
    }),
  });
u.__docgenInfo = { description: '', methods: [], displayName: 'IconAlignCenter' };
const G = {
    title: 'Components/Stepper/Horizontal',
    component: y,
    subcomponents: { Step: o },
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport { HorizontalStepper, HorizontalStep } from '@dgshahr/ui-kit/Stepper/Horizontal';\nOr\nimport { HorizontalStepper, HorizontalStep } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      activeStep: { control: { type: 'number', min: 0, max: 3 } },
      stepOrientation: { control: { type: 'radio' }, options: ['horizontal', 'vertical'] },
      size: { control: { type: 'radio' }, options: ['small', 'medium'] },
    },
  },
  h = {
    args: { activeStep: 1, stepOrientation: 'horizontal', size: 'medium' },
    render: (t) =>
      e.jsxs(y, {
        ...t,
        children: [
          e.jsx(o, {
            title: 'آیتم اول',
            activeTitle: 'آیتم انتخاب شده',
            completeTitle: 'مرحله تمام شده',
            subTitle: 'مرحله ۱ از ۴',
            icon: e.jsx(f, {}),
            activeIcon: e.jsx(u, {}),
            completeIcon: e.jsx(k, {}),
          }),
          e.jsx(o, {
            title: 'آیتم دوم',
            activeTitle: 'آیتم انتخاب شده',
            completeTitle: 'مرحله تمام شده',
            subTitle: 'مرحله ۲ از ۴',
            icon: e.jsx(f, {}),
            activeIcon: e.jsx(u, {}),
            completeIcon: e.jsx(k, {}),
          }),
          e.jsx(o, {
            title: 'آیتم سوم',
            activeTitle: 'آیتم انتخاب شده',
            completeTitle: 'مرحله تمام شده',
            subTitle: 'مرحله ۳ از ۴',
            icon: e.jsx(f, {}),
            activeIcon: e.jsx(u, {}),
            completeIcon: e.jsx(k, {}),
          }),
          e.jsx(o, {
            title: 'آیتم چهارم',
            activeTitle: 'آیتم انتخاب شده',
            completeTitle: 'مرحله تمام شده',
            subTitle: 'مرحله پایانی',
            icon: e.jsx(f, {}),
            activeIcon: e.jsx(u, {}),
            completeIcon: e.jsx(k, {}),
          }),
        ],
      }),
  };
h.parameters = {
  ...h.parameters,
  docs: {
    ...h.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    activeStep: 1,
    stepOrientation: 'horizontal',
    size: 'medium'
  },
  render: args => <HorizontalStepper {...args}>\r
      <HorizontalStep title="آیتم اول" activeTitle="آیتم انتخاب شده" completeTitle="مرحله تمام شده" subTitle="مرحله ۱ از ۴" icon={<IconQuestionMarkCircle />} activeIcon={<IconAlignCenter />} completeIcon={<IconCheckCircleBold />} />\r
      <HorizontalStep title="آیتم دوم" activeTitle="آیتم انتخاب شده" completeTitle="مرحله تمام شده" subTitle="مرحله ۲ از ۴" icon={<IconQuestionMarkCircle />} activeIcon={<IconAlignCenter />} completeIcon={<IconCheckCircleBold />} />\r
      <HorizontalStep title="آیتم سوم" activeTitle="آیتم انتخاب شده" completeTitle="مرحله تمام شده" subTitle="مرحله ۳ از ۴" icon={<IconQuestionMarkCircle />} activeIcon={<IconAlignCenter />} completeIcon={<IconCheckCircleBold />} />\r
      <HorizontalStep title="آیتم چهارم" activeTitle="آیتم انتخاب شده" completeTitle="مرحله تمام شده" subTitle="مرحله پایانی" icon={<IconQuestionMarkCircle />} activeIcon={<IconAlignCenter />} completeIcon={<IconCheckCircleBold />} />\r
    </HorizontalStepper>
}`,
      ...h.parameters?.docs?.source,
    },
  },
};
const J = ['Default'];
export { h as Default, J as __namedExportsOrder, G as default };
