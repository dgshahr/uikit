'use client';
import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as v, R as I } from './index-CTzypqlY.js';
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
    complete: 'dgsuikit:bg-teal-500 dgsuikit:opacity-100',
    current: 'dgsuikit:bg-gray-300 dgsuikit:opacity-75',
    incomplete: 'dgsuikit:bg-gray-200 dgsuikit:opacity-50',
  },
  b = ({ index: t }) => {
    const { activeStep: i, stepOrientation: n } = T(),
      s = z(i, t - 1);
    return e.jsx('div', {
      className: r(
        'dgsuikit:flex dgsuikit:min-w-5 dgsuikit:items-center dgsuikit:w-full',
        n === 'vertical' ? 'dgsuikit:h-10' : 'dgsuikit:h-15',
      ),
      children: e.jsx('div', {
        className: r('dgsuikit:h-0.5 dgsuikit:w-full dgsuikit:rounded-md', R[s]),
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
    complete: 'dgsuikit:text-secondary-400 dgsuikit:rounded-lg',
    current: 'dgsuikit:bg-primary-50 dgsuikit:text-primary-400 dgsuikit:rounded-lg',
    incomplete: 'dgsuikit:bg-gray-50 dgsuikit:text-gray-400 dgsuikit:rounded-lg',
  },
  O = {
    medium: 'dgsuikit:w-10 dgsuikit:h-10 dgsuikit:text-xl',
    small: 'dgsuikit:w-10 dgsuikit:h-10 dgsuikit:text-lg',
  },
  w = (t) => {
    const { status: i, icon: n, activeIcon: s, completeIcon: c } = t,
      { size: a } = T(),
      l = { incomplete: n, current: s, complete: c }[i] ?? n,
      p = r(
        _[i],
        O[a],
        'dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:min-w-10',
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
    complete: 'dgsuikit:text-secondary-500',
    current: 'dgsuikit:text-primary-500 dgsuikit:font-medium dgsuikit:font-semibold',
    incomplete: 'dgsuikit:text-gray-400',
  },
  E = { small: 'dgsuikit:text-sm', medium: 'dgsuikit:text-base' },
  B = {
    horizontal: 'dgsuikit:flex dgsuikit:items-center dgsuikit:gap-2',
    vertical: 'dgsuikit:flex dgsuikit:items-center dgsuikit:gap-2 dgsuikit:flex-col',
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
      H = r('dgsuikit:flex dgsuikit:flex-grow dgsuikit:min-w-max', g, A[d], E[N], B[C]);
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
                  'dgsuikit:flex dgsuikit:flex-col dgsuikit:gap-1 dgsuikit:mt-0',
                  C === 'vertical' && 'dgsuikit:items-center',
                ),
                children: [
                  i === S &&
                    e.jsx('p', {
                      className: 'dgsuikit:font-normal dgsuikit:text-gray-400',
                      children: a,
                    }),
                  e.jsx('p', { className: 'dgsuikit:text-center', children: q }),
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
        'dgsuikit:flex dgsuikit:flex-row dgsuikit:gap-5 dgsuikit:no-scrollbar dgsuikit:overflow-x-auto',
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
