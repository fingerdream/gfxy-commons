!function(X) {
    "use strict";
    var n = "ht",
        j = X[n],
        R = Math,
        F = R.max,
        s = R.min,
        q = R.abs,
        l = R.atan2,
        G = R.cos,
        u = R.sin,
        y = R.ceil,
        a = j.Default,
        w = a.getInternal(),
        C = j.List,
        d = w.Mat,
        I = w.getNodeRect,
        K = w.intersectionLineRect,
        D = a.getDistance,
        i = a.setEdgeType,
        E = "left",
        L = "right",
        z = "top",
        Z = "bottom",
        J = "edge.type",
        r = "edge.gap",
        O = "edge.center",
        P = "edge.extend",
        S = function(E, $) {
            return I(E, $).width
        },
        h = function(f, k) {
            return I(f, k).height
        },
        e = function(G, d) {
            var S = w.getPosition(d.s("edge.source.position"), I(G, d._40I));
            return S.x += d.s("edge.source.offset.x"), S.y += d.s("edge.source.offset.y"), S
        },
        N = function(G, R) {
            var O = w.getPosition(R.s("edge.target.position"), I(G, R._41I));
            return O.x += R.s("edge.target.offset.x"), O.y += R.s("edge.target.offset.y"), O
        },
        T = function(i, O) {
            var y = i.s(J),
                X = i.getEdgeGroup();
            if (X) {
                var q = 0;
                if (X.eachSiblingEdge(function(b) {
                        O.isVisible(b) && b.s(J) == y && q++
                    }), q > 1) return i.s(r) * (q - 1) / 2
            }
            return 0
        },
        Q = function(T, $) {
            var l = T.s(J),
                L = T.isLooped();
            if (!T.getEdgeGroup()) return L ? T.s(r) : 0;
            var G,
                S = 0,
                o = 0,
                _ = 0;
            return T.getEdgeGroup().getSiblings().each(function(C) {
                C.each(function(y) {
                    if (y._40I === T._40I && y.s(J) == l && $.isVisible(y)) {
                        var Q = y.s(r);
                        G ? (o += _ / 2 + Q / 2, _ = Q) : (G = y, _ = Q), y === T && (S = o)
                    }
                })
            }), L ? o - S + _ : S - o / 2
        },
        M = function(P, H) {
            var p = P.size(),
                J = H.s("edge.corner.radius");
            if (0 === J) return {
                points : P,
                segments : new C([ 1, p ])
            };
            if (0 > J) return {
                points : P
            };
            var c,
                R = new C,
                E = new C,
                h = P.get(0);
            R.add(h), E.add(1);
            for (var U = 1; p > U; U++)
                if (p > U + 1) {
                    var x = P.get(U),
                        g = P.get(U + 1),
                        z = h.x,
                        k = h.y,
                        K = x.x,
                        q = x.y,
                        e = q - k,
                        w = K - z,
                        O = l(e, w);
                    c = s(.99 * D(h, x), J), R.add({
                        x : K - c * G(O),
                        y : q - c * u(O)
                    }), R.add(x), z = x.x, k = x.y, K = g.x, q = g.y, e = q - k, w = K - z, O = l(e, w), c = s(.99 * D(x, g), J), h = {
                        x : z + c * G(O),
                        y : k + c * u(O)
                    }, R.add(h), E.addAll([ 2, 3 ])
                } else R.add(P.get(U)), E.add(2);
            return {
                points : R,
                segments : E
            }
        };
    w.addMethod(j.Style, {
        "edge.ripple.elevation" : -20,
        "edge.ripple.size" : 1,
        "edge.ripple.both" : !1,
        "edge.ripple.straight" : !1,
        "edge.ripple.length" : -1,
        "edge.corner.radius" : -1,
        "edge.ortho" : .5,
        "edge.flex" : 20,
        "edge.extend" : 20
    }, !0), i("boundary", function(h, A, a, L) {
        L || (A = -A);
        var M,
            f = e(a, h),
            Z = N(a, h),
            q = I(a, h._40I),
            n = I(a, h._41I),
            P = new d(l(Z.y - f.y, Z.x - f.x)),
            i = D(f, Z),
            R = f.x,
            v = f.y;
        return M = P.tf(0, A), f = {
            x : M.x + R,
            y : M.y + v
        }, M = P.tf(i, A), Z = {
            x : M.x + R,
            y : M.y + v
        }, M = K(f, Z, q), M && (f = {
            x : M[0],
            y : M[1]
        }), M = K(f, Z, n), M && (Z = {
            x : M[0],
            y : M[1]
        }), {
            points : new C([ f, Z ])
        }
    }), i("ripple", function(S, Z, h, F) {
        F || (Z = -Z);
        var A = e(h, S),
            T = N(h, S),
            g = D(A, T),
            p = s(S.s("edge.offset"), g / 2),
            J = S.s("edge.ripple.size"),
            _ = S.s("edge.ripple.length"),
            z = S.s("edge.ripple.both"),
            L = S.s(O),
            u = S.s("edge.ripple.elevation"),
            k = new C,
            B = S.s("edge.ripple.straight") ? null : new C,
            R = new d(l(T.y - A.y, T.x - A.x));
        F || (u = -u), g -= 2 * p, _ > 0 && (J = y(g / _));
        var m = g / J;
        B && B.add(1);
        for (var Q = 0; J > Q; Q++) B && B.add(3), 0 === Q ? k.add({
            x : p + m * Q,
            y : L ? 0 : Z
        }) : k.add({
            x : p + m * Q,
            y : Z
        }), k.add({
            x : p + m * Q + m / 2,
            y : u + Z
        }), z && (u = -u);
        for (k.add({
            x : p + g,
            y : L ? 0 : Z
        }), Q = 0; Q < k.size(); Q++) {
            var v = R.tf(k.get(Q));
            v.x += A.x, v.y += A.y, k.set(Q, v)
        }
        return {
            points : k,
            segments : B
        }
    }), i("h.v", function(q, Z, u) {
        Z = Q(q, u);
        var I = new C,
            W = q.s(O),
            F = e(u, q),
            U = F.x,
            l = F.y,
            i = N(u, q),
            j = i.x,
            L = i.y,
            w = 0,
            p = 0,
            y = j - U,
            $ = L - l;
        return W || (w = S(u, q._40I) / 2, p = h(u, q._41I) / 2), y >= 0 && 0 >= $ ? (I.add({
            x : U + w,
            y : l + Z
        }), I.add({
            x : j + Z,
            y : l + Z
        }), I.add({
            x : j + Z,
            y : L + p
        })) : 0 >= y && $ >= 0 ? (I.add({
            x : U - w,
            y : l + Z
        }), I.add({
            x : j + Z,
            y : l + Z
        }), I.add({
            x : j + Z,
            y : L - p
        })) : y >= 0 && $ >= 0 ? (I.add({
            x : U + w,
            y : l + Z
        }), I.add({
            x : j - Z,
            y : l + Z
        }), I.add({
            x : j - Z,
            y : L - p
        })) : (I.add({
            x : U - w,
            y : l + Z
        }), I.add({
            x : j - Z,
            y : l + Z
        }), I.add({
            x : j - Z,
            y : L + p
        })), M(I, q)
    }), i("v.h", function(L, n, V) {
        n = Q(L, V);
        var Y = new C,
            u = L.s(O),
            b = e(V, L),
            k = b.x,
            x = b.y,
            D = N(V, L),
            F = D.x,
            J = D.y,
            t = 0,
            l = 0,
            j = F - k,
            I = J - x;
        return u || (t = S(V, L._41I) / 2, l = h(V, L._40I) / 2), j >= 0 && 0 >= I ? (Y.add({
            x : k + n,
            y : x - l
        }), Y.add({
            x : k + n,
            y : J + n
        }), Y.add({
            x : F - t,
            y : J + n
        })) : 0 >= j && I >= 0 ? (Y.add({
            x : k + n,
            y : x + l
        }), Y.add({
            x : k + n,
            y : J + n
        }), Y.add({
            x : F + t,
            y : J + n
        })) : j >= 0 && I >= 0 ? (Y.add({
            x : k - n,
            y : x + l
        }), Y.add({
            x : k - n,
            y : J + n
        }), Y.add({
            x : F - t,
            y : J + n
        })) : (Y.add({
            x : k - n,
            y : x - l
        }), Y.add({
            x : k - n,
            y : J + n
        }), Y.add({
            x : F + t,
            y : J + n
        })), M(Y, L)
    }), i("ortho", function(n, g, k) {
        var p = new C,
            j = n.s(O),
            B = n.s("edge.ortho"),
            a = n._40I,
            K = n._41I,
            D = e(k, n),
            L = D.x,
            Y = D.y,
            X = N(k, n),
            d = X.x,
            s = X.y,
            T = d - L,
            l = s - Y,
            R = j ? 0 : S(k, a) / 2,
            z = j ? 0 : h(k, a) / 2,
            y = j ? 0 : S(k, K) / 2,
            W = j ? 0 : h(k, K) / 2,
            v = (T - (R + y) * (T > 0 ? 1 : -1)) * B,
            i = (l - (z + W) * (l > 0 ? 1 : -1)) * B;
        return q(T) < q(l) ? T >= 0 && 0 >= l ? (p.add({
            x : L + g,
            y : Y - z
        }), p.add({
            x : L + g,
            y : Y + i + g - z
        }), p.add({
            x : d + g,
            y : Y + i + g - z
        }), p.add({
            x : d + g,
            y : s + W
        })) : 0 >= T && l >= 0 ? (p.add({
            x : L + g,
            y : Y + z
        }), p.add({
            x : L + g,
            y : Y + i + g + z
        }), p.add({
            x : d + g,
            y : Y + i + g + z
        }), p.add({
            x : d + g,
            y : s - W
        })) : T >= 0 && l >= 0 ? (p.add({
            x : L + g,
            y : Y + z
        }), p.add({
            x : L + g,
            y : Y + i - g + z
        }), p.add({
            x : d + g,
            y : Y + i - g + z
        }), p.add({
            x : d + g,
            y : s - W
        })) : (p.add({
            x : L + g,
            y : Y - z
        }), p.add({
            x : L + g,
            y : Y + i - g - z
        }), p.add({
            x : d + g,
            y : Y + i - g - z
        }), p.add({
            x : d + g,
            y : s + W
        })) : T >= 0 && 0 >= l ? (p.add({
            x : L + R,
            y : Y + g
        }), p.add({
            x : L + v + g + R,
            y : Y + g
        }), p.add({
            x : L + v + g + R,
            y : s + g
        }), p.add({
            x : d - y,
            y : s + g
        })) : 0 >= T && l >= 0 ? (p.add({
            x : L - R,
            y : Y + g
        }), p.add({
            x : L + v + g - R,
            y : Y + g
        }), p.add({
            x : L + v + g - R,
            y : s + g
        }), p.add({
            x : d + y,
            y : s + g
        })) : T >= 0 && l >= 0 ? (p.add({
            x : L + R,
            y : Y + g
        }), p.add({
            x : L + v - g + R,
            y : Y + g
        }), p.add({
            x : L + v - g + R,
            y : s + g
        }), p.add({
            x : d - y,
            y : s + g
        })) : (p.add({
            x : L - R,
            y : Y + g
        }), p.add({
            x : L + v - g - R,
            y : Y + g
        }), p.add({
            x : L + v - g - R,
            y : s + g
        }), p.add({
            x : d + y,
            y : s + g
        })), M(p, n)
    }), i("flex", function(F, n, V) {
        var y = new C,
            o = F.s("edge.flex") + T(F, V),
            g = F.s(O),
            U = F._40I,
            v = F._41I,
            j = e(V, F),
            i = j.x,
            X = j.y,
            A = N(V, F),
            w = A.x,
            D = A.y,
            z = w - i,
            s = D - X,
            J = g ? 0 : S(V, U) / 2,
            f = g ? 0 : h(V, U) / 2,
            x = g ? 0 : S(V, v) / 2,
            H = g ? 0 : h(V, v) / 2,
            Z = z > 0 ? o : -o,
            $ = s > 0 ? o : -o;
        return q(z) < q(s) ? z >= 0 && 0 >= s ? (y.add({
            x : i + n,
            y : X - f
        }), y.add({
            x : i + n,
            y : X + $ + n - f
        }), y.add({
            x : w + n,
            y : D - $ + n + H
        }), y.add({
            x : w + n,
            y : D + H
        })) : 0 >= z && s >= 0 ? (y.add({
            x : i + n,
            y : X + f
        }), y.add({
            x : i + n,
            y : X + $ + n + f
        }), y.add({
            x : w + n,
            y : D - $ + n - H
        }), y.add({
            x : w + n,
            y : D - H
        })) : z >= 0 && s >= 0 ? (y.add({
            x : i + n,
            y : X + f
        }), y.add({
            x : i + n,
            y : X + $ - n + f
        }), y.add({
            x : w + n,
            y : D - $ - n - H
        }), y.add({
            x : w + n,
            y : D - H
        })) : (y.add({
            x : i + n,
            y : X - f
        }), y.add({
            x : i + n,
            y : X + $ - n - f
        }), y.add({
            x : w + n,
            y : D - $ - n + H
        }), y.add({
            x : w + n,
            y : D + H
        })) : z >= 0 && 0 >= s ? (y.add({
            x : i + J,
            y : X + n
        }), y.add({
            x : i + Z + n + J,
            y : X + n
        }), y.add({
            x : w - Z + n - x,
            y : D + n
        }), y.add({
            x : w - x,
            y : D + n
        })) : 0 >= z && s >= 0 ? (y.add({
            x : i - J,
            y : X + n
        }), y.add({
            x : i + Z + n - J,
            y : X + n
        }), y.add({
            x : w - Z + n + x,
            y : D + n
        }), y.add({
            x : w + x,
            y : D + n
        })) : z >= 0 && s >= 0 ? (y.add({
            x : i + J,
            y : X + n
        }), y.add({
            x : i + Z - n + J,
            y : X + n
        }), y.add({
            x : w - Z - n - x,
            y : D + n
        }), y.add({
            x : w - x,
            y : D + n
        })) : (y.add({
            x : i - J,
            y : X + n
        }), y.add({
            x : i + Z - n - J,
            y : X + n
        }), y.add({
            x : w - Z - n + x,
            y : D + n
        }), y.add({
            x : w + x,
            y : D + n
        })), M(y, F)
    }), i("extend.east", function(p, t, V) {
        var w = new C,
            k = p.s(P) + T(p, V),
            $ = p.s(O),
            Q = e(V, p),
            i = Q.x + ($ ? 0 : S(V, p._40I) / 2),
            n = Q.y,
            s = N(V, p),
            W = s.x + ($ ? 0 : S(V, p._41I) / 2),
            A = s.y,
            h = F(i, W) + k;
        return n > A ? (w.add({
            x : i,
            y : n + t
        }), w.add({
            x : h + t,
            y : n + t
        }), w.add({
            x : h + t,
            y : A - t
        }), w.add({
            x : W,
            y : A - t
        })) : (w.add({
            x : i,
            y : n - t
        }), w.add({
            x : h + t,
            y : n - t
        }), w.add({
            x : h + t,
            y : A + t
        }), w.add({
            x : W,
            y : A + t
        })), M(w, p)
    }), i("extend.west", function(y, Z, V) {
        var k = new C,
            v = y.s(P) + T(y, V),
            f = y.s(O),
            b = e(V, y),
            L = b.x - (f ? 0 : S(V, y._40I) / 2),
            G = b.y,
            _ = N(V, y),
            c = _.x - (f ? 0 : S(V, y._41I) / 2),
            R = _.y,
            X = s(L, c) - v;
        return G > R ? (k.add({
            x : L,
            y : G + Z
        }), k.add({
            x : X - Z,
            y : G + Z
        }), k.add({
            x : X - Z,
            y : R - Z
        }), k.add({
            x : c,
            y : R - Z
        })) : (k.add({
            x : L,
            y : G - Z
        }), k.add({
            x : X - Z,
            y : G - Z
        }), k.add({
            x : X - Z,
            y : R + Z
        }), k.add({
            x : c,
            y : R + Z
        })), M(k, y)
    }), i("extend.north", function($, w, g) {
        var E = new C,
            A = $.s(P) + T($, g),
            V = $.s(O),
            y = e(g, $),
            r = y.x,
            i = y.y - (V ? 0 : h(g, $._40I) / 2),
            t = N(g, $),
            a = t.x,
            S = t.y - (V ? 0 : h(g, $._41I) / 2),
            X = s(i, S) - A;
        return r > a ? (E.add({
            y : i,
            x : r + w
        }), E.add({
            y : X - w,
            x : r + w
        }), E.add({
            y : X - w,
            x : a - w
        }), E.add({
            y : S,
            x : a - w
        })) : (E.add({
            y : i,
            x : r - w
        }), E.add({
            y : X - w,
            x : r - w
        }), E.add({
            y : X - w,
            x : a + w
        }), E.add({
            y : S,
            x : a + w
        })), M(E, $)
    }), i("extend.south", function(X, G, u) {
        var y = new C,
            W = X.s(P) + T(X, u),
            K = X.s(O),
            v = e(u, X),
            Q = v.x,
            _ = v.y + (K ? 0 : h(u, X._40I) / 2),
            R = N(u, X),
            I = R.x,
            b = R.y + (K ? 0 : h(u, X._41I) / 2),
            c = F(_, b) + W;
        return Q > I ? (y.add({
            y : _,
            x : Q + G
        }), y.add({
            y : c + G,
            x : Q + G
        }), y.add({
            y : c + G,
            x : I - G
        }), y.add({
            y : b,
            x : I - G
        })) : (y.add({
            y : _,
            x : Q - G
        }), y.add({
            y : c + G,
            x : Q - G
        }), y.add({
            y : c + G,
            x : I + G
        }), y.add({
            y : b,
            x : I + G
        })), M(y, X)
    });
    var x = function(M, t, Q, W, J) {
            if (W.sort(function(S, $) {
                    var C = S.getSourceAgent() === t ? S.getTargetAgent() : S.getSourceAgent(),
                        M = $.getSourceAgent() === t ? $.getTargetAgent() : $.getSourceAgent(),
                        G = C.p(),
                        p = M.p();
                    if (Q === E || Q === L) {
                        if (G.y > p.y) return 1;
                        if (G.y < p.y) return -1
                    } else {
                        if (G.x > p.x) return 1;
                        if (G.x < p.x) return -1
                    }
                    return a.sortFunc(S.getId(), $.getId())
                }), J) {
                for (var x, K, _, B = M.getSourceAgent(), H = M.getTargetAgent(), s = 0; s < W.size(); s++) {
                    var I = W.get(s);
                    I.getSourceAgent() === B && I.getTargetAgent() === H || I.getTargetAgent() === B && I.getSourceAgent() === H ? (K || (K = new C), K.add(I, 0)) : K ? (_ || (_ = new C), _.add(I)) : (x || (x = new C), x.add(I))
                }
                W.clear(), x && W.addAll(x), K && W.addAll(K), _ && W.addAll(_)
            }
            var Y = W.indexOf(M),
                z = W.size(),
                k = M.s(r);
            return {
                side : Q,
                index : Y,
                size : z,
                offset : -k * (z - 1) / 2 + k * Y
            }
        },
        o = function(m, i, Q, M, G) {
            var u = i.s(J);
            return x(i, Q, M, Q.getAgentEdges().toList(function(c) {
                return m.isVisible(c) && c.s(J) === u
            }), G)
        },
        W = function(U, V) {
            var i = U.getSourceAgent() === V ? U.getTargetAgent() : U.getSourceAgent(),
                t = V.p(),
                g = i.p(),
                H = g.x - t.x,
                R = g.y - t.y;
            return H > 0 && q(R) <= H ? L : 0 > H && q(R) <= -H ? E : R > 0 && q(H) <= R ? Z : z
        },
        V = function(M, g, L) {
            var R = g.s(J),
                Z = W(g, L);
            return x(g, L, Z, L.getAgentEdges().toList(function(e) {
                return M.isVisible(e) && e.s(J) === R && W(e, L) === Z
            }))
        },
        m = function(x, u) {
            var V = x.getSourceAgent() === u,
                b = V ? x.getTargetAgent() : x.getSourceAgent(),
                U = u.p(),
                k = b.p();
            return V ? U.y > k.y ? z : Z : U.x < k.x ? L : E
        },
        U = function(O, A, F) {
            var V = A.s(J),
                H = m(A, F);
            return x(A, F, H, F.getAgentEdges().toList(function(b) {
                return O.isVisible(b) && b.s(J) === V && m(b, F) === H
            }), H === L || H === Z)
        },
        g = function(s, J) {
            var f = s.getSourceAgent() === J,
                o = f ? s.getTargetAgent() : s.getSourceAgent(),
                m = J.p(),
                P = o.p();
            return f ? m.x < P.x ? L : E : m.y > P.y ? z : Z
        },
        Y = function(o, F, V) {
            var R = F.s(J),
                z = g(F, V);
            return x(F, V, z, V.getAgentEdges().toList(function(D) {
                return o.isVisible(D) && D.s(J) === R && g(D, V) === z
            }), z === L || z === Z)
        },
        _ = function(Y, o, w) {
            var P = Y.getSourceAgent(),
                Q = Y.getTargetAgent(),
                T = P.getId() > Q.getId(),
                r = T ? Q : P,
                y = T ? P : Q,
                D = r.p(),
                v = y.p(),
                N = w(o, Y, r),
                V = w(o, Y, y),
                x = Y.s(O),
                i = x ? 0 : S(o, r) / 2,
                q = x ? 0 : S(o, y) / 2,
                t = x ? 0 : h(o, r) / 2,
                J = x ? 0 : h(o, y) / 2,
                G = N.offset,
                X = V.offset,
                R = N.side,
                n = V.side,
                B = new C;
            return R === z ? (B.add({
                x : D.x + G,
                y : D.y - t
            }), B.add({
                x : D.x + G,
                y : v.y + X
            }), n === E ? B.add({
                x : v.x - q,
                y : v.y + X
            }) : B.add({
                x : v.x + q,
                y : v.y + X
            })) : R === Z ? (B.add({
                x : D.x + G,
                y : D.y + t
            }), B.add({
                x : D.x + G,
                y : v.y + X
            }), n === E ? B.add({
                x : v.x - q,
                y : v.y + X
            }) : B.add({
                x : v.x + q,
                y : v.y + X
            })) : R === E ? (B.add({
                x : D.x - i,
                y : D.y + G
            }), B.add({
                x : v.x + X,
                y : D.y + G
            }), n === Z ? B.add({
                x : v.x + X,
                y : v.y + J
            }) : B.add({
                x : v.x + X,
                y : v.y - J
            })) : R === L && (B.add({
                    x : D.x + i,
                    y : D.y + G
                }), B.add({
                    x : v.x + X,
                    y : D.y + G
                }), n === Z ? B.add({
                    x : v.x + X,
                    y : v.y + J
                }) : B.add({
                    x : v.x + X,
                    y : v.y - J
                })), T && B.reverse(), M(B, Y)
        };
    i("ortho2", function(_, l, N) {
        var w,
            i,
            K = _.s(O),
            o = _.s("edge.ortho"),
            B = _.getSourceAgent(),
            J = _.getTargetAgent(),
            s = B.getId() > J.getId(),
            k = s ? J : B,
            j = s ? B : J,
            U = k.p(),
            a = j.p(),
            $ = V(N, _, k),
            T = V(N, _, j),
            R = K ? 0 : S(N, k) / 2,
            v = K ? 0 : h(N, k) / 2,
            f = K ? 0 : S(N, j) / 2,
            G = K ? 0 : h(N, j) / 2,
            t = new C,
            r = $.offset,
            X = T.offset,
            c = $.side;
        return c === L ? (w = a.y > U.y ? -r : r, i = U.x + R + (a.x - f - U.x - R) * o, t.add({
            x : U.x + R,
            y : U.y + r
        }), t.add({
            x : i + w,
            y : U.y + r
        }), t.add({
            x : i + w,
            y : a.y + X
        }), t.add({
            x : a.x - f,
            y : a.y + X
        })) : c === E ? (w = a.y > U.y ? -r : r, i = U.x - R - (U.x - R - a.x - f) * o, t.add({
            x : U.x - R,
            y : U.y + r
        }), t.add({
            x : i - w,
            y : U.y + r
        }), t.add({
            x : i - w,
            y : a.y + X
        }), t.add({
            x : a.x + f,
            y : a.y + X
        })) : c === Z ? (w = a.x > U.x ? -r : r, i = U.y + v + (a.y - G - U.y - v) * o, t.add({
            x : U.x + r,
            y : U.y + v
        }), t.add({
            x : U.x + r,
            y : i + w
        }), t.add({
            x : a.x + X,
            y : i + w
        }), t.add({
            x : a.x + X,
            y : a.y - G
        })) : c === z && (w = a.x > U.x ? -r : r, i = U.y - v - (U.y - v - a.y - G) * o, t.add({
                x : U.x + r,
                y : U.y - v
            }), t.add({
                x : U.x + r,
                y : i - w
            }), t.add({
                x : a.x + X,
                y : i - w
            }), t.add({
                x : a.x + X,
                y : a.y + G
            })), s && t.reverse(), M(t, _)
    }, !0), i("flex2", function(B, H, P) {
        var v,
            R = B.getSourceAgent(),
            Y = B.getTargetAgent(),
            X = R.getId() > Y.getId(),
            p = X ? Y : R,
            t = X ? R : Y,
            N = p.p(),
            l = t.p(),
            j = V(P, B, p),
            f = V(P, B, t),
            c = B.s(O),
            n = B.s("edge.flex") + (j.size - 1) / 2 * B.s(r),
            a = c ? 0 : S(P, p) / 2,
            w = c ? 0 : h(P, p) / 2,
            y = c ? 0 : S(P, t) / 2,
            o = c ? 0 : h(P, t) / 2,
            U = new C,
            Q = j.offset,
            s = f.offset,
            k = j.side;
        return k === L ? (v = l.y > N.y ? -Q : Q, U.add({
            x : N.x + a,
            y : N.y + Q
        }), U.add({
            x : N.x + a + n + v,
            y : N.y + Q
        }), U.add({
            x : l.x - y - n + v,
            y : l.y + s
        }), U.add({
            x : l.x - y,
            y : l.y + s
        })) : k === E ? (v = l.y > N.y ? -Q : Q, U.add({
            x : N.x - a,
            y : N.y + Q
        }), U.add({
            x : N.x - a - n - v,
            y : N.y + Q
        }), U.add({
            x : l.x + y + n - v,
            y : l.y + s
        }), U.add({
            x : l.x + y,
            y : l.y + s
        })) : k === Z ? (v = l.x > N.x ? -Q : Q, U.add({
            x : N.x + Q,
            y : N.y + w
        }), U.add({
            x : N.x + Q,
            y : N.y + w + n + v
        }), U.add({
            x : l.x + s,
            y : l.y - o - n + v
        }), U.add({
            x : l.x + s,
            y : l.y - o
        })) : k === z && (v = l.x > N.x ? -Q : Q, U.add({
                x : N.x + Q,
                y : N.y - w
            }), U.add({
                x : N.x + Q,
                y : N.y - w - n - v
            }), U.add({
                x : l.x + s,
                y : l.y + o + n - v
            }), U.add({
                x : l.x + s,
                y : l.y + o
            })), X && U.reverse(), M(U, B)
    }, !0), i("extend.north2", function(T, d, Z) {
        var m = T.getSourceAgent(),
            t = T.getTargetAgent(),
            q = m.getId() > t.getId(),
            A = q ? t : m,
            H = q ? m : t,
            $ = A.p(),
            F = H.p(),
            E = o(Z, T, A, z),
            I = o(Z, T, H, z, !0),
            S = T.s(O),
            x = S ? 0 : h(Z, A) / 2,
            p = S ? 0 : h(Z, H) / 2,
            k = E.offset,
            G = I.offset,
            l = T.s(P) + (E.size - 1) / 2 * T.s(r),
            n = s($.y - x, F.y - p) - l + ($.x < F.x ? k : -k),
            v = new C;
        return v.add({
            x : $.x + k,
            y : $.y - x
        }), v.add({
            x : $.x + k,
            y : n
        }), v.add({
            x : F.x + G,
            y : n
        }), v.add({
            x : F.x + G,
            y : F.y - p
        }), q && v.reverse(), M(v, T)
    }, !0), i("extend.south2", function(S, n, N) {
        var u = S.getSourceAgent(),
            l = S.getTargetAgent(),
            R = u.getId() > l.getId(),
            Q = R ? l : u,
            b = R ? u : l,
            J = Q.p(),
            W = b.p(),
            Y = o(N, S, Q, Z),
            e = o(N, S, b, Z, !0),
            c = S.s(O),
            K = c ? 0 : h(N, Q) / 2,
            m = c ? 0 : h(N, b) / 2,
            p = Y.offset,
            A = e.offset,
            w = S.s(P) + (Y.size - 1) / 2 * S.s(r),
            g = F(J.y + K, W.y + m) + w + (J.x > W.x ? p : -p),
            q = new C;
        return q.add({
            x : J.x + p,
            y : J.y + K
        }), q.add({
            x : J.x + p,
            y : g
        }), q.add({
            x : W.x + A,
            y : g
        }), q.add({
            x : W.x + A,
            y : W.y + m
        }), R && q.reverse(), M(q, S)
    }, !0), i("extend.west2", function(Z, x, n) {
        var _ = Z.getSourceAgent(),
            Q = Z.getTargetAgent(),
            p = _.getId() > Q.getId(),
            V = p ? Q : _,
            B = p ? _ : Q,
            N = V.p(),
            A = B.p(),
            T = o(n, Z, V, z),
            J = o(n, Z, B, z, !0),
            m = Z.s(O),
            t = m ? 0 : S(n, V) / 2,
            K = m ? 0 : S(n, B) / 2,
            Y = T.offset,
            e = J.offset,
            a = Z.s(P) + (T.size - 1) / 2 * Z.s(r),
            v = s(N.x - t, A.x - K) - a + (N.y < A.y ? Y : -Y),
            i = new C;
        return i.add({
            x : N.x - t,
            y : N.y + Y
        }), i.add({
            x : v,
            y : N.y + Y
        }), i.add({
            x : v,
            y : A.y + e
        }), i.add({
            x : A.x - K,
            y : A.y + e
        }), p && i.reverse(), M(i, Z)
    }, !0), i("extend.east2", function(a, N, b) {
        var g = a.getSourceAgent(),
            K = a.getTargetAgent(),
            j = g.getId() > K.getId(),
            G = j ? K : g,
            s = j ? g : K,
            v = G.p(),
            n = s.p(),
            d = o(b, a, G, z),
            Y = o(b, a, s, z, !0),
            D = a.s(O),
            q = D ? 0 : S(b, G) / 2,
            E = D ? 0 : S(b, s) / 2,
            U = d.offset,
            y = Y.offset,
            l = a.s(P) + (d.size - 1) / 2 * a.s(r),
            A = F(v.x + q, n.x + E) + l + (v.y > n.y ? U : -U),
            w = new C;
        return w.add({
            x : v.x + q,
            y : v.y + U
        }), w.add({
            x : A,
            y : v.y + U
        }), w.add({
            x : A,
            y : n.y + y
        }), w.add({
            x : n.x + E,
            y : n.y + y
        }), j && w.reverse(), M(w, a)
    }, !0), i("v.h2", function(o, b, L) {
        return _(o, L, U)
    }, !0), i("h.v2", function(Q, c, D) {
        return _(Q, D, Y)
    }, !0)
}(this, Object);