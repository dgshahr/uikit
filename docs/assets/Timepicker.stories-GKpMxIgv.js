import { j as a } from './jsx-runtime-D_zvdyIk.js';
import { r as w, R as L } from './index-CTzypqlY.js';
import { f as G } from './helpers-BL3Yl0VC.js';
import { D as z, u as J } from './DateAndTimePickerFooter-BT391n9D.js';
import { d as I } from './index-GdYbSsJO.js';
import { c as q } from './clsx-B-dksMZM.js';
import { I as Q } from './index-725Xjxr6.js';
import './PickerWrapper-lGkRsg09.js';
/* empty css               */ import './index-BRSOB10J.js';
import './index-X_f_OX5J.js';
import './IconCloseRemove-B6m37iwz.js';
import './isBrowser-CEYOmsdG.js';
import './useFlipPosition-Cg5sZ8Du.js';
import './useOutsideClick-BZ98SsGu.js';
import './IconArrowDown2-BBhufJ55.js';
import './index-CK5dQjob.js';
import './IconEye-Cb9e2e14.js';
import './omitObjects-DTdUR98j.js';
import './TextFieldWrapper-2qx4DqcM.js';
import './FieldBottomInfo-DcydcAx7.js';
import './IconInfoCircleOutline-Dd1i2qLz.js';
const V = w.createContext({ timePickerProps: { value: new Date(), onChange: () => {} } }),
  _ = (e) => {
    const { children: t, timePickerProps: n } = e;
    return a.jsx(V.Provider, { value: { timePickerProps: n }, children: t });
  },
  E = () => w.useContext(V);
_.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TimePickerProvider',
  props: {
    timePickerProps: {
      required: !0,
      tsType: {
        name: 'intersection',
        raw: 'TimepickerPropsBase & HasOrNotSubmitButton & HasOrNotRange',
        elements: [
          {
            name: 'intersection',
            raw: `PickerWrapperProps & {
  showSubmitButton?: boolean;
  showNowButton?: boolean;
  mode?: 'input' | 'time';
  acceptRange?: boolean;
  minuteStep?: number;
}`,
            elements: [
              {
                name: 'intersection',
                raw: `PickerWrapperPropsBase &
(PickerWrapperWithCustomInput | PickerWrapperWithoutCustomInput) &
(PickerWrapperWithDrawerContainer | PickerWrapperWithPopoverContainer)`,
                elements: [
                  { name: 'PickerWrapperPropsBase' },
                  { name: 'unknown' },
                  { name: 'unknown' },
                ],
              },
              {
                name: 'signature',
                type: 'object',
                raw: `{
  showSubmitButton?: boolean;
  showNowButton?: boolean;
  mode?: 'input' | 'time';
  acceptRange?: boolean;
  minuteStep?: number;
}`,
                signature: {
                  properties: [
                    { key: 'showSubmitButton', value: { name: 'boolean', required: !1 } },
                    { key: 'showNowButton', value: { name: 'boolean', required: !1 } },
                    {
                      key: 'mode',
                      value: {
                        name: 'union',
                        raw: "'input' | 'time'",
                        elements: [
                          { name: 'literal', value: "'input'" },
                          { name: 'literal', value: "'time'" },
                        ],
                        required: !1,
                      },
                    },
                    { key: 'acceptRange', value: { name: 'boolean', required: !1 } },
                    { key: 'minuteStep', value: { name: 'number', required: !1 } },
                  ],
                },
              },
            ],
          },
          {
            name: 'union',
            raw: 'WithSubmitButton | WithoutSubmitButton',
            elements: [{ name: 'WithSubmitButton' }, { name: 'WithoutSubmitButton' }],
          },
          {
            name: 'union',
            raw: 'WithRange | WithoutRange',
            elements: [{ name: 'WithRange' }, { name: 'WithoutRange' }],
          },
        ],
      },
      description: '',
    },
  },
};
const y = [0, 1, 3, 4],
  U = (e) => e[0]?.getBoundingClientRect().height ?? 64,
  X = (e, t, n, r, i = 'instant') => {
    if (!e) return;
    const o = t.indexOf(n);
    o !== -1 && e.scrollTo({ top: o * r(), behavior: i });
  },
  Y = (e) => {
    if (e.length !== 2) return !1;
    const t = Number(e);
    return !Number.isNaN(t) && t >= 0 && t <= 23;
  },
  Z = (e) => {
    if (e.length !== 2) return !1;
    const t = Number(e);
    return !Number.isNaN(t) && t >= 0 && t <= 59;
  },
  M = (e) => {
    if (!e) return ['-', '-', ':', '-', '-'];
    const t = e.hour == null ? '--' : String(e.hour).padStart(2, '0'),
      n = e.minute == null ? '--' : String(e.minute).padStart(2, '0');
    return [t.charAt(0) ?? '-', t.charAt(1) ?? '-', ':', n.charAt(0) ?? '-', n.charAt(1) ?? '-'];
  },
  H = (e) => {
    const t = `${e[0] ?? '-'}${e[1] ?? '-'}`,
      n = `${e[3]}${e[4]}`;
    return {
      hour: !t.includes('-') && Y(t) ? Number(t) : null,
      minute: !n.includes('-') && Z(n) ? Number(n) : null,
    };
  },
  P = (e, t = !0) => {
    const n = y.indexOf(e);
    if (n === -1) return t ? y[0] : (y[y.length - 1] ?? 0);
    const r = t ? n + 1 : n - 1;
    return r < 0 ? y[0] : r >= y.length ? (y[y.length - 1] ?? 0) : (y[r] ?? 0);
  },
  ee = (e, t, n) =>
    t === 0
      ? /[0-2]/.test(e)
      : t === 1
        ? +`${n[0] === '-' ? '0' : n[0]}${e}` <= 23
        : t === 3
          ? /[0-5]/.test(e)
          : !0,
  te = () => {
    const e = w.useRef(null);
    return {
      inputRef: e,
      setCaretToEditable: (n, r = !0) => {
        const i = e.current;
        if (!i) return;
        const o = y.includes(n) ? n : P(n, r);
        typeof o == 'number' && i.setSelectionRange(o, o + 1);
      },
    };
  },
  A = (e) => {
    const {
        value: t = { hour: null, minute: null },
        onChange: n,
        disabled: r = !1,
        className: i,
        ...o
      } = e,
      { inputRef: d, setCaretToEditable: c } = te(),
      [l, u] = w.useState(() => M(t)),
      s = L.useRef(t);
    w.useEffect(() => {
      (t.hour !== s.current.hour || t.minute !== s.current.minute) && ((s.current = t), u(M(t)));
    }, [t]);
    const f = () => {
        const g = d.current;
        if (!g) return;
        const h = g.selectionStart ?? 0;
        y.includes(h) || c(h, !0);
      },
      k = (g, h) => {
        const b = g === 'ArrowRight';
        c(P(h, b), b);
      },
      p = (g, h) => {
        const b = y.includes(h) ? h : P(h, !1),
          m = [...l];
        (m[b] = '-'), u(m), n(H(m));
        const v = g === 'Backspace' ? P(b, !1) : P(b, !0);
        setTimeout(() => c(v, g !== 'Backspace'), 0);
      },
      R = (g, h) => {
        const b = y.includes(h) ? h : P(h, !0),
          m = [...l];
        ee(g, b, m) && ((m[b] = g), u(m), n(H(m)), setTimeout(() => c(P(b, !0), !0), 0));
      },
      T = (g) => {
        if ((g.preventDefault(), r)) return;
        const h = d.current;
        if (!h) return;
        const b = h.selectionStart ?? 0;
        if (['ArrowLeft', 'ArrowRight'].includes(g.key)) {
          k(g.key, b);
          return;
        }
        if (['Backspace', 'Delete'].includes(g.key)) {
          p(g.key, b);
          return;
        }
        /^\d$/.test(g.key) && R(g.key, b);
      };
    return a.jsx(Q, {
      ref: d,
      dir: 'ltr',
      className: i,
      value: l.join(''),
      onKeyDown: T,
      onFocus: f,
      disabled: r,
      inputMode: 'numeric',
      pattern: '[0-9:]*',
      ...o,
    });
  };
A.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'ControlledTimeInput',
  props: {
    value: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'object',
        raw: '{ hour: number | null; minute: number | null }',
        signature: {
          properties: [
            {
              key: 'hour',
              value: {
                name: 'union',
                raw: 'number | null',
                elements: [{ name: 'number' }, { name: 'null' }],
                required: !0,
              },
            },
            {
              key: 'minute',
              value: {
                name: 'union',
                raw: 'number | null',
                elements: [{ name: 'number' }, { name: 'null' }],
                required: !0,
              },
            },
          ],
        },
      },
      description: '',
    },
    onChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: TimeValue) => void',
        signature: {
          arguments: [
            {
              type: {
                name: 'signature',
                type: 'object',
                raw: '{ hour: number | null; minute: number | null }',
                signature: {
                  properties: [
                    {
                      key: 'hour',
                      value: {
                        name: 'union',
                        raw: 'number | null',
                        elements: [{ name: 'number' }, { name: 'null' }],
                        required: !0,
                      },
                    },
                    {
                      key: 'minute',
                      value: {
                        name: 'union',
                        raw: 'number | null',
                        elements: [{ name: 'number' }, { name: 'null' }],
                        required: !0,
                      },
                    },
                  ],
                },
              },
              name: 'value',
            },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
  },
  composes: ['Omit'],
};
const O = ({
  timePickerProps: e,
  setActivePart: t,
  handleSingleTimeChange: n,
  handleRangeTimeChange: r,
}) => {
  const { acceptRange: i, value: o } = e,
    d = (l) => ({ hour: l?.getHours() ?? 0, minute: l?.getMinutes() ?? 0 }),
    c = i
      ? [
          {
            key: 'start',
            id: 'from-time',
            label: 'از ساعت',
            value: d(o?.start),
            className: 'dgsuikit:w-1/2',
          },
          {
            key: 'end',
            id: 'to-time',
            label: 'تا ساعت',
            value: d(o?.end),
            className: 'dgsuikit:w-1/2',
          },
        ]
      : [{ key: 'single', id: 'time', label: 'ساعت', value: d(o), className: void 0 }];
  return a.jsx('div', {
    className: q(i && 'dgsuikit:flex dgsuikit:justify-between dgsuikit:gap-4 dgsuikit:mb-4'),
    children: c.map(({ key: l, id: u, label: s, value: f, className: k }) =>
      a.jsx(
        A,
        {
          id: u,
          value: f,
          labelContent: s,
          className: k,
          onFocus: () => {
            i && l !== 'single' && t(l);
          },
          onChange: (p) => {
            typeof p.hour == 'number' &&
              typeof p.minute == 'number' &&
              (i && l !== 'single' ? r(l, p.hour, p.minute) : n(p.hour, p.minute));
          },
        },
        u,
      ),
    ),
  });
};
O.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TimeInputs',
  props: {
    timePickerProps: {
      required: !0,
      tsType: {
        name: 'intersection',
        raw: 'TimepickerPropsBase & HasOrNotSubmitButton & HasOrNotRange',
        elements: [
          {
            name: 'intersection',
            raw: `PickerWrapperProps & {
  showSubmitButton?: boolean;
  showNowButton?: boolean;
  mode?: 'input' | 'time';
  acceptRange?: boolean;
  minuteStep?: number;
}`,
            elements: [
              {
                name: 'intersection',
                raw: `PickerWrapperPropsBase &
(PickerWrapperWithCustomInput | PickerWrapperWithoutCustomInput) &
(PickerWrapperWithDrawerContainer | PickerWrapperWithPopoverContainer)`,
                elements: [
                  { name: 'PickerWrapperPropsBase' },
                  { name: 'unknown' },
                  { name: 'unknown' },
                ],
              },
              {
                name: 'signature',
                type: 'object',
                raw: `{
  showSubmitButton?: boolean;
  showNowButton?: boolean;
  mode?: 'input' | 'time';
  acceptRange?: boolean;
  minuteStep?: number;
}`,
                signature: {
                  properties: [
                    { key: 'showSubmitButton', value: { name: 'boolean', required: !1 } },
                    { key: 'showNowButton', value: { name: 'boolean', required: !1 } },
                    {
                      key: 'mode',
                      value: {
                        name: 'union',
                        raw: "'input' | 'time'",
                        elements: [
                          { name: 'literal', value: "'input'" },
                          { name: 'literal', value: "'time'" },
                        ],
                        required: !1,
                      },
                    },
                    { key: 'acceptRange', value: { name: 'boolean', required: !1 } },
                    { key: 'minuteStep', value: { name: 'number', required: !1 } },
                  ],
                },
              },
            ],
          },
          {
            name: 'union',
            raw: 'WithSubmitButton | WithoutSubmitButton',
            elements: [{ name: 'WithSubmitButton' }, { name: 'WithoutSubmitButton' }],
          },
          {
            name: 'union',
            raw: 'WithRange | WithoutRange',
            elements: [{ name: 'WithRange' }, { name: 'WithoutRange' }],
          },
        ],
      },
      description: '',
    },
    handleSingleTimeChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(hour: number, minute: number) => void',
        signature: {
          arguments: [
            { type: { name: 'number' }, name: 'hour' },
            { type: { name: 'number' }, name: 'minute' },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    handleRangeTimeChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(part: RangePart, hour: number, minute: number) => void',
        signature: {
          arguments: [
            {
              type: {
                name: 'union',
                raw: "'start' | 'end'",
                elements: [
                  { name: 'literal', value: "'start'" },
                  { name: 'literal', value: "'end'" },
                ],
              },
              name: 'part',
            },
            { type: { name: 'number' }, name: 'hour' },
            { type: { name: 'number' }, name: 'minute' },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    setActivePart: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(part: RangePart) => void',
        signature: {
          arguments: [
            {
              type: {
                name: 'union',
                raw: "'start' | 'end'",
                elements: [
                  { name: 'literal', value: "'start'" },
                  { name: 'literal', value: "'end'" },
                ],
              },
              name: 'part',
            },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
  },
};
const C = ({ position: e }) =>
  a.jsx('div', {
    className: q(
      'dgsuikit:absolute dgsuikit:left-0 dgsuikit:right-0 dgsuikit:h-12 dgsuikit:pointer-events-none',
      'dgsuikit:from-[rgba(255,255,255,0.54)] dgsuikit:to-[rgba(255,255,255,0.90)]',
      e === 'top'
        ? 'dgsuikit:bg-gradient-to-t dgsuikit:top-0'
        : 'dgsuikit:bg-gradient-to-b dgsuikit:bottom-0',
    ),
  });
C.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'GradientOverlay',
  props: {
    position: {
      required: !0,
      tsType: {
        name: 'union',
        raw: "'top' | 'bottom'",
        elements: [
          { name: 'literal', value: "'top'" },
          { name: 'literal', value: "'bottom'" },
        ],
      },
      description: '',
    },
  },
};
function ne(e, t, n) {
  const r = w.useRef(null),
    i = w.useRef([]),
    o = w.useRef(null),
    d = () => U(i.current),
    c = (u = t ?? 0, s = 'smooth') => {
      X(r.current, e, u, d, s), (o.current = u);
    },
    l = (u) => {
      const s = Math.round(u.scrollTop / d()),
        f = e[Math.max(0, Math.min(s, e.length - 1))];
      f != null && f !== o.current && ((o.current = f), n(f));
    };
  return (
    w.useEffect(() => {
      const u = r.current;
      if (!u) return;
      const s = () => l(u);
      return u.addEventListener('scroll', s), () => u.removeEventListener('scroll', s);
    }, [e]),
    w.useEffect(() => {
      t != null && c();
    }, [t]),
    { containerRef: r, itemRefs: i }
  );
}
const D = (e) => {
  const {
      items: t,
      defaultValue: n,
      onValueChange: r,
      className: i,
      formatValue: o = (l) => String(l).padStart(2, '0'),
    } = e,
    { containerRef: d, itemRefs: c } = ne(t, n, r);
  return a.jsxs('div', {
    className: 'dgsuikit:relative dgsuikit:h-28 dgsuikit:w-full',
    children: [
      a.jsx('div', {
        ref: d,
        className: q(
          'dgsuikit:h-28 dgsuikit:w-full dgsuikit:py-10 dgsuikit:overflow-y-scroll dgsuikit:snap-y dgsuikit:snap-mandatory dgsuikit:scroll-smooth dgsuikit:no-scrollbar',
          i,
        ),
        children: t.map((l, u) =>
          a.jsx(
            'div',
            {
              ref: (s) => {
                c.current[u] = s;
              },
              className:
                'dgsuikit:h-10 dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:snap-center dgsuikit:font-p1-regular',
              children: o(l),
            },
            l,
          ),
        ),
      }),
      a.jsx(C, { position: 'top' }),
      a.jsx(C, { position: 'bottom' }),
    ],
  });
};
D.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'ScrollWheel',
  props: {
    items: {
      required: !0,
      tsType: { name: 'Array', elements: [{ name: 'number' }], raw: 'number[]' },
      description: '',
    },
    defaultValue: { required: !0, tsType: { name: 'number' }, description: '' },
    onValueChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: number) => void',
        signature: {
          arguments: [{ type: { name: 'number' }, name: 'value' }],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    formatValue: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: number) => string',
        signature: {
          arguments: [{ type: { name: 'number' }, name: 'value' }],
          return: { name: 'string' },
        },
      },
      description: '',
    },
  },
};
const $ = (e) => {
  const {
      timePickerProps: t,
      activePart: n,
      handleSingleTimeChange: r,
      handleRangeTimeChange: i,
    } = e,
    { minuteStep: o = 1, acceptRange: d, value: c } = t,
    l = Array.from({ length: 24 }, (m, v) => v),
    u = Array.from({ length: 60 }, (m, v) => v).filter((m) => m % o === 0),
    s = (m) => m.toString().padStart(2, '0'),
    f = (m) => m.toString().padStart(2, '0'),
    k = (m) => {
      if (d) {
        const v = n === 'start' ? c?.start : c?.end;
        return v ? v[m]() : 0;
      }
      return c ? c[m]() : 0;
    },
    p = k('getHours'),
    R = k('getMinutes'),
    [T, g] = w.useState(R),
    [h, b] = w.useState(p);
  return (
    w.useEffect(() => {
      d ? i(n, h, T) : r(h, T);
    }, [h, T]),
    a.jsxs('div', {
      className: 'dgsuikit:flex dgsuikit:mt-2 dgsuikit:w-full dgsuikit:justify-center',
      children: [
        a.jsx(D, { items: u, defaultValue: R, onValueChange: (m) => g(m), formatValue: f }),
        a.jsx(D, { items: l, defaultValue: p, onValueChange: (m) => b(m), formatValue: s }),
      ],
    })
  );
};
$.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TimeScrollWheels',
  props: {
    timePickerProps: {
      required: !0,
      tsType: {
        name: 'intersection',
        raw: 'TimepickerPropsBase & HasOrNotSubmitButton & HasOrNotRange',
        elements: [
          {
            name: 'intersection',
            raw: `PickerWrapperProps & {
  showSubmitButton?: boolean;
  showNowButton?: boolean;
  mode?: 'input' | 'time';
  acceptRange?: boolean;
  minuteStep?: number;
}`,
            elements: [
              {
                name: 'intersection',
                raw: `PickerWrapperPropsBase &
(PickerWrapperWithCustomInput | PickerWrapperWithoutCustomInput) &
(PickerWrapperWithDrawerContainer | PickerWrapperWithPopoverContainer)`,
                elements: [
                  { name: 'PickerWrapperPropsBase' },
                  { name: 'unknown' },
                  { name: 'unknown' },
                ],
              },
              {
                name: 'signature',
                type: 'object',
                raw: `{
  showSubmitButton?: boolean;
  showNowButton?: boolean;
  mode?: 'input' | 'time';
  acceptRange?: boolean;
  minuteStep?: number;
}`,
                signature: {
                  properties: [
                    { key: 'showSubmitButton', value: { name: 'boolean', required: !1 } },
                    { key: 'showNowButton', value: { name: 'boolean', required: !1 } },
                    {
                      key: 'mode',
                      value: {
                        name: 'union',
                        raw: "'input' | 'time'",
                        elements: [
                          { name: 'literal', value: "'input'" },
                          { name: 'literal', value: "'time'" },
                        ],
                        required: !1,
                      },
                    },
                    { key: 'acceptRange', value: { name: 'boolean', required: !1 } },
                    { key: 'minuteStep', value: { name: 'number', required: !1 } },
                  ],
                },
              },
            ],
          },
          {
            name: 'union',
            raw: 'WithSubmitButton | WithoutSubmitButton',
            elements: [{ name: 'WithSubmitButton' }, { name: 'WithoutSubmitButton' }],
          },
          {
            name: 'union',
            raw: 'WithRange | WithoutRange',
            elements: [{ name: 'WithRange' }, { name: 'WithoutRange' }],
          },
        ],
      },
      description: '',
    },
    handleSingleTimeChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(hour: number, minute: number) => void',
        signature: {
          arguments: [
            { type: { name: 'number' }, name: 'hour' },
            { type: { name: 'number' }, name: 'minute' },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    handleRangeTimeChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(part: RangePart, hour: number, minute: number) => void',
        signature: {
          arguments: [
            {
              type: {
                name: 'union',
                raw: "'start' | 'end'",
                elements: [
                  { name: 'literal', value: "'start'" },
                  { name: 'literal', value: "'end'" },
                ],
              },
              name: 'part',
            },
            { type: { name: 'number' }, name: 'hour' },
            { type: { name: 'number' }, name: 'minute' },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    activePart: {
      required: !0,
      tsType: {
        name: 'union',
        raw: "'start' | 'end'",
        elements: [
          { name: 'literal', value: "'start'" },
          { name: 'literal', value: "'end'" },
        ],
      },
      description: '',
    },
  },
};
const F = () => {
  const { timePickerProps: e } = E(),
    { acceptRange: t, value: n, onChange: r } = e,
    [i, o] = w.useState('start'),
    d = (s, f, k) => {
      const p = new Date(s);
      return p.setHours(f), p.setMinutes(k), p.setSeconds(0), p.setMilliseconds(0), p;
    },
    c = I((s, f) => {
      !n || t || (n.getHours() === s && n.getMinutes() === f) || r(d(n, s, f));
    }, 200),
    l = I((s, f, k) => {
      if (!n || !t) return;
      const p = new Date(n[s] ?? new Date());
      (p.getHours() === f && p.getMinutes() === k) || r({ ...n, [s]: d(p, f, k) });
    }, 200),
    u = { timePickerProps: e, handleSingleTimeChange: c, handleRangeTimeChange: l };
  return a.jsxs('div', {
    dir: 'rtl',
    className: 'dgsuikit:p-4 dgsuikit:ss02',
    children: [a.jsx(O, { setActivePart: o, ...u }), a.jsx($, { activePart: i, ...u })],
  });
};
F.__docgenInfo = { description: '', methods: [], displayName: 'Body' };
const K = () => {
  const { timePickerProps: e } = E(),
    {
      showSubmitButton: t = !0,
      showNowButton: n = !0,
      onSubmit: r,
      onChange: i,
      acceptRange: o,
    } = e,
    d = () => {
      if (o) {
        const c = new Date();
        c.setHours(c.getHours() + 1), i({ start: new Date(), end: c });
      } else i(new Date());
    };
  return a.jsx(z, {
    ...(t && { primaryButton: { onClick: r, children: 'اعمال' } }),
    ...(n && { secondaryButton: { variant: 'text', onClick: d, children: 'رفتن به اکنون' } }),
    className: 'dgsuikit:p-4',
  });
};
K.__docgenInfo = { description: '', methods: [], displayName: 'Footer' };
function re(e) {
  if (!e) return '';
  if (e instanceof Date) {
    const t = e.getHours().toString().padStart(2, '0'),
      n = e.getMinutes().toString().padStart(2, '0');
    return `${t}:${n}`;
  }
  if (e.start && e.end) {
    const t = e.start.getHours().toString().padStart(2, '0'),
      n = e.start.getMinutes().toString().padStart(2, '0'),
      r = e.end.getHours().toString().padStart(2, '0'),
      i = e.end.getMinutes().toString().padStart(2, '0');
    return `${t}:${n} - ${r}:${i}`;
  }
  return '';
}
const B = (e) => {
  const { showSubmitButton: t = !0, showNowButton: n = !0 } = e,
    { Wrapper: r, wrapperProps: i } = J({ props: e, standaloneMode: 'time', formatValue: re });
  return a.jsx(r, {
    ...i,
    children: a.jsxs(_, { timePickerProps: e, children: [a.jsx(F, {}), (t || n) && a.jsx(K, {})] }),
  });
};
B.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TimePicker',
  props: {
    isLoading: { required: !1, tsType: { name: 'boolean' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    showSubmitButton: { required: !1, tsType: { name: 'boolean' }, description: '' },
    showNowButton: { required: !1, tsType: { name: 'boolean' }, description: '' },
    mode: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'input' | 'time'",
        elements: [
          { name: 'literal', value: "'input'" },
          { name: 'literal', value: "'time'" },
        ],
      },
      description: '',
    },
    acceptRange: { required: !1, tsType: { name: 'boolean' }, description: '' },
    minuteStep: { required: !1, tsType: { name: 'number' }, description: '' },
  },
};
const We = {
    title: 'Components/Form/TimePicker',
    component: B,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            "### \n```js\nimport Timepicker from '@dgshahr/ui-kit/Form/Timepicker';\nOr\nimport { Timepicker } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    beforeEach: () => G({ alignItems: '!flex-start', height: '400px' }),
    argTypes: {
      value: {
        table: {
          type: {
            summary: 'Date | null | {start: Date | null, end: Date | null}',
            detail: "'start' and 'end' only available if acceptRange='true'",
          },
        },
      },
      onChange: { table: { type: { summary: '(value: Date | IRangeDate) => void' } } },
      mode: {
        control: { type: 'select' },
        options: ['input', 'time'],
        table: { type: { summary: 'input | time' } },
      },
      dropdownType: {
        control: { type: 'select' },
        options: ['popover', 'drawer'],
        table: { type: { summary: 'popover | drawer' } },
      },
      minuteStep: {
        control: { type: 'number', min: 1, max: 30 },
        table: { type: { summary: 'number' } },
      },
      showSubmitButton: { control: { type: 'boolean' }, table: { type: { summary: 'boolean' } } },
      showNowButton: { control: { type: 'boolean' }, table: { type: { summary: 'boolean' } } },
      acceptRange: { control: { type: 'boolean' }, table: { type: { summary: 'boolean' } } },
    },
  },
  j = (e) => {
    const [t, n] = w.useState(new Date());
    return a.jsx('div', {
      className: 'dgsuikit:w-80',
      children: a.jsx(B, { ...e, acceptRange: !1, value: t, onChange: n }),
    });
  },
  S = { args: { value: new Date(), onChange: () => {} }, render: (e) => a.jsx(j, { ...e }) },
  ae = (e) => {
    const [t, n] = w.useState({
      start: new Date(),
      end: (() => {
        const r = new Date();
        return r.setHours(r.getHours() + 1), r;
      })(),
    });
    return a.jsx('div', {
      className: 'dgsuikit:w-80',
      children: a.jsx(B, { ...e, acceptRange: !0, value: t, onChange: n }),
    });
  },
  x = {
    args: { value: new Date(), onChange: () => {}, acceptRange: !0 },
    render: (e) => a.jsx(ae, { ...e }),
  },
  W = {
    ...S,
    args: {
      ...S.args,
      mode: 'time',
      wrapperClassName: 'dgsuikit:w-[350px] dgsuikit:shadow-2xl dgsuikit:rounded-lg',
    },
    render: (e) => a.jsx(j, { ...e }),
  },
  N = { ...S, args: { ...S.args, dropdownType: 'drawer' }, render: (e) => a.jsx(j, { ...e }) };
S.parameters = {
  ...S.parameters,
  docs: {
    ...S.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    value: new Date(),
    onChange: () => {}
  },
  render: args => <DefaultTimePickerExample {...args} />
}`,
      ...S.parameters?.docs?.source,
    },
  },
};
x.parameters = {
  ...x.parameters,
  docs: {
    ...x.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    value: new Date(),
    onChange: () => {},
    acceptRange: true
  },
  render: args => <RangeTimePickerExample {...args} />
}`,
      ...x.parameters?.docs?.source,
    },
  },
};
W.parameters = {
  ...W.parameters,
  docs: {
    ...W.parameters?.docs,
    source: {
      originalSource: `{
  ...Default,
  args: {
    ...Default.args,
    mode: 'time',
    wrapperClassName: 'dgsuikit:w-[350px] dgsuikit:shadow-2xl dgsuikit:rounded-lg'
  },
  render: args => <DefaultTimePickerExample {...args} />
}`,
      ...W.parameters?.docs?.source,
    },
  },
};
N.parameters = {
  ...N.parameters,
  docs: {
    ...N.parameters?.docs,
    source: {
      originalSource: `{
  ...Default,
  args: {
    ...Default.args,
    dropdownType: 'drawer'
  },
  render: args => <DefaultTimePickerExample {...args} />
}`,
      ...N.parameters?.docs?.source,
    },
  },
};
const Ne = ['Default', 'Range', 'OpenMode', 'DrawerMode'];
export {
  S as Default,
  N as DrawerMode,
  W as OpenMode,
  x as Range,
  Ne as __namedExportsOrder,
  We as default,
};
