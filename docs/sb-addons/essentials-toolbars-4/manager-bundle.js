try {
  (() => {
    var n = __REACT__,
      {
        Children: se,
        Component: ie,
        Fragment: ue,
        Profiler: ce,
        PureComponent: pe,
        StrictMode: me,
        Suspense: de,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: be,
        cloneElement: Se,
        createContext: _e,
        createElement: Te,
        createFactory: ye,
        createRef: ve,
        forwardRef: fe,
        isValidElement: Ce,
        lazy: Ie,
        memo: Oe,
        startTransition: xe,
        unstable_act: Ee,
        useCallback: f,
        useContext: ge,
        useDebugValue: ke,
        useDeferredValue: he,
        useEffect: g,
        useId: Ae,
        useImperativeHandle: Re,
        useInsertionEffect: Le,
        useLayoutEffect: Be,
        useMemo: Me,
        useReducer: Pe,
        useRef: L,
        useState: B,
        useSyncExternalStore: Ne,
        useTransition: we,
        version: De,
      } = __REACT__;
    var Ge = __STORYBOOK_API__,
      {
        ActiveTabs: Ke,
        Consumer: Ue,
        ManagerContext: Ye,
        Provider: $e,
        RequestResponseError: qe,
        addons: k,
        combineParameters: ze,
        controlOrMetaKey: je,
        controlOrMetaSymbol: Ze,
        eventMatchesShortcut: Je,
        eventToShortcut: Qe,
        experimental_MockUniversalStore: Xe,
        experimental_UniversalStore: et,
        experimental_requestResponse: tt,
        experimental_useUniversalStore: rt,
        isMacLike: ot,
        isShortcutTaken: at,
        keyToSymbol: nt,
        merge: lt,
        mockChannel: st,
        optionOrAltSymbol: it,
        shortcutMatchesShortcut: ut,
        shortcutToHumanString: ct,
        types: M,
        useAddonState: pt,
        useArgTypes: mt,
        useArgs: dt,
        useChannel: bt,
        useGlobalTypes: P,
        useGlobals: h,
        useParameter: St,
        useSharedState: _t,
        useStoryPrepared: Tt,
        useStorybookApi: N,
        useStorybookState: yt,
      } = __STORYBOOK_API__;
    var Ot = __STORYBOOK_COMPONENTS__,
      {
        A: xt,
        ActionBar: Et,
        AddonPanel: gt,
        Badge: kt,
        Bar: ht,
        Blockquote: At,
        Button: Rt,
        ClipboardCode: Lt,
        Code: Bt,
        DL: Mt,
        Div: Pt,
        DocumentWrapper: Nt,
        EmptyTabContent: wt,
        ErrorFormatter: Dt,
        FlexBar: Vt,
        Form: Ht,
        H1: Wt,
        H2: Ft,
        H3: Gt,
        H4: Kt,
        H5: Ut,
        H6: Yt,
        HR: $t,
        IconButton: w,
        IconButtonSkeleton: qt,
        Icons: A,
        Img: zt,
        LI: jt,
        Link: Zt,
        ListItem: Jt,
        Loader: Qt,
        Modal: Xt,
        OL: er,
        P: tr,
        Placeholder: rr,
        Pre: or,
        ProgressSpinner: ar,
        ResetWrapper: nr,
        ScrollArea: lr,
        Separator: D,
        Spaced: sr,
        Span: ir,
        StorybookIcon: ur,
        StorybookLogo: cr,
        Symbols: pr,
        SyntaxHighlighter: mr,
        TT: dr,
        TabBar: br,
        TabButton: Sr,
        TabWrapper: _r,
        Table: Tr,
        Tabs: yr,
        TabsState: vr,
        TooltipLinkList: V,
        TooltipMessage: fr,
        TooltipNote: Cr,
        UL: Ir,
        WithTooltip: H,
        WithTooltipPure: Or,
        Zoom: xr,
        codeCommon: Er,
        components: gr,
        createCopyToClipboardFunction: kr,
        getStoryHref: hr,
        icons: Ar,
        interleaveSeparators: Rr,
        nameSpaceClassNames: Lr,
        resetComponents: Br,
        withReset: Mr,
      } = __STORYBOOK_COMPONENTS__;
    var K = { type: 'item', value: '' },
      U = (r, t) => ({
        ...t,
        name: t.name || r,
        description: t.description || r,
        toolbar: {
          ...t.toolbar,
          items: t.toolbar.items.map((e) => {
            let o = typeof e == 'string' ? { value: e, title: e } : e;
            return (
              o.type === 'reset' &&
                t.toolbar.icon &&
                ((o.icon = t.toolbar.icon), (o.hideIcon = !0)),
              { ...K, ...o }
            );
          }),
        },
      }),
      Y = ['reset'],
      $ = (r) => r.filter((t) => !Y.includes(t.type)).map((t) => t.value),
      S = 'addon-toolbars',
      q = async (r, t, e) => {
        e &&
          e.next &&
          (await r.setAddonShortcut(S, {
            label: e.next.label,
            defaultShortcut: e.next.keys,
            actionName: `${t}:next`,
            action: e.next.action,
          })),
          e &&
            e.previous &&
            (await r.setAddonShortcut(S, {
              label: e.previous.label,
              defaultShortcut: e.previous.keys,
              actionName: `${t}:previous`,
              action: e.previous.action,
            })),
          e &&
            e.reset &&
            (await r.setAddonShortcut(S, {
              label: e.reset.label,
              defaultShortcut: e.reset.keys,
              actionName: `${t}:reset`,
              action: e.reset.action,
            }));
      },
      z = (r) => (t) => {
        let {
            id: e,
            toolbar: { items: o, shortcuts: a },
          } = t,
          c = N(),
          [_, i] = h(),
          l = L([]),
          u = _[e],
          C = f(() => {
            i({ [e]: '' });
          }, [i]),
          I = f(() => {
            let s = l.current,
              m = s.indexOf(u),
              d = m === s.length - 1 ? 0 : m + 1,
              p = l.current[d];
            i({ [e]: p });
          }, [l, u, i]),
          O = f(() => {
            let s = l.current,
              m = s.indexOf(u),
              d = m > -1 ? m : 0,
              p = d === 0 ? s.length - 1 : d - 1,
              b = l.current[p];
            i({ [e]: b });
          }, [l, u, i]);
        return (
          g(() => {
            a &&
              q(c, e, {
                next: { ...a.next, action: I },
                previous: { ...a.previous, action: O },
                reset: { ...a.reset, action: C },
              });
          }, [c, e, a, I, O, C]),
          g(() => {
            l.current = $(o);
          }, []),
          n.createElement(r, { cycleValues: l.current, ...t })
        );
      },
      W = ({ currentValue: r, items: t }) =>
        r != null && t.find((e) => e.value === r && e.type !== 'reset'),
      j = ({ currentValue: r, items: t }) => {
        let e = W({ currentValue: r, items: t });
        if (e) return e.icon;
      },
      Z = ({ currentValue: r, items: t }) => {
        let e = W({ currentValue: r, items: t });
        if (e) return e.title;
      },
      J = ({ active: r, disabled: t, title: e, icon: o, description: a, onClick: c }) =>
        n.createElement(
          w,
          { active: r, title: a, disabled: t, onClick: t ? () => {} : c },
          o && n.createElement(A, { icon: o, __suppressDeprecationWarning: !0 }),
          e ? `\xA0${e}` : null,
        ),
      Q = ({
        right: r,
        title: t,
        value: e,
        icon: o,
        hideIcon: a,
        onClick: c,
        disabled: _,
        currentValue: i,
      }) => {
        let l =
            o &&
            n.createElement(A, {
              style: { opacity: 1 },
              icon: o,
              __suppressDeprecationWarning: !0,
            }),
          u = { id: e ?? '_reset', active: i === e, right: r, title: t, disabled: _, onClick: c };
        return o && !a && (u.icon = l), u;
      },
      X = z(
        ({
          id: r,
          name: t,
          description: e,
          toolbar: { icon: o, items: a, title: c, preventDynamicIcon: _, dynamicTitle: i },
        }) => {
          let [l, u, C] = h(),
            [I, O] = B(!1),
            s = l[r],
            m = !!s,
            d = r in C,
            p = o,
            b = c;
          _ || (p = j({ currentValue: s, items: a }) || p),
            i && (b = Z({ currentValue: s, items: a }) || b),
            !b && !p && console.warn(`Toolbar '${t}' has no title or icon`);
          let F = f(
            (E) => {
              u({ [r]: E });
            },
            [r, u],
          );
          return n.createElement(
            H,
            {
              placement: 'top',
              tooltip: ({ onHide: E }) => {
                let G = a
                  .filter(({ type: x }) => {
                    let R = !0;
                    return x === 'reset' && !s && (R = !1), R;
                  })
                  .map((x) =>
                    Q({
                      ...x,
                      currentValue: s,
                      disabled: d,
                      onClick: () => {
                        F(x.value), E();
                      },
                    }),
                  );
                return n.createElement(V, { links: G });
              },
              closeOnOutsideClick: !0,
              onVisibleChange: O,
            },
            n.createElement(J, {
              active: I || m,
              disabled: d,
              description: e || '',
              icon: p,
              title: b || '',
            }),
          );
        },
      ),
      ee = () => {
        let r = P(),
          t = Object.keys(r).filter((e) => !!r[e].toolbar);
        return t.length
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement(D, null),
              t.map((e) => {
                let o = U(e, r[e]);
                return n.createElement(X, { key: e, id: e, ...o });
              }),
            )
          : null;
      };
    k.register(S, () =>
      k.add(S, {
        title: S,
        type: M.TOOL,
        match: ({ tabId: r }) => !r,
        render: () => n.createElement(ee, null),
      }),
    );
  })();
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e);
}
