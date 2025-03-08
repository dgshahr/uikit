'use client';
import { j as e } from './jsx-runtime-DEdD30eg.js';
import { r as k, R as x } from './index-RYns6xqu.js';
import { c as d } from './clsx-B-dksMZM.js';
import { A as I } from './ArrowDown2-BROvoNUr.js';
import { Q as f } from './QuestionMarkCircle-DJx5pZyZ.js';
const T = (t) => typeof t > 'u' || t === null,
  v = k.createContext({ activeStep: 1, stepOrientation: 'horizontal', size: 'medium' }),
  y = () => {
    const t = k.useContext(v);
    if (!t) throw new Error('useStepperContext must be used within a StepperProvider');
    return t;
  },
  z = (t, i) => (t === i ? 'current' : t > i ? 'complete' : 'incomplete'),
  C = {
    complete: 'dgs-ui-kit-bg-teal-500 dgs-ui-kit-opacity-100',
    current: 'dgs-ui-kit-bg-gray-300 dgs-ui-kit-opacity-75',
    incomplete: 'dgs-ui-kit-bg-gray-200 dgs-ui-kit-opacity-50',
  },
  b = ({ index: t }) => {
    const { activeStep: i, stepOrientation: s } = y(),
      r = z(i, t - 1);
    return e.jsx('div', {
      className: d(
        'dgs-ui-kit-flex dgs-ui-kit-min-w-5 dgs-ui-kit-items-center dgs-ui-kit-w-full',
        s === 'vertical' ? 'dgs-ui-kit-h-10' : 'dgs-ui-kit-h-15',
      ),
      children: e.jsx('div', {
        className: d('dgs-ui-kit-h-0.5 dgs-ui-kit-w-full dgs-ui-kit-rounded-md', C[r]),
      }),
    });
  };
b.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Connector',
  props: { index: { required: !0, tsType: { name: 'number' }, description: '' } },
};
const N = {
    complete: 'dgs-ui-kit-text-secondary-400 dgs-ui-kit-rounded-lg',
    current: 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-text-primary-400 dgs-ui-kit-rounded-lg',
    incomplete: 'dgs-ui-kit-bg-gray-50 dgs-ui-kit-text-gray-400 dgs-ui-kit-rounded-lg',
  },
  H = {
    medium: 'dgs-ui-kit-w-10 dgs-ui-kit-h-10 dgs-ui-kit-text-xl',
    small: 'dgs-ui-kit-w-10 dgs-ui-kit-h-10 dgs-ui-kit-text-lg',
  },
  j = (t) => {
    const { status: i, icon: s, activeIcon: r, completeIcon: a } = t,
      { size: c } = y(),
      n = { incomplete: s, current: r, complete: a }[i] ?? s,
      o = d(
        N[i],
        H[c],
        'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-min-w-10',
      );
    return e.jsx('div', { className: o, children: n });
  };
j.__docgenInfo = {
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
const q = {
    complete: 'dgs-ui-kit-text-secondary-500',
    current: 'dgs-ui-kit-text-primary-500 dgs-ui-kit-font-medium dgs-ui-kit-font-semibold',
    incomplete: 'dgs-ui-kit-text-gray-400',
  },
  M = { small: 'dgs-ui-kit-text-sm', medium: 'dgs-ui-kit-text-base' },
  O = {
    horizontal: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2',
    vertical: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2 dgs-ui-kit-flex-col',
  },
  l = (t) => {
    const { index: i, title: s, subTitle: r, icon: a, activeIcon: c, completeIcon: p } = t,
      n = k.useRef(null),
      { size: o, activeStep: u, stepOrientation: h } = y();
    if (T(i))
      throw new Error(
        `expected index to be a number but instead got: ${i}, you are probably rendering <Step /> component outside of <Stepper />`,
      );
    const m = z(u, i),
      w = d('dgs-ui-kit-flex dgs-ui-kit-flex-grow dgs-ui-kit-min-w-max', q[m], M[o], O[h]);
    return (
      k.useEffect(() => {
        m === 'current' &&
          n.current?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }, [m]),
      e.jsxs(e.Fragment, {
        children: [
          i !== 0 && e.jsx(b, { index: i }),
          e.jsxs('div', {
            className: w,
            ref: n,
            children: [
              e.jsx(j, { status: m, icon: a, activeIcon: c, completeIcon: p }),
              e.jsxs('div', {
                className: d(
                  'dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-gap-1 dgs-ui-kit-mt-0',
                  h === 'vertical' && 'dgs-ui-kit-items-center',
                ),
                children: [
                  i === u &&
                    e.jsx('p', {
                      className: 'dgs-ui-kit-font-normal dgs-ui-kit-text-gray-400',
                      children: r,
                    }),
                  e.jsx('p', { className: 'dgs-ui-kit-text-center', children: s }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  };
l.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'HorizontalStep',
  props: {
    title: { required: !0, tsType: { name: 'string' }, description: '' },
    subTitle: { required: !1, tsType: { name: 'string' }, description: '' },
    icon: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    completeIcon: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    activeIcon: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    index: { required: !1, tsType: { name: 'number' }, description: '' },
  },
};
const S = (t) => {
  const {
      stepOrientation: i = 'horizontal',
      size: s = 'medium',
      activeStep: r = 0,
      children: a,
    } = t,
    c = x.Children.toArray(a).filter(x.isValidElement),
    p = r ?? 0,
    n = c.map((o, u) => x.cloneElement(o, { index: u, ...o.props }));
  return e.jsx(v.Provider, {
    value: { activeStep: p, stepOrientation: i, size: s },
    children: e.jsx('div', {
      className:
        'dgs-ui-kit-flex dgs-ui-kit-justify-center dgs-ui-kit-flex-row dgs-ui-kit-gap-5 no-scrollbar dgs-ui-kit-overflow-x-auto',
      children: n,
    }),
  });
};
S.__docgenInfo = {
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
  },
};
const D = {
    title: 'Components/Stepper/Horizontal',
    component: S,
    subcomponents: { Step: l },
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport { HorizontalStepper, HorizontalStep } from '@dgshahr/ui-kit/Stepper/Horizontal';\nOr\nimport { HorizontalStepper, HorizontalStep } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      activeStep: { control: { type: 'number', min: 0, max: 2 } },
      stepOrientation: { control: { type: 'radio' }, options: ['horizontal', 'vertical'] },
      size: { control: { type: 'radio' }, options: ['small', 'medium'] },
    },
  },
  g = {
    args: { activeStep: 1, stepOrientation: 'horizontal', size: 'medium' },
    render: (t) =>
      e.jsxs(S, {
        ...t,
        children: [
          e.jsx(l, {
            title: 'آیتم اول',
            subTitle: 'مرحله ۱ از ۳',
            icon: e.jsx(f, {}),
            completeIcon: e.jsx(I, {}),
          }),
          e.jsx(l, { title: 'آیتم دوم', subTitle: 'مرحله ۲ از ۳', icon: e.jsx(f, {}) }),
          e.jsx(l, { title: 'آیتم سوم', subTitle: 'مرحله پایانی', icon: e.jsx(f, {}) }),
        ],
      }),
  };
g.parameters = {
  ...g.parameters,
  docs: {
    ...g.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    activeStep: 1,
    stepOrientation: 'horizontal',
    size: 'medium'
  },
  render: args => <HorizontalStepper {...args}>\r
      <HorizontalStep title="آیتم اول" subTitle="مرحله ۱ از ۳" icon={<QuestionMarkCircle />} completeIcon={<ArrowDown2 />} />\r
      <HorizontalStep title="آیتم دوم" subTitle="مرحله ۲ از ۳" icon={<QuestionMarkCircle />} />\r
      <HorizontalStep title="آیتم سوم" subTitle="مرحله پایانی" icon={<QuestionMarkCircle />} />\r
    </HorizontalStepper>
}`,
      ...g.parameters?.docs?.source,
    },
  },
};
const P = ['Default'];
export { g as Default, P as __namedExportsOrder, D as default };
