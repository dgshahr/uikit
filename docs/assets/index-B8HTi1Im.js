import { c as tn } from './index-RYns6xqu.js';
var Ue = { exports: {} };
(function (r, t) {
  (function (n, a) {
    a(t);
  })(tn, function (n) {
    function a(e) {
      return e.text !== void 0 && e.text !== ''
        ? `'${e.type}' with value '${e.text}'`
        : `'${e.type}'`;
    }
    class s extends Error {
      constructor(o) {
        super(`No parslet found for token: ${a(o)}`),
          (this.token = o),
          Object.setPrototypeOf(this, s.prototype);
      }
      getToken() {
        return this.token;
      }
    }
    class i extends Error {
      constructor(o) {
        super(`The parsing ended early. The next token was: ${a(o)}`),
          (this.token = o),
          Object.setPrototypeOf(this, i.prototype);
      }
      getToken() {
        return this.token;
      }
    }
    class l extends Error {
      constructor(o, c) {
        let d = `Unexpected type: '${o.type}'.`;
        c !== void 0 && (d += ` Message: ${c}`), super(d), Object.setPrototypeOf(this, l.prototype);
      }
    }
    function p(e) {
      return (o) => (o.startsWith(e) ? { type: e, text: e } : null);
    }
    function y(e) {
      let o = 0,
        c;
      const d = e[0];
      let h = !1;
      if (d !== "'" && d !== '"') return null;
      for (; o < e.length; ) {
        if ((o++, (c = e[o]), !h && c === d)) {
          o++;
          break;
        }
        h = !h && c === '\\';
      }
      if (c !== d) throw new Error('Unterminated String');
      return e.slice(0, o);
    }
    const f =
        /[$_\p{ID_Start}]|\\u\p{Hex_Digit}{4}|\\u\{0*(?:\p{Hex_Digit}{1,5}|10\p{Hex_Digit}{4})\}/u,
      T =
        /[$\-\p{ID_Continue}\u200C\u200D]|\\u\p{Hex_Digit}{4}|\\u\{0*(?:\p{Hex_Digit}{1,5}|10\p{Hex_Digit}{4})\}/u;
    function v(e) {
      let o = e[0];
      if (!f.test(o)) return null;
      let c = 1;
      do {
        if (((o = e[c]), !T.test(o))) break;
        c++;
      } while (c < e.length);
      return e.slice(0, c);
    }
    const _ = /^(NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity))/;
    function b(e) {
      var o, c;
      return (c = (o = _.exec(e)) === null || o === void 0 ? void 0 : o[0]) !== null && c !== void 0
        ? c
        : null;
    }
    const E = (e) => {
      const o = v(e);
      return o == null ? null : { type: 'Identifier', text: o };
    };
    function x(e) {
      return (o) => {
        if (!o.startsWith(e)) return null;
        const c = o[e.length];
        return c !== void 0 && T.test(c) ? null : { type: e, text: e };
      };
    }
    const U = (e) => {
        const o = y(e);
        return o == null ? null : { type: 'StringValue', text: o };
      },
      R = (e) => (e.length > 0 ? null : { type: 'EOF', text: '' }),
      A = (e) => {
        const o = b(e);
        return o === null ? null : { type: 'Number', text: o };
      },
      j = [
        R,
        p('=>'),
        p('('),
        p(')'),
        p('{'),
        p('}'),
        p('['),
        p(']'),
        p('|'),
        p('&'),
        p('<'),
        p('>'),
        p(','),
        p(';'),
        p('*'),
        p('?'),
        p('!'),
        p('='),
        p(':'),
        p('...'),
        p('.'),
        p('#'),
        p('~'),
        p('/'),
        p('@'),
        x('undefined'),
        x('null'),
        x('function'),
        x('this'),
        x('new'),
        x('module'),
        x('event'),
        x('external'),
        x('typeof'),
        x('keyof'),
        x('readonly'),
        x('import'),
        x('is'),
        x('in'),
        x('asserts'),
        A,
        E,
        U,
      ],
      S = /^\s*\n\s*/;
    class L {
      static create(o) {
        const c = this.read(o);
        o = c.text;
        const d = this.read(o);
        return (o = d.text), new L(o, void 0, c.token, d.token);
      }
      constructor(o, c, d, h) {
        (this.text = ''), (this.text = o), (this.previous = c), (this.current = d), (this.next = h);
      }
      static read(o, c = !1) {
        (c = c || S.test(o)), (o = o.trim());
        for (const d of j) {
          const h = d(o);
          if (h !== null) {
            const w = Object.assign(Object.assign({}, h), { startOfLine: c });
            return (o = o.slice(w.text.length)), { text: o, token: w };
          }
        }
        throw new Error('Unexpected Token ' + o);
      }
      advance() {
        const o = L.read(this.text);
        return new L(o.text, this.current, this.next, o.token);
      }
    }
    function J(e) {
      if (e === void 0) throw new Error('Unexpected undefined');
      if (
        e.type === 'JsdocTypeKeyValue' ||
        e.type === 'JsdocTypeParameterList' ||
        e.type === 'JsdocTypeProperty' ||
        e.type === 'JsdocTypeReadonlyProperty' ||
        e.type === 'JsdocTypeObjectField' ||
        e.type === 'JsdocTypeJsdocObjectField' ||
        e.type === 'JsdocTypeIndexSignature' ||
        e.type === 'JsdocTypeMappedType'
      )
        throw new l(e);
      return e;
    }
    function V(e) {
      return e.type === 'JsdocTypeKeyValue' ? O(e) : J(e);
    }
    function k(e) {
      return e.type === 'JsdocTypeName' ? e : O(e);
    }
    function O(e) {
      if (e.type !== 'JsdocTypeKeyValue') throw new l(e);
      return e;
    }
    function C(e) {
      var o;
      if (e.type === 'JsdocTypeVariadic') {
        if (((o = e.element) === null || o === void 0 ? void 0 : o.type) === 'JsdocTypeName')
          return e;
        throw new l(e);
      }
      if (e.type !== 'JsdocTypeNumber' && e.type !== 'JsdocTypeName') throw new l(e);
      return e;
    }
    function $(e) {
      return e.type === 'JsdocTypeIndexSignature' || e.type === 'JsdocTypeMappedType';
    }
    var g;
    (function (e) {
      (e[(e.ALL = 0)] = 'ALL'),
        (e[(e.PARAMETER_LIST = 1)] = 'PARAMETER_LIST'),
        (e[(e.OBJECT = 2)] = 'OBJECT'),
        (e[(e.KEY_VALUE = 3)] = 'KEY_VALUE'),
        (e[(e.INDEX_BRACKETS = 4)] = 'INDEX_BRACKETS'),
        (e[(e.UNION = 5)] = 'UNION'),
        (e[(e.INTERSECTION = 6)] = 'INTERSECTION'),
        (e[(e.PREFIX = 7)] = 'PREFIX'),
        (e[(e.INFIX = 8)] = 'INFIX'),
        (e[(e.TUPLE = 9)] = 'TUPLE'),
        (e[(e.SYMBOL = 10)] = 'SYMBOL'),
        (e[(e.OPTIONAL = 11)] = 'OPTIONAL'),
        (e[(e.NULLABLE = 12)] = 'NULLABLE'),
        (e[(e.KEY_OF_TYPE_OF = 13)] = 'KEY_OF_TYPE_OF'),
        (e[(e.FUNCTION = 14)] = 'FUNCTION'),
        (e[(e.ARROW = 15)] = 'ARROW'),
        (e[(e.ARRAY_BRACKETS = 16)] = 'ARRAY_BRACKETS'),
        (e[(e.GENERIC = 17)] = 'GENERIC'),
        (e[(e.NAME_PATH = 18)] = 'NAME_PATH'),
        (e[(e.PARENTHESIS = 19)] = 'PARENTHESIS'),
        (e[(e.SPECIAL_TYPES = 20)] = 'SPECIAL_TYPES');
    })(g || (g = {}));
    class P {
      constructor(o, c, d) {
        (this.grammar = o),
          typeof c == 'string' ? (this._lexer = L.create(c)) : (this._lexer = c),
          (this.baseParser = d);
      }
      get lexer() {
        return this._lexer;
      }
      parse() {
        const o = this.parseType(g.ALL);
        if (this.lexer.current.type !== 'EOF') throw new i(this.lexer.current);
        return o;
      }
      parseType(o) {
        return J(this.parseIntermediateType(o));
      }
      parseIntermediateType(o) {
        const c = this.tryParslets(null, o);
        if (c === null) throw new s(this.lexer.current);
        return this.parseInfixIntermediateType(c, o);
      }
      parseInfixIntermediateType(o, c) {
        let d = this.tryParslets(o, c);
        for (; d !== null; ) (o = d), (d = this.tryParslets(o, c));
        return o;
      }
      tryParslets(o, c) {
        for (const d of this.grammar) {
          const h = d(this, c, o);
          if (h !== null) return h;
        }
        return null;
      }
      consume(o) {
        return (
          Array.isArray(o) || (o = [o]),
          o.includes(this.lexer.current.type) ? ((this._lexer = this.lexer.advance()), !0) : !1
        );
      }
      acceptLexerState(o) {
        this._lexer = o.lexer;
      }
    }
    function Y(e) {
      return e === 'EOF' || e === '|' || e === ',' || e === ')' || e === '>';
    }
    const B = (e, o, c) => {
      const d = e.lexer.current.type,
        h = e.lexer.next.type;
      return (c == null && d === '?' && !Y(h)) || (c != null && d === '?')
        ? (e.consume('?'),
          c == null
            ? {
                type: 'JsdocTypeNullable',
                element: e.parseType(g.NULLABLE),
                meta: { position: 'prefix' },
              }
            : { type: 'JsdocTypeNullable', element: J(c), meta: { position: 'suffix' } })
        : null;
    };
    function I(e) {
      const o = (c, d, h) => {
        const w = c.lexer.current.type,
          N = c.lexer.next.type;
        if (h === null) {
          if ('parsePrefix' in e && e.accept(w, N)) return e.parsePrefix(c);
        } else if ('parseInfix' in e && e.precedence > d && e.accept(w, N))
          return e.parseInfix(c, h);
        return null;
      };
      return Object.defineProperty(o, 'name', { value: e.name }), o;
    }
    const z = I({
        name: 'optionalParslet',
        accept: (e) => e === '=',
        precedence: g.OPTIONAL,
        parsePrefix: (e) => (
          e.consume('='),
          {
            type: 'JsdocTypeOptional',
            element: e.parseType(g.OPTIONAL),
            meta: { position: 'prefix' },
          }
        ),
        parseInfix: (e, o) => (
          e.consume('='), { type: 'JsdocTypeOptional', element: J(o), meta: { position: 'suffix' } }
        ),
      }),
      se = I({
        name: 'numberParslet',
        accept: (e) => e === 'Number',
        parsePrefix: (e) => {
          const o = parseFloat(e.lexer.current.text);
          return e.consume('Number'), { type: 'JsdocTypeNumber', value: o };
        },
      }),
      xr = I({
        name: 'parenthesisParslet',
        accept: (e) => e === '(',
        parsePrefix: (e) => {
          if ((e.consume('('), e.consume(')')))
            return { type: 'JsdocTypeParameterList', elements: [] };
          const o = e.parseIntermediateType(g.ALL);
          if (!e.consume(')')) throw new Error('Unterminated parenthesis');
          return o.type === 'JsdocTypeParameterList'
            ? o
            : o.type === 'JsdocTypeKeyValue'
              ? { type: 'JsdocTypeParameterList', elements: [o] }
              : { type: 'JsdocTypeParenthesis', element: J(o) };
        },
      }),
      _r = I({
        name: 'specialTypesParslet',
        accept: (e, o) => (e === '?' && Y(o)) || e === 'null' || e === 'undefined' || e === '*',
        parsePrefix: (e) => {
          if (e.consume('null')) return { type: 'JsdocTypeNull' };
          if (e.consume('undefined')) return { type: 'JsdocTypeUndefined' };
          if (e.consume('*')) return { type: 'JsdocTypeAny' };
          if (e.consume('?')) return { type: 'JsdocTypeUnknown' };
          throw new Error('Unacceptable token: ' + e.lexer.current.text);
        },
      }),
      Er = I({
        name: 'notNullableParslet',
        accept: (e) => e === '!',
        precedence: g.NULLABLE,
        parsePrefix: (e) => (
          e.consume('!'),
          {
            type: 'JsdocTypeNotNullable',
            element: e.parseType(g.NULLABLE),
            meta: { position: 'prefix' },
          }
        ),
        parseInfix: (e, o) => (
          e.consume('!'),
          { type: 'JsdocTypeNotNullable', element: J(o), meta: { position: 'suffix' } }
        ),
      });
    function Nr({ allowTrailingComma: e }) {
      return I({
        name: 'parameterListParslet',
        accept: (o) => o === ',',
        precedence: g.PARAMETER_LIST,
        parseInfix: (o, c) => {
          const d = [V(c)];
          o.consume(',');
          do
            try {
              const h = o.parseIntermediateType(g.PARAMETER_LIST);
              d.push(V(h));
            } catch (h) {
              if (e && h instanceof s) break;
              throw h;
            }
          while (o.consume(','));
          if (d.length > 0 && d.slice(0, -1).some((h) => h.type === 'JsdocTypeVariadic'))
            throw new Error('Only the last parameter may be a rest parameter');
          return { type: 'JsdocTypeParameterList', elements: d };
        },
      });
    }
    const Pr = I({
        name: 'genericParslet',
        accept: (e, o) => e === '<' || (e === '.' && o === '<'),
        precedence: g.GENERIC,
        parseInfix: (e, o) => {
          const c = e.consume('.');
          e.consume('<');
          const d = [];
          do d.push(e.parseType(g.PARAMETER_LIST));
          while (e.consume(','));
          if (!e.consume('>')) throw new Error('Unterminated generic parameter list');
          return {
            type: 'JsdocTypeGeneric',
            left: J(o),
            elements: d,
            meta: { brackets: 'angle', dot: c },
          };
        },
      }),
      Or = I({
        name: 'unionParslet',
        accept: (e) => e === '|',
        precedence: g.UNION,
        parseInfix: (e, o) => {
          e.consume('|');
          const c = [];
          do c.push(e.parseType(g.UNION));
          while (e.consume('|'));
          return { type: 'JsdocTypeUnion', elements: [J(o), ...c] };
        },
      }),
      Oe = [B, z, se, xr, _r, Er, Nr({ allowTrailingComma: !0 }), Pr, Or, z];
    function he({ allowSquareBracketsOnAnyType: e, allowJsdocNamePaths: o, pathGrammar: c }) {
      return function (h, w, N) {
        if (N == null || w >= g.NAME_PATH) return null;
        const F = h.lexer.current.type,
          q = h.lexer.next.type;
        if (
          !(
            (F === '.' && q !== '<') ||
            (F === '[' && (e || N.type === 'JsdocTypeName')) ||
            (o && (F === '~' || F === '#'))
          )
        )
          return null;
        let G,
          be = !1;
        h.consume('.')
          ? (G = 'property')
          : h.consume('[')
            ? ((G = 'property-brackets'), (be = !0))
            : h.consume('~')
              ? (G = 'inner')
              : (h.consume('#'), (G = 'instance'));
        const dt = c !== null ? new P(c, h.lexer, h) : h,
          W = dt.parseIntermediateType(g.NAME_PATH);
        h.acceptLexerState(dt);
        let pe;
        switch (W.type) {
          case 'JsdocTypeName':
            pe = { type: 'JsdocTypeProperty', value: W.value, meta: { quote: void 0 } };
            break;
          case 'JsdocTypeNumber':
            pe = {
              type: 'JsdocTypeProperty',
              value: W.value.toString(10),
              meta: { quote: void 0 },
            };
            break;
          case 'JsdocTypeStringValue':
            pe = { type: 'JsdocTypeProperty', value: W.value, meta: { quote: W.meta.quote } };
            break;
          case 'JsdocTypeSpecialNamePath':
            if (W.specialType === 'event') pe = W;
            else
              throw new l(
                W,
                "Type 'JsdocTypeSpecialNamePath' is only allowed with specialType 'event'",
              );
            break;
          default:
            throw new l(
              W,
              "Expecting 'JsdocTypeName', 'JsdocTypeNumber', 'JsdocStringValue' or 'JsdocTypeSpecialNamePath'",
            );
        }
        if (be && !h.consume(']')) {
          const ft = h.lexer.current;
          throw new Error(
            `Unterminated square brackets. Next token is '${ft.type}' with text '${ft.text}'`,
          );
        }
        return { type: 'JsdocTypeNamePath', left: J(N), right: pe, pathType: G };
      };
    }
    function Q({ allowedAdditionalTokens: e }) {
      return I({
        name: 'nameParslet',
        accept: (o) => o === 'Identifier' || o === 'this' || o === 'new' || e.includes(o),
        parsePrefix: (o) => {
          const { type: c, text: d } = o.lexer.current;
          return o.consume(c), { type: 'JsdocTypeName', value: d };
        },
      });
    }
    const ce = I({
      name: 'stringValueParslet',
      accept: (e) => e === 'StringValue',
      parsePrefix: (e) => {
        const o = e.lexer.current.text;
        return (
          e.consume('StringValue'),
          {
            type: 'JsdocTypeStringValue',
            value: o.slice(1, -1),
            meta: { quote: o[0] === "'" ? 'single' : 'double' },
          }
        );
      },
    });
    function ve({ pathGrammar: e, allowedTypes: o }) {
      return I({
        name: 'specialNamePathParslet',
        accept: (c) => o.includes(c),
        parsePrefix: (c) => {
          const d = c.lexer.current.type;
          if ((c.consume(d), !c.consume(':'))) return { type: 'JsdocTypeName', value: d };
          let h,
            w = c.lexer.current;
          if (c.consume('StringValue'))
            h = {
              type: 'JsdocTypeSpecialNamePath',
              value: w.text.slice(1, -1),
              specialType: d,
              meta: { quote: w.text[0] === "'" ? 'single' : 'double' },
            };
          else {
            let q = '';
            const K = ['Identifier', '@', '/'];
            for (; K.some((G) => c.consume(G)); ) (q += w.text), (w = c.lexer.current);
            h = {
              type: 'JsdocTypeSpecialNamePath',
              value: q,
              specialType: d,
              meta: { quote: void 0 },
            };
          }
          const N = new P(e, c.lexer, c),
            F = N.parseInfixIntermediateType(h, g.ALL);
          return c.acceptLexerState(N), J(F);
        },
      });
    }
    const at = [
        Q({ allowedAdditionalTokens: ['external', 'module'] }),
        ce,
        se,
        he({ allowSquareBracketsOnAnyType: !1, allowJsdocNamePaths: !0, pathGrammar: null }),
      ],
      ie = [...at, ve({ allowedTypes: ['event'], pathGrammar: at })];
    function Se(e) {
      let o;
      if (e.type === 'JsdocTypeParameterList') o = e.elements;
      else if (e.type === 'JsdocTypeParenthesis') o = [e.element];
      else throw new l(e);
      return o.map((c) => V(c));
    }
    function Sr(e) {
      const o = Se(e);
      if (o.some((c) => c.type === 'JsdocTypeKeyValue'))
        throw new Error('No parameter should be named');
      return o;
    }
    function je({
      allowNamedParameters: e,
      allowNoReturnType: o,
      allowWithoutParenthesis: c,
      allowNewAsFunctionKeyword: d,
    }) {
      return I({
        name: 'functionParslet',
        accept: (h, w) => h === 'function' || (d && h === 'new' && w === '('),
        parsePrefix: (h) => {
          const w = h.consume('new');
          h.consume('function');
          const N = h.lexer.current.type === '(';
          if (!N) {
            if (!c) throw new Error('function is missing parameter list');
            return { type: 'JsdocTypeName', value: 'function' };
          }
          let F = {
            type: 'JsdocTypeFunction',
            parameters: [],
            arrow: !1,
            constructor: w,
            parenthesis: N,
          };
          const q = h.parseIntermediateType(g.FUNCTION);
          if (e === void 0) F.parameters = Sr(q);
          else {
            if (w && q.type === 'JsdocTypeFunction' && q.arrow)
              return (F = q), (F.constructor = !0), F;
            F.parameters = Se(q);
            for (const K of F.parameters)
              if (K.type === 'JsdocTypeKeyValue' && !e.includes(K.key))
                throw new Error(
                  `only allowed named parameters are ${e.join(', ')} but got ${K.type}`,
                );
          }
          if (h.consume(':')) F.returnType = h.parseType(g.PREFIX);
          else if (!o) throw new Error('function is missing return type');
          return F;
        },
      });
    }
    function ke({ allowPostfix: e, allowEnclosingBrackets: o }) {
      return I({
        name: 'variadicParslet',
        accept: (c) => c === '...',
        precedence: g.PREFIX,
        parsePrefix: (c) => {
          c.consume('...');
          const d = o && c.consume('[');
          try {
            const h = c.parseType(g.PREFIX);
            if (d && !c.consume(']')) throw new Error("Unterminated variadic type. Missing ']'");
            return {
              type: 'JsdocTypeVariadic',
              element: J(h),
              meta: { position: 'prefix', squareBrackets: d },
            };
          } catch (h) {
            if (h instanceof s) {
              if (d) throw new Error('Empty square brackets for variadic are not allowed.');
              return { type: 'JsdocTypeVariadic', meta: { position: void 0, squareBrackets: !1 } };
            } else throw h;
          }
        },
        parseInfix: e
          ? (c, d) => (
              c.consume('...'),
              {
                type: 'JsdocTypeVariadic',
                element: J(d),
                meta: { position: 'suffix', squareBrackets: !1 },
              }
            )
          : void 0,
      });
    }
    const ot = I({
        name: 'symbolParslet',
        accept: (e) => e === '(',
        precedence: g.SYMBOL,
        parseInfix: (e, o) => {
          if (o.type !== 'JsdocTypeName')
            throw new Error("Symbol expects a name on the left side. (Reacting on '(')");
          e.consume('(');
          const c = { type: 'JsdocTypeSymbol', value: o.value };
          if (!e.consume(')')) {
            const d = e.parseIntermediateType(g.SYMBOL);
            if (((c.element = C(d)), !e.consume(')')))
              throw new Error('Symbol does not end after value');
          }
          return c;
        },
      }),
      st = I({
        name: 'arrayBracketsParslet',
        precedence: g.ARRAY_BRACKETS,
        accept: (e, o) => e === '[' && o === ']',
        parseInfix: (e, o) => (
          e.consume('['),
          e.consume(']'),
          {
            type: 'JsdocTypeGeneric',
            left: { type: 'JsdocTypeName', value: 'Array' },
            elements: [J(o)],
            meta: { brackets: 'square', dot: !1 },
          }
        ),
      });
    function Ae({ objectFieldGrammar: e, allowKeyTypes: o }) {
      return I({
        name: 'objectParslet',
        accept: (c) => c === '{',
        parsePrefix: (c) => {
          c.consume('{');
          const d = { type: 'JsdocTypeObject', meta: { separator: 'comma' }, elements: [] };
          if (!c.consume('}')) {
            let h;
            const w = new P(e, c.lexer, c);
            for (;;) {
              w.acceptLexerState(c);
              let N = w.parseIntermediateType(g.OBJECT);
              c.acceptLexerState(w), N === void 0 && o && (N = c.parseIntermediateType(g.OBJECT));
              let F = !1;
              if (
                (N.type === 'JsdocTypeNullable' && ((F = !0), (N = N.element)),
                N.type === 'JsdocTypeNumber' ||
                  N.type === 'JsdocTypeName' ||
                  N.type === 'JsdocTypeStringValue')
              ) {
                let K;
                N.type === 'JsdocTypeStringValue' && (K = N.meta.quote),
                  d.elements.push({
                    type: 'JsdocTypeObjectField',
                    key: N.value.toString(),
                    right: void 0,
                    optional: F,
                    readonly: !1,
                    meta: { quote: K },
                  });
              } else if (
                N.type === 'JsdocTypeObjectField' ||
                N.type === 'JsdocTypeJsdocObjectField'
              )
                d.elements.push(N);
              else throw new l(N);
              if (c.lexer.current.startOfLine) h = 'linebreak';
              else if (c.consume(',')) h = 'comma';
              else if (c.consume(';')) h = 'semicolon';
              else break;
              if (c.lexer.current.type === '}') break;
            }
            if (((d.meta.separator = h ?? 'comma'), !c.consume('}')))
              throw new Error("Unterminated record type. Missing '}'");
          }
          return d;
        },
      });
    }
    function Ie({
      allowSquaredProperties: e,
      allowKeyTypes: o,
      allowReadonly: c,
      allowOptional: d,
    }) {
      return I({
        name: 'objectFieldParslet',
        precedence: g.KEY_VALUE,
        accept: (h) => h === ':',
        parseInfix: (h, w) => {
          var N;
          let F = !1,
            q = !1;
          d && w.type === 'JsdocTypeNullable' && ((F = !0), (w = w.element)),
            c && w.type === 'JsdocTypeReadonlyProperty' && ((q = !0), (w = w.element));
          const K = (N = h.baseParser) !== null && N !== void 0 ? N : h;
          if (
            (K.acceptLexerState(h),
            w.type === 'JsdocTypeNumber' ||
              w.type === 'JsdocTypeName' ||
              w.type === 'JsdocTypeStringValue' ||
              $(w))
          ) {
            if ($(w) && !e) throw new l(w);
            K.consume(':');
            let G;
            w.type === 'JsdocTypeStringValue' && (G = w.meta.quote);
            const be = K.parseType(g.KEY_VALUE);
            return (
              h.acceptLexerState(K),
              {
                type: 'JsdocTypeObjectField',
                key: $(w) ? w : w.value.toString(),
                right: be,
                optional: F,
                readonly: q,
                meta: { quote: G },
              }
            );
          } else {
            if (!o) throw new l(w);
            K.consume(':');
            const G = K.parseType(g.KEY_VALUE);
            return (
              h.acceptLexerState(K), { type: 'JsdocTypeJsdocObjectField', left: J(w), right: G }
            );
          }
        },
      });
    }
    function Re({ allowOptional: e, allowVariadic: o }) {
      return I({
        name: 'keyValueParslet',
        precedence: g.KEY_VALUE,
        accept: (c) => c === ':',
        parseInfix: (c, d) => {
          let h = !1,
            w = !1;
          if (
            (e && d.type === 'JsdocTypeNullable' && ((h = !0), (d = d.element)),
            o &&
              d.type === 'JsdocTypeVariadic' &&
              d.element !== void 0 &&
              ((w = !0), (d = d.element)),
            d.type !== 'JsdocTypeName')
          )
            throw new l(d);
          c.consume(':');
          const N = c.parseType(g.KEY_VALUE);
          return { type: 'JsdocTypeKeyValue', key: d.value, right: N, optional: h, variadic: w };
        },
      });
    }
    const it = [
        ...Oe,
        je({
          allowWithoutParenthesis: !0,
          allowNamedParameters: ['this', 'new'],
          allowNoReturnType: !0,
          allowNewAsFunctionKeyword: !1,
        }),
        ce,
        ve({ allowedTypes: ['module', 'external', 'event'], pathGrammar: ie }),
        ke({ allowEnclosingBrackets: !0, allowPostfix: !0 }),
        Q({ allowedAdditionalTokens: ['keyof'] }),
        ot,
        st,
        he({ allowSquareBracketsOnAnyType: !1, allowJsdocNamePaths: !0, pathGrammar: ie }),
      ],
      jr = [
        ...it,
        Ae({
          objectFieldGrammar: [
            Q({ allowedAdditionalTokens: ['module', 'in'] }),
            Ie({
              allowSquaredProperties: !1,
              allowKeyTypes: !0,
              allowOptional: !1,
              allowReadonly: !1,
            }),
            ...it,
          ],
          allowKeyTypes: !0,
        }),
        Re({ allowOptional: !0, allowVariadic: !0 }),
      ],
      ct = I({
        name: 'typeOfParslet',
        accept: (e) => e === 'typeof',
        parsePrefix: (e) => (
          e.consume('typeof'),
          { type: 'JsdocTypeTypeof', element: J(e.parseType(g.KEY_OF_TYPE_OF)) }
        ),
      }),
      kr = [
        Q({ allowedAdditionalTokens: ['module', 'keyof', 'event', 'external', 'in'] }),
        B,
        z,
        ce,
        se,
        Ie({ allowSquaredProperties: !1, allowKeyTypes: !1, allowOptional: !1, allowReadonly: !1 }),
      ],
      Ar = [
        ...Oe,
        Ae({ allowKeyTypes: !1, objectFieldGrammar: kr }),
        Q({ allowedAdditionalTokens: ['event', 'external', 'in'] }),
        ct,
        je({
          allowWithoutParenthesis: !1,
          allowNamedParameters: ['this', 'new'],
          allowNoReturnType: !0,
          allowNewAsFunctionKeyword: !1,
        }),
        ke({ allowEnclosingBrackets: !1, allowPostfix: !1 }),
        Q({ allowedAdditionalTokens: ['keyof'] }),
        ve({ allowedTypes: ['module'], pathGrammar: ie }),
        he({ allowSquareBracketsOnAnyType: !1, allowJsdocNamePaths: !0, pathGrammar: ie }),
        Re({ allowOptional: !1, allowVariadic: !1 }),
        ot,
      ],
      Ir = I({
        name: 'assertsParslet',
        accept: (e) => e === 'asserts',
        parsePrefix: (e) => {
          e.consume('asserts');
          const o = e.parseIntermediateType(g.SYMBOL);
          if (o.type !== 'JsdocTypeName')
            throw new l(o, 'A typescript asserts always has to have a name on the left side.');
          return (
            e.consume('is'),
            { type: 'JsdocTypeAsserts', left: o, right: J(e.parseIntermediateType(g.INFIX)) }
          );
        },
      });
    function Rr({ allowQuestionMark: e }) {
      return I({
        name: 'tupleParslet',
        accept: (o) => o === '[',
        parsePrefix: (o) => {
          o.consume('[');
          const c = { type: 'JsdocTypeTuple', elements: [] };
          if (o.consume(']')) return c;
          const d = o.parseIntermediateType(g.ALL);
          if (
            (d.type === 'JsdocTypeParameterList'
              ? d.elements[0].type === 'JsdocTypeKeyValue'
                ? (c.elements = d.elements.map(O))
                : (c.elements = d.elements.map(J))
              : d.type === 'JsdocTypeKeyValue'
                ? (c.elements = [O(d)])
                : (c.elements = [J(d)]),
            !o.consume(']'))
          )
            throw new Error("Unterminated '['");
          if (!e && c.elements.some((h) => h.type === 'JsdocTypeUnknown'))
            throw new Error('Question mark in tuple not allowed');
          return c;
        },
      });
    }
    const Fr = I({
        name: 'keyOfParslet',
        accept: (e) => e === 'keyof',
        parsePrefix: (e) => (
          e.consume('keyof'), { type: 'JsdocTypeKeyof', element: J(e.parseType(g.KEY_OF_TYPE_OF)) }
        ),
      }),
      Lr = I({
        name: 'importParslet',
        accept: (e) => e === 'import',
        parsePrefix: (e) => {
          if ((e.consume('import'), !e.consume('(')))
            throw new Error('Missing parenthesis after import keyword');
          const o = e.parseType(g.PREFIX);
          if (o.type !== 'JsdocTypeStringValue')
            throw new Error('Only string values are allowed as paths for imports');
          if (!e.consume(')')) throw new Error('Missing closing parenthesis after import keyword');
          return { type: 'JsdocTypeImport', element: o };
        },
      }),
      Ur = I({
        name: 'readonlyPropertyParslet',
        accept: (e) => e === 'readonly',
        parsePrefix: (e) => (
          e.consume('readonly'),
          { type: 'JsdocTypeReadonlyProperty', element: e.parseType(g.KEY_VALUE) }
        ),
      }),
      Vr = I({
        name: 'arrowFunctionParslet',
        precedence: g.ARROW,
        accept: (e) => e === '=>',
        parseInfix: (e, o) => (
          e.consume('=>'),
          {
            type: 'JsdocTypeFunction',
            parameters: Se(o).map(k),
            arrow: !0,
            constructor: !1,
            parenthesis: !0,
            returnType: e.parseType(g.OBJECT),
          }
        ),
      }),
      Dr = I({
        name: 'intersectionParslet',
        accept: (e) => e === '&',
        precedence: g.INTERSECTION,
        parseInfix: (e, o) => {
          e.consume('&');
          const c = [];
          do c.push(e.parseType(g.INTERSECTION));
          while (e.consume('&'));
          return { type: 'JsdocTypeIntersection', elements: [J(o), ...c] };
        },
      }),
      $r = I({
        name: 'predicateParslet',
        precedence: g.INFIX,
        accept: (e) => e === 'is',
        parseInfix: (e, o) => {
          if (o.type !== 'JsdocTypeName')
            throw new l(o, 'A typescript predicate always has to have a name on the left side.');
          return (
            e.consume('is'),
            { type: 'JsdocTypePredicate', left: o, right: J(e.parseIntermediateType(g.INFIX)) }
          );
        },
      }),
      Cr = I({
        name: 'objectSquareBracketPropertyParslet',
        accept: (e) => e === '[',
        parsePrefix: (e) => {
          if (e.baseParser === void 0) throw new Error('Only allowed inside object grammar');
          e.consume('[');
          const o = e.lexer.current.text;
          e.consume('Identifier');
          let c;
          if (e.consume(':')) {
            const d = e.baseParser;
            d.acceptLexerState(e),
              (c = {
                type: 'JsdocTypeIndexSignature',
                key: o,
                right: d.parseType(g.INDEX_BRACKETS),
              }),
              e.acceptLexerState(d);
          } else if (e.consume('in')) {
            const d = e.baseParser;
            d.acceptLexerState(e),
              (c = { type: 'JsdocTypeMappedType', key: o, right: d.parseType(g.ARRAY_BRACKETS) }),
              e.acceptLexerState(d);
          } else throw new Error("Missing ':' or 'in' inside square bracketed property.");
          if (!e.consume(']')) throw new Error('Unterminated square brackets');
          return c;
        },
      }),
      Kr = [
        Ur,
        Q({ allowedAdditionalTokens: ['module', 'event', 'keyof', 'event', 'external', 'in'] }),
        B,
        z,
        ce,
        se,
        Ie({ allowSquaredProperties: !0, allowKeyTypes: !1, allowOptional: !0, allowReadonly: !0 }),
        Cr,
      ],
      Mr = [
        ...Oe,
        Ae({ allowKeyTypes: !1, objectFieldGrammar: Kr }),
        ct,
        Fr,
        Lr,
        ce,
        je({
          allowWithoutParenthesis: !0,
          allowNoReturnType: !1,
          allowNamedParameters: ['this', 'new', 'args'],
          allowNewAsFunctionKeyword: !0,
        }),
        Rr({ allowQuestionMark: !1 }),
        ke({ allowEnclosingBrackets: !1, allowPostfix: !1 }),
        Ir,
        Q({ allowedAdditionalTokens: ['event', 'external', 'in'] }),
        ve({ allowedTypes: ['module'], pathGrammar: ie }),
        st,
        Vr,
        he({ allowSquareBracketsOnAnyType: !0, allowJsdocNamePaths: !1, pathGrammar: ie }),
        Dr,
        $r,
        Re({ allowVariadic: !0, allowOptional: !0 }),
      ];
    function lt(e, o) {
      switch (o) {
        case 'closure':
          return new P(Ar, e).parse();
        case 'jsdoc':
          return new P(jr, e).parse();
        case 'typescript':
          return new P(Mr, e).parse();
      }
    }
    function qr(e, o = ['typescript', 'closure', 'jsdoc']) {
      let c;
      for (const d of o)
        try {
          return lt(e, d);
        } catch (h) {
          c = h;
        }
      throw c;
    }
    function le(e, o) {
      const c = e[o.type];
      if (c === void 0)
        throw new Error(`In this set of transform rules exists no rule for type ${o.type}.`);
      return c(o, (d) => le(e, d));
    }
    function M(e) {
      throw new Error('This transform is not available. Are you trying the correct parsing mode?');
    }
    function pt(e) {
      const o = { params: [] };
      for (const c of e.parameters)
        c.type === 'JsdocTypeKeyValue'
          ? c.key === 'this'
            ? (o.this = c.right)
            : c.key === 'new'
              ? (o.new = c.right)
              : o.params.push(c)
          : o.params.push(c);
      return o;
    }
    function ge(e, o, c) {
      return e === 'prefix' ? c + o : o + c;
    }
    function X(e, o) {
      switch (o) {
        case 'double':
          return `"${e}"`;
        case 'single':
          return `'${e}'`;
        case void 0:
          return e;
      }
    }
    function ut() {
      return {
        JsdocTypeParenthesis: (e, o) => `(${e.element !== void 0 ? o(e.element) : ''})`,
        JsdocTypeKeyof: (e, o) => `keyof ${o(e.element)}`,
        JsdocTypeFunction: (e, o) => {
          if (e.arrow) {
            if (e.returnType === void 0) throw new Error('Arrow function needs a return type.');
            let c = `(${e.parameters.map(o).join(', ')}) => ${o(e.returnType)}`;
            return e.constructor && (c = 'new ' + c), c;
          } else {
            let c = e.constructor ? 'new' : 'function';
            return (
              e.parenthesis &&
                ((c += `(${e.parameters.map(o).join(', ')})`),
                e.returnType !== void 0 && (c += `: ${o(e.returnType)}`)),
              c
            );
          }
        },
        JsdocTypeName: (e) => e.value,
        JsdocTypeTuple: (e, o) => `[${e.elements.map(o).join(', ')}]`,
        JsdocTypeVariadic: (e, o) =>
          e.meta.position === void 0 ? '...' : ge(e.meta.position, o(e.element), '...'),
        JsdocTypeNamePath: (e, o) => {
          const c = o(e.left),
            d = o(e.right);
          switch (e.pathType) {
            case 'inner':
              return `${c}~${d}`;
            case 'instance':
              return `${c}#${d}`;
            case 'property':
              return `${c}.${d}`;
            case 'property-brackets':
              return `${c}[${d}]`;
          }
        },
        JsdocTypeStringValue: (e) => X(e.value, e.meta.quote),
        JsdocTypeAny: () => '*',
        JsdocTypeGeneric: (e, o) => {
          if (e.meta.brackets === 'square') {
            const c = e.elements[0],
              d = o(c);
            return c.type === 'JsdocTypeUnion' || c.type === 'JsdocTypeIntersection'
              ? `(${d})[]`
              : `${d}[]`;
          } else return `${o(e.left)}${e.meta.dot ? '.' : ''}<${e.elements.map(o).join(', ')}>`;
        },
        JsdocTypeImport: (e, o) => `import(${o(e.element)})`,
        JsdocTypeObjectField: (e, o) => {
          let c = '';
          return (
            e.readonly && (c += 'readonly '),
            typeof e.key == 'string' ? (c += X(e.key, e.meta.quote)) : (c += o(e.key)),
            e.optional && (c += '?'),
            e.right === void 0 ? c : c + `: ${o(e.right)}`
          );
        },
        JsdocTypeJsdocObjectField: (e, o) => `${o(e.left)}: ${o(e.right)}`,
        JsdocTypeKeyValue: (e, o) => {
          let c = e.key;
          return (
            e.optional && (c += '?'),
            e.variadic && (c = '...' + c),
            e.right === void 0 ? c : c + `: ${o(e.right)}`
          );
        },
        JsdocTypeSpecialNamePath: (e) => `${e.specialType}:${X(e.value, e.meta.quote)}`,
        JsdocTypeNotNullable: (e, o) => ge(e.meta.position, o(e.element), '!'),
        JsdocTypeNull: () => 'null',
        JsdocTypeNullable: (e, o) => ge(e.meta.position, o(e.element), '?'),
        JsdocTypeNumber: (e) => e.value.toString(),
        JsdocTypeObject: (e, o) =>
          `{${e.elements.map(o).join((e.meta.separator === 'comma' ? ',' : ';') + ' ')}}`,
        JsdocTypeOptional: (e, o) => ge(e.meta.position, o(e.element), '='),
        JsdocTypeSymbol: (e, o) => `${e.value}(${e.element !== void 0 ? o(e.element) : ''})`,
        JsdocTypeTypeof: (e, o) => `typeof ${o(e.element)}`,
        JsdocTypeUndefined: () => 'undefined',
        JsdocTypeUnion: (e, o) => e.elements.map(o).join(' | '),
        JsdocTypeUnknown: () => '?',
        JsdocTypeIntersection: (e, o) => e.elements.map(o).join(' & '),
        JsdocTypeProperty: (e) => X(e.value, e.meta.quote),
        JsdocTypePredicate: (e, o) => `${o(e.left)} is ${o(e.right)}`,
        JsdocTypeIndexSignature: (e, o) => `[${e.key}: ${o(e.right)}]`,
        JsdocTypeMappedType: (e, o) => `[${e.key} in ${o(e.right)}]`,
        JsdocTypeAsserts: (e, o) => `asserts ${o(e.left)} is ${o(e.right)}`,
      };
    }
    const Br = ut();
    function Yr(e) {
      return le(Br, e);
    }
    const Gr = [
      'null',
      'true',
      'false',
      'break',
      'case',
      'catch',
      'class',
      'const',
      'continue',
      'debugger',
      'default',
      'delete',
      'do',
      'else',
      'export',
      'extends',
      'finally',
      'for',
      'function',
      'if',
      'import',
      'in',
      'instanceof',
      'new',
      'return',
      'super',
      'switch',
      'this',
      'throw',
      'try',
      'typeof',
      'var',
      'void',
      'while',
      'with',
      'yield',
    ];
    function Z(e) {
      const o = { type: 'NameExpression', name: e };
      return Gr.includes(e) && (o.reservedWord = !0), o;
    }
    const zr = {
      JsdocTypeOptional: (e, o) => {
        const c = o(e.element);
        return (c.optional = !0), c;
      },
      JsdocTypeNullable: (e, o) => {
        const c = o(e.element);
        return (c.nullable = !0), c;
      },
      JsdocTypeNotNullable: (e, o) => {
        const c = o(e.element);
        return (c.nullable = !1), c;
      },
      JsdocTypeVariadic: (e, o) => {
        if (e.element === void 0)
          throw new Error('dots without value are not allowed in catharsis mode');
        const c = o(e.element);
        return (c.repeatable = !0), c;
      },
      JsdocTypeAny: () => ({ type: 'AllLiteral' }),
      JsdocTypeNull: () => ({ type: 'NullLiteral' }),
      JsdocTypeStringValue: (e) => Z(X(e.value, e.meta.quote)),
      JsdocTypeUndefined: () => ({ type: 'UndefinedLiteral' }),
      JsdocTypeUnknown: () => ({ type: 'UnknownLiteral' }),
      JsdocTypeFunction: (e, o) => {
        const c = pt(e),
          d = { type: 'FunctionType', params: c.params.map(o) };
        return (
          c.this !== void 0 && (d.this = o(c.this)),
          c.new !== void 0 && (d.new = o(c.new)),
          e.returnType !== void 0 && (d.result = o(e.returnType)),
          d
        );
      },
      JsdocTypeGeneric: (e, o) => ({
        type: 'TypeApplication',
        applications: e.elements.map((c) => o(c)),
        expression: o(e.left),
      }),
      JsdocTypeSpecialNamePath: (e) => Z(e.specialType + ':' + X(e.value, e.meta.quote)),
      JsdocTypeName: (e) =>
        e.value !== 'function' ? Z(e.value) : { type: 'FunctionType', params: [] },
      JsdocTypeNumber: (e) => Z(e.value.toString()),
      JsdocTypeObject: (e, o) => {
        const c = { type: 'RecordType', fields: [] };
        for (const d of e.elements)
          d.type !== 'JsdocTypeObjectField' && d.type !== 'JsdocTypeJsdocObjectField'
            ? c.fields.push({ type: 'FieldType', key: o(d), value: void 0 })
            : c.fields.push(o(d));
        return c;
      },
      JsdocTypeObjectField: (e, o) => {
        if (typeof e.key != 'string')
          throw new Error('Index signatures and mapped types are not supported');
        return {
          type: 'FieldType',
          key: Z(X(e.key, e.meta.quote)),
          value: e.right === void 0 ? void 0 : o(e.right),
        };
      },
      JsdocTypeJsdocObjectField: (e, o) => ({
        type: 'FieldType',
        key: o(e.left),
        value: o(e.right),
      }),
      JsdocTypeUnion: (e, o) => ({ type: 'TypeUnion', elements: e.elements.map((c) => o(c)) }),
      JsdocTypeKeyValue: (e, o) => ({
        type: 'FieldType',
        key: Z(e.key),
        value: e.right === void 0 ? void 0 : o(e.right),
      }),
      JsdocTypeNamePath: (e, o) => {
        const c = o(e.left);
        let d;
        e.right.type === 'JsdocTypeSpecialNamePath'
          ? (d = o(e.right).name)
          : (d = X(e.right.value, e.right.meta.quote));
        const h = e.pathType === 'inner' ? '~' : e.pathType === 'instance' ? '#' : '.';
        return Z(`${c.name}${h}${d}`);
      },
      JsdocTypeSymbol: (e) => {
        let o = '',
          c = e.element,
          d = !1;
        return (
          c?.type === 'JsdocTypeVariadic' &&
            (c.meta.position === 'prefix' ? (o = '...') : (d = !0), (c = c.element)),
          c?.type === 'JsdocTypeName'
            ? (o += c.value)
            : c?.type === 'JsdocTypeNumber' && (o += c.value.toString()),
          d && (o += '...'),
          Z(`${e.value}(${o})`)
        );
      },
      JsdocTypeParenthesis: (e, o) => o(J(e.element)),
      JsdocTypeMappedType: M,
      JsdocTypeIndexSignature: M,
      JsdocTypeImport: M,
      JsdocTypeKeyof: M,
      JsdocTypeTuple: M,
      JsdocTypeTypeof: M,
      JsdocTypeIntersection: M,
      JsdocTypeProperty: M,
      JsdocTypePredicate: M,
      JsdocTypeAsserts: M,
    };
    function Wr(e) {
      return le(zr, e);
    }
    function ne(e) {
      switch (e) {
        case void 0:
          return 'none';
        case 'single':
          return 'single';
        case 'double':
          return 'double';
      }
    }
    function Hr(e) {
      switch (e) {
        case 'inner':
          return 'INNER_MEMBER';
        case 'instance':
          return 'INSTANCE_MEMBER';
        case 'property':
          return 'MEMBER';
        case 'property-brackets':
          return 'MEMBER';
      }
    }
    function Fe(e, o) {
      return o.length === 2
        ? { type: e, left: o[0], right: o[1] }
        : { type: e, left: o[0], right: Fe(e, o.slice(1)) };
    }
    const Qr = {
      JsdocTypeOptional: (e, o) => ({
        type: 'OPTIONAL',
        value: o(e.element),
        meta: { syntax: e.meta.position === 'prefix' ? 'PREFIX_EQUAL_SIGN' : 'SUFFIX_EQUALS_SIGN' },
      }),
      JsdocTypeNullable: (e, o) => ({
        type: 'NULLABLE',
        value: o(e.element),
        meta: {
          syntax: e.meta.position === 'prefix' ? 'PREFIX_QUESTION_MARK' : 'SUFFIX_QUESTION_MARK',
        },
      }),
      JsdocTypeNotNullable: (e, o) => ({
        type: 'NOT_NULLABLE',
        value: o(e.element),
        meta: { syntax: e.meta.position === 'prefix' ? 'PREFIX_BANG' : 'SUFFIX_BANG' },
      }),
      JsdocTypeVariadic: (e, o) => {
        const c = {
          type: 'VARIADIC',
          meta: {
            syntax:
              e.meta.position === 'prefix'
                ? 'PREFIX_DOTS'
                : e.meta.position === 'suffix'
                  ? 'SUFFIX_DOTS'
                  : 'ONLY_DOTS',
          },
        };
        return e.element !== void 0 && (c.value = o(e.element)), c;
      },
      JsdocTypeName: (e) => ({ type: 'NAME', name: e.value }),
      JsdocTypeTypeof: (e, o) => ({ type: 'TYPE_QUERY', name: o(e.element) }),
      JsdocTypeTuple: (e, o) => ({ type: 'TUPLE', entries: e.elements.map(o) }),
      JsdocTypeKeyof: (e, o) => ({ type: 'KEY_QUERY', value: o(e.element) }),
      JsdocTypeImport: (e) => ({
        type: 'IMPORT',
        path: {
          type: 'STRING_VALUE',
          quoteStyle: ne(e.element.meta.quote),
          string: e.element.value,
        },
      }),
      JsdocTypeUndefined: () => ({ type: 'NAME', name: 'undefined' }),
      JsdocTypeAny: () => ({ type: 'ANY' }),
      JsdocTypeFunction: (e, o) => {
        const c = pt(e),
          d = {
            type: e.arrow ? 'ARROW' : 'FUNCTION',
            params: c.params.map((h) => {
              if (h.type === 'JsdocTypeKeyValue') {
                if (h.right === void 0)
                  throw new Error(
                    "Function parameter without ':' is not expected to be 'KEY_VALUE'",
                  );
                return { type: 'NAMED_PARAMETER', name: h.key, typeName: o(h.right) };
              } else return o(h);
            }),
            new: null,
            returns: null,
          };
        return (
          c.this !== void 0 ? (d.this = o(c.this)) : e.arrow || (d.this = null),
          c.new !== void 0 && (d.new = o(c.new)),
          e.returnType !== void 0 && (d.returns = o(e.returnType)),
          d
        );
      },
      JsdocTypeGeneric: (e, o) => {
        const c = {
          type: 'GENERIC',
          subject: o(e.left),
          objects: e.elements.map(o),
          meta: {
            syntax:
              e.meta.brackets === 'square'
                ? 'SQUARE_BRACKET'
                : e.meta.dot
                  ? 'ANGLE_BRACKET_WITH_DOT'
                  : 'ANGLE_BRACKET',
          },
        };
        return (
          e.meta.brackets === 'square' &&
            e.elements[0].type === 'JsdocTypeFunction' &&
            !e.elements[0].parenthesis &&
            (c.objects[0] = { type: 'NAME', name: 'function' }),
          c
        );
      },
      JsdocTypeObjectField: (e, o) => {
        if (typeof e.key != 'string')
          throw new Error('Index signatures and mapped types are not supported');
        if (e.right === void 0)
          return {
            type: 'RECORD_ENTRY',
            key: e.key,
            quoteStyle: ne(e.meta.quote),
            value: null,
            readonly: !1,
          };
        let c = o(e.right);
        return (
          e.optional &&
            (c = { type: 'OPTIONAL', value: c, meta: { syntax: 'SUFFIX_KEY_QUESTION_MARK' } }),
          {
            type: 'RECORD_ENTRY',
            key: e.key.toString(),
            quoteStyle: ne(e.meta.quote),
            value: c,
            readonly: !1,
          }
        );
      },
      JsdocTypeJsdocObjectField: () => {
        throw new Error('Keys may not be typed in jsdoctypeparser.');
      },
      JsdocTypeKeyValue: (e, o) => {
        if (e.right === void 0)
          return {
            type: 'RECORD_ENTRY',
            key: e.key,
            quoteStyle: 'none',
            value: null,
            readonly: !1,
          };
        let c = o(e.right);
        return (
          e.optional &&
            (c = { type: 'OPTIONAL', value: c, meta: { syntax: 'SUFFIX_KEY_QUESTION_MARK' } }),
          { type: 'RECORD_ENTRY', key: e.key, quoteStyle: 'none', value: c, readonly: !1 }
        );
      },
      JsdocTypeObject: (e, o) => {
        const c = [];
        for (const d of e.elements)
          (d.type === 'JsdocTypeObjectField' || d.type === 'JsdocTypeJsdocObjectField') &&
            c.push(o(d));
        return { type: 'RECORD', entries: c };
      },
      JsdocTypeSpecialNamePath: (e) => {
        if (e.specialType !== 'module')
          throw new Error(`jsdoctypeparser does not support type ${e.specialType} at this point.`);
        return {
          type: 'MODULE',
          value: { type: 'FILE_PATH', quoteStyle: ne(e.meta.quote), path: e.value },
        };
      },
      JsdocTypeNamePath: (e, o) => {
        let c = !1,
          d,
          h;
        e.right.type === 'JsdocTypeSpecialNamePath' && e.right.specialType === 'event'
          ? ((c = !0), (d = e.right.value), (h = ne(e.right.meta.quote)))
          : ((d = e.right.value), (h = ne(e.right.meta.quote)));
        const w = {
          type: Hr(e.pathType),
          owner: o(e.left),
          name: d,
          quoteStyle: h,
          hasEventPrefix: c,
        };
        if (w.owner.type === 'MODULE') {
          const N = w.owner;
          return (w.owner = w.owner.value), (N.value = w), N;
        } else return w;
      },
      JsdocTypeUnion: (e, o) => Fe('UNION', e.elements.map(o)),
      JsdocTypeParenthesis: (e, o) => ({ type: 'PARENTHESIS', value: o(J(e.element)) }),
      JsdocTypeNull: () => ({ type: 'NAME', name: 'null' }),
      JsdocTypeUnknown: () => ({ type: 'UNKNOWN' }),
      JsdocTypeStringValue: (e) => ({
        type: 'STRING_VALUE',
        quoteStyle: ne(e.meta.quote),
        string: e.value,
      }),
      JsdocTypeIntersection: (e, o) => Fe('INTERSECTION', e.elements.map(o)),
      JsdocTypeNumber: (e) => ({ type: 'NUMBER_VALUE', number: e.value.toString() }),
      JsdocTypeSymbol: M,
      JsdocTypeProperty: M,
      JsdocTypePredicate: M,
      JsdocTypeMappedType: M,
      JsdocTypeIndexSignature: M,
      JsdocTypeAsserts: M,
    };
    function Xr(e) {
      return le(Qr, e);
    }
    function Zr() {
      return {
        JsdocTypeIntersection: (e, o) => ({
          type: 'JsdocTypeIntersection',
          elements: e.elements.map(o),
        }),
        JsdocTypeGeneric: (e, o) => ({
          type: 'JsdocTypeGeneric',
          left: o(e.left),
          elements: e.elements.map(o),
          meta: { dot: e.meta.dot, brackets: e.meta.brackets },
        }),
        JsdocTypeNullable: (e) => e,
        JsdocTypeUnion: (e, o) => ({ type: 'JsdocTypeUnion', elements: e.elements.map(o) }),
        JsdocTypeUnknown: (e) => e,
        JsdocTypeUndefined: (e) => e,
        JsdocTypeTypeof: (e, o) => ({ type: 'JsdocTypeTypeof', element: o(e.element) }),
        JsdocTypeSymbol: (e, o) => {
          const c = { type: 'JsdocTypeSymbol', value: e.value };
          return e.element !== void 0 && (c.element = o(e.element)), c;
        },
        JsdocTypeOptional: (e, o) => ({
          type: 'JsdocTypeOptional',
          element: o(e.element),
          meta: { position: e.meta.position },
        }),
        JsdocTypeObject: (e, o) => ({
          type: 'JsdocTypeObject',
          meta: { separator: 'comma' },
          elements: e.elements.map(o),
        }),
        JsdocTypeNumber: (e) => e,
        JsdocTypeNull: (e) => e,
        JsdocTypeNotNullable: (e, o) => ({
          type: 'JsdocTypeNotNullable',
          element: o(e.element),
          meta: { position: e.meta.position },
        }),
        JsdocTypeSpecialNamePath: (e) => e,
        JsdocTypeObjectField: (e, o) => ({
          type: 'JsdocTypeObjectField',
          key: e.key,
          right: e.right === void 0 ? void 0 : o(e.right),
          optional: e.optional,
          readonly: e.readonly,
          meta: e.meta,
        }),
        JsdocTypeJsdocObjectField: (e, o) => ({
          type: 'JsdocTypeJsdocObjectField',
          left: o(e.left),
          right: o(e.right),
        }),
        JsdocTypeKeyValue: (e, o) => ({
          type: 'JsdocTypeKeyValue',
          key: e.key,
          right: e.right === void 0 ? void 0 : o(e.right),
          optional: e.optional,
          variadic: e.variadic,
        }),
        JsdocTypeImport: (e, o) => ({ type: 'JsdocTypeImport', element: o(e.element) }),
        JsdocTypeAny: (e) => e,
        JsdocTypeStringValue: (e) => e,
        JsdocTypeNamePath: (e) => e,
        JsdocTypeVariadic: (e, o) => {
          const c = {
            type: 'JsdocTypeVariadic',
            meta: { position: e.meta.position, squareBrackets: e.meta.squareBrackets },
          };
          return e.element !== void 0 && (c.element = o(e.element)), c;
        },
        JsdocTypeTuple: (e, o) => ({ type: 'JsdocTypeTuple', elements: e.elements.map(o) }),
        JsdocTypeName: (e) => e,
        JsdocTypeFunction: (e, o) => {
          const c = {
            type: 'JsdocTypeFunction',
            arrow: e.arrow,
            parameters: e.parameters.map(o),
            constructor: e.constructor,
            parenthesis: e.parenthesis,
          };
          return e.returnType !== void 0 && (c.returnType = o(e.returnType)), c;
        },
        JsdocTypeKeyof: (e, o) => ({ type: 'JsdocTypeKeyof', element: o(e.element) }),
        JsdocTypeParenthesis: (e, o) => ({ type: 'JsdocTypeParenthesis', element: o(e.element) }),
        JsdocTypeProperty: (e) => e,
        JsdocTypePredicate: (e, o) => ({
          type: 'JsdocTypePredicate',
          left: o(e.left),
          right: o(e.right),
        }),
        JsdocTypeIndexSignature: (e, o) => ({
          type: 'JsdocTypeIndexSignature',
          key: e.key,
          right: o(e.right),
        }),
        JsdocTypeMappedType: (e, o) => ({
          type: 'JsdocTypeMappedType',
          key: e.key,
          right: o(e.right),
        }),
        JsdocTypeAsserts: (e, o) => ({
          type: 'JsdocTypeAsserts',
          left: o(e.left),
          right: o(e.right),
        }),
      };
    }
    const yt = {
      JsdocTypeAny: [],
      JsdocTypeFunction: ['parameters', 'returnType'],
      JsdocTypeGeneric: ['left', 'elements'],
      JsdocTypeImport: [],
      JsdocTypeIndexSignature: ['right'],
      JsdocTypeIntersection: ['elements'],
      JsdocTypeKeyof: ['element'],
      JsdocTypeKeyValue: ['right'],
      JsdocTypeMappedType: ['right'],
      JsdocTypeName: [],
      JsdocTypeNamePath: ['left', 'right'],
      JsdocTypeNotNullable: ['element'],
      JsdocTypeNull: [],
      JsdocTypeNullable: ['element'],
      JsdocTypeNumber: [],
      JsdocTypeObject: ['elements'],
      JsdocTypeObjectField: ['right'],
      JsdocTypeJsdocObjectField: ['left', 'right'],
      JsdocTypeOptional: ['element'],
      JsdocTypeParenthesis: ['element'],
      JsdocTypeSpecialNamePath: [],
      JsdocTypeStringValue: [],
      JsdocTypeSymbol: ['element'],
      JsdocTypeTuple: ['elements'],
      JsdocTypeTypeof: ['element'],
      JsdocTypeUndefined: [],
      JsdocTypeUnion: ['elements'],
      JsdocTypeUnknown: [],
      JsdocTypeVariadic: ['element'],
      JsdocTypeProperty: [],
      JsdocTypePredicate: ['left', 'right'],
      JsdocTypeAsserts: ['left', 'right'],
    };
    function Le(e, o, c, d, h) {
      d?.(e, o, c);
      const w = yt[e.type];
      for (const N of w) {
        const F = e[N];
        if (F !== void 0)
          if (Array.isArray(F)) for (const q of F) Le(q, e, N, d, h);
          else Le(F, e, N, d, h);
      }
      h?.(e, o, c);
    }
    function en(e, o, c) {
      Le(e, void 0, void 0, o, c);
    }
    (n.catharsisTransform = Wr),
      (n.identityTransformRules = Zr),
      (n.jtpTransform = Xr),
      (n.parse = lt),
      (n.stringify = Yr),
      (n.stringifyRules = ut),
      (n.transform = le),
      (n.traverse = en),
      (n.tryParse = qr),
      (n.visitorKeys = yt);
  });
})(Ue, Ue.exports);
var Ve = Ue.exports,
  rn = Object.create,
  De = Object.defineProperty,
  nn = Object.getOwnPropertyDescriptor,
  an = Object.getOwnPropertyNames,
  on = Object.getPrototypeOf,
  sn = Object.prototype.hasOwnProperty,
  u = (r, t) => De(r, 'name', { value: t, configurable: !0 }),
  m = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports),
  cn = (r, t, n, a) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let s of an(t))
        !sn.call(r, s) &&
          s !== n &&
          De(r, s, { get: () => t[s], enumerable: !(a = nn(t, s)) || a.enumerable });
    return r;
  },
  ln = (r, t, n) => (
    (n = r != null ? rn(on(r)) : {}), cn(De(n, 'default', { value: r, enumerable: !0 }), r)
  ),
  mt = m((r, t) => {
    var n = typeof global == 'object' && global && global.Object === Object && global;
    t.exports = n;
  }),
  H = m((r, t) => {
    var n = mt(),
      a = typeof self == 'object' && self && self.Object === Object && self,
      s = n || a || Function('return this')();
    t.exports = s;
  }),
  Je = m((r, t) => {
    var n = H(),
      a = n.Symbol;
    t.exports = a;
  }),
  pn = m((r, t) => {
    var n = Je(),
      a = Object.prototype,
      s = a.hasOwnProperty,
      i = a.toString,
      l = n ? n.toStringTag : void 0;
    function p(y) {
      var f = s.call(y, l),
        T = y[l];
      try {
        y[l] = void 0;
        var v = !0;
      } catch {}
      var _ = i.call(y);
      return v && (f ? (y[l] = T) : delete y[l]), _;
    }
    u(p, 'getRawTag'), (t.exports = p);
  }),
  un = m((r, t) => {
    var n = Object.prototype,
      a = n.toString;
    function s(i) {
      return a.call(i);
    }
    u(s, 'objectToString'), (t.exports = s);
  }),
  fe = m((r, t) => {
    var n = Je(),
      a = pn(),
      s = un(),
      i = '[object Null]',
      l = '[object Undefined]',
      p = n ? n.toStringTag : void 0;
    function y(f) {
      return f == null ? (f === void 0 ? l : i) : p && p in Object(f) ? a(f) : s(f);
    }
    u(y, 'baseGetTag'), (t.exports = y);
  }),
  $e = m((r, t) => {
    function n(a) {
      var s = typeof a;
      return a != null && (s == 'object' || s == 'function');
    }
    u(n, 'isObject'), (t.exports = n);
  }),
  Tt = m((r, t) => {
    var n = fe(),
      a = $e(),
      s = '[object AsyncFunction]',
      i = '[object Function]',
      l = '[object GeneratorFunction]',
      p = '[object Proxy]';
    function y(f) {
      if (!a(f)) return !1;
      var T = n(f);
      return T == i || T == l || T == s || T == p;
    }
    u(y, 'isFunction'), (t.exports = y);
  }),
  yn = m((r, t) => {
    var n = H(),
      a = n['__core-js_shared__'];
    t.exports = a;
  }),
  dn = m((r, t) => {
    var n = yn(),
      a = (function () {
        var i = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || '');
        return i ? 'Symbol(src)_1.' + i : '';
      })();
    function s(i) {
      return !!a && a in i;
    }
    u(s, 'isMasked'), (t.exports = s);
  }),
  ht = m((r, t) => {
    var n = Function.prototype,
      a = n.toString;
    function s(i) {
      if (i != null) {
        try {
          return a.call(i);
        } catch {}
        try {
          return i + '';
        } catch {}
      }
      return '';
    }
    u(s, 'toSource'), (t.exports = s);
  }),
  fn = m((r, t) => {
    var n = Tt(),
      a = dn(),
      s = $e(),
      i = ht(),
      l = /[\\^$.*+?()[\]{}|]/g,
      p = /^\[object .+?Constructor\]$/,
      y = Function.prototype,
      f = Object.prototype,
      T = y.toString,
      v = f.hasOwnProperty,
      _ = RegExp(
        '^' +
          T.call(v)
            .replace(l, '\\$&')
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
          '$',
      );
    function b(E) {
      if (!s(E) || a(E)) return !1;
      var x = n(E) ? _ : p;
      return x.test(i(E));
    }
    u(b, 'baseIsNative'), (t.exports = b);
  }),
  mn = m((r, t) => {
    function n(a, s) {
      return a?.[s];
    }
    u(n, 'getValue'), (t.exports = n);
  }),
  oe = m((r, t) => {
    var n = fn(),
      a = mn();
    function s(i, l) {
      var p = a(i, l);
      return n(p) ? p : void 0;
    }
    u(s, 'getNative'), (t.exports = s);
  }),
  Tn = m((r, t) => {
    var n = oe(),
      a = (function () {
        try {
          var s = n(Object, 'defineProperty');
          return s({}, '', {}), s;
        } catch {}
      })();
    t.exports = a;
  }),
  hn = m((r, t) => {
    var n = Tn();
    function a(s, i, l) {
      i == '__proto__' && n
        ? n(s, i, { configurable: !0, enumerable: !0, value: l, writable: !0 })
        : (s[i] = l);
    }
    u(a, 'baseAssignValue'), (t.exports = a);
  }),
  vn = m((r, t) => {
    function n(a) {
      return function (s, i, l) {
        for (var p = -1, y = Object(s), f = l(s), T = f.length; T--; ) {
          var v = f[a ? T : ++p];
          if (i(y[v], v, y) === !1) break;
        }
        return s;
      };
    }
    u(n, 'createBaseFor'), (t.exports = n);
  }),
  gn = m((r, t) => {
    var n = vn(),
      a = n();
    t.exports = a;
  }),
  bn = m((r, t) => {
    function n(a, s) {
      for (var i = -1, l = Array(a); ++i < a; ) l[i] = s(i);
      return l;
    }
    u(n, 'baseTimes'), (t.exports = n);
  }),
  me = m((r, t) => {
    function n(a) {
      return a != null && typeof a == 'object';
    }
    u(n, 'isObjectLike'), (t.exports = n);
  }),
  Jn = m((r, t) => {
    var n = fe(),
      a = me(),
      s = '[object Arguments]';
    function i(l) {
      return a(l) && n(l) == s;
    }
    u(i, 'baseIsArguments'), (t.exports = i);
  }),
  vt = m((r, t) => {
    var n = Jn(),
      a = me(),
      s = Object.prototype,
      i = s.hasOwnProperty,
      l = s.propertyIsEnumerable,
      p = n(
        (function () {
          return arguments;
        })(),
      )
        ? n
        : function (y) {
            return a(y) && i.call(y, 'callee') && !l.call(y, 'callee');
          };
    t.exports = p;
  }),
  te = m((r, t) => {
    var n = Array.isArray;
    t.exports = n;
  }),
  wn = m((r, t) => {
    function n() {
      return !1;
    }
    u(n, 'stubFalse'), (t.exports = n);
  }),
  gt = m((r, t) => {
    var n = H(),
      a = wn(),
      s = typeof r == 'object' && r && !r.nodeType && r,
      i = s && typeof t == 'object' && t && !t.nodeType && t,
      l = i && i.exports === s,
      p = l ? n.Buffer : void 0,
      y = p ? p.isBuffer : void 0,
      f = y || a;
    t.exports = f;
  }),
  bt = m((r, t) => {
    var n = 9007199254740991,
      a = /^(?:0|[1-9]\d*)$/;
    function s(i, l) {
      var p = typeof i;
      return (
        (l = l ?? n),
        !!l && (p == 'number' || (p != 'symbol' && a.test(i))) && i > -1 && i % 1 == 0 && i < l
      );
    }
    u(s, 'isIndex'), (t.exports = s);
  }),
  Ce = m((r, t) => {
    var n = 9007199254740991;
    function a(s) {
      return typeof s == 'number' && s > -1 && s % 1 == 0 && s <= n;
    }
    u(a, 'isLength'), (t.exports = a);
  }),
  xn = m((r, t) => {
    var n = fe(),
      a = Ce(),
      s = me(),
      i = '[object Arguments]',
      l = '[object Array]',
      p = '[object Boolean]',
      y = '[object Date]',
      f = '[object Error]',
      T = '[object Function]',
      v = '[object Map]',
      _ = '[object Number]',
      b = '[object Object]',
      E = '[object RegExp]',
      x = '[object Set]',
      U = '[object String]',
      R = '[object WeakMap]',
      A = '[object ArrayBuffer]',
      j = '[object DataView]',
      S = '[object Float32Array]',
      L = '[object Float64Array]',
      J = '[object Int8Array]',
      V = '[object Int16Array]',
      k = '[object Int32Array]',
      O = '[object Uint8Array]',
      C = '[object Uint8ClampedArray]',
      $ = '[object Uint16Array]',
      g = '[object Uint32Array]',
      P = {};
    (P[S] = P[L] = P[J] = P[V] = P[k] = P[O] = P[C] = P[$] = P[g] = !0),
      (P[i] =
        P[l] =
        P[A] =
        P[p] =
        P[j] =
        P[y] =
        P[f] =
        P[T] =
        P[v] =
        P[_] =
        P[b] =
        P[E] =
        P[x] =
        P[U] =
        P[R] =
          !1);
    function Y(B) {
      return s(B) && a(B.length) && !!P[n(B)];
    }
    u(Y, 'baseIsTypedArray'), (t.exports = Y);
  }),
  _n = m((r, t) => {
    function n(a) {
      return function (s) {
        return a(s);
      };
    }
    u(n, 'baseUnary'), (t.exports = n);
  }),
  En = m((r, t) => {
    var n = mt(),
      a = typeof r == 'object' && r && !r.nodeType && r,
      s = a && typeof t == 'object' && t && !t.nodeType && t,
      i = s && s.exports === a,
      l = i && n.process,
      p = (function () {
        try {
          var y = s && s.require && s.require('util').types;
          return y || (l && l.binding && l.binding('util'));
        } catch {}
      })();
    t.exports = p;
  }),
  Jt = m((r, t) => {
    var n = xn(),
      a = _n(),
      s = En(),
      i = s && s.isTypedArray,
      l = i ? a(i) : n;
    t.exports = l;
  }),
  Nn = m((r, t) => {
    var n = bn(),
      a = vt(),
      s = te(),
      i = gt(),
      l = bt(),
      p = Jt(),
      y = Object.prototype,
      f = y.hasOwnProperty;
    function T(v, _) {
      var b = s(v),
        E = !b && a(v),
        x = !b && !E && i(v),
        U = !b && !E && !x && p(v),
        R = b || E || x || U,
        A = R ? n(v.length, String) : [],
        j = A.length;
      for (var S in v)
        (_ || f.call(v, S)) &&
          !(
            R &&
            (S == 'length' ||
              (x && (S == 'offset' || S == 'parent')) ||
              (U && (S == 'buffer' || S == 'byteLength' || S == 'byteOffset')) ||
              l(S, j))
          ) &&
          A.push(S);
      return A;
    }
    u(T, 'arrayLikeKeys'), (t.exports = T);
  }),
  Pn = m((r, t) => {
    var n = Object.prototype;
    function a(s) {
      var i = s && s.constructor,
        l = (typeof i == 'function' && i.prototype) || n;
      return s === l;
    }
    u(a, 'isPrototype'), (t.exports = a);
  }),
  On = m((r, t) => {
    function n(a, s) {
      return function (i) {
        return a(s(i));
      };
    }
    u(n, 'overArg'), (t.exports = n);
  }),
  Sn = m((r, t) => {
    var n = On(),
      a = n(Object.keys, Object);
    t.exports = a;
  }),
  jn = m((r, t) => {
    var n = Pn(),
      a = Sn(),
      s = Object.prototype,
      i = s.hasOwnProperty;
    function l(p) {
      if (!n(p)) return a(p);
      var y = [];
      for (var f in Object(p)) i.call(p, f) && f != 'constructor' && y.push(f);
      return y;
    }
    u(l, 'baseKeys'), (t.exports = l);
  }),
  kn = m((r, t) => {
    var n = Tt(),
      a = Ce();
    function s(i) {
      return i != null && a(i.length) && !n(i);
    }
    u(s, 'isArrayLike'), (t.exports = s);
  }),
  Ke = m((r, t) => {
    var n = Nn(),
      a = jn(),
      s = kn();
    function i(l) {
      return s(l) ? n(l) : a(l);
    }
    u(i, 'keys'), (t.exports = i);
  }),
  An = m((r, t) => {
    var n = gn(),
      a = Ke();
    function s(i, l) {
      return i && n(i, l, a);
    }
    u(s, 'baseForOwn'), (t.exports = s);
  }),
  In = m((r, t) => {
    function n() {
      (this.__data__ = []), (this.size = 0);
    }
    u(n, 'listCacheClear'), (t.exports = n);
  }),
  wt = m((r, t) => {
    function n(a, s) {
      return a === s || (a !== a && s !== s);
    }
    u(n, 'eq'), (t.exports = n);
  }),
  we = m((r, t) => {
    var n = wt();
    function a(s, i) {
      for (var l = s.length; l--; ) if (n(s[l][0], i)) return l;
      return -1;
    }
    u(a, 'assocIndexOf'), (t.exports = a);
  }),
  Rn = m((r, t) => {
    var n = we(),
      a = Array.prototype,
      s = a.splice;
    function i(l) {
      var p = this.__data__,
        y = n(p, l);
      if (y < 0) return !1;
      var f = p.length - 1;
      return y == f ? p.pop() : s.call(p, y, 1), --this.size, !0;
    }
    u(i, 'listCacheDelete'), (t.exports = i);
  }),
  Fn = m((r, t) => {
    var n = we();
    function a(s) {
      var i = this.__data__,
        l = n(i, s);
      return l < 0 ? void 0 : i[l][1];
    }
    u(a, 'listCacheGet'), (t.exports = a);
  }),
  Ln = m((r, t) => {
    var n = we();
    function a(s) {
      return n(this.__data__, s) > -1;
    }
    u(a, 'listCacheHas'), (t.exports = a);
  }),
  Un = m((r, t) => {
    var n = we();
    function a(s, i) {
      var l = this.__data__,
        p = n(l, s);
      return p < 0 ? (++this.size, l.push([s, i])) : (l[p][1] = i), this;
    }
    u(a, 'listCacheSet'), (t.exports = a);
  }),
  xe = m((r, t) => {
    var n = In(),
      a = Rn(),
      s = Fn(),
      i = Ln(),
      l = Un();
    function p(y) {
      var f = -1,
        T = y == null ? 0 : y.length;
      for (this.clear(); ++f < T; ) {
        var v = y[f];
        this.set(v[0], v[1]);
      }
    }
    u(p, 'ListCache'),
      (p.prototype.clear = n),
      (p.prototype.delete = a),
      (p.prototype.get = s),
      (p.prototype.has = i),
      (p.prototype.set = l),
      (t.exports = p);
  }),
  Vn = m((r, t) => {
    var n = xe();
    function a() {
      (this.__data__ = new n()), (this.size = 0);
    }
    u(a, 'stackClear'), (t.exports = a);
  }),
  Dn = m((r, t) => {
    function n(a) {
      var s = this.__data__,
        i = s.delete(a);
      return (this.size = s.size), i;
    }
    u(n, 'stackDelete'), (t.exports = n);
  }),
  $n = m((r, t) => {
    function n(a) {
      return this.__data__.get(a);
    }
    u(n, 'stackGet'), (t.exports = n);
  }),
  Cn = m((r, t) => {
    function n(a) {
      return this.__data__.has(a);
    }
    u(n, 'stackHas'), (t.exports = n);
  }),
  Me = m((r, t) => {
    var n = oe(),
      a = H(),
      s = n(a, 'Map');
    t.exports = s;
  }),
  _e = m((r, t) => {
    var n = oe(),
      a = n(Object, 'create');
    t.exports = a;
  }),
  Kn = m((r, t) => {
    var n = _e();
    function a() {
      (this.__data__ = n ? n(null) : {}), (this.size = 0);
    }
    u(a, 'hashClear'), (t.exports = a);
  }),
  Mn = m((r, t) => {
    function n(a) {
      var s = this.has(a) && delete this.__data__[a];
      return (this.size -= s ? 1 : 0), s;
    }
    u(n, 'hashDelete'), (t.exports = n);
  }),
  qn = m((r, t) => {
    var n = _e(),
      a = '__lodash_hash_undefined__',
      s = Object.prototype,
      i = s.hasOwnProperty;
    function l(p) {
      var y = this.__data__;
      if (n) {
        var f = y[p];
        return f === a ? void 0 : f;
      }
      return i.call(y, p) ? y[p] : void 0;
    }
    u(l, 'hashGet'), (t.exports = l);
  }),
  Bn = m((r, t) => {
    var n = _e(),
      a = Object.prototype,
      s = a.hasOwnProperty;
    function i(l) {
      var p = this.__data__;
      return n ? p[l] !== void 0 : s.call(p, l);
    }
    u(i, 'hashHas'), (t.exports = i);
  }),
  Yn = m((r, t) => {
    var n = _e(),
      a = '__lodash_hash_undefined__';
    function s(i, l) {
      var p = this.__data__;
      return (this.size += this.has(i) ? 0 : 1), (p[i] = n && l === void 0 ? a : l), this;
    }
    u(s, 'hashSet'), (t.exports = s);
  }),
  Gn = m((r, t) => {
    var n = Kn(),
      a = Mn(),
      s = qn(),
      i = Bn(),
      l = Yn();
    function p(y) {
      var f = -1,
        T = y == null ? 0 : y.length;
      for (this.clear(); ++f < T; ) {
        var v = y[f];
        this.set(v[0], v[1]);
      }
    }
    u(p, 'Hash'),
      (p.prototype.clear = n),
      (p.prototype.delete = a),
      (p.prototype.get = s),
      (p.prototype.has = i),
      (p.prototype.set = l),
      (t.exports = p);
  }),
  zn = m((r, t) => {
    var n = Gn(),
      a = xe(),
      s = Me();
    function i() {
      (this.size = 0), (this.__data__ = { hash: new n(), map: new (s || a)(), string: new n() });
    }
    u(i, 'mapCacheClear'), (t.exports = i);
  }),
  Wn = m((r, t) => {
    function n(a) {
      var s = typeof a;
      return s == 'string' || s == 'number' || s == 'symbol' || s == 'boolean'
        ? a !== '__proto__'
        : a === null;
    }
    u(n, 'isKeyable'), (t.exports = n);
  }),
  Ee = m((r, t) => {
    var n = Wn();
    function a(s, i) {
      var l = s.__data__;
      return n(i) ? l[typeof i == 'string' ? 'string' : 'hash'] : l.map;
    }
    u(a, 'getMapData'), (t.exports = a);
  }),
  Hn = m((r, t) => {
    var n = Ee();
    function a(s) {
      var i = n(this, s).delete(s);
      return (this.size -= i ? 1 : 0), i;
    }
    u(a, 'mapCacheDelete'), (t.exports = a);
  }),
  Qn = m((r, t) => {
    var n = Ee();
    function a(s) {
      return n(this, s).get(s);
    }
    u(a, 'mapCacheGet'), (t.exports = a);
  }),
  Xn = m((r, t) => {
    var n = Ee();
    function a(s) {
      return n(this, s).has(s);
    }
    u(a, 'mapCacheHas'), (t.exports = a);
  }),
  Zn = m((r, t) => {
    var n = Ee();
    function a(s, i) {
      var l = n(this, s),
        p = l.size;
      return l.set(s, i), (this.size += l.size == p ? 0 : 1), this;
    }
    u(a, 'mapCacheSet'), (t.exports = a);
  }),
  qe = m((r, t) => {
    var n = zn(),
      a = Hn(),
      s = Qn(),
      i = Xn(),
      l = Zn();
    function p(y) {
      var f = -1,
        T = y == null ? 0 : y.length;
      for (this.clear(); ++f < T; ) {
        var v = y[f];
        this.set(v[0], v[1]);
      }
    }
    u(p, 'MapCache'),
      (p.prototype.clear = n),
      (p.prototype.delete = a),
      (p.prototype.get = s),
      (p.prototype.has = i),
      (p.prototype.set = l),
      (t.exports = p);
  }),
  ea = m((r, t) => {
    var n = xe(),
      a = Me(),
      s = qe(),
      i = 200;
    function l(p, y) {
      var f = this.__data__;
      if (f instanceof n) {
        var T = f.__data__;
        if (!a || T.length < i - 1) return T.push([p, y]), (this.size = ++f.size), this;
        f = this.__data__ = new s(T);
      }
      return f.set(p, y), (this.size = f.size), this;
    }
    u(l, 'stackSet'), (t.exports = l);
  }),
  xt = m((r, t) => {
    var n = xe(),
      a = Vn(),
      s = Dn(),
      i = $n(),
      l = Cn(),
      p = ea();
    function y(f) {
      var T = (this.__data__ = new n(f));
      this.size = T.size;
    }
    u(y, 'Stack'),
      (y.prototype.clear = a),
      (y.prototype.delete = s),
      (y.prototype.get = i),
      (y.prototype.has = l),
      (y.prototype.set = p),
      (t.exports = y);
  }),
  ta = m((r, t) => {
    var n = '__lodash_hash_undefined__';
    function a(s) {
      return this.__data__.set(s, n), this;
    }
    u(a, 'setCacheAdd'), (t.exports = a);
  }),
  ra = m((r, t) => {
    function n(a) {
      return this.__data__.has(a);
    }
    u(n, 'setCacheHas'), (t.exports = n);
  }),
  na = m((r, t) => {
    var n = qe(),
      a = ta(),
      s = ra();
    function i(l) {
      var p = -1,
        y = l == null ? 0 : l.length;
      for (this.__data__ = new n(); ++p < y; ) this.add(l[p]);
    }
    u(i, 'SetCache'),
      (i.prototype.add = i.prototype.push = a),
      (i.prototype.has = s),
      (t.exports = i);
  }),
  aa = m((r, t) => {
    function n(a, s) {
      for (var i = -1, l = a == null ? 0 : a.length; ++i < l; ) if (s(a[i], i, a)) return !0;
      return !1;
    }
    u(n, 'arraySome'), (t.exports = n);
  }),
  oa = m((r, t) => {
    function n(a, s) {
      return a.has(s);
    }
    u(n, 'cacheHas'), (t.exports = n);
  }),
  _t = m((r, t) => {
    var n = na(),
      a = aa(),
      s = oa(),
      i = 1,
      l = 2;
    function p(y, f, T, v, _, b) {
      var E = T & i,
        x = y.length,
        U = f.length;
      if (x != U && !(E && U > x)) return !1;
      var R = b.get(y),
        A = b.get(f);
      if (R && A) return R == f && A == y;
      var j = -1,
        S = !0,
        L = T & l ? new n() : void 0;
      for (b.set(y, f), b.set(f, y); ++j < x; ) {
        var J = y[j],
          V = f[j];
        if (v) var k = E ? v(V, J, j, f, y, b) : v(J, V, j, y, f, b);
        if (k !== void 0) {
          if (k) continue;
          S = !1;
          break;
        }
        if (L) {
          if (
            !a(f, function (O, C) {
              if (!s(L, C) && (J === O || _(J, O, T, v, b))) return L.push(C);
            })
          ) {
            S = !1;
            break;
          }
        } else if (!(J === V || _(J, V, T, v, b))) {
          S = !1;
          break;
        }
      }
      return b.delete(y), b.delete(f), S;
    }
    u(p, 'equalArrays'), (t.exports = p);
  }),
  sa = m((r, t) => {
    var n = H(),
      a = n.Uint8Array;
    t.exports = a;
  }),
  ia = m((r, t) => {
    function n(a) {
      var s = -1,
        i = Array(a.size);
      return (
        a.forEach(function (l, p) {
          i[++s] = [p, l];
        }),
        i
      );
    }
    u(n, 'mapToArray'), (t.exports = n);
  }),
  ca = m((r, t) => {
    function n(a) {
      var s = -1,
        i = Array(a.size);
      return (
        a.forEach(function (l) {
          i[++s] = l;
        }),
        i
      );
    }
    u(n, 'setToArray'), (t.exports = n);
  }),
  la = m((r, t) => {
    var n = Je(),
      a = sa(),
      s = wt(),
      i = _t(),
      l = ia(),
      p = ca(),
      y = 1,
      f = 2,
      T = '[object Boolean]',
      v = '[object Date]',
      _ = '[object Error]',
      b = '[object Map]',
      E = '[object Number]',
      x = '[object RegExp]',
      U = '[object Set]',
      R = '[object String]',
      A = '[object Symbol]',
      j = '[object ArrayBuffer]',
      S = '[object DataView]',
      L = n ? n.prototype : void 0,
      J = L ? L.valueOf : void 0;
    function V(k, O, C, $, g, P, Y) {
      switch (C) {
        case S:
          if (k.byteLength != O.byteLength || k.byteOffset != O.byteOffset) return !1;
          (k = k.buffer), (O = O.buffer);
        case j:
          return !(k.byteLength != O.byteLength || !P(new a(k), new a(O)));
        case T:
        case v:
        case E:
          return s(+k, +O);
        case _:
          return k.name == O.name && k.message == O.message;
        case x:
        case R:
          return k == O + '';
        case b:
          var B = l;
        case U:
          var I = $ & y;
          if ((B || (B = p), k.size != O.size && !I)) return !1;
          var z = Y.get(k);
          if (z) return z == O;
          ($ |= f), Y.set(k, O);
          var se = i(B(k), B(O), $, g, P, Y);
          return Y.delete(k), se;
        case A:
          if (J) return J.call(k) == J.call(O);
      }
      return !1;
    }
    u(V, 'equalByTag'), (t.exports = V);
  }),
  pa = m((r, t) => {
    function n(a, s) {
      for (var i = -1, l = s.length, p = a.length; ++i < l; ) a[p + i] = s[i];
      return a;
    }
    u(n, 'arrayPush'), (t.exports = n);
  }),
  ua = m((r, t) => {
    var n = pa(),
      a = te();
    function s(i, l, p) {
      var y = l(i);
      return a(i) ? y : n(y, p(i));
    }
    u(s, 'baseGetAllKeys'), (t.exports = s);
  }),
  ya = m((r, t) => {
    function n(a, s) {
      for (var i = -1, l = a == null ? 0 : a.length, p = 0, y = []; ++i < l; ) {
        var f = a[i];
        s(f, i, a) && (y[p++] = f);
      }
      return y;
    }
    u(n, 'arrayFilter'), (t.exports = n);
  }),
  da = m((r, t) => {
    function n() {
      return [];
    }
    u(n, 'stubArray'), (t.exports = n);
  }),
  fa = m((r, t) => {
    var n = ya(),
      a = da(),
      s = Object.prototype,
      i = s.propertyIsEnumerable,
      l = Object.getOwnPropertySymbols,
      p = l
        ? function (y) {
            return y == null
              ? []
              : ((y = Object(y)),
                n(l(y), function (f) {
                  return i.call(y, f);
                }));
          }
        : a;
    t.exports = p;
  }),
  ma = m((r, t) => {
    var n = ua(),
      a = fa(),
      s = Ke();
    function i(l) {
      return n(l, s, a);
    }
    u(i, 'getAllKeys'), (t.exports = i);
  }),
  Ta = m((r, t) => {
    var n = ma(),
      a = 1,
      s = Object.prototype,
      i = s.hasOwnProperty;
    function l(p, y, f, T, v, _) {
      var b = f & a,
        E = n(p),
        x = E.length,
        U = n(y),
        R = U.length;
      if (x != R && !b) return !1;
      for (var A = x; A--; ) {
        var j = E[A];
        if (!(b ? j in y : i.call(y, j))) return !1;
      }
      var S = _.get(p),
        L = _.get(y);
      if (S && L) return S == y && L == p;
      var J = !0;
      _.set(p, y), _.set(y, p);
      for (var V = b; ++A < x; ) {
        j = E[A];
        var k = p[j],
          O = y[j];
        if (T) var C = b ? T(O, k, j, y, p, _) : T(k, O, j, p, y, _);
        if (!(C === void 0 ? k === O || v(k, O, f, T, _) : C)) {
          J = !1;
          break;
        }
        V || (V = j == 'constructor');
      }
      if (J && !V) {
        var $ = p.constructor,
          g = y.constructor;
        $ != g &&
          'constructor' in p &&
          'constructor' in y &&
          !(typeof $ == 'function' && $ instanceof $ && typeof g == 'function' && g instanceof g) &&
          (J = !1);
      }
      return _.delete(p), _.delete(y), J;
    }
    u(l, 'equalObjects'), (t.exports = l);
  }),
  ha = m((r, t) => {
    var n = oe(),
      a = H(),
      s = n(a, 'DataView');
    t.exports = s;
  }),
  va = m((r, t) => {
    var n = oe(),
      a = H(),
      s = n(a, 'Promise');
    t.exports = s;
  }),
  ga = m((r, t) => {
    var n = oe(),
      a = H(),
      s = n(a, 'Set');
    t.exports = s;
  }),
  ba = m((r, t) => {
    var n = oe(),
      a = H(),
      s = n(a, 'WeakMap');
    t.exports = s;
  }),
  Ja = m((r, t) => {
    var n = ha(),
      a = Me(),
      s = va(),
      i = ga(),
      l = ba(),
      p = fe(),
      y = ht(),
      f = '[object Map]',
      T = '[object Object]',
      v = '[object Promise]',
      _ = '[object Set]',
      b = '[object WeakMap]',
      E = '[object DataView]',
      x = y(n),
      U = y(a),
      R = y(s),
      A = y(i),
      j = y(l),
      S = p;
    ((n && S(new n(new ArrayBuffer(1))) != E) ||
      (a && S(new a()) != f) ||
      (s && S(s.resolve()) != v) ||
      (i && S(new i()) != _) ||
      (l && S(new l()) != b)) &&
      (S = u(function (L) {
        var J = p(L),
          V = J == T ? L.constructor : void 0,
          k = V ? y(V) : '';
        if (k)
          switch (k) {
            case x:
              return E;
            case U:
              return f;
            case R:
              return v;
            case A:
              return _;
            case j:
              return b;
          }
        return J;
      }, 'getTag')),
      (t.exports = S);
  }),
  wa = m((r, t) => {
    var n = xt(),
      a = _t(),
      s = la(),
      i = Ta(),
      l = Ja(),
      p = te(),
      y = gt(),
      f = Jt(),
      T = 1,
      v = '[object Arguments]',
      _ = '[object Array]',
      b = '[object Object]',
      E = Object.prototype,
      x = E.hasOwnProperty;
    function U(R, A, j, S, L, J) {
      var V = p(R),
        k = p(A),
        O = V ? _ : l(R),
        C = k ? _ : l(A);
      (O = O == v ? b : O), (C = C == v ? b : C);
      var $ = O == b,
        g = C == b,
        P = O == C;
      if (P && y(R)) {
        if (!y(A)) return !1;
        (V = !0), ($ = !1);
      }
      if (P && !$)
        return J || (J = new n()), V || f(R) ? a(R, A, j, S, L, J) : s(R, A, O, j, S, L, J);
      if (!(j & T)) {
        var Y = $ && x.call(R, '__wrapped__'),
          B = g && x.call(A, '__wrapped__');
        if (Y || B) {
          var I = Y ? R.value() : R,
            z = B ? A.value() : A;
          return J || (J = new n()), L(I, z, j, S, J);
        }
      }
      return P ? (J || (J = new n()), i(R, A, j, S, L, J)) : !1;
    }
    u(U, 'baseIsEqualDeep'), (t.exports = U);
  }),
  Et = m((r, t) => {
    var n = wa(),
      a = me();
    function s(i, l, p, y, f) {
      return i === l
        ? !0
        : i == null || l == null || (!a(i) && !a(l))
          ? i !== i && l !== l
          : n(i, l, p, y, s, f);
    }
    u(s, 'baseIsEqual'), (t.exports = s);
  }),
  xa = m((r, t) => {
    var n = xt(),
      a = Et(),
      s = 1,
      i = 2;
    function l(p, y, f, T) {
      var v = f.length,
        _ = v,
        b = !T;
      if (p == null) return !_;
      for (p = Object(p); v--; ) {
        var E = f[v];
        if (b && E[2] ? E[1] !== p[E[0]] : !(E[0] in p)) return !1;
      }
      for (; ++v < _; ) {
        E = f[v];
        var x = E[0],
          U = p[x],
          R = E[1];
        if (b && E[2]) {
          if (U === void 0 && !(x in p)) return !1;
        } else {
          var A = new n();
          if (T) var j = T(U, R, x, p, y, A);
          if (!(j === void 0 ? a(R, U, s | i, T, A) : j)) return !1;
        }
      }
      return !0;
    }
    u(l, 'baseIsMatch'), (t.exports = l);
  }),
  Nt = m((r, t) => {
    var n = $e();
    function a(s) {
      return s === s && !n(s);
    }
    u(a, 'isStrictComparable'), (t.exports = a);
  }),
  _a = m((r, t) => {
    var n = Nt(),
      a = Ke();
    function s(i) {
      for (var l = a(i), p = l.length; p--; ) {
        var y = l[p],
          f = i[y];
        l[p] = [y, f, n(f)];
      }
      return l;
    }
    u(s, 'getMatchData'), (t.exports = s);
  }),
  Pt = m((r, t) => {
    function n(a, s) {
      return function (i) {
        return i == null ? !1 : i[a] === s && (s !== void 0 || a in Object(i));
      };
    }
    u(n, 'matchesStrictComparable'), (t.exports = n);
  }),
  Ea = m((r, t) => {
    var n = xa(),
      a = _a(),
      s = Pt();
    function i(l) {
      var p = a(l);
      return p.length == 1 && p[0][2]
        ? s(p[0][0], p[0][1])
        : function (y) {
            return y === l || n(y, l, p);
          };
    }
    u(i, 'baseMatches'), (t.exports = i);
  }),
  Be = m((r, t) => {
    var n = fe(),
      a = me(),
      s = '[object Symbol]';
    function i(l) {
      return typeof l == 'symbol' || (a(l) && n(l) == s);
    }
    u(i, 'isSymbol'), (t.exports = i);
  }),
  Ye = m((r, t) => {
    var n = te(),
      a = Be(),
      s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      i = /^\w*$/;
    function l(p, y) {
      if (n(p)) return !1;
      var f = typeof p;
      return f == 'number' || f == 'symbol' || f == 'boolean' || p == null || a(p)
        ? !0
        : i.test(p) || !s.test(p) || (y != null && p in Object(y));
    }
    u(l, 'isKey'), (t.exports = l);
  }),
  Na = m((r, t) => {
    var n = qe(),
      a = 'Expected a function';
    function s(i, l) {
      if (typeof i != 'function' || (l != null && typeof l != 'function')) throw new TypeError(a);
      var p = u(function () {
        var y = arguments,
          f = l ? l.apply(this, y) : y[0],
          T = p.cache;
        if (T.has(f)) return T.get(f);
        var v = i.apply(this, y);
        return (p.cache = T.set(f, v) || T), v;
      }, 'memoized');
      return (p.cache = new (s.Cache || n)()), p;
    }
    u(s, 'memoize'), (s.Cache = n), (t.exports = s);
  }),
  Pa = m((r, t) => {
    var n = Na(),
      a = 500;
    function s(i) {
      var l = n(i, function (y) {
          return p.size === a && p.clear(), y;
        }),
        p = l.cache;
      return l;
    }
    u(s, 'memoizeCapped'), (t.exports = s);
  }),
  Oa = m((r, t) => {
    var n = Pa(),
      a =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      s = /\\(\\)?/g,
      i = n(function (l) {
        var p = [];
        return (
          l.charCodeAt(0) === 46 && p.push(''),
          l.replace(a, function (y, f, T, v) {
            p.push(T ? v.replace(s, '$1') : f || y);
          }),
          p
        );
      });
    t.exports = i;
  }),
  Sa = m((r, t) => {
    function n(a, s) {
      for (var i = -1, l = a == null ? 0 : a.length, p = Array(l); ++i < l; ) p[i] = s(a[i], i, a);
      return p;
    }
    u(n, 'arrayMap'), (t.exports = n);
  }),
  ja = m((r, t) => {
    var n = Je(),
      a = Sa(),
      s = te(),
      i = Be(),
      l = 1 / 0,
      p = n ? n.prototype : void 0,
      y = p ? p.toString : void 0;
    function f(T) {
      if (typeof T == 'string') return T;
      if (s(T)) return a(T, f) + '';
      if (i(T)) return y ? y.call(T) : '';
      var v = T + '';
      return v == '0' && 1 / T == -l ? '-0' : v;
    }
    u(f, 'baseToString'), (t.exports = f);
  }),
  ka = m((r, t) => {
    var n = ja();
    function a(s) {
      return s == null ? '' : n(s);
    }
    u(a, 'toString'), (t.exports = a);
  }),
  Ot = m((r, t) => {
    var n = te(),
      a = Ye(),
      s = Oa(),
      i = ka();
    function l(p, y) {
      return n(p) ? p : a(p, y) ? [p] : s(i(p));
    }
    u(l, 'castPath'), (t.exports = l);
  }),
  Ne = m((r, t) => {
    var n = Be(),
      a = 1 / 0;
    function s(i) {
      if (typeof i == 'string' || n(i)) return i;
      var l = i + '';
      return l == '0' && 1 / i == -a ? '-0' : l;
    }
    u(s, 'toKey'), (t.exports = s);
  }),
  St = m((r, t) => {
    var n = Ot(),
      a = Ne();
    function s(i, l) {
      l = n(l, i);
      for (var p = 0, y = l.length; i != null && p < y; ) i = i[a(l[p++])];
      return p && p == y ? i : void 0;
    }
    u(s, 'baseGet'), (t.exports = s);
  }),
  Aa = m((r, t) => {
    var n = St();
    function a(s, i, l) {
      var p = s == null ? void 0 : n(s, i);
      return p === void 0 ? l : p;
    }
    u(a, 'get'), (t.exports = a);
  }),
  Ia = m((r, t) => {
    function n(a, s) {
      return a != null && s in Object(a);
    }
    u(n, 'baseHasIn'), (t.exports = n);
  }),
  Ra = m((r, t) => {
    var n = Ot(),
      a = vt(),
      s = te(),
      i = bt(),
      l = Ce(),
      p = Ne();
    function y(f, T, v) {
      T = n(T, f);
      for (var _ = -1, b = T.length, E = !1; ++_ < b; ) {
        var x = p(T[_]);
        if (!(E = f != null && v(f, x))) break;
        f = f[x];
      }
      return E || ++_ != b
        ? E
        : ((b = f == null ? 0 : f.length), !!b && l(b) && i(x, b) && (s(f) || a(f)));
    }
    u(y, 'hasPath'), (t.exports = y);
  }),
  Fa = m((r, t) => {
    var n = Ia(),
      a = Ra();
    function s(i, l) {
      return i != null && a(i, l, n);
    }
    u(s, 'hasIn'), (t.exports = s);
  }),
  La = m((r, t) => {
    var n = Et(),
      a = Aa(),
      s = Fa(),
      i = Ye(),
      l = Nt(),
      p = Pt(),
      y = Ne(),
      f = 1,
      T = 2;
    function v(_, b) {
      return i(_) && l(b)
        ? p(y(_), b)
        : function (E) {
            var x = a(E, _);
            return x === void 0 && x === b ? s(E, _) : n(b, x, f | T);
          };
    }
    u(v, 'baseMatchesProperty'), (t.exports = v);
  }),
  Ua = m((r, t) => {
    function n(a) {
      return a;
    }
    u(n, 'identity'), (t.exports = n);
  }),
  Va = m((r, t) => {
    function n(a) {
      return function (s) {
        return s?.[a];
      };
    }
    u(n, 'baseProperty'), (t.exports = n);
  }),
  Da = m((r, t) => {
    var n = St();
    function a(s) {
      return function (i) {
        return n(i, s);
      };
    }
    u(a, 'basePropertyDeep'), (t.exports = a);
  }),
  $a = m((r, t) => {
    var n = Va(),
      a = Da(),
      s = Ye(),
      i = Ne();
    function l(p) {
      return s(p) ? n(i(p)) : a(p);
    }
    u(l, 'property'), (t.exports = l);
  }),
  Ca = m((r, t) => {
    var n = Ea(),
      a = La(),
      s = Ua(),
      i = te(),
      l = $a();
    function p(y) {
      return typeof y == 'function'
        ? y
        : y == null
          ? s
          : typeof y == 'object'
            ? i(y)
              ? a(y[0], y[1])
              : n(y)
            : l(y);
    }
    u(p, 'baseIteratee'), (t.exports = p);
  }),
  Ka = m((r, t) => {
    var n = hn(),
      a = An(),
      s = Ca();
    function i(l, p) {
      var y = {};
      return (
        (p = s(p, 3)),
        a(l, function (f, T, v) {
          n(y, T, p(f, T, v));
        }),
        y
      );
    }
    u(i, 'mapValues'), (t.exports = i);
  });
const { UnknownArgTypesError: Ma } = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
var qa = u((r) => r.name === 'literal', 'isLiteral'),
  Ba = u((r) => r.value.replace(/['|"]/g, ''), 'toEnumOption'),
  Ya = u((r) => {
    switch (r.type) {
      case 'function':
        return { name: 'function' };
      case 'object':
        let t = {};
        return (
          r.signature.properties.forEach((n) => {
            t[n.key] = ye(n.value);
          }),
          { name: 'object', value: t }
        );
      default:
        throw new Ma({ type: r, language: 'Flow' });
    }
  }, 'convertSig'),
  ye = u((r) => {
    let { name: t, raw: n } = r,
      a = {};
    switch ((typeof n < 'u' && (a.raw = n), r.name)) {
      case 'literal':
        return { ...a, name: 'other', value: r.value };
      case 'string':
      case 'number':
      case 'symbol':
      case 'boolean':
        return { ...a, name: t };
      case 'Array':
        return { ...a, name: 'array', value: r.elements.map(ye) };
      case 'signature':
        return { ...a, ...Ya(r) };
      case 'union':
        return r.elements?.every(qa)
          ? { ...a, name: 'enum', value: r.elements?.map(Ba) }
          : { ...a, name: t, value: r.elements?.map(ye) };
      case 'intersection':
        return { ...a, name: t, value: r.elements?.map(ye) };
      default:
        return { ...a, name: 'other', value: t };
    }
  }, 'convert'),
  Ga = ln(Ka()),
  jt = /^['"]|['"]$/g,
  za = u((r) => r.replace(jt, ''), 'trimQuotes'),
  Wa = u((r) => jt.test(r), 'includesQuotes'),
  kt = u((r) => {
    let t = za(r);
    return Wa(r) || Number.isNaN(Number(t)) ? t : Number(t);
  }, 'parseLiteral'),
  Ha = /^\(.*\) => /,
  ue = u((r) => {
    let { name: t, raw: n, computed: a, value: s } = r,
      i = {};
    switch ((typeof n < 'u' && (i.raw = n), t)) {
      case 'enum': {
        let p = a ? s : s.map((y) => kt(y.value));
        return { ...i, name: t, value: p };
      }
      case 'string':
      case 'number':
      case 'symbol':
        return { ...i, name: t };
      case 'func':
        return { ...i, name: 'function' };
      case 'bool':
      case 'boolean':
        return { ...i, name: 'boolean' };
      case 'arrayOf':
      case 'array':
        return { ...i, name: 'array', value: s && ue(s) };
      case 'object':
        return { ...i, name: t };
      case 'objectOf':
        return { ...i, name: t, value: ue(s) };
      case 'shape':
      case 'exact':
        let l = (0, Ga.default)(s, (p) => ue(p));
        return { ...i, name: 'object', value: l };
      case 'union':
        return { ...i, name: 'union', value: s.map((p) => ue(p)) };
      case 'instanceOf':
      case 'element':
      case 'elementType':
      default: {
        if (t?.indexOf('|') > 0)
          try {
            let f = t.split('|').map((T) => JSON.parse(T));
            return { ...i, name: 'enum', value: f };
          } catch {}
        let p = s ? `${t}(${s})` : t,
          y = Ha.test(t) ? 'function' : 'other';
        return { ...i, name: y, value: p };
      }
    }
  }, 'convert');
const { UnknownArgTypesError: Qa } = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
var Xa = u((r) => {
    switch (r.type) {
      case 'function':
        return { name: 'function' };
      case 'object':
        let t = {};
        return (
          r.signature.properties.forEach((n) => {
            t[n.key] = de(n.value);
          }),
          { name: 'object', value: t }
        );
      default:
        throw new Qa({ type: r, language: 'Typescript' });
    }
  }, 'convertSig'),
  de = u((r) => {
    let { name: t, raw: n } = r,
      a = {};
    switch ((typeof n < 'u' && (a.raw = n), r.name)) {
      case 'string':
      case 'number':
      case 'symbol':
      case 'boolean':
        return { ...a, name: t };
      case 'Array':
        return { ...a, name: 'array', value: r.elements.map(de) };
      case 'signature':
        return { ...a, ...Xa(r) };
      case 'union':
        let s;
        return (
          r.elements?.every((i) => i.name === 'literal')
            ? (s = { ...a, name: 'enum', value: r.elements?.map((i) => kt(i.value)) })
            : (s = { ...a, name: t, value: r.elements?.map(de) }),
          s
        );
      case 'intersection':
        return { ...a, name: t, value: r.elements?.map(de) };
      default:
        return { ...a, name: 'other', value: t };
    }
  }, 'convert'),
  Ge = u((r) => {
    let { type: t, tsType: n, flowType: a } = r;
    try {
      if (t != null) return ue(t);
      if (n != null) return de(n);
      if (a != null) return ye(a);
    } catch (s) {
      console.error(s);
    }
    return null;
  }, 'convert'),
  Za = ((r) => (
    (r.JAVASCRIPT = 'JavaScript'),
    (r.FLOW = 'Flow'),
    (r.TYPESCRIPT = 'TypeScript'),
    (r.UNKNOWN = 'Unknown'),
    r
  ))(Za || {}),
  eo = ['null', 'undefined'];
function Pe(r) {
  return eo.some((t) => t === r);
}
u(Pe, 'isDefaultValueBlacklisted');
var to = u((r) => {
  if (!r) return '';
  if (typeof r == 'string') return r;
  throw new Error(`Description: expected string, got: ${JSON.stringify(r)}`);
}, 'str');
function ze(r) {
  return !!r.__docgenInfo;
}
u(ze, 'hasDocgen');
function At(r) {
  return r != null && Object.keys(r).length > 0;
}
u(At, 'isValidDocgenSection');
function It(r, t) {
  return ze(r) ? r.__docgenInfo[t] : null;
}
u(It, 'getDocgenSection');
function Rt(r) {
  return ze(r) ? to(r.__docgenInfo.description) : '';
}
u(Rt, 'getDocgenDescription');
var ee;
(function (r) {
  (r.start = '/**'), (r.nostart = '/***'), (r.delim = '*'), (r.end = '*/');
})((ee = ee || (ee = {})));
function Ft(r) {
  return /^\s+$/.test(r);
}
u(Ft, 'isSpace');
function Lt(r) {
  let t = r.match(/\r+$/);
  return t == null ? ['', r] : [r.slice(-t[0].length), r.slice(0, -t[0].length)];
}
u(Lt, 'splitCR');
function ae(r) {
  let t = r.match(/^\s+/);
  return t == null ? ['', r] : [r.slice(0, t[0].length), r.slice(t[0].length)];
}
u(ae, 'splitSpace');
function Ut(r) {
  return r.split(/\n/);
}
u(Ut, 'splitLines');
function Vt(r = {}) {
  return Object.assign(
    { tag: '', name: '', type: '', optional: !1, description: '', problems: [], source: [] },
    r,
  );
}
u(Vt, 'seedSpec');
function Dt(r = {}) {
  return Object.assign(
    {
      start: '',
      delimiter: '',
      postDelimiter: '',
      tag: '',
      postTag: '',
      name: '',
      postName: '',
      type: '',
      postType: '',
      description: '',
      end: '',
      lineEnd: '',
    },
    r,
  );
}
u(Dt, 'seedTokens');
var ro = /^@\S+/;
function $t({ fence: r = '```' } = {}) {
  let t = Ct(r),
    n = u((a, s) => (t(a) ? !s : s), 'toggleFence');
  return u(function (a) {
    let s = [[]],
      i = !1;
    for (let l of a)
      ro.test(l.tokens.description) && !i ? s.push([l]) : s[s.length - 1].push(l),
        (i = n(l.tokens.description, i));
    return s;
  }, 'parseBlock');
}
u($t, 'getParser');
function Ct(r) {
  return typeof r == 'string' ? (t) => t.split(r).length % 2 === 0 : r;
}
u(Ct, 'getFencer');
function Kt({ startLine: r = 0, markers: t = ee } = {}) {
  let n = null,
    a = r;
  return u(function (s) {
    let i = s,
      l = Dt();
    if (
      (([l.lineEnd, i] = Lt(i)),
      ([l.start, i] = ae(i)),
      n === null &&
        i.startsWith(t.start) &&
        !i.startsWith(t.nostart) &&
        ((n = []),
        (l.delimiter = i.slice(0, t.start.length)),
        (i = i.slice(t.start.length)),
        ([l.postDelimiter, i] = ae(i))),
      n === null)
    )
      return a++, null;
    let p = i.trimRight().endsWith(t.end);
    if (
      (l.delimiter === '' &&
        i.startsWith(t.delim) &&
        !i.startsWith(t.end) &&
        ((l.delimiter = t.delim), (i = i.slice(t.delim.length)), ([l.postDelimiter, i] = ae(i))),
      p)
    ) {
      let y = i.trimRight();
      (l.end = i.slice(y.length - t.end.length)), (i = y.slice(0, -t.end.length));
    }
    if (((l.description = i), n.push({ number: a, source: s, tokens: l }), a++, p)) {
      let y = n.slice();
      return (n = null), y;
    }
    return null;
  }, 'parseSource');
}
u(Kt, 'getParser');
function Mt({ tokenizers: r }) {
  return u(function (t) {
    var n;
    let a = Vt({ source: t });
    for (let s of r)
      if (
        ((a = s(a)),
        !((n = a.problems[a.problems.length - 1]) === null || n === void 0) && n.critical)
      )
        break;
    return a;
  }, 'parseSpec');
}
u(Mt, 'getParser');
function qt() {
  return (r) => {
    let { tokens: t } = r.source[0],
      n = t.description.match(/\s*(@(\S+))(\s*)/);
    return n === null
      ? (r.problems.push({
          code: 'spec:tag:prefix',
          message: 'tag should start with "@" symbol',
          line: r.source[0].number,
          critical: !0,
        }),
        r)
      : ((t.tag = n[1]),
        (t.postTag = n[3]),
        (t.description = t.description.slice(n[0].length)),
        (r.tag = n[2]),
        r);
  };
}
u(qt, 'tagTokenizer');
function Bt(r = 'compact') {
  let t = Yt(r);
  return (n) => {
    let a = 0,
      s = [];
    for (let [p, { tokens: y }] of n.source.entries()) {
      let f = '';
      if (p === 0 && y.description[0] !== '{') return n;
      for (let T of y.description)
        if ((T === '{' && a++, T === '}' && a--, (f += T), a === 0)) break;
      if ((s.push([y, f]), a === 0)) break;
    }
    if (a !== 0)
      return (
        n.problems.push({
          code: 'spec:type:unpaired-curlies',
          message: 'unpaired curlies',
          line: n.source[0].number,
          critical: !0,
        }),
        n
      );
    let i = [],
      l = s[0][0].postDelimiter.length;
    for (let [p, [y, f]] of s.entries())
      (y.type = f),
        p > 0 &&
          ((y.type = y.postDelimiter.slice(l) + f),
          (y.postDelimiter = y.postDelimiter.slice(0, l))),
        ([y.postType, y.description] = ae(y.description.slice(f.length))),
        i.push(y.type);
    return (
      (i[0] = i[0].slice(1)), (i[i.length - 1] = i[i.length - 1].slice(0, -1)), (n.type = t(i)), n
    );
  };
}
u(Bt, 'typeTokenizer');
var no = u((r) => r.trim(), 'trim');
function Yt(r) {
  return r === 'compact'
    ? (t) => t.map(no).join('')
    : r === 'preserve'
      ? (t) =>
          t.join(`
`)
      : r;
}
u(Yt, 'getJoiner');
var ao = u((r) => r && r.startsWith('"') && r.endsWith('"'), 'isQuoted');
function Gt() {
  let r = u((t, { tokens: n }, a) => (n.type === '' ? t : a), 'typeEnd');
  return (t) => {
    let { tokens: n } = t.source[t.source.reduce(r, 0)],
      a = n.description.trimLeft(),
      s = a.split('"');
    if (s.length > 1 && s[0] === '' && s.length % 2 === 1)
      return (
        (t.name = s[1]),
        (n.name = `"${s[1]}"`),
        ([n.postName, n.description] = ae(a.slice(n.name.length))),
        t
      );
    let i = 0,
      l = '',
      p = !1,
      y;
    for (let T of a) {
      if (i === 0 && Ft(T)) break;
      T === '[' && i++, T === ']' && i--, (l += T);
    }
    if (i !== 0)
      return (
        t.problems.push({
          code: 'spec:name:unpaired-brackets',
          message: 'unpaired brackets',
          line: t.source[0].number,
          critical: !0,
        }),
        t
      );
    let f = l;
    if (l[0] === '[' && l[l.length - 1] === ']') {
      (p = !0), (l = l.slice(1, -1));
      let T = l.split('=');
      if (((l = T[0].trim()), T[1] !== void 0 && (y = T.slice(1).join('=').trim()), l === ''))
        return (
          t.problems.push({
            code: 'spec:name:empty-name',
            message: 'empty name',
            line: t.source[0].number,
            critical: !0,
          }),
          t
        );
      if (y === '')
        return (
          t.problems.push({
            code: 'spec:name:empty-default',
            message: 'empty default value',
            line: t.source[0].number,
            critical: !0,
          }),
          t
        );
      if (!ao(y) && /=(?!>)/.test(y))
        return (
          t.problems.push({
            code: 'spec:name:invalid-default',
            message: 'invalid default value syntax',
            line: t.source[0].number,
            critical: !0,
          }),
          t
        );
    }
    return (
      (t.optional = p),
      (t.name = l),
      (n.name = f),
      y !== void 0 && (t.default = y),
      ([n.postName, n.description] = ae(a.slice(n.name.length))),
      t
    );
  };
}
u(Gt, 'nameTokenizer');
function zt(r = 'compact', t = ee) {
  let n = We(r);
  return (a) => ((a.description = n(a.source, t)), a);
}
u(zt, 'descriptionTokenizer');
function We(r) {
  return r === 'compact' ? Wt : r === 'preserve' ? Ht : r;
}
u(We, 'getJoiner');
function Wt(r, t = ee) {
  return r
    .map(({ tokens: { description: n } }) => n.trim())
    .filter((n) => n !== '')
    .join(' ');
}
u(Wt, 'compactJoiner');
var oo = u((r, { tokens: t }, n) => (t.type === '' ? r : n), 'lineNo'),
  so = u(
    ({ tokens: r }) => (r.delimiter === '' ? r.start : r.postDelimiter.slice(1)) + r.description,
    'getDescription',
  );
function Ht(r, t = ee) {
  if (r.length === 0) return '';
  r[0].tokens.description === '' && r[0].tokens.delimiter === t.start && (r = r.slice(1));
  let n = r[r.length - 1];
  return (
    n !== void 0 &&
      n.tokens.description === '' &&
      n.tokens.end.endsWith(t.end) &&
      (r = r.slice(0, -1)),
    (r = r.slice(r.reduce(oo, 0))),
    r.map(so).join(`
`)
  );
}
u(Ht, 'preserveJoiner');
function Qt({
  startLine: r = 0,
  fence: t = '```',
  spacing: n = 'compact',
  markers: a = ee,
  tokenizers: s = [qt(), Bt(n), Gt(), zt(n)],
} = {}) {
  if (r < 0 || r % 1 > 0) throw new Error('Invalid startLine');
  let i = Kt({ startLine: r, markers: a }),
    l = $t({ fence: t }),
    p = Mt({ tokenizers: s }),
    y = We(n);
  return function (f) {
    let T = [];
    for (let v of Ut(f)) {
      let _ = i(v);
      if (_ === null) continue;
      let b = l(_),
        E = b.slice(1).map(p);
      T.push({
        description: y(b[0], a),
        tags: E,
        source: _,
        problems: E.reduce((x, U) => x.concat(U.problems), []),
      });
    }
    return T;
  };
}
u(Qt, 'getParser');
function Xt(r) {
  return (
    r.start +
    r.delimiter +
    r.postDelimiter +
    r.tag +
    r.postTag +
    r.type +
    r.postType +
    r.name +
    r.postName +
    r.description +
    r.end +
    r.lineEnd
  );
}
u(Xt, 'join');
function io() {
  return (r) =>
    r.source.map(({ tokens: t }) => Xt(t)).join(`
`);
}
u(io, 'getStringifier');
function Zt(r, t = {}) {
  return Qt(t)(r);
}
u(Zt, 'parse');
function er(r) {
  return r != null && r.includes('@');
}
u(er, 'containsJsDoc');
function tr(r) {
  let t =
      `/**
` +
      (r ?? '')
        .split(
          `
`,
        )
        .map((a) => ` * ${a}`).join(`
`) +
      `
*/`,
    n = Zt(t, { spacing: 'preserve' });
  if (!n || n.length === 0) throw new Error('Cannot parse JSDoc tags.');
  return n[0];
}
u(tr, 'parse');
var co = { tags: ['param', 'arg', 'argument', 'returns', 'ignore', 'deprecated'] },
  lo = u((r, t = co) => {
    if (!er(r)) return { includesJsDoc: !1, ignore: !1 };
    let n = tr(r),
      a = rr(n, t.tags);
    return a.ignore
      ? { includesJsDoc: !0, ignore: !0 }
      : { includesJsDoc: !0, ignore: !1, description: n.description.trim(), extractedTags: a };
  }, 'parseJsDoc');
function rr(r, t) {
  let n = { params: null, deprecated: null, returns: null, ignore: !1 };
  for (let a of r.tags)
    if (!(t !== void 0 && !t.includes(a.tag)))
      if (a.tag === 'ignore') {
        n.ignore = !0;
        break;
      } else
        switch (a.tag) {
          case 'param':
          case 'arg':
          case 'argument': {
            let s = ar(a);
            s != null && (n.params == null && (n.params = []), n.params.push(s));
            break;
          }
          case 'deprecated': {
            let s = or(a);
            s != null && (n.deprecated = s);
            break;
          }
          case 'returns': {
            let s = sr(a);
            s != null && (n.returns = s);
            break;
          }
        }
  return n;
}
u(rr, 'extractJsDocTags');
function nr(r) {
  return r.replace(/[\.-]$/, '');
}
u(nr, 'normaliseParamName');
function ar(r) {
  if (!r.name || r.name === '-') return null;
  let t = Xe(r.type);
  return {
    name: r.name,
    type: t,
    description: Qe(r.description),
    getPrettyName: u(() => nr(r.name), 'getPrettyName'),
    getTypeName: u(() => (t ? Ze(t) : null), 'getTypeName'),
  };
}
u(ar, 'extractParam');
function or(r) {
  return r.name ? He(r.name, r.description) : null;
}
u(or, 'extractDeprecated');
function He(r, t) {
  let n = r === '' ? t : `${r} ${t}`;
  return Qe(n);
}
u(He, 'joinNameAndDescription');
function Qe(r) {
  let t = r.replace(/^- /g, '').trim();
  return t === '' ? null : t;
}
u(Qe, 'normaliseDescription');
function sr(r) {
  let t = Xe(r.type);
  return t
    ? {
        type: t,
        description: He(r.name, r.description),
        getTypeName: u(() => Ze(t), 'getTypeName'),
      }
    : null;
}
u(sr, 'extractReturns');
var re = Ve.stringifyRules(),
  po = re.JsdocTypeObject;
re.JsdocTypeAny = () => 'any';
re.JsdocTypeObject = (r, t) => `(${po(r, t)})`;
re.JsdocTypeOptional = (r, t) => t(r.element);
re.JsdocTypeNullable = (r, t) => t(r.element);
re.JsdocTypeNotNullable = (r, t) => t(r.element);
re.JsdocTypeUnion = (r, t) => r.elements.map(t).join('|');
function Xe(r) {
  try {
    return Ve.parse(r, 'typescript');
  } catch {
    return null;
  }
}
u(Xe, 'extractType');
function Ze(r) {
  return Ve.transform(re, r);
}
u(Ze, 'extractTypeName');
function et(r) {
  return r.length > 90;
}
u(et, 'isTooLongForTypeSummary');
function ir(r) {
  return r.length > 50;
}
u(ir, 'isTooLongForDefaultValueSummary');
function D(r, t) {
  return r === t ? { summary: r } : { summary: r, detail: t };
}
u(D, 'createSummaryValue');
function cr(r, t) {
  if (r != null) {
    let { value: n } = r;
    if (!Pe(n)) return ir(n) ? D(t?.name, n) : D(n);
  }
  return null;
}
u(cr, 'createDefaultValue');
function tt({ name: r, value: t, elements: n, raw: a }) {
  return t ?? (n != null ? n.map(tt).join(' | ') : (a ?? r));
}
u(tt, 'generateUnionElement');
function lr({ name: r, raw: t, elements: n }) {
  return n != null ? D(n.map(tt).join(' | ')) : t != null ? D(t.replace(/^\|\s*/, '')) : D(r);
}
u(lr, 'generateUnion');
function pr({ type: r, raw: t }) {
  return t != null ? D(t) : D(r);
}
u(pr, 'generateFuncSignature');
function ur({ type: r, raw: t }) {
  return t != null ? (et(t) ? D(r, t) : D(t)) : D(r);
}
u(ur, 'generateObjectSignature');
function yr(r) {
  let { type: t } = r;
  return t === 'object' ? ur(r) : pr(r);
}
u(yr, 'generateSignature');
function dr({ name: r, raw: t }) {
  return t != null ? (et(t) ? D(r, t) : D(t)) : D(r);
}
u(dr, 'generateDefault');
function fr(r) {
  if (r == null) return null;
  switch (r.name) {
    case 'union':
      return lr(r);
    case 'signature':
      return yr(r);
    default:
      return dr(r);
  }
}
u(fr, 'createType');
var uo = u((r, t) => {
  let { flowType: n, description: a, required: s, defaultValue: i } = t;
  return {
    name: r,
    type: fr(n),
    required: s,
    description: a,
    defaultValue: cr(i ?? null, n ?? null),
  };
}, 'createFlowPropDef');
function mr({ defaultValue: r }) {
  if (r != null) {
    let { value: t } = r;
    if (!Pe(t)) return D(t);
  }
  return null;
}
u(mr, 'createDefaultValue');
function Tr({ tsType: r, required: t }) {
  if (r == null) return null;
  let n = r.name;
  return (
    t || (n = n.replace(' | undefined', '')),
    D(['Array', 'Record', 'signature'].includes(r.name) ? r.raw : n)
  );
}
u(Tr, 'createType');
var yo = u((r, t) => {
  let { description: n, required: a } = t;
  return { name: r, type: Tr(t), required: a, description: n, defaultValue: mr(t) };
}, 'createTsPropDef');
function hr(r) {
  return r != null ? D(r.name) : null;
}
u(hr, 'createType');
function vr(r) {
  let { computed: t, func: n } = r;
  return typeof t > 'u' && typeof n > 'u';
}
u(vr, 'isReactDocgenTypescript');
function gr(r) {
  return r
    ? r.name === 'string'
      ? !0
      : r.name === 'enum'
        ? Array.isArray(r.value) &&
          r.value.every(
            ({ value: t }) => typeof t == 'string' && t[0] === '"' && t[t.length - 1] === '"',
          )
        : !1
    : !1;
}
u(gr, 'isStringValued');
function br(r, t) {
  if (r != null) {
    let { value: n } = r;
    if (!Pe(n)) return vr(r) && gr(t) ? D(JSON.stringify(n)) : D(n);
  }
  return null;
}
u(br, 'createDefaultValue');
function rt(r, t, n) {
  let { description: a, required: s, defaultValue: i } = n;
  return { name: r, type: hr(t), required: s, description: a, defaultValue: br(i, t) };
}
u(rt, 'createBasicPropDef');
function Te(r, t) {
  if (t?.includesJsDoc) {
    let { description: n, extractedTags: a } = t;
    n != null && (r.description = t.description);
    let s = {
      ...a,
      params: a?.params?.map((i) => ({ name: i.getPrettyName(), description: i.description })),
    };
    Object.values(s).filter(Boolean).length > 0 && (r.jsDocTags = s);
  }
  return r;
}
u(Te, 'applyJsDocResult');
var fo = u((r, t, n) => {
    let a = rt(r, t.type, t);
    return (a.sbType = Ge(t)), Te(a, n);
  }, 'javaScriptFactory'),
  mo = u((r, t, n) => {
    let a = yo(r, t);
    return (a.sbType = Ge(t)), Te(a, n);
  }, 'tsFactory'),
  To = u((r, t, n) => {
    let a = uo(r, t);
    return (a.sbType = Ge(t)), Te(a, n);
  }, 'flowFactory'),
  ho = u((r, t, n) => {
    let a = rt(r, { name: 'unknown' }, t);
    return Te(a, n);
  }, 'unknownFactory'),
  Jr = u((r) => {
    switch (r) {
      case 'JavaScript':
        return fo;
      case 'TypeScript':
        return mo;
      case 'Flow':
        return To;
      default:
        return ho;
    }
  }, 'getPropDefFactory'),
  wr = u(
    (r) =>
      r.type != null
        ? 'JavaScript'
        : r.flowType != null
          ? 'Flow'
          : r.tsType != null
            ? 'TypeScript'
            : 'Unknown',
    'getTypeSystem',
  ),
  vo = u((r) => {
    let t = wr(r[0]),
      n = Jr(t);
    return r.map((a) => {
      let s = a;
      return (
        a.type?.elements && (s = { ...a, type: { ...a.type, value: a.type.elements } }),
        nt(s.name, s, t, n)
      );
    });
  }, 'extractComponentSectionArray'),
  go = u((r) => {
    let t = Object.keys(r),
      n = wr(r[t[0]]),
      a = Jr(n);
    return t
      .map((s) => {
        let i = r[s];
        return i != null ? nt(s, i, n, a) : null;
      })
      .filter(Boolean);
  }, 'extractComponentSectionObject'),
  Eo = u((r, t) => {
    let n = It(r, t);
    return At(n) ? (Array.isArray(n) ? vo(n) : go(n)) : [];
  }, 'extractComponentProps');
function nt(r, t, n, a) {
  let s = lo(t.description);
  return s.includesJsDoc && s.ignore
    ? null
    : { propDef: a(r, t, s), jsDocTags: s.extractedTags, docgenInfo: t, typeSystem: n };
}
u(nt, 'extractProp');
function bo(r) {
  return r != null ? Rt(r) : '';
}
u(bo, 'extractComponentDescription');
const { combineParameters: Jo } = __STORYBOOK_MODULE_PREVIEW_API__;
var No = u((r) => {
    let {
        component: t,
        argTypes: n,
        parameters: { docs: a = {} },
      } = r,
      { extractArgTypes: s } = a,
      i = s && t ? s(t) : {};
    return i ? Jo(i, n) : n;
  }, 'enhanceArgTypes'),
  wo = 'storybook/docs',
  Po = `${wo}/snippet-rendered`,
  xo = ((r) => ((r.AUTO = 'auto'), (r.CODE = 'code'), (r.DYNAMIC = 'dynamic'), r))(xo || {});
export {
  ir as $,
  xo as D,
  It as L,
  ze as N,
  et as Q,
  D as a,
  Eo as b,
  No as c,
  Za as d,
  bo as i,
  Po as y,
};
