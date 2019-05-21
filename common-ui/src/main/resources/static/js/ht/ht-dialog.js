!function(W, u) {
    "use strict";
    var S = "ht",
        H = W[S],
        Y = "px",
        M = "left",
        C = "top",
        y = "bottom",
        _ = "right",
        V = "innerHTML",
        O = "className",
        h = "",
        z = "width",
        D = "height",
        J = "string",
        X = "position",
        L = "absolute",
        c = "0",
        r = "opacity",
        A = "background",
        l = H.Default,
        p = l.getInternal(),
        m = H.Color,
        K = l.animate,
        d = l.isTouchable,
        n = null,
        Z = (Math.sqrt, W.parseInt),
        o = W.setTimeout,
        g = (Math.round, m.titleIconBackground),
        Q = function(u) {
            return typeof u === J || u instanceof String
        },
        U = function() {
            return document
        },
        j = function(x) {
            return U().createElement(x)
        },
        f = function() {
            var K = j("div");
            return K.tabIndex = -1, K.style.outline = "none", K
        },
        P = function() {
            return j("canvas")
        },
        s = function(f, X) {
            I(f, "-webkit-transform", X), I(f, "-ms-transform", X), I(f, "transform", X)
        },
        I = function(t, j, m) {
            t.style.setProperty(j, m, n)
        },
        q = function(C, w, k) {
            l.def(H.widget[C], w, k)
        },
        R = function(w, X) {
            w.appendChild(X)
        },
        e = function(k, P) {
            k.removeChild(P)
        },
        t = function() {
            return U().body
        },
        E = function() {
            return U().documentElement
        },
        F = function() {
            return E().clientWidth
        },
        $ = function() {
            return E().clientHeight
        },
        G = function(W, H, f, d) {
            W.addEventListener(H, f, !!d)
        },
        w = function(f) {
            var r = f.touches[0];
            return r ? r : f.changedTouches[0]
        };
    p.addMethod(l, {
        dialogCloseIcon : {
            width : 100,
            height : 100,
            comps : [ {
                type : "shape",
                points : [ 10, 10, 90, 90 ],
                segments : [ 1, 2 ],
                borderWidth : 8,
                borderColor : g
            }, {
                type : "shape",
                points : [ 90, 10, 10, 90 ],
                segments : [ 1, 2 ],
                borderWidth : 8,
                borderColor : g
            } ]
        },
        dialogMaximizeIcon : {
            width : 100,
            height : 100,
            comps : [ {
                type : "rect",
                rect : [ 10, 15, 80, 75 ],
                borderWidth : 6,
                borderColor : g
            }, {
                type : "rect",
                rect : [ 10, 10, 80, 20 ],
                background : g
            } ]
        },
        dialogRestoreIcon : {
            width : 100,
            height : 100,
            comps : [ {
                type : "rect",
                rect : [ 10, 34, 56, 56 ],
                borderWidth : 8,
                borderColor : g
            }, {
                type : "rect",
                rect : [ 10, 34, 56, 14 ],
                background : g
            }, {
                type : "rect",
                rect : [ 34, 10, 56, 14 ],
                background : g
            }, {
                type : "rect",
                rect : [ 82, 10, 8, 56 ],
                background : g
            }, {
                type : "rect",
                rect : [ 66, 62, 24, 8 ],
                background : g
            } ]
        },
        dialogTitleLabelColor : l.labelSelectColor,
        dialogTitleLabelFont : (d ? "18" : "14") + "px arial, sans-serif",
        dialogContentLabelFont : l.labelFont,
        dialogTitleBackground : m.titleBackground,
        dialogHeaderBackground : m.headerBackground,
        dialogButtonBackground : "#1ABC9C",
        dialogButtonSelectBackground : "#16A085",
        dialogButtonLabelColor : "#fff"
    }, !0);
    var B = function(d) {
        var j = this;
        j.$1d = d, j.addListeners()
    };
    l.def(B, u, {
        ms_listener : 1,
        getView : function() {
            return this.$1d.getView()
        },
        clear : function() {
            delete this.$2d
                ,
                delete this.$3d
                ,
                delete this.$4d
                ,
                delete this.$5d
        },
        handle_touchstart : function(Q) {
            var O = this,
                n = O.$1d,
                t = n.$6d,
                L = n._config,
                p = n.$7d,
                W = Q,
                z = Q.target;
            if (p.contains(z) || l.preventDefault(Q), l.isLeftButton(Q)) {
                d && (W = w(Q));
                var k = O.$8d = {
                    x : W.pageX,
                    y : W.pageY
                };
                O.$9d = {
                    x : k.x,
                    y : k.y
                }, !L.maximized && L.draggable && t.contains(z) && (O.$4d = !0, l.startDragging(O, Q)), O.handle_mousemove(Q) && (O.$2d = !0, l.startDragging(O, Q)), p.contains(Q.target) || n.$41d.focus()
            }
        },
        handle_mousedown : function(j) {
            this.handle_touchstart(j)
        },
        handle_touchend : function(k) {
            if (l.isLeftButton(k) && !this.$5d && !this.$3d) {
                var c = this,
                    E = c.$1d,
                    x = k.target,
                    j = E._config,
                    K = E.$18d,
                    g = E.$16d;
                for (j.closable && K.contains(x) && E.hide(), j.maximizable && g.contains(x) && (j.maximized ? E.restore() : E.maximize()); x && (x.className || "").indexOf("dialog-button") < 0;) x = x.parentNode;
                x && x.buttonItem && E.action && E.action(x.buttonItem, k),
                    delete c.$8d
                    ,
                    delete c.$9d
            }
        },
        handle_mouseup : function(j) {
            this.handle_touchend(j)
        },
        handleWindowTouchEnd : function(h) {
            var b = this,
                w = b.$1d,
                s = w.$10d;
            b.$2d && b.$3d ? s.fire({
                kind : "endResize",
                target : w,
                originEvent : h
            }) : b.$4d && b.$5d && s.fire({
                    kind : "endMove",
                    target : w,
                    originEvent : h
                }), this.clear()
        },
        handleWindowMouseUp : function(V) {
            this.handleWindowTouchEnd(V)
        },
        handle_mousemove : function(X) {
            var M = this.$1d._config;
            if (M.maximized) return !1;
            if ("w" !== M.resizeMode && "h" !== M.resizeMode && "wh" !== M.resizeMode) return !1;
            var n = this,
                j = n.getView(),
                Y = j.querySelector(".resize-area"),
                F = Y.getBoundingClientRect(),
                z = {
                    x : F.left,
                    y : F.top,
                    width : F.width,
                    height : F.height
                };
            X = d ? w(X) : X;
            var O = X.clientX,
                U = X.clientY,
                L = {
                    x : O,
                    y : U
                };
            return l.containsPoint(z, L) ? (I(j, "cursor", "nwse-resize"), !0) : (I(j, "cursor", h), void 0)
        },
        handleWindowTouchMove : function(H) {
            H.preventDefault();
            var b = H;
            d && (b = w(H));
            var S = this,
                B = S.$8d,
                R = S.$9d;
            if (!(R.x == B.x && R.y == B.y && l.getDistance(R, {
                    x : b.pageX,
                    y : b.pageY
                }) <= 1)) {
                var e = S.$1d,
                    E = e._config,
                    k = e.$21d,
                    v = E.resizeMode || "wh",
                    r = b.pageX - B.x,
                    P = b.pageY - B.y;
                if (S.$2d) {
                    var K = k.offsetWidth,
                        O = k.offsetHeight,
                        A = K + r,
                        L = O + P;
                    if (A = Math.max(A, 50), L = Math.max(L, 50), "center" === E.position || E.position == n) {
                        var u = {},
                            J = k.getBoundingClientRect();
                        u.x = J.left, u.y = J.top, E.position = u
                    }
                    "w" === v ? (e.setSize(A, O), B.x += A - K) : "h" === v ? (e.setSize(K, L), B.y += L - O) : "wh" === v && (e.setSize(A, L), B.x += A - K, B.y += L - O), S.$3d ? e.$10d.fire({
                        kind : "betweenResize",
                        target : e,
                        originEvent : H
                    }) : (S.$3d = !0, e.$10d.fire({
                        kind : "beginResize",
                        target : e,
                        originEvent : H
                    }))
                } else if (S.$4d) {
                    var N = k.getBoundingClientRect(),
                        G = N.width,
                        t = N.height,
                        f = F(),
                        q = $(),
                        Q = Z(k.style.left) || 0,
                        m = Z(k.style.top) || 0,
                        U = Q + r,
                        V = m + P;
                    U + G > f && (U = f - G), V + t > q && (V = q - t), 0 > U && (U = 0), 0 > V && (V = 0);
                    var T = U - Q,
                        o = V - m;
                    I(k, M, U + Y), I(k, C, V + Y), B.x += T, B.y += o, E.position = {
                        x : U,
                        y : V
                    }, S.$5d ? e.$10d.fire({
                        kind : "betweenMove",
                        target : e,
                        originEvent : H
                    }) : (S.$5d = !0, e.$10d.fire({
                        kind : "beginMove",
                        target : e,
                        originEvent : H
                    }))
                }
            }
        },
        handleWindowMouseMove : function(m) {
            this.handleWindowTouchMove(m)
        },
        handleWindowResize : function() {
            var i = this,
                d = i,
                r = d._config,
                P = d.$21d,
                K = F(),
                N = $(),
                q = r.width,
                u = r.height,
                T = r.position || "center";
            r.maximized ? (I(P, z, K + Y), I(P, D, N + Y), I(P, C, c), I(P, M, c)) : (I(P, z, q + Y), I(P, D, u + Y), "center" === T ? (I(P, M, (K - q) / 2 + Y), I(P, C, (N - u) / 2 + Y)) : (I(P, M, T.x + Y), I(P, C, T.y + Y)))
        },
        handle_mousewheel : function($) {
            $.stopPropagation()
        },
        handle_DOMMouseScroll : function(N) {
            N.stopPropagation()
        }
    }), H.widget.Dialog = function(U) {
        var J = this,
            j = J._view = f();
        j[O] = "ht-widget-dialog", I(j, X, L), l.baseZIndex != n && I(j, "z-index", l.baseZIndex + "");
        var C = J.$11d = new B(J);
        J.bindingHandleWindowResize = C.handleWindowResize.bind(J), J.$10d = new H.Notifier, U && J.setConfig(U)
    }, q("Dialog", u, {
        ms_v : 1,
        setTitle : function(r) {
            this._config.title = r, this.getView().querySelector(".dialog-container-title span").innerHTML = r
        },
        $31d : function() {
            var $ = this,
                s = $.$6d = f(),
                c = $._config,
                G = $.$12d = $.$13d();
            s[O] = "dialog-container-title", I(s, "cursor", "default"), I(s, "white-space", "nowrap"), I(s, "overflow", "hidden"), I(s, "font", l.dialogTitleLabelFont), I(s, A, c.titleBackground || l.dialogTitleBackground), I(s, "color", c.titleColor || l.dialogTitleLabelColor);
            var Z = j("span"),
                P = $.$25d();
            if (c.titleAlign && I(s, "text-align", c.titleAlign), c.titleIcon) {
                var k = $.$14d = $.$15d();
                R(s, k)
            }
            if (Z[V] = c.title, R(s, Z), c.maximizable) {
                var i = $.$16d = $.$17d();
                R(G, i)
            }
            if (c.closable) {
                var h = $.$18d = $.$19d();
                R(G, h)
            }
            return R(s, G), I(s, "display", "block"), I(s, "line-height", P + Y), s
        },
        $13d : function() {
            var N = f();
            return I(N, X, L), I(N, M, c), I(N, _, 5 + Y), I(N, C, c), I(N, y, c), I(N, "text-align", _), I(N, "white-space", "nowrap"), N[O] = "dialog-title-controls", N
        },
        $20d : function() {
            var _ = this.$21d = f(),
                S = this._config,
                j = S.borderWidth;
            return I(_, X, "fixed"), I(_, "box-shadow", "rgba(0, 0, 0, 0.2) 0px 5px 10px 0px"), I(_, "padding", c + " " + j + Y + " " + j + Y + " " + j + Y), I(_, "box-sizing", "border-box"), I(_, "-moz-box-sizing", "border-box"), _[O] = "dialog-container", I(_, A, S.titleBackground || l.dialogTitleBackground), _
        },
        $22d : function() {
            var r,
                s = this,
                W = s._config,
                T = s.$7d = f(),
                J = W.content,
                B = 0,
                v = W.contentPadding || 0;
            W.buttons != n && W.buttons.length > 0 && (B = 32), Q(J) ? T[V] = J : J.getView ? (r = J.getView(), R(T, r)) : (r = J, R(T, r)), I(T, X, L), I(T, "font", l.dialogContentLabelFont), R(t(), T);
            var c = T.offsetWidth + 1,
                E = T.offsetHeight,
                p = s.$25d();
            return W.width == n && (W.width = c + 10 + 2 * v), W.height == n && (W.height = E + p + B + 5 + 2 * v), e(t(), T), r && (I(r, "box-sizing", "border-box"), I(r, "-moz-box-sizing", "border-box"), I(r, z, "100%"), I(r, D, "100%")), T[O] = "dialog-content", I(T, C, p + v + Y), I(T, y, B + v + Y), I(T, M, v + Y), I(T, _, v + Y), I(T, "overflow", "hidden"), T
        },
        $23d : function() {
            var o = this.$41d = f();
            return o[O] = "dialog-overlay", I(o, z, "100%"), I(o, D, "100%"), I(o, X, "fixed"), I(o, C, c), I(o, M, c), I(o, A, "rgba(235, 235, 235, 0.7)"), o
        },
        _config : n,
        setSize : function(w, F) {
            var y = this,
                O = y._config;
            O && (O.width = w, O.height = F, y.isShowing() && (y.bindingHandleWindowResize(), y.iv()))
        },
        getConfig : function() {
            return this._config
        },
        $24d : function() {
            var L = this._config,
                A = L.titleIconSize || 16;
            return d && (A *= 1.2), A
        },
        $25d : function() {
            var z = this._config,
                T = z.titleHeight || l.widgetTitleHeight;
            return T
        },
        $26d : function(Q) {
            I(Q, "cursor", "pointer"), I(Q, "display", "inline-block"), I(Q, "margin-right", (d ? 8 : 4) + Y), I(Q, "vertical-align", C)
        },
        $27d : function() {
            var $ = this.$30d = f(),
                v = 10;
            return d && (v = 20), I($, z, v + Y), I($, D, v + Y), I($, X, L), I($, y, c), I($, _, c), $[O] = "resize-area", $
        },
        $15d : function() {
            var s = this,
                u = P();
            u[O] = "dialog-title-control dialog-title-control-icon";
            var x = s.$25d(),
                I = s.$24d();
            return s.$26d(u), p.setCanvas(u, I, x), u
        },
        $17d : function() {
            var Y = P();
            Y[O] = "dialog-title-control dialog-title-control-maximize";
            var C = this.$25d(),
                h = this.$24d();
            return this.$26d(Y), p.setCanvas(Y, h, C), Y
        },
        $19d : function() {
            var m = P();
            m[O] = "dialog-title-control dialog-title-control-close";
            var b = this.$25d(),
                I = this.$24d();
            return this.$26d(m), p.setCanvas(m, I, b), m
        },
        $28d : function() {
            var m = f();
            return I(m, A, "white"), I(m, z, "100%"), I(m, D, "100%"), I(m, X, "relative"), m
        },
        $29d : function() {
            var V = this,
                i = f();
            I(i, "line-height", 32 + Y), I(i, X, L), I(i, y, c), I(i, M, c), I(i, "white-space", "nowrap"), I(i, "overflow", "hidden"), I(i, _, c), I(i, A, l.dialogHeaderBackground), i[O] = "dialog-container-buttons";
            var x = this._config,
                N = x.buttonsAlign || _,
                v = 0;
            return I(i, "text-align", N), V.$42d = [], x.buttons.forEach(function(K) {
                var Z = new H.widget.Button,
                    F = Z.getView();
                F[O] = "dialog-button", F.buttonItem = K, V.$42d.push(Z), Z.setBorderColor(n), Z.setBackground(l.dialogButtonBackground), Z.setSelectBackground(l.dialogButtonSelectBackground), Z.setLabelColor(l.dialogButtonLabelColor), I(F, X, "static"), I(F, "display", "inline-block"), I(F, "text-align", M), I(F, "height", 24 + Y);
                var t = d ? 10 : 5;
                N === M || N === _ ? I(F, "margin-" + N, t + Y) : 0 === v || I(F, "margin-" + M, t + Y), I(F, "vertical-align", "middle");
                var D = l.getTextSize(Z.getLabelFont(), K.label).width + 10;
                Z.onClicked = function(h) {
                    K.action && K.action.call(V, K, h)
                }, Z.setLabel(K.label), I(F, z, D + Y), R(i, Z.getView()), v++
            }), i
        },
        setConfig : function(y) {
            if (y) {
                var Q = this,
                    t = Q._view;
                Q._config = y, Q.action = y.action, t[V] = h, y.borderWidth == n && (y.borderWidth = 5);
                var X = Q.$23d(),
                    F = Q.$28d(),
                    o = Q.$31d(),
                    T = Q.$22d(),
                    L = Q.$20d(),
                    e = Q.$30d = Q.$27d();
                if (R(t, X), R(t, L), R(L, F), R(F, o), R(F, T), y.buttons != n && y.buttons.length > 0) {
                    var k = Q.$29d();
                    R(F, k)
                }
                R(L, e), y.maximized ? (y.maximized = !1, Q.bindingHandleWindowResize(), Q.maximize(!0)) : Q.bindingHandleWindowResize(), Q.isShowing() && Q.iv()
            }
        },
        hide : function() {
            var B = this,
                j = B.$21d,
                g = B.$41d,
                G = B._view;
            G[O] = "ht-widget-dialog", K(j).duration(200).scale(.7).set(r, c).end(function() {
                B.onHidden && B.onHidden(), e(t(), G), B.$10d.fire({
                    kind : "hide",
                    target : B
                })
            }), K(g).duration(200).set(r, c).end(), W.removeEventListener("resize", B.bindingHandleWindowResize)
        },
        isShowing : function() {
            return t().contains(this._view)
        },
        $32d : function() {
            var B = this,
                $ = B._config,
                f = B.$21d;
            s(f, h), B.iv(), $.maximized ? B.$10d.fire({
                kind : "maximize",
                target : B
            }) : B.$10d.fire({
                kind : "restore",
                target : B
            })
        },
        maximize : function(p) {
            var a = this,
                E = a.$21d,
                t = a._config;
            if (!t.maximized) {
                t.maximized = !0, a.$33d(), a.$16d[O] = "dialog-title-control dialog-title-control-minimize";
                var B = F(),
                    T = $(),
                    H = t.width,
                    o = t.height,
                    N = Z(E.style.left) || 0,
                    k = Z(E.style.top) || 0;
                a.$36d = H, a.$37d = o, a.$34d = N, a.$35d = k;
                var S = p ? 0 : 200;
                K(E).duration(S).set(M, c).set(C, c).set(z, B + Y).set(D, T + Y).end(function() {
                    a.$32d()
                })
            }
        },
        restore : function() {
            var $ = this,
                s = $.$34d,
                J = $.$35d,
                T = $.$36d,
                g = $.$37d,
                P = $._config;
            if (P.maximized && (P.maximized = !1, $.$33d(), $.$16d[O] = "dialog-title-control dialog-title-control-maximize", $.isShowing() && s != n && J != n && T != n && g != n)) {
                var l = $.$21d;
                K(l).duration(200).set(M, s + Y).set(C, J + Y).set(z, T + Y).set(D, g + Y).end(function() {
                    $.$32d()
                })
            }
            delete $.$34d
                ,
                delete $.$35d
                ,
                delete $.$36d
                ,
                delete $.$37d
        },
        show : function() {
            var J = this,
                m = J._view,
                _ = J._config,
                l = J.$21d,
                f = J.$41d;
            _ && _.zIndex != n && I(m, "z-index", _.zIndex + h), R(t(), m), s(l, "scale(0.7)"), I(l, r, c), J.iv(), J.validate(), J._view[O] += " dialog-show", o(function() {
                K(l).duration(200).scale(1).set(r, "1").end(function() {
                    I(l, z, l.clientWidth + Y), I(l, D, l.clientHeight + Y), J.onShown && J.onShown(), J.$10d.fire({
                        kind : "show",
                        target : J
                    })
                }), K(f).duration(200).set(r, "1").end(), G(W, "resize", J.bindingHandleWindowResize)
            }, 30)
        },
        addEventListener : function(B, f, H) {
            this.$10d.add(B, f, H)
        },
        removeEventListener : function(C, l) {
            this.$10d.remove(C, l)
        },
        $38d : function(S, B, o, E) {
            var Z = p.initContext(S);
            p.translateAndScale(Z, 0, 0, 1), Z.clearRect(0, 0, o, o);
            var v = (o - E) / 2;
            l.drawStretchImage(Z, l.getImage(B), "fill", 0, v, E, E), Z.restore()
        },
        $33d : function() {
            var C = this,
                P = C._config,
                b = C.$16d,
                Z = P.maximized ? l.dialogRestoreIcon : l.dialogMaximizeIcon;
            if (b && Z) {
                var X = C.$25d(),
                    t = C.$24d();
                C.$38d(b, l.getImage(Z), X, t)
            }
        },
        $39d : function() {
            var s = this,
                Y = s._config,
                L = s.$14d,
                n = Y.titleIcon;
            if (L && n) {
                var o = s.$25d(),
                    T = s.$24d();
                s.$38d(L, l.getImage(n), o, T)
            }
        },
        $40d : function() {
            var N = this,
                E = N.$18d,
                R = l.dialogCloseIcon;
            if (E && R) {
                var H = N.$25d(),
                    n = N.$24d();
                N.$38d(E, l.getImage(R), H, n)
            }
        },
        invalidate : function(f) {
            var S = this,
                q = S.$42d;
            S._68I || (S._68I = 1, l.callLater(S.validate, S, n, f), S.onInvalidated && S.onInvalidated(), S._41O("invalidate"));
            var p = S._config.content;
            p.invalidate && p.invalidate(), q && q.forEach(function(I) {
                I.iv()
            })
        },
        validateImpl : function() {
            var w = this;
            w.$40d(), w.$33d(), w.$39d()
        }
    })
}(this, Object);