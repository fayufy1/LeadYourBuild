(() => {
  var t = {
      487: function () {
        "use strict";
        window.tram = (function (t) {
          function e(t, e) {
            return new z.Bare().init(t, e);
          }
          function n(t) {
            var e = parseInt(t.slice(1), 16);
            return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
          }
          function i(t, e, n) {
            return (
              "#" + (0x1000000 | (t << 16) | (e << 8) | n).toString(16).slice(1)
            );
          }
          function r() {}
          function a(t, e, n) {
            if ((void 0 !== e && (n = e), void 0 === t)) return n;
            var i = n;
            return (
              Z.test(t) || !K.test(t)
                ? (i = parseInt(t, 10))
                : K.test(t) && (i = 1e3 * parseFloat(t)),
              0 > i && (i = 0),
              i == i ? i : n
            );
          }
          function o(t) {
            U.debug && window && window.console.warn(t);
          }
          var s,
            u,
            c,
            l = (function (t, e, n) {
              function i(t) {
                return "object" == typeof t;
              }
              function r(t) {
                return "function" == typeof t;
              }
              function a() {}
              return function o(s, u) {
                function c() {
                  var t = new l();
                  return r(t.init) && t.init.apply(t, arguments), t;
                }
                function l() {}
                u === n && ((u = s), (s = Object)), (c.Bare = l);
                var d,
                  f = (a[t] = s[t]),
                  h = (l[t] = c[t] = new a());
                return (
                  (h.constructor = c),
                  (c.mixin = function (e) {
                    return (l[t] = c[t] = o(c, e)[t]), c;
                  }),
                  (c.open = function (t) {
                    if (
                      ((d = {}),
                      r(t) ? (d = t.call(c, h, f, c, s)) : i(t) && (d = t),
                      i(d))
                    )
                      for (var n in d) e.call(d, n) && (h[n] = d[n]);
                    return r(h.init) || (h.init = s), c;
                  }),
                  c.open(u)
                );
              };
            })("prototype", {}.hasOwnProperty),
            d = {
              ease: [
                "ease",
                function (t, e, n, i) {
                  var r = (t /= i) * t,
                    a = r * t;
                  return (
                    e +
                    n *
                      (-2.75 * a * r +
                        11 * r * r +
                        -15.5 * a +
                        8 * r +
                        0.25 * t)
                  );
                },
              ],
              "ease-in": [
                "ease-in",
                function (t, e, n, i) {
                  var r = (t /= i) * t,
                    a = r * t;
                  return e + n * (-1 * a * r + 3 * r * r + -3 * a + 2 * r);
                },
              ],
              "ease-out": [
                "ease-out",
                function (t, e, n, i) {
                  var r = (t /= i) * t,
                    a = r * t;
                  return (
                    e +
                    n *
                      (0.3 * a * r +
                        -1.6 * r * r +
                        2.2 * a +
                        -1.8 * r +
                        1.9 * t)
                  );
                },
              ],
              "ease-in-out": [
                "ease-in-out",
                function (t, e, n, i) {
                  var r = (t /= i) * t,
                    a = r * t;
                  return e + n * (2 * a * r + -5 * r * r + 2 * a + 2 * r);
                },
              ],
              linear: [
                "linear",
                function (t, e, n, i) {
                  return (n * t) / i + e;
                },
              ],
              "ease-in-quad": [
                "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                function (t, e, n, i) {
                  return n * (t /= i) * t + e;
                },
              ],
              "ease-out-quad": [
                "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                function (t, e, n, i) {
                  return -n * (t /= i) * (t - 2) + e;
                },
              ],
              "ease-in-out-quad": [
                "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                function (t, e, n, i) {
                  return (t /= i / 2) < 1
                    ? (n / 2) * t * t + e
                    : (-n / 2) * (--t * (t - 2) - 1) + e;
                },
              ],
              "ease-in-cubic": [
                "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                function (t, e, n, i) {
                  return n * (t /= i) * t * t + e;
                },
              ],
              "ease-out-cubic": [
                "cubic-bezier(0.215, 0.610, 0.355, 1)",
                function (t, e, n, i) {
                  return n * ((t = t / i - 1) * t * t + 1) + e;
                },
              ],
              "ease-in-out-cubic": [
                "cubic-bezier(0.645, 0.045, 0.355, 1)",
                function (t, e, n, i) {
                  return (t /= i / 2) < 1
                    ? (n / 2) * t * t * t + e
                    : (n / 2) * ((t -= 2) * t * t + 2) + e;
                },
              ],
              "ease-in-quart": [
                "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                function (t, e, n, i) {
                  return n * (t /= i) * t * t * t + e;
                },
              ],
              "ease-out-quart": [
                "cubic-bezier(0.165, 0.840, 0.440, 1)",
                function (t, e, n, i) {
                  return -n * ((t = t / i - 1) * t * t * t - 1) + e;
                },
              ],
              "ease-in-out-quart": [
                "cubic-bezier(0.770, 0, 0.175, 1)",
                function (t, e, n, i) {
                  return (t /= i / 2) < 1
                    ? (n / 2) * t * t * t * t + e
                    : (-n / 2) * ((t -= 2) * t * t * t - 2) + e;
                },
              ],
              "ease-in-quint": [
                "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                function (t, e, n, i) {
                  return n * (t /= i) * t * t * t * t + e;
                },
              ],
              "ease-out-quint": [
                "cubic-bezier(0.230, 1, 0.320, 1)",
                function (t, e, n, i) {
                  return n * ((t = t / i - 1) * t * t * t * t + 1) + e;
                },
              ],
              "ease-in-out-quint": [
                "cubic-bezier(0.860, 0, 0.070, 1)",
                function (t, e, n, i) {
                  return (t /= i / 2) < 1
                    ? (n / 2) * t * t * t * t * t + e
                    : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
                },
              ],
              "ease-in-sine": [
                "cubic-bezier(0.470, 0, 0.745, 0.715)",
                function (t, e, n, i) {
                  return -n * Math.cos((t / i) * (Math.PI / 2)) + n + e;
                },
              ],
              "ease-out-sine": [
                "cubic-bezier(0.390, 0.575, 0.565, 1)",
                function (t, e, n, i) {
                  return n * Math.sin((t / i) * (Math.PI / 2)) + e;
                },
              ],
              "ease-in-out-sine": [
                "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                function (t, e, n, i) {
                  return (-n / 2) * (Math.cos((Math.PI * t) / i) - 1) + e;
                },
              ],
              "ease-in-expo": [
                "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                function (t, e, n, i) {
                  return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e;
                },
              ],
              "ease-out-expo": [
                "cubic-bezier(0.190, 1, 0.220, 1)",
                function (t, e, n, i) {
                  return t === i
                    ? e + n
                    : n * (-Math.pow(2, (-10 * t) / i) + 1) + e;
                },
              ],
              "ease-in-out-expo": [
                "cubic-bezier(1, 0, 0, 1)",
                function (t, e, n, i) {
                  return 0 === t
                    ? e
                    : t === i
                    ? e + n
                    : (t /= i / 2) < 1
                    ? (n / 2) * Math.pow(2, 10 * (t - 1)) + e
                    : (n / 2) * (-Math.pow(2, -10 * --t) + 2) + e;
                },
              ],
              "ease-in-circ": [
                "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                function (t, e, n, i) {
                  return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e;
                },
              ],
              "ease-out-circ": [
                "cubic-bezier(0.075, 0.820, 0.165, 1)",
                function (t, e, n, i) {
                  return n * Math.sqrt(1 - (t = t / i - 1) * t) + e;
                },
              ],
              "ease-in-out-circ": [
                "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                function (t, e, n, i) {
                  return (t /= i / 2) < 1
                    ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + e
                    : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
                },
              ],
              "ease-in-back": [
                "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                function (t, e, n, i, r) {
                  return (
                    void 0 === r && (r = 1.70158),
                    n * (t /= i) * t * ((r + 1) * t - r) + e
                  );
                },
              ],
              "ease-out-back": [
                "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                function (t, e, n, i, r) {
                  return (
                    void 0 === r && (r = 1.70158),
                    n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e
                  );
                },
              ],
              "ease-in-out-back": [
                "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                function (t, e, n, i, r) {
                  return (
                    void 0 === r && (r = 1.70158),
                    (t /= i / 2) < 1
                      ? (n / 2) * t * t * (((r *= 1.525) + 1) * t - r) + e
                      : (n / 2) *
                          ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) +
                        e
                  );
                },
              ],
            },
            f = {
              "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
              "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
              "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
            },
            h = window,
            p = "bkwld-tram",
            v = /[\-\.0-9]/g,
            m = /[A-Z]/,
            w = "number",
            g = /^(rgb|#)/,
            b = /(em|cm|mm|in|pt|pc|px)$/,
            y = /(em|cm|mm|in|pt|pc|px|%)$/,
            x = /(deg|rad|turn)$/,
            k = "unitless",
            E = /(all|none) 0s ease 0s/,
            _ = /^(width|height)$/,
            T = document.createElement("a"),
            A = ["Webkit", "Moz", "O", "ms"],
            O = ["-webkit-", "-moz-", "-o-", "-ms-"],
            L = function (t) {
              if (t in T.style) return { dom: t, css: t };
              var e,
                n,
                i = "",
                r = t.split("-");
              for (e = 0; e < r.length; e++)
                i += r[e].charAt(0).toUpperCase() + r[e].slice(1);
              for (e = 0; e < A.length; e++)
                if ((n = A[e] + i) in T.style) return { dom: n, css: O[e] + t };
            },
            C = (e.support = {
              bind: Function.prototype.bind,
              transform: L("transform"),
              transition: L("transition"),
              backface: L("backface-visibility"),
              timing: L("transition-timing-function"),
            });
          if (C.transition) {
            var R = C.timing.dom;
            if (((T.style[R] = d["ease-in-back"][0]), !T.style[R]))
              for (var I in f) d[I][0] = f[I];
          }
          var D = (e.frame =
              (s =
                h.requestAnimationFrame ||
                h.webkitRequestAnimationFrame ||
                h.mozRequestAnimationFrame ||
                h.oRequestAnimationFrame ||
                h.msRequestAnimationFrame) && C.bind
                ? s.bind(h)
                : function (t) {
                    h.setTimeout(t, 16);
                  }),
            $ = (e.now =
              (c =
                (u = h.performance) &&
                (u.now || u.webkitNow || u.msNow || u.mozNow)) && C.bind
                ? c.bind(u)
                : Date.now ||
                  function () {
                    return +new Date();
                  }),
            N = l(function (e) {
              function n(t, e) {
                var n = (function (t) {
                    for (var e = -1, n = t ? t.length : 0, i = []; ++e < n; ) {
                      var r = t[e];
                      r && i.push(r);
                    }
                    return i;
                  })(("" + t).split(" ")),
                  i = n[0];
                e = e || {};
                var r = B[i];
                if (!r) return o("Unsupported property: " + i);
                if (!e.weak || !this.props[i]) {
                  var a = r[0],
                    s = this.props[i];
                  return (
                    s || (s = this.props[i] = new a.Bare()),
                    s.init(this.$el, n, r, e),
                    s
                  );
                }
              }
              function i(t, e, i) {
                if (t) {
                  var o = typeof t;
                  if (
                    (e ||
                      (this.timer && this.timer.destroy(),
                      (this.queue = []),
                      (this.active = !1)),
                    "number" == o && e)
                  )
                    return (
                      (this.timer = new j({
                        duration: t,
                        context: this,
                        complete: r,
                      })),
                      void (this.active = !0)
                    );
                  if ("string" == o && e) {
                    switch (t) {
                      case "hide":
                        u.call(this);
                        break;
                      case "stop":
                        s.call(this);
                        break;
                      case "redraw":
                        c.call(this);
                        break;
                      default:
                        n.call(this, t, i && i[1]);
                    }
                    return r.call(this);
                  }
                  if ("function" == o) return void t.call(this, this);
                  if ("object" == o) {
                    var f = 0;
                    d.call(
                      this,
                      t,
                      function (t, e) {
                        t.span > f && (f = t.span), t.stop(), t.animate(e);
                      },
                      function (t) {
                        "wait" in t && (f = a(t.wait, 0));
                      }
                    ),
                      l.call(this),
                      f > 0 &&
                        ((this.timer = new j({ duration: f, context: this })),
                        (this.active = !0),
                        e && (this.timer.complete = r));
                    var h = this,
                      p = !1,
                      v = {};
                    D(function () {
                      d.call(h, t, function (t) {
                        t.active && ((p = !0), (v[t.name] = t.nextStyle));
                      }),
                        p && h.$el.css(v);
                    });
                  }
                }
              }
              function r() {
                if (
                  (this.timer && this.timer.destroy(),
                  (this.active = !1),
                  this.queue.length)
                ) {
                  var t = this.queue.shift();
                  i.call(this, t.options, !0, t.args);
                }
              }
              function s(t) {
                var e;
                this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1),
                  "string" == typeof t
                    ? ((e = {})[t] = 1)
                    : (e = "object" == typeof t && null != t ? t : this.props),
                  d.call(this, e, f),
                  l.call(this);
              }
              function u() {
                s.call(this), (this.el.style.display = "none");
              }
              function c() {
                this.el.offsetHeight;
              }
              function l() {
                var t,
                  e,
                  n = [];
                for (t in (this.upstream && n.push(this.upstream), this.props))
                  (e = this.props[t]).active && n.push(e.string);
                (n = n.join(",")),
                  this.style !== n &&
                    ((this.style = n), (this.el.style[C.transition.dom] = n));
              }
              function d(t, e, i) {
                var r,
                  a,
                  o,
                  s,
                  u = e !== f,
                  c = {};
                for (r in t)
                  (o = t[r]),
                    r in Y
                      ? (c.transform || (c.transform = {}),
                        (c.transform[r] = o))
                      : (m.test(r) &&
                          (r = r.replace(/[A-Z]/g, function (t) {
                            return "-" + t.toLowerCase();
                          })),
                        r in B ? (c[r] = o) : (s || (s = {}), (s[r] = o)));
                for (r in c) {
                  if (((o = c[r]), !(a = this.props[r]))) {
                    if (!u) continue;
                    a = n.call(this, r);
                  }
                  e.call(this, a, o);
                }
                i && s && i.call(this, s);
              }
              function f(t) {
                t.stop();
              }
              function h(t, e) {
                t.set(e);
              }
              function v(t) {
                this.$el.css(t);
              }
              function w(t, n) {
                e[t] = function () {
                  return this.children
                    ? g.call(this, n, arguments)
                    : (this.el && n.apply(this, arguments), this);
                };
              }
              function g(t, e) {
                var n,
                  i = this.children.length;
                for (n = 0; i > n; n++) t.apply(this.children[n], e);
                return this;
              }
              (e.init = function (e) {
                if (
                  ((this.$el = t(e)),
                  (this.el = this.$el[0]),
                  (this.props = {}),
                  (this.queue = []),
                  (this.style = ""),
                  (this.active = !1),
                  U.keepInherited && !U.fallback)
                ) {
                  var n = G(this.el, "transition");
                  n && !E.test(n) && (this.upstream = n);
                }
                C.backface &&
                  U.hideBackface &&
                  H(this.el, C.backface.css, "hidden");
              }),
                w("add", n),
                w("start", i),
                w("wait", function (t) {
                  (t = a(t, 0)),
                    this.active
                      ? this.queue.push({ options: t })
                      : ((this.timer = new j({
                          duration: t,
                          context: this,
                          complete: r,
                        })),
                        (this.active = !0));
                }),
                w("then", function (t) {
                  return this.active
                    ? (this.queue.push({ options: t, args: arguments }),
                      void (this.timer.complete = r))
                    : o(
                        "No active transition timer. Use start() or wait() before then()."
                      );
                }),
                w("next", r),
                w("stop", s),
                w("set", function (t) {
                  s.call(this, t), d.call(this, t, h, v);
                }),
                w("show", function (t) {
                  "string" != typeof t && (t = "block"),
                    (this.el.style.display = t);
                }),
                w("hide", u),
                w("redraw", c),
                w("destroy", function () {
                  s.call(this),
                    t.removeData(this.el, p),
                    (this.$el = this.el = null);
                });
            }),
            z = l(N, function (e) {
              function n(e, n) {
                var i = t.data(e, p) || t.data(e, p, new N.Bare());
                return i.el || i.init(e), n ? i.start(n) : i;
              }
              e.init = function (e, i) {
                var r = t(e);
                if (!r.length) return this;
                if (1 === r.length) return n(r[0], i);
                var a = [];
                return (
                  r.each(function (t, e) {
                    a.push(n(e, i));
                  }),
                  (this.children = a),
                  this
                );
              };
            }),
            M = l(function (t) {
              function e() {
                var t = this.get();
                this.update("auto");
                var e = this.get();
                return this.update(t), e;
              }
              var n = 500,
                r = "ease",
                s = 0;
              (t.init = function (t, e, i, o) {
                (this.$el = t), (this.el = t[0]);
                var u,
                  c,
                  l,
                  f = e[0];
                i[2] && (f = i[2]),
                  X[f] && (f = X[f]),
                  (this.name = f),
                  (this.type = i[1]),
                  (this.duration = a(e[1], this.duration, n)),
                  (this.ease =
                    ((u = e[2]),
                    (c = this.ease),
                    (l = r),
                    void 0 !== c && (l = c),
                    u in d ? u : l)),
                  (this.delay = a(e[3], this.delay, s)),
                  (this.span = this.duration + this.delay),
                  (this.active = !1),
                  (this.nextStyle = null),
                  (this.auto = _.test(this.name)),
                  (this.unit = o.unit || this.unit || U.defaultUnit),
                  (this.angle = o.angle || this.angle || U.defaultAngle),
                  U.fallback || o.fallback
                    ? (this.animate = this.fallback)
                    : ((this.animate = this.transition),
                      (this.string =
                        this.name +
                        " " +
                        this.duration +
                        "ms" +
                        ("ease" != this.ease ? " " + d[this.ease][0] : "") +
                        (this.delay ? " " + this.delay + "ms" : "")));
              }),
                (t.set = function (t) {
                  (t = this.convert(t, this.type)),
                    this.update(t),
                    this.redraw();
                }),
                (t.transition = function (t) {
                  (this.active = !0),
                    (t = this.convert(t, this.type)),
                    this.auto &&
                      ("auto" == this.el.style[this.name] &&
                        (this.update(this.get()), this.redraw()),
                      "auto" == t && (t = e.call(this))),
                    (this.nextStyle = t);
                }),
                (t.fallback = function (t) {
                  var n =
                    this.el.style[this.name] ||
                    this.convert(this.get(), this.type);
                  (t = this.convert(t, this.type)),
                    this.auto &&
                      ("auto" == n && (n = this.convert(this.get(), this.type)),
                      "auto" == t && (t = e.call(this))),
                    (this.tween = new W({
                      from: n,
                      to: t,
                      duration: this.duration,
                      delay: this.delay,
                      ease: this.ease,
                      update: this.update,
                      context: this,
                    }));
                }),
                (t.get = function () {
                  return G(this.el, this.name);
                }),
                (t.update = function (t) {
                  H(this.el, this.name, t);
                }),
                (t.stop = function () {
                  (this.active || this.nextStyle) &&
                    ((this.active = !1),
                    (this.nextStyle = null),
                    H(this.el, this.name, this.get()));
                  var t = this.tween;
                  t && t.context && t.destroy();
                }),
                (t.convert = function (t, e) {
                  if ("auto" == t && this.auto) return t;
                  var n,
                    r,
                    a,
                    s,
                    u = "number" == typeof t,
                    c = "string" == typeof t;
                  switch (e) {
                    case w:
                      if (u) return t;
                      if (c && "" === t.replace(v, "")) return +t;
                      s = "number(unitless)";
                      break;
                    case g:
                      if (c) {
                        if ("" === t && this.original) return this.original;
                        if (e.test(t)) {
                          return "#" == t.charAt(0) && 7 == t.length
                            ? t
                            : ((n = t),
                              ((r = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(n))
                                ? i(r[1], r[2], r[3])
                                : n
                              ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3"));
                        }
                      }
                      s = "hex or rgb string";
                      break;
                    case b:
                      if (u) return t + this.unit;
                      if (c && e.test(t)) return t;
                      s = "number(px) or string(unit)";
                      break;
                    case y:
                      if (u) return t + this.unit;
                      if (c && e.test(t)) return t;
                      s = "number(px) or string(unit or %)";
                      break;
                    case x:
                      if (u) return t + this.angle;
                      if (c && e.test(t)) return t;
                      s = "number(deg) or string(angle)";
                      break;
                    case k:
                      if (u || (c && y.test(t))) return t;
                      s = "number(unitless) or string(unit or %)";
                  }
                  return (
                    o(
                      "Type warning: Expected: [" +
                        s +
                        "] Got: [" +
                        typeof (a = t) +
                        "] " +
                        a
                    ),
                    t
                  );
                }),
                (t.redraw = function () {
                  this.el.offsetHeight;
                });
            }),
            S = l(M, function (t, e) {
              t.init = function () {
                e.init.apply(this, arguments),
                  this.original ||
                    (this.original = this.convert(this.get(), g));
              };
            }),
            P = l(M, function (t, e) {
              (t.init = function () {
                e.init.apply(this, arguments), (this.animate = this.fallback);
              }),
                (t.get = function () {
                  return this.$el[this.name]();
                }),
                (t.update = function (t) {
                  this.$el[this.name](t);
                });
            }),
            F = l(M, function (t, e) {
              function n(t, e) {
                var n, i, r, a, o;
                for (n in t)
                  (r = (a = Y[n])[0]),
                    (i = a[1] || n),
                    (o = this.convert(t[n], r)),
                    e.call(this, i, o, r);
              }
              (t.init = function () {
                e.init.apply(this, arguments),
                  this.current ||
                    ((this.current = {}),
                    Y.perspective &&
                      U.perspective &&
                      ((this.current.perspective = U.perspective),
                      H(this.el, this.name, this.style(this.current)),
                      this.redraw()));
              }),
                (t.set = function (t) {
                  n.call(this, t, function (t, e) {
                    this.current[t] = e;
                  }),
                    H(this.el, this.name, this.style(this.current)),
                    this.redraw();
                }),
                (t.transition = function (t) {
                  var e = this.values(t);
                  this.tween = new q({
                    current: this.current,
                    values: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                  });
                  var n,
                    i = {};
                  for (n in this.current)
                    i[n] = n in e ? e[n] : this.current[n];
                  (this.active = !0), (this.nextStyle = this.style(i));
                }),
                (t.fallback = function (t) {
                  var e = this.values(t);
                  this.tween = new q({
                    current: this.current,
                    values: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  });
                }),
                (t.update = function () {
                  H(this.el, this.name, this.style(this.current));
                }),
                (t.style = function (t) {
                  var e,
                    n = "";
                  for (e in t) n += e + "(" + t[e] + ") ";
                  return n;
                }),
                (t.values = function (t) {
                  var e,
                    i = {};
                  return (
                    n.call(this, t, function (t, n, r) {
                      (i[t] = n),
                        void 0 === this.current[t] &&
                          ((e = 0),
                          ~t.indexOf("scale") && (e = 1),
                          (this.current[t] = this.convert(e, r)));
                    }),
                    i
                  );
                });
            }),
            W = l(function (e) {
              function a() {
                var t,
                  e,
                  n,
                  i = u.length;
                if (i)
                  for (D(a), e = $(), t = i; t--; ) (n = u[t]) && n.render(e);
              }
              var s = { ease: d.ease[1], from: 0, to: 1 };
              (e.init = function (t) {
                (this.duration = t.duration || 0), (this.delay = t.delay || 0);
                var e = t.ease || s.ease;
                d[e] && (e = d[e][1]),
                  "function" != typeof e && (e = s.ease),
                  (this.ease = e),
                  (this.update = t.update || r),
                  (this.complete = t.complete || r),
                  (this.context = t.context || this),
                  (this.name = t.name);
                var n = t.from,
                  i = t.to;
                void 0 === n && (n = s.from),
                  void 0 === i && (i = s.to),
                  (this.unit = t.unit || ""),
                  "number" == typeof n && "number" == typeof i
                    ? ((this.begin = n), (this.change = i - n))
                    : this.format(i, n),
                  (this.value = this.begin + this.unit),
                  (this.start = $()),
                  !1 !== t.autoplay && this.play();
              }),
                (e.play = function () {
                  var t;
                  this.active ||
                    (this.start || (this.start = $()),
                    (this.active = !0),
                    (t = this),
                    1 === u.push(t) && D(a));
                }),
                (e.stop = function () {
                  var e, n, i;
                  this.active &&
                    ((this.active = !1),
                    (e = this),
                    (i = t.inArray(e, u)) >= 0 &&
                      ((n = u.slice(i + 1)),
                      (u.length = i),
                      n.length && (u = u.concat(n))));
                }),
                (e.render = function (t) {
                  var e,
                    n = t - this.start;
                  if (this.delay) {
                    if (n <= this.delay) return;
                    n -= this.delay;
                  }
                  if (n < this.duration) {
                    var r,
                      a,
                      o,
                      s = this.ease(n, 0, 1, this.duration);
                    return (
                      (e = this.startRGB
                        ? ((r = this.startRGB),
                          (a = this.endRGB),
                          (o = s),
                          i(
                            r[0] + o * (a[0] - r[0]),
                            r[1] + o * (a[1] - r[1]),
                            r[2] + o * (a[2] - r[2])
                          ))
                        : Math.round((this.begin + s * this.change) * c) / c),
                      (this.value = e + this.unit),
                      void this.update.call(this.context, this.value)
                    );
                  }
                  (e = this.endHex || this.begin + this.change),
                    (this.value = e + this.unit),
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy();
                }),
                (e.format = function (t, e) {
                  if (((e += ""), "#" == (t += "").charAt(0)))
                    return (
                      (this.startRGB = n(e)),
                      (this.endRGB = n(t)),
                      (this.endHex = t),
                      (this.begin = 0),
                      void (this.change = 1)
                    );
                  if (!this.unit) {
                    var i = e.replace(v, "");
                    i !== t.replace(v, "") &&
                      o("Units do not match [tween]: " + e + ", " + t),
                      (this.unit = i);
                  }
                  (e = parseFloat(e)),
                    (t = parseFloat(t)),
                    (this.begin = this.value = e),
                    (this.change = t - e);
                }),
                (e.destroy = function () {
                  this.stop(),
                    (this.context = null),
                    (this.ease = this.update = this.complete = r);
                });
              var u = [],
                c = 1e3;
            }),
            j = l(W, function (t) {
              (t.init = function (t) {
                (this.duration = t.duration || 0),
                  (this.complete = t.complete || r),
                  (this.context = t.context),
                  this.play();
              }),
                (t.render = function (t) {
                  t - this.start < this.duration ||
                    (this.complete.call(this.context), this.destroy());
                });
            }),
            q = l(W, function (t, e) {
              (t.init = function (t) {
                var e, n;
                for (e in ((this.context = t.context),
                (this.update = t.update),
                (this.tweens = []),
                (this.current = t.current),
                t.values))
                  (n = t.values[e]),
                    this.current[e] !== n &&
                      this.tweens.push(
                        new W({
                          name: e,
                          from: this.current[e],
                          to: n,
                          duration: t.duration,
                          delay: t.delay,
                          ease: t.ease,
                          autoplay: !1,
                        })
                      );
                this.play();
              }),
                (t.render = function (t) {
                  var e,
                    n,
                    i = this.tweens.length,
                    r = !1;
                  for (e = i; e--; )
                    (n = this.tweens[e]).context &&
                      (n.render(t), (this.current[n.name] = n.value), (r = !0));
                  return r
                    ? void (this.update && this.update.call(this.context))
                    : this.destroy();
                }),
                (t.destroy = function () {
                  if ((e.destroy.call(this), this.tweens)) {
                    var t, n;
                    for (t = this.tweens.length; t--; )
                      this.tweens[t].destroy();
                    (this.tweens = null), (this.current = null);
                  }
                });
            }),
            U = (e.config = {
              debug: !1,
              defaultUnit: "px",
              defaultAngle: "deg",
              keepInherited: !1,
              hideBackface: !1,
              perspective: "",
              fallback: !C.transition,
              agentTests: [],
            });
          (e.fallback = function (t) {
            if (!C.transition) return (U.fallback = !0);
            U.agentTests.push("(" + t + ")");
            var e = RegExp(U.agentTests.join("|"), "i");
            U.fallback = e.test(navigator.userAgent);
          }),
            e.fallback("6.0.[2-5] Safari"),
            (e.tween = function (t) {
              return new W(t);
            }),
            (e.delay = function (t, e, n) {
              return new j({ complete: e, duration: t, context: n });
            }),
            (t.fn.tram = function (t) {
              return e.call(null, this, t);
            });
          var H = t.style,
            G = t.css,
            X = { transform: C.transform && C.transform.css },
            B = {
              color: [S, g],
              background: [S, g, "background-color"],
              "outline-color": [S, g],
              "border-color": [S, g],
              "border-top-color": [S, g],
              "border-right-color": [S, g],
              "border-bottom-color": [S, g],
              "border-left-color": [S, g],
              "border-width": [M, b],
              "border-top-width": [M, b],
              "border-right-width": [M, b],
              "border-bottom-width": [M, b],
              "border-left-width": [M, b],
              "border-spacing": [M, b],
              "letter-spacing": [M, b],
              margin: [M, b],
              "margin-top": [M, b],
              "margin-right": [M, b],
              "margin-bottom": [M, b],
              "margin-left": [M, b],
              padding: [M, b],
              "padding-top": [M, b],
              "padding-right": [M, b],
              "padding-bottom": [M, b],
              "padding-left": [M, b],
              "outline-width": [M, b],
              opacity: [M, w],
              top: [M, y],
              right: [M, y],
              bottom: [M, y],
              left: [M, y],
              "font-size": [M, y],
              "text-indent": [M, y],
              "word-spacing": [M, y],
              width: [M, y],
              "min-width": [M, y],
              "max-width": [M, y],
              height: [M, y],
              "min-height": [M, y],
              "max-height": [M, y],
              "line-height": [M, k],
              "scroll-top": [P, w, "scrollTop"],
              "scroll-left": [P, w, "scrollLeft"],
            },
            Y = {};
          C.transform &&
            ((B.transform = [F]),
            (Y = {
              x: [y, "translateX"],
              y: [y, "translateY"],
              rotate: [x],
              rotateX: [x],
              rotateY: [x],
              scale: [w],
              scaleX: [w],
              scaleY: [w],
              skew: [x],
              skewX: [x],
              skewY: [x],
            })),
            C.transform &&
              C.backface &&
              ((Y.z = [y, "translateZ"]),
              (Y.rotateZ = [x]),
              (Y.scaleZ = [w]),
              (Y.perspective = [b]));
          var Z = /ms/,
            K = /s|\./;
          return (t.tram = e);
        })(window.jQuery);
      },
      756: function (t, e, n) {
        "use strict";
        var i,
          r,
          a,
          o,
          s,
          u,
          c,
          l,
          d,
          f,
          h,
          p,
          v,
          m,
          w,
          g,
          b,
          y,
          x,
          k,
          E = window.$,
          _ = n(487) && E.tram;
        t.exports =
          (((i = {}).VERSION = "1.6.0-Webflow"),
          (r = {}),
          (a = Array.prototype),
          (o = Object.prototype),
          (s = Function.prototype),
          a.push,
          (u = a.slice),
          (c = (a.concat, o.toString, o.hasOwnProperty)),
          (l = a.forEach),
          (d = a.map),
          (f = (a.reduce, a.reduceRight, a.filter)),
          (h = (a.every, a.some)),
          (p = a.indexOf),
          (v = (a.lastIndexOf, Object.keys)),
          s.bind,
          (m =
            i.each =
            i.forEach =
              function (t, e, n) {
                if (null == t) return t;
                if (l && t.forEach === l) t.forEach(e, n);
                else if (t.length === +t.length) {
                  for (var a = 0, o = t.length; a < o; a++)
                    if (e.call(n, t[a], a, t) === r) return;
                } else {
                  for (var s = i.keys(t), a = 0, o = s.length; a < o; a++)
                    if (e.call(n, t[s[a]], s[a], t) === r) return;
                }
                return t;
              }),
          (i.map = i.collect =
            function (t, e, n) {
              var i = [];
              return null == t
                ? i
                : d && t.map === d
                ? t.map(e, n)
                : (m(t, function (t, r, a) {
                    i.push(e.call(n, t, r, a));
                  }),
                  i);
            }),
          (i.find = i.detect =
            function (t, e, n) {
              var i;
              return (
                w(t, function (t, r, a) {
                  if (e.call(n, t, r, a)) return (i = t), !0;
                }),
                i
              );
            }),
          (i.filter = i.select =
            function (t, e, n) {
              var i = [];
              return null == t
                ? i
                : f && t.filter === f
                ? t.filter(e, n)
                : (m(t, function (t, r, a) {
                    e.call(n, t, r, a) && i.push(t);
                  }),
                  i);
            }),
          (w =
            i.some =
            i.any =
              function (t, e, n) {
                e || (e = i.identity);
                var a = !1;
                return null == t
                  ? a
                  : h && t.some === h
                  ? t.some(e, n)
                  : (m(t, function (t, i, o) {
                      if (a || (a = e.call(n, t, i, o))) return r;
                    }),
                    !!a);
              }),
          (i.contains = i.include =
            function (t, e) {
              return (
                null != t &&
                (p && t.indexOf === p
                  ? -1 != t.indexOf(e)
                  : w(t, function (t) {
                      return t === e;
                    }))
              );
            }),
          (i.delay = function (t, e) {
            var n = u.call(arguments, 2);
            return setTimeout(function () {
              return t.apply(null, n);
            }, e);
          }),
          (i.defer = function (t) {
            return i.delay.apply(i, [t, 1].concat(u.call(arguments, 1)));
          }),
          (i.throttle = function (t) {
            var e, n, i;
            return function () {
              !e &&
                ((e = !0),
                (n = arguments),
                (i = this),
                _.frame(function () {
                  (e = !1), t.apply(i, n);
                }));
            };
          }),
          (i.debounce = function (t, e, n) {
            var r,
              a,
              o,
              s,
              u,
              c = function () {
                var l = i.now() - s;
                l < e
                  ? (r = setTimeout(c, e - l))
                  : ((r = null), !n && ((u = t.apply(o, a)), (o = a = null)));
              };
            return function () {
              (o = this), (a = arguments), (s = i.now());
              var l = n && !r;
              return (
                !r && (r = setTimeout(c, e)),
                l && ((u = t.apply(o, a)), (o = a = null)),
                u
              );
            };
          }),
          (i.defaults = function (t) {
            if (!i.isObject(t)) return t;
            for (var e = 1, n = arguments.length; e < n; e++) {
              var r = arguments[e];
              for (var a in r) void 0 === t[a] && (t[a] = r[a]);
            }
            return t;
          }),
          (i.keys = function (t) {
            if (!i.isObject(t)) return [];
            if (v) return v(t);
            var e = [];
            for (var n in t) i.has(t, n) && e.push(n);
            return e;
          }),
          (i.has = function (t, e) {
            return c.call(t, e);
          }),
          (i.isObject = function (t) {
            return t === Object(t);
          }),
          (i.now =
            Date.now ||
            function () {
              return new Date().getTime();
            }),
          (i.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g,
          }),
          (g = /(.)^/),
          (b = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029",
          }),
          (y = /\\|'|\r|\n|\u2028|\u2029/g),
          (x = function (t) {
            return "\\" + b[t];
          }),
          (k = /^\s*(\w|\$)+\s*$/),
          (i.template = function (t, e, n) {
            !e && n && (e = n);
            var r,
              a = RegExp(
                [
                  ((e = i.defaults({}, e, i.templateSettings)).escape || g)
                    .source,
                  (e.interpolate || g).source,
                  (e.evaluate || g).source,
                ].join("|") + "|$",
                "g"
              ),
              o = 0,
              s = "__p+='";
            t.replace(a, function (e, n, i, r, a) {
              return (
                (s += t.slice(o, a).replace(y, x)),
                (o = a + e.length),
                n
                  ? (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                  : i
                  ? (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                  : r && (s += "';\n" + r + "\n__p+='"),
                e
              );
            }),
              (s += "';\n");
            var u = e.variable;
            if (u) {
              if (!k.test(u))
                throw Error("variable is not a bare identifier: " + u);
            } else (s = "with(obj||{}){\n" + s + "}\n"), (u = "obj");
            s =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              s +
              "return __p;\n";
            try {
              r = Function(e.variable || "obj", "_", s);
            } catch (t) {
              throw ((t.source = s), t);
            }
            var c = function (t) {
              return r.call(this, t, i);
            };
            return (c.source = "function(" + u + "){\n" + s + "}"), c;
          }),
          i);
      },
      461: function (t, e, n) {
        "use strict";
        var i = n(949);
        i.define(
          "brand",
          (t.exports = function (t) {
            var e,
              n = {},
              r = document,
              a = t("html"),
              o = t("body"),
              s = window.location,
              u = /PhantomJS/i.test(navigator.userAgent),
              c =
                "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
            function l() {
              var n =
                r.fullScreen ||
                r.mozFullScreen ||
                r.webkitIsFullScreen ||
                r.msFullscreenElement ||
                !!r.webkitFullscreenElement;
              t(e).attr("style", n ? "display: none !important;" : "");
            }
            function d() {
              var t = o.children(".w-webflow-badge"),
                n = t.length && t.get(0) === e,
                r = i.env("editor");
              if (n) {
                r && t.remove();
                return;
              }
              t.length && t.remove(), !r && o.append(e);
            }
            return n;
          })
        );
      },
      322: function (t, e, n) {
        "use strict";
        var i = n(949);
        i.define(
          "edit",
          (t.exports = function (t, e, n) {
            if (
              ((n = n || {}),
              (i.env("test") || i.env("frame")) &&
                !n.fixture &&
                !(function () {
                  try {
                    return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                  } catch (t) {
                    return !1;
                  }
                })())
            )
              return { exit: 1 };
            var r,
              a = t(window),
              o = t(document.documentElement),
              s = document.location,
              u = "hashchange",
              c =
                n.load ||
                function () {
                  (r = !0),
                    (window.WebflowEditor = !0),
                    a.off(u, d),
                    (function (t) {
                      var e = window.document.createElement("iframe");
                      (e.src =
                        "https://webflow.com/site/third-party-cookie-check.html"),
                        (e.style.display = "none"),
                        (e.sandbox = "allow-scripts allow-same-origin");
                      var n = function (i) {
                        "WF_third_party_cookies_unsupported" === i.data
                          ? (p(e, n), t(!1))
                          : "WF_third_party_cookies_supported" === i.data &&
                            (p(e, n), t(!0));
                      };
                      (e.onerror = function () {
                        p(e, n), t(!1);
                      }),
                        window.addEventListener("message", n, !1),
                        window.document.body.appendChild(e);
                    })(function (e) {
                      t.ajax({
                        url: h(
                          "https://editor-api.webflow.com/api/editor/view"
                        ),
                        data: { siteId: o.attr("data-wf-site") },
                        xhrFields: { withCredentials: !0 },
                        dataType: "json",
                        crossDomain: !0,
                        success: (function (e) {
                          return function (n) {
                            if (!n) {
                              console.error("Could not load editor data");
                              return;
                            }
                            (n.thirdPartyCookiesSupported = e),
                              (function (e, n) {
                                t.ajax({
                                  type: "GET",
                                  url: e,
                                  dataType: "script",
                                  cache: !0,
                                }).then(n, f);
                              })(
                                (function (t) {
                                  return t.indexOf("//") >= 0
                                    ? t
                                    : h("https://editor-api.webflow.com" + t);
                                })(n.scriptPath),
                                function () {
                                  window.WebflowEditor(n);
                                }
                              );
                          };
                        })(e),
                      });
                    });
                },
              l = !1;
            try {
              l =
                localStorage &&
                localStorage.getItem &&
                localStorage.getItem("WebflowEditor");
            } catch (t) {}
            function d() {
              if (!r) /\?edit/.test(s.hash) && c();
            }
            l
              ? c()
              : s.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) ||
                  /\?edit$/.test(s.href)) &&
                c()
              : a.on(u, d).triggerHandler(u);
            function f(t, e, n) {
              throw (console.error("Could not load editor script: " + e), n);
            }
            function h(t) {
              return t.replace(/([^:])\/\//g, "$1/");
            }
            function p(t, e) {
              window.removeEventListener("message", e, !1), t.remove();
            }
            return {};
          })
        );
      },
      338: function (t, e, n) {
        "use strict";
        n(949).define(
          "focus-visible",
          (t.exports = function () {
            return {
              ready: function () {
                if ("undefined" != typeof document)
                  try {
                    document.querySelector(":focus-visible");
                  } catch (t) {
                    !(function (t) {
                      var e = !0,
                        n = !1,
                        i = null,
                        r = {
                          text: !0,
                          search: !0,
                          url: !0,
                          tel: !0,
                          email: !0,
                          password: !0,
                          number: !0,
                          date: !0,
                          month: !0,
                          week: !0,
                          time: !0,
                          datetime: !0,
                          "datetime-local": !0,
                        };
                      function a(t) {
                        return (
                          (!!t &&
                            t !== document &&
                            "HTML" !== t.nodeName &&
                            "BODY" !== t.nodeName &&
                            "classList" in t &&
                            "contains" in t.classList) ||
                          !1
                        );
                      }
                      function o(t) {
                        if (!t.getAttribute("data-wf-focus-visible"))
                          t.setAttribute("data-wf-focus-visible", "true");
                      }
                      function s() {
                        e = !1;
                      }
                      function u() {
                        document.addEventListener("mousemove", c),
                          document.addEventListener("mousedown", c),
                          document.addEventListener("mouseup", c),
                          document.addEventListener("pointermove", c),
                          document.addEventListener("pointerdown", c),
                          document.addEventListener("pointerup", c),
                          document.addEventListener("touchmove", c),
                          document.addEventListener("touchstart", c),
                          document.addEventListener("touchend", c);
                      }
                      function c(t) {
                        if (
                          !t.target.nodeName ||
                          "html" !== t.target.nodeName.toLowerCase()
                        )
                          (e = !1),
                            document.removeEventListener("mousemove", c),
                            document.removeEventListener("mousedown", c),
                            document.removeEventListener("mouseup", c),
                            document.removeEventListener("pointermove", c),
                            document.removeEventListener("pointerdown", c),
                            document.removeEventListener("pointerup", c),
                            document.removeEventListener("touchmove", c),
                            document.removeEventListener("touchstart", c),
                            document.removeEventListener("touchend", c);
                      }
                      document.addEventListener(
                        "keydown",
                        function (n) {
                          if (!n.metaKey && !n.altKey && !n.ctrlKey)
                            a(t.activeElement) && o(t.activeElement), (e = !0);
                        },
                        !0
                      ),
                        document.addEventListener("mousedown", s, !0),
                        document.addEventListener("pointerdown", s, !0),
                        document.addEventListener("touchstart", s, !0),
                        document.addEventListener(
                          "visibilitychange",
                          function () {
                            "hidden" === document.visibilityState &&
                              (n && (e = !0), u());
                          },
                          !0
                        ),
                        u(),
                        t.addEventListener(
                          "focus",
                          function (t) {
                            var n, i, s;
                            if (!!a(t.target)) {
                              if (
                                e ||
                                ((i = (n = t.target).type),
                                ("INPUT" === (s = n.tagName) &&
                                  r[i] &&
                                  !n.readOnly) ||
                                  ("TEXTAREA" === s && !n.readOnly) ||
                                  n.isContentEditable)
                              )
                                o(t.target);
                            }
                          },
                          !0
                        ),
                        t.addEventListener(
                          "blur",
                          function (t) {
                            if (!!a(t.target))
                              t.target.hasAttribute("data-wf-focus-visible") &&
                                ((n = !0),
                                window.clearTimeout(i),
                                (i = window.setTimeout(function () {
                                  n = !1;
                                }, 100)),
                                !(function (t) {
                                  if (!!t.getAttribute("data-wf-focus-visible"))
                                    t.removeAttribute("data-wf-focus-visible");
                                })(t.target));
                          },
                          !0
                        );
                    })(document);
                  }
              },
            };
          })
        );
      },
      334: function (t, e, n) {
        "use strict";
        var i = n(949);
        i.define(
          "focus",
          (t.exports = function () {
            var t = [],
              e = !1;
            function n(n) {
              e &&
                (n.preventDefault(),
                n.stopPropagation(),
                n.stopImmediatePropagation(),
                t.unshift(n));
            }
            function r(n) {
              var i, r;
              if (
                ((r = (i = n.target).tagName),
                (/^a$/i.test(r) && null != i.href) ||
                  (/^(button|textarea)$/i.test(r) && !0 !== i.disabled) ||
                  (/^input$/i.test(r) &&
                    /^(button|reset|submit|radio|checkbox)$/i.test(i.type) &&
                    !i.disabled) ||
                  (!/^(button|input|textarea|select|a)$/i.test(r) &&
                    !Number.isNaN(Number.parseFloat(i.tabIndex))) ||
                  /^audio$/i.test(r) ||
                  (/^video$/i.test(r) && !0 === i.controls))
              )
                (e = !0),
                  setTimeout(() => {
                    for (e = !1, n.target.focus(); t.length > 0; ) {
                      var i = t.pop();
                      i.target.dispatchEvent(new MouseEvent(i.type, i));
                    }
                  }, 0);
            }
            return {
              ready: function () {
                "undefined" != typeof document &&
                  document.body.hasAttribute("data-wf-focus-within") &&
                  i.env.safari &&
                  (document.addEventListener("mousedown", r, !0),
                  document.addEventListener("mouseup", n, !0),
                  document.addEventListener("click", n, !0));
              },
            };
          })
        );
      },
      199: function (t) {
        "use strict";
        var e = window.jQuery,
          n = {},
          i = [],
          r = ".w-ix",
          a = {
            reset: function (t, e) {
              e.__wf_intro = null;
            },
            intro: function (t, i) {
              if (!i.__wf_intro)
                (i.__wf_intro = !0), e(i).triggerHandler(n.types.INTRO);
            },
            outro: function (t, i) {
              if (!!i.__wf_intro)
                (i.__wf_intro = null), e(i).triggerHandler(n.types.OUTRO);
            },
          };
        (n.triggers = {}),
          (n.types = { INTRO: "w-ix-intro" + r, OUTRO: "w-ix-outro" + r }),
          (n.init = function () {
            for (var t = i.length, r = 0; r < t; r++) {
              var o = i[r];
              o[0](0, o[1]);
            }
            (i = []), e.extend(n.triggers, a);
          }),
          (n.async = function () {
            for (var t in a) {
              var e = a[t];
              if (!!a.hasOwnProperty(t))
                n.triggers[t] = function (t, n) {
                  i.push([e, n]);
                };
            }
          }),
          n.async(),
          (t.exports = n);
      },
      134: function (t, e, n) {
        "use strict";
        var i = n(199);
        function r(t, e) {
          var n = document.createEvent("CustomEvent");
          n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
        }
        var a = window.jQuery,
          o = {},
          s = ".w-ix";
        (o.triggers = {}),
          (o.types = { INTRO: "w-ix-intro" + s, OUTRO: "w-ix-outro" + s }),
          a.extend(o.triggers, {
            reset: function (t, e) {
              i.triggers.reset(t, e);
            },
            intro: function (t, e) {
              i.triggers.intro(t, e), r(e, "COMPONENT_ACTIVE");
            },
            outro: function (t, e) {
              i.triggers.outro(t, e), r(e, "COMPONENT_INACTIVE");
            },
          }),
          (t.exports = o);
      },
      949: function (t, e, n) {
        "use strict";
        var i,
          r,
          a = {},
          o = {},
          s = [],
          u = window.Webflow || [],
          c = window.jQuery,
          l = c(window),
          d = c(document),
          f = c.isFunction,
          h = (a._ = n(756)),
          p = (a.tram = n(487) && c.tram),
          v = !1,
          m = !1;
        function w(t) {
          a.env() &&
            (f(t.design) && l.on("__wf_design", t.design),
            f(t.preview) && l.on("__wf_preview", t.preview)),
            f(t.destroy) && l.on("__wf_destroy", t.destroy),
            t.ready &&
              f(t.ready) &&
              (function (t) {
                if (v) {
                  t.ready();
                  return;
                }
                if (!h.contains(s, t.ready)) s.push(t.ready);
              })(t);
        }
        (p.config.hideBackface = !1),
          (p.config.keepInherited = !0),
          (a.define = function (t, e, n) {
            o[t] && g(o[t]);
            var i = (o[t] = e(c, h, n) || {});
            return w(i), i;
          }),
          (a.require = function (t) {
            return o[t];
          });
        function g(t) {
          f(t.design) && l.off("__wf_design", t.design),
            f(t.preview) && l.off("__wf_preview", t.preview),
            f(t.destroy) && l.off("__wf_destroy", t.destroy),
            t.ready &&
              f(t.ready) &&
              (function (t) {
                s = h.filter(s, function (e) {
                  return e !== t.ready;
                });
              })(t);
        }
        (a.push = function (t) {
          if (v) {
            f(t) && t();
            return;
          }
          u.push(t);
        }),
          (a.env = function (t) {
            var e = window.__wf_design,
              n = void 0 !== e;
            return t
              ? "design" === t
                ? n && e
                : "preview" === t
                ? n && !e
                : "slug" === t
                ? n && window.__wf_slug
                : "editor" === t
                ? window.WebflowEditor
                : "test" === t
                ? window.__wf_test
                : "frame" === t
                ? window !== window.top
                : void 0
              : n;
          });
        var b = navigator.userAgent.toLowerCase(),
          y = (a.env.touch =
            "ontouchstart" in window ||
            (window.DocumentTouch && document instanceof window.DocumentTouch)),
          x = (a.env.chrome =
            /chrome/.test(b) &&
            /Google/.test(navigator.vendor) &&
            parseInt(b.match(/chrome\/(\d+)\./)[1], 10)),
          k = (a.env.ios = /(ipod|iphone|ipad)/.test(b));
        (a.env.safari = /safari/.test(b) && !x && !k),
          y &&
            d.on("touchstart mousedown", function (t) {
              i = t.target;
            }),
          (a.validClick = y
            ? function (t) {
                return t === i || c.contains(t, i);
              }
            : function () {
                return !0;
              });
        var E = "resize.webflow orientationchange.webflow load.webflow",
          _ = "scroll.webflow " + E;
        function T(t, e) {
          var n = [],
            i = {};
          return (
            (i.up = h.throttle(function (t) {
              h.each(n, function (e) {
                e(t);
              });
            })),
            t && e && t.on(e, i.up),
            (i.on = function (t) {
              if (!("function" != typeof t || h.contains(n, t))) n.push(t);
            }),
            (i.off = function (t) {
              if (!arguments.length) {
                n = [];
                return;
              }
              n = h.filter(n, function (e) {
                return e !== t;
              });
            }),
            i
          );
        }
        function A(t) {
          f(t) && t();
        }
        (a.resize = T(l, E)),
          (a.scroll = T(l, _)),
          (a.redraw = T()),
          (a.location = function (t) {
            window.location = t;
          }),
          a.env() && (a.location = function () {}),
          (a.ready = function () {
            (v = !0),
              m
                ? (function () {
                    (m = !1), h.each(o, w);
                  })()
                : h.each(s, A),
              h.each(u, A),
              a.resize.up();
          });
        function O() {
          r && (r.reject(), l.off("load", r.resolve)),
            (r = new c.Deferred()),
            l.on("load", r.resolve);
        }
        (a.load = function (t) {
          r.then(t);
        }),
          (a.destroy = function (t) {
            (t = t || {}),
              (m = !0),
              l.triggerHandler("__wf_destroy"),
              null != t.domready && (v = t.domready),
              h.each(o, g),
              a.resize.off(),
              a.scroll.off(),
              a.redraw.off(),
              (s = []),
              (u = []),
              "pending" === r.state() && O();
          }),
          c(a.ready),
          O(),
          (t.exports = window.Webflow = a);
      },
      624: function (t, e, n) {
        "use strict";
        var i = n(949);
        i.define(
          "links",
          (t.exports = function (t, e) {
            var n,
              r,
              a,
              o = {},
              s = t(window),
              u = i.env(),
              c = window.location,
              l = document.createElement("a"),
              d = "w--current",
              f = /index\.(html|php)$/,
              h = /\/$/;
            o.ready =
              o.design =
              o.preview =
                function () {
                  (n = u && i.env("design")),
                    (a = i.env("slug") || c.pathname || ""),
                    i.scroll.off(p),
                    (r = []);
                  for (var e = document.links, o = 0; o < e.length; ++o)
                    (function (e) {
                      if (e.getAttribute("hreflang")) return;
                      var i =
                        (n && e.getAttribute("href-disabled")) ||
                        e.getAttribute("href");
                      if (((l.href = i), i.indexOf(":") >= 0)) return;
                      var o = t(e);
                      if (
                        l.hash.length > 1 &&
                        l.host + l.pathname === c.host + c.pathname
                      ) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash)) return;
                        var s = t(l.hash);
                        s.length && r.push({ link: o, sec: s, active: !1 });
                        return;
                      }
                      if ("#" !== i && "" !== i)
                        v(
                          o,
                          d,
                          l.href === c.href ||
                            i === a ||
                            (f.test(i) && h.test(a))
                        );
                    })(e[o]);
                  r.length && (i.scroll.on(p), p());
                };
            function p() {
              var t = s.scrollTop(),
                n = s.height();
              e.each(r, function (e) {
                if (e.link.attr("hreflang")) return;
                var i = e.link,
                  r = e.sec,
                  a = r.offset().top,
                  o = r.outerHeight(),
                  s = 0.5 * n,
                  u = r.is(":visible") && a + o - s >= t && a + s <= t + n;
                if (e.active !== u) (e.active = u), v(i, d, u);
              });
            }
            function v(t, e, n) {
              var i = t.hasClass(e);
              if ((!n || !i) && (!!n || !!i))
                n ? t.addClass(e) : t.removeClass(e);
            }
            return o;
          })
        );
      },
      286: function (t, e, n) {
        "use strict";
        var i = n(949);
        i.define(
          "scroll",
          (t.exports = function (t) {
            var e = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll",
              },
              n = window.location,
              r = (function () {
                try {
                  return !!window.frameElement;
                } catch (t) {
                  return !0;
                }
              })()
                ? null
                : window.history,
              a = t(window),
              o = t(document),
              s = t(document.body),
              u =
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                function (t) {
                  window.setTimeout(t, 15);
                },
              c = i.env("editor") ? ".w-editor-body" : "body",
              l =
                "header, " +
                c +
                " > .header, " +
                c +
                " > .w-nav:not([data-no-scroll])",
              d = 'a[href="#"]',
              f = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
              h = document.createElement("style");
            h.appendChild(
              document.createTextNode(
                '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              )
            );
            var p = /^#[a-zA-Z0-9][\w:.-]*$/;
            let v =
              "function" == typeof window.matchMedia &&
              window.matchMedia("(prefers-reduced-motion: reduce)");
            function m(t, e) {
              var n;
              switch (e) {
                case "add":
                  (n = t.attr("tabindex"))
                    ? t.attr("data-wf-tabindex-swap", n)
                    : t.attr("tabindex", "-1");
                  break;
                case "remove":
                  (n = t.attr("data-wf-tabindex-swap"))
                    ? (t.attr("tabindex", n),
                      t.removeAttr("data-wf-tabindex-swap"))
                    : t.removeAttr("tabindex");
              }
              t.toggleClass("wf-force-outline-none", "add" === e);
            }
            function w(e) {
              var o,
                c = e.currentTarget;
              if (
                !(
                  i.env("design") ||
                  (window.$.mobile &&
                    /(?:^|\s)ui-link(?:$|\s)/.test(c.className))
                )
              ) {
                var d = ((o = c),
                p.test(o.hash) && o.host + o.pathname === n.host + n.pathname)
                  ? c.hash
                  : "";
                if ("" !== d) {
                  var f = t(d);
                  if (!f.length) return;
                  e && (e.preventDefault(), e.stopPropagation()),
                    (function (t) {
                      n.hash !== t &&
                        r &&
                        r.pushState &&
                        !(i.env.chrome && "file:" === n.protocol) &&
                        (r.state && r.state.hash) !== t &&
                        r.pushState({ hash: t }, "", t);
                    })(d, e),
                    window.setTimeout(
                      function () {
                        (function (e, n) {
                          var i = a.scrollTop(),
                            r = (function (e) {
                              var n = t(l),
                                i =
                                  "fixed" === n.css("position")
                                    ? n.outerHeight()
                                    : 0,
                                r = e.offset().top - i;
                              if ("mid" === e.data("scroll")) {
                                var o = a.height() - i,
                                  s = e.outerHeight();
                                s < o && (r -= Math.round((o - s) / 2));
                              }
                              return r;
                            })(e);
                          if (i !== r) {
                            var o = (function (t, e, n) {
                                if (
                                  "none" ===
                                    document.body.getAttribute(
                                      "data-wf-scroll-motion"
                                    ) ||
                                  v.matches
                                )
                                  return 0;
                                var i = 1;
                                return (
                                  s.add(t).each(function (t, e) {
                                    var n = parseFloat(
                                      e.getAttribute("data-scroll-time")
                                    );
                                    !isNaN(n) && n >= 0 && (i = n);
                                  }),
                                  (472.143 * Math.log(Math.abs(e - n) + 125) -
                                    2e3) *
                                    i
                                );
                              })(e, i, r),
                              c = Date.now(),
                              d = function () {
                                var t = Date.now() - c;
                                window.scroll(
                                  0,
                                  (function (t, e, n, i) {
                                    return n > i
                                      ? e
                                      : t +
                                          (e - t) *
                                            (function (t) {
                                              return t < 0.5
                                                ? 4 * t * t * t
                                                : (t - 1) *
                                                    (2 * t - 2) *
                                                    (2 * t - 2) +
                                                    1;
                                            })(n / i);
                                  })(i, r, t, o)
                                ),
                                  t <= o ? u(d) : "function" == typeof n && n();
                              };
                            u(d);
                          }
                        })(f, function () {
                          m(f, "add"),
                            f.get(0).focus({ preventScroll: !0 }),
                            m(f, "remove");
                        });
                      },
                      e ? 0 : 300
                    );
                }
              }
            }
            return {
              ready: function () {
                var { WF_CLICK_EMPTY: t, WF_CLICK_SCROLL: n } = e;
                o.on(n, f, w),
                  o.on(t, d, function (t) {
                    t.preventDefault();
                  }),
                  document.head.insertBefore(h, document.head.firstChild);
              },
            };
          })
        );
      },
      695: function (t, e, n) {
        "use strict";
        n(949).define(
          "touch",
          (t.exports = function (t) {
            var e = {},
              n = window.getSelection;
            function i(e) {
              var i,
                r,
                a = !1,
                o = !1,
                s = Math.min(Math.round(0.04 * window.innerWidth), 40);
              function u(t) {
                var e = t.touches;
                if (!e || !(e.length > 1))
                  (a = !0),
                    e ? ((o = !0), (i = e[0].clientX)) : (i = t.clientX),
                    (r = i);
              }
              function c(e) {
                if (!!a) {
                  if (o && "mousemove" === e.type) {
                    e.preventDefault(), e.stopPropagation();
                    return;
                  }
                  var i = e.touches,
                    u = i ? i[0].clientX : e.clientX,
                    c = u - r;
                  (r = u),
                    Math.abs(c) > s &&
                      n &&
                      "" === String(n()) &&
                      ((function (e, n, i) {
                        var r = t.Event(e, { originalEvent: n });
                        t(n.target).trigger(r, i);
                      })("swipe", e, { direction: c > 0 ? "right" : "left" }),
                      d());
                }
              }
              function l(t) {
                if (!!a) {
                  if (((a = !1), o && "mouseup" === t.type)) {
                    t.preventDefault(), t.stopPropagation(), (o = !1);
                    return;
                  }
                }
              }
              function d() {
                a = !1;
              }
              e.addEventListener("touchstart", u, !1),
                e.addEventListener("touchmove", c, !1),
                e.addEventListener("touchend", l, !1),
                e.addEventListener("touchcancel", d, !1),
                e.addEventListener("mousedown", u, !1),
                e.addEventListener("mousemove", c, !1),
                e.addEventListener("mouseup", l, !1),
                e.addEventListener("mouseout", d, !1);
              this.destroy = function () {
                e.removeEventListener("touchstart", u, !1),
                  e.removeEventListener("touchmove", c, !1),
                  e.removeEventListener("touchend", l, !1),
                  e.removeEventListener("touchcancel", d, !1),
                  e.removeEventListener("mousedown", u, !1),
                  e.removeEventListener("mousemove", c, !1),
                  e.removeEventListener("mouseup", l, !1),
                  e.removeEventListener("mouseout", d, !1),
                  (e = null);
              };
            }
            return (
              (t.event.special.tap = {
                bindType: "click",
                delegateType: "click",
              }),
              (e.init = function (e) {
                return (e = "string" == typeof e ? t(e).get(0) : e)
                  ? new i(e)
                  : null;
              }),
              (e.instance = e.init(document)),
              e
            );
          })
        );
      },
      524: function (t, e) {
        "use strict";
        function n(t, e, n, i, r, a, o, s, u, c, l, d, f) {
          return function (h) {
            t(h);
            var p = h.form,
              v = {
                name: p.attr("data-name") || p.attr("name") || "Untitled Form",
                pageId: p.attr("data-wf-page-id") || "",
                elementId: p.attr("data-wf-element-id") || "",
                domain: d("html").attr("data-wf-domain") || null,
                source: e.href,
                test: n.env(),
                fields: {},
                fileUploads: {},
                dolphin:
                  /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                    p.html()
                  ),
                trackingCookies: i(),
              };
            let m = p.attr("data-wf-flow");
            m && (v.wfFlow = m), r(h);
            var w = a(p, v.fields);
            if (w) return o(w);
            if (((v.fileUploads = s(p)), u(h), !c)) {
              l(h);
              return;
            }
            d.ajax({
              url: f,
              type: "POST",
              data: v,
              dataType: "json",
              crossDomain: !0,
            })
              .done(function (t) {
                t && 200 === t.code && (h.success = !0), l(h);
              })
              .fail(function () {
                l(h);
              });
          };
        }
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      },
      527: function (t, e, n) {
        "use strict";
        var i = n(949);
        let r = (t, e, n, i) => {
          let r = document.createElement("div");
          e.appendChild(r),
            turnstile.render(r, {
              sitekey: t,
              callback: function (t) {
                n(t);
              },
              "error-callback": function () {
                i();
              },
            });
        };
        i.define(
          "forms",
          (t.exports = function (t, e) {
            let a;
            let o = "TURNSTILE_LOADED";
            var s,
              u,
              c,
              l,
              d,
              f = {},
              h = t(document),
              p = window.location,
              v = window.XDomainRequest && !window.atob,
              m = ".w-form",
              w = /e(-)?mail/i,
              g = /^\S+@\S+$/,
              b = window.alert,
              y = i.env();
            let x = h
              .find("[data-turnstile-sitekey]")
              .data("turnstile-sitekey");
            var k = /list-manage[1-9]?.com/i,
              E = e.debounce(function () {
                b(
                  "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
                );
              }, 100);
            f.ready =
              f.design =
              f.preview =
                function () {
                  (function () {
                    x &&
                      (((a = document.createElement("script")).src =
                        "https://challenges.cloudflare.com/turnstile/v0/api.js"),
                      document.head.appendChild(a),
                      (a.onload = () => {
                        h.trigger(o);
                      }));
                  })(),
                    (function () {
                      if (
                        ((l =
                          "https://webflow.com/api/v1/form/" +
                          (u = t("html").attr("data-wf-site"))),
                        v &&
                          l.indexOf("https://webflow.com") >= 0 &&
                          (l = l.replace(
                            "https://webflow.com",
                            "https://formdata.webflow.com"
                          )),
                        (d = `${l}/signFile`),
                        !!(s = t(m + " form")).length)
                      )
                        s.each(_);
                    })(),
                    !y &&
                      !c &&
                      (function () {
                        (c = !0),
                          h.on("submit", m + " form", function (e) {
                            var n = t.data(this, m);
                            n.handler && ((n.evt = e), n.handler(n));
                          });
                        let e = ".w-checkbox-input",
                          n = ".w-radio-input",
                          i = "w--redirected-checked",
                          r = "w--redirected-focus",
                          a = "w--redirected-focus-visible",
                          o = [
                            ["checkbox", e],
                            ["radio", n],
                          ];
                        h.on(
                          "change",
                          m + ' form input[type="checkbox"]:not(' + e + ")",
                          (n) => {
                            t(n.target).siblings(e).toggleClass(i);
                          }
                        ),
                          h.on(
                            "change",
                            m + ' form input[type="radio"]',
                            (r) => {
                              t(`input[name="${r.target.name}"]:not(${e})`).map(
                                (e, r) => t(r).siblings(n).removeClass(i)
                              );
                              let a = t(r.target);
                              !a.hasClass("w-radio-input") &&
                                a.siblings(n).addClass(i);
                            }
                          ),
                          o.forEach(([e, n]) => {
                            h.on(
                              "focus",
                              m + ` form input[type="${e}"]:not(` + n + ")",
                              (e) => {
                                t(e.target).siblings(n).addClass(r),
                                  t(e.target)
                                    .filter(
                                      ":focus-visible, [data-wf-focus-visible]"
                                    )
                                    .siblings(n)
                                    .addClass(a);
                              }
                            ),
                              h.on(
                                "blur",
                                m + ` form input[type="${e}"]:not(` + n + ")",
                                (e) => {
                                  t(e.target)
                                    .siblings(n)
                                    .removeClass(`${r} ${a}`);
                                }
                              );
                          });
                      })();
                };
            function _(e, a) {
              var s = t(a),
                c = t.data(a, m);
              !c && (c = t.data(a, m, { form: s })), T(c);
              var f = s.closest("div.w-form");
              (c.done = f.find("> .w-form-done")),
                (c.fail = f.find("> .w-form-fail")),
                (c.fileUploads = f.find(".w-file-upload")),
                c.fileUploads.each(function (e) {
                  (function (e, n) {
                    if (!!n.fileUploads && !!n.fileUploads[e]) {
                      var i,
                        r = t(n.fileUploads[e]),
                        a = r.find("> .w-file-upload-default"),
                        o = r.find("> .w-file-upload-uploading"),
                        s = r.find("> .w-file-upload-success"),
                        u = r.find("> .w-file-upload-error"),
                        c = a.find(".w-file-upload-input"),
                        l = a.find(".w-file-upload-label"),
                        f = l.children(),
                        h = u.find(".w-file-upload-error-msg"),
                        p = s.find(".w-file-upload-file"),
                        v = s.find(".w-file-remove-link"),
                        m = p.find(".w-file-upload-file-name"),
                        w = h.attr("data-w-size-error"),
                        g = h.attr("data-w-type-error"),
                        b = h.attr("data-w-generic-error");
                      if (
                        (!y &&
                          l.on("click keydown", function (t) {
                            if (
                              "keydown" !== t.type ||
                              13 === t.which ||
                              32 === t.which
                            )
                              t.preventDefault(), c.click();
                          }),
                        l
                          .find(".w-icon-file-upload-icon")
                          .attr("aria-hidden", "true"),
                        v
                          .find(".w-icon-file-upload-remove")
                          .attr("aria-hidden", "true"),
                        y)
                      )
                        c.on("click", function (t) {
                          t.preventDefault();
                        }),
                          l.on("click", function (t) {
                            t.preventDefault();
                          }),
                          f.on("click", function (t) {
                            t.preventDefault();
                          });
                      else {
                        v.on("click keydown", function (t) {
                          if ("keydown" === t.type) {
                            if (13 !== t.which && 32 !== t.which) return;
                            t.preventDefault();
                          }
                          c.removeAttr("data-value"),
                            c.val(""),
                            m.html(""),
                            a.toggle(!0),
                            s.toggle(!1),
                            l.focus();
                        }),
                          c.on("change", function (r) {
                            if (
                              !!(i =
                                r.target && r.target.files && r.target.files[0])
                            )
                              a.toggle(!1),
                                u.toggle(!1),
                                o.toggle(!0),
                                o.focus(),
                                m.text(i.name),
                                !O() && A(n),
                                (n.fileUploads[e].uploading = !0),
                                (function (e, n) {
                                  var i = new URLSearchParams({
                                    name: e.name,
                                    size: e.size,
                                  });
                                  t.ajax({
                                    type: "GET",
                                    url: `${d}?${i}`,
                                    crossDomain: !0,
                                  })
                                    .done(function (t) {
                                      n(null, t);
                                    })
                                    .fail(function (t) {
                                      n(t);
                                    });
                                })(i, E);
                          });
                        var x = l.outerHeight();
                        c.height(x), c.width(1);
                      }
                    }
                    function k(t) {
                      var i = t.responseJSON && t.responseJSON.msg,
                        r = b;
                      "string" == typeof i &&
                      0 === i.indexOf("InvalidFileTypeError")
                        ? (r = g)
                        : "string" == typeof i &&
                          0 === i.indexOf("MaxFileSizeError") &&
                          (r = w),
                        h.text(r),
                        c.removeAttr("data-value"),
                        c.val(""),
                        o.toggle(!1),
                        a.toggle(!0),
                        u.toggle(!0),
                        u.focus(),
                        (n.fileUploads[e].uploading = !1),
                        !O() && T(n);
                    }
                    function E(e, n) {
                      if (e) return k(e);
                      var r = n.fileName,
                        a = n.postData,
                        o = n.fileId,
                        s = n.s3Url;
                      c.attr("data-value", o),
                        (function (e, n, i, r, a) {
                          var o = new FormData();
                          for (var s in n) o.append(s, n[s]);
                          o.append("file", i, r),
                            t
                              .ajax({
                                type: "POST",
                                url: e,
                                data: o,
                                processData: !1,
                                contentType: !1,
                              })
                              .done(function () {
                                a(null);
                              })
                              .fail(function (t) {
                                a(t);
                              });
                        })(s, a, i, r, _);
                    }
                    function _(t) {
                      if (t) return k(t);
                      o.toggle(!1),
                        s.css("display", "inline-block"),
                        s.focus(),
                        (n.fileUploads[e].uploading = !1),
                        !O() && T(n);
                    }
                    function O() {
                      return (
                        (n.fileUploads && n.fileUploads.toArray()) ||
                        []
                      ).some(function (t) {
                        return t.uploading;
                      });
                    }
                  })(e, c);
                }),
                x &&
                  ((c.wait = !1),
                  A(c),
                  h.on(
                    "undefined" != typeof turnstile ? "ready" : o,
                    function () {
                      r(
                        x,
                        a,
                        (t) => {
                          (c.turnstileToken = t), T(c);
                        },
                        () => {
                          A(c);
                        }
                      );
                    }
                  ));
              var v =
                c.form.attr("aria-label") || c.form.attr("data-name") || "Form";
              !c.done.attr("aria-label") && c.form.attr("aria-label", v),
                c.done.attr("tabindex", "-1"),
                c.done.attr("role", "region"),
                !c.done.attr("aria-label") &&
                  c.done.attr("aria-label", v + " success"),
                c.fail.attr("tabindex", "-1"),
                c.fail.attr("role", "region"),
                !c.fail.attr("aria-label") &&
                  c.fail.attr("aria-label", v + " failure");
              var w = (c.action = s.attr("action"));
              if (
                ((c.handler = null),
                (c.redirect = s.attr("data-redirect")),
                k.test(w))
              ) {
                c.handler = I;
                return;
              }
              if (!w) {
                if (u) {
                  c.handler = (0, n(524).default)(
                    T,
                    p,
                    i,
                    R,
                    $,
                    O,
                    b,
                    L,
                    A,
                    u,
                    D,
                    t,
                    l
                  );
                  return;
                }
                E();
              }
            }
            function T(t) {
              var e = (t.btn = t.form.find(':input[type="submit"]'));
              (t.wait = t.btn.attr("data-wait") || null),
                (t.success = !1),
                e.prop("disabled", !!(x && !t.turnstileToken)),
                t.label && e.val(t.label);
            }
            function A(t) {
              var e = t.btn,
                n = t.wait;
              e.prop("disabled", !0), n && ((t.label = e.val()), e.val(n));
            }
            function O(e, n) {
              var i = null;
              return (
                (n = n || {}),
                e
                  .find(':input:not([type="submit"]):not([type="file"])')
                  .each(function (r, a) {
                    var o = t(a),
                      s = o.attr("type"),
                      u =
                        o.attr("data-name") ||
                        o.attr("name") ||
                        "Field " + (r + 1);
                    u = encodeURIComponent(u);
                    var c = o.val();
                    if ("checkbox" === s) c = o.is(":checked");
                    else if ("radio" === s) {
                      if (null === n[u] || "string" == typeof n[u]) return;
                      c =
                        e
                          .find('input[name="' + o.attr("name") + '"]:checked')
                          .val() || null;
                    }
                    "string" == typeof c && (c = t.trim(c)),
                      (n[u] = c),
                      (i =
                        i ||
                        (function (t, e, n, i) {
                          var r = null;
                          return (
                            "password" === e
                              ? (r = "Passwords cannot be submitted.")
                              : t.attr("required")
                              ? i
                                ? w.test(t.attr("type")) &&
                                  !g.test(i) &&
                                  (r =
                                    "Please enter a valid email address for: " +
                                    n)
                                : (r =
                                    "Please fill out the required field: " + n)
                              : "g-recaptcha-response" === n &&
                                !i &&
                                (r = "Please confirm youâ€™re not a robot."),
                            r
                          );
                        })(o, s, u, c));
                  }),
                i
              );
            }
            function L(e) {
              var n = {};
              return (
                e.find(':input[type="file"]').each(function (e, i) {
                  var r = t(i),
                    a =
                      r.attr("data-name") ||
                      r.attr("name") ||
                      "File " + (e + 1),
                    o = r.attr("data-value");
                  "string" == typeof o && (o = t.trim(o)), (n[a] = o);
                }),
                n
              );
            }
            let C = { _mkto_trk: "marketo" };
            function R() {
              return document.cookie.split("; ").reduce(function (t, e) {
                let n = e.split("="),
                  i = n[0];
                if (i in C) {
                  let e = C[i],
                    r = n.slice(1).join("=");
                  t[e] = r;
                }
                return t;
              }, {});
            }
            function I(n) {
              T(n);
              var i,
                r = n.form,
                a = {};
              if (/^https/.test(p.href) && !/^https/.test(n.action)) {
                r.attr("method", "post");
                return;
              }
              $(n);
              var o = O(r, a);
              if (o) return b(o);
              A(n),
                e.each(a, function (t, e) {
                  w.test(e) && (a.EMAIL = t),
                    /^((full[ _-]?)?name)$/i.test(e) && (i = t),
                    /^(first[ _-]?name)$/i.test(e) && (a.FNAME = t),
                    /^(last[ _-]?name)$/i.test(e) && (a.LNAME = t);
                }),
                i &&
                  !a.FNAME &&
                  ((i = i.split(" ")),
                  (a.FNAME = i[0]),
                  (a.LNAME = a.LNAME || i[1]));
              var s = n.action.replace("/post?", "/post-json?") + "&c=?",
                u = s.indexOf("u=") + 2;
              u = s.substring(u, s.indexOf("&", u));
              var c = s.indexOf("id=") + 3;
              (a["b_" + u + "_" + (c = s.substring(c, s.indexOf("&", c)))] =
                ""),
                t
                  .ajax({ url: s, data: a, dataType: "jsonp" })
                  .done(function (t) {
                    (n.success =
                      "success" === t.result || /already/.test(t.msg)),
                      !n.success && console.info("MailChimp error: " + t.msg),
                      D(n);
                  })
                  .fail(function () {
                    D(n);
                  });
            }
            function D(t) {
              var e = t.form,
                n = t.redirect,
                r = t.success;
              if (r && n) {
                i.location(n);
                return;
              }
              t.done.toggle(r),
                t.fail.toggle(!r),
                r ? t.done.focus() : t.fail.focus(),
                e.toggle(!r),
                T(t);
            }
            function $(t) {
              t.evt && t.evt.preventDefault(), (t.evt = null);
            }
            return f;
          })
        );
      },
      655: function (t, e, n) {
        "use strict";
        var i = n(949),
          r = n(134);
        let a = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          ESCAPE: 27,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35,
        };
        i.define(
          "navbar",
          (t.exports = function (t, e) {
            var n,
              o,
              s,
              u,
              c = {},
              l = t.tram,
              d = t(window),
              f = t(document),
              h = e.debounce,
              p = i.env(),
              v = ".w-nav",
              m = "w--open",
              w = "w--nav-dropdown-open",
              g = "w--nav-dropdown-toggle-open",
              b = "w--nav-dropdown-list-open",
              y = "w--nav-link-open",
              x = r.triggers,
              k = t();
            (c.ready =
              c.design =
              c.preview =
                function () {
                  if (
                    ((s = p && i.env("design")),
                    (u = i.env("editor")),
                    (n = t(document.body)),
                    !!(o = f.find(v)).length)
                  )
                    o.each(T),
                      E(),
                      (function () {
                        i.resize.on(_);
                      })();
                }),
              (c.destroy = function () {
                (k = t()), E(), o && o.length && o.each(A);
              });
            function E() {
              i.resize.off(_);
            }
            function _() {
              o.each(N);
            }
            function T(n, i) {
              var r = t(i),
                o = t.data(i, v);
              !o &&
                (o = t.data(i, v, {
                  open: !1,
                  el: r,
                  config: {},
                  selectedIdx: -1,
                })),
                (o.menu = r.find(".w-nav-menu")),
                (o.links = o.menu.find(".w-nav-link")),
                (o.dropdowns = o.menu.find(".w-dropdown")),
                (o.dropdownToggle = o.menu.find(".w-dropdown-toggle")),
                (o.dropdownList = o.menu.find(".w-dropdown-list")),
                (o.button = r.find(".w-nav-button")),
                (o.container = r.find(".w-container")),
                (o.overlayContainerId = "w-nav-overlay-" + n),
                (o.outside = (function (e) {
                  return (
                    e.outside && f.off("click" + v, e.outside),
                    function (n) {
                      var i = t(n.target);
                      if (
                        !u ||
                        !i.closest(".w-editor-bem-EditorOverlay").length
                      )
                        $(e, i);
                    }
                  );
                })(o));
              var c = r.find(".w-nav-brand");
              c &&
                "/" === c.attr("href") &&
                null == c.attr("aria-label") &&
                c.attr("aria-label", "home"),
                o.button.attr("style", "-webkit-user-select: text;"),
                null == o.button.attr("aria-label") &&
                  o.button.attr("aria-label", "menu"),
                o.button.attr("role", "button"),
                o.button.attr("tabindex", "0"),
                o.button.attr("aria-controls", o.overlayContainerId),
                o.button.attr("aria-haspopup", "menu"),
                o.button.attr("aria-expanded", "false"),
                o.el.off(v),
                o.button.off(v),
                o.menu.off(v),
                L(o),
                s
                  ? (O(o),
                    o.el.on(
                      "setting" + v,
                      (function (t) {
                        return function (n, i) {
                          i = i || {};
                          var r = d.width();
                          L(t),
                            !0 === i.open && P(t, !0),
                            !1 === i.open && W(t, !0),
                            t.open &&
                              e.defer(function () {
                                r !== d.width() && R(t);
                              });
                        };
                      })(o)
                    ))
                  : ((function (e) {
                      if (!e.overlay)
                        (e.overlay = t(
                          '<div class="w-nav-overlay" data-wf-ignore />'
                        ).appendTo(e.el)),
                          e.overlay.attr("id", e.overlayContainerId),
                          (e.parent = e.menu.parent()),
                          W(e, !0);
                    })(o),
                    o.button.on("click" + v, I(o)),
                    o.menu.on("click" + v, "a", D(o)),
                    o.button.on(
                      "keydown" + v,
                      (function (t) {
                        return function (e) {
                          switch (e.keyCode) {
                            case a.SPACE:
                            case a.ENTER:
                              return (
                                I(t)(), e.preventDefault(), e.stopPropagation()
                              );
                            case a.ESCAPE:
                              return (
                                W(t), e.preventDefault(), e.stopPropagation()
                              );
                            case a.ARROW_RIGHT:
                            case a.ARROW_DOWN:
                            case a.HOME:
                            case a.END:
                              if (!t.open)
                                return e.preventDefault(), e.stopPropagation();
                              return (
                                e.keyCode === a.END
                                  ? (t.selectedIdx = t.links.length - 1)
                                  : (t.selectedIdx = 0),
                                C(t),
                                e.preventDefault(),
                                e.stopPropagation()
                              );
                          }
                        };
                      })(o)
                    ),
                    o.el.on(
                      "keydown" + v,
                      (function (t) {
                        return function (e) {
                          if (!!t.open)
                            switch (
                              ((t.selectedIdx = t.links.index(
                                document.activeElement
                              )),
                              e.keyCode)
                            ) {
                              case a.HOME:
                              case a.END:
                                return (
                                  e.keyCode === a.END
                                    ? (t.selectedIdx = t.links.length - 1)
                                    : (t.selectedIdx = 0),
                                  C(t),
                                  e.preventDefault(),
                                  e.stopPropagation()
                                );
                              case a.ESCAPE:
                                return (
                                  W(t),
                                  t.button.focus(),
                                  e.preventDefault(),
                                  e.stopPropagation()
                                );
                              case a.ARROW_LEFT:
                              case a.ARROW_UP:
                                return (
                                  (t.selectedIdx = Math.max(
                                    -1,
                                    t.selectedIdx - 1
                                  )),
                                  C(t),
                                  e.preventDefault(),
                                  e.stopPropagation()
                                );
                              case a.ARROW_RIGHT:
                              case a.ARROW_DOWN:
                                return (
                                  (t.selectedIdx = Math.min(
                                    t.links.length - 1,
                                    t.selectedIdx + 1
                                  )),
                                  C(t),
                                  e.preventDefault(),
                                  e.stopPropagation()
                                );
                            }
                        };
                      })(o)
                    )),
                N(n, i);
            }
            function A(e, n) {
              var i = t.data(n, v);
              i && (O(i), t.removeData(n, v));
            }
            function O(t) {
              if (!!t.overlay) W(t, !0), t.overlay.remove(), (t.overlay = null);
            }
            function L(t) {
              var n = {},
                i = t.config || {},
                r = (n.animation = t.el.attr("data-animation") || "default");
              (n.animOver = /^over/.test(r)),
                (n.animDirect = /left$/.test(r) ? -1 : 1),
                i.animation !== r && t.open && e.defer(R, t),
                (n.easing = t.el.attr("data-easing") || "ease"),
                (n.easing2 = t.el.attr("data-easing2") || "ease");
              var a = t.el.attr("data-duration");
              (n.duration = null != a ? Number(a) : 400),
                (n.docHeight = t.el.attr("data-doc-height")),
                (t.config = n);
            }
            function C(t) {
              if (t.links[t.selectedIdx]) {
                var e = t.links[t.selectedIdx];
                e.focus(), D(e);
              }
            }
            function R(t) {
              if (!!t.open) W(t, !0), P(t, !0);
            }
            function I(t) {
              return h(function () {
                t.open ? W(t) : P(t);
              });
            }
            function D(e) {
              return function (n) {
                var r = t(this).attr("href");
                if (!i.validClick(n.currentTarget)) {
                  n.preventDefault();
                  return;
                }
                r && 0 === r.indexOf("#") && e.open && W(e);
              };
            }
            var $ = h(function (t, e) {
              if (!!t.open) {
                var n = e.closest(".w-nav-menu");
                !t.menu.is(n) && W(t);
              }
            });
            function N(e, n) {
              var i = t.data(n, v),
                r = (i.collapsed = "none" !== i.button.css("display"));
              if ((i.open && !r && !s && W(i, !0), i.container.length)) {
                var a = (function (e) {
                  var n = e.container.css(z);
                  return (
                    "none" === n && (n = ""),
                    function (e, i) {
                      (i = t(i)).css(z, ""), "none" === i.css(z) && i.css(z, n);
                    }
                  );
                })(i);
                i.links.each(a), i.dropdowns.each(a);
              }
              i.open && F(i);
            }
            var z = "max-width";
            function M(t, e) {
              e.setAttribute("data-nav-menu-open", "");
            }
            function S(t, e) {
              e.removeAttribute("data-nav-menu-open");
            }
            function P(t, e) {
              if (!t.open) {
                (t.open = !0),
                  t.menu.each(M),
                  t.links.addClass(y),
                  t.dropdowns.addClass(w),
                  t.dropdownToggle.addClass(g),
                  t.dropdownList.addClass(b),
                  t.button.addClass(m);
                var n = t.config;
                ("none" === n.animation ||
                  !l.support.transform ||
                  n.duration <= 0) &&
                  (e = !0);
                var r = F(t),
                  a = t.menu.outerHeight(!0),
                  o = t.menu.outerWidth(!0),
                  u = t.el.height(),
                  c = t.el[0];
                if (
                  (N(0, c),
                  x.intro(0, c),
                  i.redraw.up(),
                  !s && f.on("click" + v, t.outside),
                  e)
                ) {
                  h();
                  return;
                }
                var d = "transform " + n.duration + "ms " + n.easing;
                if (
                  (t.overlay &&
                    ((k = t.menu.prev()), t.overlay.show().append(t.menu)),
                  n.animOver)
                ) {
                  l(t.menu)
                    .add(d)
                    .set({ x: n.animDirect * o, height: r })
                    .start({ x: 0 })
                    .then(h),
                    t.overlay && t.overlay.width(o);
                  return;
                }
                l(t.menu)
                  .add(d)
                  .set({ y: -(u + a) })
                  .start({ y: 0 })
                  .then(h);
              }
              function h() {
                t.button.attr("aria-expanded", "true");
              }
            }
            function F(t) {
              var e = t.config,
                i = e.docHeight ? f.height() : n.height();
              return (
                e.animOver
                  ? t.menu.height(i)
                  : "fixed" !== t.el.css("position") &&
                    (i -= t.el.outerHeight(!0)),
                t.overlay && t.overlay.height(i),
                i
              );
            }
            function W(t, e) {
              if (!!t.open) {
                (t.open = !1), t.button.removeClass(m);
                var n = t.config;
                if (
                  (("none" === n.animation ||
                    !l.support.transform ||
                    n.duration <= 0) &&
                    (e = !0),
                  x.outro(0, t.el[0]),
                  f.off("click" + v, t.outside),
                  e)
                ) {
                  l(t.menu).stop(), s();
                  return;
                }
                var i = "transform " + n.duration + "ms " + n.easing2,
                  r = t.menu.outerHeight(!0),
                  a = t.menu.outerWidth(!0),
                  o = t.el.height();
                if (n.animOver) {
                  l(t.menu)
                    .add(i)
                    .start({ x: a * n.animDirect })
                    .then(s);
                  return;
                }
                l(t.menu)
                  .add(i)
                  .start({ y: -(o + r) })
                  .then(s);
              }
              function s() {
                t.menu.height(""),
                  l(t.menu).set({ x: 0, y: 0 }),
                  t.menu.each(S),
                  t.links.removeClass(y),
                  t.dropdowns.removeClass(w),
                  t.dropdownToggle.removeClass(g),
                  t.dropdownList.removeClass(b),
                  t.overlay &&
                    t.overlay.children().length &&
                    (k.length
                      ? t.menu.insertAfter(k)
                      : t.menu.prependTo(t.parent),
                    t.overlay.attr("style", "").hide()),
                  t.el.triggerHandler("w-close"),
                  t.button.attr("aria-expanded", "false");
              }
            }
            return c;
          })
        );
      },
      345: function (t, e, n) {
        "use strict";
        var i = n(949),
          r = n(134);
        let a = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35,
          },
          o =
            'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        i.define(
          "slider",
          (t.exports = function (t, e) {
            var n,
              s,
              u,
              c = {},
              l = t.tram,
              d = t(document),
              f = i.env(),
              h = ".w-slider",
              p = "w-slider-force-show",
              v = r.triggers,
              m = !1;
            function w() {
              if (!(n = d.find(h)).length) return;
              if ((n.each(y), !u))
                g(),
                  (function () {
                    i.resize.on(b), i.redraw.on(c.redraw);
                  })();
            }
            function g() {
              i.resize.off(b), i.redraw.off(c.redraw);
            }
            (c.ready = function () {
              (s = i.env("design")), w();
            }),
              (c.design = function () {
                (s = !0), setTimeout(w, 1e3);
              }),
              (c.preview = function () {
                (s = !1), w();
              }),
              (c.redraw = function () {
                (m = !0), w(), (m = !1);
              }),
              (c.destroy = g);
            function b() {
              n.filter(":visible").each(D);
            }
            function y(e, n) {
              var i = t(n),
                r = t.data(n, h);
              !r &&
                (r = t.data(n, h, {
                  index: 0,
                  depth: 1,
                  hasFocus: { keyboard: !1, mouse: !1 },
                  el: i,
                  config: {},
                })),
                (r.mask = i.children(".w-slider-mask")),
                (r.left = i.children(".w-slider-arrow-left")),
                (r.right = i.children(".w-slider-arrow-right")),
                (r.nav = i.children(".w-slider-nav")),
                (r.slides = r.mask.children(".w-slide")),
                r.slides.each(v.reset),
                m && (r.maskWidth = 0),
                void 0 === i.attr("role") && i.attr("role", "region"),
                void 0 === i.attr("aria-label") &&
                  i.attr("aria-label", "carousel");
              var a = r.mask.attr("id");
              if (
                (!a && ((a = "w-slider-mask-" + e), r.mask.attr("id", a)),
                !s &&
                  !r.ariaLiveLabel &&
                  (r.ariaLiveLabel = t(
                    '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />'
                  ).appendTo(r.mask)),
                r.left.attr("role", "button"),
                r.left.attr("tabindex", "0"),
                r.left.attr("aria-controls", a),
                void 0 === r.left.attr("aria-label") &&
                  r.left.attr("aria-label", "previous slide"),
                r.right.attr("role", "button"),
                r.right.attr("tabindex", "0"),
                r.right.attr("aria-controls", a),
                void 0 === r.right.attr("aria-label") &&
                  r.right.attr("aria-label", "next slide"),
                !l.support.transform)
              ) {
                r.left.hide(), r.right.hide(), r.nav.hide(), (u = !0);
                return;
              }
              r.el.off(h),
                r.left.off(h),
                r.right.off(h),
                r.nav.off(h),
                x(r),
                s
                  ? (r.el.on("setting" + h, C(r)), L(r), (r.hasTimer = !1))
                  : (r.el.on("swipe" + h, C(r)),
                    r.left.on("click" + h, T(r)),
                    r.right.on("click" + h, A(r)),
                    r.left.on("keydown" + h, _(r, T)),
                    r.right.on("keydown" + h, _(r, A)),
                    r.nav.on("keydown" + h, "> div", C(r)),
                    r.config.autoplay &&
                      !r.hasTimer &&
                      ((r.hasTimer = !0), (r.timerCount = 1), O(r)),
                    r.el.on("mouseenter" + h, E(r, !0, "mouse")),
                    r.el.on("focusin" + h, E(r, !0, "keyboard")),
                    r.el.on("mouseleave" + h, E(r, !1, "mouse")),
                    r.el.on("focusout" + h, E(r, !1, "keyboard"))),
                r.nav.on("click" + h, "> div", C(r)),
                !f &&
                  r.mask
                    .contents()
                    .filter(function () {
                      return 3 === this.nodeType;
                    })
                    .remove();
              var o = i.filter(":hidden");
              o.addClass(p);
              var c = i.parents(":hidden");
              c.addClass(p), !m && D(e, n), o.removeClass(p), c.removeClass(p);
            }
            function x(t) {
              var e = {};
              (e.crossOver = 0),
                (e.animation = t.el.attr("data-animation") || "slide"),
                "outin" === e.animation &&
                  ((e.animation = "cross"), (e.crossOver = 0.5)),
                (e.easing = t.el.attr("data-easing") || "ease");
              var n = t.el.attr("data-duration");
              if (
                ((e.duration = null != n ? parseInt(n, 10) : 500),
                k(t.el.attr("data-infinite")) && (e.infinite = !0),
                k(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0),
                k(t.el.attr("data-hide-arrows"))
                  ? (e.hideArrows = !0)
                  : t.config.hideArrows && (t.left.show(), t.right.show()),
                k(t.el.attr("data-autoplay")))
              ) {
                (e.autoplay = !0),
                  (e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3),
                  (e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10));
                var i = "mousedown" + h + " touchstart" + h;
                !s &&
                  t.el.off(i).one(i, function () {
                    L(t);
                  });
              }
              var r = t.right.width();
              (e.edge = r ? r + 40 : 100), (t.config = e);
            }
            function k(t) {
              return "1" === t || "true" === t;
            }
            function E(e, n, i) {
              return function (r) {
                if (n) e.hasFocus[i] = n;
                else {
                  if (t.contains(e.el.get(0), r.relatedTarget)) return;
                  if (
                    ((e.hasFocus[i] = n),
                    (e.hasFocus.mouse && "keyboard" === i) ||
                      (e.hasFocus.keyboard && "mouse" === i))
                  )
                    return;
                }
                n
                  ? (e.ariaLiveLabel.attr("aria-live", "polite"),
                    e.hasTimer && L(e))
                  : (e.ariaLiveLabel.attr("aria-live", "off"),
                    e.hasTimer && O(e));
              };
            }
            function _(t, e) {
              return function (n) {
                switch (n.keyCode) {
                  case a.SPACE:
                  case a.ENTER:
                    return e(t)(), n.preventDefault(), n.stopPropagation();
                }
              };
            }
            function T(t) {
              return function () {
                I(t, { index: t.index - 1, vector: -1 });
              };
            }
            function A(t) {
              return function () {
                I(t, { index: t.index + 1, vector: 1 });
              };
            }
            function O(t) {
              L(t);
              var e = t.config,
                n = e.timerMax;
              if (!(n && t.timerCount++ > n))
                t.timerId = window.setTimeout(function () {
                  if (null != t.timerId && !s) A(t)(), O(t);
                }, e.delay);
            }
            function L(t) {
              window.clearTimeout(t.timerId), (t.timerId = null);
            }
            function C(n) {
              return function (r, o) {
                o = o || {};
                var u,
                  c,
                  l,
                  d = n.config;
                if (s && "setting" === r.type) {
                  if ("prev" === o.select) return T(n)();
                  if ("next" === o.select) return A(n)();
                  if ((x(n), $(n), null == o.select)) return;
                  return (
                    (u = n),
                    (c = o.select),
                    (l = null),
                    c === u.slides.length && (w(), $(u)),
                    e.each(u.anchors, function (e, n) {
                      t(e.els).each(function (e, i) {
                        t(i).index() === c && (l = n);
                      });
                    }),
                    null != l && I(u, { index: l, immediate: !0 }),
                    void 0
                  );
                }
                if ("swipe" === r.type)
                  return d.disableSwipe || i.env("editor")
                    ? void 0
                    : "left" === o.direction
                    ? A(n)()
                    : "right" === o.direction
                    ? T(n)()
                    : void 0;
                if (n.nav.has(r.target).length) {
                  var f = t(r.target).index();
                  if (
                    ("click" === r.type && I(n, { index: f }),
                    "keydown" === r.type)
                  )
                    switch (r.keyCode) {
                      case a.ENTER:
                      case a.SPACE:
                        I(n, { index: f }), r.preventDefault();
                        break;
                      case a.ARROW_LEFT:
                      case a.ARROW_UP:
                        R(n.nav, Math.max(f - 1, 0)), r.preventDefault();
                        break;
                      case a.ARROW_RIGHT:
                      case a.ARROW_DOWN:
                        R(n.nav, Math.min(f + 1, n.pages)), r.preventDefault();
                        break;
                      case a.HOME:
                        R(n.nav, 0), r.preventDefault();
                        break;
                      case a.END:
                        R(n.nav, n.pages), r.preventDefault();
                        break;
                      default:
                        return;
                    }
                }
              };
            }
            function R(t, e) {
              var n = t.children().eq(e).focus();
              t.children().not(n);
            }
            function I(e, n) {
              n = n || {};
              var i = e.config,
                r = e.anchors;
              e.previous = e.index;
              var a = n.index,
                u = {};
              a < 0
                ? ((a = r.length - 1),
                  i.infinite &&
                    ((u.x = -e.endX), (u.from = 0), (u.to = r[0].width)))
                : a >= r.length &&
                  ((a = 0),
                  i.infinite &&
                    ((u.x = r[r.length - 1].width),
                    (u.from = -r[r.length - 1].x),
                    (u.to = u.from - u.x))),
                (e.index = a);
              var c = e.nav
                .children()
                .eq(a)
                .addClass("w-active")
                .attr("aria-pressed", "true")
                .attr("tabindex", "0");
              e.nav
                .children()
                .not(c)
                .removeClass("w-active")
                .attr("aria-pressed", "false")
                .attr("tabindex", "-1"),
                i.hideArrows &&
                  (e.index === r.length - 1 ? e.right.hide() : e.right.show(),
                  0 === e.index ? e.left.hide() : e.left.show());
              var d = e.offsetX || 0,
                f = (e.offsetX = -r[e.index].x),
                h = { x: f, opacity: 1, visibility: "" },
                p = t(r[e.index].els),
                w = t(r[e.previous] && r[e.previous].els),
                g = e.slides.not(p),
                b = i.animation,
                y = i.easing,
                x = Math.round(i.duration),
                k = n.vector || (e.index > e.previous ? 1 : -1),
                E = "opacity " + x + "ms " + y,
                _ = "transform " + x + "ms " + y;
              if (
                (p.find(o).removeAttr("tabindex"),
                p.removeAttr("aria-hidden"),
                p.find("*").removeAttr("aria-hidden"),
                g.find(o).attr("tabindex", "-1"),
                g.attr("aria-hidden", "true"),
                g.find("*").attr("aria-hidden", "true"),
                !s && (p.each(v.intro), g.each(v.outro)),
                n.immediate && !m)
              ) {
                l(p).set(h), O();
                return;
              }
              if (e.index !== e.previous) {
                if (
                  (!s && e.ariaLiveLabel.text(`Slide ${a + 1} of ${r.length}.`),
                  "cross" === b)
                ) {
                  var T = Math.round(x - x * i.crossOver),
                    A = Math.round(x - T);
                  (E = "opacity " + T + "ms " + y),
                    l(w).set({ visibility: "" }).add(E).start({ opacity: 0 }),
                    l(p)
                      .set({
                        visibility: "",
                        x: f,
                        opacity: 0,
                        zIndex: e.depth++,
                      })
                      .add(E)
                      .wait(A)
                      .then({ opacity: 1 })
                      .then(O);
                  return;
                }
                if ("fade" === b) {
                  l(w).set({ visibility: "" }).stop(),
                    l(p)
                      .set({
                        visibility: "",
                        x: f,
                        opacity: 0,
                        zIndex: e.depth++,
                      })
                      .add(E)
                      .start({ opacity: 1 })
                      .then(O);
                  return;
                }
                if ("over" === b) {
                  (h = { x: e.endX }),
                    l(w).set({ visibility: "" }).stop(),
                    l(p)
                      .set({
                        visibility: "",
                        zIndex: e.depth++,
                        x: f + r[e.index].width * k,
                      })
                      .add(_)
                      .start({ x: f })
                      .then(O);
                  return;
                }
                i.infinite && u.x
                  ? (l(e.slides.not(w))
                      .set({ visibility: "", x: u.x })
                      .add(_)
                      .start({ x: f }),
                    l(w)
                      .set({ visibility: "", x: u.from })
                      .add(_)
                      .start({ x: u.to }),
                    (e.shifted = w))
                  : (i.infinite &&
                      e.shifted &&
                      (l(e.shifted).set({ visibility: "", x: d }),
                      (e.shifted = null)),
                    l(e.slides).set({ visibility: "" }).add(_).start({ x: f }));
              }
              function O() {
                (p = t(r[e.index].els)),
                  (g = e.slides.not(p)),
                  "slide" !== b && (h.visibility = "hidden"),
                  l(g).set(h);
              }
            }
            function D(e, n) {
              var i = t.data(n, h);
              if (!!i) {
                if (
                  (function (t) {
                    var e = t.mask.width();
                    return t.maskWidth !== e && ((t.maskWidth = e), !0);
                  })(i)
                )
                  return $(i);
                s &&
                  (function (e) {
                    var n = 0;
                    return (
                      e.slides.each(function (e, i) {
                        n += t(i).outerWidth(!0);
                      }),
                      e.slidesWidth !== n && ((e.slidesWidth = n), !0)
                    );
                  })(i) &&
                  $(i);
              }
            }
            function $(e) {
              var n = 1,
                i = 0,
                r = 0,
                a = 0,
                o = e.maskWidth,
                u = o - e.config.edge;
              u < 0 && (u = 0),
                (e.anchors = [{ els: [], x: 0, width: 0 }]),
                e.slides.each(function (s, c) {
                  r - i > u &&
                    (n++,
                    (i += o),
                    (e.anchors[n - 1] = { els: [], x: r, width: 0 })),
                    (a = t(c).outerWidth(!0)),
                    (r += a),
                    (e.anchors[n - 1].width += a),
                    e.anchors[n - 1].els.push(c);
                  var l = s + 1 + " of " + e.slides.length;
                  t(c).attr("aria-label", l), t(c).attr("role", "group");
                }),
                (e.endX = r),
                s && (e.pages = null),
                e.nav.length &&
                  e.pages !== n &&
                  ((e.pages = n),
                  (function (e) {
                    var n,
                      i = [],
                      r = e.el.attr("data-nav-spacing");
                    r && (r = parseFloat(r) + "px");
                    for (var a = 0, o = e.pages; a < o; a++)
                      (n = t('<div class="w-slider-dot" data-wf-ignore />'))
                        .attr(
                          "aria-label",
                          "Show slide " + (a + 1) + " of " + o
                        )
                        .attr("aria-pressed", "false")
                        .attr("role", "button")
                        .attr("tabindex", "-1"),
                        e.nav.hasClass("w-num") && n.text(a + 1),
                        null != r &&
                          n.css({ "margin-left": r, "margin-right": r }),
                        i.push(n);
                    e.nav.empty().append(i);
                  })(e));
              var c = e.index;
              c >= n && (c = n - 1), I(e, { immediate: !0, index: c });
            }
            return c;
          })
        );
      },
    },
    e = {};
  function n(i) {
    var r = e[i];
    if (void 0 !== r) return r.exports;
    var a = (e[i] = { exports: {} });
    return t[i](a, a.exports, n), a.exports;
  }
  (n.rv = function () {
    return "1.1.8";
  }),
    (n.ruid = "bundler=rspack@1.1.8");
  n(461),
    n(624),
    n(286),
    n(334),
    n(338),
    n(695),
    n(322),
    n(655),
    n(345),
    n(527);
})();

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { app } from "./firebase-init.js";

const auth = getAuth(app);

window.signup = function () {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "index.html")
    .catch((error) => alert(error.message));
};

window.login = function () {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "index.html")
    .catch((error) => alert(error.message));
};

window.logout = function () {
  signOut(auth).then(() => window.location.href = "login.html");
};

// Optional: run on every page to show user or redirect
onAuthStateChanged(auth, (user) => {
  const userSpan = document.getElementById("user-name");
  if (user) {
    if (userSpan) userSpan.innerText = `Welcome, ${user.email}`;
  } else {
    if (!window.location.pathname.includes("login") && !window.location.pathname.includes("signup")) {
      window.location.href = "login.html";
    }
  }
});
