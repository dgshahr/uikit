'use client';
import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as s } from './index-D1sGr8oY.js';
import { c as f } from './clsx-B-dksMZM.js';
import { i as I } from './isBrowser-CEYOmsdG.js';
import { I as X } from './IconArrowLeft2-DI3fgQDw.js';
import { I as $ } from './IconArrowRight2-C2yC-io_.js';
import { B as R } from './index-Dxb_EEwq.js';
/* empty css               */ const E = s.createContext({
    slidesPerView: 1,
    spaceBetween: 0,
    navigationVariant: 'outside',
    showNavigationDots: !0,
    showPaginationText: !1,
    childrenCount: 0,
    sliderId: '',
  }),
  V = () => s.useContext(E);
function H({ active: i, autoplay: t, variant: r = 'outside' }) {
  return [
    {
      inside: 'dgsuikit:bg-gray-500/50 dgsuikit:hover:bg-gray-500/80',
      outside: 'dgsuikit:bg-gray-200 dgsuikit:hover:bg-gray-300',
    }[r],
    i ? 'dgsuikit:w-[22px]' : 'dgsuikit:w-[6px]',
    t ? 'dgsuikit:p-[1px]' : '',
  ];
}
const O = (i) => {
  const { active: t, onClick: r, onNavigateToNext: d, index: n } = i,
    { autoplay: l, navigationVariant: h = 'outside' } = V(),
    [u, c] = s.useState(0);
  return (
    s.useEffect(() => {
      if (!t || !l) return;
      const y = typeof l == 'boolean' ? 7e3 : (l?.delay ?? 7e3);
      let v = Date.now();
      const o = setInterval(() => {
        const m = Date.now() - v,
          p = (m / y) * 100;
        (c(Math.min(p, 100)), m >= y && typeof d == 'function' && (d(), c(0), clearInterval(o)));
      }, 100);
      return function () {
        return (c(0), (v = Date.now()), clearInterval(o));
      };
    }, [t, l, d]),
    e.jsx('button', {
      className: f(
        'dgsuikit:rounded-full dgsuikit:overflow-hidden dgsuikit:transition-all dgsuikit:h-[6px]',
        H({ active: t, autoplay: l, variant: h }),
      ),
      onClick: r,
      'aria-label': `slider-navigation-dot-${n + 1}`,
      children:
        t &&
        e.jsx('div', {
          className: f('dgsuikit:h-full dgsuikit:rounded-full', {
            'dgsuikit:bg-white': h === 'inside',
            'dgsuikit:bg-gray-700': h === 'outside',
          }),
          style: { width: l ? `${u}%` : '100%' },
        }),
    })
  );
};
O.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'NavigationDot',
  props: {
    active: { required: !0, tsType: { name: 'boolean' }, description: '' },
    index: { required: !0, tsType: { name: 'number' }, description: '' },
    onClick: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    onNavigateToNext: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
  },
};
const _ = 'dgsuikit:opacity-0 dgsuikit:group-hover:opacity-100 dgsuikit:transition-opacity',
  A = (i) => {
    const { onNavigate: t, slideIndex: r, slidesCount: d } = i,
      {
        navigationButtonsShowType: n = 'hide',
        dotsClassName: l,
        navigationContainerClassName: h,
        navigationVariant: u = 'outside',
        showNavigationDots: c = !0,
        showPaginationText: y,
      } = V(),
      v = () => {
        const o = f('dgsuikit:!absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2', _);
        return e.jsxs(e.Fragment, {
          children: [
            e.jsx(R, {
              type: 'button',
              variant: 'secondary',
              onClick: () => t(r - 1),
              rightIcon: e.jsx($, {}),
              'aria-label': 'slider-previous-button',
              className: n === 'onSides' ? f(o, 'dgsuikit:right-[5.5%]') : void 0,
            }),
            e.jsx(R, {
              type: 'button',
              variant: 'secondary',
              onClick: () => t(r + 1),
              rightIcon: e.jsx(X, {}),
              'aria-label': 'slider-next-button',
              className: n === 'onSides' ? f(o, 'dgsuikit:left-[5.5%]') : void 0,
            }),
          ],
        });
      };
    return e.jsxs(e.Fragment, {
      children: [
        n && n !== 'hide' && n === 'onSides' && v(),
        e.jsxs('div', {
          className: f(
            'dgsuikit:flex',
            {
              'dgsuikit:items-center dgsuikit:mt-2': u === 'outside',
              'dgsuikit:absolute dgsuikit:bottom-4 dgsuikit:w-full dgsuikit:justify-center':
                u === 'inside',
              'dgsuikit:justify-between': u === 'outside' && n !== 'hide' && n !== 'onSides',
              'dgsuikit:justify-center': u === 'outside' && (n === 'hide' || n === 'onSides'),
            },
            h,
          ),
          children: [
            n &&
              n !== 'hide' &&
              n !== 'onSides' &&
              e.jsx('div', {
                className: f(
                  'dgsuikit:flex dgsuikit:gap-2',
                  n === 'hover' && _,
                  u === 'inside' && 'dgsuikit:absolute dgsuikit:bottom-0 dgsuikit:left-[5.5%]',
                ),
                children: v(),
              }),
            (c || y) &&
              e.jsxs('div', {
                className: 'dgsuikit:flex dgsuikit:items-center dgsuikit:gap-3',
                children: [
                  y &&
                    e.jsxs('div', {
                      className:
                        'dgsuikit:flex dgsuikit:items-center dgsuikit:gap-1 dgsuikit:font-caption-regular dgsuikit:text-gray-400 dgsuikit:ss02',
                      children: [
                        e.jsx('span', {
                          className: f('dgsuikit:font-bold', {
                            'dgsuikit:text-gray-600': u === 'outside',
                            'dgsuikit:text-white': u === 'inside',
                          }),
                          children: r + 1,
                        }),
                        e.jsx('span', { children: 'از' }),
                        e.jsx('span', { children: d }),
                      ],
                    }),
                  c &&
                    e.jsx('div', {
                      className: f(
                        'dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:gap-2',
                        l,
                      ),
                      children: Array.from(Array(d).keys()).map((o, m) =>
                        e.jsx(
                          O,
                          {
                            active: r === m,
                            index: m,
                            onClick: () => t(m),
                            onNavigateToNext: () => t(r + 1),
                          },
                          o + d,
                        ),
                      ),
                    }),
                ],
              }),
          ],
        }),
      ],
    });
  };
A.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Navigation',
  props: {
    onNavigate: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(slide: number) => void',
        signature: {
          arguments: [{ type: { name: 'number' }, name: 'slide' }],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    slideIndex: { required: !0, tsType: { name: 'number' }, description: '' },
    slidesCount: { required: !0, tsType: { name: 'number' }, description: '' },
  },
};
const q = s.forwardRef((i, t) => {
  const [r, d] = s.useState(i),
    {
      className: n = '',
      containerClassName: l = '',
      showNavigationDots: h = !0,
      slidesPerView: u = 1,
      navigationButtonsShowType: c = 'hide',
      spaceBetween: y = 0,
      showPaginationText: v,
      onSlideIndexChange: o,
      initialSlide: m,
      containerXPadding: p = 0,
    } = r,
    [N, C] = s.useState(0),
    [B, L] = s.useState(0),
    M = Object.fromEntries(Object.entries(r).filter(([a]) => a !== 'children')),
    g = s.useRef(null),
    b = Math.ceil(B / Math.floor(u)),
    W = (h || (c && c !== 'hide') || v) && b > 1;
  function F(a) {
    if (
      Math.ceil(Math.abs(a.currentTarget.scrollLeft)) + a.currentTarget.clientWidth + 1 + p >=
      a.currentTarget.scrollWidth
    ) {
      C(b - 1);
      return;
    }
    const x = a.currentTarget.scrollWidth - p * 2,
      w = x / b,
      k = (x - a.currentTarget.scrollLeft - p) / w;
    if (k <= b) {
      C(0);
      return;
    }
    C(Math.round(k % b));
  }
  function T(a) {
    if (!g.current) return;
    const x = g.current.offsetWidth,
      w = N - a,
      k = g.current.scrollWidth / b,
      P = w * k;
    a < 0
      ? g.current.scrollTo({ behavior: 'smooth', left: -(x * b) })
      : a >= b
        ? g.current.scrollTo({ behavior: 'smooth', left: 0 })
        : g.current.scrollBy({ behavior: 'smooth', left: P });
  }
  function j() {
    if (!I()) return;
    const x = Object.keys(i.responsive)
        .sort((k, P) => Number(k) - Number(P))
        .findLast((k) => Number(k) <= window?.innerWidth),
      w = x ? i.responsive[Number(x)] : null;
    d(w ? { ...r, ...w } : i);
  }
  return (
    s.useImperativeHandle(t, () => ({
      element: g.current,
      navigate: (a) => T(Math.max(0, a - 1)),
    })),
    s.useEffect(() => {
      if (!g.current) return;
      let a = g.current.childElementCount;
      (p > 0 && (a -= 2), L(a));
    }, [i.children, g, p]),
    s.useEffect(() => {
      if (!(!i.responsive || Object.keys(i.responsive).length <= 0 || !I()))
        return (
          j(),
          window?.addEventListener('resize', j),
          () => {
            window?.removeEventListener('resize', j);
          }
        );
    }, [i.responsive]),
    s.useEffect(() => {
      o && typeof o == 'function' && o(N);
    }, [N]),
    s.useEffect(() => {
      typeof m == 'number' && g.current && T(Math.max(0, m - 1));
    }, [m, g.current]),
    e.jsx(E.Provider, {
      value: { ...M, childrenCount: B, sliderId: s.useId() },
      children: e.jsxs('div', {
        className: f('dgsuikit:overflow-hidden dgsuikit:relative dgsuikit:group', n),
        style: { direction: 'rtl' },
        children: [
          e.jsxs('div', {
            className: f(
              'dgsuikit:flex dgsuikit:snap-x dgsuikit:snap-mandatory dgsuikit:overflow-x-auto dgsuikit:no-scrollbar',
              l,
            ),
            style: { marginLeft: -y },
            onScroll: F,
            ref: g,
            children: [
              p > 0 &&
                e.jsx('div', {
                  className: 'dgsuikit:shrink-0',
                  style: { width: p, paddingLeft: y },
                }),
              i.children,
              p > 0 &&
                e.jsx('div', {
                  className: 'dgsuikit:shrink-0',
                  style: { width: p, paddingLeft: y },
                }),
            ],
          }),
          W && e.jsx(A, { onNavigate: T, slideIndex: N, slidesCount: b }),
        ],
      }),
    })
  );
});
q.displayName = 'Slider';
q.__docgenInfo = {
  description: '',
  methods: [
    {
      name: 'navigate',
      docblock: null,
      modifiers: [],
      params: [{ name: 'target', optional: !1, type: { name: 'number' } }],
      returns: null,
    },
  ],
  displayName: 'Slider',
  props: {
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    containerClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    showNavigationDots: { required: !1, tsType: { name: 'boolean' }, description: '' },
    dotsClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    slidesPerView: { required: !1, tsType: { name: 'number' }, description: '' },
    centerMode: { required: !1, tsType: { name: 'boolean' }, description: '' },
    autoplay: {
      required: !1,
      tsType: {
        name: 'union',
        raw: `| boolean
| {
    delay?: number | null;
  }`,
        elements: [
          { name: 'boolean' },
          {
            name: 'signature',
            type: 'object',
            raw: `{
  delay?: number | null;
}`,
            signature: {
              properties: [
                {
                  key: 'delay',
                  value: {
                    name: 'union',
                    raw: 'number | null',
                    elements: [{ name: 'number' }, { name: 'null' }],
                    required: !1,
                  },
                },
              ],
            },
          },
        ],
      },
      description: '',
    },
    spaceBetween: { required: !1, tsType: { name: 'number' }, description: '' },
    showPaginationText: { required: !1, tsType: { name: 'boolean' }, description: '' },
    navigationContainerClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    navigationVariant: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'inside' | 'outside'",
        elements: [
          { name: 'literal', value: "'inside'" },
          { name: 'literal', value: "'outside'" },
        ],
      },
      description: '',
    },
    navigationButtonsShowType: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'hide' | 'hover' | 'permanent' | 'onSides'",
        elements: [
          { name: 'literal', value: "'hide'" },
          { name: 'literal', value: "'hover'" },
          { name: 'literal', value: "'permanent'" },
          { name: 'literal', value: "'onSides'" },
        ],
      },
      description: '',
    },
    responsive: {
      required: !1,
      tsType: {
        name: 'Record',
        elements: [
          { name: 'number' },
          {
            name: 'Omit',
            elements: [{ name: 'SliderProps' }, { name: 'literal', value: "'responsive'" }],
            raw: "Omit<SliderProps, 'responsive'>",
          },
        ],
        raw: "Record<number, Omit<SliderProps, 'responsive'>>",
      },
      description: '',
    },
    containerXPadding: { required: !1, tsType: { name: 'number' }, description: '' },
    initialSlide: { required: !1, tsType: { name: 'number' }, description: '' },
    onSlideIndexChange: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(slideIndex: number) => void',
        signature: {
          arguments: [{ type: { name: 'number' }, name: 'slideIndex' }],
          return: { name: 'void' },
        },
      },
      description: '',
    },
  },
};
function K({
  slidesPerView: i,
  childIndex: t,
  centerMode: r,
  childrenCount: d,
  haveContainerPadding: n,
}) {
  const l = t % Math.floor(i) === 0,
    h = i % 1 !== 0,
    u = t === 0,
    c = t === d - 1;
  if (!l) return 'none';
  if (r) {
    if (h && !n) {
      if (u) return 'start';
      if (c) return 'end';
    }
    return 'center';
  }
  return 'start';
}
const D = (i) => {
  const { children: t, className: r, style: d, ...n } = i,
    {
      slidesPerView: l = 1,
      spaceBetween: h = 0,
      centerMode: u = !1,
      containerXPadding: c = 0,
      childrenCount: y = 0,
      sliderId: v,
    } = V(),
    o = s.useRef(null),
    [m, p] = s.useState(0);
  return (
    s.useEffect(() => {
      !o.current ||
        !I() ||
        p(
          Array.prototype.indexOf.call(
            document?.querySelectorAll(`[id='slide-item-${v}']`),
            o.current,
          ),
        );
    }, [o, y, c, v]),
    e.jsx('div', {
      ...n,
      ref: o,
      id: `slide-item-${v}`,
      className: f('dgsuikit:shrink-0 dgsuikit:snap-normal', r),
      style: {
        width: 100 / (l ?? 1) + '%',
        paddingLeft: h,
        scrollSnapAlign: K({
          slidesPerView: l,
          childIndex: m,
          centerMode: u,
          childrenCount: y || 0,
          haveContainerPadding: c > 0,
        }),
        ...d,
      },
      children: t,
    })
  );
};
D.__docgenInfo = { description: '', methods: [], displayName: 'Slide' };
const te = {
    title: 'Components/Slider',
    component: q,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport { Slider, Slide } from '@dgshahr/ui-kit/Slider';\nOr\nimport { Slider, Slide } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      containerClassName: {
        control: { type: 'text' },
        table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
      },
      showNavigationDots: {
        control: { type: 'boolean' },
        table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
      },
      dotsClassName: {
        control: { type: 'text' },
        table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
      },
      slidesPerView: {
        control: { type: 'number' },
        table: { type: { summary: 'number, accepts decimal' }, defaultValue: { summary: '1' } },
      },
      centerMode: {
        control: { type: 'boolean' },
        description: 'Center current slide (usefull with decimal slidesPerView)',
        table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
      },
      autoplay: {
        control: { type: 'boolean' },
        table: {
          type: { summary: 'boolean | {delay?: number | null}' },
          defaultValue: { summary: 'false', detail: 'if true: {delay: 7000}' },
        },
      },
      spaceBetween: {
        control: { type: 'number' },
        table: { type: { summary: 'number' }, defaultValue: { summary: '0' } },
      },
      navigationVariant: {
        options: ['inside', 'outside'],
        control: { type: 'select' },
        table: { type: { summary: 'inside, outside' }, defaultValue: { summary: 'outside' } },
      },
      navigationButtonsShowType: {
        options: ['hide', 'permanent', 'hover', 'onSides'],
        control: { type: 'select' },
        table: {
          type: { summary: 'hide, permanent, hover, onSides' },
          defaultValue: { summary: 'hide' },
        },
      },
      showPaginationText: {
        control: { type: 'boolean' },
        table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
      },
      navigationContainerClassName: {
        control: { type: 'text' },
        table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
      },
      responsive: {
        control: { type: 'object' },
        description:
          "It designed based on mobile first approach, so if you for example use `768` breakpoint it's props applied after `768px` device width.",
        table: {
          type: {
            summary: 'Record<number, SliderProps>',
            detail: 'example: { 768: { slidesPerView: 1, spaceBetween: 0 } }',
          },
        },
      },
      containerXPadding: {
        control: { type: 'number' },
        description: 'it adds two children to start and end of slider with given width.',
        table: { type: { summary: 'number' } },
      },
      onSlideIndexChange: {
        control: { type: 'object' },
        table: { type: { summary: 'function', detail: '(slideIndex: number)=> void' } },
      },
      ref: {
        control: { type: 'object' },
        description: 'returns two keys as a result `navigate` and `element`',
      },
      initialSlide: { control: { type: 'number' }, table: { type: { summary: 'number' } } },
      children: {
        control: { type: 'object' },
        description: 'use `Slide` component for every slide you have',
        table: { type: { summary: 'ReactNode' } },
      },
    },
  },
  S = {
    args: {
      containerClassName: 'dgsuikit:w-[400px]',
      responsive: { 768: { slidesPerView: 2, spaceBetween: 8 } },
      slidesPerView: 1,
      spaceBetween: 0,
      onSlideIndexChange() {},
      children: Array(5)
        .fill(null)
        .map((i, t) =>
          e.jsx(
            D,
            {
              children: e.jsx('div', {
                className:
                  'dgsuikit:h-[200px] dgsuikit:bg-gray-600 dgsuikit:rounded dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:text-white',
                children: t + 1,
              }),
            },
            t,
          ),
        ),
    },
  };
S.parameters = {
  ...S.parameters,
  docs: {
    ...S.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    containerClassName: 'dgsuikit:w-[400px]',
    responsive: {
      768: {
        slidesPerView: 2,
        spaceBetween: 8
      }
    },
    slidesPerView: 1,
    spaceBetween: 0,
    onSlideIndexChange() {},
    children: Array(5).fill(null).map((_, index) => <Slide key={index}>
          <div className="dgsuikit:h-[200px] dgsuikit:bg-gray-600 dgsuikit:rounded dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:text-white">
            {index + 1}
          </div>
        </Slide>)
  }
}`,
      ...S.parameters?.docs?.source,
    },
  },
};
const ie = ['Default'];
export { S as Default, ie as __namedExportsOrder, te as default };
