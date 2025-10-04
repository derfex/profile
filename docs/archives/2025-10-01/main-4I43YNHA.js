import {
  $ as Jt,
  A as he,
  Aa as pe,
  B as st,
  Ba as fe,
  C as Q,
  Ca as En,
  D as Qt,
  Da as bn,
  E as nn,
  Ea as In,
  F as on,
  Fa as ar,
  G as sn,
  Ga as cr,
  H as O,
  Ha as Tn,
  I as Kt,
  Ia as An,
  J as T,
  Ja as Mn,
  K as C,
  L as y,
  M as at,
  N as an,
  O as I,
  P as g,
  Pa as ht,
  Q as h,
  R as cn,
  S as un,
  T as ne,
  U as k,
  W as ln,
  X as ct,
  Y as N,
  Z as dn,
  _ as Xt,
  a as l,
  aa as hn,
  b as L,
  ba as er,
  c as Qr,
  ca as pn,
  cb as Dn,
  d as Kr,
  da as tr,
  db as On,
  e as Xr,
  ea as rr,
  eb as ie,
  f as Jr,
  fa as fn,
  g as Gt,
  ga as nr,
  gb as _n,
  h as Wt,
  ha as gn,
  hb as ur,
  i as Y,
  ia as _e,
  ib as Nn,
  j as x,
  ja as ir,
  jb as Pn,
  k as V,
  ka as mn,
  kb as Pe,
  l as M,
  la as or,
  lb as Un,
  m as d,
  mb as Ln,
  n as Oe,
  nb as xn,
  o as en,
  oa as Ne,
  ob as lr,
  p as tn,
  pa as vn,
  pb as kn,
  q as R,
  qa as yn,
  qb as ge,
  r as it,
  ra as Sn,
  rb as jn,
  s as D,
  sa as Rn,
  t as Zt,
  ta as Cn,
  u as rn,
  ua as ut,
  ub as $n,
  v as ot,
  va as lt,
  vb as zn,
  w as q,
  wa as dt,
  wb as Hn,
  x as te,
  xa as sr,
  xb as Bn,
  y as re,
  z as Yt,
  za as wn,
} from './chunk-TY3EVZ7L.js';
var ft = new I(''),
  gr = (() => {
    class t {
      _zone;
      _plugins;
      _eventNameToPlugin = new Map();
      constructor(e, r) {
        ((this._zone = r),
          e.forEach((i) => {
            i.manager = this;
          }),
          (this._plugins = e.slice().reverse()));
      }
      addEventListener(e, r, i, o) {
        return this._findPluginFor(r).addEventListener(e, r, i, o);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(e) {
        let r = this._eventNameToPlugin.get(e);
        if (r) return r;
        if (((r = this._plugins.find((o) => o.supports(e))), !r)) throw new C(5101, !1);
        return (this._eventNameToPlugin.set(e, r), r);
      }
      static ɵfac = function (r) {
        return new (r || t)(g(ft), g(fe));
      };
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Ue = class {
    _doc;
    constructor(n) {
      this._doc = n;
    }
    manager;
  },
  dr = 'ng-app-id';
function Fn(t) {
  for (let n of t) n.remove();
}
function Vn(t, n) {
  let e = n.createElement('style');
  return ((e.textContent = t), e);
}
function to(t, n, e, r) {
  let i = t.head?.querySelectorAll(`style[${dr}="${n}"],link[${dr}="${n}"]`);
  if (i)
    for (let o of i)
      (o.removeAttribute(dr),
        o instanceof HTMLLinkElement
          ? r.set(o.href.slice(o.href.lastIndexOf('/') + 1), { usage: 0, elements: [o] })
          : o.textContent && e.set(o.textContent, { usage: 0, elements: [o] }));
}
function pr(t, n) {
  let e = n.createElement('link');
  return (e.setAttribute('rel', 'stylesheet'), e.setAttribute('href', t), e);
}
var mr = (() => {
    class t {
      doc;
      appId;
      nonce;
      inline = new Map();
      external = new Map();
      hosts = new Set();
      constructor(e, r, i, o = {}) {
        ((this.doc = e),
          (this.appId = r),
          (this.nonce = i),
          to(e, r, this.inline, this.external),
          this.hosts.add(e.head));
      }
      addStyles(e, r) {
        for (let i of e) this.addUsage(i, this.inline, Vn);
        r?.forEach((i) => this.addUsage(i, this.external, pr));
      }
      removeStyles(e, r) {
        for (let i of e) this.removeUsage(i, this.inline);
        r?.forEach((i) => this.removeUsage(i, this.external));
      }
      addUsage(e, r, i) {
        let o = r.get(e);
        o
          ? o.usage++
          : r.set(e, { usage: 1, elements: [...this.hosts].map((s) => this.addElement(s, i(e, this.doc))) });
      }
      removeUsage(e, r) {
        let i = r.get(e);
        i && (i.usage--, i.usage <= 0 && (Fn(i.elements), r.delete(e)));
      }
      ngOnDestroy() {
        for (let [, { elements: e }] of [...this.inline, ...this.external]) Fn(e);
        this.hosts.clear();
      }
      addHost(e) {
        this.hosts.add(e);
        for (let [r, { elements: i }] of this.inline) i.push(this.addElement(e, Vn(r, this.doc)));
        for (let [r, { elements: i }] of this.external) i.push(this.addElement(e, pr(r, this.doc)));
      }
      removeHost(e) {
        this.hosts.delete(e);
      }
      addElement(e, r) {
        return (this.nonce && r.setAttribute('nonce', this.nonce), e.appendChild(r));
      }
      static ɵfac = function (r) {
        return new (r || t)(g(N), g(nr), g(ir, 8), g(_e));
      };
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  hr = {
    svg: 'http://www.w3.org/2000/svg',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xmlns: 'http://www.w3.org/2000/xmlns/',
    math: 'http://www.w3.org/1998/Math/MathML',
  },
  vr = /%COMP%/g;
var Gn = '%COMP%',
  ro = `_nghost-${Gn}`,
  no = `_ngcontent-${Gn}`,
  io = !0,
  oo = new I('', { providedIn: 'root', factory: () => io });
function so(t) {
  return no.replace(vr, t);
}
function ao(t) {
  return ro.replace(vr, t);
}
function Wn(t, n) {
  return n.map((e) => e.replace(vr, t));
}
var yr = (() => {
    class t {
      eventManager;
      sharedStylesHost;
      appId;
      removeStylesOnCompDestroy;
      doc;
      platformId;
      ngZone;
      nonce;
      animationDisabled;
      maxAnimationTimeout;
      tracingService;
      rendererByCompId = new Map();
      defaultRenderer;
      platformIsServer;
      registry;
      constructor(e, r, i, o, s, a, c, u = null, p, v, S = null) {
        ((this.eventManager = e),
          (this.sharedStylesHost = r),
          (this.appId = i),
          (this.removeStylesOnCompDestroy = o),
          (this.doc = s),
          (this.platformId = a),
          (this.ngZone = c),
          (this.nonce = u),
          (this.animationDisabled = p),
          (this.maxAnimationTimeout = v),
          (this.tracingService = S),
          (this.platformIsServer = !1),
          (this.defaultRenderer = new Le(
            e,
            s,
            c,
            this.platformIsServer,
            this.tracingService,
            (this.registry = ln()),
            this.maxAnimationTimeout,
          )));
      }
      createRenderer(e, r) {
        if (!e || !r) return this.defaultRenderer;
        let i = this.getOrCreateRenderer(e, r);
        return (i instanceof pt ? i.applyToHost(e) : i instanceof xe && i.applyStyles(), i);
      }
      getOrCreateRenderer(e, r) {
        let i = this.rendererByCompId,
          o = i.get(r.id);
        if (!o) {
          let s = this.doc,
            a = this.ngZone,
            c = this.eventManager,
            u = this.sharedStylesHost,
            p = this.removeStylesOnCompDestroy,
            v = this.platformIsServer,
            S = this.tracingService;
          switch (r.encapsulation) {
            case or.Emulated:
              o = new pt(
                c,
                u,
                r,
                this.appId,
                p,
                s,
                a,
                v,
                S,
                this.registry,
                this.animationDisabled,
                this.maxAnimationTimeout,
              );
              break;
            case or.ShadowDom:
              return new fr(c, u, e, r, s, a, this.nonce, v, S, this.registry, this.maxAnimationTimeout);
            default:
              o = new xe(c, u, r, p, s, a, v, S, this.registry, this.animationDisabled, this.maxAnimationTimeout);
              break;
          }
          i.set(r.id, o);
        }
        return o;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
      componentReplaced(e) {
        this.rendererByCompId.delete(e);
      }
      static ɵfac = function (r) {
        return new (r || t)(g(gr), g(mr), g(nr), g(oo), g(N), g(_e), g(fe), g(ir), g(An), g(Mn), g(wn, 8));
      };
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Le = class {
    eventManager;
    doc;
    ngZone;
    platformIsServer;
    tracingService;
    registry;
    maxAnimationTimeout;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(n, e, r, i, o, s, a) {
      ((this.eventManager = n),
        (this.doc = e),
        (this.ngZone = r),
        (this.platformIsServer = i),
        (this.tracingService = o),
        (this.registry = s),
        (this.maxAnimationTimeout = a));
    }
    destroy() {}
    destroyNode = null;
    createElement(n, e) {
      return e ? this.doc.createElementNS(hr[e] || e, n) : this.doc.createElement(n);
    }
    createComment(n) {
      return this.doc.createComment(n);
    }
    createText(n) {
      return this.doc.createTextNode(n);
    }
    appendChild(n, e) {
      (qn(n) ? n.content : n).appendChild(e);
    }
    insertBefore(n, e, r) {
      n && (qn(n) ? n.content : n).insertBefore(e, r);
    }
    removeChild(n, e) {
      let { elements: r } = this.registry;
      if (r) {
        r.animate(e, () => e.remove(), this.maxAnimationTimeout);
        return;
      }
      e.remove();
    }
    selectRootElement(n, e) {
      let r = typeof n == 'string' ? this.doc.querySelector(n) : n;
      if (!r) throw new C(-5104, !1);
      return (e || (r.textContent = ''), r);
    }
    parentNode(n) {
      return n.parentNode;
    }
    nextSibling(n) {
      return n.nextSibling;
    }
    setAttribute(n, e, r, i) {
      if (i) {
        e = i + ':' + e;
        let o = hr[i];
        o ? n.setAttributeNS(o, e, r) : n.setAttribute(e, r);
      } else n.setAttribute(e, r);
    }
    removeAttribute(n, e, r) {
      if (r) {
        let i = hr[r];
        i ? n.removeAttributeNS(i, e) : n.removeAttribute(`${r}:${e}`);
      } else n.removeAttribute(e);
    }
    addClass(n, e) {
      n.classList.add(e);
    }
    removeClass(n, e) {
      n.classList.remove(e);
    }
    setStyle(n, e, r, i) {
      i & (Ne.DashCase | Ne.Important)
        ? n.style.setProperty(e, r, i & Ne.Important ? 'important' : '')
        : (n.style[e] = r);
    }
    removeStyle(n, e, r) {
      r & Ne.DashCase ? n.style.removeProperty(e) : (n.style[e] = '');
    }
    setProperty(n, e, r) {
      n != null && (n[e] = r);
    }
    setValue(n, e) {
      n.nodeValue = e;
    }
    listen(n, e, r, i) {
      if (typeof n == 'string' && ((n = Pe().getGlobalEventTarget(this.doc, n)), !n)) throw new C(5102, !1);
      let o = this.decoratePreventDefault(r);
      return (
        this.tracingService?.wrapEventListener && (o = this.tracingService.wrapEventListener(n, e, o)),
        this.eventManager.addEventListener(n, e, o, i)
      );
    }
    decoratePreventDefault(n) {
      return (e) => {
        if (e === '__ngUnwrap__') return n;
        n(e) === !1 && e.preventDefault();
      };
    }
  };
function qn(t) {
  return t.tagName === 'TEMPLATE' && t.content !== void 0;
}
var fr = class extends Le {
    sharedStylesHost;
    hostEl;
    shadowRoot;
    constructor(n, e, r, i, o, s, a, c, u, p, v) {
      (super(n, o, s, c, u, p, v),
        (this.sharedStylesHost = e),
        (this.hostEl = r),
        (this.shadowRoot = r.attachShadow({ mode: 'open' })),
        this.sharedStylesHost.addHost(this.shadowRoot));
      let S = i.styles;
      S = Wn(i.id, S);
      for (let w of S) {
        let _ = document.createElement('style');
        (a && _.setAttribute('nonce', a), (_.textContent = w), this.shadowRoot.appendChild(_));
      }
      let b = i.getExternalStyles?.();
      if (b)
        for (let w of b) {
          let _ = pr(w, o);
          (a && _.setAttribute('nonce', a), this.shadowRoot.appendChild(_));
        }
    }
    nodeOrShadowRoot(n) {
      return n === this.hostEl ? this.shadowRoot : n;
    }
    appendChild(n, e) {
      return super.appendChild(this.nodeOrShadowRoot(n), e);
    }
    insertBefore(n, e, r) {
      return super.insertBefore(this.nodeOrShadowRoot(n), e, r);
    }
    removeChild(n, e) {
      return super.removeChild(null, e);
    }
    parentNode(n) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  xe = class extends Le {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    _animationDisabled;
    constructor(n, e, r, i, o, s, a, c, u, p, v, S) {
      (super(n, o, s, a, c, u, v),
        (this.sharedStylesHost = e),
        (this.removeStylesOnCompDestroy = i),
        (this._animationDisabled = p));
      let b = r.styles;
      ((this.styles = S ? Wn(S, b) : b), (this.styleUrls = r.getExternalStyles?.(S)));
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
    }
    destroy() {
      if (this.removeStylesOnCompDestroy) {
        if (!this._animationDisabled && this.registry.elements) {
          this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
            }, this.maxAnimationTimeout);
          });
          return;
        }
        this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
      }
    }
  },
  pt = class extends xe {
    contentAttr;
    hostAttr;
    constructor(n, e, r, i, o, s, a, c, u, p, v, S) {
      let b = i + '-' + r.id;
      (super(n, e, r, o, s, a, c, u, p, v, S, b), (this.contentAttr = so(b)), (this.hostAttr = ao(b)));
    }
    applyToHost(n) {
      (this.applyStyles(), this.setAttribute(n, this.hostAttr, ''));
    }
    createElement(n, e) {
      let r = super.createElement(n, e);
      return (super.setAttribute(r, this.contentAttr, ''), r);
    }
  };
var gt = class t extends Ln {
    supportsDOMEvents = !0;
    static makeCurrent() {
      Un(new t());
    }
    onAndCancel(n, e, r, i) {
      return (
        n.addEventListener(e, r, i),
        () => {
          n.removeEventListener(e, r, i);
        }
      );
    }
    dispatchEvent(n, e) {
      n.dispatchEvent(e);
    }
    remove(n) {
      n.remove();
    }
    createElement(n, e) {
      return ((e = e || this.getDefaultDocument()), e.createElement(n));
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument('fakeTitle');
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(n) {
      return n.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(n) {
      return n instanceof DocumentFragment;
    }
    getGlobalEventTarget(n, e) {
      return e === 'window' ? window : e === 'document' ? n : e === 'body' ? n.body : null;
    }
    getBaseHref(n) {
      let e = co();
      return e == null ? null : uo(e);
    }
    resetBaseElement() {
      je = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(n) {
      return $n(document.cookie, n);
    }
  },
  je = null;
function co() {
  return ((je = je || document.head.querySelector('base')), je ? je.getAttribute('href') : null);
}
function uo(t) {
  return new URL(t, document.baseURI).pathname;
}
var lo = (() => {
    class t {
      build() {
        return new XMLHttpRequest();
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Yn = (() => {
    class t extends Ue {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return !0;
      }
      addEventListener(e, r, i, o) {
        return (e.addEventListener(r, i, o), () => this.removeEventListener(e, r, i, o));
      }
      removeEventListener(e, r, i, o) {
        return e.removeEventListener(r, i, o);
      }
      static ɵfac = function (r) {
        return new (r || t)(g(N));
      };
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Zn = ['alt', 'control', 'meta', 'shift'],
  ho = {
    '\b': 'Backspace',
    '	': 'Tab',
    '\x7F': 'Delete',
    '\x1B': 'Escape',
    Del: 'Delete',
    Esc: 'Escape',
    Left: 'ArrowLeft',
    Right: 'ArrowRight',
    Up: 'ArrowUp',
    Down: 'ArrowDown',
    Menu: 'ContextMenu',
    Scroll: 'ScrollLock',
    Win: 'OS',
  },
  po = { alt: (t) => t.altKey, control: (t) => t.ctrlKey, meta: (t) => t.metaKey, shift: (t) => t.shiftKey },
  Qn = (() => {
    class t extends Ue {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return t.parseEventName(e) != null;
      }
      addEventListener(e, r, i, o) {
        let s = t.parseEventName(r),
          a = t.eventCallback(s.fullKey, i, this.manager.getZone());
        return this.manager.getZone().runOutsideAngular(() => Pe().onAndCancel(e, s.domEventName, a, o));
      }
      static parseEventName(e) {
        let r = e.toLowerCase().split('.'),
          i = r.shift();
        if (r.length === 0 || !(i === 'keydown' || i === 'keyup')) return null;
        let o = t._normalizeKey(r.pop()),
          s = '',
          a = r.indexOf('code');
        if (
          (a > -1 && (r.splice(a, 1), (s = 'code.')),
          Zn.forEach((u) => {
            let p = r.indexOf(u);
            p > -1 && (r.splice(p, 1), (s += u + '.'));
          }),
          (s += o),
          r.length != 0 || o.length === 0)
        )
          return null;
        let c = {};
        return ((c.domEventName = i), (c.fullKey = s), c);
      }
      static matchEventFullKeyCode(e, r) {
        let i = ho[e.key] || e.key,
          o = '';
        return (
          r.indexOf('code.') > -1 && ((i = e.code), (o = 'code.')),
          i == null || !i
            ? !1
            : ((i = i.toLowerCase()),
              i === ' ' ? (i = 'space') : i === '.' && (i = 'dot'),
              Zn.forEach((s) => {
                if (s !== i) {
                  let a = po[s];
                  a(e) && (o += s + '.');
                }
              }),
              (o += i),
              o === r)
        );
      }
      static eventCallback(e, r, i) {
        return (o) => {
          t.matchEventFullKeyCode(o, e) && i.runGuarded(() => r(o));
        };
      }
      static _normalizeKey(e) {
        return e === 'esc' ? 'escape' : e;
      }
      static ɵfac = function (r) {
        return new (r || t)(g(N));
      };
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function Sr(t, n) {
  let e = l({ rootComponent: t }, fo(n));
  return Nn(e);
}
function fo(t) {
  return { appProviders: [...So, ...(t?.providers ?? [])], platformProviders: yo };
}
function go() {
  gt.makeCurrent();
}
function mo() {
  return new Xt();
}
function vo() {
  return (fn(document), document);
}
var yo = [
  { provide: _e, useValue: Hn },
  { provide: gn, useValue: go, multi: !0 },
  { provide: N, useFactory: vo },
];
var So = [
  { provide: un, useValue: 'root' },
  { provide: Xt, useFactory: mo },
  { provide: ft, useClass: Yn, multi: !0, deps: [N] },
  { provide: ft, useClass: Qn, multi: !0, deps: [N] },
  yr,
  mr,
  gr,
  { provide: vn, useExisting: yr },
  { provide: zn, useClass: lo },
  [],
];
var Kn = (() => {
  class t {
    _doc;
    constructor(e) {
      this._doc = e;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(e) {
      this._doc.title = e || '';
    }
    static ɵfac = function (r) {
      return new (r || t)(g(N));
    };
    static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
  }
  return t;
})();
var f = 'primary',
  Ke = Symbol('RouteTitle'),
  br = class {
    params;
    constructor(n) {
      this.params = n || {};
    }
    has(n) {
      return Object.prototype.hasOwnProperty.call(this.params, n);
    }
    get(n) {
      if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e[0] : e;
      }
      return null;
    }
    getAll(n) {
      if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e : [e];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function ae(t) {
  return new br(t);
}
function oi(t, n, e) {
  let r = e.path.split('/');
  if (r.length > t.length || (e.pathMatch === 'full' && (n.hasChildren() || r.length < t.length))) return null;
  let i = {};
  for (let o = 0; o < r.length; o++) {
    let s = r[o],
      a = t[o];
    if (s[0] === ':') i[s.substring(1)] = a;
    else if (s !== a.path) return null;
  }
  return { consumed: t.slice(0, r.length), posParams: i };
}
function Co(t, n) {
  if (t.length !== n.length) return !1;
  for (let e = 0; e < t.length; ++e) if (!z(t[e], n[e])) return !1;
  return !0;
}
function z(t, n) {
  let e = t ? Ir(t) : void 0,
    r = n ? Ir(n) : void 0;
  if (!e || !r || e.length != r.length) return !1;
  let i;
  for (let o = 0; o < e.length; o++) if (((i = e[o]), !si(t[i], n[i]))) return !1;
  return !0;
}
function Ir(t) {
  return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)];
}
function si(t, n) {
  if (Array.isArray(t) && Array.isArray(n)) {
    if (t.length !== n.length) return !1;
    let e = [...t].sort(),
      r = [...n].sort();
    return e.every((i, o) => r[o] === i);
  } else return t === n;
}
function ai(t) {
  return t.length > 0 ? t[t.length - 1] : null;
}
function W(t) {
  return en(t) ? t : In(t) ? M(Promise.resolve(t)) : d(t);
}
var wo = { exact: ui, subset: li },
  ci = { exact: Eo, subset: bo, ignored: () => !0 };
function Xn(t, n, e) {
  return (
    wo[e.paths](t.root, n.root, e.matrixParams) &&
    ci[e.queryParams](t.queryParams, n.queryParams) &&
    !(e.fragment === 'exact' && t.fragment !== n.fragment)
  );
}
function Eo(t, n) {
  return z(t, n);
}
function ui(t, n, e) {
  if (!oe(t.segments, n.segments) || !yt(t.segments, n.segments, e) || t.numberOfChildren !== n.numberOfChildren)
    return !1;
  for (let r in n.children) if (!t.children[r] || !ui(t.children[r], n.children[r], e)) return !1;
  return !0;
}
function bo(t, n) {
  return Object.keys(n).length <= Object.keys(t).length && Object.keys(n).every((e) => si(t[e], n[e]));
}
function li(t, n, e) {
  return di(t, n, n.segments, e);
}
function di(t, n, e, r) {
  if (t.segments.length > e.length) {
    let i = t.segments.slice(0, e.length);
    return !(!oe(i, e) || n.hasChildren() || !yt(i, e, r));
  } else if (t.segments.length === e.length) {
    if (!oe(t.segments, e) || !yt(t.segments, e, r)) return !1;
    for (let i in n.children) if (!t.children[i] || !li(t.children[i], n.children[i], r)) return !1;
    return !0;
  } else {
    let i = e.slice(0, t.segments.length),
      o = e.slice(t.segments.length);
    return !oe(t.segments, i) || !yt(t.segments, i, r) || !t.children[f] ? !1 : di(t.children[f], n, o, r);
  }
}
function yt(t, n, e) {
  return n.every((r, i) => ci[e](t[i].parameters, r.parameters));
}
var B = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(n = new m([], {}), e = {}, r = null) {
      ((this.root = n), (this.queryParams = e), (this.fragment = r));
    }
    get queryParamMap() {
      return ((this._queryParamMap ??= ae(this.queryParams)), this._queryParamMap);
    }
    toString() {
      return Ao.serialize(this);
    }
  },
  m = class {
    segments;
    children;
    parent = null;
    constructor(n, e) {
      ((this.segments = n), (this.children = e), Object.values(e).forEach((r) => (r.parent = this)));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return St(this);
    }
  },
  K = class {
    path;
    parameters;
    _parameterMap;
    constructor(n, e) {
      ((this.path = n), (this.parameters = e));
    }
    get parameterMap() {
      return ((this._parameterMap ??= ae(this.parameters)), this._parameterMap);
    }
    toString() {
      return pi(this);
    }
  };
function Io(t, n) {
  return oe(t, n) && t.every((e, r) => z(e.parameters, n[r].parameters));
}
function oe(t, n) {
  return t.length !== n.length ? !1 : t.every((e, r) => e.path === n[r].path);
}
function To(t, n) {
  let e = [];
  return (
    Object.entries(t.children).forEach(([r, i]) => {
      r === f && (e = e.concat(n(i, r)));
    }),
    Object.entries(t.children).forEach(([r, i]) => {
      r !== f && (e = e.concat(n(i, r)));
    }),
    e
  );
}
var ce = (() => {
    class t {
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: () => new X(), providedIn: 'root' });
    }
    return t;
  })(),
  X = class {
    parse(n) {
      let e = new Ar(n);
      return new B(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment());
    }
    serialize(n) {
      let e = `/${$e(n.root, !0)}`,
        r = Oo(n.queryParams),
        i = typeof n.fragment == 'string' ? `#${Mo(n.fragment)}` : '';
      return `${e}${r}${i}`;
    }
  },
  Ao = new X();
function St(t) {
  return t.segments.map((n) => pi(n)).join('/');
}
function $e(t, n) {
  if (!t.hasChildren()) return St(t);
  if (n) {
    let e = t.children[f] ? $e(t.children[f], !1) : '',
      r = [];
    return (
      Object.entries(t.children).forEach(([i, o]) => {
        i !== f && r.push(`${i}:${$e(o, !1)}`);
      }),
      r.length > 0 ? `${e}(${r.join('//')})` : e
    );
  } else {
    let e = To(t, (r, i) => (i === f ? [$e(t.children[f], !1)] : [`${i}:${$e(r, !1)}`]));
    return Object.keys(t.children).length === 1 && t.children[f] != null
      ? `${St(t)}/${e[0]}`
      : `${St(t)}/(${e.join('//')})`;
  }
}
function hi(t) {
  return encodeURIComponent(t).replace(/%40/g, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',');
}
function mt(t) {
  return hi(t).replace(/%3B/gi, ';');
}
function Mo(t) {
  return encodeURI(t);
}
function Tr(t) {
  return hi(t).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
}
function Rt(t) {
  return decodeURIComponent(t);
}
function Jn(t) {
  return Rt(t.replace(/\+/g, '%20'));
}
function pi(t) {
  return `${Tr(t.path)}${Do(t.parameters)}`;
}
function Do(t) {
  return Object.entries(t)
    .map(([n, e]) => `;${Tr(n)}=${Tr(e)}`)
    .join('');
}
function Oo(t) {
  let n = Object.entries(t)
    .map(([e, r]) => (Array.isArray(r) ? r.map((i) => `${mt(e)}=${mt(i)}`).join('&') : `${mt(e)}=${mt(r)}`))
    .filter((e) => e);
  return n.length ? `?${n.join('&')}` : '';
}
var _o = /^[^\/()?;#]+/;
function Rr(t) {
  let n = t.match(_o);
  return n ? n[0] : '';
}
var No = /^[^\/()?;=#]+/;
function Po(t) {
  let n = t.match(No);
  return n ? n[0] : '';
}
var Uo = /^[^=?&#]+/;
function Lo(t) {
  let n = t.match(Uo);
  return n ? n[0] : '';
}
var xo = /^[^&#]+/;
function ko(t) {
  let n = t.match(xo);
  return n ? n[0] : '';
}
var Ar = class {
  url;
  remaining;
  constructor(n) {
    ((this.url = n), (this.remaining = n));
  }
  parseRootSegment() {
    return (
      this.consumeOptional('/'),
      this.remaining === '' || this.peekStartsWith('?') || this.peekStartsWith('#')
        ? new m([], {})
        : new m([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let n = {};
    if (this.consumeOptional('?'))
      do this.parseQueryParam(n);
      while (this.consumeOptional('&'));
    return n;
  }
  parseFragment() {
    return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
  }
  parseChildren() {
    if (this.remaining === '') return {};
    this.consumeOptional('/');
    let n = [];
    for (
      this.peekStartsWith('(') || n.push(this.parseSegment());
      this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

    )
      (this.capture('/'), n.push(this.parseSegment()));
    let e = {};
    this.peekStartsWith('/(') && (this.capture('/'), (e = this.parseParens(!0)));
    let r = {};
    return (
      this.peekStartsWith('(') && (r = this.parseParens(!1)),
      (n.length > 0 || Object.keys(e).length > 0) && (r[f] = new m(n, e)),
      r
    );
  }
  parseSegment() {
    let n = Rr(this.remaining);
    if (n === '' && this.peekStartsWith(';')) throw new C(4009, !1);
    return (this.capture(n), new K(Rt(n), this.parseMatrixParams()));
  }
  parseMatrixParams() {
    let n = {};
    for (; this.consumeOptional(';'); ) this.parseParam(n);
    return n;
  }
  parseParam(n) {
    let e = Po(this.remaining);
    if (!e) return;
    this.capture(e);
    let r = '';
    if (this.consumeOptional('=')) {
      let i = Rr(this.remaining);
      i && ((r = i), this.capture(r));
    }
    n[Rt(e)] = Rt(r);
  }
  parseQueryParam(n) {
    let e = Lo(this.remaining);
    if (!e) return;
    this.capture(e);
    let r = '';
    if (this.consumeOptional('=')) {
      let s = ko(this.remaining);
      s && ((r = s), this.capture(r));
    }
    let i = Jn(e),
      o = Jn(r);
    if (n.hasOwnProperty(i)) {
      let s = n[i];
      (Array.isArray(s) || ((s = [s]), (n[i] = s)), s.push(o));
    } else n[i] = o;
  }
  parseParens(n) {
    let e = {};
    for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
      let r = Rr(this.remaining),
        i = this.remaining[r.length];
      if (i !== '/' && i !== ')' && i !== ';') throw new C(4010, !1);
      let o;
      r.indexOf(':') > -1 ? ((o = r.slice(0, r.indexOf(':'))), this.capture(o), this.capture(':')) : n && (o = f);
      let s = this.parseChildren();
      ((e[o] = Object.keys(s).length === 1 ? s[f] : new m([], s)), this.consumeOptional('//'));
    }
    return e;
  }
  peekStartsWith(n) {
    return this.remaining.startsWith(n);
  }
  consumeOptional(n) {
    return this.peekStartsWith(n) ? ((this.remaining = this.remaining.substring(n.length)), !0) : !1;
  }
  capture(n) {
    if (!this.consumeOptional(n)) throw new C(4011, !1);
  }
};
function fi(t) {
  return t.segments.length > 0 ? new m([], { [f]: t }) : t;
}
function gi(t) {
  let n = {};
  for (let [r, i] of Object.entries(t.children)) {
    let o = gi(i);
    if (r === f && o.segments.length === 0 && o.hasChildren()) for (let [s, a] of Object.entries(o.children)) n[s] = a;
    else (o.segments.length > 0 || o.hasChildren()) && (n[r] = o);
  }
  let e = new m(t.segments, n);
  return jo(e);
}
function jo(t) {
  if (t.numberOfChildren === 1 && t.children[f]) {
    let n = t.children[f];
    return new m(t.segments.concat(n.segments), n.children);
  }
  return t;
}
function Ce(t) {
  return t instanceof B;
}
function mi(t, n, e = null, r = null) {
  let i = vi(t);
  return yi(i, n, e, r);
}
function vi(t) {
  let n;
  function e(o) {
    let s = {};
    for (let c of o.children) {
      let u = e(c);
      s[c.outlet] = u;
    }
    let a = new m(o.url, s);
    return (o === t && (n = a), a);
  }
  let r = e(t.root),
    i = fi(r);
  return n ?? i;
}
function yi(t, n, e, r) {
  let i = t;
  for (; i.parent; ) i = i.parent;
  if (n.length === 0) return Cr(i, i, i, e, r);
  let o = $o(n);
  if (o.toRoot()) return Cr(i, i, new m([], {}), e, r);
  let s = zo(o, i, t),
    a = s.processChildren ? He(s.segmentGroup, s.index, o.commands) : Ri(s.segmentGroup, s.index, o.commands);
  return Cr(i, s.segmentGroup, a, e, r);
}
function Ct(t) {
  return typeof t == 'object' && t != null && !t.outlets && !t.segmentPath;
}
function Fe(t) {
  return typeof t == 'object' && t != null && t.outlets;
}
function Cr(t, n, e, r, i) {
  let o = {};
  r &&
    Object.entries(r).forEach(([c, u]) => {
      o[c] = Array.isArray(u) ? u.map((p) => `${p}`) : `${u}`;
    });
  let s;
  t === n ? (s = e) : (s = Si(t, n, e));
  let a = fi(gi(s));
  return new B(a, o, i);
}
function Si(t, n, e) {
  let r = {};
  return (
    Object.entries(t.children).forEach(([i, o]) => {
      o === n ? (r[i] = e) : (r[i] = Si(o, n, e));
    }),
    new m(t.segments, r)
  );
}
var wt = class {
  isAbsolute;
  numberOfDoubleDots;
  commands;
  constructor(n, e, r) {
    if (((this.isAbsolute = n), (this.numberOfDoubleDots = e), (this.commands = r), n && r.length > 0 && Ct(r[0])))
      throw new C(4003, !1);
    let i = r.find(Fe);
    if (i && i !== ai(r)) throw new C(4004, !1);
  }
  toRoot() {
    return this.isAbsolute && this.commands.length === 1 && this.commands[0] == '/';
  }
};
function $o(t) {
  if (typeof t[0] == 'string' && t.length === 1 && t[0] === '/') return new wt(!0, 0, t);
  let n = 0,
    e = !1,
    r = t.reduce((i, o, s) => {
      if (typeof o == 'object' && o != null) {
        if (o.outlets) {
          let a = {};
          return (
            Object.entries(o.outlets).forEach(([c, u]) => {
              a[c] = typeof u == 'string' ? u.split('/') : u;
            }),
            [...i, { outlets: a }]
          );
        }
        if (o.segmentPath) return [...i, o.segmentPath];
      }
      return typeof o != 'string'
        ? [...i, o]
        : s === 0
          ? (o.split('/').forEach((a, c) => {
              (c == 0 && a === '.') || (c == 0 && a === '' ? (e = !0) : a === '..' ? n++ : a != '' && i.push(a));
            }),
            i)
          : [...i, o];
    }, []);
  return new wt(e, n, r);
}
var ye = class {
  segmentGroup;
  processChildren;
  index;
  constructor(n, e, r) {
    ((this.segmentGroup = n), (this.processChildren = e), (this.index = r));
  }
};
function zo(t, n, e) {
  if (t.isAbsolute) return new ye(n, !0, 0);
  if (!e) return new ye(n, !1, NaN);
  if (e.parent === null) return new ye(e, !0, 0);
  let r = Ct(t.commands[0]) ? 0 : 1,
    i = e.segments.length - 1 + r;
  return Ho(e, i, t.numberOfDoubleDots);
}
function Ho(t, n, e) {
  let r = t,
    i = n,
    o = e;
  for (; o > i; ) {
    if (((o -= i), (r = r.parent), !r)) throw new C(4005, !1);
    i = r.segments.length;
  }
  return new ye(r, !1, i - o);
}
function Bo(t) {
  return Fe(t[0]) ? t[0].outlets : { [f]: t };
}
function Ri(t, n, e) {
  if (((t ??= new m([], {})), t.segments.length === 0 && t.hasChildren())) return He(t, n, e);
  let r = Fo(t, n, e),
    i = e.slice(r.commandIndex);
  if (r.match && r.pathIndex < t.segments.length) {
    let o = new m(t.segments.slice(0, r.pathIndex), {});
    return ((o.children[f] = new m(t.segments.slice(r.pathIndex), t.children)), He(o, 0, i));
  } else
    return r.match && i.length === 0
      ? new m(t.segments, {})
      : r.match && !t.hasChildren()
        ? Mr(t, n, e)
        : r.match
          ? He(t, 0, i)
          : Mr(t, n, e);
}
function He(t, n, e) {
  if (e.length === 0) return new m(t.segments, {});
  {
    let r = Bo(e),
      i = {};
    if (
      Object.keys(r).some((o) => o !== f) &&
      t.children[f] &&
      t.numberOfChildren === 1 &&
      t.children[f].segments.length === 0
    ) {
      let o = He(t.children[f], n, e);
      return new m(t.segments, o.children);
    }
    return (
      Object.entries(r).forEach(([o, s]) => {
        (typeof s == 'string' && (s = [s]), s !== null && (i[o] = Ri(t.children[o], n, s)));
      }),
      Object.entries(t.children).forEach(([o, s]) => {
        r[o] === void 0 && (i[o] = s);
      }),
      new m(t.segments, i)
    );
  }
}
function Fo(t, n, e) {
  let r = 0,
    i = n,
    o = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; i < t.segments.length; ) {
    if (r >= e.length) return o;
    let s = t.segments[i],
      a = e[r];
    if (Fe(a)) break;
    let c = `${a}`,
      u = r < e.length - 1 ? e[r + 1] : null;
    if (i > 0 && c === void 0) break;
    if (c && u && typeof u == 'object' && u.outlets === void 0) {
      if (!ti(c, u, s)) return o;
      r += 2;
    } else {
      if (!ti(c, {}, s)) return o;
      r++;
    }
    i++;
  }
  return { match: !0, pathIndex: i, commandIndex: r };
}
function Mr(t, n, e) {
  let r = t.segments.slice(0, n),
    i = 0;
  for (; i < e.length; ) {
    let o = e[i];
    if (Fe(o)) {
      let c = Vo(o.outlets);
      return new m(r, c);
    }
    if (i === 0 && Ct(e[0])) {
      let c = t.segments[n];
      (r.push(new K(c.path, ei(e[0]))), i++);
      continue;
    }
    let s = Fe(o) ? o.outlets[f] : `${o}`,
      a = i < e.length - 1 ? e[i + 1] : null;
    s && a && Ct(a) ? (r.push(new K(s, ei(a))), (i += 2)) : (r.push(new K(s, {})), i++);
  }
  return new m(r, {});
}
function Vo(t) {
  let n = {};
  return (
    Object.entries(t).forEach(([e, r]) => {
      (typeof r == 'string' && (r = [r]), r !== null && (n[e] = Mr(new m([], {}), 0, r)));
    }),
    n
  );
}
function ei(t) {
  let n = {};
  return (Object.entries(t).forEach(([e, r]) => (n[e] = `${r}`)), n);
}
function ti(t, n, e) {
  return t == e.path && z(n, e.parameters);
}
var Se = 'imperative',
  E = (function (t) {
    return (
      (t[(t.NavigationStart = 0)] = 'NavigationStart'),
      (t[(t.NavigationEnd = 1)] = 'NavigationEnd'),
      (t[(t.NavigationCancel = 2)] = 'NavigationCancel'),
      (t[(t.NavigationError = 3)] = 'NavigationError'),
      (t[(t.RoutesRecognized = 4)] = 'RoutesRecognized'),
      (t[(t.ResolveStart = 5)] = 'ResolveStart'),
      (t[(t.ResolveEnd = 6)] = 'ResolveEnd'),
      (t[(t.GuardsCheckStart = 7)] = 'GuardsCheckStart'),
      (t[(t.GuardsCheckEnd = 8)] = 'GuardsCheckEnd'),
      (t[(t.RouteConfigLoadStart = 9)] = 'RouteConfigLoadStart'),
      (t[(t.RouteConfigLoadEnd = 10)] = 'RouteConfigLoadEnd'),
      (t[(t.ChildActivationStart = 11)] = 'ChildActivationStart'),
      (t[(t.ChildActivationEnd = 12)] = 'ChildActivationEnd'),
      (t[(t.ActivationStart = 13)] = 'ActivationStart'),
      (t[(t.ActivationEnd = 14)] = 'ActivationEnd'),
      (t[(t.Scroll = 15)] = 'Scroll'),
      (t[(t.NavigationSkipped = 16)] = 'NavigationSkipped'),
      t
    );
  })(E || {}),
  U = class {
    id;
    url;
    constructor(n, e) {
      ((this.id = n), (this.url = e));
    }
  },
  J = class extends U {
    type = E.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(n, e, r = 'imperative', i = null) {
      (super(n, e), (this.navigationTrigger = r), (this.restoredState = i));
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  $ = class extends U {
    urlAfterRedirects;
    type = E.NavigationEnd;
    constructor(n, e, r) {
      (super(n, e), (this.urlAfterRedirects = r));
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  A = (function (t) {
    return (
      (t[(t.Redirect = 0)] = 'Redirect'),
      (t[(t.SupersededByNewNavigation = 1)] = 'SupersededByNewNavigation'),
      (t[(t.NoDataFromResolver = 2)] = 'NoDataFromResolver'),
      (t[(t.GuardRejected = 3)] = 'GuardRejected'),
      (t[(t.Aborted = 4)] = 'Aborted'),
      t
    );
  })(A || {}),
  we = (function (t) {
    return (
      (t[(t.IgnoredSameUrlNavigation = 0)] = 'IgnoredSameUrlNavigation'),
      (t[(t.IgnoredByUrlHandlingStrategy = 1)] = 'IgnoredByUrlHandlingStrategy'),
      t
    );
  })(we || {}),
  H = class extends U {
    reason;
    code;
    type = E.NavigationCancel;
    constructor(n, e, r, i) {
      (super(n, e), (this.reason = r), (this.code = i));
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  F = class extends U {
    reason;
    code;
    type = E.NavigationSkipped;
    constructor(n, e, r, i) {
      (super(n, e), (this.reason = r), (this.code = i));
    }
  },
  Ee = class extends U {
    error;
    target;
    type = E.NavigationError;
    constructor(n, e, r, i) {
      (super(n, e), (this.error = r), (this.target = i));
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  Ve = class extends U {
    urlAfterRedirects;
    state;
    type = E.RoutesRecognized;
    constructor(n, e, r, i) {
      (super(n, e), (this.urlAfterRedirects = r), (this.state = i));
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Et = class extends U {
    urlAfterRedirects;
    state;
    type = E.GuardsCheckStart;
    constructor(n, e, r, i) {
      (super(n, e), (this.urlAfterRedirects = r), (this.state = i));
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  bt = class extends U {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = E.GuardsCheckEnd;
    constructor(n, e, r, i, o) {
      (super(n, e), (this.urlAfterRedirects = r), (this.state = i), (this.shouldActivate = o));
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  It = class extends U {
    urlAfterRedirects;
    state;
    type = E.ResolveStart;
    constructor(n, e, r, i) {
      (super(n, e), (this.urlAfterRedirects = r), (this.state = i));
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Tt = class extends U {
    urlAfterRedirects;
    state;
    type = E.ResolveEnd;
    constructor(n, e, r, i) {
      (super(n, e), (this.urlAfterRedirects = r), (this.state = i));
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  At = class {
    route;
    type = E.RouteConfigLoadStart;
    constructor(n) {
      this.route = n;
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  Mt = class {
    route;
    type = E.RouteConfigLoadEnd;
    constructor(n) {
      this.route = n;
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  Dt = class {
    snapshot;
    type = E.ChildActivationStart;
    constructor(n) {
      this.snapshot = n;
    }
    toString() {
      return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  Ot = class {
    snapshot;
    type = E.ChildActivationEnd;
    constructor(n) {
      this.snapshot = n;
    }
    toString() {
      return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  _t = class {
    snapshot;
    type = E.ActivationStart;
    constructor(n) {
      this.snapshot = n;
    }
    toString() {
      return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  Nt = class {
    snapshot;
    type = E.ActivationEnd;
    constructor(n) {
      this.snapshot = n;
    }
    toString() {
      return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
    }
  },
  be = class {
    routerEvent;
    position;
    anchor;
    type = E.Scroll;
    constructor(n, e, r) {
      ((this.routerEvent = n), (this.position = e), (this.anchor = r));
    }
    toString() {
      let n = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${n}')`;
    }
  },
  qe = class {},
  Ie = class {
    url;
    navigationBehaviorOptions;
    constructor(n, e) {
      ((this.url = n), (this.navigationBehaviorOptions = e));
    }
  };
function qo(t) {
  return !(t instanceof qe) && !(t instanceof Ie);
}
function Go(t, n) {
  return (t.providers && !t._injector && (t._injector = ut(t.providers, n, `Route: ${t.path}`)), t._injector ?? n);
}
function j(t) {
  return t.outlet || f;
}
function Wo(t, n) {
  let e = t.filter((r) => j(r) === n);
  return (e.push(...t.filter((r) => j(r) !== n)), e);
}
function Me(t) {
  if (!t) return null;
  if (t.routeConfig?._injector) return t.routeConfig._injector;
  for (let n = t.parent; n; n = n.parent) {
    let e = n.routeConfig;
    if (e?._loadedInjector) return e._loadedInjector;
    if (e?._injector) return e._injector;
  }
  return null;
}
var Pt = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() {
      return Me(this.route?.snapshot) ?? this.rootInjector;
    }
    constructor(n) {
      ((this.rootInjector = n), (this.children = new ue(this.rootInjector)));
    }
  },
  ue = (() => {
    class t {
      rootInjector;
      contexts = new Map();
      constructor(e) {
        this.rootInjector = e;
      }
      onChildOutletCreated(e, r) {
        let i = this.getOrCreateContext(e);
        ((i.outlet = r), this.contexts.set(e, i));
      }
      onChildOutletDestroyed(e) {
        let r = this.getContext(e);
        r && ((r.outlet = null), (r.attachRef = null));
      }
      onOutletDeactivated() {
        let e = this.contexts;
        return ((this.contexts = new Map()), e);
      }
      onOutletReAttached(e) {
        this.contexts = e;
      }
      getOrCreateContext(e) {
        let r = this.getContext(e);
        return (r || ((r = new Pt(this.rootInjector)), this.contexts.set(e, r)), r);
      }
      getContext(e) {
        return this.contexts.get(e) || null;
      }
      static ɵfac = function (r) {
        return new (r || t)(g(ne));
      };
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })(),
  Ut = class {
    _root;
    constructor(n) {
      this._root = n;
    }
    get root() {
      return this._root.value;
    }
    parent(n) {
      let e = this.pathFromRoot(n);
      return e.length > 1 ? e[e.length - 2] : null;
    }
    children(n) {
      let e = Dr(n, this._root);
      return e ? e.children.map((r) => r.value) : [];
    }
    firstChild(n) {
      let e = Dr(n, this._root);
      return e && e.children.length > 0 ? e.children[0].value : null;
    }
    siblings(n) {
      let e = Or(n, this._root);
      return e.length < 2 ? [] : e[e.length - 2].children.map((i) => i.value).filter((i) => i !== n);
    }
    pathFromRoot(n) {
      return Or(n, this._root).map((e) => e.value);
    }
  };
function Dr(t, n) {
  if (t === n.value) return n;
  for (let e of n.children) {
    let r = Dr(t, e);
    if (r) return r;
  }
  return null;
}
function Or(t, n) {
  if (t === n.value) return [n];
  for (let e of n.children) {
    let r = Or(t, e);
    if (r.length) return (r.unshift(n), r);
  }
  return [];
}
var P = class {
  value;
  children;
  constructor(n, e) {
    ((this.value = n), (this.children = e));
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function ve(t) {
  let n = {};
  return (t && t.children.forEach((e) => (n[e.value.outlet] = e)), n);
}
var Ge = class extends Ut {
  snapshot;
  constructor(n, e) {
    (super(n), (this.snapshot = e), jr(this, n));
  }
  toString() {
    return this.snapshot.toString();
  }
};
function Ci(t) {
  let n = Zo(t),
    e = new x([new K('', {})]),
    r = new x({}),
    i = new x({}),
    o = new x({}),
    s = new x(''),
    a = new G(e, r, o, s, i, f, t, n.root);
  return ((a.snapshot = n.root), new Ge(new P(a, []), n));
}
function Zo(t) {
  let n = {},
    e = {},
    r = {},
    o = new se([], n, r, '', e, f, t, null, {});
  return new We('', new P(o, []));
}
var G = class {
  urlSubject;
  paramsSubject;
  queryParamsSubject;
  fragmentSubject;
  dataSubject;
  outlet;
  component;
  snapshot;
  _futureSnapshot;
  _routerState;
  _paramMap;
  _queryParamMap;
  title;
  url;
  params;
  queryParams;
  fragment;
  data;
  constructor(n, e, r, i, o, s, a, c) {
    ((this.urlSubject = n),
      (this.paramsSubject = e),
      (this.queryParamsSubject = r),
      (this.fragmentSubject = i),
      (this.dataSubject = o),
      (this.outlet = s),
      (this.component = a),
      (this._futureSnapshot = c),
      (this.title = this.dataSubject?.pipe(R((u) => u[Ke])) ?? d(void 0)),
      (this.url = n),
      (this.params = e),
      (this.queryParams = r),
      (this.fragment = i),
      (this.data = o));
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return ((this._paramMap ??= this.params.pipe(R((n) => ae(n)))), this._paramMap);
  }
  get queryParamMap() {
    return ((this._queryParamMap ??= this.queryParams.pipe(R((n) => ae(n)))), this._queryParamMap);
  }
  toString() {
    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
  }
};
function Lt(t, n, e = 'emptyOnly') {
  let r,
    { routeConfig: i } = t;
  return (
    n !== null && (e === 'always' || i?.path === '' || (!n.component && !n.routeConfig?.loadComponent))
      ? (r = {
          params: l(l({}, n.params), t.params),
          data: l(l({}, n.data), t.data),
          resolve: l(l(l(l({}, t.data), n.data), i?.data), t._resolvedData),
        })
      : (r = { params: l({}, t.params), data: l({}, t.data), resolve: l(l({}, t.data), t._resolvedData ?? {}) }),
    i && Ei(i) && (r.resolve[Ke] = i.title),
    r
  );
}
var se = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    get title() {
      return this.data?.[Ke];
    }
    constructor(n, e, r, i, o, s, a, c, u) {
      ((this.url = n),
        (this.params = e),
        (this.queryParams = r),
        (this.fragment = i),
        (this.data = o),
        (this.outlet = s),
        (this.component = a),
        (this.routeConfig = c),
        (this._resolve = u));
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return ((this._paramMap ??= ae(this.params)), this._paramMap);
    }
    get queryParamMap() {
      return ((this._queryParamMap ??= ae(this.queryParams)), this._queryParamMap);
    }
    toString() {
      let n = this.url.map((r) => r.toString()).join('/'),
        e = this.routeConfig ? this.routeConfig.path : '';
      return `Route(url:'${n}', path:'${e}')`;
    }
  },
  We = class extends Ut {
    url;
    constructor(n, e) {
      (super(e), (this.url = n), jr(this, e));
    }
    toString() {
      return wi(this._root);
    }
  };
function jr(t, n) {
  ((n.value._routerState = t), n.children.forEach((e) => jr(t, e)));
}
function wi(t) {
  let n = t.children.length > 0 ? ` { ${t.children.map(wi).join(', ')} } ` : '';
  return `${t.value}${n}`;
}
function wr(t) {
  if (t.snapshot) {
    let n = t.snapshot,
      e = t._futureSnapshot;
    ((t.snapshot = e),
      z(n.queryParams, e.queryParams) || t.queryParamsSubject.next(e.queryParams),
      n.fragment !== e.fragment && t.fragmentSubject.next(e.fragment),
      z(n.params, e.params) || t.paramsSubject.next(e.params),
      Co(n.url, e.url) || t.urlSubject.next(e.url),
      z(n.data, e.data) || t.dataSubject.next(e.data));
  } else ((t.snapshot = t._futureSnapshot), t.dataSubject.next(t._futureSnapshot.data));
}
function _r(t, n) {
  let e = z(t.params, n.params) && Io(t.url, n.url),
    r = !t.parent != !n.parent;
  return e && !r && (!t.parent || _r(t.parent, n.parent));
}
function Ei(t) {
  return typeof t.title == 'string' || t.title === null;
}
var bi = new I(''),
  Xe = (() => {
    class t {
      activated = null;
      get activatedComponentRef() {
        return this.activated;
      }
      _activatedRoute = null;
      name = f;
      activateEvents = new pe();
      deactivateEvents = new pe();
      attachEvents = new pe();
      detachEvents = new pe();
      routerOutletData = _n(void 0);
      parentContexts = h(ue);
      location = h(Sn);
      changeDetector = h(ur);
      inputBinder = h(Je, { optional: !0 });
      supportsBindingToComponentInputs = !0;
      ngOnChanges(e) {
        if (e.name) {
          let { firstChange: r, previousValue: i } = e.name;
          if (r) return;
          (this.isTrackedInParentContexts(i) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)),
            this.initializeOutletWithName());
        }
      }
      ngOnDestroy() {
        (this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this));
      }
      isTrackedInParentContexts(e) {
        return this.parentContexts.getContext(e)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if ((this.parentContexts.onChildOutletCreated(this.name, this), this.activated)) return;
        let e = this.parentContexts.getContext(this.name);
        e?.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new C(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new C(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new C(4012, !1);
        this.location.detach();
        let e = this.activated;
        return ((this.activated = null), (this._activatedRoute = null), this.detachEvents.emit(e.instance), e);
      }
      attach(e, r) {
        ((this.activated = e),
          (this._activatedRoute = r),
          this.location.insert(e.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(e.instance));
      }
      deactivate() {
        if (this.activated) {
          let e = this.component;
          (this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(e));
        }
      }
      activateWith(e, r) {
        if (this.isActivated) throw new C(4013, !1);
        this._activatedRoute = e;
        let i = this.location,
          s = e.snapshot.component,
          a = this.parentContexts.getOrCreateContext(this.name).children,
          c = new Nr(e, a, i.injector, this.routerOutletData);
        ((this.activated = i.createComponent(s, { index: i.length, injector: c, environmentInjector: r })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance));
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵdir = sr({
        type: t,
        selectors: [['router-outlet']],
        inputs: { name: 'name', routerOutletData: [1, 'routerOutletData'] },
        outputs: {
          activateEvents: 'activate',
          deactivateEvents: 'deactivate',
          attachEvents: 'attach',
          detachEvents: 'detach',
        },
        exportAs: ['outlet'],
        features: [tr],
      });
    }
    return t;
  })(),
  Nr = class {
    route;
    childContexts;
    parent;
    outletData;
    constructor(n, e, r, i) {
      ((this.route = n), (this.childContexts = e), (this.parent = r), (this.outletData = i));
    }
    get(n, e) {
      return n === G ? this.route : n === ue ? this.childContexts : n === bi ? this.outletData : this.parent.get(n, e);
    }
  },
  Je = new I(''),
  $r = (() => {
    class t {
      outletDataSubscriptions = new Map();
      bindActivatedRouteToOutletComponent(e) {
        (this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e));
      }
      unsubscribeFromRouteData(e) {
        (this.outletDataSubscriptions.get(e)?.unsubscribe(), this.outletDataSubscriptions.delete(e));
      }
      subscribeToRouteData(e) {
        let { activatedRoute: r } = e,
          i = it([r.queryParams, r.params, r.data])
            .pipe(O(([o, s, a], c) => ((a = l(l(l({}, o), s), a)), c === 0 ? d(a) : Promise.resolve(a))))
            .subscribe((o) => {
              if (!e.isActivated || !e.activatedComponentRef || e.activatedRoute !== r || r.component === null) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              let s = Pn(r.component);
              if (!s) {
                this.unsubscribeFromRouteData(e);
                return;
              }
              for (let { templateName: a } of s.inputs) e.activatedComponentRef.setInput(a, o[a]);
            });
        this.outletDataSubscriptions.set(e, i);
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  zr = (() => {
    class t {
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵcmp = lt({
        type: t,
        selectors: [['ng-component']],
        exportAs: ['emptyRouterOutlet'],
        decls: 1,
        vars: 0,
        template: function (r, i) {
          r & 1 && ht(0, 'router-outlet');
        },
        dependencies: [Xe],
        encapsulation: 2,
      });
    }
    return t;
  })();
function Hr(t) {
  let n = t.children && t.children.map(Hr),
    e = n ? L(l({}, t), { children: n }) : l({}, t);
  return (
    !e.component && !e.loadComponent && (n || e.loadChildren) && e.outlet && e.outlet !== f && (e.component = zr),
    e
  );
}
function Yo(t, n, e) {
  let r = Ze(t, n._root, e ? e._root : void 0);
  return new Ge(r, n);
}
function Ze(t, n, e) {
  if (e && t.shouldReuseRoute(n.value, e.value.snapshot)) {
    let r = e.value;
    r._futureSnapshot = n.value;
    let i = Qo(t, n, e);
    return new P(r, i);
  } else {
    if (t.shouldAttach(n.value)) {
      let o = t.retrieve(n.value);
      if (o !== null) {
        let s = o.route;
        return ((s.value._futureSnapshot = n.value), (s.children = n.children.map((a) => Ze(t, a))), s);
      }
    }
    let r = Ko(n.value),
      i = n.children.map((o) => Ze(t, o));
    return new P(r, i);
  }
}
function Qo(t, n, e) {
  return n.children.map((r) => {
    for (let i of e.children) if (t.shouldReuseRoute(r.value, i.value.snapshot)) return Ze(t, r, i);
    return Ze(t, r);
  });
}
function Ko(t) {
  return new G(
    new x(t.url),
    new x(t.params),
    new x(t.queryParams),
    new x(t.fragment),
    new x(t.data),
    t.outlet,
    t.component,
    t,
  );
}
var Te = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(n, e) {
      ((this.redirectTo = n), (this.navigationBehaviorOptions = e));
    }
  },
  Ii = 'ngNavigationCancelingError';
function xt(t, n) {
  let { redirectTo: e, navigationBehaviorOptions: r } = Ce(n)
      ? { redirectTo: n, navigationBehaviorOptions: void 0 }
      : n,
    i = Ti(!1, A.Redirect);
  return ((i.url = e), (i.navigationBehaviorOptions = r), i);
}
function Ti(t, n) {
  let e = new Error(`NavigationCancelingError: ${t || ''}`);
  return ((e[Ii] = !0), (e.cancellationCode = n), e);
}
function Xo(t) {
  return Ai(t) && Ce(t.url);
}
function Ai(t) {
  return !!t && t[Ii];
}
var Jo = (t, n, e, r) => R((i) => (new Pr(n, i.targetRouterState, i.currentRouterState, e, r).activate(t), i)),
  Pr = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(n, e, r, i, o) {
      ((this.routeReuseStrategy = n),
        (this.futureState = e),
        (this.currState = r),
        (this.forwardEvent = i),
        (this.inputBindingEnabled = o));
    }
    activate(n) {
      let e = this.futureState._root,
        r = this.currState ? this.currState._root : null;
      (this.deactivateChildRoutes(e, r, n), wr(this.futureState.root), this.activateChildRoutes(e, r, n));
    }
    deactivateChildRoutes(n, e, r) {
      let i = ve(e);
      (n.children.forEach((o) => {
        let s = o.value.outlet;
        (this.deactivateRoutes(o, i[s], r), delete i[s]);
      }),
        Object.values(i).forEach((o) => {
          this.deactivateRouteAndItsChildren(o, r);
        }));
    }
    deactivateRoutes(n, e, r) {
      let i = n.value,
        o = e ? e.value : null;
      if (i === o)
        if (i.component) {
          let s = r.getContext(i.outlet);
          s && this.deactivateChildRoutes(n, e, s.children);
        } else this.deactivateChildRoutes(n, e, r);
      else o && this.deactivateRouteAndItsChildren(e, r);
    }
    deactivateRouteAndItsChildren(n, e) {
      n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot)
        ? this.detachAndStoreRouteSubtree(n, e)
        : this.deactivateRouteAndOutlet(n, e);
    }
    detachAndStoreRouteSubtree(n, e) {
      let r = e.getContext(n.value.outlet),
        i = r && n.value.component ? r.children : e,
        o = ve(n);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
      if (r && r.outlet) {
        let s = r.outlet.detach(),
          a = r.children.onOutletDeactivated();
        this.routeReuseStrategy.store(n.value.snapshot, { componentRef: s, route: n, contexts: a });
      }
    }
    deactivateRouteAndOutlet(n, e) {
      let r = e.getContext(n.value.outlet),
        i = r && n.value.component ? r.children : e,
        o = ve(n);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
      r &&
        (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()), (r.attachRef = null), (r.route = null));
    }
    activateChildRoutes(n, e, r) {
      let i = ve(e);
      (n.children.forEach((o) => {
        (this.activateRoutes(o, i[o.value.outlet], r), this.forwardEvent(new Nt(o.value.snapshot)));
      }),
        n.children.length && this.forwardEvent(new Ot(n.value.snapshot)));
    }
    activateRoutes(n, e, r) {
      let i = n.value,
        o = e ? e.value : null;
      if ((wr(i), i === o))
        if (i.component) {
          let s = r.getOrCreateContext(i.outlet);
          this.activateChildRoutes(n, e, s.children);
        } else this.activateChildRoutes(n, e, r);
      else if (i.component) {
        let s = r.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
          let a = this.routeReuseStrategy.retrieve(i.snapshot);
          (this.routeReuseStrategy.store(i.snapshot, null),
            s.children.onOutletReAttached(a.contexts),
            (s.attachRef = a.componentRef),
            (s.route = a.route.value),
            s.outlet && s.outlet.attach(a.componentRef, a.route.value),
            wr(a.route.value),
            this.activateChildRoutes(n, null, s.children));
        } else
          ((s.attachRef = null),
            (s.route = i),
            s.outlet && s.outlet.activateWith(i, s.injector),
            this.activateChildRoutes(n, null, s.children));
      } else this.activateChildRoutes(n, null, r);
    }
  },
  kt = class {
    path;
    route;
    constructor(n) {
      ((this.path = n), (this.route = this.path[this.path.length - 1]));
    }
  },
  Re = class {
    component;
    route;
    constructor(n, e) {
      ((this.component = n), (this.route = e));
    }
  };
function es(t, n, e) {
  let r = t._root,
    i = n ? n._root : null;
  return ze(r, i, e, [r.value]);
}
function ts(t) {
  let n = t.routeConfig ? t.routeConfig.canActivateChild : null;
  return !n || n.length === 0 ? null : { node: t, guards: n };
}
function De(t, n) {
  let e = Symbol(),
    r = n.get(t, e);
  return r === e ? (typeof t == 'function' && !an(t) ? t : n.get(t)) : r;
}
function ze(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) {
  let o = ve(n);
  return (
    t.children.forEach((s) => {
      (rs(s, o[s.value.outlet], e, r.concat([s.value]), i), delete o[s.value.outlet]);
    }),
    Object.entries(o).forEach(([s, a]) => Be(a, e.getContext(s), i)),
    i
  );
}
function rs(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) {
  let o = t.value,
    s = n ? n.value : null,
    a = e ? e.getContext(t.value.outlet) : null;
  if (s && o.routeConfig === s.routeConfig) {
    let c = ns(s, o, o.routeConfig.runGuardsAndResolvers);
    (c ? i.canActivateChecks.push(new kt(r)) : ((o.data = s.data), (o._resolvedData = s._resolvedData)),
      o.component ? ze(t, n, a ? a.children : null, r, i) : ze(t, n, e, r, i),
      c && a && a.outlet && a.outlet.isActivated && i.canDeactivateChecks.push(new Re(a.outlet.component, s)));
  } else
    (s && Be(n, a, i),
      i.canActivateChecks.push(new kt(r)),
      o.component ? ze(t, null, a ? a.children : null, r, i) : ze(t, null, e, r, i));
  return i;
}
function ns(t, n, e) {
  if (typeof e == 'function') return e(t, n);
  switch (e) {
    case 'pathParamsChange':
      return !oe(t.url, n.url);
    case 'pathParamsOrQueryParamsChange':
      return !oe(t.url, n.url) || !z(t.queryParams, n.queryParams);
    case 'always':
      return !0;
    case 'paramsOrQueryParamsChange':
      return !_r(t, n) || !z(t.queryParams, n.queryParams);
    case 'paramsChange':
    default:
      return !_r(t, n);
  }
}
function Be(t, n, e) {
  let r = ve(t),
    i = t.value;
  (Object.entries(r).forEach(([o, s]) => {
    i.component ? (n ? Be(s, n.children.getContext(o), e) : Be(s, null, e)) : Be(s, n, e);
  }),
    i.component
      ? n && n.outlet && n.outlet.isActivated
        ? e.canDeactivateChecks.push(new Re(n.outlet.component, i))
        : e.canDeactivateChecks.push(new Re(null, i))
      : e.canDeactivateChecks.push(new Re(null, i)));
}
function et(t) {
  return typeof t == 'function';
}
function is(t) {
  return typeof t == 'boolean';
}
function os(t) {
  return t && et(t.canLoad);
}
function ss(t) {
  return t && et(t.canActivate);
}
function as(t) {
  return t && et(t.canActivateChild);
}
function cs(t) {
  return t && et(t.canDeactivate);
}
function us(t) {
  return t && et(t.canMatch);
}
function Mi(t) {
  return t instanceof tn || t?.name === 'EmptyError';
}
var vt = Symbol('INITIAL_VALUE');
function Ae() {
  return O((t) =>
    it(t.map((n) => n.pipe(he(1), sn(vt)))).pipe(
      R((n) => {
        for (let e of n)
          if (e !== !0) {
            if (e === vt) return vt;
            if (e === !1 || ls(e)) return e;
          }
        return !0;
      }),
      q((n) => n !== vt),
      he(1),
    ),
  );
}
function ls(t) {
  return Ce(t) || t instanceof Te;
}
function ds(t, n) {
  return D((e) => {
    let {
      targetSnapshot: r,
      currentSnapshot: i,
      guards: { canActivateChecks: o, canDeactivateChecks: s },
    } = e;
    return s.length === 0 && o.length === 0
      ? d(L(l({}, e), { guardsResult: !0 }))
      : hs(s, r, i, t).pipe(
          D((a) => (a && is(a) ? ps(r, o, t, n) : d(a))),
          R((a) => L(l({}, e), { guardsResult: a })),
        );
  });
}
function hs(t, n, e, r) {
  return M(t).pipe(
    D((i) => ys(i.component, i.route, e, n, r)),
    Q((i) => i !== !0, !0),
  );
}
function ps(t, n, e, r) {
  return M(n).pipe(
    re((i) => rn(gs(i.route.parent, r), fs(i.route, r), vs(t, i.path, e), ms(t, i.route, e))),
    Q((i) => i !== !0, !0),
  );
}
function fs(t, n) {
  return (t !== null && n && n(new _t(t)), d(!0));
}
function gs(t, n) {
  return (t !== null && n && n(new Dt(t)), d(!0));
}
function ms(t, n, e) {
  let r = n.routeConfig ? n.routeConfig.canActivate : null;
  if (!r || r.length === 0) return d(!0);
  let i = r.map((o) =>
    ot(() => {
      let s = Me(n) ?? e,
        a = De(o, s),
        c = ss(a) ? a.canActivate(n, t) : k(s, () => a(n, t));
      return W(c).pipe(Q());
    }),
  );
  return d(i).pipe(Ae());
}
function vs(t, n, e) {
  let r = n[n.length - 1],
    o = n
      .slice(0, n.length - 1)
      .reverse()
      .map((s) => ts(s))
      .filter((s) => s !== null)
      .map((s) =>
        ot(() => {
          let a = s.guards.map((c) => {
            let u = Me(s.node) ?? e,
              p = De(c, u),
              v = as(p) ? p.canActivateChild(r, t) : k(u, () => p(r, t));
            return W(v).pipe(Q());
          });
          return d(a).pipe(Ae());
        }),
      );
  return d(o).pipe(Ae());
}
function ys(t, n, e, r, i) {
  let o = n && n.routeConfig ? n.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return d(!0);
  let s = o.map((a) => {
    let c = Me(n) ?? i,
      u = De(a, c),
      p = cs(u) ? u.canDeactivate(t, n, e, r) : k(c, () => u(t, n, e, r));
    return W(p).pipe(Q());
  });
  return d(s).pipe(Ae());
}
function Ss(t, n, e, r) {
  let i = n.canLoad;
  if (i === void 0 || i.length === 0) return d(!0);
  let o = i.map((s) => {
    let a = De(s, t),
      c = os(a) ? a.canLoad(n, e) : k(t, () => a(n, e));
    return W(c);
  });
  return d(o).pipe(Ae(), Di(r));
}
function Di(t) {
  return Xr(
    T((n) => {
      if (typeof n != 'boolean') throw xt(t, n);
    }),
    R((n) => n === !0),
  );
}
function Rs(t, n, e, r) {
  let i = n.canMatch;
  if (!i || i.length === 0) return d(!0);
  let o = i.map((s) => {
    let a = De(s, t),
      c = us(a) ? a.canMatch(n, e) : k(t, () => a(n, e));
    return W(c);
  });
  return d(o).pipe(Ae(), Di(r));
}
var Ye = class {
    segmentGroup;
    constructor(n) {
      this.segmentGroup = n || null;
    }
  },
  Qe = class extends Error {
    urlTree;
    constructor(n) {
      (super(), (this.urlTree = n));
    }
  };
function me(t) {
  return Oe(new Ye(t));
}
function Cs(t) {
  return Oe(new C(4e3, !1));
}
function ws(t) {
  return Oe(Ti(!1, A.GuardRejected));
}
var Ur = class {
  urlSerializer;
  urlTree;
  constructor(n, e) {
    ((this.urlSerializer = n), (this.urlTree = e));
  }
  lineralizeSegments(n, e) {
    let r = [],
      i = e.root;
    for (;;) {
      if (((r = r.concat(i.segments)), i.numberOfChildren === 0)) return d(r);
      if (i.numberOfChildren > 1 || !i.children[f]) return Cs(`${n.redirectTo}`);
      i = i.children[f];
    }
  }
  applyRedirectCommands(n, e, r, i, o) {
    return Es(e, i, o).pipe(
      R((s) => {
        if (s instanceof B) throw new Qe(s);
        let a = this.applyRedirectCreateUrlTree(s, this.urlSerializer.parse(s), n, r);
        if (s[0] === '/') throw new Qe(a);
        return a;
      }),
    );
  }
  applyRedirectCreateUrlTree(n, e, r, i) {
    let o = this.createSegmentGroup(n, e.root, r, i);
    return new B(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment);
  }
  createQueryParams(n, e) {
    let r = {};
    return (
      Object.entries(n).forEach(([i, o]) => {
        if (typeof o == 'string' && o[0] === ':') {
          let a = o.substring(1);
          r[i] = e[a];
        } else r[i] = o;
      }),
      r
    );
  }
  createSegmentGroup(n, e, r, i) {
    let o = this.createSegments(n, e.segments, r, i),
      s = {};
    return (
      Object.entries(e.children).forEach(([a, c]) => {
        s[a] = this.createSegmentGroup(n, c, r, i);
      }),
      new m(o, s)
    );
  }
  createSegments(n, e, r, i) {
    return e.map((o) => (o.path[0] === ':' ? this.findPosParam(n, o, i) : this.findOrReturn(o, r)));
  }
  findPosParam(n, e, r) {
    let i = r[e.path.substring(1)];
    if (!i) throw new C(4001, !1);
    return i;
  }
  findOrReturn(n, e) {
    let r = 0;
    for (let i of e) {
      if (i.path === n.path) return (e.splice(r), i);
      r++;
    }
    return n;
  }
};
function Es(t, n, e) {
  if (typeof t == 'string') return d(t);
  let r = t,
    { queryParams: i, fragment: o, routeConfig: s, url: a, outlet: c, params: u, data: p, title: v } = n;
  return W(
    k(e, () => r({ params: u, data: p, queryParams: i, fragment: o, routeConfig: s, url: a, outlet: c, title: v })),
  );
}
var Lr = { matched: !1, consumedSegments: [], remainingSegments: [], parameters: {}, positionalParamSegments: {} };
function bs(t, n, e, r, i) {
  let o = Oi(t, n, e);
  return o.matched ? ((r = Go(n, r)), Rs(r, n, e, i).pipe(R((s) => (s === !0 ? o : l({}, Lr))))) : d(o);
}
function Oi(t, n, e) {
  if (n.path === '**') return Is(e);
  if (n.path === '')
    return n.pathMatch === 'full' && (t.hasChildren() || e.length > 0)
      ? l({}, Lr)
      : { matched: !0, consumedSegments: [], remainingSegments: e, parameters: {}, positionalParamSegments: {} };
  let i = (n.matcher || oi)(e, t, n);
  if (!i) return l({}, Lr);
  let o = {};
  Object.entries(i.posParams ?? {}).forEach(([a, c]) => {
    o[a] = c.path;
  });
  let s = i.consumed.length > 0 ? l(l({}, o), i.consumed[i.consumed.length - 1].parameters) : o;
  return {
    matched: !0,
    consumedSegments: i.consumed,
    remainingSegments: e.slice(i.consumed.length),
    parameters: s,
    positionalParamSegments: i.posParams ?? {},
  };
}
function Is(t) {
  return {
    matched: !0,
    parameters: t.length > 0 ? ai(t).parameters : {},
    consumedSegments: t,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function ri(t, n, e, r) {
  return e.length > 0 && Ms(t, e, r)
    ? { segmentGroup: new m(n, As(r, new m(e, t.children))), slicedSegments: [] }
    : e.length === 0 && Ds(t, e, r)
      ? { segmentGroup: new m(t.segments, Ts(t, e, r, t.children)), slicedSegments: e }
      : { segmentGroup: new m(t.segments, t.children), slicedSegments: e };
}
function Ts(t, n, e, r) {
  let i = {};
  for (let o of e)
    if ($t(t, n, o) && !r[j(o)]) {
      let s = new m([], {});
      i[j(o)] = s;
    }
  return l(l({}, r), i);
}
function As(t, n) {
  let e = {};
  e[f] = n;
  for (let r of t)
    if (r.path === '' && j(r) !== f) {
      let i = new m([], {});
      e[j(r)] = i;
    }
  return e;
}
function Ms(t, n, e) {
  return e.some((r) => $t(t, n, r) && j(r) !== f);
}
function Ds(t, n, e) {
  return e.some((r) => $t(t, n, r));
}
function $t(t, n, e) {
  return (t.hasChildren() || n.length > 0) && e.pathMatch === 'full' ? !1 : e.path === '';
}
function Os(t, n, e) {
  return n.length === 0 && !t.children[e];
}
var xr = class {};
function _s(t, n, e, r, i, o, s = 'emptyOnly') {
  return new kr(t, n, e, r, i, s, o).recognize();
}
var Ns = 31,
  kr = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(n, e, r, i, o, s, a) {
      ((this.injector = n),
        (this.configLoader = e),
        (this.rootComponentType = r),
        (this.config = i),
        (this.urlTree = o),
        (this.paramsInheritanceStrategy = s),
        (this.urlSerializer = a),
        (this.applyRedirects = new Ur(this.urlSerializer, this.urlTree)));
    }
    noMatchError(n) {
      return new C(4002, `'${n.segmentGroup}'`);
    }
    recognize() {
      let n = ri(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(n).pipe(
        R(({ children: e, rootSnapshot: r }) => {
          let i = new P(r, e),
            o = new We('', i),
            s = mi(r, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (s.queryParams = this.urlTree.queryParams),
            (o.url = this.urlSerializer.serialize(s)),
            { state: o, tree: s }
          );
        }),
      );
    }
    match(n) {
      let e = new se(
        [],
        Object.freeze({}),
        Object.freeze(l({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        f,
        this.rootComponentType,
        null,
        {},
      );
      return this.processSegmentGroup(this.injector, this.config, n, f, e).pipe(
        R((r) => ({ children: r, rootSnapshot: e })),
        te((r) => {
          if (r instanceof Qe) return ((this.urlTree = r.urlTree), this.match(r.urlTree.root));
          throw r instanceof Ye ? this.noMatchError(r) : r;
        }),
      );
    }
    processSegmentGroup(n, e, r, i, o) {
      return r.segments.length === 0 && r.hasChildren()
        ? this.processChildren(n, e, r, o)
        : this.processSegment(n, e, r, r.segments, i, !0, o).pipe(R((s) => (s instanceof P ? [s] : [])));
    }
    processChildren(n, e, r, i) {
      let o = [];
      for (let s of Object.keys(r.children)) s === 'primary' ? o.unshift(s) : o.push(s);
      return M(o).pipe(
        re((s) => {
          let a = r.children[s],
            c = Wo(e, s);
          return this.processSegmentGroup(n, c, a, s, i);
        }),
        on((s, a) => (s.push(...a), s)),
        Yt(null),
        nn(),
        D((s) => {
          if (s === null) return me(r);
          let a = _i(s);
          return (Ps(a), d(a));
        }),
      );
    }
    processSegment(n, e, r, i, o, s, a) {
      return M(e).pipe(
        re((c) =>
          this.processSegmentAgainstRoute(c._injector ?? n, e, c, r, i, o, s, a).pipe(
            te((u) => {
              if (u instanceof Ye) return d(null);
              throw u;
            }),
          ),
        ),
        Q((c) => !!c),
        te((c) => {
          if (Mi(c)) return Os(r, i, o) ? d(new xr()) : me(r);
          throw c;
        }),
      );
    }
    processSegmentAgainstRoute(n, e, r, i, o, s, a, c) {
      return j(r) !== s && (s === f || !$t(i, o, r))
        ? me(i)
        : r.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(n, i, r, o, s, c)
          : this.allowRedirects && a
            ? this.expandSegmentAgainstRouteUsingRedirect(n, i, e, r, o, s, c)
            : me(i);
    }
    expandSegmentAgainstRouteUsingRedirect(n, e, r, i, o, s, a) {
      let {
        matched: c,
        parameters: u,
        consumedSegments: p,
        positionalParamSegments: v,
        remainingSegments: S,
      } = Oi(e, i, o);
      if (!c) return me(e);
      typeof i.redirectTo == 'string' &&
        i.redirectTo[0] === '/' &&
        (this.absoluteRedirectCount++, this.absoluteRedirectCount > Ns && (this.allowRedirects = !1));
      let b = new se(
          o,
          u,
          Object.freeze(l({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          ni(i),
          j(i),
          i.component ?? i._loadedComponent ?? null,
          i,
          ii(i),
        ),
        w = Lt(b, a, this.paramsInheritanceStrategy);
      return (
        (b.params = Object.freeze(w.params)),
        (b.data = Object.freeze(w.data)),
        this.applyRedirects.applyRedirectCommands(p, i.redirectTo, v, b, n).pipe(
          O((ee) => this.applyRedirects.lineralizeSegments(i, ee)),
          D((ee) => this.processSegment(n, r, e, ee.concat(S), s, !1, a)),
        )
      );
    }
    matchSegmentAgainstRoute(n, e, r, i, o, s) {
      let a = bs(e, r, i, n, this.urlSerializer);
      return (
        r.path === '**' && (e.children = {}),
        a.pipe(
          O((c) =>
            c.matched
              ? ((n = r._injector ?? n),
                this.getChildConfig(n, r, i).pipe(
                  O(({ routes: u }) => {
                    let p = r._loadedInjector ?? n,
                      { parameters: v, consumedSegments: S, remainingSegments: b } = c,
                      w = new se(
                        S,
                        v,
                        Object.freeze(l({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        ni(r),
                        j(r),
                        r.component ?? r._loadedComponent ?? null,
                        r,
                        ii(r),
                      ),
                      _ = Lt(w, s, this.paramsInheritanceStrategy);
                    ((w.params = Object.freeze(_.params)), (w.data = Object.freeze(_.data)));
                    let { segmentGroup: ee, slicedSegments: qt } = ri(e, S, b, u);
                    if (qt.length === 0 && ee.hasChildren())
                      return this.processChildren(p, u, ee, w).pipe(R((nt) => new P(w, nt)));
                    if (u.length === 0 && qt.length === 0) return d(new P(w, []));
                    let eo = j(r) === o;
                    return this.processSegment(p, u, ee, qt, eo ? f : o, !0, w).pipe(
                      R((nt) => new P(w, nt instanceof P ? [nt] : [])),
                    );
                  }),
                ))
              : me(e),
          ),
        )
      );
    }
    getChildConfig(n, e, r) {
      return e.children
        ? d({ routes: e.children, injector: n })
        : e.loadChildren
          ? e._loadedRoutes !== void 0
            ? d({ routes: e._loadedRoutes, injector: e._loadedInjector })
            : Ss(n, e, r, this.urlSerializer).pipe(
                D((i) =>
                  i
                    ? this.configLoader.loadChildren(n, e).pipe(
                        T((o) => {
                          ((e._loadedRoutes = o.routes), (e._loadedInjector = o.injector));
                        }),
                      )
                    : ws(e),
                ),
              )
          : d({ routes: [], injector: n });
    }
  };
function Ps(t) {
  t.sort((n, e) =>
    n.value.outlet === f ? -1 : e.value.outlet === f ? 1 : n.value.outlet.localeCompare(e.value.outlet),
  );
}
function Us(t) {
  let n = t.value.routeConfig;
  return n && n.path === '';
}
function _i(t) {
  let n = [],
    e = new Set();
  for (let r of t) {
    if (!Us(r)) {
      n.push(r);
      continue;
    }
    let i = n.find((o) => r.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...r.children), e.add(i)) : n.push(r);
  }
  for (let r of e) {
    let i = _i(r.children);
    n.push(new P(r.value, i));
  }
  return n.filter((r) => !e.has(r));
}
function ni(t) {
  return t.data || {};
}
function ii(t) {
  return t.resolve || {};
}
function Ls(t, n, e, r, i, o) {
  return D((s) =>
    _s(t, n, e, r, s.extractedUrl, i, o).pipe(
      R(({ state: a, tree: c }) => L(l({}, s), { targetSnapshot: a, urlAfterRedirects: c })),
    ),
  );
}
function xs(t, n) {
  return D((e) => {
    let {
      targetSnapshot: r,
      guards: { canActivateChecks: i },
    } = e;
    if (!i.length) return d(e);
    let o = new Set(i.map((c) => c.route)),
      s = new Set();
    for (let c of o) if (!s.has(c)) for (let u of Ni(c)) s.add(u);
    let a = 0;
    return M(s).pipe(
      re((c) => (o.has(c) ? ks(c, r, t, n) : ((c.data = Lt(c, c.parent, t).resolve), d(void 0)))),
      T(() => a++),
      Qt(1),
      D((c) => (a === s.size ? d(e) : V)),
    );
  });
}
function Ni(t) {
  let n = t.children.map((e) => Ni(e)).flat();
  return [t, ...n];
}
function ks(t, n, e, r) {
  let i = t.routeConfig,
    o = t._resolve;
  return (
    i?.title !== void 0 && !Ei(i) && (o[Ke] = i.title),
    ot(
      () => (
        (t.data = Lt(t, t.parent, e).resolve),
        js(o, t, n, r).pipe(R((s) => ((t._resolvedData = s), (t.data = l(l({}, t.data), s)), null)))
      ),
    )
  );
}
function js(t, n, e, r) {
  let i = Ir(t);
  if (i.length === 0) return d({});
  let o = {};
  return M(i).pipe(
    D((s) =>
      $s(t[s], n, e, r).pipe(
        Q(),
        T((a) => {
          if (a instanceof Te) throw xt(new X(), a);
          o[s] = a;
        }),
      ),
    ),
    Qt(1),
    R(() => o),
    te((s) => (Mi(s) ? V : Oe(s))),
  );
}
function $s(t, n, e, r) {
  let i = Me(n) ?? r,
    o = De(t, i),
    s = o.resolve ? o.resolve(n, e) : k(i, () => o(n, e));
  return W(s);
}
function Er(t) {
  return O((n) => {
    let e = t(n);
    return e ? M(e).pipe(R(() => n)) : d(n);
  });
}
var Br = (() => {
    class t {
      buildTitle(e) {
        let r,
          i = e.root;
        for (; i !== void 0; )
          ((r = this.getResolvedTitleForRoute(i) ?? r), (i = i.children.find((o) => o.outlet === f)));
        return r;
      }
      getResolvedTitleForRoute(e) {
        return e.data[Ke];
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: () => h(Pi), providedIn: 'root' });
    }
    return t;
  })(),
  Pi = (() => {
    class t extends Br {
      title;
      constructor(e) {
        (super(), (this.title = e));
      }
      updateTitle(e) {
        let r = this.buildTitle(e);
        r !== void 0 && this.title.setTitle(r);
      }
      static ɵfac = function (r) {
        return new (r || t)(g(Kn));
      };
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })(),
  le = new I('', { providedIn: 'root', factory: () => ({}) }),
  de = new I(''),
  zt = (() => {
    class t {
      componentLoaders = new WeakMap();
      childrenLoaders = new WeakMap();
      onLoadStartListener;
      onLoadEndListener;
      compiler = h(Dn);
      loadComponent(e, r) {
        if (this.componentLoaders.get(r)) return this.componentLoaders.get(r);
        if (r._loadedComponent) return d(r._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(r);
        let i = W(k(e, () => r.loadComponent())).pipe(
            R(Li),
            O(xi),
            T((s) => {
              (this.onLoadEndListener && this.onLoadEndListener(r), (r._loadedComponent = s));
            }),
            st(() => {
              this.componentLoaders.delete(r);
            }),
          ),
          o = new Wt(i, () => new Y()).pipe(Gt());
        return (this.componentLoaders.set(r, o), o);
      }
      loadChildren(e, r) {
        if (this.childrenLoaders.get(r)) return this.childrenLoaders.get(r);
        if (r._loadedRoutes) return d({ routes: r._loadedRoutes, injector: r._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(r);
        let o = Ui(r, this.compiler, e, this.onLoadEndListener).pipe(
            st(() => {
              this.childrenLoaders.delete(r);
            }),
          ),
          s = new Wt(o, () => new Y()).pipe(Gt());
        return (this.childrenLoaders.set(r, s), s);
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })();
function Ui(t, n, e, r) {
  return W(k(e, () => t.loadChildren())).pipe(
    R(Li),
    O(xi),
    D((i) => (i instanceof Cn || Array.isArray(i) ? d(i) : M(n.compileModuleAsync(i)))),
    R((i) => {
      r && r(t);
      let o,
        s,
        a = !1;
      return (
        Array.isArray(i)
          ? ((s = i), (a = !0))
          : ((o = i.create(e).injector), (s = o.get(de, [], { optional: !0, self: !0 }).flat())),
        { routes: s.map(Hr), injector: o }
      );
    }),
  );
}
function zs(t) {
  return t && typeof t == 'object' && 'default' in t;
}
function Li(t) {
  return zs(t) ? t.default : t;
}
function xi(t) {
  return d(t);
}
var Ht = (() => {
    class t {
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: () => h(Hs), providedIn: 'root' });
    }
    return t;
  })(),
  Hs = (() => {
    class t {
      shouldProcessUrl(e) {
        return !0;
      }
      extract(e) {
        return e;
      }
      merge(e, r) {
        return e;
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })(),
  Fr = new I(''),
  Vr = new I('');
function ki(t, n, e) {
  let r = t.get(Vr),
    i = t.get(N);
  if (!i.startViewTransition || r.skipNextTransition)
    return ((r.skipNextTransition = !1), new Promise((u) => setTimeout(u)));
  let o,
    s = new Promise((u) => {
      o = u;
    }),
    a = i.startViewTransition(() => (o(), Bs(t)));
  a.ready.catch((u) => {});
  let { onViewTransitionCreated: c } = r;
  return (c && k(t, () => c({ transition: a, from: n, to: e })), s);
}
function Bs(t) {
  return new Promise((n) => {
    En({ read: () => setTimeout(n) }, { injector: t });
  });
}
var qr = new I(''),
  Bt = (() => {
    class t {
      currentNavigation = er(null, { equal: () => !1 });
      currentTransition = null;
      lastSuccessfulNavigation = null;
      events = new Y();
      transitionAbortWithErrorSubject = new Y();
      configLoader = h(zt);
      environmentInjector = h(ne);
      destroyRef = h(dn);
      urlSerializer = h(ce);
      rootContexts = h(ue);
      location = h(ge);
      inputBindingEnabled = h(Je, { optional: !0 }) !== null;
      titleStrategy = h(Br);
      options = h(le, { optional: !0 }) || {};
      paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || 'emptyOnly';
      urlHandlingStrategy = h(Ht);
      createViewTransition = h(Fr, { optional: !0 });
      navigationErrorHandler = h(qr, { optional: !0 });
      navigationId = 0;
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      transitions;
      afterPreactivation = () => d(void 0);
      rootComponentType = null;
      destroyed = !1;
      constructor() {
        let e = (i) => this.events.next(new At(i)),
          r = (i) => this.events.next(new Mt(i));
        ((this.configLoader.onLoadEndListener = r),
          (this.configLoader.onLoadStartListener = e),
          this.destroyRef.onDestroy(() => {
            this.destroyed = !0;
          }));
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(e) {
        let r = ++this.navigationId;
        ie(() => {
          this.transitions?.next(
            L(l({}, e), {
              extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl),
              targetSnapshot: null,
              targetRouterState: null,
              guards: { canActivateChecks: [], canDeactivateChecks: [] },
              guardsResult: null,
              abortController: new AbortController(),
              id: r,
            }),
          );
        });
      }
      setupNavigations(e) {
        return (
          (this.transitions = new x(null)),
          this.transitions.pipe(
            q((r) => r !== null),
            O((r) => {
              let i = !1;
              return d(r).pipe(
                O((o) => {
                  if (this.navigationId > r.id)
                    return (this.cancelNavigationTransition(r, '', A.SupersededByNewNavigation), V);
                  ((this.currentTransition = r),
                    this.currentNavigation.set({
                      id: o.id,
                      initialUrl: o.rawUrl,
                      extractedUrl: o.extractedUrl,
                      targetBrowserUrl:
                        typeof o.extras.browserUrl == 'string'
                          ? this.urlSerializer.parse(o.extras.browserUrl)
                          : o.extras.browserUrl,
                      trigger: o.source,
                      extras: o.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? L(l({}, this.lastSuccessfulNavigation), { previousNavigation: null })
                        : null,
                      abort: () => o.abortController.abort(),
                    }));
                  let s = !e.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(),
                    a = o.extras.onSameUrlNavigation ?? e.onSameUrlNavigation;
                  if (!s && a !== 'reload')
                    return (
                      this.events.next(
                        new F(o.id, this.urlSerializer.serialize(o.rawUrl), '', we.IgnoredSameUrlNavigation),
                      ),
                      o.resolve(!1),
                      V
                    );
                  if (this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))
                    return d(o).pipe(
                      O(
                        (c) => (
                          this.events.next(
                            new J(c.id, this.urlSerializer.serialize(c.extractedUrl), c.source, c.restoredState),
                          ),
                          c.id !== this.navigationId ? V : Promise.resolve(c)
                        ),
                      ),
                      Ls(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        e.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy,
                      ),
                      T((c) => {
                        ((r.targetSnapshot = c.targetSnapshot),
                          (r.urlAfterRedirects = c.urlAfterRedirects),
                          this.currentNavigation.update((p) => ((p.finalUrl = c.urlAfterRedirects), p)));
                        let u = new Ve(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          this.urlSerializer.serialize(c.urlAfterRedirects),
                          c.targetSnapshot,
                        );
                        this.events.next(u);
                      }),
                    );
                  if (s && this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)) {
                    let { id: c, extractedUrl: u, source: p, restoredState: v, extras: S } = o,
                      b = new J(c, this.urlSerializer.serialize(u), p, v);
                    this.events.next(b);
                    let w = Ci(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = r =
                        L(l({}, o), {
                          targetSnapshot: w,
                          urlAfterRedirects: u,
                          extras: L(l({}, S), { skipLocationChange: !1, replaceUrl: !1 }),
                        })),
                      this.currentNavigation.update((_) => ((_.finalUrl = u), _)),
                      d(r)
                    );
                  } else
                    return (
                      this.events.next(
                        new F(o.id, this.urlSerializer.serialize(o.extractedUrl), '', we.IgnoredByUrlHandlingStrategy),
                      ),
                      o.resolve(!1),
                      V
                    );
                }),
                T((o) => {
                  let s = new Et(
                    o.id,
                    this.urlSerializer.serialize(o.extractedUrl),
                    this.urlSerializer.serialize(o.urlAfterRedirects),
                    o.targetSnapshot,
                  );
                  this.events.next(s);
                }),
                R(
                  (o) => (
                    (this.currentTransition = r =
                      L(l({}, o), { guards: es(o.targetSnapshot, o.currentSnapshot, this.rootContexts) })),
                    r
                  ),
                ),
                ds(this.environmentInjector, (o) => this.events.next(o)),
                T((o) => {
                  if (((r.guardsResult = o.guardsResult), o.guardsResult && typeof o.guardsResult != 'boolean'))
                    throw xt(this.urlSerializer, o.guardsResult);
                  let s = new bt(
                    o.id,
                    this.urlSerializer.serialize(o.extractedUrl),
                    this.urlSerializer.serialize(o.urlAfterRedirects),
                    o.targetSnapshot,
                    !!o.guardsResult,
                  );
                  this.events.next(s);
                }),
                q((o) => (o.guardsResult ? !0 : (this.cancelNavigationTransition(o, '', A.GuardRejected), !1))),
                Er((o) => {
                  if (o.guards.canActivateChecks.length !== 0)
                    return d(o).pipe(
                      T((s) => {
                        let a = new It(
                          s.id,
                          this.urlSerializer.serialize(s.extractedUrl),
                          this.urlSerializer.serialize(s.urlAfterRedirects),
                          s.targetSnapshot,
                        );
                        this.events.next(a);
                      }),
                      O((s) => {
                        let a = !1;
                        return d(s).pipe(
                          xs(this.paramsInheritanceStrategy, this.environmentInjector),
                          T({
                            next: () => (a = !0),
                            complete: () => {
                              a || this.cancelNavigationTransition(s, '', A.NoDataFromResolver);
                            },
                          }),
                        );
                      }),
                      T((s) => {
                        let a = new Tt(
                          s.id,
                          this.urlSerializer.serialize(s.extractedUrl),
                          this.urlSerializer.serialize(s.urlAfterRedirects),
                          s.targetSnapshot,
                        );
                        this.events.next(a);
                      }),
                    );
                }),
                Er((o) => {
                  let s = (a) => {
                    let c = [];
                    if (a.routeConfig?.loadComponent) {
                      let u = Me(a) ?? this.environmentInjector;
                      c.push(
                        this.configLoader.loadComponent(u, a.routeConfig).pipe(
                          T((p) => {
                            a.component = p;
                          }),
                          R(() => {}),
                        ),
                      );
                    }
                    for (let u of a.children) c.push(...s(u));
                    return c;
                  };
                  return it(s(o.targetSnapshot.root)).pipe(Yt(null), he(1));
                }),
                Er(() => this.afterPreactivation()),
                O(() => {
                  let { currentSnapshot: o, targetSnapshot: s } = r,
                    a = this.createViewTransition?.(this.environmentInjector, o.root, s.root);
                  return a ? M(a).pipe(R(() => r)) : d(r);
                }),
                R((o) => {
                  let s = Yo(e.routeReuseStrategy, o.targetSnapshot, o.currentRouterState);
                  return (
                    (this.currentTransition = r = L(l({}, o), { targetRouterState: s })),
                    this.currentNavigation.update((a) => ((a.targetRouterState = s), a)),
                    r
                  );
                }),
                T(() => {
                  this.events.next(new qe());
                }),
                Jo(this.rootContexts, e.routeReuseStrategy, (o) => this.events.next(o), this.inputBindingEnabled),
                he(1),
                Kt(
                  new Jr((o) => {
                    let s = r.abortController.signal,
                      a = () => o.next();
                    return (s.addEventListener('abort', a), () => s.removeEventListener('abort', a));
                  }).pipe(
                    q(() => !i && !r.targetRouterState),
                    T(() => {
                      this.cancelNavigationTransition(r, r.abortController.signal.reason + '', A.Aborted);
                    }),
                  ),
                ),
                T({
                  next: (o) => {
                    ((i = !0),
                      (this.lastSuccessfulNavigation = ie(this.currentNavigation)),
                      this.events.next(
                        new $(
                          o.id,
                          this.urlSerializer.serialize(o.extractedUrl),
                          this.urlSerializer.serialize(o.urlAfterRedirects),
                        ),
                      ),
                      this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),
                      o.resolve(!0));
                  },
                  complete: () => {
                    i = !0;
                  },
                }),
                Kt(
                  this.transitionAbortWithErrorSubject.pipe(
                    T((o) => {
                      throw o;
                    }),
                  ),
                ),
                st(() => {
                  (i || this.cancelNavigationTransition(r, '', A.SupersededByNewNavigation),
                    this.currentTransition?.id === r.id &&
                      (this.currentNavigation.set(null), (this.currentTransition = null)));
                }),
                te((o) => {
                  if (this.destroyed) return (r.resolve(!1), V);
                  if (((i = !0), Ai(o)))
                    (this.events.next(
                      new H(r.id, this.urlSerializer.serialize(r.extractedUrl), o.message, o.cancellationCode),
                    ),
                      Xo(o) ? this.events.next(new Ie(o.url, o.navigationBehaviorOptions)) : r.resolve(!1));
                  else {
                    let s = new Ee(r.id, this.urlSerializer.serialize(r.extractedUrl), o, r.targetSnapshot ?? void 0);
                    try {
                      let a = k(this.environmentInjector, () => this.navigationErrorHandler?.(s));
                      if (a instanceof Te) {
                        let { message: c, cancellationCode: u } = xt(this.urlSerializer, a);
                        (this.events.next(new H(r.id, this.urlSerializer.serialize(r.extractedUrl), c, u)),
                          this.events.next(new Ie(a.redirectTo, a.navigationBehaviorOptions)));
                      } else throw (this.events.next(s), o);
                    } catch (a) {
                      this.options.resolveNavigationPromiseOnError ? r.resolve(!1) : r.reject(a);
                    }
                  }
                  return V;
                }),
              );
            }),
          )
        );
      }
      cancelNavigationTransition(e, r, i) {
        let o = new H(e.id, this.urlSerializer.serialize(e.extractedUrl), r, i);
        (this.events.next(o), e.resolve(!1));
      }
      isUpdatingInternalState() {
        return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString();
      }
      isUpdatedBrowserUrl() {
        let e = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),
          r = ie(this.currentNavigation),
          i = r?.targetBrowserUrl ?? r?.extractedUrl;
        return e.toString() !== i?.toString() && !r?.extras.skipLocationChange;
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })();
function Fs(t) {
  return t !== Se;
}
var ji = (() => {
    class t {
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: () => h(Vs), providedIn: 'root' });
    }
    return t;
  })(),
  jt = class {
    shouldDetach(n) {
      return !1;
    }
    store(n, e) {}
    shouldAttach(n) {
      return !1;
    }
    retrieve(n) {
      return null;
    }
    shouldReuseRoute(n, e) {
      return n.routeConfig === e.routeConfig;
    }
  },
  Vs = (() => {
    class t extends jt {
      static ɵfac = (() => {
        let e;
        return function (i) {
          return (e || (e = rr(t)))(i || t);
        };
      })();
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })(),
  $i = (() => {
    class t {
      urlSerializer = h(ce);
      options = h(le, { optional: !0 }) || {};
      canceledNavigationResolution = this.options.canceledNavigationResolution || 'replace';
      location = h(ge);
      urlHandlingStrategy = h(Ht);
      urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred';
      currentUrlTree = new B();
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      rawUrlTree = this.currentUrlTree;
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      createBrowserPath({ finalUrl: e, initialUrl: r, targetBrowserUrl: i }) {
        let o = e !== void 0 ? this.urlHandlingStrategy.merge(e, r) : r,
          s = i ?? o;
        return s instanceof B ? this.urlSerializer.serialize(s) : s;
      }
      commitTransition({ targetRouterState: e, finalUrl: r, initialUrl: i }) {
        r && e
          ? ((this.currentUrlTree = r),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(r, i)),
            (this.routerState = e))
          : (this.rawUrlTree = i);
      }
      routerState = Ci(null);
      getRouterState() {
        return this.routerState;
      }
      stateMemento = this.createStateMemento();
      updateStateMemento() {
        this.stateMemento = this.createStateMemento();
      }
      createStateMemento() {
        return { rawUrlTree: this.rawUrlTree, currentUrlTree: this.currentUrlTree, routerState: this.routerState };
      }
      resetInternalState({ finalUrl: e }) {
        ((this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree)));
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: () => h(qs), providedIn: 'root' });
    }
    return t;
  })(),
  qs = (() => {
    class t extends $i {
      currentPageId = 0;
      lastSuccessfulId = -1;
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== 'computed'
          ? this.currentPageId
          : (this.restoredState()?.ɵrouterPageId ?? this.currentPageId);
      }
      registerNonRouterCurrentEntryChangeListener(e) {
        return this.location.subscribe((r) => {
          r.type === 'popstate' &&
            setTimeout(() => {
              e(r.url, r.state, 'popstate');
            });
        });
      }
      handleRouterEvent(e, r) {
        e instanceof J
          ? this.updateStateMemento()
          : e instanceof F
            ? this.commitTransition(r)
            : e instanceof Ve
              ? this.urlUpdateStrategy === 'eager' &&
                (r.extras.skipLocationChange || this.setBrowserUrl(this.createBrowserPath(r), r))
              : e instanceof qe
                ? (this.commitTransition(r),
                  this.urlUpdateStrategy === 'deferred' &&
                    !r.extras.skipLocationChange &&
                    this.setBrowserUrl(this.createBrowserPath(r), r))
                : e instanceof H && e.code !== A.SupersededByNewNavigation && e.code !== A.Redirect
                  ? this.restoreHistory(r)
                  : e instanceof Ee
                    ? this.restoreHistory(r, !0)
                    : e instanceof $ && ((this.lastSuccessfulId = e.id), (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(e, { extras: r, id: i }) {
        let { replaceUrl: o, state: s } = r;
        if (this.location.isCurrentPathEqualTo(e) || o) {
          let a = this.browserPageId,
            c = l(l({}, s), this.generateNgRouterState(i, a));
          this.location.replaceState(e, '', c);
        } else {
          let a = l(l({}, s), this.generateNgRouterState(i, this.browserPageId + 1));
          this.location.go(e, '', a);
        }
      }
      restoreHistory(e, r = !1) {
        if (this.canceledNavigationResolution === 'computed') {
          let i = this.browserPageId,
            o = this.currentPageId - i;
          o !== 0
            ? this.location.historyGo(o)
            : this.getCurrentUrlTree() === e.finalUrl &&
              o === 0 &&
              (this.resetInternalState(e), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === 'replace' &&
            (r && this.resetInternalState(e), this.resetUrlToCurrentUrlTree());
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.getRawUrlTree()),
          '',
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
        );
      }
      generateNgRouterState(e, r) {
        return this.canceledNavigationResolution === 'computed'
          ? { navigationId: e, ɵrouterPageId: r }
          : { navigationId: e };
      }
      static ɵfac = (() => {
        let e;
        return function (i) {
          return (e || (e = rr(t)))(i || t);
        };
      })();
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })();
function Ft(t, n) {
  t.events
    .pipe(
      q((e) => e instanceof $ || e instanceof H || e instanceof Ee || e instanceof F),
      R((e) =>
        e instanceof $ || e instanceof F
          ? 0
          : (e instanceof H ? e.code === A.Redirect || e.code === A.SupersededByNewNavigation : !1)
            ? 2
            : 1,
      ),
      q((e) => e !== 2),
      he(1),
    )
    .subscribe(() => {
      n();
    });
}
var Gs = { paths: 'exact', fragment: 'ignored', matrixParams: 'ignored', queryParams: 'exact' },
  Ws = { paths: 'subset', fragment: 'ignored', matrixParams: 'ignored', queryParams: 'subset' },
  Z = (() => {
    class t {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      disposed = !1;
      nonRouterCurrentEntryChangeSubscription;
      console = h(bn);
      stateManager = h($i);
      options = h(le, { optional: !0 }) || {};
      pendingTasks = h(pn);
      urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred';
      navigationTransitions = h(Bt);
      urlSerializer = h(ce);
      location = h(ge);
      urlHandlingStrategy = h(Ht);
      injector = h(ne);
      _events = new Y();
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      navigated = !1;
      routeReuseStrategy = h(ji);
      onSameUrlNavigation = this.options.onSameUrlNavigation || 'ignore';
      config = h(de, { optional: !0 })?.flat() ?? [];
      componentInputBindingEnabled = !!h(Je, { optional: !0 });
      currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
      constructor() {
        (this.resetConfig(this.config),
          this.navigationTransitions.setupNavigations(this).subscribe({
            error: (e) => {
              this.console.warn(e);
            },
          }),
          this.subscribeToNavigationEvents());
      }
      eventsSubscription = new Kr();
      subscribeToNavigationEvents() {
        let e = this.navigationTransitions.events.subscribe((r) => {
          try {
            let i = this.navigationTransitions.currentTransition,
              o = ie(this.navigationTransitions.currentNavigation);
            if (i !== null && o !== null) {
              if (
                (this.stateManager.handleRouterEvent(r, o),
                r instanceof H && r.code !== A.Redirect && r.code !== A.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (r instanceof $) this.navigated = !0;
              else if (r instanceof Ie) {
                let s = r.navigationBehaviorOptions,
                  a = this.urlHandlingStrategy.merge(r.url, i.currentRawUrl),
                  c = l(
                    {
                      browserUrl: i.extras.browserUrl,
                      info: i.extras.info,
                      skipLocationChange: i.extras.skipLocationChange,
                      replaceUrl: i.extras.replaceUrl || this.urlUpdateStrategy === 'eager' || Fs(i.source),
                    },
                    s,
                  );
                this.scheduleNavigation(a, Se, null, c, { resolve: i.resolve, reject: i.reject, promise: i.promise });
              }
            }
            qo(r) && this._events.next(r);
          } catch (i) {
            this.navigationTransitions.transitionAbortWithErrorSubject.next(i);
          }
        });
        this.eventsSubscription.add(e);
      }
      resetRootComponentType(e) {
        ((this.routerState.root.component = e), (this.navigationTransitions.rootComponentType = e));
      }
      initialNavigation() {
        (this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(this.location.path(!0), Se, this.stateManager.restoredState()));
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener(
          (e, r, i) => {
            this.navigateToSyncWithBrowser(e, i, r);
          },
        );
      }
      navigateToSyncWithBrowser(e, r, i) {
        let o = { replaceUrl: !0 },
          s = i?.navigationId ? i : null;
        if (i) {
          let c = l({}, i);
          (delete c.navigationId, delete c.ɵrouterPageId, Object.keys(c).length !== 0 && (o.state = c));
        }
        let a = this.parseUrl(e);
        this.scheduleNavigation(a, r, s, o).catch((c) => {
          this.disposed || this.injector.get(Jt)(c);
        });
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return ie(this.navigationTransitions.currentNavigation);
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(e) {
        ((this.config = e.map(Hr)), (this.navigated = !1));
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        (this._events.unsubscribe(),
          this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe());
      }
      createUrlTree(e, r = {}) {
        let { relativeTo: i, queryParams: o, fragment: s, queryParamsHandling: a, preserveFragment: c } = r,
          u = c ? this.currentUrlTree.fragment : s,
          p = null;
        switch (a ?? this.options.defaultQueryParamsHandling) {
          case 'merge':
            p = l(l({}, this.currentUrlTree.queryParams), o);
            break;
          case 'preserve':
            p = this.currentUrlTree.queryParams;
            break;
          default:
            p = o || null;
        }
        p !== null && (p = this.removeEmptyProps(p));
        let v;
        try {
          let S = i ? i.snapshot : this.routerState.snapshot.root;
          v = vi(S);
        } catch {
          ((typeof e[0] != 'string' || e[0][0] !== '/') && (e = []), (v = this.currentUrlTree.root));
        }
        return yi(v, e, p, u ?? null);
      }
      navigateByUrl(e, r = { skipLocationChange: !1 }) {
        let i = Ce(e) ? e : this.parseUrl(e),
          o = this.urlHandlingStrategy.merge(i, this.rawUrlTree);
        return this.scheduleNavigation(o, Se, null, r);
      }
      navigate(e, r = { skipLocationChange: !1 }) {
        return (Zs(e), this.navigateByUrl(this.createUrlTree(e, r), r));
      }
      serializeUrl(e) {
        return this.urlSerializer.serialize(e);
      }
      parseUrl(e) {
        try {
          return this.urlSerializer.parse(e);
        } catch {
          return this.urlSerializer.parse('/');
        }
      }
      isActive(e, r) {
        let i;
        if ((r === !0 ? (i = l({}, Gs)) : r === !1 ? (i = l({}, Ws)) : (i = r), Ce(e)))
          return Xn(this.currentUrlTree, e, i);
        let o = this.parseUrl(e);
        return Xn(this.currentUrlTree, o, i);
      }
      removeEmptyProps(e) {
        return Object.entries(e).reduce((r, [i, o]) => (o != null && (r[i] = o), r), {});
      }
      scheduleNavigation(e, r, i, o, s) {
        if (this.disposed) return Promise.resolve(!1);
        let a, c, u;
        s
          ? ((a = s.resolve), (c = s.reject), (u = s.promise))
          : (u = new Promise((v, S) => {
              ((a = v), (c = S));
            }));
        let p = this.pendingTasks.add();
        return (
          Ft(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(p));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: r,
            restoredState: i,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: e,
            extras: o,
            resolve: a,
            reject: c,
            promise: u,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          u.catch((v) => Promise.reject(v))
        );
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })();
function Zs(t) {
  for (let n = 0; n < t.length; n++) if (t[n] == null) throw new C(4008, !1);
}
var tt = class {};
var zi = (() => {
    class t {
      router;
      injector;
      preloadingStrategy;
      loader;
      subscription;
      constructor(e, r, i, o) {
        ((this.router = e), (this.injector = r), (this.preloadingStrategy = i), (this.loader = o));
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            q((e) => e instanceof $),
            re(() => this.preload()),
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(e, r) {
        let i = [];
        for (let o of r) {
          o.providers && !o._injector && (o._injector = ut(o.providers, e, `Route: ${o.path}`));
          let s = o._injector ?? e,
            a = o._loadedInjector ?? s;
          (((o.loadChildren && !o._loadedRoutes && o.canLoad === void 0) || (o.loadComponent && !o._loadedComponent)) &&
            i.push(this.preloadConfig(s, o)),
            (o.children || o._loadedRoutes) && i.push(this.processRoutes(a, o.children ?? o._loadedRoutes)));
        }
        return M(i).pipe(Zt());
      }
      preloadConfig(e, r) {
        return this.preloadingStrategy.preload(r, () => {
          let i;
          r.loadChildren && r.canLoad === void 0 ? (i = this.loader.loadChildren(e, r)) : (i = d(null));
          let o = i.pipe(
            D((s) =>
              s === null
                ? d(void 0)
                : ((r._loadedRoutes = s.routes),
                  (r._loadedInjector = s.injector),
                  this.processRoutes(s.injector ?? e, s.routes)),
            ),
          );
          if (r.loadComponent && !r._loadedComponent) {
            let s = this.loader.loadComponent(e, r);
            return M([o, s]).pipe(Zt());
          } else return o;
        });
      }
      static ɵfac = function (r) {
        return new (r || t)(g(Z), g(ne), g(tt), g(zt));
      };
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })(),
  Hi = new I(''),
  Ys = (() => {
    class t {
      urlSerializer;
      transitions;
      viewportScroller;
      zone;
      options;
      routerEventsSubscription;
      scrollEventsSubscription;
      lastId = 0;
      lastSource = Se;
      restoredId = 0;
      store = {};
      constructor(e, r, i, o, s = {}) {
        ((this.urlSerializer = e),
          (this.transitions = r),
          (this.viewportScroller = i),
          (this.zone = o),
          (this.options = s),
          (s.scrollPositionRestoration ||= 'disabled'),
          (s.anchorScrolling ||= 'disabled'));
      }
      init() {
        (this.options.scrollPositionRestoration !== 'disabled' &&
          this.viewportScroller.setHistoryScrollRestoration('manual'),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents()));
      }
      createScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof J
            ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
              (this.lastSource = e.navigationTrigger),
              (this.restoredId = e.restoredState ? e.restoredState.navigationId : 0))
            : e instanceof $
              ? ((this.lastId = e.id),
                this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment))
              : e instanceof F &&
                e.code === we.IgnoredSameUrlNavigation &&
                ((this.lastSource = void 0),
                (this.restoredId = 0),
                this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe((e) => {
          e instanceof be &&
            (e.position
              ? this.options.scrollPositionRestoration === 'top'
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === 'enabled' &&
                  this.viewportScroller.scrollToPosition(e.position)
              : e.anchor && this.options.anchorScrolling === 'enabled'
                ? this.viewportScroller.scrollToAnchor(e.anchor)
                : this.options.scrollPositionRestoration !== 'disabled' &&
                  this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(e, r) {
        this.zone.runOutsideAngular(() =>
          Qr(this, null, function* () {
            (yield new Promise((i) => {
              (setTimeout(i), typeof requestAnimationFrame < 'u' && requestAnimationFrame(i));
            }),
              this.zone.run(() => {
                this.transitions.events.next(
                  new be(e, this.lastSource === 'popstate' ? this.store[this.restoredId] : null, r),
                );
              }));
          }),
        );
      }
      ngOnDestroy() {
        (this.routerEventsSubscription?.unsubscribe(), this.scrollEventsSubscription?.unsubscribe());
      }
      static ɵfac = function (r) {
        yn();
      };
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function Wr(t, ...n) {
  return cn([
    { provide: de, multi: !0, useValue: t },
    [],
    { provide: G, useFactory: Bi, deps: [Z] },
    { provide: cr, multi: !0, useFactory: Fi },
    n.map((e) => e.ɵproviders),
  ]);
}
function Bi(t) {
  return t.routerState.root;
}
function rt(t, n) {
  return { ɵkind: t, ɵproviders: n };
}
function Fi() {
  let t = h(ct);
  return (n) => {
    let e = t.get(Tn);
    if (n !== e.components[0]) return;
    let r = t.get(Z),
      i = t.get(Vi);
    (t.get(Zr) === 1 && r.initialNavigation(),
      t.get(Wi, null, { optional: !0 })?.setUpPreloading(),
      t.get(Hi, null, { optional: !0 })?.init(),
      r.resetRootComponentType(e.componentTypes[0]),
      i.closed || (i.next(), i.complete(), i.unsubscribe()));
  };
}
var Vi = new I('', { factory: () => new Y() }),
  Zr = new I('', { providedIn: 'root', factory: () => 1 });
function qi() {
  let t = [
    { provide: mn, useValue: !0 },
    { provide: Zr, useValue: 0 },
    ar(() => {
      let n = h(ct);
      return n.get(xn, Promise.resolve()).then(
        () =>
          new Promise((r) => {
            let i = n.get(Z),
              o = n.get(Vi);
            (Ft(i, () => {
              r(!0);
            }),
              (n.get(Bt).afterPreactivation = () => (r(!0), o.closed ? d(void 0) : o)),
              i.initialNavigation());
          }),
      );
    }),
  ];
  return rt(2, t);
}
function Gi() {
  let t = [
    ar(() => {
      h(Z).setUpLocationChangeListener();
    }),
    { provide: Zr, useValue: 2 },
  ];
  return rt(3, t);
}
var Wi = new I('');
function Zi(t) {
  return rt(0, [
    { provide: Wi, useExisting: zi },
    { provide: tt, useExisting: t },
  ]);
}
function Yi() {
  return rt(8, [$r, { provide: Je, useExisting: $r }]);
}
function Qi(t) {
  Rn('NgRouterViewTransitions');
  let n = [
    { provide: Fr, useValue: ki },
    { provide: Vr, useValue: l({ skipNextTransition: !!t?.skipInitialTransition }, t) },
  ];
  return rt(9, n);
}
var Ki = [ge, { provide: ce, useClass: X }, Z, ue, { provide: G, useFactory: Bi, deps: [Z] }, zt, []],
  Yr = (() => {
    class t {
      constructor() {}
      static forRoot(e, r) {
        return {
          ngModule: t,
          providers: [
            Ki,
            [],
            { provide: de, multi: !0, useValue: e },
            [],
            r?.errorHandler ? { provide: qr, useValue: r.errorHandler } : [],
            { provide: le, useValue: r || {} },
            r?.useHash ? Ks() : Xs(),
            Qs(),
            r?.preloadingStrategy ? Zi(r.preloadingStrategy).ɵproviders : [],
            r?.initialNavigation ? Js(r) : [],
            r?.bindToComponentInputs ? Yi().ɵproviders : [],
            r?.enableViewTransitions ? Qi().ɵproviders : [],
            ea(),
          ],
        };
      }
      static forChild(e) {
        return { ngModule: t, providers: [{ provide: de, multi: !0, useValue: e }] };
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵmod = dt({ type: t });
      static ɵinj = at({});
    }
    return t;
  })();
function Qs() {
  return {
    provide: Hi,
    useFactory: () => {
      let t = h(Bn),
        n = h(fe),
        e = h(le),
        r = h(Bt),
        i = h(ce);
      return (e.scrollOffset && t.setOffset(e.scrollOffset), new Ys(i, r, t, n, e));
    },
  };
}
function Ks() {
  return { provide: lr, useClass: jn };
}
function Xs() {
  return { provide: lr, useClass: kn };
}
function Js(t) {
  return [
    t.initialNavigation === 'disabled' ? Gi().ɵproviders : [],
    t.initialNavigation === 'enabledBlocking' ? qi().ɵproviders : [],
  ];
}
var Gr = new I('');
function ea() {
  return [
    { provide: Gr, useFactory: Fi },
    { provide: cr, multi: !0, useExisting: Gr },
  ];
}
var Vt = class t {
  title = 'derfex-profile';
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = lt({
    type: t,
    selectors: [['app-root']],
    decls: 1,
    vars: 0,
    template: function (e, r) {
      e & 1 && ht(0, 'router-outlet');
    },
    dependencies: [Yr, Xe],
    styles: ['[_nghost-%COMP%]{display:block;height:100%}'],
    changeDetection: 0,
  });
};
var Xi = [{ loadComponent: () => import('./chunk-S774SQQG.js').then((t) => t.RootPageComponent), path: '' }];
var Ji = { providers: [hn(), On({ eventCoalescing: !0 }), Wr(Xi)] };
Sr(Vt, Ji).catch((t) => console.error(t));
