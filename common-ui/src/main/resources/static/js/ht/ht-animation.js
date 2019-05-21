!function(w) {
    "use strict";
    var F = "ht",
        z = w[F],
        N = z.Default,
        h = "prototype",
        d = z.DataModel[h],
        Q = z.Data[h],
        M = null,
        r = function(j) {
            return "set" + j.charAt(0).toUpperCase() + j.slice(1)
        };
    N.getEasing = function($) {
        var f = M;
        return $.indexOf(".") >= 0 ? ($ = $.split("."), f = D[$[0]][$[1]]) : f = D[$], function(A) {
            return f(A, 0, 1, 1)
        }
    }, N.getCommonEasing = function(m) {
        var k = M;
        return m.indexOf(".") >= 0 ? (m = m.split("."), k = D[m[0]][m[1]]) : k = D[m], k
    }, Q.setAnimation = function(r) {
        var M = this._animation;
        this._animation = r, this.fp("animation", M, r)
    }, Q.getAnimation = function() {
        return this._animation
    }, w.requestAnimFrame = function() {
        return w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || function(C) {
                w.setTimeout(C, 1e3 / 60)
            }
    }();
    var H = w.requestAnimFrame,
        S = w.setInterval;
    d.setAnimationInterval = function(I) {
        var A = this;
        A.$2a = I, A.$1a != M && (clearInterval(A.$1a),
            delete A.$1a
            , A.enableAnimation(I))
    }, d.getAnimationInterval = function() {
        return this.$2a || "animationFrame"
    }, d.getDataAnimation = function(s) {
        return s.getAnimation()
    }, d.enableAnimation = function(I) {
        var B = this,
            c = B.getDatas();
        if (B.$1a == M) {
            I && B.setAnimationInterval(I), I = B.getAnimationInterval();
            var o = function() {
                var Z = B.getAnimationInterval();
                c.each(function(u) {
                    var z = B.getDataAnimation(u);
                    if (u.setAnimation(z), z) {
                        var I = z.start;
                        u._animationstatus = u._animationstatus || {}, u._animationprocess = u._animationprocess || I.slice(0);
                        for (var j = u._animationstatus, w = u._animationprocess, y = 0; y < w.length; y++) {
                            var E;
                            E = j[y] ? j[y] : j[y] = {
                                $5a : 0,
                                $6a : 0,
                                $7a : 0,
                                $8a : 0
                            };var C = z[w[y]],
                                J = C.property,
                                F = C.accessType,
                                P = C.from,
                                x = C.to,
                                S = C.easing || "Quad.easeOut",
                                n = E.$5a,
                                Y = C.frames || 60,
                                L = C.repeat || 0,
                                t = C.delay || 0,
                                G = C.interval,
                                X = E.$6a,
                                e = C.onUpdate,
                                D = C.onComplete,
                                T = !1,
                                U = function() {
                                    var V = N.getCommonEasing(S)(n, P, x - P, Y);
                                    e ? e.call(u, V) : F ? "style" === F ? u.s(J, V) : "attr" === F ? u.a(J, V) : "field" === F && (u[J] = V) : u[r(J)](V), T = !0
                                },
                                o = function() {
                                    G != M ? E.$7a >= G ? (E.$7a = 0, U()) : E.$7a += isNaN(Z) ? 16.6666 : Z : U()
                                };
                            t ? E.$8a >= t ? o() : E.$8a += isNaN(Z) ? 16.6666 : Z : o(), T && (n = E.$5a = n + 1, n > Y && (L === !0 ? n = E.$5a = 0 : (X = E.$6a = X + 1, X > L && (D && D.call(u), C.next ? (j[y] = M, w[y] = C.next) : u.setAnimation(null)))))
                        }
                    }
                }), "animationFrame" === Z && B.$1a != M && (B.$1a = H(o))
            };
            B.$1a = "animationFrame" === I ? H(o) : S(o, I)
        }
    }, d.disableAnimation = function() {
        var G = this,
            S = G.getAnimationInterval();
        "animationFrame" === S || clearInterval(G.$1a),
            delete G.$1a
    };
    var D = {
        Linear : function(a, C, V, P) {
            return V * a / P + C
        },
        Quad : {
            easeIn : function(m, r, O, L) {
                return O * (m /= L) * m + r
            },
            easeOut : function(D, n, C, L) {
                return -C * (D /= L) * (D - 2) + n
            },
            easeInOut : function(G, S, m, T) {
                return (G /= T / 2) < 1 ? m / 2 * G * G + S : -m / 2 * (--G * (G - 2) - 1) + S
            }
        },
        Cubic : {
            easeIn : function(e, z, s, G) {
                return s * (e /= G) * e * e + z
            },
            easeOut : function(p, l, a, j) {
                return a * ((p = p / j - 1) * p * p + 1) + l
            },
            easeInOut : function(r, I, m, G) {
                return (r /= G / 2) < 1 ? m / 2 * r * r * r + I : m / 2 * ((r -= 2) * r * r + 2) + I
            }
        },
        Quart : {
            easeIn : function(Y, k, Q, C) {
                return Q * (Y /= C) * Y * Y * Y + k
            },
            easeOut : function(D, p, f, q) {
                return -f * ((D = D / q - 1) * D * D * D - 1) + p
            },
            easeInOut : function(P, n, j, m) {
                return (P /= m / 2) < 1 ? j / 2 * P * P * P * P + n : -j / 2 * ((P -= 2) * P * P * P - 2) + n
            }
        },
        Quint : {
            easeIn : function(v, L, U, g) {
                return U * (v /= g) * v * v * v * v + L
            },
            easeOut : function($, j, b, D) {
                return b * (($ = $ / D - 1) * $ * $ * $ * $ + 1) + j
            },
            easeInOut : function(E, C, Y, K) {
                return (E /= K / 2) < 1 ? Y / 2 * E * E * E * E * E + C : Y / 2 * ((E -= 2) * E * E * E * E + 2) + C
            }
        },
        Sine : {
            easeIn : function(R, U, i, u) {
                return -i * Math.cos(R / u * (Math.PI / 2)) + i + U
            },
            easeOut : function(K, k, Q, V) {
                return Q * Math.sin(K / V * (Math.PI / 2)) + k
            },
            easeInOut : function(p, Y, N, H) {
                return -N / 2 * (Math.cos(Math.PI * p / H) - 1) + Y
            }
        },
        Expo : {
            easeIn : function(R, A, h, E) {
                return 0 == R ? A : h * Math.pow(2, 10 * (R / E - 1)) + A
            },
            easeOut : function(b, e, W, c) {
                return b == c ? e + W : W * (-Math.pow(2, -10 * b / c) + 1) + e
            },
            easeInOut : function(K, N, D, L) {
                return 0 == K ? N : K == L ? N + D : (K /= L / 2) < 1 ? D / 2 * Math.pow(2, 10 * (K - 1)) + N : D / 2 * (-Math.pow(2, -10 * --K) + 2) + N
            }
        },
        Circ : {
            easeIn : function(v, g, R, o) {
                return -R * (Math.sqrt(1 - (v /= o) * v) - 1) + g
            },
            easeOut : function(D, c, L, h) {
                return L * Math.sqrt(1 - (D = D / h - 1) * D) + c
            },
            easeInOut : function(w, H, X, I) {
                return (w /= I / 2) < 1 ? -X / 2 * (Math.sqrt(1 - w * w) - 1) + H : X / 2 * (Math.sqrt(1 - (w -= 2) * w) + 1) + H
            }
        },
        Elastic : {
            easeIn : function(O, R, M, H, V, n) {
                var Q;
                return 0 == O ? R : 1 == (O /= H) ? R + M : ("undefined" == typeof n && (n = .3 * H), !V || V < Math.abs(M) ? (Q = n / 4, V = M) : Q = n / (2 * Math.PI) * Math.asin(M / V), -(V * Math.pow(2, 10 * (O -= 1)) * Math.sin((O * H - Q) * 2 * Math.PI / n)) + R)
            },
            easeOut : function(g, w, v, x, k, Q) {
                var P;
                return 0 == g ? w : 1 == (g /= x) ? w + v : ("undefined" == typeof Q && (Q = .3 * x), !k || k < Math.abs(v) ? (k = v, P = Q / 4) : P = Q / (2 * Math.PI) * Math.asin(v / k), k * Math.pow(2, -10 * g) * Math.sin((g * x - P) * 2 * Math.PI / Q) + v + w)
            },
            easeInOut : function(Y, I, G, b, h, $) {
                var g;
                return 0 == Y ? I : 2 == (Y /= b / 2) ? I + G : ("undefined" == typeof $ && ($ = b * .3 * 1.5), !h || h < Math.abs(G) ? (h = G, g = $ / 4) : g = $ / (2 * Math.PI) * Math.asin(G / h), 1 > Y ? -.5 * h * Math.pow(2, 10 * (Y -= 1)) * Math.sin((Y * b - g) * 2 * Math.PI / $) + I : .5 * h * Math.pow(2, -10 * (Y -= 1)) * Math.sin((Y * b - g) * 2 * Math.PI / $) + G + I)
            }
        },
        Back : {
            easeIn : function(L, F, K, x, y) {
                return "undefined" == typeof y && (y = 1.70158), K * (L /= x) * L * ((y + 1) * L - y) + F
            },
            easeOut : function(O, Q, c, V, e) {
                return "undefined" == typeof e && (e = 1.70158), c * ((O = O / V - 1) * O * ((e + 1) * O + e) + 1) + Q
            },
            easeInOut : function(P, d, y, U, Z) {
                return "undefined" == typeof Z && (Z = 1.70158), (P /= U / 2) < 1 ? y / 2 * P * P * (((Z *= 1.525) + 1) * P - Z) + d : y / 2 * ((P -= 2) * P * (((Z *= 1.525) + 1) * P + Z) + 2) + d
            }
        },
        Bounce : {
            easeIn : function(p, s, F, R) {
                return F - D.Bounce.easeOut(R - p, 0, F, R) + s
            },
            easeOut : function(M, N, Y, n) {
                return (M /= n) < 1 / 2.75 ? Y * 7.5625 * M * M + N : 2 / 2.75 > M ? Y * (7.5625 * (M -= 1.5 / 2.75) * M + .75) + N : 2.5 / 2.75 > M ? Y * (7.5625 * (M -= 2.25 / 2.75) * M + .9375) + N : Y * (7.5625 * (M -= 2.625 / 2.75) * M + .984375) + N
            },
            easeInOut : function(k, p, g, Z) {
                return Z / 2 > k ? .5 * D.Bounce.easeIn(2 * k, 0, g, Z) + p : .5 * D.Bounce.easeOut(2 * k - Z, 0, g, Z) + .5 * g + p
            }
        }
    }
}(this, Object);