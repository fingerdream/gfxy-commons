!function(w, b) {
    "use strict";
    var D = "ht",
        X = w[D],
        Z = "position",
        n = "absolute",
        S = "px",
        x = "left",
        g = "top",
        P = "innerHTML",
        d = "className",
        N = "width",
        K = "height",
        T = "0",
        W = "▶",
        U = "display",
        u = "none",
        G = "visibility",
        C = "user-select",
        q = "margin",
        B = "padding",
        $ = null,
        M = X.Color,
        L = X.Default,
        J = L.getInternal(),
        s = w.setTimeout,
        v = w.setInterval,
        Q = w.clearTimeout,
        V = w.clearInterval,
        I = w.parseInt,
        m = L.isLeftButton,
        j = L.isDragging,
        F = L.startDragging,
        R = L.getDistance,
        c = L.isTouchable,
        Y = M.widgetIconHighlight,
        h = M.widgetIconBorder,
        o = M.widgetIconGradient,
        O = function() {
            return document
        },
        H = function(v, c) {
            return v.querySelectorAll(c)
        },
        E = function(X, s) {
            var a = O().createElement(X);
            return "ul" === X && (A(a, Z, "relative"), A(a, q, T), A(a, B, T), A(a, "list-style", u), A(a, "box-sizing", "border-box"), A(a, "-moz-box-sizing", "border-box"), A(a, U, "inline-block"), A(a, "vertical-align", "text-bottom"), A(a, "border", "1px solid " + L.contextMenuBorderColor), A(a, "box-shadow", "0 0 16px 1px " + L.contextMenuShadowColor), A(a, "overflow", "hidden"), s || A(a, "border-radius", 5 + S)), a
        },
        t = function(r) {
            var H = r.touches[0];
            return H ? H : r.changedTouches[0]
        },
        r = function() {
            return E("div")
        },
        e = function() {
            return E("canvas")
        },
        A = function(H, _, g) {
            H.style.setProperty(_, g, $)
        },
        f = function(t, d, m) {
            L.def(X.widget[t], d, m)
        },
        y = function(I, n) {
            I.appendChild(n)
        },
        z = function(A, Q) {
            A.removeChild(Q)
        },
        k = function() {
            return O().body
        },
        l = function(l, J, i, V) {
            l.addEventListener(J, i, !!V)
        },
        a = function(w, e, m, P) {
            w.removeEventListener(e, m, !!P)
        };
    J.addMethod(L, {
        contextMenuCheckIcon : {
            width : 16,
            height : 16,
            comps : [ {
                type : "border",
                rect : [ 1, 1, 14, 14 ],
                width : 1,
                color : h
            }, {
                type : "shape",
                points : [ 13, 3, 7, 12, 4, 8 ],
                borderWidth : 2,
                borderColor : Y
            } ]
        },
        contextMenuRadioIcon : {
            width : 16,
            height : 16,
            comps : [ {
                type : "circle",
                rect : [ 2, 2, 12, 12 ],
                borderWidth : 1,
                borderColor : h
            }, {
                type : "circle",
                rect : [ 4, 4, 8, 8 ],
                borderWidth : 1,
                borderColor : Y,
                gradient : L.imageGradient,
                gradientColor : o,
                background : Y
            } ]
        },
        contextMenuLabelFont : (c ? "16" : "13") + "px arial, sans-serif",
        contextMenuLabelColor : "#000",
        contextMenuBackground : "#fff",
        contextMenuDisabledLabelColor : "#888",
        contextMenuHoverBackground : "#648BFE",
        contextMenuHoverLabelColor : "#fff",
        contextMenuSeparatorWidth : 1,
        contextMenuSeparatorColor : "#E5E5E5",
        contextMenuScrollerColor1 : "#FDFDFD",
        contextMenuScrollerColor2 : "#D3D3D3",
        contextMenuScrollerBorderColor : "#C3C3C3",
        contextMenuBorderColor : "#C3C3C3",
        contextMenuShadowColor : "rgba(128, 128, 128, 0.5)"
    }, !0);
    var p = function(A) {
        var D = this,
            e = A._view;
        if (D.$11b = A, D.addListeners(), l(e, "contextmenu", function(s) {
                s.preventDefault()
            }), !c) {
            var T = D.$37b = D.$36b.bind(D);
            l(e, "mouseover", T), l(e, "mouseout", T)
        }
    };
    L.def(p, b, {
        ms_listener : 1,
        getView : function() {
            return this.$11b._view
        },
        handle_touchstart : function(R) {
            if (L.preventDefault(R), m(R)) {
                for (var e = this, D = e.$11b, X = e.getView(), J = X.children, G = 0; G < J.length; G++) {
                    var V = J[G],
                        E = V.$24b,
                        q = V.$25b;
                    if (E && E.contains(R.target)) return D.scrollUp(V), e.$28b = s(function() {
                        e.$29b = v(function() {
                            D.scrollUp(V)
                        }, 100)
                    }, 500), F(e, R), void 0;
                    if (q && q.contains(R.target)) return D.scrollDown(V), e.$28b = s(function() {
                        e.$29b = v(function() {
                            D.scrollDown(V)
                        }, 100)
                    }, 500), F(e, R), void 0
                }
                c && (R = t(R)), e.$30b = {
                    x : R.pageX,
                    y : R.pageY
                }
            }
        },
        handle_mousedown : function(G) {
            this.handle_touchstart(G)
        },
        handle_touchend : function(q) {
            if (m(q)) {
                var r = this,
                    l = r.$30b,
                    k = c ? {
                        x : t(q).pageX,
                        y : t(q).pageY
                    } : {
                        x : q.pageX,
                        y : q.pageY
                    };
                if (!l || R(l, k) > 1) return delete r.$30b
                    , void 0;
                for (var Z = r.getView(), j = r.$11b, C = q.target, T = $, G = $, O = j._items, Y = Z.$26b, E = 0; E < Y.length; E++)
                    if (G = Y[E], G.contains(C)) {
                        T = G.getAttribute("data-id");break
                    }
                if (T && O) {
                    var A = j.$17b(O, function(p) {
                        return p._id === T
                    });
                    if (A) {
                        var b = !1;
                        A.disabled instanceof Function ? b = A.disabled.call(j, A) : A.disabled === !0 && (b = !0), b || (A.items ? c && r.$36b(G, !0) : j.$1b(A, q))
                    }
                }
                delete r.$30b
            }
        },
        $36b : function(B, R) {
            if (!j()) {
                var v,
                    F = this,
                    h = F.$11b,
                    T = F.getView(),
                    I = h.$20b || T.children[0],
                    q = h.$19b,
                    W = T.$26b,
                    m = T.children,
                    z = B.target,
                    Y = T.getBoundingClientRect(),
                    w = L.getWindowInfo(),
                    _ = w.width,
                    a = w.height,
                    b = function(e) {
                        for (var Q = 0; Q < m.length; Q++) {
                            var w = m[Q],
                                f = new RegExp(e + "$"),
                                l = w[d];
                            if (l && (f.test(l) || l.indexOf(e + " ") >= 0)) return w
                        }
                    },
                    C = function(i) {
                        for (var $ = 0; $ < W.length; $++) {
                            var n = W[$],
                                T = new RegExp(i + "$"),
                                N = n[d];
                            if (N && (T.test(N) || N.indexOf(i + " ") >= 0)) return n
                        }
                    },
                    Q = function(X) {
                        var T = C("menu-item" + X.$45b),
                            q = T.getBoundingClientRect(),
                            y = q.top - Y.top,
                            u = q.left - Y.left;
                        A(X, g, y + S), A(X, x, u + q.width + S);
                        var s = X.getBoundingClientRect(),
                            M = s.top,
                            i = s.left,
                            U = s.height,
                            K = s.width,
                            j = M + U + 2,
                            w = i + K + 2;
                        j > a && A(X, g, y + a - j + S), w > _ && A(X, x, u - K + S)
                    };
                if (R)
                    v = B;else {
                    if ("mouseover" === B.type) {
                        for (var U = 0; U < W.length; U++) {
                            var X = W[U];
                            if (X.contains(z)) {
                                v = X;break
                            }
                        }
                        if (!v && q) {
                            var i = q.parentNode,
                                Z = b("submenu" + q.getAttribute("data-id"));
                            (Z && Z.contains(z) || i && i.contains(z)) && (v = q)
                        }
                    } else if ("mouseout" === B.type) {
                        for (var H = !1, l = B.relatedTarget, U = 0; U < m.length; U++) {
                            var s = m[U];
                            if ("hidden" !== s.style.visibility && s.contains(l)) {
                                H = !0;break
                            }
                        }
                        if (H) return
                    }
                    !v && I && (v = C("menu-item" + (I.$45b || "NaN")))
                }
                if (v != q) {
                    if (q)
                        for (var n = q; n;) {
                            n[d] = n[d].replace(" menu-item-hover", ""), n[d].indexOf("disabled") < 0 && (A(n, "background-color", L.contextMenuBackground), A(n, "color", L.contextMenuLabelColor));var p = b("submenu" + n.getAttribute("data-id"));
                            p && A(p, G, "hidden");var o = n.parentNode;
                            n = C("menu-item" + (o.$45b || "NaN"))
                        }
                    if (v) {
                        for (var t = v, N = []; t;) {
                            t[d] += " menu-item-hover", t[d].indexOf("disabled") < 0 && (A(t, "background-color", L.contextMenuHoverBackground), A(t, "color", L.contextMenuHoverLabelColor));var u = b("submenu" + t.getAttribute("data-id"));
                            u && (A(u, G, "visible"), N.push(u));var o = t.parentNode;
                            t = C("menu-item" + (o.$45b || "NaN"))
                        }
                        N.reverse(), N.forEach(function(x) {
                            Q(x)
                        })
                    }
                }
                h.$19b = v, h.$20b = v ? v.parentNode : T.children[0]
            }
        },
        handle_mouseup : function(d) {
            this.handle_touchend(d)
        },
        handleWindowTouchEnd : function() {
            var T = this;
            T.$28b != $ && (Q(T.$28b),
                    delete T.$28b
            ), T.$29b != $ && (V(T.$29b),
                    delete T.$29b
            ),
                delete T.$34b
                ,
                delete T.$30b
                ,
                delete T.$35b
        },
        handleWindowMouseUp : function(H) {
            this.handleWindowTouchEnd(H)
        },
        handle_mousemove : function(_) {
            this.handle_touchmove(_)
        },
        handle_touchmove : function(y) {
            if (!j() && m(y)) {
                for (var d = this, V = d.getView().children, Y = $, M = 0; M < V.length; M++) {
                    var N = V[M];
                    if (N.contains(y.target)) {
                        Y = N;break
                    }
                }
                var f = d.$30b,
                    X = c ? {
                        x : t(y).pageX,
                        y : t(y).pageY
                    } : {
                        x : y.pageX,
                        y : y.pageY
                    };
                Y && f && R(f, X) > 2 && (F(d, y), d.$34b = Y, d.$35b = Y.$18b)
            }
        },
        handleWindowTouchMove : function(G) {
            var N = this,
                O = N.$11b,
                H = N.$34b,
                U = N.$35b,
                p = N.$30b;
            if (p && H) {
                var z = c ? {
                        x : t(G).pageX,
                        y : t(G).pageY
                    } : {
                        x : G.pageX,
                        y : G.pageY
                    },
                    w = z.y - p.y;
                w > 0 ? O.scrollUp(H, H.$18b - (U - w)) : O.scrollDown(H, U - w - H.$18b)
            }
        },
        handleWindowMouseMove : function(Y) {
            this.handleWindowTouchMove(Y)
        },
        $10b : function(y, k) {
            y.preventDefault();
            for (var G = this, j = G.getView().children, J = $, x = 0; x < j.length; x++) {
                var P = j[x];
                if (P.contains(y.target)) {
                    J = P;break
                }
            }
            if (J) {
                var X = this.$11b,
                    h = X.getRowHeight();
                Math.abs(k) > .05 && (k > 0 ? X.scrollUp(J, k * h) : 0 > k && X.scrollDown(J, -k * h))
            }
        },
        handle_mousewheel : function(X) {
            this.$10b(X, X.wheelDelta / 40)
        },
        handle_DOMMouseScroll : function(V) {
            this.$10b(V, -V.detail)
        },
        $44b : function(P) {
            this.getView().contains(P.target) || this.$11b.hide()
        },
        $41b : function(N) {
            this.$11b.show(N)
        },
        $4b : function(Y, m) {
            var f = this.$11b;
            if (m = m || f._items, m && m.length && Y.keyCode) {
                var j = [ Y.keyCode ];
                Y.shiftKey && j.push(16), Y.ctrlKey && j.push(17), Y.altKey && j.push(18), /mac/.test(w.navigator ? w.navigator.userAgent.toLowerCase() : "") ? Y.metaKey && j.push(17) : Y.metaKey && j.push(91), j.sort();
                var M = j.join(),
                    B = f.$17b(m, function(O) {
                        if (O.key) {
                            var j = O.key.slice(0);
                            return j.sort(), M === j.join()
                        }
                    });
                if (B) {
                    B.preventDefault !== !1 && Y.preventDefault();
                    var k = !1;
                    B.disabled instanceof Function ? k = B.disabled.call(f, B) : B.disabled === !0 && (k = !0), k || f.$1b(B, Y)
                }
            }
        },
        $39b : function($) {
            var W = this,
                J = t($);
            W.$32b = {
                x : J.pageX,
                y : J.pageY
            }
        },
        $38b : function(D) {
            var J = this,
                W = t(D);
            J.$31b = {
                x : W.pageX,
                y : W.pageY
            }, J.$33b = s(function() {
                J.$31b && (J.$32b ? R(J.$31b, J.$32b) < 10 && J.$11b.show(D) : J.$11b.show(D)),
                    delete J.$33b
                    ,
                    delete J.$31b
                    ,
                    delete J.$32b
            }, 600)
        },
        $40b : function() {
            var S = this;
            S.$33b != $ && (Q(S.$33b),
                    delete S.$33b
                    ,
                    delete S.$31b
                    ,
                    delete S.$32b
            )
        }
    }), X.widget.ContextMenu = function(e) {
        var J = this,
            W = J._view = r();
        W[d] = "ht-widget-contextmenu", J.setItems(e), J.$13b = new p(J), A(W, "font", L.contextMenuLabelFont), A(W, Z, n), A(W, "cursor", "default"), A(W, "-webkit-" + C, u), A(W, "-moz-" + C, u), A(W, "-ms-" + C, u), A(W, C, u), A(W, "box-sizing", "border-box"), A(W, "-moz-box-sizing", "border-box"), L.baseZIndex != $ && A(W, "z-index", I(L.baseZIndex) + 2 + ""), J.$3b = function(e) {
            J.$13b.$4b(e)
        }
    }, f("ContextMenu", b, {
        $5b : 0,
        _items : $,
        $21b : $,
        _enableGlobalKey : !1,
        ms_v : 1,
        enableGlobalKey : function() {
            var t = this,
                h = t._enableGlobalKey;
            h === !1 && (l(O(), "keydown", t.$3b), t._enableGlobalKey = !0)
        },
        disableGlobalKey : function() {
            this._enableGlobalKey = !1, a(O(), "keydown", this.$3b)
        },
        setItems : function(d) {
            this._items = d
        },
        setVisibleFunc : function(H) {
            this.$16b = H
        },
        setLabelMaxWidth : function(y) {
            this.$43b = y
        },
        $1b : function(k, A) {
            var K = this;
            if ("check" === k.type)
                k.selected = !k.selected;
            else if ("radio" === k.type) {
                var d = k.groupId;
                K.$17b(K._items, function(C) {
                    C.groupId === d && (C.selected = !1)
                }), k.selected = !0
            }
            if (K.hide(), k.action) k.action.apply(k.scope || K, [ k, A ]);
            else if (k.href) {
                var O = k.linkTarget || "_self";
                w.open(k.href, O)
            }
        },
        getItemByProperty : function(Q, N, V) {
            var o = this;
            if (V = V || o._items, !V || 0 === V.length) return $;
            var F = o.$17b(V, function(n) {
                return n[Q] === N
            });
            return F || $
        },
        scrollUp : function(b, f) {
            var n = this;
            if (f = f == $ ? 20 : f, f = I(f), 0 !== f) {
                var p = 0;
                b.$18b > f && (p = b.$18b - f), n.$42b(b, p), b.scrollTop = p, b.$18b = p
            }
        },
        scrollDown : function(A, l) {
            var g = this;
            if (l = l == $ ? 20 : l, l = I(l), 0 !== l) {
                var C = A.$22b,
                    Y = A.$23b,
                    P = C - Y;
                Y + A.$18b + l < C && (P = A.$18b + l), g.$42b(A, P), A.scrollTop = P, A.$18b = P
            }
        },
        $42b : function(o, L) {
            L = L == $ ? o.$18b : L;
            var e = o.$24b,
                n = o.$25b;
            e && (A(e, "top", L + S), 0 == L ? A(e, U, u) : A(e, U, "block")), n && (A(n, "bottom", -L + S), L == o.$22b - o.$23b ? A(n, U, u) : A(n, U, "block"))
        },
        getRowHeight : function() {
            return this._view.querySelector(".menu-item").offsetHeight
        },
        $17b : function(H, i) {
            for (var C = 0; C < H.length; C++) {
                var Q = H[C];
                if (i(Q)) return Q;
                if (Q.items) {
                    var y = this.$17b(Q.items, i);
                    if (y) return y
                }
            }
        },
        $2b : function(z, u) {
            for (var H = this, w = 0; w < z.length; w++) {
                H.$5b++;var J = z[w];
                if (!H.$16b || H.$16b.call(H, J)) {
                    var p = E("li"),
                        C = H.$5b + "";
                    if (A(p, "white-space", "nowrap"), A(p, U, "block"), "separator" === J) {
                        var o = r();
                        o[d] = "separator", A(o, K, L.contextMenuSeparatorWidth + S), A(o, "background", L.contextMenuSeparatorColor), y(p, o)
                    } else {
                        J._id = C, p.setAttribute("data-id", C);
                        var R = E("span"),
                            k = E("span"),
                            Y = e(),
                            M = r();
                        if (A(R, U, "inline-block"), A(k, U, "inline-block"), Y[d] = "prefix", A(Y, U, "inline-block"), A(Y, N, "1em"), A(Y, K, "1em"), A(Y, "vertical-align", "middle"), A(Y, q, "0 0.2em"), "check" === J.type && J.selected ? Y[d] += " check-prefix" : "radio" === J.type && J.selected && (Y[d] += " radio-prefix"), y(p, Y), J.icon) {
                            var j = e();
                            j[d] = "contextmenu-item-icon", A(j, U, "inline-block"), A(j, "vertical-align", "middle"), A(j, K, "1.2em"), A(j, N, "1.2em"), A(j, "margin-right", "0.2em"), j.$50b = J.icon, y(R, j)
                        }
                        if (k[P] = J.label, y(R, k), y(p, R), M[d] = "suffix", A(M, U, "inline-block"), A(M, "margin-left", "1em"), A(M, "margin-right", "0.4em"), A(M, "text-align", "right"), A(M, "font-size", "75%"), J.items && (M[P] = W), J.suffix && (M[P] = J.suffix), y(p, M), p[d] = "menu-item menu-item" + C, A(p, "background-color", L.contextMenuBackground), A(p, "color", L.contextMenuLabelColor), A(p, B, "3px 0"), J.disabled instanceof Function) {
                            var c = J.disabled.call(H, J);
                            c && (p[d] += " disabled", A(p, "color", L.contextMenuDisabledLabelColor))
                        } else J.disabled && (p[d] += " disabled", A(p, "color", L.contextMenuDisabledLabelColor));
                        if (J.items) {
                            H.$21b || (H.$21b = new X.List);
                            var v = E("ul", H._r);
                            v[d] = "submenu" + C, v.$45b = C, A(v, G, "hidden"), A(v, Z, n), y(H._view, v), H.$21b.add(v), H.$2b(J.items, v)
                        }
                    }
                    y(u, p)
                }
            }
        },
        rebuild : function() {
            var V = this,
                Q = V._items,
                R = V._view;
            if (R && (R[P] = "", V.$21b = $, V.$5b = 0, V.$19b = $, V.$20b = $, R.$26b = $, Q && 0 !== Q.length)) {
                var L = E("ul", V._r);
                y(R, L), V.$2b(Q, L)
            }
        },
        addTo : function(O) {
            if (O) {
                var h = this,
                    w = h.$13b;
                if (h.$12b = O, h.$9b = function(t) {
                        w.$44b(t)
                    }, h.$27b = function(X) {
                        w.$41b(X)
                    }, c) {
                    var j = h.$6b = function(h) {
                            w.$38b(h)
                        },
                        k = h.$7b = function(y) {
                            w.$39b(y)
                        },
                        y = h.$8b = function(L) {
                            w.$40b(L)
                        };
                    l(O, "touchstart", j, !0), l(O, "touchmove", k), l(O, "touchend", y)
                } else l(O, "contextmenu", h.$27b)
            }
        },
        show : function(m, G, C) {
            var s = this,
                C = C == $ ? !0 : !1,
                o = s._view;
            if (o) {
                if (s.invalidate(), 1 === arguments.length) {
                    var V = m;
                    if (c) {
                        var B = t(V);
                        m = B.pageX, G = B.pageY
                    } else m = V.pageX, G = V.pageY
                }
                var w = L.getWindowInfo(),
                    e = w.width,
                    K = w.height,
                    R = w.left,
                    Q = w.top,
                    F = {
                        pageX : m,
                        pageY : G,
                        clientX : m - R,
                        clientY : G - Q,
                        target : 1,
                        originEvent : V
                    },
                    h = F.clientX,
                    j = F.clientY,
                    i = function($) {
                        $.style.height = K - 6 + S;
                        var v = r(),
                            R = r(),
                            p = function(X) {
                                A(X, Z, n), A(X, "text-align", "center"), A(X, N, "100%"), A(X, "font-size", 10 + S), A(X, "padding", "2px 0"), A(X, "border", "0px solid " + L.contextMenuScrollerBorderColor), A(X, "background-color", L.contextMenuScrollerColor1), X.style.backgroundImage = "-webkit-linear-gradient(top, " + L.contextMenuScrollerColor1 + ", " + L.contextMenuScrollerColor2 + ")", X.style.backgroundImage = "linear-gradient(to bottom, " + L.contextMenuScrollerColor1 + ", " + L.contextMenuScrollerColor2 + ")"
                            };
                        v[d] = "menu-arrow-item menu-arrow-item-top", R[d] = "menu-arrow-item menu-arrow-item-bottom", p(v), A(v, "top", T), A(v, "left", T), A(v, "border-bottom-width", 1 + S), v[P] = "▲", p(R), A(R, "bottom", T), A(R, "left", T), A(R, "border-top-width", 1 + S), R[P] = "▼", $.$24b = v, $.$25b = R, $.$18b = $.scrollTop, $.$22b = $.scrollHeight, $.$23b = $.clientHeight, y($, v), y($, R), s.$42b($)
                    };
                s.beforeShow && s.beforeShow(F);
                var X = s._items;
                if (X && (V && V.preventDefault(), X.length)) {
                    s.rebuild(), y(k(), o), o.$26b = H(o, ".menu-item");
                    var I = o.children[0];
                    I.offsetHeight > K && i(I);
                    var Y = j + (C ? 1 : 0),
                        E = h + (C ? 1 : 0),
                        u = function(i) {
                            for (var G = 0, r = 0, p = 0, Y = s.$43b; p < i.children.length; p++) {
                                var B = i.children[p];
                                if (B.getAttribute("data-id")) {
                                    var t = B.children[1],
                                        Q = B.children[2],
                                        k = t.children;
                                    if (Y) {
                                        var g = k[0];
                                        k.length > 1 && (g = k[1]), g.offsetWidth > Y && (g[P] = "<marquee scrollamount='3'>" + g[P] + "</marquee>", g.children[0].style.verticalAlign = "text-bottom", A(g, N, Y + S), A(g, U, "inline-block"))
                                    }
                                    var C = t.offsetWidth,
                                        e = Q.offsetWidth;
                                    C > G && (G = C), e > r && (r = e)
                                }
                            }
                            for (p = 0; p < i.children.length; p++) {
                                var B = i.children[p];
                                if (B.getAttribute("data-id")) {
                                    var t = B.children[1],
                                        Q = B.children[2],
                                        R = t.children[0],
                                        n = t.children[1];
                                    !n && R.style.width && A(R, N, G + S), A(t, N, G + S), A(Q, N, r + S)
                                }
                            }
                        };
                    u(I);
                    var W = j + 3 + o.offsetHeight,
                        b = h + 3 + o.offsetWidth;
                    W > K ? A(o, g, Y - (W - K) + Q + S) : A(o, g, Y + Q + S), b > e ? A(o, x, E - (b - e) + R + S) : A(o, x, E + R + S);
                    var f = s.$21b;
                    f && f.each(function(g) {
                        u(g), g.offsetHeight > K && i(g)
                    }), s.$9b && l(O(), c ? "touchstart" : "mousedown", s.$9b, !0), s.afterShow && s.afterShow(F), s.$47b()
                }
            }
        },
        isShowing : function() {
            return this._view ? this._view.parentNode != $ : !1
        },
        getRelatedView : function() {
            return this.$12b
        },
        hide : function() {
            var X = this,
                y = X._view;
            y && y.parentNode && (z(y.parentNode, y), a(O(), c ? "touchstart" : "mousedown", X.$9b, !0), X.afterHide && X.afterHide())
        },
        dispose : function() {
            var G = this,
                b = G.$12b,
                B = G._view;
            B && (B.parentNode && z(B.parentNode, B), G.disableGlobalKey(), b && (c ? (a(b, "touchstart", G.$6b, !0), a(b, "touchmove", G.$7b), a(b, "touchend", G.$8b)) : a(b, "contextmenu", G.$27b)), G._view = G._items = G.$21b = G.$19b = G.$12b = G.beforeShow = G.afterShow = G.afterHide = G.$9b = G.$3b = G.$6b = G.$7b = G.$8b = G.$27b = $)
        },
        $46b : function(a, _, b, R) {
            var r = J.initContext(a);
            J.translateAndScale(r, 0, 0, 1), r.clearRect(0, 0, b, R), L.drawStretchImage(r, L.getImage(_), "fill", 0, 0, b, R), r.restore()
        },
        $47b : function() {
            var R,
                I,
                r,
                W = this,
                Q = W._view;
            if (W.isShowing()) {
                var v = H(Q, ".check-prefix");
                for (r = 0; r < v.length; r++) {
                    var D = v[r];
                    R = D.clientWidth, I = D.clientHeight, D.$48b = R, D.$49b = I, J.setCanvas(D, R, I)
                }
                var b = H(Q, ".radio-prefix");
                for (r = 0; r < b.length; r++) {
                    var d = b[r];
                    R = d.clientWidth, I = d.clientHeight, d.$48b = R, d.$49b = I, J.setCanvas(d, R, I)
                }
                var p = H(Q, ".contextmenu-item-icon");
                for (r = 0; r < p.length; r++) {
                    var O = p[r];
                    R = O.clientWidth, I = O.clientHeight, O.$48b = R, O.$49b = I, J.setCanvas(O, R, I)
                }
            }
        },
        validateImpl : function() {
            var d,
                G,
                A,
                n = this,
                e = n._view;
            if (n.isShowing()) {
                var o = H(e, ".check-prefix");
                for (A = 0; A < o.length; A++) {
                    var b = o[A];
                    d = b.$48b, G = b.$49b, d && G && n.$46b(b, L.contextMenuCheckIcon, d, G)
                }
                var v = H(e, ".radio-prefix");
                for (A = 0; A < v.length; A++) {
                    var $ = v[A];
                    d = $.$48b, G = $.$49b, d && G && n.$46b($, L.contextMenuRadioIcon, d, G)
                }
                var j = H(e, ".contextmenu-item-icon");
                for (A = 0; A < j.length; A++) {
                    var f = j[A];
                    d = f.$48b, G = f.$49b, d && G && n.$46b(f, L.getImage(f.$50b), d, G)
                }
            }
        }
    })
}(this, Object);