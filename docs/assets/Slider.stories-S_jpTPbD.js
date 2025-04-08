'use client';
import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as n } from './index-CTzypqlY.js';
import { c as k } from './clsx-B-dksMZM.js';
import { I as O } from './IconArrowLeft2-DI3fgQDw.js';
import { I as F } from './IconArrowRight2-C2yC-io_.js';
import { B } from './index-mEH1fkcA.js';
/* empty css               */ const E = n.createContext({
    slidesPerView: 1,
    spaceBetween: 0,
    navigationVariant: 'outside',
    showNavigationDots: !0,
    showPaginationText: !1,
    childrenCount: 0,
    sliderId: '',
  }),
  P = () => n.useContext(E);
function $({ active: s, autoplay: t, variant: r = 'outside' }) {
  return [
    {
      inside: 'dgs-ui-kit-bg-gray-500/50 hover:dgs-ui-kit-bg-gray-500/80',
      outside: 'dgs-ui-kit-bg-gray-200 hover:dgs-ui-kit-bg-gray-300',
    }[r],
    s ? 'dgs-ui-kit-w-[22px]' : 'dgs-ui-kit-w-[6px]',
    t ? 'dgs-ui-kit-p-[1px]' : '',
  ];
}
const A = (s) => {
  const { active: t, onClick: r, onNavigateToNext: o, index: i } = s,
    { autoplay: d, navigationVariant: y = 'outside' } = P(),
    [l, u] = n.useState(0);
  return (
    n.useEffect(() => {
      if (!t || !d) return;
      const f = typeof d == 'boolean' ? 7e3 : (d?.delay ?? 7e3);
      let h = Date.now();
      const c = setInterval(() => {
        const m = Date.now() - h,
          g = (m / f) * 100;
        u(Math.min(g, 100)), m >= f && typeof o == 'function' && (o(), u(0), clearInterval(c));
      }, 100);
      return function () {
        return u(0), (h = Date.now()), clearInterval(c);
      };
    }, [t, d, o]),
    e.jsx('button', {
      className: k(
        'dgs-ui-kit-rounded-full dgs-ui-kit-overflow-hidden dgs-ui-kit-transition-all dgs-ui-kit-h-[6px]',
        $({ active: t, autoplay: d, variant: y }),
      ),
      onClick: r,
      'aria-label': `slider-navigation-dot-${i + 1}`,
      children:
        t &&
        e.jsx('div', {
          className: k('dgs-ui-kit-h-full dgs-ui-kit-rounded-full', {
            'dgs-ui-kit-bg-white': y === 'inside',
            'dgs-ui-kit-bg-gray-700': y === 'outside',
          }),
          style: { width: d ? `${l}%` : '100%' },
        }),
    })
  );
};
A.__docgenInfo = {
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
const D = (s) => {
  const { onNavigate: t, slideIndex: r, slidesCount: o } = s,
    {
      navigationButtonsShowType: i = 'hide',
      dotsClassName: d,
      navigationContainerClassName: y,
      navigationVariant: l = 'outside',
      showNavigationDots: u = !0,
      showPaginationText: f,
    } = P(),
    h = e.jsxs('div', {
      className: k('dgs-ui-kit-flex dgs-ui-kit-gap-2', {
        'dgs-ui-kit-absolute dgs-ui-kit-bottom-0 dgs-ui-kit-left-[5.5%]':
          l === 'inside' && i !== 'onSides',
        'dgs-ui-kit-absolute dgs-ui-kit-justify-between dgs-ui-kit-top-1/2 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-w-full dgs-ui-kit-px-[5.5%]':
          i === 'onSides',
        'dgs-ui-kit-opacity-0 group-hover:dgs-ui-kit-opacity-100 dgs-ui-kit-transition':
          i === 'hover' || i === 'onSides',
      }),
      children: [
        e.jsx(B, {
          type: 'button',
          variant: 'secondary',
          onClick: () => t(r - 1),
          rightIcon: e.jsx(F, {}),
          'aria-label': 'slider-previous-button',
        }),
        e.jsx(B, {
          type: 'button',
          variant: 'secondary',
          onClick: () => t(r + 1),
          rightIcon: e.jsx(O, {}),
          'aria-label': 'slider-next-button',
        }),
      ],
    });
  return e.jsxs(e.Fragment, {
    children: [
      i && i !== 'hide' && i === 'onSides' && h,
      e.jsxs('div', {
        className: k(
          'dgs-ui-kit-flex',
          {
            'dgs-ui-kit-items-center dgs-ui-kit-mt-2': l === 'outside',
            'dgs-ui-kit-absolute dgs-ui-kit-bottom-4 dgs-ui-kit-w-full dgs-ui-kit-justify-center':
              l === 'inside',
            'dgs-ui-kit-justify-between': l === 'outside' && i !== 'hide' && i !== 'onSides',
            'dgs-ui-kit-justify-center': l === 'outside' && (i === 'hide' || i === 'onSides'),
          },
          y,
        ),
        children: [
          i && i !== 'hide' && i !== 'onSides' && h,
          (u || f) &&
            e.jsxs('div', {
              className: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-3',
              children: [
                f &&
                  e.jsxs('div', {
                    className:
                      'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-1 dgs-ui-kit-font-caption-regular dgs-ui-kit-text-gray-400 ss02',
                    children: [
                      e.jsx('span', {
                        className: k('dgs-ui-kit-font-bold', {
                          'dgs-ui-kit-text-gray-600': l === 'outside',
                          'dgs-ui-kit-text-white': l === 'inside',
                        }),
                        children: r + 1,
                      }),
                      e.jsx('span', { children: 'از' }),
                      e.jsx('span', { children: o }),
                    ],
                  }),
                u &&
                  e.jsx('div', {
                    className: k(
                      'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-gap-2',
                      d,
                    ),
                    children: Array.from(Array(o).keys()).map((c, m) =>
                      e.jsx(
                        A,
                        {
                          active: r === m,
                          index: m,
                          onClick: () => t(m),
                          onNavigateToNext: () => t(r + 1),
                        },
                        c + o,
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
const T = n.forwardRef((s, t) => {
  const [r, o] = n.useState(s),
    {
      className: i = '',
      containerClassName: d = '',
      showNavigationDots: y = !0,
      slidesPerView: l = 1,
      navigationButtonsShowType: u = 'hide',
      spaceBetween: f = 0,
      showPaginationText: h,
      onSlideIndexChange: c,
      initialSlide: m,
      containerXPadding: g = 0,
    } = r,
    [N, C] = n.useState(0),
    [V, _] = n.useState(0),
    L = Object.fromEntries(Object.entries(r).filter(([a]) => a !== 'children')),
    p = n.useRef(null),
    v = Math.ceil(V / Math.floor(l)),
    M = (y || (u && u !== 'hide') || h) && v > 1;
  function W(a) {
    if (
      Math.ceil(Math.abs(a.currentTarget.scrollLeft)) + a.currentTarget.clientWidth + 1 + g >=
      a.currentTarget.scrollWidth
    ) {
      C(v - 1);
      return;
    }
    const b = a.currentTarget.scrollWidth - g * 2,
      x = b / v,
      w = (b - a.currentTarget.scrollLeft - g) / x;
    if (w <= v) {
      C(0);
      return;
    }
    C(Math.round(w % v));
  }
  function j(a) {
    if (!p.current) return;
    const b = p.current.offsetWidth,
      x = N - a,
      w = p.current.scrollWidth / v,
      q = x * w;
    a < 0
      ? p.current.scrollTo({ behavior: 'smooth', left: -(b * v) })
      : a >= v
        ? p.current.scrollTo({ behavior: 'smooth', left: 0 })
        : p.current.scrollBy({ behavior: 'smooth', left: q });
  }
  function I() {
    const b = Object.keys(s.responsive)
        .sort()
        .findLast((w) => Number(w) <= window.innerWidth),
      x = b ? s.responsive[Number(b)] : null;
    o(x ? { ...r, ...x } : s);
  }
  return (
    n.useImperativeHandle(t, () => ({
      element: p.current,
      navigate: (a) => j(Math.max(0, a - 1)),
    })),
    n.useEffect(() => {
      if (!p.current) return;
      let a = p.current.childElementCount;
      g > 0 && (a -= 2), _(a);
    }, [s.children, p, g]),
    n.useEffect(() => {
      if (!(!s.responsive || Object.keys(s.responsive).length <= 0))
        return (
          I(),
          window.addEventListener('resize', I),
          () => {
            window.removeEventListener('resize', I);
          }
        );
    }, [s.responsive]),
    n.useEffect(() => {
      c && typeof c == 'function' && c(N);
    }, [N]),
    n.useEffect(() => {
      typeof m == 'number' && p.current && j(Math.max(0, m - 1));
    }, [m, p.current]),
    e.jsx(E.Provider, {
      value: { ...L, childrenCount: V, sliderId: n.useId() },
      children: e.jsxs('div', {
        className: k('dgs-ui-kit-overflow-hidden dgs-ui-kit-relative dgs-ui-kit-group', i),
        style: { direction: 'rtl' },
        children: [
          e.jsxs('div', {
            className: k(
              'dgs-ui-kit-flex dgs-ui-kit-snap-x dgs-ui-kit-snap-mandatory dgs-ui-kit-overflow-x-auto no-scrollbar',
              d,
            ),
            style: { marginLeft: -f },
            onScroll: W,
            ref: p,
            children: [
              g > 0 &&
                e.jsx('div', {
                  className: 'dgs-ui-kit-shrink-0',
                  style: { width: g, paddingLeft: f },
                }),
              s.children,
              g > 0 &&
                e.jsx('div', {
                  className: 'dgs-ui-kit-shrink-0',
                  style: { width: g, paddingLeft: f },
                }),
            ],
          }),
          M && e.jsx(D, { onNavigate: j, slideIndex: N, slidesCount: v }),
        ],
      }),
    })
  );
});
T.displayName = 'Slider';
T.__docgenInfo = {
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
  slidesPerView: s,
  childIndex: t,
  centerMode: r,
  childrenCount: o,
  haveContainerPadding: i,
}) {
  const d = t % Math.floor(s) === 0,
    y = s % 1 !== 0,
    l = t === 0,
    u = t === o - 1;
  if (!d) return 'none';
  if (r) {
    if (y && !i) {
      if (l) return 'start';
      if (u) return 'end';
    }
    return 'center';
  }
  return 'start';
}
const R = (s) => {
  const { children: t, className: r, style: o, ...i } = s,
    {
      slidesPerView: d = 1,
      spaceBetween: y = 0,
      centerMode: l = !1,
      containerXPadding: u = 0,
      childrenCount: f = 0,
      sliderId: h,
    } = P(),
    c = n.useRef(null),
    [m, g] = n.useState(0);
  return (
    n.useEffect(() => {
      c.current &&
        g(
          Array.prototype.indexOf.call(
            document.querySelectorAll(`[id='slide-item-${h}']`),
            c.current,
          ),
        );
    }, [c, f, u]),
    e.jsx('div', {
      ...i,
      ref: c,
      id: `slide-item-${h}`,
      className: k('dgs-ui-kit-shrink-0 dgs-ui-kit-snap-normal', r),
      style: {
        width: 100 / (d ?? 1) + '%',
        paddingLeft: y,
        scrollSnapAlign: K({
          slidesPerView: d,
          childIndex: m,
          centerMode: l,
          childrenCount: f || 0,
          haveContainerPadding: u > 0,
        }),
        ...o,
      },
      children: t,
    })
  );
};
R.__docgenInfo = { description: '', methods: [], displayName: 'Slide' };
const Y = {
    title: 'Components/Slider',
    component: T,
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
      containerClassName: 'dgs-ui-kit-w-[400px]',
      responsive: { 768: { slidesPerView: 2, spaceBetween: 8 } },
      slidesPerView: 1,
      spaceBetween: 0,
      onSlideIndexChange() {},
      children: Array(5)
        .fill(null)
        .map((s, t) =>
          e.jsx(
            R,
            {
              children: e.jsx('div', {
                className:
                  'dgs-ui-kit-h-[200px] dgs-ui-kit-bg-gray-600 dgs-ui-kit-rounded dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-text-white',
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
    containerClassName: 'dgs-ui-kit-w-[400px]',
    responsive: {
      768: {
        slidesPerView: 2,
        spaceBetween: 8
      }
    },
    slidesPerView: 1,
    spaceBetween: 0,
    onSlideIndexChange() {},
    children: Array(5).fill(null).map((_, index) => <Slide key={index}>\r
          <div className="dgs-ui-kit-h-[200px] dgs-ui-kit-bg-gray-600 dgs-ui-kit-rounded dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-text-white">\r
            {index + 1}\r
          </div>\r
        </Slide>)
  }
}`,
      ...S.parameters?.docs?.source,
    },
  },
};
const Z = ['Default'];
export { S as Default, Z as __namedExportsOrder, Y as default };
