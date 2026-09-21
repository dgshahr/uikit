try {
  (() => {
    var a = __REACT__,
      {
        Children: se,
        Component: ie,
        Fragment: ue,
        Profiler: ce,
        PureComponent: me,
        StrictMode: de,
        Suspense: pe,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: be,
        cloneElement: _e,
        createContext: Se,
        createElement: ye,
        createFactory: Te,
        createRef: Oe,
        forwardRef: ke,
        isValidElement: ve,
        lazy: Ce,
        memo: fe,
        startTransition: Ie,
        unstable_act: Ee,
        useCallback: k,
        useContext: xe,
        useDebugValue: ge,
        useDeferredValue: Ae,
        useEffect: x,
        useId: Pe,
        useImperativeHandle: Re,
        useInsertionEffect: he,
        useLayoutEffect: Le,
        useMemo: Be,
        useReducer: Me,
        useRef: h,
        useState: L,
        useSyncExternalStore: Ne,
        useTransition: De,
        version: Ue,
      } = __REACT__;
    var Fe = __STORYBOOK_API__,
      {
        ActiveTabs: Ge,
        Consumer: je,
        ManagerContext: Ke,
        Provider: Ye,
        RequestResponseError: $e,
        addons: g,
        combineParameters: qe,
        controlOrMetaKey: ze,
        controlOrMetaSymbol: Ze,
        eventMatchesShortcut: Je,
        eventToShortcut: Qe,
        experimental_MockUniversalStore: Xe,
        experimental_UniversalStore: et,
        experimental_requestResponse: tt,
        experimental_useUniversalStore: ot,
        isMacLike: rt,
        isShortcutTaken: nt,
        keyToSymbol: at,
        merge: lt,
        mockChannel: st,
        optionOrAltSymbol: it,
        shortcutMatchesShortcut: ut,
        shortcutToHumanString: ct,
        types: B,
        useAddonState: mt,
        useArgTypes: dt,
        useArgs: pt,
        useChannel: bt,
        useGlobalTypes: M,
        useGlobals: A,
        useParameter: _t,
        useSharedState: St,
        useStoryPrepared: yt,
        useStorybookApi: N,
        useStorybookState: Tt,
      } = __STORYBOOK_API__;
    var ft = __STORYBOOK_COMPONENTS__,
      {
        A: It,
        ActionBar: Et,
        AddonPanel: xt,
        Badge: gt,
        Bar: At,
        Blockquote: Pt,
        Button: Rt,
        ClipboardCode: ht,
        Code: Lt,
        DL: Bt,
        Div: Mt,
        DocumentWrapper: Nt,
        EmptyTabContent: Dt,
        ErrorFormatter: Ut,
        FlexBar: Vt,
        Form: wt,
        H1: Ht,
        H2: Wt,
        H3: Ft,
        H4: Gt,
        H5: jt,
        H6: Kt,
        HR: Yt,
        IconButton: D,
        IconButtonSkeleton: $t,
        Icons: P,
        Img: qt,
        LI: zt,
        Link: Zt,
        ListItem: Jt,
        Loader: Qt,
        Modal: Xt,
        OL: eo,
        P: to,
        Placeholder: oo,
        Pre: ro,
        ProgressSpinner: no,
        ResetWrapper: ao,
        ScrollArea: lo,
        Separator: U,
        Spaced: so,
        Span: io,
        StorybookIcon: uo,
        StorybookLogo: co,
        Symbols: mo,
        SyntaxHighlighter: po,
        TT: bo,
        TabBar: _o,
        TabButton: So,
        TabWrapper: yo,
        Table: To,
        Tabs: Oo,
        TabsState: ko,
        TooltipLinkList: V,
        TooltipMessage: vo,
        TooltipNote: Co,
        UL: fo,
        WithTooltip: w,
        WithTooltipPure: Io,
        Zoom: Eo,
        codeCommon: xo,
        components: go,
        createCopyToClipboardFunction: Ao,
        getStoryHref: Po,
        icons: Ro,
        interleaveSeparators: ho,
        nameSpaceClassNames: Lo,
        resetComponents: Bo,
        withReset: Mo,
      } = __STORYBOOK_COMPONENTS__;
    var G = { type: 'item', value: '' },
      j = (o, t) => ({
        ...t,
        name: t.name || o,
        description: t.description || o,
        toolbar: {
          ...t.toolbar,
          items: t.toolbar.items.map((e) => {
            let r = typeof e == 'string' ? { value: e, title: e } : e;
            return (
              r.type === 'reset' &&
                t.toolbar.icon &&
                ((r.icon = t.toolbar.icon), (r.hideIcon = !0)),
              { ...G, ...r }
            );
          }),
        },
      }),
      K = ['reset'],
      Y = (o) => o.filter((t) => !K.includes(t.type)).map((t) => t.value),
      _ = 'addon-toolbars',
      $ = async (o, t, e) => {
        (e &&
          e.next &&
          (await o.setAddonShortcut(_, {
            label: e.next.label,
            defaultShortcut: e.next.keys,
            actionName: `${t}:next`,
            action: e.next.action,
          })),
          e &&
            e.previous &&
            (await o.setAddonShortcut(_, {
              label: e.previous.label,
              defaultShortcut: e.previous.keys,
              actionName: `${t}:previous`,
              action: e.previous.action,
            })),
          e &&
            e.reset &&
            (await o.setAddonShortcut(_, {
              label: e.reset.label,
              defaultShortcut: e.reset.keys,
              actionName: `${t}:reset`,
              action: e.reset.action,
            })));
      },
      q = (o) => (t) => {
        let {
            id: e,
            toolbar: { items: r, shortcuts: n },
          } = t,
          c = N(),
          [S, i] = A(),
          l = h([]),
          u = S[e],
          v = k(() => {
            i({ [e]: '' });
          }, [i]),
          C = k(() => {
            let s = l.current,
              d = s.indexOf(u),
              p = d === s.length - 1 ? 0 : d + 1,
              m = l.current[p];
            i({ [e]: m });
          }, [l, u, i]),
          f = k(() => {
            let s = l.current,
              d = s.indexOf(u),
              p = d > -1 ? d : 0,
              m = p === 0 ? s.length - 1 : p - 1,
              b = l.current[m];
            i({ [e]: b });
          }, [l, u, i]);
        return (
          x(() => {
            n &&
              $(c, e, {
                next: { ...n.next, action: C },
                previous: { ...n.previous, action: f },
                reset: { ...n.reset, action: v },
              });
          }, [c, e, n, C, f, v]),
          x(() => {
            l.current = Y(r);
          }, []),
          a.createElement(o, { cycleValues: l.current, ...t })
        );
      },
      H = ({ currentValue: o, items: t }) =>
        o != null && t.find((e) => e.value === o && e.type !== 'reset'),
      z = ({ currentValue: o, items: t }) => {
        let e = H({ currentValue: o, items: t });
        if (e) return e.icon;
      },
      Z = ({ currentValue: o, items: t }) => {
        let e = H({ currentValue: o, items: t });
        if (e) return e.title;
      },
      J = ({ active: o, disabled: t, title: e, icon: r, description: n, onClick: c }) =>
        a.createElement(
          D,
          { active: o, title: n, disabled: t, onClick: t ? () => {} : c },
          r && a.createElement(P, { icon: r, __suppressDeprecationWarning: !0 }),
          e ? `\xA0${e}` : null,
        ),
      Q = ({
        right: o,
        title: t,
        value: e,
        icon: r,
        hideIcon: n,
        onClick: c,
        disabled: S,
        currentValue: i,
      }) => {
        let l =
            r &&
            a.createElement(P, {
              style: { opacity: 1 },
              icon: r,
              __suppressDeprecationWarning: !0,
            }),
          u = { id: e ?? '_reset', active: i === e, right: o, title: t, disabled: S, onClick: c };
        return (r && !n && (u.icon = l), u);
      },
      X = q(
        ({
          id: o,
          name: t,
          description: e,
          toolbar: { icon: r, items: n, title: c, preventDynamicIcon: S, dynamicTitle: i },
        }) => {
          let [l, u, v] = A(),
            [C, f] = L(!1),
            s = l[o],
            d = !!s,
            p = o in v,
            m = r,
            b = c;
          (S || (m = z({ currentValue: s, items: n }) || m),
            i && (b = Z({ currentValue: s, items: n }) || b),
            !b && !m && console.warn(`Toolbar '${t}' has no title or icon`));
          let W = k(
            (E) => {
              u({ [o]: E });
            },
            [o, u],
          );
          return a.createElement(
            w,
            {
              placement: 'top',
              tooltip: ({ onHide: E }) => {
                let F = n
                  .filter(({ type: I }) => {
                    let R = !0;
                    return (I === 'reset' && !s && (R = !1), R);
                  })
                  .map((I) =>
                    Q({
                      ...I,
                      currentValue: s,
                      disabled: p,
                      onClick: () => {
                        (W(I.value), E());
                      },
                    }),
                  );
                return a.createElement(V, { links: F });
              },
              closeOnOutsideClick: !0,
              onVisibleChange: f,
            },
            a.createElement(J, {
              active: C || d,
              disabled: p,
              description: e || '',
              icon: m,
              title: b || '',
            }),
          );
        },
      ),
      ee = () => {
        let o = M(),
          t = Object.keys(o).filter((e) => !!o[e].toolbar);
        return t.length
          ? a.createElement(
              a.Fragment,
              null,
              a.createElement(U, null),
              t.map((e) => {
                let r = j(e, o[e]);
                return a.createElement(X, { key: e, id: e, ...r });
              }),
            )
          : null;
      };
    g.register(_, () =>
      g.add(_, {
        title: _,
        type: B.TOOL,
        match: ({ tabId: o }) => !o,
        render: () => a.createElement(ee, null),
      }),
    );
  })();
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e);
}
