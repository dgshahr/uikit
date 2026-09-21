try {
  (() => {
    var O = __STORYBOOK_API__,
      {
        ActiveTabs: P,
        Consumer: T,
        ManagerContext: h,
        Provider: g,
        RequestResponseError: f,
        addons: i,
        combineParameters: U,
        controlOrMetaKey: v,
        controlOrMetaSymbol: A,
        eventMatchesShortcut: x,
        eventToShortcut: j,
        experimental_MockUniversalStore: M,
        experimental_UniversalStore: R,
        experimental_requestResponse: C,
        experimental_useUniversalStore: w,
        isMacLike: B,
        isShortcutTaken: E,
        keyToSymbol: I,
        merge: K,
        mockChannel: N,
        optionOrAltSymbol: G,
        shortcutMatchesShortcut: L,
        shortcutToHumanString: Y,
        types: q,
        useAddonState: D,
        useArgTypes: F,
        useArgs: H,
        useChannel: V,
        useGlobalTypes: z,
        useGlobals: J,
        useParameter: Q,
        useSharedState: W,
        useStoryPrepared: X,
        useStorybookApi: Z,
        useStorybookState: $,
      } = __STORYBOOK_API__;
    var d = (() => {
        let e;
        return (
          typeof window < 'u'
            ? (e = window)
            : typeof globalThis < 'u'
              ? (e = globalThis)
              : typeof window < 'u'
                ? (e = window)
                : typeof self < 'u'
                  ? (e = self)
                  : (e = {}),
          e
        );
      })(),
      m = 'tag-filters',
      p = 'static-filter';
    i.register(m, (e) => {
      let u = Object.entries(d.TAGS_OPTIONS ?? {}).reduce((o, t) => {
        let [r, a] = t;
        return (a.excludeFromSidebar && (o[r] = !0), o);
      }, {});
      e.experimental_setFilter(p, (o) => {
        let t = o.tags ?? [];
        return (t.includes('dev') || o.type === 'docs') && t.filter((r) => u[r]).length === 0;
      });
    });
  })();
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e);
}
