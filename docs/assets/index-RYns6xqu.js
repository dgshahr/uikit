var X =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function D(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
function Y(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var n = function o() {
      return this instanceof o
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (o) {
      var u = Object.getOwnPropertyDescriptor(e, o);
      Object.defineProperty(
        n,
        o,
        u.get
          ? u
          : {
              enumerable: !0,
              get: function () {
                return e[o];
              },
            },
      );
    }),
    n
  );
}
var j = { exports: {} },
  r = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var y = Symbol.for('react.element'),
  A = Symbol.for('react.portal'),
  M = Symbol.for('react.fragment'),
  V = Symbol.for('react.strict_mode'),
  F = Symbol.for('react.profiler'),
  U = Symbol.for('react.provider'),
  q = Symbol.for('react.context'),
  L = Symbol.for('react.forward_ref'),
  N = Symbol.for('react.suspense'),
  z = Symbol.for('react.memo'),
  B = Symbol.for('react.lazy'),
  E = Symbol.iterator;
function H(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (E && e[E]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var k = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  $ = Object.assign,
  C = {};
function p(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = C), (this.updater = n || k);
}
p.prototype.isReactComponent = {};
p.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
p.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function O() {}
O.prototype = p.prototype;
function m(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = C), (this.updater = n || k);
}
var S = (m.prototype = new O());
S.constructor = m;
$(S, p.prototype);
S.isPureReactComponent = !0;
var g = Array.isArray,
  P = Object.prototype.hasOwnProperty,
  b = { current: null },
  x = { key: !0, ref: !0, __self: !0, __source: !0 };
function I(e, t, n) {
  var o,
    u = {},
    i = null,
    s = null;
  if (t != null)
    for (o in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      P.call(t, o) && !x.hasOwnProperty(o) && (u[o] = t[o]);
  var f = arguments.length - 2;
  if (f === 1) u.children = n;
  else if (1 < f) {
    for (var c = Array(f), a = 0; a < f; a++) c[a] = arguments[a + 2];
    u.children = c;
  }
  if (e && e.defaultProps) for (o in ((f = e.defaultProps), f)) u[o] === void 0 && (u[o] = f[o]);
  return { $$typeof: y, type: e, key: i, ref: s, props: u, _owner: b.current };
}
function G(e, t) {
  return { $$typeof: y, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function w(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === y;
}
function W(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var R = /\/+/g;
function v(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? W('' + e.key) : t.toString(36);
}
function _(e, t, n, o, u) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case y:
          case A:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (u = u(s)),
      (e = o === '' ? '.' + v(s, 0) : o),
      g(u)
        ? ((n = ''),
          e != null && (n = e.replace(R, '$&/') + '/'),
          _(u, t, n, '', function (a) {
            return a;
          }))
        : u != null &&
          (w(u) &&
            (u = G(
              u,
              n +
                (!u.key || (s && s.key === u.key) ? '' : ('' + u.key).replace(R, '$&/') + '/') +
                e,
            )),
          t.push(u)),
      1
    );
  if (((s = 0), (o = o === '' ? '.' : o + ':'), g(e)))
    for (var f = 0; f < e.length; f++) {
      i = e[f];
      var c = o + v(i, f);
      s += _(i, t, n, c, u);
    }
  else if (((c = H(e)), typeof c == 'function'))
    for (e = c.call(e), f = 0; !(i = e.next()).done; )
      (i = i.value), (c = o + v(i, f++)), (s += _(i, t, n, c, u));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return s;
}
function d(e, t, n) {
  if (e == null) return e;
  var o = [],
    u = 0;
  return (
    _(e, o, '', '', function (i) {
      return t.call(n, i, u++);
    }),
    o
  );
}
function J(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var l = { current: null },
  h = { transition: null },
  K = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: h, ReactCurrentOwner: b };
function T() {
  throw Error('act(...) is not supported in production builds of React.');
}
r.Children = {
  map: d,
  forEach: function (e, t, n) {
    d(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      d(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      d(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!w(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
r.Component = p;
r.Fragment = M;
r.Profiler = F;
r.PureComponent = m;
r.StrictMode = V;
r.Suspense = N;
r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K;
r.act = T;
r.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.',
    );
  var o = $({}, e.props),
    u = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = b.current)),
      t.key !== void 0 && (u = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var f = e.type.defaultProps;
    for (c in t)
      P.call(t, c) &&
        !x.hasOwnProperty(c) &&
        (o[c] = t[c] === void 0 && f !== void 0 ? f[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) o.children = n;
  else if (1 < c) {
    f = Array(c);
    for (var a = 0; a < c; a++) f[a] = arguments[a + 2];
    o.children = f;
  }
  return { $$typeof: y, type: e.type, key: u, ref: i, props: o, _owner: s };
};
r.createContext = function (e) {
  return (
    (e = {
      $$typeof: q,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: U, _context: e }),
    (e.Consumer = e)
  );
};
r.createElement = I;
r.createFactory = function (e) {
  var t = I.bind(null, e);
  return (t.type = e), t;
};
r.createRef = function () {
  return { current: null };
};
r.forwardRef = function (e) {
  return { $$typeof: L, render: e };
};
r.isValidElement = w;
r.lazy = function (e) {
  return { $$typeof: B, _payload: { _status: -1, _result: e }, _init: J };
};
r.memo = function (e, t) {
  return { $$typeof: z, type: e, compare: t === void 0 ? null : t };
};
r.startTransition = function (e) {
  var t = h.transition;
  h.transition = {};
  try {
    e();
  } finally {
    h.transition = t;
  }
};
r.unstable_act = T;
r.useCallback = function (e, t) {
  return l.current.useCallback(e, t);
};
r.useContext = function (e) {
  return l.current.useContext(e);
};
r.useDebugValue = function () {};
r.useDeferredValue = function (e) {
  return l.current.useDeferredValue(e);
};
r.useEffect = function (e, t) {
  return l.current.useEffect(e, t);
};
r.useId = function () {
  return l.current.useId();
};
r.useImperativeHandle = function (e, t, n) {
  return l.current.useImperativeHandle(e, t, n);
};
r.useInsertionEffect = function (e, t) {
  return l.current.useInsertionEffect(e, t);
};
r.useLayoutEffect = function (e, t) {
  return l.current.useLayoutEffect(e, t);
};
r.useMemo = function (e, t) {
  return l.current.useMemo(e, t);
};
r.useReducer = function (e, t, n) {
  return l.current.useReducer(e, t, n);
};
r.useRef = function (e) {
  return l.current.useRef(e);
};
r.useState = function (e) {
  return l.current.useState(e);
};
r.useSyncExternalStore = function (e, t, n) {
  return l.current.useSyncExternalStore(e, t, n);
};
r.useTransition = function () {
  return l.current.useTransition();
};
r.version = '18.3.1';
j.exports = r;
var Q = j.exports;
const Z = D(Q);
export { Z as R, Y as a, X as c, D as g, Q as r };
