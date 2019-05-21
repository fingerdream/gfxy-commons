!function(G, i) {
    "use strict";
    var H = "ht",
        b = H + ".layout.",
        y = G[H] || module.parent.exports.ht,
        j = null,
        c = y.Default,
        w = c.def,
        J = y.List,
        R = y.Node,
        A = y.Edge,
        Y = y.Group,
        n = Math,
        f = n.floor,
        E = n.ceil,
        m = n.sqrt,
        M = n.max,
        W = n.min,
        $ = n.abs,
        k = n.cos,
        C = n.sin,
        x = n.PI,
        z = 2 * x,
        O = x / 2,
        d = n.atan,
        X = n.atan2,
        g = n.random,
        P = n.pow,
        p = Number.MAX_VALUE,
        e = Number.MIN_VALUE,
        t = "circular",
        r = "symmetric",
        B = "hierarchical",
        D = "towardnorth",
        S = "towardsouth",
        h = "towardeast",
        T = "towardwest",
        l = function() {
            throw "Oops!"
        },
        Z = function(M) {
            return t === M ? new Gj : r === M ? new Np : B === M ? new Fn : M === D || M === S || M === h || M === T ? new wr : j
        },
        L = function($) {
            return $ === T ? new V(O) : $ === h ? new V(-O) : $ === D ? new V(x) : j
        },
        V = function(Q) {
            this.s = C(Q), this.c = k(Q)
        };
    V.prototype.tf = function(_, I) {
        return 1 === arguments.length && (I = _.y, _ = _.x), {
            x : this.c * _ - this.s * I,
            y : this.s * _ + this.c * I
        }
    };
    var I = function(g, i) {
        this.x = g, this.y = i
    };
    w(I, i, {
        equals : function(d) {
            return this === d ? !0 : d instanceof I ? d.x === this.x && d.y === this.y : !1
        }
    });
    var Q = function(W, N) {
        this.width = W, this.height = N
    };
    w(Q, i, {});
    var N = function(T, J) {
        this.x = T, this.y = J
    };
    w(N, i, {});
    var s = function() {
        var J = arguments;
        2 === J.length ? (s.superClass.constructor.call(this, J[1].width, J[1].height), this.x = J[0].x, this.y = J[0].y) : (s.superClass.constructor.call(this, J[2], J[3]), this.x = J[0], this.y = J[1])
    };
    w(s, Q, {});
    var F = function(V, w) {
        if (F.a2(V.x, w.x)) this._a = 1, this._b = 0, this._c = -V.x;else {
            this._b = -1;
            var M = (w.y - V.y) / (w.x - V.x),
                v = V.y - V.x * M;
            this._a = M, this._c = v
        }
    };
    w(F, i, {
        a3 : function() {
            return this._a
        },
        a4 : function() {
            return this._b
        },
        a5 : function() {
            return this._c
        }
    }), F.a6 = function(J, p) {
        if (F.a1(J.a3()) && F.a1(p.a3())) return j;
        if (F.a1(J.a4()) && F.a1(p.a4())) return j;
        if (F.a1(p.a4())) {
            var e = J;
            J = p, p = e
        }
        var l,
            Z,
            U = J.a3(),
            w = J.a4(),
            u = -J.a5();
        F.a1(J.a3()) ? (l = p.a4(), Z = -p.a5()) : (l = p.a4() - p.a3() / J.a3() * J.a4(), Z = -p.a5() - p.a3() / J.a3() * -J.a5());
        var K = Z / l,
            m = (u - K * w) / U;
        return new I(m, K)
    }, F.a1 = function(P) {
        return F.a2(P, 0)
    }, F.a2 = function(t, i) {
        return $(t - i) < 1e-5
    };
    var o = function(S) {
        if (this._a = new Ed, S)
            for (var e = 0; e < S.size(); e++) this._a.aa(S.get(e))
    };
    w(o, i, {
        c : function() {
            return this._a.ah()
        },
        d : function() {
            return this._a.ah()
        },
        a : function() {
            for (var j = new J, F = this.c(); F.i1(); F.i2()) j.add(F.i6(), 0);
            return new o(j)
        },
        b : function() {
            return this._a.ay()
        }
    });
    var U = function(p, c) {
        this.x = p, this.y = c
    };
    w(U, i, {
        a : function(Q, F) {
            this.x = Q, this.y = F
        }
    });
    var K = function(b, z) {
        this.x = b || 0, this.y = z || 0
    };
    w(K, i, {
        b : function() {
            return new K(this.x, this.y)
        },
        a : function(g) {
            this.z = g
        },
        c : function() {
            return this.x
        },
        d : function() {
            return this.y
        },
        f : function(f, j) {
            this.x = f, this.y = j
        }
    });
    var u = function(t) {
        this._c = new Ed, t ? (this.ac(t.a8().b()), this.ad(t.a9().b())) : (this.ac(new K), this.ad(new K))
    };
    w(u, i, {
        a6 : function() {
            return this.a5(this)
        },
        ac : function(f) {
            f.a(this), this._a = f
        },
        ad : function(_) {
            _.a(this), this._b = _
        },
        a8 : function() {
            return this._a
        },
        a9 : function() {
            return this._b
        },
        a1 : function(i, x) {
            return this.a4(i, x, this.aa())
        },
        a2 : function() {
            return this._c.ay()
        },
        a7 : function(P) {
            return this._c.ak(P)
        },
        aa : function() {
            return 0 === this._c.ay() ? j : this._c.as()
        },
        a3 : function() {
            this._c.af()
        },
        i2 : function(f) {
            var v = this.a7(f);
            return v ? new I(v.x, v.y) : j
        },
        i1 : function() {
            return this.a2()
        },
        i6 : function() {
            var B = this.a8();
            return new I(B.c(), B.d())
        },
        i7 : function() {
            var J = this.a9();
            return new I(J.c(), J.d())
        },
        i8 : function(C) {
            this.a8().f(C.x, C.y)
        },
        i9 : function(q) {
            this.a9().f(q.x, q.y)
        },
        i3 : function(t, K, R) {
            var I = this.a7(t);
            I && I.a(K, R)
        },
        i4 : function(U, a) {
            this.a1(U, a)
        },
        i5 : function() {
            this.a3()
        }
    });
    var q = function(D) {
        q.superClass.constructor.call(this, D)
    };
    w(q, u, {
        a5 : function(V) {
            return new q(V)
        },
        a4 : function(q, X, R) {
            var $ = new U(q, X);
            return this.ab($, R), $
        },
        ab : function(l, D) {
            this._c.an(l, this._c.al(D))
        }
    });
    var v = function() {
        if (2 === arguments.length) {
            var a = arguments[0],
                j = arguments[1];
            this._s = !1, this._w = 30, this._h = 30, this._x = a - this._w / 2, this._y = j - this._h / 2
        } else {
            var K = arguments[0];
            this._s = K._s, this._w = K._w, this._h = K._h, this._x = K._x, this._y = K._y
        }
    };
    w(v, i, {
        m3 : function() {
            return this.m2(this)
        },
        m4 : function() {
            return this._x + this._w / 2
        },
        m5 : function() {
            return this._y + this._h / 2
        },
        m6 : function(R, V) {
            this._x = R - this._w / 2, this._y = V - this._h / 2
        },
        i1 : function() {
            return this._x
        },
        i2 : function() {
            return this._y
        },
        i5 : function(P, f) {
            this._x = P, this._y = f
        },
        i3 : function() {
            return this._w
        },
        i4 : function() {
            return this._h
        },
        i6 : function(A, d) {
            var t = (this._w - A) / 2,
                V = (this._h - d) / 2;
            this._x += t, this._y += V, this._w = A, this._h = d
        },
        m1 : function(r) {
            var _,
                y,
                E,
                l;
            r.width <= 0 ? (_ = this._x, y = this._x + this._w, E = this._y, l = this._y + this._h) : (_ = W(this._x, r.x), y = M(this._x + this._w, r.x + r.width), E = W(this._y, r.y), l = M(this._y + this._h, r.y + r.height)), r.x = _, r.y = E, r.width = y - _, r.height = l - E
        }
    });
    var a = function(c) {
        c ? a.superClass.constructor.call(this, c) : a.superClass.constructor.call(this, 0, 0)
    };
    w(a, v, {
        m2 : function(D) {
            return new a(D)
        }
    });
    var _ = {
            a2 : function(R) {
                var O = nd.a2(lq.a(R.xa()));
                return _.a4(R, O, _.a3(R, O))
            },
            a3 : function(c, Q) {
                for (var h = c.x9(); h.i1(); h.i2()) Q.i7(h.i9(), -1);
                for (var K = 0, T = new Sn(c.xa()), I = c.x9(); I.i1(); I.i2()) {
                    var n = I.i9();
                    -1 === Q.i2(n) && _.a(n, T, Q, K++)
                }
                return K
            },
            a6 : function(U) {
                for (var k = new yc, f = _.a2(U), H = 0; H < f.length - 1; H++) {
                    var V = U.xo(f[H].x2(), f[H + 1].x3());
                    k.aa(V)
                }
                return k
            },
            a4 : function(I, t, S) {
                for (var z = [], T = 0, s = I.x9(); S > T; T++) z[T] = new Uf;
                for (; s.i1(); s.i2()) z[t.i2(s.i9())].ae(s.i9());
                return z
            },
            a : function(h, I, J, P) {
                for (I.c(h), J.i7(h, P); !I.a();) {
                    h = I.b();
                    for (var L = h.ag(); L; L = L.a8()) {
                        var u = L.a3();
                        -1 === J.i2(u) && (J.i7(u, P), I.c(u))
                    }
                    for (var m = h.ae(); m; m = m.a7()) {
                        var $ = m.a2();
                        -1 === J.i2($) && (J.i7($, P), I.c($))
                    }
                }
            },
            a1 : function(r, n, q) {
                var J = new cq(n, q);
                return J.a8(r), J._i
            },
            a5 : function(p, Y, $) {
                for (var E = [], W = 0; $ > W; W++) E[W] = new yc;
                for (var f = p.xf(); f.i1(); f.i2()) E[Y.i2(f.i8())].aa(f.i8());
                return E
            },
            a7 : function(k) {
                var t = new yc,
                    M = nd.a3(lq.b(k.xa())),
                    o = nd.a4(lq.a(k.xh())),
                    n = _.a1(k, o, M),
                    G = _.a5(k, o, n);
                if (G.length > 1) {
                    for (var T = new Uf, Y = 0; Y < G.length; Y++) {
                        var e = G[Y],
                            x = j;
                        if (1 === e.ay()) {
                            var $ = e.c2();
                            1 === $.a2().ad() ? x = $.a2() : 1 === $.a3().ad() && (x = $.a3())
                        } else {
                            for (var v = e.c1(); v.i1(); v.i2()) {
                                var r = v.i8();
                                if (M.i4(r.a2()))
                                    if (x) {
                                        if (x !== r.a2()) {
                                            x = j;break
                                        }
                                    } else
                                        x = r.a2();
                                if (M.i4(r.a3()))
                                    if (x) {
                                        if (x !== r.a3()) {
                                            x = j;break
                                        }
                                    } else
                                        x = r.a3()
                            }
                            if (x) {
                                var X = e.c2();
                                x = X.a2() !== x ? X.a2() : X.a3()
                            }
                        }
                        x && T.aa(x)
                    }
                    for (var m, K = T.x4(); !T.ar(); K = m) m = T.x4(), t.ac(k.xo(K, m))
                }
                return t
            }
        },
        zs = function() {
            this._c = 0, this._d = 0, this._e = 0, this._b = !0, this._f = !1
        };
    w(zs, i, {
        a6 : function(B) {
            this._f = B
        },
        a7 : function(u) {
            this._b = u
        },
        a8 : function(F) {
            0 !== F.x0() && this.a9(F, F.x9().i9())
        },
        a9 : function(R, n) {
            if (this._xx = R.xk(), this._c = R.xl(), this._d = 0, this._e = 0, this.a0(n), this._b)
                for (var P = R.x9(); P.i1(); P.i2()) {
                    var s = P.i9();
                    this._xx.i1(s) || (this.a1(s), this.a0(s))
                }
            R.xi(this._xx), R.xj(this._c)
        },
        a0 : function(Q) {
            var J = ++this._d;
            this._xx.z1(Q, zs._B), this.a5(Q, J);
            for (var E = this._f ? Q.ap() : Q.af(); E.i1(); E.i2()) {
                var Y = E.i8();
                if (!this._c.i4(Y)) {
                    this._c.i7(Y, !0);
                    var v = Y.a1(Q);
                    this._xx.i1(v) ? this.a3(Y, v, !1) : (this.a3(Y, v, !0), this.a0(v), this.a2(Y, v))
                }
            }
            this.a4(Q, J, ++this._e), this._xx.z1(Q, zs._C)
        },
        a5 : function() {},
        a4 : function() {},
        a3 : function() {},
        a2 : function() {},
        a1 : function() {}
    }), zs._B = {}, zs._C = {};
    var rr = function(F) {
        this._a = F
    };
    w(rr, zs, {
        a5 : function(V) {
            var m = this._a._ah.i2(V);
            this._a._ad[m].ae(V)
        }
    });
    var Io = function(W) {
        this._a = W
    };
    w(Io, zs, {
        a2 : function(T, b) {
            var u = T.a1(b),
                O = this._a[u.al()],
                V = this._a[b.al()];
            V._a + 1 > O._a ? (O._c = O._a, O._b = O._d, O._a = V._a + 1, O._d = T) : V._a + 1 > O._c && (O._c = V._a + 1, O._b = T)
        }
    });
    var Tn = function(l) {
        this._a = l
    };
    w(Tn, zs, {
        a3 : function(X, F, H) {
            H && X.a2() === F && this._a.ac(X)
        }
    });
    var ki = function() {
        this._a = 0, this._c = 0
    };
    w(ki, i, {});
    var Lj = function() {
        this._a = 0
    };
    w(Lj, i, {
        a1 : function(M, T) {
            this._a = 0;
            for (var p = T.length - 1; p >= 0; p--) T[p] = -1;
            for (var u = M.x9(); u.i1(); u.i2()) {
                var y = u.i9();
                if (0 === y.ak()) {
                    this.a2(y, y.al(), T);break
                }
            }
            for (var Z = M.x9(); Z.i1(); Z.i2()) {
                var m = Z.i9(),
                    J = m.al();
                -1 === T[J] && this.a2(m, J, T)
            }
        },
        a2 : function(c, q, B) {
            B[q] = -2;
            for (var U = c.ag(); U;) {
                var V = U.a3(),
                    y = V.al();
                switch (B[y]) {
                    case -1:
                        this.a2(V, y, B);case -2:
                    default:
                        U = U.a8()
                }
            }
            B[q] = this._a++
        }
    });
    var Ff = {
            a1 : function(p) {
                var y = new Ye;
                return y.a8(p), y._n
            },
            a2 : function(n) {
                var T,
                    J = n.x9(),
                    m = 0;
                for (J.i4(); J.i1(); J.i2()) 0 === J.i9().ak() && (T = J.i9(), m++);
                if (1 === m) return T;
                for (m = 0, J.i4(); J.i1(); J.i2()) 0 === J.i9().ao() && (T = J.i9(), m++);
                return 1 === m ? T : Ff.a8(n)
            },
            a8 : function(N) {
                var M = lq.a(N.x0()),
                    U = nd.a2(M);
                return Ff.a6(N, U)
            },
            a6 : function(l, L) {
                var J = l.xd(),
                    M = lq.d(1),
                    v = lq.a(l.x0(), -1),
                    w = Ff.a4(l, J);
                Ff.a7(J, L, M, v, -1);
                for (var Y = w.c1(); Y.i1(); Y.i2()) l.x3(Y.i8());
                return M[0]
            },
            a7 : function(z, e, a, x, F) {
                for (var y = 0, g = z.ag(); g; g = g.a8()) {
                    var s = g.a3(),
                        Y = Ff.a7(s, e, a, x, F);
                    Y > F && (F = Y), y += x[s.al()]
                }
                for (var f = y * (z._g.xa() - 1 - y), d = z.ag(); d; d = d.a8())
                    for (var r = d.a3(), v = d.a8(); v; v = v.a8()) {
                        var p = v.a3();
                        f += x[r.al()] * x[p.al()]
                    }
                return e.i7(z, f), x[z.al()] = y + 1, f > F && (F = f, a[0] = z), F
            },
            a4 : function(m, T) {
                var V = new yc,
                    S = new Tn(V);
                S.a6(!1), S.a9(m, T);
                for (var A = V.c1(); A.i1(); A.i2()) m.x3(A.i8());
                return V
            },
            a3 : function(h) {
                return Ff.a4(h, Ff.a2(h))
            }
        },
        Ye = function() {
            this._n = !0, this.a6(!1)
        };
    w(Ye, zs, {
        a3 : function(v, n, s) {
            s || (this._n = !1)
        },
        a1 : function() {
            this._n = !1
        }
    });
    var cq = function(o, U) {
        this._i = 0, this._m = U, this._j = o, this._l = !1
    };
    w(cq, zs, {
        a8 : function(E) {
            this._h = lq.a(E.x0()), this._k = lq.a(E.x0()), this._g = new Sn(E.xh()), cq.superClass.a8.call(this, E)
        },
        a5 : function(T, C) {
            this._k[T.al()] = this._h[T.al()] = C
        },
        a3 : function(S, z, m) {
            if (this._g.c(S), !m) {
                var P = S.a1(z);
                this._h[P.al()] = W(this._h[P.al()], this._k[z.al()])
            }
        },
        a1 : function() {
            this._l = !1
        },
        a2 : function(L, e) {
            var v = L.a1(e);
            if (this._h[e.al()] >= this._k[v.al()]) {
                for (; this._g.d() !== L; this._j.i5(this._g.b(), this._i))
                    ;
                this._j.i5(this._g.b(), this._i), this._i++, this._g.a() ? this._l ? this._m.i5(v, !0) : this._l = !0 : this._m.i5(v, !0)
            }
            this._h[v.al()] = W(this._h[v.al()], this._h[e.al()])
        }
    });
    var fo = function(k, P) {
        this._h = !1, this._i = k, this._g = P
    };
    w(fo, i, {
        z1 : function(S, r) {
            S._c[this._i] = r
        },
        i1 : function(r) {
            return r._c[this._i]
        },
        i5 : function(q, Z) {
            q._c[this._i] = Z
        },
        i4 : function(E) {
            return E._c[this._i]
        },
        i7 : function(g, Q) {
            g._c[this._i] = Q
        },
        i2 : function(i) {
            var u = i._c[this._i];
            return u ? u : 0
        },
        i6 : function(z, W) {
            z._c[this._i] = W
        },
        i3 : function(h) {
            var y = h._c[this._i];
            return y ? y : 0
        },
        c : function() {
            return this._h
        },
        d : function() {
            this._h = !0
        }
    });
    var Fl = function(q, U) {
        this._c = !1, this._d = q, this._b = U
    };
    w(Fl, i, {
        i8 : function(f, Q) {
            f._c[this._d] = Q
        },
        i1 : function(f) {
            return f._c[this._d]
        },
        i7 : function(Q, _) {
            Q._c[this._d] = _
        },
        i4 : function(q) {
            var f = q._c[this._d];
            return f ? f : !1
        },
        i5 : function($, e) {
            $._c[this._d] = e
        },
        i2 : function(A) {
            var z = A._c[this._d];
            return z ? z : 0
        },
        i6 : function(E, D) {
            E._c[this._d] = D
        },
        i3 : function(l) {
            var R = l._c[this._d];
            return R ? R : 0
        },
        a : function() {
            return this._c
        },
        b : function() {
            this._c = !0
        }
    });
    var yf = function(w) {
        this._bb = w, this.i4()
    };
    w(yf, i, {
        i1 : function() {
            return this._aa != j
        },
        i2 : function() {
            this._aa = this._aa._a
        },
        i3 : function() {
            this._aa = this._aa._b
        },
        i4 : function() {
            this._aa = this._bb._b
        },
        i5 : function() {
            this._aa = this._bb._c
        },
        i7 : function() {
            return this._bb.ay()
        },
        i6 : function() {
            return this._aa._c
        }
    });
    var Bj = function(O) {
        Bj.superClass.constructor.call(this, O)
    };
    w(Bj, yf, {
        i8 : function() {
            return this.i6()
        }
    });
    var Ed = function(j) {
        if (this._id = Ed.id(), this._a = 0, j)
            for (j.i4(); j.i1(); j.i2()) this.ae(j.i6())
    };
    w(Ed, i, {
        ac : function(U) {
            var o = this.ag(U);
            return this._b ? (this._b._b = o, o._a = this._b, this._b = o) : this._b = this._c = o, this._a++, o
        },
        ae : function(R) {
            var f = this.ag(R);
            return this._c ? (this._c._a = f, f._b = this._c, this._c = f) : this._b = this._c = f, this._a++, f
        },
        z1 : function(f) {
            f._b = j, f._a = j, this._c ? (this._c._a = f, f._b = this._c, this._c = f) : this._b = this._c = f, this._a++
        },
        ad : function(E) {
            E._b = j, E._a = j, this._b ? (this._b._b = E, E._a = this._b, this._b = E) : this._b = this._c = E, this._a++
        },
        aa : function(M) {
            return this.ae(M), !0
        },
        ab : function(j) {
            for (; j.i1(); j.i2()) this.ae(j.i6())
        },
        ao : function(a, X) {
            if (X === this._b) return this.ac(a);
            if (X) {
                var V = this.ag(a);
                return this.aq(V, X), V
            }
            return this.ae(a)
        },
        aq : function(V, $) {
            if ($)
                if ($ === this._b) this.ad(V);else {
                    if (this._c) {
                        var H = $._b;
                        $._b = V, V._a = $, H._a = V, V._b = H
                    } else V._b = j, V._a = j, this._b = this._c = V;
                    this._a++
                }
            else this.ad(V)
        },
        ap : function(t, i) {
            if (i)
                if (i === this._c) this.z1(t);else {
                    if (this._b) {
                        var d = i._a;
                        i._a = t, t._a = d, d._b = t, t._b = i
                    } else t._b = j, t._a = j, this._b = this._c = t;
                    this._a++
                }
            else this.z1(t)
        },
        an : function(e, P) {
            if (P === this._c) return this.ae(e);
            if (P) {
                var m = this.ag(e);
                return this.ap(m, P), m
            }
            return this.ac(e)
        },
        ay : function() {
            return this._a
        },
        ar : function() {
            return 0 === this._a
        },
        af : function() {
            this._b = this._c = j, this._a = 0
        },
        am : function() {
            return this._b._c
        },
        at : function() {
            var c = this.am();
            return this.aw(this._b), c
        },
        as : function() {
            return this._c._c
        },
        au : function() {
            return this.aw(this._c)
        },
        ak : function(m) {
            for (var n = 0, p = this._b; p;) {
                if (m === n) return p._c;
                p = p._a, n++
            }
            return j
        },
        aj : function(I) {
            return I._a ? I._a : this._b
        },
        ai : function(d) {
            return d._b ? d._b : this._c
        },
        aw : function(W) {
            return W !== this._b ? W._b._a = W._a : this._b = W._a, W !== this._c ? W._a._b = W._b : this._c = W._b, this._a--, W._c
        },
        av : function(d) {
            return this.aw(d._aa)
        },
        ah : function() {
            return new yf(this)
        },
        al : function(t) {
            for (var c = this._b; c;) {
                if (!c._c && !t) return c;
                if (c._c === t) return c;
                c = c._a
            }
            return j
        },
        a0 : function() {
            for (var g = lq.d(this._a), W = 0, J = this._b; J;) g[W] = J._c, J = J._a, W++;
            return g
        },
        ax : function() {
            for (var W = this._b; W; W = W._b) {
                var v = W._a;
                W._a = W._b, W._b = v
            }
            var G = this._b;
            this._b = this._c, this._c = G
        },
        a1 : function(V) {
            var N = this.a0(),
                X = 0;
            N.sort(V);
            for (var E = this._b; E;) E._c = N[X], E = E._a, X++
        },
        a2 : function() {
            var a = this.a0();
            a.sort(lq.c);
            for (var L = 0, _ = this._b; _;) _._c = a[L], _ = _._a, L++
        },
        az : function(P) {
            this._b ? P._b && (this._c._a = P._b, P._b._b = this._c, this._c = P._c) : (this._b = P._b, this._c = P._c), this._a += P._a, P._b = P._c = j, P._a = 0
        },
        ag : function(I) {
            return new cm(I)
        }
    }), Ed.id = function() {
        var R = 0;
        return function() {
            return ++R
        }
    }();
    var yc = function(M) {
        yc.superClass.constructor.call(this, M)
    };
    w(yc, Ed, {
        c1 : function() {
            return new Bj(this)
        },
        c2 : function() {
            return this.am()
        },
        c3 : function() {
            return this.at()
        }
    });
    var Mm = function() {
        this._c = 0
    };
    w(Mm, i, {
        a : function(S) {
            this._c++, S._b = this._b, S._a = j, this._b ? (this._b._a = S, this._b = S) : this._b = this._a = S
        },
        b : function(T, B) {
            if (!B) return this.a(T), void 0;
            var k = B._b;
            k ? k._a = T : this._a = T, T._b = k, T._a = B, B._b = T, this._c++
        },
        c : function(b) {
            var W = b._a,
                o = b._b;
            this._c--, W ? W._b = o : this._b = o, o ? o._a = W : this._a = W
        }
    });
    var qq = function(J, A) {
        this._p = J, this._j = A, this._o = J._o[A]
    };
    w(qq, i, {
        i1 : function() {
            return this._o != j
        },
        i2 : function() {
            this._o = this._o._k[this._j]
        },
        i3 : function() {
            this._o = this._o._f[this._j]
        },
        i4 : function() {
            this._o = this._p._o[this._j]
        },
        i5 : function() {
            this._o = this._p._q[this._j]
        },
        i7 : function() {
            return this._p._n[this._j]
        },
        i6 : function() {
            return this._o
        },
        i8 : function() {
            return this._o
        }
    });
    var cm = function(B) {
        this._c = B
    };
    w(cm, i, {
        a : function() {
            return this._a
        },
        b : function() {
            return this._b
        },
        c : function(K) {
            this._c = K
        },
        d : function() {
            return this._c
        }
    });
    var Tp = function(s, o, C, W) {
        this._r = s, this._s = o, this._q = C, this._p = W
    };
    w(Tp, i, {
        i1 : function(V) {
            return this._p[V.a5()]
        },
        i3 : function(v) {
            return this._r[v.a5()]
        },
        i2 : function(c) {
            return this._s[c.a5()]
        },
        i4 : function(Y) {
            return this._q[Y.a5()]
        },
        i8 : function(J, y) {
            this._p[J.a5()] = y
        },
        i6 : function(o, n) {
            this._r[o.a5()] = n
        },
        i5 : function(n, V) {
            this._s[n.a5()] = V
        },
        i7 : function(S, E) {
            this._q[S.a5()] = E
        }
    });
    var Sn = function(D) {
        this._a = lq.d(D), this._b = -1
    };
    w(Sn, i, {
        d : function() {
            return this._a[this._b]
        },
        b : function() {
            return this._a[this._b--]
        },
        c : function(X) {
            this._a[++this._b] = X
        },
        a : function() {
            return this._b < 0
        }
    });
    var Rp = function() {};
    w(Rp, i, {
        a0 : function(f) {
            this._c = lq.d(f)
        }
    });
    var Ij = function(g, h, c, l, S, w, U) {
        this._g = 0, g.xt(this, h, c, l, S, w, U)
    };
    w(Ij, Rp, {
        a5 : function() {
            return this._h._u && this._h.b1(), this._g
        },
        a2 : function() {
            return this._d
        },
        a3 : function() {
            return this._e
        },
        a1 : function(L) {
            return this._d !== L ? this._d : this._e
        },
        a4 : function() {
            for (var F = 0; 1 >= F; F++) this._k[F] = j, this._f[F] = j
        },
        a8 : function() {
            return this._k[0]
        },
        a7 : function() {
            return this._k[1]
        },
        a6 : function(R, _, J, L) {
            this.a0(L), this._h = R, this._k = lq.d(2), this._f = lq.d(2), this._d = _, this._e = J
        }
    });
    var jc = function(_) {
        this._j = 0, this._h = _, this.i4()
    };
    w(jc, i, {
        i2 : function() {
            this._k = this._k._k[this._j], this._k || 0 !== this._j || (this._k = this._h._o[1], this._j = 1)
        },
        i3 : function() {
            this._k = this._k._f[this._j], this._k || 1 !== this._j || (this._k = this._h._q[0], this._j = 0)
        },
        i4 : function() {
            this._k = this._h._o[0], this._k ? this._j = 0 : (this._k = this._h._o[1], this._j = 1)
        },
        i5 : function() {
            this._k = this._h._q[1], this._k ? this._j = 1 : (this._k = this._h._q[0], this._j = 0)
        },
        i1 : function() {
            return !!this._k
        },
        i6 : function() {
            return this._k
        },
        i8 : function() {
            return this._k
        },
        i7 : function() {
            return this._h.ad()
        }
    });
    var Vd = function() {
        this._a = Hh._A, this._b = Hh._A, this._c = new J
    };
    w(Vd, i, {
        i1 : function() {
            return this._c.size()
        },
        i2 : function(w) {
            return this._c.get(w)
        },
        i3 : function(Z, k, l) {
            this._c.set(Z, new I(k, l))
        },
        i4 : function(c, M) {
            this._c.add(new I(c, M))
        },
        i5 : function() {
            this._c.clear()
        },
        i6 : function() {
            return this._a
        },
        i7 : function() {
            return this._b
        },
        i8 : function(S) {
            this._a = S
        },
        i9 : function(B) {
            this._b = B
        }
    });
    var mk = function() {
        this._x = 0, this._y = 0, this._w = 0, this._h = 0
    };
    w(mk, i, {
        i5 : function(E, R) {
            this._x = E, this._y = R
        },
        i6 : function(a, v) {
            this._w = a, this._h = v
        },
        i4 : function() {
            return this._h
        },
        i3 : function() {
            return this._w
        },
        i1 : function() {
            return this._x
        },
        i2 : function() {
            return this._y
        }
    });
    var yh = function(g, u, G, k) {
        this._m = g, this._n = u, this._l = G, this._k = k
    };
    w(yh, i, {
        i1 : function(K) {
            return this._k[K.al()]
        },
        i3 : function(g) {
            return this._m[g.al()]
        },
        i2 : function(b) {
            return this._n[b.al()]
        },
        i4 : function(M) {
            return this._l[M.al()]
        },
        z1 : function(J, j) {
            this._k[J.al()] = j
        },
        i6 : function(M, l) {
            this._m[M.al()] = l
        },
        i7 : function(N, s) {
            this._n[N.al()] = s
        },
        i5 : function(n, _) {
            this._l[n.al()] = _
        }
    });
    var Yl = function(X, l) {
        this._b = X, this._r = l, this._a = [];
        for (var d = this._b - 1; d >= 0; d--) this._a.push(d);
        this._c = new J
    };
    w(Yl, i, {
        a1 : function(e) {
            var q;
            if (0 === this._a.length) {
                this.a2(e, this._b, this._b + this._r);
                for (var x = this._b + this._r - 1; x > this._b; x--) this._a.push(x);
                q = this._b, this._b += this._r
            } else
                q = this._a.pop();
            return q
        },
        b : function(h) {
            var M = this.a1(h),
                R = new fo(M, this);
            return this._c.add(R), this.a4(h, M), R
        },
        c : function(N) {
            var i = this.a1(N),
                U = new Fl(i, this);
            return this._c.add(U), this.a4(N, i), U
        },
        a2 : function(S, D, G) {
            for (var u = S._a; u; u = u._a) {
                var h = lq.d(G);
                lq.f(u._c, h, D), u._c = h
            }
        },
        a3 : function(P, t, s) {
            var I = lq.d(s);
            lq.f(P._c, I, t), P._c = I
        },
        a4 : function(o, E) {
            for (var Y = o._a; Y; Y = Y._a) Y._c[E] = j
        },
        a5 : function(f, I) {
            if (f instanceof fo) {
                var t = f;
                if (t.c())
                    throw "";
                t.d();
                var o = f._i;
                this._a.indexOf(o) < 0 && (this.a4(I, o), this._a.push(o), this._c.remove(f))
            }
        },
        a6 : function(h, r) {
            if (h instanceof Fl) {
                var V = h;
                if (V.a())
                    throw "";
                V.b();
                var M = V._d;
                this._a.indexOf(M) < 0 && (this.a4(r, M), this._a.push(M), this._c.remove(h))
            }
        }
    });
    var Kk = function(Y) {
        this._id = Ed.id(), this._p = 0, Y.xs(this)
    };
    w(Kk, Rp, {
        ad : function() {
            return this._n[0] + this._n[1]
        },
        ak : function() {
            return this._n[1]
        },
        ao : function() {
            return this._n[0]
        },
        al : function() {
            return this._g._y && this._g.c(), this._p
        },
        ag : function() {
            return this._o[0]
        },
        ae : function() {
            return this._o[1]
        },
        af : function() {
            return new jc(this)
        },
        am : function() {
            return new qq(this, 1)
        },
        ap : function() {
            return new qq(this, 0)
        },
        an : function() {
            return new hd(this)
        },
        aq : function() {
            return new Dk(this, 1)
        },
        aw : function() {
            return new Dk(this, 0)
        },
        ah : function(Y) {
            for (var s = this._o[0]; s; s = s._k[0])
                if (s.a3() === Y) return s;
            return j
        },
        ai : function(H) {
            for (var F = this._o[1]; F; F = F._k[1])
                if (F.a2() === H) return F;
            return j
        },
        aj : function(n) {
            var K = this.ah(n);
            return K || (K = this.ai(n)), K
        },
        au : function(z) {
            this.at(z, 1, lq.d(this.ak()))
        },
        av : function(V) {
            this.at(V, 0, lq.d(this.ao()))
        },
        as : function(f, Q) {
            this.a0(Q), this._g = f, this._o = lq.d(2), this._q = lq.d(2), this._n = lq.a(2)
        },
        ab : function(b, T, K, x, j) {
            if (!T) return this.aa(b, K, x), void 0;
            var k;
            if (k = T._d === T._e ? x : this !== T._d ? 1 : 0, 0 === j) {
                var Z = T._k[k];
                b._f[x] = T, b._k[x] = Z, T._k[k] = b, Z ? Z._d === Z._e ? Z._f[x] = b : Z._f[this !== Z._d ? 1 : 0] = b : this._q[K] = b
            } else {
                var r = T._f[k];
                b._k[x] = T, b._f[x] = r, T._f[k] = b, r ? r._d === r._e ? r._k[x] = b : r._k[this !== r._d ? 1 : 0] = b : this._o[K] = b
            }
            this._n[K]++
        },
        aa : function(J, V, q) {
            var n = this._q[V];
            J._k[q] = j, n ? (J._f[q] = n, n._d === n._e ? n._k[q] = J : n._k[this !== n._d ? 1 : 0] = J) : (this._o[V] = J, J._f[q] = j), this._q[V] = J, this._n[V]++
        },
        ar : function(W, w, $) {
            var k,
                l;
            k = W._k[$], l = W._f[$], k ? k._f[k._d !== this ? 1 : 0] = l : this._q[w] = l, l ? l._k[l._d !== this ? 1 : 0] = k : this._o[w] = k, this._n[w]--
        },
        ac : function() {
            for (var t = 0; 1 >= t; t++) this._o[t] = j, this._q[t] = j, this._n[t] = 0
        },
        at : function(z, G, N) {
            if (!(this._n[G] < 2)) {
                for (var U = this._n[G], v = 0, f = this._o[G]; f; f = f._k[G]) N[v] = f, v++;
                lq.s(N, U, z);
                var X = 1,
                    H = this._o[G] = N[0];
                for (H._f[G] = j; U > X;) f = N[X], f._f[G] = H, H._k[G] = f, X++, H = f;
                this._q[G] = f, f._k[G] = j
            }
        }
    });
    var Dk = function(x, t) {
        Dk.superClass.constructor.call(this, x, t), this._h = 1 !== t ? 1 : 0
    };
    w(Dk, qq, {
        i6 : function() {
            return this.i9()
        },
        i9 : function() {
            return 0 !== this._h ? this._o._e : this._o._d
        }
    });
    var hd = function(R) {
        hd.superClass.constructor.call(this, R)
    };
    w(hd, jc, {
        i6 : function() {
            return this._k.a1(this._h)
        },
        i9 : function() {
            return this._k.a1(this._h)
        }
    });
    var aq = function(h) {
        aq.superClass.constructor.call(this, h)
    };
    w(aq, yf, {
        i9 : function() {
            return this.i6()
        }
    });
    var og = function(u) {
        this._o = u, this._c = u._a
    };
    w(og, i, {
        i1 : function() {
            return this._c != j
        },
        i2 : function() {
            this._c = this._c._a
        },
        i3 : function() {
            this._c = this._c._b
        },
        i5 : function() {
            this._c = this._o._b
        },
        i4 : function() {
            this._c = this._o._a
        },
        i7 : function() {
            return this._o._c
        },
        i6 : function() {
            return this._c
        },
        i9 : function() {
            return this._c
        },
        i8 : function() {
            return this._c
        }
    });
    var Uf = function(v) {
        if (v && v.length) {
            Uf.superClass.constructor.call(this);
            for (var T = 0; T < v.length; T++) this.ae(v[T])
        } else Uf.superClass.constructor.call(this, v)
    };
    w(Uf, Ed, {
        x1 : function() {
            return new aq(this)
        },
        x2 : function() {
            return this.am()
        },
        x3 : function() {
            return this.as()
        },
        x4 : function() {
            return this.at()
        }
    });
    var Ge = function($) {
        this._d = $, Ge.superClass.constructor.call(this)
    };
    w(Ge, Uf, {});
    var Yo = function(G) {
        this._a = G, this._b = new yc, this._c = new Uf
    };
    w(Yo, i, {
        a : function() {
            for (var f = this._a.x9(); f.i1(); f.i2()) this.e(f.i9())
        },
        b : function() {
            this.c(), this.d()
        },
        c : function() {
            for (; !this._c.ar();) {
                var O = this._c.x4();
                this._a.xq(O) || this.g(O)
            }
        },
        d : function() {
            for (; !this._b.ar();) {
                var v = this._b.c3();
                this._a.xp(v) || this.f(v)
            }
        },
        e : function(y) {
            for (var L = y.af(); L.i1(); L.i2()) this._b.ac(L.i8()), this._a.h1(L.i8());
            this._c.ac(y), this._a.h2(y)
        },
        f : function(x) {
            this._a.u1(x)
        },
        g : function(E) {
            this._a.h3(E)
        }
    }), Yo.h = function(m, P) {
        for (P.i4(); P.i1(); P.i2()) {
            var A = P.i8();
            m.xq(A.a2()) || m.h3(A.a2()), m.xq(A.a3()) || m.h3(A.a3()), m.xp(A) || m.u1(A)
        }
    }, Yo.i = function(W, w) {
        for (w.i4(); w.i1(); w.i2()) {
            var r = w.i8();
            W.xp(r) && W.h1(r), 0 === r.a2().ad() && W.h2(r.a2()), 0 === r.a3().ad() && W.h2(r.a3())
        }
    };
    var Hk = function() {
        var t = arguments;
        this._g = t[0], this._f = this._g.xk(), this._h = this._g.xk(), this._d = new Ed, this._e = 0, 1 !== t.length && this.a(t[1], t[2], t[3], t[4])
    };
    w(Hk, i, {
        a : function(c, G, I, X) {
            for (var N = lq.d(I - G + 1), w = G, M = 0; I >= w; w++) N[w] = new Ge(w);
            for (var Y = this._g.x9(); Y.i1(); Y.i2()) {
                var R = Y.i9();
                (!X || X.i4(R)) && (this._f.z1(R, N[c.i2(R) - G].ac(R)), this._e++)
            }
            for (; M < N.length; M++)
                for (var k = N[M], s = this._d.ae(k), t = k.x1(); t.i1(); t.i2()) this._h.z1(t.i9(), s)
        },
        c : function() {
            this._g.xi(this._h), this._g.xi(this._f)
        },
        e : function() {
            return 0 === this._e
        },
        g : function() {
            for (; this._d.am().ar(); this._d.at())
                ;
            this._e--;
            var _ = this._d.am().x4();
            return this._h.z1(_, j), this._f.z1(_, j), _
        },
        f : function() {
            for (; this._d.as().ar(); this._d.au())
                ;
            this._e--;
            var M = this._d.as().x4();
            return this._h.z1(M, j), this._f.z1(M, j), M
        },
        d : function(E) {
            var v = this._f.i1(E),
                W = this._h.i1(E),
                P = W.d(),
                x = j,
                Y = W.a();
            Y ? (x = Y.d(), this._h.z1(E, Y)) : (x = new Ge(P._d + 1), this._h.z1(E, this._d.ae(x))), P.aw(v), this._f.z1(E, x.ac(E))
        },
        b : function($) {
            var S = this._f.i1($),
                V = this._h.i1($),
                o = V.d(),
                P = j,
                c = V.b();
            c ? (P = c.d(), this._h.z1($, c)) : (P = new Ge(o._d - 1), this._h.z1($, this._d.ac(P))), o.aw(S), this._f.z1($, P.ac($))
        }
    });
    var nd = {
            a1 : function(y) {
                return new yh(y, j, j, j)
            },
            a2 : function(f) {
                return new yh(j, f, j, j)
            },
            a3 : function(E) {
                return new yh(j, j, E, j)
            },
            a4 : function(n) {
                return new Tp(j, n, j, j)
            },
            a5 : function($) {
                return new Tp(j, j, $, j)
            },
            a6 : function(J) {
                return new Tp(j, j, j, J)
            }
        },
        An = function() {
            var O = arguments;
            if (2 === O.length) {
                this._a = new Ed, this._b = new Ed, this._c = 0;
                var S = O[0],
                    Y = O[1],
                    N = new Xq(S._j2.gj(Y) / 2, 0);
                this._a.ac(N), N = new Xq(S._j2.gj(Y) / 2, 0), this._b.ac(N)
            } else this._a = O[1], this._b = O[2], this._c = O[3]
        };
    w(An, i, {});
    var Xq = function(j, d) {
        this._b = j, this._a = d
    };
    w(Xq, i, {});
    var Tr = function() {
        this._cx = !0, this._cs = new sl, this._ct = new kk, this._cw = new Bb
    };
    w(Tr, i, {
        i5 : function(g) {
            this._cx = g
        },
        k : function() {
            var Y = new os(this);
            return this._cx && (this._cs.w1(Y), Y = this._cs), this._cw.w1(Y), Y = this._cw, this._ct.w1(Y), Y = this._ct
        },
        i2 : function(H) {
            this.k().i2(H)
        },
        i1 : function(b) {
            return this.k().i1(b)
        }
    });
    var wr = function() {
        wr.superClass.constructor.call(this), this._jv = 20, this._jw = 40, this._jx = function(D, h) {
            var o = D.a3(),
                w = h.a3(),
                u = o._g;
            return f(100 * (u.g5(o) - u.g5(w)))
        }
    };
    w(wr, Tr, {
        i4 : function(F) {
            return Ff.a1(F)
        },
        i3 : function(_) {
            if (!this.i4(_))
                throw "";
            var J = Ff.a3(_);
            if (this._j2 = _, this._j3 = new Mp(_), Uj.c(_), this._jy = _.xk(), !_.xb()) {
                this.bu();
                var O = this._j3.c1();
                this.f(O), this.b(this._j3), this.c(this._j3)
            }
            for (var Z; !J.ar(); _.x3(Z)) Z = J.c3(), Uj.b(_.g2(Z))
        },
        bu : function() {
            if (this._jx)
                for (var s = this._j2.x9(); s.i1(); s.i2()) s.i9().av(this._jx)
        },
        c : function(Q) {
            for (var O = this.a2(Q), r = lq.a(O.length), S = 0; S < O.length; S++) {
                for (var E = O[S], G = 0, C = E.ah(); C.i1(); C.i2()) {
                    var R = C.i6();
                    G = M(G, this._j2.g9(R))
                }
                r[S] = G
            }
            for (var Z = -this._jw, q = 0; q < O.length; q++) {
                Z += this._jw + r[q];
                for (var y = O[q], B = y.ah(); B.i1(); B.i2()) {
                    var L = B.i6();
                    this._j2.s2(L, this._j2.g5(L), Z - r[q] / 2)
                }
            }
        },
        a2 : function(g) {
            for (var A = lq.d(g.b()), r = 0, j = g.b(); j > r; r++) A[r] = new Ed;
            return g.c1(), this.a1(g.c1(), 0, A), A
        },
        a1 : function(r, y, A) {
            A[y].ae(r);
            for (var e = r.aw(); e.i1(); e.i2()) this.a1(e.i9(), y + 1, A)
        },
        b : function(N) {
            var Z = N.c1();
            this._j2.s2(Z, 0, this._j2.g6(Z)), this.g(Z)
        },
        g : function(z) {
            for (var Z = z.aw(); Z.i1(); Z.i2()) {
                var k = Z.i9(),
                    G = this._jy.i1(k);
                this._j2.s2(k, this._j2.g5(z) + G._c, this._j2.g6(k)), this.g(k)
            }
        },
        f : function(J) {
            if (this._j3.c2(J)) return this._jy.z1(J, new An(this, J)), void 0;
            var g = J.aw(),
                P = g.i9();
            g.i2(), this.f(P);
            var e = this._jy.i1(P),
                E = new An(this, e._a, e._b, 0);
            if (!g.i1()) return E._a.ac(new Xq(this._j2.gj(J) / 2, 0)), E._b.ac(new Xq(this._j2.gj(J) / 2, 0)), this._jy.z1(J, E), void 0;
            for (; g.i1();) {
                P = g.i9(), g.i2(), this.f(P), e = this._jy.i1(P);
                for (var V = E._b.ah(), K = e._a.ah(), x = 2147483647, l = 0, o = 0; V.i1() && K.i1();) {
                    var y = V.i6();
                    V.i2();var B = K.i6();
                    K.i2(), o += y._a, l += B._a, x = W(x, l - o - y._b - B._b)
                }
                e._c = this._jv - x, l += e._c;var C = e._b.am();
                if (C._a = e._c, V.i1() && !K.i1())
                    for (var R = o - this.a3(e._b); V.i1(); R = 0) {
                        var Y = V.i6();
                        V.i2(), e._b.ae(new Xq(Y._b, Y._a + R))
                    }
                else if (!V.i1() && K.i1()) {
                    var m = this.a3(E._a);
                    for (m = l - m; K.i1(); m = 0) {
                        var N = K.i6();
                        K.i2(), E._a.ae(new Xq(N._b, N._a + m))
                    }
                }
                E._b = e._b
            }
            this._jy.z1(J, E);
            for (var $ = -e._c / 2, w = J.aw(); w.i1();) {
                var f = w.i9();
                w.i2();var G = this._jy.i1(f);
                G._c += $;var t = G._b.am();
                t._a += $, t = G._a.am(), t._a += $
            }
            E._a.ac(new Xq(this._j2.gj(J) / 2, 0)), E._b.ac(new Xq(this._j2.gj(J) / 2, 0))
        },
        a3 : function(v) {
            for (var B = 0, p = v.ah(); p.i1(); p.i2()) {
                var P = p.i6();
                B += P._a
            }
            return B
        }
    });
    var Mp = function(Q) {
        this._b = Q, this.a()
    };
    w(Mp, i, {
        c1 : function() {
            return this._a || this.a(), this._a
        },
        b : function() {
            return this._a ? this.d(this._a) : -1
        },
        d : function(o) {
            for (var p = 0, n = o.aw(); n.i1(); n.i2()) p = M(p, this.d(n.i9()));
            return p + 1
        },
        c2 : function(u) {
            return 0 === u.ao()
        },
        a : function() {
            for (var u = this._b.x9(); u.i1(); u.i2())
                if (0 === u.i9().ak()) return this._a = u.i9(), void 0
        }
    });
    var wo = function(X) {
        this._d = 0, this._e = 0, this._f = 0, this._a = 0, this._b = 0, this._g = X, this._c = new Ed
    };
    w(wo, i, {
        a : function() {
            return this._d + this._e + this._f
        }
    });
    var eq = function() {
        eq.superClass.constructor.call(this), this._kl = 340, this._km = 360, this._kk = 40, this._ko = .5
    };
    w(eq, Tr, {
        ic : function() {
            return this._km
        },
        ia : function() {
            return this._kl
        },
        i9 : function() {
            return this._ko
        },
        i3 : function(V) {
            if (!Ff.a1(V))
                throw "";
            this._a = V;
            var a = this.i8(),
                S = Ff.a4(V, a);
            Uj.c(V), this._kn = lq.d(V.x0());
            for (var r = V.x9(); r.i1(); r.i2()) {
                var s = r.i9();
                s !== a ? this.aa(s, new wo(this._kk + this.q(s.aq().i9()))) : this.aa(s, new wo(this._kk))
            }
            this.s(a), V.s2(a, 0, 0), this.t(a);
            for (var d; !S.ar(); V.x3(d)) d = S.c3()
        },
        i4 : function(r) {
            return Ff.a1(r)
        },
        i0 : function(t) {
            return this._kn[t.al()]
        },
        i8 : function() {
            return Ff.a2(this._a)
        },
        i7 : function(Z) {
            for (var c, s = this.ib(Z);;) {
                if (c = this.i6(Z), s >= c) break;
                for (var P = Z.aw(); P.i1(); P.i2()) {
                    var b = P.i9();
                    this.i0(b)._g *= 1 + this._ko
                }
            }
            var m = (s - c) / (2 * Z.ao());
            c = 0;
            for (var H = Z.aw(); H.i1(); H.i2()) {
                var x = this.i0(H.i9());
                x._d += m, x._e += m, c += x._d + x._e
            }
            this.id(Z)
        },
        id : function(L) {
            for (var T = lq.d(L.ao()), J = 0, N = L.ap(); N.i1();) T[J] = N.i8(), N.i2(), J++;
            var I = this;
            T.sort(function(x, F) {
                var Z = x.a3(),
                    u = F.a3(),
                    i = I.i0(Z).a() - I.i0(u).a();
                return i > 0 ? 1 : i >= 0 ? 0 : -1
            });
            for (var v = 0; v < T.length; v++) this._a.h1(T[v]);
            for (var k = 0; k < T.length; k += 2) this._a.u1(T[k]);
            for (J = T.length - 1, 0 === J % 2 && J--; J > 0; J -= 2) this._a.u1(T[J])
        },
        ib : function(u) {
            return 0 === u.ak() ? this._km : 2 === u.ao() ? W(180, this._kl) : this._kl
        },
        i6 : function(Y) {
            for (var M = 0, w = Y.ap(); w.i1(); w.i2()) {
                for (var A, H = w.i8(), $ = H.a3(), o = this.i0($), C = -o._g, Q = o._b, G = o._c, N = 0, t = N + 1, h = G._b, u = h.d(); t > N; t = (A.y - Q) / (A.x - C)) A = u, h = G.ai(h), u = h.d(), N = (u.y - A.y) / (u.x - A.x);
                for (o._d = 180 * -d(t) / x, N = 0, t = N - 1, h = G._b, u = h.d(); h.a().d().x === u.x; u = h.d()) h = h.a();
                for (var k; N > t; t = (k.y - Q) / (k.x - C)) k = u, h = G.aj(h), u = h.d(), N = (u.y - k.y) / (u.x - k.x);
                o._e = 180 * d(t) / x, M += o._d + o._e
            }
            return M
        },
        aa : function(T, K) {
            this._kn[T.al()] = K
        },
        p : function(e) {
            var X = this.i0(e),
                c = new Ed,
                p = 2 * this.q(e);
            c.aa(new I(0, 0)), c.aa(new I(0, p)), c.aa(new I(p, p)), c.aa(new I(p, 0)), X._c = c, X._a = p / 2, X._b = p / 2
        },
        r : function(P) {
            if (0 === P.ao()) this.p(P);else {
                var D = this.i0(P),
                    L = this.q(P),
                    x = new Ed;
                x.aa(new I(-L, -L)), x.aa(new I(-L, L)), x.aa(new I(L, -L)), x.aa(new I(L, L));
                for (var b = P.aw(); b.i1(); b.i2()) {
                    var G = this.i0(b.i9());
                    x.az(G._c)
                }
                for (var N = Hh.h(x), H = p, S = p, o = e, K = e, F = N.ah(); F.i1(); F.i2()) {
                    var z = F.i6();
                    z.x < H && (H = z.x), z.x > o && (o = z.x), z.y < S && (S = z.y), z.y > K && (K = z.y)
                }
                for (var l = new Ed, c = N.ah(); c.i1(); c.i2()) {
                    var i = c.i6();
                    l.aa(new I(i.x - H, i.y - S))
                }
                D._c = l, D._a = -H, D._b = -S
            }
        },
        s : function(t) {
            if (0 === t.ao()) this.r(t);else {
                for (var L = t.aw(); L.i1(); L.i2()) this.s(L.i9());
                this.i7(t);
                for (var J = 0, h = t.aw(); h.i1(); h.i2()) {
                    var Q = h.i9(),
                        F = this.i0(Q),
                        H = 180 - (360 - this.ib(t)) / 2 - J - (F._e + F._f);
                    J += F.a(), H = H / 180 * x;
                    for (var S = C(H), y = k(H), a = F._c._b; a; a = a.a()) {
                        var c = a.d(),
                            O = c.x + F._g,
                            N = c.y - F._b,
                            T = new I(O * y - S * N, O * S + y * N);
                        a.c(T)
                    }
                    var U = F._a + F._g;
                    F._a = U * y, F._b = U * S
                }
                this.r(t)
            }
        },
        t : function(u) {
            var e = this._a.g4(u),
                V = 0;
            if (u.ak() > 0) {
                var D = u.aq().i9(),
                    I = this._a.g4(D);
                V = x + X(I.y - e.y, I.x - e.x)
            }
            for (var n = u.aw(); n.i1(); n.i2()) {
                var F = n.i9(),
                    i = this.i0(F);
                if (0 !== V) {
                    var b = k(V),
                        H = C(V),
                        K = i._a * b - H * i._b,
                        d = i._a * H + b * i._b;
                    i._a = K, i._b = d
                }
                this._a.s2(F, e.x + i._a, e.y + i._b), this.t(F)
            }
        },
        q : function(R) {
            return 1.41 * (M(this._a.gj(R), this._a.g9(R)) / 2)
        }
    });
    var Wc = function() {};
    w(Wc, i, {
        i2 : function(F) {
            return F.ad()
        },
        i1 : l,
        i3 : l,
        i4 : l
    });
    var dn = function(v) {
        this._a = v
    };
    w(dn, i, {
        i2 : function($) {
            for (var X = 0, G = $.an(); G.i1(); G.i2()) this._a.i1(G.i9()) && X++;
            return X
        },
        i4 : function(T) {
            return this._a.i1(T) == j
        },
        i1 : l,
        i3 : l
    });
    var $d = function() {
        $d.superClass.constructor.call(this), this._kq = !1, this._kp = 90
    };
    w($d, eq, {
        a : function(Z, Y) {
            this._kr = Y, this._ks = Z, this._kq = !0
        },
        i7 : function(D) {
            if (!this.u(D)) return $d.superClass.i7.call(this, D), void 0;
            for (var I = this.i9(), q = this.ib(D), r = (360 - q) / 2 + q, J = new yc(D.ap());;) {
                var d,
                    F,
                    h = this.i6(D),
                    A = J._b;
                for (h = (360 - q) / 2; A; A = A.a()) {
                    var N = A.d(),
                        T = N.a3(),
                        V = this.i0(T),
                        Q = this._ks.i3(N),
                        v = Q - (h + V._e);
                    if (v >= 0 && Q + V._d >= r && (v = h + V.a() <= r ? r - h - V.a() : 2 * (r - (Q + V._d))), V._f = 0, v >= 0) V._f = v, d = A, F = V;else {
                        for (-v > V._d + V._e ? v = (V._d + V._e) / 2 : v /= -2, h -= v, r >= h && h + V.a() > r && (h += v, v = h + V.a() - r, h -= v); d && v > F._f; F = this.i0(d.d().a3()))
                            if (v -= F._f, F._f = 0, d = d.b(), !d) {
                                F = j;break
                            }
                        d ? F._f -= v : h += v
                    }
                    h += V.a()
                }
                if (r >= h) {
                    for (var c = 0, b = (360 - q) / 2, G = D.ap(); G.i1(); G.i2()) {
                        var O = G.i8(),
                            o = O.a3(),
                            l = this._ks.i3(O),
                            f = this.i0(o),
                            w = b + f._f + f._e;
                        c < $(w - l) && (c = $(w - l)), b += f.a()
                    }
                    if (c <= this._kp) break
                }
                for (var H = D.aw(); H.i1(); H.i2()) {
                    var z = H.i9();
                    this.i0(z)._g *= 1 + I
                }
            }
        },
        ib : function(G) {
            return this.u(G) ? 0 === G.ak() ? this.ic() : this.ia() : $d.superClass.ib.call(this, G)
        },
        u : function($) {
            return this._kq && 0 !== $.ao() ? this._ks.i1($.ag()) != j : !1
        }
    });
    var fm = function(q) {
        this._a = q
    };
    w(fm, i, {
        i1 : function(o) {
            return this._a.i1(o)
        },
        i2 : l,
        i3 : l,
        i4 : l
    });
    var Vg = function() {};
    w(Vg, i, {
        w1 : function($) {
            this._bb = $
        },
        w2 : function() {
            return this._bb
        },
        w4 : function(t) {
            this._bb && this._bb.i2(t)
        },
        w3 : function(y) {
            return this._bb ? this._bb.i1(y) : !0
        }
    });
    var kk = function() {
        this._cg = 45, this._ce = 400, this._ch = 400, this._cf = 0
    };
    w(kk, Vg, {
        i1 : function(Y) {
            if (this.w2()) {
                for (var x = !0, B = Y.xk(), H = _.a3(Y, B), n = lq.d(H), P = lq.d(H), G = 0; H > G; G++) n[G] = new Uf, P[G] = new yc;
                for (var O = Y.xf(); O.i1(); O.i2()) {
                    var J = O.i8();
                    P[B.i2(J.a2())].aa(J), Y.h1(J)
                }
                for (var X = Y.x9(); X.i1(); X.i2()) {
                    var V = X.i9();
                    n[B.i2(V)].aa(V), Y.h2(X.i9())
                }
                for (var c = 0; H > c; c++) {
                    for (var w = n[c].x1(); w.i1(); w.i2()) Y.h3(w.i9());
                    for (var E = P[c].c1(); E.i1(); E.i2()) Y.u1(E.i8());
                    x = this.w3(Y);
                    for (var t = P[c].c1(); t.i1(); t.i2()) Y.h1(t.i8());
                    for (var h = n[c].x1(); h.i1(); h.i2()) Y.h2(h.i9());
                    if (!x) break
                }
                for (var L = 0; H > L; L++)
                    for (var k = n[L].x1(); k.i1(); k.i2()) Y.h3(k.i9());
                for (var m = 0; H > m; m++)
                    for (var M = P[m].c1(); M.i1(); M.i2()) Y.u1(M.i8());
                return Y.xi(B), x
            }
            return !0
        },
        i2 : function(t) {
            if (!t.xb()) {
                for (var z = t.xk(), D = _.a3(t, z), n = lq.d(D), $ = lq.d(D), T = lq.d(D), W = lq.d(D), X = 0; D > X; X++) n[X] = new Uf, $[X] = new yc;
                for (var l = t.xf(); l.i1(); l.i2()) {
                    var w = l.i8();
                    $[z.i2(w.a2())].aa(w), t.h1(w)
                }
                for (var K = t.x9(); K.i1(); K.i2()) {
                    var b = K.i9();
                    n[z.i2(b)].aa(b), t.h2(K.i9())
                }
                for (var H = 0; D > H; H++) {
                    for (var S = n[H].x1(); S.i1(); S.i2()) t.h3(S.i9());
                    for (var Z = $[H].c1(); Z.i1(); Z.i2()) t.u1(Z.i8());
                    this.w4(t);var m = t.g3();
                    T[H] = new s(m.x, m.y, m.width, m.height);var v = {};
                    if (W[H] = v, this._cf > 0) {
                        var L = this._cg + E((m.width + 1) / this._cf) * this._cf,
                            V = this._cg + E((m.height + 1) / this._cf) * this._cf;
                        v.x = m.x, v.y = m.y, v.width = L, v.height = V
                    } else v.x = m.x, v.y = m.y, v.width = m.width + this._cg, v.height = m.height + this._cg;
                    for (var Q = $[H].c1(); Q.i1(); Q.i2()) t.h1(Q.i8());
                    for (var J = n[H].x1(); J.i1(); J.i2()) t.h2(J.i9())
                }
                for (var M = 0; D > M; M++)
                    for (var x = n[M].x1(); x.i1(); x.i2()) t.h3(x.i9());
                for (var O = 0; D > O; O++)
                    for (var c = $[O].c1(); c.i1(); c.i2()) t.u1(c.i8());
                if (Uj.a(W, j, this._ce / this._ch), this._cf <= 0)
                    for (var Y = 0; Y < W.length; Y++) this.w5(t, n[Y], $[Y], new I(W[Y].x, W[Y].y), T[Y]);
                else
                    for (var k = 0; k < W.length; k++) {
                        var i = f((W[k].x - T[k].x) / this._cf) * this._cf,
                            F = f((W[k].y - T[k].y) / this._cf) * this._cf,
                            y = T[k].x + i,
                            R = T[k].y + F;
                        this.w5(t, n[k], $[k], new I(y, R), T[k])
                    }
                t.xi(z)
            }
        },
        w5 : function(O, H, _, f, Z) {
            for (var q = -Z.x + f.x, U = -Z.y + f.y, S = H.x1(); S.i1(); S.i2()) {
                var r = O.ga(S.i9());
                O.s4(S.i9(), new I(r.x + q, r.y + U))
            }
            for (var y = _.c1(); y.i1(); y.i2()) {
                for (var x = y.i8(), j = new J, E = O.gp(x).c(); E.i1(); E.i2()) {
                    var C = E.i6();
                    j.add(new I(C.x + q, C.y + U))
                }
                O.s5(x, new o(j))
            }
        }
    });
    var Bb = function() {};
    w(Bb, Vg, {
        i1 : function(P) {
            return this.w3(P)
        },
        i2 : function(t) {
            this.w7(t), this.w2() && this.w4(t), this.w6(t)
        },
        w7 : function(I) {
            this.e(I), this.k(I), this.i(I)
        },
        e : function(y) {
            for (var k = y.x9(); k.i1(); k.i2()) {
                var U = y.g4(k.i9());
                y.s1(k.i9(), U)
            }
        },
        w6 : function(C) {
            this.l(C), this.j(C), this.f(C)
        },
        l : function(J) {
            for (var i = J.x9(); i.i1(); i.i2()) {
                var y = J.g4(i.i9());
                J.s1(i.i9(), y)
            }
        },
        j : function(H) {
            for (var F = H.xf(); F.i1(); F.i2()) {
                var k = H.g7(F.i8()),
                    t = k.i6();
                k.i8(t), t = k.i7(), k.i9(t);
                for (var p = 0; p < k.i1(); p++) {
                    var u = k.i2(p);
                    k.i3(p, u.x, u.y)
                }
            }
        },
        k : function(i) {
            for (var f = i.xf(); f.i1(); f.i2()) {
                var X = i.g7(f.i8()),
                    _ = X.i6();
                X.i8(_), _ = X.i7(), X.i9(_);
                for (var M = 0; M < X.i1(); M++) {
                    var p = X.i2(M);
                    X.i3(M, p.x, p.y)
                }
            }
        },
        f : function(J) {
            this._ca && (J.x1("A", this._ca), this._ca = j, this._b6 = j), this._b8 && (J.x1("B", this._b8), this._b8 = j, this._b9 = j)
        },
        i : function(W) {
            this._ca = W.xc("A"), this._ca && (this._b6 = new fm(this._ca), W.x1("A", this._b6)), this._b8 = W.xc("B"), this._b8 && (this._b9 = new fm(this._b8), W.x1("B", this._b9))
        }
    });
    var sl = function() {
        this._a = new yc, this._c = 10
    };
    w(sl, Vg, {
        i2 : function(J) {
            this._b = J.xl(), this.w9(J), this.w4(J), this.c(J), this.w8(J, this._b), J.xj(this._b)
        },
        i1 : function(c) {
            if (this.w2()) {
                this._b = c.xl(), this.w9(c);
                var L = this.w3(c);
                return this.c(c), c.xj(this._b), L
            }
            return !0
        },
        w8 : function(j, f) {
            for (var N = j.xf(); N.i1(); N.i2()) {
                var l = N.i8();
                f.i1(l) && Uj.g(j, l, f.i1(l), this._c)
            }
        },
        w9 : function(U) {
            for (var p = U.xk(), a = U.x9(); a.i1(); a.i2()) {
                for (var Q = a.i9(), I = Q.af(); I.i1(); I.i2()) {
                    var F = I.i8(),
                        M = F.a1(Q),
                        P = p.i1(M);
                    if (P !== F)
                        if (P) {
                            this._b.i1(P) || this._b.i8(P, new yc);
                            var J = this._b.i1(P);
                            J.aa(F), this._a.ac(F), U.h1(F)
                        } else p.z1(M, F)
                }
                for (var o = Q.af(); o.i1(); o.i2()) {
                    var H = o.i8(),
                        C = H.a1(Q);
                    p.z1(C, j)
                }
            }
            U.xi(p)
        },
        c : function(E) {
            for (; !this._a.ar(); E.u1(this._a.c3()))
                ;
        }
    });
    var os = function(X) {
        this._a = X
    };
    w(os, i, {
        i2 : function(V) {
            this._a.i3(V)
        },
        i1 : function(u) {
            return this._a.i4(u)
        }
    });
    var mc = function() {
        mc.superClass.constructor.call(this), this._jo = 30, this._jp = new Db, this._jt = 5
    };
    w(mc, Tr, {
        i4 : function() {
            return !0
        },
        i3 : function(v) {
            this._ju = v, Uj.c(v);
            for (var P = this._jp.i1(v), H = 0, g = v.x9(); g.i1(); g.i2()) H = M(H, this.e(g.i9()));
            H < this._jt && (H = this._jt), this.a(P, H)
        },
        a : function(h, f) {
            var I = h.i7(),
                t = 2 * x / I,
                S = 0,
                F = lq.a(I),
                c = 0;
            for (h.i4(); I > c;) F[c] = this.e(h.i9()) + this._jo, S += F[c], c++, h.i2();
            var M = S / I,
                d = S / z;
            f > d && (d = f), h.i4();
            for (var $ = 0, i = 0; I > i;) {
                var Z = t / M * F[i];
                $ += Z / 2;var O = k($) * d,
                    s = C($) * d;
                $ += Z / 2, this._ju.s2(h.i9(), O, s), i++, h.i2()
            }
            return d
        },
        e : function(e) {
            var G = this._ju.gj(e),
                X = this._ju.g9(e);
            return X >= G ? X : G
        }
    });
    var Gj = function() {
        Gj.superClass.constructor.call(this), this._jm = new mc, this._jk = new $d
    };
    w(Gj, Tr, {
        i4 : function() {
            return !0
        },
        i3 : function(z) {
            if (!(z.x0() < 2)) {
                this._jn = z, Uj.c(this._jn), Uj.e(this._jn);
                var A = new qm(this._jn);
                A.a1(), A.h();
                var H = new Yo(this._jn);
                H.a();
                for (var K = A.x9(); K.i1(); K.i2()) {
                    var S = K.i9(),
                        g = A.c2(S);
                    if (g.ay() > 1) {
                        var Y = A.d1(S);
                        Yo.h(this._jn, Y.c1()), this._jm.i3(this._jn);
                        var h = this._jn.g3();
                        A.s7(S, h.width, h.height)
                    } else if (1 === g.ay()) {
                        var M = g.x2();
                        A.s8(S, this._jn.gm(M)), this._jn.s2(M, 0, 0)
                    } else A.s7(S, 1, 1);
                    Yo.i(this._jn, this._jn.xf())
                }
                H.b();
                var j = this.a7(A);
                Ff.a4(A, j);
                var d = A.xk(),
                    N = A.xl();
                this.a2(A, N, d), this.a1(A, N), this.a3(A, j, N), this._jk.a(N, d), this._jk.i3(A), this.a5(A, j, d);
                for (var G = A.x9(); G.i1(); G.i2())
                    for (var Z = G.i9(), u = A.g4(Z), R = A.c2(Z).x1(); R.i1(); R.i2()) {
                        var k = R.i9();
                        this._jn.s2(k, u.x + this._jn.g5(k), u.y + this._jn.g6(k))
                    }
            }
        },
        a7 : function(v) {
            for (var i, f = -1, u = v.x9(); u.i1(); u.i2()) {
                var d = u.i9();
                v.c2(d).ay() > f && (i = d, f = v.c2(d).ay())
            }
            return i
        },
        a1 : function($, H) {
            for (var l = function(A, e) {
                var h = H.i3(A) - H.i3(e);
                return h > 0 ? 1 : h >= 0 ? 0 : -1
            }, g = $.x9();g.i1(); g.i2()) g.i9().av(l)
        },
        a2 : function(H, g, a) {
            for (var s = lq.a(this._jn.x0()), j = H.x9(); j.i1(); j.i2())
                for (var T = j.i9(), $ = H.c2(T), x = $.x1(); x.i1(); x.i2()) s[x.i9().al()] = T.al();
            this.a4(H, Ff.a2(H), s, g, a)
        },
        a3 : function($, H, T) {
            if ($.c2(H).ay() > 1) {
                for (var W = 0, M = 0, D = 0, c = H.ap(); c.i1(); c.i2()) {
                    var U = c.i8(),
                        y = T.i3(U);
                    y - W > M && (M = y - W, D = (W + y) / 2), W = y
                }
                360 - W > M && (D = (360 + W) / 2), this.a6($, H, D);
                for (var o = H.ap(); o.i1(); o.i2()) {
                    var X = o.i8(),
                        Z = T.i3(X);
                    for (Z -= D; 0 > Z; Z += 360)
                        ;
                    T.i6(X, Z)
                }
                H.av(function(J, Y) {
                    var Z = T.i3(J) - T.i3(Y);
                    return Z > 0 ? 1 : Z >= 0 ? 0 : -1
                })
            }
        },
        a4 : function(y, A, q, I, J) {
            for (var L = A.al(), O = J.i3(A), t = A.ap(); t.i1(); t.i2()) {
                for (var l = t.i8(), h = y.b(l), N = 0, k = 0, e = 0, E = 0, W = h.c1(); W.i1(); W.i2()) {
                    var H,
                        T,
                        $ = W.i8();
                    q[$.a2().al()] === L ? (H = $.a2(), T = $.a3()) : (H = $.a3(), T = $.a2()), e -= this._jn.g5(H), E += this._jn.g6(H), N -= this._jn.g5(T), k += this._jn.g6(T)
                }
                if (0 !== e || 0 !== E) {
                    var n;
                    for (n = 180 * X(E, e) / x - O; 0 > n; n += 360)
                        ;
                    I.i6(l, n)
                }
                if (0 !== N && 0 !== k) {
                    var U = 180 * X(k, N) / x;
                    0 > U && (U += 360), J.i6(l.a3(), U)
                }
                this.a4(y, l.a3(), q, I, J)
            }
        },
        a5 : function(_, c, w) {
            for (var T = _.g4(c), E = c.ap(); E.i1(); E.i2()) {
                var V = E.i8(),
                    K = V.a3(),
                    B = _.g4(K),
                    L = 180 * X(B.y - T.y, B.x - T.x) / x;
                w.i1(K) && (L += w.i3(K)), this.a6(_, K, L), this.a5(_, K, w)
            }
        },
        a6 : function(K, F, V) {
            V = V / 180 * x;
            var r = K.c2(F);
            if (!(r.ay() <= 1))
                for (var T = r.x1(); T.i1(); T.i2()) {
                    var W = T.i9(),
                        U = this._jn.g5(W),
                        m = this._jn.g6(W),
                        j = k(V),
                        u = C(V),
                        M = U * j - u * m,
                        O = U * u + j * m;
                    this._jn.s2(W, M, O)
                }
        }
    });
    var nc = function() {
        this._a = (new Date).getTime()
    };
    w(nc, i, {
        b : function() {
            return (new Date).getTime() - this._a
        }
    });
    var Hh = {
            _A : new I(0, 0),
            b : function(K, b, e) {
                return Hh.c(K.x, K.y, b.x, b.y, e.x, e.y)
            },
            c : function(I, u, q, Q, k, E) {
                q -= I, Q -= u, k -= I, E -= u;
                var Z = k * Q - E * q;
                return Z >= 0 ? 0 >= Z ? 0 : -1 : 1
            },
            d : function(E, b, r) {
                return Hh.b(E, b, r) > 0
            },
            f : function(a, z, O) {
                return Hh.b(a, z, O) < 0
            },
            g : function(x, e, n) {
                return 0 === Hh.b(x, e, n)
            },
            h : function(J) {
                return Hh.i(J)
            },
            i : function(p) {
                var z = new Ed(p.ah()),
                    n = new Ed;
                if (z.a2(), z.ar()) return n;
                var a = z.at();
                for (n.ae(a); !z.ar() && a.equals(z.am()); z.at())
                    ;
                if (z.ar()) return n;
                a = z.at();
                for (var h = n.ae(a), X = z.ah(); X.i1(); X.i2()) {
                    var f = X.i6();
                    if (!f.equals(a))
                        if (a = f, 2 === n.ay() && Hh.g(n.am(), n.as(), f)) h.c(f);else {
                            var s;
                            for (s = h; !Hh.f(n.ai(s).d(), s.d(), f); s = n.ai(s))
                                ;
                            var g;
                            for (g = h; !Hh.d(n.aj(g).d(), g.d(), f); g = n.aj(g))
                                ;
                            for (; g !== n.aj(s); n.aw(n.aj(s)))
                                ;
                            h = n.an(f, s)
                        }
                }
                return n
            },
            j : function() {
                return Hh.k(p)
            },
            k : function(Q) {
                return f(g() * Q)
            },
            l : function(V, C) {
                return g() * (C - V) + V
            }
        },
        Db = function() {};
    w(Db, i, {
        i1 : function(p) {
            this._b = p;
            var n = new yc;
            n = _.a6(p), n.az(_.a7(p));
            for (var X = this.a1(); !n.ar(); p.x5(n.c3()))
                ;
            return X.x1()
        },
        a1 : function() {
            if (this._b.x0() < 3) return new Uf(this._b.x9());
            for (var H = this._b.xk(), d = this._b.xk(), o = this._b.xl(), B = new Hk(this._b, new Wc, 0, this.a3(this._b)), U = this._b.x0(), w = new yc, l = new yc, V = new Yo(this._b); U > 3; U--) {
                for (var D = B.g(), p = D.an(); p.i1(); p.i2()) H.z1(p.i9(), U), d.i5(p.i9(), !1);
                for (var n = D.an(); n.i1(); n.i2())
                    for (var i = n.i9(), A = i.ap(); A.i1(); A.i2()) {
                        var P = A.i8();
                        H.i2(P.a3()) === U && (l.aa(P), d.i5(P.a2(), !0), d.i5(P.a3(), !0))
                    }
                if (l.ay() < D.ad() - 1) {
                    for (var L = j, W = D.an(); W.i1(); W.i2()) {
                        var e = W.i9();
                        if (H.i2(e) === U && !d.i4(e))
                            if (L) {
                                var q = this._b.xo(L, e);
                                o.i7(q, !0), l.aa(q), L = j
                            } else
                                L = e
                    }
                    if (L)
                        for (var R = D.an(); R.i1(); R.i2()) {
                            var b = R.i9();
                            if (b !== L && !b.aj(L)) {
                                var G = this._b.xo(L, b);
                                o.i7(G, !0), l.aa(G);break
                            }
                        }
                    if (l.ay() < D.ad() - 1) {
                        for (var $, X = 2147483647, v = D.an(); v.i1(); v.i2()) {
                            var r = v.i9();
                            r.ad() < X && ($ = r, X = r.ad())
                        }
                        for (var _ = D.an(); _.i1(); _.i2()) {
                            var I = _.i9();
                            if (!$.aj(I) && $ !== I) {
                                var Y = this._b.xo($, I);
                                if (o.i7(Y, !0), l.aa(Y), l.ay() >= D.ad() - 1) break
                            }
                        }
                    }
                }
                for (var g = D.an(); g.i1(); g.i2()) B.b(g.i9());
                for (var Q = l.c1(); Q.i1(); Q.i2()) {
                    var Z = Q.i8();
                    o.i4(Z) && (B.d(Z.a2()), B.d(Z.a3()))
                }
                w.az(l), V.e(D)
            }
            V.b(), B.c();
            for (var S = w.c1(); S.i1(); S.i2()) {
                var u = S.i8();
                u._h && (o.i4(u) ? this._b.x5(u) : this._b.h1(u))
            }
            var T,
                h = this.a4(this._b),
                k = new Uf,
                a = h.ak(0),
                m = h.ak(1);
            T = a.a2() === m.a2() || a.a2() === m.a3() ? a.a3() : a.a2(), k.aa(T);
            for (var s = h.c1(); s.i1(); s.i2()) {
                var f = s.i8();
                T = f.a1(T), k.aa(T)
            }
            for (var y = w.c1(); y.i1(); y.i2()) {
                var t = y.i8();
                o.i4(t) || t._h || this._b.u1(t)
            }
            return this._b.xi(d), this._b.xj(o), this._b.xi(H), this.a2(k), k
        },
        a2 : function(s) {
            if (s.ay() < this._b.x0()) {
                for (var i = this._b.xk(), c = s._b; c; c = c.a()) {
                    var L = c.d();
                    i.z1(L, c)
                }
                for (var d = new Hk(this._b, new dn(i), 0, s.ay(), new dn(i)); !d.e();) {
                    for (var f = d.f(), Q = f.an(); Q.i1(); Q.i2()) {
                        var t = Q.i9();
                        if (i.i1(t)) {
                            var B,
                                I = i.i1(t),
                                S = s.ai(I).d();
                            B = f.aj(S) ? s.ao(f, I) : s.an(f, I), i.z1(f, B);break
                        }
                    }
                    for (var F = f.an(); F.i1(); F.i2()) {
                        var $ = F.i9();
                        i.i1($) || d.d($)
                    }
                }
                this._b.xi(i), d.c()
            }
        },
        a3 : function(F) {
            for (var z = 0, R = F.x9(); R.i1(); R.i2()) z = M(z, R.i9().ad());
            return z
        },
        a4 : function(d) {
            for (var Z = [], y = 0, S = d.x0(); S > y; y++) Z[y] = new ki;
            var Y = new Io(Z);
            Y.a6(!1), Y.a8(d);
            for (var F, g = -1, w = d.x9(); w.i1(); w.i2()) {
                var k = w.i9(),
                    V = Z[k.al()];
                V._a + V._c > g && (g = V._a + V._c, F = k)
            }
            for (var x = new yc, I = F, f = Z[I.al()]._d; f; f = Z[I.al()]._d) x.ac(f), I = f.a1(I);
            I = F;
            for (var H = Z[I.al()]._b; H; H = Z[I.al()]._d) x.ae(H), I = H.a1(I);
            return x
        }
    });
    var Ei = function() {
        this._v = new Mm, this._x = new Mm, this._z = new Yl(3, 5), this._w = new Yl(3, 5), this._y = !1, this._u = !1, this._t = {}
    };
    w(Ei, i, {
        xm : function() {
            var w = new Kk(this);
            return w
        },
        xo : function(t, r) {
            return this.xn(t, j, r, j, 0, 0)
        },
        xn : function(E, W, V, b, x, U) {
            return new Ij(this, E, W, V, b, x, U)
        },
        x4 : function(B) {
            this.b3(B)
        },
        b3 : function(V) {
            for (var g; g = V._o[0];) this.x5(g);
            for (; g = V._o[1];) this.x5(g);
            this._v.c(V), V._g = j, this._y = !0
        },
        x5 : function(b) {
            this.a11(b)
        },
        a11 : function(r) {
            if (r._h !== this)
                throw "";
            this.a12(r, r.a2(), r.a3()), this._x.c(r), r._h = j, this._u = !0
        },
        x7 : function(P) {
            P._p = this._v._c, P._g = this, P.ac(), P._c.length < this._z._b && this._z.a3(P, P._c.length, this._z._b), this._v.a(P), this._y = !0
        },
        x8 : function(E) {
            if (E._h)
                throw "";
            E._c.length < this._w._b && this._w.a3(E, E._c.length, this._w._b), E._a && E._a._h === this ? this._x.b(E, E._a) : this._x.a(E), E._h = this, E.a4(), this.b2(E, E.a2(), j, E.a3(), j, 0, 0), this._u = !0
        },
        xr : function(U, O, E) {
            var V = U.a2(),
                m = U.a3();
            U._h ? (V !== O && (V.ar(U, 0, 0), U._d = O, O.ab(U, j, 0, 0, 0)), m !== E && (m.ar(U, 1, 1), U._e = E, E.ab(U, j, 1, 1, 0))) : (U._d = O, U._e = E)
        },
        x3 : function(M) {
            this.xr(M, M.a3(), M.a2())
        },
        h1 : function(G) {
            this.a11(G)
        },
        u1 : function(J) {
            this.x8(J)
        },
        h2 : function(B) {
            this.x4(B)
        },
        h3 : function(x) {
            this.x7(x)
        },
        xa : function() {
            return this._v._c
        },
        x0 : function() {
            return this._v._c
        },
        xh : function() {
            return this._x._c
        },
        xg : function() {
            return this._x._c
        },
        xb : function() {
            return 0 === this._v._c
        },
        xq : function(Y) {
            return Y._g === this
        },
        xp : function(m) {
            return m._h === this
        },
        xd : function() {
            return this._v._a
        },
        x9 : function() {
            return new og(this._v)
        },
        xf : function() {
            return new og(this._x)
        },
        x2 : function(k, F) {
            var h = lq.d(this.xh());
            if (k && F)
                for (var c = this.x9(); c.i1(); c.i2()) c.i9().at(k, 1, h), c.i9().at(F, 0, h);
            else if (!F && k)
                for (var Q = this.x9(); Q.i1(); Q.i2()) Q.i9().at(k, 1, h);
            else if (F && !k)
                for (var e = this.x9(); e.i1(); e.i2()) e.i9().at(F, 0, h)
        },
        xk : function() {
            return this._z.b(this._v)
        },
        xl : function() {
            return this._w.c(this._x)
        },
        xi : function(_) {
            this._z.a5(_, this._v)
        },
        xj : function(h) {
            this._w.a6(h, this._x)
        },
        xc : function(X) {
            return this._t[X]
        },
        x1 : function(Q, W) {
            this._t[Q] = W
        },
        x6 : function(t) {
            delete this._t[t]
        },
        b2 : function(R, z, L, k, t, U, Q) {
            z.ab(R, L, 0, 0, U), k.ab(R, t, 1, 1, Q)
        },
        a12 : function(P, E, N) {
            E.ar(P, 0, 0), N.ar(P, 1, 1)
        },
        c : function() {
            for (var y = 0, I = this.x9(); I.i1(); I.i2()) I.i9()._p = y++;
            this._y = !1
        },
        b1 : function() {
            for (var f = 0, z = this.xf(); z.i1(); z.i2()) z.i8()._g = f++;
            this._u = !1
        },
        xs : function(D) {
            D.as(this, this._z._b), D._p = this._v._c, this._v.a(D)
        },
        xt : function(Z, g, O, M, K, A, C) {
            Z.a6(this, g, M, this._w._b), Z._g = this._x._c, this._x.a(Z), this.b2(Z, Z.a2(), O, Z.a3(), K, A, C)
        }
    });
    var Kg = function() {
        Kg.superClass.constructor.call(this)
    };
    w(Kg, Ei, {
        gb : function(T) {
            return this.g1(T)
        },
        g7 : function(V) {
            return this.g2(V)
        },
        g5 : function(N) {
            var j = this.g1(N);
            return j.i1() + j.i3() / 2
        },
        g6 : function(F) {
            var M = this.g1(F);
            return M.i2() + M.i4() / 2
        },
        g4 : function(k) {
            return new I(this.g5(k), this.g6(k))
        },
        gi : function(z) {
            return this.g1(z).i1()
        },
        gh : function(b) {
            return this.g1(b).i2()
        },
        ga : function(f) {
            var S = this.g1(f);
            return new I(S.i1(), S.i2())
        },
        gj : function(l) {
            return this.g1(l).i3()
        },
        g9 : function(x) {
            return this.g1(x).i4()
        },
        gm : function(n) {
            return new Q(this.gj(n), this.g9(n))
        },
        s1 : function(I, q) {
            this.s2(I, q.x, q.y)
        },
        s2 : function(n, w, f) {
            var V = this.g1(n);
            V.i5(w - V.i3() / 2, f - V.i4() / 2)
        },
        s7 : function(j, h, H) {
            this.g1(j).i6(h, H)
        },
        s8 : function(h, G) {
            this.s7(h, G.width, G.height)
        },
        s3 : function(X, K, h) {
            this.g1(X).i5(K, h)
        },
        s4 : function(a, F) {
            this.s3(a, F.x, F.y)
        },
        gp : function(U) {
            for (var t = this.g2(U), P = new J, b = 0; b < t.i1(); b++) P.add(t.i2(b));
            return new o(P)
        },
        gf : function(q) {
            for (var H = this.g2(q), F = new Ed, Y = 0; Y < H.i1(); Y++) F.aa(H.i2(Y));
            return F
        },
        gc : function(M) {
            var L = new J;
            L.add(this.gs(M));
            for (var B = this.gp(M).d(); B.i1(); B.i2()) L.add(B.i6());
            return L.add(this.gl(M)), new o(L)
        },
        gd : function(z) {
            var V = new Ed;
            V.aa(this.gs(z));
            for (var P = this.gp(z).d(); P.i1(); P.i2()) V.aa(P.i6());
            return V.aa(this.gl(z)), V
        },
        m1 : function(f, d) {
            var l = this.g2(f);
            l.i5();
            var r = d.ah(),
                L = r.i6();
            this.gx(f, L);
            var V = d.as();
            for (r.i2(); r.i6() !== V; r.i2()) {
                var j = r.i6();
                l.i4(j.x, j.y)
            }
            this.gy(f, V)
        },
        s5 : function(l, o) {
            var z = this.g2(l);
            z.i5();
            for (var Z = o.d(); Z.i1(); Z.i2()) {
                var K = Z.i6();
                z.i4(K.x, K.y)
            }
        },
        s6 : function(k, I) {
            var x = this.g2(k);
            x.i5();
            for (var U = I.ah(); U.i1(); U.i2()) {
                var f = U.i6();
                x.i4(f.x, f.y)
            }
        },
        m2 : function(d, _, x) {
            this.gx(d, _), this.gy(d, x)
        },
        gn : function(o) {
            return this.g2(o).i6()
        },
        gk : function(v) {
            return this.g2(v).i7()
        },
        gt : function(Q, j) {
            this.g2(Q).i8(j)
        },
        gz : function(D, i) {
            this.g2(D).i9(i)
        },
        gs : function(o) {
            var Q = this.g2(o).i6();
            return Q ? new I(this.g5(o.a2()) + Q.x, this.g6(o.a2()) + Q.y) : this.g4(o.a2())
        },
        gl : function(Q) {
            var L = this.g2(Q).i7();
            return L ? new I(this.g5(Q.a3()) + L.x, this.g6(Q.a3()) + L.y) : this.g4(Q.a3())
        },
        gx : function(A, h) {
            this.g2(A).i8(new I(h.x - this.g5(A.a2()), h.y - this.g6(A.a2())))
        },
        gy : function(N, u) {
            this.g2(N).i9(new I(u.x - this.g5(N.a3()), u.y - this.g6(N.a3())))
        },
        g8 : function() {
            for (var E = new yc, D = this.xf(); D.i1(); D.i2()) E.aa(D.i8());
            return E
        },
        g3 : function() {
            for (var v, z, P = v = p, c = z = e, D = this.x9(); D.i1(); D.i2()) {
                var J = this.ga(D.i9()),
                    V = this.gm(D.i9());
                P = W(J.x, P), v = W(J.y, v), c = M(J.x + V.width, c), z = M(J.y + V.height, z)
            }
            for (var S = this.xf(); S.i1(); S.i2())
                for (var n = this.gp(S.i8()).c(); n.i1(); n.i2()) {
                    var r = n.i6();
                    P = W(r.x, P), v = W(r.y, v), c = M(r.x, c), z = M(r.y, z)
                }
            return {
                x : f(P),
                y : f(v),
                width : f(c - P),
                height : f(z - v)
            }
        }
    });
    var Vq = function() {
        Vq.superClass.constructor.call(this), this.a(new a, new q)
    };
    w(Vq, Kg, {
        a : function(W, u) {
            this._a3 = W, this._a4 = u
        },
        xo : function(V, C) {
            return this.l2(V, C, this._a4.a6())
        },
        l2 : function(C, k, x) {
            return this.l1(C, j, k, j, 0, 0, x)
        },
        xn : function(x, I, i, s, b, V) {
            return this.l1(x, I, i, s, b, V, this._a4.a6())
        },
        l1 : function(O, r, s, H, W, z, y) {
            var $ = new Ij(this, O, r, s, H, W, z);
            return $._l = y, $
        },
        xm : function() {
            var x = new Kk(this);
            return x._r = this._a3.m3(), x
        },
        g3 : function() {
            for (var A = {
                x : 0,
                y : 0,
                width : -1,
                height : -1
            }, p = this.x9(); p.i1(); p.i2()) p.i9()._r.m1(A);
            return A
        },
        g1 : function(c) {
            return c._r
        },
        g2 : function(q) {
            return q._l
        },
        g5 : function(C) {
            return C._r.m4()
        },
        g6 : function(c) {
            return c._r.m5()
        },
        gi : function(M) {
            return M._r.i1()
        },
        gh : function(n) {
            return n._r.i2()
        },
        gj : function(U) {
            return U._r.i3()
        },
        g9 : function(J) {
            return J._r.i4()
        },
        s2 : function(L, j, Q) {
            L._r.m6(j, Q)
        },
        s7 : function(x, W, w) {
            x._r.i6(W, w)
        },
        s3 : function(C, k, Y) {
            C._r.i5(k, Y)
        }
    });
    var bm = function() {
        bm.superClass.constructor.call(this), this._ap = this.xk(), this._as = this.xl()
    };
    w(bm, Kg, {
        g1 : function(e) {
            var A = this._ap.i1(e);
            return A || (A = new mk, this._ap.z1(e, A)), A
        },
        g2 : function(w) {
            var p = this._as.i1(w);
            return p || (p = new Vd, this._as.i8(w, p)), p
        }
    });
    var qm = function(J) {
        qm.superClass.constructor.call(this), this._ay = J, this._a0 = this.xk(), this._au = this.xl()
    };
    w(qm, bm, {
        c2 : function(q) {
            var K = this._a0.i1(q);
            return K
        },
        a2 : function(z, l) {
            this._a0.z1(z, l)
        },
        h : function() {
            this._az || (this._az = this.xk());
            for (var i = lq.a(this._ay.x0() + 1), d = 1, F = this.x9(); F.i1();) {
                for (var D = this.c2(F.i9()), b = D.x1(); b.i1(); b.i2()) {
                    var P = b.i9();
                    i[P.al()] = d
                }
                for (var E = new yc, U = D.x1(); U.i1(); U.i2())
                    for (var t = U.i9(), A = i[t.al()], K = t.ap(); K.i1(); K.i2()) {
                        var w = K.i8(),
                            O = w.a3(),
                            M = i[O.al()];
                        M === A && E.ac(w)
                    }
                this._az.z1(F.i9(), E), F.i2(), d++
            }
        },
        d1 : function(t) {
            return this._az.i1(t)
        },
        b : function(t) {
            return this._au.i1(t)
        },
        a3 : function($, M) {
            this._au.i8($, M)
        },
        a1 : function() {
            var s = this._ay.xk(),
                P = nd.a4(lq.a(this._ay.xh())),
                j = _.a5(this._ay, P, _.a1(this._ay, P, s));
            this.d2(s, j), this._ay.xi(s)
        },
        c1 : function(e) {
            for (var Y, B = -1, E = 0, f = e.length; f > E; E++) {
                var S = e[E];
                S.ay() > B && (Y = S, B = S.ay())
            }
            return Y
        },
        d2 : function(K, p) {
            for (var _ = this._ay.xl(), l = this._ay.xk(), R = p.length, c = 0; R > c; c++)
                for (var M = p[c], n = M.c1(); n.i1(); n.i2()) _.i8(n.i8(), M);
            var i = this.c1(p);
            this.a4(i, K, _, new J, l);
            var D = {};
            R = p.length;
            for (var o = 0; R > o; o++) {
                var v = p[o];
                if (v.ay() > 1) {
                    var X = this.xm();
                    D[v._id] = X
                }
            }
            for (var r = this._ay.x9(); r.i1(); r.i2()) {
                var s = r.i9();
                if (K.i4(s) && !l.i1(s)) {
                    var L = this.xm();
                    D[s._id] = L;
                    var F = new Uf;
                    F.aa(s), this.a2(L, F)
                }
            }
            var H = lq.d(2),
                g = 0;
            for (R = p.length; R > g; g++) {
                var S = p[g];
                if (1 === S.ay()) {
                    var e = S.c2();
                    H[0] = e.a2(), H[1] = e.a3();
                    for (var h = 0; 2 > h; h++) {
                        var j = H[h];
                        if (1 === j.ad()) {
                            var x = this.xm();
                            D[j._id] = x;
                            var E = new Uf;
                            E.aa(j), this.a2(x, E)
                        }
                    }
                }
            }
            for (var d = this._ay.x9(); d.i1(); d.i2()) {
                var Q = d.i9();
                if (l.i1(Q))
                    for (var W = l.i1(Q), T = D[W._id], Y = Q.af(); Y.i1(); Y.i2()) {
                        var A = Y.i8();
                        if (_.i1(A) !== W) {
                            var z = D[_.i1(A)._id];
                            if (!z) {
                                var I = A.a1(Q),
                                    B = l.i1(I);
                                z = B ? D[B._id] : D[I._id]
                            }
                            var t,
                                f = T.aj(z);
                            f ? t = this.b(f) : (f = this.xo(T, z), t = new yc), t.aa(A), this.a3(f, t)
                        }
                    }
                else if (K.i4(Q))
                    for (var U = D[Q._id], k = Q.af(); k.i1(); k.i2()) {
                        var y = k.i8(),
                            Z = y.a1(Q),
                            w = D[Z._id];
                        if (w) {
                            var C = U.aj(w);
                            if (!C) {
                                var N = this.xo(U, w),
                                    m = new yc;
                                m.aa(y), this.a3(N, m)
                            }
                        }
                    }
            }
            if (2 === this._ay.x0() && 1 === this._ay.xg()) {
                var V = this._ay.xf().i8(),
                    O = D[V.a2()._id],
                    $ = D[V.a3()._id];
                if ($ && O && !$.aj(O)) {
                    var q = this.xo(O, $),
                        b = new yc;
                    b.aa(V), this.a3(q, b)
                }
            }
            var u = lq.a(this._ay.x0()),
                a = 1;
            R = p.length;
            for (var P = 0; R > P; P++) {
                var G = p[P],
                    xi = D[G._id];
                if (xi) {
                    var Dh = this.c2(xi);
                    Dh || (Dh = new Uf, this.a2(xi, Dh));
                    for (var Yq = G.c1(); Yq.i1(); Yq.i2()) {
                        var Om = Yq.i8(),
                            Qg = Om.a2();
                        u[Qg.al()] === a || K.i4(Qg) && l.i1(Qg) !== G || (u[Qg.al()] = a, Dh.aa(Qg)), Qg = Om.a3(), u[Qg.al()] === a || K.i4(Qg) && l.i1(Qg) !== G || (u[Qg.al()] = a, Dh.aa(Qg))
                    }
                }
            }
            this._ay.xj(_), this._ay.xi(l)
        },
        a4 : function(D, I, m, R, C) {
            if (!R.contains(D)) {
                R.add(D);
                for (var r = [], A = D.c1(); A.i1(); A.i2()) {
                    var f = A.i8();
                    r[0] = f.a2(), r[1] = f.a3();
                    for (var x = 0; 2 > x; x++) {
                        var B = r[x];
                        if (I.i4(B) && !C.i1(B)) {
                            D.ay() > 1 && C.z1(B, D);
                            for (var N = B.af(); N.i1(); N.i2()) this.a4(m.i1(N.i8()), I, m, R, C)
                        }
                    }
                }
            }
        }
    });
    var dh = function(V, b, W) {
        this._a = {}, dh.superClass.constructor.call(this);
        for (var D = new J, I = 0, m = b.size(); m > I; I++) {
            var s = b.get(I);
            if (s instanceof A) D.add(s);else {
                s instanceof Y && s.setExpanded(!0);
                var n = V.getNodeSize(s);
                if (s instanceof Y && s.setExpanded(!1), n) {
                    var p = this.xm(),
                        g = V._repulsion;
                    W !== t || s instanceof Y ? W === t ? g *= 1.1 : W === r && (g *= .9) : g *= .6, W === h || W === T ? this.s7(p, n.height * g, n.width * g) : this.s7(p, n.width * g, n.height * g), p.node = s, this._a[s.getId()] = p
                }
            }
        }
        for (I = 0, m = D.size(); m > I; I++) {
            var _ = D.get(I),
                H = _.getSourceAgent(),
                d = _.getTargetAgent(),
                K = this._a[H.getId()],
                R = this._a[d.getId()];
            K && R && K !== R && this.xo(K, R)
        }
    };
    w(dh, Vq, {});
    var Uj = {
            _D : new o,
            _E : new I(0, 0),
            b : function(x) {
                if (x.i1() > 0) {
                    for (var N = new J, X = x.i1() - 1; X >= 0; X--) N.add(x.i2(X));
                    x.i5();
                    for (var _ = 0, Q = N.size(); Q > _; _++) {
                        var m = N.get(_);
                        x.i4(m.x, m.y)
                    }
                }
                var I = x.i6();
                x.i8(x.i7()), x.i9(I)
            },
            c : function(o) {
                Uj.d(o, !0)
            },
            d : function(N, Q) {
                if (Q)
                    for (var f = N.xf(); f.i1(); f.i2()) {
                        var V = f.i8();
                        N.gt(V, Uj._E), N.gz(V, Uj._E), N.s5(V, Uj._D)
                    }
                else
                    for (var A = N.xf(); A.i1(); A.i2()) N.s5(A.i8(), Uj._D)
            },
            e : function(K) {
                for (var _ = new I(0, 0), E = K.xf(); E.i1(); E.i2()) {
                    var W = E.i8();
                    K.gt(W, _), K.gz(W, _)
                }
            },
            f : function(z, E, n, R) {
                for (var a = z.gc(E).b(), p = lq.d(a), g = 0, t = z.gc(E).c(); t.i1(); t.i2()) {
                    var L = t.i6();
                    (0 >= g || !L.equals(p[g - 1])) && (p[g] = new I(L.x, L.y), g++)
                }
                if (a = g, !(2 > a)) {
                    var v = new J,
                        V = Uj.i(new N(p[1].x - p[0].x, p[1].y - p[0].y));
                    V.x *= R, V.y *= R;
                    for (var D = Uj.h(p[0], V), Q = Uj.h(p[1], V), f = new F(D, Q), K = 1; a - 1 > K; K++) {
                        var i = f,
                            l = Uj.i(new N(p[K + 1].x - p[K].x, p[K + 1].y - p[K].y));
                        l.x *= R, l.y *= R;var B = Uj.h(p[K], l),
                            j = Uj.h(p[K + 1], l);
                        f = new F(B, j);var x = F.a6(i, f);
                        x && v.add(new I(x.x, x.y))
                    }
                    var c = new N(p[a - 1].x - p[a - 2].x, p[a - 1].y - p[a - 2].y);
                    c = Uj.i(c), c.x *= R, c.y *= R;
                    var P = Uj.h(p[a - 1], c),
                        T = new o(v);
                    E.a2() === n.a2() ? (z.s5(n, T), z.m2(n, D, P)) : (z.s5(n, T.a()), z.m2(n, P, D))
                }
            },
            g : function(A, X, l, F) {
                for (var a = F, t = l.c1(); t.i1(); t.i2()) {
                    var q = t.i8();
                    Uj.f(A, X, q, a), 0 > a && (a -= F), a = -a
                }
            },
            a : function(J, r, e) {
                return Uj.j(J, r, e, 1)
            },
            l : function(N, j, Z) {
                if (!N || N.length < 1) return j && (j.x = 0, j.y = 0, j.width = 0, j.height = 0), {
                    width : 0,
                    height : 0
                };
                for (var i = 0, q = 0, p = 0; p < N.length; p++) {
                    var o = N[p];
                    i = M(i, o.width), q = M(q, o.height)
                }
                var H,
                    T,
                    y = i * q * N.length,
                    K = m(y / Z),
                    I = y / K,
                    h = f(I / i),
                    z = E(I / i),
                    d = E(N.length / h),
                    O = E(N.length / z);
                z * O > h * d ? (H = h, T = d) : (H = z, T = O);
                var u,
                    c = 0,
                    Y = 0,
                    k = 0,
                    P = 0;
                if (i > q)
                    for (var U = 0; U < N.length; U++) u = N[U], u.x = Y * i, u.y = c * q, k = M(k, u.x + u.width), P = M(P, u.y + u.height), ++Y >= H && (c++, Y = 0);
                else
                    for (var b = 0; b < N.length; b++) u = N[b], u.x = Y * i, u.y = c * q, k = M(k, u.x + u.width), P = M(P, u.y + u.height), ++c >= T && (Y++, c = 0);
                return j && (j.x = 0, j.y = 0, j.width = k, j.height = P), {
                    width : T,
                    height : H
                }
            },
            j : function(e, C, z) {
                if (!e || e.length < 1) return C && (C.x = 0, C.y = 0, C.width = 0, C.height = 0), 0;
                for (var O, t, F = O = e[0].width, A = t = e[0].height, K = e.length, x = 1; K > x; x++) {
                    var b = e[x].width;
                    F = W(F, b), O = M(O, b);var U = e[x].height;
                    A = W(A, U), t = M(t, U)
                }
                if (A / t > .95 && F / O > .95) return Uj.l(e, C, z).width;
                for (var s = new Ed, G = 0, u = 0; K > u; u++) {
                    var Y = e[u];
                    s.aa(e[u]), G = f(G + Y.width * Y.height)
                }
                s.a1(function(P, B) {
                    var L = f(B.height) - f(P.height);
                    return 0 === L ? f(B.width) - f(P.width) : L
                });
                var h = 0,
                    y = 0,
                    r = f(z * m(G / z)),
                    Q = r,
                    _ = 0,
                    w = new Ed;
                do {
                    var d,
                        T,
                        n = new Ed,
                        k = d = T = 0;
                    w.aa(n);
                    for (var S = s.ah(); S.i1(); S.i2()) {
                        var V = S.i6();
                        k + V.width > Q && n.ay() > 0 ? (T = M(T, k), n = new Ed, n.aa(V), w.aa(n), k = f(V.width)) : (n.aa(V), k = f(k + V.width)), 1 === n.ay() && (d = f(d + n.am().height))
                    }
                    T = M(T, k), z * d > T && _ !== T && (w.af(), Q = f(1.1 * Q), _ = T)
                } while (w.ar());
                for (var $ = 0, H = w.ah(); H.i1(); H.i2()) {
                    for (var o = 0, j = H.i6(), B = j.ah(); B.i1(); B.i2()) {
                        var J = B.i6();
                        J.x = o, J.y = $, o += J.width
                    }
                    h = M(h, o), $ += Uj.k(j), y = M(y, $)
                }
                return C && (C.x = 0, C.y = 0, C.width = h, C.height = y), w.ay()
            },
            k : function(y) {
                for (var D = 0, U = y.ah(); U.i1(); U.i2()) D = M(U.i6().height, D);
                return D
            },
            h : function(n, c) {
                return new I(n.x + c.x, n.y + c.y)
            },
            i : function(T) {
                var G = m(T.x * T.x + T.y * T.y);
                return new N(-T.y / G, T.x / G)
            }
        },
        hi = function(N) {
            this._a = N, this._b = !1
        };
    w(hi, i, {
        a : function() {
            return this._b
        },
        b : function() {
            return this._a
        },
        c : function() {
            return 1 === this._a
        },
        d : function() {
            return 2 === this._a
        },
        e : function() {
            return 4 === this._a
        },
        f : function() {
            return 8 === this._a
        },
        g : function() {
            return 0 === this._a
        }
    }), hi.h = function(v, F) {
        var J = v.xc("A");
        return J ? J.i1(F) : j
    }, hi.i = function(A, k) {
        var z = A.xc("B");
        return z ? z.i1(k) : j
    }, hi.j = function(s) {
        switch (s) {
            case 1:
                return hi.k;case 2:
            return hi.l
        }
        return j
    }, hi.k = new hi(1), hi.l = new hi(2);
    var Xd = function(O, n, y, p, U) {
        this._o = 0, this._l = 0, this._i = 0, this._d = 0, this._f = 0, this._b = O, this._a = 1e-4, this._r = n, this._p = 1, this._e = (U.gj(O) + U.g9(O)) / 4;
        var j = .45 * y * m(p);
        this._k = Hh.l(-j, j), this._h = Hh.l(-j, j), this._g = Hh.l(-j, j)
    };
    w(Xd, i, {});
    var Ic = function() {
        this._a = 0, this._c = 0, this._b = 0
    };
    w(Ic, i, {});
    var Np = function() {
        Np.superClass.constructor.call(this), this._dj = 0, this._dh = 0, this._dq = 0, this._dp = 0, this._dt = 0, this._de = 0, this._d3 = 0, this._dr = 0, this._ed = 0, this._dw = .65, this._ea = 1, this._dl = 80, this._dx = 3, this._d8 = !0, this._eb = 3e5, this._ee = 2, this._di = 2, this._df = 1e3
    };
    w(Np, Tr, {
        i4 : function() {
            return !0
        },
        i3 : function(a) {
            if (a && (this._d5 = a, this.s(a))) {
                var D = new Ic,
                    X = 0,
                    g = f(this._dx * this._dz.length * this._dz.length + 20 * this._dz.length);
                g = M(g, 1e4);
                var r = this._ea * this._ea * this._dz.length,
                    A = this._df;
                try {
                    for (; this._dj > r && g > X; X++) {
                        var i = this.b(2147483647 & X);
                        0 === A-- && (this._dy.b() > this._eb && (X = g), A = this._df), this.h(i, D), this.d(i, D), this.i(i, D), this._d8 ? (this.g(i, D), this.j(i, D)) : (this.f(i, D), this.c(i, D));var N = m(D._a * D._a + D._c * D._c + D._b * D._b);
                        this.ac(i, D, N), this.aa(i, D, N)
                    }
                } finally {
                    this.r()
                }
            }
        },
        s : function(v) {
            if (!v || v.xa() < 1) return !1;
            this._d5 = v, this._dp = 1, this._dy = new nc, this._dt = v.x0(), this._d2 = lq.d(this._dt), this._df = 1 + 1e5 / this._dt, this._ed = 1 / (2 * this._di), this._de = this._ed * this._ee / (.05 * this._dl), this._d3 = P(this._dl, -1) * this._ed, this._dr = P(this._dl, 3) * this._ed, this._dj = 0, this._du = new Ic, this._dq = M(20 * this._dl, 10);
            var o = M(.1, W(this._dw * this._dl, this._dq)),
                N = this._dt;
            Uj.c(v), this._dz = lq.d(N);
            for (var Q = v.x9(); Q.i1(); Q.i2()) {
                var d = Q.i9(),
                    R = new Xd(d, o, this._dl, this._dt, v);
                this._dz[--N] = R, this._dj += R._r, this._dh += R._r * R._r, this._du._a += R._k, this._du._c += R._h, this._du._b += R._g, this._d2[d.al()] = R
            }
            return this._d8 = !1, this._dz.length > 0
        },
        b : function(T) {
            var h = this._dz.length,
                e = h - T % h - 1,
                j = Hh.k(e + 1),
                q = this._dz[j];
            return this._dz[j] = this._dz[e], this._dz[e] = q, q
        },
        f : function(v, q) {
            for (var j, a, g = j = a = 0, K = v._b.ae(); K; K = K.a7()) {
                var H,
                    V = this._d2[K.a2().al()],
                    X = V._k - v._k,
                    o = V._h - v._h,
                    M = V._g - v._g,
                    s = X * X + o * o + M * M,
                    u = m(s),
                    I = u - (V._e + v._e);
                0 >= I || (H = I * I * this._d3 / u, g += X * H, j += o * H, a += M * H)
            }
            for (var t = v._b.ag(); t; t = t.a8()) {
                var B,
                    F = this._d2[t.a3().al()],
                    _ = F._k - v._k,
                    w = F._h - v._h,
                    y = F._g - v._g,
                    A = _ * _ + w * w + y * y,
                    N = m(A),
                    d = N - (F._e + v._e);
                0 >= d || (B = d * d * this._d3 / N, g += _ * B, j += w * B, a += y * B)
            }
            q._a += g, q._c += j, q._b += a
        },
        g : function(q, S) {
            var l,
                c,
                s = l = c = 0;
            this._dp++, q._f = this._dp;
            for (var R = q._b.ae(); R; R = R.a7()) {
                var o = this._d2[R.a2().al()];
                o._f = this._dp;var W = o._k - q._k,
                    P = o._h - q._h,
                    A = o._g - q._g,
                    Q = W * W + P * P + A * A,
                    K = m(Q);
                if (0 !== K) {
                    var B = M(1e-6, K - (q._e + o._e)),
                        g = -this._ef[R.a5()] / (B * B);
                    g += B * B * this._d1[R.a5()], g /= K, s += W * g, l += P * g, c += A * g
                }
            }
            for (var F = q._b.ag(); F; F = F.a8()) {
                var j = this._d2[F.a3().al()];
                j._f = this._dp;var N = j._k - q._k,
                    f = j._h - q._h,
                    Z = j._g - q._g,
                    i = N * N + f * f + Z * Z,
                    U = m(i);
                if (0 !== U) {
                    var z = M(1e-6, U - (q._e + j._e)),
                        k = -this._ef[F.a5()] / (z * z);
                    k += z * z * this._d1[F.a5()], k /= U, s += N * k, l += f * k, c += Z * k
                }
            }
            S._a += s, S._c += l, S._b += c
        },
        j : function(X, d) {
            for (var T, O, S = T = O = 0, t = this._dt - 1; t >= 0; t--) {
                var b = this._d2[t];
                if (b._f !== X._f) {
                    var U = X._k - b._k,
                        F = X._h - b._h,
                        s = X._g - b._g,
                        u = U * U + F * F + s * s;
                    if (0 !== u) {
                        var x = m(u),
                            v = M(1e-6, x - (X._e + b._e)),
                            I = this._dr / (v * v * x);
                        S += U * I, T += F * I, O += s * I
                    }
                }
            }
            d._a += S, d._c += T, d._b += O
        },
        c : function(E, v) {
            for (var $, I, y = $ = I = 0, H = this._dt - 1; H >= 0; H--) {
                var i = this._d2[H],
                    R = E._k - i._k,
                    r = E._h - i._h,
                    F = E._g - i._g,
                    M = R * R + r * r + F * F;
                if (0 !== M) {
                    var K,
                        _ = m(M),
                        e = _ - (E._e + i._e);
                    K = 0 >= e ? this._dr / (1e-8 * _) : this._dr / (e * e * _), y += R * K, $ += r * K, I += F * K
                }
            }
            v._a += y, v._c += $, v._b += I
        },
        i : function(E, X) {
            var Q = this._du._b / this._dt - E._g;
            X._b += Q * this._dl * this._dt / this._dh
        },
        d : function(M, k) {
            if (0 !== this._de) {
                var E = this._du._a / this._dt - M._k,
                    b = this._du._c / this._dt - M._h,
                    u = this._du._b / this._dt - M._g;
                k._a += E * this._de, k._c += b * this._de, k._b += u * this._de
            }
        },
        h : function(W, L) {
            var l = .05 * (W._r + 2);
            l > 0 && (L._a = Hh.l(-l, l), L._c = Hh.l(-l, l), L._b = Hh.l(-l, l))
        },
        ac : function(C, N, O) {
            if (0 !== O && 0 !== C._a) {
                var c = N._a * C._o + N._c * C._l + N._b * C._i,
                    S = c / (O * C._a);
                this._dh -= C._r * C._r, this._dj -= C._r, C._r += C._p * S > 0 ? .45 * S : .15 * S, C._r > this._dq ? C._r = this._dq : C._r < .1 && (C._r = .1), this._dj += C._r, this._dh += C._r * C._r, C._p = S
            }
        },
        aa : function(W, L, c) {
            if (c > 0) {
                var $ = W._r / c,
                    Q = L._a * $,
                    R = L._c * $,
                    Y = L._b * $;
                W._k += Q, W._h += R, W._g += Y, this._du._a += Q, this._du._c += R, this._du._b += Y, W._a = c, W._o = L._a, W._l = L._c, W._i = L._b
            }
        },
        r : function() {
            for (var t = this._d2.length - 1; t >= 0; t--) {
                var E = this._d2[t];
                this._d5.s2(E._b, E._k, E._h)
            }
        }
    });
    var Ar = function(G, n) {
        this._e = G, this._f = n, this._c = {}
    };
    w(Ar, i, {
        r : function() {
            for (var C in this._c) {
                var w = this._c[C];
                w.g.setExpanded(w.b)
            }
        },
        p : function() {
            for (var s = new J, G = new J, h = new J, u = 0, B = this._f.size(); B > u; u++) {
                var n = this._f.get(u);
                if (n instanceof A) n.isLooped() || s.add(n);
                else if (n instanceof R) {
                    if (n.getParent() instanceof Y) {
                        n instanceof Y || G.add(n);continue
                    }
                    s.add(n), n instanceof Y && (h.add(n), this.l(n))
                }
            }
            return G.each(function(P) {
                for (var t = !0, M = 0; M < h.size(); M++)
                    if (P.isDescendantOf(h.get(M))) {
                        t = !1;break
                    }
                t && s.add(P)
            }), s
        },
        l : function(c) {
            if (!this._c[c.getId()]) {
                var f = this._e.getType(c),
                    x = Z(f);
                if (x) {
                    this._c[c.getId()] = {
                        g : c,
                        b : c.isExpanded()
                    }, c.setExpanded(!0);
                    for (var n, w = new J, y = c.getChildren(), T = 0, m = y.size(); m > T; T++)
                        if (n = y.get(T), n instanceof Y && (this.l(n), n.setExpanded(!1)), n instanceof A || w.contains(n) || w.add(n), n instanceof R) {
                            var v = n.getEdges();
                            if (v)
                                for (var Q = 0, H = v.size(); H > Q; Q++) {
                                    var I = v.get(Q);
                                    w.contains(I) || w.add(I)
                                }
                        }
                    var N = new dh(this._e, w, f);
                    try {
                        x.i2(N);var b = L(f);
                        for (var W in N._a) {
                            var C = N._a[W],
                                E = N.g4(C);
                            C.node.p(b ? b.tf(E) : E)
                        }
                    } catch (B) {} c.eachChild(function(L) {
                        L instanceof Y && L.setExpanded(!0)
                    })
                }
            }
        }
    });
    var Kp = function() {};
    w(Kp, i, {
        i1 : function(z, o, c) {
            var E = this.a1(z, o);
            return this.a2(z, o, c), E
        },
        a1 : function(K, S) {
            var t = Kp.i4(K);
            t.ax();
            for (var s = 0, o = t.x1(); o.i1(); o.i2()) S.i7(o.i9(), -1);
            for (var r = t.x1(); r.i1(); r.i2()) {
                for (var n = r.i9(), x = -1, N = n.aq(); N.i1(); N.i2()) x = M(x, S.i2(N.i9()));
                S.i7(n, x + 1), s = M(s, x + 1)
            }
            return s + 1
        },
        a2 : function(W, C, y) {
            y.az(Kp.i3(W, C))
        }
    }), Kp.i3 = function(t, X) {
        for (var q = new yc, S = t.xf(); S.i1(); S.i2()) {
            var n = S.i8();
            X.i2(n.a2()) > X.i2(n.a3()) && (t.x3(n), q.ac(n))
        }
        return q
    }, Kp.i4 = function(F) {
        var D = lq.a(F.xa());
        return (new Lj).a1(F, D), Kp.i2(F, D)
    }, Kp.i2 = function(n, N) {
        for (var Q = lq.d(n.x0()), B = n.x9(); B.i1(); B.i2()) {
            var D = B.i9(),
                e = D.al();
            Q[N[e]] = D
        }
        return new Uf(Q)
    };
    var Cq = function() {
        Cq.superClass.constructor.call(this), this.c0()
    };
    w(Cq, yc, {
        c0 : function() {
            this._bc = 1, this._bd = 0
        }
    });
    var Kl = function() {
        this._m1 = 20, this._m2 = 60, this._m3 = 5, this._m4 = 0
    };
    w(Kl, i, {
        i4 : function(L) {
            this._m3 = L
        },
        i5 : function(j) {
            this._m4 = j
        },
        i3 : function(b) {
            this._m1 = b
        },
        i6 : function(t) {
            this._m2 = t
        },
        i2 : function(h) {
            this._m5 = h
        },
        t1 : function() {
            return this._m2
        },
        a1 : function(O, y) {
            for (var G = lq.d(y.length), M = 0; M < y.length; M++) G[M] = y[M].x1();
            this.a2(O, G)
        },
        a2 : function(U, p) {
            for (var a = lq.a(p.length), k = 0, Q = 0; Q < p.length; Q++) {
                var D = 0,
                    H = p[Q];
                for (H.i4(); H.i1(); H.i2()) D = M(D, U.g9(H.i9()));
                for (a[Q] = D, H.i4(); H.i1(); H.i2()) {
                    var s = (a[Q] - U.g9(H.i9())) / 2;
                    U.s4(H.i9(), new I(U.gi(H.i9()), k + s))
                }
                k += a[Q] + this.t1(), H.i4()
            }
        },
        i1 : function(M, m, q) {
            this._m6 = M, this.t2(m, q)
        }
    });
    var vr = function() {
        vr.superClass.constructor.call(this)
    };
    w(vr, Kl, {
        t2 : function(z) {
            var $ = this._m6;
            this._a = $.xc("D"), this._h = $.xc("C"), this.a1($, z), this.tg($, z), this.tf(z, nd.a5(this._e), this._m5, this._l), this.tb($, this._f[0]), this.ta(z), this.th($, this._f[0], z), this.b(z), this.tb($, this._f[1]), this.ta(z), this.th($, this._f[1], z), this.b(z), this.a11(this._f[1]), this.a12(z), this.tb($, this._f[2]), this.ta(z), this.th($, this._f[2], z), this.b(z), this.tb($, this._f[3]), this.ta(z), this.th($, this._f[3], z), this.b(z), this.a11(this._f[3]), this.a12(z), this.tc($), this.tj()
        },
        a11 : function(y) {
            for (var p = 0; p < y.length; p++) y[p] = -y[p]
        },
        b : function(U) {
            for (var w = 0; w < U.length; w++) {
                var v = U[w];
                v.ax()
            }
            for (var u = 0; u < U.length; u++)
                for (var p, E = 0, c = U[u].x1(); c.i1(); c.i2()) {
                    var F = c.i9(),
                        $ = F.al();
                    this._l[$] = E++, this._b[$] = p, this._k[$] = j, p && (this._k[p.al()] = F), p = F
                }
            var J = this._a;
            this._a = this._h, this._h = J;
            for (var i = this._m6.xf(); i.i1(); i.i2()) {
                var h = i.i8(),
                    Y = this._m6.gn(h);
                this._m6.gt(h, new I(-Y.x, Y.y));var Q = this._m6.gk(h);
                this._m6.gz(h, new I(-Q.x, Q.y))
            }
            var l = this._l,
                M = function(j, w) {
                    return !j && w ? 1 : j && !w ? -1 : j || w ? l[j.a2().al()] - l[w.a2().al()] : 0
                },
                W = function(i, R) {
                    return !i && R ? 1 : i && !R ? -1 : i || R ? l[i.a3().al()] : 0
                };
            this._m6.x2(M, W)
        },
        a12 : function(S) {
            for (var q = this._m6.xf(); q.i1(); q.i2()) {
                var R = q.i8();
                this._m6.x3(R);var Y = this._m6.gn(R),
                    M = this._m6.gk(R);
                this._m6.gz(R, Y), this._m6.gt(R, M)
            }
            for (var K = new Ed, A = 0, e = 0; A < S.length; A++) K.ae(S[A]);
            for (; e < S.length; e++) S[e] = K.au();
            var J = this._l,
                _ = function(O, g) {
                    return !O && g ? 1 : O && !g ? -1 : O || g ? J[O.a2().al()] - J[g.a2().al()] : 0
                },
                B = function(r, v) {
                    return !r && v ? 1 : r && !v ? -1 : r || v ? J[r.a3().al()] : 0
                };
            this._m6.x2(_, B)
        },
        tg : function(g, u) {
            var e = g.x0(),
                r = g.xg(),
                Q = 0;
            for (this._l = lq.a(e), this._b = lq.d(e), this._k = lq.d(e), this._m = lq.d(e), this._i = lq.d(e), this._o = lq.d(e), this._f = lq.e(4, e), this._c = lq.a(e), this._g = lq.a(e), this._j = lq.a(e), this._d = lq.b(e), this._e = lq.b(r); Q < u.length; Q++)
                for (var C, H = 0, w = u[Q].x1(); w.i1(); w.i2()) {
                    var J = w.i9(),
                        X = J.al();
                    this._l[X] = H++, this._b[X] = C, this._k[X] = j, C && (this._k[C.al()] = J), C = J
                }
            var D = this._l,
                V = function(A, x) {
                    return !A && x ? 1 : A && !x ? -1 : A || x ? D[A.a2().al()] - D[x.a2().al()] : 0
                },
                z = function(t, m) {
                    return !t && m ? 1 : t && !m ? -1 : t || m ? D[t.a3().al()] : 0
                };
            g.x2(V, z)
        },
        tb : function(k, U) {
            for (var Z = k.x9(); Z.i1(); Z.i2()) {
                var g = Z.i9(),
                    y = g.al();
                this._m[y] = g, this._i[y] = g, U[y] = p, this._o[y] = g, this._c[y] = p, this._d[y] = !1, this._j[y] = this._g[y] = 0
            }
        },
        ta : function(m) {
            for (var Z = 1; Z < m.length; Z++)
                for (var M = -1, x = m[Z]._b; x; x = x.a()) {
                    var q = x.d(),
                        e = q.al(),
                        z = q.ak();
                    if (0 !== z) {
                        for (var K = f((z + 1) / 2), D = E((z + 1) / 2), b = 1, r = q.ae(), P = !1; K > b; r = r.a7()) b++;
                        for (; D >= b && !P; b++) {
                            var g = this._m6.g2(r),
                                t = r.a2(),
                                H = t.al();
                            this._i[e] === q && !this._e[r.a5()] && M < this._l[H] && (M = this._l[H], this._i[H] = q, this._m[e] = this._m[H], this._i[e] = this._m[e], P = !0, this._j[H] = g.i6().x, this._g[e] = g.i7().x), r = r.a7()
                        }
                    }
                }
        },
        th : function(S, y, v) {
            for (var F = S.x9(); F.i1(); F.i2()) {
                var X = F.i9(),
                    L = X.al();
                this._m[L] === X && this.td(S, X, y)
            }
            for (var D = 0; D < v.length; D++) {
                var Q = v[D].x1();
                if (Q.i1()) {
                    var b = v[D].x1().i9(),
                        E = b.al();
                    this._o[this._m[E].al()] === b && this.tk(S, b, y)
                }
            }
            for (var G = S.x9(); G.i1(); G.i2()) {
                var l = G.i9(),
                    T = l.al(),
                    R = this._c[this._o[this._m[T].al()].al()];
                p > R && (y[T] += R)
            }
        },
        td : function(R, v, W) {
            var q = v.al();
            if (W[q] === p) {
                W[q] = 0;
                var S = v,
                    k = 0;
                do {
                    var f = S.al();
                    if (f !== q && (k -= this._g[f]), this._l[f] > 0) {
                        var g = this._b[f],
                            x = this._m[this._b[f].al()],
                            D = x.al();
                        this.td(R, x, W), this._o[q] === v && (this._o[q] = this._o[D]), this._o[q] === this._o[D] && (W[q] = M(W[q], W[g.al()] + this.ti(R, g, S) - k))
                    }
                    k += this._j[f], S = this._i[f]
                } while (S !== v);
                k = 0, S = v;
                do {
                    var b = S.al();
                    b !== q && (k -= this._g[b]), W[b] = W[q] + k, k += this._j[b], S = this._i[b]
                } while (S !== v)
            }
        },
        tk : function(E, Q, M) {
            var n = Q.al();
            if (!this._d[n]) {
                this._d[n] = !0;
                var w = Q;
                do {
                    var d = w.al(),
                        D = this._k[d];
                    if (D) {
                        var A = D.al(),
                            G = this._o[this._m[A].al()];
                        if (G !== this._o[n]) {
                            var c = M[A] - M[n] - this.ti(E, w, D);
                            this._c[G.al()] !== p && (c += this._c[G.al()]), this._c[this._o[n].al()] = W(this._c[this._o[n].al()], c)
                        } else this.tk(E, this._m[A], M)
                    }
                    w = this._i[d]
                } while (w !== Q)
            }
        },
        tc : function(_) {
            for (var w = lq.a(4), x = lq.a(4), z = _.x9(); z.i1(); z.i2()) {
                var t = z.i9().al();
                x[0] += this._f[0][t], x[1] += this._f[1][t], x[2] += this._f[2][t], x[3] += this._f[3][t]
            }
            x[0] /= _.xa(), x[1] /= _.xa(), x[2] /= _.xa(), x[3] /= _.xa();
            for (var a = _.x9(); a.i1(); a.i2()) {
                var d = a.i9(),
                    n = d.al(),
                    k = _.g4(d);
                w[0] = this._f[0][n] - x[0], w[1] = this._f[1][n] - x[1], w[2] = this._f[2][n] - x[2], w[3] = this._f[3][n] - x[3], w.sort(lq.n), _.s1(d, new I((w[1] + w[2]) / 2, k.y))
            }
        },
        ti : function(V, c, n) {
            var Y,
                x = V.gj(c),
                D = V.gj(n);
            return Y = x > 1 && D > 1 ? this._m1 + (x + D) / 2 : this._m3 + (x + D) / 2, this._l[c.al()] < this._l[n.al()] ? (this._a && (Y += this._a.i3(n)), this._h && (Y += this._h.i3(c))) : (this._a && (Y += this._a.i3(c)), this._h && (Y += this._h.i3(n))), Y
        },
        tj : function() {
            this._l = this._b = this._k = this._e = this._m = this._i = this._f = this._c = this._o = this._d = this._j = this._g = j
        },
        tf : function(D, t, P, c) {
            for (var r = D.length, A = 2; r - 1 > A; A++)
                for (var L = -1, W = 0, e = 0, H = D[A].x1(), F = D[A].x1(); F.i1(); F.i2()) {
                    var O,
                        u = F.i9(),
                        G = !1;
                    if (1 === u.ak() && (O = u.ae().a2(), P.i1(O) && P.i1(u) && (G = !0)), e === D[A].ay() - 1 || G) {
                        for (var T = G ? c[O.al()] : D[A - 1].ay(); e >= W; W++) {
                            for (var f = H.i9(), B = f.am(); B.i1(); B.i2()) {
                                var Q = B.i8(),
                                    R = c[Q.a2().al()];
                                (L > R || R > T) && t.i7(B.i8(), !0)
                            }
                            H.i2()
                        }
                        L = T
                    }
                    e++
                }
        }
    });
    var io = function(G, e) {
        this._b = 20, this._a = e, this._d = G, this._f = {}
    };
    w(io, i, {
        a3 : function(C) {
            this._b = C
        },
        a4 : function(n, U, W, M, u) {
            if (this.a2(n)) {
                var e = this.b2(n);
                e._o = U, e._m = u, e._n = M, e._f = W
            }
        },
        b2 : function(v) {
            var H = this._f[v._id];
            return H || (H = new ns, this._f[v._id] = H), H
        },
        a2 : function(l) {
            return !!this._f[l._id]
        },
        c : function() {
            for (var u = nd.a1(lq.a(this._d.xa())), X = nd.a1(lq.a(this._d.xa())), Q = this._d.x9(); Q.i1(); Q.i2()) {
                var T = Q.i9();
                if (this.a2(T)) {
                    var x = this.b2(T);
                    u.i6(T, this._b * (x.c() - 1)), X.i6(T, this._b * (x.b() - 1))
                }
            }
            this._d.x1("D", u), this._d.x1("C", X)
        },
        g : function() {
            this._d.x6("D"), this._d.x6("C")
        },
        f : function() {
            for (var L = this._d.x9(); L.i1(); L.i2()) {
                var O = L.i9();
                if (this.a2(O)) {
                    var q = this._d.gi(O),
                        i = this._d.gh(O),
                        z = this._d.gj(O),
                        h = this._d.g9(O),
                        K = this.b2(O),
                        j = K._q.ay() + K._b.ay() + K._f,
                        H = K._d.ay() + K._g.ay() + K._o,
                        f = K._i.ay() + K._l.ay() + K._n,
                        A = K._h.ay() + K._k.ay() + K._m,
                        X = this._a.a7(z, j),
                        J = this._a.a7(z, H),
                        P = this._a.a7(h, A),
                        Z = this._a.a7(h, f);
                    K.a2(this._a.a8(z, j, X), this._a.a8(z, H, J), this._a.a8(h, A, P), this._a.a8(h, f, Z));
                    for (var _ = K._j.c1(); _.i1(); _.i2()) {
                        var v = _.i8(),
                            E = this.a1(v),
                            k = this.b1(v),
                            F = new Ed;
                        E.b() === k.b() ? (E.c() ? (F.aa(new I(q + K._g._bd * J + K._c, i)), F.aa(new I(q + K._g._bd * J + K._c, i - this._b)), K._g._bd++, F.aa(new I(q + K._g._bd * J + K._c, i - this._b)), F.aa(new I(q + K._g._bd * J + K._c, i)), K._g._bd++, K._g._bc = M(K._g._bc, 2)) : E.d() ? (F.aa(new I(q + K._b._bd * X + K._p, i + h)), F.aa(new I(q + K._b._bd * X + K._p, i + h + this._b)), K._b._bd++, F.aa(new I(q + K._b._bd * X + K._p, i + h + this._b)), F.aa(new I(q + K._b._bd * X + K._p, i + h)), K._b._bd++, K._b._bc = M(K._b._bc, 2)) : E.f() ? (F.aa(new I(q, i + K._i._bd * Z + K._a)), F.aa(new I(q - this._b, i + K._i._bd * Z + K._a)), K._i._bd++, F.aa(new I(q - this._b, i + K._i._bd * Z + K._a)), F.aa(new I(q, i + K._i._bd * Z + K._a)), K._i._bd++, K._i._bc = M(K._i._bc, 2)) : E.e() && (F.aa(new I(q + z, i + K._h._bd * P + K._e)), F.aa(new I(q + z + this._b, i + K._h._bd * P + K._e)), K._h._bd++, F.aa(new I(q + z + this._b, i + K._h._bd * P + K._e)), F.aa(new I(q + z, i + K._h._bd * P + K._e)), K._h._bd++, K._h._bc = M(K._h._bc, 2)), this._d.m1(v, F)) : E.c() || k.c() ? E.e() || k.e() ? (F.aa(new I(q + z - K._d._bd * J - K._c, i)), F.aa(new I(q + z - K._d._bd * J - K._c, i - this._b * K._d._bc)), F.aa(new I(q + z + this._b * K._h._bc, i - this._b * K._d._bc)), F.aa(new I(q + z + this._b * K._h._bc, i + K._h._bd * P + K._e)), F.aa(new I(q + z, i + K._h._bd * P + K._e)), K._d._bd++, K._d._bc++, K._h._bd++, K._h._bc++, k.c() && F.ax(), this._d.m1(v, F)) : E.f() || k.f() ? (F.aa(new I(q + K._g._bd * J + K._c, i)), F.aa(new I(q + K._g._bd * J + K._c, i - this._b * K._g._bc)), F.aa(new I(q - this._b * K._i._bc, i - this._b * K._g._bc)), F.aa(new I(q - this._b * K._i._bc, i + K._i._bd * Z + K._a)), F.aa(new I(q, i + K._i._bd * Z + K._a)), K._g._bd++, K._g._bc++, K._i._bd++, K._i._bc++, k.c() && F.ax(), this._d.m1(v, F)) : (E.d() || k.d()) && (F.aa(new I(q + z - K._d._bd * J - K._c, i)), F.aa(new I(q + z - K._d._bd * J - K._c, i - this._b * K._d._bc)), F.aa(new I(q + z + this._b * K.b(), i - this._b * K._d._bc)), F.aa(new I(q + z + this._b * K.b(), i + h + this._b * K._q._bc)), F.aa(new I(q + z - K._q._bd * X - K._p, i + h + this._b * K._q._bc)), F.aa(new I(q + z - K._q._bd * X - K._p, i + h)), K._d._bd++, K._d._bc++, K._k._bc++, K._h._bc++, K._q._bc++, K._q._bd++, k.c() && F.ax(), this._d.m1(v, F)) : E.d() || k.d() ? E.e() || k.e() ? (F.aa(new I(q + z - K._q._bd * X - K._p, i + h)), F.aa(new I(q + z - K._q._bd * X - K._p, i + h + this._b * K._q._bc)), F.aa(new I(q + z + this._b * K._k._bc, i + h + this._b * K._q._bc)), F.aa(new I(q + z + this._b * K._k._bc, i + h - K._k._bd * P - K._e)), F.aa(new I(q + z, i + h - K._k._bd * P - K._e)), K._q._bd++, K._q._bc++, K._k._bd++, K._k._bc++, k.d() && F.ax(), this._d.m1(v, F)) : (E.f() || k.f()) && (F.aa(new I(q + K._b._bd * X + K._p, i + h)), F.aa(new I(q + K._b._bd * X + K._p, i + h + this._b * K._b._bc)), F.aa(new I(q - this._b * K._l._bc, i + h + this._b * K._b._bc)), F.aa(new I(q - this._b * K._l._bc, i + h - K._l._bd * Z - K._a)), F.aa(new I(q, i + h - K._l._bd * Z - K._a)), K._b._bd++, K._b._bc++, K._l._bd++, K._l._bc++, k.d() && F.ax(), this._d.m1(v, F)) : (F.aa(new I(q, i + h - K._l._bd * Z - K._a)), F.aa(new I(q - this._b * K._l._bc, i + h - K._l._bd * Z - K._a)), F.aa(new I(q - this._b * K._l._bc, i + h + this._b * K.a1())), F.aa(new I(q + z + this._b * K._k._bc, i + h + this._b * K.a1())), F.aa(new I(q + z + this._b * K._k._bc, i + h - K._k._bd * P - K._e)), F.aa(new I(q + z, i + h - K._k._bd * P - K._e)), K._l._bd++, K._l._bc++, K._b._bc++, K._q._bc++, K._k._bc++, K._k._bd++, k.f() && F.ax(), this._d.m1(v, F))
                    }
                }
            }
        },
        a5 : function(N, b) {
            for (var n = 0; n < N.length; n++)
                for (var r = N[n], a = b[n], w = r.x1(); w.i1(); w.i2()) {
                    var x = w.i9();
                    if (this.a2(x)) {
                        var e = this.b2(x);
                        a._g = M(a._g, this._b * (e.d() - 1)), a._j = M(a._j, this._b * (e.a1() - 1))
                    }
                }
        },
        a1 : function(M) {
            var u,
                x = this._d.xc("A");
            if (x && (u = x.i1(M)), !u || u.g()) {
                var y = this._d.xc("B");
                if (!y) return hi.j(1);
                var I = y.i1(M);
                if (!I || I.g()) return hi.j(1);
                if (I.c()) return hi.j(8);
                if (I.f()) return hi.j(1);
                if (I.d()) return hi.j(4);
                if (I.e()) return hi.j(2)
            }
            return u
        },
        b1 : function(G) {
            var d,
                J = this._d.xc("B");
            if (J && (d = J.i1(G)), !d || d.g()) {
                var j = this._d.xc("A");
                if (!j) return hi.j(8);
                var W = j.i1(G);
                if (!W || W.g()) return hi.j(8);
                if (W.c()) return hi.j(8);
                if (W.f()) return hi.j(1);
                if (W.d()) return hi.j(4);
                if (W.e()) return hi.j(2)
            }
            return d
        }
    });
    var ns = function() {
        this._o = 0, this._f = 0, this._n = 0, this._m = 0, this._c = 0, this._p = 0, this._e = 0, this._a = 0, this._j = new yc, this._g = new Cq, this._d = new Cq, this._b = new Cq, this._q = new Cq, this._h = new Cq, this._k = new Cq, this._i = new Cq, this._l = new Cq
    };
    w(ns, i, {
        a1 : function() {
            return M(this._q._bc, this._b._bc)
        },
        d : function() {
            return M(this._d._bc, this._g._bc)
        },
        b : function() {
            return M(this._k._bc, this._h._bc)
        },
        c : function() {
            return M(this._l._bc, this._i._bc)
        },
        a2 : function(T, p, j, h) {
            this._c = p, this._a = h, this._p = T, this._e = j, this._g.c0(), this._d.c0(), this._b.c0(), this._q.c0(), this._k.c0(), this._h.c0(), this._l.c0(), this._i.c0()
        }
    });
    var si = function(t, J, F, u) {
        this._k = 20, this._r = .5, this._d = t, this._c = J, this._j = F, this._m = u, this._i = t.xc("A") != j || t.xc("B") != j, this._t = new so(t, J, F, u), this._b = new io(t, this)
    };
    w(si, i, {
        a6 : function(O) {
            this._k = O, this._t.a1(O), this._b.a3(O)
        },
        g1 : function() {
            return this._k
        },
        a9 : function(L) {
            return this.c1(), L
        },
        a5 : function(i) {
            return this.a1(), i
        },
        b3 : function(O) {
            return this.c1(), O = this.c4(O), this._b.c(), O
        },
        g2 : function(l) {
            return this._b.g(), l
        },
        e2 : function(Z) {
            Z = this.f(Z), this._b.f()
        },
        e1 : function() {
            this._t.d(), this._n && this._d.xi(this._n), this.a1(), this._d = j
        },
        a1 : function() {
            this._i && (this._q && (this._d.x1("A", this._q), this._q = j), this._p && (this._d.x1("B", this._p), this._p = j), this._h && (this._d.xj(this._h), this._h = j), this._l && (this._d.xj(this._l), this._l = j))
        },
        c1 : function() {
            if (this._i) {
                this._h || (this._h = this._d.xl()), this._l || (this._l = this._d.xl());
                for (var a = this._d.xf(); a.i1(); a.i2()) {
                    var P = a.i8(),
                        e = this._j.i1(P.a2()),
                        X = this._j.i1(P.a3());
                    if (e && !X) {
                        var d = this._j.i1(P.a2());
                        this._m.i4(d) ? this._l.i8(P, hi.h(this._d, d)) : this._l.i8(P, hi.i(this._d, d))
                    } else if (!e && X) {
                        var E = this._j.i1(P.a3());
                        this._m.i4(E) ? this._h.i8(P, hi.i(this._d, E)) : this._h.i8(P, hi.h(this._d, E))
                    } else e || X || (this._m.i4(P) ? (this._h.i8(P, hi.i(this._d, P)), this._l.i8(P, hi.h(this._d, P))) : (this._h.i8(P, hi.h(this._d, P)), this._l.i8(P, hi.i(this._d, P))))
                }
                this._q = this._d.xc("A"), this._p = this._d.xc("B"), this._d.x1("A", this._h), this._d.x1("B", this._l)
            }
        },
        c4 : function(C) {
            this._n = this._d.xk(), this._a = this._d.xl(), this._g = this._d.xl();
            for (var g = new yc, M = new yc, n = new yc, S = new yc, y = new yc, Z = new yc, l = new yc, e = new yc, P = new yc, X = this._d.xk(), p = 0; p < C.length; p++)
                for (var t = 0, H = C[p].x1(); H.i1();) X.i6(H.i9(), t), H.i2(), t++;
            for (var G = function(b, F) {
                var J = X.i3(b.a3()) - X.i3(F.a3());
                return 0 >= J ? J >= 0 ? 0 : -1 : 1
            }, V = function(k, S) {
                var A = X.i3(k.a2()) - X.i3(S.a2());
                return 0 >= A ? A >= 0 ? 0 : -1 : 1
            }, q = 0;q < C.length; q++)
                for (var d = C[q], k = d._b; k; k = k.a()) {
                    var O = k.d(),
                        F = 0;
                    O.av(G), O.au(V), g.af(), M.af(), n.af(), S.af(), y.af(), Z.af(), l.af(), e.af(), P.af();
                    for (var J = O.ap(); J.i1();) {
                        var K = J.i8(),
                            U = this.b1(K);
                        !U || U.d() || U.g() ? n.aa(K) : U.e() ? g.aa(K) : U.f() ? (M.aa(K), P.aa(K)) : U.c() && (e.aa(K), P.aa(K)), J.i2(), F++
                    }
                    F = 0;
                    for (var x = O.am(); x.i1();) {
                        var j = x.i8(),
                            Q = this.a2(j);
                        !Q || Q.c() || Q.g() ? S.aa(j) : Q.e() ? g.aa(j) : Q.f() ? (M.aa(j), P.aa(j)) : Q.d() && (Z.aa(j), P.aa(j)), x.i2(), F++
                    }
                    var z = X.i3(O);
                    if (!P.ar())
                        for (var u = .1 / P.ay(), W = z - .4; !P.ar(); W += u) {
                            var T = P.c3();
                            if (T.a2() === O) {
                                var N = this._d.xm();
                                this._n.z1(N, T.a2()), this._d.s7(N, 1, 1), this._c.z1(N, this._c.i1(O)), X.i6(N, W), this._a.i8(T, this._d.gn(T)), this._d.gt(T, Hh._A), this._d.xr(T, N, T.a3()), d.ao(N, k)
                            } else {
                                var r = this._d.xm();
                                this._n.z1(r, T.a3()), this._d.s7(r, 1, 1), this._c.z1(r, this._c.i1(O)), X.i6(r, W), this._g.i8(T, this._d.gk(T)), this._d.gz(T, Hh._A), this._d.xr(T, T.a2(), r), d.ao(r, k)
                            }
                        }
                    if (!g.ar())
                        for (var o = .1 / g.ay(), w = z + .1; !g.ar(); w += o) {
                            var c = g.c3();
                            if (c.a2() === O) {
                                var A = this._d.xm();
                                this._n.z1(A, c.a2()), this._d.s7(A, 1, 1), this._c.z1(A, this._c.i1(O)), X.i6(A, w), this._a.i8(c, this._d.gn(c)), this._d.gt(c, Hh._A), this._d.xr(c, A, c.a3()), k = d.an(A, k)
                            } else {
                                var v = this._d.xm();
                                this._n.z1(v, c.a3()), this._d.s7(v, 1, 1), this._c.z1(v, this._c.i1(O)), X.i6(v, w), this._g.i8(c, this._d.gk(c)), this._d.gz(c, Hh._A), this._d.xr(c, c.a2(), v), k = d.an(v, k)
                            }
                        }
                    var i = si._z;
                    this._b.a2(O) && (i = this._b.b2(O));var $ = i._b.ay() + Z.ay() + O.ao() + y.ay() + i._q.ay();
                    if ($ > 0)
                        for (var L = this._d.g9(O) / 2, B = this._d.gj(O), f = this.a7(B, $), Y = -.5 * B + this.a8(this._d.gj(O), $, f) + f * (i._b.ay() + Z.ay()), m = O.ap(); m.i1(); m.i2()) {
                            var s = m.i8();
                            this.c2(s) || this._j.i1(s.a2()) || (this._d.g2(s).i8(new I(Y, L)), Y += f)
                        }
                    var D = this._t.a3(O),
                        b = 0,
                        R = 0,
                        E = 0,
                        h = 0;
                    if (D && (b = D._e.ay(), R = D._c.ay(), E = D._b.ay(), h = D._d.ay()), $ = i._g.ay() + b + e.ay() + O.ak() + l.ay() + R + i._d.ay(), $ > 0) {
                        for (var a = this._d.gj(O), _ = this.a7(a, $), Yc = this.a8(a, $, _), Rm = -.5 * a + Yc + _ * (i._g.ay() + b + e.ay()), Ro = -this._d.g9(O) / 2, Mh = O.am(); Mh.i1(); Mh.i2()) {
                            var wo = Mh.i8();
                            this.d1(wo) || this._j.i1(wo.a3()) || (this._d.g2(wo).i9(new I(Rm, Ro)), Rm += _)
                        }
                        if (D) {
                            for (var Sr = -.5 * a + Yc + _ * (i._g.ay() + e.ay() + D._e.ay() - 1), Pe = D._e.c1(); Pe.i1(); Pe.i2()) {
                                var Qh = Pe.i8();
                                this._d.u1(Qh), Qh.a2() !== O || this.c2(Qh) ? this.d1(Qh) || (this._d.g2(Pe.i8()).i9(new I(Sr, Ro)), Sr -= _) : (this._d.g2(Pe.i8()).i8(new I(Sr, Ro)), Sr -= _), this._d.h1(Qh)
                            }
                            Sr = .5 * a - Yc - _ * (i._d.ay() + l.ay());
                            for (var Gc = D._c.c1(); Gc.i1(); Gc.i2()) {
                                var Yd = Gc.i8();
                                this._d.u1(Yd), Yd.a2() !== O || this.c2(Yd) ? this.d1(Yd) || (this._d.g2(Gc.i8()).i9(new I(Sr, Ro)), Sr -= _) : (this._d.g2(Gc.i8()).i8(new I(Sr, Ro)), Sr -= _), this._d.h1(Yd)
                            }
                        }
                    }
                    this._b.a2(O) && this._b.a4(O, b + e.ay() + O.ak() + l.ay() + R, Z.ay() + O.ao() + y.ay(), E + M.ay(), h + g.ay())
                }
            return this._d.xi(X), C
        },
        a7 : function(h, r) {
            return 1 >= r ? 0 : h / (r - 1 + 2 * this._r)
        },
        a8 : function(e, c, f) {
            return 1 >= c ? .5 * e : .5 * (e - f * (c - 1))
        },
        f : function(a) {
            var h = this.g1(),
                A = 0;
            for (this._f = this._d.xk(); A < a.length; A++)
                for (var Q = a[A], P = Q._b; P;) {
                    var w = P.d(),
                        F = this._n.i1(w);
                    if (F || this._t.b2(w))
                        P = P.a();else {
                        var Y = new Uf,
                            d = new Uf,
                            s = new Uf,
                            o = new Uf,
                            f = new Uf,
                            y = new Uf,
                            k = new yc,
                            V = new yc,
                            c = new Uo(Y, d, s, o, f, y, k, V);
                        this._f.z1(w, c), k.ab(w.am()), V.ab(w.ap());
                        for (var L = P.b(); L && this._n.i1(L.d()) === w; L = L.b()) {
                            var R = L.d(),
                                H = this.c3(R);
                            H.f() ? d.ac(R) : H.c() ? o.ac(R) : H.d() && y.ac(R)
                        }
                        for (var v = P.a(); v && this._n.i1(v.d()) === w; v = v.a()) {
                            var b = v.d(),
                                T = this.c3(b);
                            T.e() ? Y.aa(b) : T.c() ? s.aa(b) : T.d() && f.aa(b)
                        }
                        P = v
                    }
                }
            for (var e = this.d2(a), i = 0, x = 0; x < a.length; x++) {
                var l = e[x];
                x > 0 && (i += e[x - 1]._j + e[x - 1]._h + e[x - 1]._b), i += l._g + l._f + l._a + l._d;
                for (var X = a[x].x1(); X.i1(); X.i2()) {
                    var C = X.i9();
                    this._d.s3(C, this._d.gi(C), this._d.gh(C) + i)
                }
                l._c += i, l._i += i
            }
            for (var t = 0; t < a.length; t++)
                for (var E = a[t], G = E.x1(); G.i1(); G.i2()) {
                    var z = G.i9();
                    this._n.i1(z) && E.av(G)
                }
            for (var q = this, Z = function(R, S) {
                return q.a3(R) ? q.a3(S) ? q._d.gi(R) >= q._d.gi(S) ? -1 : 1 : 1 : q.a3(S) ? -1 : q._d.gi(R) >= q._d.gi(S) ? 1 : -1
            }, u = function(p, N) {
                return q.a3(p) ? q.a3(N) ? q._d.gi(p) >= q._d.gi(N) ? 1 : -1 : 1 : q.a3(N) ? -1 : q._d.gi(p) >= q._d.gi(N) ? -1 : 1
            }, J = 0; J < a.length; J++)
                for (var O = e[J], $ = a[J].x1(); $.i1(); $.i2()) {
                    var B = $.i9();
                    if (!this._t.b2(B)) {
                        var p = this._f.i1(B),
                            K = p._d,
                            n = p._a,
                            M = p._b,
                            D = p._h,
                            N = p._f,
                            r = p._c,
                            W = p._g,
                            m = p._e,
                            S = 0,
                            _ = 0,
                            U = 0,
                            g = 0,
                            Wc = B.ao(),
                            Rf = B.ak(),
                            re = this._d.gi(B),
                            qh = this._d.gh(B),
                            ph = this._d.gj(B),
                            Wd = this._d.g9(B),
                            oe = this._t.a3(B),
                            hc = si._z;
                        if (this._b.a2(B) && (hc = this._b.b2(B)), oe) {
                            if (S = oe._d.ay(), _ = oe._b.ay(), U = oe._e.ay(), g = oe._c.ay(), S > 0)
                                for (var Sd = hc._h.ay() + K.ay() + S + hc._k.ay(), bd = this.a7(Wd, Sd), Eg = this.a8(Wd, Sd, bd), tq = qh + Eg + bd * (hc._h.ay() + this.a4(K)), Mk = oe._d.c1(); Mk.i1(); Mk.i2()) {
                                    var Hf = Mk.i8();
                                    this._d.u1(Hf), Hf.a2() === B ? this.c2(Hf) || this._d.gx(Hf, new I(re + ph, tq)) : (this.d1(Hf), this._d.gy(Hf, new I(re + ph, tq))), tq += bd, this._d.h1(Hf)
                                }
                            if (_ > 0)
                                for (var ve = hc._i.ay() + n.ay() + _ + hc._l.ay(), jc = this.a7(Wd, ve), oj = this.a8(Wd, ve, jc), vb = qh + oj + jc * (hc._i.ay() + this.a4(n)), ek = oe._b.c1(); ek.i1(); ek.i2()) {
                                    var ol = ek.i8();
                                    this._d.u1(ol), ol.a2() === B ? this.c2(ol) || this._d.gx(ol, new I(re, vb)) : this.d1(ol) || this._d.gy(ol, new I(re, vb)), vb += jc, this._d.h1(ol)
                                }
                        }
                        if (K.ay() > 0) {
                            K.a1(Z);
                            for (var Vn = hc._h.ay() + K.ay() + S + hc._k.ay(), th = this.a7(Wd, Vn), Ho = this.a8(Wd, Vn, th), Ci = qh + Ho + th * hc._h.ay(), vs = !0; !K.ar();) {
                                var Ph = K.x4();
                                if (this.a3(Ph)) {
                                    vs && (vs = !1, Ci += th * S);
                                    var en = Ph.ag(),
                                        Rg = this._d.gd(en),
                                        xn = Rg.at();
                                    if (Rg.ac(new I(xn.x, O.b())), this.c2(en)) {
                                        var xh = this._a.i1(en);
                                        Rg.ac(new I(xn.x, xh.y + this._d.g6(B))), Rg.ac(new I(xh.x + this._d.g5(B), xh.y + this._d.g6(B)))
                                    } else Rg.ac(new I(xn.x, Ci)), Rg.ac(new I(re + ph, Ci));
                                    this._d.xr(en, B, en.a3()), this._d.m1(en, Rg)
                                } else {
                                    var cm = Ph.ae(),
                                        Jp = this._d.gd(cm),
                                        Si = Jp.au();
                                    if (Jp.ae(new I(Si.x, O.a())), this.d1(cm)) {
                                        var xi = this._g.i1(cm);
                                        Jp.ae(new I(Si.x, xi.y + this._d.g6(B))), Jp.ae(new I(xi.x + this._d.g5(B), xi.y + this._d.g6(B)))
                                    } else Jp.ae(new I(Si.x, Ci)), Jp.ae(new I(re + ph, Ci));
                                    this._d.xr(cm, cm.a2(), B), this._d.m1(cm, Jp)
                                }
                                this._d.x4(Ph), Ci += th
                            }
                        }
                        if (n.ay() > 0) {
                            n.a1(u);
                            for (var xo = hc._i.ay() + n.ay() + _ + hc._l.ay(), Yk = this.a7(Wd, xo), Sh = this.a8(Wd, xo, Yk), xg = qh + Sh + Yk * hc._i.ay(), Zi = !0; !n.ar();) {
                                var Mh = n.x4();
                                if (this.a3(Mh)) {
                                    Zi && (Zi = !1, xg += Yk * _);
                                    var nb = Mh.ag(),
                                        Kd = this._d.gd(nb),
                                        _d = Kd.at();
                                    if (Kd.ac(new I(_d.x, O.b())), this.c2(nb)) {
                                        var Lr = this._a.i1(nb);
                                        Kd.ac(new I(_d.x, Lr.y + this._d.g6(B))), Kd.ac(new I(Lr.x + this._d.g5(B), Lr.y + this._d.g6(B)))
                                    } else Kd.ac(new I(_d.x, xg)), Kd.ac(new I(re, xg));
                                    this._d.xr(nb, B, nb.a3()), this._d.m1(nb, Kd)
                                } else {
                                    var Zn = Mh.ae(),
                                        us = this._d.gd(Zn),
                                        Af = us.au();
                                    if (us.ae(new I(Af.x, O.a())), this.d1(Zn)) {
                                        var vr = this._g.i1(Zn);
                                        us.ae(new I(Af.x, vr.y + this._d.g6(B))), us.ae(new I(vr.x + this._d.g5(B), vr.y + this._d.g6(B)))
                                    } else us.ae(new I(Af.x, xg)), us.ae(new I(re, xg));
                                    this._d.xr(Zn, Zn.a2(), B), this._d.m1(Zn, us)
                                }
                                this._d.x4(Mh), xg += Yk
                            }
                        }
                        var Xm = hc._g.ay() + hc._d.ay() + Rf + D.ay() + M.ay() + U + g;
                        ph = this._d.gj(B);
                        var xr = this.a7(ph, Xm),
                            Wl = this.a8(ph, Xm, xr);
                        Xm = hc._b.ay() + hc._q.ay() + Wc + r.ay() + N.ay();
                        var hk = this.a7(ph, Xm),
                            zq = this.a8(ph, Xm, hk);
                        if (D.ay() > 0)
                            for (var _q, Ak = xr, Sm = h, wk = this._d.gi(B) + Wl + Ak * (hc._g.ay() + D.ay() - 1), om = this._d.gh(B), mr = O._c - O._g - D.ay() * Sm; !D.ar(); this._d.x4(_q)) {
                                _q = D.x4();var Gq = _q.ag(),
                                    Ch = this._d.gd(Gq),
                                    fm = Ch.at();
                                if (Ch.ac(new I(fm.x, O.b())), Ch.ac(new I(fm.x, mr)), this.c2(Gq)) {
                                    var Ee = this._a.i1(Gq);
                                    Ch.ac(new I(Ee.x + this._d.g5(B), mr)), Ch.ac(new I(Ee.x + this._d.g5(B), Ee.y + this._d.g6(B)))
                                } else Ch.ac(new I(wk, mr)), Ch.ac(new I(wk, om)), wk -= Ak;
                                mr += Sm, this._d.xr(Gq, B, Gq.a3()), this._d.m1(Gq, Ch)
                            }
                        if (M.ay() > 0)
                            for (var yd, Yn = xr, Fp = h, ir = this._d.gi(B) + this._d.gj(B) - Wl - Yn * hc._d.ay(), hl = this._d.gh(B), td = O._c - O._g - Fp; !M.ar(); this._d.x4(yd)) {
                                yd = M.x4();var id = yd.ag(),
                                    ug = this._d.gd(id),
                                    lh = ug.at();
                                if (ug.ac(new I(lh.x, O.b())), ug.ac(new I(lh.x, td)), this.c2(id)) {
                                    var tn = this._a.i1(id);
                                    ug.ac(new I(tn.x + this._d.g5(B), td)), ug.ac(new I(tn.x + this._d.g5(B), tn.y + this._d.g6(B)))
                                } else ug.ac(new I(ir, td)), ug.ac(new I(ir, hl)), ir -= Yn;
                                td -= Fp, this._d.xr(id, B, id.a3()), this._d.m1(id, ug)
                            }
                        if (r.ay() > 0)
                            for (var Io, Rp = hk, br = h, Vi = this._d.gi(B) + zq + Rp * (hc._b.ay() + r.ay() - 1), nm = this._d.gh(B) + this._d.g9(B), Wm = nm + r.ay() * br; !r.ar(); this._d.x4(Io)) {
                                Io = r.x4();var Qf = Io.ae(),
                                    Hj = this._d.gd(Qf),
                                    Xn = Hj.au();
                                if (Hj.ae(new I(Xn.x, O.a())), Hj.ae(new I(Xn.x, Wm)), this.d1(Qf)) {
                                    var ze = this._g.i1(Qf);
                                    Hj.ae(new I(ze.x + this._d.g5(B), Wm)), Hj.ae(new I(ze.x + this._d.g5(B), ze.y + this._d.g6(B)))
                                } else Hj.ae(new I(Vi, Wm)), Hj.ae(new I(Vi, nm)), Vi -= Rp;
                                Wm -= br, this._d.xr(Qf, Qf.a2(), B), this._d.m1(Qf, Hj)
                            }
                        if (N.ay() > 0)
                            for (var vn, Bi = hk, On = h, Gh = this._d.gi(B) + this._d.gj(B) - zq - hk * hc._q.ay(), Ur = this._d.gh(B) + this._d.g9(B), so = Ur + On; !N.ar(); this._d.x4(vn)) {
                                vn = N.x4();var Rr = vn.ae(),
                                    Wf = this._d.gd(Rr),
                                    Yh = Wf.au();
                                if (Wf.ae(new I(Yh.x, O.a())), Wf.ae(new I(Yh.x, so)), this.d1(Rr)) {
                                    var ri = this._g.i1(Rr);
                                    Wf.ae(new I(ri.x + this._d.g5(B), so)), Wf.ae(new I(ri.x + this._d.g5(B), ri.y + this._d.g6(B)))
                                } else Wf.ae(new I(Gh, so)), Wf.ae(new I(Gh, Ur)), Gh -= Bi;
                                so += On, this._d.xr(Rr, Rr.a2(), B), this._d.m1(Rr, Wf)
                            }
                        for (; !m.ar();) {
                            var Vr = m.c3(),
                                rp = this._d.gl(Vr);
                            O.a() + 12 < rp.y && this._d.g7(Vr).i4(rp.x, O.a())
                        }
                        for (; !W.ar();) {
                            var Rl = W.c3(),
                                zl = this._d.gs(Rl);
                            if (O.b() - 12 > zl.y) {
                                var nh = this._d.gf(Rl);
                                nh.ac(new I(zl.x, O.b())), this._d.s6(Rl, nh)
                            }
                        }
                    }
                }
            for (var bp = 0; bp < a.length; bp++)
                for (var ks = a[bp], Ok = ks._b; Ok; Ok = Ok.a()) {
                    var Bf = Ok.d(),
                        xj = this._t.a3(Bf);
                    xj && xj._a != j && (this._d.x4(xj._a), ks.aw(Ok.b()))
                }
            return this._d.xi(this._f), this._d.xj(this._a), this._d.xj(this._g), a
        },
        c3 : function(n) {
            return this.a3(n) ? this.b1(n.ag()) : this.a2(n.ae())
        },
        b1 : function(u) {
            return this._h ? this._h.i1(u) : si.s
        },
        a2 : function(I) {
            return this._l ? this._l.i1(I) : si.u
        },
        c2 : function(Y) {
            if (Y) {
                var t = this.b1(Y);
                return t != j && t.a()
            }
            return !1
        },
        d1 : function(E) {
            if (E) {
                var e = this.a2(E);
                return e != j && e.a()
            }
            return !1
        },
        a3 : function(e) {
            return 1 === e.ao()
        },
        b2 : function(c) {
            return 1 === c.ak()
        },
        a4 : function(t) {
            for (var k = 0, l = t._b; l; l = l.a()) this.b2(l.d()) && k++;
            return k
        },
        d2 : function(a) {
            for (var r = this._k, L = lq.d(a.length + 1), H = 0; H < a.length; H++) {
                var Y = a[H],
                    G = new $n;
                L[H] = G, G._c = p, G._i = e;
                for (var K = Y.x1(); K.i1(); K.i2()) {
                    var s = K.i9(),
                        j = this._d.gb(s);
                    G._c = W(G._c, j.i2()), G._i = M(G._i, j.i2() + j.i4())
                }
            }
            this._b.a5(a, L);
            for (var u = 0; u < a.length; u++)
                for (var B = L[u], i = a[u].x1(); i.i1(); i.i2()) {
                    var U = i.i9(),
                        P = this._f.i1(U);
                    P && (B._h = M(B._h, M(P._f.ay() * r, P._c.ay() * r)), B._f = M(B._f, M(P._b.ay() * r, P._h.ay() * r)))
                }
            return L
        }
    }), si.s = hi.j(2), si.u = hi.j(1), si._z = new ns;
    var sb = function() {
        this._af = 0, this._b = 0
    };
    w(sb, i, {
        ib : function(f) {
            this._af = f
        },
        ia : function(i, U, I) {
            this.a6(i, U, I), this.b2(!1);
            var O = this.g();
            if (this.o() && O > 0) {
                for (var W = this.r(), K = 0; 20 > K && O > 0 && this.o(); K++) {
                    this.b2(!0);var X = this.g();
                    O > X && (this.a7(W), O = X)
                }
                this.b3(W), this.b1()
            }
            return this.c()
        },
        a6 : function(k, d, S) {
            this._b = (new Date).getTime(), this._ac = k, this._ah = d;
            var u = this;
            this._p = function(P, M) {
                var s = u._n[P.al()] - u._n[M.al()];
                return s > 0 ? 1 : s >= 0 ? 0 : -1
            }, this._ad = lq.d(S);
            for (var i = 0; i < this._ad.length; i++) this._ad[i] = new Uf;
            this._ab = lq.a(this._ac.x0()), this._f = lq.d(this._ac.x0()), this._n = lq.a(this._ac.x0() + 1);
            var P = this._ab;
            this._o = function(u, g) {
                if (!u && g) return 1;
                if (u && !g) return -1;
                if (!u && !g) return 0;
                var X = u,
                    L = g,
                    s = X._h,
                    e = X.a2(),
                    w = L.a2(),
                    N = P[e.al()] - P[w.al()];
                if (0 === N) {
                    var V = sb.b(hi.h(s, X), s.gn(X)),
                        _ = sb.b(hi.h(s, L), s.gn(L)),
                        Z = V - _;
                    if (0 === Z) {
                        var I = P[X.a3().al()] - P[L.a3().al()];
                        return 0 === I ? sb.a(hi.i(s, X), s.gk(X)) - sb.a(hi.i(s, L), s.gk(L)) : I
                    }
                    return Z
                }
                return N
            }, this._l = function(v, O) {
                if (!v && O) return 1;
                if (v && !O) return -1;
                if (!v && !O) return 0;
                var W = v,
                    U = O,
                    w = W._h,
                    K = W.a3(),
                    b = U.a3(),
                    n = P[K.al()] - P[b.al()];
                if (0 === n) {
                    var V = sb.a(hi.i(w, W), w.gk(W)) - sb.a(hi.i(w, U), w.gk(U));
                    if (0 === V) {
                        var I = P[W.a2().al()] - P[U.a2().al()];
                        return 0 === I ? sb.b(hi.h(w, W), w.gn(W)) - sb.b(hi.h(w, U), w.gn(U)) : I
                    }
                    return V
                }
                return n
            }, this._z = function(y, l) {
                if (!y && l) return 1;
                if (y && !l) return -1;
                if (!y && !l) return 0;
                var X = y,
                    A = l,
                    N = X._h;
                return sb.b(hi.h(N, X), N.gn(X)) - sb.b(hi.h(N, A), N.gn(A))
            }, this._e = function(m, J) {
                if (!m && J) return 1;
                if (m && !J) return -1;
                if (!m && !J) return 0;
                var e = m,
                    o = J,
                    s = e._h;
                return sb.a(hi.i(s, e), s.gk(e)) - sb.a(hi.i(s, o), s.gk(o))
            }, this._ac.x2(this._e, this._z)
        },
        c : function() {
            this._ah = j, this._aa = j, this._f = j, this._n = j, this._p = j, this._o = j, this._l = j, this._ac = j;
            var f = this._ad;
            return this._ad = j, f
        },
        o : function() {
            var t = (new Date).getTime() - this._b;
            return t <= this._af
        },
        m : function() {
            for (var u = this, z = function(e, f) {
                return E(u._n[e.a3().al()]) - E(u._n[f.a3().al()])
            }, p = this._ac.x9(); p.i1(); p.i2()) {
                for (var J = p.i9().aw(); J.i1(); J.i2()) this._n[J.i9().al()] = Hh.j();
                p.i9().av(z)
            }
        },
        b2 : function(F) {
            for (var U = 0; U < this._ad.length; U++) this._ad[U].af();
            if (F) {
                this.m();
                for (var v = 0, X = this._ab.length; X > v; v++) this._ab[v] = 0;
                this._ac.x2(j, this._z)
            }
            var p = this._ac.xm();
            this._ah.i7(p, 0);
            for (var Y = this._ac.x9(); Y.i1(); Y.i2()) 0 === Y.i9().ak() && Y.i9() !== p && this._ac.xo(p, Y.i9());
            var E = new rr(this);
            E.a6(!0), E.a9(this._ac, p), this._ad[0].at(), this._ac.x4(p), this.d()
        },
        a1 : function() {
            this._ac.x2(this._o, this._l);
            for (var m = 0, $ = 1; $ < this._ad.length; $++) {
                var s = this.a2(this._ad[$ - 1], this._ad[$]);
                m += s
            }
            return m
        },
        a2 : function(W, T) {
            var f = W.ah(),
                r = T.ah(),
                F = new Ed,
                J = new Ed,
                w = 0;
            for (this._aa = lq.d(this._ac.x0()); f.i1() && r.i1(); r.i2()) w += this.a8(f.i6(), F, J, !0), w += this.a8(r.i6(), J, F, !1), f.i2();
            for (; f.i1(); f.i2()) w += this.a8(f.i6(), F, J, !0);
            for (; r.i1(); r.i2()) w += this.a8(r.i6(), J, F, !1);
            return w
        },
        a8 : function(d, m, E, V) {
            var h = 0,
                L = 0,
                C = 0;
            if (this._aa[d.al()])
                for (var A = this._aa[d.al()].a(), D = m._b; D !== A; D = D.a()) {
                    var P = D._c;
                    P === d ? (h++, C += L, m.aw(D)) : L++
                }
            var N = h * E.ay() + C;
            if (V)
                for (var O = d.ag(); O; O = O.a8()) {
                    var S = O.a3();
                    this._ab[S.al()] >= this._ab[d.al()] && (this._aa[S.al()] = E.ae(S))
                }
            else
                for (var F = d.ae(); F; F = F.a7()) {
                    var j = F.a2();
                    this._ab[j.al()] > this._ab[d.al()] && (this._aa[j.al()] = E.ae(j))
                }
            return N
        },
        g : function() {
            for (var m = this.r(), w = this.a1(), k = !0, _ = 0; 3 > _ && this.o() && w > 0;) {
                var e = this.k();
                w > e ? (this.a7(m), w = e) : _++, k = !k
            }
            if (this.b3(m), this.b1(), w > 0) {
                for (var M = 1, x = 0; 1 === M && w > 0; x++) {
                    this.e(), this.i();var j = this.a1();
                    w > j ? (M = 1, this.a7(m)) : M = -1, w = j
                }
                this.b3(m), this.b1()
            }
            return w
        },
        e : function() {
            for (var A = this.l(), p = this.r(), T = lq.d(this._ac.x0()), k = this._ad.length - 1; k >= 0; k--)
                for (var h = this._ad[k].ah(); h.i1(); h.i2()) {
                    var H = h.i6();
                    if (1 === H.ak() && 1 === H.ao()) {
                        var q = A.i1(H.ag());
                        if (q && !T[q.al()])
                            for (var Z = this.a4(H, q), u = q.al(), L = T[u] = lq.d(Z + 1), f = L.length - 1; f >= 0; f--) L[f] = new Ed
                    }
                }
            for (var N = 0; N < this._ad.length; N++)
                for (var r = this._ad[N].ah(); r.i1(); r.i2()) {
                    var w = r.i6();
                    if (1 === w.ak() && 1 === w.ao()) {
                        var y = A.i1(w.ag());
                        if (y) {
                            var S = y.al(),
                                G = this.a4(w, y) - 1;
                            T[S][G].ae(w.ae())
                        }
                    } else
                        for (var t = w.ae(); t; t = t.a7()) {
                            var $ = A.i1(t);
                            $ && T[$.al()][this.a4(w, $) - 1].ae(t)
                        }
                }
            for (var o = this._ac.x9(); o.i1(); o.i2()) {
                var i = o.i9();
                if (T[i.al()])
                    for (var Q = i.ag(); Q; Q = Q.a8()) {
                        var U = A.i1(Q);
                        if (U)
                            for (var l = T[U.al()]; l[0].ay() > 0;) {
                                for (var v, D = 0;;) {
                                    v = l[D].am();var M = v.a3();
                                    if (1 !== M.ak() || 1 !== M.ao()) break;
                                    D++
                                }
                                var K = l[D].at().a3();
                                D--, K = v.a2(), v = l[D].at();
                                for (var m = v.a3(); D >= 0;)
                                    if (p[K.al()] !== p[m.al()] && (this._ab[K.al()] = p[m.al()]), K = K.ae().a2(), --D >= 0) {
                                        var g = l[D].at();
                                        m = g.a3()
                                    }
                            }
                    }
            }
            this.b1(), this._ac.xj(A)
        },
        i : function() {
            for (var i = this.f(), H = this.r(), P = lq.d(this._ac.x0()), A = 0; A < this._ad.length; A++)
                for (var g = this._ad[A].ah(); g.i1(); g.i2()) {
                    var j = g.i6();
                    if (1 === j.ak() && 1 === j.ao()) {
                        var x = i.i1(j.ae());
                        if (x && !P[x.al()])
                            for (var t = this.a4(x, j), p = P[x.al()] = lq.d(t + 1), R = p.length - 1; R >= 0; R--) p[R] = new Ed
                    }
                }
            for (var Q = this._ad.length - 1; Q >= 0; Q--)
                for (var h = this._ad[Q].ah(); h.i1(); h.i2()) {
                    var c = h.i6();
                    if (1 === c.ak() && 1 === c.ao()) {
                        var I = i.i1(c.ae());
                        I && P[I.al()][this.a4(I, c) - 1].ae(c.ag())
                    } else
                        for (var F = c.ag(); F; F = F.a8()) {
                            var N = i.i1(F);
                            N && P[N.al()][this.a4(N, c) - 1].ae(F)
                        }
                }
            for (var z = this._ac.x9(); z.i1(); z.i2()) {
                var y = z.i9();
                if (P[y.al()])
                    for (var J = y.ae(); J; J = J.a7()) {
                        var v = i.i1(J);
                        if (v)
                            for (var X = P[v.al()]; X[0].ay() > 0;) {
                                for (var Z, d = 0;;) {
                                    Z = X[d].am();var l = Z.a2();
                                    if (1 !== l.ak() || 1 !== l.ao()) break;
                                    d++
                                }
                                var a = X[d].at().a2();
                                d--, a = Z.a3(), Z = X[d].at();
                                for (var L = Z.a2(); d >= 0;)
                                    if (H[a.al()] !== H[L.al()] && (this._ab[a.al()] = H[L.al()]), a = a.ag().a3(), --d >= 0) {
                                        var Y = X[d].at();
                                        L = Y.a2()
                                    }
                            }
                    }
            }
            this.b1(), this._ac.xj(i)
        },
        a4 : function(E, z) {
            return this._ah.i2(E) - this._ah.i2(z)
        },
        l : function() {
            for (var x = nd.a6(lq.d(this._ac.xg())), X = this._ac.x9(); X.i1(); X.i2()) {
                var t = X.i9();
                if (t.ao() > 1) {
                    for (var d = 0, K = t.ag(); K; K = K.a8()) {
                        var j = K.a3();
                        1 === j.ak() && 1 === j.ao() && d++
                    }
                    if (d > 1)
                        for (var k = t.ag(); k; k = k.a8()) {
                            var b = k,
                                D = b.a3();
                            if (1 === D.ak() && 1 === D.ao()) {
                                for (; 1 === D.ak() && 1 === D.ao(); D = b.a3()) x.i8(b, t), b = D.ag();
                                x.i8(b, t)
                            }
                        }
                }
            }
            return x
        },
        f : function() {
            for (var P = nd.a6(lq.d(this._ac.xg())), Y = this._ac.x9(); Y.i1(); Y.i2()) {
                var I = Y.i9();
                if (I.ak() > 1) {
                    for (var A = 0, J = I.ae(); J; J = J.a7()) {
                        var G = J.a2();
                        1 === G.ak() && 1 === G.ao() && A++
                    }
                    if (A > 1)
                        for (var j = I.ae(); j; j = j.a7()) {
                            var V = j,
                                Z = V.a2();
                            if (1 === Z.ak() && 1 === Z.ao()) {
                                for (; 1 === Z.ak() && 1 === Z.ao(); Z = V.a2()) P.i8(V, I), V = Z.ae();
                                P.i8(V, I)
                            }
                        }
                }
            }
            return P
        },
        k : function() {
            for (var N = 1; N < this._ad.length; N++) {
                for (var T = this._ad[N], Z = T.ah(); Z.i1(); Z.i2()) {
                    var A = Z.i6();
                    this._n[A.al()] = this.a5(A, T.ay(), A.am(), this._ad[N - 1].ay()), this._n[A.al()] += this._ab[A.al()] / (3 * this._ad[N - 1].ay())
                }
                this.a3(T, this._p)
            }
            return this.a1()
        },
        a5 : function(d, n, h, f) {
            var t = 0;
            if (0 === h.i7())
                t = f * this._ab[d.al()] / n;else {
                for (; h.i1(); h.i2()) {
                    var u = h.i8();
                    t += u.a2() === d ? this._ab[u.a3().al()] : this._ab[u.a2().al()]
                }
                t /= h.i7()
            }
            return t
        },
        a7 : function(F) {
            lq.f(this._ab, F, F.length)
        },
        b3 : function(_) {
            lq.f(_, this._ab, _.length)
        },
        r : function() {
            var N = lq.a(this._ab.length);
            return this.a7(N), N
        },
        d : function() {
            for (var D = 0; D < this._ad.length; D++)
                for (var h = 0, k = this._ad[D].ah(); k.i1();) this._ab[k.i6().al()] = h, k.i2(), h++
        },
        b1 : function() {
            for (var X = 0; X < this._ad.length; X++) {
                for (var D = this._ad[X], k = D._b; k; k = k.a()) {
                    var H = k.d();
                    this._f[this._ab[H.al()]] = H
                }
                for (var Z = 0, x = D._b; x;) x.c(this._f[Z]), x = x.a(), Z++
            }
        },
        a3 : function(r, C) {
            for (var E = r.ah(), h = 0; h < r.ay(); E.i2()) this._f[h] = E.i6(), h++;
            lq.s(this._f, r.ay(), C);
            for (var P = 0, d = r._b; d;) d.c(this._f[P]), this._ab[this._f[P].al()] = P, d = d.a(), P++
        }
    }), sb.b = function(v, Y) {
        if (!v) return 0;
        var K = v.a() ? f(Y.x) : 0,
            Z = v.a() ? f(Y.y) : 0;
        return v.e() ? 1e4 - Z : v.f() ? -1e4 + Z : v.c() ? -2e4 - K : K
    }, sb.a = function(d, N) {
        if (!d) return 0;
        var T = d.a() ? f(N.x) : 0,
            z = d.a() ? f(N.y) : 0;
        return d.e() ? 1e4 + z : d.f() ? -1e4 - z : d.d() ? -2e4 - T : T
    };
    var Fn = function() {
        Fn.superClass.constructor.call(this), this._i6 = 0, this._i3 = 2147483647, this._i0 = 60, this._iz = 20, this._i2 = 20, this._i4 = 20, this.i5(!1), this._i7 = new Kp, this._i1 = new sb, this._i8 = new vr
    };
    w(Fn, Tr, {
        j2 : function() {
            return this._i2
        },
        i4 : function() {
            return !0
        },
        i3 : function(u) {
            this._i6 = (new Date).getTime(), Uj.d(u, !1);
            var p = u.xk(),
                t = u.xk(),
                D = u.xl(),
                f = new yc,
                x = new si(u, p, t, D);
            x.a6(this.j2()), this._i8.i3(this._iz), this._i8.i6(this._i0), this._i8.i4(this._i2), this._i8.i5(this._i4), this._i8.i2(t);
            for (var g = this._i7.i1(u, p, f), Y = f.c1(); Y.i1(); Y.i2()) {
                var M = Y.i8();
                D.i7(M, !0);var s = u.gn(M);
                u.gt(M, u.gk(M)), u.gz(M, s)
            }
            this.a2(u, p, t), g = x.a9(g);
            var K = this.j1(u, p, g);
            K = x.a5(K), K = x.b3(K), this._i8.i1(u, K, p), K = x.g2(K), x.e2(K), this.b(u, t), this.w(u), this.a1(u, f), x.e1(), u.xj(D), u.xi(t), u.xi(p)
        },
        j1 : function(r, l, v) {
            if (this._i1 instanceof sb) {
                var F = this._i1,
                    A = (new Date).getTime() - this._i6;
                F.ib(this._i3 - A)
            }
            var b = this._i1.ia(r, l, v);
            return b
        },
        a1 : function(Y, g) {
            for (var D = g.c1(); D.i1(); D.i2()) {
                var K = D.i8(),
                    Z = Y.gs(K),
                    q = Y.gl(K);
                Y.x3(K);var H = Y.gp(K);
                Y.s5(K, H.a()), Y.gy(K, Z), Y.gx(K, q)
            }
        },
        b : function(Z, N) {
            for (var m = Z.x9(); m.i1(); m.i2()) {
                var Y = m.i9(),
                    P = N.i1(Y);
                if (P && !Z.xp(P)) {
                    for (var s = Y.am().i8().a2(); N.i1(s); s = Y.am().i8().a2()) Y = s;
                    Z.u1(P);
                    for (var j = Y.ae(), z = new Ed; N.i1(j.a3()); j = j.a3().ag()) {
                        var I = Z.gs(j);
                        z.aa(I), z.az(Z.gf(j));var V = Z.gl(j);
                        V.equals(I) || z.aa(V)
                    }
                    var G = Z.gs(j);
                    z.aa(G), z.az(Z.gf(j));
                    var U = Z.gl(j);
                    U.equals(G) || z.aa(U), Z.m1(P, z)
                }
            }
            for (var T = Z.x9(); T.i1(); T.i2()) N.i1(T.i9()) && Z.x4(T.i9())
        },
        w : function(j) {
            for (var U = j.xf(); U.i1(); U.i2()) {
                var u = U.i8(),
                    P = j.g2(u);
                if (P.i1() > 0) {
                    var w = new J,
                        C = j.gc(u),
                        e = C.c(),
                        G = e.i6();
                    e.i2();
                    var W = G.x,
                        A = G.y;
                    if (e.i1()) {
                        var R = e.i6(),
                            y = R.x,
                            E = R.y;
                        for (e.i2(); e.i1(); e.i2()) {
                            var L = e.i6(),
                                _ = L.x,
                                S = L.y,
                                X = (W - _) * (E - S) / (A - S) + _;
                            $(X - y) >= 1 && (w.add(R), W = y, A = E), R = L, y = _, E = S
                        }
                    }
                    w.size() < P.i1() && j.s5(u, new o(w))
                }
            }
        },
        a2 : function(k, R, J) {
            var b = k.g8().c1();
            for (b.i5(); b.i1(); b.i3()) {
                var X = b.i8().a2(),
                    D = b.i8().a3(),
                    d = R.i2(D) - R.i2(X);
                if (d > 1) {
                    for (var I, O, M = X; d > 1; d--) I = k.xm(), k.s7(I, 1, 1), k.s4(I, Hh._A), O = k.xo(M, I), M === X && k.gt(O, k.gn(b.i8())), R.i7(I, R.i2(M) + 1), J.z1(I, b.i8()), M = I;
                    O = k.xo(I, D), k.gz(O, k.gk(b.i8())), k.h1(b.i8())
                }
            }
        }
    });
    var so = function(m, b, F, j) {
        this._i = 20, this._j = m, this._g = b, this._a = F, this._h = j
    };
    w(so, i, {
        a1 : function(E) {
            this._i = E
        },
        b2 : function(K) {
            return this._e ? this._e.i4(K) : !1
        },
        a3 : function(Q) {
            return this._f ? this._f.i1(Q) : j
        },
        d : function() {
            this._j.xi(this._f), this._j.xi(this._e)
        }
    });
    var $n = function() {
        this._c = 0, this._i = 0, this._g = 0, this._j = 0, this._f = 0, this._h = 0, this._d = 0, this._e = 0, this._a = 0, this._b = 0
    };
    w($n, i, {
        a : function() {
            return this._c - this._g - this._f - this._a
        },
        b : function() {
            return this._i + this._j + this._h + this._b
        }
    });
    var oi = function() {
        this._d = new yc, this._b = new yc, this._c = new yc, this._e = new yc
    };
    w(oi, i, {});
    var Uo = function(U, e, j, x, B, J, c, a) {
        this._d = U, this._a = e, this._b = j, this._h = x, this._f = B, this._c = J, this._e = c, this._g = a
    };
    w(Uo, i, {});
    var lq = {
        a : function(x, Y) {
            for (var h = [], y = 0; x > y; y++) h[y] = Y || 0;
            return h
        },
        b : function(n) {
            for (var X = [], x = 0; n > x; x++) X[x] = !1;
            return X
        },
        c : function(Z, e) {
            if (Z instanceof I) return Z.x < e.x ? -1 : Z.x > e.x ? 1 : Z.y < e.y ? -1 : Z.y <= e.y ? 0 : 1;
            if (Z instanceof Q) return e.width > Z.width ? -1 : e.width < Z.width ? 1 : e.height > Z.height ? -1 : e.height >= Z.height ? 0 : 1;
            if (Z instanceof s) return Z.x < e.x ? -1 : Z.x > e.x ? 1 : Z.y < e.y ? -1 : Z.y > e.y ? 1 : e.width > Z.width ? -1 : e.width < Z.width ? 1 : e.height > Z.height ? -1 : e.height >= Z.height ? 0 : 1;
            throw ""
        },
        d : function(I) {
            for (var k = [], W = 0; I > W; W++) k[W] = j;
            return k
        },
        e : function(V, W) {
            for (var $ = [], B = 0; V > B; B++) $[B] = lq.a(W);
            return $
        },
        f : function(q, G, T) {
            for (var X = 0; T > X; X++) G[X] = q[X]
        },
        s : function(V, f, A) {
            var d = [];
            lq.f(V, d, f), d.sort(A), lq.f(d, V, f)
        },
        n : function(r, Z) {
            return r - Z
        }
    };
    y.layout.AutoLayout = function(E) {
        E instanceof y.DataModel ? this.dm = E : this.gv = E
    }, w(b + "AutoLayout", i, {
        _repulsion : 1,
        _type : j,
        _offsetX : j,
        _offsetY : j,
        _xf : 0,
        _yf : 0,
        _animate : !0,
        _frames : j,
        _interval : j,
        _duration : j,
        _easing : j,
        isAnimate : function() {
            return this._animate
        },
        setAnimate : function(Y) {
            this._animate = Y
        },
        getFrames : function() {
            return this._frames
        },
        setFrames : function(y) {
            this._frames = y
        },
        getInterval : function() {
            return this._interval
        },
        setInterval : function(H) {
            this._interval = H
        },
        getDuration : function() {
            return this._duration
        },
        setDuration : function(f) {
            this._duration = f
        },
        getEasing : function() {
            return this._easing
        },
        setEasing : function(i) {
            this._easing = i
        },
        getRepulsion : function() {
            return this._repulsion
        },
        setRepulsion : function(e) {
            this._repulsion = e
        },
        getOffsetX : function() {
            return this._offsetX
        },
        setOffsetX : function(w) {
            this._offsetX = w
        },
        getOffsetY : function() {
            return this._offsetY
        },
        setOffsetY : function(L) {
            this._offsetY = L
        },
        getNodeSize : function(Q) {
            var k,
                H = this.gv;
            return Q.getChildrenRect && (k = Q.getChildrenRect(), k && c.grow(k, 15)), !k && H && H.getDataUIBounds && (k = H.getDataUIBounds(Q)), k || (k = Q.getRect(), c.grow(k, 15)), k
        },
        isLayoutable : function(T) {
            var w = this.gv;
            return w && !w.isVisible(T) ? !1 : T.s("layoutable") === !1 ? !1 : T instanceof A ? T.getSourceAgent() && T.getTargetAgent() && !T.isLooped() ? !0 : !1 : T instanceof R ? T.getHost() ? !1 : w ? w.isMovable(T) : !0 : !1
        },
        getType : function() {
            return this._type
        },
        getLayoutDatas : function() {
            var U,
                M = this,
                w = M.gv,
                D = M.dm,
                g = !1,
                b = new J;
            return w ? w.sm().size() > 1 ? (g = !0, U = w.sm().getSelection()) : U = w.dm().getDatas() : D.sm().size() > 1 ? (g = !0, U = D.sm().getSelection()) : U = D.getDatas(), M._xf = M._yf = p, U.each(function(F) {
                if (M.isLayoutable(F) && (b.add(F), g && F instanceof R)) {
                    var f = F.p();
                    f.x < M._xf && (M._xf = f.x), f.y < M._yf && (M._yf = f.y)
                }
            }), g || (M._xf = M._offsetX == j ? 50 : M._offsetX, M._yf = M._offsetY == j ? 50 : M._offsetY), b
        },
        getLayoutResult : function(P) {
            var k = {};
            return this.layoutImpl(P, j, k), k
        },
        layout : function(s, u) {
            return this.layoutImpl(s, u)
        },
        layoutImpl : function(i, t, n) {
            this._type = i;
            var a = this,
                u = {},
                s = Z(i),
                Q = a.getLayoutDatas(),
                G = new Ar(a, Q);
            if (!s) return !1;
            Q = G.p();
            var y = new dh(a, Q, i);
            try {
                s.i2(y)
            } catch (V) {
                return G.r(), t && t(), !1
            }
            var l,
                M,
                Y,
                f,
                R = y._a;
            for (l in R) M = R[l], f = y.g4(M), u[l] = {
                x : f.x + a._xf,
                y : f.y + a._yf
            };
            if (i === h || i === T || i === D) {
                var w,
                    N = L(i),
                    q = p,
                    v = p,
                    E = 2 * a._repulsion;
                for (l in u) M = R[l], Y = u[l], f = N.tf(Y), Y.x = f.x, Y.y = f.y, i === h || i === T ? (w = f.x - y.g9(M) / E, q > w && (q = w), w = f.y - y.gj(M) / E, v > w && (v = w)) : (w = f.x - y.gj(M) / E, q > w && (q = w), w = f.y - y.g9(M) / E, v > w && (v = w));
                for (l in u) M = R[l], Y = u[l], Y.x = Y.x - q + a._xf, Y.y = Y.y - v + a._yf
            }
            if (!n && a._animate) {
                var S = a.gv,
                    m = {};
                for (l in u) m[l] = R[l].node.p();
                S && (S._autoLayouting = 1), c.startAnim({
                    duration : a._duration,
                    frames : a._frames,
                    interval : a._interval,
                    easing : a._easing,
                    finishFunc : function() {
                        G.r(), t && t(), S && (
                            delete S._autoLayouting
                                , S.onAutoLayoutEnded())
                    },
                    action : function(D) {
                        for (l in u) {
                            var e = m[l],
                                p = u[l];
                            R[l].node.p(e.x + (p.x - e.x) * D, e.y + (p.y - e.y) * D)
                        }
                    }
                })
            } else {
                for (l in u) M = R[l], Y = u[l], n ? n[M.node.getId()] = Y : M.node.p(Y);
                G.r(), t && t()
            }
            return !0
        }
    })
}(this, Object);