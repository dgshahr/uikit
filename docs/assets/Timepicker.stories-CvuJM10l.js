import { j as o } from './jsx-runtime-D_zvdyIk.js';
import { r as k, R as K } from './index-CTzypqlY.js';
import { f as L } from './helpers-BLnSDN_K.js';
import { D as G, u as z } from './DateAndTimePickerFooter-DT0uknJP.js';
import { c as D } from './clsx-B-dksMZM.js';
import { I as J } from './index-BNhZK-ju.js';
import { d as Q } from './index-GdYbSsJO.js';
import './PickerWrapper-DDK3pSI2.js';
/* empty css               */ import './index-BRSOB10J.js';
import './index-X_f_OX5J.js';
import './IconCloseRemove-B6m37iwz.js';
import './useFlipPosition-D78LAv0q.js';
import './useOutsideClick-OW2A_t1-.js';
import './IconArrowDown2-BBhufJ55.js';
import './index-ba2HXqsI.js';
import './IconEye-Cb9e2e14.js';
import './omitObjects-DTdUR98j.js';
import './TextFieldWrapper-D4s2v85O.js';
import './FieldBottomInfo-Dl0xKUm9.js';
import './IconInfoCircleOutline-Dd1i2qLz.js';
const H = k.createContext({ timePickerProps: { value: new Date(), onChange: () => {} } }),
  I = (e) => {
    const { children: t, timePickerProps: n } = e;
    return o.jsx(H.Provider, { value: { timePickerProps: n }, children: t });
  },
  V = () => k.useContext(H);
I.__docgenInfo = {
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
const w = [0, 1, 3, 4],
  U = (e) => e[0]?.getBoundingClientRect().height ?? 64,
  X = (e, t, n, r, s = 'instant') => {
    if (!e) return;
    const m = t.indexOf(n);
    m !== -1 && e.scrollTo({ top: m * r(), behavior: s });
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
  j = (e) => {
    if (!e) return ['-', '-', ':', '-', '-'];
    const t = e.hour == null ? '--' : String(e.hour).padStart(2, '0'),
      n = e.minute == null ? '--' : String(e.minute).padStart(2, '0');
    return [t.charAt(0) ?? '-', t.charAt(1) ?? '-', ':', n.charAt(0) ?? '-', n.charAt(1) ?? '-'];
  },
  M = (e) => {
    const t = `${e[0] ?? '-'}${e[1] ?? '-'}`,
      n = `${e[3]}${e[4]}`;
    return {
      hour: !t.includes('-') && Y(t) ? Number(t) : null,
      minute: !n.includes('-') && Z(n) ? Number(n) : null,
    };
  },
  P = (e, t = !0) => {
    const n = w.indexOf(e);
    if (n === -1) return t ? w[0] : (w[w.length - 1] ?? 0);
    const r = t ? n + 1 : n - 1;
    return r < 0 ? w[0] : r >= w.length ? (w[w.length - 1] ?? 0) : (w[r] ?? 0);
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
    const e = k.useRef(null);
    return {
      inputRef: e,
      setCaretToEditable: (n, r = !0) => {
        const s = e.current;
        if (!s) return;
        const m = w.includes(n) ? n : P(n, r);
        typeof m == 'number' && s.setSelectionRange(m, m + 1);
      },
    };
  },
  _ = (e) => {
    const {
        value: t = { hour: null, minute: null },
        onChange: n,
        disabled: r = !1,
        className: s,
        ...m
      } = e,
      { inputRef: c, setCaretToEditable: u } = te(),
      [l, f] = k.useState(() => j(t)),
      i = K.useRef(t);
    k.useEffect(() => {
      (t.hour !== i.current.hour || t.minute !== i.current.minute) && ((i.current = t), f(j(t)));
    }, [t]);
    const d = () => {
        const h = c.current;
        if (!h) return;
        const a = h.selectionStart ?? 0;
        w.includes(a) || u(a, !0);
      },
      b = (h, a) => {
        const p = h === 'ArrowRight';
        u(P(a, p), p);
      },
      g = (h, a) => {
        const p = w.includes(a) ? a : P(a, !1),
          y = [...l];
        (y[p] = '-'), f(y), n(M(y));
        const F = h === 'Backspace' ? P(p, !1) : P(p, !0);
        setTimeout(() => u(F, h !== 'Backspace'), 0);
      },
      W = (h, a) => {
        const p = w.includes(a) ? a : P(a, !0),
          y = [...l];
        ee(h, p, y) && ((y[p] = h), f(y), n(M(y)), setTimeout(() => u(P(p, !0), !0), 0));
      },
      C = (h) => {
        if ((h.preventDefault(), r)) return;
        const a = c.current;
        if (!a) return;
        const p = a.selectionStart ?? 0;
        if (['ArrowLeft', 'ArrowRight'].includes(h.key)) {
          b(h.key, p);
          return;
        }
        if (['Backspace', 'Delete'].includes(h.key)) {
          g(h.key, p);
          return;
        }
        /^\d$/.test(h.key) && W(h.key, p);
      };
    return o.jsx(J, {
      ref: c,
      dir: 'ltr',
      className: s,
      value: l.join(''),
      onKeyDown: C,
      onFocus: d,
      disabled: r,
      inputMode: 'numeric',
      pattern: '[0-9:]*',
      ...m,
    });
  };
_.__docgenInfo = {
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
const E = ({
  timePickerProps: e,
  setActivePart: t,
  handleSingleTimeChange: n,
  handleRangeTimeChange: r,
}) => {
  const { acceptRange: s, value: m } = e,
    c = (l) => ({ hour: l?.getHours() ?? 0, minute: l?.getMinutes() ?? 0 }),
    u = s
      ? [
          {
            key: 'start',
            id: 'from-time',
            label: 'از ساعت',
            value: c(m?.start),
            className: 'dgsuikit:w-1/2',
          },
          {
            key: 'end',
            id: 'to-time',
            label: 'تا ساعت',
            value: c(m?.end),
            className: 'dgsuikit:w-1/2',
          },
        ]
      : [{ key: 'single', id: 'time', label: 'ساعت', value: c(m), className: void 0 }];
  return o.jsx('div', {
    className: D(s && 'dgsuikit:flex dgsuikit:justify-between dgsuikit:gap-4 dgsuikit:mb-4'),
    children: u.map(({ key: l, id: f, label: i, value: d, className: b }) =>
      o.jsx(
        _,
        {
          id: f,
          value: d,
          labelContent: i,
          className: b,
          onFocus: () => {
            s && l !== 'single' && t(l);
          },
          onChange: (g) => {
            typeof g.hour == 'number' &&
              typeof g.minute == 'number' &&
              (s && l !== 'single' ? r(l, g.hour, g.minute) : n(g.hour, g.minute));
          },
        },
        f,
      ),
    ),
  });
};
E.__docgenInfo = {
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
const N = ({ position: e }) =>
  o.jsx('div', {
    className: D(
      'dgsuikit:absolute dgsuikit:left-0 dgsuikit:right-0 dgsuikit:h-12 dgsuikit:pointer-events-none',
      'dgsuikit:from-[rgba(255,255,255,0.54)] dgsuikit:to-[rgba(255,255,255,0.90)]',
      e === 'top'
        ? 'dgsuikit:bg-gradient-to-t dgsuikit:top-0'
        : 'dgsuikit:bg-gradient-to-b dgsuikit:bottom-0',
    ),
  });
N.__docgenInfo = {
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
  const r = k.useRef(null),
    s = k.useRef([]),
    m = k.useRef(null),
    c = () => U(s.current),
    u = (i = t ?? 0, d = 'smooth') => {
      X(r.current, e, i, c, d), (m.current = i);
    },
    l = Q((i) => {
      i !== m.current && ((m.current = i), n(i));
    }, 200),
    f = (i) => {
      const d = Math.round(i.scrollTop / c()),
        b = e[Math.max(0, Math.min(d, e.length - 1))];
      b != null && l(b);
    };
  return (
    k.useEffect(() => {
      const i = r.current;
      if (!i) return;
      const d = () => f(i);
      return i.addEventListener('scroll', d), () => i.removeEventListener('scroll', d);
    }, [e, l]),
    k.useEffect(() => {
      t != null && u();
    }, [t]),
    { containerRef: r, itemRefs: s }
  );
}
const B = (e) => {
  const {
      items: t,
      defaultValue: n,
      onValueChange: r,
      className: s,
      formatValue: m = (l) => String(l).padStart(2, '0'),
    } = e,
    { containerRef: c, itemRefs: u } = ne(t, n, r);
  return o.jsxs('div', {
    className: 'dgsuikit:relative dgsuikit:h-28 dgsuikit:w-full',
    children: [
      o.jsx('div', {
        ref: c,
        className: D(
          'dgsuikit:h-28 dgsuikit:w-full dgsuikit:py-10 dgsuikit:overflow-y-scroll dgsuikit:snap-y dgsuikit:snap-mandatory dgsuikit:scroll-smooth dgsuikit:no-scrollbar',
          s,
        ),
        children: t.map((l, f) =>
          o.jsx(
            'div',
            {
              ref: (i) => {
                u.current[f] = i;
              },
              className:
                'dgsuikit:h-10 dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:snap-center dgsuikit:font-p1-regular',
              children: m(l),
            },
            l,
          ),
        ),
      }),
      o.jsx(N, { position: 'top' }),
      o.jsx(N, { position: 'bottom' }),
    ],
  });
};
B.__docgenInfo = {
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
const O = (e) => {
  const {
      timePickerProps: t,
      activePart: n,
      handleSingleTimeChange: r,
      handleRangeTimeChange: s,
    } = e,
    { minuteStep: m = 1, acceptRange: c, value: u } = t,
    l = Array.from({ length: 24 }, (a, p) => p),
    f = Array.from({ length: 60 }, (a, p) => p).filter((a) => a % m === 0),
    i = (a) => a.toString().padStart(2, '0'),
    d = (a) => a.toString().padStart(2, '0'),
    b = (a) => {
      if (c) {
        const p = n === 'start' ? u?.start : u?.end;
        return p ? p[a]() : 0;
      }
      return u ? u[a]() : 0;
    },
    g = b('getHours'),
    W = b('getMinutes'),
    C = (a) => {
      c
        ? s(n, n === 'start' ? (u?.start?.getHours() ?? 0) : (u?.end?.getHours() ?? 0), a)
        : r(u?.getHours() ?? 0, a);
    },
    h = (a) => {
      c
        ? s(n, a, n === 'start' ? (u?.start?.getMinutes() ?? 0) : (u?.end?.getMinutes() ?? 0))
        : r(a, u?.getMinutes() ?? 0);
    };
  return o.jsxs('div', {
    className: 'dgsuikit:flex dgsuikit:mt-2 dgsuikit:w-full dgsuikit:justify-center',
    children: [
      o.jsx(B, { items: f, defaultValue: W, onValueChange: C, formatValue: d }),
      o.jsx(B, { items: l, defaultValue: g, onValueChange: h, formatValue: i }),
    ],
  });
};
O.__docgenInfo = {
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
const A = () => {
  const { timePickerProps: e } = V(),
    { acceptRange: t, value: n, onChange: r } = e,
    [s, m] = k.useState('start'),
    c = (i, d, b) => {
      const g = new Date(i);
      return g.setHours(d), g.setMinutes(b), g.setSeconds(0), g.setMilliseconds(0), g;
    },
    f = {
      timePickerProps: e,
      handleSingleTimeChange: (i, d) => {
        !n || t || (n.getHours() === i && n.getMinutes() === d) || r(c(n, i, d));
      },
      handleRangeTimeChange: (i, d, b) => {
        if (!n || !t) return;
        const g = new Date(n[i] ?? new Date());
        (g.getHours() === d && g.getMinutes() === b) || r({ ...n, [i]: c(g, d, b) });
      },
    };
  return o.jsxs('div', {
    className: 'dgsuikit:p-4 dgsuikit:ss02',
    children: [o.jsx(E, { setActivePart: m, ...f }), o.jsx(O, { activePart: s, ...f })],
  });
};
A.__docgenInfo = { description: '', methods: [], displayName: 'Body' };
const $ = () => {
  const { timePickerProps: e } = V(),
    {
      showSubmitButton: t = !0,
      showNowButton: n = !0,
      onSubmit: r,
      onChange: s,
      acceptRange: m,
    } = e,
    c = () => {
      if (m) {
        const u = new Date();
        u.setHours(u.getHours() + 1), s({ start: new Date(), end: u });
      } else s(new Date());
    };
  return o.jsx(G, {
    ...(t && { primaryButton: { onClick: r, children: 'اعمال' } }),
    ...(n && { secondaryButton: { variant: 'text', onClick: c, children: 'رفتن به اکنون' } }),
    className: 'dgsuikit:p-4',
  });
};
$.__docgenInfo = { description: '', methods: [], displayName: 'Footer' };
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
      s = e.end.getMinutes().toString().padStart(2, '0');
    return `${t}:${n} - ${r}:${s}`;
  }
  return '';
}
const x = (e) => {
  const { showSubmitButton: t = !0, showNowButton: n = !0 } = e,
    { Wrapper: r, wrapperProps: s } = z({ props: e, standaloneMode: 'time', formatValue: re });
  return o.jsx(r, {
    ...s,
    children: o.jsxs(I, { timePickerProps: e, children: [o.jsx(A, {}), (t || n) && o.jsx($, {})] }),
  });
};
x.__docgenInfo = {
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
const xe = {
    title: 'Components/Form/TimePicker',
    component: x,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component:
            "### \n```js\nimport Timepicker from '@dgshahr/ui-kit/Form/Timepicker';\nOr\nimport { Timepicker } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    beforeEach: () => L({ alignItems: '!flex-start', height: '400px' }),
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
  q = (e) => {
    const [t, n] = k.useState(new Date());
    return o.jsx('div', {
      className: 'dgsuikit:w-80',
      children: o.jsx(x, { ...e, acceptRange: !1, value: t, onChange: n }),
    });
  },
  v = { args: { value: new Date(), onChange: () => {} }, render: (e) => o.jsx(q, { ...e }) },
  ae = (e) => {
    const [t, n] = k.useState({
      start: new Date(),
      end: (() => {
        const r = new Date();
        return r.setHours(r.getHours() + 1), r;
      })(),
    });
    return o.jsx('div', {
      className: 'dgsuikit:w-80',
      children: o.jsx(x, { ...e, acceptRange: !0, value: t, onChange: n }),
    });
  },
  S = {
    args: { value: new Date(), onChange: () => {}, acceptRange: !0 },
    render: (e) => o.jsx(ae, { ...e }),
  },
  T = {
    ...v,
    args: {
      ...v.args,
      mode: 'time',
      wrapperClassName: 'dgsuikit:w-[350px] dgsuikit:shadow-2xl dgsuikit:rounded-lg',
    },
    render: (e) => o.jsx(q, { ...e }),
  },
  R = { ...v, args: { ...v.args, dropdownType: 'drawer' }, render: (e) => o.jsx(q, { ...e }) };
v.parameters = {
  ...v.parameters,
  docs: {
    ...v.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    value: new Date(),
    onChange: () => {}
  },
  render: args => <DefaultTimePickerExample {...args} />
}`,
      ...v.parameters?.docs?.source,
    },
  },
};
S.parameters = {
  ...S.parameters,
  docs: {
    ...S.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    value: new Date(),
    onChange: () => {},
    acceptRange: true
  },
  render: args => <RangeTimePickerExample {...args} />
}`,
      ...S.parameters?.docs?.source,
    },
  },
};
T.parameters = {
  ...T.parameters,
  docs: {
    ...T.parameters?.docs,
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
      ...T.parameters?.docs?.source,
    },
  },
};
R.parameters = {
  ...R.parameters,
  docs: {
    ...R.parameters?.docs,
    source: {
      originalSource: `{
  ...Default,
  args: {
    ...Default.args,
    dropdownType: 'drawer'
  },
  render: args => <DefaultTimePickerExample {...args} />
}`,
      ...R.parameters?.docs?.source,
    },
  },
};
const We = ['Default', 'Range', 'OpenMode', 'DrawerMode'];
export {
  v as Default,
  R as DrawerMode,
  T as OpenMode,
  S as Range,
  We as __namedExportsOrder,
  xe as default,
};
