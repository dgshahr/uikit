try {
  (() => {
    var me = Object.create;
    var J = Object.defineProperty;
    var he = Object.getOwnPropertyDescriptor;
    var fe = Object.getOwnPropertyNames;
    var ge = Object.getPrototypeOf,
      we = Object.prototype.hasOwnProperty;
    var _ = ((e) =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
          ? new Proxy(e, { get: (t, a) => (typeof require < 'u' ? require : t)[a] })
          : e)(function (e) {
      if (typeof require < 'u') return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var z = (e, t) => () => (e && (t = e((e = 0))), t);
    var be = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var ye = (e, t, a, s) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let c of fe(t))
          !we.call(e, c) &&
            c !== a &&
            J(e, c, { get: () => t[c], enumerable: !(s = he(t, c)) || s.enumerable });
      return e;
    };
    var Se = (e, t, a) => (
      (a = e != null ? me(ge(e)) : {}),
      ye(t || !e || !e.__esModule ? J(a, 'default', { value: e, enumerable: !0 }) : a, e)
    );
    var f = z(() => {});
    var g = z(() => {});
    var w = z(() => {});
    var le = be((ce, Z) => {
      f();
      g();
      w();
      (function (e) {
        if (typeof ce == 'object' && typeof Z < 'u') Z.exports = e();
        else if (typeof define == 'function' && define.amd) define([], e);
        else {
          var t;
          typeof window < 'u' || typeof window < 'u'
            ? (t = window)
            : typeof self < 'u'
              ? (t = self)
              : (t = this),
            (t.memoizerific = e());
        }
      })(function () {
        var e, t, a;
        return (function s(c, b, p) {
          function o(n, d) {
            if (!b[n]) {
              if (!c[n]) {
                var r = typeof _ == 'function' && _;
                if (!d && r) return r(n, !0);
                if (i) return i(n, !0);
                var u = new Error("Cannot find module '" + n + "'");
                throw ((u.code = 'MODULE_NOT_FOUND'), u);
              }
              var I = (b[n] = { exports: {} });
              c[n][0].call(
                I.exports,
                function (h) {
                  var y = c[n][1][h];
                  return o(y || h);
                },
                I,
                I.exports,
                s,
                c,
                b,
                p,
              );
            }
            return b[n].exports;
          }
          for (var i = typeof _ == 'function' && _, m = 0; m < p.length; m++) o(p[m]);
          return o;
        })(
          {
            1: [
              function (s, c, b) {
                c.exports = function (p) {
                  if (typeof Map != 'function' || p) {
                    var o = s('./similar');
                    return new o();
                  } else return new Map();
                };
              },
              { './similar': 2 },
            ],
            2: [
              function (s, c, b) {
                function p() {
                  return (this.list = []), (this.lastItem = void 0), (this.size = 0), this;
                }
                (p.prototype.get = function (o) {
                  var i;
                  if (this.lastItem && this.isEqual(this.lastItem.key, o)) return this.lastItem.val;
                  if (((i = this.indexOf(o)), i >= 0))
                    return (this.lastItem = this.list[i]), this.list[i].val;
                }),
                  (p.prototype.set = function (o, i) {
                    var m;
                    return this.lastItem && this.isEqual(this.lastItem.key, o)
                      ? ((this.lastItem.val = i), this)
                      : ((m = this.indexOf(o)),
                        m >= 0
                          ? ((this.lastItem = this.list[m]), (this.list[m].val = i), this)
                          : ((this.lastItem = { key: o, val: i }),
                            this.list.push(this.lastItem),
                            this.size++,
                            this));
                  }),
                  (p.prototype.delete = function (o) {
                    var i;
                    if (
                      (this.lastItem &&
                        this.isEqual(this.lastItem.key, o) &&
                        (this.lastItem = void 0),
                      (i = this.indexOf(o)),
                      i >= 0)
                    )
                      return this.size--, this.list.splice(i, 1)[0];
                  }),
                  (p.prototype.has = function (o) {
                    var i;
                    return this.lastItem && this.isEqual(this.lastItem.key, o)
                      ? !0
                      : ((i = this.indexOf(o)), i >= 0 ? ((this.lastItem = this.list[i]), !0) : !1);
                  }),
                  (p.prototype.forEach = function (o, i) {
                    var m;
                    for (m = 0; m < this.size; m++)
                      o.call(i || this, this.list[m].val, this.list[m].key, this);
                  }),
                  (p.prototype.indexOf = function (o) {
                    var i;
                    for (i = 0; i < this.size; i++) if (this.isEqual(this.list[i].key, o)) return i;
                    return -1;
                  }),
                  (p.prototype.isEqual = function (o, i) {
                    return o === i || (o !== o && i !== i);
                  }),
                  (c.exports = p);
              },
              {},
            ],
            3: [
              function (s, c, b) {
                var p = s('map-or-similar');
                c.exports = function (n) {
                  var d = new p(!1),
                    r = [];
                  return function (u) {
                    var I = function () {
                      var h = d,
                        y,
                        R,
                        S = arguments.length - 1,
                        M = Array(S + 1),
                        x = !0,
                        C;
                      if ((I.numArgs || I.numArgs === 0) && I.numArgs !== S + 1)
                        throw new Error(
                          'Memoizerific functions should always be called with the same number of arguments',
                        );
                      for (C = 0; C < S; C++) {
                        if (((M[C] = { cacheItem: h, arg: arguments[C] }), h.has(arguments[C]))) {
                          h = h.get(arguments[C]);
                          continue;
                        }
                        (x = !1), (y = new p(!1)), h.set(arguments[C], y), (h = y);
                      }
                      return (
                        x && (h.has(arguments[S]) ? (R = h.get(arguments[S])) : (x = !1)),
                        x || ((R = u.apply(null, arguments)), h.set(arguments[S], R)),
                        n > 0 &&
                          ((M[S] = { cacheItem: h, arg: arguments[S] }),
                          x ? o(r, M) : r.push(M),
                          r.length > n && i(r.shift())),
                        (I.wasMemoized = x),
                        (I.numArgs = S + 1),
                        R
                      );
                    };
                    return (I.limit = n), (I.wasMemoized = !1), (I.cache = d), (I.lru = r), I;
                  };
                };
                function o(n, d) {
                  var r = n.length,
                    u = d.length,
                    I,
                    h,
                    y;
                  for (h = 0; h < r; h++) {
                    for (I = !0, y = 0; y < u; y++)
                      if (!m(n[h][y].arg, d[y].arg)) {
                        I = !1;
                        break;
                      }
                    if (I) break;
                  }
                  n.push(n.splice(h, 1)[0]);
                }
                function i(n) {
                  var d = n.length,
                    r = n[d - 1],
                    u,
                    I;
                  for (
                    r.cacheItem.delete(r.arg), I = d - 2;
                    I >= 0 && ((r = n[I]), (u = r.cacheItem.get(r.arg)), !u || !u.size);
                    I--
                  )
                    r.cacheItem.delete(r.arg);
                }
                function m(n, d) {
                  return n === d || (n !== n && d !== d);
                }
              },
              { 'map-or-similar': 1 },
            ],
          },
          {},
          [3],
        )(3);
      });
    });
    f();
    g();
    w();
    f();
    g();
    w();
    f();
    g();
    w();
    f();
    g();
    w();
    var l = __REACT__,
      {
        Children: $e,
        Component: Je,
        Fragment: V,
        Profiler: Qe,
        PureComponent: Xe,
        StrictMode: et,
        Suspense: tt,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ot,
        cloneElement: nt,
        createContext: rt,
        createElement: H,
        createFactory: it,
        createRef: at,
        forwardRef: ct,
        isValidElement: lt,
        lazy: st,
        memo: Q,
        startTransition: ut,
        unstable_act: It,
        useCallback: X,
        useContext: pt,
        useDebugValue: dt,
        useDeferredValue: mt,
        useEffect: O,
        useId: ht,
        useImperativeHandle: ft,
        useInsertionEffect: gt,
        useLayoutEffect: wt,
        useMemo: bt,
        useReducer: yt,
        useRef: ee,
        useState: N,
        useSyncExternalStore: St,
        useTransition: vt,
        version: Ct,
      } = __REACT__;
    f();
    g();
    w();
    var Rt = __STORYBOOK_API__,
      {
        ActiveTabs: xt,
        Consumer: At,
        ManagerContext: _t,
        Provider: Ot,
        RequestResponseError: Lt,
        addons: U,
        combineParameters: Bt,
        controlOrMetaKey: Pt,
        controlOrMetaSymbol: Mt,
        eventMatchesShortcut: Vt,
        eventToShortcut: Dt,
        experimental_MockUniversalStore: zt,
        experimental_UniversalStore: Ht,
        experimental_requestResponse: Nt,
        experimental_useUniversalStore: Ut,
        isMacLike: Gt,
        isShortcutTaken: Ft,
        keyToSymbol: qt,
        merge: Wt,
        mockChannel: Yt,
        optionOrAltSymbol: jt,
        shortcutMatchesShortcut: Kt,
        shortcutToHumanString: Zt,
        types: te,
        useAddonState: $t,
        useArgTypes: Jt,
        useArgs: Qt,
        useChannel: Xt,
        useGlobalTypes: eo,
        useGlobals: G,
        useParameter: F,
        useSharedState: to,
        useStoryPrepared: oo,
        useStorybookApi: oe,
        useStorybookState: no,
      } = __STORYBOOK_API__;
    f();
    g();
    w();
    var lo = __STORYBOOK_COMPONENTS__,
      {
        A: so,
        ActionBar: uo,
        AddonPanel: Io,
        Badge: po,
        Bar: mo,
        Blockquote: ho,
        Button: fo,
        ClipboardCode: go,
        Code: wo,
        DL: bo,
        Div: yo,
        DocumentWrapper: So,
        EmptyTabContent: vo,
        ErrorFormatter: Co,
        FlexBar: Eo,
        Form: To,
        H1: ko,
        H2: Ro,
        H3: xo,
        H4: Ao,
        H5: _o,
        H6: Oo,
        HR: Lo,
        IconButton: L,
        IconButtonSkeleton: Bo,
        Icons: Po,
        Img: Mo,
        LI: Vo,
        Link: Do,
        ListItem: zo,
        Loader: Ho,
        Modal: No,
        OL: Uo,
        P: Go,
        Placeholder: Fo,
        Pre: qo,
        ProgressSpinner: Wo,
        ResetWrapper: Yo,
        ScrollArea: jo,
        Separator: Ko,
        Spaced: Zo,
        Span: $o,
        StorybookIcon: Jo,
        StorybookLogo: Qo,
        Symbols: Xo,
        SyntaxHighlighter: en,
        TT: tn,
        TabBar: on,
        TabButton: nn,
        TabWrapper: rn,
        Table: an,
        Tabs: cn,
        TabsState: ln,
        TooltipLinkList: q,
        TooltipMessage: sn,
        TooltipNote: un,
        UL: In,
        WithTooltip: W,
        WithTooltipPure: pn,
        Zoom: dn,
        codeCommon: mn,
        components: hn,
        createCopyToClipboardFunction: fn,
        getStoryHref: gn,
        icons: wn,
        interleaveSeparators: bn,
        nameSpaceClassNames: yn,
        resetComponents: Sn,
        withReset: vn,
      } = __STORYBOOK_COMPONENTS__;
    f();
    g();
    w();
    var Rn = __STORYBOOK_THEMING__,
      {
        CacheProvider: xn,
        ClassNames: An,
        Global: Y,
        ThemeProvider: _n,
        background: On,
        color: Ln,
        convert: Bn,
        create: Pn,
        createCache: Mn,
        createGlobal: Vn,
        createReset: Dn,
        css: zn,
        darken: Hn,
        ensure: Nn,
        ignoreSsrWarning: Un,
        isPropValid: Gn,
        jsx: Fn,
        keyframes: qn,
        lighten: Wn,
        styled: v,
        themes: Yn,
        typography: jn,
        useTheme: Kn,
        withTheme: Zn,
      } = __STORYBOOK_THEMING__;
    f();
    g();
    w();
    var er = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: tr,
        AccessibilityIcon: or,
        AccessibilityIgnoredIcon: nr,
        AddIcon: rr,
        AdminIcon: ir,
        AlertAltIcon: ar,
        AlertIcon: cr,
        AlignLeftIcon: lr,
        AlignRightIcon: sr,
        AppleIcon: ur,
        ArrowBottomLeftIcon: Ir,
        ArrowBottomRightIcon: pr,
        ArrowDownIcon: dr,
        ArrowLeftIcon: mr,
        ArrowRightIcon: hr,
        ArrowSolidDownIcon: fr,
        ArrowSolidLeftIcon: gr,
        ArrowSolidRightIcon: wr,
        ArrowSolidUpIcon: br,
        ArrowTopLeftIcon: yr,
        ArrowTopRightIcon: Sr,
        ArrowUpIcon: vr,
        AzureDevOpsIcon: Cr,
        BackIcon: Er,
        BasketIcon: Tr,
        BatchAcceptIcon: kr,
        BatchDenyIcon: Rr,
        BeakerIcon: xr,
        BellIcon: Ar,
        BitbucketIcon: _r,
        BoldIcon: Or,
        BookIcon: Lr,
        BookmarkHollowIcon: Br,
        BookmarkIcon: Pr,
        BottomBarIcon: Mr,
        BottomBarToggleIcon: Vr,
        BoxIcon: Dr,
        BranchIcon: zr,
        BrowserIcon: ne,
        ButtonIcon: Hr,
        CPUIcon: Nr,
        CalendarIcon: Ur,
        CameraIcon: Gr,
        CameraStabilizeIcon: Fr,
        CategoryIcon: qr,
        CertificateIcon: Wr,
        ChangedIcon: Yr,
        ChatIcon: jr,
        CheckIcon: Kr,
        ChevronDownIcon: Zr,
        ChevronLeftIcon: $r,
        ChevronRightIcon: Jr,
        ChevronSmallDownIcon: Qr,
        ChevronSmallLeftIcon: Xr,
        ChevronSmallRightIcon: ei,
        ChevronSmallUpIcon: ti,
        ChevronUpIcon: oi,
        ChromaticIcon: ni,
        ChromeIcon: ri,
        CircleHollowIcon: ii,
        CircleIcon: ai,
        ClearIcon: ci,
        CloseAltIcon: li,
        CloseIcon: si,
        CloudHollowIcon: ui,
        CloudIcon: Ii,
        CogIcon: pi,
        CollapseIcon: di,
        CommandIcon: mi,
        CommentAddIcon: hi,
        CommentIcon: fi,
        CommentsIcon: gi,
        CommitIcon: wi,
        CompassIcon: bi,
        ComponentDrivenIcon: yi,
        ComponentIcon: Si,
        ContrastIcon: vi,
        ContrastIgnoredIcon: Ci,
        ControlsIcon: Ei,
        CopyIcon: Ti,
        CreditIcon: ki,
        CrossIcon: Ri,
        DashboardIcon: xi,
        DatabaseIcon: Ai,
        DeleteIcon: _i,
        DiamondIcon: Oi,
        DirectionIcon: Li,
        DiscordIcon: Bi,
        DocChartIcon: Pi,
        DocListIcon: Mi,
        DocumentIcon: Vi,
        DownloadIcon: Di,
        DragIcon: zi,
        EditIcon: Hi,
        EllipsisIcon: Ni,
        EmailIcon: Ui,
        ExpandAltIcon: Gi,
        ExpandIcon: Fi,
        EyeCloseIcon: qi,
        EyeIcon: Wi,
        FaceHappyIcon: Yi,
        FaceNeutralIcon: ji,
        FaceSadIcon: Ki,
        FacebookIcon: Zi,
        FailedIcon: $i,
        FastForwardIcon: Ji,
        FigmaIcon: Qi,
        FilterIcon: Xi,
        FlagIcon: ea,
        FolderIcon: ta,
        FormIcon: oa,
        GDriveIcon: na,
        GithubIcon: ra,
        GitlabIcon: ia,
        GlobeIcon: aa,
        GoogleIcon: ca,
        GraphBarIcon: la,
        GraphLineIcon: sa,
        GraphqlIcon: ua,
        GridAltIcon: Ia,
        GridIcon: pa,
        GrowIcon: j,
        HeartHollowIcon: da,
        HeartIcon: ma,
        HomeIcon: ha,
        HourglassIcon: fa,
        InfoIcon: ga,
        ItalicIcon: wa,
        JumpToIcon: ba,
        KeyIcon: ya,
        LightningIcon: Sa,
        LightningOffIcon: va,
        LinkBrokenIcon: Ca,
        LinkIcon: Ea,
        LinkedinIcon: Ta,
        LinuxIcon: ka,
        ListOrderedIcon: Ra,
        ListUnorderedIcon: xa,
        LocationIcon: Aa,
        LockIcon: _a,
        MarkdownIcon: Oa,
        MarkupIcon: La,
        MediumIcon: Ba,
        MemoryIcon: Pa,
        MenuIcon: Ma,
        MergeIcon: Va,
        MirrorIcon: Da,
        MobileIcon: re,
        MoonIcon: za,
        NutIcon: Ha,
        OutboxIcon: Na,
        OutlineIcon: Ua,
        PaintBrushIcon: Ga,
        PaperClipIcon: Fa,
        ParagraphIcon: qa,
        PassedIcon: Wa,
        PhoneIcon: Ya,
        PhotoDragIcon: ja,
        PhotoIcon: Ka,
        PhotoStabilizeIcon: Za,
        PinAltIcon: $a,
        PinIcon: Ja,
        PlayAllHollowIcon: Qa,
        PlayBackIcon: Xa,
        PlayHollowIcon: ec,
        PlayIcon: tc,
        PlayNextIcon: oc,
        PlusIcon: nc,
        PointerDefaultIcon: rc,
        PointerHandIcon: ic,
        PowerIcon: ac,
        PrintIcon: cc,
        ProceedIcon: lc,
        ProfileIcon: sc,
        PullRequestIcon: uc,
        QuestionIcon: Ic,
        RSSIcon: pc,
        RedirectIcon: dc,
        ReduxIcon: mc,
        RefreshIcon: ie,
        ReplyIcon: hc,
        RepoIcon: fc,
        RequestChangeIcon: gc,
        RewindIcon: wc,
        RulerIcon: bc,
        SaveIcon: yc,
        SearchIcon: Sc,
        ShareAltIcon: vc,
        ShareIcon: Cc,
        ShieldIcon: Ec,
        SideBySideIcon: Tc,
        SidebarAltIcon: kc,
        SidebarAltToggleIcon: Rc,
        SidebarIcon: xc,
        SidebarToggleIcon: Ac,
        SpeakerIcon: _c,
        StackedIcon: Oc,
        StarHollowIcon: Lc,
        StarIcon: Bc,
        StatusFailIcon: Pc,
        StatusIcon: Mc,
        StatusPassIcon: Vc,
        StatusWarnIcon: Dc,
        StickerIcon: zc,
        StopAltHollowIcon: Hc,
        StopAltIcon: Nc,
        StopIcon: Uc,
        StorybookIcon: Gc,
        StructureIcon: Fc,
        SubtractIcon: qc,
        SunIcon: Wc,
        SupportIcon: Yc,
        SwitchAltIcon: jc,
        SyncIcon: Kc,
        TabletIcon: ae,
        ThumbsUpIcon: Zc,
        TimeIcon: $c,
        TimerIcon: Jc,
        TransferIcon: K,
        TrashIcon: Qc,
        TwitterIcon: Xc,
        TypeIcon: el,
        UbuntuIcon: tl,
        UndoIcon: ol,
        UnfoldIcon: nl,
        UnlockIcon: rl,
        UnpinIcon: il,
        UploadIcon: al,
        UserAddIcon: cl,
        UserAltIcon: ll,
        UserIcon: sl,
        UsersIcon: ul,
        VSCodeIcon: Il,
        VerifiedIcon: pl,
        VideoIcon: dl,
        WandIcon: ml,
        WatchIcon: hl,
        WindowsIcon: fl,
        WrenchIcon: gl,
        XIcon: wl,
        YoutubeIcon: bl,
        ZoomIcon: yl,
        ZoomOutIcon: Sl,
        ZoomResetIcon: vl,
        iconList: Cl,
      } = __STORYBOOK_ICONS__;
    var $ = Se(le()),
      B = 'storybook/viewport',
      A = 'viewport',
      Ie = {
        mobile1: {
          name: 'Small mobile',
          styles: { height: '568px', width: '320px' },
          type: 'mobile',
        },
        mobile2: {
          name: 'Large mobile',
          styles: { height: '896px', width: '414px' },
          type: 'mobile',
        },
        tablet: { name: 'Tablet', styles: { height: '1112px', width: '834px' }, type: 'tablet' },
      },
      P = { name: 'Reset viewport', styles: { height: '100%', width: '100%' }, type: 'desktop' },
      Ce = { [A]: { value: void 0, isRotated: !1 } },
      Ee = { viewport: 'reset', viewportRotated: !1 },
      Te = globalThis.FEATURES?.viewportStoryGlobals ? Ce : Ee,
      pe = (e, t) => e.indexOf(t),
      ke = (e, t) => {
        let a = pe(e, t);
        return a === e.length - 1 ? e[0] : e[a + 1];
      },
      Re = (e, t) => {
        let a = pe(e, t);
        return a < 1 ? e[e.length - 1] : e[a - 1];
      },
      de = async (e, t, a, s) => {
        await e.setAddonShortcut(B, {
          label: 'Previous viewport',
          defaultShortcut: ['alt', 'shift', 'V'],
          actionName: 'previous',
          action: () => {
            a({ viewport: Re(s, t) });
          },
        }),
          await e.setAddonShortcut(B, {
            label: 'Next viewport',
            defaultShortcut: ['alt', 'V'],
            actionName: 'next',
            action: () => {
              a({ viewport: ke(s, t) });
            },
          }),
          await e.setAddonShortcut(B, {
            label: 'Reset viewport',
            defaultShortcut: ['alt', 'control', 'V'],
            actionName: 'reset',
            action: () => {
              a(Te);
            },
          });
      },
      xe = v.div({ display: 'inline-flex', alignItems: 'center' }),
      se = v.div(({ theme: e }) => ({
        display: 'inline-block',
        textDecoration: 'none',
        padding: 10,
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: '1',
        height: 40,
        border: 'none',
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        background: 'transparent',
      })),
      Ae = v(L)(() => ({ display: 'inline-flex', alignItems: 'center' })),
      _e = v.div(({ theme: e }) => ({ fontSize: e.typography.size.s2 - 1, marginLeft: 10 })),
      Oe = {
        desktop: l.createElement(ne, null),
        mobile: l.createElement(re, null),
        tablet: l.createElement(ae, null),
        other: l.createElement(V, null),
      },
      Le = ({ api: e }) => {
        let t = F(A),
          [a, s, c] = G(),
          [b, p] = N(!1),
          { options: o = Ie, disable: i } = t || {},
          m = a?.[A] || {},
          n = m.value,
          d = m.isRotated,
          r = o[n] || P,
          u = b || r !== P,
          I = A in c,
          h = Object.keys(o).length;
        if (
          (O(() => {
            de(e, n, s, Object.keys(o));
          }, [o, n, s, e]),
          r.styles === null || !o || h < 1)
        )
          return null;
        if (typeof r.styles == 'function')
          return (
            console.warn(
              'Addon Viewport no longer supports dynamic styles using a function, use css calc() instead',
            ),
            null
          );
        let y = d ? r.styles.height : r.styles.width,
          R = d ? r.styles.width : r.styles.height;
        return i
          ? null
          : l.createElement(Be, {
              item: r,
              updateGlobals: s,
              viewportMap: o,
              viewportName: n,
              isRotated: d,
              setIsTooltipVisible: p,
              isLocked: I,
              isActive: u,
              width: y,
              height: R,
            });
      },
      Be = l.memo(function (e) {
        let {
            item: t,
            viewportMap: a,
            viewportName: s,
            isRotated: c,
            updateGlobals: b,
            setIsTooltipVisible: p,
            isLocked: o,
            isActive: i,
            width: m,
            height: n,
          } = e,
          d = X((r) => b({ [A]: r }), [b]);
        return l.createElement(
          V,
          null,
          l.createElement(
            W,
            {
              placement: 'bottom',
              tooltip: ({ onHide: r }) =>
                l.createElement(q, {
                  links: [
                    ...(length > 0 && t !== P
                      ? [
                          {
                            id: 'reset',
                            title: 'Reset viewport',
                            icon: l.createElement(ie, null),
                            onClick: () => {
                              d({ value: void 0, isRotated: !1 }), r();
                            },
                          },
                        ]
                      : []),
                    ...Object.entries(a).map(([u, I]) => ({
                      id: u,
                      title: I.name,
                      icon: Oe[I.type],
                      active: u === s,
                      onClick: () => {
                        d({ value: u, isRotated: !1 }), r();
                      },
                    })),
                  ].flat(),
                }),
              closeOnOutsideClick: !0,
              onVisibleChange: p,
            },
            l.createElement(
              Ae,
              {
                disabled: o,
                key: 'viewport',
                title: 'Change the size of the preview',
                active: i,
                onDoubleClick: () => {
                  d({ value: void 0, isRotated: !1 });
                },
              },
              l.createElement(j, null),
              t !== P ? l.createElement(_e, null, t.name, ' ', c ? '(L)' : '(P)') : null,
            ),
          ),
          l.createElement(Y, {
            styles: { 'iframe[data-is-storybook="true"]': { width: m, height: n } },
          }),
          t !== P
            ? l.createElement(
                xe,
                null,
                l.createElement(se, { title: 'Viewport width' }, m.replace('px', '')),
                o
                  ? '/'
                  : l.createElement(
                      L,
                      {
                        key: 'viewport-rotate',
                        title: 'Rotate viewport',
                        onClick: () => {
                          d({ value: s, isRotated: !c });
                        },
                      },
                      l.createElement(K, null),
                    ),
                l.createElement(se, { title: 'Viewport height' }, n.replace('px', '')),
              )
            : null,
        );
      }),
      Pe = (0, $.default)(50)((e) => [
        ...Me,
        ...Object.entries(e).map(([t, { name: a, ...s }]) => ({ ...s, id: t, title: a })),
      ]),
      D = { id: 'reset', title: 'Reset viewport', styles: null, type: 'other' },
      Me = [D],
      Ve = (0, $.default)(50)((e, t, a, s) =>
        e
          .filter((c) => c.id !== D.id || t.id !== c.id)
          .map((c) => ({
            ...c,
            onClick: () => {
              a({ viewport: c.id }), s();
            },
          })),
      ),
      De = ({ width: e, height: t, ...a }) => ({ ...a, height: e, width: t }),
      ze = v.div({ display: 'inline-flex', alignItems: 'center' }),
      ue = v.div(({ theme: e }) => ({
        display: 'inline-block',
        textDecoration: 'none',
        padding: 10,
        fontWeight: e.typography.weight.bold,
        fontSize: e.typography.size.s2 - 1,
        lineHeight: '1',
        height: 40,
        border: 'none',
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        background: 'transparent',
      })),
      He = v(L)(() => ({ display: 'inline-flex', alignItems: 'center' })),
      Ne = v.div(({ theme: e }) => ({ fontSize: e.typography.size.s2 - 1, marginLeft: 10 })),
      Ue = (e, t, a) => {
        if (t === null) return;
        let s = typeof t == 'function' ? t(e) : t;
        return a ? De(s) : s;
      },
      Ge = Q(function () {
        let [e, t] = G(),
          { viewports: a = Ie, defaultOrientation: s, defaultViewport: c, disable: b } = F(A, {}),
          p = Pe(a),
          o = oe(),
          [i, m] = N(!1);
        c &&
          !p.find((u) => u.id === c) &&
          console.warn(
            `Cannot find "defaultViewport" of "${c}" in addon-viewport configs, please check the "viewports" setting in the configuration.`,
          ),
          O(() => {
            de(o, e, t, Object.keys(a));
          }, [a, e, e.viewport, t, o]),
          O(() => {
            let u = s === 'landscape';
            ((c && e.viewport !== c) || (s && e.viewportRotated !== u)) &&
              t({ viewport: c, viewportRotated: u });
          }, [s, c, t]);
        let n =
            p.find((u) => u.id === e.viewport) ||
            p.find((u) => u.id === c) ||
            p.find((u) => u.default) ||
            D,
          d = ee(),
          r = Ue(d.current, n.styles, e.viewportRotated);
        return (
          O(() => {
            d.current = r;
          }, [n]),
          b || Object.entries(a).length === 0
            ? null
            : l.createElement(
                V,
                null,
                l.createElement(
                  W,
                  {
                    placement: 'top',
                    tooltip: ({ onHide: u }) => l.createElement(q, { links: Ve(p, n, t, u) }),
                    closeOnOutsideClick: !0,
                    onVisibleChange: m,
                  },
                  l.createElement(
                    He,
                    {
                      key: 'viewport',
                      title: 'Change the size of the preview',
                      active: i || !!r,
                      onDoubleClick: () => {
                        t({ viewport: D.id });
                      },
                    },
                    l.createElement(j, null),
                    r
                      ? l.createElement(
                          Ne,
                          null,
                          e.viewportRotated ? `${n.title} (L)` : `${n.title} (P)`,
                        )
                      : null,
                  ),
                ),
                r
                  ? l.createElement(
                      ze,
                      null,
                      l.createElement(Y, {
                        styles: {
                          'iframe[data-is-storybook="true"]': {
                            ...(r || { width: '100%', height: '100%' }),
                          },
                        },
                      }),
                      l.createElement(ue, { title: 'Viewport width' }, r.width.replace('px', '')),
                      l.createElement(
                        L,
                        {
                          key: 'viewport-rotate',
                          title: 'Rotate viewport',
                          onClick: () => {
                            t({ viewportRotated: !e.viewportRotated });
                          },
                        },
                        l.createElement(K, null),
                      ),
                      l.createElement(ue, { title: 'Viewport height' }, r.height.replace('px', '')),
                    )
                  : null,
              )
        );
      });
    U.register(B, (e) => {
      U.add(B, {
        title: 'viewport / media-queries',
        type: te.TOOL,
        match: ({ viewMode: t, tabId: a }) => t === 'story' && !a,
        render: () => (FEATURES?.viewportStoryGlobals ? H(Le, { api: e }) : H(Ge, null)),
      });
    });
  })();
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e);
}
