'use client';
import { j as e } from './jsx-runtime-DEdD30eg.js';
import { r as k, R as x } from './index-RYns6xqu.js';
import { c as l } from './clsx-B-dksMZM.js';
import { Q as f } from './QuestionMarkCircle-DJx5pZyZ.js';
const T = (t) => typeof t > 'u' || t === null,
  S = k.createContext({ activeStep: 1, stepOrientation: 'horizontal', size: 'medium' }),
  v = () => {
    const t = k.useContext(S);
    if (!t) throw new Error('useStepperContext must be used within a StepperProvider');
    return t;
  },
  h = (t, i) => (t === i ? 'current' : t > i ? 'active' : 'inactive'),
  C = {
    active: 'dgs-ui-kit-bg-teal-500 dgs-ui-kit-opacity-100',
    current: 'dgs-ui-kit-bg-gray-300 dgs-ui-kit-opacity-75',
    inactive: 'dgs-ui-kit-bg-gray-200 dgs-ui-kit-opacity-50',
  },
  z = ({ index: t }) => {
    const { activeStep: i, stepOrientation: s } = v(),
      r = h(i, t - 1);
    return e.jsx('div', {
      className: l(
        'dgs-ui-kit-flex dgs-ui-kit-min-w-5 dgs-ui-kit-items-center dgs-ui-kit-w-full',
        s === 'vertical' ? 'dgs-ui-kit-h-10' : 'dgs-ui-kit-h-15',
      ),
      children: e.jsx('div', {
        className: l('dgs-ui-kit-h-0.5 dgs-ui-kit-w-full dgs-ui-kit-rounded-md', C[r]),
      }),
    });
  };
z.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Connector',
  props: { index: { required: !0, tsType: { name: 'number' }, description: '' } },
};
const w = {
    active: 'dgs-ui-kit-text-secondary-400 dgs-ui-kit-rounded-lg',
    current: 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-text-primary-400 dgs-ui-kit-rounded-lg',
    inactive: 'dgs-ui-kit-bg-gray-50 dgs-ui-kit-text-gray-400 dgs-ui-kit-rounded-lg',
  },
  N = {
    medium: 'dgs-ui-kit-w-10 dgs-ui-kit-h-10 dgs-ui-kit-text-xl',
    small: 'dgs-ui-kit-w-10 dgs-ui-kit-h-10 dgs-ui-kit-text-lg',
  },
  b = (t) => {
    const { status: i, icon: s, activeIcon: r } = t,
      { size: o } = v(),
      n = i === 'current' ? (r ?? s) : s,
      a = l(
        w[i],
        N[o],
        'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-min-w-10',
      );
    return e.jsx('div', { className: a, children: n });
  };
b.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'StepIcon',
  props: {
    status: {
      required: !0,
      tsType: {
        name: 'union',
        raw: "'active' | 'inactive' | 'current'",
        elements: [
          { name: 'literal', value: "'active'" },
          { name: 'literal', value: "'inactive'" },
          { name: 'literal', value: "'current'" },
        ],
      },
      description: '',
    },
    icon: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    activeIcon: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
  },
};
const I = {
    active: 'dgs-ui-kit-text-secondary-500',
    current: 'dgs-ui-kit-text-primary-500 dgs-ui-kit-font-medium dgs-ui-kit-font-semibold',
    inactive: 'dgs-ui-kit-text-gray-400',
  },
  H = { small: 'dgs-ui-kit-text-sm', medium: 'dgs-ui-kit-text-base' },
  q = {
    horizontal: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2',
    vertical: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2 dgs-ui-kit-flex-col',
  },
  u = (t) => {
    const { index: i, title: s, subTitle: r, icon: o, activeIcon: d } = t,
      n = k.useRef(null),
      { size: a, activeStep: c, stepOrientation: p } = v();
    if (T(i))
      throw new Error(
        `expected index to be a number but instead got: ${i}, you are probably rendering <Step /> component outside of <Stepper />`,
      );
    const m = h(c, i),
      j = l('dgs-ui-kit-flex dgs-ui-kit-flex-grow dgs-ui-kit-min-w-max', I[m], H[a], q[p]);
    return (
      k.useEffect(() => {
        m === 'current' &&
          n.current?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }, [m]),
      e.jsxs(e.Fragment, {
        children: [
          i !== 0 && e.jsx(z, { index: i }),
          e.jsxs('div', {
            className: j,
            ref: n,
            children: [
              e.jsx(b, { status: m, icon: o, activeIcon: d }),
              e.jsxs('div', {
                className: l(
                  'dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-gap-1 dgs-ui-kit-mt-0',
                  p === 'vertical' && 'dgs-ui-kit-items-center',
                ),
                children: [
                  i === c &&
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
u.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'HorizontalStep',
  props: {
    title: { required: !0, tsType: { name: 'string' }, description: '' },
    subTitle: { required: !1, tsType: { name: 'string' }, description: '' },
    icon: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    activeIcon: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    index: { required: !1, tsType: { name: 'number' }, description: '' },
  },
};
const y = (t) => {
  const {
      stepOrientation: i = 'horizontal',
      size: s = 'medium',
      activeStep: r = 0,
      children: o,
    } = t,
    d = x.Children.toArray(o).filter(x.isValidElement),
    n = r ?? 0,
    a = d.map((c, p) => x.cloneElement(c, { index: p, ...c.props }));
  return e.jsx(S.Provider, {
    value: { activeStep: n, stepOrientation: i, size: s },
    children: e.jsx('div', {
      className:
        'dgs-ui-kit-flex dgs-ui-kit-justify-center dgs-ui-kit-flex-row dgs-ui-kit-gap-5 no-scrollbar dgs-ui-kit-overflow-x-auto',
      children: a,
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
  },
};
const R = {
    title: 'Components/Stepper/Horizontal',
    component: y,
    subcomponents: { Step: u },
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
      e.jsxs(y, {
        ...t,
        children: [
          e.jsx(u, { title: 'آیتم اول', subTitle: 'مرحله ۱ از ۳', icon: e.jsx(f, {}) }),
          e.jsx(u, { title: 'آیتم دوم', subTitle: 'مرحله ۲ از ۳', icon: e.jsx(f, {}) }),
          e.jsx(u, { title: 'آیتم سوم', subTitle: 'مرحله پایانی', icon: e.jsx(f, {}) }),
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
      <HorizontalStep title="آیتم اول" subTitle="مرحله ۱ از ۳" icon={<QuestionMarkCircle />} />\r
      <HorizontalStep title="آیتم دوم" subTitle="مرحله ۲ از ۳" icon={<QuestionMarkCircle />} />\r
      <HorizontalStep title="آیتم سوم" subTitle="مرحله پایانی" icon={<QuestionMarkCircle />} />\r
    </HorizontalStepper>
}`,
      ...g.parameters?.docs?.source,
    },
  },
};
const Q = ['Default'];
export { g as Default, Q as __namedExportsOrder, R as default };
