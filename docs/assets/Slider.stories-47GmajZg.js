'use client';
import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as n } from './index-CTzypqlY.js';
import { c as y } from './clsx-B-dksMZM.js';
import { I as F } from './IconArrowLeft2-DI3fgQDw.js';
import { I as $ } from './IconArrowRight2-C2yC-io_.js';
import { B as _ } from './index-ba2HXqsI.js';
/* empty css               */ const A = n.createContext({
    slidesPerView: 1,
    spaceBetween: 0,
    navigationVariant: 'outside',
    showNavigationDots: !0,
    showPaginationText: !1,
    childrenCount: 0,
    sliderId: '',
  }),
  T = () => n.useContext(A);
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
const R = (i) => {
  const { active: t, onClick: r, onNavigateToNext: d, index: s } = i,
    { autoplay: l, navigationVariant: h = 'outside' } = T(),
    [u, c] = n.useState(0);
  return (
    n.useEffect(() => {
      if (!t || !l) return;
      const f = typeof l == 'boolean' ? 7e3 : (l?.delay ?? 7e3);
      let v = Date.now();
      const o = setInterval(() => {
        const m = Date.now() - v,
          g = (m / f) * 100;
        c(Math.min(g, 100)), m >= f && typeof d == 'function' && (d(), c(0), clearInterval(o));
      }, 100);
      return function () {
        return c(0), (v = Date.now()), clearInterval(o);
      };
    }, [t, l, d]),
    e.jsx('button', {
      className: y(
        'dgsuikit:rounded-full dgsuikit:overflow-hidden dgsuikit:transition-all dgsuikit:h-[6px]',
        H({ active: t, autoplay: l, variant: h }),
      ),
      onClick: r,
      'aria-label': `slider-navigation-dot-${s + 1}`,
      children:
        t &&
        e.jsx('div', {
          className: y('dgsuikit:h-full dgsuikit:rounded-full', {
            'dgsuikit:bg-white': h === 'inside',
            'dgsuikit:bg-gray-700': h === 'outside',
          }),
          style: { width: l ? `${u}%` : '100%' },
        }),
    })
  );
};
R.__docgenInfo = {
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
const E = 'dgsuikit:opacity-0 dgsuikit:group-hover:opacity-100 dgsuikit:transition-opacity',
  D = (i) => {
    const { onNavigate: t, slideIndex: r, slidesCount: d } = i,
      {
        navigationButtonsShowType: s = 'hide',
        dotsClassName: l,
        navigationContainerClassName: h,
        navigationVariant: u = 'outside',
        showNavigationDots: c = !0,
        showPaginationText: f,
      } = T(),
      v = () => {
        const o = y('dgsuikit:!absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2', E);
        return e.jsxs(e.Fragment, {
          children: [
            e.jsx(_, {
              type: 'button',
              variant: 'secondary',
              onClick: () => t(r - 1),
              rightIcon: e.jsx($, {}),
              'aria-label': 'slider-previous-button',
              className: s === 'onSides' ? y(o, 'dgsuikit:right-[5.5%]') : void 0,
            }),
            e.jsx(_, {
              type: 'button',
              variant: 'secondary',
              onClick: () => t(r + 1),
              rightIcon: e.jsx(F, {}),
              'aria-label': 'slider-next-button',
              className: s === 'onSides' ? y(o, 'dgsuikit:left-[5.5%]') : void 0,
            }),
          ],
        });
      };
    return e.jsxs(e.Fragment, {
      children: [
        s && s !== 'hide' && s === 'onSides' && v(),
        e.jsxs('div', {
          className: y(
            'dgsuikit:flex',
            {
              'dgsuikit:items-center dgsuikit:mt-2': u === 'outside',
              'dgsuikit:absolute dgsuikit:bottom-4 dgsuikit:w-full dgsuikit:justify-center':
                u === 'inside',
              'dgsuikit:justify-between': u === 'outside' && s !== 'hide' && s !== 'onSides',
              'dgsuikit:justify-center': u === 'outside' && (s === 'hide' || s === 'onSides'),
            },
            h,
          ),
          children: [
            s &&
              s !== 'hide' &&
              s !== 'onSides' &&
              e.jsx('div', {
                className: y(
                  'dgsuikit:flex dgsuikit:gap-2',
                  s === 'hover' && E,
                  u === 'inside' && 'dgsuikit:absolute dgsuikit:bottom-0 dgsuikit:left-[5.5%]',
                ),
                children: v(),
              }),
            (c || f) &&
              e.jsxs('div', {
                className: 'dgsuikit:flex dgsuikit:items-center dgsuikit:gap-3',
                children: [
                  f &&
                    e.jsxs('div', {
                      className:
                        'dgsuikit:flex dgsuikit:items-center dgsuikit:gap-1 dgsuikit:font-caption-regular dgsuikit:text-gray-400 dgsuikit:ss02',
                      children: [
                        e.jsx('span', {
                          className: y('dgsuikit:font-bold', {
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
                      className: y(
                        'dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:gap-2',
                        l,
                      ),
                      children: Array.from(Array(d).keys()).map((o, m) =>
                        e.jsx(
                          R,
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
D.__docgenInfo = {
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
const V = n.forwardRef((i, t) => {
  const [r, d] = n.useState(i),
    {
      className: s = '',
      containerClassName: l = '',
      showNavigationDots: h = !0,
      slidesPerView: u = 1,
      navigationButtonsShowType: c = 'hide',
      spaceBetween: f = 0,
      showPaginationText: v,
      onSlideIndexChange: o,
      initialSlide: m,
      containerXPadding: g = 0,
    } = r,
    [N, C] = n.useState(0),
    [B, W] = n.useState(0),
    M = Object.fromEntries(Object.entries(r).filter(([a]) => a !== 'children')),
    p = n.useRef(null),
    k = Math.ceil(B / Math.floor(u)),
    O = (h || (c && c !== 'hide') || v) && k > 1;
  function q(a) {
    if (
      Math.ceil(Math.abs(a.currentTarget.scrollLeft)) + a.currentTarget.clientWidth + 1 + g >=
      a.currentTarget.scrollWidth
    ) {
      C(k - 1);
      return;
    }
    const x = a.currentTarget.scrollWidth - g * 2,
      w = x / k,
      b = (x - a.currentTarget.scrollLeft - g) / w;
    if (b <= k) {
      C(0);
      return;
    }
    C(Math.round(b % k));
  }
  function j(a) {
    if (!p.current) return;
    const x = p.current.offsetWidth,
      w = N - a,
      b = p.current.scrollWidth / k,
      P = w * b;
    a < 0
      ? p.current.scrollTo({ behavior: 'smooth', left: -(x * k) })
      : a >= k
        ? p.current.scrollTo({ behavior: 'smooth', left: 0 })
        : p.current.scrollBy({ behavior: 'smooth', left: P });
  }
  function I() {
    const x = Object.keys(i.responsive)
        .sort((b, P) => Number(b) - Number(P))
        .findLast((b) => Number(b) <= window.innerWidth),
      w = x ? i.responsive[Number(x)] : null;
    d(w ? { ...r, ...w } : i);
  }
  return (
    n.useImperativeHandle(t, () => ({
      element: p.current,
      navigate: (a) => j(Math.max(0, a - 1)),
    })),
    n.useEffect(() => {
      if (!p.current) return;
      let a = p.current.childElementCount;
      g > 0 && (a -= 2), W(a);
    }, [i.children, p, g]),
    n.useEffect(() => {
      if (!(!i.responsive || Object.keys(i.responsive).length <= 0))
        return (
          I(),
          window.addEventListener('resize', I),
          () => {
            window.removeEventListener('resize', I);
          }
        );
    }, [i.responsive]),
    n.useEffect(() => {
      o && typeof o == 'function' && o(N);
    }, [N]),
    n.useEffect(() => {
      typeof m == 'number' && p.current && j(Math.max(0, m - 1));
    }, [m, p.current]),
    e.jsx(A.Provider, {
      value: { ...M, childrenCount: B, sliderId: n.useId() },
      children: e.jsxs('div', {
        className: y('dgsuikit:overflow-hidden dgsuikit:relative dgsuikit:group', s),
        style: { direction: 'rtl' },
        children: [
          e.jsxs('div', {
            className: y(
              'dgsuikit:flex dgsuikit:snap-x dgsuikit:snap-mandatory dgsuikit:overflow-x-auto dgsuikit:no-scrollbar',
              l,
            ),
            style: { marginLeft: -f },
            onScroll: q,
            ref: p,
            children: [
              g > 0 &&
                e.jsx('div', {
                  className: 'dgsuikit:shrink-0',
                  style: { width: g, paddingLeft: f },
                }),
              i.children,
              g > 0 &&
                e.jsx('div', {
                  className: 'dgsuikit:shrink-0',
                  style: { width: g, paddingLeft: f },
                }),
            ],
          }),
          O && e.jsx(D, { onNavigate: j, slideIndex: N, slidesCount: k }),
        ],
      }),
    })
  );
});
V.displayName = 'Slider';
V.__docgenInfo = {
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
};
function K({
  slidesPerView: i,
  childIndex: t,
  centerMode: r,
  childrenCount: d,
  haveContainerPadding: s,
}) {
  const l = t % Math.floor(i) === 0,
    h = i % 1 !== 0,
    u = t === 0,
    c = t === d - 1;
  if (!l) return 'none';
  if (r) {
    if (h && !s) {
      if (u) return 'start';
      if (c) return 'end';
    }
    return 'center';
  }
  return 'start';
}
const L = (i) => {
  const { children: t, className: r, style: d, ...s } = i,
    {
      slidesPerView: l = 1,
      spaceBetween: h = 0,
      centerMode: u = !1,
      containerXPadding: c = 0,
      childrenCount: f = 0,
      sliderId: v,
    } = T(),
    o = n.useRef(null),
    [m, g] = n.useState(0);
  return (
    n.useEffect(() => {
      o.current &&
        g(
          Array.prototype.indexOf.call(
            document.querySelectorAll(`[id='slide-item-${v}']`),
            o.current,
          ),
        );
    }, [o, f, c]),
    e.jsx('div', {
      ...s,
      ref: o,
      id: `slide-item-${v}`,
      className: y('dgsuikit:shrink-0 dgsuikit:snap-normal', r),
      style: {
        width: 100 / (l ?? 1) + '%',
        paddingLeft: h,
        scrollSnapAlign: K({
          slidesPerView: l,
          childIndex: m,
          centerMode: u,
          childrenCount: f || 0,
          haveContainerPadding: c > 0,
        }),
        ...d,
      },
      children: t,
    })
  );
};
L.__docgenInfo = { description: '', methods: [], displayName: 'Slide' };
const Z = {
    title: 'Components/Slider',
    component: V,
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
            L,
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
const ee = ['Default'];
export { S as Default, ee as __namedExportsOrder, Z as default };
