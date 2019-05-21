!function(W, i, b) {
    "use strict";
    var T,
        v,
        U = "ht",
        m = W[U],
        u = m.Default,
        D = [ "transitionend", "webkitTransitionEnd" ],
        w = null,
        Z = W.parseInt,
        M = W.isNaN,
        A = {
            linear : "cubic-bezier(0.250, 0.250, 0.750, 0.750)",
            ease : "cubic-bezier(0.250, 0.100, 0.250, 1.000)",
            "ease-in" : "cubic-bezier(0.420, 0.000, 1.000, 1.000)",
            "ease-out" : "cubic-bezier(0.000, 0.000, 0.580, 1.000)",
            "ease-in-out" : "cubic-bezier(0.420, 0.000, 0.580, 1.000)",
            "ease-in-quad" : "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            "ease-in-cubic" : "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            "ease-in-quart" : "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            "ease-in-quint" : "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            "ease-in-sine" : "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
            "ease-in-expo" : "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            "ease-in-circ" : "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            "ease-in-back" : "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            "ease-out-quad" : "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            "ease-out-cubic" : "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
            "ease-out-quart" : "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
            "ease-out-quint" : "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
            "ease-out-sine" : "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
            "ease-out-expo" : "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
            "ease-out-circ" : "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
            "ease-out-back" : "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            "ease-in-out-quad" : "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            "ease-in-out-cubic" : "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
            "ease-in-out-quart" : "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
            "ease-in-out-quint" : "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
            "ease-in-out-sine" : "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            "ease-in-out-expo" : "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
            "ease-in-out-circ" : "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            "ease-in-out-back" : "cubic-bezier(0.680, -0.550, 0.265, 1.550)"
        },
        Q = u.animate = function(a) {
            var f = this;
            return f instanceof Q ? ("string" == typeof a && (a = document.querySelector(a)), T === b && (T = function() {
                var c = {
                        webkitTransform : "-webkit-transform",
                        msTransform : "-ms-transform",
                        transform : "transform"
                    },
                    T = document.createElement("p");
                for (var R in c)
                    if (w != T.style[R]) return c[R];
                return w
            }()), v === b && (v = function() {
                var K = document.body.style;
                return "transition" in K || "webkitTransition" in K
            }()), f._el = a, f.$1m = {}, f.$2m = [], f.$3m = [], f.duration(), f.$4m = new m.Notifier, void 0) : new Q(a)
        };
    u.def(Q, i, {
        transform : function(O) {
            var P = this;
            return P.$3m.push(O), "-webkit-transform" === T ? (P.$5m(T, P.$3m.join(" ")), P.$6m(T), P.$5m("transform", P.$3m.join(" ")), P.$6m("transform")) : (P.$5m(T, P.$3m.join(" ")), P.$6m(T)), P
        },
        translate : function($, O) {
            $ = $ == w ? 0 : $, O = O == w ? 0 : O;
            var y = M($) ? $ : $ + "px",
                g = M(O) ? O : O + "px";
            return this.transform("translate(" + y + ", " + g + ")")
        },
        translateX : function(D) {
            return D = D == w ? 0 : D, D = M(D) ? D : D + "px", this.transform("translateX(" + D + ")")
        },
        tx : function(u) {
            this.translateX(u)
        },
        translateY : function(V) {
            return V = V == w ? 0 : V, V = M(V) ? V : V + "px", this.transform("translateY(" + V + ")")
        },
        ty : function(n) {
            this.translateY(n)
        },
        scale : function(d, c) {
            return d = M(d) ? 1 : d, c = c == w || M(c) ? d : c, this.transform("scale(" + d + ", " + c + ")")
        },
        scaleX : function(t) {
            return t = M(t) ? 1 : t, this.transform("scaleX(" + t + ")")
        },
        scaleY : function(N) {
            return N = M(N) ? 1 : N, this.transform("scaleY(" + N + ")")
        },
        rotate : function(E) {
            return E = Z(E) || 0, this.transform("rotate(" + E + "deg)")
        },
        skew : function(j, Q) {
            return j = Z(j) || 0, Q = Z(Q) || 0, this.transform("skew(" + j + "deg, " + Q + "deg)")
        },
        skewX : function(l) {
            return l = Z(l) || 0, this.transform("skewX(" + l + "deg)")
        },
        skewY : function(o) {
            return o = Z(o) || 0, this.transform("skewY(" + o + "deg)")
        },
        $7m : function(z) {
            this._el.$17m = z;
            for (var Q = 0; Q < D.length; Q++) this._el.addEventListener(D[Q], z)
        },
        $8m : function(b) {
            for (var G = 0; G < D.length; G++) this._el.removeEventListener(D[G], b);
            delete this._el.$17m
        },
        $9m : function(Z) {
            function i() {
                P.$8m(i), Z.apply(y, arguments)
            }
            var P = this,
                y = P._el;
            y.$17m && P.$8m(y.$17m), P.$7m(i)
        },
        $5m : function(j, J) {
            this.$1m[j] = J
        },
        $10m : function() {
            var Z = this.$1m,
                F = this._el.style;
            for (var x in Z) {
                var f = Z[x];
                if (x.indexOf("transition-property") >= 0) {
                    var V = F.getPropertyValue(x);
                    V && (V.indexOf(f) >= 0 ? f = V : f.indexOf(V) >= 0 || (f = V + ", " + f))
                }
                F.setProperty(x, f)
            }
        },
        $11m : function(n, V) {
            this.$5m("-webkit-" + n, V), this.$5m(n, V)
        },
        $12m : function() {
            var i = this._el.style;
            i.webkitTransition = i.transition = ""
        },
        duration : function(P) {
            return M(P) && (P = 200), this.$14m = P, this.$11m("transition-duration", P + "ms"), this
        },
        delay : function(T) {
            return T = Z(T) || 0, this.$11m("transition-delay", T + "ms"), this
        },
        ease : function(m) {
            return m = A[m] || m || "ease", this.$11m("transition-timing-function", m), this
        },
        $6m : function(W) {
            this.$2m.indexOf(W) < 0 && this.$2m.push(W)
        },
        set : function(j, L) {
            return this.$5m(j, L), this.$6m(j), this
        },
        then : function(e) {
            var P = this,
                i = this.$4m;
            if (!(e instanceof Q)) {
                var T = new Q(P._el);
                return T.$3m = this.$3m.slice(0), P.then(T), T.$15m = P, P.$16m = T, T
            }
            return i.add(function(i) {
                "end" === i.kind && e.end(P.$13m)
            }), this
        },
        pop : function() {
            return this.$15m
        },
        end : function(H) {
            var c = this,
                Z = c.$4m;
            c.$11m("transition-property", c.$2m.join(", ")), c.$10m(), H && (c.$13m = H);
            var R = function(M) {
                c.$12m(), Z.fire({
                    kind : "end"
                }), c.$16m || c.$13m && c.$13m.call(c, M)
            };
            0 !== c.$14m && v ? c.$9m(function(E) {
                u.callLater(function() {
                    R(E)
                }, w, w, 0)
            }) : R({
                target : c._el,
                mock : 1
            })
        }
    })
}(this, Object);