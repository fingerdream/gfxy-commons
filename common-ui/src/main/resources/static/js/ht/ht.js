var noAlert = true;
var htl = '{\n\
"corp": "亿阳信通股份有限公司",\n\
"project": "综合资源管理系统",\n\
"start": "2014-10-27",\n\
"hashCode": "1f11db2f53e31a7de7c1e0c7c7c302a52e467079964d8bf690f916d249a20f346e103573ed5b416b57bde97fc1179aa513ab6173e9a3ab23295e572cc1d7c6a5802e6223dccd3c17a1baefb90eecc189e8c32f899b9c9274495fd92d86b3f39144b8f8f903b472762a98140ca4ffd7a896fdf288910b85eb546bd6bbf8554e86",\n\
"t1": "32532451194112",\n\
"t2": "1414454398844",\n\
"signature": "1a62da7a6ab6c76b599c08e34fed3ec0f870645741ce991a88054a5e9f278245e99ef5780576c2ba8c2b4d488e3481fae4a607023e4797befabc4cf8ce7510d84bd75cc097ac87a7a82d40c3e6705b13af016f323482c5c58c5e8f89afa2aa66b29aa3d5e8885c8c58e95bfa93e819ff5559dd98fc34b4fe169174746363c6c9"\n\
}';
!function(a, b, c) {
    "use strict";
    var d = "ht";
    if (!a[d]) {
        !function() {
            for (var b = 0, c = ["ms", "moz", "webkit", "o"], d = 0; d < c.length && !a.requestAnimationFrame; ++d)
                a.requestAnimationFrame = a[c[d] + "RequestAnimationFrame"],
                    a.cancelAnimationFrame = a[c[d] + "CancelAnimationFrame"] || a[c[d] + "CancelRequestAnimationFrame"];
            a.requestAnimationFrame || (a.requestAnimationFrame = function(c) {
                    var d = (new Date).getTime()
                        , e = Math.max(0, 16 - (d - b))
                        , f = a.setTimeout(function() {
                        c(d + e)
                    }, e);
                    return b = d + e,
                        f
                }
            ),
            a.cancelAnimationFrame || (a.cancelAnimationFrame = function(a) {
                    P(a)
                }
            )
        }();
        var e, f, g, h, i = a.document, j = null , k = a[d] = {}, l = a[d + "config"], m = k.Default = l && l.Default || {}, n = k.Style = l && l.Style || {}, o = k.Color = l && l.Color || {}, p = k.IsGetter = l && l.IsGetter || {}, q = Math, r = q.round, s = q.floor, t = q.ceil, u = q.sqrt, v = q.max, w = q.min, x = q.abs, y = q.cos, z = q.acos, A = q.sin, B = q.pow, C = q.asin, D = q.PI, E = 2 * D, F = D / 2, G = q.tan, H = q.atan2, I = q.random, J = !1, K = !1, L = a.parseInt || global.parseInt, M = "2015-12-15", N = function(a) {
                return a * a
            }
            , O = a.setTimeout, P = a.clearTimeout, Q = a.location, R = a.navigator ? a.navigator.userAgent.toLowerCase() : "", S = function(a) {
                return a.test(R)
            }
            , T = S(/msie/) || S(/trident/), U = S(/msie 10/), V = S(/firefox/), W = S(/mac/), X = m.isTouchable === c ? i ? "ontouchend"in i : !1 : m.isTouchable, Y = "default", Z = "single", $ = "multiple", _ = "front", aa = "back", ba = "left", ca = "right", da = "top", ea = "bottom", fa = "center", ga = "eye", ha = "middle", ia = "east", ja = "west", ka = "north", la = "none", ma = "px", na = "absolute", oa = "border", pa = "triangle", qa = "rect", ra = "circle", sa = "cylinder", ta = "shape", ua = "items", va = "normal", wa = "remove", xa = "clear", ya = "width", za = "height", Aa = "ingroup", Ba = "check", Ca = "uncheck", Da = "radio", Ea = "radioOn", Fa = "radioOff", Ga = "points", Ha = "values", Ia = "series", Ja = "body", Ka = "label", La = "label2", Ma = "note", Na = "note2", Oa = "icons", Pa = "labelFont", Qa = "labelColor", Ra = "labelSelectColor", Sa = "note.expanded", Ta = "note2.expanded", Ua = "edge.expanded", Va = "edge.points", Wa = "edge.type", Xa = "rotation", Ya = "getRotation", Za = "setRotation", $a = "hidden", _a = "visible", ab = "tuv", bb = "no", cb = "select", db = "currentSubGraph", eb = "selectBackground", fb = "autoMakeVisible", gb = "autoHideScrollBar", hb = "scrollBarColor", ib = "scrollBarSize", jb = "indent", kb = "rowHeight", lb = "columnLineColor", mb = "rowLineColor", nb = "columnLineVisible", ob = "rowLineVisible", pb = "visibleFunc", qb = "expandIcon", rb = "collapseIcon", sb = "checkMode", tb = "sortFunc", ub = "editable", vb = "batchEditable", wb = "tristate", xb = "asc", yb = "desc", zb = "position", Ab = "elevation", Bb = "children", Cb = "translateX", Db = "translateY", Eb = "dataModel", Fb = "shape3d", Gb = "shape3d.resolution", Hb = "shape3d.visible", Ib = "shape3d.from.visible", Jb = "shape3d.to.visible", Kb = "shape3d.top.visible", Lb = "shape3d.bottom.visible", Mb = "repeat.uv.length", Nb = "serializeValue", Ob = "deserializeValue", Pb = "centerUniform", Qb = "rgba(255,255,255,0)", Rb = "style", Sb = "attr", Tb = "field", Ub = "string", Vb = "boolean", Wb = "color", Xb = "int", Yb = "number", Zb = "ew-resize", $b = "ns-resize", _b = "pointer", ac = "auto", bc = "mousedown", cc = "mousemove", dc = "mouseup", ec = "mouseout", fc = "touchstart", gc = "touchmove", hc = "touchend", ic = "keydown", jc = "keyup", kc = V ? "DOMMouseScroll" : "mousewheel", lc = X ? [fc, gc, hc] : [ic, jc, bc, cc, dc, ec, kc, "contextmenu"], mc = j, nc = j, oc = j, pc = dc.length, qc = function() {
                oc && (P(oc.timeout),
                    oc = j)
            }
            , rc = function() {
                oc && _f(oc.e, oc.info)
            }
        ;
        a.addEventListener && (X || (a.addEventListener(ec, function() {
            qc()
        }, !1),
            a.addEventListener(kc, function() {
                ag()
            }, !1)),
            a.addEventListener(jc, function(a) {
                91 === a.keyCode ? Dc = {} : delete Dc[a.keyCode]
            }, !0),
            a.addEventListener(ic, function(a) {
                Dc[a.keyCode] = !0
            }, !0));
        var sc, tc, uc, vc = !1, wc = j, xc = j, yc = {}, zc = {}, Ac = {}, Bc = {}, Cc = {}, Dc = {}, Ec = {}, Fc = {}, Gc = {}, Hc = [], Ic = {}, Jc = j, Kc = j, Lc = function() {}
            , Mc = function() {
                throw "Oops!"
            }
            , Nc = [0, 0, 0], Oc = [0, 0, 0, 0], Pc = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, Qc = j, Rc = j, Sc = j, Tc = function(a) {
                Rc && !a._72O && (Sc || (Sc = {}),
                    Sc[a._72O = Bg()] = a),
                    sc != j ? Dd() < .05 && h && !tc && (ce = qc) : ce = id
            }
            , Uc = function(a, b, c, d) {
                Rc || (Rc = {});
                var e = Rc[a];
                if (e) {
                    if (e.url === b)
                        return;
                    e.image.onload = Lc,
                        e.image.onerror = Lc
                }
                var f = new Image;
                Rc[a] = {
                    image: f,
                    url: b
                },
                    f.onload = function() {
                        c && (f.width = c),
                        d && (f.height = d),
                            m.handleImageLoaded(a, f),
                            Vc(a, f)
                    }
                    ,
                    f.onerror = function() {
                        Vc(a, m.handleUnfoundImage(a, b) || j)
                    }
                    ,
                    f.src = b
            }
            , Vc = function(a, b) {
                if (zc[a] = b,
                        delete Rc[a],
                    zd(Rc) && (Rc = j,
                        Sc)) {
                    for (var c in Sc) {
                        var d = Sc[c];
                        d.invalidateAll && d.invalidateAll(),
                        d.redraw && d.redraw(),
                            d.iv(),
                            delete d._72O
                    }
                    Sc = j
                }
                if (b && Sc)
                    for (var c in Sc) {
                        var d = Sc[c];
                        d.invalidateAll && d.invalidateAll(),
                        d.redraw && d.redraw(),
                            d.iv()
                    }
            }
            , Wc = function() {
                return a.performance && a.performance.now ? a.performance.now() : Date.now()
            }
            , Xc = function(b, c) {
                c ? P(b) : a.cancelAnimationFrame(b)
            }
            , Yc = function(a, b, c) {
                return {
                    width: a,
                    height: b,
                    comps: ld(c) ? c : [c]
                }
            }
            , Zc = function(a, b) {
                return {
                    type: ra,
                    rect: [a, b, 1.6, 1.6],
                    borderWidth: 1,
                    borderColor: Gf,
                    gradient: $f,
                    gradientColor: Hf,
                    background: Gf
                }
            }
            , $c = function(a, b) {
                return Yc(16, 16, {
                    type: pa,
                    rect: [4, 4, 10, 8],
                    background: a,
                    rotation: b ? 1.57 : 3.14
                })
            }
            , _c = function(a, b) {
                return Yc(16, 16, {
                    type: pa,
                    rect: [4, 4, 8, 7],
                    background: a,
                    rotation: b ? 3.14 : 0
                })
            }
            , ad = function(a) {
                var b = a._orientation;
                return "horizontal" === b || "h" === b
            }
            , bd = function(a) {
                k.z = f = a
            }
            , cd = function(a) {
                var b = 2
                    , c = 0;
                for (var d in a)
                    d.length === b && L(d, 32) === ue && (Jc = Kc = a[d]),
                        c++;
                return c
            }
            , dd = function(a, b, c) {
                return c ? {
                    x: a - c,
                    y: b - c,
                    width: 2 * c + 1,
                    height: 2 * c + 1
                } : X ? {
                    x: a - 5,
                    y: b - 5,
                    width: 11,
                    height: 11
                } : {
                    x: a - 1,
                    y: b - 1,
                    width: 3,
                    height: 3
                }
            }
            , ed = function(a) {
                return (/ble$/.test(a) || /ed$/.test(a) || p[a] ? "is" : "get") + a.charAt(0).toUpperCase() + a.slice(1)
            }
            , fd = function(a) {
                return "set" + a.charAt(0).toUpperCase() + a.slice(1)
            }
            , gd = function(a) {
                return typeof a === Ub || a instanceof String
            }
            , hd = function(a) {
                return typeof a === Yb
            }
            , id = function(a) {
                return typeof a === Vb
            }
            , jd = function(a) {
                return a && "object" == typeof a
            }
            , kd = function(a) {
                return "function" == typeof a
            }
            , ld = function(a) {
                return a instanceof Array
            }
            , md = function(a) {
                return a instanceof Rh
            }
            , nd = function(a) {
                return ld(a) ? new Rh(a) : a
            }
            , od = function(a) {
                return a instanceof pj
            }
            , pd = function(a) {
                return a instanceof uj
            }
            , qd = function(a) {
                return a instanceof vj
            }
            , rd = function(a) {
                return a && "IFRAME" === a.tagName
            }
            , sd = function(a) {
                return a == j ? a : parseFloat(a.toFixed(2))
            }
            , td = function(a, b, c) {
                var d, e = b.length;
                if (c)
                    for (var f = 0; c > f; f++)
                        if (3 === e)
                            a.push(b[0]),
                                a.push(b[1]),
                                a.push(b[2]);
                        else
                            for (d = 0; e > d; d++)
                                a.push(b[d]);
                else if (3 === e)
                    a.push(b[0]),
                        a.push(b[1]),
                        a.push(b[2]);
                else
                    for (d = 0; e > d; d++)
                        a.push(b[d])
            }
            , ud = function(a) {
                return a ? jd(a) ? a : {} : !1
            }
            , vd = function(a, b, d) {
                var e, f = jd(a) ? a : a.prototype;
                for (e in b)
                    d && f[e] !== c || (f[e] = b[e]);
                return a
            }
            , wd = function(a) {
                return String.fromCharCode(a)
            }
            , xd = function(a) {
                for (var b, c = 0, d = ""; c < a.length; c++)
                    b = a[a.length - 1 - c],
                        "%" === b ? b = "'" : "a" === b ? b = '"' : "]" === b && (b = "\\"),
                        d += wd(b.charCodeAt(0) - 1);
                return d
            }
            , yd = function(a, b, c) {
                a.superClass.constructor.apply(b, c)
            }
            , zd = function(a) {
                for (var b in a)
                    return !1;
                return !0
            }
            , Ad = function(a) {
                return a ? 0 === a.length : !0
            }
            , Bd = function(a, b) {
                return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height
            }
            , Cd = function(a, b, c) {
                return b > a ? b : a > c ? c : a
            }
            , Dd = function() {
                var a = 1e4 * A(pc++);
                return a - s(a)
            }
            , Ed = function(a, b, c) {
                return Fd(a.x, a.y, b.x, b.y, c.x, c.y, c.x + c.width, c.y, !0) || Fd(a.x, a.y, b.x, b.y, c.x + c.width, c.y, c.x + c.width, c.y + c.height, !0) || Fd(a.x, a.y, b.x, b.y, c.x + c.width, c.y + c.height, c.x, c.y + c.height, !0) || Fd(a.x, a.y, b.x, b.y, c.x, c.y + c.height, c.x, c.y, !0)
            }
            , Fd = function(a, b, c, d, e, f, g, h, i) {
                var k = (g - e) * (b - f) - (h - f) * (a - e)
                    , l = (h - f) * (c - a) - (g - e) * (d - b);
                if (0 !== l) {
                    var m = k / l
                        , n = a + m * (c - a)
                        , o = b + m * (d - b);
                    return i && (n + ih < w(a, c) || n - ih > v(a, c) || n + ih < w(e, g) || n - ih > v(e, g) || o + ih < w(b, d) || o - ih > v(b, d) || o + ih < w(f, h) || o - ih > v(f, h)) ? j : [n, o]
                }
                return j
            }
            , Gd = function(a, b, d) {
                if (a && d)
                    if (b) {
                        if (b === Rb)
                            return a.getStyle(d);
                        if (b === Sb)
                            return a.getAttr(d);
                        if (b === Tb)
                            return a[d]
                    } else if (d = ed(d),
                            a[d])
                        return a[d]();
                return c
            }
            , Hd = function(a, b, c, d) {
                if (a && c)
                    if (b) {
                        if (b === Rb)
                            a.s(c, d);
                        else if (b === Sb)
                            a.a(c, d);
                        else if (b === Tb) {
                            var e = a[c];
                            a[c] = d,
                                a.fp("f:" + c, e, d)
                        }
                    } else
                        c = fd(c),
                        a[c] && a[c](d)
            }
            , Id = function(a, b, c, d, e) {
                b && Xe(a, c, d, 1, e, b)
            }
            , Jd = function(a, b, c, d) {
                var e = 1 - a;
                return e * e * b + 2 * a * e * c + a * a * d
            }
            , Kd = function(a, b, c, d, e) {
                var f = 1 - a;
                return f * f * f * b + 3 * f * f * a * c + 3 * f * a * a * d + a * a * a * e
            }
            , Ld = function(a) {
                var b, c, d, e, f = 0;
                return a.forEach(function(a) {
                    if (b = a.length,
                        b > 0)
                        for (c = a[0],
                                 e = 1; b > e; e++)
                            d = a[e],
                                f += Sg(c, d),
                                c = d
                }),
                    f
            }
            , Md = function(a, b, c) {
                var d = "__" + a
                    , e = function(b) {
                        c["handle_" + a](b)
                    }
                ;
                c[d] || (c[d] = e,
                    b.addEventListener(a, e, !1))
            }
            , Nd = function(a, b, c) {
                var d = "__" + a
                    , e = c[d];
                e && (b.removeEventListener(a, e, !1),
                    delete c[d])
            }
            , Od = function(a, b) {
                var c = "_" + b;
                a[ed(b)] = function() {
                    return this[c]
                }
                    ,
                    a[fd(b)] = function(a) {
                        var d = this[c];
                        this[c] = a,
                            this.fp(b, d, a)
                    }
            }
            , Pd = function(a) {
                return b.create(a)
            }
            , Qd = function(a) {
                if (!a.element) {
                    var b, c;
                    (b = a.textField) ? c = vg(Rm.TextField, b) : (b = a.textArea) ? c = vg(Rm.TextArea, b) : (b = a.button) ? c = vg(Rm.Button, b) : (b = a.comboBox) ? c = vg(Rm.ComboBox, b) : (b = a.checkBox) ? c = vg(Rm.CheckBox, b) : (b = a.radioButton) ? c = vg(Rm.RadioButton, b) : (b = a.slider) ? c = vg(Rm.Slider, b) : (b = a.colorPicker) ? c = vg(Rm.ColorPicker, b) : (b = a.image) && (c = vg(Rm.Image, b)),
                    c && (a.element = c)
                }
            }
            , Rd = function(a) {
                var b = i.createElement("div")
                    , c = b.style;
                return b.tabIndex = -1,
                    b.onkeydown = wg,
                    c.msTouchAction = la,
                    c.cursor = Y,
                    Td(b, j, 0),
                X && c.setProperty("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", j),
                a && (c.overflow = $a),
                    b
            }
            , Sd = function(a) {
                var b = i.createElement("canvas")
                    , c = b.style;
                return c.msTouchAction = la,
                    c.pointerEvents = la,
                    Td(b, j, 0),
                a && Wd(a, b),
                    b
            }
            , Td = function(a, b, c) {
                var d = a.style;
                d.border = b ? b + " solid 1px" : 0,
                    d.outline = 0,
                    d.padding = c ? "0 " + c + ma : 0,
                    Ud(a)
            }
            , Ud = function(a) {
                var b = a.style;
                b.position = na,
                    b.margin = 0,
                    b.setProperty("box-sizing", "border-box", j),
                    b.setProperty("-moz-box-sizing", "border-box", j)
            }
            , Vd = function(a, b, c, d) {
                d || (d = Xf),
                b != j && (a.width = b * d,
                    a.style.width = b + ma),
                c != j && (a.height = c * d,
                    a.style.height = c + ma)
            }
            , Wd = function(a, b, c) {
                a.appendChild(b),
                c && (b.style.position = na)
            }
            , Xd = function(a, b) {
                b.split || (b += "");
                for (var c, d = b.split("\n"), e = 0, f = d.length, g = 0; f > g; g++) {
                    var h = Kg(a.font, d[g]);
                    h.width > e && (e = h.width),
                    c || (c = h.height)
                }
                return a.ss = d,
                    {
                        width: e,
                        height: c * f
                    }
            }
            , Yd = function(a, b, c, d, e, f) {
                var g = b.length;
                if (1 === g)
                    Zd(a, b[0], c, d, e);
                else
                    for (var h = c.height / g, i = {
                        x: c.x,
                        y: c.y,
                        width: c.width,
                        height: h
                    }, j = 0; j < b.length; j++)
                        f ? Jg(a, b[j], d, e, i.x, i.y, i.width, i.height, f) : Zd(a, b[j], i, d, e),
                            i.y += h
            }
            , Zd = function(a, b, d, e, f) {
                a.font = e ? e : gg,
                    a.fillStyle = f ? f : eg,
                    a.textAlign = fa,
                    a.textBaseline = ha;
                var g, h;
                d ? d.width === c ? (g = d.x,
                    h = d.y) : (g = d.x + d.width / 2,
                    h = d.y + d.height / 2) : (g = 0,
                    h = 0),
                    a.fillText(b, r(g), r(h))
            }
            , $d = function(a) {
                a.getView && (a = a.getView());
                var b = a.offsetWidth || a.scrollWidth;
                return !b && a.style.width && (b = L(a.style.width)),
                    b
            }
            , _d = function(a) {
                a.getView && (a = a.getView());
                var b = a.offsetHeight || a.scrollHeight;
                return !b && a.style.height && (b = L(a.style.height)),
                    b
            }
            , ae = function() {
                var a = function(a) {
                    wg(a),
                        a.stopPropagation()
                }
                    , b = X ? [fc] : [ic, bc, kc];
                return function(c) {
                    var d = Rd()
                        , e = d.style;
                    return e.backgroundColor = m.disabledBackground,
                    c && (e.backgroundImage = "url(" + c + ")",
                        e.backgroundPosition = "50% 50%",
                        e.backgroundRepeat = "no-repeat no-repeat"),
                        b.forEach(function(b) {
                            d.addEventListener(b, a)
                        }),
                        d
                }
            }(), be = function(a) {
                var b = a.getContext("2d");
                return b.save(),
                    b.lineCap = cg,
                    b.lineJoin = dg,
                    b
            }
            , ce = function(a, b, c, d) {
                de(a, b * Xf, c * Xf),
                    d *= Xf,
                1 !== d && a.scale(d, d)
            }
            , de = function(a, b, c) {
                a.translate(b, c)
            }
            , ee = function(a, b) {
                a.rotate(b)
            }
            , fe = function(a) {
                if (i.activeElement !== a)
                    if (X)
                        a.focus();
                    else {
                        var b = Zg()
                            , c = b.target;
                        a.focus(),
                            c.scrollLeft = b.left,
                            c.scrollTop = b.top
                    }
            }
            , ge = function(a) {
                return a && a.getView ? a.getView() : a
            }
            , he = function(a, b, d, e, f) {
                2 === arguments.length && (d = b.y,
                    e = b.width,
                    f = b.height,
                    b = b.x);
                var g = ge(a)
                    , h = g.style;
                (i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement || i.msFullscreenElement) !== g && (b !== c && (h.left = b + ma),
                d !== c && (h.top = d + ma),
                e !== c && (h.width = e + ma),
                f !== c && (h.height = f + ma)),
                a.endEditing && !X && a.endEditing(),
                a.redraw && a.redraw(),
                a.invalidate && a.invalidate(),
                a.onLayouted && a.onLayouted(b, d, e, f),
                a._41O && a._41O("layout")
            }
            , ie = function(a) {
                var b = a.touches[0];
                return b ? b : a.changedTouches[0]
            }
            , je = function(a) {
                m.popup && m.popup.close(),
                    m.popup = a
            }
            , ke = j, le = function(a) {
                ke.handleWindowTouchMove(a)
            }
            , me = function(b) {
                ke.handleWindowTouchEnd(b),
                    a.removeEventListener(gc, le, !1),
                    a.removeEventListener(hc, me, !1),
                    ke = j
            }
            , ne = function(a) {
                ke.handleWindowMouseMove(a)
            }
            , oe = function(b) {
                ke.handleWindowMouseUp(b),
                    a.removeEventListener(cc, ne, !1),
                    a.removeEventListener(dc, oe, !1),
                    ke = j
            }
            , pe = function(a) {
                return 1 === Mg(a)
            }
            , qe = function(a, b) {
                return b ? b.keyCode === a : Dc[a]
            }
            , re = function(a) {
                return Pg(a) && qe(65, a)
            }
            , se = function(a) {
                return qe(46, a) || qe(8, a)
            }
            , te = function(a) {
                return function(b) {
                    return b ? b.keyCode === a : Dc[a]
                }
            }
            , ue = 573, ve = [65, 83, 68, 87, 37, 38, 39, 40, 32, 13, 27], we = te(ve[0]), xe = te(ve[1]), ye = te(ve[2]), ze = te(ve[3]), Ae = te(ve[4]), Be = te(ve[5]), Ce = te(ve[6]), De = te(ve[7]), Ee = te(ve[8]), Fe = te(ve[9]), Ge = te(ve[10]), He = {
                65: 1,
                83: 1,
                68: 1,
                87: 1,
                37: 1,
                38: 1,
                39: 1,
                40: 1
            }, Ie = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 5, 5, 5, 5, 5, 1049], Je = j, Ke = j, Le = function(a, b) {
                Je || (Je = Sd()),
                    Vd(Je, a, b, 1);
                var c = be(Je);
                return c.clearRect(0, 0, a, b),
                    c
            }
            , Me = function() {
                var a, b = {};
                return function(c) {
                    var d, e = b[c];
                    return e || (a || (a = Sd(),
                        Vd(a, 1, 1, 1)),
                        d = a.getContext("2d"),
                        d.clearRect(0, 0, 1, 1),
                        Xe(d, 0, 0, 1, 1, c),
                        e = d.getImageData(0, 0, 1, 1).data,
                        e = b[c] = [e[0], e[1], e[2], e[3]]),
                        e
                }
            }(), Ne = function(a) {
                if (!gd(a))
                    return a;
                var b = Me(a);
                return b.CA || (b.CA = [b[0] / 255, b[1] / 255, b[2] / 255, b[3] / 255]),
                    b.CA
            }
            , Oe = function(a, b, c, d) {
                var e = Sd();
                e.width = c,
                    e.height = d;
                var f = e.getContext("2d");
                f.drawImage(a, 0, 0, c, d);
                try {
                    for (var g = f.getImageData(0, 0, c, d), h = g.data, i = 0, j = h.length; j > i; i += 4) {
                        var k = h[i + 0]
                            , l = h[i + 1]
                            , m = h[i + 2];
                        h[i + 0] = b[0] * k,
                            h[i + 1] = b[1] * l,
                            h[i + 2] = b[2] * m
                    }
                    f.putImageData(g, 0, 0)
                } catch (n) {
                    return a
                }
                return e
            }
            , Pe = function(a, b, c) {
                return b && (b = "miter" === c ? 8 * b + 20 : b + 1,
                a && $g(a, b)),
                    b
            }
            , Qe = function(a, b) {
                if (b) {
                    var c = new jf(b)
                        , d = a.width / 2
                        , e = a.height / 2
                        , f = Tg([c.tf(-d, -e), c.tf(d, -e), c.tf(d, e), c.tf(-d, e)]);
                    return f.x += a.x + d,
                        f.y += a.y + e,
                        f
                }
                return a
            }
            , Re = function(a, b, c, d, e, f, g, h) {
                d *= Math.PI / 180;
                var i = {
                    x: Math.cos(d) * (a.x - g.x) / 2 + Math.sin(d) * (a.y - g.y) / 2,
                    y: -Math.sin(d) * (a.x - g.x) / 2 + Math.cos(d) * (a.y - g.y) / 2
                }
                    , j = Math.pow(i.x, 2) / Math.pow(b, 2) + Math.pow(i.y, 2) / Math.pow(c, 2);
                j > 1 && (b *= Math.sqrt(j),
                    c *= Math.sqrt(j));
                var k = (e == f ? -1 : 1) * Math.sqrt((Math.pow(b, 2) * Math.pow(c, 2) - Math.pow(b, 2) * Math.pow(i.y, 2) - Math.pow(c, 2) * Math.pow(i.x, 2)) / (Math.pow(b, 2) * Math.pow(i.y, 2) + Math.pow(c, 2) * Math.pow(i.x, 2)));
                isNaN(k) && (k = 0);
                var l = {
                    x: k * b * i.y / c,
                    y: k * -c * i.x / b
                }
                    , m = {
                    x: (a.x + g.x) / 2 + Math.cos(d) * l.x - Math.sin(d) * l.y,
                    y: (a.y + g.y) / 2 + Math.sin(d) * l.x + Math.cos(d) * l.y
                }
                    , n = function(a) {
                    return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2))
                }
                    , o = function(a, b) {
                    return (a[0] * b[0] + a[1] * b[1]) / (n(a) * n(b))
                }
                    , p = function(a, b) {
                    return (a[0] * b[1] < a[1] * b[0] ? -1 : 1) * Math.acos(o(a, b))
                }
                    , q = p([1, 0], [(i.x - l.x) / b, (i.y - l.y) / c])
                    , r = [(i.x - l.x) / b, (i.y - l.y) / c]
                    , s = [(-i.x - l.x) / b, (-i.y - l.y) / c]
                    , t = p(r, s);
                o(r, s) <= -1 && (t = Math.PI),
                o(r, s) >= 1 && (t = 0);
                var o = b > c ? b : c
                    , u = b > c ? 1 : b / c
                    , v = b > c ? c / b : 1;
                if (null == h) {
                    var w = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                    $g(w, o),
                        w.x *= u,
                        w.width *= u,
                        w.y *= v,
                        w.height *= v;
                    var x = new jf(d);
                    return w = Tg([x.tf(w.x, w.y), x.tf(w.x + w.width, w.y), x.tf(w.x + w.width, w.y + w.height), x.tf(w.x, w.y + w.height)]),
                        w.x += m.x,
                        w.y += m.y,
                        [{
                            x: w.x,
                            y: w.y
                        }, {
                            x: w.x + w.width,
                            y: w.y
                        }, {
                            x: w.x + w.width,
                            y: w.y + w.height
                        }, {
                            x: w.x,
                            y: w.y + w.height
                        }]
                }
                h.translate(m.x, m.y),
                    h.rotate(d),
                    h.scale(u, v),
                    h.arc(0, 0, o, q, q + t, 1 - f),
                    h.scale(1 / u, 1 / v),
                    h.rotate(-d),
                    h.translate(-m.x, -m.y)
            }
            , Se = function(a, b) {
                a && a.beginPath();
                for (var c, d, e, f = [], g = function(a) {
                    for (var b, c = /(\-{0,1}[\d\.]+)/gi, d = []; b = c.exec(a); )
                        d.push(parseFloat(b[0]));
                    return d
                }
                         , h = /([MmLlHhVvCcSsQqTtAa]{1}[\d\.,\s\-Zz]*)/gi, i = {
                        x: 0,
                        y: 0
                    }; c = h.exec(b); ) {
                    var j = c[0]
                        , k = j.substr(0, 1);
                    if ("M" === k || "m" === k) {
                        for (var l = g(j), m = 0; m < l.length; m += 2) {
                            var n = l[m]
                                , o = l[m + 1];
                            "m" === k && (n += i.x,
                                o += i.y),
                            a && a.moveTo(n, o),
                                f.push({
                                    x: n,
                                    y: o
                                }),
                                i.x = n,
                                i.y = o
                        }
                        d = e = null
                    } else if ("H" === k || "h" === k) {
                        for (var l = g(j), m = 0; m < l.length; m += 1) {
                            var n = l[m];
                            "h" === k && (n += i.x),
                            a && a.lineTo(n, i.y),
                                f.push({
                                    x: n,
                                    y: i.y
                                }),
                                i.x = n
                        }
                        d = e = null
                    } else if ("C" === k || "c" === k) {
                        for (var l = g(j), m = 0; m < l.length; m += 6) {
                            var p = l[m]
                                , q = l[m + 1]
                                , r = l[m + 2]
                                , s = l[m + 3]
                                , n = l[m + 4]
                                , o = l[m + 5];
                            "c" === k && (p += i.x,
                                q += i.y,
                                r += i.x,
                                s += i.y,
                                n += i.x,
                                o += i.y),
                            a && a.bezierCurveTo(p, q, r, s, n, o),
                                f.push({
                                    x: p,
                                    y: q
                                }),
                                f.push({
                                    x: r,
                                    y: s
                                }),
                                f.push({
                                    x: n,
                                    y: o
                                }),
                                i.x = n,
                                i.y = o
                        }
                        d = [p, q, r, s, n, o],
                            e = null
                    } else if ("S" === k || "s" === k) {
                        for (var l = g(j), m = 0; m < l.length; m += 4) {
                            var p, q;
                            d ? (p = 2 * d[4] - d[2],
                                q = 2 * d[5] - d[3]) : (p = i.x,
                                q = i.y);
                            var r = l[m]
                                , s = l[m + 1]
                                , n = l[m + 2]
                                , o = l[m + 3];
                            "s" === k && (r += i.x,
                                s += i.y,
                                n += i.x,
                                o += i.y),
                            a && a.bezierCurveTo(p, q, r, s, n, o),
                                f.push({
                                    x: p,
                                    y: q
                                }),
                                f.push({
                                    x: r,
                                    y: s
                                }),
                                f.push({
                                    x: n,
                                    y: o
                                }),
                                i.x = n,
                                i.y = o
                        }
                        d = [p, q, r, s, n, o],
                            e = null
                    } else if ("Q" === k || "q" === k) {
                        for (var l = g(j), m = 0; m < l.length; m += 4) {
                            var p = l[m]
                                , q = l[m + 1]
                                , n = l[m + 2]
                                , o = l[m + 3];
                            "q" === k && (p += i.x,
                                q += i.y,
                                n += i.x,
                                o += i.y),
                            a && a.quadraticCurveTo(p, q, n, o),
                                f.push({
                                    x: p,
                                    y: q
                                }),
                                f.push({
                                    x: n,
                                    y: o
                                }),
                                i.x = n,
                                i.y = o
                        }
                        d = null ,
                            e = [p, q, n, o]
                    } else if ("T" === k || "t" === k) {
                        for (var l = g(j), m = 0; m < l.length; m += 2) {
                            var p, q;
                            e ? (p = 2 * e[2] - e[0],
                                q = 2 * e[3] - e[1]) : (p = i.x,
                                q = i.y);
                            var n = l[m]
                                , o = l[m + 1];
                            "t" === k && (n += i.x,
                                o += i.y),
                            a && a.quadraticCurveTo(p, q, n, o),
                                f.push({
                                    x: p,
                                    y: q
                                }),
                                f.push({
                                    x: n,
                                    y: o
                                }),
                                i.x = n,
                                i.y = o
                        }
                        d = null ,
                            e = [p, q, n, o]
                    } else if ("V" === k || "v" === k) {
                        for (var l = g(j), m = 0; m < l.length; m += 1) {
                            var o = l[m];
                            "v" === k && (o += i.y),
                            a && a.lineTo(i.x, o),
                                f.push({
                                    x: i.x,
                                    y: o
                                }),
                                i.y = o
                        }
                        d = e = null
                    } else if ("L" === k || "l" === k) {
                        for (var l = g(j), m = 0; m < l.length; m += 2) {
                            var n = l[m]
                                , o = l[m + 1];
                            "l" === k && (n += i.x,
                                o += i.y),
                            a && a.lineTo(n, o),
                                f.push({
                                    x: n,
                                    y: o
                                }),
                                i.x = n,
                                i.y = o
                        }
                        d = e = null
                    } else if ("A" === k || "a" === k) {
                        for (var l = g(j), m = 0; m < l.length; m += 7) {
                            var t = l[m]
                                , u = l[m + 1]
                                , v = l[m + 2]
                                , w = l[m + 3]
                                , x = l[m + 4]
                                , n = l[m + 5]
                                , o = l[m + 6];
                            "a" === k && (n += i.x,
                                o += i.y);
                            var y = Re(i, t, u, v, w, x, {
                                x: n,
                                y: o
                            }, a);
                            y && (f = f.concat(y)),
                                i.x = n,
                                i.y = o
                        }
                        d = e = null
                    }
                    var z = j.substr(j.length - 1);
                    ("z" === z || "Z" === z) && a && a.closePath()
                }
                return f
            }
            , Te = function(a, b, c, d) {
                var e = !1;
                if (a.beginPath ? a.beginPath() : e = !0,
                    md(b) && (b = b._as),
                    md(c) && (c = c._as),
                    c && c.length) {
                    for (var f, g, h, i, j = 0, k = 0, l = c.length; l > k; k++)
                        f = c[k],
                            1 === f ? (g = b[j++],
                                a.moveTo(g.x, e ? -g.y : g.y)) : 2 === f ? (g = b[j++],
                                a.lineTo(g.x, e ? -g.y : g.y)) : 3 === f ? (g = b[j++],
                                h = b[j++],
                                a.quadraticCurveTo(g.x, e ? -g.y : g.y, h.x, e ? -h.y : h.y)) : 4 === f ? (g = b[j++],
                                h = b[j++],
                                i = b[j++],
                                a.bezierCurveTo(g.x, e ? -g.y : g.y, h.x, e ? -h.y : h.y, i.x, e ? -i.y : i.y)) : 5 === f && a.closePath();
                    d && 5 !== f && a.closePath()
                } else {
                    var m, n, o, p = b.length;
                    if (p > 0) {
                        for (m = b[0],
                                 a.moveTo(m.x, e ? -m.y : m.y),
                                 n = 1; p > n; n++)
                            o = b[n],
                                a.lineTo(o.x, e ? -o.y : o.y);
                        d && a.closePath()
                    }
                }
            }
            , Ue = function(a, b, c, d) {
                if (md(a) && (a = a._as),
                    md(b) && (b = b._as),
                    b && b.length) {
                    c = c || dh;
                    for (var e, f, g, h, i, k, l = [], m = j, n = 0, o = 0, p = b.length; p > o; o++)
                        if (e = b[o],
                            1 === e)
                            l.push(m = []),
                                m.push(a[n++]);
                        else if (2 === e)
                            m.push(a[n++]);
                        else if (3 === e)
                            for (f = m[m.length - 1],
                                     g = a[n++],
                                     h = a[n++],
                                     k = 1; c >= k; k++)
                                m.push({
                                    x: Jd(k / c, f.x, g.x, h.x),
                                    y: Jd(k / c, f.y, g.y, h.y)
                                });
                        else if (4 === e)
                            for (f = m[m.length - 1],
                                     g = a[n++],
                                     h = a[n++],
                                     i = a[n++],
                                     k = 1; c >= k; k++)
                                m.push({
                                    x: Kd(k / c, f.x, g.x, h.x, i.x),
                                    y: Kd(k / c, f.y, g.y, h.y, i.y)
                                });
                        else
                            5 === e && m.push(m[0]);
                    return d && 5 !== e && m && m.length > 2 && m.push(m[0]),
                        l
                }
                return d && a.length > 2 && (a = a.slice(),
                    a.push(a[0])),
                    a ? [a] : []
            }
            , Ve = function(a, b, c, d, e, f) {
                var g, h, i, j = Me(b), k = d, l = j[0], m = j[1], n = j[2];
                if (c) {
                    var o = Me(c);
                    g = o[0] - l,
                        h = o[1] - m,
                        i = o[2] - n
                } else
                    g = 255 - l,
                        h = 255 - m,
                        i = 255 - n;
                for (f || (f = d > 10 ? 1 : .5,
                    f = 1 > e ? w(f / e, 2) : f); (d -= f) > 0; ) {
                    var p = 1 - d / k
                        , q = l + g * p
                        , r = m + h * p
                        , s = n + i * p;
                    q = w(t(q), 255),
                        r = w(t(r), 255),
                        s = w(t(s), 255),
                        a.strokeStyle = "rgb(" + q + "," + r + "," + s + ")",
                        a.lineWidth = d,
                        a.stroke()
                }
            }
            , We = function() {
                var a = {};
                return function(b, c) {
                    var d = b + "-" + c
                        , e = a[d];
                    if (e)
                        return e;
                    var f, g, h, i = Me(b);
                    return 0 > c ? (c = (100 + c) / 100,
                        f = t(i[0] * c),
                        g = t(i[1] * c),
                        h = t(i[2] * c)) : (c /= 100,
                        f = i[0],
                        g = i[1],
                        h = i[2],
                        f += (255 - f) * c,
                        g += (255 - g) * c,
                        h += (255 - h) * c,
                        f = w(t(f), 255),
                        g = w(t(g), 255),
                        h = w(t(h), 255)),
                        a[d] = "rgb(" + f + "," + g + "," + h + ")"
                }
            }(), Xe = function(a, b, c, d, e, f) {
                f && (a.fillStyle = f),
                    a.beginPath(),
                    a.rect(b, c, d, e),
                    a.fill()
            }
            , Ye = function(a, b, c, d, e, f, g) {
                a.beginPath(),
                    hf[b](a, c.x, c.y, c.width, c.height, d, e, f, g)
            }
            , Ze = function(a, b, c, d, e) {
                var f = hf[c];
                a.fillStyle = f ? f(a, b, d ? d : Hf, e.x, e.y, e.width, e.height) : b
            }
            , $e = function(a, b) {
                a.fillStyle = a.createPattern(b, "repeat")
            }
            , _e = function(a, b, c, d, e, f, g, h) {
                var i, j, k, l, m, n, o, p, q, r, s;
                if (x(e) > 2 * D && (e = 2 * D),
                        m = t(x(e) / (D / 4)),
                        i = e / m,
                        j = -i,
                        k = -d,
                    m > 0) {
                    n = b + y(d) * f,
                        o = c + A(-d) * g,
                        h ? a.lineTo(n, o) : a.moveTo(n, o);
                    for (var u = 0; m > u; u++)
                        k += j,
                            l = k - j / 2,
                            p = b + y(k) * f,
                            q = c + A(k) * g,
                            r = b + y(l) * (f / y(j / 2)),
                            s = c + A(l) * (g / y(j / 2)),
                            a.quadraticCurveTo(r, s, p, q)
                }
            }
            , af = function(a, b, c, d, e, f, g, h, i) {
                6 === arguments.length && (g = f,
                    h = f,
                    i = f);
                var j = b + d
                    , k = c + e
                    , l = e > d ? 2 * d : 2 * e;
                f = l > f ? f : l,
                    g = l > g ? g : l,
                    h = l > h ? h : l,
                    i = l > i ? i : l;
                var m = .29 * i
                    , n = .58 * i;
                a.moveTo(j, k - i),
                    a.quadraticCurveTo(j, k - n, j - m, k - m),
                    a.quadraticCurveTo(j - n, k, j - i, k),
                    m = .29 * h,
                    n = .58 * h,
                    a.lineTo(b + h, k),
                    a.quadraticCurveTo(b + n, k, b + m, k - m),
                    a.quadraticCurveTo(b, k - n, b, k - h),
                    m = .29 * f,
                    n = .58 * f,
                    a.lineTo(b, c + f),
                    a.quadraticCurveTo(b, c + n, b + m, c + m),
                    a.quadraticCurveTo(b + n, c, b + f, c),
                    m = .29 * g,
                    n = .58 * g,
                    a.lineTo(j - g, c),
                    a.quadraticCurveTo(j - n, c, j - m, c + m),
                    a.quadraticCurveTo(j, c + n, j, c + g),
                    a.lineTo(j, k - i)
            }
            , bf = function(a, b, c, d, e, f, g) {
                b && (c = r(c),
                    d = r(d),
                g || (g = 1),
                    a.fillStyle = b,
                    a.beginPath(),
                    a.rect(c, d, g, f),
                    a.rect(c, d, e, g),
                    a.rect(c, d + f - g, e, g),
                    a.rect(c + e - g, d, g, f),
                    a.fill())
            }
            , cf = function(a, b, c, d) {
                var e = d.x
                    , f = d.y
                    , g = d.width
                    , h = d.height;
                if (!(!b || !c || 0 >= g || 0 >= h)) {
                    var i, j = Hg(b), k = Ig(b), l = c > 0;
                    1 === c || -1 === c ? (a.fillStyle = l ? j : k,
                        a.beginPath(),
                        a.rect(e, f, 1, h),
                        a.rect(e, f, g, 1),
                        a.fill(),
                        a.fillStyle = l ? k : j,
                        a.beginPath(),
                        a.rect(e, f + h - 1, g, 1),
                        a.rect(e + g - 1, f, 1, h),
                        a.fill()) : (c = w(x(c), w(g / 2, h / 2)),
                        i = a.createLinearGradient(e, f, e + c, f),
                        i.addColorStop(0, l ? j : k),
                        i.addColorStop(1, b),
                        a.fillStyle = i,
                        a.beginPath(),
                        a.moveTo(e, f),
                        a.lineTo(e + c, f + c),
                        a.lineTo(e + c, f + h - c),
                        a.lineTo(e, f + h),
                        a.lineTo(e, f),
                        a.fill(),
                        i = a.createLinearGradient(e, f, e, f + c),
                        i.addColorStop(0, l ? j : k),
                        i.addColorStop(1, b),
                        a.fillStyle = i,
                        a.beginPath(),
                        a.moveTo(e, f),
                        a.lineTo(e + c, f + c),
                        a.lineTo(e + g - c, f + c),
                        a.lineTo(e + g, f),
                        a.lineTo(e, f),
                        a.fill(),
                        i = a.createLinearGradient(e, f + h, e, f + h - c),
                        i.addColorStop(0, l ? k : j),
                        i.addColorStop(1, b),
                        a.fillStyle = i,
                        a.beginPath(),
                        a.moveTo(e, f + h),
                        a.lineTo(e + c, f + h - c),
                        a.lineTo(e + g - c, f + h - c),
                        a.lineTo(e + g, f + h),
                        a.lineTo(e, f + h),
                        a.fill(),
                        i = a.createLinearGradient(e + g, f, e + g - c, f),
                        i.addColorStop(0, l ? k : j),
                        i.addColorStop(1, b),
                        a.fillStyle = i,
                        a.beginPath(),
                        a.moveTo(e + g, f),
                        a.lineTo(e + g - c, f + c),
                        a.lineTo(e + g - c, f + h - c),
                        a.lineTo(e + g, f + h),
                        a.lineTo(e + g, f),
                        a.fill())
                }
            }
            , df = function(a, b, c, d, e, f, g) {
                var h = a.createLinearGradient(d, e, f, g);
                return h.addColorStop(0, c),
                    h.addColorStop(1, b),
                    h
            }
            , ef = function(a, b, c, d, e, f, g) {
                var h = a.createLinearGradient(d, e, f, g);
                return h.addColorStop(0, b),
                    h.addColorStop(.5, c),
                    h.addColorStop(1, b),
                    h
            }
            , ff = function(a, b, c, d, e, f, g) {
                var h = a.createLinearGradient(d, e, f, g);
                return h.addColorStop(0, b),
                    h.addColorStop(1 / 3, c),
                    h.addColorStop(2 / 3, b),
                    h.addColorStop(1, c),
                    h
            }
            , gf = function(a, b, c, d, e, f, g, h, i) {
                var j = a.createRadialGradient(d + f * h, e + g * i, w(f, g) / 24, d + f / 2, e + g / 2, v(f, g) / 2);
                return j.addColorStop(0, c),
                    j.addColorStop(1, b),
                    j
            }
            , hf = {
                polygon: function(a, b, c, d, e, f) {
                    (f == j || 3 > f) && (f = 6);
                    for (var g, h, i = w(d, e) / 2, k = b + d / 2, l = c + e / 2, m = 0, n = 2 * D / f, o = 0; f > o; o++)
                        g = k + y(m) * i,
                            h = l + A(m) * i,
                            0 === o ? a.moveTo(g, h) : a.lineTo(g, h),
                            m += n;
                    a.closePath()
                },
                arc: function(a, b, c, d, e, f, g, h, i) {
                    f == j && (f = D),
                    g == j && (g = E),
                    h == j && (h = !0);
                    var k = b + d / 2
                        , l = c + e / 2;
                    h && a.moveTo(k, l),
                        i ? (f = -f,
                            g = -g,
                            _e(a, k, l, f, g - f, d / 2, e / 2, !0)) : a.arc(k, l, w(d, e) / 2, f, g),
                    h && a.closePath()
                },
                rect: function(a, b, c, d, e) {
                    a.rect(b, c, d, e)
                },
                circle: function(a, b, c, d, e) {
                    a.arc(b + d / 2, c + e / 2, w(d, e) / 2, 0, E, !0)
                },
                oval: function(a, b, c, d, e) {
                    _e(a, b + d / 2, c + e / 2, 0, E, d / 2, e / 2, !1)
                },
                roundRect: function(a, b, c, d, e, f) {
                    f == j && (f = w(w(d, e) / 4, 8)),
                        af(a, b, c, d, e, f)
                },
                star: function(a, b, c, d, e) {
                    var f = 2 * d
                        , g = 2 * e
                        , h = b + d / 2
                        , i = c + e / 2;
                    a.moveTo(h - f / 4, i - g / 12),
                        a.lineTo(b + .306 * d, c + .579 * e),
                        a.lineTo(h - f / 6, i + g / 4),
                        a.lineTo(b + d / 2, c + .733 * e),
                        a.lineTo(h + f / 6, i + g / 4),
                        a.lineTo(b + .693 * d, c + .579 * e),
                        a.lineTo(h + f / 4, i - g / 12),
                        a.lineTo(b + .611 * d, c + .332 * e),
                        a.lineTo(h + 0, i - g / 4),
                        a.lineTo(b + .388 * d, c + .332 * e),
                        a.closePath()
                },
                triangle: function(a, b, c, d, e) {
                    a.moveTo(b + d / 2, c),
                        a.lineTo(b + d, c + e),
                        a.lineTo(b, c + e),
                        a.closePath()
                },
                hexagon: function(a, b, c, d, e) {
                    a.moveTo(b, c + e / 2),
                        a.lineTo(b + d / 4, c + e),
                        a.lineTo(b + 3 * d / 4, +c + e),
                        a.lineTo(b + d, c + e / 2),
                        a.lineTo(b + 3 * d / 4, c),
                        a.lineTo(b + d / 4, c),
                        a.closePath()
                },
                pentagon: function(a, b, c, d, e) {
                    var f = 2 * d
                        , g = 2 * e
                        , h = b + d / 2
                        , i = c + e / 2;
                    a.moveTo(h - f / 4, i - g / 12),
                        a.lineTo(h - f / 6, i + g / 4),
                        a.lineTo(h + f / 6, i + g / 4),
                        a.lineTo(h + f / 4, i - g / 12),
                        a.lineTo(h + 0, i - g / 4),
                        a.closePath()
                },
                diamond: function(a, b, c, d, e) {
                    a.moveTo(b + d / 2, c),
                        a.lineTo(b, c + e / 2),
                        a.lineTo(b + d / 2, c + e),
                        a.lineTo(b + d, c + e / 2),
                        a.closePath()
                },
                rightTriangle: function(a, b, c, d, e) {
                    a.moveTo(b, c),
                        a.lineTo(b + d, c + e),
                        a.lineTo(b, c + e),
                        a.closePath()
                },
                parallelogram: function(a, b, c, d, e) {
                    var f = d / 4;
                    a.moveTo(b + f, c),
                        a.lineTo(b + d, c),
                        a.lineTo(b + d - f, c + e),
                        a.lineTo(b, c + e),
                        a.closePath()
                },
                trapezoid: function(a, b, c, d, e) {
                    var f = d / 4;
                    a.moveTo(b + f, c),
                        a.lineTo(b + d - f, c),
                        a.lineTo(b + d, c + e),
                        a.lineTo(b, c + e),
                        a.closePath()
                },
                "linear.southwest": function(a, b, c, d, e, f, g) {
                    return df(a, b, c, d, e + g, d + f, e)
                },
                "linear.southeast": function(a, b, c, d, e, f, g) {
                    return df(a, b, c, d + f, e + g, d, e)
                },
                "linear.northwest": function(a, b, c, d, e, f, g) {
                    return df(a, b, c, d, e, d + f, e + g)
                },
                "linear.northeast": function(a, b, c, d, e, f, g) {
                    return df(a, b, c, d + f, e, d, e + g)
                },
                "linear.north": function(a, b, c, d, e, f, g) {
                    return df(a, b, c, d, e, d, e + g)
                },
                "linear.south": function(a, b, c, d, e, f, g) {
                    return df(a, b, c, d, e + g, d, e)
                },
                "linear.west": function(a, b, c, d, e, f) {
                    return df(a, b, c, d, e, d + f, e)
                },
                "linear.east": function(a, b, c, d, e, f) {
                    return df(a, b, c, d + f, e, d, e)
                },
                "radial.center": function(a, b, c, d, e, f, g) {
                    return gf(a, b, c, d, e, f, g, .5, .5)
                },
                "radial.southwest": function(a, b, c, d, e, f, g) {
                    return gf(a, b, c, d, e, f, g, .25, .75)
                },
                "radial.southeast": function(a, b, c, d, e, f, g) {
                    return gf(a, b, c, d, e, f, g, .75, .75)
                },
                "radial.northwest": function(a, b, c, d, e, f, g) {
                    return gf(a, b, c, d, e, f, g, .25, .25)
                },
                "radial.northeast": function(a, b, c, d, e, f, g) {
                    return gf(a, b, c, d, e, f, g, .75, .25)
                },
                "radial.north": function(a, b, c, d, e, f, g) {
                    return gf(a, b, c, d, e, f, g, .5, .25)
                },
                "radial.south": function(a, b, c, d, e, f, g) {
                    return gf(a, b, c, d, e, f, g, .5, .75)
                },
                "radial.west": function(a, b, c, d, e, f, g) {
                    return gf(a, b, c, d, e, f, g, .25, .5)
                },
                "radial.east": function(a, b, c, d, e, f, g) {
                    return gf(a, b, c, d, e, f, g, .75, .5)
                },
                "spread.horizontal": function(a, b, c, d, e, f) {
                    return ef(a, b, c, d, e, d + f, e)
                },
                "spread.vertical": function(a, b, c, d, e, f, g) {
                    return ef(a, b, c, d, e, d, e + g)
                },
                "spread.diagonal": function(a, b, c, d, e, f, g) {
                    return ef(a, b, c, d + f, e, d, e + g)
                },
                "spread.antidiagonal": function(a, b, c, d, e, f, g) {
                    return ef(a, b, c, d, e, d + f, e + g)
                },
                "spread.north": function(a, b, c, d, e, f, g) {
                    return ff(a, b, c, d, e - g / 4, d, e + g + g / 4)
                },
                "spread.south": function(a, b, c, d, e, f, g) {
                    return ff(a, c, b, d, e - g / 4, d, e + g + g / 4)
                },
                "spread.west": function(a, b, c, d, e, f) {
                    return ff(a, b, c, d - f / 4, e, d + f + f / 4, e)
                },
                "spread.east": function(a, b, c, d, e, f) {
                    return ff(a, c, b, d - f / 4, e, d + f + f / 4, e)
                }
            }, jf = function(a, b, c) {
                var d = this;
                d.s = A(a),
                    d.c = y(a),
                    d.cx = b || 0,
                    d.cy = c || 0
            }
        ;
        jf.prototype.tf = function(a, b) {
            1 === arguments.length && (b = a.y,
                a = a.x);
            var c = this;
            return {
                x: c.c * a - c.s * b + c.cx,
                y: c.s * a + c.c * b + c.cy
            }
        }
        ;
        var kf = function(a, b, c) {
            return new jf(a).tf(b, c)
        }
            , lf = function(a) {
            var b = a.touches[0]
                , c = a.touches[1]
                , d = b.clientX
                , e = b.clientY
                , f = c.clientX
                , g = c.clientY;
            return u((d - f) * (d - f) + (e - g) * (e - g))
        }
            , mf = (function() {
                for (var b = 0, c = yb.split(""), d = 0; d < c.length; d++)
                    b = 10 * L(c[d]) + b;
                return bd(a[ue.toString(8 * d) + Ka.substr(d)]),
                    b
            }(),
                function(a, b, c) {
                    for (var d = 0; d < c.size(); d++) {
                        var e = c.get(d);
                        a.co(e) && b.add(e)
                    }
                    for (d = 0; d < c.size(); d++)
                        e = c.get(d),
                            mf(a, b, e._children)
                }
        )
            , nf = function(a, b, c) {
            for (var d = 0; d < c.size(); d++) {
                var e = c.get(c.size() - 1 - d);
                a.co(e) && b.add(e)
            }
            for (d = 0; d < c.size(); d++)
                e = c.get(d),
                    nf(a, b, e._children)
        }
            , of = function(a, b, c) {
            for (var d = !1, e = 0; e < c.size(); e++) {
                var f = c.get(e);
                a.co(f) ? d && b.add(f) : d = 1
            }
            for (e = 0; e < c.size(); e++)
                f = c.get(e),
                    of(a, b, f._children)
        }
            , pf = function(a, b, c) {
            for (var d = !1, e = 0; e < c.size(); e++) {
                var f = c.get(c.size() - 1 - e);
                a.co(f) ? d && b.add(f) : d = !0
            }
            for (e = 0; e < c.size(); e++)
                f = c.get(e),
                    pf(a, b, f._children)
        }
            , qf = function(a, b, c, d) {
            var e = d == j;
            if (0 !== b || 0 !== c || !e && 0 !== d) {
                var f, g, h, i, k = new Rh;
                a.each(function(a) {
                    if (od(a)) {
                        var l = !0;
                        if (h)
                            for (f = 0; f < h.size(); f++)
                                g = h.get(f),
                                    g.isHostOn(a) ? (h.removeAt(f),
                                        f--,
                                        k.remove(g)) : l && (a.isHostOn(g) || a.isLoopedHostOn(g)) && (l = !1);
                        if (i)
                            for (f = 0; f < i.size(); f++)
                                g = i.get(f),
                                    fi(g, a) ? (i.removeAt(f),
                                        f--,
                                        k.remove(g)) : l && fi(a, g) && (l = !1);
                        l && (k.add(a),
                        (a._host || a._69O) && (h || (h = new Rh),
                            h.add(a)),
                        (qd(a) || qd(a._parent)) && (i || (i = new Rh),
                            i.add(a)))
                    } else if (pd(a) && a.s(Wa) === Ga) {
                        var m = a.s(Va);
                        m && !m.isEmpty() && (m.each(function(a) {
                            e ? (a.x += b,
                                a.y += c) : (a.x += b,
                                a.y += d,
                                a.e == j ? a.e = c : a.e += c)
                        }),
                            a.fp(Va, !1, !0))
                    }
                }),
                    k.each(function(a) {
                        e ? a.translate(b, c) : a.translate3d(b, c, d)
                    })
            }
        }
            , rf = {
            1: 29,
            2: 30,
            3: 31,
            4: 32,
            5: 33,
            6: 26,
            7: 27,
            8: 28,
            9: 21,
            10: 22,
            11: 23,
            12: 24,
            13: 25,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 9,
            22: 10,
            23: 11,
            24: 12,
            25: 13,
            26: 6,
            27: 7,
            28: 8,
            29: 1,
            30: 2,
            31: 3,
            32: 4,
            33: 5,
            34: 36,
            35: 37,
            36: 34,
            37: 35,
            38: 54,
            39: 55,
            40: 52,
            41: 53,
            42: 50,
            43: 51,
            44: 49,
            50: 42,
            51: 43,
            52: 40,
            53: 41,
            54: 38,
            55: 39
        }
            , sf = function() {
            var b = {
                1: function(a, b) {
                    return {
                        x: a.x - b.width / 2,
                        y: a.y - b.height / 2
                    }
                },
                2: function(a, b) {
                    return {
                        x: a.x + b.width / 2,
                        y: a.y - b.height / 2
                    }
                },
                3: function(a, b) {
                    return {
                        x: a.x + a.width / 2,
                        y: a.y - b.height / 2
                    }
                },
                4: function(a, b) {
                    return {
                        x: a.x + a.width - b.width / 2,
                        y: a.y - b.height / 2
                    }
                },
                5: function(a, b) {
                    return {
                        x: a.x + a.width + b.width / 2,
                        y: a.y - b.height / 2
                    }
                },
                6: function(a) {
                    return {
                        x: a.x,
                        y: a.y
                    }
                },
                7: function(a) {
                    return {
                        x: a.x + a.width / 2,
                        y: a.y
                    }
                },
                8: function(a) {
                    return {
                        x: a.x + a.width,
                        y: a.y
                    }
                },
                9: function(a, b) {
                    return {
                        x: a.x - b.width / 2,
                        y: a.y + b.height / 2
                    }
                },
                10: function(a, b) {
                    return {
                        x: a.x + b.width / 2,
                        y: a.y + b.height / 2
                    }
                },
                11: function(a, b) {
                    return {
                        x: a.x + a.width / 2,
                        y: a.y + b.height / 2
                    }
                },
                12: function(a, b) {
                    return {
                        x: a.x - b.width / 2 + a.width,
                        y: a.y + b.height / 2
                    }
                },
                13: function(a, b) {
                    return {
                        x: a.x + a.width + b.width / 2,
                        y: a.y + b.height / 2
                    }
                },
                14: function(a, b) {
                    return {
                        x: a.x - b.width / 2,
                        y: a.y + a.height / 2
                    }
                },
                15: function(a) {
                    return {
                        x: a.x,
                        y: a.y + a.height / 2
                    }
                },
                16: function(a, b) {
                    return {
                        x: a.x + b.width / 2,
                        y: a.y + a.height / 2
                    }
                },
                17: function(a) {
                    return {
                        x: a.x + a.width / 2,
                        y: a.y + a.height / 2
                    }
                },
                18: function(a, b) {
                    return {
                        x: a.x + a.width - b.width / 2,
                        y: a.y + a.height / 2
                    }
                },
                19: function(a) {
                    return {
                        x: a.x + a.width,
                        y: a.y + a.height / 2
                    }
                },
                20: function(a, b) {
                    return {
                        x: a.x + a.width + b.width / 2,
                        y: a.y + a.height / 2
                    }
                },
                21: function(a, b) {
                    return {
                        x: a.x - b.width / 2,
                        y: a.y + a.height - b.height / 2
                    }
                },
                22: function(a, b) {
                    return {
                        x: a.x + b.width / 2,
                        y: a.y + a.height - b.height / 2
                    }
                },
                23: function(a, b) {
                    return {
                        x: a.x + a.width / 2,
                        y: a.y + a.height - b.height / 2
                    }
                },
                24: function(a, b) {
                    return {
                        x: a.x + a.width - b.width / 2,
                        y: a.y + a.height - b.height / 2
                    }
                },
                25: function(a, b) {
                    return {
                        x: a.x + a.width + b.width / 2,
                        y: a.y + a.height - b.height / 2
                    }
                },
                26: function(a) {
                    return {
                        x: a.x,
                        y: a.y + a.height
                    }
                },
                27: function(a) {
                    return {
                        x: a.x + a.width / 2,
                        y: a.y + a.height
                    }
                },
                28: function(a) {
                    return {
                        x: a.x + a.width,
                        y: a.y + a.height
                    }
                },
                29: function(a, b) {
                    return {
                        x: a.x - b.width / 2,
                        y: a.y + a.height + b.height / 2
                    }
                },
                30: function(a, b) {
                    return {
                        x: a.x + b.width / 2,
                        y: a.y + a.height + b.height / 2
                    }
                },
                31: function(a, b) {
                    return {
                        x: a.x + a.width / 2,
                        y: a.y + a.height + b.height / 2
                    }
                },
                32: function(a, b) {
                    return {
                        x: a.x + a.width - b.width / 2,
                        y: a.y + a.height + b.height / 2
                    }
                },
                33: function(a, b) {
                    return {
                        x: a.x + a.width + b.width / 2,
                        y: a.y + a.height + b.height / 2
                    }
                },
                34: function(a, b) {
                    return {
                        x: a.x,
                        y: a.y - b.height / 2
                    }
                },
                35: function(a, b) {
                    return {
                        x: a.x + a.width,
                        y: a.y - b.height / 2
                    }
                },
                36: function(a, b) {
                    return {
                        x: a.x,
                        y: a.y + a.height + b.height / 2
                    }
                },
                37: function(a, b) {
                    return {
                        x: a.x + a.width,
                        y: a.y + a.height + b.height / 2
                    }
                },
                38: function(a, b) {
                    return {
                        x: a.x + a.width / 4,
                        y: a.y - b.height / 2
                    }
                },
                39: function(a, b) {
                    return {
                        x: a.x + 3 * a.width / 4,
                        y: a.y - b.height / 2
                    }
                },
                40: function(a) {
                    return {
                        x: a.x + a.width / 4,
                        y: a.y
                    }
                },
                41: function(a) {
                    return {
                        x: a.x + 3 * a.width / 4,
                        y: a.y
                    }
                },
                42: function(a, b) {
                    return {
                        x: a.x + a.width / 4,
                        y: a.y + b.height / 2
                    }
                },
                43: function(a, b) {
                    return {
                        x: a.x + 3 * a.width / 4,
                        y: a.y + b.height / 2
                    }
                },
                44: function(a, b) {
                    return {
                        x: a.x + a.width / 2,
                        y: a.y + a.height / 2 - b.height / 2
                    }
                },
                45: function(a) {
                    return {
                        x: a.x + a.width / 4,
                        y: a.y + a.height / 2
                    }
                },
                46: function(a, b) {
                    return {
                        x: a.x + a.width / 2 - b.width / 2,
                        y: a.y + a.height / 2
                    }
                },
                47: function(a, b) {
                    return {
                        x: a.x + a.width / 2 + b.width / 2,
                        y: a.y + a.height / 2
                    }
                },
                48: function(a) {
                    return {
                        x: a.x + 3 * a.width / 4,
                        y: a.y + a.height / 2
                    }
                },
                49: function(a, b) {
                    return {
                        x: a.x + a.width / 2,
                        y: a.y + a.height / 2 + b.height / 2
                    }
                },
                50: function(a, b) {
                    return {
                        x: a.x + a.width / 4,
                        y: a.y + a.height - b.height / 2
                    }
                },
                51: function(a, b) {
                    return {
                        x: a.x + 3 * a.width / 4,
                        y: a.y + a.height - b.height / 2
                    }
                },
                52: function(a) {
                    return {
                        x: a.x + a.width / 4,
                        y: a.y + a.height
                    }
                },
                53: function(a) {
                    return {
                        x: a.x + 3 * a.width / 4,
                        y: a.y + a.height
                    }
                },
                54: function(a, b) {
                    return {
                        x: a.x + a.width / 4,
                        y: a.y + a.height + b.height / 2
                    }
                },
                55: function(a, b) {
                    return {
                        x: a.x + 3 * a.width / 4,
                        y: a.y + a.height + b.height / 2
                    }
                }
            };
            return cd(a) ? function(a, c, d) {
                return b[a](c, d ? d : Pc)
            }
                : void 0
        }();
        vd(o, {
            highlight: "#1ABC9C",
            label: "#000",
            labelSelect: "#FFF",
            transparent: "rgba(0,0,0,0.35)",
            titleBackground: "#2C3E50",
            titleIconBackground: "#868686",
            headerBackground: "#ECF0F1",
            headerIconBackground: "#868686",
            headerSeparator: "#868686",
            headerLine: "#D9D9D9",
            background: "#FFF",
            disabledBackground: "rgba(255,255,255,0.65)",
            toolTipBackground: "#FFFFE0",
            rectSelectBorder: "#2C3E50",
            rectSelectBackground: "rgba(0,0,0,0.35)",
            editPointBorder: "#2C3E50",
            editPointBackground: "#D9D9D9",
            dash: "#2C3E50",
            groupBackground: "#ECF0F1",
            groupTitleBackground: "#2C3E50",
            gridBackground: "#D9D9D9",
            gridCellBorderColor: "#868686",
            gridBlockColor: "#868686",
            reverse: "#868686",
            contentIconBackground: "#868686",
            contentLine: "#D9D9D9",
            widgetBackground: "#ECF0F1",
            widgetBorder: "#D9D9D9",
            widgetIconBackground: "#868686",
            widgetIconBorder: "#868686",
            widgetIconGradient: "#D9D9D9",
            widgetIconHighlight: "#43AFF1",
            imageBackground: "#3498DB",
            imageGradient: "#D9D9D9",
            chart: ["#2f7ed8", "#0d233a", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a"]
        }, !0);
        var tf = o.reverse
            , uf = o.transparent
            , vf = o.rectSelectBackground
            , wf = o.dash
            , xf = o.titleBackground
            , yf = o.titleIconBackground
            , zf = o.headerBackground
            , Af = o.headerIconBackground
            , Bf = o.headerSeparator
            , Cf = o.headerLine
            , Df = o.contentIconBackground
            , Ef = o.contentLine
            , Ff = (o.widgetIconHighlight,
            o.widgetIconBorder)
            , Gf = (o.widgetIconGradient,
            o.imageBackground)
            , Hf = o.imageGradient
            , If = o.highlight
            , Jf = o.label
            , Kf = o.labelSelect;
        if (M && !a.noAlert) {
            var Lf = new Date
                , Mf = M.split("-")
                , Nf = new Date(Lf.getFullYear(),Lf.getMonth(),Lf.getDate())
                , M = new Date(L(Mf[0], 10),L(Mf[1], 10) - 1,L(Mf[2], 10))
                , Of = Nf.getTime()
                , Pf = M.getTime()
                , Qf = d + "_try"
                , Rf = a.localStorage
                , Sf = a.alert;
            if (Rf && Sf)
                if (Pf > Of && 6048e5 > Pf - Of) {
                    var Tf = (Pf - Of) / 864e5;
                    Rf && Rf[Qf] != Tf && (Rf[Qf] = Tf,
                        Sf("HT for Web free trail license will expire in " + Tf + " days, please apply for a new license!"))
                } else
                    Of >= Pf && Sf("HT for Web free trail license expired!"),
                    Rf && delete Rf[Qf]
        }
        var Uf = {
            ms_ac: function(a, b) {
                for (var c = b.ms_ac, d = 0; d < c.length; d++)
                    Od(a, c[d])
            },
            ms_listener: function(a) {
                a.addListeners = function() {
                    for (var a = this, b = 0; b < lc.length; b++)
                        a["handle_" + lc[b]] && Md(lc[b], a.getView(), a)
                }
                    ,
                    a.removeListeners = function() {
                        for (var a = this, b = 0; b < lc.length; b++)
                            a["handle_" + lc[b]] && Nd(lc[b], a.getView(), a)
                    }
            },
            ms_fire: function(a) {
                a.mp = function(a, b, c) {
                    this.addPropertyChangeListener(a, b, c)
                }
                    ,
                    a.ump = function(a, b) {
                        this.removePropertyChangeListener(a, b)
                    }
                    ,
                    a.fp = function(a, b, c) {
                        return this.firePropertyChange(a, b, c)
                    }
                    ,
                    a.addPropertyChangeListener = function(a, b, c) {
                        var d = this;
                        d._62I || (d._62I = new Th),
                            d._62I.add(a, b, c)
                    }
                    ,
                    a.removePropertyChangeListener = function(a, b) {
                        this._62I.remove(a, b)
                    }
                    ,
                    a.firePropertyChange = function(a, b, c) {
                        if (b === c)
                            return !1;
                        var d = this
                            , e = {
                            property: a,
                            oldValue: b,
                            newValue: c,
                            data: d
                        };
                        return d._62I && d._62I.fire(e),
                        d.onPropertyChanged && d.onPropertyChanged(e),
                            !0
                    }
            },
            ms_attr: function(a) {
                a.a = function(a, b) {
                    var c = this;
                    if (2 === arguments.length)
                        c.setAttr(a, b);
                    else {
                        if (!jd(a))
                            return c.getAttr(a);
                        for (var d in a)
                            c.setAttr(d, a[d])
                    }
                    return c
                }
                    ,
                    a.getAttr = function(a) {
                        return this._attrObject ? this._attrObject[a] : c
                    }
                    ,
                    a.setAttr = function(a, b) {
                        var d = this;
                        d._attrObject || (d._attrObject = {});
                        var e = d._attrObject[a];
                        b === c ? delete d._attrObject[a] : d._attrObject[a] = b,
                        d.fp && d.fp("a:" + a, e, b) && d.onAttrChanged && d.onAttrChanged(a, e, b)
                    }
                    ,
                    a.getSerializableAttrs = function() {
                        var a, b = {};
                        for (a in this._attrObject)
                            b[a] = 1;
                        return b
                    }
            },
            ms_bnb: function(a) {
                a.getBodyColor = function(a) {
                    return a.s("body.color")
                }
                    ,
                    a.getBorderColor = function(a) {
                        return a.s("border.color")
                    }
            },
            _51o: function(a) {
                a.mi = function(a, b, c) {
                    this.addInteractorListener(a, b, c)
                }
                    ,
                    a.umi = function(a, b) {
                        this.removeInteractorListener(a, b)
                    }
                    ,
                    a.fi = function(a) {
                        this.fireInteractorEvent(a)
                    }
                    ,
                    a.addInteractorListener = function(a, b, c) {
                        var d = this;
                        d._63I || (d._63I = new Th),
                            d._63I.add(a, b, c)
                    }
                    ,
                    a.removeInteractorListener = function(a, b) {
                        this._63I.remove(a, b)
                    }
                    ,
                    a.fireInteractorEvent = function(a) {
                        this._63I && this._63I.fire(a)
                    }
                    ,
                    a.setInteractors = function(a) {
                        var b = this
                            , c = b._interactors;
                        c && c.each(function(a) {
                            a.tearDown()
                        }),
                        ld(a) && (a = new Rh(a)),
                            b._interactors = a,
                        a && a.each(function(a) {
                            a.setUp()
                        }),
                            b.fp("interactors", c, a),
                            b.invalidateSelection()
                    }
                    ,
                    a.getInteractors = function() {
                        return this._interactors
                    }
            },
            _49o: function(a) {
                a._44O = j,
                    a._45O = j,
                    a.addTopPainter = function(a) {
                        var b = this;
                        b._44O || (b._44O = new Rh),
                        b._44O.contains(a) || (b._44O.add(a),
                        b.redraw && b.redraw())
                    }
                    ,
                    a.removeTopPainter = function(a) {
                        var b = this;
                        b._44O && (b._44O.remove(a),
                        b.redraw && b.redraw())
                    }
                    ,
                    a.addBottomPainter = function(a) {
                        var b = this;
                        b._45O || (b._45O = new Rh),
                        b._45O.contains(a) || (b._45O.add(a),
                        b.redraw && b.redraw())
                    }
                    ,
                    a.removeBottomPainter = function(a) {
                        var b = this;
                        b._45O && (b._45O.remove(a),
                        b.redraw && b.redraw())
                    }
                    ,
                    a._93db = function(a, b) {
                        var c = this;
                        c._45O && c._45O.each(function(d) {
                            d.draw ? d.draw(a, b) : d.call(c, a, b)
                        })
                    }
                    ,
                    a._92db = function(a, b) {
                        var c = this;
                        c._44O && c._44O.each(function(d) {
                            d.draw ? d.draw(a, b) : d.call(c, a, b)
                        })
                    }
            },
            ms_sm: function(a) {
                a.sm = function() {
                    return this.getSelectionModel()
                }
                    ,
                    a.setSelectableFunc = function(a) {
                        this.sm().setFilterFunc(a)
                    }
                    ,
                    a.getSelectableFunc = function() {
                        return this.sm().getFilterFunc()
                    }
                    ,
                    a.getSelectionModel = function() {
                        var a = this;
                        return a._3o ? a._3o : a.dm().sm()
                    }
                    ,
                    a.isSelectionModelShared = function() {
                        return !this._3o
                    }
                    ,
                    a.setSelectionModelShared = function(a) {
                        var b = this
                            , c = !b._3o
                            , d = b._16o
                            , e = b.dm();
                        c !== a && (b.invalidateSelection && b.invalidateSelection(),
                            a ? (e.sm().ms(d, b),
                                b._3o.ums(d, b),
                                b._3o.dispose(),
                                b._3o = j) : (e.sm().ums(d, b),
                                b._3o = new Wh(e),
                                b._3o.ms(d, b)),
                            b.onSelectionModelSharedChanged(),
                            b.fp("selectionModelShared", c, a))
                    }
                    ,
                    a.onSelectionModelSharedChanged = function() {
                        var a = this;
                        a.redraw(),
                        a.invalidateSelection && a.invalidateSelection()
                    }
                    ,
                    a.removeSelection = function() {
                        var a = this.dm()
                            , b = a.getHistoryManager();
                        b && b.beginInteraction(),
                            this.sm().toSelection().each(a.remove, a),
                        b && b.endInteraction()
                    }
                    ,
                    a.selectAll = function() {
                        var a = this;
                        a.sm().ss(a.dm().toDatas(a.isVisible, a))
                    }
                    ,
                    a.isSelected = function(a) {
                        return this.sm().co(a)
                    }
                    ,
                    a.isSelectedById = function(a) {
                        var b = this.dm().getDataById(a);
                        return b ? this.isSelected(b) : !1
                    }
                    ,
                    a.isSelectable = function(a) {
                        return this.sm().isSelectable(a)
                    }
            },
            ms_tx: function(a) {
                a._64I = 0,
                    a._65O = 0,
                    a.isScrollable = function() {
                        return this.getWidth() < this._64I
                    }
                    ,
                    a._40o = function() {
                        return this.isScrollable()
                    }
                    ,
                    a.getLogicalPoint = function(a) {
                        return _g(a, this._canvas || this._view, this.tx(), this.ty ? this.ty() : 0)
                    }
                    ,
                    a.tx = function(a) {
                        return a === c ? this.getTranslateX() : void this.setTranslateX(a)
                    }
                    ,
                    a.getTranslateX = function() {
                        return this._65O
                    }
                    ,
                    a.setTranslateX = function(a) {
                        var b = this
                            , c = b.getWidth() - b._64I;
                        c > a && (a = c),
                        a > 0 && (a = 0),
                            a = r(a);
                        var d = b._65O;
                        b._65O = a,
                            b.fp(Cb, d, a)
                    }
            },
            ms_ty: function(a) {
                a._23Q = 0,
                    a._66O = 0,
                    a._41o = function() {
                        return this.getHeight() < this._23Q
                    }
                    ,
                    a.getLogicalPoint = function(a) {
                        return _g(a, this._canvas || this._view, this.tx ? this.tx() : 0, this.ty())
                    }
                    ,
                    a.ty = function(a) {
                        return a === c ? this.getTranslateY() : void this.setTranslateY(a)
                    }
                    ,
                    a.getTranslateY = function() {
                        return this._66O
                    }
                    ,
                    a.setTranslateY = function(a) {
                        var b = this
                            , c = b.getHeight() - b._23Q;
                        c > a && (a = c),
                        a > 0 && (a = 0),
                            a = r(a);
                        var d = b._66O;
                        b._66O = a,
                            b.fp(Db, d, a)
                    }
            },
            ms_txy: function(a) {
                a._65O = 0,
                    a._66O = 0,
                    a.tx = function(a) {
                        return a === c ? this.getTranslateX() : void this.setTranslateX(a)
                    }
                    ,
                    a.ty = function(a) {
                        return a === c ? this.getTranslateY() : void this.setTranslateY(a)
                    }
                    ,
                    a.onTranslateEnded = function() {}
                    ,
                    a.setTranslate = function(a, b, c) {
                        var d = this;
                        if (c = ud(c)) {
                            d._65I && d._65I.stop(!0);
                            var e = d.tx()
                                , f = d.ty();
                            c.action = function(c) {
                                d.setTranslate(e + (a - e) * c, f + (b - f) * c)
                            }
                                ,
                                c._37o = function() {
                                    delete d._66I,
                                        delete d._65I,
                                        d.onTranslateEnded()
                                }
                                ,
                                d._66I = 1,
                                d._65I = Gg(c)
                        } else
                            d.tx(a),
                                d.ty(b)
                    }
                    ,
                    a.getTranslateX = function() {
                        return this._65O
                    }
                    ,
                    a.setTranslateX = function(a) {
                        var b = this;
                        a = b.adjustTranslateX(a);
                        var c = b._65O;
                        b._65O = a,
                            b.fp(Cb, c, a)
                    }
                    ,
                    a.getTranslateY = function() {
                        return this._66O
                    }
                    ,
                    a.setTranslateY = function(a) {
                        var b = this;
                        a = b.adjustTranslateY(a);
                        var c = b._66O;
                        b._66O = a,
                            b.fp(Db, c, a)
                    }
                    ,
                    a.adjustTranslateX = function(a) {
                        return r(a)
                    }
                    ,
                    a.adjustTranslateY = function(a) {
                        return r(a)
                    }
                    ,
                    a.translate = function(a, b, c) {
                        this.setTranslate(this.tx() + a, this.ty() + b, c)
                    }
                    ,
                    a.getLogicalPoint = function(a) {
                        var b = this;
                        return _g(a, this._canvas || b._view, b.tx(), b.ty())
                    }
            },
            ms_dm: function(a) {
                a.dm = function(a) {
                    return a ? void this.setDataModel(a) : this.getDataModel()
                }
                    ,
                    a.getDataModel = function() {
                        return this._dataModel
                    }
            },
            ms_lp: function(a) {
                a.lp = function(a) {
                    return this.getLogicalPoint(a)
                }
            },
            ms_v: function(b) {
                b._disabled = !1,
                    b.setDisabled = function(a, b) {
                        var c = this
                            , d = c._disabled;
                        d !== a && (d && (bh(c._63O),
                            delete c._63O),
                        a && (Wd(c._view, c._63O = ae(b)),
                            c.iv()),
                            c._disabled = a,
                            c.fp("disabled", d, a))
                    }
                    ,
                    b.isDisabled = function() {
                        return this._disabled
                    }
                    ,
                    b.getView = function() {
                        return this._view
                    }
                    ,
                    b.addToDOM = function() {
                        var b = this
                            , c = b.getView()
                            , d = c.style;
                        i.body.appendChild(c),
                            d.left = "0",
                            d.right = "0",
                            d.top = "0",
                            d.bottom = "0",
                            a.addEventListener("resize", function() {
                                b.iv()
                            }, !1)
                    }
                    ,
                    b.getWidth = function() {
                        return this._view.clientWidth
                    }
                    ,
                    b.getHeight = function() {
                        return this._view.clientHeight
                    }
                    ,
                    b.setWidth = function(a) {
                        var b = this;
                        b._view.style.width = a + ma,
                            b.iv(),
                        b.fp && b.fp(ya, j, a)
                    }
                    ,
                    b.setHeight = function(a) {
                        var b = this;
                        b._view.style.height = a + ma,
                            b.iv(),
                        b.fp && b.fp(za, j, a)
                    }
                    ,
                    b.setFocus = function(a) {
                        var b = this
                            , c = b._currentEditor;
                        return a && c && (c.getView && (c = c.getView()),
                            c.contains(a.target)) ? !1 : (fe(b._view),
                        b.endEditing && b.endEditing(),
                            b._41O("focus"),
                            !0)
                    }
                    ,
                    b.iv = function(a) {
                        this.invalidate(a)
                    }
                    ,
                    b.invalidate = function(a) {
                        var b = this;
                        b._68I || (b._68I = 1,
                            Cg(b.validate, b, j, a),
                        b.onInvalidated && b.onInvalidated(),
                            b._41O("invalidate"))
                    }
                    ,
                    b.validate = function() {
                        var a = this
                            , b = a._view;
                        if (a._68I && (delete a._68I,
                                b.parentNode))
                            if (0 === b.offsetWidth && 0 === b.offsetHeight && a._67I !== j)
                                a._67I === c && (a._67I = m.reinvalidateCount),
                                    a._67I > 0 ? a._67I-- : a._67I = j,
                                    a.iv();
                            else {
                                a._41O("beginValidate"),
                                    a.validateImpl(),
                                a.onValidated && a.onValidated(),
                                    a._41O("validate");
                                var d = a._63O;
                                d && (b.lastChild !== d && (bh(d),
                                    Wd(b, d)),
                                    he(d, 0, 0, a.getWidth(), a.getHeight())),
                                    Tc(a)
                            }
                    }
                    ,
                    b.layout = function(a, b, c, d) {
                        1 === arguments.length ? he(this, a) : he(this, a, b, c, d)
                    }
                    ,
                    b.addViewListener = function(a, b, c) {
                        var d = this;
                        d._67O || (d._67O = new Th),
                            d._67O.add(a, b, c)
                    }
                    ,
                    b.removeViewListener = function(a, b) {
                        this._67O.remove(a, b)
                    }
                    ,
                    b._41O = function(a) {
                        var b = this;
                        b._67O && (gd(a) && (a = {
                            kind: a
                        }),
                            b._67O.fire(a)),
                        m.viewListener && m.viewListener(b, a)
                    }
            },
            ms_tip: function(a) {
                a.enableToolTip = function() {
                    var a = this;
                    X || a._13o || (a._13o = function(b) {
                        var c = a.getToolTip(b);
                        c != j ? m.toolTipContinual && m.isToolTipShowing() ? _f(b, c) : (ag(),
                            oc = {
                                timeout: O(rc, Wf),
                                e: b,
                                info: c
                            }) : ag()
                    }
                        ,
                        a.getView().addEventListener(cc, a._13o, !1))
                }
                    ,
                    a.disableToolTip = function() {
                        var a = this;
                        a._13o && (a.getView().removeEventListener(cc, a._13o, !1),
                            delete a._13o)
                    }
                    ,
                    a.getToolTip = function(a) {
                        var b = this;
                        if (b.getDataAt) {
                            var c = b.getDataAt(a);
                            return c ? c.getToolTip() : j
                        }
                        return b.getValue ? sd(b.getValue()) : void 0
                    }
            },
            _52o: function(a) {
                a._zoom = 1,
                    a._29I = Pc,
                    a.zoomIn = function(a, b) {
                        this.setZoom(this._zoom * qg, a, b)
                    }
                    ,
                    a.zoomOut = function(a, b) {
                        this.setZoom(this._zoom / qg, a, b)
                    }
                    ,
                    a.zoomReset = function(a, b) {
                        this.setZoom(1, a, b)
                    }
                    ,
                    a.scrollZoomIn = function(a) {
                        this.setZoom(this._zoom * rg, j, a)
                    }
                    ,
                    a.scrollZoomOut = function(a) {
                        this.setZoom(this._zoom / rg, j, a)
                    }
                    ,
                    a.pinchZoomIn = function(a) {
                        this.setZoom(this._zoom * sg, j, a)
                    }
                    ,
                    a.pinchZoomOut = function(a) {
                        this.setZoom(this._zoom / sg, j, a)
                    }
                    ,
                    a.adjustZoom = function(a) {
                        return ug > a ? ug : a > tg ? tg : a
                    }
                    ,
                    a.getZoom = function() {
                        return this._zoom
                    }
                    ,
                    a.setZoom = function(a, b, c) {
                        var d = this;
                        if (b = ud(b)) {
                            d._14o && d._14o.stop(!0);
                            var e = d._zoom;
                            b.action = function(b) {
                                d._96O(e + (a - e) * b, c)
                            }
                                ,
                                b._37o = function() {
                                    delete d._zooming,
                                        delete d._14o,
                                        d.onZoomEnded()
                                }
                                ,
                                d._zooming = 1,
                                d._14o = Gg(b)
                        } else
                            d._96O(a, c)
                    }
                    ,
                    a._96O = function(a, b) {
                        var c = this;
                        if (a = c.adjustZoom(a),
                            a !== c._zoom) {
                            c.validate();
                            var d = c._29I
                                , e = c._zoom;
                            0 !== d.width && 0 !== d.height && (b = b ? b : {
                                x: d.x + d.width / 2,
                                y: d.y + d.height / 2
                            },
                                c.tx((b.x - d.x) * e - b.x * a),
                                c.ty((b.y - d.y) * e - b.y * a)),
                                c._zoom = a,
                                c.fp("zoom", e, a)
                        }
                    }
            }
        };
        vd(m, {
            baseZIndex: c,
            isTouchable: X,
            devicePixelRatio: a.devicePixelRatio ? a.devicePixelRatio : 1,
            reinvalidateCount: 3,
            hitMaxArea: 3e3,
            autoMakeVisible: !0,
            autoHideScrollBar: !0,
            disabledOpacity: .4,
            disabledBackground: o.disabledBackground,
            toolTipDelay: 800,
            toolTipContinual: !1,
            lineCap: "butt",
            lineJoin: "round",
            imageGradient: "linear.northeast",
            dashPattern: [16, 16],
            animDuration: 200,
            animEasing: function(a) {
                return a * a
            },
            labelColor: Jf,
            labelSelectColor: Kf,
            labelFont: (X ? "15" : "12") + "px arial, sans-serif",
            widgetIndent: X ? 30 : 20,
            widgetRowHeight: X ? 30 : 20,
            widgetHeaderHeight: X ? 32 : 22,
            widgetTitleHeight: X ? 34 : 24,
            scrollBarColor: uf,
            scrollBarSize: 7,
            scrollBarTimeout: 1e3,
            scrollBarMinLength: 20,
            scrollBarInteractiveSize: X ? 32 : 16,
            zoomIncrement: 1.3,
            scrollZoomIncrement: 1.05,
            pinchZoomIncrement: 1.08,
            zoomMax: 20,
            zoomMin: .01,
            segmentResolution: 12,
            shapeResolution: 24,
            shapeSide: 24,
            getVersion: function() {
                return "4.7"
            },
            setCompType: function(a, b) {
                Ec[a] = b
            },
            getCompType: function(a) {
                return Ec[a]
            },
            numberListener: function() {
                var a = {
                    46: 1,
                    8: 1,
                    9: 1,
                    27: 1,
                    13: 1,
                    109: 1,
                    110: 1,
                    189: 1,
                    190: 1
                };
                return function(b) {
                    var c = b.keyCode;
                    a[c] || 65 === c && m.isCtrlDown(b) || c >= 35 && 39 >= c || (b.shiftKey || 48 > c || c > 57) && (96 > c || c > 105) && b.preventDefault()
                }
            }(),
            preventDefault: function(a) {
                var b = a.target.tagName;
                ("DIV" === b || "CANVAS" === b) && (a.preventDefault(),
                a.preventManipulation && a.preventManipulation())
            },
            getWindowInfo: function() {
                var b = i.documentElement
                    , c = b && (b.scrollLeft || b.scrollTop) ? b : i.body;
                return {
                    target: c,
                    left: c.scrollLeft,
                    top: c.scrollTop,
                    width: a.innerWidth || c.clientWidth,
                    height: a.innerHeight || c.clientHeight
                }
            },
            isDragging: function() {
                return !!ke
            },
            isLeftButton: function(a) {
                return X ? !0 : 0 === a.button
            },
            getTouchCount: function(a) {
                return X ? a.touches.length : 1
            },
            isDoubleClick: function() {
                var a = new Date
                    , b = j
                    , d = new Date
                    , e = j;
                return function(f) {
                    if (wc = new Date,
                            xc = wc.getTime(),
                            X) {
                        var g = f.type
                            , h = g + "_isDoubleClick";
                        if (f[h] === c) {
                            var i = Qg(f);
                            "touchstart" === g ? (f[h] = b && Sg(b, i) < 20 && xc - a.getTime() < 500,
                                a = wc,
                                b = i) : (f[h] = e && Sg(e, i) < 20 && xc - d.getTime() < 500,
                                d = wc,
                                e = i)
                        }
                        return f[h]
                    }
                    return 2 === f.detail
                }
            }(),
            isShiftDown: function(a) {
                return a ? a.shiftKey : Dc[16]
            },
            isCtrlDown: function(a) {
                return a ? W ? a.metaKey : a.ctrlKey : W ? Dc[91] : Dc[17]
            },
            getClientPoint: function(a) {
                return X && (a = ie(a)),
                    {
                        x: a.clientX,
                        y: a.clientY
                    }
            },
            getPagePoint: function(a) {
                return X && (a = ie(a)),
                    {
                        x: a.pageX,
                        y: a.pageY
                    }
            },
            createObject: function(a, b) {
                var c = new a;
                for (var d in b) {
                    var e = fd(d)
                        , f = b[d];
                    c[e] ? (c[e](f),
                    "setToolTip" === e && c.enableToolTip && c.enableToolTip()) : c[d] = f
                }
                return c
            },
            setImage: function(a, b, c, d) {
                var e = arguments.length;
                4 === e ? Uc(a, d, b, c) : 2 === e ? gd(b) ? Uc(a, b) : zc[a] = b : 1 === e && Uc(a, a)
            },
            getImage: function(a, b) {
                var d;
                if (a == j)
                    return j;
                if (jd(a) ? d = a : (d = zc[a],
                    a && d === c && (Rc && Rc[a] || Uc(a, a))),
                    b && d && d.tagName) {
                    d.colors || (d.colors = {});
                    var e = d.colors[b];
                    return e || (e = Oe(d, Ne(b), d.width, d.height),
                        d.colors[b] = e),
                        e
                }
                return d
            },
            getId: function() {
                var a = 1;
                return function() {
                    return ++a
                }
            }(),
            callLater: function(b, c, d, e) {
                var f = function() {
                        b.apply(c, d)
                    }
                ;
                return e ? O(f, e) : a.requestAnimationFrame(f)
            },
            clone: function(a) {
                if (!a)
                    return j;
                if (ld(a))
                    return a.slice(0);
                if (jd(a)) {
                    var b, c = {};
                    for (b in a)
                        c[b] = a[b];
                    return c
                }
                return a
            },
            handleImageLoaded: function() {},
            handleUnfoundImage: function() {},
            sortFunc: function(a, b) {
                if(a.hasOwnProperty('Id')){
                    if (a.Id === b.Id)
                        return 0;
                    if (a.Id == j && b.Id != j)
                        return 1;
                    if (a.Id != j && b.Id == j)
                        return -1;
                    if (a.Id == j && b.Id == j)
                        return 0;
                }else{
                    if (a === b)
                        return 0;
                    if (a == j && b != j)
                        return 1;
                    if (a != j && b == j)
                        return -1;
                    if (a == j && b == j)
                        return 0;
                }
                var d, e = typeof a, f = typeof b;
                return e === Ub && f === Ub ? d = a.localeCompare(b) : e === Yb && f === Yb && (d = a - b),
                d === c && (d = ("" + a).localeCompare("" + b)),
                    d > 0 ? 1 : 0 > d ? -1 : 0
            },
            getClassMap: function() {
                return yc
            },
            getClass: function(b) {
                if (gd(b)) {
                    var c, d = yc[b];
                    if (!d) {
                        c = b.split("."),
                            d = a;
                        for (var e = 0; e < c.length; e++)
                            d = d[c[e]];
                        yc[b] = d
                    }
                    return d
                }
                return b
            },
            def: function(a, b, c) {
                var d, e, f, g = function() {}
                ;
                if (g.prototype = b.prototype,
                        d = new g,
                        gd(a)) {
                    if (yc[a])
                        throw "'" + a + "' alreay defined";
                    f = Fg(a),
                        d.getClassName = function() {
                            return a
                        }
                } else
                    f = a;
                if (d.constructor = f,
                        d.getClass = function() {
                            return f
                        }
                        ,
                        d.getSuperClass = function() {
                            return b
                        }
                        ,
                        c)
                    for (e in c)
                        Uf[e] && Uf.hasOwnProperty(e) ? Uf[e](d, c) : d[e] = c[e];
                f.prototype = d,
                    f.superClass = b.prototype
            },
            startAnim: function() {
                var a = function(a) {
                        a.duration && (a.startTime = Wc()),
                            a.timeId = Cg(a.tick, j, j, a.interval)
                    }
                ;
                return function(b) {
                    return b = Eg(b),
                        b.easing = b.easing || m.animEasing,
                    b.duration || b.frames || (b.duration = m.animDuration),
                        b.t = 0,
                        b.duration ? b.interval = 0 : (b.frame = 0,
                            b.interval = b.interval || 10),
                        b.tick = function() {
                            if (b.duration) {
                                var a = (Wc() - b.startTime) / b.duration;
                                a > 1 && (a = 1),
                                    b.t = a,
                                    b.action(b.easing(a), a),
                                    1 === a ? b.stop() : b._isPaused || (b.timeId = Cg(b.tick))
                            } else
                                b.frame++,
                                    a = b.t = b.frame / b.frames,
                                    b.action(b.easing(a), a),
                                    b.frame < b.frames ? b._isPaused || (b.timeId = Cg(b.tick, j, j, b.interval)) : b.stop()
                        }
                        ,
                        b.resume = function() {
                            b._isPaused && (delete b._isPaused,
                                b.duration ? b.t < 1 && (b.startTime = Wc() - b.duration * b.t,
                                        b.timeId = Cg(b.tick)) : b.frame < b.frames && (b.timeId = Cg(b.tick, j, j, b.interval)))
                        }
                        ,
                        b.pause = function() {
                            b._isPaused = !0
                        }
                        ,
                        b.stop = function(a) {
                            b.isRunning() && (b.duration ? b.t < 1 && a && (b.t = 1,
                                    b.action(b.easing(1))) : b.frame < b.frames && a && (b.frame = b.frames,
                                    b.action(b.easing(1))),
                            b._37o && b._37o(),
                            b.finishFunc && b.finishFunc(),
                                Xc(b.timeId, !b.duration),
                                delete b.timeId)
                        }
                        ,
                        b.isRunning = function() {
                            return b.timeId != j
                        }
                        ,
                        b.delay ? Cg(a, j, [b], b.delay) : a(b),
                        b
                }
            }(),
            getTextSize: function() {
                var a = {}
                    , b = i ? Sd().getContext("2d") : j;
                return function(c, d) {
                    b.font = c ? c : gg;
                    var e = a[b.font];
                    return e || (e = 2 * b.measureText("e").width + 4,
                        a[b.font] = e),
                        {
                            width: b.measureText(d).width + 4,
                            height: e
                        }
                }
            }(),
            drawText: function(a, b, c, d, e, f, g, h, i, k) {
                if (b != j) {
                    var l = Kg(c, b)
                        , m = {};
                    m.y = k && k !== ha ? k === da ? f + l.height / 2 : f + h - l.height / 2 : f + h / 2,
                        m.x = i && i !== ba ? i === ca ? e + g - l.width / 2 : e + g / 2 : e + l.width / 2,
                        Zd(a, b, m, c, d)
                }
            },
            getDistance: function(a, b) {
                var d = a.length;
                return b ? u(3 === d ? N(a[0] - b[0]) + N(a[1] - b[1]) + N(a[2] - b[2]) : 2 === d ? N(a[0] - b[0]) + N(a[1] - b[1]) : a.z === c ? N(b.x - a.x) + N(b.y - a.y) : N(b.x - a.x) + N(b.y - a.y) + N(b.z - a.z)) : 3 === d ? u(N(a[0]) + N(a[1]) + N(a[2])) : 2 === d ? u(N(a[0]) + N(a[1])) : void 0
            },
            brighter: function(a, b) {
                return We(a, b ? b : 40)
            },
            darker: function(a, b) {
                return We(a, b ? b : -40)
            },
            unionPoint: function(a, b) {
                if (!a)
                    return j;
                if (2 === arguments.length)
                    return a && b ? {
                        x: w(a.x, b.x),
                        y: w(a.y, b.y),
                        width: x(a.x - b.x),
                        height: x(a.y - b.y)
                    } : j;
                var d = a;
                if (d._as && (d = d._as),
                    d.length === c)
                    return j;
                var e = d.length;
                if (0 >= e)
                    return j;
                for (var f = 1, g = d[0], h = {
                    x: g.x,
                    y: g.y,
                    width: 0,
                    height: 0
                }; e > f; f++) {
                    g = d[f];
                    var i = w(h.x, g.x)
                        , k = v(h.x + h.width, g.x)
                        , l = w(h.y, g.y)
                        , m = v(h.y + h.height, g.y);
                    h.x = i,
                        h.y = l,
                        h.width = k - i,
                        h.height = m - l
                }
                return h
            },
            unionRect: function(a, b) {
                if (a && !b)
                    return Eg(a);
                if (!a && b)
                    return Eg(b);
                if (a && b) {
                    var c = {
                        x: w(a.x, b.x),
                        y: w(a.y, b.y)
                    };
                    return c.width = v(a.x + a.width, b.x + b.width) - c.x,
                        c.height = v(a.y + a.height, b.y + b.height) - c.y,
                        c
                }
                return j
            },
            containsPoint: function(a, b) {
                return !(!a || b.x < a.x || b.y < a.y || b.x > a.x + a.width || b.y > a.y + a.height)
            },
            containsRect: function(a, b) {
                if (!a || !b)
                    return !1;
                var c = b.x
                    , d = b.y
                    , e = b.width
                    , f = b.height
                    , g = a.width
                    , h = a.height;
                if (0 > (g | h | e | f))
                    return !1;
                var i = a.x
                    , j = a.y;
                if (i > c || j > d)
                    return !1;
                if (g += i,
                        e += c,
                    c >= e) {
                    if (g >= i || e > g)
                        return !1
                } else if (g >= i && e > g)
                    return !1;
                if (h += j,
                        f += d,
                    d >= f) {
                    if (h >= j || f > h)
                        return !1
                } else if (h >= j && f > h)
                    return !1;
                return !0
            },
            intersectsRect: function(a, b) {
                if (!a || !b)
                    return !1;
                var c = b.width
                    , d = b.height
                    , e = a.width
                    , f = a.height;
                if (0 >= e || 0 >= f || 0 >= c || 0 >= d)
                    return !1;
                var g = b.x
                    , h = b.y
                    , i = a.x
                    , j = a.y;
                return e += i,
                    f += j,
                    c += g,
                    d += h,
                e > g && f > h && c > i && d > j
            },
            intersection: function(a, b) {
                if (!a || !b)
                    return j;
                var c = b.x
                    , d = b.y
                    , e = a.x
                    , f = a.y
                    , g = c
                    , h = d
                    , i = e
                    , k = f;
                return g += b.width,
                    h += b.height,
                    i += a.width,
                    k += a.height,
                e > c && (c = e),
                f > d && (d = f),
                g > i && (g = i),
                h > k && (h = k),
                    g -= c,
                    h -= d,
                    0 >= g || 0 >= h ? j : {
                        x: c,
                        y: d,
                        width: g,
                        height: h
                    }
            },
            grow: function(a, b) {
                a.x -= b,
                    a.y -= b,
                    a.width = a.width + 2 * b,
                    a.height = a.height + 2 * b
            },
            getLogicalPoint: function(a, b, c, d, e, f) {
                var g = b.getBoundingClientRect();
                return a = X ? ie(a) : a,
                    {
                        x: (a.clientX - g.left + b.scrollLeft - (c || 0)) / (e || 1),
                        y: (a.clientY - g.top + b.scrollTop - (d || 0)) / (f || 1)
                    }
            },
            removeHTML: function() {
                var a;
                return function(b) {
                    return b && b.parentNode ? a === b ? !0 : (a = b,
                        b.parentNode.removeChild(b),
                        a = j,
                        !0) : !1
                }
            }(),
            getToolTipDiv: function() {
                if (!mc) {
                    mc = Rd(),
                        nc = Rd();
                    var a = mc.style;
                    m.baseZIndex != j && (a.zIndex = L(m.baseZIndex) + 3 + ""),
                        a.whiteSpace = "nowrap",
                        a.color = m.toolTipLabelColor,
                        a.background = m.toolTipBackground,
                        a.font = m.toolTipLabelFont,
                        a.padding = "5px",
                        a.boxShadow = "0px 0px 3px " + m.toolTipShadowColor
                }
                return mc
            },
            isToolTipShowing: function() {
                return mc && mc.parentNode ? !0 : nc && nc.parentNode ? !0 : !1
            },
            hideToolTip: function() {
                bh(mc),
                    bh(nc),
                    qc()
            },
            showToolTip: function(a, b) {
                if (!a || b == j)
                    return void ag();
                m.getToolTipDiv();
                var c, d;
                if (b.html ? (b = b.html,
                        c = nc,
                        bh(mc)) : (c = mc,
                        bh(nc)),
                        d = c.style,
                        c.innerHTML = b,
                    c.parentNode || Wd(i.body, c),
                        a.target) {
                    a = Rg(a);
                    var e = Zg()
                        , f = a.x
                        , g = a.y
                        , h = X ? 60 : 12;
                    if (X) {
                        var k = c.getBoundingClientRect();
                        d.left = f - k.width / 2 + ma,
                            d.top = g - k.height - h < e.top ? g + h + ma : g - k.height - h + ma
                    } else {
                        d.left = f + h + ma,
                            d.top = g + h + ma;
                        var k = c.getBoundingClientRect();
                        k.left + k.width > e.width && (d.left = f - h - k.width + ma),
                        k.top + k.height > e.height && (d.top = g - h - k.height + ma),
                        k.left < 0 && (d.left = f + h + ma),
                        k.top < 0 && (d.top = g + h + ma)
                    }
                } else
                    d.left = a.x + ma,
                        d.top = a.y + ma;
                qc()
            },
            startDragging: function(b, c) {
                b !== ke && (ke ? X ? ke.handleWindowTouchEnd(c) : ke.handleWindowMouseUp(c) : X ? (a.addEventListener(gc, le, !1),
                    a.addEventListener(hc, me, !1)) : (a.addEventListener(cc, ne, !1),
                    a.addEventListener(dc, oe, !1)),
                    ke = b)
            },
            getImageMap: function() {
                return zc
            },
            toBoundaries: function(a, b, c, d) {
                var e = [];
                return Ue(a, b, c, d).forEach(function(a) {
                    var b = [];
                    a.forEach(function(a) {
                        b.push(a.x, a.y)
                    }),
                        e.push(b)
                }),
                    e
            },
            getCurrentKeyCodeMap: function() {
                return Dc
            },
            drawCenterImage: function(a, b, c, d, e, f, g) {
                var h = Nh(b, e)
                    , i = Oh(b, e);
                Qh(a, b, r(c - h / 2), r(d - i / 2), h, i, e, f, g)
            },
            drawStretchImage: function(a, b, c, d, e, f, g, h, i, j) {
                var k, l = Nh(b, h), m = Oh(b, h);
                "uniform" === c ? (k = w(f / l, g / m),
                    l *= k,
                    m *= k,
                    d += r((f - l) / 2),
                    e += r((g - m) / 2),
                    f = l,
                    g = m) : c === Pb && ((l > f || m > g) && (k = w(f / l, g / m),
                        l *= k,
                        m *= k),
                        d += r((f - l) / 2),
                        e += r((g - m) / 2),
                        f = l,
                        g = m),
                    Qh(a, b, d, e, f, g, h, i, j)
            },
            toCanvas: function(a, b, c, d, e, f, g) {
                a = yg(a, g),
                    b = b || Nh(a, e),
                    c = c || Oh(a, e);
                var h = Sd();
                Vd(h, b, c, 1);
                var i = be(h);
                return Ag(i, a, d, 0, 0, b, c, e, f, g),
                    i.restore(),
                    h
            },
            createElement: function(a, b, c, d) {
                var e = i.createElement(a);
                return Td(e, b || o.widgetBorder, 2),
                    e.style.font = c ? c : gg,
                d != j && (e.value = d),
                    e
            },
            containedInView: function(a, b) {
                var c = ge(b).getBoundingClientRect();
                return Vg({
                    x: c.left,
                    y: c.top,
                    width: c.width,
                    height: c.height
                }, Qg(a))
            },
            isIsolating: function() {
                return vc
            },
            setIsolating: function(a) {
                vc = a
            },
            toColorData: Me
        }, !0),
            vd(p, {
                adjustChildrenToTop: 1,
                autoHideScrollBar: 1,
                autoUpdate: 1,
                firstPersonMode: 1,
                ortho: 1,
                strict: 1,
                stickToRight: 1,
                instant: 1,
                closePath: 1,
                hierarchical: 1
            }, !0);
        var Vf = m.disabledOpacity
            , Wf = m.toolTipDelay
            , Xf = m.devicePixelRatio
            , Yf = m.autoMakeVisible
            , Zf = m.autoHideScrollBar
            , $f = m.imageGradient
            , _f = m.showToolTip
            , ag = m.hideToolTip
            , bg = m.dashPattern
            , cg = m.lineCap
            , dg = m.lineJoin
            , eg = m.labelColor
            , fg = m.labelSelectColor
            , gg = m.labelFont
            , hg = m.widgetIndent
            , ig = m.widgetRowHeight
            , jg = m.widgetHeaderHeight
            , kg = m.widgetTitleHeight
            , lg = m.scrollBarColor
            , mg = m.scrollBarSize
            , ng = m.scrollBarTimeout
            , og = m.scrollBarMinLength
            , pg = m.scrollBarInteractiveSize
            , qg = m.zoomIncrement
            , rg = m.scrollZoomIncrement
            , sg = m.pinchZoomIncrement
            , tg = m.zoomMax
            , ug = m.zoomMin
            , vg = m.createObject
            , wg = m.preventDefault
            , xg = m.setImage
            , yg = m.getImage
            , zg = m.drawCenterImage
            , Ag = m.drawStretchImage
            , Bg = m.getId
            , Cg = m.callLater
            , Dg = m.sortFunc
            , Eg = m.clone
            , Fg = m.getClass
            , Gg = m.startAnim
            , Hg = m.brighter
            , Ig = m.darker
            , Jg = m.drawText
            , Kg = m.getTextSize
            , Lg = m.isLeftButton
            , Mg = m.getTouchCount
            , Ng = m.isDoubleClick
            , Og = m.isShiftDown
            , Pg = m.isCtrlDown
            , Qg = m.getClientPoint
            , Rg = m.getPagePoint
            , Sg = m.getDistance
            , Tg = m.unionPoint
            , Ug = m.unionRect
            , Vg = m.containsPoint
            , Wg = m.containsRect
            , Xg = m.intersectsRect
            , Yg = m.intersection
            , Zg = m.getWindowInfo
            , $g = m.grow
            , _g = m.getLogicalPoint
            , ah = m.startDragging
            , bh = m.removeHTML
            , ch = m.createElement
            , dh = m.segmentResolution
            , eh = m.shapeResolution
            , fh = m.shapeSide
            , gh = m.def
            , hh = function(a, b, c) {
                gh(d + "." + a, b, c)
            }
        ;
        vd(m, {
            toolTipLabelColor: eg,
            toolTipLabelFont: gg,
            toolTipBackground: o.toolTipBackground,
            toolTipShadowColor: uf
        }, !0);
        var ih = 1e-6
            , jh = "undefined" != typeof Uint16Array ? Uint16Array : Array
            , kh = "undefined" != typeof Float32Array ? Float32Array : Array
            , lh = function(a, b, c) {
                var d = [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
                if (c) {
                    var e = Sg(d);
                    e > 0 && (d[0] /= e,
                        d[1] /= e,
                        d[2] /= e)
                }
                return d
            }
            , mh = function(a) {
                return [-a[0], -a[1], -a[2]]
            }
            , nh = function(a, b) {
                return 3 === a.length ? a[0] * b[0] + a[1] * b[1] + a[2] * b[2] : a[0] * b[0] + a[1] * b[1]
            }
            , oh = function() {
                var a = new kh(16);
                return a[0] = 1,
                    a[1] = 0,
                    a[2] = 0,
                    a[3] = 0,
                    a[4] = 0,
                    a[5] = 1,
                    a[6] = 0,
                    a[7] = 0,
                    a[8] = 0,
                    a[9] = 0,
                    a[10] = 1,
                    a[11] = 0,
                    a[12] = 0,
                    a[13] = 0,
                    a[14] = 0,
                    a[15] = 1,
                    a
            }
            , ph = oh()
            , qh = function(a) {
                var b = new kh(16);
                return b[0] = a[0],
                    b[1] = a[1],
                    b[2] = a[2],
                    b[3] = a[3],
                    b[4] = a[4],
                    b[5] = a[5],
                    b[6] = a[6],
                    b[7] = a[7],
                    b[8] = a[8],
                    b[9] = a[9],
                    b[10] = a[10],
                    b[11] = a[11],
                    b[12] = a[12],
                    b[13] = a[13],
                    b[14] = a[14],
                    b[15] = a[15],
                    b
            }
            , rh = function(a, b) {
                return a[0] = b[0],
                    a[1] = b[1],
                    a[2] = b[2],
                    a[3] = b[3],
                    a[4] = b[4],
                    a[5] = b[5],
                    a[6] = b[6],
                    a[7] = b[7],
                    a[8] = b[8],
                    a[9] = b[9],
                    a[10] = b[10],
                    a[11] = b[11],
                    a[12] = b[12],
                    a[13] = b[13],
                    a[14] = b[14],
                    a[15] = b[15],
                    a
            }
            , sh = function(a) {
                return a[0] = 1,
                    a[1] = 0,
                    a[2] = 0,
                    a[3] = 0,
                    a[4] = 0,
                    a[5] = 1,
                    a[6] = 0,
                    a[7] = 0,
                    a[8] = 0,
                    a[9] = 0,
                    a[10] = 1,
                    a[11] = 0,
                    a[12] = 0,
                    a[13] = 0,
                    a[14] = 0,
                    a[15] = 1,
                    a
            }
            , th = function(a, b) {
                var c = a[0]
                    , d = a[1]
                    , e = a[2];
                return a[0] = b[0] * c + b[4] * d + b[8] * e + b[12],
                    a[1] = b[1] * c + b[5] * d + b[9] * e + b[13],
                    a[2] = b[2] * c + b[6] * d + b[10] * e + b[14],
                    a
            }
            , uh = function(a, b) {
                var c = a[0]
                    , d = a[1]
                    , e = a[2]
                    , f = a[3];
                return a[0] = b[0] * c + b[4] * d + b[8] * e + b[12] * f,
                    a[1] = b[1] * c + b[5] * d + b[9] * e + b[13] * f,
                    a[2] = b[2] * c + b[6] * d + b[10] * e + b[14] * f,
                    a[3] = b[3] * c + b[7] * d + b[11] * e + b[15] * f,
                    a
            }
            , vh = function() {
                var a, b, c, d, e = wd(ve[1] + ve[7]), f = wd(ve[0] + ve[3] - ve[10]), g = wd(ve[8] + 2), i = function() {
                        return b = c.charAt(a),
                            a += 1,
                            b
                    }
                    , j = function() {
                        var a = "";
                        if (b === g)
                            for (; i(); ) {
                                if (b === g)
                                    return i(),
                                        a;
                                a += b
                            }
                        else
                            i()
                    }
                    , k = function() {
                        for (; b && " " >= b; )
                            i()
                    }
                    , l = function() {
                        var a, c = {};
                        if (b === e) {
                            if (i(),
                                    k(),
                                b === f)
                                return i(),
                                    c;
                            for (; b; ) {
                                if (a = j(),
                                        k(),
                                        i(),
                                        c[a] = d(),
                                        k(),
                                    b === f)
                                    return i(),
                                        c;
                                i(),
                                    k()
                            }
                        }
                    }
                ;
                return d = function() {
                    switch (k(),
                        b) {
                        case e:
                            return l();
                        default:
                            return j()
                    }
                }
                    ,
                    function(e) {
                        if (h = {},
                                e) {
                            var f;
                            if (c = e,
                                    a = 0,
                                    b = " ",
                                    f = d(),
                                    k(),
                                    !b)
                                return f
                        }
                    }
            }()
            , wh = function(a, b) {
                if (b) {
                    var c = A(b)
                        , d = y(b)
                        , e = a[4]
                        , f = a[5]
                        , g = a[6]
                        , h = a[7]
                        , i = a[8]
                        , j = a[9]
                        , k = a[10]
                        , l = a[11];
                    a[4] = e * d + i * c,
                        a[5] = f * d + j * c,
                        a[6] = g * d + k * c,
                        a[7] = h * d + l * c,
                        a[8] = i * d - e * c,
                        a[9] = j * d - f * c,
                        a[10] = k * d - g * c,
                        a[11] = l * d - h * c
                }
            }
            , xh = function(a, b) {
                if (b) {
                    var c = A(b)
                        , d = y(b)
                        , e = a[0]
                        , f = a[1]
                        , g = a[2]
                        , h = a[3]
                        , i = a[8]
                        , j = a[9]
                        , k = a[10]
                        , l = a[11];
                    a[0] = e * d - i * c,
                        a[1] = f * d - j * c,
                        a[2] = g * d - k * c,
                        a[3] = h * d - l * c,
                        a[8] = e * c + i * d,
                        a[9] = f * c + j * d,
                        a[10] = g * c + k * d,
                        a[11] = h * c + l * d
                }
            }
            , yh = function(a, b) {
                if (b) {
                    var c = A(b)
                        , d = y(b)
                        , e = a[0]
                        , f = a[1]
                        , g = a[2]
                        , h = a[3]
                        , i = a[4]
                        , j = a[5]
                        , k = a[6]
                        , l = a[7];
                    a[0] = e * d + i * c,
                        a[1] = f * d + j * c,
                        a[2] = g * d + k * c,
                        a[3] = h * d + l * c,
                        a[4] = i * d - e * c,
                        a[5] = j * d - f * c,
                        a[6] = k * d - g * c,
                        a[7] = l * d - h * c
                }
            }
            , zh = function(a, b, c) {
                return Ah(j, c === !1 ? j : a.s3(), a.r3(), a.getRotationMode(), a.p3(), j, b)
            }
            , Ah = function(a, b, c, d, e, f, g) {
                return f || (f = oh()),
                e && mk(f, e),
                    tj(f, c, d),
                g && ok(f, f, g),
                b && nk(f, b),
                a && ok(f, f, a),
                    f
            }
            , Bh = function(a, b, c) {
                b = L(b),
                    c = L(c);
                var d = this;
                d.g = a,
                    d._84O = b,
                    d._85O = c,
                    d._70I = !0,
                    d.F = 0,
                    d._83O = b + c,
                    d.pen = {
                        x: 0,
                        y: 0
                    }
            }
            , Ch = "lineDashOffset"
            , Dh = "setLineDash"
            , Eh = function(a) {
                for (var b in a)
                    1 === b.length && (Ch = a[b]);
                return b ? 1 : 0
            }
            , Fh = function(a, b, c) {
                return Ad(b) ? a : a[Dh] ? (a[Dh](b),
                c && (a.lineDashOffset = c),
                    a) : new Bh(a,b[0],b.length > 1 ? b[1] : b[0])
            }
            , Gh = function(a, b) {
                !Ad(b) && a[Dh] && (a[Dh](Hc),
                    a.lineDashOffset = 0)
            }
        ;
        if (gh(Bh, b, {
                _69I: 6,
                moveTo: function(a, b) {
                    var c = this
                        , d = c.pen;
                    d.x = a,
                        d.y = b,
                        c.g.moveTo(a, b),
                    c.start || (c.start = {
                        x: a,
                        y: b
                    })
                },
                lineTo: function(a, b) {
                    var c = this
                        , d = c.pen
                        , e = a - d.x
                        , f = b - d.y
                        , g = H(f, e)
                        , h = y(g)
                        , i = A(g)
                        , j = c._23O(d.x, d.y, a, b)
                        , k = c._85O
                        , l = c._84O
                        , m = c._83O;
                    if (c.F) {
                        if (c.F > j)
                            return c._70I ? c._72I(a, b) : c.moveTo(a, b),
                                void (c.F -= j);
                        if (c._70I ? c._72I(d.x + h * c.F, d.y + i * c.F) : c.moveTo(d.x + h * c.F, d.y + i * c.F),
                                j -= c.F,
                                c.F = 0,
                                c._70I = !c._70I,
                                !j)
                            return
                    }
                    var n = s(j / m);
                    if (n) {
                        for (var o = h * l, p = i * l, q = h * k, r = i * k, t = 0; n > t; t++)
                            c._70I ? (c._72I(d.x + o, d.y + p),
                                c.moveTo(d.x + q, d.y + r)) : (c.moveTo(d.x + q, d.y + r),
                                c._72I(d.x + o, d.y + p));
                        j -= m * n
                    }
                    c._70I ? j > l ? (c._72I(d.x + h * l, d.y + i * l),
                        c.moveTo(a, b),
                        c.F = k - (j - l),
                        c._70I = !1) : (c._72I(a, b),
                        j === l ? (c.F = 0,
                            c._70I = !c._70I) : (c.F = l - j,
                            c.moveTo(a, b))) : j > k ? (c.moveTo(d.x + h * k, d.y + i * k),
                        c._72I(a, b),
                        c.F = l - (j - k),
                        c._70I = !0) : (c.moveTo(a, b),
                        j === k ? (c.F = 0,
                            c._70I = !c._70I) : c.F = k - j)
                },
                quadraticCurveTo: function(a, b, c, d) {
                    var e, f = this, g = f.pen, h = g.x, i = g.y, j = f._22O(h, i, a, b, c, d), k = 0, l = 0, m = f._85O, n = f._84O;
                    if (f.F) {
                        if (f.F > j)
                            return f._70I ? f._71I(a, b, c, d) : f.moveTo(c, d),
                                void (f.F -= j);
                        if (k = f.F / j,
                                e = f._20O(h, i, a, b, c, d, k),
                                f._70I ? f._71I(e[2], e[3], e[4], e[5]) : f.moveTo(e[4], e[5]),
                                f.F = 0,
                                f._70I = !f._70I,
                                !j)
                            return
                    }
                    var o = j - j * k
                        , p = s(o / f._83O)
                        , q = n / j
                        , r = m / j;
                    if (p)
                        for (var t = 0; p > t; t++)
                            f._70I ? (l = k + q,
                                e = f._21O(h, i, a, b, c, d, k, l),
                                f._71I(e[2], e[3], e[4], e[5]),
                                k = l,
                                l = k + r,
                                e = f._21O(h, i, a, b, c, d, k, l),
                                f.moveTo(e[4], e[5])) : (l = k + r,
                                e = f._21O(h, i, a, b, c, d, k, l),
                                f.moveTo(e[4], e[5]),
                                k = l,
                                l = k + q,
                                e = f._21O(h, i, a, b, c, d, k, l),
                                f._71I(e[2], e[3], e[4], e[5])),
                                k = l;
                    o = j - j * k,
                        f._70I ? o > n ? (l = k + q,
                            e = f._21O(h, i, a, b, c, d, k, l),
                            f._71I(e[2], e[3], e[4], e[5]),
                            f.moveTo(c, d),
                            f.F = m - (o - n),
                            f._70I = !1) : (e = f._19O(h, i, a, b, c, d, k),
                            f._71I(e[2], e[3], e[4], e[5]),
                            j === n ? (f.F = 0,
                                f._70I = !f._70I) : (f.F = n - o,
                                f.moveTo(c, d))) : o > m ? (l = k + r,
                            e = f._21O(h, i, a, b, c, d, k, l),
                            f.moveTo(e[4], e[5]),
                            e = f._19O(h, i, a, b, c, d, l),
                            f._71I(e[2], e[3], e[4], e[5]),
                            f.F = n - (o - m),
                            f._70I = !0) : (f.moveTo(c, d),
                            o === m ? (f.F = 0,
                                f._70I = !f._70I) : f.F = m - o)
                },
                bezierCurveTo: function() {
                    var a = arguments;
                    this.pen = {
                        x: a[4],
                        y: a[5]
                    },
                        this.g.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5])
                },
                arc: function(a, b, c, d, e, f) {
                    f || (d = -d,
                        e = -e),
                        _e(this, a, b, d, e - d, c, c, !1)
                },
                rect: function(a, b, c, d) {
                    var e = this;
                    e.pen = {
                        x: a,
                        y: b
                    },
                        e.moveTo(a, b),
                        e.lineTo(a, b + d),
                        e.lineTo(a + c, b + d),
                        e.lineTo(a + c, b),
                        e.lineTo(a, b)
                },
                beginPath: function() {
                    this.g.beginPath()
                },
                closePath: function() {
                    this.lineTo(this.start.x, this.start.y)
                },
                _23O: function(a, b, c, d) {
                    var e = c - a
                        , f = d - b;
                    return u(e * e + f * f)
                },
                _22O: function(a, b, c, d, e, f, g) {
                    for (var h, i, j, k, l, m, n, o = 0, p = a, q = b, r = g > 0 ? g : this._69I, s = 1; r >= s; s++)
                        j = s / r,
                            k = 1 - j,
                            l = k * k,
                            m = 2 * j * k,
                            n = j * j,
                            h = l * a + m * c + n * e,
                            i = l * b + m * d + n * f,
                            o += this._23O(p, q, h, i),
                            p = h,
                            q = i;
                    return o
                },
                _21O: function(a, b, c, d, e, f, g, h) {
                    var i = this;
                    if (0 === g)
                        return i._20O(a, b, c, d, e, f, h);
                    if (1 === h)
                        return i._19O(a, b, c, d, e, f, g);
                    var j = i._20O(a, b, c, d, e, f, h);
                    return j.push(g / h),
                        i._19O.apply(i, j)
                },
                _20O: function(a, b, c, d, e, f, g) {
                    if (1 !== g) {
                        var h = c + (e - c) * g
                            , i = d + (f - d) * g;
                        c = a + (c - a) * g,
                            d = b + (d - b) * g,
                            e = c + (h - c) * g,
                            f = d + (i - d) * g
                    }
                    return [a, b, c, d, e, f]
                },
                _19O: function(a, b, c, d, e, f, g) {
                    if (1 !== g) {
                        var h = a + (c - a) * g
                            , i = b + (d - b) * g;
                        c += (e - c) * g,
                            d += (f - d) * g,
                            a = h + (c - h) * g,
                            b = i + (d - i) * g
                    }
                    return [a, b, c, d, e, f]
                },
                _72I: function(a, b) {
                    var c = this.pen;
                    (a !== c.x || b !== c.y) && (c.x = a,
                        c.y = b,
                        this.g.lineTo(a, b))
                },
                _71I: function(a, b, c, d) {
                    var e = this.pen;
                    (a !== c || b !== d || c !== e.x || d !== e.y) && (e.x = c,
                        e.y = d,
                        this.g.quadraticCurveTo(a, b, c, d))
                }
            }),
            J && Q) {
            var Hh = Q.toString();
            K = Hh.indexOf($a.substr(0, 2)) > 0 && Hh.indexOf(da + da.substr(1, 1)) > 1 ? !0 : !1
        }
        var Ih = o.chart
            , Jh = m.compStack = []
            , Kh = /^style@/
            , Lh = /^attr@/
            , Mh = /^field@/
            , Nh = function(a, b) {
            return a ? Ph(a.width, b) : 0
        }
            , Oh = function(a, b) {
            return a ? Ph(a.height, b) : 0
        }
            , Ph = function(a, b, d) {
            if (!a || !a.func)
                return a;
            var e, f = a.func, g = a.value;
            return e = kd(f) ? f(b, d) : b ? Kh.test(f) ? b.s(f.slice(6)) : Lh.test(f) ? b.a(f.slice(5)) : Mh.test(f) ? b[f.slice(6)] : b[f] ? b[f](d) : g : g,
                g !== c && e == j ? g : e
        }
            , Qh = m.drawImage = function() {
            var a, b, c, d, e, f = function(a, d, e) {
                var f = a[d];
                return f && f.func ? (f = Ph(f, b, c),
                e && (f = e(f))) : e && (f = a[d] = e(f)),
                    f
            }
                , g = function(a, b) {
                var c = f(a, b);
                if (e && c) {
                    var d = Ne(e);
                    return c = Me(c),
                    "rgba(" + s(c[0] * d[0]) + "," + s(c[1] * d[1]) + "," + s(c[2] * d[2]) + "," + c[3] + ")"
                }
                return c
            }
                , h = function(a) {
                if (ld(a)) {
                    for (var b = new Rh, c = a.length, d = 0; c > d; d += 2)
                        b.add({
                            x: a[d],
                            y: a[d + 1]
                        });
                    a = b
                }
                return a
            }
                , i = function(a, b) {
                var c = f(a, qa);
                if (ld(c)) {
                    var d = c.length
                        , e = f(a, "relative")
                        , g = b.width
                        , h = b.height;
                    if (4 === d)
                        c = {
                            x: c[0],
                            y: c[1],
                            width: c[2],
                            height: c[3]
                        },
                        e && (c.x *= g,
                            c.y *= h,
                            c.width *= g,
                            c.height *= h);
                    else if (3 === d) {
                        var i = c[0];
                        c = {
                            width: c[1],
                            height: c[2]
                        },
                        e && (c.width *= g,
                            c.height *= h),
                            i = sf(i, b, c),
                            c.x = i.x - c.width / 2,
                            c.y = i.y - c.height / 2
                    }
                    var j = f(a, "offsetX");
                    j && (c.x += j),
                        j = f(a, "offsetY"),
                    j && (c.y += j)
                }
                return c
            }
                , k = function(a) {
                return ld(a) ? new Rh(a) : a
            }
                , l = function(b, c) {
                if (b) {
                    var d = c.x + c.width / 2
                        , e = c.y + c.height / 2;
                    a.save(),
                        de(a, d, e),
                        ee(a, b),
                        de(a, -d, -e)
                }
            }
                , n = function(b) {
                b && a.restore()
            }
                , o = function(b, c, e) {
                var h = f(b, "path")
                    , i = f(b, Xa)
                    , k = j
                    , m = Se(null , h);
                if (e || (e = b.unionRect,
                    e || (e = Tg(m),
                    b.path.func || (b.unionRect = e)),
                        k = e),
                        e) {
                    k || (k = b.unionRect,
                    k || (k = Tg(m),
                    b.path.func || (b.unionRect = k)));
                    var o = Bd(k, e);
                    if (o)
                        l(i, k);
                    else {
                        var p = k.width
                            , q = k.height
                            , r = e.width
                            , s = e.height
                            , t = r / p
                            , u = s / q;
                        a.save(),
                            de(a, e.x + r / 2, e.y + s / 2),
                            a.scale(t, u),
                        i && ee(a, i),
                            de(a, -k.x - p / 2, -k.y - q / 2)
                    }
                    var v = f(b, "borderPattern")
                        , w = Fh(a, v)
                        , x = g(b, "background")
                        , y = g(b, "borderColor")
                        , z = f(b, "borderWidth")
                        , A = f(b, "gradient")
                        , B = g(b, "gradientColor")
                        , C = f(b, "border3d")
                        , D = f(b, "border3dColor")
                        , E = f(b, "border3dAccuracy")
                        , F = a.lineJoin
                        , G = a.lineCap;
                    if (a.lineJoin = f(b, "borderJoin") || dg,
                            a.lineCap = f(b, "borderCap") || cg,
                            x ? (Ze(a, x, A, B, k),
                                Se(a, h),
                                a.fill(),
                            w !== a && Se(a, h)) : Se(a, h),
                        z && y && (a.lineWidth = z,
                            a.strokeStyle = y,
                            a.stroke(),
                        C && Ve(a, y, D, z, d, E)),
                            Gh(a, v),
                            f(b, "dash")) {
                        var H = f(b, "dashWidth") || z;
                        if (H > 0) {
                            v = f(b, "dashPattern") || bg;
                            var w = Fh(a, v, f(b, "dashOffset"))
                                , I = f(b, "dashColor") || wf;
                            w !== a && Se(a, h),
                                a.strokeStyle = I,
                                a.lineWidth = H,
                                a.stroke(),
                            f(b, "dash3d") && Ve(a, I, f(b, "dash3dColor"), H, d, f(b, "dash3dAccuracy")),
                                Gh(a, v)
                        }
                    }
                    c === qa && cf(a, x, f(b, "depth"), k),
                        a.lineJoin = F,
                        a.lineCap = G,
                        o ? n(i) : a.restore()
                }
            }
                , p = function(b, c, i) {
                var m = f(b, Ga, h)
                    , o = f(b, Xa)
                    , p = c === ta
                    , q = j;
                if (!i && p && (i = b.unionRect,
                    i || (i = Tg(m),
                    b.points.func || (b.unionRect = i)),
                        q = i),
                        i) {
                    p ? q || (q = b.unionRect,
                        q || (q = Tg(m),
                        b.points.func || (b.unionRect = q))) : q = i;
                    var r = Bd(q, i);
                    if (r)
                        l(o, q);
                    else {
                        var s = q.width
                            , t = q.height
                            , u = i.width
                            , v = i.height
                            , w = u / s
                            , x = v / t;
                        a.save(),
                            de(a, i.x + u / 2, i.y + v / 2),
                            a.scale(w, x),
                        o && ee(a, o),
                            de(a, -q.x - s / 2, -q.y - t / 2)
                    }
                    var y, z, A, B, C = f(b, "borderPattern"), D = Fh(a, C), E = g(b, "background"), F = yg(f(b, "repeatImage"), e), G = g(b, "borderColor"), H = f(b, "borderWidth"), I = f(b, "segments", k), J = f(b, "gradient"), K = g(b, "gradientColor"), L = f(b, "border3d"), M = f(b, "border3dColor"), N = f(b, "border3dAccuracy"), O = f(b, "closePath"), P = a.lineJoin, Q = a.lineCap;
                    if (a.lineJoin = f(b, "borderJoin") || dg,
                            a.lineCap = f(b, "borderCap") || cg,
                            p ? E || F ? (F ? $e(a, F) : Ze(a, E, J, K, q),
                                Te(a, m, I, O),
                                a.fill(),
                            D !== a && Te(D, m, I, O)) : Te(D, m, I, O) : ("roundRect" === c ? y = f(b, "cornerRadius") : "polygon" === c ? y = f(b, "polygonSide") : "arc" === c && (y = f(b, "arcFrom"),
                                    z = f(b, "arcTo"),
                                    A = f(b, "arcClose"),
                                    B = f(b, "arcOval")),
                                E || F ? (F ? $e(a, F) : Ze(a, E, J, K, q),
                                    Ye(a, c, q, y, z, A, B),
                                    a.fill(),
                                a !== D && Ye(D, c, q, y, z, A, B)) : Ye(D, c, q, y, z, A, B)),
                        H && G && (a.lineWidth = H,
                            a.strokeStyle = G,
                            a.stroke(),
                        L && Ve(a, G, M, H, d, N)),
                            Gh(a, C),
                            f(b, "dash")) {
                        var R = f(b, "dashWidth") || H;
                        if (R > 0) {
                            C = f(b, "dashPattern") || bg;
                            var D = Fh(a, C, f(b, "dashOffset"))
                                , S = f(b, "dashColor") || wf;
                            D !== a && (p ? Te(D, m, I, O) : Ye(D, c, q, y, z, A, B)),
                                a.strokeStyle = S,
                                a.lineWidth = R,
                                a.stroke(),
                            f(b, "dash3d") && Ve(a, S, f(b, "dash3dColor"), R, d, f(b, "dash3dAccuracy")),
                                Gh(a, C)
                        }
                    }
                    c === qa && cf(a, E, f(b, "depth"), q),
                        a.lineJoin = P,
                        a.lineCap = Q,
                        r ? n(o) : a.restore()
                }
            }
                , q = function(d, g) {
                var h = e
                    , i = e || f(d, Wb)
                    , j = yg(f(d, "name"), i);
                j && (Ag(a, j, f(d, "stretch"), g.x, g.y, g.width, g.height, b, c, i),
                    e = h)
            }
                , r = function(b, c) {
                var d = f(b, "text");
                d != j && Jg(a, d, f(b, "font"), g(b, Wb), c.x, c.y, c.width, c.height, f(b, "align"), f(b, "vAlign"))
            }
                , t = function(b, c) {
                bf(a, g(b, Wb), c.x, c.y, c.width, c.height, f(b, "width"))
            }
                , u = function(c, d) {
                var e = f(c, Ha)
                    , g = 0;
                if (e && (e.forEach(function(a) {
                        g += a
                    }),
                    g > 0)) {
                    for (var h = f(c, "colors") || Ih, i = f(c, "startAngle") || 0, k = f(c, "hollow"), l = f(c, Ka), m = f(c, Pa), n = f(c, Qa), o = l ? new Rh : j, p = d.x, q = d.y, r = d.width, s = d.height, t = p + r / 2, u = q + s / 2, v = w(r, s) / 2, x = 0, z = 0; z < e.length; z++) {
                        var B = e[z]
                            , C = E * B / g
                            , D = i + C;
                        if (a.fillStyle = h[x++],
                            x === h.length && (x = 0),
                                a.beginPath(),
                                k) {
                            var F = t + y(i) * v / 2
                                , G = u + A(i) * v / 2
                                , H = t + y(D) * v
                                , I = u + A(D) * v;
                            a.moveTo(F, G),
                                a.arc(t, u, v / 2, i, D, !1),
                                a.lineTo(H, I),
                                a.arc(t, u, v, D, i, !0)
                        } else
                            a.moveTo(t, u),
                                a.arc(t, u, v, D, i, !0);
                        o && (C = (i + D) / 2,
                            o.add({
                                text: kd(l) ? l(B, z, g, b) : B,
                                x: t + .75 * y(C) * v,
                                y: u + .75 * A(C) * v
                            })),
                            a.closePath(),
                            a.fill(),
                            i = D
                    }
                    o && o.each(function(b) {
                        Jg(a, b.text, m, n, b.x, b.y, 0, 0, fa)
                    })
                }
            }
                , x = function(c, d) {
                var e = f(c, Ia);
                if (e && e.length > 0) {
                    var g = e.length
                        , h = f(c, Ka)
                        , i = f(c, Pa)
                        , k = f(c, Qa)
                        , l = h ? new Rh : j
                        , m = f(c, "minValue") || 0
                        , n = f(c, "maxValue");
                    if (n == j && (n = 0,
                            e.forEach(function(a) {
                                a.values.forEach(function(a) {
                                    n = v(n, a)
                                })
                            })),
                        m === n)
                        return;
                    for (var o = d.height / (n - m), p = d.y + n * o, q = f(e[0], Ha).length, r = d.width / (3 * q + 1), s = 2 * r / g, t = 0, u = 0; g > u; u++)
                        for (var w = e[u], x = f(w, Wb), y = f(w, "colors"), z = f(w, Ha), A = 0; q > A; A++) {
                            y ? a.fillStyle = y[A] : x ? a.fillStyle = x : (a.fillStyle = Ih[t++],
                            t === Ih.length && (t = 0));
                            var B = z[A]
                                , C = B * o
                                , D = d.x + (1 + 3 * A) * r + u * s;
                            if (Xe(a, D, p - C, s, C),
                                    l) {
                                var E = kd(h) ? h(B, A, w, b) : B
                                    , F = Kg(i, E).height;
                                l.add({
                                    x: D,
                                    y: p - C - F,
                                    width: s,
                                    height: F,
                                    text: E
                                })
                            }
                        }
                    l && l.each(function(b) {
                        Jg(a, b.text, i, k, b.x, b.y, b.width, b.height, fa)
                    })
                }
            }
                , z = function(c, d) {
                var e = f(c, Ia);
                if (e && e.length > 0) {
                    var g = e.length
                        , h = f(e[0], Ha).length
                        , i = d.width / (3 * h + 1)
                        , k = 0
                        , l = f(c, "maxValue")
                        , m = f(c, Ka)
                        , n = f(c, Pa)
                        , o = f(c, Qa)
                        , p = m ? new Rh : j;
                    if (l == j) {
                        l = 0;
                        for (var q = 0; h > q; q++) {
                            for (var r = 0, s = 0; g > s; s++)
                                r += f(e[s], Ha)[q];
                            l = v(l, r)
                        }
                    }
                    if (l > 0) {
                        for (var q = 0; h > q; q++)
                            for (var t = d.y + d.height, s = 0; g > s; s++) {
                                var u = e[s]
                                    , w = f(u, Wb)
                                    , x = f(u, Ha)[q]
                                    , y = x / l * d.height;
                                w ? a.fillStyle = w : (a.fillStyle = Ih[k++],
                                k === Ih.length && (k = 0)),
                                    t -= y;
                                var z = {
                                    x: d.x + (1 + 3 * q) * i,
                                    y: t,
                                    width: 2 * i,
                                    height: y
                                };
                                Xe(a, z.x, z.y, z.width, z.height),
                                p && (z.text = kd(m) ? m(x, q, u, b) : x,
                                    p.add(z))
                            }
                        p && p.each(function(b) {
                            Jg(a, b.text, n, o, b.x, b.y, b.width, b.height, fa)
                        })
                    }
                }
            }
                , B = function(c, d) {
                var e = f(c, Ia);
                if (e && e.length > 0) {
                    for (var g = e.length, h = f(e[0], Ha).length, i = d.width / (3 * h + 1), k = 0, l = f(c, Ka), m = f(c, Pa), n = f(c, Qa), o = l ? new Rh : j, p = 0; h > p; p++) {
                        for (var q = 0, r = 0; g > r; r++)
                            q += f(e[r], Ha)[p];
                        if (q > 0) {
                            var s = d.y + d.height;
                            for (r = 0; g > r; r++) {
                                var t = e[r]
                                    , u = f(t, Wb)
                                    , v = f(t, Ha)[p]
                                    , w = v / q * d.height;
                                u ? a.fillStyle = u : (a.fillStyle = Ih[k++],
                                k === Ih.length && (k = 0)),
                                    s -= w;
                                var x = {
                                    x: d.x + (1 + 3 * p) * i,
                                    y: s,
                                    width: 2 * i,
                                    height: w
                                };
                                Xe(a, x.x, x.y, x.width, x.height),
                                o && (x.text = kd(l) ? l(v, p, t, b) : v,
                                    o.add(x))
                            }
                        }
                    }
                    o && o.each(function(b) {
                        Jg(a, b.text, m, n, b.x, b.y, b.width, b.height, fa)
                    })
                }
            }
                , C = function(c, e) {
                var g = f(c, Ia);
                if (g && g.length > 0) {
                    var h = g.length
                        , i = f(c, "minValue") || 0
                        , k = f(c, "maxValue");
                    if (k == j && (k = 0,
                            g.forEach(function(a) {
                                a.values.forEach(function(a) {
                                    k = v(k, a)
                                })
                            })),
                        i === k)
                        return;
                    for (var l = e.height / (k - i), m = e.y + k * l, n = f(g[0], Ha).length, o = e.width / (3 * n + 1), p = 0, q = f(c, "lineWidth") || 2, r = f(c, "line3d"), s = f(c, "linePoint"), t = f(c, Ka), u = f(c, Pa), w = f(c, Qa), x = 0; h > x; x++) {
                        var y = g[x]
                            , z = f(y, Wb)
                            , A = f(y, Ha);
                        z ? a.strokeStyle = z : (z = a.strokeStyle = Ih[p++],
                        p === Ih.length && (p = 0)),
                            a.beginPath();
                        for (var B = 0; n > B; B++) {
                            var C = e.x + (2 + 3 * B) * o
                                , D = m - A[B] * l;
                            0 === B ? a.moveTo(C, D) : a.lineTo(C, D)
                        }
                        if (a.lineWidth = q,
                                a.stroke(),
                            r && Ve(a, z, j, q, d),
                            s || t) {
                            var F, G = q / 2 + 2;
                            for (B = 0; n > B; B++) {
                                var H = A[B];
                                if (C = e.x + (2 + 3 * B) * o,
                                        D = m - H * l,
                                        kd(s) ? s(a, C, D, z, B, y, b) : s && (a.fillStyle = z,
                                                a.beginPath(),
                                                a.arc(C, D, G, 0, E, !0),
                                                a.fill()),
                                        kd(t) ? F = t(H, B, y, b) : t && (F = H),
                                        F) {
                                    var I = Kg(u, F).height
                                        , J = a.shadowBlur;
                                    if (J) {
                                        var K = a.shadowOffsetX
                                            , L = a.shadowOffsetY
                                            , M = a.shadowColor;
                                        a.shadowOffsetX = 0,
                                            a.shadowOffsetY = 0,
                                            a.shadowBlur = 0,
                                            a.shadowColor = j
                                    }
                                    Jg(a, F, u, w, C, D - I - G + 2, 0, I, fa),
                                    J && (a.shadowOffsetX = K,
                                        a.shadowOffsetY = L,
                                        a.shadowColor = M,
                                        a.shadowBlur = J)
                                }
                            }
                        }
                    }
                }
            }
                , D = {
                border: t,
                image: q,
                text: r,
                pieChart: u,
                columnChart: x,
                stackedColumnChart: z,
                percentageColumnChart: B,
                lineChart: C
            };
            return function(g, h, k, q, r, s, t, u, v) {
                if (h && r && s) {
                    if (a = g,
                            b = t,
                            c = u,
                            d = c && c._zoom ? c._zoom : 1,
                            e = v,
                            h.tagName)
                        return void a.drawImage(h, k, q, r, s);
                    if (f(h, "visible") !== !1) {
                        e || (e = Ph(h.color, b, c));
                        var w = Nh(h, b)
                            , x = Oh(h, b)
                            , y = {
                            x: 0,
                            y: 0,
                            width: w,
                            height: x
                        }
                            , z = f(h, "clip")
                            , A = f(h, "opacity");
                        a.save(),
                            de(a, k, q),
                        (w !== r || x !== s) && a.scale(r / w, s / x),
                        z && (kd(z) ? z(a, w, x, b, c, h) : (a.beginPath(),
                            a.rect(0, 0, w, x),
                            a.clip())),
                        A != j && (a.globalAlpha *= A),
                            f(h, "comps").forEach(function(d) {
                                if (f(d, _a) !== !1) {
                                    Jh.splice(0, 0, d);
                                    var e = f(d, "opacity")
                                        , g = f(d, "shadow")
                                        , h = f(d, "type")
                                        , k = i(d, y);
                                    if (e != j) {
                                        var q = a.globalAlpha;
                                        a.globalAlpha *= e
                                    }
                                    if (g) {
                                        var r = a.shadowOffsetX
                                            , s = a.shadowOffsetY
                                            , t = a.shadowBlur
                                            , u = a.shadowColor
                                            , v = f(d, "shadowOffsetX")
                                            , w = f(d, "shadowOffsetY")
                                            , x = f(d, "shadowBlur")
                                            , z = f(d, "shadowColor");
                                        a.shadowOffsetX = v == j ? 3 : v,
                                            a.shadowOffsetY = w == j ? 3 : w,
                                            a.shadowBlur = x == j ? 6 : x,
                                            a.shadowColor = z || uf
                                    }
                                    if (kd(h))
                                        h(a, k, d, b, c);
                                    else if (m.getCompType(h))
                                        m.getCompType(h)(a, k, d, b, c);
                                    else if (hf[h] || h === ta)
                                        p(d, h, k);
                                    else if ("SVGPath" === h)
                                        o(d, h, k);
                                    else if (D[h] && k) {
                                        var A = f(d, Xa);
                                        l(A, k),
                                            D[h](d, k),
                                            n(A)
                                    }
                                    g && (a.shadowOffsetX = r,
                                        a.shadowOffsetY = s,
                                        a.shadowBlur = t,
                                        a.shadowColor = u),
                                    e != j && (a.globalAlpha = q),
                                        Jh.splice(0, 1)
                                }
                            }),
                            a.restore()
                    }
                }
            }
        }();
        m.getCurrentComp = function() {
            return Jh[0]
        }
            ,
            m.getParentComp = function() {
                return Jh[1]
            }
            ,
            m.getInternal = function() {
                return {
                    isEnter: Fe,
                    isEsc: Ge,
                    isSpace: Ee,
                    isLeft: Ae,
                    isUp: Be,
                    isRight: Ce,
                    isDown: De,
                    addMethod: vd,
                    superCall: yd,
                    toPointsArray: Ue,
                    translateAndScale: ce,
                    appendArray: td,
                    createWorldMatrix: Ah,
                    vec3TransformMat4: th,
                    setCanvas: Vd,
                    createDiv: Rd,
                    createCanvas: Sd,
                    createImage: Yc,
                    initContext: be,
                    layout: he,
                    fillRect: Xe,
                    Mat: jf,
                    drawBorder: bf,
                    isString: gd,
                    setBorder: Td,
                    getPropertyValue: Gd,
                    setPropertyValue: Hd,
                    drawVerticalLine: Id,
                    draw3DRect: cf,
                    getPinchDist: lf,
                    isSameRect: Bd,
                    getPosition: sf,
                    intersectionLineRect: Ed,
                    getNodeRect: ni,
                    getImageWidth: Nh,
                    getImageHeight: Oh,
                    formatNumber: sd,
                    initItemElement: Qd,
                    drawPoints: Te,
                    createG2: Fh,
                    closePopup: je,
                    isH: ad,
                    createAnim: ud,
                    createNormalMatrix: Sk,
                    createNormals: uk,
                    toFloatArray: em,
                    glMV: Tk,
                    batchShape: xl,
                    createNodeMatrix: zh,
                    getFaceInfo: Zk,
                    transformAppend: ak,
                    drawFaceInfo: $k,
                    to3dPointsArray: hm,
                    setGLDebugMode: function(a) {
                        Tj = a
                    },
                    cube: function() {
                        return {
                            vs: Gl,
                            is: Hl,
                            uv: Il
                        }
                    },
                    ui: function() {
                        return {
                            DataUI: Bj,
                            NodeUI: Cj,
                            EdgeUI: Dj,
                            GroupUI: Fj,
                            ShapeUI: Gj,
                            GridUI: Ij,
                            Data3dUI: Dm,
                            Node3dUI: Em,
                            Shape3dUI: Gm
                        }
                    },
                    getInternalVersion: function() {
                        return "U2FsdGVkX19Rltpv2u134rxS5X2w1356YJnx2LJCzVo7ExGEbi3JNp+KCaznx6tx"
                    },
                    getDragger: function() {
                        return ke
                    },
                    addMSMap: function(a) {
                        vd(Uf, a)
                    },
                    k: e
                }
            }
            ,
            function(a) {
                function b(a, b) {
                    a != j && (b == j && Ub != typeof a ? this._54O(a, 256) : this._54O(a, b))
                }
                function c() {
                    return new b(j)
                }
                function f(a, b, c, d, e, f) {
                    for (; --f >= 0; ) {
                        var g = b * this[a++] + c[d] + e;
                        e = s(g / 67108864),
                            c[d++] = 67108863 & g
                    }
                    return e
                }
                function h(a, b, c, d, e, f) {
                    for (var g = 32767 & b, h = b >> 15; --f >= 0; ) {
                        var i = 32767 & this[a]
                            , j = this[a++] >> 15
                            , k = h * i + j * g;
                        i = g * i + ((32767 & k) << 15) + c[d] + (1073741823 & e),
                            e = (i >>> 30) + (k >>> 15) + h * j + (e >>> 30),
                            c[d++] = 1073741823 & i
                    }
                    return e
                }
                function i(a, b, c, d, e, f) {
                    for (var g = 16383 & b, h = b >> 14; --f >= 0; ) {
                        var i = 16383 & this[a]
                            , j = this[a++] >> 14
                            , k = h * i + j * g;
                        i = g * i + ((16383 & k) << 14) + c[d] + e,
                            e = (i >> 28) + (k >> 14) + h * j,
                            c[d++] = 268435455 & i
                    }
                    return e
                }
                function k(a) {
                    return Ba.charAt(a)
                }
                function l(a, b) {
                    var c = Ca[a.charCodeAt(b)];
                    return c == j ? -1 : c
                }
                function m(a) {
                    for (var b = this.t - 1; b >= 0; --b)
                        a[b] = this[b];
                    a.t = this.t,
                        a.s = this.s
                }
                function n(a) {
                    this.t = 1,
                        this.s = 0 > a ? -1 : 0,
                        a > 0 ? this[0] = a : -1 > a ? this[0] = a + this.DV : this.t = 0
                }
                function o(a) {
                    var b = c();
                    return b._58O(a),
                        b
                }
                function p(a, c) {
                    var d, e = this;
                    if (16 == c)
                        d = 4;
                    else if (8 == c)
                        d = 3;
                    else if (256 == c)
                        d = 8;
                    else if (2 == c)
                        d = 1;
                    else if (32 == c)
                        d = 5;
                    else {
                        if (4 != c)
                            return void e.fromRadix(a, c);
                        d = 2
                    }
                    e.t = 0,
                        e.s = 0;
                    for (var f = a.length, g = !1, h = 0; --f >= 0; ) {
                        var i = 8 == d ? 255 & a[f] : l(a, f);
                        0 > i ? "-" == a.charAt(f) && (g = !0) : (g = !1,
                            0 == h ? e[e.t++] = i : h + d > e.DB ? (e[e.t - 1] |= (i & (1 << e.DB - h) - 1) << h,
                                e[e.t++] = i >> e.DB - h) : e[e.t - 1] |= i << h,
                            h += d,
                        h >= e.DB && (h -= e.DB))
                    }
                    8 == d && 0 != (128 & a[0]) && (e.s = -1,
                    h > 0 && (e[e.t - 1] |= (1 << e.DB - h) - 1 << h)),
                        e._57O(),
                    g && b.ZERO._78O(e, e)
                }
                function q() {
                    for (var a = this, b = a.s & a.DM; a.t > 0 && a[a.t - 1] == b; )
                        --a.t
                }
                function r(a) {
                    var b = this;
                    if (b.s < 0)
                        return "-" + b._85O()[sa](a);
                    var c;
                    if (16 == a)
                        c = 4;
                    else if (8 == a)
                        c = 3;
                    else if (2 == a)
                        c = 1;
                    else if (32 == a)
                        c = 5;
                    else {
                        if (4 != a)
                            return b.toRadix(a);
                        c = 2
                    }
                    var d, e = (1 << c) - 1, f = !1, g = "", h = b.t, i = b.DB - h * b.DB % c;
                    if (h-- > 0)
                        for (i < b.DB && (d = b[h] >> i) > 0 && (f = !0,
                            g = k(d)); h >= 0; )
                            c > i ? (d = (b[h] & (1 << i) - 1) << c - i,
                                d |= b[--h] >> (i += b.DB - c)) : (d = b[h] >> (i -= c) & e,
                            0 >= i && (i += b.DB,
                                --h)),
                            d > 0 && (f = !0),
                            f && (g += k(d));
                    return f ? g : "0"
                }
                function x() {
                    var a = c();
                    return b.ZERO._78O(this, a),
                        a
                }
                function z() {
                    return this.s < 0 ? this._85O() : this
                }
                function C(a) {
                    var b = this
                        , c = b.s - a.s;
                    if (0 != c)
                        return c;
                    var d = b.t;
                    if (c = d - a.t,
                        0 != c)
                        return b.s < 0 ? -c : c;
                    for (; --d >= 0; )
                        if (0 != (c = b[d] - a[d]))
                            return c;
                    return 0
                }
                function D(a) {
                    var b, c = 1;
                    return 0 != (b = a >>> 16) && (a = b,
                        c += 16),
                    0 != (b = a >> 8) && (a = b,
                        c += 8),
                    0 != (b = a >> 4) && (a = b,
                        c += 4),
                    0 != (b = a >> 2) && (a = b,
                        c += 2),
                    0 != (b = a >> 1) && (a = b,
                        c += 1),
                        c
                }
                function F() {
                    var a = this;
                    return a.t <= 0 ? 0 : a.DB * (a.t - 1) + D(a[a.t - 1] ^ a.s & a.DM)
                }
                function G(a, b) {
                    var c;
                    for (c = this.t - 1; c >= 0; --c)
                        b[c + a] = this[c];
                    for (c = a - 1; c >= 0; --c)
                        b[c] = 0;
                    b.t = this.t + a,
                        b.s = this.s
                }
                function H(a, b) {
                    for (var c = a; c < this.t; ++c)
                        b[c - a] = this[c];
                    b.t = v(this.t - a, 0),
                        b.s = this.s
                }
                function J(a, b) {
                    var c, d = this, e = a % d.DB, f = d.DB - e, g = (1 << f) - 1, h = s(a / d.DB), i = d.s << e & d.DM;
                    for (c = d.t - 1; c >= 0; --c)
                        b[c + h + 1] = d[c] >> f | i,
                            i = (d[c] & g) << e;
                    for (c = h - 1; c >= 0; --c)
                        b[c] = 0;
                    b[h] = i,
                        b.t = d.t + h + 1,
                        b.s = d.s,
                        b._57O()
                }
                function K(a, b) {
                    var c = this;
                    b.s = c.s;
                    var d = s(a / c.DB);
                    if (d >= c.t)
                        return void (b.t = 0);
                    var e = a % c.DB
                        , f = c.DB - e
                        , g = (1 << e) - 1;
                    b[0] = c[d] >> e;
                    for (var h = d + 1; h < c.t; ++h)
                        b[h - d - 1] |= (c[h] & g) << f,
                            b[h - d] = c[h] >> e;
                    e > 0 && (b[c.t - d - 1] |= (c.s & g) << f),
                        b.t = c.t - d,
                        b._57O()
                }
                function M(a, b) {
                    for (var c = this, d = 0, e = 0, f = w(a.t, c.t); f > d; )
                        e += c[d] - a[d],
                            b[d++] = e & c.DM,
                            e >>= c.DB;
                    if (a.t < c.t) {
                        for (e -= a.s; d < c.t; )
                            e += c[d],
                                b[d++] = e & c.DM,
                                e >>= c.DB;
                        e += c.s
                    } else {
                        for (e += c.s; d < a.t; )
                            e -= a[d],
                                b[d++] = e & c.DM,
                                e >>= c.DB;
                        e -= a.s
                    }
                    b.s = 0 > e ? -1 : 0,
                        -1 > e ? b[d++] = c.DV + e : e > 0 && (b[d++] = e),
                        b.t = d,
                        b._57O()
                }
                function N(a, c) {
                    var d = this.abs()
                        , e = a.abs()
                        , f = d.t;
                    for (c.t = f + e.t; --f >= 0; )
                        c[f] = 0;
                    for (f = 0; f < e.t; ++f)
                        c[f + d.t] = d.am(0, e[f], c, f, 0, d.t);
                    c.s = 0,
                        c._57O(),
                    this.s != a.s && b.ZERO._78O(c, c)
                }
                function O(a) {
                    for (var b = this.abs(), c = a.t = 2 * b.t; --c >= 0; )
                        a[c] = 0;
                    for (c = 0; c < b.t - 1; ++c) {
                        var d = b.am(c, b[c], a, 2 * c, 0, 1);
                        (a[c + b.t] += b.am(c + 1, 2 * b[c], a, 2 * c + 1, d, b.t - c - 1)) >= b.DV && (a[c + b.t] -= b.DV,
                            a[c + b.t + 1] = 1)
                    }
                    a.t > 0 && (a[a.t - 1] += b.am(c, b[c], a, 2 * c, 0, 1)),
                        a.s = 0,
                        a._57O()
                }
                function P(a, d, e) {
                    var f = a.abs()
                        , g = this;
                    if (!(f.t <= 0)) {
                        var h = g.abs();
                        if (h.t < f.t)
                            return d != j && d._58O(0),
                                void (e != j && g._77O(e));
                        e == j && (e = c());
                        var i = c()
                            , k = g.s
                            , l = a.s
                            , m = g.DB - D(f[f.t - 1]);
                        m > 0 ? (f._44O(m, i),
                            h._44O(m, e)) : (f._77O(i),
                            h._77O(e));
                        var n = i.t
                            , o = i[n - 1];
                        if (0 != o) {
                            var p = o * (1 << g.F1) + (n > 1 ? i[n - 2] >> g.F2 : 0)
                                , q = g.FV / p
                                , r = (1 << g.F1) / p
                                , t = 1 << g.F2
                                , u = e.t
                                , v = u - n
                                , w = d == j ? c() : d;
                            for (i._59O(v, w),
                                 e._52O(w) >= 0 && (e[e.t++] = 1,
                                     e._78O(w, e)),
                                     b.ONE._59O(n, w),
                                     w._78O(i, i); i.t < n; )
                                i[i.t++] = 0;
                            for (; --v >= 0; ) {
                                var x = e[--u] == o ? g.DM : s(e[u] * q + (e[u - 1] + t) * r);
                                if ((e[u] += i.am(0, x, e, v, 0, n)) < x)
                                    for (i._59O(v, w),
                                             e._78O(w, e); e[u] < --x; )
                                        e._78O(w, e)
                            }
                            d != j && (e._45O(n, d),
                            k != l && b.ZERO._78O(d, d)),
                                e.t = n,
                                e._57O(),
                            m > 0 && e._46O(m, e),
                            0 > k && b.ZERO._78O(e, e)
                        }
                    }
                }
                function Q(a) {
                    var d = c();
                    return this.abs()._49O(a, j, d),
                    this.s < 0 && d._52O(b.ZERO) > 0 && a._78O(d, d),
                        d
                }
                function R(a) {
                    this.m = a
                }
                function S(a) {
                    return a.s < 0 || a._52O(this.m) >= 0 ? a.mod(this.m) : a
                }
                function T(a) {
                    return a
                }
                function U(a) {
                    a._49O(this.m, j, a)
                }
                function V(a, b, c) {
                    a._47O(b, c),
                        this._74O(c)
                }
                function W(a, b) {
                    a._48O(b),
                        this._74O(b)
                }
                function X() {
                    if (this.t < 1)
                        return 0;
                    var a = this[0];
                    if (0 == (1 & a))
                        return 0;
                    var b = 3 & a;
                    return b = 15 & b * (2 - (15 & a) * b),
                        b = 255 & b * (2 - (255 & a) * b),
                        b = 65535 & b * (2 - (65535 & (65535 & a) * b)),
                        b = b * (2 - a * b % this.DV) % this.DV,
                        b > 0 ? this.DV - b : -b
                }
                function Y(a) {
                    var b = this;
                    b.m = a,
                        b.mp = a._50O(),
                        b.mpl = 32767 & b.mp,
                        b.mph = b.mp >> 15,
                        b.um = (1 << a.DB - 15) - 1,
                        b.mt2 = 2 * a.t
                }
                function Z(a) {
                    var d = c();
                    return a.abs()._59O(this.m.t, d),
                        d._49O(this.m, j, d),
                    a.s < 0 && d._52O(b.ZERO) > 0 && this.m._78O(d, d),
                        d
                }
                function $(a) {
                    var b = c();
                    return a._77O(b),
                        this._74O(b),
                        b
                }
                function _(a) {
                    for (var b = this; a.t <= b.mt2; )
                        a[a.t++] = 0;
                    for (var c = 0; c < b.m.t; ++c) {
                        var d = 32767 & a[c]
                            , e = d * b.mpl + ((d * b.mph + (a[c] >> 15) * b.mpl & b.um) << 15) & a.DM;
                        for (d = c + b.m.t,
                                 a[d] += b.m.am(0, e, a, c, 0, b.m.t); a[d] >= a.DV; )
                            a[d] -= a.DV,
                                a[++d]++
                    }
                    a._57O(),
                        a._45O(b.m.t, a),
                    a._52O(b.m) >= 0 && a._78O(b.m, a)
                }
                function aa(a, b) {
                    a._48O(b),
                        this._74O(b)
                }
                function ba(a, b, c) {
                    a._47O(b, c),
                        this._74O(c)
                }
                function ca() {
                    return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                }
                function da(a, d) {
                    if (a > 4294967295 || 1 > a)
                        return b.ONE;
                    var e = c()
                        , f = c()
                        , g = d._73O(this)
                        , h = D(a) - 1;
                    for (g._77O(e); --h >= 0; )
                        if (d._76O(e, f),
                            (a & 1 << h) > 0)
                            d._75O(f, g, e);
                        else {
                            var i = e;
                            e = f,
                                f = i
                        }
                    return d.revert(e)
                }
                function ea(a, b) {
                    var c;
                    return c = 256 > a || b._51O() ? new R(b) : new Y(b),
                        this.exp(a, c)
                }
                function fa() {
                    var a = this;
                    if (a.s < 0) {
                        if (1 == a.t)
                            return a[0] - a.DV;
                        if (0 == a.t)
                            return -1
                    } else {
                        if (1 == a.t)
                            return a[0];
                        if (0 == a.t)
                            return 0
                    }
                    return (a[1] & (1 << 32 - a.DB) - 1) << a.DB | a[0]
                }
                function ga(a, c) {
                    return new b(a,c)
                }
                function ha() {
                    var a = this;
                    a.n = j,
                        a.e = 0,
                        a.d = j,
                        a.p = j,
                        a.q = j,
                        a.dmp1 = j,
                        a.dmq1 = j,
                        a._10A = j
                }
                function ia(a) {
                    return a._53O(this.e, this.n)
                }
                function ka(a) {
                    var b, c, d, e = "", f = 0;
                    for (b = 0; b < a.length && a.charAt(b) != Ja; ++b)
                        d = Ia.indexOf(a.charAt(b)),
                        0 > d || (0 == f ? (e += k(d >> 2),
                            c = 3 & d,
                            f = 1) : 1 == f ? (e += k(c << 2 | d >> 4),
                            c = 15 & d,
                            f = 2) : 2 == f ? (e += k(c),
                            e += k(d >> 2),
                            c = 3 & d,
                            f = 3) : (e += k(c << 2 | d >> 4),
                            e += k(15 & d),
                            f = 0));
                    return 1 == f && (e += k(c << 2)),
                        e
                }
                function la(a) {
                    var b = a.split("")
                        , c = ka(a);
                    return b.forEach(function(a) {
                        var b = a.length;
                        b > 0 && c && (sc += L(a))
                    }),
                        c
                }
                function ma(a, b) {
                    var c = Qa._4O.Util._56O(a, "ss")
                        , d = {}
                        , e = 0;
                    return d.v = c == b,
                        d.t = 1,
                        d.s = 0 > e ? -1 : 0,
                        tc = d.v,
                        e > 0 ? d[0] = e : -1 > e ? d[0] = e + d.DV : d.t = 0,
                        [c, d]
                }
                function na(a) {
                    var b = 38
                        , c = a.substring(0, b);
                    if (c && 30 == c.indexOf("05000420")) {
                        var d = ["ss", a.substring(b)];
                        return d
                    }
                    return []
                }
                function oa(a, b) {
                    b = b.replace(Oa, ""),
                        b = b.replace(/[ \n]+/g, "");
                    var c = ga(b, 16);
                    if (c._55O() > this.n._55O())
                        return 0;
                    var d = this._37O(c)
                        , e = d[sa](16).replace(/^1f+00/, "")
                        , f = na(e);
                    if (0 == f.length)
                        return !1;
                    for (var g, h, i, j = .5, k = fh, l = [0, .5, .75, .875, .9375], m = [], n = [], o = [], p = E / k, q = f[1], r = ma(a, q)[0], s = 0, t = 0; s < l.length; s++) {
                        var u = 0 === s % 2 ? 0 : .5;
                        for (g = 0; k >= g; g++)
                            h = (g + u) * p,
                                i = 1 - l[s],
                                m.push(y(h) * j * i, -j + 2 * l[s] * j, -A(h) * j * i),
                                n.push((g + u) / k, i)
                    }
                    for (s = 0; s < l.length - 1; s++) {
                        var v = s * (k + 1)
                            , w = (s + 1) * (k + 1);
                        for (g = 0; k > g; g++)
                            o.push(v + g, w + g + 1, w + g, v + g, v + g + 1, w + g + 1)
                    }
                    return o.forEach(function(a) {
                        t += a
                    }),
                    q == r && t > 10
                }
                var pa, qa = 0xdeadbeefcafe, ra = 15715070 == (16777215 & qa), sa = "toString", ta = "", ua = "nat", va = function() {}
                ;
                g = a["D" + 11182[sa](B(2, 5))];
                var wa = b.prototype;
                bb += ja.substr(0, 1);
                var xa = a.navigator ? a.navigator.appName : "";
                ra && "Microsoft Internet Explorer" == xa ? (wa.am = h,
                    pa = 30) : ra && "Netscape" != xa ? (wa.am = f,
                    pa = 26) : (wa.am = i,
                    pa = 28),
                    wa.DB = pa,
                    wa.DM = (1 << pa) - 1,
                    wa.DV = 1 << pa;
                var ya = 52;
                wa.FV = B(2, ya),
                    wa.F1 = ya - pa,
                    wa.F2 = 2 * pa - ya;
                var za, Aa, Ba = "0123456789abcdefghijklmnopqrstuvwxyz", Ca = [], Da = function(a) {
                        return String.fromCharCode(a)
                    }
                ;
                for (za = "0".charCodeAt(0),
                         Aa = 0; 9 >= Aa; ++Aa)
                    Ca[za++] = Aa;
                for (za = "a".charCodeAt(0),
                         Aa = 10; 36 > Aa; ++Aa)
                    Ca[za++] = Aa;
                for (za = "A".charCodeAt(0),
                         Aa = 10; 36 > Aa; ++Aa)
                    Ca[za++] = Aa;
                var Ea = R.prototype;
                Ea._73O = S,
                    Ea.revert = T,
                    Ea._74O = U,
                    Ea._75O = V,
                    Ea._76O = W;
                var Fa = Y.prototype;
                Fa._73O = Z,
                    Fa.revert = $,
                    Fa._74O = _,
                    Fa._75O = ba,
                    Fa._76O = aa,
                    wa._77O = m,
                    wa._58O = n,
                    wa._54O = p,
                    wa._57O = q,
                    wa._59O = G,
                    wa._45O = H,
                    wa._44O = J,
                    wa._46O = K,
                    wa._78O = M,
                    wa._47O = N,
                    wa._48O = O,
                    wa._49O = P,
                    wa._50O = X,
                    wa._51O = ca,
                    wa.exp = da,
                    wa.toString = r,
                    wa._85O = x,
                    wa.abs = z,
                    wa._52O = C,
                    wa._55O = F,
                    wa.mod = Q,
                    wa._53O = ea,
                    b.ZERO = o(0),
                    b.ONE = o(1),
                    wa._86O = fa;
                var Ga = function(a, b) {
                        var c = this;
                        c.isPublic = !0,
                            typeof a !== Ub ? (c.n = a,
                                c.e = b) : a != j && b != j && a.length > 0 && b.length > 0 && (c.n = ga(a, 16),
                                    c.e = L(b, 16))
                    }
                ;
                Ke = function() {
                    var a, b, c = la(Ma), d = c.substr(0, 4), f = c.substr(4, 2), h = c.substr(6, 2), i = 1, j = !i, k = e, l = [], m = $b.charAt(7);
                    if (g && (g[sa]().indexOf(ua) < 0 || g[bb][sa]().indexOf(ua) < 0 || !c ? a = vh(Jc[m]) : (c = new g(d - 0,f - i,h - 0),
                            b = c.setHours(9),
                            g[bb]() > b ? a = vh(Jc[m]) : j = !0)),
                        c && a && k) {
                        for (var n in a)
                            l.push(n);
                        var o, p = a[l[0]], q = a[l[1]], r = a[l[2]], s = a[l[4]], t = a[l[5]], u = a[l[6]], v = Ya._27O(k);
                        v && u && (o = p + q + r + s + "" + t,
                        o && v._31O(o, u) && (j = !0))
                    }
                    return j || (Ye = Ad),
                        m
                }
                ;
                var Ha = ha.prototype;
                Ha._37O = ia,
                    Ha._38O = Ga;
                var Ia = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                    , Ja = "="
                    , Ka = 25
                    , La = 10
                    , Ma = "IBUSFQ=="
                    , Na = Na || function(a, b) {
                        var c = {}
                            , d = c._7A = {}
                            , e = d._6A = function() {
                            function a() {}
                            return {
                                _80O: function(b) {
                                    a.prototype = this;
                                    var c = new a;
                                    return b && c._5A(b),
                                    c.hasOwnProperty("_82O") || (c._82O = function() {
                                            c.$super._82O.apply(this, arguments)
                                        }
                                    ),
                                        c._82O.prototype = c,
                                        c.$super = this,
                                        c
                                },
                                _3A: function() {
                                    var a = this._80O();
                                    return a._82O.apply(a, arguments),
                                        a
                                },
                                _82O: function() {},
                                _5A: function(a) {
                                    for (var b in a)
                                        a.hasOwnProperty(b) && (this[b] = a[b]);
                                    a.hasOwnProperty(sa) && (this.toString = a.toString)
                                },
                                _88O: function() {
                                    return this._82O.prototype._80O(this)
                                }
                            }
                        }()
                            , f = d._39O = e._80O({
                            _82O: function(a, c) {
                                a = this._84O = a || [],
                                    this._65O = c != b ? c : 4 * a.length
                            },
                            toString: function(a) {
                                return (a || h).stringify(this)
                            },
                            _89O: function(a) {
                                var b = this._84O
                                    , c = a._84O
                                    , d = this._65O
                                    , e = a._65O;
                                if (this._57O(),
                                    d % 4)
                                    for (var f = 0; e > f; f++) {
                                        var g = 255 & c[f >>> 2] >>> 24 - 8 * (f % 4);
                                        b[d + f >>> 2] |= g << 24 - 8 * ((d + f) % 4)
                                    }
                                else if (c.length > 65535)
                                    for (var f = 0; e > f; f += 4)
                                        b[d + f >>> 2] = c[f >>> 2];
                                else
                                    b.push.apply(b, c);
                                return this._65O += e,
                                    this
                            },
                            _57O: function() {
                                var a = this._84O
                                    , b = this._65O;
                                a[b >>> 2] &= 4294967295 << 32 - 8 * (b % 4),
                                    a.length = t(b / 4)
                            },
                            _88O: function() {
                                var a = e._88O.call(this);
                                return a._84O = this._84O.slice(0),
                                    a
                            },
                            _87O: function(a) {
                                for (var b = [], c = 0; a > c; c += 4)
                                    b.push(0 | 4294967296 * I);
                                return new f._82O(b,a)
                            }
                        })
                            , g = c._2A = {}
                            , h = g._69O = {
                            stringify: function(a) {
                                var b, c = a._84O, d = a._65O, e = [];
                                for (b = 0; d > b; b++) {
                                    var f = 255 & c[b >>> 2] >>> 24 - 8 * (b % 4);
                                    e.push((f >>> 4).toString(16)),
                                        e.push((15 & f).toString(16))
                                }
                                return e.join("")
                            },
                            _68O: function(a) {
                                for (var b = a.length, c = [], d = 0; b > d; d += 2)
                                    c[d >>> 3] |= L(a.substr(d, 2), 16) << 24 - 4 * (d % 8);
                                return new f._82O(c,b / 2)
                            }
                        }
                            , i = g._8A = {
                            stringify: function(a) {
                                var b, c = a._84O, d = a._65O, e = [];
                                for (b = 0; d > b; b++) {
                                    var f = 255 & c[b >>> 2] >>> 24 - 8 * (b % 4);
                                    e.push(Da(f))
                                }
                                return e.join("")
                            },
                            _68O: function(a) {
                                var b, c = a.length, d = [];
                                for (b = 0; c > b; b++)
                                    d[b >>> 2] |= (255 & a.charCodeAt(b)) << 24 - 8 * (b % 4);
                                return new f._82O(d,c)
                            }
                        }
                            , j = g._9A = {
                            stringify: function(a) {
                                try {
                                    return decodeURIComponent(escape(i.stringify(a)))
                                } catch (b) {
                                    throw new Error("")
                                }
                            },
                            _68O: function(a) {
                                return i._68O(unescape(encodeURIComponent(a)))
                            }
                        }
                            , k = d._32O = e._80O({
                            _1A: function() {
                                this._83O = new f._82O,
                                    this._23O = 0
                            },
                            _33O: function(a) {
                                typeof a == Ub && (a = j._68O(a)),
                                    this._83O._89O(a),
                                    this._23O += a._65O
                            },
                            _25O: function(a) {
                                var b = this._83O
                                    , c = b._84O
                                    , d = b._65O
                                    , e = this._79O
                                    , g = 4 * e
                                    , h = d / g;
                                h = a ? t(h) : v((0 | h) - this._22O, 0);
                                var i = h * e
                                    , j = w(4 * i, d);
                                if (i) {
                                    for (var k = 0; i > k; k += e)
                                        this._20O(c, k);
                                    var l = c.splice(0, i);
                                    b._65O -= j
                                }
                                return new f._82O(l,j)
                            },
                            _88O: function() {
                                var a = e._88O.call(this);
                                return a._83O = this._83O._88O(),
                                    a
                            },
                            _22O: 0
                        });
                        d._66O = k._80O({
                            cfg: e._80O(),
                            _82O: function(a) {
                                this.cfg = this.cfg._80O(a),
                                    this._1A()
                            },
                            _1A: function() {
                                k._1A.call(this),
                                    this._34O()
                            },
                            _81O: function(a) {
                                return this._33O(a),
                                    this._25O(),
                                    this
                            },
                            _72O: function(a) {
                                a && this._33O(a);
                                var b = this._21O();
                                return b
                            },
                            _79O: 16,
                            _26O: function(a) {
                                return function(b, c) {
                                    return new a._82O(c)._72O(b)
                                }
                            },
                            _19O: function(a) {
                                return function(b, c) {
                                    return new l._71O._82O(a,c)._72O(b)
                                }
                            }
                        });
                        var l = c._67O = {};
                        return c
                    }();
                !function() {
                    var a = Na
                        , b = a._7A
                        , c = b._39O
                        , d = b._66O
                        , e = a._67O
                        , f = []
                        , g = [];
                    !function() {
                        function a(a) {
                            for (var b = u(a), c = 2; b >= c; c++)
                                if (!(a % c))
                                    return !1;
                            return !0
                        }
                        function b(a) {
                            return 0 | 4294967296 * (a - (0 | a))
                        }
                        for (var c = 2, d = 0; 64 > d; )
                            a(c) && (8 > d && (f[d] = b(B(c, .5))),
                                g[d] = b(B(c, 1 / 3)),
                                d++),
                                c++
                    }();
                    var h = []
                        , i = e._41O = d._80O({
                        _34O: function() {
                            this._64O = new c._82O(f.slice(0))
                        },
                        _20O: function(a, b) {
                            for (var c = this._64O._84O, d = c[0], e = c[1], f = c[2], i = c[3], j = c[4], k = c[5], l = c[6], m = c[7], n = 0; 64 > n; n++) {
                                if (16 > n)
                                    h[n] = 0 | a[b + n];
                                else {
                                    var o = h[n - 15]
                                        , p = (o << 25 | o >>> 7) ^ (o << 14 | o >>> 18) ^ o >>> 3
                                        , q = h[n - 2]
                                        , r = (q << 15 | q >>> 17) ^ (q << 13 | q >>> 19) ^ q >>> 10;
                                    h[n] = p + h[n - 7] + r + h[n - 16]
                                }
                                var s = j & k ^ ~j & l
                                    , t = d & e ^ d & f ^ e & f
                                    , u = (d << 30 | d >>> 2) ^ (d << 19 | d >>> 13) ^ (d << 10 | d >>> 22)
                                    , v = (j << 26 | j >>> 6) ^ (j << 21 | j >>> 11) ^ (j << 7 | j >>> 25)
                                    , w = m + v + s + g[n] + h[n]
                                    , x = u + t;
                                m = l,
                                    l = k,
                                    k = j,
                                    j = 0 | i + w,
                                    i = f,
                                    f = e,
                                    e = d,
                                    d = 0 | w + x
                            }
                            c[0] = 0 | c[0] + d,
                                c[1] = 0 | c[1] + e,
                                c[2] = 0 | c[2] + f,
                                c[3] = 0 | c[3] + i,
                                c[4] = 0 | c[4] + j,
                                c[5] = 0 | c[5] + k,
                                c[6] = 0 | c[6] + l,
                                c[7] = 0 | c[7] + m
                        },
                        _21O: function() {
                            var a = this._83O
                                , b = a._84O
                                , c = 8 * this._23O
                                , d = 8 * a._65O;
                            return b[d >>> 5] |= 128 << 24 - d % 32,
                                b[(d + 64 >>> 9 << 4) + 14] = s(c / 4294967296),
                                b[(d + 64 >>> 9 << 4) + 15] = c,
                                a._65O = 4 * b.length,
                                this._25O(),
                                this._64O
                        },
                        _88O: function() {
                            var a = d._88O.call(this);
                            return a._64O = this._64O._88O(),
                                a
                        }
                    });
                    a._41O = d._26O(i),
                        a._42O = d._19O(i)
                }();
                var Oa = new RegExp("");
                Oa.compile("[^0-9a-f]", "gi"),
                    ha._28O = -1,
                    ha._29O = -2,
                    Ha._31O = oa,
                    Ha._63O = oa,
                    ha._43O = -2;
                var Pa = new function() {
                        var a = this;
                        a._5O = function(a, b) {
                            if ("8" != a.substring(b + 2, b + 3))
                                return 1;
                            var c = L(a.substring(b + 3, b + 4));
                            return 0 == c ? -1 : c > 0 && 10 > c ? c + 1 : -2
                        }
                            ,
                            a._13O = function(b, c) {
                                var d = a._5O(b, c);
                                return 1 > d ? "" : b.substring(c + 2, c + 2 + 2 * d)
                            }
                            ,
                            a._12O = function(c, d) {
                                var e = a._13O(c, d);
                                if ("" == e)
                                    return -1;
                                var f;
                                return f = L(e.substring(0, 1)) < 8 ? new b(e,16) : new b(e.substring(2),16),
                                    f._86O()
                            }
                            ,
                            a._6O = function(b, c) {
                                var d = a._5O(b, c);
                                return 0 > d ? d : c + 2 * (d + 1)
                            }
                            ,
                            a._11O = function(b, c) {
                                var d = a._6O(b, c)
                                    , e = a._12O(b, c);
                                return b.substring(d, d + 2 * e)
                            }
                            ,
                            a._10O = function(b, c) {
                                var d = a._6O(b, c)
                                    , e = a._12O(b, c);
                                return d + 2 * e
                            }
                            ,
                            a._7O = function(b, c) {
                                var d = []
                                    , e = a._6O(b, c);
                                d.push(e);
                                for (var f = a._12O(b, c), g = e, h = 0; ; ) {
                                    var i = a._10O(b, g);
                                    if (i == j || i - e >= 2 * f)
                                        break;
                                    if (h >= 200)
                                        break;
                                    d.push(i),
                                        g = i,
                                        h++
                                }
                                return d
                            }
                    }
                ;
                if (Pa._90O = Da(La + 24),
                        Pa._91O = d + Da(La * La + 8),
                    Qa == j || !Qa)
                    var Qa = {};
                Qa._4O != j && Qa._4O || (Qa._4O = {}),
                    Qa._4O.Util = new function() {
                        var a = this;
                        a._56O = function(a) {
                            var b = new Qa._4O._3O;
                            return b._30O(a)
                        }
                            ,
                            a._4A = function(a) {
                                var b = new Qa._4O._3O;
                                return b._36O(a)
                            }
                    }
                    ,
                    Qa._4O._3O = function() {
                        var a = this;
                        a._8O = function(b, c) {
                            if ("ss" == b && "cj" == c) {
                                try {
                                    a.md = Na._67O._41O._3A()
                                } catch (d) {
                                    va(ta)
                                }
                                a._24O = function(b) {
                                    a.md._81O(b)
                                }
                                    ,
                                    a._35O = function(b) {
                                        var c = Na._2A._69O._68O(b);
                                        a.md._81O(c)
                                    }
                                    ,
                                    a._60O = function() {
                                        var b = a.md._72O();
                                        return b[sa](Na._2A._69O)
                                    }
                                    ,
                                    a._30O = function(b) {
                                        return a._24O(b),
                                            a._60O()
                                    }
                                    ,
                                    a._36O = function(b) {
                                        return a._35O(b),
                                            a._60O()
                                    }
                            }
                        }
                            ,
                            a._24O = function() {
                                va(ta)
                            }
                            ,
                            a._35O = function() {
                                va(ta)
                            }
                            ,
                            a._60O = function() {
                                va(ta)
                            }
                            ,
                            a._30O = function() {
                                va(ta)
                            }
                            ,
                            a._36O = function() {
                                va(ta)
                            }
                            ,
                            a._8O("ss", "cj")
                    }
                    ,
                    uc = function(b) {
                        var c = a[Pa._91O]
                            , d = 1
                            , e = !1;
                        if (Ie.forEach(function(a) {
                                d *= a
                            }),
                                Ie.a)
                            return Ie.a;
                        if (b > d) {
                            if (c) {
                                c = c.split(Pa._90O);
                                var f = c[3]
                                    , g = c[7]
                                    , h = c[11]
                                    , i = c[19]
                                    , j = c[23]
                                    , k = c[27]
                                    , l = f + g + h + i + j;
                                e = Qc()(l, k)
                            }
                            e || (Bj.prototype._42 = rc)
                        } else
                            e = !0;
                        return Ie.a = e,
                            e
                    }
                    ,
                    Ka = String.fromCharCode(Ka + 20);
                var Ra = function(a) {
                        return a = a.replace(Oa, ta),
                            a = a.replace(/[ \n]+/g, ta)
                    }
                    , Sa = "30"
                    , Ta = "06"
                    , Ua = "02"
                    , Va = "03"
                    , Wa = ga
                    , Xa = /^1f+00/
                    , Ya = function() {
                        var a;
                        return a = {
                            _18O: function(a) {
                                var b = a
                                    , c = b.replace(/\s+/g, "")
                                    , d = ka(c);
                                return d
                            },
                            _14O: function(a) {
                                var b = this._18O(a)
                                    , c = this._15O(b);
                                return c
                            },
                            _15O: function(a) {
                                var b = this._17O(a);
                                if ("2a864886f70d010101" == b._61O) {
                                    var c = this._16O(b.key)
                                        , d = new ha;
                                    return d._38O(c.n, c.e),
                                        d
                                }
                                va(ta)
                            },
                            _16O: function(a) {
                                var b = {};
                                a.substr(0, 2) != Sa && va(ta);
                                var c = Pa._7O(a, 0);
                                return 2 != c.length && va(ta),
                                a.substr(c[0], 2) != Ua && va(ta),
                                    b.n = Pa._11O(a, c[0]),
                                a.substr(c[1], 2) != Ua && va(ta),
                                    b.e = Pa._11O(a, c[1]),
                                    b
                            },
                            _17O: function(a) {
                                var b = {};
                                b._40O = j;
                                var c = Pa._7O(a, 0);
                                2 != c.length && va(ta);
                                var d = c[0];
                                a.substr(d, 2) != Sa && va(ta);
                                var e = Pa._7O(a, d);
                                return 2 != e.length && va(ta),
                                a.substr(e[0], 2) != Ta && va(ta),
                                    b._61O = Pa._11O(a, e[0]),
                                    a.substr(e[1], 2) == Ta ? b._40O = Pa._11O(a, e[1]) : a.substr(e[1], 2) == Sa && (b._40O = {},
                                            b._40O.p = Pa._70O(a, e[1], [0], Ua),
                                            b._40O.q = Pa._70O(a, e[1], [1], Ua),
                                            b._40O.g = Pa._70O(a, e[1], [2], Ua)),
                                a.substr(c[1], 2) != Va && va(ta),
                                    b.key = Pa._11O(a, c[1]).substr(2),
                                    b
                            }
                        },
                            a._17O ? a : j
                    }()
                    , Za = Ya._27O = function(a) {
                        return Ya._14O(a)
                    }
                ;
                return Qc = function() {
                    return function(a, b) {
                        b = Ra(b);
                        var c = Wa(b, B(2, 4))
                            , d = this;
                        if (!d || !d.n || c._55O() > d.n._55O())
                            return 0;
                        var e = d._37O(c)
                            , f = e[sa](B(2, 4)).replace(Xa, "")
                            , g = na(f);
                        if (0 == g.length)
                            return !1;
                        var h = g[0]
                            , i = g[1]
                            , j = function(a) {
                            return Qa._4O.Util._56O(a, h)
                        }
                            , k = j(a);
                        return i == k
                    }
                        .bind(Za(e))
                }
                    ,
                    Ya
            }(a, b);
        var Rh = k.List = function() {
                this._as = [];
                var a, b, c = arguments.length;
                if (1 === c) {
                    var d = arguments[0];
                    if (md(d) && (d = d._as),
                            ld(d))
                        for (b = d.length,
                                 a = 0; b > a; a++)
                            this._as.push(d[a]);
                    else
                        d != j && this._as.push(d)
                } else if (c > 1)
                    for (a = 0; c > a; a++)
                        this._as.push(arguments[a])
            }
        ;
        hh("List", b, {
            size: function() {
                return this._as.length
            },
            isEmpty: function() {
                return 0 === this._as.length
            },
            add: function(a, b) {
                return b === c ? this._as.push(a) : this._as.splice(b, 0, a)
            },
            addAll: function(a) {
                md(a) && (a = a._as),
                    ld(a) ? td(this._as, a) : this._as.push(a)
            },
            get: function(a) {
                return this._as[a]
            },
            slice: function(a, b) {
                return new Rh(this._as.slice(a, b))
            },
            remove: function(a) {
                var b = this._as.indexOf(a);
                return b >= 0 && b < this._as.length && this.removeAt(b),
                    b
            },
            removeAt: function(a) {
                return this._as.splice(a, 1)[0]
            },
            set: function(a, b) {
                return this._as[a] = b
            },
            clear: function() {
                return this._as.splice(0, this._as.length)
            },
            contains: function(a) {
                return this._as.indexOf(a) >= 0
            },
            indexOf: function(a) {
                return this._as.indexOf(a)
            },
            each: function(a, b) {
                for (var c = 0, d = this._as.length; d > c; c++) {
                    var e = this._as[c];
                    b ? a.call(b, e) : a(e)
                }
            },
            reverseEach: function(a, b) {
                for (var c = this._as.length - 1; c >= 0; c--) {
                    var d = this._as[c];
                    b ? a.call(b, d) : a(d)
                }
            },
            toArray: function(a, b) {
                if (a) {
                    for (var c, d = [], e = 0, f = this._as.length; f > e; e++)
                        c = this._as[e],
                            b ? a.call(b, c) && d.push(c) : a(c) && d.push(c);
                    return d
                }
                return this._as.concat()
            },
            toList: function(a, b) {
                if (a) {
                    for (var c, d = new Rh, e = 0, f = this._as.length; f > e; e++)
                        c = this._as[e],
                            b ? a.call(b, c) && d.add(c) : a(c) && d.add(c);
                    return d
                }
                return new Rh(this)
            },
            reverse: function() {
                this._as.reverse()
            },
            sort: function(a) {
                return this._as.sort(a ? a : Dg),
                    this
            },
            toString: function() {
                return this._as.toString()
            }
        });
        var Sh = new Rh;
        vd(Sh, {
            size: function() {
                return 0
            },
            indexOf: function() {
                return -1
            },
            contains: function() {
                return !1
            },
            isEmpty: function() {
                return !0
            },
            sort: Lc,
            each: Lc,
            reverseEach: Lc,
            toArray: function() {
                return []
            },
            toList: function() {
                return new Rh
            },
            add: Mc,
            addAll: Mc,
            set: Mc,
            remove: Mc,
            removeAt: Mc,
            clear: Mc
        });
        var Th = k.Notifier = function() {}
        ;
        hh("Notifier", b, {
            contains: function(a, b) {
                if (this._ls)
                    for (var c, d = 0, e = this._ls.size(); e > d; d++)
                        if (c = this._ls.get(d),
                            a === c.l && b === c.s)
                            return !0;
                return !1
            },
            add: function(a, b, c) {
                var d = this
                    , e = {
                    l: a,
                    s: b,
                    a: c
                };
                d._ls || (d._ls = new Rh),
                    d._f ? (d._as || (d._as = new Rh),
                        d._as.add(e)) : e.a ? d._ls.add(e, 0) : d._ls.add(e)
            },
            remove: function(a, b) {
                var c = this;
                c._ls && (c._f ? (c._rs || (c._rs = new Rh),
                    c._rs.add({
                        l: a,
                        s: b
                    })) : c._remove(a, b))
            },
            _remove: function(a, b) {
                for (var c, d = this._ls, e = 0, f = d.size(); f > e; e++)
                    if (c = d.get(e),
                        c.l === a && c.s === b)
                        return void d.removeAt(e)
            },
            fire: function(a) {
                var b = this
                    , c = b._ls;
                if (b._b = 1,
                        c) {
                    b._f = 1;
                    for (var d, e = 0, f = c.size(); f > e; e++)
                        d = c.get(e),
                            d.s ? d.l.call(d.s, a) : d.l(a);
                    if (delete b._f,
                            b._rs) {
                        for (f = b._rs.size(),
                                 e = 0; f > e; e++)
                            d = b._rs.get(e),
                                b._remove(d.l, d.s);
                        delete b._rs
                    }
                    if (b._as) {
                        for (f = b._as.size(),
                                 e = 0; f > e; e++)
                            d = b._as.get(e),
                                d.a ? c.add(d, 0) : c.add(d);
                        delete b._as
                    }
                }
            }
        });
        var Uh = k.Data = function() {
                this._id = Bg()
            }
        ;
        hh("Data", b, {
            ms_ac: ["tag", "name", "displayName", "icon", "toolTip", "attrObject", "layer", "adjustChildrenToTop"],
            ms_dm: 1,
            ms_attr: 1,
            _icon: j,
            _parent: j,
            _children: Sh,
            _childMap: j,
            _styleMap: j,
            _layer: 0,
            _adjustChildrenToTop: !1,
            getUIClass: function() {
                return j
            },
            _22Q: function() {
                return j
            },
            s: function(a, b) {
                var c = this;
                if (2 === arguments.length)
                    c.setStyle(a, b);
                else {
                    if (!jd(a))
                        return c.getStyle(a);
                    for (var d in a)
                        c.setStyle(d, a[d])
                }
                return c
            },
            fp: function(a, b, c) {
                return this.firePropertyChange(a, b, c)
            },
            firePropertyChange: function(a, b, c) {
                if (b === c)
                    return !1;
                var d = this
                    , e = {
                    property: a,
                    oldValue: b,
                    newValue: c,
                    data: d
                };
                return d._dataModel && d._dataModel.handleDataPropertyChange(e),
                    d.onPropertyChanged(e),
                    !0
            },
            onPropertyChanged: function(a) {
                var b = this
                    , c = b._parent
                    , d = a.property;
                if (qd(c)) {
                    var e = b.s(Aa)
                        , f = "s:ingroup" === d;
                    (e && _h[d] || d === f) && c._81I(),
                    (e || f) && c.fp("childChange", !0, !1)
                }
            },
            _21I: function(a) {
                var b = this;
                if (a && b._dataModel)
                    throw "HT-DM";
                b._dataModel = a
            },
            getId: function() {
                return this._id
            },
            setId: function(a) {
                this._id = a
            },
            getChildren: function() {
                return this._children
            },
            size: function() {
                return this._children.size()
            },
            toChildren: function(a, b) {
                return this._children.toList(a, b)
            },
            eachChild: function(a, b) {
                this._children.each(a, b)
            },
            addChild: function(a, b) {
                var d = this;
                a !== d && (d._children === Sh && (d._children = new Rh,
                    d._childMap = {}),
                b === c && (b = d._children.size()),
                d._childMap[a._id] || d.isDescendantOf(a) || (a._parent && a._parent.removeChild(a),
                (0 > b || b > d._children.size()) && (b = d._children.size()),
                    d._children.add(a, b),
                    d._childMap[a._id] = a,
                    a.setParent(d),
                    d.onChildAdded(a, b),
                    d.fp(Bb, j, a)))
            },
            onChildAdded: function() {},
            removeChild: function(a) {
                var b = this;
                if (b._childMap && b._childMap[a._id]) {
                    var c = b._children.remove(a);
                    delete b._childMap[a._id],
                        b.fp(Bb, a, j),
                        a.setParent(j),
                        b.onChildRemoved(a, c)
                }
            },
            onChildRemoved: function() {},
            getChildAt: function(a) {
                return this._children.get(a)
            },
            clearChildren: function() {
                var a = this;
                if (!a._children.isEmpty())
                    for (var b = 0, c = a._children.toArray(), d = c.length; d > b; b++)
                        a.removeChild(c[b])
            },
            getParent: function() {
                return this._parent
            },
            setParent: function(a) {
                var b = this;
                if (!(b._73I || b._parent === a || b === a || a && a.isDescendantOf(b))) {
                    var c = b._parent;
                    b._parent = a,
                        b._73I = 1,
                    c && c.removeChild(b),
                    a && a.addChild(b),
                        delete b._73I,
                        b.fp("parent", c, a),
                        b.onParentChanged(c, a)
                }
            },
            onParentChanged: function() {},
            hasChildren: function() {
                return this._children.size() > 0
            },
            isEmpty: function() {
                return this._children.isEmpty()
            },
            isRelatedTo: function(a) {
                return a ? this.isDescendantOf(a) || a.isDescendantOf(this) : !1
            },
            isParentOf: function(a) {
                return a && this._childMap ? !!this._childMap[a._id] : !1
            },
            isDescendantOf: function(a) {
                if (!a || a.isEmpty())
                    return !1;
                for (var b = this._parent; b; ) {
                    if (a === b)
                        return !0;
                    b = b._parent
                }
                return !1
            },
            getStyleMap: function() {
                return this._styleMap
            },
            getStyle: function(a, b) {
                b === c && (b = 1);
                var d = this._styleMap ? this._styleMap[a] : c;
                return d === c && b ? n[a] : d
            },
            setStyle: function(a, b) {
                var d = this;
                d._styleMap || (d._styleMap = {});
                var e = d._styleMap[a];
                b === c ? delete d._styleMap[a] : d._styleMap[a] = b,
                d.fp("s:" + a, e, b) && d.onStyleChanged(a, e, b)
            },
            onStyleChanged: function() {},
            iv: function() {
                this.invalidate()
            },
            invalidate: function() {
                this.fp("*", !1, !0)
            },
            toString: function() {
                var a = this;
                return a._displayName || a._name || a._tag || a._id
            },
            toLabel: function() {
                return this._displayName || this._name
            },
            addStyleIcon: function(a, b) {
                var c = this
                    , d = c.s(Oa);
                d || c.s(Oa, d = {}),
                    b ? d[a] = b : delete d[a],
                    c.fp(Oa, j, d)
            },
            removeStyleIcon: function(a) {
                var b = this.s(Oa);
                if (b) {
                    var c = b[a];
                    delete b[a],
                        this.fp(Oa, j, b)
                }
                return c
            },
            getSerializableProperties: function() {
                return {
                    name: 1,
                    displayName: 1,
                    icon: 1,
                    toolTip: 1,
                    parent: 1,
                    layer: 1,
                    tag: 1,
                    adjustChildrenToTop: 1
                }
            },
            getSerializableStyles: function() {
                var a, b = {};
                for (a in this._styleMap)
                    b[a] = 1;
                return b
            }
        });
        var Vh = k.DataModel = function() {
                var b = this;
                b._datas = new Rh,
                    b._dataMap = {},
                    b._roots = new Rh,
                    b._rootMap = {},
                    b._78O = {},
                    b._36I = new Th,
                    b._35I = new Th,
                    b._3o = new Wh(b);
                var c = b._29Q = []
                    , d = b._scheduleCallback = function() {
                    for (var e = Date.now(), f = 0; f < c.length; f++) {
                        var g = c[f];
                        g.enabled && e - g.lastTime > g.interval && (b.each(function(a) {
                            g.action(a)
                        }),
                            g.lastTime = e)
                    }
                    c.length && (b._30Q = a.requestAnimationFrame(d))
                }
            }
        ;
        hh("DataModel", b, {
            ms_attr: 1,
            sm: function() {
                return this.getSelectionModel()
            },
            mm: function(a, b, c) {
                this.addDataModelChangeListener(a, b, c)
            },
            umm: function(a, b) {
                this.removeDataModelChangeListener(a, b)
            },
            md: function(a, b, c) {
                this.addDataPropertyChangeListener(a, b, c)
            },
            umd: function(a, b) {
                this.removeDataPropertyChangeListener(a, b)
            },
            mh: function(a, b, c) {
                this.addHierarchyChangeListener(a, b, c)
            },
            umh: function(a, b) {
                this.removeHierarchyChangeListener(a, b)
            },
            getHistoryManager: function() {
                return this._historyManager
            },
            getAttrObject: function() {
                return this._attrObject
            },
            setAttrObject: function(a) {
                return this._attrObject = a
            },
            getSelectionModel: function() {
                return this._3o
            },
            size: function() {
                return this._datas.size()
            },
            isEmpty: function() {
                return this._datas.isEmpty()
            },
            getRoots: function() {
                return this._roots
            },
            getDatas: function() {
                return this._datas
            },
            getDataById: function(a) {
                return this._dataMap[a]
            },
            removeDataById: function(a) {
                this.remove(this.getDataById(a))
            },
            toDatas: function(a, b) {
                return this._datas.toList(a, b)
            },
            each: function(a, b) {
                this._datas.each(a, b)
            },
            getDataByTag: function(a) {
                return this._78O[a]
            },
            removeDataByTag: function(a) {
                this.remove(this.getDataByTag(a))
            },
            add: function(a, b) {
                var c = this
                    , d = a._id
                    , e = a._tag
                    , f = c._roots;
                if (c._dataMap[d])
                    throw "'" + d + "' already exists";
                e != j && (c._78O[e] = a),
                    c._dataMap[d] = a,
                    c._datas.add(a),
                a._parent || (c._rootMap[d] = a,
                    b >= 0 ? f.add(a, b) : f.add(a)),
                    a._21I(c),
                    c.onAdded(a),
                    c._36I.fire({
                        kind: "add",
                        data: a
                    })
            },
            onAdded: function() {},
            remove: function(a) {
                if (a) {
                    var b = this
                        , c = a._id
                        , d = a.getTag()
                        , e = b.getHistoryManager();
                    a._dataModel === b && (e && e.beginInteraction(),
                        b.prepareRemove(a),
                        a.toChildren().each(b.remove, b),
                    a._parent && a._parent.removeChild(a),
                        b._datas.remove(a),
                        delete b._dataMap[c],
                    d != j && delete b._78O[d],
                    b._rootMap[c] && (delete b._rootMap[c],
                        b._roots.remove(a)),
                        a._21I(j),
                        b.onRemoved(a),
                        b._36I.fire({
                            kind: wa,
                            data: a
                        }),
                    e && e.endInteraction())
                }
            },
            onRemoved: function() {},
            prepareRemove: function() {},
            clear: function() {
                var a = this;
                a._datas.size() > 0 && (a._datas.each(function(a) {
                    a._21I(j)
                }),
                    a._datas.clear(),
                    a._dataMap = {},
                    a._roots.clear(),
                    a._rootMap = {},
                    a._78O = {},
                    a._36I.fire({
                        kind: xa
                    }))
            },
            contains: function(a) {
                return a && a._dataModel === this
            },
            handleDataPropertyChange: function(a) {
                var b = this
                    , c = a.data
                    , d = a.property;
                if ("parent" === d) {
                    var e = c._id
                        , f = b._rootMap
                        , g = b._roots;
                    c._parent ? f[e] && (delete f[e],
                            g.remove(c)) : f[e] || (f[e] = c,
                            g.add(c))
                } else if ("tag" === d) {
                    var h = a.oldValue
                        , i = a.newValue
                        , k = b._78O;
                    h != j && delete k[h],
                    i != j && (k[i] = c)
                }
                this.onDataPropertyChanged(c, a),
                    this._35I.fire(a)
            },
            onDataPropertyChanged: function() {},
            addDataModelChangeListener: function(a, b, c) {
                this._36I.add(a, b, c)
            },
            removeDataModelChangeListener: function(a, b) {
                this._36I.remove(a, b)
            },
            addDataPropertyChangeListener: function(a, b, c) {
                this._35I.add(a, b, c)
            },
            removeDataPropertyChangeListener: function(a, b) {
                this._35I.remove(a, b)
            },
            _38I: function(a, b, c) {
                this._37I && this._37I.fire({
                    data: a,
                    oldIndex: b,
                    newIndex: c
                })
            },
            addHierarchyChangeListener: function(a, b, c) {
                this._37I || (this._37I = new Th),
                    this._37I.add(a, b, c)
            },
            removeHierarchyChangeListener: function(a, b) {
                this._37I.remove(a, b)
            },
            getSiblings: function(a) {
                var b = a._parent;
                return b ? b._children : this._roots
            },
            eachByDepthFirst: function(a, b, c) {
                if (b)
                    this._11I(a, b, c);
                else
                    for (var d = 0, e = this._roots, f = e.size(); f > d; d++)
                        if (this._11I(a, e.get(d), c) === !1)
                            return
            },
            _11I: function(a, b, c) {
                for (var d = b.size(), e = 0; d > e; e++)
                    if (this._11I(a, b.getChildAt(e), c) === !1)
                        return !1;
                if (c) {
                    if (a.call(c, b) === !1)
                        return !1
                } else if (a(b) === !1)
                    return !1;
                return !0
            },
            eachByBreadthFirst: function(a, b, c) {
                var d = new Rh;
                for (b ? d.add(b) : this._roots.each(d.add, d); d.size() > 0; )
                    if (b = d.removeAt(0),
                            b.eachChild(d.add, d),
                            c) {
                        if (a.call(c, b) === !1)
                            return !1
                    } else if (a(b) === !1)
                        return !1;
                return !0
            },
            moveTo: function(a, b) {
                var c = this.getSiblings(a)
                    , d = c.indexOf(a);
                d === b || 0 > d || b >= 0 && b <= c.size() && (c.remove(a),
                b > c.size() && b--,
                    c.add(a, b),
                    this._38I(a, d, b))
            },
            moveUp: function(a) {
                this.moveTo(a, this.getSiblings(a).indexOf(a) - 1)
            },
            moveDown: function(a) {
                this.moveTo(a, this.getSiblings(a).indexOf(a) + 1)
            },
            moveToTop: function(a) {
                this.moveTo(a, 0)
            },
            moveToBottom: function(a) {
                this.moveTo(a, this.getSiblings(a).size())
            },
            moveSelectionUp: function(a) {
                a || (a = this.sm());
                var b = new Rh;
                of(a, b, this._roots),
                    b.each(this.moveUp, this)
            },
            moveSelectionDown: function(a) {
                a || (a = this.sm());
                var b = new Rh;
                pf(a, b, this._roots),
                    b.each(this.moveDown, this)
            },
            moveSelectionToTop: function(a) {
                a || (a = this.sm());
                var b = new Rh;
                nf(a, b, this._roots),
                    b.each(this.moveToTop, this)
            },
            moveSelectionToBottom: function(a) {
                a || (a = this.sm());
                var b = new Rh;
                mf(a, b, this._roots),
                    b.each(this.moveToBottom, this)
            },
            addScheduleTask: function(b) {
                var c = this;
                c.removeScheduleTask(b),
                b.enabled == j && (b.enabled = !0),
                b.interval == j && (b.interval = 10),
                b.action == j && (b.action = Lc),
                    b.lastTime = Date.now(),
                    c._29Q.push(b),
                c._30Q == j && (c._30Q = a.requestAnimationFrame(c._scheduleCallback))
            },
            removeScheduleTask: function(b) {
                var c = this
                    , d = c._29Q
                    , e = d.indexOf(b);
                e >= 0 && d.splice(e, 1),
                d.length || c._30Q == j || (a.cancelAnimationFrame(c._30Q),
                    delete c._30Q)
            }
        });
        var Wh = k.SelectionModel = function(a) {
                var b = this;
                b._68O = $,
                    b._map = {},
                    b._73O = new Rh,
                    b._74I = new Th,
                    b._21I(a)
            }
        ;
        hh("SelectionModel", b, {
            ms_fire: 1,
            ms_dm: 1,
            ms: function(a, b, c) {
                this.addSelectionChangeListener(a, b, c)
            },
            ums: function(a, b) {
                this.removeSelectionChangeListener(a, b)
            },
            fd: function() {
                return this.getFirstData()
            },
            ld: function() {
                return this.getLastData()
            },
            sg: function() {
                return this._68O === Z
            },
            co: function(a) {
                return this._map[a._id] != j
            },
            ss: function(a) {
                this.setSelection(a)
            },
            as: function(a) {
                this.appendSelection(a)
            },
            rs: function(a) {
                this.removeSelection(a)
            },
            cs: function() {
                this.clearSelection()
            },
            sa: function() {
                this.selectAll()
            },
            getSelectionMode: function() {
                return this._68O
            },
            setSelectionMode: function(a) {
                var b = this;
                if (b._68O !== a && (a === la || a === Z || a === $)) {
                    b.cs();
                    var c = b._68O;
                    b._68O = a,
                        b.fp("selectionMode", c, a)
                }
            },
            _21I: function(a) {
                var b = this
                    , c = b._dataModel;
                c !== a && (c && (b.cs(),
                    c.umm(b.handleDataModelChange, b)),
                    b._dataModel = a,
                    a.mm(b.handleDataModelChange, b, !0),
                    b.fp(Eb, c, a))
            },
            dispose: function() {
                var a = this;
                a.cs(),
                    a._dataModel.umm(a.handleDataModelChange, a)
            },
            handleDataModelChange: function(a) {
                var b = this;
                if (a.kind === wa) {
                    var c = a.data;
                    b.co(c) && (b._73O.remove(c),
                        delete b._map[c._id],
                        b._75I(wa, new Rh(c)))
                } else
                    a.kind === xa && b.cs()
            },
            getFilterFunc: function() {
                return this._filterFunc
            },
            setFilterFunc: function(a) {
                var b = this;
                if (b._filterFunc !== a) {
                    b.cs();
                    var c = b._filterFunc;
                    b._filterFunc = a,
                        b.fp("filterFunc", c, b._filterFunc)
                }
            },
            _75I: function(a, b, c, d) {
                c && (this._73O.each(function(a) {
                    d[a._id] ? c.remove(a) : c.add(a)
                }),
                    b = c.toList()),
                    this._74I.fire({
                        kind: a,
                        datas: new Rh(b)
                    })
            },
            addSelectionChangeListener: function(a, b, c) {
                this._74I.add(a, b, c)
            },
            removeSelectionChangeListener: function(a, b) {
                this._74I.remove(a, b)
            },
            _97O: function(a, b) {
                for (var c, d = this, e = 0, f = new Rh(a); e < f.size(); e++)
                    c = f.get(e),
                    (d._filterFunc && !d._filterFunc(c) || b && d.co(c) || !b && !d.co(c) || !d._dataModel.contains(c)) && (f.removeAt(e),
                        e--);
                return f
            },
            appendSelection: function(a) {
                var b = this;
                if (b._68O !== la) {
                    var c, d, e = b._73O, f = b._97O(a, !0);
                    f.isEmpty() || (b.sg() && (c = new Rh(e),
                        d = b._map,
                        e.clear(),
                        b._map = {},
                        f = new Rh(f.get(f.size() - 1))),
                        f.each(function(a) {
                            e.add(a),
                                b._map[a._id] = a
                        }),
                        b._75I("append", f, c, d))
                }
            },
            removeSelection: function(a) {
                var b = this
                    , c = b._97O(a)
                    , d = 0
                    , e = c.size();
                if (0 !== e) {
                    for (; e > d; d++) {
                        var f = c.get(d);
                        b._73O.remove(f),
                            delete b._map[f._id]
                    }
                    b._75I(wa, c)
                }
            },
            toSelection: function(a, b) {
                return this._73O.toList(a, b)
            },
            getSelection: function() {
                return this._73O
            },
            each: function(a, b) {
                this._73O.each(a, b)
            },
            setSelection: function(a) {
                var b = this
                    , c = b._73O;
                if (b._68O !== la && !(c.isEmpty() && !a || 1 === c.size() && b.ld() === a)) {
                    var d = new Rh(c)
                        , e = b._map;
                    c.clear(),
                        b._map = {};
                    var f = b._97O(a, !0);
                    b.sg() && f.size() > 1 && (f = new Rh(f.get(f.size() - 1))),
                        f.each(function(a) {
                            c.add(a),
                                b._map[a._id] = a
                        }),
                        b._75I("set", j, d, e)
                }
            },
            clearSelection: function() {
                var a = this
                    , b = a._73O;
                if (b.size() > 0) {
                    var c = b.toList();
                    b.clear(),
                        a._map = {},
                        a._75I(xa, c)
                }
            },
            selectAll: function() {
                var a = this;
                if (a._68O !== la) {
                    var b, c, d = a._dataModel.toDatas();
                    if (a._filterFunc)
                        for (b = 0; b < d.size(); b++)
                            c = d.get(b),
                            a._filterFunc(c) || (d.removeAt(b),
                                b--);
                    var e = a._73O
                        , f = new Rh(e)
                        , g = a._map;
                    e.clear(),
                        a._map = {},
                    a.sg() && d.size() > 1 && (d = new Rh(d.get(d.size() - 1)));
                    var h = d.size();
                    for (b = 0; h > b; b++)
                        c = d.get(b),
                            e.add(c),
                            a._map[c._id] = c;
                    a._75I("all", j, f, g)
                }
            },
            size: function() {
                return this._73O.size()
            },
            isEmpty: function() {
                return this._73O.isEmpty()
            },
            contains: function(a) {
                return this._map[a._id] != j
            },
            getLastData: function() {
                var a = this._73O;
                return a.size() > 0 ? a.get(a.size() - 1) : j
            },
            getFirstData: function() {
                var a = this._73O;
                return a.size() > 0 ? a.get(0) : j
            },
            isSelectable: function(a) {
                var b = this;
                return a && b._68O !== la ? b._filterFunc ? b._filterFunc(a) : !0 : !1
            }
        }),
            vd(m, {
                edgeGroupAgentFunc: j,
                graphViewAutoScrollZone: 16,
                graphViewResettable: !0,
                graphViewPannable: !0,
                graphViewRectSelectable: !0,
                graphViewScrollBarVisible: !0,
                graphViewRectSelectBorderColor: o.rectSelectBorder,
                graphViewRectSelectBackground: vf,
                graphViewEditPointSize: X ? 17 : 7,
                graphViewEditPointBorderColor: o.editPointBorder,
                graphViewEditPointBackground: o.editPointBackground,
                setEdgeType: function(a, b, c) {
                    Fc[a] = b,
                        Gc[a] = c
                },
                getEdgeType: function(a) {
                    return Fc[a]
                }
            }, !0),
            vd(n, {
                "2d.selectable": !0,
                "2d.visible": !0,
                "2d.movable": !0,
                "2d.editable": !0,
                "2d.move.mode": c,
                "image.stretch": "fill",
                icons: c,
                ingroup: !0,
                "body.color": c,
                opacity: c,
                pixelPerfect: !0,
                "select.color": If,
                "select.width": 1,
                "select.padding": 2,
                "select.type": qa,
                "shadow.blur": 6,
                "shadow.offset.x": 3,
                "shadow.offset.y": 3,
                "shadow.color": If,
                "border.color": c,
                "border.width": 2,
                "border.padding": 2,
                "border.type": qa,
                label: c,
                "label.font": c,
                "label.color": eg,
                "label.background": c,
                "label.position": 31,
                "label.position.fixed": !1,
                "label.offset.x": 0,
                "label.offset.y": 2,
                "label.rotation": c,
                "label.max": c,
                "label.opacity": c,
                "label.scale": 1,
                "label.align": c,
                label2: c,
                "label2.font": c,
                "label2.color": eg,
                "label2.background": c,
                "label2.position": 34,
                "label2.position.fixed": !1,
                "label2.offset.x": 0,
                "label2.offset.y": -2,
                "label2.rotation": c,
                "label2.max": c,
                "label2.opacity": c,
                "label2.scale": 1,
                "label2.align": c,
                note: c,
                "note.expanded": !0,
                "note.font": c,
                "note.color": fg,
                "note.background": If,
                "note.position": 8,
                "note.offset.x": -3,
                "note.offset.y": 3,
                "note.max": c,
                "note.toggleable": !0,
                "note.border.width": 1,
                "note.border.color": c,
                "note.opacity": c,
                "note.scale": 1,
                "note.align": c,
                note2: c,
                "note2.expanded": !0,
                "note2.font": c,
                "note2.color": fg,
                "note2.background": If,
                "note2.position": 3,
                "note2.offset.x": 3,
                "note2.offset.y": -3,
                "note2.max": c,
                "note2.toggleable": !0,
                "note2.border.width": 1,
                "note2.border.color": c,
                "note2.opacity": c,
                "note2.scale": 1,
                "note2.align": c,
                "group.type": c,
                "group.image": c,
                "group.image.stretch": "fill",
                "group.repeat.image": c,
                "group.padding": 8,
                "group.padding.left": 0,
                "group.padding.right": 0,
                "group.padding.top": 0,
                "group.padding.bottom": 0,
                "group.position": 17,
                "group.toggleable": !0,
                "group.title.font": c,
                "group.title.color": fg,
                "group.title.background": o.groupTitleBackground,
                "group.title.align": ba,
                "group.background": o.groupBackground,
                "group.depth": 1,
                "group.border.width": 1,
                "group.border.pattern": c,
                "group.border.color": Gf,
                "group.border.cap": cg,
                "group.border.join": dg,
                "group.gradient": j,
                "group.gradient.color": "#FFF",
                shape: c,
                "shape.background": Gf,
                "shape.repeat.image": c,
                "shape.border.width": 0,
                "shape.border.color": Gf,
                "shape.border.3d": !1,
                "shape.border.3d.color": c,
                "shape.border.3d.accuracy": c,
                "shape.border.cap": cg,
                "shape.border.join": dg,
                "shape.border.pattern": c,
                "shape.gradient": j,
                "shape.gradient.color": "#FFF",
                "shape.depth": 0,
                "shape.dash": !1,
                "shape.dash.pattern": bg,
                "shape.dash.offset": 0,
                "shape.dash.color": wf,
                "shape.dash.width": c,
                "shape.dash.3d": !1,
                "shape.dash.3d.color": c,
                "shape.dash.3d.accuracy": c,
                "shape.polygon.side": 6,
                "shape.arc.from": D,
                "shape.arc.to": E,
                "shape.arc.close": !0,
                "shape.arc.oval": !1,
                "shape.corner.radius": c,
                "edge.type": c,
                "edge.points": c,
                "edge.segments": c,
                "edge.color": Gf,
                "edge.width": 2,
                "edge.offset": 20,
                "edge.group": 0,
                "edge.expanded": !0,
                "edge.gap": 12,
                "edge.toggleable": !0,
                "edge.center": !1,
                "edge.3d": !1,
                "edge.3d.color": c,
                "edge.3d.accuracy": c,
                "edge.cap": cg,
                "edge.join": dg,
                "edge.source.position": 17,
                "edge.source.offset.x": 0,
                "edge.source.offset.y": 0,
                "edge.target.position": 17,
                "edge.target.offset.x": 0,
                "edge.target.offset.y": 0,
                "edge.pattern": c,
                "edge.dash": !1,
                "edge.dash.pattern": bg,
                "edge.dash.offset": 0,
                "edge.dash.color": wf,
                "edge.dash.width": c,
                "edge.dash.3d": !1,
                "edge.dash.3d.color": c,
                "edge.dash.3d.accuracy": c,
                "edge.independent": !1,
                "attach.row.index": 0,
                "attach.column.index": 0,
                "attach.row.span": 1,
                "attach.column.span": 1,
                "attach.padding": 0,
                "attach.padding.left": 0,
                "attach.padding.right": 0,
                "attach.padding.top": 0,
                "attach.padding.bottom": 0,
                "attach.index": -1,
                "attach.offset": 0,
                "attach.offset.relative": !1,
                "attach.offset.opposite": !1,
                "attach.thickness": c,
                "attach.gap": 0,
                "attach.gap.relative": !1,
                "grid.row.count": 1,
                "grid.column.count": 1,
                "grid.row.percents": c,
                "grid.column.percents": c,
                "grid.border": 1,
                "grid.border.left": 0,
                "grid.border.right": 0,
                "grid.border.top": 0,
                "grid.border.bottom": 0,
                "grid.gap": 1,
                "grid.background": o.gridBackground,
                "grid.depth": 1,
                "grid.cell.depth": -1,
                "grid.cell.border.color": o.gridCellBorderColor,
                "grid.block": c,
                "grid.block.padding": 3,
                "grid.block.width": 1,
                "grid.block.color": o.gridBlockColor
            }, !0),
            vd(Vh, {
                _5I: !0,
                isAutoAdjustIndex: function() {
                    return this._5I
                },
                setAutoAdjustIndex: function(a) {
                    this._5I = a
                },
                _76I: function(a, b, c) {
                    this._39I && this._39I.fire({
                        data: a,
                        oldIndex: b,
                        newIndex: c
                    })
                },
                addIndexChangeListener: function(a, b, c) {
                    var d = this;
                    d._39I || (d._39I = new Th),
                        d._39I.add(a, b, c)
                },
                removeIndexChangeListener: function(a, b) {
                    this._39I.remove(a, b)
                },
                prepareRemove: function(a) {
                    pd(a) && (a.setSource(j),
                        a.setTarget(j)),
                    a._70O && a._70O.toList().each(this.remove, this),
                    a._69O && a._69O.toList().each(function(a) {
                        a.setHost(j)
                    }),
                    a._host && a.setHost(j)
                },
                onAdded: function(a) {
                    this.isAutoAdjustIndex() && this._76O(a)
                },
                onDataPropertyChanged: function(a, b) {
                    $h[b.property] && this.isAutoAdjustIndex() && this._76O(a)
                },
                isAdjustable: function(a) {
                    return od(a) || pd(a)
                },
                isAdjustedToBottom: function(a) {
                    return qd(a) ? a.isExpanded() && ii(a) : !1
                },
                _76O: function(a) {
                    var b = this;
                    b.isAdjustedToBottom(a) ? (b.sendToBottom(a),
                        a.eachChild(b._76O, b)) : b.sendToTop(a)
                },
                sendToTop: function(a) {
                    var b = this;
                    if (b.contains(a) && b.isAdjustable(a)) {
                        var c = b._datas;
                        if (a !== c.get(b.size() - 1)) {
                            var d = c.indexOf(a);
                            c.removeAt(d),
                                c.add(a),
                                b._76I(a, d, b.size() - 1)
                        }
                        if (pd(a)) {
                            var e = a._40I;
                            e && !b.isAdjustedToBottom(e) && b.sendToTop(e),
                                e = a._41I,
                            e && !b.isAdjustedToBottom(e) && b.sendToTop(e)
                        }
                        a._69O && a._69O.each(function(c) {
                            c.isRelatedTo(a) || od(a) && c.isLoopedHostOn(a) || b.sendToTop(c)
                        }),
                        a.ISubGraph || (!qd(a) || a.isExpanded()) && a._adjustChildrenToTop && a.eachChild(function(a) {
                            pd(a) || b.sendToTop(a)
                        })
                    }
                },
                sendToBottom: function(a, b) {
                    var c = this;
                    if (a !== b && c.contains(a) && c.isAdjustable(a) && (!b || c.contains(b))) {
                        var d = c._datas
                            , e = d.remove(a)
                            , f = b ? c._datas.indexOf(b) : 0;
                        if (d.add(a, f),
                            e !== f) {
                            c._76I(a, e, f);
                            var g = a._parent;
                            !g || g.ISubGraph || pd(g) || c.sendToBottom(a._parent, a)
                        }
                    }
                }
            }),
            vd(Uf, {
                ms_edit: function(a) {
                    a._46O = function(a) {
                        var b = this
                            , c = b.gv.dm()
                            , d = c.getHistoryManager()
                            , e = b._index
                            , f = b._89I
                            , g = b._node
                            , h = b._shape
                            , i = b._edge
                            , j = b._77I;
                        g && f ? (this.fi({
                            kind: "endEditRect",
                            event: a,
                            data: g,
                            direction: f
                        }),
                        d && d.endInteraction()) : h && e >= 0 ? (b.fi({
                            kind: "endEditPoint",
                            event: a,
                            data: h,
                            index: e
                        }),
                        d && d.endInteraction()) : i && e >= 0 ? (b.fi({
                            kind: "endEditPoint",
                            event: a,
                            data: i,
                            index: e
                        }),
                        d && d.endInteraction()) : j && (b.fi({
                                kind: "endEditRotation",
                                event: a,
                                data: j
                            }),
                            d && d.endInteraction())
                    }
                        ,
                        a._78I = function(a) {
                            var b = this;
                            b.autoScroll(a);
                            var c = b.gv.lp(a)
                                , d = b._index
                                , e = b._89I
                                , f = b._node
                                , g = b._shape
                                , h = b._edge
                                , i = b._77I;
                            if (f && e)
                                b._80O(c),
                                    b.fi({
                                        kind: "betweenEditRect",
                                        event: a,
                                        data: f,
                                        direction: e
                                    });
                            else if (g && d >= 0)
                                c.e = g.getPoints().get(d).e,
                                    g.setPoint(d, c),
                                    b.fi({
                                        kind: "betweenEditPoint",
                                        event: a,
                                        data: g,
                                        index: d
                                    });
                            else if (h && d >= 0) {
                                var k = h.s(Va);
                                c.e = k.get(d).e,
                                    k.set(d, c),
                                    h.fp(Va, j, k),
                                    b.fi({
                                        kind: "betweenEditPoint",
                                        event: a,
                                        data: h,
                                        index: d
                                    })
                            } else if (i) {
                                var l = i.p()
                                    , m = F + H(c.y - l.y, c.x - l.x);
                                x(m) < .04 && (m = 0),
                                    i.setRotation(m),
                                    b.fi({
                                        kind: "betweenEditRotation",
                                        event: a,
                                        data: i
                                    })
                            }
                        }
                        ,
                        a._80O = function(a) {
                            var b = this
                                , c = b._rect
                                , d = c.x
                                , e = c.y
                                , f = c.width
                                , g = c.height
                                , h = b._89I;
                            "northwest" === h ? c = Tg(a, {
                                x: d + f,
                                y: e + g
                            }) : h === ka ? c = Tg({
                                x: d,
                                y: a.y
                            }, {
                                x: d + f,
                                y: e + g
                            }) : "northeast" === h ? c = Tg({
                                x: d,
                                y: a.y
                            }, {
                                x: a.x,
                                y: e + g
                            }) : h === ja ? c = Tg({
                                x: a.x,
                                y: e
                            }, {
                                x: d + f,
                                y: e + g
                            }) : h === ia ? c = Tg({
                                x: d,
                                y: e
                            }, {
                                x: a.x,
                                y: e + g
                            }) : "southwest" === h ? c = Tg({
                                x: a.x,
                                y: e
                            }, {
                                x: d + f,
                                y: a.y
                            }) : "south" === h ? c = Tg({
                                x: d,
                                y: e
                            }, {
                                x: d + f,
                                y: a.y
                            }) : "southeast" === h && (c = Tg({
                                    x: d,
                                    y: e
                                }, a)),
                                b._node.setRect(c)
                        }
                        ,
                        a._80I = function(a, b, c, d, e) {
                            var f = this
                                , g = f.gv.getEditPointSize() + 2;
                            return Vg({
                                x: b - g / 2,
                                y: c - g / 2,
                                width: g,
                                height: g
                            }, a) ? (f._89I !== d && (f.setCursor(e),
                                f._89I = d),
                                !0) : !1
                        }
                        ,
                        a._79I = function(a, b, c) {
                            var d = this
                                , e = d.gv
                                , f = b ? e.getDataUI(b) : j
                                , g = f ? f._55O : j;
                            if (g) {
                                var h, i, k, l = e.getEditPointSize() + 2, m = e.lp(a);
                                if (od(b)) {
                                    if (g._56O && od(b) && (i = g._98o,
                                            Vg({
                                                x: i.x - l / 2,
                                                y: i.y - l / 2,
                                                width: l,
                                                height: l
                                            }, m)))
                                        return d._77I = b,
                                        c && d.fi({
                                            kind: "beginEditRotation",
                                            event: a,
                                            data: b
                                        }),
                                            d.setCursor("crosshair"),
                                            !0;
                                    if (g._43O && b instanceof xj)
                                        for (k = b.getPoints(),
                                                 h = k.size() - 1; h >= 0; h--)
                                            if (i = k.get(h),
                                                    Vg({
                                                        x: i.x - l / 2,
                                                        y: i.y - l / 2,
                                                        width: l,
                                                        height: l
                                                    }, m))
                                                return d._index = h,
                                                    d._shape = b,
                                                c && d.fi({
                                                    kind: "beginEditPoint",
                                                    event: a,
                                                    data: b,
                                                    index: h
                                                }),
                                                    d.setCursor("crosshair"),
                                                    !0;
                                    if (g._42O) {
                                        var n = b.getRect()
                                            , o = n.x
                                            , p = n.y
                                            , q = n.width
                                            , r = n.height;
                                        if (d._80I(m, o, p, "northwest", "nwse-resize") || d._80I(m, o + q / 2, p, ka, $b) || d._80I(m, o + q, p, "northeast", "nesw-resize") || d._80I(m, o, p + r / 2, ja, Zb) || d._80I(m, o + q, p + r / 2, ia, Zb) || d._80I(m, o, p + r, "southwest", "nesw-resize") || d._80I(m, o + q / 2, p + r, "south", $b) || d._80I(m, o + q, p + r, "southeast", "nwse-resize"))
                                            return d._node = b,
                                                d._rect = b.getRect(),
                                            c && d.fi({
                                                kind: "beginEditRect",
                                                event: a,
                                                data: b,
                                                direction: d._89I
                                            }),
                                                !0
                                    }
                                }
                                if (g._43O && pd(b) && b.s(Wa) === Ga && (k = b.s(Va)))
                                    for (h = k.size() - 1; h >= 0; h--)
                                        if (i = k.get(h),
                                                Vg({
                                                    x: i.x - l / 2,
                                                    y: i.y - l / 2,
                                                    width: l,
                                                    height: l
                                                }, m))
                                            return d._index = h,
                                                d._edge = b,
                                            c && d.fi({
                                                kind: "beginEditPoint",
                                                event: a,
                                                data: b,
                                                index: h
                                            }),
                                                d.setCursor("crosshair"),
                                                !0
                            }
                            return !1
                        }
                },
                ms_gv: function(a) {
                    a._currentSubGraph = j,
                        a.upSubGraph = function() {
                            this.setCurrentSubGraph(gi(this._currentSubGraph))
                        }
                        ,
                        a.isVisible = function(a) {
                            var b = this;
                            if (gi(a) !== b._currentSubGraph)
                                return !1;
                            if (pd(a)) {
                                var c = a._40I
                                    , d = a._41I;
                                if (!c || !d)
                                    return !1;
                                if (!(a.s("edge.independent") || b.isVisible(c) && b.isVisible(d)))
                                    return !1;
                                if (a.isEdgeGroupHidden())
                                    return !1
                            } else
                                for (var e = a._parent; e && !e.ISubGraph; ) {
                                    if (qd(e) && (!e.isExpanded() || !b.isVisible(e)))
                                        return !1;
                                    e = e._parent
                                }
                            if (b instanceof lm) {
                                if (!a.s("3d.visible"))
                                    return !1
                            } else if (!a.s("2d.visible"))
                                return !1;
                            return b._visibleFunc ? b._visibleFunc(a) : !0
                        }
                        ,
                        a._16o = function(a) {
                            var b = this;
                            a.datas.each(function(a) {
                                b.invalidateData(a);
                                var c = a._parent;
                                qd(c) && od(a) && a.s(Aa) && (b.invalidateData(c),
                                c._49I && c._49I.each(function(a) {
                                    b.invalidateData(a)
                                }))
                            }),
                                b.onSelectionChanged(a)
                        }
                        ,
                        a.onSelectionChanged = function(a) {
                            var b = this
                                , c = b.sm();
                            if (1 === c.size() && ("set" === a.kind || "append" === a.kind)) {
                                var d = c.ld();
                                b.isAutoMakeVisible() && b.makeVisible(d),
                                b._76O && b._dataModel.isAutoAdjustIndex() && b._76O(d)
                            }
                        }
                        ,
                        a.makeVisible = function(a) {
                            if (a) {
                                var b = this
                                    , c = b.getDataUI ? b.getDataUI(a) : b.getData3dUI(a);
                                if (c) {
                                    var d = a
                                        , e = gi(a);
                                    for (e !== b._currentSubGraph && b.setCurrentSubGraph(e); (d = d._parent) && d !== e; )
                                        qd(d) && d.setExpanded(!0);
                                    b._23I = a,
                                        b.iv()
                                }
                            }
                        }
                        ,
                        a.getLabel = function(a) {
                            var b = a.getStyle(Ka);
                            return b === c ? a.getName() : b
                        }
                        ,
                        a.getLabelBackground = function(a) {
                            return a.getStyle("label.background")
                        }
                        ,
                        a.getLabelColor = function(a) {
                            return a.getStyle("label.color")
                        }
                        ,
                        a.getLabel2 = function(a) {
                            return a.getStyle("label2")
                        }
                        ,
                        a.getLabel2Background = function(a) {
                            return a.getStyle("label2.background")
                        }
                        ,
                        a.getLabel2Color = function(a) {
                            return a.getStyle("label2.color")
                        }
                        ,
                        a.getNote = function(a) {
                            return a.getStyle(Ma)
                        }
                        ,
                        a.getNoteBackground = function(a) {
                            return a.getStyle("note.background")
                        }
                        ,
                        a.getNote2 = function(a) {
                            return a.getStyle(Na)
                        }
                        ,
                        a.getNote2Background = function(a) {
                            return a.getStyle("note2.background")
                        }
                        ,
                        a.handleClick = function(a, b, c) {
                            var d = this;
                            b ? (d.fi({
                                kind: "clickData",
                                event: a,
                                data: b,
                                part: c
                            }),
                                d.onDataClicked(b, a)) : (d.fi({
                                kind: "clickBackground",
                                event: a
                            }),
                                d.onBackgroundClicked(a))
                        }
                        ,
                        a.handleDoubleClick = function(a, b, c) {
                            var d = this;
                            Lg(a) && (b ? (d.fi({
                                kind: "doubleClickData",
                                event: a,
                                data: b,
                                part: c
                            }),
                                d.onDataDoubleClicked(b, a, c),
                            d.checkDoubleClickOnNote(a, b, c) || d.checkDoubleClickOnRotation && d.checkDoubleClickOnRotation(a, b, c) || (pd(b) ? d.onEdgeDoubleClicked(b, a, c) : b.ISubGraph ? d.onSubGraphDoubleClicked(b, a, c) : qd(b) ? d.onGroupDoubleClicked(b, a, c) : b.IDoorWindow ? d.onDoorWindowDoubleClicked(b, a, c) : b.ICSGBox && d.onCSGBoxDoubleClicked(b, a, c))) : (d.fi({
                                kind: "doubleClickBackground",
                                event: a
                            }),
                                d.onBackgroundDoubleClicked(a)))
                        }
                        ,
                        a.onSubGraphDoubleClicked = function(a) {
                            this.setCurrentSubGraph(a)
                        }
                        ,
                        a.onEdgeDoubleClicked = function(a, b) {
                            a.ISubGraph && !Pg(b) ? this.setCurrentSubGraph(a) : a.s("edge.toggleable") && a.toggle()
                        }
                        ,
                        a.onGroupDoubleClicked = function(a) {
                            a.s("group.toggleable") && a.toggle()
                        }
                        ,
                        a.onDoorWindowDoubleClicked = function(a) {
                            a.s("dw.toggleable") && a.toggle(!0)
                        }
                        ,
                        a.onCSGBoxDoubleClicked = function(a, b) {
                            var c = this;
                            if (c instanceof lm) {
                                var d = c.getHitFaceInfo(b);
                                d && d.face && a.s(d.face + ".toggleable") && a.toggleFace(d.face, !0)
                            }
                        }
                        ,
                        a.onBackgroundClicked = function() {}
                        ,
                        a.onBackgroundDoubleClicked = function() {
                            this.upSubGraph()
                        }
                        ,
                        a.onDataClicked = function() {}
                        ,
                        a.onDataDoubleClicked = function() {}
                        ,
                        a.onAutoLayoutEnded = function() {}
                        ,
                        a.onMoveEnded = function() {}
                        ,
                        a.onPanEnded = function() {}
                        ,
                        a.onPinchEnded = function() {}
                        ,
                        a.onRectSelectEnded = function() {}
                        ,
                        a.onZoomEnded = function() {}
                },
                ms_icons: function(a) {
                    a.getRotation = function(a) {
                        return a == j ? 0 : a
                    }
                        ,
                        a._15O = function() {
                            var a = this
                                , b = a.s(Oa);
                            if (b) {
                                var c = a
                                    , d = a.data || a._data
                                    , e = a._38o = {
                                    icons: b,
                                    rects: {}
                                };
                                for (var f in b) {
                                    var g = b[f]
                                        , h = Ph(g.shape3d, d, c);
                                    if (!(Ph(g.visible, d, c) === !1 || Ph(g.for3d, d, c) && !a.I3d || h && !a.I3d)) {
                                        var i = h ? [h] : Ph(g.names, d, c)
                                            , k = i ? i.length : 0
                                            , l = Ph(g.position, d, c) || 3
                                            , m = Ph(g.offsetX, d, c) || 0
                                            , n = Ph(g.offsetY, d, c) || 0
                                            , o = Ph(g.direction, d, c) || ia
                                            , p = Ph(g.gap, d, c)
                                            , q = p != j ? p : 1
                                            , r = Ph(g.rotation, d, c)
                                            , s = Ph(g.keepOrien, d, c)
                                            , t = Ph(g.rotationFixed, d, c) ? r : a.getRotation(r, s, l)
                                            , u = j
                                            , v = e.rects[f] = new Array(k);
                                        v.rotation = t;
                                        for (var w = 0; k > w; w++) {
                                            var x, y, z, A, B = i[w];
                                            if (h)
                                                z = 0,
                                                    A = 0;
                                            else {
                                                var C = yg(B);
                                                z = Ph(g.width, d, c),
                                                    A = Ph(g.height, d, c),
                                                z == j && (z = Nh(C, d)),
                                                A == j && (A = Oh(C, d))
                                            }
                                            if (u ? o === ia ? m += z / 2 : o === ja ? m -= z / 2 : o === ka ? n -= A / 2 : n += A / 2 : u = {
                                                    width: z,
                                                    height: A
                                                },
                                                    a.I3d) {
                                                var D = -z / 2
                                                    , E = -A / 2;
                                                y = {
                                                    width: z,
                                                    height: A,
                                                    mat: a._16O(Ph(g.autorotate, d, c), l, u, Ph(g.face, d, c) || _, Ph(g.t3, d, c), Ph(g.r3, d, c), Ph(g.rotationMode, d, c), m, n),
                                                    vs: new kh([D, -E, 0, D, -E - A, 0, D + z, -E - A, 0, D + z, -E, 0])
                                                }
                                            } else
                                                x = a.getPosition(l, m, n, u, Ph(g.positionFixed, d, c)),
                                                    y = {
                                                        x: x.x - z / 2,
                                                        y: x.y - A / 2,
                                                        width: z,
                                                        height: A
                                                    },
                                                    a._68o(y, t);
                                            v[w] = y,
                                                o === ia ? m += z / 2 + q : o === ja ? m -= z / 2 + q : o === ka ? n -= A / 2 + q : n += A / 2 + q
                                        }
                                    }
                                }
                            }
                        }
                }
            });
        var Xh = {
                1: 1,
                2: 1,
                6: 1,
                9: 1,
                10: 1,
                14: 1,
                15: 1,
                16: 1,
                21: 1,
                22: 1,
                26: 1,
                29: 1,
                30: 1,
                34: 1,
                36: 1,
                38: 1,
                40: 1,
                42: 1,
                45: 1,
                50: 1,
                52: 1,
                54: 1
            }
            , Yh = {
                3: 1,
                7: 1,
                11: 1,
                17: 1,
                23: 1,
                27: 1,
                31: 1,
                44: 1,
                46: 1,
                47: 1,
                49: 1
            }
            , Zh = {
                translateX: 1,
                translateY: 1,
                zoom: 1,
                scrollBarVisible: 1
            }
            , $h = {
                sourceAgent: 1,
                targetAgent: 1,
                expanded: 1,
                parent: 1,
                host: 1
            }
            , _h = {
                position: 1,
                width: 1,
                height: 1,
                expanded: 1,
                rotation: 1,
                "s:edge.points": 1
            }
            , ai = {
                "edge.type": 1,
                "edge.group": 1
            }
            , bi = {
                rotation: 1,
                rotationX: 1,
                rotationZ: 1
            }
            , ci = {
                position: 1,
                width: 1,
                height: 1,
                "s:grid.row.count": 1,
                "s:grid.column.count": 1,
                "s:grid.row.percents": 1,
                "s:grid.column.percents": 1,
                "s:grid.border": 1,
                "s:grid.border.left": 1,
                "s:grid.border.right": 1,
                "s:grid.border.top": 1,
                "s:grid.border.bottom": 1,
                "s:grid.gap": 1
            }
            , di = {
                "attach.row.index": 1,
                "attach.column.index": 1,
                "attach.row.span": 1,
                "attach.column.span": 1,
                "attach.padding": 1,
                "attach.padding.left": 1,
                "attach.padding.right": 1,
                "attach.padding.top": 1,
                "attach.padding.bottom": 1,
                "attach.index": 1,
                "attach.offset": 1,
                "attach.offset.relative": 1,
                "attach.offset.opposite": 1,
                "attach.gap": 1,
                "attach.gap.relative": 1,
                "attach.thickness": 1
            }
            , ei = {
                shape: 1,
                thickness: 1,
                position: 1
            }
            , fi = function(a, b) {
                if (!a || !qd(b) || b.isEmpty())
                    return !1;
                for (a = a._parent; qd(a); ) {
                    if (a === b)
                        return !0;
                    a = a._parent
                }
                return !1
            }
            , gi = function(a) {
                if (!a)
                    return j;
                if (pd(a)) {
                    var b = a._40I
                        , c = a._41I;
                    if (!b || !c)
                        return j;
                    var d = gi(b)
                        , e = gi(c);
                    return d === e ? d : j
                }
                for (var f = a._parent; pd(f) && !f.ISubGraph; )
                    f = f._parent;
                return f ? f.ISubGraph ? f : gi(f) : j
            }
            , hi = function(a, b, c, d) {
                var e = b.getStyle(c) * d;
                e && $g(a, e),
                    e = b.getStyle(c + ".left") * d,
                e && (a.x -= e,
                    a.width += e),
                    e = b.getStyle(c + ".right") * d,
                e && (a.width += e),
                    e = b.getStyle(c + ".top") * d,
                e && (a.y -= e,
                    a.height += e),
                    e = b.getStyle(c + ".bottom") * d,
                e && (a.height += e),
                a.width < 0 && (a.width = -a.width,
                    a.x -= a.width),
                a.height < 0 && (a.height = -a.height,
                    a.y -= a.height)
            }
            , ii = function(a) {
                for (var b, c = 0, d = a.size(); d > c; c++)
                    if (b = a.getChildAt(c),
                        od(b) && ii(b))
                        return !0;
                return a.hasAgentEdges()
            }
            , ji = function(a) {
                if (!a)
                    return j;
                for (var b = a._parent; qd(b); ) {
                    if (!qd(b._parent))
                        return b.isExpanded() ? a : b;
                    b.isExpanded() || (a = b),
                        b = b._parent
                }
                return a
            }
            , ki = function(a, b) {
                if (!a || !b)
                    return j;
                var c, d, e, f = gi(a), g = gi(b);
                if (f !== g) {
                    for (; g && f !== g; )
                        g = gi(g);
                    if (f === g)
                        return a;
                    c = new Rh,
                        c.add(a, 0);
                    for (var h = a._parent; od(h) && !b.isDescendantOf(h); )
                        c.add(h, 0),
                            h = h._parent;
                    for (e = c.size(),
                             d = 0; e > d; d++) {
                        var i = c.get(d);
                        if (qd(i) && !i.isExpanded())
                            return i;
                        if (i.ISubGraph)
                            return i
                    }
                    return a
                }
                return a
            }
            , li = function(a) {
                if (a.isLooped())
                    return a._source;
                var b = ji(a._source)
                    , c = ji(a._target);
                return b === c ? a._source : ki(b, c)
            }
            , mi = function(a) {
                if (a.isLooped())
                    return a._target;
                var b = ji(a._source)
                    , c = ji(a._target);
                return b === c ? a._target : ki(c, b)
            }
            , ni = function(a, b) {
                var c;
                if (qd(b) && b.isExpanded()) {
                    var d = a.getDataUI(b);
                    d && d._88I && (c = d._88I.rect)
                }
                return c ? c : b.getRect()
            }
            , oi = function(a, b, c, d, e) {
                return b ? (c = sf(c, ni(a, b)),
                    c.x += d,
                    c.y += e,
                    c) : j
            }
            , pi = function(a, b) {
                if (!a || !b)
                    return j;
                var c, d, e, f, g, h;
                if (a === b) {
                    if (f = a.getLoopedEdges(),
                            !f)
                        return j;
                    f = new Rh(f)
                } else {
                    if (g = a.getAgentEdges(),
                            h = b.getAgentEdges(),
                        !g || !h)
                        return j;
                    for (d = g.size(),
                             c = 0; d > c; c++)
                        e = g.get(c),
                        h.contains(e) && (f || (f = new Rh),
                            f.add(e))
                }
                if (f)
                    for (c = 0; c < f.size(); c++)
                        e = f.get(c),
                        e.getStyle(Wa) === Ga && (e._22I(j),
                            f.removeAt(c),
                            c--);
                return f
            }
            , qi = function(a, b) {
                var c = pi(a, b);
                if (c && !c.isEmpty()) {
                    if (1 === c.size())
                        return void c.get(0)._22I(j);
                    var d = new Rh
                        , e = new Rh;
                    c.each(function(a) {
                        var b = a.s("edge.group");
                        d.contains(b) || d.add(b)
                    }),
                        d.sort(),
                        d.each(function(a) {
                            e.add(new k.EdgeGroup(c.toList(function(b) {
                                return a === b.s("edge.group")
                            }),e))
                        }),
                        e.each(function(a) {
                            a.each(function(b) {
                                b._22I(a)
                            })
                        })
                }
            }
            , ri = function(a, b) {
                if (b) {
                    var c = b.rect
                        , d = b.color
                        , e = b.rotation
                        , f = b.labelWidth
                        , g = b.background
                        , h = b.opacity
                        , i = b.scale
                        , k = i != j && 1 !== i;
                    if (h != j) {
                        var l = a.globalAlpha;
                        a.globalAlpha *= h
                    }
                    if (e || k) {
                        a.save();
                        var m = c.x + c.width / 2
                            , n = c.y + c.height / 2;
                        de(a, m, n),
                        e && ee(a, e),
                        k && a.scale(i, i),
                            de(a, -m, -n)
                    }
                    if (g && Xe(a, c.x, c.y, c.width, c.height, g),
                            f) {
                        var o = c.width
                            , p = a.createLinearGradient(c.x, c.y, c.x + o, c.y);
                        p.addColorStop(0, d),
                            p.addColorStop(.9, d),
                            p.addColorStop(1, Qb),
                            d = p,
                            c.width = f
                    }
                    Yd(a, b.ss, c, b.font, d, b.align),
                    f && (c.width = o),
                    (e || k) && a.restore(),
                    h != j && (a.globalAlpha = l)
                }
            }
            , si = function(a, b) {
                if (b) {
                    var c = b.rect
                        , d = c.x
                        , e = c.y
                        , f = c.width
                        , g = c.height
                        , h = b.background
                        , i = b.backgroundImage
                        , k = b.borderWidth
                        , l = b.borderColor
                        , m = b.labelWidth
                        , n = b.opacity
                        , o = b.scale
                        , p = o != j && 1 !== o;
                    if (n != j) {
                        var q = a.globalAlpha;
                        a.globalAlpha *= n
                    }
                    if (p) {
                        a.save();
                        var r = c.x + c.width / 2
                            , s = c.y + c.height / 2;
                        de(a, r, s),
                            a.scale(o, o),
                            de(a, -r, -s)
                    }
                    if (b.expanded) {
                        var t = w(8, f / 4)
                            , u = e + g - 8;
                        if (a.fillStyle = h,
                                a.beginPath(),
                                a.moveTo(d, e),
                                a.lineTo(d, u),
                                a.lineTo(d + f / 2, u),
                                a.lineTo(d + f / 2, e + g),
                                a.lineTo(d + f / 2 + t, u),
                                a.lineTo(d + f, u),
                                a.lineTo(d + f, e),
                                a.closePath(),
                                a.fill(),
                            k && (a.lineWidth = k,
                                a.lineJoin = "round",
                                a.lineCap = "round",
                                a.strokeStyle = l ? l : Ig(h),
                                a.beginPath(),
                                a.moveTo(d + f, e),
                                a.lineTo(d + f, u),
                                a.lineTo(d + f / 2 + t, u),
                                a.lineTo(d + f / 2, e + g),
                                a.stroke(),
                                a.strokeStyle = l ? l : Hg(h),
                                a.beginPath(),
                                a.moveTo(d + f, e),
                                a.lineTo(d, e),
                                a.lineTo(d, u),
                                a.lineTo(d + f / 2, u),
                                a.lineTo(d + f / 2, e + g),
                                a.stroke()),
                                i)
                            Ag(a, yg(i), Pb, c.x, c.y, c.width, c.height - 8, b.data, b.view);
                        else {
                            if (c.height -= 8,
                                    h = b.color,
                                    m) {
                                var v = f
                                    , x = a.createLinearGradient(d, e, d + v, e);
                                x.addColorStop(0, h),
                                    x.addColorStop(.9, h),
                                    x.addColorStop(1, Qb),
                                    h = x,
                                    c.width = m
                            }
                            Yd(a, b.ss, c, b.font, h, b.align),
                            m && (c.width = v),
                                c.height += 8
                        }
                    } else if (b.icon)
                        Qh(a, yg(b.icon), d, e, f, g, b.data, b.view);
                    else {
                        var y = f / 2;
                        k && (a.lineWidth = k,
                            a.lineJoin = "round",
                            a.lineCap = "round",
                            a.strokeStyle = l ? l : Ig(h),
                            a.beginPath(),
                            a.arc(d + y, e + y, y, F, 1.6 * D, !0),
                            a.moveTo(d + y, e + g),
                            a.lineTo(d + f - y / 5, e + y),
                            a.stroke(),
                            a.strokeStyle = l ? l : Hg(h),
                            a.beginPath(),
                            a.arc(d + y, e + y, y, 1.6 * D, F, !0),
                            a.moveTo(d + y, e + g),
                            a.lineTo(d + y / 5, e + y),
                            a.stroke()),
                            a.fillStyle = h,
                            a.beginPath(),
                            a.arc(d + y, e + y, y, 0, E, !0),
                            a.moveTo(d + y, e + g),
                            a.lineTo(d + f - y / 5, e + y),
                            a.lineTo(d + y / 5, e + y),
                            a.closePath(),
                            a.fill(),
                            a.fillStyle = b.color,
                            a.beginPath(),
                            a.arc(d + y, e + y, y / 3, 0, E, !0),
                            a.fill()
                    }
                    p && a.restore(),
                    n != j && (a.globalAlpha = q)
                }
            }
            , ti = function(a, b) {
                return b > 2 * a ? a : b / 2
            }
            , ui = function(a, b, c, d) {
                if (!a || !b)
                    return 0;
                var e = H(b.y - a.y, b.x - a.x);
                return c || (e = b.x < a.x ? e + D : e),
                e + d
            }
            , vi = function(a, b, c, d, e, f, g) {
                g && (a.x > b.x || a.x === b.x && a.y > b.y) && (c = rf[c],
                    e = -e);
                var h = sf(c, {
                    x: 0,
                    y: 0,
                    width: Sg(a, b),
                    height: 0
                }, f);
                return h.x += d,
                    h.y += e,
                    h = new jf(H(b.y - a.y, b.x - a.x)).tf(h),
                    h.x += a.x,
                    h.y += a.y,
                    h
            }
            , wi = function(a, b, c, d, e) {
                if (a._19Q = !0,
                        !c.getEdgeGroup())
                    return d ? c.s("edge.gap") : 0;
                var f, g = 0, h = 0, i = 0;
                if (c.getEdgeGroup().getSiblings().each(function(a) {
                        a.each(function(a) {
                            if (b.isVisible(a) && a.s(Wa) == e) {
                                var d = a.s("edge.gap");
                                f ? (h += i / 2 + d / 2,
                                    i = d) : (f = a,
                                    i = d),
                                a === c && (g = h)
                            }
                        })
                    }),
                        d)
                    return h - g + i;
                var j = g - h / 2;
                return f && c._40I !== f._40I && (a._19Q = !1),
                    j
            }
            , xi = function() {
                var a = function(a) {
                        var b = [];
                        return a.forEach(function(a) {
                            b.push({
                                x: a.x,
                                y: a.y
                            }),
                                b.push({
                                    x: a.x + a.width,
                                    y: a.y + a.height
                                }),
                                b.push({
                                    x: a.x + a.width,
                                    y: a.y
                                }),
                                b.push({
                                    x: a.x,
                                    y: a.y + a.height
                                })
                        }),
                            b
                    }
                ;
                return function(b, c, d) {
                    if ("oval" === b) {
                        var e = 0
                            , f = d.height / d.width
                            , g = f * f
                            , h = d.x + d.width / 2
                            , i = d.y + d.height / 2
                            , j = a(c);
                        j.forEach(function(a) {
                            var b = a.x - h
                                , c = a.y - i
                                , d = b * b + c * c / g;
                            d > e && (e = d)
                        }),
                            e = u(e);
                        var k = f * e;
                        return {
                            x: h - e,
                            y: i - k,
                            width: 2 * e,
                            height: 2 * k
                        }
                    }
                    if ("circle" === b) {
                        var l = 0
                            , h = d.x + d.width / 2
                            , i = d.y + d.height / 2
                            , j = a(c);
                        return j.forEach(function(a) {
                            var b = a.x - h
                                , c = a.y - i
                                , d = b * b + c * c;
                            d > l && (l = d)
                        }),
                            l = u(l),
                            {
                                x: h - l,
                                y: i - l,
                                width: 2 * l,
                                height: 2 * l
                            }
                    }
                    return "roundRect" === b ? ($g(d, w(d.width, d.height) / 16),
                        d) : d
                }
            }()
            , yi = k.graph = {}
            , zi = function(a, b, c) {
                gh(d + ".graph." + a, b, c)
            }
        ;
        k.layout = {};
        var Ai = {
            comps: [{
                type: ta,
                points: [85, 50, 70, 115, 100, 71, 86, 107, 88, 49, 57, 107, 99, 75, 68, 68, 98, 87, 105, 71, 79, 113, 55, 97, 103, 113, 85, 121, 108, 75, 83, 85, 120, 108, 111, 121, 116, 112, 114, 85, 113, 101, 112, 65, 110, 122, 100, 78, 104, 66, 99, 74, 50, 89, 79, 109, 101, 82, 49, 103, 89, 53, 89, 55],
                borderWidth: 1,
                borderColor: j
            }]
        };
        Ai[ya] = Ai[za] = 160,
            xg("node_image", Yc(30, 30, [{
                type: qa,
                rect: [4, 5, 22, 16],
                gradient: $f,
                gradientColor: Hf,
                background: Gf
            }, {
                type: qa,
                rect: [2, 3, 26, 20],
                borderWidth: 1,
                borderColor: Gf
            }, {
                type: qa,
                rect: [11, 23, 8, 4],
                background: Gf
            }, {
                type: qa,
                rect: [6, 27, 18, 2],
                background: Gf
            }])),
            xg("node_icon", Yc(16, 16, [{
                type: qa,
                rect: [2, 2, 12, 10],
                gradient: $f,
                gradientColor: Hf,
                background: Gf
            }, {
                type: oa,
                rect: [2, 2, 12, 10],
                width: 1,
                color: Gf
            }, {
                type: qa,
                rect: [6, 12, 4, 2],
                background: Gf
            }, {
                type: qa,
                rect: [4, 14, 8, 1],
                background: Gf
            }])),
            xg("group_image", Yc(66, 39, [{
                type: qa,
                rect: [44.3, 18, 18.1, 12.8],
                gradient: $f,
                gradientColor: Hf,
                background: Gf
            }, {
                type: qa,
                rect: [3.3, 17.8, 18.1, 12.8],
                gradient: $f,
                gradientColor: Hf,
                background: Gf
            }, {
                type: qa,
                rect: [15.8, 3.2, 33.5, 26.4],
                borderWidth: 1,
                borderColor: Gf,
                gradient: $f,
                gradientColor: Hf,
                background: Gf
            }, {
                type: qa,
                rect: [26.2, 29.4, 12.8, 4.2],
                background: Gf
            }, {
                type: qa,
                rect: [21.3, 33.5, 22.5, 2.3],
                background: Gf
            }, {
                type: qa,
                rect: [5.3, 32.7, 14.1, 2.1],
                background: Gf
            }, {
                type: qa,
                rect: [9, 30.4, 6.7, 2.4],
                background: Gf
            }, {
                type: qa,
                rect: [50, 30.7, 6.7, 2.4],
                background: Gf
            }, {
                type: qa,
                rect: [46.3, 33, 14.1, 2.1],
                background: Gf
            }])),
            xg("group_icon", Yc(16, 16, [{
                type: qa,
                rect: [4, 12, 4, 2],
                background: Gf
            }, {
                type: qa,
                rect: [2, 13, 8, 1],
                background: Gf
            }, {
                type: qa,
                rect: [12, 12, 2, 1],
                background: Gf
            }, {
                type: qa,
                rect: [11, 13, 4, 1],
                background: Gf
            }, {
                type: qa,
                rect: [10, 7, 6, 5],
                gradient: $f,
                gradientColor: Hf,
                background: Gf
            }, {
                type: qa,
                rect: [1, 2, 10, 10],
                gradient: $f,
                gradientColor: Hf,
                background: Gf
            }, {
                type: oa,
                rect: [1, 2, 10, 10],
                width: 1,
                color: Gf
            }])),
            xg("edge_icon", Yc(16, 16, [{
                type: qa,
                rect: [2.1, 6.9, 11.5, 2.6],
                rotation: -.79,
                gradient: $f,
                gradientColor: Hf,
                background: Gf
            }, {
                type: qa,
                rect: [10.8, 1, 4, 4],
                background: Gf
            }, {
                type: qa,
                rect: [1, 11, 4, 4],
                background: Gf
            }])),
            xg("subGraph_image", Yc(72, 45, [{
                type: ta,
                points: [9, 42, .3, 38.4, 2.4, 28.8, 5.7, 21.6, 11.7, 22.5, 11.7, 15.9, 16.8, 13.8, 21.6, 12, 24.3, 15.9, 27.9, 3, 42.3, 2.1, 59.4, 4.5, 57.3, 18.3, 67.5, 18.9, 69.6, 27.3, 69.9, 38.4, 64.2, 41.4],
                segments: [1, 3, 3, 3, 3, 3, 3, 3, 3],
                gradient: $f,
                gradientColor: Hf,
                background: Gf
            }, {
                type: qa,
                rect: [29.6, 30.7, 3.6, 1.8],
                background: Gf
            }, {
                type: qa,
                rect: [28.4, 32.3, 6, 1.2],
                background: Gf
            }, {
                type: qa,
                rect: [37.3, 32, 10.8, 1.8],
                background: Gf
            }, {
                type: qa,
                rect: [39.1, 29.9, 7.2, 2.3],
                background: Gf
            }, {
                type: qa,
                rect: [26.6, 23.7, 9.6, 7.2],
                gradient: $f,
                gradientColor: Hf,
                background: Gf
            }, {
                type: qa,
                rect: [34.3, 16.8, 16.8, 13.2],
                borderWidth: 1,
                borderColor: Gf,
                gradient: $f,
                gradientColor: Hf,
                background: Gf
            }])),
            xg("subGraph_icon", Yc(17, 17, [{
                type: ta,
                points: [2.2, 14.6, .2, 11.9, .8, 8.8, 1.8, 5.9, 5.6, 7.4, 3.8, 1.6, 10.3, 3, 14.5, 4.2, 12.2, 7.5, 18.9, 7.2, 14.5, 14.5],
                segments: [1, 3, 3, 3, 3, 3],
                gradient: $f,
                gradientColor: Hf,
                background: Gf
            }])),
            xg("shape_icon", Yc(16, 16, [{
                type: ta,
                points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
                background: Gf
            }])),
            xg("polyline_icon", Yc(16, 16, [{
                type: ta,
                points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
                borderWidth: 1,
                borderColor: Gf
            }, Zc(7.5, .4), Zc(7.5, 6.3), Zc(13.6, 6.3), Zc(13.6, 14), Zc(.7, 13.9), Zc(.7, .3)])),
            xg("grid_icon", Yc(16, 16, [{
                type: qa,
                rect: [1, 1, 4, 4],
                background: Gf,
                gradient: $f,
                gradientColor: Hf
            }, {
                type: qa,
                rect: [6, 1, 4, 4],
                background: Gf,
                gradient: $f,
                gradientColor: Hf
            }, {
                type: qa,
                rect: [11, 1, 4, 4],
                background: Gf,
                gradient: $f,
                gradientColor: Hf
            }, {
                type: qa,
                rect: [11, 6, 4, 4],
                background: Gf,
                gradient: $f,
                gradientColor: Hf
            }, {
                type: qa,
                rect: [6, 6, 4, 4],
                background: Gf,
                gradient: $f,
                gradientColor: Hf
            }, {
                type: qa,
                rect: [1, 6, 4, 4],
                background: Gf,
                gradient: $f,
                gradientColor: Hf
            }, {
                type: qa,
                rect: [11, 11, 4, 4],
                background: Gf,
                gradient: $f,
                gradientColor: Hf
            }, {
                type: qa,
                rect: [6, 11, 4, 4],
                background: Gf,
                gradient: $f,
                gradientColor: Hf
            }, {
                type: qa,
                rect: [1, 11, 4, 4],
                background: Gf,
                gradient: $f,
                gradientColor: Hf
            }])),
            xg("light_icon", Yc(16, 16, [{
                type: "rect",
                rect: [6, 9, 5, 5],
                borderWidth: 1,
                borderColor: Gf
            }, {
                type: "circle",
                rect: [1, 1, 15, 10],
                borderWidth: 1,
                borderColor: Gf,
                gradient: $f,
                gradientColor: Hf,
                background: {
                    func: function(a) {
                        var b = a ? a.s(Sj) : j;
                        return ld(b) ? "rgb(" + L(255 * b[0]) + "," + L(255 * b[1]) + "," + L(255 * b[2]) + ")" : b || Gf
                    }
                }
            }]));
        var Bi = function(a, b) {
                for (var c = a.vertices, d = 0; d < c.length; d++) {
                    var e = c[d]
                        , f = e.y;
                    e.y = e.z,
                        e.z = -f,
                    b && (e.y += b)
                }
            }
            , Ci = function(a) {
                for (var b, c, d, e, f, g, h = [], i = [], j = [], k = a.faces, l = 0, m = 0, n = 0, o = k.length; o > l; l++,
                    m += 6,
                    n += 9) {
                    var p = k[l];
                    1 === p.i ? (b || (b = [],
                        c = [],
                        d = []),
                        Di(p, l, m, n, a, b, d, c)) : 2 === p.i ? (e || (e = [],
                        f = [],
                        g = []),
                        Di(p, l, m, n, a, e, g, f)) : Di(p, l, m, n, a, h, j, i)
                }
                return {
                    vs: h,
                    uv: i,
                    ns: j,
                    top_vs: b,
                    top_uv: c,
                    top_ns: d,
                    bottom_vs: e,
                    bottom_uv: f,
                    bottom_ns: g
                }
            }
            , Di = function(a, b, c, d, e, f, g, h) {
                var i = e.vertices
                    , j = e.faceVertexUvs
                    , k = i[a.a]
                    , l = i[a.b]
                    , m = i[a.c];
                f[d] = k.x,
                    f[d + 1] = k.y,
                    f[d + 2] = k.z,
                    f[d + 3] = l.x,
                    f[d + 4] = l.y,
                    f[d + 5] = l.z,
                    f[d + 6] = m.x,
                    f[d + 7] = m.y,
                    f[d + 8] = m.z;
                var n = a.vertexNormals;
                if (3 === n.length) {
                    var o = n[0]
                        , p = n[1]
                        , q = n[2];
                    g[d] = o.x,
                        g[d + 1] = o.y,
                        g[d + 2] = o.z,
                        g[d + 3] = p.x,
                        g[d + 4] = p.y,
                        g[d + 5] = p.z,
                        g[d + 6] = q.x,
                        g[d + 7] = q.y,
                        g[d + 8] = q.z
                } else {
                    var r = a.normal;
                    g[d] = r.x,
                        g[d + 1] = r.y,
                        g[d + 2] = r.z,
                        g[d + 3] = r.x,
                        g[d + 4] = r.y,
                        g[d + 5] = r.z,
                        g[d + 6] = r.x,
                        g[d + 7] = r.y,
                        g[d + 8] = r.z
                }
                var s = j[0][b][0]
                    , t = j[0][b][1]
                    , u = j[0][b][2];
                h[c] = s.x,
                    h[c + 1] = s.y,
                    h[c + 2] = t.x,
                    h[c + 3] = t.y,
                    h[c + 4] = u.x,
                    h[c + 5] = u.y
            }
            , Ei = function(a, b, c, d, e, f, g, h, i) {
                c == j && (c = !0),
                d == j && (d = !0),
                g == j && (g = 1),
                h == j && (h = 0);
                var k = new Wi;
                return Te(k, a, b, i),
                    Ci(new kj(k,{
                        top: c,
                        bottom: d,
                        curveSegments: e,
                        amount: g,
                        repeatUVLength: f
                    },-g / 2 + h))
            }
            , Fi = function(a, b) {
                this.x = a || 0,
                    this.y = b || 0
            }
        ;
        Fi.prototype = {
            constructor: Fi,
            add: function(a) {
                return this.x += a.x,
                    this.y += a.y,
                    this
            },
            sub: function(a) {
                return this.x -= a.x,
                    this.y -= a.y,
                    this
            },
            equals: function(a) {
                return a.x === this.x && a.y === this.y
            },
            multiplyScalar: function(a) {
                return this.x *= a,
                    this.y *= a,
                    this
            },
            distanceTo: function(a) {
                return u(this.distanceToSquared(a))
            },
            distanceToSquared: function(a) {
                var b = this.x - a.x
                    , c = this.y - a.y;
                return b * b + c * c
            },
            clone: function() {
                return new Fi(this.x,this.y)
            }
        };
        var Gi = function(a, b, c) {
                this.x = a || 0,
                    this.y = b || 0,
                    this.z = c || 0
            }
        ;
        Gi.prototype = {
            constructor: Gi,
            set: function(a, b, c) {
                return this.x = a,
                    this.y = b,
                    this.z = c,
                    this
            },
            setY: function(a) {
                return this.y = a,
                    this
            },
            copy: function(a) {
                return this.x = a.x,
                    this.y = a.y,
                    this.z = a.z,
                    this
            },
            add: function(a) {
                return this.x += a.x,
                    this.y += a.y,
                    this.z += a.z,
                    this
            },
            addVectors: function(a, b) {
                return this.x = a.x + b.x,
                    this.y = a.y + b.y,
                    this.z = a.z + b.z,
                    this
            },
            sub: function(a) {
                return this.x -= a.x,
                    this.y -= a.y,
                    this.z -= a.z,
                    this
            },
            subVectors: function(a, b) {
                return this.x = a.x - b.x,
                    this.y = a.y - b.y,
                    this.z = a.z - b.z,
                    this
            },
            multiplyScalar: function(a) {
                return this.x *= a,
                    this.y *= a,
                    this.z *= a,
                    this
            },
            applyMatrix4: function(a) {
                var b = this.x
                    , c = this.y
                    , d = this.z
                    , e = a.elements;
                return this.x = e[0] * b + e[4] * c + e[8] * d + e[12],
                    this.y = e[1] * b + e[5] * c + e[9] * d + e[13],
                    this.z = e[2] * b + e[6] * c + e[10] * d + e[14],
                    this
            },
            divideScalar: function(a) {
                if (0 !== a) {
                    var b = 1 / a;
                    this.x *= b,
                        this.y *= b,
                        this.z *= b
                } else
                    this.x = 0,
                        this.y = 0,
                        this.z = 0;
                return this
            },
            dot: function(a) {
                return this.x * a.x + this.y * a.y + this.z * a.z
            },
            length: function() {
                return u(this.x * this.x + this.y * this.y + this.z * this.z)
            },
            normalize: function() {
                return this.divideScalar(this.length())
            },
            cross: function(a) {
                var b = this.x
                    , c = this.y
                    , d = this.z;
                return this.x = c * a.z - d * a.y,
                    this.y = d * a.x - b * a.z,
                    this.z = b * a.y - c * a.x,
                    this
            },
            crossVectors: function(a, b) {
                var c = a.x
                    , d = a.y
                    , e = a.z
                    , f = b.x
                    , g = b.y
                    , h = b.z;
                return this.x = d * h - e * g,
                    this.y = e * f - c * h,
                    this.z = c * g - d * f,
                    this
            },
            distanceTo: function(a) {
                return u(this.distanceToSquared(a))
            },
            distanceToSquared: function(a) {
                var b = this.x - a.x
                    , c = this.y - a.y
                    , d = this.z - a.z;
                return b * b + c * c + d * d
            },
            clone: function() {
                return new Gi(this.x,this.y,this.z)
            }
        };
        var Hi = function() {
                this.elements = new Float32Array(16)
            }
        ;
        Hi.prototype = {
            constructor: Hi,
            set: function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
                var q = this.elements;
                return q[0] = a,
                    q[4] = b,
                    q[8] = c,
                    q[12] = d,
                    q[1] = e,
                    q[5] = f,
                    q[9] = g,
                    q[13] = h,
                    q[2] = i,
                    q[6] = j,
                    q[10] = k,
                    q[14] = l,
                    q[3] = m,
                    q[7] = n,
                    q[11] = o,
                    q[15] = p,
                    this
            },
            makeRotationAxis: function(a, b) {
                var c = y(b)
                    , d = A(b)
                    , e = 1 - c
                    , f = a.x
                    , g = a.y
                    , h = a.z
                    , i = e * f
                    , j = e * g;
                return this.set(i * f + c, i * g - d * h, i * h + d * g, 0, i * g + d * h, j * g + c, j * h - d * f, 0, i * h - d * g, j * h + d * f, e * h * h + c, 0, 0, 0, 0, 1),
                    this
            }
        };
        var Ii = function(a) {
                this.repeatUVLength = a
            }
        ;
        Ii.prototype = {
            generateTopUV: function(a, b, c, d, e, f, g) {
                var h, i, j, k, l = a.vertices, m = l[d].x, n = l[d].y, o = l[e].x, p = l[e].y, q = l[f].x, r = l[f].y, s = this.repeatUVLength;
                if (s)
                    h = 0,
                        i = 0,
                        j = s,
                        k = s;
                else {
                    this._bb || (this._bb = b.getBoundingBox());
                    var t = this._bb;
                    h = t.minX,
                        i = t.minY,
                        j = t.maxX - h,
                        k = t.maxY - i
                }
                return g ? [new Fi((m - h) / j,(n - i) / k), new Fi((o - h) / j,(p - i) / k), new Fi((q - h) / j,(r - i) / k)] : [new Fi((m - h) / j,1 - (n - i) / k), new Fi((o - h) / j,1 - (p - i) / k), new Fi((q - h) / j,1 - (r - i) / k)]
            },
            generateBottomUV: function(a, b, c, d, e, f) {
                return this.generateTopUV(a, b, c, d, e, f, !0)
            },
            generateSideWallUV: function(a, b, c, d, e, f, g, h, i, j, k, l) {
                if (!this._cl) {
                    for (var m, n, o = [], p = 0, q = c.length, r = 0; q > r; r++) {
                        m = c[r],
                            n = c[(r + 1) % q];
                        var s = m.x - n.x
                            , t = m.y - n.y
                            , v = u(s * s + t * t);
                        o.push(p),
                            p += v
                    }
                    for (var r = 0; q > r; r++)
                        o[r] /= p;
                    this._cl = o
                }
                var o = this._cl
                    , w = 1 - i / j
                    , x = 1 - (i + 1) / j
                    , y = o[k]
                    , z = o[l];
                return z > y && (y += 1),
                    [new Fi(y,w), new Fi(z,w), new Fi(z,x), new Fi(y,x)]
            }
        };
        var Ji = function(a, b, c, d, e, f) {
                this.a = a,
                    this.b = b,
                    this.c = c,
                    this.i = f,
                    this.normal = d instanceof Gi ? d : new Gi,
                    this.vertexNormals = d instanceof Array ? d : []
            }
        ;
        Ji.prototype = {
            constructor: Ji
        };
        var Ki = function() {}
            , Li = Ki.prototype;
        Li.getPointAt = function(a) {
            var b = this.getUtoTmapping(a);
            return this.getPoint(b)
        }
            ,
            Li.getPoints = function(a) {
                a || (a = 5);
                var b, c = [];
                for (b = 0; a >= b; b++)
                    c.push(this.getPoint(b / a));
                return c
            }
            ,
            Li.getSpacedPoints = function(a) {
                a || (a = 5);
                var b, c = [];
                for (b = 0; a >= b; b++)
                    c.push(this.getPointAt(b / a));
                return c
            }
            ,
            Li.getLength = function() {
                var a = this.getLengths();
                return a[a.length - 1]
            }
            ,
            Li.getLengths = function(a) {
                if (a || (a = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200),
                    this.cacheArcLengths && this.cacheArcLengths.length == a + 1 && !this.needsUpdate)
                    return this.cacheArcLengths;
                this.needsUpdate = !1;
                var b, c, d = [], e = this.getPoint(0), f = 0;
                for (d.push(0),
                         c = 1; a >= c; c++)
                    b = this.getPoint(c / a),
                        f += b.distanceTo(e),
                        d.push(f),
                        e = b;
                return this.cacheArcLengths = d,
                    d
            }
            ,
            Li.getUtoTmapping = function(a, b) {
                var c, d = this.getLengths(), e = 0, f = d.length;
                c = b ? b : a * d[f - 1];
                for (var g, h = 0, i = f - 1; i >= h; )
                    if (e = s(h + (i - h) / 2),
                            g = d[e] - c,
                        0 > g)
                        h = e + 1;
                    else {
                        if (!(g > 0)) {
                            i = e;
                            break
                        }
                        i = e - 1
                    }
                if (e = i,
                    d[e] == c) {
                    var j = e / (f - 1);
                    return j
                }
                var k = d[e]
                    , l = d[e + 1]
                    , m = l - k
                    , n = (c - k) / m
                    , j = (e + n) / (f - 1);
                return j
            }
            ,
            Li.getTangent = function(a) {
                var b = 1e-4
                    , c = a - b
                    , d = a + b;
                0 > c && (c = 0),
                d > 1 && (d = 1);
                var e = this.getPoint(c)
                    , f = this.getPoint(d)
                    , g = f.clone().sub(e);
                return g.normalize()
            }
            ,
            Li.getTangentAt = function(a) {
                var b = this.getUtoTmapping(a);
                return this.getTangent(b)
            }
            ,
            Ki.create = function(a, b) {
                return a.prototype = Pd(Ki.prototype),
                    a.prototype.getPoint = b,
                    a
            }
        ;
        var Mi = function() {
            this.curves = [],
                this.autoClose = !1
        }
            , Ni = Mi.prototype = Pd(Li);
        Ni.add = function(a) {
            this.curves.push(a)
        }
            ,
            Ni.closePath = function() {
                var a = this.curves[0].getPoint(0)
                    , b = this.curves[this.curves.length - 1].getPoint(1);
                a.equals(b) || this.curves.push(new bj(b,a))
            }
            ,
            Ni.getPoint = function(a) {
                for (var b, c, d = a * this.getLength(), e = this.getCurveLengths(), f = 0; f < e.length; ) {
                    if (e[f] >= d) {
                        b = e[f] - d,
                            c = this.curves[f];
                        var g = 1 - b / c.getLength();
                        return c.getPointAt(g)
                    }
                    f++
                }
                return null
            }
            ,
            Ni.getLength = function() {
                var a = this.getCurveLengths();
                return a[a.length - 1]
            }
            ,
            Ni.getCurveLengths = function() {
                if (this.cacheLengths && this.cacheLengths.length == this.curves.length)
                    return this.cacheLengths;
                var a, b = [], c = 0, d = this.curves.length;
                for (a = 0; d > a; a++)
                    c += this.curves[a].getLength(),
                        b.push(c);
                return this.cacheLengths = b,
                    b
            }
            ,
            Ni.getTransformedPoints = function(a) {
                return this.getPoints(a)
            }
            ,
            Ni.getBoundingBox = function() {
                var a, b, c, d, e, f, g = this.getPoints();
                a = b = Number.NEGATIVE_INFINITY,
                    d = e = Number.POSITIVE_INFINITY;
                var h, i, j, k, l = g[0]instanceof Gi;
                for (k = l ? new Gi : new Fi,
                         i = 0,
                         j = g.length; j > i; i++)
                    h = g[i],
                    h.x > a && (a = h.x),
                    h.x < d && (d = h.x),
                    h.y > b && (b = h.y),
                    h.y < e && (e = h.y),
                    l && (h.z > c && (c = h.z),
                    h.z < f && (f = h.z)),
                        k.add(h);
                var m = {
                    minX: d,
                    minY: e,
                    maxX: a,
                    maxY: b
                };
                return l && (m.maxZ = c,
                    m.minZ = f),
                    m
            }
        ;
        var Oi = function(a) {
            Mi.call(this),
                this.actions = [],
            a && this.fromPoints(a)
        }
            , Pi = Oi.prototype = Pd(Mi.prototype)
            , Qi = "moveTo"
            , Ri = "lineTo"
            , Si = "quadraticCurveTo"
            , Ti = "bezierCurveTo"
            , Ui = "arc"
            , Vi = "ellipse";
        Pi.fromPoints = function(a) {
            this.moveTo(a[0].x, a[0].y);
            for (var b = 1, c = a.length; c > b; b++)
                this.lineTo(a[b].x, a[b].y)
        }
            ,
            Pi.moveTo = function() {
                var a = Array.prototype.slice.call(arguments);
                this.actions.push({
                    action: Qi,
                    args: a
                })
            }
            ,
            Pi.lineTo = function(a, b) {
                var c = Array.prototype.slice.call(arguments)
                    , d = this.actions[this.actions.length - 1].args
                    , e = d[d.length - 2]
                    , f = d[d.length - 1]
                    , g = new bj(new Fi(e,f),new Fi(a,b));
                this.curves.push(g),
                    this.actions.push({
                        action: Ri,
                        args: c
                    })
            }
            ,
            Pi.quadraticCurveTo = function(a, b, c, d) {
                var e = Array.prototype.slice.call(arguments)
                    , f = this.actions[this.actions.length - 1].args
                    , g = f[f.length - 2]
                    , h = f[f.length - 1]
                    , i = new dj(new Fi(g,h),new Fi(a,b),new Fi(c,d));
                this.curves.push(i),
                    this.actions.push({
                        action: Si,
                        args: e
                    })
            }
            ,
            Pi.bezierCurveTo = function(a, b, c, d, e, f) {
                var g = Array.prototype.slice.call(arguments)
                    , h = this.actions[this.actions.length - 1].args
                    , i = h[h.length - 2]
                    , j = h[h.length - 1]
                    , k = new ej(new Fi(i,j),new Fi(a,b),new Fi(c,d),new Fi(e,f));
                this.curves.push(k),
                    this.actions.push({
                        action: Ti,
                        args: g
                    })
            }
            ,
            Pi.arc = function(a, b, c, d, e, f) {
                var g = this.actions[this.actions.length - 1].args
                    , h = g[g.length - 2]
                    , i = g[g.length - 1];
                this.absarc(a + h, b + i, c, d, e, f)
            }
            ,
            Pi.absarc = function(a, b, c, d, e, f) {
                this.absellipse(a, b, c, c, d, e, f)
            }
            ,
            Pi.ellipse = function(a, b, c, d, e, f, g) {
                var h = this.actions[this.actions.length - 1].args
                    , i = h[h.length - 2]
                    , j = h[h.length - 1];
                this.absellipse(a + i, b + j, c, d, e, f, g)
            }
            ,
            Pi.absellipse = function(a, b, c, d, e, f, g) {
                var h = Array.prototype.slice.call(arguments)
                    , i = new aj(a,b,c,d,e,f,g);
                this.curves.push(i);
                var j = i.getPoint(1);
                h.push(j.x),
                    h.push(j.y),
                    this.actions.push({
                        action: Vi,
                        args: h
                    })
            }
            ,
            Pi.getSpacedPoints = function(a) {
                a || (a = 40);
                for (var b = [], c = 0; a > c; c++)
                    b.push(this.getPoint(c / a));
                return b
            }
            ,
            Pi.getPoints = function(a, b) {
                a = a || 12;
                var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = [];
                for (c = 0,
                         d = this.actions.length; d > c; c++)
                    switch (e = this.actions[c],
                        f = e.action,
                        g = e.args,
                        f) {
                        case Qi:
                            u.push(new Fi(g[0],g[1]));
                            break;
                        case Ri:
                            u.push(new Fi(g[0],g[1]));
                            break;
                        case Si:
                            for (h = g[2],
                                     i = g[3],
                                     l = g[0],
                                     m = g[1],
                                     u.length > 0 ? (p = u[u.length - 1],
                                         n = p.x,
                                         o = p.y) : (p = this.actions[c - 1].args,
                                         n = p[p.length - 2],
                                         o = p[p.length - 1]),
                                     q = 1; a >= q; q++)
                                r = q / a,
                                    s = Yi.b2(r, n, l, h),
                                    t = Yi.b2(r, o, m, i),
                                    u.push(new Fi(s,t));
                            break;
                        case Ti:
                            for (h = g[4],
                                     i = g[5],
                                     l = g[0],
                                     m = g[1],
                                     j = g[2],
                                     k = g[3],
                                     u.length > 0 ? (p = u[u.length - 1],
                                         n = p.x,
                                         o = p.y) : (p = this.actions[c - 1].args,
                                         n = p[p.length - 2],
                                         o = p[p.length - 1]),
                                     q = 1; a >= q; q++)
                                r = q / a,
                                    s = Yi.b3(r, n, l, j, h),
                                    t = Yi.b3(r, o, m, k, i),
                                    u.push(new Fi(s,t));
                            break;
                        case Ui:
                            var v, w = g[0], z = g[1], B = g[2], C = g[3], D = g[4], E = !!g[5], F = D - C, G = 2 * a;
                            for (q = 1; G >= q; q++)
                                r = q / G,
                                E || (r = 1 - r),
                                    v = C + r * F,
                                    s = w + B * y(v),
                                    t = z + B * A(v),
                                    u.push(new Fi(s,t));
                            break;
                        case Vi:
                            var v, w = g[0], z = g[1], H = g[2], I = g[3], C = g[4], D = g[5], E = !!g[6], F = D - C, G = 2 * a;
                            for (q = 1; G >= q; q++)
                                r = q / G,
                                E || (r = 1 - r),
                                    v = C + r * F,
                                    s = w + H * y(v),
                                    t = z + I * A(v),
                                    u.push(new Fi(s,t))
                    }
                var J = u[u.length - 1]
                    , K = 1e-10;
                return x(J.x - u[0].x) < K && x(J.y - u[0].y) < K && u.splice(u.length - 1, 1),
                b && u.push(u[0]),
                    u
            }
            ,
            Pi.toShapes = function(a, b) {
                function d(a) {
                    var b, c, d, e, f, g = [], h = new Oi;
                    for (b = 0,
                             c = a.length; c > b; b++)
                        d = a[b],
                            f = d.args,
                            e = d.action,
                        e == Qi && 0 != h.actions.length && (g.push(h),
                            h = new Oi),
                            h[e].apply(h, f);
                    return 0 != h.actions.length && g.push(h),
                        g
                }
                function e(a) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) {
                        var e = a[c]
                            , f = new Wi;
                        f.actions = e.actions,
                            f.curves = e.curves,
                            b.push(f)
                    }
                    return b
                }
                function f(a, b) {
                    for (var c = 1e-10, d = b.length, e = !1, f = d - 1, g = 0; d > g; f = g++) {
                        var h = b[f]
                            , i = b[g]
                            , j = i.x - h.x
                            , k = i.y - h.y;
                        if (x(k) > c) {
                            if (0 > k && (h = b[g],
                                    j = -j,
                                    i = b[f],
                                    k = -k),
                                a.y < h.y || a.y > i.y)
                                continue;if (a.y == h.y) {
                                if (a.x == h.x)
                                    return !0
                            } else {
                                var l = k * (a.x - h.x) - j * (a.y - h.y);
                                if (0 == l)
                                    return !0;
                                if (0 > l)
                                    continue;e = !e
                            }
                        } else {
                            if (a.y != h.y)
                                continue;if (i.x <= a.x && a.x <= h.x || h.x <= a.x && a.x <= i.x)
                                return !0
                        }
                    }
                    return e
                }
                var g = d(this.actions);
                if (0 == g.length)
                    return [];
                if (b === !0)
                    return e(g);
                var h, i, j, k = [];
                if (1 == g.length)
                    return i = g[0],
                        j = new Wi,
                        j.actions = i.actions,
                        j.curves = i.curves,
                        k.push(j),
                        k;
                var l = !Wi.Utils.isClockWise(g[0].getPoints());
                l = a ? !l : l;
                var m, n = [], o = [], p = [], q = 0;
                o[q] = c,
                    p[q] = [];
                var r, s;
                for (r = 0,
                         s = g.length; s > r; r++)
                    i = g[r],
                        m = i.getPoints(),
                        h = Yi.isClockWise(m),
                        h = a ? !h : h,
                        h ? (!l && o[q] && q++,
                            o[q] = {
                                s: new Wi,
                                p: m
                            },
                            o[q].s.actions = i.actions,
                            o[q].s.curves = i.curves,
                        l && q++,
                            p[q] = []) : p[q].push({
                            h: i,
                            p: m[0]
                        });
                if (!o[0])
                    return e(g);
                if (o.length > 1) {
                    for (var t = !1, u = [], v = 0, w = o.length; w > v; v++)
                        n[v] = [];
                    for (var v = 0, w = o.length; w > v; v++) {
                        o[v];
                        for (var y = p[v], z = 0; z < y.length; z++) {
                            for (var A = y[z], B = !0, C = 0; C < o.length; C++)
                                f(A.p, o[C].p) && (v != C && u.push({
                                    froms: v,
                                    tos: C,
                                    hole: z
                                }),
                                    B ? (B = !1,
                                        n[C].push(A)) : t = !0);
                            B && n[v].push(A)
                        }
                    }
                    u.length > 0 && (t || (p = n))
                }
                var D, E, F;
                for (r = 0,
                         s = o.length; s > r; r++)
                    for (j = o[r].s,
                             k.push(j),
                             D = p[r],
                             E = 0,
                             F = D.length; F > E; E++)
                        j.holes.push(D[E].h);
                return k
            }
        ;
        var Wi = function() {
            Oi.apply(this, arguments),
                this.holes = []
        }
            , Xi = Wi.prototype = Pd(Pi);
        Xi.getPointsHoles = function(a) {
            var b, c = this.holes.length, d = [];
            for (b = 0; c > b; b++)
                d[b] = this.holes[b].getTransformedPoints(a);
            return d
        }
            ,
            Xi.extractAllPoints = function(a) {
                return {
                    shape: this.getTransformedPoints(a),
                    holes: this.getPointsHoles(a)
                }
            }
            ,
            Xi.extractPoints = function(a) {
                return this.extractAllPoints(a)
            }
        ;
        var Yi = {
            triangulateShape: function(a, b) {
                function d(a, b, c) {
                    return a.x != b.x ? a.x < b.x ? a.x <= c.x && c.x <= b.x : b.x <= c.x && c.x <= a.x : a.y < b.y ? a.y <= c.y && c.y <= b.y : b.y <= c.y && c.y <= a.y
                }
                function e(a, b, c, e, f) {
                    var g = 1e-10
                        , h = b.x - a.x
                        , i = b.y - a.y
                        , j = e.x - c.x
                        , k = e.y - c.y
                        , l = a.x - c.x
                        , m = a.y - c.y
                        , n = i * j - h * k
                        , o = i * l - h * m;
                    if (x(n) > g) {
                        var p;
                        if (n > 0) {
                            if (0 > o || o > n)
                                return [];
                            if (p = k * l - j * m,
                                0 > p || p > n)
                                return []
                        } else {
                            if (o > 0 || n > o)
                                return [];
                            if (p = k * l - j * m,
                                p > 0 || n > p)
                                return []
                        }
                        if (0 == p)
                            return !f || 0 != o && o != n ? [a] : [];
                        if (p == n)
                            return !f || 0 != o && o != n ? [b] : [];
                        if (0 == o)
                            return [c];
                        if (o == n)
                            return [e];
                        var q = p / n;
                        return [{
                            x: a.x + q * h,
                            y: a.y + q * i
                        }]
                    }
                    if (0 != o || k * l != j * m)
                        return [];
                    var r = 0 == h && 0 == i
                        , s = 0 == j && 0 == k;
                    if (r && s)
                        return a.x != c.x || a.y != c.y ? [] : [a];
                    if (r)
                        return d(c, e, a) ? [a] : [];
                    if (s)
                        return d(a, b, c) ? [c] : [];
                    var t, u, v, w, y, z, A, B;
                    return 0 != h ? (a.x < b.x ? (t = a,
                        v = a.x,
                        u = b,
                        w = b.x) : (t = b,
                        v = b.x,
                        u = a,
                        w = a.x),
                        c.x < e.x ? (y = c,
                            A = c.x,
                            z = e,
                            B = e.x) : (y = e,
                            A = e.x,
                            z = c,
                            B = c.x)) : (a.y < b.y ? (t = a,
                        v = a.y,
                        u = b,
                        w = b.y) : (t = b,
                        v = b.y,
                        u = a,
                        w = a.y),
                        c.y < e.y ? (y = c,
                            A = c.y,
                            z = e,
                            B = e.y) : (y = e,
                            A = e.y,
                            z = c,
                            B = c.y)),
                        A >= v ? A > w ? [] : w == A ? f ? [] : [y] : B >= w ? [y, u] : [y, z] : v > B ? [] : v == B ? f ? [] : [t] : B >= w ? [t, u] : [t, z]
                }
                function f(a, b, c, d) {
                    var e = 1e-10
                        , f = b.x - a.x
                        , g = b.y - a.y
                        , h = c.x - a.x
                        , i = c.y - a.y
                        , j = d.x - a.x
                        , k = d.y - a.y
                        , l = f * i - g * h
                        , m = f * k - g * j;
                    if (x(l) > e) {
                        var n = j * i - k * h;
                        return l > 0 ? m >= 0 && n >= 0 : m >= 0 || n >= 0
                    }
                    return m > 0
                }
                function g(a, b) {
                    function d(a, b) {
                        var c = t.length - 1
                            , d = a - 1;
                        0 > d && (d = c);
                        var e = a + 1;
                        e > c && (e = 0);
                        var g = f(t[a], t[d], t[e], i[b]);
                        if (!g)
                            return !1;
                        var h = i.length - 1
                            , j = b - 1;
                        0 > j && (j = h);
                        var k = b + 1;
                        return k > h && (k = 0),
                            g = f(i[b], i[j], i[k], t[a]),
                            g ? !0 : !1
                    }
                    function g(a, b) {
                        var c, d, f;
                        for (c = 0; c < t.length; c++)
                            if (d = c + 1,
                                    d %= t.length,
                                    f = e(a, b, t[c], t[d], !0),
                                f.length > 0)
                                return !0;
                        return !1
                    }
                    function h(a, c) {
                        var d, f, g, h, i;
                        for (d = 0; d < u.length; d++)
                            for (f = b[u[d]],
                                     g = 0; g < f.length; g++)
                                if (h = g + 1,
                                        h %= f.length,
                                        i = e(a, c, f[g], f[h], !0),
                                    i.length > 0)
                                    return !0;
                        return !1
                    }
                    for (var i, j, k, l, m, n, o, p, q, r, s, t = a.concat(), u = [], v = [], w = 0, x = b.length; x > w; w++)
                        u.push(w);
                    for (var y = 0, z = 2 * u.length; u.length > 0 && (z--,
                        !(0 > z)); )
                        for (k = y; k < t.length; k++) {
                            l = t[k],
                                j = -1;
                            for (var w = 0; w < u.length; w++)
                                if (n = u[w],
                                        o = l.x + ":" + l.y + ":" + n,
                                    v[o] === c) {
                                    i = b[n];
                                    for (var A = 0; A < i.length; A++)
                                        if (m = i[A],
                                            d(k, A) && !g(l, m) && !h(l, m)) {
                                            j = A,
                                                u.splice(w, 1),
                                                p = t.slice(0, k + 1),
                                                q = t.slice(k),
                                                r = i.slice(j),
                                                s = i.slice(0, j + 1),
                                                t = p.concat(r).concat(s).concat(q),
                                                y = k;
                                            break
                                        }
                                    if (j >= 0)
                                        break;
                                    v[o] = !0
                                }
                            if (j >= 0)
                                break
                        }
                    return t
                }
                for (var h, i, j, k, l, m, n = {}, o = a.concat(), p = 0, q = b.length; q > p; p++)
                    Array.prototype.push.apply(o, b[p]);
                for (h = 0,
                         i = o.length; i > h; h++)
                    l = o[h].x + ":" + o[h].y,
                    n[l] !== c,
                        n[l] = h;
                var r = g(a, b)
                    , s = Zi.Triangulate(r, !1);
                for (h = 0,
                         i = s.length; i > h; h++)
                    for (k = s[h],
                             j = 0; 3 > j; j++)
                        l = k[j].x + ":" + k[j].y,
                            m = n[l],
                        m !== c && (k[j] = m);
                return s.concat()
            },
            isClockWise: function(a) {
                return Zi.Triangulate.area(a) < 0
            },
            b2p0: function(a, b) {
                var c = 1 - a;
                return c * c * b
            },
            b2p1: function(a, b) {
                return 2 * (1 - a) * a * b
            },
            b2p2: function(a, b) {
                return a * a * b
            },
            b2: function(a, b, c, d) {
                return this.b2p0(a, b) + this.b2p1(a, c) + this.b2p2(a, d)
            },
            b3p0: function(a, b) {
                var c = 1 - a;
                return c * c * c * b
            },
            b3p1: function(a, b) {
                var c = 1 - a;
                return 3 * c * c * a * b
            },
            b3p2: function(a, b) {
                var c = 1 - a;
                return 3 * c * a * a * b
            },
            b3p3: function(a, b) {
                return a * a * a * b
            },
            b3: function(a, b, c, d, e) {
                return this.b3p0(a, b) + this.b3p1(a, c) + this.b3p2(a, d) + this.b3p3(a, e)
            }
        }
            , Zi = {
            faces: {},
            face: "helvetiker",
            weight: "normal",
            style: "normal",
            size: 150,
            divisions: 10,
            getFace: function() {
                try {
                    return this.faces[this.face][this.weight][this.style]
                } catch (a) {
                    throw "The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing."
                }
            },
            loadFace: function(a) {
                var b = a.familyName.toLowerCase()
                    , c = this;
                return c.faces[b] = c.faces[b] || {},
                    c.faces[b][a.cssFontWeight] = c.faces[b][a.cssFontWeight] || {},
                    c.faces[b][a.cssFontWeight][a.cssFontStyle] = a,
                    c.faces[b][a.cssFontWeight][a.cssFontStyle] = a,
                    a
            },
            drawText: function(a) {
                var b, c = this.getFace(), d = this.size / c.resolution, e = 0, f = String(a).split(""), g = f.length, h = [];
                for (b = 0; g > b; b++) {
                    var i = new Oi
                        , j = this.extractGlyphPoints(f[b], c, d, e, i);
                    e += j.offset,
                        h.push(j.path)
                }
                var k = e / 2;
                return {
                    paths: h,
                    offset: k
                }
            },
            extractGlyphPoints: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = [], z = b.glyphs[a] || b.glyphs["?"];
                if (z) {
                    if (z.o)
                        for (i = z._cachedOutline || (z._cachedOutline = z.o.split(" ")),
                                 k = i.length,
                                 l = c,
                                 m = c,
                                 f = 0; k > f; )
                            switch (j = i[f++]) {
                                case "m":
                                    n = i[f++] * l + d,
                                        o = i[f++] * m,
                                        e.moveTo(n, o);
                                    break;
                                case "l":
                                    n = i[f++] * l + d,
                                        o = i[f++] * m,
                                        e.lineTo(n, o);
                                    break;
                                case "q":
                                    if (p = i[f++] * l + d,
                                            q = i[f++] * m,
                                            t = i[f++] * l + d,
                                            u = i[f++] * m,
                                            e.quadraticCurveTo(t, u, p, q),
                                            x = y[y.length - 1])
                                        for (r = x.x,
                                                 s = x.y,
                                                 g = 1,
                                                 h = this.divisions; h >= g; g++) {
                                            var A = g / h;
                                            Yi.b2(A, r, t, p),
                                                Yi.b2(A, s, u, q)
                                        }
                                    break;
                                case "b":
                                    if (p = i[f++] * l + d,
                                            q = i[f++] * m,
                                            t = i[f++] * l + d,
                                            u = i[f++] * m,
                                            v = i[f++] * l + d,
                                            w = i[f++] * m,
                                            e.bezierCurveTo(t, u, v, w, p, q),
                                            x = y[y.length - 1])
                                        for (r = x.x,
                                                 s = x.y,
                                                 g = 1,
                                                 h = this.divisions; h >= g; g++) {
                                            var A = g / h;
                                            Yi.b3(A, r, t, v, p),
                                                Yi.b3(A, s, u, w, q)
                                        }
                            }
                    return {
                        offset: z.ha * c,
                        path: e
                    }
                }
            }
        };
        Zi.generateShapes = function(a, b) {
            b = b || {};
            var d = b.size !== c ? b.size : 100
                , e = b.curveSegments !== c ? b.curveSegments : 4
                , f = b.font !== c ? b.font : "helvetiker"
                , g = b.weight !== c ? b.weight : "normal"
                , h = b.style !== c ? b.style : "normal";
            Zi.size = d,
                Zi.divisions = e,
                Zi.face = f,
                Zi.weight = g,
                Zi.style = h;
            for (var i = Zi.drawText(a), j = i.paths, k = [], l = 0, m = j.length; m > l; l++)
                Array.prototype.push.apply(k, j[l].toShapes());
            return k
        }
            ,
            function(a) {
                var b = 1e-10
                    , c = function(a, b) {
                        var c = a.length;
                        if (3 > c)
                            return null ;
                        var f, g, h, i = [], j = [], k = [];
                        if (d(a) > 0)
                            for (g = 0; c > g; g++)
                                j[g] = g;
                        else
                            for (g = 0; c > g; g++)
                                j[g] = c - 1 - g;
                        var l = c
                            , m = 2 * l;
                        for (g = l - 1; l > 2; ) {
                            if (m-- <= 0)
                                return b ? k : i;
                            if (f = g,
                                f >= l && (f = 0),
                                    g = f + 1,
                                g >= l && (g = 0),
                                    h = g + 1,
                                h >= l && (h = 0),
                                    e(a, f, g, h, l, j)) {
                                var n, o, p, q, r;
                                for (n = j[f],
                                         o = j[g],
                                         p = j[h],
                                         i.push([a[n], a[o], a[p]]),
                                         k.push([j[f], j[g], j[h]]),
                                         q = g,
                                         r = g + 1; l > r; q++,
                                         r++)
                                    j[q] = j[r];
                                l--,
                                    m = 2 * l
                            }
                        }
                        return b ? k : i
                    }
                    , d = function(a) {
                        for (var b = a.length, c = 0, d = b - 1, e = 0; b > e; d = e++)
                            c += a[d].x * a[e].y - a[e].x * a[d].y;
                        return .5 * c
                    }
                    , e = function(a, c, d, e, f, g) {
                        var h, i, j, k, l, m, n, o, p;
                        if (i = a[g[c]].x,
                                j = a[g[c]].y,
                                k = a[g[d]].x,
                                l = a[g[d]].y,
                                m = a[g[e]].x,
                                n = a[g[e]].y,
                            b > (k - i) * (n - j) - (l - j) * (m - i))
                            return !1;
                        var q, r, s, t, u, v, w, x, y, z, A, B, C, D, E;
                        for (q = m - k,
                                 r = n - l,
                                 s = i - m,
                                 t = j - n,
                                 u = k - i,
                                 v = l - j,
                                 h = 0; f > h; h++)
                            if (o = a[g[h]].x,
                                    p = a[g[h]].y,
                                !(o === i && p === j || o === k && p === l || o === m && p === n) && (w = o - i,
                                    x = p - j,
                                    y = o - k,
                                    z = p - l,
                                    A = o - m,
                                    B = p - n,
                                    E = q * z - r * y,
                                    C = u * x - v * w,
                                    D = s * B - t * A,
                                E >= -b && D >= -b && C >= -b))
                                return !1;
                        return !0
                    }
                ;
                return a.Triangulate = c,
                    a.Triangulate.area = d,
                    a
            }(Zi),
            a._typeface_js = {
                faces: Zi.faces,
                loadFace: Zi.loadFace
            };
        var $i = function() {
                this.vertices = [],
                    this.faces = [],
                    this.faceVertexUvs = [[]]
            }
            , _i = $i.prototype = {
                constructor: $i,
                computeFaceNormals: function() {
                    for (var a = new Gi, b = new Gi, c = 0, d = this.faces.length; d > c; c++) {
                        var e = this.faces[c]
                            , f = this.vertices[e.a]
                            , g = this.vertices[e.b]
                            , h = this.vertices[e.c];
                        a.subVectors(h, g),
                            b.subVectors(f, g),
                            a.cross(b),
                            a.normalize(),
                            e.normal.copy(a)
                    }
                },
                computeVertexNormals: function(a) {
                    var b, c, d, e, f, g;
                    for (g = new Array(this.vertices.length),
                             b = 0,
                             c = this.vertices.length; c > b; b++)
                        g[b] = new Gi;
                    if (a) {
                        var h, i, j, k = new Gi, l = new Gi;
                        for (d = 0,
                                 e = this.faces.length; e > d; d++)
                            f = this.faces[d],
                                h = this.vertices[f.a],
                                i = this.vertices[f.b],
                                j = this.vertices[f.c],
                                k.subVectors(j, i),
                                l.subVectors(h, i),
                                k.cross(l),
                                g[f.a].add(k),
                                g[f.b].add(k),
                                g[f.c].add(k)
                    } else
                        for (d = 0,
                                 e = this.faces.length; e > d; d++)
                            f = this.faces[d],
                                g[f.a].add(f.normal),
                                g[f.b].add(f.normal),
                                g[f.c].add(f.normal);
                    for (b = 0,
                             c = this.vertices.length; c > b; b++)
                        g[b].normalize();
                    for (d = 0,
                             e = this.faces.length; e > d; d++)
                        f = this.faces[d],
                            f.vertexNormals[0] = g[f.a].clone(),
                            f.vertexNormals[1] = g[f.b].clone(),
                            f.vertexNormals[2] = g[f.c].clone()
                },
                mergeVertices: function() {
                    var a, b, d, e, f, g, h, i, j = {}, k = [], l = [], m = 4, n = B(10, m);
                    for (d = 0,
                             e = this.vertices.length; e > d; d++)
                        a = this.vertices[d],
                            b = r(a.x * n) + "_" + r(a.y * n) + "_" + r(a.z * n),
                            j[b] === c ? (j[b] = d,
                                k.push(this.vertices[d]),
                                l[d] = k.length - 1) : l[d] = l[j[b]];
                    var o = [];
                    for (d = 0,
                             e = this.faces.length; e > d; d++) {
                        f = this.faces[d],
                            f.a = l[f.a],
                            f.b = l[f.b],
                            f.c = l[f.c],
                            g = [f.a, f.b, f.c];
                        for (var p = 0; 3 > p; p++)
                            if (g[p] == g[(p + 1) % 3]) {
                                o.push(d);
                                break
                            }
                    }
                    for (d = o.length - 1; d >= 0; d--) {
                        var q = o[d];
                        for (this.faces.splice(q, 1),
                                 h = 0,
                                 i = this.faceVertexUvs.length; i > h; h++)
                            this.faceVertexUvs[h].splice(q, 1)
                    }
                    var s = this.vertices.length - k.length;
                    return this.vertices = k,
                        s
                }
            }
            , aj = function(a, b, c, d, e, f, g) {
                this.aX = a,
                    this.aY = b,
                    this.xRadius = c,
                    this.yRadius = d,
                    this.aStartAngle = e,
                    this.aEndAngle = f,
                    this.aClockwise = g
            }
        ;
        aj.prototype = Pd(Li),
            aj.prototype.getPoint = function(a) {
                var b, c = this.aEndAngle - this.aStartAngle;
                0 > c && (c += E),
                c > E && (c -= E),
                    b = this.aClockwise === !0 ? this.aEndAngle + (1 - a) * (E - c) : this.aStartAngle + a * c;
                var d = this.aX + this.xRadius * y(b)
                    , e = this.aY + this.yRadius * A(b);
                return new Fi(d,e)
            }
        ;
        var bj = function(a, b) {
            this.v1 = a,
                this.v2 = b
        }
            , cj = bj.prototype = Pd(Li);
        cj.getPoint = function(a) {
            var b = this.v2.clone().sub(this.v1);
            return b.multiplyScalar(a).add(this.v1),
                b
        }
            ,
            cj.getPointAt = function(a) {
                return this.getPoint(a)
            }
            ,
            cj.getTangent = function() {
                var a = this.v2.clone().sub(this.v1);
                return a.normalize()
            }
        ;
        var dj = function(a, b, c) {
                this.v0 = a,
                    this.v1 = b,
                    this.v2 = c
            }
        ;
        dj.prototype = Pd(Li),
            dj.prototype.getPoint = function(a) {
                var b, c;
                return b = Yi.b2(a, this.v0.x, this.v1.x, this.v2.x),
                    c = Yi.b2(a, this.v0.y, this.v1.y, this.v2.y),
                    new Fi(b,c)
            }
        ;
        var ej = function(a, b, c, d) {
                this.v0 = a,
                    this.v1 = b,
                    this.v2 = c,
                    this.v3 = d
            }
        ;
        ej.prototype = Pd(Li),
            ej.prototype.getPoint = function(a) {
                var b, c;
                return b = Yi.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x),
                    c = Yi.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y),
                    new Fi(b,c)
            }
            ,
            Ki.create(function(a, b) {
                this.v1 = a,
                    this.v2 = b
            }, function(a) {
                var b = new Gi;
                return b.subVectors(this.v2, this.v1),
                    b.multiplyScalar(a),
                    b.add(this.v1),
                    b
            });
        var fj = Ki.create(function(a, b, c) {
                this.v0 = a,
                    this.v1 = b,
                    this.v2 = c
            }, function(a) {
                var b, c, d;
                return b = Yi.b2(a, this.v0.x, this.v1.x, this.v2.x),
                    c = Yi.b2(a, this.v0.y, this.v1.y, this.v2.y),
                    d = Yi.b2(a, this.v0.z, this.v1.z, this.v2.z),
                    new Gi(b,c,d)
            })
            , gj = Ki.create(function(a, b, c, d) {
                this.v0 = a,
                    this.v1 = b,
                    this.v2 = c,
                    this.v3 = d
            }, function(a) {
                var b, c, d;
                return b = Yi.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x),
                    c = Yi.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y),
                    d = Yi.b3(a, this.v0.z, this.v1.z, this.v2.z, this.v3.z),
                    new Gi(b,c,d)
            })
            , hj = function(a, b, d, e, f, g, h, i) {
                $i.call(this),
                    e = e !== c ? e : .5,
                    f = f !== c ? f : .5,
                    i = i !== c ? i : 1,
                    a = a || 8,
                    g = g || 0,
                    h = h || E;
                var j, k, l = 1, m = i / 2, n = [], o = [], p = this.vertices, q = this.faces, r = this.faceVertexUvs;
                for (k = 0; l >= k; k++) {
                    var s = []
                        , t = []
                        , v = k / l
                        , w = v * (f - e) + e;
                    for (j = 0; a >= j; j++) {
                        var x = j / a
                            , z = new Gi
                            , B = -(x * h + g);
                        z.z = w * A(B),
                            z.y = -v * i + m,
                            z.x = w * y(B),
                            p.push(z),
                            s.push(p.length - 1),
                            t.push(new Fi(x,v))
                    }
                    n.push(s),
                        o.push(t)
                }
                var C, D, F = (f - e) / i;
                for (j = 0; a > j; j++)
                    for (0 !== e ? (C = p[n[0][j]].clone(),
                        D = p[n[0][j + 1]].clone()) : (C = p[n[1][j]].clone(),
                        D = p[n[1][j + 1]].clone()),
                             C.setY(u(C.x * C.x + C.z * C.z) * F).normalize(),
                             D.setY(u(D.x * D.x + D.z * D.z) * F).normalize(),
                             k = 0; l > k; k++) {
                        var G = n[k][j]
                            , H = n[k + 1][j]
                            , I = n[k + 1][j + 1]
                            , J = n[k][j + 1]
                            , K = C.clone()
                            , L = C.clone()
                            , M = D.clone()
                            , N = D.clone()
                            , O = o[k][j].clone()
                            , P = o[k + 1][j].clone()
                            , Q = o[k + 1][j + 1].clone()
                            , R = o[k][j + 1].clone();
                        q.push(new Ji(G,H,J,[K, L, N])),
                            r[0].push([O, P, R]),
                            q.push(new Ji(H,I,J,[L.clone(), M, N.clone()])),
                            r[0].push([P.clone(), Q, R.clone()])
                    }
                if (b && e > 0)
                    for (this.vertices.push(new Gi(0,m,0)),
                             j = 0; a > j; j++) {
                        var G = n[0][j]
                            , H = n[0][j + 1]
                            , I = this.vertices.length - 1
                            , K = new Gi(0,1,0)
                            , L = new Gi(0,1,0)
                            , M = new Gi(0,1,0)
                            , O = o[0][j].clone()
                            , P = o[0][j + 1].clone()
                            , Q = new Fi(P.x,0);
                        q.push(new Ji(G,H,I,[K, L, M],null ,1));
                        var S = j / a * E
                            , T = y(S)
                            , U = A(S)
                            , V = (j + 1) / a * E
                            , W = y(V)
                            , X = A(V);
                        r[0].push([new Fi(.5 + .5 * T,.5 + .5 * U), new Fi(.5 + .5 * W,.5 + .5 * X), new Fi(.5,.5)])
                    }
                if (d && f > 0)
                    for (this.vertices.push(new Gi(0,-m,0)),
                             j = 0; a > j; j++) {
                        var G = n[k][j + 1]
                            , H = n[k][j]
                            , I = p.length - 1
                            , K = new Gi(0,-1,0)
                            , L = new Gi(0,-1,0)
                            , M = new Gi(0,-1,0)
                            , O = o[k][j + 1].clone()
                            , P = o[k][j].clone();
                        q.push(new Ji(G,H,I,[K, L, M],null ,2));
                        var S = j / a * E
                            , T = y(S)
                            , U = A(S)
                            , V = (j + 1) / a * E
                            , W = y(V)
                            , X = A(V);
                        r[0].push([new Fi(.5 + .5 * W,.5 - .5 * X), new Fi(.5 + .5 * T,.5 - .5 * U), new Fi(.5,.5)])
                    }
            }
        ;
        hj.prototype = Pd(_i);
        var ij = function(a, b, d, e, f, g, h) {
                $i.call(this),
                    h = h || .5,
                    a = a || 16,
                    b = b || 16,
                    d = (d !== c ? d : 0) - D,
                    e = e !== c ? e : E,
                    f = f !== c ? f : 0,
                    g = g !== c ? g : D;
                var i, j, k = [], l = [], m = this.vertices, n = this.faces, o = this.faceVertexUvs;
                for (j = 0; b >= j; j++) {
                    var p = []
                        , q = [];
                    for (i = 0; a >= i; i++) {
                        var r = i / a
                            , s = j / b
                            , t = new Gi;
                        t.x = -h * y(d + r * e) * A(f + s * g),
                            t.y = h * y(f + s * g),
                            t.z = h * A(d + r * e) * A(f + s * g),
                            m.push(t),
                            p.push(m.length - 1),
                            q.push(new Fi(r,s))
                    }
                    k.push(p),
                        l.push(q)
                }
                for (j = 0; b > j; j++)
                    for (i = 0; a > i; i++) {
                        var u = k[j][i + 1]
                            , v = k[j][i]
                            , w = k[j + 1][i]
                            , z = k[j + 1][i + 1]
                            , B = m[u].clone().normalize()
                            , C = m[v].clone().normalize()
                            , F = m[w].clone().normalize()
                            , G = m[z].clone().normalize()
                            , H = l[j][i + 1].clone()
                            , I = l[j][i].clone()
                            , J = l[j + 1][i].clone()
                            , K = l[j + 1][i + 1].clone();
                        x(m[u].y) === h ? (H.x = (H.x + I.x) / 2,
                            n.push(new Ji(u,w,z,[B, F, G])),
                            o[0].push([H, J, K])) : x(m[w].y) === h ? (J.x = (J.x + K.x) / 2,
                            n.push(new Ji(u,v,w,[B, C, F])),
                            o[0].push([H, I, J])) : (n.push(new Ji(u,v,z,[B, C, G])),
                            o[0].push([H, I, K]),
                            n.push(new Ji(v,w,z,[C.clone(), F, G.clone()])),
                            o[0].push([I.clone(), J, K.clone()]))
                    }
            }
        ;
        ij.prototype = Pd(_i);
        var jj = function(a, b, c, d, e, f) {
                $i.call(this),
                    a = a || .33,
                    b = b || .17,
                    d = d || 8,
                    c = c || 6,
                    e = e || 0,
                    f = f || E;
                for (var g = new Gi, h = [], i = [], j = 0; d >= j; j++)
                    for (var k = j / d * E + D, l = 0; c >= l; l++) {
                        var m = l / c * f + e;
                        g.x = a * y(m),
                            g.z = -a * A(m);
                        var n = new Gi
                            , o = a + b * y(k);
                        n.x = o * y(m),
                            n.z = -o * A(m),
                            n.y = b * A(k),
                            this.vertices.push(n),
                            h.push(new Fi(l / c,1 - j / d)),
                            i.push(n.clone().sub(g).normalize())
                    }
                for (var j = 1; d >= j; j++)
                    for (var l = 1; c >= l; l++) {
                        var p = (c + 1) * j + l - 1
                            , q = (c + 1) * (j - 1) + l - 1
                            , r = (c + 1) * (j - 1) + l
                            , s = (c + 1) * j + l
                            , t = new Ji(p,q,s,[i[p].clone(), i[q].clone(), i[s].clone()]);
                        this.faces.push(t),
                            this.faceVertexUvs[0].push([h[p].clone(), h[q].clone(), h[s].clone()]),
                            t = new Ji(q,r,s,[i[q].clone(), i[r].clone(), i[s].clone()]),
                            this.faces.push(t),
                            this.faceVertexUvs[0].push([h[q].clone(), h[r].clone(), h[s].clone()])
                    }
                this.computeFaceNormals()
            }
        ;
        jj.prototype = Pd(_i);
        var kj = function(a, b, c) {
            return a ? ($i.call(this),
                a = a instanceof Array ? a : [a],
                this.addShapeList(a, b),
                Bi(this, c),
                void this.computeFaceNormals()) : void (a = [])
        }
            , lj = kj.prototype = Pd($i.prototype);
        lj.addShapeList = function(a, b) {
            for (var c = a.length, d = 0; c > d; d++) {
                var e = a[d];
                this.addShape(e, b)
            }
        }
            ,
            lj.addShape = function(a, b) {
                function d() {
                    if (b.bottom)
                        for (var a = 0; I > a; a++)
                            G = D[a],
                                h(G[2], G[1], G[0], !0);
                    if (b.top)
                        for (a = 0; I > a; a++)
                            G = D[a],
                                h(G[0] + H * q, G[1] + H * q, G[2] + H * q, !1)
                }
                function e() {
                    var a = 0;
                    for (f(E, a),
                             a += E.length,
                             v = 0,
                             w = B.length; w > v; v++)
                        u = B[v],
                            f(u, a),
                            a += u.length
                }
                function f(a, b) {
                    for (var c, d, e = a.length; --e >= 0; ) {
                        c = e,
                            d = e - 1,
                        0 > d && (d = a.length - 1);
                        var f = 0
                            , g = q;
                        for (f = 0; g > f; f++) {
                            var h = H * f
                                , j = H * (f + 1)
                                , k = b + c + h
                                , l = b + d + h
                                , m = b + d + j
                                , n = b + c + j;
                            i(k, l, m, n, a, f, g, c, d)
                        }
                    }
                }
                function g(a, b, c) {
                    x.vertices.push(new Gi(a,b,c))
                }
                function h(c, d, e, f) {
                    c += y,
                        d += y,
                        e += y,
                        x.faces.push(new Ji(c,d,e,null ,null ,f ? 2 : 1));
                    var g = f ? t.generateBottomUV(x, a, b, c, d, e) : t.generateTopUV(x, a, b, c, d, e);
                    x.faceVertexUvs[0].push(g)
                }
                function i(c, d, e, f, g, h, i, j, k) {
                    c += y,
                        d += y,
                        e += y,
                        f += y,
                        x.faces.push(new Ji(c,d,f)),
                        x.faces.push(new Ji(d,e,f));
                    var l = t.generateSideWallUV(x, a, g, b, c, d, e, f, h, i, j, k);
                    x.faceVertexUvs[0].push([l[0], l[1], l[3]]),
                        x.faceVertexUvs[0].push([l[1], l[2], l[3]])
                }
                var j, k, l, m, n, o = b.amount, p = b.curveSegments || eh, q = b.steps || 1, r = b.extrudePath, s = !1, t = new Ii(b.repeatUVLength);
                r && (j = r.getSpacedPoints(q),
                    s = !0,
                    k = b.frames !== c ? b.frames : new mj.FrenetFrames(r,q,!1),
                    l = new Gi,
                    m = new Gi,
                    n = new Gi);
                var u, v, w, x = this, y = this.vertices.length, z = a.extractPoints(p), A = z.shape, B = z.holes, C = !Yi.isClockWise(A);
                if (C) {
                    for (A = A.reverse(),
                             v = 0,
                             w = B.length; w > v; v++)
                        u = B[v],
                        Yi.isClockWise(u) && (B[v] = u.reverse());
                    C = !1
                }
                var D = Yi.triangulateShape(A, B)
                    , E = A;
                for (v = 0,
                         w = B.length; w > v; v++)
                    u = B[v],
                        A = A.concat(u);
                for (var F, G, H = A.length, I = D.length, J = 0; H > J; J++)
                    F = A[J],
                        s ? (m.copy(k.normals[0]).multiplyScalar(F.x),
                            l.copy(k.binormals[0]).multiplyScalar(F.y),
                            n.copy(j[0]).add(m).add(l),
                            g(n.x, n.y, n.z)) : g(F.x, F.y, 0);
                var K;
                for (K = 1; q >= K; K++)
                    for (J = 0; H > J; J++)
                        F = A[J],
                            s ? (m.copy(k.normals[K]).multiplyScalar(F.x),
                                l.copy(k.binormals[K]).multiplyScalar(F.y),
                                n.copy(j[K]).add(m).add(l),
                                g(n.x, n.y, n.z)) : g(F.x, F.y, o / q * K);
                d(),
                    e()
            }
        ;
        var mj = function(a, b, c, d, e) {
                function f(a, b, c) {
                    return D.vertices.push(new Gi(a,b,c)) - 1
                }
                $i.call(this),
                    b = b || 64,
                    c = c || 1,
                    d = d || 8,
                    e = e || !1;
                var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, z, B, C = [], D = this, F = b + 1, G = new Gi, H = new mj.FrenetFrames(a,b,e), I = H.tangents, J = H.normals, K = H.binormals;
                for (this.tangents = I,
                         this.normals = J,
                         this.binormals = K,
                         o = 0; F > o; o++)
                    for (C[o] = [],
                             j = o / (F - 1),
                             n = a.getPointAt(j),
                             g = I[o],
                             h = J[o],
                             i = K[o],
                             p = 0; d > p; p++)
                        k = p / d * E,
                            l = -c * y(k),
                            m = c * A(k),
                            G.copy(n),
                            G.x += l * h.x + m * i.x,
                            G.y += l * h.y + m * i.y,
                            G.z += l * h.z + m * i.z,
                            C[o][p] = f(G.x, G.y, G.z);
                for (o = 0; b > o; o++)
                    for (p = 0; d > p; p++)
                        q = e ? (o + 1) % b : o + 1,
                            r = (p + 1) % d,
                            s = C[o][p],
                            t = C[q][p],
                            u = C[q][r],
                            v = C[o][r],
                            w = new Fi(o / b,p / d),
                            x = new Fi((o + 1) / b,p / d),
                            z = new Fi((o + 1) / b,(p + 1) / d),
                            B = new Fi(o / b,(p + 1) / d),
                            this.faces.push(new Ji(s,t,v)),
                            this.faceVertexUvs[0].push([w, x, B]),
                            this.faces.push(new Ji(t,u,v)),
                            this.faceVertexUvs[0].push([x.clone(), z, B.clone()]);
                this.computeFaceNormals(),
                    this.computeVertexNormals()
            }
        ;
        mj.prototype = Pd(_i),
            mj.FrenetFrames = function(a, b, c) {
                function d() {
                    n[0] = new Gi,
                        o[0] = new Gi,
                        f = Number.MAX_VALUE,
                        g = x(m[0].x),
                        h = x(m[0].y),
                        i = x(m[0].z),
                    f >= g && (f = g,
                        l.set(1, 0, 0)),
                    f >= h && (f = h,
                        l.set(0, 1, 0)),
                    f >= i && l.set(0, 0, 1),
                        p.crossVectors(m[0], l).normalize(),
                        n[0].crossVectors(m[0], p),
                        o[0].crossVectors(m[0], n[0])
                }
                var e, f, g, h, i, j, k, l = new Gi, m = [], n = [], o = [], p = new Gi, q = new Hi, r = b + 1, s = 1e-4;
                for (this.tangents = m,
                         this.normals = n,
                         this.binormals = o,
                         j = 0; r > j; j++)
                    k = j / (r - 1),
                        m[j] = a.getTangentAt(k),
                        m[j].normalize();
                for (d(),
                         j = 1; r > j; j++)
                    n[j] = n[j - 1].clone(),
                        o[j] = o[j - 1].clone(),
                        p.crossVectors(m[j - 1], m[j]),
                    p.length() > s && (p.normalize(),
                        e = z(Cd(m[j - 1].dot(m[j]), -1, 1)),
                        n[j].applyMatrix4(q.makeRotationAxis(p, e))),
                        o[j].crossVectors(m[j], n[j]);
                if (c)
                    for (e = z(Cd(n[0].dot(n[r - 1]), -1, 1)),
                             e /= r - 1,
                         m[0].dot(p.crossVectors(n[0], n[r - 1])) > 0 && (e = -e),
                             j = 1; r > j; j++)
                        n[j].applyMatrix4(q.makeRotationAxis(m[j], e * j)),
                            o[j].crossVectors(m[j], n[j])
            }
        ;
        var nj = function(a, b, c, d) {
                $i.call(this),
                    b = b || 18,
                    c = c || 0,
                    d = d == j ? E : d;
                for (var e = 1 / (a.length - 1), f = 1 / b, g = 0, h = b; h >= g; g++)
                    for (var i = c + g * f * d, k = y(i), l = A(i), m = 0, n = a.length; n > m; m++) {
                        var o = a[m]
                            , p = new Gi;
                        p.x = k * o.x - l * o.y,
                            p.y = l * o.x + k * o.y,
                            p.z = o.z,
                            this.vertices.push(p)
                    }
                for (var q = a.length, g = 0, h = b; h > g; g++)
                    for (var m = 0, n = a.length - 1; n > m; m++) {
                        var r = m + q * g
                            , s = r
                            , t = r + q
                            , k = r + 1 + q
                            , u = r + 1
                            , v = g * f
                            , w = m * e
                            , x = v + f
                            , z = w + e;
                        this.faces.push(new Ji(s,u,t)),
                            this.faceVertexUvs[0].push([new Fi(v,w), new Fi(v,z), new Fi(x,w)]),
                            this.faces.push(new Ji(t,u,k)),
                            this.faceVertexUvs[0].push([new Fi(x,w), new Fi(v,z), new Fi(x,z)])
                    }
                this.mergeVertices(),
                    Bi(this),
                    this.computeFaceNormals(),
                    this.computeVertexNormals()
            }
        ;
        nj.prototype = Pd(_i);
        var oj = function(a, b) {
                b = b || {};
                var d = Zi.generateShapes(a, b);
                b.amount = b.height !== c ? b.height : 50,
                    kj.call(this, d, b)
            }
        ;
        oj.prototype = Pd(lj);
        var pj = k.Node = function() {
                yd(pj, this)
            }
            , qj = {
                X: wh,
                Y: xh,
                Z: yh
            }
            , rj = {
                xyz: "XYZ",
                xzy: "XZY",
                yxz: "YXZ",
                yzx: "YZX",
                zxy: "ZXY",
                zyx: "ZYX"
            }
            , sj = "xzy"
            , tj = function(a, b, c) {
                if (b) {
                    var d = b[0]
                        , e = b[1]
                        , f = b[2];
                    "xzy" === c ? (xh(a, e),
                        yh(a, f),
                        wh(a, d)) : "xyz" === c ? (yh(a, f),
                        xh(a, e),
                        wh(a, d)) : "yxz" === c ? (yh(a, f),
                        wh(a, d),
                        xh(a, e)) : "yzx" === c ? (wh(a, d),
                        yh(a, f),
                        xh(a, e)) : "zxy" === c ? (xh(a, e),
                        wh(a, d),
                        yh(a, f)) : "zyx" === c ? (wh(a, d),
                        xh(a, e),
                        yh(a, f)) : (xh(a, e),
                        yh(a, f),
                        wh(a, d))
                }
            }
        ;
        hh("Node", Uh, {
            ms_ac: ["rotationMode", "tall"],
            _adjustChildrenToTop: !0,
            _icon: "node_icon",
            _image: "node_image",
            _rotationMode: sj,
            _64O: 0,
            _rotationX: 0,
            _53O: 0,
            _host: j,
            _position: {
                x: 0,
                y: 0
            },
            _tall: 20,
            _54O: 0,
            getUIClass: function() {
                return Cj
            },
            _22Q: function() {
                return Em
            },
            p: function() {
                return 0 === arguments.length ? this.getPosition() : (this.setPosition.apply(this, arguments),
                    this)
            },
            p3: function() {
                return 0 === arguments.length ? this.getPosition3d() : (this.setPosition3d.apply(this, arguments),
                    this)
            },
            s3: function() {
                return 0 === arguments.length ? this.getSize3d() : (this.setSize3d.apply(this, arguments),
                    this)
            },
            r3: function() {
                return 0 === arguments.length ? this.getRotation3d() : (this.setRotation3d.apply(this, arguments),
                    this)
            },
            t3: function() {
                return this.translate3d.apply(this, arguments),
                    this
            },
            translate3dBy: function(a, b) {
                th(a, Ah(j, j, this.r3(), this.getRotationMode())),
                    this.translate3d(a[0] * b, a[1] * b, a[2] * b)
            },
            translateFront: function(a) {
                this.translate3dBy([0, 0, 1], a)
            },
            translateBack: function(a) {
                this.translate3dBy([0, 0, -1], a)
            },
            translateLeft: function(a) {
                this.translate3dBy([-1, 0, 0], a)
            },
            translateRight: function(a) {
                this.translate3dBy([1, 0, 0], a)
            },
            translateTop: function(a) {
                this.translate3dBy([0, 1, 0], a)
            },
            translateBottom: function(a) {
                this.translate3dBy([0, -1, 0], a)
            },
            getPosition3d: function() {
                return [this._position.x, this._54O, this._position.y]
            },
            setPosition3d: function(a, b, c) {
                1 === arguments.length && (b = a[1],
                    c = a[2],
                    a = a[0]),
                    this.p(a, c),
                    this.setElevation(b)
            },
            translate3d: function(a, b, c) {
                1 === arguments.length && (b = a[1],
                    c = a[2],
                    a = a[0]),
                    this.translate(a, c),
                    this.setElevation(this._54O + b)
            },
            getSize3d: function() {
                return [this.getWidth(), this.getTall(), this.getHeight()]
            },
            setSize3d: function(a, b, c) {
                1 === arguments.length && (b = a[1],
                    c = a[2],
                    a = a[0]),
                    this.setSize(a, c),
                    this.setTall(b)
            },
            getRotation3d: function() {
                return [this._rotationX, -this._64O, this._53O];
            },
            setRotation3d: function(a, b, c) {
                1 === arguments.length && (b = a[1],
                    c = a[2],
                    a = a[0]),
                    this.setRotationX(a),
                    this.setRotation(-b),
                    this.setRotationZ(c)
            },
            setRotationY: function(a) {
                this.setRotation(-a)
            },
            getRotationY: function() {
                return -this._64O
            },
            lookAt: function(a, b) {
                b = b || _;
                var c = this
                    , d = lh(a, c.p3())
                    , e = Sg(d);
                b === _ ? (c.r3([-C(d[1] / e), -H(d[2], d[0]) + F, 0]),
                    c.setRotationMode("xzy")) : b === ca ? (c.r3(0, -H(d[2], d[0]), C(d[1] / e)),
                    c.setRotationMode("zyx")) : b === ba ? (c.r3(0, -H(d[2], d[0]) + D, -C(d[1] / e)),
                    c.setRotationMode("zyx")) : b === da ? (c.r3([-C(d[1] / e) + F, -H(d[2], d[0]) + F, 0]),
                    c.setRotationMode("xzy")) : b === ea && (c.r3([-C(d[1] / e) - F, -H(d[2], d[0]) + F, 0]),
                        c.setRotationMode("xzy")),
                b === aa && (c.r3([-C(d[1] / e) + D, -H(d[2], d[0]) + F, D]),
                    c.setRotationMode("zxy"))
            },
            getLoopedEdges: function() {
                return this._45I
            },
            getEdges: function() {
                return this._70O
            },
            getAgentEdges: function() {
                return this._49I
            },
            getHost: function() {
                return this._host
            },
            setHost: function(a) {
                var b = this;
                if (b !== a && b._host !== a) {
                    var c = b._host;
                    c && c._removeAttach(b),
                        b._host = a,
                    b._host && b._host._addAttach(b),
                        b.fp("host", c, a),
                        b.onHostChanged(c, a)
                }
            },
            getAttaches: function() {
                return this._69O
            },
            _addAttach: function(a) {
                var b = this;
                b._69O || (b._69O = new Rh),
                    b._69O.add(a),
                    b.fp("attaches", j, a)
            },
            _removeAttach: function(a) {
                var b = this;
                b._69O.remove(a),
                b._69O.isEmpty() && delete b._69O,
                    b.fp("attaches", a, j)
            },
            getSourceEdges: function() {
                return this._42I
            },
            getTargetEdges: function() {
                return this._43I
            },
            _2I: function(a) {
                var b = this;
                b._44I || (b._44I = new Rh),
                b._42I || (b._42I = new Rh),
                    b._44I.add(a),
                    b._42I.add(a),
                    b._20I()
            },
            _4I: function(a) {
                var b = this;
                b._44I || (b._44I = new Rh),
                b._43I || (b._43I = new Rh),
                    b._44I.add(a),
                    b._43I.add(a),
                    b._20I()
            },
            _16I: function(a) {
                var b = this;
                b._44I.remove(a),
                    b._42I.remove(a),
                b._44I.isEmpty() && delete b._44I,
                b._42I.isEmpty() && delete b._42I,
                    b._20I()
            },
            _18I: function(a) {
                var b = this;
                b._44I.remove(a),
                    b._43I.remove(a),
                b._44I.isEmpty() && delete b._44I,
                b._43I.isEmpty() && delete b._43I,
                    b._20I()
            },
            _20I: function() {
                var a = this;
                if (delete a._45I,
                    !a._44I || a._44I.isEmpty())
                    return void delete a._70O;
                var b;
                a._44I.each(function(c) {
                    c.isLooped() && (b || (b = {}),
                    b[c._id] || (a._45I || (a._45I = new Rh),
                        a._45I.add(c),
                        b[c._id] = c))
                }),
                    b ? (a._70O = new Rh,
                        a._44I.each(function(c) {
                            b[c._id] ? "A" === b[c._id] || (b[c._id] = "A",
                                    a._70O.add(c)) : a._70O.add(c)
                        })) : a._70O = a._44I
            },
            hasAgentEdges: function() {
                return !!this._49I && !this._49I.isEmpty()
            },
            getSourceAgentEdges: function() {
                return this._46I
            },
            getTargetAgentEdges: function() {
                return this._47I
            },
            _1I: function(a) {
                var b = this;
                b._46I || (b._46I = new Rh),
                b._48I || (b._48I = new Rh),
                    b._46I.add(a),
                    b._48I.add(a),
                    b._19I()
            },
            _3I: function(a) {
                var b = this;
                b._47I || (b._47I = new Rh),
                b._48I || (b._48I = new Rh),
                    b._47I.add(a),
                    b._48I.add(a),
                    b._19I()
            },
            _15I: function(a) {
                var b = this;
                b._46I.remove(a),
                    b._48I.remove(a),
                b._46I.isEmpty() && delete b._46I,
                b._48I.isEmpty() && delete b._48I,
                    b._19I()
            },
            _17I: function(a) {
                var b = this;
                b._47I.remove(a),
                    b._48I.remove(a),
                b._47I.isEmpty() && delete b._47I,
                b._48I.isEmpty() && delete b._48I,
                    b._19I()
            },
            _19I: function() {
                var a = this;
                delete a._49I;
                var b = a._48I;
                if (b && !b.isEmpty()) {
                    var c = {};
                    b.each(function(b) {
                        c[b._id] ? a._49I || (a._49I = new Rh) : c[b._id] = b
                    }),
                        a._49I ? b.each(function(b) {
                            c[b._id] && (a._49I.add(b),
                                delete c[b._id])
                        }) : a._49I = b
                }
            },
            getImage: function() {
                return this._image
            },
            setImage: function(a) {
                var b = this
                    , c = b._image
                    , d = b.getWidth()
                    , e = b.getHeight();
                b._image = a,
                    b.fp("image", c, a),
                    b.fp(ya, d, b.getWidth()),
                    b.fp(za, e, b.getHeight())
            },
            getElevation: function() {
                return this._54O
            },
            setElevation: function(a) {
                var b = this;
                if (!b._50O) {
                    b._50O = 1;
                    var c = b._54O;
                    b._54O = a,
                        b.fp(Ab, c, a),
                        delete this._50O
                }
            },
            getRotation: function() {
                return this._64O
            },
            setRotation: function(a) {
                var b = this;
                if (!b._49O) {
                    b._49O = 1;
                    var c = b._64O;
                    b._64O = a,
                        b.fp(Xa, c, a),
                        delete b._49O
                }
            },
            getRotationX: function() {
                return this._rotationX
            },
            setRotationX: function(a) {
                var b = this;
                if (!b._51O) {
                    b._51O = 1;
                    var c = b._rotationX;
                    b._rotationX = a,
                        b.fp("rotationX", c, a),
                        delete b._51O
                }
            },
            getRotationZ: function() {
                return this._53O
            },
            setRotationZ: function(a) {
                var b = this;
                if (!b._52O) {
                    b._52O = 1;
                    var c = b._53O;
                    b._53O = a,
                        b.fp("rotationZ", c, a),
                        delete b._52O
                }
            },
            getPosition: function() {
                return this._position
            },
            setPosition: function(a, b) {
                var c = this;
                if (!c._50I) {
                    c._50I = 1;
                    var d;
                    if (d = 2 === arguments.length ? {
                            x: a,
                            y: b
                        } : a,
                        d.x !== c._position.x || d.y !== c._position.y) {
                        var e = c._position;
                        c._position = d,
                            c.fp(zb, e, d)
                    }
                    delete c._50I
                }
            },
            translate: function(a, b) {
                var c = this._position;
                this.p(c.x + a, c.y + b)
            },
            getWidth: function() {
                var a = this;
                if (a._width >= 0)
                    return a._width;
                var b = yg(a._image);
                return b ? Nh(b, a) : 20
            },
            setWidth: function(a) {
                var b = this
                    , c = b._width;
                b._width = a,
                    b.fp(ya, c, a)
            },
            getHeight: function() {
                var a = this;
                if (a._height >= 0)
                    return a._height;
                var b = yg(a._image);
                return b ? Oh(b, a) : 20
            },
            setHeight: function(a) {
                var b = this
                    , c = b._height;
                b._height = a,
                    b.fp(za, c, a)
            },
            setSize: function(a, b) {
                var c = this;
                2 === arguments.length ? (c.setWidth(a),
                    c.setHeight(b)) : (c.setWidth(a.width),
                    c.setHeight(a.height))
            },
            getSize: function() {
                return {
                    width: this.getWidth(),
                    height: this.getHeight()
                }
            },
            setRect: function(a, b, c, d) {
                var e = this;
                1 === arguments.length ? (e.p(a.x + a.width / 2, a.y + a.height / 2),
                    e.setWidth(a.width),
                    e.setHeight(a.height)) : (e.p(a + c / 2, b + d / 2),
                    e.setWidth(c),
                    e.setHeight(d))
            },
            getRect: function() {
                var a = this
                    , b = a.getWidth()
                    , c = a.getHeight();
                return Qe({
                    x: a._position.x - b / 2,
                    y: a._position.y - c / 2,
                    width: b,
                    height: c
                }, a._64O)
            },
            getCorners: function(a, b) {
                a == j && (a = 0),
                b == j && (b = a);
                var c = this
                    , d = c._position
                    , e = c.getWidth() / 2 + a
                    , f = c.getHeight() / 2 + b
                    , g = new jf(c._64O,d.x,d.y);
                return [g.tf(-e, -f), g.tf(e, -f), g.tf(e, f), g.tf(-e, f)]
            },
            rotateAt: function(a, b, c) {
                var d = this
                    , e = d._position
                    , f = d._64O
                    , g = new jf(f,e.x,e.y).tf(a, b)
                    , h = u(a * a + b * b)
                    , i = H(e.y - g.y, e.x - g.x) + c;
                d.setRotation(f + c),
                    d.p(g.x + h * y(i), g.y + h * A(i))
            },
            onParentChanged: function() {
                pj.superClass.onParentChanged.apply(this, arguments),
                    this._8I()
            },
            _8I: function() {
                this._70O && this._70O.each(function(a) {
                    a._7I()
                })
            },
            onPropertyChanged: function(a) {
                var b = this;
                pj.superClass.onPropertyChanged.call(b, a),
                b._69O && b._69O.each(function(b) {
                    b.handleHostPropertyChange(a)
                }),
                b._49I && b._49I.each(function(a) {
                    a.fp("agentChange", !0, !1)
                })
            },
            onHostChanged: function() {
                this.updateAttach()
            },
            handleHostPropertyChange: function(a) {
                this.updateAttach(a)
            },
            onStyleChanged: function(a) {
                pj.superClass.onStyleChanged.apply(this, arguments),
                di[a] && this.updateAttach()
            },
            updateAttach: function(a) {
                var b = this;
                b._51I || vc || (b._51I = 1,
                    b._71O(a),
                    delete b._51I)
            },
            _71O: function(a) {
                var b, c, d, e, f, g, h = this, i = h._host, k = a ? a.property : j, l = a ? a.oldValue : j, m = a ? a.newValue : j;
                if (i instanceof wj) {
                    if (k === Ab)
                        h.setElevation(h._54O + m - l);
                    else if (!a || ci[k]) {
                        if (b = h.s("attach.row.index"),
                                c = h.s("attach.column.index"),
                                d = i.getCellRect(b, c),
                                !d)
                            return;
                        e = h.s("attach.row.span"),
                            f = h.s("attach.column.span"),
                        (1 !== e || 1 !== f) && (d = Ug(d, i.getCellRect(b + e - 1, c + f - 1))),
                            hi(d, h, "attach.padding", 1),
                            h.setRect(d)
                    }
                } else if (i instanceof xj && (g = h.s("attach.index")) >= 0 && (!a || ei[k])) {
                    var n = h.s("attach.thickness");
                    n != j && h.setHeight(i.getThickness() * n);
                    var o = h.s("attach.offset")
                        , p = i.getPoints()
                        , q = p.size();
                    if (q > g) {
                        var r = p.get(g)
                            , s = q === g + 1 ? p.get(0) : p.get(g + 1)
                            , t = [s.x - r.x, s.y - r.y]
                            , u = Sg(t);
                        if (u) {
                            h.s("attach.offset.relative") && (o *= u),
                            h.s("attach.offset.opposite") && (o = u - o);
                            var v = {
                                x: r.x + t[0] / u * o,
                                y: r.y + t[1] / u * o
                            }
                                , w = h.s("attach.gap");
                            w && (h.s("attach.gap.relative") && (w *= i.getThickness()),
                                v = jk(j, v, s, w)),
                                h.p(v),
                                h.setRotation(H(t[1], t[0]))
                        }
                    }
                } else
                    a && (k === zb ? h.translate(m.x - l.x, m.y - l.y) : k === Ab ? h.setElevation(h._54O + m - l) : bi[k] && h._11Q(i, k, m - l))
            },
            _11Q: function(a, b, c) {
                var d = this
                    , e = a.p3()
                    , f = lh(d.p3(), e)
                    , g = oh()
                    , h = rj[d.getRotationMode()]
                    , i = h[0]
                    , j = h[1]
                    , k = h[2]
                    , l = qj[i]
                    , m = qj[j]
                    , n = qj[k];
                b === Xa && (b = "rotationY",
                    c = -c),
                    b === Xa + i ? (n(g, a[Ya + k]()),
                        m(g, a[Ya + j]()),
                        l(g, c),
                        m(g, -a[Ya + j]()),
                        n(g, -a[Ya + k]()),
                        d[Za + i](d[Ya + i]() + c)) : b === Xa + j ? (n(g, a[Ya + k]()),
                        m(g, c),
                        n(g, -a[Ya + k]()),
                        d[Za + j](d[Ya + j]() + c)) : b === Xa + k && (n(g, c),
                            d[Za + k](d[Ya + k]() + c)),
                    th(f, g),
                    d.p3(e[0] + f[0], e[1] + f[1], e[2] + f[2])
            },
            isHostOn: function(a) {
                var b = this;
                if (b._host && a && a._69O)
                    for (var c = {}, d = b._host; d && d !== b && !c[d._id]; ) {
                        if (d === a)
                            return !0;
                        c[d._id] = d,
                            d = d._host
                    }
                return !1
            },
            isLoopedHostOn: function(a) {
                return this.isHostOn(a) && a.isHostOn(this)
            },
            getSerializableProperties: function() {
                var a = pj.superClass.getSerializableProperties.call(this);
                return vd(a, {
                    image: 1,
                    host: 1,
                    rotation: 1,
                    rotationX: 1,
                    rotationZ: 1,
                    rotationMode: 1,
                    position: 1,
                    width: 1,
                    height: 1,
                    tall: 1,
                    elevation: 1
                }),
                    a
            }
        });
        var uj = k.Edge = function(a, b) {
                var c = this;
                yd(uj, c),
                    c.setSource(a),
                    c.setTarget(b)
            }
        ;
        hh("Edge", Uh, {
            _icon: "edge_icon",
            getUIClass: function() {
                return Dj
            },
            _22Q: function() {
                return Fm
            },
            getSource: function() {
                return this._source
            },
            getTarget: function() {
                return this._target
            },
            getSourceAgent: function() {
                return this._40I
            },
            getTargetAgent: function() {
                return this._41I
            },
            setSource: function(a) {
                var b = this;
                if (b._source !== a) {
                    var c = b._source;
                    b._source = a,
                    c && c._16I(b),
                    a && a._2I(b),
                        b._7I(),
                        b.fp("source", c, a)
                }
            },
            setTarget: function(a) {
                var b = this;
                if (b._target !== a) {
                    var c = b._target;
                    b._target = a,
                    c && c._18I(b),
                    a && a._4I(b),
                        b._7I(),
                        b.fp("target", c, a)
                }
            },
            isLooped: function() {
                var a = this;
                return a._source === a._target && !!a._source && !!a._target
            },
            _7I: function() {
                var a, b = this, c = li(b);
                b._40I !== c && (a = this._40I,
                a && a._15I(b),
                    b._40I = c,
                c && c._1I(b),
                    b.fp("sourceAgent", a, c),
                    qi(a, b._41I),
                    qi(c, b._41I));
                var d = mi(b);
                b._41I !== d && (a = b._41I,
                a && a._17I(b),
                    b._41I = d,
                d && d._3I(b),
                    b.fp("targetAgent", a, d),
                    qi(a, b._40I),
                    qi(d, b._40I))
            },
            _22I: function(a) {
                this._52I = a,
                    this.fp("edgeGroup", !0, !1)
            },
            getEdgeGroup: function() {
                return this._52I
            },
            isEdgeGroupHidden: function() {
                var a = this;
                return a._52I && a._52I.get(0) !== a && !a.getStyle(Ua)
            },
            getEdgeGroupSize: function() {
                return this._52I ? this._52I.size() : 1
            },
            getEdgeGroupIndex: function() {
                return this._52I ? this._52I.indexOf(this) : 0
            },
            isEdgeGroupAgent: function() {
                var a = this
                    , b = a._52I;
                return b && !a.getStyle(Ua) && b.size() > 1 && a === b.get(0)
            },
            toggle: function() {
                var a = this._52I
                    , b = !this.s(Ua);
                a && a.size() > 1 && (a.each(function(a) {
                    a.s(Ua, b)
                }),
                    a.getSiblings().each(function(b) {
                        b !== a && b.each(function(a) {
                            a.fp("edgeGroup", j, b)
                        })
                    }))
            },
            setStyle: function(a, b) {
                (a === Va || "edge.segments" === a) && (b = nd(b)),
                    uj.superClass.setStyle.call(this, a, b)
            },
            onStyleChanged: function(a) {
                uj.superClass.onStyleChanged.apply(this, arguments),
                ai[a] && qi(this._41I, this._40I)
            },
            getSerializableProperties: function() {
                var a = uj.superClass.getSerializableProperties.call(this);
                return vd(a, {
                    source: 1,
                    target: 1
                }),
                    a
            }
        });
        var vj = k.Group = function() {
                yd(vj, this)
            }
        ;
        hh("Group", pj, {
            _image: "group_image",
            _icon: "group_icon",
            _57O: !1,
            getUIClass: function() {
                return Fj
            },
            onChildAdded: function() {
                vj.superClass.onChildAdded.apply(this, arguments),
                    this._81I()
            },
            onChildRemoved: function() {
                vj.superClass.onChildRemoved.apply(this, arguments),
                    this._81I()
            },
            _81I: function() {
                var a = this;
                if (!a._54I && !vc) {
                    var b = a.getChildrenRect();
                    b && (a._53I = 1,
                        a.p(sf(a.s("group.position"), b, a.getSize())),
                        delete a._53I)
                }
            },
            getChildrenRect: function() {
                var a, b = this;
                return b.eachChild(function(c) {
                    a = Ug(a, b.getChildRect(c))
                }),
                    a
            },
            getChildRect: function(a) {
                var b;
                return od(a) && a.s(Aa) && (qd(a) && a.isExpanded() && a.eachChild(function(c) {
                    b = Ug(b, a.getChildRect(c))
                }),
                !b && a.getRect && (b = a.getRect())),
                    b
            },
            setPosition: function(a, b) {
                var c = this;
                if (!c._54I) {
                    var d;
                    d = 2 === arguments.length ? {
                        x: a,
                        y: b
                    } : a,
                    vc || c._53I || (c._54I = 1,
                        qf(c._children, d.x - c._position.x, d.y - c._position.y),
                        delete c._54I),
                        vj.superClass.setPosition.call(this, d)
                }
            },
            toggle: function() {
                this.setExpanded(!this.isExpanded())
            },
            isExpanded: function() {
                return this._57O
            },
            setExpanded: function(a) {
                var b = this;
                if (b._57O !== a) {
                    var c = b._57O;
                    b._57O = a,
                        b.fp("expanded", c, b._57O),
                        b._8I()
                }
            },
            _8I: function() {
                vj.superClass._8I.call(this),
                    this.eachChild(function(a) {
                        od(a) && a._8I()
                    })
            },
            onStyleChanged: function(a) {
                vj.superClass.onStyleChanged.apply(this, arguments),
                "group.position" === a && this._81I()
            },
            getSerializableProperties: function() {
                var a = vj.superClass.getSerializableProperties.call(this);
                return a.expanded = 1,
                    a
            }
        });
        var wj = k.Grid = function() {
                yd(wj, this)
            }
        ;
        hh("Grid", pj, {
            IRotatable: !1,
            _icon: "grid_icon",
            _image: j,
            getUIClass: function() {
                return Ij
            },
            setRotation: function() {},
            getCellRect: function(a, b) {
                var c = this
                    , d = c.s("grid.row.count")
                    , e = c.s("grid.column.count");
                if (0 >= d || 0 >= e || 0 > a || a >= d || 0 > b || b >= e)
                    return j;
                var f, g, h, i = c.getRect(), k = c.s("grid.row.percents"), l = c.s("grid.column.percents");
                if (hi(i, c, "grid.border", -1),
                    k && k._as && (k = k._as),
                    l && l._as && (l = l._as),
                    k && k.length === d) {
                    for (h = 0,
                             f = 0; a > f; f++)
                        h += i.height * k[f];
                    i.y += h,
                        i.height = i.height * k[a]
                } else
                    i.height = i.height / d,
                        i.y += i.height * a;
                if (l && l.length === e) {
                    for (g = 0,
                             f = 0; b > f; f++)
                        g += i.width * l[f];
                    i.x += g,
                        i.width = i.width * l[b]
                } else
                    i.width = i.width / e,
                        i.x += i.width * b;
                return $g(i, -c.s("grid.gap")),
                    i
            }
        });
        var xj = k.Shape = function() {
                yd(xj, this),
                    this._59O = new Rh
            }
        ;
        xj.__de__ = Ai,
            hh("Shape", pj, {
                ms_ac: ["thickness", "closePath"],
                _icon: "shape_icon",
                _thickness: 10,
                _closePath: !1,
                getUIClass: function() {
                    return Gj
                },
                _22Q: function() {
                    return Gm
                },
                getLength: function(a) {
                    return Ld(Ue(this._59O, this._58O, a, this._closePath))
                },
                getSegments: function() {
                    return this._58O
                },
                toSegments: function() {
                    var a = this._58O;
                    return a ? new Rh(a._as.slice(0)) : a
                },
                setSegments: function(a) {
                    var b = this._58O;
                    a = a ? new Rh(ld(a) ? a.slice(0) : a._as.slice(0)) : new Rh,
                    (b && a && b._as.join(",") !== a._as.join(",") || b !== a) && (this._58O = a,
                        this.fp("segments", b, a))
                },
                getPoints: function() {
                    return this._59O
                },
                toPoints: function() {
                    var a = this._59O;
                    return new Rh(a._as.slice(0))
                },
                setPoints: function(a) {
                    var b = this._59O;
                    a = a ? new Rh(ld(a) ? a.slice(0) : a._as.slice(0)) : new Rh,
                    (b && a && b._as.join(",") !== a._as.join(",") || b !== a) && (this._59O = a,
                        this.fs(),
                        this.fp("points", b, a))
                },
                addPoint: function(a, b) {
                    var c = this.toPoints();
                    c.add(a, b),
                        this.setPoints(c)
                },
                setPoint: function(a, b) {
                    var c = this.toPoints();
                    c.set(a, b),
                        this.setPoints(c)
                },
                removePointAt: function(a) {
                    var b = this.toPoints();
                    b.removeAt(a),
                        this.setPoints(b)
                },
                setWidth: function(a) {
                    var b = this;
                    if (1 > a && (a = 1),
                        !b._55I && !vc && b.getWidth()) {
                        b._55I = 1;
                        var c = b._position.x
                            , d = a / b.getWidth()
                            , e = b.toPoints()
                            , f = new Rh;
                        e.each(function(a) {
                            f.add({
                                x: (a.x - c) * d + c,
                                y: a.y,
                                e: a.e
                            })
                        }),
                            b.setPoints(f),
                            b.fs(),
                            delete b._55I
                    }
                    xj.superClass.setWidth.call(b, a)
                },
                setHeight: function(a) {
                    var b = this;
                    if (1 > a && (a = 1),
                        !b._55I && !vc && b.getHeight()) {
                        b._55I = 1;
                        var c = b._position.y
                            , d = a / b.getHeight()
                            , e = b.toPoints()
                            , f = new Rh;
                        e.each(function(a) {
                            f.add({
                                x: a.x,
                                y: (a.y - c) * d + c,
                                e: a.e
                            })
                        }),
                            b.setPoints(f),
                            b.fs(),
                            delete b._55I
                    }
                    xj.superClass.setHeight.call(b, a)
                },
                setPosition: function(a, b) {
                    var c, d = this;
                    if (!d._28Q) {
                        if (d._28Q = 1,
                            !d._55I && !vc) {
                            c = 2 === arguments.length ? {
                                x: a,
                                y: b
                            } : a;
                            var e = c.x - d._position.x
                                , f = c.y - d._position.y;
                            if (0 === e && 0 === f)
                                return void delete d._28Q;
                            d._55I = 1;
                            var g = d.toPoints()
                                , h = new Rh;
                            g.each(function(a) {
                                h.add({
                                    x: a.x + e,
                                    y: a.y + f,
                                    e: a.e
                                })
                            }),
                                d.setPoints(h),
                                d.fs(),
                                delete d._55I
                        }
                        xj.superClass.setPosition.apply(d, arguments),
                            delete d._28Q
                    }
                },
                fs: function() {
                    this.fireShapeChange()
                },
                fireShapeChange: function() {
                    var a = this;
                    if (!a._55I && !vc) {
                        var b = Tg(a._59O);
                        b && (a._55I = 1,
                            a.setRect(b),
                            delete a._55I)
                    }
                    a.fp(ta, !1, !0)
                },
                getSerializableProperties: function() {
                    var a = xj.superClass.getSerializableProperties.call(this);
                    return a.segments = 1,
                        a.points = 1,
                        a.thickness = 1,
                        a.closePath = 1,
                        a
                }
            });
        var yj = k.Polyline = function() {
                yd(yj, this),
                    this.s({
                        "shape.background": null ,
                        "shape.border.width": 2
                    })
            }
        ;
        hh("Polyline", xj, {
            IRotatable: !1,
            _icon: "polyline_icon",
            _22Q: function() {
                return Hm
            },
            getUIClass: function() {
                return Hj
            },
            setRotationX: function() {},
            setRotation: function() {},
            setRotationZ: function() {},
            setClosePath: function() {},
            setTall: function(a) {
                var b = this;
                if (!b._24Q && !vc && b.getTall()) {
                    b._24Q = 1;
                    var c = b._54O
                        , d = a / b.getTall();
                    b._59O.each(function(a) {
                        a.e = a.e == j ? c : (a.e - c) * d + c
                    }),
                        b.fs(),
                        delete b._24Q
                }
                yj.superClass.setTall.call(b, a)
            },
            setElevation: function(a) {
                var b = this;
                if (!b._24Q && !vc) {
                    b._24Q = 1;
                    var c = a - b._54O;
                    b._59O.each(function(b) {
                        b.e == j ? b.e = a : b.e += c
                    }),
                        b.fs(),
                        delete b._24Q
                }
                yj.superClass.setElevation.apply(b, arguments)
            },
            fireShapeChange: function() {
                var a = this
                    , b = a._59O;
                if (!a._24Q && !vc) {
                    var c = b.size();
                    if (c) {
                        var d = 1
                            , e = b.get(0)
                            , f = a._54O;
                        e.e == j && (e.e = f);
                        for (var g = e.e, h = 0; c > d; d++) {
                            e = b.get(d),
                            e.e == j && (e.e = f);
                            var i = w(g, e.e)
                                , k = v(g + h, e.e);
                            g = i,
                                h = k - i
                        }
                        a._24Q = 1,
                            a.setTall(h),
                            a.setElevation(g + h / 2),
                            delete a._24Q
                    }
                }
                yj.superClass.fireShapeChange.apply(a, arguments)
            }
        });
        var zj = k.SubGraph = function() {
                yd(zj, this)
            }
        ;
        hh("SubGraph", pj, {
            ISubGraph: 1,
            _image: "subGraph_image",
            _icon: "subGraph_icon",
            _8I: function() {
                zj.superClass._8I.call(this),
                    this.eachChild(function(a) {
                        od(a) && a._8I()
                    })
            }
        }),
            k.EdgeGroup = function(a, b) {
                this._70O = a,
                    this._siblings = b;
                for (var c, d, e = 0, f = a.size(), g = n[Ua]; f > e; e++)
                    if (c = a.get(e).getStyle(Ua, !1),
                        c != j) {
                        g = c;
                        break
                    }
                g == j && (g = !0);
                var h = m.edgeGroupAgentFunc;
                for (h && (d = h(a),
                d && d !== a.get(0) && (a.remove(d),
                    a.add(d, 0))),
                         e = 0; f > e; e++)
                    a.get(e).s(Ua, g)
            }
            ,
            hh("EdgeGroup", b, {
                getEdges: function() {
                    return this._70O
                },
                size: function() {
                    return this._70O.size()
                },
                get: function(a) {
                    return this._70O.get(a)
                },
                indexOf: function(a) {
                    return this._70O.indexOf(a)
                },
                each: function(a, b) {
                    this._70O.each(a, b)
                },
                getSiblings: function() {
                    return this._siblings
                },
                eachSiblingEdge: function(a, b) {
                    this._siblings.each(function(c) {
                        c._70O.each(a, b)
                    })
                }
            });
        var Aj = k.JSONSerializer = function(a, b) {
                this.dm = this._dataModel = a,
                    this._hierarchical = !!b
            }
        ;
        hh("JSONSerializer", b, {
            ms_ac: ["hierarchical"],
            serialize: function(a) {
                return JSON.stringify(this.toJSON(), function(a, b) {
                    return hd(b) ? sd(b) : b
                }, a == j ? 2 : a)
            },
            toJSON: function() {
                var a = this
                    , b = a.dm
                    , d = b.getRoots()
                    , e = a.json = {
                    v: m.getVersion(),
                    d: [],
                    a: {}
                }
                    , f = b.getSerializableAttrs();
                for (var g in f) {
                    var h = b.a(g);
                    h !== c && a[Nb](g, h, e.a)
                }
                return zd(e.a) && delete e.a,
                    a._hierarchical ? d.each(a.serializeData, this) : b.each(function(b) {
                        a.serializeData(b)
                    }),
                    e
            },
            isSerializable: function() {
                return !0
            },
            getProperties: function(a) {
                return a.getSerializableProperties()
            },
            getStyles: function(a) {
                return a.getSerializableStyles()
            },
            getAttrs: function(a) {
                return a.getSerializableAttrs()
            },
            serializeData: function(a) {
                var b = this;
                if (b.isSerializable(a)) {
                    var c, d, e, f, g = a.getClass(), h = new g, i = {
                        c: a.getClassName(),
                        i: a.getId(),
                        p: {},
                        s: {},
                        a: {}
                    };
                    b.json.d.push(i),
                        c = b.getProperties(a);
                    for (d in c)
                        f = ed(d),
                        a[f] && (e = a[f](),
                        e !== h[f]() && b[Nb](d, e, i.p));
                    c = b.getStyles(a);
                    for (d in c)
                        e = a.s(d),
                        e !== h.s(d) && b[Nb](d, e, i.s);
                    c = b.getAttrs(a);
                    for (d in c)
                        e = a.a(d),
                        e !== h.a(d) && b[Nb](d, e, i.a);
                    zd(i.p) && delete i.p,
                    zd(i.s) && delete i.s,
                    zd(i.a) && delete i.a
                }
                b._hierarchical && a.getChildren().each(b.serializeData, b)
            },
            serializeValue: function(a, b, c) {
                md(b) ? b = {
                    __a: b._as
                } : b instanceof Uh && (b = {
                        __i: b.getId()
                    }),
                    c[a] = b
            },
            deserialize: function(a, b, c) {
                vc = !0;
                var d = this;
                a = d.json = gd(a) ? JSON.parse(a) : a,
                    d._82I = {};
                for (var e = d.dm, f = new Rh, g = new Rh, h = 0, i = a.d.length; i > h; h++) {
                    var k = a.d[h]
                        , l = Fg(k.c)
                        , m = new l
                        , n = k.i;
                    c && n != j && (m._id = n),
                        d._82I[n] = m,
                        f.add(m),
                        g.add(k)
                }
                for (h = 0; i > h; h++)
                    d.deserializeData(f.get(h), g.get(h));
                f.each(function(a) {
                    b && !a.getParent() && a.setParent(b),
                        e.add(a)
                });
                for (var o in a.a)
                    e.a(o, d[Ob](a.a[o]));
                return vc = !1,
                    f
            },
            deserializeData: function(a, b) {
                for (var c in b.p)
                    a[fd(c)](this[Ob](b.p[c]));
                for (c in b.s)
                    a.s(c, this[Ob](b.s[c]));
                for (c in b.a)
                    a.a(c, this[Ob](b.a[c]))
            },
            deserializeValue: function(a) {
                if (jd(a)) {
                    var b = a.__i;
                    if (b != j)
                        return this._82I[b];
                    if (b = a.__a,
                            ld(b))
                        return new Rh(b)
                }
                return a
            }
        }),
            vd(Vh, {
                serialize: function(a, b) {
                    return new Aj(this,b).serialize(a)
                },
                toJSON: function(a) {
                    return new Aj(this,a).toJSON()
                },
                deserialize: function(a, b, c) {
                    return new Aj(this).deserialize(a, b, c)
                }
            }),
            yi.GraphView = function(a) {
                var b = this;
                b._24I = {},
                    b._34I = new Rh,
                    b._25I = {},
                    b._56I = {},
                    b._view = Rd(1),
                    b._canvas = Sd(b._view),
                    b.dm(a ? a : new Vh),
                    b.setEditable(!1),
                    b.setScrollBarVisible(m.graphViewScrollBarVisible)
            }
            ,
            zi("GraphView", b, {
                ms_v: 1,
                ms_gv: 1,
                ms_bnb: 1,
                ms_tip: 1,
                ms_dm: 1,
                ms_lp: 1,
                ms_fire: 1,
                ms_sm: 1,
                _49o: 1,
                ms_txy: 1,
                _52o: 1,
                _51o: 1,
                ms_ac: ["layers", hb, ib, fb, gb, "resettable", "editInteractor", db, "pannable", "rectSelectable", "autoScrollZone", pb, "movableFunc", "editableFunc", "pointEditableFunc", "rectEditableFunc", "rotationEditableFunc", "rectSelectBackground", "rectSelectBorderColor", "editPointSize", "editPointBorderColor", "editPointBackground", "hoverDelay"],
                _resettable: m.graphViewResettable,
                _pannable: m.graphViewPannable,
                _rectSelectable: m.graphViewRectSelectable,
                _autoScrollZone: m.graphViewAutoScrollZone,
                _rectSelectBackground: m.graphViewRectSelectBackground,
                _rectSelectBorderColor: m.graphViewRectSelectBorderColor,
                _editPointSize: m.graphViewEditPointSize,
                _editPointBorderColor: m.graphViewEditPointBorderColor,
                _editPointBackground: m.graphViewEditPointBackground,
                _scrollBarColor: lg,
                _scrollBarSize: mg,
                _autoHideScrollBar: Zf,
                _autoMakeVisible: Yf,
                setEditable: function(a) {
                    var b = this
                        , c = yi.XEditInteractor;
                    a ? b.setInteractors([new Lj(b), c ? new c(b) : new Nj(b), new Mj(b), new Kj(b), new Oj(b,{
                        editable: !c
                    })]) : b.setInteractors([new Lj(b), new Mj(b), new Kj(b), new Oj(b,{
                        editable: !1
                    })])
                },
                getCanvas: function() {
                    return this._canvas
                },
                _33I: function(a) {
                    var b = a.getUIClass();
                    return b ? new b(this,a) : j
                },
                getDataUI: function(a) {
                    var b = this
                        , d = b._25I[a._id];
                    return d === c && (d = b._33I(a),
                        b._25I[a._id] = d),
                        d
                },
                invalidateAll: function(a) {
                    var b = this;
                    if (a) {
                        for (var c in b._25I) {
                            var d = b._25I[c];
                            d && d.dispose()
                        }
                        b._25I = {},
                            b._56I = {},
                            b._24I = {},
                            b._34I.clear(),
                            b.redraw()
                    } else
                        b.dm().each(function(a) {
                            b.invalidateData(a)
                        })
                },
                invalidateSelection: function() {
                    var a = this;
                    a.sm().each(function(b) {
                        a.invalidateData(b)
                    })
                },
                invalidateData: function(a) {
                    var b = this;
                    b._24I[a._id] = a,
                        b._21Q(a),
                        b.iv()
                },
                _21Q: function(a) {
                    var b = this
                        , c = b._24I;
                    if (pd(a) && Gc[a.s(Wa)]) {
                        var d = a.getSourceAgent();
                        d && d.getAgentEdges().each(function(a) {
                            c[a._id] = a
                        }),
                            d = a.getTargetAgent(),
                        d && d.getAgentEdges().each(function(a) {
                            c[a._id] = a
                        }),
                            b.iv()
                    }
                },
                redraw: function(a) {
                    var b = this;
                    b._32I || (a ? b._34I.add(a) : (b._32I = 1,
                        b._34I.clear()),
                        b.iv())
                },
                each: function(a, b) {
                    var c, d, e, f = 0, g = this._layers, h = this._dataModel._datas._as, i = h.length;
                    if (g)
                        for (var j = g.length; j > f; f++) {
                            e = g[f];
                            for (var k = 0; i > k; k++)
                                if (c = h[k],
                                    c._layer === e && (d = b ? a.call(b, c) : a(c),
                                    d === !1))
                                    return
                        }
                    else
                        for (; i > f; f++)
                            if (c = h[f],
                                    d = b ? a.call(b, c) : a(c),
                                d === !1)
                                return
                },
                reverseEach: function(a, b) {
                    var c, d, e, f, g = this._layers, h = this._dataModel._datas._as, i = h.length;
                    if (g)
                        for (c = g.length - 1; c >= 0; c--) {
                            f = g[c];
                            for (var j = i - 1; j >= 0; j--)
                                if (d = h[j],
                                    d._layer === f && (e = b ? a.call(b, d) : a(d),
                                    e === !1))
                                    return
                        }
                    else
                        for (c = i - 1; c >= 0; c--)
                            if (d = h[c],
                                    e = b ? a.call(b, d) : a(d),
                                e === !1)
                                return
                },
                getViewRect: function() {
                    return this._29I
                },
                getContentRect: function() {
                    var a = this
                        , b = a._84I;
                    return b || (a.each(function(c) {
                        a.isVisible(c) && (b = Ug(b, a.getDataUIBounds(c)))
                    }),
                        a._84I = b ? b : Pc),
                        a._84I
                },
                getScrollRect: function() {
                    return Ug(this.getContentRect(), this._29I)
                },
                fitData: function(a, b, c, d, e) {
                    var f = this;
                    if (!f.getWidth() || !f.getHeight())
                        return void (e || Cg(f.fitData, f, [a, b, c, d, !0], 200));
                    f.makeVisible(a),
                        f.validate();
                    var g = f.getDataUIBounds(a);
                    g && (g = Eg(g),
                        $g(g, c == j ? 20 : c),
                        f.fitRect(g, b, d))
                },
                fitContent: function(a, b, c, d) {
                    var e = this;
                    if (!e.getWidth() || !e.getHeight())
                        return void (d || Cg(e.fitContent, e, [a, b, c, !0], 200));
                    e.validate();
                    var f = Eg(e.getContentRect());
                    $g(f, b == j ? 20 : b),
                        e.fitRect(f, a, c)
                },
                fitRect: function(a, b, c) {
                    var d = this
                        , e = d.getWidth()
                        , f = d.getHeight()
                        , g = a.x + a.width / 2
                        , h = a.y + a.height / 2
                        , i = w(e / a.width, f / a.height)
                        , j = d._zoom
                        , k = -g * j + e / 2
                        , l = -h * j + f / 2;
                    0 === i || isNaN(i) || (c && (i = w(1, i)),
                        b ? d.setTranslate(k, l, {
                            finishFunc: function() {
                                d.setZoom(i, b)
                            }
                        }) : (d.setTranslate(k, l),
                            d.setZoom(i)))
                },
                toCanvas: function(a) {
                    this.validateImpl();
                    var b = this
                        , c = b.getContentRect()
                        , d = Sd()
                        , e = b._zoom
                        , f = c.x * e
                        , g = c.y * e
                        , h = c.width * e
                        , i = c.height * e;
                    Vd(d, h, i, 1);
                    var j = be(d);
                    return a && Xe(j, 0, 0, h, i, a),
                        de(j, -f, -g),
                        j.scale(e, e),
                        b._42(j),
                        j.restore(),
                        d
                },
                toDataURL: function(a, b) {
                    return this.toCanvas(a).toDataURL(b || "image/png", 1)
                },
                getClipBounds: function() {
                    return this._74O
                },
                _42: function(a, b) {
                    var c, d, e = this;
                    e._93db(a, b),
                        e.each(function(f) {
                            e._56I[f._id] && (c = e.getDataUI(f),
                            c && (d = c._79o(),
                                k.HtmlNode && f instanceof k.HtmlNode ? c._42(a) : (!b || Xg(b, d)) && c._42(a)))
                        }),
                        e._92db(a, b)
                },
                validateImpl: function() {
                    var a, b, c, d, e, f = this, g = f.tx(), h = f.ty(), i = f._zoom, j = f._canvas, k = this.getWidth(), l = this.getHeight(), m = f._29I, n = {
                        x: -g / i,
                        y: -h / i,
                        width: k / i,
                        height: l / i
                    }, o = {}, p = f._34I, q = f._24I, r = f._32I, u = f._23I;
                    (k !== j.clientWidth || l !== j.clientHeight) && (Vd(j, k, l),
                        r = 1),
                    r || Bd(n, m) || (r = 1),
                        f._29I = n,
                        f.each(function(a) {
                            b = a._id;
                            var d = o[b] = f.isVisible(a);
                            d !== f._56I[b] && (q[b] = a,
                                c = f.getDataUI(q[b]),
                            c && c._84o(d),
                                f._84o(a, d))
                        }, f);
                    for (b in q)
                        c = f.getDataUI(q[b]),
                        c && (!r && f._56I[b] && (e = c._79o(),
                        e && p.add(e)),
                            c.invalidate()),
                            f._83I = 1;
                    if (f._56I = o,
                            !r)
                        for (b in q)
                            o[b] && (c = f.getDataUI(q[b]),
                            c && (e = c._79o(),
                            e && p.add(e)));
                    if (r ? d = n : (p.each(function(a) {
                            Xg(n, a) && (d = Ug(d, a))
                        }),
                        d && ($g(d, v(1, 1 / i)),
                            d.x = s(d.x * i) / i,
                            d.y = s(d.y * i) / i,
                            d.width = t(d.width * i) / i,
                            d.height = t(d.height * i) / i,
                            d = Yg(n, d))),
                            f._74O = d,
                        d && (a = be(j),
                            ce(a, g, h, i),
                            a.beginPath(),
                            a.rect(d.x, d.y, d.width, d.height),
                            a.clip(),
                            a.clearRect(d.x, d.y, d.width, d.height),
                            f._42(a, d),
                            a.restore(),
                            delete f._74O),
                            f._24I = {},
                            p.clear(),
                            delete f._32I,
                        u && k > 0 && l > 0) {
                        var c = f.getDataUI(u);
                        if (c) {
                            var e = c._79o()
                                , w = f._29I
                                , x = w.x
                                , y = w.y
                                , z = w.width
                                , A = w.height
                                , i = f._zoom;
                            e && !Xg(e, w) && (e.x + e.width < x && f.tx(-e.x * i),
                            e.x > x + z && f.tx(-(e.x + e.width - z) * i),
                            e.y + e.height < y && f.ty(-e.y * i),
                            e.y > y + A && f.ty(-(e.y + e.height - A) * i))
                        }
                        delete f._23I
                    }
                    f._83I && (delete f._83I,
                        delete f._84I),
                        f._98O()
                },
                isScrollBarVisible: function() {
                    return !!this._79O
                },
                setScrollBarVisible: function(a) {
                    var b = this;
                    a !== b.isScrollBarVisible() && (a ? (Wd(b._view, b._79O = Rd()),
                        Wd(b._79O, b._27I = Rd()),
                        Wd(b._79O, b._28I = Rd())) : (bh(b._79O),
                        delete b._79O,
                        delete b._27I,
                        delete b._28I),
                        b.fp("scrollBarVisible", !a, a))
                },
                showScrollBar: function() {
                    var a = this;
                    a._79O && (a._85I || (O(function() {
                        a._86I()
                    }, ng),
                        a.iv()),
                        a._85I = new Date)
                },
                _86I: function() {
                    var a = this;
                    if (a._85I) {
                        var b = new Date
                            , c = b.getTime();
                        c - a._85I.getTime() >= ng ? (delete a._85I,
                            a.iv()) : O(function() {
                            a._86I()
                        }, ng)
                    }
                },
                _98O: function() {
                    var a = this
                        , b = this._27I
                        , c = this._28I;
                    if (a._79O) {
                        if (a._autoHideScrollBar && !a._85I)
                            return b.style.visibility = $a,
                                void (c.style.visibility = $a);
                        var d = a.getScrollBarColor()
                            , e = a._zoom
                            , f = a.getScrollBarSize()
                            , g = a.getViewRect()
                            , h = a.getScrollRect()
                            , i = g.height * e
                            , j = h.height * e
                            , k = g.width * e - f - 2
                            , l = i * ((g.y - h.y) * e / j)
                            , m = i * (i / j)
                            , n = b.style;
                        j - .5 > i ? (og > m && (l = l + m / 2 - og / 2,
                        0 > l && (l = 0),
                        l + og > i && (l = i - og),
                            m = og),
                            he(b, k, l, f, m),
                            n.visibility = _a,
                            n.background = d,
                            n.borderRadius = f / 2 + ma) : n.visibility = $a;
                        var o = g.width * e
                            , p = h.width * e
                            , l = g.height * e - f - 2
                            , k = o * ((g.x - h.x) * e / p)
                            , q = o * (o / p)
                            , n = c.style;
                        p - .5 > o ? (og > q && (k = k + q / 2 - og / 2,
                        0 > k && (k = 0),
                        k + og > o && (k = o - og),
                            q = og),
                            he(c, k, l, q, f),
                            n.visibility = _a,
                            n.background = d,
                            n.borderRadius = f / 2 + ma) : n.visibility = $a
                    }
                },
                setDataModel: function(a) {
                    var b = this
                        , c = b._dataModel
                        , d = b._3o;
                    c !== a && (c && (c.umm(b.handleDataModelChange, b),
                        c.umd(b.handleDataPropertyChange, b),
                        c.removeIndexChangeListener(b._75O, b),
                    d || c.sm().ums(b._16o, b)),
                        b._dataModel = a,
                        a.mm(b.handleDataModelChange, b),
                        a.md(b.handleDataPropertyChange, b),
                        a.addIndexChangeListener(b._75O, b),
                        d ? d._21I(a) : a.sm().ms(b._16o, b),
                        b.invalidateAll(!0),
                        b.fp(Eb, c, a))
                },
                handleDataPropertyChange: function(a) {
                    this.invalidateData(a.data)
                },
                onPropertyChanged: function(a) {
                    var b = this
                        , c = a.property;
                    b.redraw(),
                        Zh[c] ? b.showScrollBar() : c === db && b.onCurrentSubGraphChanged(a)
                },
                onCurrentSubGraphChanged: function() {
                    this.reset()
                },
                handleDataModelChange: function(a) {
                    var b = this
                        , c = a.kind
                        , d = a.data;
                    if (b._83I = 1,
                        "add" === c)
                        b.invalidateData(d),
                        pd(d) && d.getEdgeGroup() && d.getEdgeGroup().eachSiblingEdge(b.invalidateData, b);
                    else if (c === wa) {
                        b._21Q(d);
                        var e = d._id
                            , f = b._25I[e];
                        if (f) {
                            if (b._56I[e]) {
                                var g = f._79o();
                                g && b.redraw(g)
                            }
                            f.dispose(),
                                delete b._25I[e],
                                delete b._24I[e],
                                delete b._56I[e]
                        }
                        d === b._currentSubGraph && b.setCurrentSubGraph(j)
                    } else
                        c === xa && (b.invalidateAll(!0),
                            b.setCurrentSubGraph(j))
                },
                _75O: function(a) {
                    this.invalidateData(a.data)
                },
                _76O: function(a) {
                    var b = this;
                    if (b.isVisible(a)) {
                        for (var c = a; c._parent && b.isVisible(c._parent); )
                            c = c._parent;
                        c && c !== a && b._dataModel._76O(c),
                            b._dataModel._76O(a)
                    }
                },
                isMovable: function(a) {
                    var b = this;
                    return pd(a) && a.getStyle(Wa) !== Ga ? !1 : a.s("2d.movable") ? b._movableFunc ? b._movableFunc(a) : !0 : !1
                },
                isSelectable: function(a) {
                    return a.s("2d.selectable") && this.sm().isSelectable(a)
                },
                isEditable: function(a) {
                    var b = this;
                    if (!b._editInteractor || !b.isSelected(a))
                        return !1;
                    if (qd(a)) {
                        var c = b.getDataUI(a);
                        if (!c || c._88I)
                            return !1
                    }
                    return pd(a) && a.getStyle(Wa) !== Ga ? !1 : a.s("2d.editable") ? b._editableFunc ? b._editableFunc(a) : !0 : !1
                },
                handleDelete: function() {
                    this._editInteractor && this.removeSelection()
                },
                isPointEditable: function(a) {
                    return od(a) && 0 !== a.getRotation() ? !1 : this._pointEditableFunc ? this._pointEditableFunc(a) : !0
                },
                isRectEditable: function(a) {
                    return od(a) && 0 !== a.getRotation() ? !1 : this._rectEditableFunc ? this._rectEditableFunc(a) : !0
                },
                isRotationEditable: function(a) {
                    return a.setRotation && a.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(a) : !0 : !1
                },
                getRotationPoint: function(a) {
                    var b = kf(a.getRotation(), 0, -a.getHeight() / 2 - (X ? 32 : 16))
                        , c = a.p();
                    return b.x += c.x,
                        b.y += c.y,
                        b
                },
                getLogicalPoint: function(a) {
                    var b = this;
                    return _g(a, b._canvas, b.tx(), b.ty(), b._zoom, b._zoom)
                },
                getSelectedDataAt: function(a) {
                    var b = this;
                    return this.getDataAt(a, function(a) {
                        return b.isSelected(a)
                    })
                },
                getDataAt: function(a, b, c) {
                    a.target && (a = this.lp(a));
                    var d;
                    return this.reverseEach(function(e) {
                        return (b ? b(e) : this.isSelectable(e)) && this.rectIntersects(e, dd(a.x, a.y, c)) ? (d = e,
                            !1) : void 0
                    }, this),
                        d
                },
                getIconInfoAt: function(a, b) {
                    var c = this;
                    if (a.target && (a = c.lp(a)),
                        b || (b = c.getDataAt(a)),
                            b) {
                        var d = c.getDataUI(b);
                        if (d && d._38o) {
                            var e, f = d._38o, g = new Rh;
                            for (e in f.icons)
                                g.add(e);
                            for (var h = g.size() - 1; h >= 0; h--) {
                                e = g.get(h);
                                for (var i = f.rects[e], k = i.rotation, l = i.length - 1; l >= 0; l--) {
                                    var m = i[l]
                                        , n = m.width
                                        , o = m.height
                                        , p = {
                                        x: a.x - m.x - n / 2,
                                        y: a.y - m.y - o / 2
                                    };
                                    k != j && (p = kf(-k, p.x, p.y));
                                    var m = {
                                        x: -n / 2,
                                        y: -o / 2,
                                        width: n,
                                        height: o
                                    };
                                    if (Vg(m, p))
                                        return {
                                            key: e,
                                            index: l,
                                            name: f.icons[e].names[l],
                                            rect: i[l],
                                            point: a,
                                            rotation: k,
                                            relativeRect: m,
                                            relativePoint: p,
                                            data: b
                                        }
                                }
                            }
                        }
                    }
                    return j
                },
                getDatasInRect: function(a, b, d) {
                    d === c && (d = 1);
                    var e = this
                        , f = new Rh;
                    return e.reverseEach(function(c) {
                        d && !e.isSelectable(c) || (b ? e.rectIntersects(c, a) : e.rectContains(c, a)) && f.add(c)
                    }),
                        f
                },
                moveSelection: function(a, b) {
                    var c, d = this, e = d.dm();
                    e && (c = e.getHistoryManager()),
                    c && c.beginInteraction(),
                        qf(d.sm().toSelection(d.isMovable, d), a, b),
                    c && c.endInteraction()
                },
                getDataUIBounds: function(a) {
                    var b = this.getDataUI(a);
                    return b ? b._79o() : j
                },
                getBoundsForGroup: function(a) {
                    return a.s(Aa) ? this.getDataUIBounds(a) : j
                },
                rectIntersects: function(a, b) {
                    this.validate();
                    var c = j;
                    if (this._56I[a._id]) {
                        var d = this._25I[a._id];
                        if (d) {
                            var e = d._79o();
                            if (Wg(b, e))
                                c = !0;
                            else if ((b = Yg(b, e)) && (d.rectIntersects && (c = d.rectIntersects(b)),
                                c == j)) {
                                if (!a.s("pixelPerfect"))
                                    return !0;
                                var f = b.x
                                    , g = b.y
                                    , h = b.width
                                    , i = b.height
                                    , k = 1
                                    , l = m.hitMaxArea
                                    , n = h * i;
                                n > l && (k = l / n);
                                var o = Le(h * k, i * k);
                                de(o, -f * k, -g * k),
                                    o.scale(k, k),
                                    d._42(o);
                                try {
                                    for (var p = 0, q = o.getImageData(0, 0, h * k, i * k).data; p < q.length; p += 4)
                                        if (0 !== q[p + 3]) {
                                            c = !0;
                                            break
                                        }
                                    o.restore()
                                } catch (r) {
                                    Je = j,
                                        c = !0
                                }
                            }
                        }
                    }
                    return c ? !0 : !1
                },
                rectContains: function(a, b) {
                    if (this._56I[a._id]) {
                        var c = this._25I[a._id];
                        if (c)
                            return Wg(b, c._79o())
                    }
                    return !1
                },
                reset: function() {
                    this.setZoom(1),
                        this.setTranslate(0, 0)
                },
                handleKeyDown: function(a) {
                    var b = this
                        , c = b._focusData
                        , d = c && b._25I[c._id]
                        , e = 0
                        , f = b._dataModel._datas;
                    c && c._enabled && c._editable && d && d.onKeyDown && d.onKeyDown(a) === !0 || (9 === a.keyCode && (c && (e = f.indexOf(c),
                        Og(a) ? -1 === --e && (e = 0) : ++e === f.size() && (e = 0)),
                        b._focusData = c = f.get(e),
                        b.sm().setSelection(c)),
                        re(a) ? b.selectAll() : Ee(a) && b.isResettable() && b.reset(),
                    b.sm().isEmpty() || (se(a) && b.handleDelete(a),
                    Ae(a) && (b.moveSelection(-1, 0),
                        b.fi({
                            kind: "moveLeft"
                        })),
                    Be(a) && (b.moveSelection(0, -1),
                        b.fi({
                            kind: "moveUp"
                        })),
                    Ce(a) && (b.moveSelection(1, 0),
                        b.fi({
                            kind: "moveRight"
                        })),
                    De(a) && (b.moveSelection(0, 1),
                        b.fi({
                            kind: "moveDown"
                        }))))
                },
                handleScroll: function(a, b) {
                    wg(a);
                    var c = this.lp(a);
                    b > 0 ? this.scrollZoomIn(c) : 0 > b && this.scrollZoomOut(c)
                },
                handlePinch: function(a, b, c) {
                    b > c ? this.pinchZoomIn(a) : this.pinchZoomOut(a)
                },
                checkDoubleClickOnNote: function(a, b) {
                    var c = this
                        , d = c.lp(a)
                        , e = c.getDataUI(b)
                        , f = e.note2Info;
                    return f && b.s("note2.toggleable") && Vg(f.clickRect, d) ? (b.s(Ta, !b.s(Ta)),
                        c.fi({
                            kind: "toggleNote2",
                            event: a,
                            data: b
                        }),
                        !0) : (f = e.noteInfo,
                        f && b.s("note.toggleable") && Vg(f.clickRect, d) ? (b.s(Sa, !b.s(Sa)),
                            c.fi({
                                kind: "toggleNote",
                                event: a,
                                data: b
                            }),
                            !0) : !1)
                },
                _84o: function() {},
                isNoteVisible: function() {
                    return this._zoom > .15
                },
                isLabelVisible: function() {
                    return this._zoom > .15
                },
                isSelectVisible: function() {
                    return this._zoom > .15
                },
                isEditVisible: function() {
                    return this._zoom > .15
                },
                autoScroll: function(a, b) {
                    var c = this
                        , d = c.getAutoScrollZone()
                        , e = d / c.getZoom()
                        , f = d / 4
                        , g = c._29I
                        , h = c.lp(a)
                        , i = {
                        x: c.tx(),
                        y: c.ty()
                    };
                    return h && d > 0 && g && (h.x - g.x < e ? c.translate(f, 0) : g.x + g.width - h.x < e && c.translate(-f, 0),
                        h.y - g.y < e ? c.translate(0, f) : g.y + g.height - h.y < e && c.translate(0, -f)),
                        i.x = c.tx() - i.x,
                        i.y = c.ty() - i.y,
                    b && (b.x += i.x,
                        b.y += i.y),
                        i
                },
                getMoveMode: function(a, b) {
                    var c = b.s("2d.move.mode");
                    return c ? c : Dc[88] ? "x" : Dc[89] ? "y" : "xy"
                }
            });
        var Bj = function(a, b) {
                var c = this;
                c.gv = a,
                    c.s = function(a) {
                        return b.getStyle(a)
                    }
                    ,
                    c._data = b,
                    c._87I = new Rh
            }
        ;
        gh(Bj, b, {
            _6I: j,
            ms_icons: 1,
            _84o: function() {},
            dispose: function() {},
            isShadowed: function() {
                return this.gv.isSelected(this._data) && "shadow" === this.s("select.type")
            },
            _2o: function() {
                var a = this
                    , b = a.gv.isSelected(a._data);
                return !b || a.isShadowed() ? 0 : this.s("select.width")
            },
            getBodyColor: function(a) {
                var b = this._data
                    , c = this.gv.getBodyColor(b);
                return c ? c : a ? b.getStyle(a) : j;
            },
            _2Q: function(a) {
                return this.s(a)
            },
            _1Q: function(a, b, c, d) {
                var e = this.s
                    , f = e(b + ".dash.color");
                a.strokeStyle = f,
                    a.lineWidth = c,
                    a.stroke(),
                e(b + ".dash.3d") && Ve(a, f, e(b + ".dash.3d.color"), c, this.gv._zoom, e(b + ".dash.3d.accuracy")),
                    Gh(a, d)
            },
            invalidate: function() {
                this._6I = j
            },
            _79o: function() {
                var a = this;
                if (!a._6I) {
                    a.labelInfo = a.label2Info = a.noteInfo = a.note2Info = a._38o = j,
                        a._87I.clear(),
                        a._3O();
                    var b = a._data
                        , c = a.gv;
                    a._55O = c.isEditable(b) ? {
                        _42O: c.isRectEditable(b),
                        _43O: c.isPointEditable(b),
                        _56O: c.isRotationEditable(b)
                    } : j,
                        a._6I = a._81o()
                }
                return a._6I
            },
            _3O: function() {},
            getPosition: function() {
                return Pc
            },
            _68o: function(a, b) {
                a && this._87I.add(Qe(a, b))
            },
            _81o: function() {
                var a = this
                    , b = a.s;
                a._24O(Ka, "getLabel"),
                    a._24O(La, "getLabel2"),
                    a._26O(Ma, "getNote"),
                    a._26O(Na, "getNote2"),
                    a._15O(),
                a._55O && a._48O();
                var c;
                if (a._87I.each(function(a) {
                        c = Ug(c, a)
                    }),
                    c && a.isShadowed()) {
                    var d = Eg(c);
                    d.x += b("shadow.offset.x"),
                        d.y += b("shadow.offset.y"),
                        $g(d, b("shadow.blur")),
                        c = Ug(c, d)
                }
                return a._87I.clear(),
                    c
            },
            _42: function(a) {
                var b = this
                    , c = b._data
                    , d = b.gv
                    , e = b.s
                    , f = e("opacity")
                    , g = this.isShadowed();
                if (g) {
                    var h = a.shadowOffsetX
                        , i = a.shadowOffsetY
                        , k = a.shadowBlur
                        , l = a.shadowColor;
                    a.shadowOffsetX = e("shadow.offset.x"),
                        a.shadowOffsetY = e("shadow.offset.y"),
                        a.shadowBlur = e("shadow.blur"),
                        a.shadowColor = e("shadow.color")
                }
                if (f != j) {
                    var m = a.globalAlpha;
                    a.globalAlpha = f
                }
                b._80o(a),
                d.isLabelVisible(c) && (ri(a, b.labelInfo),
                    ri(a, b.label2Info)),
                d.isNoteVisible(c) && (si(a, b.noteInfo),
                    si(a, b.note2Info)),
                    b._99O(a),
                f != j && (a.globalAlpha = m),
                g && (a.shadowOffsetX = h,
                    a.shadowOffsetY = i,
                    a.shadowBlur = k,
                    a.shadowColor = l),
                b._55O && d.isEditVisible(c) && b._47O(a)
            },
            _80o: function() {},
            _47O: function() {},
            _24O: function(a, b) {
                var c = this
                    , d = c._data
                    , e = c.gv
                    , f = c.s
                    , g = e[b](d);
                if (g != j) {
                    var h = f(a + ".scale")
                        , i = f(a + ".max")
                        , k = f(a + ".position")
                        , l = c[a + "Info"] = {
                        label: g,
                        scale: h,
                        color: e[b + "Color"](d),
                        font: f(a + ".font"),
                        opacity: f(a + ".opacity"),
                        align: f(a + ".align"),
                        rotation: c.getRotation(f(a + ".rotation"), !1, k),
                        background: e[b + "Background"](d)
                    }
                        , m = Xd(l, g);
                    i > 0 && i < m.width && (l.labelWidth = m.width,
                        m.width = i),
                    1 !== h && (m.width *= h,
                        m.height *= h);
                    var n = c.getPosition(k, f(a + ".offset.x"), f(a + ".offset.y"), m, f(a + ".position.fixed"));
                    if (m.x = n.x - m.width / 2,
                            m.y = n.y - m.height / 2,
                            c._68o(l.rect = m, l.rotation),
                        1 !== h) {
                        var o = m.width / h
                            , p = m.height / h;
                        l.rect = {
                            x: n.x - o / 2,
                            y: n.y - p / 2,
                            width: o,
                            height: p
                        }
                    }
                }
            },
            _26O: function(a, b) {
                var c = this
                    , d = c.gv
                    , e = c._data
                    , f = c.s
                    , g = d[b](e);
                if (g != j) {
                    var h, i, k = f(a + ".scale"), l = c[a + "Info"] = {
                        note: g,
                        scale: k,
                        data: e,
                        view: d,
                        expanded: f(a + ".expanded"),
                        font: f(a + ".font"),
                        color: f(a + ".color"),
                        opacity: f(a + ".opacity"),
                        align: f(a + ".align"),
                        icon: f(a + ".icon"),
                        backgroundImage: f(a + ".backgroundImage"),
                        borderWidth: f(a + ".border.width"),
                        borderColor: f(a + ".border.color"),
                        background: d[b + "Background"](e)
                    }, m = c.getPosition(f(a + ".position"), f(a + ".offset.x"), f(a + ".offset.y")), n = m.x, o = m.y;
                    if (l.expanded) {
                        var p, q = f(a + ".max"), r = f(a + ".backgroundImage");
                        r ? (r = yg(r),
                            p = {
                                width: Nh(r, e),
                                height: Oh(r, e)
                            }) : p = Xd(l, g),
                            p.width += 6,
                            p.height += 2,
                        q > 0 && q < p.width && (l.labelWidth = p.width,
                            p.width = q),
                            h = p.width,
                            i = p.height + 8,
                            l.clickRect = {
                                x: n - h * k / 2,
                                y: o - i * k,
                                width: h * k,
                                height: i * k * p.height / i
                            }
                    } else {
                        var s = f(a + ".icon");
                        s ? (s = yg(s),
                            h = Nh(s, e),
                            i = Oh(s, e)) : (h = 12,
                            i = 18),
                            l.clickRect = {
                                x: n - h * k / 2,
                                y: o - i * k,
                                width: h * k,
                                height: i * k
                            }
                    }
                    l.rect = {
                        x: n - h / 2,
                        y: o - i * k / 2 - i / 2,
                        width: h,
                        height: i
                    };
                    var u = t(l.borderWidth / 2) * k;
                    c._68o({
                        x: n - h * k / 2 - u,
                        y: o - i * k - u,
                        width: h * k + 2 * u,
                        height: i * k + 2 * u
                    })
                }
            },
            _48O: function() {},
            _99O: function(a) {
                var b = this
                    , c = b._38o;
                if (c) {
                    var d = b.gv
                        , e = b._data
                        , f = c.icons;
                    for (var g in f) {
                        var h = f[g]
                            , i = c.rects[g];
                        if (i) {
                            var k = Ph(h.opacity, e, d)
                                , l = Ph(h.names, e, d)
                                , m = l ? l.length : 0
                                , n = i.rotation;
                            if (k != j) {
                                var o = a.globalAlpha;
                                a.globalAlpha *= k
                            }
                            for (var p = 0; m > p; p++) {
                                var q = l[p]
                                    , r = yg(q)
                                    , s = i[p];
                                if (n) {
                                    var t = s.x + s.width / 2
                                        , u = s.y + s.height / 2;
                                    a.save(),
                                        de(a, t, u),
                                        ee(a, n),
                                        de(a, -t, -u)
                                }
                                Ag(a, r, Ph(h.stretch, e, d), s.x, s.y, s.width, s.height, b._data, b.gv),
                                n && a.restore()
                            }
                            k != j && (a.globalAlpha = o)
                        }
                    }
                }
            }
        });
        var Cj = function(a, b) {
                yd(Cj, this, [a, b])
            }
        ;
        gh(Cj, Bj, {
            _40O: function(a, b) {
                var c = this
                    , d = c.s
                    , e = a.rect;
                (a.borderColor = c.gv.getBorderColor(c._data)) && (a.borderType = d("border.type"),
                    a.borderWidth = d("border.width"),
                    a.borderPadding = d("border.padding"),
                    b = v(b, a.borderPadding + a.borderWidth / 2)),
                (a.selectWidth = c._2o()) && (a.selectType = d("select.type"),
                    a._97o = d("select.color"),
                    a.selectPadding = d("select.padding"),
                    b = v(b, a.selectPadding + a.selectWidth / 2)),
                b > 0 && (e = Eg(e),
                    $g(e, b)),
                    c._68o(e)
            },
            _39O: function(a, b) {
                var c = b.rect;
                if (b.borderWidth > 0) {
                    var d = b.borderPadding;
                    a.strokeStyle = b.borderColor,
                        a.lineWidth = b.borderWidth,
                        Ye(a, b.borderType, {
                            x: c.x - d,
                            y: c.y - d,
                            width: c.width + 2 * d,
                            height: c.height + 2 * d
                        }),
                        a.stroke()
                }
                b.selectWidth > 0 && (d = b.selectPadding,
                    a.strokeStyle = b._97o,
                    a.lineWidth = b.selectWidth,
                    Ye(a, b.selectType, {
                        x: c.x - d,
                        y: c.y - d,
                        width: c.width + 2 * d,
                        height: c.height + 2 * d
                    }),
                    a.stroke())
            },
            _3O: function() {
                var a = this
                    , b = a.s
                    , c = a._data
                    , d = c.getStyle(ta)
                    , e = a.getBodyColor()
                    , f = a._83o = d ? {
                    shape: d,
                    _53o: a.getBodyColor("shape.background"),
                    _27Q: yg(b("shape.repeat.image"), e),
                    _54o: b("shape.border.width"),
                    _55o: b("shape.border.color"),
                    _56o: b("shape.border.3d"),
                    _57o: b("shape.border.3d.color"),
                    _58o: b("shape.border.3d.accuracy"),
                    shapeGradient: b("shape.gradient"),
                    _59o: b("shape.gradient.color"),
                    _60o: b("shape.border.pattern"),
                    _61o: b("shape.border.cap"),
                    _62o: b("shape.border.join")
                } : {
                    img: yg(c.getImage(), e),
                    bodyColor: e,
                    stretch: b("image.stretch")
                };
                J && !K || (f.rect = c.getRect(),
                    f.position = c.p(),
                    f.rotation = c.getRotation(),
                d === qa && (f._63o = b("shape.depth")),
                    a._40O(f, d ? Pe(j, f._54o / 2, f._62o) : 0))
            },
            getPosition: function(a, b, c, d) {
                var e = sf(a, this._83o.rect, d);
                return e.x += b,
                    e.y += c,
                    e
            },
            _80o: function(a) {
                var b = this
                    , c = b.s
                    , d = b.gv
                    , e = b._data
                    , f = b._83o
                    , g = f.rect
                    , h = g
                    , i = f.position
                    , j = f.rotation
                    , k = f.shape;
                if (g.width > 0 && g.height > 0) {
                    if (j && (a.save(),
                            de(a, i.x, i.y),
                            ee(a, j),
                            de(a, -i.x, -i.y),
                            h = e.getSize(),
                            h.x = i.x - h.width / 2,
                            h.y = i.y - h.height / 2),
                            b.freeDraw)
                        b.freeDraw(a, h, f);
                    else if (k) {
                        var l, m, n, o, p = f._60o, q = Fh(a, p), r = f._53o, s = f._27Q, t = f._54o, u = f._55o, v = a.lineJoin, w = a.lineCap;
                        if ("roundRect" === k ? l = c("shape.corner.radius") : "polygon" === k ? l = c("shape.polygon.side") : "arc" === k && (l = c("shape.arc.from"),
                                    m = c("shape.arc.to"),
                                    n = c("shape.arc.close"),
                                    o = c("shape.arc.oval")),
                                a.lineJoin = f._62o,
                                a.lineCap = f._61o,
                                r || s ? (s ? $e(a, s) : Ze(a, r, f.shapeGradient, f._59o, h),
                                    Ye(a, k, h, l, m, n, o),
                                    a.fill(),
                                a !== q && Ye(q, k, h, l, m, n, o)) : Ye(q, k, h, l, m, n, o),
                            t > 0 && (a.lineWidth = t,
                                a.strokeStyle = u,
                                a.stroke(),
                            f._56o && Ve(a, u, f._57o, t, d._zoom, f._58o)),
                                Gh(a, p),
                                c("shape.dash")) {
                            var x = c("shape.dash.width") || t;
                            if (x > 0) {
                                p = c("shape.dash.pattern");
                                var q = Fh(a, p, b._2Q("shape.dash.offset"));
                                q !== a && Ye(q, k, h, l, m, n, o),
                                    b._1Q(a, "shape", x, p)
                            }
                        }
                        cf(a, r, f._63o, h),
                            a.lineJoin = v,
                            a.lineCap = w
                    } else
                        Ag(a, f.img, f.stretch, h.x, h.y, h.width, h.height, e, d, f.bodyColor);
                    j && a.restore()
                }
                b._39O(a, f)
            },
            _48O: function() {
                var a, b = this, c = b._data, d = b.gv, e = b._55O, f = d.getEditPointSize() / 2 + 2;
                if (e._42O && (a = c.getRect(),
                        $g(a, f)),
                        e._56O) {
                    var g = e._98o = d.getRotationPoint(c);
                    a = Ug(a, {
                        x: g.x - f,
                        y: g.y - f,
                        width: 2 * f,
                        height: 2 * f
                    })
                }
                b._68o(a)
            },
            _47O: function(a) {
                var b = this
                    , c = b.gv
                    , d = b._55O
                    , e = b._data.getRect()
                    , f = c.getEditPointSize()
                    , g = d._98o;
                d._42O && (a.fillStyle = c.getEditPointBackground(),
                    a.strokeStyle = c.getEditPointBorderColor(),
                    a.lineWidth = 1,
                    [{
                        x: e.x,
                        y: e.y
                    }, {
                        x: e.x + e.width / 2,
                        y: e.y
                    }, {
                        x: e.x + e.width,
                        y: e.y
                    }, {
                        x: e.x,
                        y: e.y + e.height / 2
                    }, {
                        x: e.x + e.width,
                        y: e.y + e.height / 2
                    }, {
                        x: e.x,
                        y: e.y + e.height
                    }, {
                        x: e.x + e.width / 2,
                        y: e.y + e.height
                    }, {
                        x: e.x + e.width,
                        y: e.y + e.height
                    }].forEach(function(b) {
                        Xe(a, b.x - f / 2, b.y - f / 2, f, f),
                            a.stroke()
                    })),
                d._56O && (a.fillStyle = c.getEditPointBorderColor(),
                    a.strokeStyle = c.getEditPointBackground(),
                    a.lineWidth = 1,
                    a.beginPath(),
                    a.arc(g.x, g.y, f / 2, 0, E, !0),
                    a.fill(),
                    a.stroke())
            }
        });
        var Dj = function(a, b) {
                yd(Dj, this, [a, b])
            }
            , Ej = function(a, b, c, d) {
                var e = Sg(a, b);
                return c = d ? w(c, e) : ti(c, e),
                    e ? c /= e : c = 0,
                    {
                        x: a.x + (b.x - a.x) * c,
                        y: a.y + (b.y - a.y) * c
                    }
            }
        ;
        gh(Dj, Bj, {
            _3O: function() {
                var a, b = this, c = b._data, d = b.gv, e = b.s, f = e(Wa), g = c.isLooped(), h = e("edge.width"), i = e("edge.center"), k = e("edge.offset"), l = d.getBorderColor(c), n = l ? e("border.width") : 0, o = b._2o(), p = c._40I, q = c._41I, r = b._78o = p && q ? {
                    looped: g,
                    type: f,
                    width: h,
                    center: i,
                    color: b.getBodyColor("edge.color"),
                    borderColor: l,
                    borderWidth: n,
                    _97o: o ? e("select.color") : j,
                    selectWidth: o,
                    pattern: e("edge.pattern"),
                    cap: e("edge.cap"),
                    join: e("edge.join"),
                    is3d: e("edge.3d"),
                    _67o: e("edge.3d.color"),
                    _66o: e("edge.3d.accuracy")
                } : j;
                if (r) {
                    var s = m.getEdgeType(f);
                    if (s) {
                        var t = s(c, wi(b, d, c, g, f), d, b._19Q);
                        t.points && t.points.size() > 1 && (r._4O = t,
                            a = Tg(r._4O.points))
                    } else {
                        var u = oi(d, p, e("edge.source.position"), e("edge.source.offset.x"), e("edge.source.offset.y"))
                            , v = oi(d, q, e("edge.target.position"), e("edge.target.offset.x"), e("edge.target.offset.y"));
                        if (f === Ga) {
                            var w = r.points = e(Va) || Sh
                                , x = w.size();
                            if (r.segments = e("edge.segments"),
                                    !i)
                                if (k) {
                                    var y = Ej(u, x ? w.get(0) : v, k, x)
                                        , z = Ej(v, x ? w.get(x - 1) : u, k, x);
                                    u = y,
                                        v = z
                                } else {
                                    var A = ni(d, p)
                                        , B = ni(d, q)
                                        , C = Ed(u, x ? w.get(0) : v, A);
                                    C && (u = {
                                        x: C[0],
                                        y: C[1]
                                    }),
                                        C = Ed(x ? w.get(x - 1) : u, v, B),
                                    C && (v = {
                                        x: C[0],
                                        y: C[1]
                                    })
                                }
                            a = Ug(Tg(r.points), Tg(u, v))
                        } else {
                            var E = wi(b, d, c, g, f);
                            if (b._19Q || (E = -E),
                                    g)
                                u = Eg(u),
                                    u.x -= p.getWidth() / 2,
                                    r.radius = E,
                                    a = {
                                        x: u.x - E,
                                        y: u.y - E,
                                        width: 2 * E,
                                        height: 2 * E
                                    };
                            else {
                                var F = Sg(u, v)
                                    , G = ti(k, F)
                                    , y = {
                                    x: G,
                                    y: E
                                }
                                    , z = {
                                    x: F - G,
                                    y: E
                                }
                                    , I = H(v.y - u.y, v.x - u.x)
                                    , J = r.mat = new jf(I);
                                if (r.orienAngle = I,
                                        r.angle = v.x < u.x ? I + D : I,
                                        r.rect = {
                                            x: y.x,
                                            y: y.y,
                                            width: z.x - y.x,
                                            height: 0
                                        },
                                        r.origin = u,
                                        y = J.tf(y),
                                        y.x += u.x,
                                        y.y += u.y,
                                        z = J.tf(z),
                                        z.x += u.x,
                                        z.y += u.y,
                                        i) {
                                    var K = {
                                        x: F,
                                        y: 0
                                    };
                                    K = J.tf(K),
                                        K.x += u.x,
                                        K.y += u.y,
                                        a = Tg([u, y, z, K]),
                                        r.c1 = u,
                                        r.c2 = K
                                } else
                                    a = Tg(y, z);
                                u = y,
                                    v = z
                            }
                        }
                        r._69o = u,
                            r._70o = v
                    }
                    Pe(a, h / 2 + n + o, r.join),
                        b._68o(a)
                }
            },
            getRotation: function(a, b, c) {
                a = a || 0;
                var d = this._78o;
                if (d) {
                    var e, f = d.angle, g = d.points, h = d._4O;
                    if (f != j)
                        return b ? d.orienAngle + a : f + a;
                    if (h) {
                        var i = h.points;
                        return e = i.size(),
                            Yh[c] ? e && 0 === e % 2 ? ui(i.get(e / 2 - 1), i.get(e / 2), b, a) : a : Xh[c] ? ui(i.get(0), i.get(1), b, a) : ui(i.get(e - 2), i.get(e - 1), b, a)
                    }
                    if (g)
                        return e = g.size(),
                            Yh[c] ? e && 0 === e % 2 ? ui(g.get(e / 2 - 1), g.get(e / 2), b, a) : a : Xh[c] ? ui(d._69o, e ? g.get(0) : d._70o, b, a) : ui(e ? g.get(e - 1) : d._69o, d._70o, b, a)
                }
                return a
            },
            getPosition: function(a, b, c, d, e) {
                var f = this._78o;
                if (f) {
                    var g, h = f.type, i = f.points, j = f._4O, k = f._69o, l = f._70o;
                    if (!h)
                        return f.looped ? {
                            x: k.x - f.radius + b,
                            y: k.y + c
                        } : (e && k && l && (k.x > l.x || k.x === l.x && k.y > l.y) && (a = rf[a],
                            c = -c),
                            g = sf(a, f.rect, d),
                            g.x += b,
                            g.y += c,
                            g = f.mat.tf(g),
                            g.x += f.origin.x,
                            g.y += f.origin.y,
                            g);
                    if (i) {
                        var g, m = i.size();
                        if (Yh[a]) {
                            if (m) {
                                var n = m % 2;
                                if (0 === n)
                                    return vi(i.get(m / 2 - 1), i.get(m / 2), a, b, c, d, e);
                                g = i.get((m - n) / 2)
                            } else
                                g = {
                                    x: (k.x + l.x) / 2,
                                    y: (k.y + l.y) / 2
                                };
                            return g = sf(a, {
                                x: g.x,
                                y: g.y,
                                width: 0,
                                height: 0
                            }, d),
                                g.x += b,
                                g.y += c,
                                g
                        }
                        return Xh[a] ? vi(k, m ? i.get(0) : l, a, b, c, d, e) : vi(m ? i.get(m - 1) : k, l, a, b, c, d, e)
                    }
                    if (j) {
                        var o = j.points
                            , m = o.size();
                        if (Yh[a]) {
                            var n = m % 2;
                            return 0 === n ? vi(o.get(m / 2 - 1), o.get(m / 2), a, b, c, d, e) : (g = o.get((m - n) / 2),
                                g = sf(a, {
                                    x: g.x,
                                    y: g.y,
                                    width: 0,
                                    height: 0
                                }, d),
                                g.x += b,
                                g.y += c,
                                g)
                        }
                        return Xh[a] ? vi(o.get(0), o.get(1), a, b, c, d, e) : vi(o.get(m - 2), o.get(m - 1), a, b, c, d, e)
                    }
                }
                return Pc
            },
            _42: function(a) {
                this._78o && Dj.superClass._42.call(this, a)
            },
            drawPath: function(a, b) {
                a.beginPath();
                var c = b.type
                    , d = b.points
                    , e = b.segments
                    , f = b._4O;
                if (!c || d) {
                    var g = b._69o
                        , h = g.x
                        , i = g.y
                        , j = b._70o
                        , k = j.x
                        , l = j.y;
                    if (c)
                        if (e) {
                            var m = new Rh({
                                x: h,
                                y: i
                            });
                            m.addAll(d),
                                m.add({
                                    x: k,
                                    y: l
                                }),
                                Te(a, m, e)
                        } else
                            a.moveTo(h, i),
                                d.each(function(b) {
                                    a.lineTo(b.x, b.y)
                                }),
                                a.lineTo(k, l);
                    else
                        b.looped ? a.arc(h, i, b.radius, 0, E, !0) : b.center ? (a.moveTo(b.c1.x, b.c1.y),
                            a.lineTo(h, i),
                            a.lineTo(k, l),
                            a.lineTo(b.c2.x, b.c2.y)) : (a.moveTo(h, i),
                            a.lineTo(k, l))
                } else
                    f && Te(a, f.points, f.segments)
            },
            _80o: function(a) {
                var b = this
                    , c = b.s
                    , d = b._78o
                    , e = d.width
                    , f = d.selectWidth
                    , g = d.borderWidth
                    , h = d.color
                    , i = a.lineJoin
                    , j = a.lineCap
                    , k = d.pattern;
                if (a.lineJoin = d.join,
                        a.lineCap = d.cap,
                        b.drawPath(Fh(a, k), d),
                    f && (a.strokeStyle = d._97o,
                        a.lineWidth = e + 2 * (g + f),
                        a.stroke()),
                    g && (a.strokeStyle = d.borderColor,
                        a.lineWidth = e + 2 * g,
                        a.stroke()),
                        a.strokeStyle = h,
                        a.lineWidth = e,
                        a.stroke(),
                    d.is3d && Ve(a, h, d._67o, e, b.gv._zoom, d._66o),
                        Gh(a, k),
                        c("edge.dash")) {
                    k = c("edge.dash.pattern");
                    var l = Fh(a, k, b._2Q("edge.dash.offset"));
                    l !== a && b.drawPath(l, d),
                        b._1Q(a, "edge", c("edge.dash.width") || e, k)
                }
                a.lineJoin = i,
                    a.lineCap = j
            },
            _48O: function() {
                var a = this
                    , b = a._78o;
                if (a._55O._43O && b && b.points) {
                    var c = Tg(b.points);
                    c && ($g(c, a.gv.getEditPointSize() / 2 + 2),
                        a._68o(c))
                }
            },
            _47O: function(a) {
                var b = this
                    , c = b.gv
                    , d = b._78o;
                if (b._55O._43O && d && d.points) {
                    var e = c.getEditPointSize() / 2;
                    a.fillStyle = c.getEditPointBackground(),
                        a.strokeStyle = c.getEditPointBorderColor(),
                        a.lineWidth = 1,
                        d.points.each(function(b) {
                            a.beginPath(),
                                a.arc(b.x, b.y, e, 0, E, !0),
                                a.fill(),
                                a.stroke()
                        })
                }
            },
            _71o: function(a, b) {
                var c = this
                    , d = c._data;
                if (c._19Q = !0,
                        !d.getEdgeGroup())
                    return a ? d.s("edge.gap") : 0;
                var e, f = 0, g = 0, h = 0;
                if (d.getEdgeGroup().getSiblings().each(function(a) {
                        a.each(function(a) {
                            if (c.gv.isVisible(a) && a.s(Wa) == b) {
                                var i = a.s("edge.gap");
                                e ? (g += h / 2 + i / 2,
                                    h = i) : (e = a,
                                    h = i),
                                a === d && (f = g)
                            }
                        })
                    }),
                        a)
                    return g - f + h;
                var i = f - g / 2;
                return e && d._40I !== e._40I && (c._19Q = !1),
                    i
            }
        });
        var Fj = function(a, b) {
                yd(Fj, this, [a, b])
            }
        ;
        gh(Fj, Cj, {
            _3O: function() {
                var a, b, c = this, d = c.s, e = c._data, f = c.gv;
                if (c._88I = j,
                    e.isExpanded() && e.eachChild(function(c) {
                        var d = f.getBoundsForGroup(c);
                        d && (b || (b = []),
                            b.push(d),
                            a = Ug(a, d))
                    }),
                        a) {
                    var g = f.getLabel(e)
                        , h = d("group.type");
                    a = xi(h, b, a),
                        hi(a, e, "group.padding", 1);
                    var i = c._88I = {
                        type: h,
                        rect: a,
                        _64o: a
                    };
                    if (!h && g != j) {
                        var k, l = c.labelInfo = {
                            label: g,
                            color: d("group.title.color"),
                            font: d("group.title.font")
                        }, m = Xd(l, g), n = m.width, o = m.height, p = d("group.title.align");
                        n > a.width && (a.width = n),
                            l.rect = {
                                y: a.y - o,
                                width: m.width,
                                height: o
                            },
                            k = p === ba ? a.x : p === ca ? a.x + a.width - n : a.x + a.width / 2 - n / 2,
                            l.rect.x = k,
                            i.titleRect = {
                                x: a.x,
                                y: a.y - o,
                                width: a.width,
                                height: o + 1
                            },
                            i.rect = {
                                x: a.x,
                                y: a.y - o,
                                width: a.width,
                                height: a.height + o
                            }
                    }
                    c._40O(i, d("group.border.width") / 2)
                } else
                    Fj.superClass._3O.call(c)
            },
            getPosition: function(a, b, c, d) {
                var e = this._88I;
                if (e) {
                    var f = sf(a, e.rect, d);
                    return f.x += b,
                        f.y += c,
                        f
                }
                return Fj.superClass.getPosition.apply(this, arguments)
            },
            _24O: function(a, b) {
                var c = this._88I;
                (!c || c.type || "label2" === a) && Fj.superClass._24O.call(this, a, b)
            },
            _80o: function(a) {
                var b = this
                    , c = b._88I;
                if (c) {
                    var d = b._data
                        , e = b.s
                        , f = b.gv
                        , g = c.type
                        , h = c.rect
                        , i = c._64o
                        , j = c.titleRect
                        , k = b.getBodyColor()
                        , l = yg(e("group.image"), k)
                        , m = e("group.image.stretch")
                        , n = b.getBodyColor("group.background")
                        , o = yg(e("group.repeat.image"), k)
                        , p = e("group.gradient")
                        , q = e("group.gradient.color")
                        , r = e("group.depth");
                    if (g) {
                        var s = e("group.border.pattern")
                            , t = e("group.border.width")
                            , u = a.lineJoin
                            , v = a.lineCap;
                        if (a.lineJoin = e("group.border.join"),
                                a.lineCap = e("group.border.cap"),
                                l) {
                            if (a.save(),
                                    Ye(a, g, h),
                                    a.clip(),
                                    Ag(a, l, m, h.x, h.y, h.width, h.height, d, f, k),
                                    a.restore(),
                                t > 0) {
                                var w = Fh(a, s);
                                Ye(w, g, h),
                                    a.lineWidth = t,
                                    a.strokeStyle = e("group.border.color"),
                                    a.stroke(),
                                    Gh(a, s)
                            }
                        } else {
                            var w = Fh(a, s);
                            n || o ? (o ? $e(a, o) : Ze(a, n, p, q, h),
                                Ye(a, g, h),
                                a.fill(),
                            a !== w && Ye(w, g, h)) : Ye(w, g, h),
                            t > 0 && (a.lineWidth = t,
                                a.strokeStyle = e("group.border.color"),
                                a.stroke()),
                                Gh(a, s),
                            g === qa && cf(a, n, r, h)
                        }
                        a.lineJoin = u,
                            a.lineCap = v
                    } else if (l ? Ag(a, l, m, i.x, i.y, i.width, i.height, d, f, b.getBodyColor()) : (n || o) && (o ? $e(a, o) : Ze(a, n, p, q, i),
                                Ye(a, qa, i),
                                a.fill(),
                                cf(a, n, r, i)),
                            j) {
                        var x = e("group.title.background");
                        Xe(a, j.x, j.y, j.width, j.height, x),
                            cf(a, x, r, j)
                    }
                    b._39O(a, c)
                } else
                    Fj.superClass._80o.call(b, a)
            }
        });
        var Gj = function(a, b) {
                yd(Gj, this, [a, b])
            }
        ;
        gh(Gj, Cj, {
            _3O: function() {
                var a = this
                    , b = a._data
                    , c = a.s
                    , d = a.gv
                    , e = b.getPoints()
                    , f = d.getBorderColor(b)
                    , g = f ? c("border.width") : 0
                    , h = a._2o()
                    , i = c("shape.border.width")
                    , k = b.getRect()
                    , l = d.getBodyColor(b)
                    , m = a._99o = e.isEmpty() ? j : {
                    rect: k,
                    rotation: b.getRotation(),
                    position: b.p(),
                    points: e,
                    segments: b.getSegments(),
                    bodyColor: l,
                    borderColor: f,
                    borderWidth: g,
                    _94o: c("shape.border.3d"),
                    _95o: c("shape.border.3d.color"),
                    _96o: c("shape.border.3d.accuracy"),
                    _97o: h ? c("select.color") : j,
                    selectWidth: h,
                    _53o: c("shape.background"),
                    _27Q: yg(c("shape.repeat.image"), l),
                    _54o: i,
                    _55o: c("shape.border.color"),
                    shapeGradient: c("shape.gradient"),
                    _59o: c("shape.gradient.color"),
                    _60o: c("shape.border.pattern"),
                    _61o: c("shape.border.cap"),
                    _62o: c("shape.border.join")
                };
                if (m) {
                    var n = i / 2 + g + h;
                    n && (k = Eg(k),
                        Pe(k, n, m._62o)),
                        a._68o(k)
                }
            },
            getPosition: function(a, b, c, d) {
                var e = this._99o;
                if (e) {
                    var f = sf(a, e.rect, d);
                    return f.x += b,
                        f.y += c,
                        f
                }
                return Pc
            },
            _42: function(a) {
                this._99o && Gj.superClass._42.call(this, a)
            },
            _80o: function(a) {
                var b, c = this, d = c.s, e = c._99o, f = e.position, g = e.rotation, h = e.bodyColor, i = e.borderWidth, j = e.selectWidth, k = e._53o, l = e._27Q, m = e._54o, n = e.points, o = e.segments, p = c._data.isClosePath();
                g && (a.save(),
                    de(a, f.x, f.y),
                    ee(a, g),
                    de(a, -f.x, -f.y));
                var q = e._60o
                    , r = Fh(a, q)
                    , s = a.lineJoin
                    , t = a.lineCap;
                if (a.lineJoin = e._62o,
                        a.lineCap = e._61o,
                        k || l ? (l ? $e(a, l) : (b = h ? h : k,
                            Ze(a, b, e.shapeGradient, e._59o, e.rect)),
                            Te(a, n, o, p),
                            a.fill(),
                        r !== a && Te(r, n, o, p)) : Te(r, n, o, p),
                    j && (a.strokeStyle = e._97o,
                        a.lineWidth = m + 2 * (i + j),
                        a.stroke()),
                    i && (a.strokeStyle = e.borderColor,
                        a.lineWidth = m + 2 * i,
                        a.stroke()),
                    m && (b = e._55o,
                    !k && h && (b = h),
                        a.strokeStyle = b,
                        a.lineWidth = m,
                        a.stroke(),
                    e._94o && Ve(a, b, e._95o, m, c.gv._zoom, e._96o)),
                        Gh(a, q),
                        d("shape.dash")) {
                    var u = d("shape.dash.width") || m;
                    if (u > 0) {
                        q = d("shape.dash.pattern");
                        var r = Fh(a, q, c._2Q("shape.dash.offset"));
                        r !== a && Te(r, n, o, p),
                            c._1Q(a, "shape", u, q)
                    }
                }
                a.lineJoin = s,
                    a.lineCap = t,
                g && a.restore()
            },
            _48O: function() {
                var a = this;
                if (Gj.superClass._48O.call(a),
                        a._55O._43O) {
                    var b = a._data.getRect();
                    $g(b, a.gv.getEditPointSize() / 2 + 2),
                        a._68o(b)
                }
            },
            _47O: function(a) {
                var b = this;
                if (Gj.superClass._47O.call(b, a),
                        b._55O._43O) {
                    var c = b.gv
                        , d = c.getEditPointSize() / 2;
                    a.fillStyle = c.getEditPointBackground(),
                        a.strokeStyle = c.getEditPointBorderColor(),
                        a.lineWidth = 1,
                        b._data.getPoints().each(function(b) {
                            a.beginPath(),
                                a.arc(b.x, b.y, d, 0, E, !0),
                                a.fill(),
                                a.stroke()
                        })
                }
            }
        });
        var Hj = function(a, b) {
                yd(Hj, this, [a, b])
            }
        ;
        gh(Hj, Gj, {
            getRotation: function(a, b, c) {
                a = a || 0;
                var d = this._data.getPoints()
                    , e = d.size();
                return e > 1 ? Yh[c] ? e && 0 === e % 2 ? ui(d.get(e / 2 - 1), d.get(e / 2), b, a) : a : Xh[c] ? ui(d.get(0), d.get(1), b, a) : ui(d.get(e - 2), d.get(e - 1), b, a) : a
            },
            getPosition: function(a, b, c, d, e) {
                var f = this._data.getPoints()
                    , g = f.size();
                if (g > 1) {
                    if (Yh[a]) {
                        var h = g % 2;
                        if (0 === h)
                            return vi(f.get(g / 2 - 1), f.get(g / 2), a, b, c, d, e);
                        var i = f.get((g - h) / 2)
                            , j = {
                            x: i.x,
                            y: i.y,
                            width: 0,
                            height: 0
                        };
                        return i = sf(a, j, d),
                            i.x += b,
                            i.y += c,
                            i
                    }
                    return Xh[a] ? vi(f.get(0), f.get(1), a, b, c, d, e) : vi(f.get(g - 2), f.get(g - 1), a, b, c, d, e)
                }
                return Pc
            }
        });
        var Ij = function(a, b) {
                yd(Ij, this, [a, b])
            }
        ;
        gh(Ij, Cj, {
            _3O: function() {
                var a = this;
                Ij.superClass._3O.call(a);
                var b = a.s
                    , c = a._83o;
                a._82o = c.img || c.shape ? j : {
                    background: a.getBodyColor("grid.background"),
                    depth: b("grid.depth"),
                    rect: c.rect,
                    _88o: b("grid.cell.depth"),
                    cellBorderColor: b("grid.cell.border.color"),
                    _89o: b("grid.row.count"),
                    _90o: b("grid.column.count"),
                    block: b("grid.block"),
                    _91o: b("grid.block.color"),
                    _92o: b("grid.block.padding"),
                    _93o: b("grid.block.width")
                }
            },
            _80o: function(a) {
                var b = this
                    , c = b._82o;
                if (!c)
                    return void Ij.superClass._80o.call(b, a);
                var d, e, f = b._data, g = c.background, h = c.rect, i = c.block, j = c._91o, k = c._92o, l = c._93o, m = c._88o, n = c.cellBorderColor, o = c._89o, p = c._90o;
                if (g)
                    if (Xe(a, h.x, h.y, h.width, h.height, g),
                            cf(a, g, c.depth, h),
                            m)
                        for (d = 0; o > d; d++)
                            for (e = 0; p > e; e++)
                                h = f.getCellRect(d, e),
                                h && cf(a, g, m, h);
                    else if (n) {
                        for (a.beginPath(),
                                 d = 0; o > d; d++)
                            for (e = 0; p > e; e++)
                                h = f.getCellRect(d, e),
                                h && a.rect(h.x, h.y, h.width, h.height);
                        a.strokeStyle = n,
                            a.lineWidth = 1,
                            a.stroke()
                    }
                if ("h" === i)
                    for (d = 0; o > d; d++)
                        h = Ug(f.getCellRect(d, 0), f.getCellRect(d, p - 1)),
                            $g(h, k),
                            bf(a, j, h.x, h.y, h.width, h.height, l);
                else if ("v" === i)
                    for (e = 0; p > e; e++)
                        h = Ug(f.getCellRect(0, e), f.getCellRect(o - 1, e)),
                            $g(h, k),
                            bf(a, j, h.x, h.y, h.width, h.height, l);
                b._39O(a, b._83o)
            }
        });
        var Jj = yi.Interactor = function(a) {
                this.gv = this._graphView = a
            }
        ;
        zi("Interactor", b, {
            ms_listener: 1,
            getView: function() {
                return this.gv.getView()
            },
            setUp: function() {
                this.addListeners()
            },
            tearDown: function() {
                this.removeListeners(),
                    this.clear()
            },
            clear: function() {},
            fi: function(a) {
                this.gv.fi(a)
            },
            setCursor: function(a) {
                X || (this.getView().style.cursor = a)
            },
            startDragging: function(a) {
                var b = this;
                b._lastClientPoint = Qg(a),
                    b._lastLogicalPoint = b.gv.lp(a),
                    ah(b, a)
            },
            clearDragging: function() {
                var a = this;
                a._lastClientPoint = a._lastLogicalPoint = a._logicalPoint = j
            },
            autoScroll: function(a) {
                return this.gv.autoScroll(a, this._lastClientPoint)
            }
        });
        var Kj = yi.DefaultInteractor = function(a) {
                yd(Kj, this, [a])
            }
        ;
        zi("DefaultInteractor", Jj, {
            handle_mousedown: function(a) {
                wg(a);
                var b = this
                    , c = b.gv
                    , d = c.getDataAt(a);
                c.setFocus(a) && !c._editing && (Ng(a) ? c.handleDoubleClick(a, d) : c.handleClick(a, d),
                c.isPannable() && !d && Lg(a) && !Pg(a) && (b._tx = c.tx(),
                    b._ty = c.ty(),
                    b.startDragging(a)))
            },
            handleWindowMouseUp: function(a) {
                var b = this
                    , c = b.gv;
                c._panning && (delete c._panning,
                    c.onPanEnded(),
                    b.fi({
                        kind: "endPan",
                        event: a
                    })),
                    delete b._tx,
                    delete b._ty,
                    b.clearDragging()
            },
            handle_mousemove: function(a) {
                var b = this
                    , c = b.gv;
                b._hoverTimer && (P(b._hoverTimer),
                    delete b._hoverTimer),
                    b._hoverTimer = O(function() {
                        b.fi({
                            kind: "hover",
                            event: a
                        }),
                            P(b._hoverTimer),
                            delete b._hoverTimer
                    }, c.getHoverDelay() || 800)
            },
            handle_touchmove: function(a) {
                this.handle_mousemove(a)
            },
            handleWindowMouseMove: function(a) {
                var b = this
                    , c = b.gv
                    , d = b._lastClientPoint;
                b.fi({
                    kind: c._panning ? "betweenPan" : "beginPan",
                    event: a
                }),
                    c._panning = 1,
                    c.setTranslate(b._tx + a.clientX - d.x, b._ty + a.clientY - d.y)
            },
            handle_mousewheel: function(a) {
                this.gv.handleScroll(a, a.wheelDelta)
            },
            handle_DOMMouseScroll: function(a) {
                2 === a.axis && this.gv.handleScroll(a, -a.detail)
            },
            handle_keydown: function(a) {
                this.gv.handleKeyDown(a)
            }
        });
        var Lj = yi.SelectInteractor = function(a) {
                yd(Lj, this, [a])
            }
        ;
        zi("SelectInteractor", Jj, {
            _42: function() {
                var a = this
                    , b = a.gv
                    , c = b.getZoom()
                    , d = a.mark
                    , e = a.div;
                e || (e = a.div = Rd(),
                    Wd(a.getView(), e));
                var f = {};
                f.x = d.x * c + b.tx(),
                    f.y = d.y * c + b.ty(),
                    f.width = d.width * c,
                    f.height = d.height * c,
                    he(e, f),
                    this.intersects() ? (e.style.border = "",
                        e.style.background = b.getRectSelectBackground()) : (e.style.background = "",
                        e.style.border = "1px solid " + b.getRectSelectBorderColor())
            },
            handle_mousedown: function(a) {
                var b = this
                    , c = b.gv;
                if (b._57I = j,
                        !c._editing) {
                    var d = c.getDataAt(a)
                        , e = c.sm();
                    d ? Pg(a) ? e.co(d) ? e.rs(d) : e.as(d) : e.co(d) || e.ss(d) : Pg(a) || !c.isPannable() ? Lg(a) && (Pg(a) || e.cs(),
                        c.isRectSelectable() && (b.startDragging(a),
                            c._77O = 1)) : b._57I = Qg(a)
                }
            },
            handle_mouseup: function(a) {
                var b = this
                    , c = b._57I;
                c && (Sg(c, Qg(a)) <= 1 && b.gv.sm().cs(),
                    b._57I = j)
            },
            handleWindowMouseUp: function(a) {
                this.clear(a)
            },
            handleWindowMouseMove: function(a) {
                var b = this
                    , c = b.gv;
                b._logicalPoint = c.lp(a),
                    b.mark ? (b.fi({
                        kind: "betweenRectSelect",
                        event: a
                    }),
                        b.autoScroll(a),
                        b.redraw()) : b.fi({
                        kind: "beginRectSelect",
                        event: a
                    }),
                    b.mark = Tg(b._lastLogicalPoint, b._logicalPoint),
                    b.redraw()
            },
            intersects: function() {
                var a = this
                    , b = a._lastLogicalPoint
                    , c = a._logicalPoint;
                return b.x > c.x || b.y > c.y
            },
            clear: function(a) {
                var b = this
                    , c = b.gv
                    , d = b.mark;
                if (b._57I = j,
                        b._lastLogicalPoint) {
                    if (d) {
                        if (0 !== d.width && 0 !== d.height) {
                            var e = c.getDatasInRect(d, b.intersects());
                            if (!e.isEmpty()) {
                                var f = c.sm()
                                    , g = f.toSelection();
                                e.each(function(a) {
                                    f.co(a) ? g.remove(a) : g.add(a)
                                }),
                                    f.ss(g)
                            }
                        }
                        bh(b.div),
                            delete b.div,
                            delete b.mark,
                            b.redraw(),
                            b.fi({
                                kind: "endRectSelect",
                                event: a
                            }),
                            c.onRectSelectEnded()
                    }
                    b.clearDragging(),
                        delete c._77O
                }
            },
            redraw: function() {
                var a = this;
                a._draw || (a._draw = 1,
                    O(function() {
                        a.mark && a._42(),
                            delete a._draw
                    }, 16))
            }
        });
        var Mj = yi.MoveInteractor = function(a) {
                yd(Mj, this, [a])
            }
        ;
        zi("MoveInteractor", Jj, {
            handle_mousedown: function(a) {
                var b = this
                    , c = b.gv;
                if (Lg(a) && !c._editing) {
                    var d = c.getSelectedDataAt(a);
                    d ? (b._data = d,
                    c.handleMouseDown && c.handleMouseDown(a, d),
                        b.startDragging(a),
                    c.isMovable(d) && (c._moving = 1)) : c._focusData = j
                }
            },
            handleWindowMouseUp: function(a) {
                var b = this
                    , c = b.gv;
                c.handleMouseUp && c.handleMouseUp(a, b._data),
                    b.clear(a)
            },
            handleWindowMouseMove: function(a) {
                var b = this
                    , c = b.gv
                    , d = b._data
                    , e = c.getDataModel()
                    , f = e.getHistoryManager();
                if ((!c._93O || !c._93O(a, d)) && c._moving) {
                    var g = b._logicalPoint ? "betweenMove" : "beginMove"
                        , h = {
                        kind: g,
                        event: a
                    }
                        , i = b._logicalPoint = c.lp(a);
                    f && "beginMove" === g && f.beginInteraction();
                    var j = i.x - b._lastLogicalPoint.x
                        , k = i.y - b._lastLogicalPoint.y
                        , l = c.getMoveMode(a, d);
                    l && ("x" === l ? k = 0 : "y" === l ? j = 0 : "xy" !== l && (j = k = 0)),
                        c.moveSelection(j, k),
                        b._lastLogicalPoint = i,
                        b.autoScroll(a),
                        b.fi(h)
                }
            },
            clear: function(a) {
                var b = this
                    , c = b.gv
                    , d = c.getDataModel()
                    , e = d.getHistoryManager();
                b._lastLogicalPoint && (b._lastLogicalPoint = b._data = c._moving = j,
                b._logicalPoint && (b.fi({
                    kind: "endMove",
                    event: a
                }),
                    c.onMoveEnded(),
                e && e.endInteraction()),
                    b.clearDragging())
            }
        });
        var Nj = yi.EditInteractor = function(a) {
                yd(Nj, this, [a])
            }
        ;
        zi("EditInteractor", Jj, {
            ms_edit: 1,
            setUp: function() {
                var a = this;
                Nj.superClass.setUp.call(a),
                X || a.gv.setEditInteractor(a)
            },
            tearDown: function() {
                Nj.superClass.tearDown.call(this),
                X || this.gv.setEditInteractor(j)
            },
            clear: function() {
                var a = this
                    , b = a.gv;
                b._editing && (b._editing = a._77I = a._node = a._edge = a._shape = a._rect = a._89I = a._index = j,
                    a.clearDragging(),
                    a.setCursor(Y))
            },
            handle_mousedown: function(a) {
                var b = this
                    , c = b.gv.dm()
                    , d = c.getHistoryManager()
                    , e = b._index
                    , f = b._node
                    , g = b._shape
                    , h = b._edge
                    , i = b._77I
                    , j = b._89I;
                Lg(a) && b.gv._editing && (f && j ? (b._rect = f.getRect(),
                    b.startDragging(a),
                d && d.beginInteraction(),
                    b.fi({
                        kind: "beginEditRect",
                        event: a,
                        data: f,
                        direction: j
                    })) : g && e >= 0 ? (b.startDragging(a),
                d && d.beginInteraction(),
                    b.fi({
                        kind: "beginEditPoint",
                        event: a,
                        data: g,
                        index: e
                    })) : h && e >= 0 ? (b.startDragging(a),
                d && d.beginInteraction(),
                    b.fi({
                        kind: "beginEditPoint",
                        event: a,
                        data: h,
                        index: e
                    })) : i && (b.startDragging(a),
                    d && d.beginInteraction(),
                        b.fi({
                            kind: "beginEditRotation",
                            event: a,
                            data: i
                        })))
            },
            handleWindowMouseUp: function(a) {
                this._46O(a),
                    this.clear()
            },
            handleWindowMouseMove: function(a) {
                this._78I(a)
            },
            handle_mousemove: function(a) {
                if (!ke) {
                    var b = this
                        , c = b.gv;
                    b._79I(a, c.getSelectedDataAt(a)) ? c._editing = 1 : b.clear()
                }
            }
        });
        var Oj = yi.TouchInteractor = function(a, b) {
                b = b || {},
                b.selectable === c && (b.selectable = !0),
                b.movable === c && (b.movable = !0),
                b.pannable === c && (b.pannable = !0),
                b.pinchable === c && (b.pinchable = !0),
                b.editable === c && (b.editable = !0),
                    this.params = b,
                    yd(Oj, this, [a])
            }
        ;
        zi("TouchInteractor", Jj, {
            ms_edit: 1,
            setUp: function() {
                var a = this;
                Oj.superClass.setUp.call(a),
                X && a.params.editable && a.gv.setEditInteractor(a)
            },
            tearDown: function() {
                var a = this;
                Oj.superClass.tearDown.call(a),
                X && a.params.editable && a.gv.setEditInteractor(j)
            },
            clear: function(a) {
                var b = this
                    , c = b.gv
                    , d = c.dm().getHistoryManager();
                c._moving && (b.fi({
                    kind: "endMove",
                    event: a
                }),
                    delete c._moving,
                    c.onMoveEnded(),
                d && d.endInteraction()),
                c._panning && (b.fi({
                    kind: "endPan",
                    event: a
                }),
                    delete c._panning,
                    c.onPanEnded()),
                c._pinching && (b.fi({
                    kind: "endPinch",
                    event: a
                }),
                    delete c._pinching,
                    c.onPinchEnded()),
                c._editing && (b._46O(a),
                    b._77I = b._node = b._edge = b._shape = b._rect = b._89I = b._index = c._editing = j),
                    b._moving = b._panning = b._pinching = b._editing = b._57I = b._data = b._beginHistory = j,
                    b.clearDragging()
            },
            handle_touchstart: function(a) {
                var b = this;
                if (!b.gv._editing) {
                    wg(a),
                        b._57I = j;
                    var c = b.params
                        , d = b.gv
                        , e = d.sm()
                        , f = d.getDataAt(a)
                        , g = Mg(a);
                    if (1 === g)
                        Ng(a) ? d.handleDoubleClick(a, f) : (d.handleClick(a, f),
                        f && (d.handleMouseDown && d.handleMouseDown(a, f),
                            b._data = f)),
                        c.selectable || (f = j),
                            f ? (e.co(f) || e.ss(f),
                                c.editable && d.isEditable(f) && b._79I(a, f, !0) ? (b._editing = 1,
                                    b.startDragging(a)) : c.movable && d.isMovable(f) && (b._moving = 1,
                                        b.startDragging(a))) : (b._57I = Qg(a),
                            c.pannable && d.isPannable() && (b._panning = 1,
                                b.startDragging(a),
                                b._translate = {
                                    x: d.tx(),
                                    y: d.ty()
                                }));
                    else if (c.pinchable && 2 === g) {
                        b._pinching = 1,
                            b.startDragging(a);
                        var h = d.getView()
                            , i = d.getZoom()
                            , k = h.getBoundingClientRect()
                            , l = a.touches[0]
                            , m = a.touches[1]
                            , n = {
                            x: (l.clientX + m.clientX) / 2 - k.left,
                            y: (l.clientY + m.clientY) / 2 - k.top
                        };
                        n.x -= d.tx(),
                            n.y -= d.ty(),
                            n.x /= i,
                            n.y /= i,
                            b._p = n,
                            b._d = lf(a)
                    }
                }
            },
            handle_touchend: function(a) {
                var b = this
                    , c = b.gv
                    , d = b._57I
                    , e = b._data;
                d && (Sg(d, Qg(a)) <= 1 && c.sm().cs(),
                    b._57I = j),
                e && c.handleMouseUp && c.handleMouseUp(a, e)
            },
            handleWindowTouchEnd: function(a) {
                this.clear(a)
            },
            handleWindowTouchMove: function(a) {
                var b = this
                    , c = b.gv
                    , d = c.dm().getHistoryManager()
                    , e = Mg(a);
                if (1 === e) {
                    if (b._editing && (d && !b._beginHistory && (b._beginHistory = 1,
                            d.beginInteraction()),
                            c._editing = 1,
                            b._78I(a)),
                            b._moving)
                        d && !b._beginHistory && (b._beginHistory = 1,
                            d.beginInteraction()),
                            b.handleMove(a);
                    else if (b._panning) {
                        var f = Qg(a);
                        c.setTranslate(b._translate.x + f.x - b._lastClientPoint.x, b._translate.y + f.y - b._lastClientPoint.y),
                            b.fi({
                                kind: c._panning ? "betweenPan" : "beginPan",
                                event: a
                            }),
                            c._panning = 1
                    }
                } else if (2 === e && b._pinching) {
                    var g = lf(a);
                    c.handlePinch(b._p, g, b._d),
                        b._d = g,
                        b.fi({
                            kind: c._pinching ? "betweenPinch" : "beginPinch",
                            event: a
                        }),
                        c._pinching = 1
                }
            },
            handleMove: function(a) {
                var b = this
                    , c = b.gv
                    , d = c.lp(a);
                c._93O && c._93O(a, b._data) || (c.moveSelection(d.x - b._lastLogicalPoint.x, d.y - b._lastLogicalPoint.y),
                    b._lastLogicalPoint = d,
                    b.autoScroll(a),
                    b.fi({
                        kind: c._moving ? "betweenMove" : "beginMove",
                        event: a
                    }),
                    c._moving = 1)
            }
        });
        var Pj = "directional"
            , Qj = "point"
            , Rj = "spot"
            , Sj = "light.color";
        vd(m, {
            graph3dViewAttributes: j,
            graph3dViewFirstPersonMode: !1,
            graph3dViewMouseRoamable: !0,
            graph3dViewMoveStep: 15,
            graph3dViewRotateStep: D / 60,
            graph3dViewPannable: !0,
            graph3dViewRotatable: !0,
            graph3dViewWalkable: !0,
            graph3dViewResettable: !0,
            graph3dViewZoomable: !0,
            graph3dViewRectSelectable: !0,
            graph3dViewRectSelectBackground: vf,
            graph3dViewGridVisible: !1,
            graph3dViewGridSize: 50,
            graph3dViewGridGap: 50,
            graph3dViewGridColor: [.4, .75, .85, 1],
            graph3dViewOriginAxisVisible: !1,
            graph3dViewCenterAxisVisible: !1,
            graph3dViewAxisXColor: [1, 0, 0, 1],
            graph3dViewAxisYColor: [0, 1, 0, 1],
            graph3dViewAxisZColor: [0, 0, 1, 1],
            graph3dViewEditSizeColor: [1, 1, 0, 1],
            graph3dViewOrtho: !1,
            graph3dViewOrthoWidth: 2e3,
            graph3dViewFovy: D / 4,
            graph3dViewNear: 10,
            graph3dViewFar: 1e4,
            graph3dViewEye: [0, 300, 1e3],
            graph3dViewCenter: [0, 0, 0],
            graph3dViewUp: [0, 1, -1e-7],
            graph3dViewHeadlightRange: 0,
            graph3dViewHeadlightColor: [1, 1, 1, 1],
            graph3dViewHeadlightIntensity: 1,
            graph3dViewHeadlightDisabled: !1,
            graph3dViewFogDisabled: !0,
            graph3dViewFogColor: "white",
            graph3dViewFogNear: 1,
            graph3dViewFogFar: 2e3,
            graph3dViewDashDisabled: !0,
            graph3dViewBatchBlendDisabled: !0,
            graph3dViewBatchBrightnessDisabled: !0,
            graph3dViewBatchColorDisabled: !1,
            setShape3dModel: function(a, b) {
                Bc[a] = b
            },
            getShape3dModel: function(a) {
                return Bc[a]
            },
            createMatrix: function(a, b) {
                ld(a) || (a = [a]);
                for (var c = a.length - 1; c >= 0; c--) {
                    var d = a[c];
                    b = Ah(d.mat, d.s3, d.r3, d.rotationMode, d.t3, b)
                }
                return b
            },
            transformVec: function(a, b) {
                return th(a, b)
            },
            createBoxModel: function() {
                return {
                    vs: Gl,
                    ns: Kl,
                    uv: Il,
                    is: Hl
                }
            },
            createRoundRectModel: function(a, b) {
                return Vl.roundRect(a, b)
            },
            createStarModel: function(a, b) {
                return Vl.star(a, b)
            },
            createRectModel: function(a, b) {
                return Vl.rect(a, b)
            },
            createTriangleModel: function(a, b) {
                return Vl.triangle(a, b)
            },
            createRightTriangleModel: function(a, b) {
                return Vl.rightTriangle(a, b)
            },
            createParallelogramModel: function(a, b) {
                return Vl.parallelogram(a, b)
            },
            createTrapezoidModel: function(a, b) {
                return Vl.trapezoid(a, b)
            },
            createSmoothSphereModel: function(a, b, c, d, e, f, g) {
                return Ci(new ij(a,b,c,d,e,f,g))
            },
            createSphereModel: function(a, b, c, d, e, f) {
                return a ? Nl(a, b, c, d, e, f) : m.createSmoothSphereModel()
            },
            createSmoothConeModel: function(a, b, c, d, e) {
                return Sl(a, b, c, d, e)
            },
            createConeModel: function(a, b, c, d, e, f) {
                return a ? Tl(a, b, c, d, e, f) : Sl(f)
            },
            createSmoothCylinderModel: function(a, b, c, d, e, f, g, h) {
                return Ci(new hj(a,b,c,d,e,f,g,h))
            },
            createCylinderModel: function(a, b, c, d, e, f, g) {
                return a ? Rl(a, b, c, d, e, f, g) : Ql(f, g)
            },
            createSmoothTorusModel: function(a, b, c, d, e, f) {
                return Ci(new jj(a,b,c,d,e,f))
            },
            createTorusModel: function(a, b, c, d, e, f, g) {
                return a ? Pl(a, b, c, d, e, f, g) : Ol(f, g)
            },
            createExtrusionModel: function(a, b, c, d, e, f, g, h) {
                return Ul(a, b, c, d, e, f, g, h)
            },
            createSmoothRingModel: function(a, b, c, d, e, f) {
                for (var g = [], h = 0; h < a.length - 1; h += 2)
                    g.push({
                        x: a[h],
                        y: a[h + 1]
                    });
                for (a = Ue(g, b, c)[0],
                         g = [],
                         h = 0; h < a.length; h++) {
                    var i = a[h];
                    g.push(new Gi(i.x,0,i.y))
                }
                return Ci(new nj(g,f,d,e))
            },
            createRingModel: function(a, b, c, d, e, f, g, h, i, k) {
                for (var l = [], n = 0; n < a.length - 1; n += 2)
                    l.push({
                        x: a[n],
                        y: a[n + 1]
                    });
                f = f || m.shapeSide,
                    g = g || 0,
                    h = h || f;
                var o, p, q, r, s, t, u, v, w, x, n, z, B, C, D, E, F, G, H = [], I = [], J = i ? [] : j, K = i ? [] : j, L = k ? [] : j, M = k ? [] : j, N = d ? [] : j, O = d ? [] : j, P = e ? [] : j, Q = e ? [] : j, a = Ue(l, b, c), R = Ld(a), S = 0, T = 2 * Math.PI / f;
                return a.forEach(function(a) {
                    if (q = a.length,
                        q > 1) {
                        if (r = a[0],
                                d)
                            for (t = r.x,
                                     v = r.y,
                                     n = g; h > n; n++)
                                z = n + 1,
                                    B = n * T,
                                    C = z * T,
                                    D = y(B),
                                    E = A(B),
                                    F = y(C),
                                    G = A(C),
                                    N.push(D * t, v, -E * t, F * t, v, -G * t, 0, v, 0),
                                    O.push(.5 - .5 * D, .5 - .5 * E, .5 - .5 * F, .5 - .5 * G, .5, .5);
                        for (x = 0; q > x; x++) {
                            for (s = a[x],
                                     t = r.x,
                                     u = s.x,
                                     v = r.y,
                                     w = s.y,
                                     o = S / R,
                                     S += Sg(r, s),
                                     p = S / R,
                                     n = g; h > n; n++)
                                z = n + 1,
                                    B = n * T,
                                    C = z * T,
                                    D = y(B),
                                    E = A(B),
                                    F = y(C),
                                    G = A(C),
                                    H.push(D * u, w, -E * u, F * u, w, -G * u, D * t, v, -E * t, F * u, w, -G * u, F * t, v, -G * t, D * t, v, -E * t),
                                    I.push(n / f, p, z / f, p, n / f, o, z / f, p, z / f, o, n / f, o),
                                i && n === g && (J.push(0, v, 0, 0, w, 0, D * u, w, -E * u, D * u, w, -E * u, D * t, v, -E * t, 0, v, 0),
                                    K.push(0, .5 - v, 0, .5 - w, 2 * u, .5 - w, 2 * u, .5 - w, 2 * t, .5 - v, 0, .5 - v)),
                                k && z === h && (L.push(0, v, 0, F * u, w, -G * u, 0, w, 0, F * u, w, -G * u, 0, v, 0, F * t, v, -G * t),
                                    M.push(1, .5 - v, 1 - 2 * u, .5 - w, 1, .5 - w, 1 - 2 * u, .5 - w, 1, .5 - v, 1 - 2 * t, .5 - v));
                            r = s
                        }
                        if (e)
                            for (t = r.x,
                                     v = r.y,
                                     n = g; h > n; n++)
                                z = n + 1,
                                    B = n * T,
                                    C = z * T,
                                    D = y(B),
                                    E = A(B),
                                    F = y(C),
                                    G = A(C),
                                    P.push(F * t, v, -G * t, D * t, v, -E * t, 0, v, 0),
                                    Q.push(.5 - .5 * F, .5 + .5 * G, .5 - .5 * D, .5 + .5 * E, .5, .5)
                    }
                }),
                    {
                        vs: H,
                        uv: I,
                        bottom_vs: P,
                        bottom_uv: Q,
                        top_vs: N,
                        top_uv: O,
                        from_vs: J,
                        from_uv: K,
                        to_vs: L,
                        to_uv: M
                    }
            }
        }, !0),
            vd(n, {
                "3d.move.mode": c,
                "3d.selectable": !0,
                "3d.visible": !0,
                "3d.movable": !0,
                "3d.editable": !0,
                "shape.border.gradient.color": c,
                "edge.gradient.color": c,
                "edge.source.t3": c,
                "edge.target.t3": c,
                "light.type": Qj,
                "light.center": [0, 0, 0],
                "light.color": [1, 1, 1, 1],
                "light.disabled": !1,
                "light.angle": D / 4,
                "light.range": 0,
                "light.exponent": 1,
                "light.intensity": 1,
                "wf.visible": !1,
                "wf.width": 1,
                "wf.color": If,
                "wf.short": !1,
                "wf.mat": c,
                batch: c,
                "transparent.mask": !1,
                brightness: c,
                "select.brightness": .7,
                "repeat.uv.length": c,
                "label.face": _,
                "label.t3": c,
                "label.r3": c,
                "label.texture.scale": 2,
                "label.rotationMode": sj,
                "label.light": !1,
                "label.blend": c,
                "label.reverse.flip": !1,
                "label.reverse.color": tf,
                "label.reverse.cull": !1,
                "label.transparent": !1,
                "label.autorotate": !1,
                "label2.face": _,
                "label2.t3": c,
                "label2.r3": c,
                "label2.texture.scale": 2,
                "label2.rotationMode": sj,
                "label2.light": !1,
                "label2.blend": c,
                "label2.reverse.flip": !1,
                "label2.reverse.color": tf,
                "label2.reverse.cull": !1,
                "label2.transparent": !1,
                "label2.autorotate": !1,
                "note.face": _,
                "note.t3": c,
                "note.r3": c,
                "note.texture.scale": 2,
                "note.rotationMode": sj,
                "note.light": !1,
                "note.blend": c,
                "note.reverse.flip": !1,
                "note.reverse.color": tf,
                "note.reverse.cull": !1,
                "note.transparent": !1,
                "note.autorotate": !1,
                "note2.face": _,
                "note2.t3": c,
                "note2.r3": c,
                "note2.texture.scale": 2,
                "note2.rotationMode": sj,
                "note2.light": !1,
                "note2.blend": c,
                "note2.reverse.flip": !1,
                "note2.reverse.color": tf,
                "note2.reverse.cull": !1,
                "note2.transparent": !1,
                "note2.autorotate": !1,
                shape3d: c,
                "shape3d.color": Gf,
                "shape3d.top.color": c,
                "shape3d.bottom.color": c,
                "shape3d.from.color": c,
                "shape3d.to.color": c,
                "shape3d.image": c,
                "shape3d.top.image": c,
                "shape3d.bottom.image": c,
                "shape3d.from.image": c,
                "shape3d.to.image": c,
                "shape3d.light": !0,
                "shape3d.side": 0,
                "shape3d.side.from": c,
                "shape3d.side.to": c,
                "shape3d.visible": !0,
                "shape3d.from.visible": !0,
                "shape3d.to.visible": !0,
                "shape3d.top.visible": !0,
                "shape3d.bottom.visible": !0,
                "shape3d.torus.radius": .17,
                "shape3d.resolution": 0,
                "shape3d.blend": c,
                "shape3d.opacity": c,
                "shape3d.reverse.flip": !1,
                "shape3d.reverse.color": tf,
                "shape3d.reverse.cull": !1,
                "shape3d.transparent": !1,
                "shape3d.uv.offset": c,
                "shape3d.uv.scale": c,
                "shape3d.top.uv.offset": c,
                "shape3d.top.uv.scale": c,
                "shape3d.bottom.uv.offset": c,
                "shape3d.bottom.uv.scale": c,
                "shape3d.from.uv.offset": c,
                "shape3d.from.uv.scale": c,
                "shape3d.to.uv.offset": c,
                "shape3d.to.uv.scale": c,
                "shape3d.top.cap": c,
                "shape3d.bottom.cap": c,
                "shape3d.start.angle": 0,
                "shape3d.discard.selectable": !0,
                "shape3d.top.discard.selectable": !0,
                "shape3d.bottom.discard.selectable": !0,
                "shape3d.from.discard.selectable": !0,
                "shape3d.to.discard.selectable": !0,
                "shape3d.scaleable": !0,
                "all.light": !0,
                "all.visible": !0,
                "all.color": Gf,
                "all.image": c,
                "all.blend": c,
                "all.opacity": c,
                "all.reverse.flip": !1,
                "all.reverse.color": tf,
                "all.reverse.cull": !1,
                "all.transparent": !1,
                "all.uv": c,
                "all.uv.offset": c,
                "all.uv.scale": c,
                "all.discard.selectable": !0,
                mat: c,
                "left.mat": c,
                "right.mat": c,
                "top.mat": c,
                "bottom.mat": c,
                "front.mat": c,
                "back.mat": c
            }, !0);
        var Tj, Uj = !1, Vj = [0, 0, 0, 1 / 255], Wj = {
            left: [1 / 255, 0, 0, 1],
            right: [2 / 255, 0, 0, 1],
            top: [3 / 255, 0, 0, 1],
            bottom: [4 / 255, 0, 0, 1],
            front: [5 / 255, 0, 0, 1],
            back: [6 / 255, 0, 0, 1],
            m: {
                1: ba,
                2: ca,
                3: da,
                4: ea,
                5: _,
                6: aa
            }
        }, Xj = function(a, b, c, d) {
            if (b.getFaceVisible(a, c)) {
                Tk(b, zh(a, b.getFaceMat(a, c) || b.getMat(a)));
                var e = b._26I;
                b.getFaceReverseCull(a, c) ? e.enable(e.CULL_FACE) : e.disable(e.CULL_FACE),
                    Ok(e, b._prg.uFixPickReverseColor, Wj[c]),
                    Lk(e, d, 6),
                    Rk(b)
            }
        }
            , Yj = function(a) {
            return a instanceof km
        }
            , Zj = function(a) {
            return [a.x, a.e || 0, a.y]
        }
            , $j = function(a, b, c) {
            for (var b = Ne(b), d = b[0], e = b[1], f = b[2]; c--; )
                a.push(d, e, f)
        }
            , _j = function(a, b, c) {
            for (var b = Ne(b), d = b[0], e = b[1], f = b[2], g = b[3]; c--; )
                a.push(d, e, f, g)
        }
            , ak = function(a, b, c) {
            if (b)
                for (var d, e, f, g = b[0], h = b[1], i = b[2], j = b[4], k = b[5], l = b[6], m = b[8], n = b[9], o = b[10], p = b[12], q = b[13], r = b[14], s = c.length, t = 0, t = 0; s > t; t += 3)
                    d = c[t],
                        e = c[t + 1],
                        f = c[t + 2],
                        a.push(g * d + j * e + m * f + p, h * d + k * e + n * f + q, i * d + l * e + o * f + r);
            else
                td(a, c)
        }
            , bk = function(a, b) {
            var c = b.s("light.intensity")
                , d = Ne(b.s(Sj))
                , e = d[0]
                , f = d[1]
                , g = d[2];
            1 !== c && (e *= c,
                f *= c,
                g *= c),
                a.push(e, f, g, b.s("light.disabled") ? 1 : 0)
        }
            , ck = function(a, b, c) {
            Ok(b, c.uHeadlightRange, a._headlightRange);
            var d = a._headlightIntensity
                , e = Ne(a._headlightColor);
            1 !== d && (e = [e[0] * d, e[1] * d, e[2] * d]),
                Ok(b, c.uHeadlightColor, [e[0], e[1], e[2], a._headlightDisabled ? 1 : 0]);
            var f = a._59O
                , g = a._spots
                , h = a._dirs;
            if (f.length) {
                var i = []
                    , j = []
                    , k = [];
                f.forEach(function(a) {
                    bk(i, a),
                        td(j, a.p3()),
                        k.push(a.s("light.range"))
                }),
                    b.uniform4fv(c.uPointColor, i),
                    b.uniform1fv(c.uPointRange, k),
                    b.uniform3fv(c.uPointPosition, j)
            }
            if (g.length) {
                var l = []
                    , m = []
                    , n = []
                    , o = []
                    , p = []
                    , q = [];
                g.forEach(function(a) {
                    bk(l, a),
                        td(m, a.p3()),
                        td(n, a.s("light.center")),
                        o.push(a.s("light.range")),
                        p.push(y(a.s("light.angle") / 2)),
                        q.push(a.s("light.exponent"))
                }),
                    b.uniform4fv(c.uSpotColor, l),
                    b.uniform1fv(c.uSpotRange, o),
                    b.uniform1fv(c.uSpotAngle, p),
                    b.uniform1fv(c.uSpotExponent, q),
                    b.uniform3fv(c.uSpotPosition, m),
                    b.uniform3fv(c.uSpotCenter, n)
            }
            if (h.length) {
                var r = []
                    , s = [];
                h.forEach(function(a) {
                    bk(r, a),
                        td(s, a.p3())
                }),
                    b.uniform4fv(c.uDirColor, r),
                    b.uniform3fv(c.uDirPosition, s)
            }
        }
            , dk = function(a) {
            return a > 0 && 0 === (a - 1 & a)
        }
            , ek = function(a) {
            return a = v(0, w(D, a)),
                a = v(ih, w(D - ih, a))
        }
            , fk = function() {
            return .05 + I() / 2
        }
            , gk = function(a, b, c, d) {
            var e, f = a.getEye();
            return a.isOrtho() ? (e = lh(a.getCenter(), f),
                e[0] += d[0],
                e[1] += d[1],
                e[2] += d[2]) : e = f,
                hk(b, c, d, e)
        }
            , hk = function(a, b, c, d) {
            var e = nh(a, b)
                , f = lh(d, c, !0)
                , g = nh(f, b);
            if (x(g) < ih)
                return j;
            var h = (e - nh(c, b)) / g;
            return [c[0] + f[0] * h, c[1] + f[1] * h, c[2] + f[2] * h]
        }
            , ik = function(a, b) {
            return {
                x: 2 * a.x - b.x,
                y: 2 * a.y - b.y
            }
        }
            , jk = function(a, b, c, d) {
            var e, f;
            if (!a)
                return e = H(b.y - c.y, c.x - b.x),
                    {
                        x: b.x + d * A(e),
                        y: b.y + d * y(e)
                    };
            if (!c)
                return e = H(a.y - b.y, b.x - a.x),
                    {
                        x: b.x + d * A(e),
                        y: b.y + d * y(e)
                    };
            var g = lh([a.x, a.y, 0], [b.x, b.y, 0], !0)
                , h = lh([c.x, c.y, 0], [b.x, b.y, 0], !0)
                , i = -(g[0] + h[0]) / 2
                , j = -(g[1] + h[1]) / 2
                , k = u(i * i + j * j);
            return ih > k ? (e = H(a.y - b.y, b.x - a.x),
                {
                    x: b.x + d * A(e),
                    y: b.y + d * y(e)
                }) : (e = z(nh(g, h)) / 2,
                f = g[1] * h[0] - g[0] * h[1] > 0 ? -1 : 1,
                i /= k,
                j /= k,
                k = d / A(e),
                {
                    x: b.x + f * k * i,
                    y: b.y + f * k * j
                })
        }
            , kk = function(a) {
            var b = a[1]
                , c = a[2]
                , d = a[3]
                , e = a[6]
                , f = a[7]
                , g = a[11];
            a[1] = a[4],
                a[2] = a[8],
                a[3] = a[12],
                a[4] = b,
                a[6] = a[9],
                a[7] = a[13],
                a[8] = c,
                a[9] = e,
                a[11] = a[14],
                a[12] = d,
                a[13] = f,
                a[14] = g
        }
            , lk = function(a) {
            var b = a[0]
                , c = a[1]
                , d = a[2]
                , e = a[3]
                , f = a[4]
                , g = a[5]
                , h = a[6]
                , i = a[7]
                , k = a[8]
                , l = a[9]
                , m = a[10]
                , n = a[11]
                , o = a[12]
                , p = a[13]
                , q = a[14]
                , r = a[15]
                , s = b * g - c * f
                , t = b * h - d * f
                , u = b * i - e * f
                , v = c * h - d * g
                , w = c * i - e * g
                , x = d * i - e * h
                , y = k * p - l * o
                , z = k * q - m * o
                , A = k * r - n * o
                , B = l * q - m * p
                , C = l * r - n * p
                , D = m * r - n * q
                , E = s * D - t * C + u * B + v * A - w * z + x * y;
            return E ? (E = 1 / E,
                a[0] = (g * D - h * C + i * B) * E,
                a[1] = (d * C - c * D - e * B) * E,
                a[2] = (p * x - q * w + r * v) * E,
                a[3] = (m * w - l * x - n * v) * E,
                a[4] = (h * A - f * D - i * z) * E,
                a[5] = (b * D - d * A + e * z) * E,
                a[6] = (q * u - o * x - r * t) * E,
                a[7] = (k * x - m * u + n * t) * E,
                a[8] = (f * C - g * A + i * y) * E,
                a[9] = (c * A - b * C - e * y) * E,
                a[10] = (o * w - p * u + r * s) * E,
                a[11] = (l * u - k * w - n * s) * E,
                a[12] = (g * z - f * B - h * y) * E,
                a[13] = (b * B - c * z + d * y) * E,
                a[14] = (p * t - o * v - q * s) * E,
                void (a[15] = (k * v - l * t + m * s) * E)) : j
        }
            , mk = function(a, b) {
            if (b) {
                var c = b[0]
                    , d = b[1]
                    , e = b[2];
                a[12] = a[0] * c + a[4] * d + a[8] * e + a[12],
                    a[13] = a[1] * c + a[5] * d + a[9] * e + a[13],
                    a[14] = a[2] * c + a[6] * d + a[10] * e + a[14],
                    a[15] = a[3] * c + a[7] * d + a[11] * e + a[15]
            }
        }
            , nk = function(a, b) {
            if (b) {
                var c = b[0]
                    , d = b[1]
                    , e = b[2];
                a[0] = a[0] * c,
                    a[1] = a[1] * c,
                    a[2] = a[2] * c,
                    a[3] = a[3] * c,
                    a[4] = a[4] * d,
                    a[5] = a[5] * d,
                    a[6] = a[6] * d,
                    a[7] = a[7] * d,
                    a[8] = a[8] * e,
                    a[9] = a[9] * e,
                    a[10] = a[10] * e,
                    a[11] = a[11] * e
            }
        }
            , ok = function(a, b, c) {
            var d = b[0]
                , e = b[1]
                , f = b[2]
                , g = b[3]
                , h = b[4]
                , i = b[5]
                , j = b[6]
                , k = b[7]
                , l = b[8]
                , m = b[9]
                , n = b[10]
                , o = b[11]
                , p = b[12]
                , q = b[13]
                , r = b[14]
                , s = b[15]
                , t = c[0]
                , u = c[1]
                , v = c[2]
                , w = c[3];
            return a[0] = t * d + u * h + v * l + w * p,
                a[1] = t * e + u * i + v * m + w * q,
                a[2] = t * f + u * j + v * n + w * r,
                a[3] = t * g + u * k + v * o + w * s,
                t = c[4],
                u = c[5],
                v = c[6],
                w = c[7],
                a[4] = t * d + u * h + v * l + w * p,
                a[5] = t * e + u * i + v * m + w * q,
                a[6] = t * f + u * j + v * n + w * r,
                a[7] = t * g + u * k + v * o + w * s,
                t = c[8],
                u = c[9],
                v = c[10],
                w = c[11],
                a[8] = t * d + u * h + v * l + w * p,
                a[9] = t * e + u * i + v * m + w * q,
                a[10] = t * f + u * j + v * n + w * r,
                a[11] = t * g + u * k + v * o + w * s,
                t = c[12],
                u = c[13],
                v = c[14],
                w = c[15],
                a[12] = t * d + u * h + v * l + w * p,
                a[13] = t * e + u * i + v * m + w * q,
                a[14] = t * f + u * j + v * n + w * r,
                a[15] = t * g + u * k + v * o + w * s,
                a
        }
            , pk = function(a, b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o = b[0], p = b[1], q = b[2], r = d[0], s = d[1], t = d[2], v = c[0], w = c[1], y = c[2];
            return x(o - v) < ih && x(p - w) < ih && x(q - y) < ih ? sh(a) : (k = o - v,
                l = p - w,
                m = q - y,
                n = 1 / u(k * k + l * l + m * m),
                k *= n,
                l *= n,
                m *= n,
                e = s * m - t * l,
                f = t * k - r * m,
                g = r * l - s * k,
                n = u(e * e + f * f + g * g),
                n ? (n = 1 / n,
                    e *= n,
                    f *= n,
                    g *= n) : (e = 0,
                    f = 0,
                    g = 0),
                h = l * g - m * f,
                i = m * e - k * g,
                j = k * f - l * e,
                n = u(h * h + i * i + j * j),
                n ? (n = 1 / n,
                    h *= n,
                    i *= n,
                    j *= n) : (h = 0,
                    i = 0,
                    j = 0),
                a[0] = e,
                a[1] = h,
                a[2] = k,
                a[3] = 0,
                a[4] = f,
                a[5] = i,
                a[6] = l,
                a[7] = 0,
                a[8] = g,
                a[9] = j,
                a[10] = m,
                a[11] = 0,
                a[12] = -(e * o + f * p + g * q),
                a[13] = -(h * o + i * p + j * q),
                a[14] = -(k * o + l * p + m * q),
                a[15] = 1,
                a)
        }
            , qk = function(a, b, c, d, e) {
            var f = 1 / G(b / 2)
                , g = 1 / (d - e);
            return a[0] = f / c,
                a[1] = 0,
                a[2] = 0,
                a[3] = 0,
                a[4] = 0,
                a[5] = f,
                a[6] = 0,
                a[7] = 0,
                a[8] = 0,
                a[9] = 0,
                a[10] = (e + d) * g,
                a[11] = -1,
                a[12] = 0,
                a[13] = 0,
                a[14] = 2 * e * d * g,
                a[15] = 0,
                a
        }
            , rk = function(a, b, c, d, e, f, g) {
            var h = 1 / (b - c)
                , i = 1 / (d - e)
                , j = 1 / (f - g);
            return a[0] = -2 * h,
                a[1] = 0,
                a[2] = 0,
                a[3] = 0,
                a[4] = 0,
                a[5] = -2 * i,
                a[6] = 0,
                a[7] = 0,
                a[8] = 0,
                a[9] = 0,
                a[10] = 2 * j,
                a[11] = 0,
                a[12] = (b + c) * h,
                a[13] = (e + d) * i,
                a[14] = (g + f) * j,
                a[15] = 1,
                a
        }
            , sk = function(a, b) {
            return pk(b ? b : oh(), a._eye, a._center, a._up)
        }
            , tk = function(a) {
            var b = a.getAspect()
                , c = a._near
                , d = a._far
                , e = oh();
            if (a._ortho) {
                var f = a._orthoWidth / 2
                    , g = f / b;
                rk(e, -f, f, -g, g, c, d)
            } else
                qk(e, a._fovy, b, c, d);
            return e
        }
            , uk = function(a, b) {
            if (!a)
                return j;
            var c = 0
                , d = 1
                , e = 2
                , f = []
                , g = 0
                , h = a.length
                , i = h / 3;
            if (b) {
                for (; h > g; g++)
                    f[g] = 0;
                for (g = 0; g < b.length; g += 3) {
                    var k = []
                        , l = []
                        , m = [];
                    k[c] = a[3 * b[g + 1] + c] - a[3 * b[g] + c],
                        k[d] = a[3 * b[g + 1] + d] - a[3 * b[g] + d],
                        k[e] = a[3 * b[g + 1] + e] - a[3 * b[g] + e],
                        l[c] = a[3 * b[g + 2] + c] - a[3 * b[g + 1] + c],
                        l[d] = a[3 * b[g + 2] + d] - a[3 * b[g + 1] + d],
                        l[e] = a[3 * b[g + 2] + e] - a[3 * b[g + 1] + e],
                        m[c] = k[d] * l[e] - k[e] * l[d],
                        m[d] = k[e] * l[c] - k[c] * l[e],
                        m[e] = k[c] * l[d] - k[d] * l[c];
                    for (var n = 0; 3 > n; n++)
                        f[3 * b[g + n] + c] += m[c],
                            f[3 * b[g + n] + d] += m[d],
                            f[3 * b[g + n] + e] += m[e]
                }
            } else
                for (g = 0; i > g; g += 3) {
                    var k = []
                        , l = []
                        , m = [];
                    k[c] = a[3 * (g + 1) + c] - a[3 * g + c],
                        k[d] = a[3 * (g + 1) + d] - a[3 * g + d],
                        k[e] = a[3 * (g + 1) + e] - a[3 * g + e],
                        l[c] = a[3 * (g + 2) + c] - a[3 * (g + 1) + c],
                        l[d] = a[3 * (g + 2) + d] - a[3 * (g + 1) + d],
                        l[e] = a[3 * (g + 2) + e] - a[3 * (g + 1) + e],
                        m[c] = k[d] * l[e] - k[e] * l[d],
                        m[d] = k[e] * l[c] - k[c] * l[e],
                        m[e] = k[c] * l[d] - k[d] * l[c];
                    for (var n = 0; 3 > n; n++)
                        f[3 * (g + n) + c] = m[c],
                            f[3 * (g + n) + d] = m[d],
                            f[3 * (g + n) + e] = m[e]
                }
            for (g = 0; h > g; g += 3) {
                var o = [];
                o[c] = f[g + c],
                    o[d] = f[g + d],
                    o[e] = f[g + e];
                var p = u(o[c] * o[c] + o[d] * o[d] + o[e] * o[e]);
                0 === p && (p = ih),
                    o[c] = o[c] / p,
                    o[d] = o[d] / p,
                    o[e] = o[e] / p,
                    f[g + c] = o[c],
                    f[g + d] = o[d],
                    f[g + e] = o[e]
            }
            return new kh(f)
        }
            , vk = function(a, b, c) {
            if (c || (c = a.createTexture()),
                    b) {
                var d = a.TEXTURE_2D
                    , e = a.LINEAR
                    , f = a.REPEAT
                    , g = a.CLAMP_TO_EDGE
                    , h = a.TEXTURE_MIN_FILTER;
                zk(a, c),
                    a.texImage2D(d, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b),
                    Bk(a, a.TEXTURE_MAG_FILTER, e),
                    dk(b.width) && dk(b.height) ? (Bk(a, a.TEXTURE_WRAP_S, f),
                        Bk(a, a.TEXTURE_WRAP_T, f),
                        Bk(a, h, a.LINEAR_MIPMAP_LINEAR),
                        a.generateMipmap(d)) : (Bk(a, a.TEXTURE_WRAP_S, g),
                        Bk(a, a.TEXTURE_WRAP_T, g),
                        Bk(a, h, e)),
                    zk(a, j)
            }
            return c
        }
            , wk = function(a) {
            a._26I && a._prg && (a._26I.deleteProgram(a._prg),
                a._prg = j)
        }
            , xk = function(a, b, c, d) {
            var e = a.createShader(c);
            return a.shaderSource(e, d),
                a.compileShader(e),
                a.attachShader(b, e),
                e
        }
            , yk = function(a) {
            return a.createBuffer()
        }
            , zk = function(a, b) {
            a.bindTexture(a.TEXTURE_2D, b)
        }
            , Ak = function(a, b) {
            a.bindFramebuffer(a.FRAMEBUFFER, b)
        }
            , Bk = function(a, b, c) {
            a.texParameteri(a.TEXTURE_2D, b, c)
        }
            , Ck = function(a, b) {
            if (b) {
                var b = Ne(b);
                a.clearColor(b[0], b[1], b[2], b[3])
            }
        }
            , Dk = function(a, b) {
            Ok(a, b.uFix, !0),
                Qk(a, b.aNormal)
        }
            , Ek = function(a, b) {
            Ok(a, b.uFix, !1),
                Pk(a, b.aNormal)
        }
            , Fk = function(a, b, c, d, e, f, g, h) {
            a._picking || (c ? (Ok(a, b.uBlend, !0),
                Ok(a, b.uBlendColor, c)) : Ok(a, b.uBlend, !1),
                Ok(a, b.uLight, d == j ? !0 : d),
            hd(e) && 1 !== e && Ok(a, b.uPartOpacity, e),
                Ok(a, b.uReverseFlip, f == j ? !1 : f),
                Ok(a, b.uFixPickReverseColor, g || tf)),
                h ? a.enable(a.CULL_FACE) : a.disable(a.CULL_FACE)
        }
            , Gk = function(a, b) {
            a._picking || Ok(a, b.uPartOpacity, 1)
        }
            , Hk = function(a, b, c, d, e, f, g, h) {
            if (c) {
                Ok(a, b.uTexture, !0),
                    Ok(a, b.uDiscardSelectable, id(d) ? d : !0),
                    Pk(a, b.aUv),
                    Mk(a, e, f, b.aUv, 2),
                    a.activeTexture(a.TEXTURE0),
                    zk(a, c),
                    a.uniform1i(b.uSampler, 0);
                var i = [0, 0, 1, 1];
                g && (i[0] = g[0],
                    i[1] = g[1]),
                h && (i[2] = h[0],
                    i[3] = h[1]),
                    Ok(a, b.uOffsetScale, i)
            }
        }
            , Ik = function(a, b, c) {
            c && (zk(a, j),
                Qk(a, b.aUv),
                Ok(a, b.uTexture, !1))
        }
            , Jk = function(a, b, c, d, e, f) {
            c && !T && a.lineWidth(c),
            d && !a._picking && Ok(a, b.uFixPickReverseColor, d),
            e && Mk(a, e, f, b.aPosition)
        }
            , Kk = function(a, b, c, d) {
            Tj && (d = a[Tj]),
                a.drawArrays(d == j ? a.TRIANGLES : d, b, c)
        }
            , Lk = function(a, b, c, d) {
            Tj && (d = a[Tj]),
                a.drawElements(d == j ? a.TRIANGLES : d, c, a.UNSIGNED_SHORT, b == j ? 0 : 2 * b)
        }
            , Mk = function(a, b, c, d, e) {
            var f = a.ARRAY_BUFFER;
            a.bindBuffer(f, b),
            c && a.bufferData(f, c, a.STATIC_DRAW),
            d != j && a.vertexAttribPointer(d, e ? e : 3, a.FLOAT, !1, 0, 0)
        }
            , Nk = function(a, b, c) {
            var d = a.ELEMENT_ARRAY_BUFFER;
            a.bindBuffer(d, b),
            c && a.bufferData(d, c, a.STATIC_DRAW)
        }
            , Ok = function(a, b, c) {
            if (c != j && b != j) {
                c = Ne(c);
                var d = c.length;
                3 === d ? a.uniform3fv(b, c) : 4 === d ? a.uniform4fv(b, c) : 16 === d ? a.uniformMatrix4fv(b, !1, c) : id(c) ? a.uniform1i(b, c ? 1 : 0) : 2 === d ? a.uniform2fv(b, c) : a.uniform1f(b, c)
            }
        }
            , Pk = function(a, b) {
            b != j && b >= 0 && a.enableVertexAttribArray(b)
        }
            , Qk = function(a, b) {
            b != j && b >= 0 && a.disableVertexAttribArray(b)
        }
            , Rk = function(a, b) {
            var c = a.getGL()
                , d = a._prg;
            a._7O = a._8O.pop(),
            b && (Ok(c, d.uMVMatrix, a._7O),
                a._6O = b,
                Ok(c, d.uNMatrix, b))
        }
            , Sk = function(a, b) {
            return b || (b = oh()),
                rh(b, a),
                lk(b),
                kk(b),
                b
        }
            , Tk = function(a, b) {
            var c = a.getGL()
                , d = a._prg
                , e = a._7O;
            b && (a._8O.push(qh(e)),
                ok(e, e, b)),
                Ok(c, d.uMVMatrix, e),
                Ok(c, d.uNMatrix, Sk(e, a._6O))
        }
            , Uk = function(a, b, c, d, e, f) {
            if (c) {
                if (d) {
                    var g = c.value++
                        , h = [(255 & g >> 24) / 255, (255 & g >> 16) / 255, (255 & g >> 8) / 255, (255 & g) / 255];
                    c[g] = {
                        data: e,
                        part: f
                    }
                } else
                    h = Vj;
                return Ok(a, b.uFixPickReverseColor, h),
                    h
            }
        }
            , Vk = function() {
            var a = {
                center: function(a, b, c, d, e) {
                    var f = b[1] / 2
                        , g = {
                        x: -b[0] / 2,
                        y: f,
                        width: b[0],
                        height: b[1]
                    }
                        , h = sf(a, g, c);
                    return [h.x + d, 2 * f - h.y - e, fk()]
                },
                front: function(a, b, c, d, e) {
                    var f = b[1] / 2
                        , g = {
                        x: -b[0] / 2,
                        y: f,
                        width: b[0],
                        height: b[1]
                    }
                        , h = sf(a, g, c);
                    return [h.x + d, 2 * f - h.y - e, b[2] / 2 + fk()]
                },
                back: function(a, b, c, d, e) {
                    var f = b[0] / 2
                        , g = b[1] / 2
                        , h = {
                        x: f,
                        y: g,
                        width: b[0],
                        height: b[1]
                    }
                        , i = sf(a, h, c);
                    return [2 * f - i.x - d, 2 * g - i.y - e, -b[2] / 2 - fk()]
                },
                left: function(a, b, c, d, e) {
                    var f = b[1] / 2
                        , g = {
                        x: -b[2] / 2,
                        y: f,
                        width: b[2],
                        height: b[1]
                    }
                        , h = sf(a, g, c);
                    return [-b[0] / 2 - fk(), 2 * f - h.y - e, h.x + d]
                },
                right: function(a, b, c, d, e) {
                    var f = b[2] / 2
                        , g = b[1] / 2
                        , h = {
                        x: f,
                        y: g,
                        width: b[2],
                        height: b[1]
                    }
                        , i = sf(a, h, c);
                    return [b[0] / 2 + fk(), 2 * g - i.y - e, 2 * f - i.x - d]
                },
                top: function(a, b, c, d, e) {
                    var f = {
                        x: -b[0] / 2,
                        y: -b[2] / 2,
                        width: b[0],
                        height: b[2]
                    }
                        , g = sf(a, f, c);
                    return [g.x + d, b[1] / 2 + fk(), g.y + e]
                },
                bottom: function(a, b, c, d, e) {
                    var f = b[2] / 2
                        , g = {
                        x: -b[0] / 2,
                        y: f,
                        width: b[0],
                        height: b[2]
                    }
                        , h = sf(a, g, c);
                    return [h.x + d, -b[1] / 2 - fk(), 2 * f - h.y - e]
                }
            };
            return function(b, c, d, e, f, g) {
                return a[e](b, c, d, f || 0, g || 0)
            }
        }(), Wk = function(a, b, c, d, e, f, g, h, i, j) {
            if (e && (b[0] += e[0],
                    b[1] += e[1],
                    b[2] += e[2]),
                    mk(a, c),
                    h) {
                var k = oh();
                if (tj(k, i, j),
                        th(b, k),
                        mk(a, b),
                        a.auto = h,
                        a.pos = th([0, 0, 0], a),
                        f) {
                    var l = a.mat2 = oh();
                    tj(l, f, g)
                }
            } else
                tj(a, i, j),
                    mk(a, b),
                    d === ba ? xh(a, -F) : d === ca ? xh(a, F) : d === da ? wh(a, -F) : d === ea ? wh(a, F) : d === aa && xh(a, D),
                    tj(a, f, g);
            return a
        }
            , Xk = function(a, b) {
            var c = b.auto
                , d = b.mat2
                , e = a.gv;
            if (c) {
                var f = lh(a.gv.getEye(), b.pos)
                    , g = oh();
                xh(g, D / 2 + H(-f[2], f[0])),
                "y" !== c && wh(g, -H(f[1], u(f[2] * f[2] + f[0] * f[0]))),
                d && ok(g, g, d),
                    g = ok(oh(), b, g),
                    Tk(e, g)
            } else
                Tk(e, b)
        }
            , Yk = function(a, b, c, d, e) {
            var f = a.s
                , g = a.gv
                , h = g.getGL()
                , i = g._prg
                , j = g._buffer
                , k = g._1O;
            vk(h, Je, k),
                Xk(a, c),
                Fk(h, i, f(b + ".blend"), f(b + ".light"), f(b + ".opacity"), f(b + ".reverse.flip"), f(b + ".reverse.color"), f(b + ".reverse.cull")),
                Hk(h, i, k, e, j.uv, Dl),
                Mk(h, j.vs, d, i.aPosition),
                Mk(h, j.ns, El, i.aNormal),
                Nk(h, j.is, Fl),
                Lk(h, 0, Fl.length),
                Ik(h, i, k),
                Gk(h, i),
                Rk(g)
        }
            , Zk = function(a, b, c) {
            var d = a.gv
                , e = a.data
                , f = a[b] = {
                blend: d.getBodyColor(e) || d.getFaceBlend(e, b),
                light: d.getFaceLight(e, b),
                color: d.getFaceColor(e, b),
                opacity: d.getFaceOpacity(e, b),
                transparent: d.getFaceTransparent(e, b),
                reverseFlip: d.getFaceReverseFlip(e, b),
                reverseColor: d.getFaceReverseColor(e, b),
                reverseCull: d.getFaceReverseCull(e, b),
                texture: d.getFaceImage(e, b),
                discardSelectable: d.getFaceDiscardSelectable(e, b)
            };
            if ("csg" !== b) {
                f.uv = d.getFaceUv(e, b) || c && c[b + "Uv"],
                    f.uvScale = d.getFaceUvScale(e, b) || c && c[b + "UvScale"],
                    f.uvOffset = d.getFaceUvOffset(e, b) || c && c[b + "UvOffset"];
                var g = d.getFaceMat(e, b);
                g && (f.mat = zh(e, g))
            }
            return f
        }
            , $k = function(a, b, c, d, e) {
            if (d) {
                if (!e(d.transparent))
                    return;
                var f = a.data
                    , g = a.gv
                    , h = g._buffer
                    , i = g.getTexture(d.texture, f);
                Hk(b, c, i, d.discardSelectable, h.uv, d.tuv, d.uvOffset, d.uvScale),
                    Fk(b, c, d.blend, d.light, d.opacity, d.reverseFlip, d.reverseColor, d.reverseCull),
                    Ok(b, c.uDiffuse, d.color),
                    Mk(b, h.vs, d.vs, c.aPosition),
                    Mk(b, h.ns, d.ns, c.aNormal),
                    Kk(b, 0, d.vs.length / 3),
                    Gk(b, c),
                    Ik(b, c, i)
            }
        }
            , _k = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = [d - b, e - c], s = a ? a.length : 0;
            for (i = 0; s > i; i++) {
                for (j = 2,
                         g = a[i],
                         k = g[0],
                         l = g[1]; j + 1 < g.length; ) {
                    if (m = g[j],
                            n = g[j + 1],
                            h = Fd(b, c, d, e, k, l, m, n, !0)) {
                        o = [m - k, n - l],
                            p = Sg(o),
                            o[0] /= p,
                            o[1] /= p,
                            p = nh(r, o),
                            p = p > 0 ? f : -f,
                            q = [o[0] * p, o[1] * p];
                        break
                    }
                    k = m,
                        l = n,
                        j += 2
                }
                if (q)
                    break
            }
            if (q)
                for (d = b + q[0],
                         e = c + q[1],
                         i = 0; s > i; i++)
                    for (j = 2,
                             g = a[i],
                             k = g[0],
                             l = g[1]; j + 1 < g.length; ) {
                        if (m = g[j],
                                n = g[j + 1],
                                h = Fd(b, c, d, e, k, l, m, n, !0))
                            return [0, 0];
                        k = m,
                            l = n,
                            j += 2
                    }
            return q ? q : [d - b, e - c]
        }
            , al = k.graph3d = {}, bl = function(a, b, c) {
            gh(d + ".graph3d." + a, b, c)
        }
            , cl = "~<yfusfw!+!yjsubNQv!>!opjujtpQ`mh!gjeof$!~<fdobutjEfojMb!>!fdobutjEfojMw|*itbEv)gj!ITBE!gfegj$!!gjeof$!~<ttfouihjsCidubCb!>!ttfouihjsCidubCw|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!~<eofmCidubCb!>!eofmCidubCw|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!!gjeof$!~<spmpDidubCb!>!spmpDidubCw|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!~<x{/fmbdTuftggPv!+!wVb!,!zy/fmbdTuftggPv!>!wVw|*fsvuyfUv)gj~!gjeof$!~~<*^j]opjujtpQupqTw!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEupqTw<**1/2!-^j]sfuofDupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQupqTw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~<**1/2!-^j]opjujtpQuojpQv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQuojpQw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<*opjujtpQsje!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEsjEw<**1/2!-1/1!-1/1!-1/1)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQsjEv)5dfw!+!yjsubNxfjWv)4dfw!>!opjujtpQsje!4dfw|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!<*yfusfw)4dfw!>!yfusfWw<**1/2!-mbnspOb)5dfw!+!yjsubNOv)4dfw!>!mbnspOw|*ldjQva!%%!yjGva)gj<*1/2!-opjujtpQb)5dfw!+!yjsubNWNv!>!yfusfw!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEfojMb!ubpmg!fuvcjsuub<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]sfuofDupqTv!4dfw!nspgjov<^UPQT`YBN]opjujtpQupqTv!4dfw!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]opjujtpQuojpQv!4dfw!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]opjujtpQsjEv!4dfw!nspgjov<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCb!4dfw!fuvcjsuub<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCb!ubpmg!fuvcjsuub<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCb!5dfw!fuvcjsuub<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<yjGv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjsubNxfjWv!5ubn!nspgjov<yjsubNOv!5ubn!nspgjov<yjsubNQv!5ubn!nspgjov<yjsubNWNv!5ubn!nspgjov<opjujtpQb!4dfw!fuvcjsuub<mbnspOb!4dfw!fuvcjsuub<wVw!3dfw!hojzsbw<wVb!3dfw!fuvcjsuub<fmbdTuftggPv!5dfw!nspgjov<fsvuyfUv!mppc!nspgjov!YJGFSQ^#CBRBEJxTT87hJFI,,bX1XrIwcn3UM{ZeZ,M6HEN6nLxe2Z72s2:3johr6foKrpqwxNKYkdbJ2CN[mBbf[wXU,T0oGuSEd190ohLZkEn8IuCe[OHoWeKz:Sf,VS7xdSLw23W1YJLU:jdv2{hiDbhDzNNEh9tp3xsuEp94Sl4c3wRzqwShMDRhCLRjCDEBOH5BBVRBCFRE4cJTHrTDH1BNgHJN", dl = "~~<eJ!>!spmpDhbsG`mh!gjeof$!~<ttfouihjsCidubCw!>+!chs/eJ!!!|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!~<ttfouihjsCv!>+!chs/eJ!!!|*1/2!>a!ttfouihjsCv)gj~~<zujdbqPusbQv!>+!b/eJ!!!|*1/2!>a!zujdbqPusbQv)gj~!gjeof$!<*spudbGhpg!-*x/eJ!-chs/spmpDhpGv)5dfw!-eJ)yjn!>!eJ<*iuqfe!-sbGhpGv!-sbfOhpGv)qfutiuppnt!>!spudbGhpg!ubpmg<x/esppDhbsG`mh0{/esppDhbsG`mh!>!iuqfe!ubpmg!HPG!gfegj$!!gjeof$!~~~~<chs/^j]spmpDupqTv!+!udfggFupqt!+!fhobSm!+!*1/1!-*mbnspOm.!-O)upe)ybn!>,!chs/eJ<*1/1!-*^j]uofopqyFupqTv!-udfggFupqt)xpq)ybn!>!udfggFupqt|*^j]fmhoBupqTv!?!udfggFupqt)gj<*mbnspOm!-^j]opjudfsjEupqTw)upe!>!udfggFupqt!ubpmg<*spudfWm)f{jmbnspo!>!mbnspOm!4dfw|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSupqTv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSupqTv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQupqTw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~~<chs/^j]spmpDuojpQv!+!fhobSm!+!*1/1!-**spudfWm)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSuojpQv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSuojpQv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQuojpQw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<chs/^j]spmpDsjEv!+!*1/1!-**^j]opjudfsjEsjEw)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!~<chs/spmpDuihjmebfIv!+!nsfUusfcnbm!>+!chs/eJ~<*1/2!-fhobSuihjmebfIv0*yfusfWw)iuhofm)ojn!.!1/2!!>+!nsfUusfcnbm|*1/1!?!fhobSuihjmebfIv)gj<*1/1!-6/1!,!6/1!+!*M.!-O)upe)ybn!>!nsfUusfcnbm!ubpmg|*1/1!>>!x/spmpDuihjmebfIv)gj|*uihjMv)gj~!gjeof$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf~<eofmCidubCw!>+!chs/eJ|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!~<spmpd!>!eJ|ftmf~<spmpDwv!>!eJ|*fsvuyfUv)gj|!ftmf~<spmpDftsfwfSldjQyjGv!>!eJ|*qjmGftsfwfSva!%%!ldbCtj)gj~<fvsu!>!ldbCtj<O.!>!O|*1/1!=!*O!-F)upe)gj<ftmbg!>!ldbCtj!mppc<F.!>!M!4dfw<*yfusfWw.)f{jmbnspo!>!F!4dfw<*mbnspOw)f{jmbnspo!>!O!4dfw!gjeof$!<ftvggjEv!>!spmpd!ftmf$!~<ftvggjEv!>!spmpd|ftmf~<spmpDidubCw!>!spmpd|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!<spmpd!5dfw|!ftmf~!gjeof$!~~<ftvggjEv!>!eJ|ftmf~<esbdtje|*1/1!>>!x/ftvggjEv)gj|!*!fdobutjEitbEv!?!*!fdobutjEqbHitbEv!-fdobutjEfojMw!)epn!%%!itbEv)!gj!ITBE!gfegj$!!gjeof$!<spmpDftsfwfSldjQyjGv!>!eJ!ftmf$!~<spmpDftsfwfSldjQyjGv!>!eJ|ftmf~<spmpDidubCw!>!eJ|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*yjGv)gj<eJ!5dfw|ftmf~!gjeof$!<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh!ftmf$!~<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh|ftmf~<spmpDidubCw!>!spmpDhbsG`mh|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*ldjQv)gj~~~<1/2!>!b/spmpDwv|ftmf~<esbdtje|*5/1!=!b/spmpDwv)gj|ftmf~~<esbdtje|*1/1!>>!b/spmpDwv)gj|*uofsbqtobsUv)gj<*wVw!-sfmqnbTv)E3fsvuyfu!>!spmpDwv|**fmcbudfmfTesbdtjEv!%%!ldjQv)a!%%!fsvuyfUv)gj<spmpDwv!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEqbHitbEv!ubpmg!nspgjov<fdobutjEitbEv!ubpmg!nspgjov<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<sbGhpGv!ubpmg!nspgjov<sbfOhpGv!ubpmg!nspgjov<spmpDhpGv!5dfw!nspgjov!HPG!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]fhobSupqTv!ubpmg!nspgjov<^UPQT`YBN]fmhoBupqTv!ubpmg!nspgjov<^UPQT`YBN]uofopqyFupqTv!ubpmg!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]fhobSuojpQv!ubpmg!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<spmpDuihjmebfIv!5dfw!nspgjov<fhobSuihjmebfIv!ubpmg!nspgjov<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<ftvggjEv!5dfw!nspgjov<zujdbqPusbQv!ubpmg!nspgjov<ttfouihjsCv!ubpmg!nspgjov<uihjMv!mppc!nspgjov<spmpDeofmCv!5dfw!nspgjov<eofmCv!mppc!nspgjov<sfmqnbTv!E3sfmqnbt!nspgjov<wVw!3dfw!hojzsbw<fsvuyfUv!mppc!nspgjov<spmpDftsfwfSldjQyjGv!5dfw!nspgjov<qjmGftsfwfSv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjGv!mppc!nspgjov<fmcbudfmfTesbdtjEv!mppc!nspgjov<uofsbqtobsUv!mppc!nspgjov!YJGFSQ!gjeof$!!gjeof$!!<ubpmg!qnvjefn!opjtjdfsq!!ftmf$!!<ubpmg!qihji!opjtjdfsq!!IHJI`OPJTJDFSQ`UOFNHBSG`MH!gfegj$!!TF`MH!gfegj$!";
        vd(m, {
            setBatchInfo: function(a, b) {
                Ac[a] = b
            },
            getBatchInfo: function(a) {
                return Ac[a]
            }
        }, !0);
        var el = [1, 1, 1]
            , fl = [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0]
            , gl = [-.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5]
            , hl = [.5, .5, -.5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5]
            , il = [.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5]
            , jl = [.5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5]
            , kl = [.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5]
            , ll = [-.5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5]
            , ml = function(a, b) {
                nl(a, b),
                    ol(a, b, "_wireframeModelMap", "_wireframeIndexMap"),
                    ol(a, b, "_polylineModelMap", "_polylineIndexMap")
            }
            , nl = function(a, b) {
                if (b) {
                    var c, d, e = b._id, f = a._33O, g = a._34O, h = g[e];
                    if (h) {
                        d = h.batch,
                            c = f[d];
                        var i = h.begin
                            , j = h.size
                            , k = 3 * i
                            , l = 3 * j
                            , m = 4 * i
                            , n = 4 * j
                            , o = c.vs
                            , p = c.uv
                            , q = c.cs
                            , r = c.bs
                            , s = c.rs
                            , t = c.ds
                            , u = h.index;
                        if (c.invalidate = !0,
                                delete g[e],
                                t.splice(u, 1),
                                Ad(t))
                            delete f[d];
                        else {
                            for (; u < t.length; u++)
                                h = g[t[u]._id],
                                    h.index--,
                                    h.begin -= j;
                            o.splice(k, l),
                                c.ns.splice(k, l),
                                c.ps.splice(m, n),
                            p && p.splice(2 * i, 2 * j),
                            q && q.splice(m, n),
                            r && r.splice(k, l),
                            s && s.splice(i, j)
                        }
                    }
                } else
                    a._34O = {},
                        a._33O = {}
            }
            , ol = function(a, b, c, d) {
                if (b) {
                    var e, f, g = b._id, h = a[c], i = a[d], j = i[g];
                    if (j) {
                        f = j.batch,
                            e = h[f];
                        var k = j.begin
                            , l = j.size
                            , m = 3 * k
                            , n = 3 * l
                            , o = 4 * k
                            , p = 4 * l
                            , q = e.ds
                            , r = j.index;
                        if (e.invalidate = !0,
                                delete i[g],
                                q.splice(r, 1),
                                Ad(q))
                            delete h[f];
                        else {
                            for (; r < q.length; r++)
                                j = i[q[r]._id],
                                    j.index--,
                                    j.begin -= l;
                            e.vs.splice(m, n),
                                e.cs.splice(o, p),
                                e.ps.splice(o, p),
                            e.ls && e.ls.splice(k, l)
                        }
                    }
                } else
                    a[c] = {},
                        a[d] = {}
            }
            , pl = function(a, b, c, d) {
                if (!d)
                    return j;
                var e = b[d];
                if (!e) {
                    var f = Ac[d] || Ic
                        , g = f.image ? [] : j;
                    e = b[d] = {
                        vs: [],
                        ns: [],
                        uv: g,
                        cs: g ? j : f.color ? j : [],
                        bs: f.blend ? [] : j,
                        ps: [],
                        rs: f.brightness ? [] : j,
                        ds: []
                    }
                }
                return e.invalidate = !0,
                    a[c._id] = {
                        index: e.ds.length,
                        begin: e.vs.length / 3,
                        batch: d
                    },
                    e.ds.push(c),
                    e
            }
            , ql = function(a, b) {
                return b != j && 1 !== b ? [a[0] * b, a[1] * b, a[2] * b, a[3]] : a
            }
            , rl = function(a, b, c) {
                var d = a.getBrightness(b)
                    , e = Ne(c.color || "white")
                    , f = e[3] < 1
                    , g = Math.ceil(c.width) || 1
                    , h = (f ? "T" : "O") + g
                    , i = a._wireframeIndexMap
                    , j = a._wireframeModelMap
                    , k = j[h];
                k || (k = j[h] = {
                    vs: [],
                    cs: [],
                    ps: [],
                    ds: [],
                    T: f,
                    W: g
                }),
                    k.invalidate = !0;
                var l = k.vs
                    , m = k.cs
                    , n = k.ds
                    , o = i[b._id] = {
                    index: n.length,
                    begin: l.length / 3,
                    batch: h
                };
                n.push(b),
                    ak(l, zh(b, c.mat), c["short"] ? Ml : Ll);
                var p = o.size = l.length / 3 - o.begin;
                _j(m, ql(e, d), p)
            }
            , sl = function(a, b, c, d, e, f, g, h, i) {
                var k = a.getBrightness(b);
                k == j && (k = 1);
                var l = ql(Ne(d), k)
                    , m = l[3] < 1;
                f = Math.ceil(f) || 1;
                var n = (m ? "T" : "O") + f;
                if (g) {
                    var o = g[0]
                        , p = (g[1] || o) + o;
                    n += "-" + o + "-" + p,
                    i && (n += "-" + Me(i) + "-" + k,
                        i = ql(Ne(i), k))
                }
                var q = a._polylineIndexMap
                    , r = a._polylineModelMap
                    , s = r[n];
                s || (s = r[n] = {
                    vs: [],
                    cs: [],
                    ps: [],
                    ds: [],
                    ls: g ? [] : j,
                    T: m,
                    W: f
                },
                g && (s.D = o,
                    s.G = p,
                    s.A = i)),
                    s.invalidate = !0;
                var t, u = s.vs, v = s.cs, w = s.ds, x = s.ls, y = q[b._id] = {
                    index: w.length,
                    begin: u.length / 3,
                    batch: n
                };
                w.push(b),
                    td(u, c);
                var z, A = y.size = u.length / 3 - y.begin, B = c.length, C = 0, D = [];
                if (g || e)
                    for (t = 0; B > t; t += 6)
                        z = Sg([c[t], c[t + 1], c[t + 2]], [c[t + 3], c[t + 4], c[t + 5]]),
                            D.push(z),
                            C += z;
                if (C && e) {
                    var E, F = ql(Ne(e), k), G = [F[0] - l[0], F[1] - l[1], F[2] - l[2], F[3] - l[3]], H = 0;
                    for (t = 0; B > t; t += 6)
                        E = H / C,
                            _j(v, [l[0] + G[0] * E, l[1] + G[1] * E, l[2] + G[2] * E, l[3] + G[3] * E], 1),
                            H += D[t / 6],
                            E = H / C,
                            _j(v, [l[0] + G[0] * E, l[1] + G[1] * E, l[2] + G[2] * E, l[3] + G[3] * E], 1)
                } else
                    _j(v, l, A);
                if (g)
                    for (H = h || 0,
                             t = 0; B > t; t += 6)
                        x.push(H),
                            H += D[t / 6],
                            x.push(H)
            }
            , tl = function(a, b, c) {
                if (b)
                    for (var d = 4 * b.begin, e = c[b.batch].ps, f = 0; f < b.size; f++)
                        e[d++] = a[0],
                            e[d++] = a[1],
                            e[d++] = a[2],
                            e[d++] = a[3]
            }
            , ul = function(a, b) {
                var c = b + ["32"]
                    , d = a[b]
                    , e = a[c];
                d ? e && e.length === d.length ? e.set(d) : a[c] = new kh(d) : delete a[c]
            }
            , vl = function(a, b, c, d, e, f, g, h, i) {
                if (ld(c))
                    c.forEach(function(c) {
                        vl(a, b, c, d, e, f, g, h, i)
                    });
                else if (gd(c))
                    vl(a, b, cm(d, c), d, e, f, g, h, i);
                else if (jd(c)) {
                    var j, k = Ph(c.mat, b, a), l = Ph(c.s3, b, a), m = Ph(c.t3, b, a), n = Ph(c.r3, b, a);
                    if ((l || n || m || k) && (j = Ah(k, l, n, Ph(c.rotationMode, b, a), m),
                            f.push(j)),
                            c.shape3d)
                        vl(a, b, c.shape3d, d, e, f, g, h, c);
                    else {
                        i = i || Ic;
                        var o = f[0]
                            , p = f.length
                            , q = d("shape3d.color", c.color, i.color);
                        if (e || (e = d("shape3d.blend", c.blend, i.blend)),
                            p > 1) {
                            o = qh(o);
                            for (var r = 1; p > r; r++)
                                ok(o, o, f[r])
                        }
                        c.vs && d(Hb, c.visible, i.visible) && wl(o, g, h, c.vs, c.uv, c.is, e, q),
                        c.top_vs && d(Kb, c.topVisible, i.topVisible) && wl(o, g, h, c.top_vs, c.top_uv, c.top_is, e, d("shape3d.top.color", c.topColor, i.topColor) || q),
                        c.bottom_vs && d(Lb, c.bottomVisible, i.bottomVisible) && wl(o, g, h, c.bottom_vs, c.bottom_uv, c.bottom_is, e, d("shape3d.bottom.color", c.bottomColor, i.bottomColor) || q),
                        c.from_vs && d(Ib, c.fromVisible, i.fromVisible) && wl(o, g, h, c.from_vs, c.from_uv, c.from_is, e, d("shape3d.from.color", c.fromColor, i.fromColor) || q),
                        c.to_vs && d(Jb, c.toVisible, i.toVisible) && wl(o, g, h, c.to_vs, c.to_uv, c.to_is, e, d("shape3d.to.color", c.toColor, i.toColor) || q)
                    }
                    j && f.pop()
                }
            }
            , wl = function(a, b, c, d, e, f, g, h) {
                var i, j = b.cs, k = b.uv, l = b.bs;
                if (f) {
                    i = f.length;
                    for (var m = 0; i > m; m++) {
                        var n = f[m];
                        ak(c, a, [d[3 * n], d[3 * n + 1], d[3 * n + 2]]),
                        k && td(k, [e[2 * n], e[2 * n + 1]])
                    }
                } else
                    i = d.length / 3,
                        ak(c, a, d),
                    k && td(k, e);
                j && _j(j, h, i),
                l && (g ? $j(l, g, i) : td(l, el, i))
            }
            , xl = function(a, b, c, d) {
                var e = [];
                d ? vl(a.gv, a.data, d, a.s, a.getBodyColor(), [b], c, e) : (yl(a, ba, b, c, e),
                    yl(a, ca, b, c, e),
                    yl(a, _, b, c, e),
                    yl(a, aa, b, c, e),
                    yl(a, da, b, c, e),
                    yl(a, ea, b, c, e),
                    yl(a, "csg", b, c, e)),
                e.length && (td(c.vs, e),
                    td(c.ns, uk(e)))
            }
            , yl = function(a, b, c, d, e) {
                var f = a[b];
                if (f) {
                    var g = f.tuv;
                    if (g) {
                        var h, i, k, l, m = f.uvScale, n = f.uvOffset;
                        if (m)
                            for (h = g.length,
                                     i = m[0],
                                     k = m[1],
                                     l = 0; h > l; l += 2)
                                g[l] *= i,
                                    g[l + 1] *= k;
                        if (n)
                            for (h = g.length,
                                     i = n[0],
                                     k = n[1],
                                     l = 0; h > l; l += 2)
                                g[l] += i,
                                    g[l + 1] += k
                    }
                    wl(c, d, e, f.vs, g, j, f.blend, f.color)
                }
            }
            , zl = function(a, b, c, d, e, f, g, h) {
                var i, j = c.cs, k = c.uv, l = c.bs;
                if (a.getFaceVisible(b, f)) {
                    var m = a.getFaceMat(b, f);
                    if (m && (e = zh(b, m)),
                            ak(g, e, h),
                        j && _j(j, a.getFaceColor(b, f), 6),
                            k) {
                        var n = a.getFaceUv(b, f) || d[f + "Uv"]
                            , o = a.getFaceUvScale(b, f) || d[f + "UvScale"]
                            , p = a.getFaceUvOffset(b, f) || d[f + "UvOffset"];
                        n = n ? [n[6], n[7], n[0], n[1], n[2], n[3], n[2], n[3], n[4], n[5], n[6], n[7]] : fl;
                        var q = n[0]
                            , r = n[1]
                            , s = n[2]
                            , t = n[3]
                            , u = n[4]
                            , v = n[5]
                            , w = n[6]
                            , x = n[7]
                            , y = n[8]
                            , z = n[9]
                            , A = n[10]
                            , B = n[11];
                        if (o) {
                            var C = o[0]
                                , D = o[1];
                            q *= C,
                                r *= D,
                                s *= C,
                                t *= D,
                                u *= C,
                                v *= D,
                                w *= C,
                                x *= D,
                                y *= C,
                                z *= D,
                                A *= C,
                                B *= D
                        }
                        if (p) {
                            var E = p[0]
                                , F = p[1];
                            q += E,
                                r += F,
                                s += E,
                                t += F,
                                u += E,
                                v += F,
                                w += E,
                                x += F,
                                y += E,
                                z += F,
                                A += E,
                                B += F
                        }
                        k.push(q, r, s, t, u, v, w, x, y, z, A, B)
                    }
                    l && (i = a.getBodyColor(b) || a.getFaceBlend(b, f),
                        i ? $j(l, i, 6) : td(l, el, 6))
                }
            }
            , Al = function(a, b, c, d) {
                var e = a.getGL()
                    , f = a._prg
                    , g = a._buffer;
                if (!zd(b)) {
                    Tk(a),
                        Dk(e, f);
                    for (var h in b) {
                        var i = b[h];
                        if (!(d && !i.T || !d && i.T)) {
                            i.invalidate ? (i.invalidate = !1,
                                ul(i, "vs"),
                                ul(i, "cs"),
                                ul(i, "ls"),
                                ul(i, "ps")) : c && ul(i, "ps");
                            var k = i.vs32
                                , l = c ? i.ps32 : i.cs32;
                            Jk(e, f, i.W, j, g.vs, k);
                            var m = i.D
                                , n = !a._dashDisabled && m;
                            n && (Ok(e, f.uDash, !0),
                                Ok(e, f.uDashDistance, m),
                                Ok(e, f.uDashGapDistance, i.G),
                                Pk(e, f.aLineDistance),
                                Mk(e, g.lineDistance, i.ls32, f.aLineDistance, 1),
                                Ok(e, f.uDiffuse, i.A || Oc));
                            var o = !a._batchColorDisabled;
                            o && (Ok(e, f.uBatchColor, !0),
                                Pk(e, f.aBatchColor),
                                Mk(e, g.batchColor, l, f.aBatchColor, 4)),
                                Kk(e, 0, k.length / 3, e.LINES),
                            o && (Ok(e, f.uBatchColor, !1),
                                Qk(e, f.aBatchColor)),
                            n && (Ok(e, f.uDash, !1),
                                Qk(e, f.aLineDistance))
                        }
                    }
                    Ek(e, f)
                }
            }
            , Bl = function(a, b, c) {
                var d, e, f, g, h, i, k, l, m, n, o, p = a.getGL(), q = a._prg, r = a._buffer, s = a._33O;
                if (!zd(s)) {
                    Tk(a);
                    for (d in s)
                        if (e = Ac[d] || Ic,
                            !(c && !e.transparent || !c && e.transparent) && (f = s[d],
                            b || !e.transparentMask)) {
                            var t = c && e.autoSort !== !1 && (a._33Q || f.invalidate);
                            if (f.invalidate ? (f.invalidate = !1,
                                    ul(f, "vs"),
                                    ul(f, "ns"),
                                    ul(f, "cs"),
                                    ul(f, "rs"),
                                    ul(f, "ps"),
                                    ul(f, "bs"),
                                    ul(f, "uv")) : b && ul(f, "ps"),
                                    h = f.vs32,
                                    i = b ? f.ps32 : f.cs32,
                                    m = f.uv32,
                                    k = f.bs32,
                                    l = f.rs32,
                                    o = h.length / 3,
                                t && (f.is = Cl(h, a.getEye())),
                                    o) {
                                g = e.light,
                                    n = a.getTexture(e.image),
                                    Fk(p, q, j, e.light, e.opacity, e.reverseFlip, e.reverseColor, e.reverseCull),
                                    i ? a._batchColorDisabled || (Ok(p, q.uBatchColor, !0),
                                            Pk(p, q.aBatchColor),
                                            Mk(p, r.batchColor, i, q.aBatchColor, 4)) : Ok(p, q.uDiffuse, e.color);
                                var u = k && !a._batchBlendDisabled;
                                u && (Ok(p, q.uBatchBlend, !0),
                                    Pk(p, q.aBatchBlend),
                                    Mk(p, r.batchBlend, k, q.aBatchBlend));
                                var v = l && !a._batchBrightnessDisabled;
                                v && (Ok(p, q.uBatchBrightness, !0),
                                    Pk(p, q.aBatchBrightness),
                                    Mk(p, r.batchBrightness, l, q.aBatchBrightness, 1)),
                                m && Hk(p, q, n, e.discardSelectable, r.uv, m, e.uvOffset, e.uvScale),
                                    Mk(p, r.vs, h, q.aPosition),
                                    Mk(p, r.ns, f.ns32, q.aNormal),
                                    f.is ? (Nk(p, r.is, f.is),
                                        Lk(p, 0, o)) : Kk(p, 0, o),
                                m && Ik(p, q, n),
                                i && !a._batchColorDisabled && (Ok(p, q.uBatchColor, !1),
                                    Qk(p, q.aBatchColor)),
                                u && (Ok(p, q.uBatchBlend, !1),
                                    Qk(p, q.aBatchBlend)),
                                v && (Ok(p, q.uBatchBrightness, !1),
                                    Qk(p, q.aBatchBrightness)),
                                    Gk(p, q)
                            }
                        }
                }
            }
            , Cl = function(a, b) {
                for (var c = a.length / 3, d = new Array(c), e = c / 3, f = new Array(e), g = 0; e > g; g++)
                    f[g] = g;
                f.sort(function(c, d) {
                    var e = 9 * c
                        , f = [(a[e] + a[e + 3] + 2 * a[e + 6]) / 4, (a[e + 1] + a[e + 4] + 2 * a[e + 7]) / 4, (a[e + 2] + a[e + 5] + 2 * a[e + 8]) / 4];
                    e = 9 * d;
                    var g = [(a[e] + a[e + 3] + 2 * a[e + 6]) / 4, (a[e + 1] + a[e + 4] + 2 * a[e + 7]) / 4, (a[e + 2] + a[e + 5] + 2 * a[e + 8]) / 4]
                        , h = Sg(b, f) - Sg(b, g);
                    return h > 0 ? -1 : 0 > h ? 1 : 0
                });
                for (var g = 0; e > g; g++) {
                    var h = 3 * g
                        , i = 3 * f[g];
                    d[h] = i,
                        d[h + 1] = i + 1,
                        d[h + 2] = i + 2
                }
                return new jh(d)
            }
            , Dl = new kh([0, 0, 0, 1, 1, 1, 1, 0])
            , El = new kh([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1])
            , Fl = new jh([0, 1, 2, 2, 3, 0])
            , Gl = new kh([-.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5])
            , Hl = new jh([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23])
            , Il = new kh([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0])
            , Jl = new kh([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0])
            , Kl = uk(Gl, Hl)
            , Ll = (new kh([-.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, -.5, -.5, .5, .5, -.5, -.5, -.5, -.5, -.5, .5, -.5]),
                new jh([0, 1, 2, 3, 0, 7, 5, 4, 6, 7, 5, 3, 2, 4, 6, 1]),
                [-.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, .5, .5, .5, .5, .5, -.5, .5, -.5, .5, .5, -.5, -.5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5])
            , Ml = [-.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4]
            , Nl = function(a, b, c, d, e, f) {
                f = f || 16,
                    a = a || 16,
                    b = b || 0,
                    c = c || a;
                var g, h, i, j, k, l, m, n, o = .5, p = [], q = [], r = E / a, s = D / f;
                for (g = 0; f > g; g++)
                    for (k = g + 1,
                             j = g * s,
                             n = k * s,
                             h = b; c > h; h++)
                        l = h + 1,
                            i = h * r,
                            m = l * r,
                            p.push(o * A(j) * y(i), o * y(j), -o * A(j) * A(i), o * A(n) * y(m), o * y(n), -o * A(n) * A(m), o * A(j) * y(m), o * y(j), -o * A(j) * A(m), o * A(j) * y(i), o * y(j), -o * A(j) * A(i), o * A(n) * y(i), o * y(n), -o * A(n) * A(i), o * A(n) * y(m), o * y(n), -o * A(n) * A(m)),
                            q.push(h / a, g / f, l / a, k / f, l / a, g / f, h / a, g / f, h / a, k / f, l / a, k / f);
                if (d)
                    for (i = b * r,
                             g = 0; f > g; g++)
                        k = g + 1,
                            j = g * s,
                            n = k * s,
                            p.push(0, 0, 0, o * A(n) * y(i), o * y(n), -o * A(n) * A(i), o * A(j) * y(i), o * y(j), -o * A(j) * A(i)),
                            q.push(0, .5, b / a, k / f, b / a, g / f);
                if (e)
                    for (i = c * r,
                             g = 0; f > g; g++)
                        k = g + 1,
                            j = g * s,
                            n = k * s,
                            p.push(0, 0, 0, o * A(j) * y(i), o * y(j), -o * A(j) * A(i), o * A(n) * y(i), o * y(n), -o * A(n) * A(i)),
                            q.push(1, .5, c / a, g / f, c / a, k / f);
                return {
                    vs: p,
                    uv: q
                }
            }
            , Ol = function(a, b, c) {
                a = a || .17,
                    b = b || 12,
                    c = c || 18,
                    0 > a ? a = 0 : a > .25 && (a = .25);
                var d, e, f, g, h, i, j, k = .5, l = [], m = [], n = [], o = E / c, p = E / b, q = k - a;
                for (e = 0; b >= e; e++)
                    for (g = -D + e * p,
                             i = y(g),
                             h = A(g),
                             d = 0; c >= d; d++)
                        f = d * o,
                            j = q + a * i,
                            l.push(y(f) * j, h * a, -A(f) * j),
                            m.push(d / c, 1 - e / b);
                for (e = 0; b > e; e++) {
                    var r = e * (c + 1)
                        , s = (e + 1) * (c + 1);
                    for (d = 0; c > d; d++)
                        n.push(r + d, s + d + 1, s + d, r + d, r + d + 1, s + d + 1)
                }
                return {
                    vs: l,
                    uv: m,
                    is: n
                }
            }
            , Pl = function(a, b, c, d, e, f, g) {
                g = g || 12,
                    a = a || 18,
                    b = b || 0,
                    c = c || a,
                    f = f || .17,
                    0 > f ? f = 0 : f > .25 && (f = .25);
                var h, i, j, k, l, m, n, o, p, q, r = .5, s = [], t = [], u = E / a, v = E / g, w = r - f;
                for (j = 0; g > j; j++)
                    for (k = j + 1,
                             n = -D + j * v,
                             o = -D + k * v,
                             h = b; c > h; h++)
                        i = h + 1,
                            l = h * u,
                            m = i * u,
                            p = w + f * y(n),
                            q = w + f * y(o),
                            s.push(y(l) * p, A(n) * f, -A(l) * p, y(m) * p, A(n) * f, -A(m) * p, y(m) * q, A(o) * f, -A(m) * q, y(l) * p, A(n) * f, -A(l) * p, y(m) * q, A(o) * f, -A(m) * q, y(l) * q, A(o) * f, -A(l) * q),
                            t.push(h / a, 1 - j / g, i / a, 1 - j / g, i / a, 1 - k / g, h / a, 1 - j / g, i / a, 1 - k / g, h / a, 1 - k / g);
                if (d) {
                    var x = []
                        , z = [];
                    for (j = 0; g > j; j++)
                        k = j + 1,
                            n = -D + j * v,
                            o = -D + k * v,
                            l = b * u,
                            p = w + f * y(n),
                            q = w + f * y(o),
                            x.push(y(l) * p, A(n) * f, -A(l) * p, y(l) * q, A(o) * f, -A(l) * q, y(l) * w, 0, -A(l) * w),
                            z.push(.5 + .5 * y(n), .5 - .5 * A(n), .5 + .5 * y(o), .5 - .5 * A(o), .5, .5)
                }
                if (e) {
                    var B = []
                        , C = [];
                    for (j = 0; g > j; j++)
                        k = j + 1,
                            n = -D + j * v,
                            o = -D + k * v,
                            l = c * u,
                            p = w + f * y(n),
                            q = w + f * y(o),
                            B.push(y(l) * p, A(n) * f, -A(l) * p, y(l) * w, 0, -A(l) * w, y(l) * q, A(o) * f, -A(l) * q),
                            C.push(.5 - .5 * y(n), .5 - .5 * A(n), .5, .5, .5 - .5 * y(o), .5 - .5 * A(o))
                }
                return {
                    vs: s,
                    uv: t,
                    from_vs: x,
                    from_uv: z,
                    to_vs: B,
                    to_uv: C
                }
            }
            , Ql = function(a, b) {
                for (var c, d, e, f = .5, g = 16, h = [], i = [], j = [], k = E / g, l = 0; g >= l; l++)
                    c = l * k,
                        d = y(c) * f,
                        e = A(c) * f,
                        h.push(d, -f, e, d, f, e),
                        i.push(1 - l / g, 1, 1 - l / g, 0);
                for (l = 0; g > l; l++)
                    j.push(2 * l, 2 * l + 1, 2 * l + 3, 2 * l, 2 * l + 3, 2 * l + 2);
                if (b) {
                    var m = []
                        , n = []
                        , o = [];
                    for (m.push(0, -f, 0),
                             n.push(.5, .5),
                             l = 0; g >= l; l++)
                        c = l * k,
                            d = y(c),
                            e = A(c),
                            m.push(d * f, -f, -e * f),
                            n.push(.5 + .5 * d, .5 + .5 * e);
                    for (l = 0; g > l; l++)
                        o.push(0, l + 2, l + 1)
                }
                if (a) {
                    var p = []
                        , q = []
                        , r = [];
                    for (p.push(0, f, 0),
                             q.push(.5, .5),
                             l = 0; g >= l; l++)
                        c = l * k,
                            d = y(c),
                            e = A(c),
                            p.push(d * f, f, -e * f),
                            q.push(.5 + .5 * d, .5 - .5 * e);
                    for (l = 0; g > l; l++)
                        r.push(0, l + 1, l + 2)
                }
                return {
                    vs: h,
                    uv: i,
                    is: j,
                    bottom_vs: m,
                    bottom_uv: n,
                    bottom_is: o,
                    top_vs: p,
                    top_uv: q,
                    top_is: r
                }
            }
            , Rl = function(a, b, c, d, e, f, g) {
                a = a || 12,
                    b = b || 0,
                    c = c || a;
                for (var h, i, j, k, l, m, n, o, p = .5, q = [], r = [], s = E / a, t = b; c > t; t++)
                    h = t + 1,
                        i = t * s,
                        j = h * s,
                        k = y(i) * p,
                        l = A(i) * p,
                        m = y(j) * p,
                        n = A(j) * p,
                        q.push(k, -p, -l, m, -p, -n, k, p, -l, m, -p, -n, m, p, -n, k, p, -l),
                        r.push(t / a, 1, h / a, 1, t / a, 0, h / a, 1, h / a, 0, t / a, 0);
                if (g) {
                    var u = []
                        , v = [];
                    for (t = b; c > t; t++)
                        i = s * t,
                            j = s * (t + 1),
                            k = y(i),
                            l = A(i),
                            m = y(j),
                            n = A(j),
                            u.push(k * p, -p, -l * p, 0, -p, 0, m * p, -p, -n * p),
                            v.push(.5 + .5 * k, .5 + .5 * l, .5, .5, .5 + .5 * m, .5 + .5 * n)
                }
                if (f) {
                    var w = []
                        , x = [];
                    for (t = b; c > t; t++)
                        i = s * t,
                            j = s * (t + 1),
                            k = y(i),
                            l = A(i),
                            m = y(j),
                            n = A(j),
                            w.push(k * p, p, -l * p, m * p, p, -n * p, 0, p, 0),
                            x.push(.5 + .5 * k, .5 - .5 * l, .5 + .5 * m, .5 - .5 * n, .5, .5)
                }
                return d && (i = s * b,
                    k = y(i) * p,
                    l = A(i) * p,
                    o = b / a,
                    q.push(0, p, 0, 0, -p, 0, k, -p, -l, k, -p, -l, k, p, -l, 0, p, 0),
                    r.push(0, 0, 0, 1, o, 1, o, 1, o, 0, 0, 0)),
                e && (i = s * c,
                    k = y(i) * p,
                    l = A(i) * p,
                    o = c / a,
                    q.push(0, -p, 0, 0, p, 0, k, p, -l, k, p, -l, k, -p, -l, 0, -p, 0),
                    r.push(1, 1, 1, 0, o, 0, o, 0, o, 1, 1, 1)),
                    {
                        vs: q,
                        uv: r,
                        bottom_vs: u,
                        bottom_uv: v,
                        top_vs: w,
                        top_uv: x
                    }
            }
            , Sl = function(a, b, c, d, e) {
                b = b || 18,
                    c = c || 0,
                    d = d == j ? E : d,
                    e = e == j ? .5 : e;
                for (var f, g, h, i, k, l, m = [0, .5, .75, .875, .9375], n = [], o = [], p = [], q = d / b, r = 0; r < m.length; r++) {
                    var s = 0 === r % 2 ? 0 : .5;
                    for (f = 0; b >= f; f++)
                        g = (f + s) * q + c,
                            h = 1 - m[r],
                            n.push(y(g) * e * h, -e + 2 * m[r] * e, -A(g) * e * h),
                            o.push((f + s) / b, h)
                }
                for (r = 0; r < m.length - 1; r++) {
                    var t = r * (b + 1)
                        , u = (r + 1) * (b + 1);
                    for (f = 0; b > f; f++)
                        p.push(t + f, u + f + 1, u + f, t + f, t + f + 1, u + f + 1)
                }
                for (l = n.length / 3 - (b + 1),
                         f = 0; b > f; f++)
                    n.push(0, e, 0),
                        o.push((f + .5) / b, 0);
                for (f = 0; b > f; f++)
                    p.push(l + f, l + f + 1, l + (b + 1) + f);
                if (a) {
                    var v = []
                        , w = []
                        , x = [];
                    for (v.push(0, -e, 0),
                             w.push(.5, .5),
                             f = 0; b >= f; f++)
                        g = f * q + c,
                            i = y(g),
                            k = A(g),
                            v.push(i * e, -e, -k * e),
                            w.push(.5 + .5 * i, .5 + .5 * k);
                    for (f = 0; b > f; f++)
                        x.push(0, f + 2, f + 1)
                }
                return {
                    vs: n,
                    uv: o,
                    is: p,
                    bottom_vs: v,
                    bottom_uv: w,
                    bottom_is: x
                }
            }
            , Tl = function(a, b, c, d, e, f) {
                a = a || 16,
                    b = b || 0,
                    c = c || a;
                for (var g = .5, h = [], i = [], j = E / a, k = b; c > k; k++) {
                    var l = k + 1
                        , m = j * k
                        , n = j * l;
                    h.push(y(m) * g, -g, -A(m) * g, y(n) * g, -g, -A(n) * g, 0, g, 0),
                        i.push(k / a, 1, l / a, 1, (k + l) / 2 / a, 0)
                }
                if (f) {
                    var o = []
                        , p = [];
                    for (k = b; c > k; k++) {
                        m = j * k,
                            n = j * (k + 1);
                        var q = y(m)
                            , r = A(m)
                            , s = y(n)
                            , t = A(n);
                        o.push(q * g, -g, -r * g, 0, -g, 0, s * g, -g, -t * g),
                            p.push(.5 + .5 * q, .5 + .5 * r, .5, .5, .5 + .5 * s, .5 + .5 * t)
                    }
                }
                return d && (m = j * b,
                    h.push(0, g, 0, 0, -g, 0, y(m) * g, -g, -A(m) * g),
                    i.push(0, 0, 0, 1, b / a, 1)),
                e && (m = j * c,
                    h.push(0, -g, 0, 0, g, 0, y(m) * g, -g, -A(m) * g),
                    i.push(1, 1, 1, 0, c / a, 1)),
                    {
                        vs: h,
                        uv: i,
                        bottom_vs: o,
                        bottom_uv: p
                    }
            }
            , Ul = function(a, b, c, d, e, f, g, h) {
                for (var i = [], j = 0; j < a.length - 1; j += 2)
                    i.push({
                        x: a[j],
                        y: a[j + 1]
                    });
                return Ei(i, b, c, d, e, f, g, h, !1)
            }
            , Vl = {
                roundRect: function(a, b) {
                    return Ul([.5, .4, .5, .442, .471, .471, .442, .5, .4, .5, -.4, .5, -.442, .5, -.471, .471, -.5, .442, -.5, .4, -.5, -.4, -.5, -.442, -.471, -.471, -.442, -.5, -.4, -.5, .4, -.5, .442, -.5, .471, -.471, .5, -.442, .5, -.4, .5, .4], [1, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2], a, b, 3)
                },
                star: function(a, b) {
                    return Ul([.193, .079, .333, .5, 0, .233, -.333, .5, -.194, .079, -.5, -.167, -.112, -.167, 0, -.5, .111, -.167, .5, -.167], [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5], a, b)
                },
                rect: function(a, b) {
                    return Ul([.5, -.5, .5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 2, 5], a, b)
                },
                triangle: function(a, b) {
                    return Ul([0, -.5, .5, .5, -.5, .5], [1, 2, 2, 5], a, b)
                },
                rightTriangle: function(a, b) {
                    return Ul([.5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 5], a, b)
                },
                parallelogram: function(a, b) {
                    return Ul([.5, -.5, .25, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], a, b)
                },
                trapezoid: function(a, b) {
                    return Ul([.25, -.5, .5, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], a, b)
                }
            }
            , Wl = {
                sphere: 1,
                cylinder: 1,
                cone: 1,
                torus: 1
            }
            , Xl = {
                torus: 1,
                sphere: 1
            }
            , Yl = vd(Eg(Vl), {
                cylinder: 1
            })
            , Zl = vd(Eg(Vl), {
                cylinder: 1,
                cone: 1
            })
            , $l = function(a, b, c) {
                var d, e = Ph(a.mat, c, b), f = Ph(a.s3, c, b), g = Ph(a.t3, c, b), h = Ph(a.r3, c, b);
                return (f || h || g || e) && (d = qh(b._6O),
                    Tk(b, Ah(e, f, h, Ph(a.rotationMode, c, b), g))),
                    d
            }
            , _l = function(a, b, c, d, e, f, g) {
                if (ld(c))
                    c.forEach(function(c) {
                        _l(a, b, c, d, e, f, g)
                    });
                else if (gd(c))
                    _l(a, b, cm(d, c), d, e, f, g);
                else if (jd(c))
                    if (c.shape3d) {
                        var h = $l(c, a, b);
                        _l(a, b, c.shape3d, d, e, f, c),
                        h && Rk(a, h)
                    } else
                        am(a, b, c, d, e, f, g)
            }
            , am = function(a, b, c, d, e, f, g) {
                if (g = g || Ic,
                    !f || f(d("shape3d.transparent", c.transparent, g.transparent))) {
                    var h = $l(c, a, b);
                    dm(c);
                    var i = a._26I
                        , j = a._prg
                        , k = a._buffer
                        , l = d("shape3d.color", c.color, g.color);
                    e || (e = d("shape3d.blend", c.blend, g.blend)),
                        Fk(i, j, e, d("shape3d.light", c.light, g.light), d("shape3d.opacity", c.opacity, g.opacity), d("shape3d.reverse.flip", c.reverseFlip, g.reverseFlip), d("shape3d.reverse.color", c.reverseColor, g.reverseColor), d("shape3d.reverse.cull", c.reverseCull, g.reverseCull)),
                    c.vs && d(Hb, c.visible, g.visible) && bm(i, j, k, l, a.getTexture(d("shape3d.image", c.image, g.image), b), d("shape3d.discard.selectable", c.discardSelectable, g.discardSelectable), c.vs, c.uv, c.ns, c.is, d("shape3d.uv.offset", c.uvOffset, g.uvOffset), d("shape3d.uv.scale", c.uvScale, g.uvScale)),
                    c.top_vs && d(Kb, c.topVisible, g.topVisible) && bm(i, j, k, d("shape3d.top.color", c.topColor, g.topColor) || l, a.getTexture(d("shape3d.top.image", c.topImage, g.topImage), b), d("shape3d.top.discard.selectable", c.topDiscardSelectable, g.topDiscardSelectable), c.top_vs, c.top_uv, c.top_ns, c.top_is, d("shape3d.top.uv.offset", c.topUvOffset, g.topUvOffset), d("shape3d.top.uv.scale", c.topUvScale, g.topUvScale)),
                    c.bottom_vs && d(Lb, c.bottomVisible, g.bottomVisible) && bm(i, j, k, d("shape3d.bottom.color", c.bottomColor, g.bottomColor) || l, a.getTexture(d("shape3d.bottom.image", c.bottomImage, g.bottomImage), b), d("shape3d.bottom.discard.selectable", c.bottomDiscardSelectable, g.bottomDiscardSelectable), c.bottom_vs, c.bottom_uv, c.bottom_ns, c.bottom_is, d("shape3d.bottom.uv.offset", c.bottomUvOffset, g.bottomUvOffset), d("shape3d.bottom.uv.scale", c.bottomUvScale, g.bottomUvScale)),
                    c.from_vs && d(Ib, c.fromVisible, g.fromVisible) && bm(i, j, k, d("shape3d.from.color", c.fromColor, g.fromColor) || l, a.getTexture(d("shape3d.from.image", c.fromImage, g.fromImage), b), d("shape3d.from.discard.selectable", c.fromDiscardSelectable, g.fromDiscardSelectable), c.from_vs, c.from_uv, c.from_ns, c.from_is, d("shape3d.from.uv.offset", c.fromUvOffset, g.fromUvOffset), d("shape3d.from.uv.scale", c.fromUvScale, g.fromUvScale)),
                    c.to_vs && d(Jb, c.toVisible, g.toVisible) && bm(i, j, k, d("shape3d.to.color", c.toColor, g.toColor) || l, a.getTexture(d("shape3d.to.image", c.toImage, g.toImage), b), d("shape3d.to.discard.selectable", c.toDiscardSelectable, g.toDiscardSelectable), c.to_vs, c.to_uv, c.to_ns, c.to_is, d("shape3d.to.uv.offset", c.toUvOffset, g.toUvOffset), d("shape3d.to.uv.scale", c.toUvScale, g.toUvScale)),
                        Gk(i, j),
                    h && Rk(a, h)
                }
            }
            , bm = function(a, b, c, d, e, f, g, h, i, j, k, l) {
                g && (Ok(a, b.uDiffuse, d),
                h && Hk(a, b, e, f, c.uv, h, k, l),
                    Mk(a, c.vs, g, b.aPosition),
                    Mk(a, c.ns, i, b.aNormal),
                    j ? (Nk(a, c.is, j),
                        Lk(a, 0, j.length)) : Kk(a, 0, g.length / 3),
                h && Ik(a, b, e))
            }
            , cm = function(a, b) {
                if (b || (b = a(Fb)),
                        !b)
                    return j;
                if (jd(b))
                    return b;
                var c = Bc[b];
                if (c)
                    return c;
                var d = b;
                if (Wl[b]) {
                    var e = a("shape3d.side")
                        , f = a("shape3d.side.from")
                        , g = a("shape3d.side.to")
                        , h = a(Ib)
                        , i = a(Jb);
                    3 > e ? (e = 0,
                        f = 0,
                        g = 0,
                        h = !1,
                        i = !1) : ((f == j || 0 > f) && (f = 0),
                    (g == j || g > e) && (g = e),
                    0 === f && g === e && (h = !1,
                        i = !1)),
                        d += "-" + e + "-" + f + "-" + g + "-" + h + "-" + i
                }
                if (Yl[b]) {
                    var k = a(Kb);
                    d += "-" + k
                }
                if (Zl[b]) {
                    var l = a(Lb);
                    d += "-" + l
                }
                if ("torus" === b) {
                    var n = a("shape3d.torus.radius");
                    0 > n ? n = 0 : n > .25 && (n = .25),
                        d += "-" + n
                }
                if (Xl[b]) {
                    var o = a(Gb);
                    d += "-" + o
                }
                return c = Cc[d],
                c || ("box" === b ? c = m.createBoxModel() : Vl[b] ? c = Vl[b](k, l) : "sphere" === b ? c = m.createSphereModel(e, f, g, h, i, o) : b === sa ? c = m.createCylinderModel(e, f, g, h, i, k, l) : "cone" === b ? c = m.createConeModel(e, f, g, h, i, l) : "torus" === b && (c = m.createTorusModel(e, f, g, h, i, n, o)),
                    Cc[d] = c),
                    c
            }
            , dm = function() {
                var a = ["vs", "ns", "uv", "top_vs", "top_ns", "top_uv", "bottom_vs", "bottom_ns", "bottom_uv", "from_vs", "from_ns", "from_uv", "to_vs", "to_ns", "to_uv", "er", "al"]
                    , b = ["is", "top_is", "bottom_is", "from_is", "to_is"];
                return e = xd(cl.substr(cl.indexOf("^#") + 2)),
                    Eh(m[ed(Xb + a[15] + "n" + a[16])]()) && Ke() ? function(c) {
                        c && !c._complete_ && (c._complete_ = !0,
                        c.vs && Ad(c.ns) && (c.ns = uk(c.vs, c.is)),
                        c.top_vs && Ad(c.top_ns) && (c.top_ns = uk(c.top_vs, c.top_is)),
                        c.bottom_vs && Ad(c.bottom_ns) && (c.bottom_ns = uk(c.bottom_vs, c.bottom_is)),
                        c.from_vs && Ad(c.from_ns) && (c.from_ns = uk(c.from_vs, c.from_is)),
                        c.to_vs && Ad(c.to_ns) && (c.to_ns = uk(c.to_vs, c.to_is)),
                            a.forEach(function(a) {
                                var b = c[a];
                                ld(b) && (c[a] = new kh(b))
                            }),
                            b.forEach(function(a) {
                                var b = c[a];
                                ld(b) && (c[a] = new jh(b))
                            }))
                    }
                        : void 0
            }()
            , em = function(a, b) {
                var c = a[b];
                ld(c) && (a[b] = new kh(c))
            }
        ;
        vd(Uf, {
            _25Q: function(a) {
                a._16O = function(a, b, c, d, e, f, g, h, i) {
                    var j = this.info;
                    if (j) {
                        var k, l, m, n, o, p, q = oh();
                        if (Yh[b] ? (k = j.p3,
                                l = j.c1,
                                m = j.c2) : Xh[b] ? (l = j.s1 || j.c1,
                                m = j.s2 || j.c2) : (l = j.t1 || j.c1,
                                m = j.t2 || j.c2),
                                k)
                            p = Vk(b, Nc, c, d, h, i);
                        else {
                            var r = lh(m, l)
                                , s = Sg(l, m);
                            n = [0, -H(r[2], r[0]), C(r[1] / s)],
                                o = "zyx",
                                k = [(l[0] + m[0]) / 2, (l[1] + m[1]) / 2, (l[2] + m[2]) / 2],
                                p = Vk(b, [s, 0, 0], c, d, h, i)
                        }
                        return Wk(q, p, k, d, e, f, g, a, n, o)
                    }
                    return ph
                }
                    ,
                    a._80o = function(a, b, c) {
                        var d = this
                            , e = d.shapeModel;
                        if (e) {
                            var f = d.gv;
                            Tk(f),
                                _l(f, d.data, e, d.s, d.getBodyColor(), c)
                        }
                    }
                    ,
                    a.createLineModel = function(a, b, c, d, e) {
                        for (var f = this, g = f.s, h = hm(a, b, g(Gb)), i = [], k = 0; k < h.length; k++) {
                            var l = h[k]
                                , m = l.length;
                            if (m > 1) {
                                var n = l[0];
                                i.push(n.x, n.y, n.z);
                                for (var o = 1; m - 1 > o; o++)
                                    n = l[o],
                                        i.push(n.x, n.y, n.z),
                                        i.push(n.x, n.y, n.z);
                                n = l[m - 1],
                                    i.push(n.x, n.y, n.z)
                            }
                        }
                        var p, q, r, s = g(d + ".color"), t = g(e), u = 0;
                        return t && (q = g(e + ".color"),
                            p = g(e + ".pattern"),
                            u = g(e + ".offset"),
                            r = s),
                            sl(f.gv, f.data, i, q || s, r ? j : g(d + ".gradient.color"), c, p || g(d + ".pattern"), u, r),
                            h
                    }
                    ,
                    a.createTubeModel = function(a, b, c, d) {
                        for (var e = this, f = e.s, g = f("shape3d.side") || fh, h = f("shape3d.start.angle"), i = f(Kb) ? f("shape3d.top.cap") : j, k = f(Lb) ? f("shape3d.bottom.cap") : j, l = "flat" === i, m = "flat" === k, n = l && (d ? d.uv : f("shape3d.top.image")), o = m && (d ? d.uv : f("shape3d.bottom.image")), p = d ? d.uv : f("shape3d.image"), q = {
                            vs: [],
                            uv: p ? [] : j,
                            top_vs: l ? [] : j,
                            top_uv: n ? [] : j,
                            bottom_vs: m ? [] : j,
                            bottom_uv: o ? [] : j
                        }, r = hm(a, b, f(Gb), c), s = 0, t = r.length; t > s; s++)
                            jm(q, r[s], f(Mb), c, g, h, i, k);
                        if (d) {
                            var u = [];
                            vl(e.gv, e.data, q, f, e.getBodyColor(), [], d, u),
                            u.length && (td(d.vs, u),
                                td(d.ns, uk(u)))
                        } else
                            e.shapeModel = q;
                        return r
                    }
                    ,
                    a.getCache = function() {
                        var a = this.info;
                        if (a) {
                            var b = a.list;
                            if (b) {
                                var c = a.cache;
                                return c || (c = a.cache = gm(b)),
                                    c
                            }
                        }
                        return j
                    }
            }
        });
        var fm = function(a, b) {
            for (var c, d = 0, e = a.length, f = 0, g = e - 1; g >= f; )
                if (d = s(f + (g - f) / 2),
                        c = a[d].length - b,
                    0 > c)
                    f = d + 1;
                else {
                    if (!(c > 0)) {
                        g = d;
                        break
                    }
                    g = d - 1
                }
            d = g;
            var h = a[d]
                , i = h.point;
            return d === e - 1 || h.length === b || (i = (new Gi).subVectors(a[d + 1].point, i).normalize().multiplyScalar(b - h.length).add(i)),
                {
                    point: i,
                    tangent: h.tangent
                }
        }
            , gm = function(a) {
            for (var b, c, d = [], e = 0, f = 0; f < a.length; f++) {
                for (var g = a[f], h = 0; h < g.length; h++) {
                    b = g[h],
                    c && (e += c.distanceTo(b));
                    var i = new Gi
                        , j = g[h + 1];
                    j ? i.subVectors(j, b) : c ? i.subVectors(b, c) : i.x = 1,
                        i.normalize(),
                        d.push({
                            point: b,
                            length: e,
                            tangent: i
                        }),
                        c = b
                }
                c = null
            }
            return d
        }
            , hm = function(a, b, c, d) {
            c = c || dh;
            for (var e = [], f = 0, g = a.size(); g > f; f++) {
                var h = a.get(f);
                e.push(new Gi(h.x,h.e || 0,h.y))
            }
            md(b) && (b = b._as);
            for (var i, k, l, m, n, o = [], p = 0, q = 0, r = b ? b.length : g; r > q; q++)
                if (n = b ? b[q] : 0 === q ? 1 : 2,
                    1 === n)
                    o.push(l = []),
                        l.push(e[p++]);
                else if (2 === n || 5 === n)
                    if (m = 2 === n ? e[p++] : l[0],
                            d) {
                        var s = b ? b[q + 1] : r > q + 1 ? 2 : j;
                        if (2 === s || 5 === s) {
                            var t = l[l.length - 1]
                                , u = 2 === s ? e[p] : l[0]
                                , v = (new Gi).subVectors(t, m)
                                , x = (new Gi).subVectors(u, m)
                                , y = v.length()
                                , z = x.length();
                            if (d > y / 2 && d > z / 2)
                                l.push(m);
                            else
                                for (v.multiplyScalar(w(d, y / 2) / y).add(m),
                                         x.multiplyScalar(w(d, z / 2) / z).add(m),
                                         i = new fj(v,m,x).getPoints(c),
                                         k = 0; c >= k; k++)
                                    l.push(i[k])
                        } else
                            l.push(m)
                    } else
                        l.push(m);
                else if (3 === n)
                    for (i = new fj(l[l.length - 1],e[p++],e[p++]).getPoints(c),
                             k = 1; c >= k; k++)
                        l.push(i[k]);
                else if (4 === n)
                    for (i = new gj(l[l.length - 1],e[p++],e[p++],e[p++]).getPoints(c),
                             k = 1; c >= k; k++)
                        l.push(i[k]);
            return o
        }
            , im = function(a) {
            for (var b, c, d = new Gi, e = [], f = [], g = [], h = 0, i = a.length; i > h; h++)
                b = a[h],
                    c = a[h + 1],
                    c ? d.subVectors(c, b) : d.subVectors(b, a[h - 1]),
                    e.push(d.normalize().clone());
            var j, k, l, m, n = new Gi, o = new Gi, p = new Hi, q = 1e-4, r = Number.MAX_VALUE, s = e[0], t = f[0] = new Gi, u = g[0] = new Gi;
            for (k = x(s.x),
                     l = x(s.y),
                     m = x(s.z),
                 r >= k && (r = k,
                     n.set(1, 0, 0)),
                 r >= l && (r = l,
                     n.set(0, 1, 0)),
                 r >= m && n.set(0, 0, 1),
                     o.crossVectors(s, n).normalize(),
                     t.crossVectors(s, o),
                     u.crossVectors(s, t),
                     h = 1; i > h; h++)
                f[h] = f[h - 1].clone(),
                    g[h] = g[h - 1].clone(),
                    o.crossVectors(e[h - 1], e[h]),
                o.length() > q && (o.normalize(),
                    j = z(Cd(e[h - 1].dot(e[h]), -1, 1)),
                    f[h].applyMatrix4(p.makeRotationAxis(o, j))),
                    g[h].crossVectors(e[h], f[h]);
            return {
                B: g,
                T: e,
                N: f
            }
        }
            , jm = function() {
            var a = function(a) {
                    for (var b = 1; b < arguments.length; b++) {
                        var c = arguments[b];
                        a.push(c.x, c.y, c.z)
                    }
                }
                , b = function(a) {
                    for (var b = 1; b < arguments.length; b++) {
                        var c = arguments[b].uv;
                        a.push(c[0], c[1])
                    }
                }
                , d = function(a, b, c, d, e) {
                    var f = -d * y(e)
                        , g = d * A(e);
                    return new Gi(a.x + f * c.x + g * b.x,a.y + f * c.y + g * b.y,a.z + f * c.z + g * b.z)
                }
                , e = function(a, b, c, e, f, g, h) {
                    for (var i = [], k = E / f, l = 0; f >= l; l++) {
                        var m = d(a, b, c, e, l * k + g);
                        i.push(m),
                        h != j && (m.uv = [h, l / f])
                    }
                    return i
                }
                , f = function(b, c, e, f, g, h, i, j) {
                    var k = c ? b.top_vs : b.bottom_vs;
                    if (k)
                        for (var l = c ? b.top_uv : b.bottom_uv, m = E / i, n = 0; i > n; n++) {
                            var o, p;
                            c ? (o = n * m + j,
                                p = (n + 1) * m + j) : (p = n * m + j,
                                o = (n + 1) * m + j),
                                a(k, d(e, f, g, h, o), d(e, f, g, h, p), e),
                            l && l.push(.5 - .5 * y(o), .5 - .5 * A(o), .5 - .5 * y(p), .5 - .5 * A(p), .5, .5)
                        }
                }
            ;
            return function(d, g, h, i, k, l, m, n) {
                var o = g.length;
                if (o > 1) {
                    var p, q, r, s, v, w, x, y = im(g), z = y.T, A = y.N, B = y.B;
                    "flat" === m && f(d, !0, g[0], B[0], A[0], i, k, l),
                    "flat" === n && f(d, !1, g[o - 1], B[o - 1], A[o - 1], i, k, l);
                    var C, D, E = [], F = t(k / 2), G = "round" === m, H = "round" === n, I = g[0], J = z[0], K = B[0], L = A[0], M = g[o - 1], N = z[o - 1], O = B[o - 1], P = A[o - 1];
                    if (G) {
                        for (r = 1; F >= r; r++)
                            A.splice(0, 0, L),
                                B.splice(0, 0, K),
                                z.splice(0, 0, J),
                                D = -r / F * i,
                                g.splice(0, 0, J.clone().multiplyScalar(D).add(I)),
                                E[F - r] = u(i * i - D * D);
                        o += F
                    }
                    if (H) {
                        for (r = 1; F >= r; r++)
                            A.push(P),
                                B.push(O),
                                z.push(N),
                                D = r / F * i,
                                g.push(N.clone().multiplyScalar(D).add(M)),
                                E[g.length - 1] = u(i * i - D * D);
                        o += F
                    }
                    if (d.uv) {
                        var Q = 0
                            , R = 0
                            , S = [];
                        for (h && (Q = h),
                                 v = g[0],
                                 S[0] = 0,
                                 r = 1; o > r; r++)
                            s = g[r],
                                S[r] = v.distanceTo(s),
                                v = s,
                            h || (Q += S[r]);
                        for (C = [],
                                 r = 0; o > r; r++)
                            R += S[r],
                                C[r] = Q ? R / Q : 0
                    }
                    for (r = 0; o > r; r++) {
                        if (s = g[r],
                                w = B[r],
                                x = A[r],
                                p = e(s, w, x, E[r] === c ? i : E[r], k, l, C ? C[r] : j),
                                q)
                            for (var T = 0; k > T; T++) {
                                var U = q[T]
                                    , V = q[T + 1] || q[0]
                                    , W = p[T]
                                    , X = p[T + 1] || p[0];
                                a(d.vs, V, U, W, W, X, V),
                                d.uv && b(d.uv, V, U, W, W, X, V)
                            }
                        q = p
                    }
                }
            }
        }();
        vd(m, {
            getLineLength: function(a) {
                return a[a.length - 1].length
            },
            getLineOffset: function(a, b) {
                return fm(a, b)
            },
            getLineCacheInfo: function(a, b, c, d) {
                return gm(hm(a, b, c, d))
            }
        });
        var km = k.Light = function() {
                yd(km, this),
                    this.s(Sj, n[Sj]),
                    this.s(Fb, "sphere"),
                    this.s3(20, 20, 20)
            }
        ;
        hh("Light", pj, {
            _image: "light_icon",
            _icon: "light_icon",
            onStyleChanged: function(a, b, c) {
                km.superClass.onStyleChanged.apply(this, arguments),
                a === Sj && this.s("shape3d.color", c)
            }
        });
        var lm = al.Graph3dView = function(a, b) {
            var c = this;
            c._attributes = b || m.graph3dViewAttributes,
                c._25I = {},
                c._view = Rd(1);
            var d = c._canvas = Sd(c._view);
            d.addEventListener("webglcontextlost", function(a) {
                a.preventDefault(),
                    wk(c),
                    c._26I = j,
                    c._1o.texture = j,
                    c._35O = !0
            }, !1),
                d.addEventListener("webglcontextrestored", function() {
                    c._35O = !1,
                        c.iv()
                }, !1),
                c._34O = {},
                c._33O = {},
                c._wireframeIndexMap = {},
                c._wireframeModelMap = {},
                c._polylineIndexMap = {},
                c._polylineIndexMap = {},
                c._8O = [],
                c._7O = oh(),
                c._6O = oh(),
                c._1o = new pm(c),
                c._30O = new sm(c),
                c._31O = new qm(c),
                c._32O = new rm(c),
                c._33Q = !0,
                c._eye = Eg(m.graph3dViewEye),
                c._center = Eg(m.graph3dViewCenter),
                c._up = Eg(m.graph3dViewUp),
                c._lightChanged = !1,
                c._59O = [],
                c._spots = [],
                c._dirs = [],
                c.dm(a ? a : new Vh),
                c.setInteractors([new om(c)])
        }
            , mm = {
            fogDisabled: 1,
            dashDisabled: 1,
            batchColorDisabled: 1,
            batchBlendDisabled: 1,
            batchBrightnessDisabled: 1
        };
        bl("Graph3dView", b, {
            ms_v: 1,
            ms_tip: 1,
            ms_gv: 1,
            ms_dm: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_sm: 1,
            _51o: 1,
            ms_ac: ["devicePixelRatio", "boundaries", "moveStep", "rotateStep", "sizeEditableFunc", "rotationEditableFunc", "editableFunc", "rotatable", "zoomable", "pannable", "walkable", "resettable", "mouseRoamable", db, fb, "firstPersonMode", pb, "movableFunc", "gridVisible", "gridSize", "gridGap", "gridColor", "originAxisVisible", "centerAxisVisible", "axisXColor", "axisYColor", "axisZColor", "editSizeColor", "rectSelectable", "rectSelectBackground", "headlightRange", "headlightColor", "headlightIntensity", "headlightDisabled", "ortho", "orthoWidth", "fovy", "near", "far", ga, fa, "up", "aspect", "fogDisabled", "fogColor", "fogNear", "fogFar", "dashDisabled", "batchColorDisabled", "batchBlendDisabled", "batchBrightnessDisabled"],
            _editable: !1,
            _devicePixelRatio: c,
            _boundaries: c,
            _moveStep: m.graph3dViewMoveStep,
            _rotateStep: m.graph3dViewRotateStep,
            _pannable: m.graph3dViewPannable,
            _rotatable: m.graph3dViewRotatable,
            _walkable: m.graph3dViewWalkable,
            _resettable: m.graph3dViewResettable,
            _zoomable: m.graph3dViewZoomable,
            _firstPersonMode: m.graph3dViewFirstPersonMode,
            _mouseRoamable: m.graph3dViewMouseRoamable,
            _gridVisible: m.graph3dViewGridVisible,
            _gridSize: m.graph3dViewGridSize,
            _gridGap: m.graph3dViewGridGap,
            _gridColor: m.graph3dViewGridColor,
            _originAxisVisible: m.graph3dViewOriginAxisVisible,
            _centerAxisVisible: m.graph3dViewCenterAxisVisible,
            _axisXColor: m.graph3dViewAxisXColor,
            _axisYColor: m.graph3dViewAxisYColor,
            _axisZColor: m.graph3dViewAxisZColor,
            _ortho: m.graph3dViewOrtho,
            _orthoWidth: m.graph3dViewOrthoWidth,
            _fovy: m.graph3dViewFovy,
            _near: m.graph3dViewNear,
            _far: m.graph3dViewFar,
            _headlightColor: m.graph3dViewHeadlightColor,
            _headlightIntensity: m.graph3dViewHeadlightIntensity,
            _headlightRange: m.graph3dViewHeadlightRange,
            _headlightDisabled: m.graph3dViewHeadlightDisabled,
            _rectSelectable: m.graph3dViewRectSelectable,
            _rectSelectBackground: m.graph3dViewRectSelectBackground,
            _editSizeColor: m.graph3dViewEditSizeColor,
            _autoMakeVisible: Yf,
            _fogDisabled: m.graph3dViewFogDisabled,
            _fogColor: m.graph3dViewFogColor,
            _fogNear: m.graph3dViewFogNear,
            _fogFar: m.graph3dViewFogFar,
            _dashDisabled: m.graph3dViewDashDisabled,
            _batchColorDisabled: m.graph3dViewBatchColorDisabled,
            _batchBlendDisabled: m.graph3dViewBatchBlendDisabled,
            _batchBrightnessDisabled: m.graph3dViewBatchBrightnessDisabled,
            setEye: function(a, b, c) {
                1 === arguments.length && (b = a[1],
                    c = a[2],
                    a = a[0]);
                var d = this._eye;
                d[0] = a,
                    d[1] = b,
                    d[2] = c,
                    this.fp(ga, j, d)
            },
            setCenter: function(a, b, c) {
                1 === arguments.length && (b = a[1],
                    c = a[2],
                    a = a[0]);
                var d = this._center;
                d[0] = a,
                    d[1] = b,
                    d[2] = c,
                    this.fp(fa, j, d)
            },
            setUp: function(a, b, c) {
                1 === arguments.length && (b = a[1],
                    c = a[2],
                    a = a[0]);
                var d = this._up;
                d[0] = a,
                    d[1] = b,
                    d[2] = c,
                    this.fp("up", j, d)
            },
            isTransparentMask: function(a) {
                return a.s("transparent.mask")
            },
            getAspect: function() {
                var a = this
                    , b = a._aspect;
                return b ? b : a.getWidth() / a.getHeight()
            },
            getCanvas: function() {
                return this._canvas
            },
            setDataModel: function(a) {
                var b = this
                    , c = b._dataModel
                    , d = b._3o;
                c !== a && (c && (c.umm(b.handleDataModelChange, b),
                    c.umd(b.handleDataPropertyChange, b),
                d || c.sm().ums(b._16o, b)),
                    b._dataModel = a,
                    a.mm(b.handleDataModelChange, b),
                    a.md(b.handleDataPropertyChange, b),
                    d ? d._21I(a) : a.sm().ms(b._16o, b),
                    b.invalidateAll(!0),
                    b.invalidateLight(),
                    b.fp(Eb, c, a))
            },
            handleDataPropertyChange: function(a) {
                var b = a.data;
                this.invalidateData(b),
                Yj(b) && "s:light.type" === a.property && this.invalidateLight()
            },
            invalidateLight: function() {
                this._lightChanged || (this._lightChanged = !0,
                    this.iv())
            },
            onPropertyChanged: function(a) {
                var b = this
                    , c = a.property;
                b.iv(),
                    b._18Q = j,
                    "eye" === c ? b._33Q = !0 : "devicePixelRatio" === c ? b._42(j, b._devicePixelRatio || Xf) : mm[c] && wk(b)
            },
            _5O: function(a) {
                var b = a._22Q();
                return b ? new b(this,a) : j
            },
            getData3dUI: function(a) {
                var b = this._25I[a._id];
                return b === c && (b = this._5O(a),
                    this._25I[a._id] = b),
                    b
            },
            invalidateAll: function(a) {
                var b = this;
                if (a) {
                    for (var c in b._25I) {
                        var d = b._25I[c];
                        d && d.dispose()
                    }
                    b._25I = {},
                        b.iv(),
                        ml(b)
                } else
                    b.dm().each(function(a) {
                        b.invalidateData(a)
                    })
            },
            invalidateSelection: function() {
                var a = this;
                a.sm().each(function(b) {
                    a.invalidateData(b)
                })
            },
            invalidateData: function(a) {
                var b = this
                    , c = b.getData3dUI(a);
                c && (c.iv(),
                    b.iv()),
                    ml(b, a)
            },
            invalidateBatch: function(a) {
                var b = this
                    , c = b._33O
                    , d = c[a];
                d && (d.ds.forEach(function(a) {
                    var c = b.getData3dUI(a);
                    c && c.iv(),
                        delete b._34O[a._id]
                }),
                    delete c[a],
                    b.iv())
            },
            handleDataModelChange: function(a) {
                var b = this
                    , c = a.kind
                    , d = a.data;
                if ("add" === c)
                    b.invalidateData(d),
                    pd(d) && d.getEdgeGroup() && d.getEdgeGroup().eachSiblingEdge(b.invalidateData, b),
                    Yj(d) && b.invalidateLight();
                else if (c === wa) {
                    var e = d._id
                        , f = b._25I[e];
                    f && (f.dispose(),
                        delete b._25I[e],
                        b.iv()),
                    d === b._currentSubGraph && b.setCurrentSubGraph(j),
                        ml(b, d),
                    Yj(d) && b.invalidateLight()
                } else
                    c === xa && (b.invalidateAll(!0),
                        b.setCurrentSubGraph(j),
                        ml(b),
                        b.invalidateLight())
            },
            toCanvas: function(a) {
                var b = this
                    , c = b.getGL();
                if (b.validate(),
                        a) {
                    var d = c.getParameter(c.COLOR_CLEAR_VALUE);
                    Ck(c, a)
                }
                b._42(j, 1);
                var e = b.getWidth()
                    , f = b.getHeight()
                    , g = new Uint8Array(4 * e * f)
                    , h = Sd()
                    , i = h.getContext("2d");
                c.readPixels(0, 0, e, f, c.RGBA, c.UNSIGNED_BYTE, g),
                    Vd(h, e, f, 1);
                for (var k = i.getImageData(0, 0, e, f), l = k.data, m = 0; m < l.length; m += 4) {
                    var n = m / 4
                        , o = s(n / e)
                        , p = n - o * e;
                    n = 4 * ((f - 1 - o) * e + p),
                        l[n] = g[m],
                        l[n + 1] = g[m + 1],
                        l[n + 2] = g[m + 2],
                        l[n + 3] = g[m + 3]
                }
                return i.putImageData(k, 0, 0),
                a && Ck(c, d),
                    b._42(j, b._devicePixelRatio || Xf),
                    h
            },
            toDataURL: function(a, b) {
                var c = this
                    , d = c.getGL();
                if (c.validate(),
                        a) {
                    var e = d.getParameter(d.COLOR_CLEAR_VALUE);
                    Ck(d, a)
                }
                c._42(j, 1);
                var f = c._canvas.toDataURL(b || "image/png", 1);
                return a && Ck(d, e),
                    c._42(j, c._devicePixelRatio || Xf),
                    f
            },
            getGL: function() {
                var a = this
                    , b = a._26I
                    , c = a._prg;
                if (!b)
                    try {
                        a._2O = {},
                            b = a._26I = a._canvas.getContext("webgl", a._attributes) || a._canvas.getContext("experimental-webgl", a._attributes),
                            a._buffer = {
                                vs: yk(b),
                                ns: yk(b),
                                is: yk(b),
                                uv: yk(b),
                                batchColor: yk(b),
                                batchBlend: yk(b),
                                batchBrightness: yk(b),
                                lineDistance: yk(b)
                            },
                            a._1O = vk(b);
                        var d = a._cube = {
                            vs: yk(b),
                            ns: yk(b),
                            is: yk(b),
                            uv: yk(b)
                        };
                        Mk(b, d.vs, Gl),
                            Mk(b, d.ns, Kl),
                            Mk(b, d.uv, Il),
                            Nk(b, d.is, Hl)
                    } catch (e) {}
                if (b && !c) {
                    if (c = a._prg = b.createProgram(),
                            !c)
                        return j;
                    var f = a._dirs.length
                        , g = a._spots.length
                        , h = a._59O.length
                        , i = ["uPMatrix", "uMVMatrix", "uNMatrix", "uViewMatrix", "aNormal", "aUv", "uOffsetScale", "uDiffuse", "uBlend", "uBlendColor", "uBrightness", "uPartOpacity", "uTransparent", "uTexture", "uSampler", "uDiscardSelectable", "uFix", "uPick", "uReverseFlip", "uFixPickReverseColor", "uBatchBrightness", "aBatchBrightness", "uBatchColor", "aBatchColor", "uBatchBlend", "aBatchBlend", "uDash", "aLineDistance", "uDashDistance", "uDashGapDistance", "uLight", "uHeadlightRange", "uHeadlightColor", "uFogColor", "uFogNear", "uFogFar"];
                    f && i.push("uDirColor", "uDirPosition"),
                    g && i.push("uSpotColor", "uSpotRange", "uSpotAngle", "uSpotExponent", "uSpotPosition", "uSpotCenter"),
                    h && i.push("uPointColor", "uPointRange", "uPointPosition"),
                        Ck(b, [0, 0, 0, 0]),
                        b.clearDepth(1),
                        b.enable(b.DEPTH_TEST),
                        b.depthFunc(b.LEQUAL),
                        b.enable(b.BLEND),
                        b.blendFunc(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA),
                    Uj || (cl = xd(cl.substring(0, cl.indexOf("^#"))),
                        dl = xd(dl),
                        Uj = !0);
                    var k = ["#define MAX_DIR " + f, "#define MAX_SPOT " + g, "#define MAX_POINT " + h, a._fogDisabled ? "" : "#define FOG", a._dashDisabled ? "" : "#define DASH", a._batchColorDisabled ? "" : "#define BATCHCOLOR", a._batchBlendDisabled ? "" : "#define BATCHBLEND", a._batchBrightnessDisabled ? "" : "#define BATCHBRIGHTNESS", ""].join("\n")
                        , l = xk(b, c, b.VERTEX_SHADER, cl.replace("PREFIX", k))
                        , m = xk(b, c, b.FRAGMENT_SHADER, dl.replace("PREFIX", k));
                    T ? i.push("aPosition") : (c.aPosition = 0,
                        b.bindAttribLocation(c, 0, "aPosition")),
                        b.linkProgram(c),
                        i.forEach(function(a) {
                            c[a] = /^u/.test(a) ? b.getUniformLocation(c, a) : b.getAttribLocation(c, a)
                        }),
                        b.useProgram(c),
                        b.deleteShader(l),
                        b.deleteShader(m)
                }
                return b
            },
            getBrightness: function(a) {
                var b = a.s("brightness")
                    , c = this.isSelected(a) ? a.s("select.brightness") : j;
                return b == j ? c : c == j ? b : b * c
            },
            getWireframe: function(a) {
                var b = a.s("wf.visible");
                return b === !0 || "selected" === b && this.isSelected(a) ? {
                    color: a.s("wf.color"),
                    width: a.s("wf.width"),
                    "short": a.s("wf.short"),
                    mat: a.s("wf.mat")
                } : void 0
            },
            getBodyColor: function(a) {
                return a.s("body.color")
            },
            getMat: function(a) {
                return a.getMat ? a.getMat() : a.s("mat")
            },
            getFaceMat: function(a, b) {
                return a.getFaceMat ? a.getFaceMat(b) : a.s(b + ".mat")
            },
            getFaceBlend: function(a, b) {
                return a.s(b + ".blend") || a.s("all.blend")
            },
            getFaceColor: function(a, b) {
                return a.s(b + ".color") || a.s("all.color")
            },
            getFaceImage: function(a, b) {
                return a.s(b + ".image") || a.s("all.image")
            },
            getFaceDiscardSelectable: function(a, b) {
                var c = a.s(b + ".discard.selectable");
                return c == j ? a.s("all.discard.selectable") : c
            },
            getFaceUv: function(a, b) {
                return a.s(b + ".uv") || a.s("all.uv")
            },
            getFaceUvOffset: function(a, b) {
                return a.s(b + ".uv.offset") || a.s("all.uv.offset")
            },
            getFaceUvScale: function(a, b) {
                return a.s(b + ".uv.scale") || a.s("all.uv.scale")
            },
            getFaceLight: function(a, b) {
                var c = a.s(b + ".light");
                return c == j ? a.s("all.light") : c
            },
            getFaceVisible: function(a, b) {
                var c = a.s(b + ".visible");
                return c == j ? a.s("all.visible") : c
            },
            getFaceOpacity: function(a, b) {
                var c = a.s(b + ".opacity");
                return c == j ? a.s("all.opacity") : c
            },
            getFaceTransparent: function(a, b) {
                var c = a.s(b + ".transparent");
                return c == j ? a.s("all.transparent") : c
            },
            getFaceReverseColor: function(a, b) {
                return a.s(b + ".reverse.color") || a.s("all.reverse.color")
            },
            getFaceReverseFlip: function(a, b) {
                var c = a.s(b + ".reverse.flip");
                return c == j ? a.s("all.reverse.flip") : c
            },
            getFaceReverseCull: function(a, b) {
                var c = a.s(b + ".reverse.cull");
                return c == j ? a.s("all.reverse.cull") : c
            },
            getTextureMap: function() {
                return this._2O
            },
            deleteTexture: function(a) {
                var b = this
                    , c = b._2O[a];
                c && (delete b._2O[a],
                    b.getGL().deleteTexture(c))
            },
            getTexture: function(a, b) {
                if (!a)
                    return j;
                var c = this
                    , d = c.getGL()
                    , e = c._2O[a];
                if (!e) {
                    var f = yg(a);
                    if (f)
                        if (f.tagName) {
                            if (f.dynamic)
                                return vk(d, f, c._1O);
                            e = c._2O[a] = vk(d, f)
                        } else {
                            var g = Nh(f, b)
                                , h = Oh(f, b);
                            if (g >= 1 && h >= 1) {
                                var i = Le(g, h);
                                return Qh(i, f, 0, 0, g, h, b, c),
                                    i.restore(),
                                    vk(d, Je, c._1O)
                            }
                        }
                }
                return e
            },
            redraw: function() {
                this.iv()
            },
            validateImpl: function() {
                var a = this;
                if (a._lightChanged) {
                    a._lightChanged = !1;
                    var b = []
                        , c = []
                        , d = [];
                    a.dm().each(function(a) {
                        if (Yj(a)) {
                            var e = a.s("light.type");
                            e === Qj ? b.push(a) : e === Rj ? c.push(a) : e === Pj && d.push(a)
                        }
                    }),
                    (b.length !== a._59O.length || c.length !== a._spots.length || d.length !== a._dirs.length) && wk(a),
                        a._59O = b,
                        a._spots = c,
                        a._dirs = d
                }
                a._42(),
                    a._1o.iv()
            },
            _42: function(a, b) {
                var c = this;
                if (!c._35O && (!xc || uc(xc))) {
                    var d, e;
                    a && (a instanceof pj ? e = a : d = a);
                    var f = c._canvas
                        , g = c.getWidth()
                        , h = c.getHeight()
                        , i = c.getGL()
                        , k = c._prg;
                    if (i) {
                        if (b ? a || Vd(f, g, h, b) : (b = c._devicePixelRatio || Xf,
                            a || g === f.clientWidth && h === f.clientHeight || Vd(f, g, h, b)),
                                i.viewport(0, 0, g * b, h * b),
                                c._81O = j,
                                i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT),
                                Ok(i, k.uBrightness, 1),
                                Ok(i, k.uOpacity, 1),
                                Ok(i, k.uPartOpacity, 1),
                                i._picking = !!a,
                                Ok(i, k.uPick, !!a),
                                Ok(i, k.uTexture, !1),
                                Ok(i, k.uFix, !1),
                                Ok(i, k.uTransparent, !1),
                                Ok(i, k.uBatchColor, !1),
                                Ok(i, k.uBatchBlend, !1),
                                Ok(i, k.uBatchBrightness, !1),
                            a || (ck(c, i, k),
                            c._fogDisabled || (Ok(i, k.uFogColor, c._fogColor),
                                Ok(i, k.uFogNear, c._fogNear),
                                Ok(i, k.uFogFar, c._fogFar))),
                                Pk(i, k.aPosition),
                                Pk(i, k.aNormal),
                                Qk(i, k.aUv),
                                Qk(i, k.aBatchColor),
                                Qk(i, k.aBatchBlend),
                                Qk(i, k.aBatchBrightness),
                                Qk(i, k.aLineDistance),
                                Ok(i, k.uPMatrix, tk(c)),
                                Ok(i, k.uViewMatrix, sk(c, c._7O)),
                                e) {
                            var l = i.getParameter(i.COLOR_CLEAR_VALUE);
                            i.clearColor(0, 0, 0, 0),
                                i.disable(i.BLEND),
                                Qk(i, k.aNormal),
                                Mk(i, c._cube.vs, j, k.aPosition),
                                Nk(i, c._cube.is),
                                Xj(e, c, ba, 0),
                                Xj(e, c, _, 6),
                                Xj(e, c, ca, 12),
                                Xj(e, c, aa, 18),
                                Xj(e, c, da, 24),
                                Xj(e, c, ea, 30),
                                Pk(i, k.aNormal),
                                Ck(i, l)
                        } else if (d) {
                            d.value = 2;
                            var l = i.getParameter(i.COLOR_CLEAR_VALUE);
                            i.clearColor(0, 0, 0, 0),
                                i.disable(i.BLEND),
                                c._95I(i, k, d),
                                Bl(c, d),
                                Al(c, c._polylineModelMap, d),
                                Al(c, c._wireframeModelMap, d),
                                Ok(i, k.uTransparent, !0),
                                c._95I(i, k, d, !0),
                                Bl(c, d, !0),
                                Al(c, c._polylineModelMap, d, !0),
                                Al(c, c._wireframeModelMap, d, !0),
                                Ok(i, k.uTransparent, !1),
                                i.disable(i.DEPTH_TEST),
                                c._30O._42(i, k, d),
                                i.enable(i.DEPTH_TEST),
                                Ck(i, l)
                        } else
                            i.disable(i.BLEND),
                                c._31O._42(i, k),
                                c._95I(i, k),
                                Bl(c),
                                Al(c, c._polylineModelMap),
                                Al(c, c._wireframeModelMap),
                                i.enable(i.BLEND),
                                i.depthMask(!1),
                                Ok(i, k.uTransparent, !0),
                                c._95I(i, k, j, !0),
                                Bl(c, j, !0),
                                Al(c, c._polylineModelMap, j, !0),
                                Al(c, c._wireframeModelMap, j, !0),
                                Ok(i, k.uTransparent, !1),
                                i.depthMask(!0),
                                i.disable(i.BLEND),
                                i.disable(i.DEPTH_TEST),
                                c._32O._42(i, k),
                                c._30O._42(i, k),
                                i.enable(i.DEPTH_TEST);
                        Mk(i, j),
                            Nk(i, j),
                            c._33Q = !1
                    }
                }
            },
            _95I: function(a, b, c, d) {
                var e = this
                    , f = function(a) {
                        return d ? a : !a
                    }
                ;
                e.dm().each(function(d) {
                    if (e.isVisible(d) && (!J || K)) {
                        if (!c && e.isTransparentMask(d))
                            return;
                        var g = e.getData3dUI(d);
                        g && g._42(a, b, c, f)
                    }
                })
            },
            getLogicalPoint: function(a) {
                return _g(a, this._canvas)
            },
            getHitFaceInfo: function(a) {
                a.target && (a = this.lp(a));
                var b = this.getDataInfoAt(a);
                if (b) {
                    var c = this._1o.face(b.data, dd(a.x, a.y));
                    if (c)
                        return {
                            data: b.data,
                            face: c
                        }
                }
                return j
            },
            getDataAt: function(a) {
                var b = this.getDataInfoAt(a);
                return b ? b.data : j
            },
            getDataInfoAt: function(a, b) {
                return a.target && (a = this.lp(a)),
                    this._1o.get(dd(a.x, a.y, b), !0)
            },
            getDatasInRect: function(a) {
                return this._1o.get(a)
            },
            setEditable: function(a) {
                var b = this
                    , c = b._editable;
                b._editable = a,
                    this.fp(ub, c, a)
            },
            isEditable: function(a) {
                var b = this;
                return b._editable && od(a) && a.s("3d.editable") ? b._editableFunc ? b._editableFunc(a) : !0 : !1
            },
            isSelectable: function(a) {
                return a.s("3d.selectable") && this.sm().isSelectable(a)
            },
            isMovable: function(a) {
                var b = this;
                return pd(a) && a.getStyle(Wa) !== Ga ? !1 : a.s("3d.movable") ? b._movableFunc ? b._movableFunc(a) : !0 : !1
            },
            isSizeEditable: function(a) {
                return od(a) ? this._sizeEditableFunc ? this._sizeEditableFunc(a) : !0 : !1
            },
            isRotationEditable: function(a) {
                return od(a) && a.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(a) : !0 : !1
            },
            handleDelete: function() {
                this._editable && this.removeSelection()
            },
            zoomIn: function(a) {
                this.setZoom(qg, a)
            },
            zoomOut: function(a) {
                this.setZoom(1 / qg, a)
            },
            setZoom: function(a, b) {
                if (1 !== a) {
                    var c = this;
                    if (c._ortho)
                        return void c.setOrthoZoom(a, b);
                    c._14o && c._14o.stop(!0);
                    var d = 1 / a
                        , e = c._eye
                        , f = c._center
                        , g = f[0] + (e[0] - f[0]) * d - e[0]
                        , h = f[1] + (e[1] - f[1]) * d - e[1]
                        , i = f[2] + (e[2] - f[2]) * d - e[2];
                    if (!(Sg(e, f) < c._moveStep && 1 > d)) {
                        if (b = ud(b)) {
                            var k = Eg(e);
                            return b.action = function(a) {
                                c.fi({
                                    kind: c._zooming ? "betweenZoom" : "beginZoom"
                                }),
                                    c._zooming = 1,
                                    e[0] = k[0] + g * a,
                                    e[1] = k[1] + h * a,
                                    e[2] = k[2] + i * a,
                                    c.fp(ga, j, e)
                            }
                                ,
                                b._37o = function() {
                                    delete c._14o,
                                        delete c._zooming,
                                        c.fi({
                                            kind: "endZoom"
                                        }),
                                        c.onZoomEnded()
                                }
                                ,
                                c._14o = Gg(b)
                        }
                        e[0] += g,
                            e[1] += h,
                            e[2] += i,
                            c.fp(ga, j, e)
                    }
                }
            },
            setOrthoZoom: function(a, b) {
                if (1 !== a) {
                    var c = this;
                    c._14o && c._14o.stop(!0);
                    var d = c._orthoWidth
                        , e = d / a - d;
                    if (!(d < c._moveStep && a > 1))
                        return (b = ud(b)) ? (b.action = function(a) {
                            c.fi({
                                kind: c._zooming ? "betweenZoom" : "beginZoom"
                            }),
                                c._zooming = 1,
                                c.setOrthoWidth(d + e * a)
                        }
                            ,
                            b._37o = function() {
                                delete c._14o,
                                    delete c._zooming,
                                    c.fi({
                                        kind: "endZoom"
                                    }),
                                    c.onZoomEnded()
                            }
                            ,
                            c._14o = Gg(b)) : void c.setOrthoWidth(d / a)
                }
            },
            getPositionInfo: function(a) {
                var b = this
                    , c = b._eye
                    , d = b._center
                    , e = b.getAspect()
                    , f = a ? nh(lh(d, c, !0), lh(a, c)) : Sg(c, d);
                if (b._ortho) {
                    var g = b._orthoWidth;
                    return {
                        length: f,
                        height: g / e,
                        width: g
                    }
                }
                var h = 2 * G(b._fovy / 2) * f;
                return {
                    length: f,
                    height: h,
                    width: h * e
                }
            },
            getCenterInfo: function() {
                var a = this;
                return a._81O || (a._81O = a.getPositionInfo()),
                    Eg(a._81O)
            },
            rotate: function(a, b, c, d) {
                var e = this;
                if (a || b) {
                    d == j && (d = e._firstPersonMode),
                    e._88O && e._88O.stop(!0);
                    var f = e._center
                        , g = e._eye
                        , h = e.getCenterInfo().length
                        , i = d ? f : g
                        , k = d ? g : f
                        , l = lh(i, k)
                        , m = H(l[0], l[2])
                        , n = H(u(l[0] * l[0] + l[2] * l[2]), l[1])
                        , o = d ? fa : ga;
                    return d && (b = -b),
                        (c = ud(c)) ? (c.action = function(c) {
                            e.fi({
                                kind: e._rotating ? "betweenRotate" : "beginRotate"
                            }),
                                e._rotating = 1;
                            var d = m + a * c
                                , f = n + b * c;
                            f = ek(f),
                                l[0] = h * A(f) * A(d),
                                l[1] = h * y(f),
                                l[2] = h * A(f) * y(d),
                                i[0] = k[0] + l[0],
                                i[1] = k[1] + l[1],
                                i[2] = k[2] + l[2],
                                e.fp(o, j, i)
                        }
                            ,
                            c._37o = function() {
                                delete e._88O,
                                    delete e._rotating,
                                    e.fi({
                                        kind: "endRotate"
                                    }),
                                    e.onRotateEnded()
                            }
                            ,
                            e._88O = Gg(c)) : (m += a,
                            n += b,
                            n = ek(n),
                            l[0] = h * A(n) * A(m),
                            l[1] = h * y(n),
                            l[2] = h * A(n) * y(m),
                            i[0] = k[0] + l[0],
                            i[1] = k[1] + l[1],
                            i[2] = k[2] + l[2],
                            void e.fp(o, j, i))
                }
            },
            pan: function(a, b, c, d) {
                if (a || b) {
                    var e = this;
                    d == j && (d = e._firstPersonMode),
                    e._89O && e._89O.stop(!0);
                    var f = sk(e)
                        , g = [f[0] * a, f[4] * a, f[8] * a]
                        , h = [f[1] * b, f[5] * b, f[9] * b]
                        , i = g[0] + h[0]
                        , k = g[1] + h[1]
                        , l = g[2] + h[2]
                        , m = e._center
                        , n = e._eye;
                    if (d) {
                        var o = _k(e.getBoundaries(), n[0], n[2], n[0] + i, n[2] + l, u(i * i + l * l));
                        i = o[0],
                            l = o[1]
                    }
                    if (c = ud(c)) {
                        var p = Eg(n)
                            , q = Eg(m);
                        return c.action = function(a) {
                            e.fi({
                                kind: e._panning ? "betweenPan" : "beginPan"
                            }),
                                e._panning = 1,
                                m[0] = q[0] + i * a,
                                m[1] = q[1] + k * a,
                                m[2] = q[2] + l * a,
                                n[0] = p[0] + i * a,
                                n[1] = p[1] + k * a,
                                n[2] = p[2] + l * a,
                                e.fp(ga, j, n),
                                e.fp(fa, j, m)
                        }
                            ,
                            c._37o = function() {
                                delete e._89O,
                                    delete e._panning,
                                    e.fi({
                                        kind: "endPan"
                                    }),
                                    e.onPanEnded()
                            }
                            ,
                            e._89O = Gg(c)
                    }
                    m[0] += i,
                        m[1] += k,
                        m[2] += l,
                        n[0] += i,
                        n[1] += k,
                        n[2] += l,
                        e.fp(ga, j, n),
                        e.fp(fa, j, m)
                }
            },
            walk: function(a, b, c) {
                if (a) {
                    var d = this;
                    c == j && (c = d._firstPersonMode),
                    d._90O && d._90O.stop(!0);
                    var e = d._center
                        , f = d._eye
                        , g = lh(e, f, !0);
                    if (c) {
                        var h = _k(d.getBoundaries(), f[0], f[2], f[0] + g[0] * a, f[2] + g[2] * a, x(a));
                        if (a = Sg(h),
                                !a)
                            return;
                        g = [h[0] / a, 0, h[1] / a]
                    }
                    if (b = ud(b)) {
                        var i = Eg(f)
                            , k = Eg(e);
                        return b.action = function(b) {
                            d.fi({
                                kind: d._walking ? "betweenWalk" : "beginWalk"
                            }),
                                d._walking = 1;
                            var c = a * b;
                            f[0] = i[0] + g[0] * c,
                                f[1] = i[1] + g[1] * c,
                                f[2] = i[2] + g[2] * c,
                                e[0] = k[0] + g[0] * c,
                                e[1] = k[1] + g[1] * c,
                                e[2] = k[2] + g[2] * c,
                                d.fp(ga, j, f),
                                d.fp(fa, j, e)
                        }
                            ,
                            b._37o = function() {
                                delete d._90O,
                                    delete d._walking,
                                    d.fi({
                                        kind: "endWalk"
                                    }),
                                    d.onWalkEnded()
                            }
                            ,
                            d._90O = Gg(b)
                    }
                    f[0] += g[0] * a,
                        f[1] += g[1] * a,
                        f[2] += g[2] * a,
                        e[0] += g[0] * a,
                        e[1] += g[1] * a,
                        e[2] += g[2] * a,
                        d.fp(ga, j, f),
                        d.fp(fa, j, e)
                }
            },
            handleScroll: function(a, b) {
                a.preventDefault();
                var c = this
                    , d = c._moveStep;
                c.isFirstPersonMode() ? c.isPannable() && c.pan(0, b > 0 ? d : -d) : c.isZoomable() && c.setZoom(0 > b ? 1 / rg : rg)
            },
            handlePinch: function(a, b) {
                this.isZoomable() && this.setZoom(b > a ? 1 / sg : sg)
            },
            reset: function() {
                this.setCenter(m.graph3dViewCenter),
                    this.setEye(m.graph3dViewEye),
                    this.setUp(m.graph3dViewUp)
            },
            moveSelection: function(a, b, c) {
                var d, e = this, f = e.dm();
                f && (d = f.getHistoryManager()),
                d && d.beginInteraction(),
                    qf(this.sm().toSelection(this.isMovable, this), a, b, c),
                d && d.endInteraction()
            },
            getMoveMode: function(a, b) {
                var c = b.s("3d.move.mode");
                if (c)
                    return c;
                var d = "88"
                    , e = "89"
                    , f = "90";
                return Og(a) || Dc[d] && Dc[e] && Dc[f] ? "xyz" : Dc[d] && Dc[e] ? "xy" : Dc[d] && Dc[f] ? "xz" : Dc[e] && Dc[f] ? "yz" : Dc[d] ? "x" : Dc[e] ? "y" : Dc[f] ? "z" : "xz"
            },
            handleTick: function() {
                var a = this
                    , b = !1
                    , c = a._moveStep
                    , d = c
                    , e = !1
                    , f = !0
                    , g = a._rotateStep * (f ? -1 : 1);
                if (a.isWalkable() || (d = 0),
                    a.isPannable() || (c = 0),
                    a.isRotatable() || (g = 0),
                        a._32Q) {
                    var h = (Wc() - a._32Q) / 50;
                    d *= h,
                        c *= h,
                        g *= h
                }
                a._31Q && (Xc(a._31Q),
                    delete a._31Q,
                    delete a._32Q),
                we() && (b = !0,
                    a.pan(-c, 0, e, f)),
                ye() && (b = !0,
                    a.pan(c, 0, e, f)),
                ze() && (b = !0,
                    Og() ? a.pan(0, c, e, f) : a.walk(d, e, f)),
                xe() && (b = !0,
                    Og() ? a.pan(0, -c, e, f) : a.walk(-d, e, f)),
                Ae() && (b = !0,
                    a.rotate(-g, 0, e, f)),
                Ce() && (b = !0,
                    a.rotate(g, 0, e, f)),
                Be() && (b = !0,
                    a.rotate(0, -g / 2, e, f)),
                De() && (b = !0,
                    a.rotate(0, g / 2, e, f)),
                b && (a._32Q = Wc(),
                    a._31Q = Cg(a.handleTick, a))
            },
            handleKeyDown: function(a) {
                var b = this;
                !Pg(a) && He[a.keyCode] ? b.handleTick() : re(a) ? b.selectAll() : se(a) ? b.handleDelete(a) : Ee(a) && this.isResettable() && b.reset()
            },
            checkDoubleClickOnNote: function(a, b, c) {
                var d = this;
                if (c === Ma) {
                    if (b.s("note.toggleable"))
                        return b.s(Sa, !b.s(Sa)),
                            d.fi({
                                kind: "toggleNote",
                                event: a,
                                data: b,
                                part: c
                            }),
                            !0
                } else if (c === Na && b.s("note2.toggleable"))
                    return b.s(Ta, !b.s(Ta)),
                        d.fi({
                            kind: "toggleNote2",
                            event: a,
                            data: b,
                            part: c
                        }),
                        !0;
                return !1
            },
            checkDoubleClickOnRotation: function(a, b, c) {
                return c === wm ? (b.setRotationX(0),
                    !0) : c === xm ? (b.setRotationY(0),
                    !0) : c === ym ? (b.setRotationZ(0),
                    !0) : !1
            },
            onRotateEnded: function() {},
            onWalkEnded: function() {},
            toViewPosition: function(a) {
                var b = this
                    , c = b.getWidth() / 2
                    , d = b.getHeight() / 2
                    , e = b._18Q;
                return e || (e = tk(b),
                    b._18Q = ok(e, e, sk(b))),
                    a = uh([a[0], a[1], a[2], 1], e),
                    {
                        x: c + c * a[0] / a[3],
                        y: d - d * a[1] / a[3]
                    }
            },
            getHitPosition: function(a, b, c) {
                var d = this
                    , e = d.getWidth()
                    , f = d.getHeight()
                    , g = a.target ? d.lp(a) : a
                    , h = g.x - e / 2
                    , i = g.y - f / 2
                    , j = d.getCenterInfo()
                    , k = sk(d);
                b = b ? b : [0, 0, 0],
                    c = c ? c : [0, 1, 0],
                    h = h / e * j.width,
                    i = -1 * i / f * j.height;
                var l = [k[0] * h, k[4] * h, k[8] * h]
                    , m = [k[1] * i, k[5] * i, k[9] * i]
                    , n = [l[0] + m[0], l[1] + m[1], l[2] + m[2]]
                    , o = d.getCenter()
                    , p = gk(d, b, c, [n[0] + o[0], n[1] + o[1], n[2] + o[2]]);
                return p ? p : [0, 0, 0]
            },
            getLineLength: function(a) {
                this.validate();
                var b = this.getData3dUI(a);
                if (b && b.getCache) {
                    var c = b.getCache();
                    if (c)
                        return c[c.length - 1].length
                }
                return 0
            },
            getLineOffset: function(a, b) {
                this.validate();
                var c = this.getData3dUI(a);
                if (c && c.getCache) {
                    var d = c.getCache();
                    if (d)
                        return fm(d, b)
                }
                return j
            }
        });
        var nm = al.Interactor = function(a) {
                this.gv = a
            }
        ;
        bl("Interactor", b, {
            ms_listener: 1,
            getView: function() {
                return this.gv.getView()
            },
            setUp: function() {
                this.addListeners()
            },
            tearDown: function() {
                this.removeListeners()
            }
        });
        var om = al.DefaultInteractor = function(a) {
                yd(om, this, [a])
            }
        ;
        bl("DefaultInteractor", nm, {
            handle_contextmenu: function(a) {
                wg(a)
            },
            handle_mousewheel: function(a) {
                this.gv.handleScroll(a, a.wheelDelta / 40)
            },
            handle_DOMMouseScroll: function(a) {
                2 === a.axis && this.gv.handleScroll(a, -a.detail)
            },
            handle_keydown: function(a) {
                this.gv.handleKeyDown(a)
            },
            handle_mousedown: function(a) {
                this.handle_touchstart(a)
            },
            handle_touchstart: function(a) {
                wg(a);
                var b = this
                    , c = b.gv
                    , d = Lg(a)
                    , e = c.getDataInfoAt(a)
                    , f = e ? e.data : j
                    , g = e ? e.part : j
                    , h = c.sm()
                    , i = pe(a)
                    , k = Mg(a);
                c.setFocus(a) && (b._62O = j,
                    b._57I = j,
                    f ? Pg(a) ? h.co(f) ? h.rs(f) : h.as(f) : h.co(f) || h.ss(f) : d && (Pg(a) ? c.isRectSelectable() && (b._62O = cb) : b._57I = Qg(a)),
                b._31Q && (Xc(b._31Q),
                    delete b._31Q,
                    delete b._32Q),
                b._62O || (c.isFirstPersonMode() && (Og(a) || k > 2 ? b._62O = "pan" : c.isMouseRoamable() || X ? (b._62O = "roaming",
                    b.foward = i && Lg(a),
                    b._32Q = Wc(),
                    b._31Q = Cg(b.tick, b)) : d || (b._62O = "roaming")),
                b._62O || (d && i && Cm[g] ? (b._62O = g,
                    b.p3 = f.p3()) : d && i && od(f) && c.isSelected(f) && c.isMovable(f) ? (b._62O = "move",
                    b.p3 = f.p3(),
                    b.movedata = f) : X && (k > 2 ? b._62O = "pan" : 2 === k && (b.dist = lf(a),
                            b._62O = "pinch")))),
                    b.point = c.lp(a),
                    ah(b, a),
                    Ng(a) ? c.handleDoubleClick(a, f, g) : c.handleClick(a, f, g))
            },
            tick: function() {
                var a = this
                    , b = a.gv
                    , c = b._moveStep;
                a.point && b.isWalkable() && (a._32Q && (c *= (Wc() - a._32Q) / 50),
                    b.walk(a.foward ? c : -c),
                    a._32Q = Wc(),
                    a._31Q = Cg(a.tick, a))
            },
            handle_mouseup: function(a) {
                this.handle_touchend(a)
            },
            handle_touchend: function(a) {
                var b = this._57I;
                b && (Sg(b, Qg(a)) <= 1 && this.gv.sm().cs(),
                    this._57I = j)
            },
            handleWindowMouseMove: function(a) {
                this.handleWindowTouchMove(a)
            },
            handleWindowTouchMove: function(a) {
                var b, c, d = this, e = d.gv, f = d._62O, g = d.point, h = e.dm(), i = h.getHistoryManager(), j = e.lp(a), k = j.x - g.x, l = j.y - g.y, m = -E * k / e.getWidth(), n = -E * l / e.getHeight();
                if ("roaming" === f)
                    d.rotate(a, m / 2, n / 2);
                else if (f === wm || f === xm || f === ym)
                    i && !e._86O && i.beginInteraction(),
                        e.fi({
                            kind: e._86O ? "betweenEditRotation" : "beginEditRotation",
                            event: a
                        }),
                        e._86O = 1,
                        e.sm().each(function(a) {
                            if (od(a) && e.isRotationEditable(a)) {
                                var b = x(m) > x(n) ? m : n;
                                f === wm ? a.setRotationX(a.getRotationX() + b) : f === xm ? a.setRotationY(a.getRotationY() + b) : f === ym && a.setRotationZ(a.getRotationZ() + b)
                            }
                        });
                else if ("move" === f || Cm[f]) {
                    f === zm || f === Am || f === Bm ? (i && !e._87O && i.beginInteraction(),
                        e.fi({
                            kind: e._87O ? "betweenEditSize" : "beginEditSize",
                            event: a
                        }),
                        e._87O = 1) : (i && !e._moving && i.beginInteraction(),
                        e.fi({
                            kind: e._moving ? "betweenMove" : "beginMove",
                            event: a
                        }),
                        e._moving = 1);
                    var o, p = d.p3, q = e.getPositionInfo(p), r = sk(e);
                    o = f === tm ? "x" : f === um ? "y" : f === vm ? "z" : f === zm ? "sx" : f === Am ? "sy" : f === Bm ? "sz" : e.getMoveMode(a, d.movedata),
                        k = k / e.getWidth() * q.width,
                        l = -1 * l / e.getHeight() * q.height;
                    var s, t, u = [r[0] * k, r[4] * k, r[8] * k], w = [r[1] * l, r[5] * l, r[9] * l], y = u[0] + w[0], z = u[1] + w[1], A = u[2] + w[2], B = [p[0] + y, p[1] + z, p[2] + A], C = lh(e.getEye(), B, !0);
                    if ("xyz" === o ? (s = B,
                            e.moveSelection(y, z, A)) : "xz" === o ? (s = gk(e, p, [0, 1, 0], B),
                        s && e.moveSelection(s[0] - p[0], 0, s[2] - p[2])) : "xy" === o ? (s = gk(e, p, [0, 0, 1], B),
                        s && e.moveSelection(s[0] - p[0], s[1] - p[1], 0)) : "yz" === o ? (s = gk(e, p, [1, 0, 0], B),
                        s && e.moveSelection(0, s[1] - p[1], s[2] - p[2])) : "x" === o || "sx" === o ? (C[0] = 0,
                            s = gk(e, p, C, B),
                        s && (t = s[0] - p[0],
                            "x" === o ? e.moveSelection(t, 0, 0) : e.sm().each(function(d) {
                                od(d) && e.isSizeEditable(d) && (b = v(ih, d.getWidth() + t),
                                    c = b / d.getWidth(),
                                    d.setWidth(b),
                                Og(a) && (d.setHeight(d.getHeight() * c),
                                    d.setTall(d.getTall() * c)))
                            }))) : "y" === o || "sy" === o ? (C[1] = 0,
                            s = gk(e, p, C, B),
                        s && (t = s[1] - p[1],
                            "y" === o ? e.moveSelection(0, t, 0) : e.sm().each(function(d) {
                                od(d) && e.isSizeEditable(d) && (b = v(ih, d.getTall() + t),
                                    c = b / d.getTall(),
                                    d.setTall(b),
                                Og(a) && (d.setHeight(d.getHeight() * c),
                                    d.setWidth(d.getWidth() * c)))
                            }))) : ("z" === o || "sz" === o) && (C[2] = 0,
                                s = gk(e, p, C, B),
                            s && (t = s[2] - p[2],
                                "z" === o ? e.moveSelection(0, 0, t) : e.sm().each(function(d) {
                                    od(d) && e.isSizeEditable(d) && (b = v(ih, d.getHeight() + t),
                                        c = b / d.getHeight(),
                                        d.setHeight(b),
                                    Og(a) && (d.setTall(d.getTall() * c),
                                        d.setWidth(d.getWidth() * c)))
                                }))),
                            !s)
                        return;
                    d.p3 = s
                } else if (f === cb) {
                    var D = d.div;
                    D || (D = d.div = Rd(),
                        Wd(d.getView(), D),
                        D.op = g,
                        D.style.background = e.getRectSelectBackground()),
                        e.fi({
                            kind: e._rectSelecting ? "betweenRectSelect" : "beginRectSelect",
                            event: a
                        }),
                        e._rectSelecting = 1,
                        D.rect = Tg(D.op, j),
                        he(D, D.rect)
                } else if ("pinch" === f && 2 === Mg(a)) {
                    e.fi({
                        kind: e._pinching ? "betweenPinch" : "beginPinch",
                        event: a
                    }),
                        e._pinching = 1;
                    var t = lf(a);
                    e.handlePinch(t, d.dist),
                        d.dist = t
                } else
                    "pan" === f || Og(a) ? d.pan(a, k, l) : e.isFirstPersonMode() || (Lg(a) ? d.rotate(a, m, n) : (d.pan(a, k, 0),
                        e.isWalkable() && (e.fi({
                            kind: e._walking ? "betweenWalk" : "beginWalk",
                            event: a
                        }),
                            e._walking = 1,
                            e.walk(l / e.getHeight() * e.getCenterInfo().height))));
                d.point = j
            },
            pan: function(a, b, c) {
                var d = this.gv;
                if (d.isPannable()) {
                    var e = d.getCenterInfo()
                        , f = b / d.getWidth() * e.width
                        , g = -1 * c / d.getHeight() * e.height;
                    d.fi({
                        kind: d._panning ? "betweenPan" : "beginPan",
                        event: a
                    }),
                        d._panning = 1,
                        d.pan(-f, -g)
                }
            },
            rotate: function(a, b, c) {
                var d = this.gv;
                d.isRotatable() && (d.fi({
                    kind: d._rotating ? "betweenRotate" : "beginRotate",
                    event: a
                }),
                    d._rotating = 1,
                    d.rotate(b, c))
            },
            handleWindowMouseUp: function(a) {
                this.handleWindowTouchEnd(a)
            },
            handleWindowTouchEnd: function(a) {
                var b = this
                    , c = b.gv
                    , d = c.dm()
                    , e = d.getHistoryManager()
                    , f = b.div;
                if (f) {
                    var g = c.getDatasInRect(f.rect);
                    if (!g.isEmpty()) {
                        var h = c.sm()
                            , i = h.toSelection();
                        g.each(function(a) {
                            h.co(a) ? i.remove(a) : i.add(a)
                        }),
                            h.ss(i)
                    }
                    bh(f)
                }
                c._moving && (delete c._moving,
                    c.fi({
                        kind: "endMove",
                        event: a
                    }),
                    c.onMoveEnded(),
                e && e.endInteraction()),
                c._panning && (delete c._panning,
                    c.fi({
                        kind: "endPan",
                        event: a
                    }),
                    c.onPanEnded()),
                c._rotating && (delete c._rotating,
                    c.fi({
                        kind: "endRotate",
                        event: a
                    }),
                    c.onRotateEnded()),
                c._86O && (delete c._86O,
                    c.fi({
                        kind: "endEditRotation",
                        event: a
                    }),
                e && e.endInteraction()),
                c._87O && (delete c._87O,
                    c.fi({
                        kind: "endEditSize",
                        event: a
                    }),
                e && e.endInteraction()),
                c._pinching && (delete c._pinching,
                    c.fi({
                        kind: "endPinch",
                        event: a
                    }),
                    c.onPinchEnded()),
                c._rectSelecting && (delete c._rectSelecting,
                    c.fi({
                        kind: "endRectSelect",
                        event: a
                    }),
                    c.onRectSelectEnded()),
                c._walking && (delete c._walking,
                    c.fi({
                        kind: "endWalk",
                        event: a
                    }),
                    c.onWalkEnded()),
                    b.dist = b.point = b._62O = b.p3 = b.movedata = b.div = b._57I = b._32Q = b._31Q = b.foward = j
            }
        });
        var pm = function(a) {
                this.gv = a
            }
        ;
        gh(pm, b, {
            _iv: !0,
            iv: function() {
                this._iv = !0
            },
            face: function(a, b) {
                var c = this
                    , d = c.gv.getGL();
                if (!d || !od(a))
                    return j;
                var e = b.x
                    , f = b.width
                    , g = b.height
                    , h = c.height - b.y - g
                    , i = s(f / 2)
                    , k = new Uint8Array(4 * f * g)
                    , l = 0;
                for (c.iv(),
                         c.validate(a),
                         Ak(d, c.frame),
                         d.readPixels(e, h, f, g, d.RGBA, d.UNSIGNED_BYTE, k),
                         Ak(d, j),
                         c.iv(); i >= l; l++)
                    for (var m = i - l, n = i + l, o = m; n >= o; o++)
                        for (var p = m; n >= p; p++)
                            if (o === m || o === n || p === m || p === n) {
                                var q = Wj.m[k[4 * (o * f + p)]];
                                if (q)
                                    return q
                            }
            },
            get: function(a, b) {
                this.validate();
                var c = this
                    , d = c.gv.getGL();
                if (!d)
                    return j;
                var e, f, g = a.x, h = a.width, i = a.height, k = c.height - a.y - i, l = s(h / 2), m = new Uint8Array(4 * h * i), n = 0, o = m.length, p = b ? j : new Rh, q = b ? j : {};
                if (Ak(d, c.frame),
                        d.readPixels(g, k, h, i, d.RGBA, d.UNSIGNED_BYTE, m),
                        Ak(d, j),
                        b) {
                    for (; l >= n; n++)
                        for (var r = l - n, t = l + n, u = r; t >= u; u++)
                            for (var v = r; t >= v; v++)
                                if ((u === r || u === t || v === r || v === t) && (e = c.info(m, 4 * (u * h + v))))
                                    return e
                } else
                    for (; o > n; n += 4)
                        e = c.info(m, n),
                        e && (f = e.data,
                        q[f._id] || (p.add(f),
                            q[f._id] = f));
                return p
            },
            info: function(a, b) {
                return this.colorMap[(a[b] << 24) + (a[b + 1] << 16) + (a[b + 2] << 8) + a[b + 3]]
            },
            validate: function(a) {
                var b = this
                    , c = b.gv
                    , d = c.getGL();
                if (d) {
                    var e = c.getWidth()
                        , f = c.getHeight()
                        , g = d.RGBA
                        , h = d.TEXTURE_2D
                        , i = d.RENDERBUFFER
                        , k = d.FRAMEBUFFER;
                    b.texture || (b.texture = vk(d),
                        b.render = d.createRenderbuffer(),
                        b.frame = d.createFramebuffer()),
                    (b.width !== e || b.height !== f) && (zk(d, b.texture),
                        d.texImage2D(h, 0, g, e, f, 0, g, d.UNSIGNED_BYTE, j),
                        Bk(d, d.TEXTURE_MIN_FILTER, d.LINEAR),
                        d.bindRenderbuffer(i, b.render),
                        d.renderbufferStorage(i, d.DEPTH_COMPONENT16, e, f),
                        Ak(d, b.frame),
                        d.framebufferTexture2D(k, d.COLOR_ATTACHMENT0, h, b.texture, 0),
                        d.framebufferRenderbuffer(k, d.DEPTH_ATTACHMENT, i, b.render),
                        zk(d, j),
                        d.bindRenderbuffer(i, j),
                        Ak(d, j),
                        b.width = e,
                        b.height = f),
                    b._iv && (b._iv = !1,
                        Ak(d, b.frame),
                        c._42(a || (b.colorMap = {}), 1),
                        Ak(d, j))
                }
            }
        });
        var qm = function(a) {
                this.gv = a
            }
        ;
        gh(qm, b, {
            gap: 0,
            size: 0,
            _42: function(a, b) {
                var c = this
                    , d = c.gv
                    , e = d._gridGap
                    , f = d._gridSize;
                if (d._gridVisible) {
                    if (c.gap !== e || c.size !== f) {
                        for (var g = [], h = d._gridSize / 2, i = e * h, k = 0; 2 * h + 1 > k; k++) {
                            var l = 6 * k
                                , m = 6 * (2 * h + 1) + l;
                            g[l] = -i,
                                g[l + 1] = 0,
                                g[l + 2] = -i + k * e,
                                g[l + 3] = i,
                                g[l + 4] = 0,
                                g[l + 5] = -i + k * e,
                                g[m] = -i + k * e,
                                g[m + 1] = 0,
                                g[m + 2] = -i,
                                g[m + 3] = -i + k * e,
                                g[m + 4] = 0,
                                g[m + 5] = i
                        }
                        c.vs = new kh(g),
                            c.gap = e,
                            c.size = f
                    }
                    Tk(d),
                        Dk(a, b),
                        Jk(a, b, 1, d._gridColor, d._buffer.vs, c.vs),
                        Kk(a, 0, c.vs.length / 3, a.LINES),
                        Ek(a, b)
                } else
                    c.vs = c.gap = c.size = j
            }
        });
        var rm = function(a) {
                this.gv = a
            }
        ;
        gh(rm, b, {
            _42: function(a, b) {
                var c = this.gv
                    , d = c._buffer.vs
                    , e = c._axisXColor
                    , f = c._axisYColor
                    , g = c._axisZColor
                    , h = c._originAxisVisible
                    , i = c._centerAxisVisible;
                if (h || i) {
                    var k = T ? a.TRIANGLES : a.TRIANGLE_FAN
                        , l = a.LINES;
                    if (Tk(c),
                            Dk(a, b),
                            h) {
                        var m = c.getCenterInfo()
                            , n = w(m.width, m.height) / 5
                            , o = .8 * n
                            , p = .05 * n;
                        Jk(a, b, 1.5, e, d, new kh([0, 0, 0, n, 0, 0, o, p, 0, o, 0, p, o, -p, 0, o, 0, -p, o, p, 0, 0, 0, 0, 0, n, 0, p, o, 0, 0, o, p, -p, o, 0, 0, o, -p, p, o, 0, 0, 0, 0, 0, 0, n, p, 0, o, 0, p, o, -p, 0, o, 0, -p, o, p, 0, o])),
                            Kk(a, 0, 2, l),
                            Kk(a, 1, 6, k),
                            Jk(a, b, j, f),
                            Kk(a, 7, 2, l),
                            Kk(a, 8, 6, k),
                            Jk(a, b, j, g),
                            Kk(a, 14, 2, l),
                            Kk(a, 15, 6, k)
                    }
                    if (i) {
                        var q = c._center
                            , r = q[0]
                            , s = q[1]
                            , t = q[2]
                            , m = c.getPositionInfo(q);
                        n = w(m.width, m.height) / 20,
                            Jk(a, b, 1.5, e, d, new kh([r, s, t, r + n, s, t, r, s, t, r, s + n, t, r, s, t, r, s, t + n])),
                            Kk(a, 0, 2, l),
                            Jk(a, b, j, f),
                            Kk(a, 2, 2, l),
                            Jk(a, b, j, g),
                            Kk(a, 4, 2, l)
                    }
                    Ek(a, b)
                }
            }
        });
        var sm = function(a) {
            this.gv = a
        }
            , tm = "edit_tx"
            , um = "edit_ty"
            , vm = "edit_tz"
            , wm = "edit_rx"
            , xm = "edit_ry"
            , ym = "edit_rz"
            , zm = "edit_sx"
            , Am = "edit_sy"
            , Bm = "edit_sz"
            , Cm = {};
        Cm[tm] = 1,
            Cm[um] = 1,
            Cm[vm] = 1,
            Cm[wm] = 1,
            Cm[xm] = 1,
            Cm[ym] = 1,
            Cm[zm] = 1,
            Cm[Am] = 1,
            Cm[Bm] = 1,
            gh(sm, b, {
                _42: function(a, b, c) {
                    var d = this
                        , e = d.gv
                        , f = e.sm().ld();
                    if (e.isEditable(f) && od(f) && (!e.isFirstPersonMode() || !e.isMouseRoamable() && !X)) {
                        Tk(e);
                        var g, h, i = e.isMovable(f), j = e.isRotationEditable(f), k = e.isSizeEditable(f), l = e._axisXColor, m = e._axisYColor, n = e._axisZColor, o = e._editSizeColor, p = e.getCenterInfo(), q = w(p.width, p.height) / 10, r = q / (c ? 5 : 10), s = .7 * q, t = .4 * s, u = f.p3(), v = u[0], x = u[1], y = u[2];
                        g = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
                        i && d._17O(a, b, f, c, tm, l, g, [v, x - r, y, v + s, x - r, y, v + s, x, y, v + s, x, y, v, x, y, v, x - r, y, v, x - r, y + r, v + s, x - r, y + r, v + s, x - r, y, v + s, x - r, y, v, x - r, y, v, x - r, y + r]),
                            h = v + s,
                        k && d._17O(a, b, f, c, zm, o, g, [h, x - r, y, h + t, x - r, y, h + t, x, y, h + t, x, y, h, x, y, h, x - r, y, h, x - r, y + r, h + t, x - r, y + r, h + t, x - r, y, h + t, x - r, y, h, x - r, y, h, x - r, y + r]),
                            h += t,
                        j && d._17O(a, b, f, c, wm, l, g, [h, x - r, y, h + t, x - r, y, h + t, x, y, h + t, x, y, h, x, y, h, x - r, y, h, x - r, y + r, h + t, x - r, y + r, h + t, x - r, y, h + t, x - r, y, h, x - r, y, h, x - r, y + r]),
                            g = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
                        i && d._17O(a, b, f, c, um, m, g, [v, x, y, v, x + s, y, v - r, x + s, y, v - r, x + s, y, v - r, x, y, v, x, y, v, x, y, v, x, y - r, v, x + s, y - r, v, x + s, y - r, v, x + s, y, v, x, y]),
                            h = x + s,
                        k && d._17O(a, b, f, c, Am, o, g, [v, h, y, v, h + t, y, v - r, h + t, y, v - r, h + t, y, v - r, h, y, v, h, y, v, h, y, v, h, y - r, v, h + t, y - r, v, h + t, y - r, v, h + t, y, v, h, y]),
                            h += t,
                        j && d._17O(a, b, f, c, xm, m, g, [v, h, y, v, h + t, y, v - r, h + t, y, v - r, h + t, y, v - r, h, y, v, h, y, v, h, y, v, h, y - r, v, h + t, y - r, v, h + t, y - r, v, h + t, y, v, h, y]),
                            g = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
                        i && d._17O(a, b, f, c, vm, n, g, [v, x, y, v, x, y + s, v, x - r, y + s, v, x - r, y + s, v, x - r, y, v, x, y, v, x - r, y, v - r, x - r, y, v - r, x - r, y + s, v - r, x - r, y + s, v, x - r, y + s, v, x - r, y]),
                            h = y + s,
                        k && d._17O(a, b, f, c, Bm, o, g, [v, x, h, v, x, h + t, v, x - r, h + t, v, x - r, h + t, v, x - r, h, v, x, h, v, x - r, h, v - r, x - r, h, v - r, x - r, h + t, v - r, x - r, h + t, v, x - r, h + t, v, x - r, h]),
                            h += t,
                        j && d._17O(a, b, f, c, ym, n, g, [v, x, h, v, x, h + t, v, x - r, h + t, v, x - r, h + t, v, x - r, h, v, x, h, v, x - r, h, v - r, x - r, h, v - r, x - r, h + t, v - r, x - r, h + t, v, x - r, h + t, v, x - r, h])
                    }
                },
                _17O: function(a, b, c, d, e, f, g, h) {
                    var i = this.gv._buffer;
                    Uk(a, b, d, !0, c, e),
                        Fk(a, b, j, !0, j, !0, j, !1),
                        Ok(a, b.uDiffuse, f),
                        Mk(a, i.vs, new kh(h), b.aPosition),
                        Mk(a, i.ns, new kh(g), b.aNormal),
                        Kk(a, 0, 12),
                        Gk(a, b)
                }
            });
        var Dm = function(a, b) {
                this.gv = a,
                    this.s = function(c, d, e) {
                        return d == j && (d = e),
                            d == j ? b.getStyle(c) : Ph(d, b, a)
                    }
                    ,
                    this.data = b
            }
        ;
        gh(Dm, b, {
            I3d: !0,
            ms_icons: 1,
            _iv: !0,
            iv: function() {
                this._iv = !0
            },
            _42: function(a, b, c, d) {
                var e, f, g, h, i, k, l, m = this, n = m.gv, o = m.data, p = o._id, q = m.s("batch"), r = n._34O, s = n._33O, t = n.isSelectable(o), u = n.getBrightness(o), v = u != j && 1 !== u;
                if (m._iv) {
                    if (g = pl(r, s, o, q),
                            m.validate(g, q ? Ac[q] || Ic : j),
                        g && (h = r[p],
                            i = h.size = g.vs.length / 3 - h.begin,
                            l = g.rs))
                        for (u = v ? u : 1,
                                 k = 0; i > k; k++)
                            l.push(u);
                    if (od(o)) {
                        var w = n.getWireframe(o);
                        w && rl(n, o, w)
                    }
                    m.labelInfo = m.label2Info = m.noteInfo = m.note2Info = m._38o = j,
                        m._24O(Ka, "getLabel"),
                        m._24O(La, "getLabel2"),
                        m._26O(Ma, "getNote"),
                        m._26O(Na, "getNote2"),
                        m._15O(),
                        m._iv = !1
                }
                v && Ok(a, b.uBrightness, u),
                    f = Uk(a, b, c, t, o, Ja),
                f && (tl(f, r[p], s),
                    tl(f, n._polylineIndexMap[p], n._polylineModelMap),
                    tl(f, n._wireframeIndexMap[p], n._wireframeModelMap)),
                r[p] || m._80o(a, b, d),
                (e = m.labelInfo) && (Uk(a, b, c, t, o, Ka),
                    m._28O(e, Ka, d)),
                (e = m.label2Info) && (Uk(a, b, c, t, o, La),
                    m._28O(e, La, d)),
                (e = m.noteInfo) && (Uk(a, b, c, t, o, Ma),
                    m._29O(e, Ma, d)),
                (e = m.note2Info) && (Uk(a, b, c, t, o, Na),
                    m._29O(e, Na, d)),
                (e = m._38o) && m._99O(a, b, e, c, t, d),
                v && Ok(a, b.uBrightness, 1)
            },
            validate: function() {},
            _16O: function() {
                return ph
            },
            _80o: function() {},
            dispose: function() {},
            getBodyColor: function(a) {
                var b = this.data
                    , c = this.gv.getBodyColor(b);
                return c ? c : a ? b.getStyle(a) : j
            },
            _24O: function(a, b) {
                var c = this
                    , d = c.data
                    , e = c.gv
                    , f = c.s
                    , g = e[b](d);
                if (g != j) {
                    var h = f(a + ".scale")
                        , i = f(a + ".max")
                        , k = c[a + "Info"] = {
                        label: g,
                        textureScale: f(a + ".texture.scale"),
                        color: e[b + "Color"](d),
                        font: f(a + ".font"),
                        align: f(a + ".align"),
                        background: e[b + "Background"](d)
                    }
                        , l = k.rect = Xd(k, g);
                    i > 0 && i < l.width && (k.labelWidth = l.width,
                        l.width = i),
                        l.x = l.y = 0,
                        l.width *= h,
                        l.height *= h,
                        k.mat = c._16O(f(a + ".autorotate"), f(a + ".position"), l, f(a + ".face"), f(a + ".t3"), f(a + ".r3"), f(a + ".rotationMode"));
                    var m = l.width / 2
                        , n = l.height / 2;
                    k.vs = new kh([-m, n, 0, -m, -n, 0, m, -n, 0, m, n, 0]),
                        l.width /= h,
                        l.height /= h
                }
            },
            _26O: function(a, b) {
                var c = this
                    , d = c.data
                    , e = c.gv
                    , f = c.s
                    , g = e[b](d);
                if (g != j) {
                    var h = f(a + ".scale")
                        , i = this[a + "Info"] = {
                        note: g,
                        textureScale: f(a + ".texture.scale"),
                        expanded: f(a + ".expanded"),
                        font: f(a + ".font"),
                        color: f(a + ".color"),
                        align: f(a + ".align"),
                        borderWidth: f(a + ".border.width"),
                        borderColor: f(a + ".border.color"),
                        background: e[b + "Background"](d)
                    };
                    if (i.expanded) {
                        var k = f(a + ".max")
                            , l = Xd(i, g);
                        l.width += 6,
                            l.height += 2,
                        k > 0 && k < l.width && (i.labelWidth = l.width,
                            l.width = k);
                        var m = {
                            x: -l.width / 2,
                            y: -8 - l.height,
                            width: l.width,
                            height: l.height + 8
                        }
                    } else
                        m = {
                            x: -6,
                            y: -18,
                            width: 12,
                            height: 18
                        };
                    i.mat = c._16O(f(a + ".autorotate"), f(a + ".position"), j, f(a + ".face"), f(a + ".t3"), f(a + ".r3"), f(a + ".rotationMode")),
                        i.rect = m,
                    1 !== h && (m = Eg(m),
                        m.x *= h,
                        m.height *= h,
                        m.y = -m.height,
                        m.width *= h);
                    var n = m.x
                        , o = m.y
                        , p = m.width
                        , q = m.height;
                    i.vs = new kh([n, -o, 0, n, -o - q, 0, n + p, -o - q, 0, n + p, -o, 0])
                }
            },
            _28O: function(a, b, c) {
                if (c(this.s(b + ".transparent"))) {
                    var d = a.rect
                        , e = a.textureScale
                        , f = d.width * e
                        , g = d.height * e;
                    if (f >= 1 && g >= 1) {
                        var h = Le(f, g);
                        1 !== e && (h.translate(h, d.x, d.y),
                            h.scale(e, e),
                            h.translate(h, -d.x, -d.y)),
                            ri(h, a),
                            h.restore(),
                            Yk(this, b, a.mat, a.vs, !0)
                    }
                }
            },
            _29O: function(a, b, c) {
                if (c(this.s(b + ".transparent"))) {
                    var d = a.rect
                        , e = a.textureScale
                        , f = d.x
                        , g = d.y
                        , h = d.width * e
                        , i = d.height * e;
                    if (h >= 1 && i >= 1) {
                        d.x = d.y = 0;
                        var j = Le(h, i);
                        1 !== e && j.scale(e, e),
                            si(j, a),
                            j.restore(),
                            d.x = f,
                            d.y = g,
                            Yk(this, b, a.mat, a.vs, !1)
                    }
                }
            },
            _99O: function(a, b, c, d, e, f) {
                if (c) {
                    var g = this
                        , h = g.gv
                        , i = g.data
                        , k = h._buffer
                        , l = h._1O
                        , m = c.icons;
                    for (var n in m) {
                        var o = m[n]
                            , p = c.rects[n];
                        if (p && f(Ph(o.transparent, i, h))) {
                            Uk(a, b, d, e, i, n);
                            var q = Ph(o.shape3d, i, h)
                                , r = q ? [q] : Ph(o.names, i, h)
                                , s = r ? r.length : 0
                                , t = Ph(o.textureScale, i, h) || 1
                                , u = Ph(o.light, i, h);
                            u == j && (u = q ? !0 : !1),
                                Fk(a, b, Ph(o.blend, i, h), u, Ph(o.opacity, i, h), Ph(o.reverseFlip, i, h), Ph(o.reverseColor, i, h), Ph(o.reverseCull, i, h));
                            for (var v = 0; s > v; v++) {
                                var w = r[v]
                                    , x = p[v];
                                if (Xk(g, x.mat),
                                        q)
                                    _l(h, i, cm(g.s, q), g.s);
                                else {
                                    var y = yg(w);
                                    if (y) {
                                        var z = x.width * t
                                            , A = x.height * t;
                                        if (z >= 1 && A >= 1) {
                                            var B = Le(z, A);
                                            Ag(B, y, Ph(o.stretch, i, h), 0, 0, z, A, i, h),
                                                B.restore(),
                                                vk(a, Je, l),
                                                Hk(a, b, l, Ph(o.discardSelectable, i, h), k.uv, Dl),
                                                Mk(a, k.vs, x.vs, b.aPosition),
                                                Mk(a, k.ns, El, b.aNormal),
                                                Nk(a, k.is, Fl),
                                                Lk(a, 0, Fl.length),
                                                Ik(a, b, l)
                                        }
                                    }
                                }
                                Rk(h)
                            }
                            Gk(a, b)
                        }
                    }
                }
            }
        });
        var Em = function(a, b) {
                yd(Em, this, [a, b])
            }
        ;
        gh(Em, Dm, {
            _16O: function(a, b, c, d, e, f, g, h, i) {
                var j = this.data
                    , k = Vk(b, j.s3(), c, d, h, i);
                return Wk(oh(), k, j.p3(), d, e, f, g, a, j.r3(), j.getRotationMode())
            },
            clear: function() {
                var a = this;
                a.faceMat = a.mat = a.shapeModel = a.left = a.right = a.front = a.back = a.top = a.bottom = a.csg = j
            },
            validate: function(a, b) {
                var c = this
                    , d = c.gv
                    , e = c.data
                    , f = cm(c.s)
                    , g = zh(e, d.getMat(e), f ? c.s("shape3d.scaleable") : !0);
                if (c.clear(),
                        a) {
                    var h = [];
                    f ? vl(d, e, f, c.s, c.getBodyColor(), [g], a, h) : (zl(d, e, a, b, g, ba, h, gl),
                        zl(d, e, a, b, g, ca, h, hl),
                        zl(d, e, a, b, g, da, h, il),
                        zl(d, e, a, b, g, ea, h, jl),
                        zl(d, e, a, b, g, _, h, kl),
                        zl(d, e, a, b, g, aa, h, ll)),
                    h.length && (td(a.vs, h),
                        td(a.ns, uk(h)))
                } else
                    c.mat = g,
                    (c.shapeModel = f) || (c.vf(ba),
                        c.vf(ca),
                        c.vf(_),
                        c.vf(aa),
                        c.vf(da),
                        c.vf(ea))
            },
            vf: function(a) {
                var b = this;
                if (b.gv.getFaceVisible(b.data, a)) {
                    var c = Zk(b, a);
                    return c.mat && (b.faceMat = !0),
                        c
                }
            },
            _80o: function(a, b, c) {
                var d = this
                    , e = d.gv
                    , f = d.data
                    , g = e._cube
                    , h = d.shapeModel;
                Tk(e, d.mat),
                    h ? _l(e, f, h, d.s, d.getBodyColor(), c) : (Mk(a, g.vs, j, b.aPosition),
                        Mk(a, g.ns, j, b.aNormal),
                        Nk(a, g.is),
                        d._18O(a, b, d.left, 0, c),
                        d._18O(a, b, d.front, 6, c),
                        d._18O(a, b, d.right, 12, c),
                        d._18O(a, b, d.back, 18, c),
                        d._18O(a, b, d.top, 24, c),
                        d._18O(a, b, d.bottom, 30, c)),
                    Rk(e),
                d.faceMat && (d._18O(a, b, d.left, 0, c, !0),
                    d._18O(a, b, d.front, 6, c, !0),
                    d._18O(a, b, d.right, 12, c, !0),
                    d._18O(a, b, d.back, 18, c, !0),
                    d._18O(a, b, d.top, 24, c, !0),
                    d._18O(a, b, d.bottom, 30, c, !0))
            },
            _18O: function(a, b, c, d, e, f) {
                if (c) {
                    if (!e(c.transparent))
                        return;
                    if (f && !c.mat || !f && c.mat)
                        return;
                    f && Tk(this.gv, c.mat);
                    var g = this
                        , h = g.data
                        , i = g.gv
                        , k = i.getTexture(c.texture, h)
                        , l = c.uv
                        , m = c.uvScale
                        , n = c.uvOffset
                        , o = c.discardSelectable;
                    if (k)
                        if (l) {
                            for (var p = 8 * (d / 6), q = 0; 8 > q; q++)
                                Jl[p + q] = l[q];
                            Hk(a, b, k, o, i._buffer.uv, Jl, n, m)
                        } else
                            Hk(a, b, k, o, i._cube.uv, j, n, m);
                    Fk(a, b, c.blend, c.light, c.opacity, c.reverseFlip, c.reverseColor, c.reverseCull),
                        Ok(a, b.uDiffuse, c.color),
                        Lk(a, d, 6),
                        Gk(a, b),
                        Ik(a, b, k),
                    f && Rk(i)
                }
            }
        });
        var Fm = function(a, b) {
                yd(Fm, this, [a, b])
            }
        ;
        gh(Fm, Dm, {
            _25Q: 1,
            validate: function(a) {
                var b = this
                    , c = b.gv
                    , d = b.data
                    , e = b.s
                    , f = e("edge.width")
                    , g = d._40I
                    , h = d._41I;
                if (b.shapeModel = b.info = j,
                    g && h) {
                    var i, k, l, n, o, p, q, r, s, t, u = d.isLooped(), v = e(Wa), x = m.getEdgeType(v);
                    if (x) {
                        var y = x(d, wi(b, c, d, u, v), c, b._19Q);
                        if (!y.points || y.points.isEmpty())
                            return;
                        p = b.info = {},
                            q = y.segments,
                            o = y.points,
                            r = o.size();
                        for (var z = g.getElevation(), A = h.getElevation(), B = 0; r > B; B++) {
                            var C = o.get(B);
                            C.e == j && (C.e = z + (A - z) * B / (r - 1))
                        }
                        s = Zj(o.get(0)),
                            t = Zj(o.get(r - 1));
                        var D = r % 2;
                        0 === D ? (p.c1 = Zj(o.get(r / 2 - 1)),
                            p.c2 = Zj(o.get(r / 2))) : p.p3 = Zj(o.get((r - D) / 2)),
                            p.s1 = s,
                            p.s2 = Zj(o.get(1)),
                            p.t1 = Zj(o.get(r - 2)),
                            p.t2 = t
                    } else {
                        o = new Rh,
                            p = b.info = {};
                        var E = e("edge.offset")
                            , F = e("edge.center")
                            , G = e("edge.source.t3")
                            , H = e("edge.target.t3")
                            , I = g.p3()
                            , J = h.p3();
                        if (G && (I[0] += G[0],
                                I[1] += G[1],
                                I[2] += G[2]),
                            H && (J[0] += H[0],
                                J[1] += H[1],
                                J[2] += H[2]),
                            v === Ga) {
                            q = e("edge.segments");
                            var K = p.points = e(Va) || Sh;
                            if (r = K.size()) {
                                s = Zj(K.get(0)),
                                    t = Zj(K.get(r - 1)),
                                !F && E && (l = lh(s, I, !0),
                                    E = w(E, Sg(I, s)),
                                    I = [I[0] + l[0] * E, I[1] + l[1] * E, I[2] + l[2] * E],
                                    l = lh(J, t, !0),
                                    E = w(E, Sg(t, J)),
                                    J = [J[0] - l[0] * E, J[1] - l[1] * E, J[2] - l[2] * E]);
                                var D = r % 2;
                                0 === D ? (i = Zj(K.get(r / 2 - 1)),
                                    k = Zj(K.get(r / 2))) : p.p3 = Zj(K.get((r - D) / 2)),
                                    p.s1 = I,
                                    p.s2 = s,
                                    p.t1 = t,
                                    p.t2 = J
                            } else
                                !F && E && (l = lh(J, I, !0),
                                    n = Sg(I, J),
                                    E = ti(E, n),
                                    I = [I[0] + l[0] * E, I[1] + l[1] * E, I[2] + l[2] * E],
                                    J = [J[0] - l[0] * E, J[1] - l[1] * E, J[2] - l[2] * E]),
                                    i = I,
                                    k = J;
                            o.add({
                                x: I[0],
                                y: I[2],
                                e: I[1]
                            }),
                                o.addAll(K),
                                o.add({
                                    x: J[0],
                                    y: J[2],
                                    e: J[1]
                                })
                        } else {
                            var L = wi(b, c, d, u, v);
                            if (b._19Q || (L = -L),
                                    u) {
                                var M = I[0]
                                    , N = I[1]
                                    , O = I[2]
                                    , P = g.getTall() / 2 + L;
                                i = [M - L, N + P, O],
                                    k = [M + L, N + P, O],
                                    o.add({
                                        x: M - L,
                                        y: O,
                                        e: N
                                    }),
                                    o.add({
                                        x: M - L,
                                        y: O,
                                        e: N + P
                                    }),
                                    o.add({
                                        x: M + L,
                                        y: O,
                                        e: N + P
                                    }),
                                    o.add({
                                        x: M + L,
                                        y: O,
                                        e: N
                                    })
                            } else {
                                l = lh(J, I, !0),
                                    n = Sg(I, J);
                                var Q = {
                                    x: I[0],
                                    y: I[2]
                                }
                                    , R = {
                                    x: J[0],
                                    y: J[2]
                                }
                                    , S = jk(j, Q, R, L)
                                    , T = S.x - Q.x
                                    , U = S.y - Q.y;
                                E = ti(E, n),
                                    l[0] *= E,
                                    l[1] *= E,
                                    l[2] *= E,
                                    i = [I[0] + l[0] + T, I[1] + l[1], I[2] + l[2] + U],
                                    k = [J[0] - l[0] + T, J[1] - l[1], J[2] - l[2] + U],
                                    F ? (o.add({
                                        x: I[0],
                                        y: I[2],
                                        e: I[1]
                                    }),
                                        o.add({
                                            x: i[0],
                                            y: i[2],
                                            e: i[1]
                                        }),
                                        o.add({
                                            x: k[0],
                                            y: k[2],
                                            e: k[1]
                                        }),
                                        o.add({
                                            x: J[0],
                                            y: J[2],
                                            e: J[1]
                                        })) : (o.add({
                                        x: i[0],
                                        y: i[2],
                                        e: i[1]
                                    }),
                                        o.add({
                                            x: k[0],
                                            y: k[2],
                                            e: k[1]
                                        }))
                            }
                        }
                        p.c1 = i,
                            p.c2 = k
                    }
                    p.list = e(Fb) === sa ? b.createTubeModel(o, q, f / 2, a) : b.createLineModel(o, q, f, "edge", "edge.dash")
                }
            }
        });
        var Gm = function(a, b) {
                yd(Gm, this, [a, b])
            }
        ;
        gh(Gm, Em, {
            _80o: function(a, b, c) {
                var d = this
                    , e = d.gv
                    , f = d.shapeModel;
                Tk(e, d.mat),
                    f ? _l(e, d.data, f, d.s, d.getBodyColor(), c) : ($k(d, a, b, d.left, c),
                        $k(d, a, b, d.front, c),
                        $k(d, a, b, d.right, c),
                        $k(d, a, b, d.back, c),
                        $k(d, a, b, d.top, c),
                        $k(d, a, b, d.bottom, c)),
                    Rk(e)
            },
            validate: function(a, b) {
                var c, d, e = this, f = e.s, g = e.data, h = g.p3(), i = g._thickness / 2, k = g.isClosePath(), l = g.getPoints(), m = g.getSegments(), n = f(Gb), o = a && a.uv;
                if (e.clear(),
                    0 > i)
                    d = e.shapeModel = Ei(l, m, f(Kb), f(Lb), n, f(Mb), g.getTall(), g.getElevation(), k),
                        f(Hb) ? f("shape3d.image") || delete d.uv : (delete d.vs,
                            delete d.ns,
                            delete d.uv),
                    f("shape3d.top.image") || delete d.top_uv,
                    f("shape3d.bottom.image") || delete d.bottom_uv;
                else if (f(Fb) === sa)
                    c = Ue(l, m, n, k),
                        d = e.shapeModel = {
                            vs: []
                        },
                    f("shape3d.image") && (d.uv = [],
                        d.sum = f(Mb) || Ld(c) || 1,
                        d.len = 0),
                    f(Kb) && !k && (d.top_vs = [],
                    f("shape3d.top.image") && (d.top_uv = [])),
                    f(Lb) && !k && (d.bottom_vs = [],
                    f("shape3d.bottom.image") && (d.bottom_uv = [])),
                        e._12O(c, i);
                else {
                    var p, q, r, s, t, u, v, w, x, y;
                    c = Ue(l, m, n, k),
                        t = e.vf(_, o, !1, b),
                    i && (u = e.vf(aa, o, !1, b),
                        v = k ? j : e.vf(ba, o, !1, b),
                        w = k ? j : e.vf(ca, o, !1, b),
                        x = e.vf(da, o, !1, b),
                        y = e.vf(ea, o, !1, b)),
                        i ? e._12O(c, i) : t && c.forEach(function(a) {
                                if (s = a.length,
                                    s > 0)
                                    for (p = a[0],
                                             r = 1; s > r; r++)
                                        q = a[r],
                                            e.addV(t.vs, p, q),
                                            p = q
                            }),
                        e._20Q(c),
                    a || (t && (t.ns = uk(t.vs),
                        em(t, "vs"),
                        em(t, ab)),
                    i && (u && (u.ns = uk(u.vs),
                        em(u, "vs"),
                        em(u, ab)),
                    v && (v.ns = uk(v.vs),
                        em(v, "vs"),
                        em(v, ab)),
                    w && (w.ns = uk(w.vs),
                        em(w, "vs"),
                        em(w, ab)),
                    x && (x.ns = uk(x.vs),
                        em(x, "vs"),
                        em(x, ab)),
                    y && (y.ns = uk(y.vs),
                        em(y, "vs"),
                        em(y, ab))))
                }
                var z = e.mat = oh();
                mk(z, h),
                    tj(z, g.r3(), g.getRotationMode()),
                    mk(z, mh(h)),
                a && (xl(e, z, a, d),
                    e.clear())
            },
            _20Q: function(a) {
                var b, c, d, e, f, g, h, i = this, k = i.front, l = i.back, m = i.top, n = i.bottom, o = k ? k.tuv : j, p = l ? l.tuv : j, q = m ? m.tuv : j, r = n ? n.tuv : j, s = 0;
                (o || p || q || r) && (b = i.s(Mb) || Ld(a) || 1,
                    a.forEach(function(a) {
                        if (c = a.length,
                            c > 0)
                            for (g = a[0],
                                     d = 1; c > d; d++)
                                h = a[d],
                                    e = s / b,
                                    s += Sg(g, h),
                                    f = s / b,
                                    i._14O(k, e, f),
                                    i._14O(l, 1 - f, 1 - e),
                                    i._14O(m, e, f),
                                    i._14O(n, e, f),
                                    g = h
                    }))
            },
            _14O: function(a, b, c) {
                if (a) {
                    var d = a.uv
                        , e = a.tuv;
                    if (e) {
                        if (d)
                            var f = d[0] + (d[6] - d[0]) * b
                                , g = d[1] + (d[7] - d[1]) * b
                                , h = d[2] + (d[4] - d[2]) * b
                                , i = d[3] + (d[5] - d[3]) * b
                                , j = d[2] + (d[4] - d[2]) * c
                                , k = d[3] + (d[5] - d[3]) * c
                                , l = d[0] + (d[6] - d[0]) * c
                                , m = d[1] + (d[7] - d[1]) * c;
                        else
                            f = b,
                                g = 0,
                                h = b,
                                i = 1,
                                j = c,
                                k = 1,
                                l = c,
                                m = 0;
                        e.push(h, i, j, k, l, m, l, m, f, g, h, i)
                    }
                }
            },
            _13O: function(a) {
                var b = a.uv
                    , c = a.tuv;
                c && (b ? c.push(b[2], b[3], b[4], b[5], b[6], b[7], b[6], b[7], b[0], b[1], b[2], b[3]) : c.push(0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1))
            },
            _12O: function(a, b) {
                var c, d, e, f, g, h = this;
                a.forEach(function(a) {
                    if (g = a.length,
                        g > 0)
                        for (c = {
                            p: a[0],
                            n: !0
                        },
                                 f = 1; g > f; f++)
                            d = a[f],
                                e = g - 1 > f ? a[f + 1] : j,
                                h.addPoint(c, d, e, b, a)
                })
            },
            addPoint: function(a, b, c, d, e) {
                var f, g, h, i, k, l, m, n, o, p = this, q = a.p, r = a.f, s = a.b, t = p.s("shape3d.side") || fh, u = p.s("shape3d.start.angle"), v = p.shapeModel, w = p.data.isClosePath();
                if (a.n && (a.n = !1,
                        r = w && e.length > 2 ? jk(e[e.length - 2], q, b, d) : jk(j, q, b, d),
                        s = ik(q, r),
                        v ? v.top_vs && p._10O(s, r, t, u, v.top_vs, v.top_uv) : (f = p.left) && (p.addV(f.vs, s, r),
                                p._13O(f))),
                        g = c ? jk(q, b, c, d) : w && e.length > 2 ? jk(q, b, e[1], d) : jk(q, b, j, d),
                        h = ik(b, g),
                        v) {
                    var x, y, z = v.vs, A = v.uv, B = v.sum;
                    for (A && (x = v.len / B,
                        v.len += Sg(q, b),
                        y = v.len / B),
                             l = p._9O(s, r, t, u),
                             m = p._9O(h, g, t, u),
                             n = 0; t > n; n++)
                        o = n + 1,
                            td(z, l[o]),
                            td(z, m[n]),
                            td(z, l[n]),
                            td(z, m[n]),
                            td(z, l[o]),
                            td(z, m[o]),
                        A && (i = n / t,
                            k = o / t,
                            A.push(x, k, y, i, x, i, y, i, x, k, y, k));
                    !c && v.bottom_vs && p._10O(h, g, t, u, v.bottom_vs, v.bottom_uv, !0)
                } else
                    !c && (f = p.right) && (p.addV(f.vs, g, h),
                        p._13O(f)),
                    (f = p.front) && p.addV(f.vs, r, g),
                    (f = p.back) && p.addV(f.vs, h, s),
                    (f = p.top) && p.addH(f.vs, r, g, h, s, !0),
                    (f = p.bottom) && p.addH(f.vs, s, h, g, r);
                a.p = b,
                    a.f = g,
                    a.b = h
            },
            _10O: function(a, b, c, d, e, f, g) {
                var h, i, j = this, k = j.data, l = j._9O(a, b, c, d), m = (a.x + b.x) / 2, n = (a.y + b.y) / 2, o = k.getElevation(), p = 0;
                for (p = 0; c > p; p++)
                    g ? (td(e, l[p]),
                        td(e, l[p + 1])) : (td(e, l[p + 1]),
                        td(e, l[p])),
                        td(e, [m, o, n]),
                    f && (g ? (h = E * (p + 1) / c + d,
                        i = E * p / c + d) : (h = E * p / c + d,
                        i = E * (p + 1) / c + d),
                        f.push(.5 - .5 * y(i), .5 - .5 * A(i), .5 - .5 * y(h), .5 - .5 * A(h), .5, .5))
            },
            _9O: function(a, b, c, d) {
                for (var e, f, g = this, h = g.data, i = [], j = (a.x + b.x) / 2, k = (a.y + b.y) / 2, l = h.getTall() / 2, m = h.getElevation(), n = 0; c >= n; n++)
                    e = E * n / c + d,
                        f = y(e),
                        i.push([j + (a.x - j) * f, m + l * A(e), k + (a.y - k) * f]);
                return i
            },
            addV: function(a, b, c) {
                var d = b.x
                    , e = b.y
                    , f = c.x
                    , g = c.y
                    , h = this.data
                    , i = h.getElevation()
                    , j = h.getTall() / 2;
                a.push(d, i - j, e, f, i - j, g, f, i + j, g, f, i + j, g, d, i + j, e, d, i - j, e)
            },
            addH: function(a, b, c, d, e, f) {
                var g = this.data
                    , h = g.getTall() / 2
                    , i = g.getElevation() + (f ? h : -h);
                a.push(b.x, i, b.y, c.x, i, c.y, d.x, i, d.y, d.x, i, d.y, e.x, i, e.y, b.x, i, b.y)
            },
            vf: function(a, b, c, d) {
                var e, f = this, g = f.gv.getFaceVisible(f.data, a);
                return (c || g) && (e = Zk(f, a, d),
                    e.vs = [],
                    e.tuv = g && (e.texture || b) ? [] : j,
                    e.visible = g),
                    e
            }
        });
        var Hm = function(a, b) {
                yd(Hm, this, [a, b])
            }
        ;
        gh(Hm, Dm, {
            _25Q: 1,
            validate: function(a) {
                var b = this
                    , c = b.data
                    , d = b.s
                    , e = c.getPoints()
                    , f = e.size();
                if (b.shapeModel = b.info = j,
                    f > 1) {
                    var g = b.info = {}
                        , h = c.getSegments()
                        , i = c.getThickness()
                        , k = Zj(e.get(0))
                        , l = Zj(e.get(f - 1))
                        , m = f % 2;
                    0 === m ? (g.c1 = Zj(e.get(f / 2 - 1)),
                        g.c2 = Zj(e.get(f / 2))) : g.p3 = Zj(e.get((f - m) / 2)),
                        g.s1 = k,
                        g.s2 = Zj(e.get(1)),
                        g.t1 = Zj(e.get(f - 2)),
                        g.t2 = l,
                        g.list = d(Fb) === sa ? b.createTubeModel(e, h, i / 2, a) : b.createLineModel(e, h, i, "shape.border", "shape.dash")
                }
            }
        }),
            vd(m, {
                accordionViewExpandIcon: $c(yf),
                accordionViewCollapseIcon: $c(yf, !0),
                accordionViewLabelColor: fg,
                accordionViewLabelFont: gg,
                accordionViewTitleBackground: xf,
                accordionViewSelectBackground: If,
                accordionViewSelectWidth: 3,
                accordionViewSeparatorColor: c,
                splitViewDividerSize: 1,
                splitViewDividerBackground: xf,
                splitViewDragOpacity: .5,
                splitViewToggleIcon: {
                    width: 16,
                    height: 16,
                    comps: [{
                        type: pa,
                        rect: [2, 2, 12, 12],
                        background: yf
                    }]
                },
                propertyViewLabelColor: eg,
                propertyViewLabelSelectColor: fg,
                propertyViewLabelFont: gg,
                propertyViewExpandIcon: $c(Af),
                propertyViewCollapseIcon: $c(Af, !0),
                propertyViewBackground: zf,
                propertyViewRowLineVisible: !0,
                propertyViewColumnLineVisible: !0,
                propertyViewRowLineColor: Ef,
                propertyViewColumnLineColor: Ef,
                propertyViewSelectBackground: If,
                listViewLabelColor: eg,
                listViewLabelSelectColor: fg,
                listViewLabelFont: gg,
                listViewRowLineVisible: !1,
                listViewRowLineColor: Ef,
                listViewSelectBackground: If,
                treeViewLabelColor: eg,
                treeViewLabelSelectColor: fg,
                treeViewLabelFont: gg,
                treeViewExpandIcon: $c(Df),
                treeViewCollapseIcon: $c(Df, !0),
                treeViewRowLineVisible: !1,
                treeViewRowLineColor: Ef,
                treeViewSelectBackground: If,
                tableViewLabelColor: eg,
                tableViewLabelSelectColor: fg,
                tableViewLabelFont: gg,
                tableViewRowLineVisible: !0,
                tableViewColumnLineVisible: !0,
                tableViewRowLineColor: Ef,
                tableViewColumnLineColor: Ef,
                tableViewSelectBackground: If,
                treeTableViewLabelColor: eg,
                treeTableViewLabelSelectColor: fg,
                treeTableViewLabelFont: gg,
                treeTableViewExpandIcon: $c(Df),
                treeTableViewCollapseIcon: $c(Df, !0),
                treeTableViewRowLineVisible: !0,
                treeTableViewColumnLineVisible: !0,
                treeTableViewRowLineColor: Ef,
                treeTableViewColumnLineColor: Ef,
                treeTableViewSelectBackground: If,
                tableHeaderLabelColor: eg,
                tableHeaderLabelFont: gg,
                tableHeaderColumnLineVisible: !0,
                tableHeaderColumnLineColor: Cf,
                tableHeaderBackground: zf,
                tableHeaderMoveBackground: uf,
                tableHeaderInsertColor: If,
                tableHeaderSortDescIcon: _c(Af, !0),
                tableHeaderSortAscIcon: _c(Af),
                tabViewTabGap: 1,
                tabViewLabelColor: fg,
                tabViewLabelFont: gg,
                tabViewTabBackground: xf,
                tabViewSelectWidth: 3,
                tabViewSelectBackground: If,
                tabViewMoveBackground: uf,
                tabViewInsertColor: If,
                toolbarLabelColor: eg,
                toolbarLabelSelectColor: fg,
                toolbarLabelFont: gg,
                toolbarBackground: zf,
                toolbarSelectBackground: If,
                toolbarItemGap: 8,
                toolbarSeparatorColor: Bf
            }, !0);
        var Im = {
                translateX: 1,
                sortColumn: 1
            }
            , Jm = {
                sortable: 1,
                sortOrder: 1,
                sortFunc: 1
            }
            , Km = {
                focusData: 1
            }
            , Lm = {
                dataModel: 1,
                sortColumn: 1,
                sortFunc: 1,
                visibleFunc: 1,
                rootData: 1,
                rootVisible: 1
            }
            , Mm = {
                dataModel: 1,
                sortFunc: 1,
                visibleFunc: 1,
                categorizable: 1
            }
            , Nm = function(a, b) {
                b.add(a),
                a.hasChildren() && a.eachChild(function(a) {
                    Nm(a, b)
                })
            }
            , Om = function(a, b, c, d, e, f, g, h, i, k, l) {
                var n, o = c.getValueType(), p = c.getAlign();
                if (c.getEnumValues()) {
                    var q = c.toEnumLabel(b)
                        , r = hg || 0
                        , s = 0
                        , t = f
                        , u = m.getTextSize(d, q).width;
                    return n = yg(c.toEnumIcon(b)),
                    n && (s = f + hg / 2,
                        "center" === p ? s += (h - (r + u)) / 2 : "right" === p && (s = s + h - (r + u)),
                        zg(a, n, s, g + i / 2),
                        t = s + hg / 2),
                        void (q != j && (n ? Jg(a, q, d, e, t, g, h - (t - f), i) : Jg(a, q, d, e, f, g, h, i, p)))
                }
                return b = c.formatValue(b),
                    b != j ? o === Wb ? void Xe(a, f, g, h, i, b) : o === Vb || !o && id(b) ? (n = yg(b ? Ba : Ca),
                        void zg(a, n, f + h / 2, g + i / 2, k, l)) : void Jg(a, b, d, e, f, g, h, i, p) : void 0
            }
            , Pm = function(a, b) {
                var c = b.view
                    , d = c.getDataModel().getHistoryManager()
                    , e = ge(a)
                    , f = b.column || b.property;
                d && d.beginInteraction(),
                    b.editor = a,
                    a.info = b,
                    c.setCurrentEditor(a),
                    c.getView().insertBefore(e, c._79O),
                    he(a, b.editorRect),
                    a.setFocus ? a.setFocus() : fe(a),
                    a.commitValue = function() {
                        a._17Q && (a = a._17Q),
                            c.setValue(b.data, f, a.getValue ? a.getValue() : a.value),
                        a.close && a.close(),
                            bh(e)
                    }
                    ,
                f.onEditorCreated && f.onEditorCreated(b)
            }
            , Qm = function(a, b, c, d, e) {
                var f = ch(a, c)
                    , g = b.value
                    , h = b.view
                    , k = e.getValueType();
                return f.onblur = f.onchange = function() {
                    h.endEditing()
                }
                    ,
                    "input" === a ? (g = e.formatValue(g),
                    g != j && (f.value = g),
                        f.onkeydown = function(a) {
                            Fe(a) && h.endEditing()
                        }
                        ,
                    (k === Xb || k === Yb) && f.addEventListener(ic, m.numberListener, !1)) : a === cb && d.forEach(function(a) {
                            var b = i.createElement("option");
                            b.innerHTML = e.toEnumLabel(a),
                                b.value = a,
                            e.isEnumEqual(g, a) && (b.selected = !0),
                                Wd(f, b)
                        }),
                    Pm(f, b),
                    f
            }
            , Rm = k.widget = {}
            , Sm = function(a, b, c) {
                gh(d + ".widget." + a, b, c)
            }
        ;
        vd(Uf, {
            ms_value: function(a) {
                a.getValue = function(a) {
                    var b = this.getItemById(a)
                        , c = b.element;
                    return c ? c.getValue ? c.getValue() : c.value : b.selected
                }
                    ,
                    a.setValue = function(a, b) {
                        var c = this.getItemById(a)
                            , d = c.element;
                        d ? d.setValue ? d.setValue(b) : d.value = b : (c.selected = b,
                            this.iv())
                    }
                    ,
                    a.v = function(a, b) {
                        var c = this;
                        if (2 === arguments.length)
                            c.setValue(a, b);
                        else {
                            if (!jd(a))
                                return c.getValue(a);
                            for (var d in a)
                                c.setValue(d, a[d])
                        }
                        return c
                    }
            },
            _46o: function(a) {
                a._icon = j,
                    a._accessType = j,
                    a._valueType = j,
                    a._editable = !1,
                    a._batchEditable = !0,
                    a._align = ba,
                    a._nullable = !0,
                    a._emptiable = !1,
                    a.setParent = Mc,
                    a.formatValue = function(a) {
                        var b = this
                            , c = b._valueType;
                        if (b.getEnumValues())
                            return b.toEnumLabel(a);
                        if (c === Vb)
                            return !!a;
                        if (a != j) {
                            if (c === Xb)
                                return r(a);
                            if (hd(a))
                                return sd(a)
                        }
                        return a
                    }
                    ,
                    a.setEnum = function(a, b, c, d, e, f) {
                        var g = this;
                        a && a.values && (d = a.editable,
                            c = a.icons,
                            b = a.labels,
                            e = a.strict,
                            f = a.maxHeight,
                            a = a.values),
                        md(a) && (a = a._as),
                        md(b) && (b = b._as),
                        md(c) && (c = c._as),
                            g._enumValues = a,
                            g._enumLabels = b,
                            g._enumIcons = c,
                            g._enumEditable = d,
                            g._enumStrict = e == j ? !0 : e,
                            g._enumMaxHeight = f,
                        a && a.length && hd(a[0]) && (g._valueType = Yb),
                            g.fp("enum", !1, !0)
                    }
                    ,
                    a.getEnumMaxHeight = function() {
                        return this._enumMaxHeight
                    }
                    ,
                    a.isEnumEditable = function() {
                        return this._enumEditable
                    }
                    ,
                    a.getEnumValues = function() {
                        return this._enumValues
                    }
                    ,
                    a.getEnumLabels = function() {
                        return this._enumLabels
                    }
                    ,
                    a.getEnumIcons = function() {
                        return this._enumIcons
                    }
                    ,
                    a.isEnumStrict = function() {
                        return this._enumStrict
                    }
                    ,
                    a.isEnumEqual = function(a, b) {
                        return this._enumStrict ? a === b : a == b
                    }
                    ,
                    a.toEnumLabel = function(a) {
                        var b = this
                            , c = b._enumValues
                            , d = b._enumLabels;
                        if (c && d)
                            for (var e = 0; e < c.length; e++)
                                if (b.isEnumEqual(a, c[e]))
                                    return d[e];
                        return a
                    }
                    ,
                    a.toEnumIcon = function(a) {
                        var b = this
                            , d = b._enumValues
                            , e = b._enumIcons;
                        if (d && e)
                            for (var f = 0; f < d.length; f++)
                                if (b.isEnumEqual(a, d[f]))
                                    return e[f];
                        return c
                    }
            },
            _45o: function(a) {
                a._87o = function(a, b, c, d, e, f) {
                    if (a) {
                        var g = this
                            , h = g._90I
                            , i = Rd(1);
                        g._columnLineVisible && (e -= 1),
                        g._rowLineVisible && (f -= 1),
                        0 >= e || 0 >= f || (g._90I || (h = g._90I = {}),
                        h[b] || (h[b] = new Rh),
                            he(i, g.tx() + c, g.ty() + d, e, f),
                            Wd(i, a),
                            g._view.insertBefore(i, g._79O),
                        a.onParentAdded && a.onParentAdded(i),
                            h[b].add(i))
                    }
                }
                    ,
                    a._76o = function() {
                        var a = this
                            , b = a._90I;
                        if (b) {
                            for (var c in b)
                                b[c].each(function(a) {
                                    bh(a)
                                });
                            delete a._90I
                        }
                    }
                    ,
                    a._77o = function(a) {
                        var b = this;
                        if (b._90I) {
                            var c = b._90I[a];
                            c && (c.each(function(a) {
                                bh(a)
                            }),
                                delete b._90I[a])
                        }
                    }
            },
            _47o: function(a) {
                a.getValue = function(a, b) {
                    return b.getValue ? b.getValue(a, b, this) : Gd(a, b.getAccessType(), b.getName())
                }
                    ,
                    a.setValue = function(a, b, d) {
                        if (b.isEmptiable() || "" !== d || (d = c),
                            b.isNullable() || d != j) {
                            var e = this
                                , f = b.getName()
                                , g = b.getAccessType()
                                , h = b.getValueType();
                            h === Xb && gd(d) ? d = L(d) : h === Yb && gd(d) ? d = parseFloat(d) : h === Vb && gd(d) && (d = "true" === d),
                                e._batchEditable && b._batchEditable && e.isSelected(a) ? e.sm().each(function(a) {
                                    b.setValue ? b.setValue(a, b, d, e) : Hd(a, g, f, d)
                                }) : b.setValue ? b.setValue(a, b, d, e) : Hd(a, g, f, d)
                        }
                    }
                    ,
                    a.setCurrentEditor = function(a) {
                        this.endEditing(),
                            this._currentEditor = a,
                            this.redraw()
                    }
                    ,
                    a.isEditing = function(a, b) {
                        var c = this
                            , d = c._currentEditor;
                        if (!d)
                            return !1;
                        if (b) {
                            var e = d.info;
                            return e ? (e.column || e.property) === b && e.data === a : !1
                        }
                        return !0
                    }
                    ,
                    a.endEditing = function() {
                        var a = this
                            , b = a._currentEditor
                            , c = a.getDataModel().getHistoryManager();
                        b && (delete a._currentEditor,
                        b.commitValue && b.commitValue(b.info),
                            a.redraw(),
                        c && c.endInteraction())
                    }
                    ,
                    a.beginEditing = function(a) {
                        this.endEditing();
                        var b = this
                            , c = a.column || a.property;
                        if (c.beginEditing)
                            c.beginEditing(a);
                        else {
                            var d = a.data
                                , e = a.value
                                , f = b.getSelectBackground(d)
                                , g = c.getEnumValues()
                                , h = c.getSlider()
                                , i = c.getColorPicker();
                            if (h) {
                                var k = vg(Rm.Slider, h);
                                return k.setValue(e),
                                    k.getView().onblur = function() {
                                        b.endEditing()
                                    }
                                    ,
                                k.isInstant() && (k.onValueChanged = function() {
                                        b.setValue(d, c, k.getValue())
                                    }
                                ),
                                    void Pm(k, a)
                            }
                            if (i || c.getValueType() === Wb) {
                                var l = vg(Rm.ColorPicker, i);
                                return l.setValue(e),
                                    l.onClosed = function() {
                                        b.endEditing()
                                    }
                                    ,
                                l.isInstant() && (l.onValueChanged = function(a, e) {
                                        b.setValue(d, c, e)
                                    }
                                ),
                                    Pm(l, a),
                                    void l.open()
                            }
                            if (g) {
                                if (Rm.ComboBox) {
                                    var m = new Rm.ComboBox;
                                    m.setValue(e),
                                        m.setValues(g),
                                        m.setLabels(c.getEnumLabels()),
                                        m.setIcons(c.getEnumIcons()),
                                        m.setEditable(c.isEnumEditable()),
                                        m.setStrict(c.isEnumStrict()),
                                        m.setMaxHeight(c.getEnumMaxHeight()),
                                        m.onClosed = function() {
                                            b.endEditing()
                                        }
                                        ,
                                        Pm(m, a),
                                        m.open()
                                } else
                                    Qm(cb, a, f, g, c);
                                return
                            }
                            var n = c.getValueType();
                            if (n === Vb || id(e))
                                return void b.setValue(d, c, !e);
                            if (c.getItemEditor()) {
                                var o = Fg(c.getItemEditor())
                                    , p = new o(d,c,b,a)
                                    , q = p.getView();
                                return q._17Q = p,
                                    p.setValue(e),
                                    Ud(q),
                                    Pm(q, a),
                                    void (p.editBeginning && p.editBeginning())
                            }
                            Qm("input", a, f, j, c)
                        }
                    }
            },
            _44o: function(a) {
                a.init = function(a) {
                    var b = this
                        , c = b.th = new fn(a)
                        , d = b._view = Rd(1);
                    b.tv = b._tableView = a,
                        Wd(d, c.getView()),
                        Wd(d, a.getView()),
                        c.mp(function(a) {
                            a.property === za && b.iv()
                        }),
                        b.iv()
                }
                    ,
                    a.getTableView = function() {
                        return this.tv
                    }
                    ,
                    a.getTableHeader = function() {
                        return this.th
                    }
                    ,
                    a.getDataModel = function() {
                        return this.tv.dm()
                    }
                    ,
                    a.getColumnModel = function() {
                        return this.tv.getColumnModel()
                    }
                    ,
                    a.setColumns = function(a) {
                        this.tv.setColumns(a)
                    }
                    ,
                    a.addColumns = function(a) {
                        this.tv.addColumns(a)
                    }
                    ,
                    a.endEditing = function() {
                        this.tv.endEditing()
                    }
                    ,
                    a.validateImpl = function() {
                        var a = this
                            , b = a.th
                            , c = _d(b)
                            , d = {
                            x: 0,
                            y: 0,
                            width: a.getWidth(),
                            height: c
                        };
                        he(b, d),
                            d.y = c,
                            d.height = v(0, a.getHeight() - c),
                            he(a.tv, d)
                    }
            },
            ms_vs: function(a) {
                a._41o = function() {
                    return this._29I.height < this._59I
                }
                    ,
                    a._43o = function() {
                        var a = this;
                        a._41o() && (a._58I || (O(function() {
                            a._94O()
                        }, ng),
                            a.iv()),
                            a._58I = new Date)
                    }
                    ,
                    a._94O = function() {
                        var a = this;
                        if (a._58I) {
                            var b = new Date;
                            b.getTime() - a._58I.getTime() >= ng ? (delete a._58I,
                                a.iv()) : O(function() {
                                a._94O()
                            }, ng)
                        }
                    }
                    ,
                    a._93I = function() {
                        var a = this
                            , b = a._27I;
                        if (a._58I || !a._autoHideScrollBar) {
                            b || Wd(a._79O, b = a._27I = Rd());
                            var c = a._29I
                                , d = c.height
                                , e = a._59I
                                , f = a.getScrollBarSize()
                                , g = c.width - f - 2
                                , h = d * (-a.ty() / e)
                                , i = d * (d / e)
                                , j = b.style;
                            e > d ? (og > i && (h = h + i / 2 - og / 2,
                            0 > h && (h = 0),
                            h + og > d && (h = d - og),
                                i = og),
                                j.visibility = _a,
                                j.background = a.getScrollBarColor(),
                                j.borderRadius = f / 2 + ma,
                                he(b, g, h, f, i)) : j.visibility = $a
                        } else
                            b && (b.style.visibility = $a)
                    }
            },
            ms_hs: function(a) {
                a._40o = function() {
                    return this._29I.width < this._91I
                }
                    ,
                    a._42o = function() {
                        var a = this;
                        a._40o() && (a._95O || (O(function() {
                            a._94I()
                        }, ng),
                            a.iv()),
                            a._95O = new Date)
                    }
                    ,
                    a._94I = function() {
                        var a = this;
                        if (a._95O) {
                            var b = new Date;
                            b.getTime() - a._95O.getTime() >= ng ? (delete a._95O,
                                a.iv()) : O(function() {
                                a._94I()
                            }, ng)
                        }
                    }
                    ,
                    a._92I = function() {
                        var a = this
                            , b = a._28I;
                        if (a._95O || !a._autoHideScrollBar) {
                            b || Wd(a._79O, b = a._28I = Rd());
                            var c = a._29I
                                , d = c.width
                                , e = a._91I
                                , f = a.getScrollBarSize()
                                , g = c.height - f - 2
                                , h = d * (-a.tx() / e)
                                , i = d * (d / e)
                                , j = b.style;
                            e > d ? (og > i && (h = h + i / 2 - og / 2,
                            0 > h && (h = 0),
                            h + og > d && (h = d - og),
                                i = og),
                                j.visibility = _a,
                                j.background = a.getScrollBarColor(),
                                j.borderRadius = f / 2 + ma,
                                he(b, h, g, i, f)) : j.visibility = $a
                        } else
                            b && (b.style.visibility = $a)
                    }
            }
        }),
            xg(Ba, Yc(16, 16, [{
                type: qa,
                rect: [1, 1, 14, 14],
                background: If
            }, {
                type: oa,
                rect: [1, 1, 14, 14],
                width: 1,
                color: Ff
            }, {
                type: ta,
                points: [13, 3, 7, 12, 4, 8],
                borderWidth: 2,
                borderColor: "#FFF"
            }])),
            xg(Ca, Yc(16, 16, {
                type: oa,
                rect: [1, 1, 14, 14],
                width: 1,
                color: Ff
            })),
            xg(Ea, Yc(16, 16, [{
                type: ra,
                rect: [2, 2, 12, 12],
                borderWidth: 1,
                borderColor: Ff,
                background: "#FFF"
            }, {
                type: ra,
                rect: [4, 4, 8, 8],
                background: If
            }])),
            xg(Fa, Yc(16, 16, {
                type: ra,
                rect: [2, 2, 12, 12],
                borderWidth: 1,
                borderColor: Ff
            })),
            Uf._15Q = function(a) {
                a._29I = Pc,
                    a._59I = 0,
                    a._91I = 0,
                    a._5o = function(a) {
                        var b = this;
                        b._30I = new Rh,
                            b._rows = new Rh,
                            b._rowMap = {},
                            b._31I = 0,
                            b._14I = 0,
                            b._view = Rd(1),
                            b._canvas = Sd(b._view),
                            Wd(b._view, b._79O = Rd()),
                            b.dm(a ? a : new Vh)
                    }
                    ,
                    a.getCheckIcon = function(a) {
                        var b = this.sm()
                            , c = b.co(a);
                        return yg(b.sg() ? c ? Ea : Fa : c ? Ba : Ca)
                    }
                    ,
                    a.checkData = function(a) {
                        var b = this.sm()
                            , c = b.co(a);
                        b.sg() && c || (this._32o = 1,
                            c ? b.rs(a) : b.as(a),
                            delete this._32o)
                    }
                    ,
                    a.getDataAt = function(a) {
                        a.target && (a = this.lp(a));
                        var b = s(a.y / this._rowHeight)
                            , c = this._rows;
                        return 0 > b || b >= c.size() ? j : c.get(b)
                    }
                    ,
                    a.onDataDoubleClicked = function() {}
                    ,
                    a.onDataClicked = function() {}
                    ,
                    a.adjustTranslateX = function() {
                        return 0
                    }
                    ,
                    a.adjustTranslateY = function(a) {
                        var b = this.getHeight() - this._59I;
                        return b > a && (a = b),
                            a > 0 ? 0 : r(a)
                    }
                    ,
                    a.onPropertyChanged = function(a) {
                        var b = this
                            , c = a.property;
                        Lm[c] ? b.ivm() : Km[c] || b.redraw(),
                            c === Cb ? b._42o() : c === Db && b._43o()
                    }
                    ,
                    a.getLabel = function(a) {
                        return a.toLabel()
                    }
                    ,
                    a.getLabelFont = function() {
                        return this._labelFont
                    }
                    ,
                    a.getLabelColor = function(a) {
                        var b = this;
                        if (b.isCheckMode()) {
                            if (b._focusData === a)
                                return b._labelSelectColor
                        } else if (b.isSelected(a))
                            return b._labelSelectColor;
                        return b._labelColor
                    }
                    ,
                    a.getStartRowIndex = function() {
                        return this._31I
                    }
                    ,
                    a.getEndRowIndex = function() {
                        return this._14I
                    }
                    ,
                    a.getRowDatas = function() {
                        return this._rows
                    }
                    ,
                    a.getRowIndex = function(a) {
                        return this._rowMap[a._id]
                    }
                    ,
                    a.getRowSize = function() {
                        return this._rows.size()
                    }
                    ,
                    a.getViewRect = function() {
                        return Eg(this._29I)
                    }
                    ,
                    a.isVisible = function(a) {
                        return this._visibleFunc ? this._visibleFunc(a) : !0
                    }
                    ,
                    a.getCurrentSortFunc = function() {
                        return this._sortFunc
                    }
                    ,
                    a.setDataModel = function(a) {
                        var b = this
                            , c = b._dataModel
                            , d = b._3o;
                        c !== a && (c && (c.umm(b.handleDataModelChange, b),
                            c.umd(b.handleDataPropertyChange, b),
                            c.umh(b._15o, b),
                        d || c.sm().ums(b._16o, b)),
                            b._dataModel = a,
                            a.mm(b.handleDataModelChange, b),
                            a.md(b.handleDataPropertyChange, b),
                            a.mh(b._15o, b),
                            d ? d._21I(a) : a.sm().ms(b._16o, b),
                            b.fp("dataModel", c, a))
                    }
                    ,
                    a.validateModel = function() {
                        var a = this;
                        a._rows.clear(),
                            a._rowMap = {},
                            a.buildChildren(a._dataModel._roots);
                        var b = a._rows = a._rows.toList(a.isVisible, a)
                            , c = 0
                            , d = a.getCurrentSortFunc()
                            , e = b.size();
                        for (d && b.sort(d); e > c; c++)
                            a._rowMap[b.get(c)._id] = c
                    }
                    ,
                    a.buildChildren = function(a) {
                        var b = this;
                        a.each(function(a) {
                            b._rows.add(a),
                                b.buildChildren(a._children)
                        })
                    }
                    ,
                    a.handleDataModelChange = function() {
                        this.ivm()
                    }
                    ,
                    a.handleDataPropertyChange = function(a) {
                        "parent" === a.property ? this.ivm() : this.invalidateData(a.data)
                    }
                    ,
                    a._15o = function() {
                        this.ivm()
                    }
                    ,
                    a._16o = function(a) {
                        a.datas.each(this.invalidateData, this),
                            this.onSelectionChanged(a)
                    }
                    ,
                    a.onSelectionChanged = function(a) {
                        var b = this
                            , c = b.sm();
                        !b.isAutoMakeVisible() || 1 !== c.size() || "set" !== a.kind && "append" !== a.kind || b._32o || b.makeVisible(c.ld())
                    }
                    ,
                    a.makeVisible = function(a) {
                        a && (this._23I = a,
                            this.iv())
                    }
                    ,
                    a.scrollToIndex = function(a) {
                        var b = this
                            , c = b._29I
                            , d = c.height
                            , e = b._rowHeight
                            , f = e * a;
                        a >= 0 && a < b._rows.size() && d > 0 && (f + e > c.y + d ? b.ty(-f + d - e) : f < c.y && b.ty(-f))
                    }
                    ,
                    a.ivm = function() {
                        this.invalidateModel()
                    }
                    ,
                    a.invalidateModel = function() {
                        var a = this;
                        a._96I || (a._96I = 1,
                            a._32I = 1,
                            delete a._24I,
                            a.iv())
                    }
                    ,
                    a.redraw = function() {
                        var a = this;
                        a._32I || (a._32I = 1,
                            delete a._24I,
                            a.iv())
                    }
                    ,
                    a.invalidateData = function(a) {
                        var b = this;
                        U ? b.redraw() : b._32I || (b._24I || (b._24I = {}),
                                b._24I[a._id] = a,
                                b.iv())
                    }
                    ,
                    a.getFocusData = function() {
                        return this._focusData
                    }
                    ,
                    a.setFocusDataById = function(a) {
                        this.setFocusData(this.dm().getDataById(a))
                    }
                    ,
                    a.setFocusData = function(a) {
                        var b = this
                            , c = b._focusData;
                        c !== a && (b._focusData = a,
                            b.fp("focusData", c, a),
                        c && b.invalidateData(c),
                        a && (b.invalidateData(a),
                        b.isAutoMakeVisible() && b.makeVisible(a)))
                    }
                    ,
                    a.drawRowBackground = function(a, b, c, d, e, f, g) {
                        var h = this
                            , i = h.isCheckMode();
                        (b === h._focusData && i || c && !i) && Xe(a, d, e, f, g, h.getSelectBackground(b))
                    }
                    ,
                    a.drawData = function(a, b, c) {
                        var d = this
                            , e = d._rowHeight
                            , f = e * c
                            , g = d._29I
                            , h = g.x
                            , i = g.width;
                        a.save(),
                            a.beginPath(),
                            a.rect(h, f, i, e),
                            a.clip(),
                            d._87o(d.drawRow(a, b, d.isSelected(b), h, f, i, e), c, h, f, i, e),
                            a.restore(),
                        d._rowLineVisible && Xe(a, h, f + e - 1, i, 1, d._rowLineColor)
                    }
                    ,
                    a._12I = function(a) {
                        var b = this
                            , c = b._31I
                            , d = b._29I
                            , e = d.x
                            , f = d.y
                            , g = d.width
                            , h = d.height;
                        for (a.beginPath(),
                                 a.rect(e, f, g, h),
                                 a.clip(),
                                 a.clearRect(e, f, g, h),
                                 b._76o(),
                                 b._93db(a); c < b._14I; c++)
                            b.drawData(a, b._rows.get(c), c);
                        b._92db(a)
                    }
                    ,
                    a._13I = function(a) {
                        for (var b, c = this, d = c._rowHeight, e = c._29I, f = e.x, g = e.width, h = c._31I, i = c._30I; h < c._14I; h++)
                            b = c._rows.get(h),
                            c._24I[b._id] && i.add({
                                data: b,
                                index: h
                            });
                        i.isEmpty() || (a.beginPath(),
                            i.each(function(b) {
                                a.rect(f, b.index * d, g, d)
                            }),
                            a.clip(),
                            i.each(function(b) {
                                a.clearRect(f, b.index * d, g, d)
                            }),
                            i.each(function(a) {
                                c._77o(a.index)
                            }),
                            c._93db(a),
                            i.each(function(b) {
                                c.drawData(a, b.data, b.index)
                            }),
                            c._92db(a),
                            i.clear())
                    }
                    ,
                    a.validateImpl = function() {
                        var a = this
                            , b = a._canvas
                            , c = a.getWidth()
                            , d = a.getHeight()
                            , e = a._rowHeight
                            , f = a._32I;
                        (c !== b.clientWidth || d !== b.clientHeight) && (Vd(b, c, d),
                            f = 1);
                        var g = J && !K;
                        a._96I && !g && a.validateModel();
                        var h = a._29I
                            , i = {
                            x: -a.tx(),
                            y: -a.ty(),
                            width: c,
                            height: d
                        }
                            , k = a._rows.size()
                            , l = be(b)
                            , m = a._23I;
                        f || Bd(i, h) || (f = 1),
                            a._29I = i,
                            a._59I = k * e,
                            a._31I = s(i.y / e),
                            a._14I = t((i.y + i.height) / e),
                        a._31I < 0 && (a._31I = 0),
                        a._14I > k && (a._14I = k),
                        a._99I && f && a._99I(),
                            ce(l, a.tx(), a.ty(), 1),
                            f ? a._12I(l) : a._24I && a._13I(l),
                            a._93I(),
                            a._92I(),
                            l.restore(),
                            a._32I = a._24I = a._96I = j,
                        m && (a.scrollToIndex(a.getRowIndex(m)),
                            delete a._23I),
                            a.tx(a.tx()),
                            a.ty(a.ty())
                    }
            }
            ,
            Uf._48o = function(a) {
                a._rootVisible = !0,
                    a._rootData = j,
                    a._35o = function() {
                        this._expandMap = {},
                            this._levelMap = {}
                    }
                    ,
                    a.validateModel = function() {
                        var a = this
                            , b = a._rootData;
                        a._rows.clear(),
                            a._levelMap = {},
                            a._rowMap = {},
                            a._currentLevel = 0,
                            b ? a._rootVisible ? a.isVisible(b) && a.buildData(b) : a.buildChildren(b) : a.buildChildren(),
                            delete a._currentLevel
                    }
                    ,
                    a.buildData = function(a) {
                        var b = this
                            , c = a._id
                            , d = b._rows;
                        b._rowMap[c] = d.size(),
                            d.add(a),
                            b._levelMap[c] = b._currentLevel,
                        b.isExpanded(a) && (b._currentLevel++,
                            b.buildChildren(a),
                            b._currentLevel--)
                    }
                    ,
                    a.buildChildren = function(a) {
                        var b = this
                            , c = a ? a._children : b._dataModel._roots
                            , d = b.getCurrentSortFunc();
                        d && b.isChildrenSortable(a) ? c.toList(b.isVisible, b).sort(d).each(b.buildData, b) : c.each(function(a) {
                            b.isVisible(a) && b.buildData(a)
                        })
                    }
                    ,
                    a.getLevel = function(a) {
                        return this._levelMap[a._id]
                    }
                    ,
                    a.getToggleIcon = function(a) {
                        var b = this
                            , c = b._loader
                            , d = b._collapseIcon;
                        return c && !c.isLoaded(a) ? d : a.hasChildren() ? b.isExpanded(a) ? b._expandIcon : d : j
                    }
                    ,
                    a.isCheckMode = function() {
                        return this._checkMode != j
                    }
                    ,
                    a.isChildrenSortable = function() {
                        return !0
                    }
                    ,
                    a.handleDataModelChange = function(a) {
                        var b = this;
                        a.kind === wa ? delete b._expandMap[a.data._id] : a.kind === xa && (b._expandMap = {}),
                            b.ivm()
                    }
                    ,
                    a.toggle = function(a) {
                        var b = this;
                        b.isExpanded(a) ? b.collapse(a) : b.expand(a)
                    }
                    ,
                    a.isExpanded = function(a) {
                        return 1 === this._expandMap[a._id]
                    }
                    ,
                    a.expand = function(a) {
                        var b = this
                            , c = b._loader;
                        b.isExpanded(a) || (c && !c.isLoaded(a) && c.load(a),
                            b._expandMap[a._id] = 1,
                            b.ivm(),
                            b.onExpanded(a))
                    }
                    ,
                    a.onExpanded = function() {}
                    ,
                    a.collapse = function(a) {
                        var b = this;
                        b.isExpanded(a) && (delete b._expandMap[a._id],
                            b.ivm(),
                            b.onCollapsed(a))
                    }
                    ,
                    a.onCollapsed = function() {}
                    ,
                    a.expandAll = function() {
                        var a = this;
                        a._dataModel.each(function(b) {
                            b.hasChildren() && (a._expandMap[b._id] = 1)
                        }),
                            a.ivm()
                    }
                    ,
                    a.collapseAll = function() {
                        this._expandMap = {},
                            this.ivm()
                    }
                    ,
                    a.makeVisible = function(a) {
                        if (a) {
                            var b = this;
                            if (!b._rootData || a.isDescendantOf(b._rootData)) {
                                for (var c = a._parent; c; )
                                    b.expand(c),
                                        c = c._parent;
                                b._23I = a,
                                    b.iv()
                            }
                        }
                    }
                    ,
                    a.checkData = function(a) {
                        var b, c = this, d = c._checkMode, e = c.sm(), f = e.co(a);
                        if (!e.sg() || !f) {
                            if (c._32o = 1,
                                d === Y)
                                f ? e.rs(a) : e.as(a);
                            else if (d === Bb)
                                b = new Rh(a),
                                    b.addAll(a._children);
                            else if ("descendant" === d)
                                b = new Rh,
                                    Nm(a, b);
                            else if ("all" === d && (b = new Rh,
                                    Nm(a, b),
                                    !f))
                                for (var g = a._parent; g; )
                                    b.add(g),
                                        g = g._parent;
                            b && (f ? e.rs(b) : e.as(b)),
                                delete c._32o
                        }
                    }
                    ,
                    a._97I = function(a, b, c, d, e, f, g) {
                        var h = this
                            , i = h._indent
                            , j = h._levelMap[b._id]
                            , k = h.getIconWidth(b)
                            , l = yg(h.getToggleIcon(b));
                        l ? (d += i * j,
                            zg(a, l, d + i / 2, e + g / 2, b, h),
                            d += i) : d += i * (j + 1),
                        h._checkMode && (zg(a, h.getCheckIcon(b), d + i / 2, e + g / 2, b, h),
                            d += i),
                            h.drawIcon(a, b, d, e, k, g),
                            h.drawLabel(a, b, d + k, e, g)
                    }
            }
            ,
            Uf._14Q = function(a) {
                a.getIcon = function(a) {
                    return a.getIcon()
                }
                    ,
                    a.getIconWidth = function(a) {
                        return this.getIcon(a) ? this._indent : 0
                    }
                    ,
                    a.drawIcon = function(a, b, c, d, e, f) {
                        if (e) {
                            var g = this
                                , h = g.getBodyColor(b)
                                , i = yg(g.getIcon(b), h);
                            i && (f -= g.isRowLineVisible() ? 1 : 0,
                                Ag(a, i, Pb, c, d, e, f, b, g, h),
                                bf(a, g.getBorderColor(b), c, d, e, f))
                        }
                    }
                    ,
                    a.drawLabel = function(a, b, c, d, e) {
                        var f = this;
                        Jg(a, f.getLabel(b), f.getLabelFont(b), f.getLabelColor(b), c, d, 0, e)
                    }
            }
            ,
            Uf._50o = function(a) {
                a._98I = function() {
                    var a = this
                        , b = a._39o = new Vh;
                    a._60I = new Rh,
                        b.mm(a._17o, a),
                        b.md(a._18o, a),
                        b.mh(a._19o, a)
                }
                    ,
                    a.setColumns = function(a) {
                        this._39o.clear(),
                            this.addColumns(a)
                    }
                    ,
                    a.addColumns = function(a) {
                        var b = this._39o;
                        a.forEach(function(a) {
                            if (!(a instanceof Um)) {
                                var c = Fg(a.className);
                                a = vg(c ? c : Um, a)
                            }
                            b.add(a)
                        })
                    }
                    ,
                    a.onColumnClicked = function() {}
                    ,
                    a.onCheckColumnClicked = function() {}
                    ,
                    a._3Q = function(a) {
                        for (var b, c = 0, d = this._60I, e = d.size(); e > c; c++)
                            if (b = d.get(c),
                                b.column === a)
                                return b;
                        return j
                    }
                    ,
                    a.getColumnAt = function(a) {
                        var b = this._4Q(a);
                        return b ? b.column : j
                    }
                    ,
                    a._4Q = function(a) {
                        for (var b = this, c = a.target ? b.lp(a).x : a.x, d = b._60I, e = 0; e < d.size(); e++) {
                            var f = d.get(e)
                                , g = f.startX;
                            if (c >= g && c < g + f.column.getWidth())
                                return f
                        }
                        return j
                    }
                    ,
                    a.getToolTip = function(a) {
                        var b = this
                            , c = b.getDataAt(a)
                            , d = b.getColumnAt(a);
                        return c && d ? d.getToolTip(c, b) : j
                    }
                    ,
                    a.adjustTranslateX = function(a) {
                        var b = this.getWidth() - this._91I;
                        return b > a && (a = b),
                            a > 0 ? 0 : r(a)
                    }
                    ,
                    a._99I = function() {
                        var a = this
                            , b = a._29I
                            , c = a._60I;
                        c.clear(),
                            a._91I = 0,
                            a._39o._roots.each(function(d) {
                                if (d.isVisible()) {
                                    var e = a._91I + d.getWidth();
                                    a._91I <= b.x + b.width && e >= b.x && c.add({
                                        column: d,
                                        startX: a._91I
                                    }),
                                        a._91I = e
                                }
                            })
                    }
                    ,
                    a.drawData = function(a, b, c) {
                        var d = this
                            , e = d._rowHeight
                            , f = e * c
                            , g = d.isSelected(b)
                            , h = d._29I
                            , i = h.x
                            , j = h.width;
                        d.drawRowBackground(a, b, g, i, f, j, e),
                            d._60I.each(function(h) {
                                var i = h.column
                                    , j = h.startX
                                    , k = i.getWidth();
                                k > 0 && !d.isEditing(b, i) && (a.save(),
                                    a.beginPath(),
                                    a.rect(j, f, k, e),
                                    a.clip(),
                                    d._87o(d.drawCell(a, b, g, i, j, f, k, e), c, j, f, k, e),
                                d._columnLineVisible && Xe(a, j + k - 1, f, 1, e, d._columnLineColor),
                                    a.restore())
                            }),
                        d._rowLineVisible && Xe(a, i, f + e - 1, j, 1, d._rowLineColor)
                    }
                    ,
                    a.drawCell = function(a, b, c, d, e, f, g, h) {
                        var i = this;
                        if (d.drawCell)
                            return d.drawCell(a, b, c, d, e, f, g, h, i);
                        var j = i.getValue(b, d);
                        Om(a, j, d, i.getLabelFont(b, d, j), i.getLabelColor(b, d, j), e, f, g, h, b, i)
                    }
                    ,
                    a.getColumnModel = function() {
                        return this._39o
                    }
                    ,
                    a._17o = function() {
                        this.redraw()
                    }
                    ,
                    a._18o = function(a) {
                        var b = this;
                        a.data === b._sortColumn && Jm[a.property] ? b.ivm() : (b._42o(),
                            b.redraw())
                    }
                    ,
                    a._19o = function() {
                        this.redraw()
                    }
                    ,
                    a.getCurrentSortFunc = function() {
                        var a = this
                            , b = a._sortColumn;
                        if (b && b.isSortable()) {
                            var c = b.getSortFunc()
                                , d = xb === b.getSortOrder() ? 1 : -1;
                            return c || (c = Dg),
                                function(e, f) {
                                    return c.call(a, a.getValue(e, b), a.getValue(f, b), e, f) * d
                                }
                        }
                        return a._sortFunc
                    }
                    ,
                    a.isCellEditable = function(a, b) {
                        return b.isEditable() && this.isEditable()
                    }
                    ,
                    a._37O = function(a, b) {
                        if (Lg(b))
                            for (var c = this, d = c.lp(b), e = c._60I, f = c._rowHeight, g = c._29I, h = g.x, i = g.y, j = g.width, k = g.height, l = 0; l < e.size(); l++) {
                                var m = e.get(l)
                                    , n = m.startX
                                    , o = m.column
                                    , p = o.getWidth();
                                if (o !== c._31o && o !== c._4o && c.isCellEditable(a, o) && d.x >= n && d.x < n + p) {
                                    var q = {
                                        x: n,
                                        y: c.getRowIndex(a) * f,
                                        width: p,
                                        height: f
                                    }
                                        , r = {
                                        x: q.x + c.tx(),
                                        y: q.y + c.ty(),
                                        width: q.width,
                                        height: q.height
                                    }
                                        , s = 0
                                        , t = 0;
                                    return q.x < h ? s = q.x - h : q.x + q.width > h + j && (s = q.x + q.width - h - j),
                                    s && (c.tx(c.tx() - s),
                                        r.x -= s),
                                        q.y < i ? t = q.y - i : q.y + f > i + k && (t = q.y + f - i - k),
                                    t && (c.ty(c.ty() - t),
                                        r.y -= t),
                                        void c.beginEditing({
                                            data: a,
                                            column: o,
                                            value: c.getValue(a, o),
                                            event: b,
                                            rect: q,
                                            editorRect: r,
                                            view: c
                                        })
                                }
                            }
                    }
            }
            ,
            Rm.BaseItemEditor = function(a, b, c, d) {
                this._data = a,
                    this._column = b,
                    this._master = c,
                    this._editInfo = d
            }
            ,
            Sm("BaseItemEditor", b, {
                ms_ac: ["data", "column", "master", "editInfo"],
                editBeginning: function() {},
                getView: function() {},
                getValue: function() {},
                setValue: function() {}
            });
        var Tm = k.Tab = function() {
                yd(Tm, this)
            }
        ;
        hh("Tab", Uh, {
            ms_ac: ["view", "closable", "disabled"],
            _icon: j,
            _closable: !1,
            _disabled: !1,
            setParent: Mc
        });
        var Um = k.Column = function() {
                yd(Um, this)
            }
        ;
        hh("Column", Uh, {
            _46o: 1,
            ms_ac: ["accessType", "valueType", _a, ub, vb, ya, "align", Wb, "sortOrder", tb, "sortable", "nullable", "emptiable", "slider", "colorPicker", "itemEditor"],
            _visible: !0,
            _width: 80,
            _sortOrder: xb,
            _sortFunc: j,
            _sortable: !0,
            setWidth: function(a) {
                16 > a && (a = 16);
                var b = this._width;
                this._width = a,
                    this.fp(ya, b, a)
            },
            getToolTip: function(a, b) {
                return this.formatValue(b.getValue(a, this))
            }
        });
        var Vm = k.Property = function() {
                yd(Vm, this)
            }
        ;
        hh("Property", Uh, {
            _46o: 1,
            ms_ac: ["accessType", "valueType", ub, vb, "categoryName", Wb, "align", "nullable", "emptiable", "slider", "itemEditor", "colorPicker"],
            _categoryName: j,
            getToolTip: function(a, b, c) {
                var d = this;
                return b ? d.formatValue(c.getValue(a, d)) : c.getPropertyName(d)
            }
        }),
            Rm.AccordionView = function() {
                var a = this;
                a._20o = {},
                    a._21o = new Rh,
                    a._10o = j,
                    a._9o = j,
                    a._11o = j,
                    a._view = Rd(),
                    a.iv()
            }
            ,
            Sm("AccordionView", b, {
                ms_v: 1,
                ms_fire: 1,
                ms_ac: [qb, rb, "titleHeight", Qa, Pa, "titleBackground", "selectWidth", eb, "orientation", "separatorColor"],
                _expandIcon: m.accordionViewExpandIcon,
                _collapseIcon: m.accordionViewCollapseIcon,
                _titleHeight: kg,
                _labelColor: m.accordionViewLabelColor,
                _labelFont: m.accordionViewLabelFont,
                _titleBackground: m.accordionViewTitleBackground,
                _selectBackground: m.accordionViewSelectBackground,
                _selectWidth: m.accordionViewSelectWidth,
                _orientation: "v",
                _separatorColor: m.accordionViewSeparatorColor,
                onPropertyChanged: function() {
                    this.iv()
                },
                getView: function() {
                    return this._view
                },
                getTitles: function() {
                    return this._21o
                },
                getCurrentTitle: function() {
                    return this._10o
                },
                add: function(a, b, c, d) {
                    var e = this
                        , f = Rd();
                    if (e._20o[a])
                        throw a + " already exists";
                    f.onmousedown = wg,
                        f.style.cursor = _b,
                        f.addEventListener(X ? fc : bc, function(a) {
                            wg(a)
                        }, !1),
                        f.addEventListener(X ? hc : dc, function(b) {
                            wg(b),
                            Lg(b) && (e._10o === a ? e.collapse() : e.expand(a))
                        }, !1),
                        Wd(e._view, f),
                        e._20o[a] = {
                            content: b,
                            div: f,
                            canvas: Sd(f),
                            icon: d
                        },
                        e._21o.add(a),
                    c && e.expand(a),
                        e.iv()
                },
                remove: function(a) {
                    var b = this
                        , c = b._20o[a];
                    c && (bh(c.div),
                        delete b._20o[a],
                        b._21o.remove(a),
                        b.iv())
                },
                clear: function() {
                    var a = this;
                    a._20o = {},
                        a._21o.clear(),
                        a.iv()
                },
                isExpanded: function(a) {
                    return this._10o === a
                },
                expand: function(a) {
                    var b = this;
                    b._20o[a] && b._10o !== a && (b._10o = a,
                        b.onExpanded(a),
                        b.iv())
                },
                onExpanded: function() {},
                collapse: function() {
                    var a = this;
                    a._10o && (a.onCollapsed(a._10o),
                        delete a._10o,
                        a.iv())
                },
                onCollapsed: function() {},
                initCanvas: function(a, b, c) {
                    Vd(a, b, c);
                    var d = be(a);
                    return ce(d, 0, 0, 1),
                        d.clearRect(0, 0, b, c),
                        d
                },
                drawTitle: function(a, b, c, d, e) {
                    var f = this
                        , g = yg(e.icon)
                        , h = f.isExpanded(b)
                        , i = f._titleHeight
                        , j = f._titleBackground
                        , k = f._selectWidth
                        , l = f._separatorColor
                        , m = yg(h ? f._expandIcon : f._collapseIcon)
                        , n = k + 4;
                    Xe(a, 0, 0, c, d, j),
                    h && k && Xe(a, 0, 0, k, d, f._selectBackground),
                    (h || f._21o.get(f._21o.size() - 1) !== b) && Xe(a, 0, d - 1, c, 1, l ? l : Hg(j)),
                    g && (zg(a, g, n + Nh(g) / 2, i / 2),
                        n += Nh(g) + 2),
                        Jg(a, b, f.getLabelFont(b), f.getLabelColor(b), n, 0, 0, i),
                    m && zg(a, m, c - Nh(m) / 2 - 4, i / 2)
                },
                validateImpl: function() {
                    var a = this
                        , b = a._view
                        , c = 0
                        , d = 0
                        , e = a.getWidth()
                        , f = a.getHeight()
                        , g = a._titleHeight
                        , h = a._21o.size() * g
                        , i = a._11o
                        , j = a._9o;
                    delete a._11o,
                        delete a._9o,
                        a._21o.each(function(b) {
                            var i, j, k = a._20o[b], l = k.content, m = a._10o === b;
                            ad(a) ? (he(k.div, c, 0, g, f),
                                i = a.initCanvas(k.canvas, g, f),
                                de(i, 0, f),
                                ee(i, -F),
                                a.drawTitle(i, b, f, g, k),
                                i.restore(),
                                m ? (j = v(0, e - h),
                                l && (a._11o = l,
                                    a._9o = ge(l),
                                    he(l, c + g, 0, j, f)),
                                    c += g + j) : c += g) : (he(k.div, 0, d, e, g),
                                i = a.initCanvas(k.canvas, e, g),
                                a.drawTitle(i, b, e, g, k),
                                i.restore(),
                                m ? (j = v(0, f - h),
                                l && (a._11o = l,
                                    a._9o = ge(l),
                                    he(l, 0, d + g, e, j)),
                                    d += g + j) : d += g)
                        });
                    var k = a._9o;
                    i && i !== a._11o && i.endEditing && i.endEditing(),
                    k && k !== j && Wd(b, k),
                    j && j !== k && bh(j)
                }
            }),
            Rm.SplitView = function(a, b, c, d) {
                var e = this
                    , f = e._dividerDiv = Rd()
                    , g = e._60O = Sd()
                    , h = e._61O = Sd()
                    , i = g.style
                    , k = h.style;
                e._view = Rd(1),
                    Wd(e._view, f),
                    i.msTouchAction = ac,
                    i.pointerEvents = ac,
                    i.cursor = _b,
                    k.msTouchAction = ac,
                    k.pointerEvents = ac,
                    k.cursor = _b,
                a && e.setLeftView(a),
                b && e.setRightView(b),
                c && e.setOrientation(c),
                d != j && e.setPosition(d),
                    e.setStatus(va),
                    new Wm(e)
            }
            ,
            Sm("SplitView", b, {
                ms_v: 1,
                ms_fire: 1,
                ms_ac: ["dividerSize", "dividerBackground", "toggleIcon", "togglable", "dragOpacity", "orientation", "draggable", "status"],
                _position: .5,
                _togglable: !0,
                _orientation: "h",
                _draggable: !0,
                _dividerSize: m.splitViewDividerSize,
                _dividerBackground: m.splitViewDividerBackground,
                _dragOpacity: m.splitViewDragOpacity,
                _toggleIcon: m.splitViewToggleIcon,
                onPropertyChanged: function() {
                    this.iv()
                },
                getDividerDiv: function() {
                    return this._dividerDiv
                },
                getPosition: function() {
                    return this._position
                },
                setPosition: function(a, b) {
                    var c = this
                        , d = c._position;
                    isNaN(a) || (b || (c._82O = 0 > a ? -1 : a > 1 ? 1 : 0),
                        c._position = a,
                        c.fp(zb, d, a))
                },
                getLeftView: function() {
                    return this._leftView
                },
                setLeftView: function(a) {
                    var b = this
                        , c = b._leftView
                        , d = b._view;
                    if (b._leftView !== a) {
                        if (c && c !== b._rightView) {
                            var e = ge(c);
                            e.parentNode === d && bh(e)
                        }
                        if (b._leftView = a,
                                a) {
                            var f = ge(a);
                            f.parentNode !== d && d.insertBefore(f, b._dividerDiv)
                        }
                        b.fp("leftView", c, a)
                    }
                },
                getRightView: function() {
                    return this._rightView
                },
                setRightView: function(a) {
                    var b = this
                        , c = b._rightView
                        , d = b._view;
                    if (b._rightView !== a) {
                        if (c && c !== b._leftView) {
                            var e = ge(c);
                            e.parentNode === d && bh(e)
                        }
                        if (b._rightView = a,
                                a) {
                            var f = ge(a);
                            f.parentNode !== d && d.insertBefore(f, b._dividerDiv)
                        }
                        b.fp("rightView", c, a)
                    }
                },
                validateImpl: function() {
                    var a = this
                        , b = a._draggable
                        , c = a._position
                        , d = a.getWidth()
                        , e = a.getHeight()
                        , f = a._dividerSize
                        , g = a._dividerBackground
                        , h = X ? 18 : 8
                        , i = a._dividerDiv
                        , j = a._82O
                        , k = a._60O
                        , l = a._61O
                        , m = a._toggleIcon
                        , n = a._status
                        , o = i.style
                        , p = null
                        , q = X ? 20 : 4
                        , s = m.comps[0];
                    f >= h || 0 === f ? a._coverDiv && (bh(a._coverDiv),
                            delete a._coverDiv) : a._coverDiv || (a._coverDiv = Rd(),
                        T && (a._coverDiv.style.background = Qb),
                            Wd(i, a._coverDiv)),
                        a._togglable ? k.parentNode || (Wd(i, k),
                                Wd(i, l)) : (bh(k),
                            bh(l));
                    var t = a._coverDiv
                        , u = a._leftView
                        , w = a._rightView;
                    if (ad(a)) {
                        if (f > d && (f = d),
                            n === va)
                            if (1 === j)
                                var x = c
                                    , y = v(0, d - f - x);
                            else
                                -1 === j ? (y = -c,
                                    x = v(0, d - f - y)) : (x = r((d - f) * c),
                                    y = v(0, d - f - x));
                        else
                            "cl" === n ? (x = 0,
                                y = v(0, d - f)) : "cr" === n && (y = 0,
                                    x = v(0, d - f));
                        u && he(u, 0, 0, x, e),
                        w && he(w, x + f, 0, y, e),
                            he(i, x, 0, f, e),
                            a._22o = x,
                        t && (he(t, f / 2 - h / 2, 0, h, e),
                            t.style.cursor = b ? Zb : ""),
                            i.style.cursor = b ? Zb : "";
                        var z = i.clientHeight / 2
                            , A = i.clientWidth;
                        Vd(k, A, A),
                            he(k, 0, z - A - q, A, A),
                            p = be(k),
                            ce(p, 0, 0, 1),
                            s.rotation = -F,
                            Qh(p, m, 0, 0, A, A),
                            p.restore(),
                            Vd(l, A, A),
                            he(l, 0, z + q, A, A),
                            p = be(l),
                            ce(p, 0, 0, 1),
                            s.rotation = F,
                            Qh(p, m, 0, 0, A, A),
                            p.restore()
                    } else {
                        if (f > e && (f = e),
                            n === va)
                            if (1 === j)
                                var B = c
                                    , C = v(0, e - f - B);
                            else
                                -1 === j ? (C = -c,
                                    B = v(0, e - f - C)) : (B = r((e - f) * c),
                                    C = v(0, e - f - B));
                        else
                            "cl" === n ? (B = 0,
                                C = v(0, e - f)) : "cr" === n && (C = 0,
                                    B = v(0, e - f));
                        u && he(u, 0, 0, d, B),
                        w && he(w, 0, B + f, d, C),
                            he(i, 0, B, d, f),
                            a._22o = B,
                        t && (he(t, 0, f / 2 - h / 2, d, h),
                            t.style.cursor = b ? $b : ""),
                            o.cursor = b ? $b : "";
                        var E = i.clientWidth / 2
                            , A = i.clientHeight;
                        Vd(k, A, A),
                            he(k, E - A - q, 0, A, A),
                            p = be(k),
                            ce(p, 0, 0, 1),
                            s.rotation = 0,
                            Qh(p, m, 0, 0, A, A),
                            p.restore(),
                            Vd(l, A, A),
                            he(l, E + q, 0, A, A),
                            p = be(l),
                            ce(p, 0, 0, 1),
                            s.rotation = D,
                            Qh(p, m, 0, 0, A, A),
                            p.restore()
                    }
                    o.background = g
                }
            });
        var Wm = function(a) {
                this.sv = a,
                    this.addListeners()
            }
        ;
        gh(Wm, b, {
            ms_listener: 1,
            getView: function() {
                return this.sv.getView()
            },
            handle_touchstart: function(a) {
                var b = this
                    , c = b.sv
                    , d = c._dividerDiv
                    , e = c._60O
                    , f = c._61O
                    , g = c._status
                    , h = a.target;
                if (h === e)
                    g === va ? c.setStatus("cl") : "cr" === g && c.setStatus(va);
                else if (h === f)
                    g === va ? c.setStatus("cr") : "cl" === g && c.setStatus(va);
                else if (pe(a) && (h === d || h === c._coverDiv) && (wg(a),
                        c.isDraggable())) {
                    b.resizeDiv = Rd();
                    var i = b.resizeDiv.style
                        , j = d.style
                        , k = c.getLeftView()
                        , l = c.getRightView();
                    b._maskViews = [],
                        [k, l].forEach(function(a) {
                            a = a.getView ? a.getView() : a;
                            var d = Rd()
                                , e = d.style;
                            e.left = a.style.left,
                                e.top = a.style.top,
                                e.width = a.offsetWidth + "px",
                                e.height = a.offsetHeight + "px",
                                c.getView().appendChild(d),
                                b._maskViews.push(d)
                        }),
                        i.left = j.left,
                        i.top = j.top,
                        i.width = j.width,
                        i.height = j.height,
                        i.opacity = c.getDragOpacity(),
                        i.background = c.getDividerBackground(),
                        b._85o = b._86o = ad(c) ? Qg(a).x : Qg(a).y,
                        Wd(b.getView(), b.resizeDiv),
                        b._clientPoint = Qg(a),
                        ah(b, a)
                }
            },
            handleWindowTouchMove: function(a) {
                if (pe(a)) {
                    var b = this
                        , c = b.sv
                        , d = c._dividerSize
                        , e = b.resizeDiv.style
                        , f = c.getWidth()
                        , g = c.getHeight()
                        , h = c._22o - b._86o;
                    ad(c) ? (b._85o = Qg(a).x,
                        h += b._85o,
                    h > f - d && (h = f - d),
                    0 > h && (h = 0),
                        e.left = h + ma) : (b._85o = Qg(a).y,
                        h += b._85o,
                    h > g - d && (h = g - d),
                    0 > h && (h = 0),
                        e.top = h + ma)
                }
            },
            handleWindowTouchEnd: function(a) {
                var b = this
                    , c = b.sv
                    , d = c._22o - b._86o + b._85o
                    , e = c._dividerSize
                    , f = ad(c) ? c.getWidth() : c.getHeight()
                    , g = c._82O
                    , h = Sg(b._clientPoint, Qg(a));
                h > 1 && (c.setStatus(va),
                0 > d && (d = 0),
                d > f - e && (d = f - e),
                f !== e && (1 === g ? c.setPosition(d, 1) : -1 === g ? c.setPosition(d - f + e, 1) : c.setPosition(d / (f - e), 1))),
                b._maskViews && b._maskViews.forEach(function(a) {
                    bh(a)
                }),
                    bh(b.resizeDiv),
                    b.resizeDiv = b._85o = b._clientPoint = j
            },
            handle_mousedown: function(a) {
                Lg(a) && this.handle_touchstart(a)
            },
            handleWindowMouseMove: function(a) {
                this.handleWindowTouchMove(a)
            },
            handleWindowMouseUp: function(a) {
                this.handleWindowTouchEnd(a)
            }
        }),
            Rm.TabView = function() {
                var a = this
                    , b = a._view = Rd(1)
                    , c = a._91O = Rd(1)
                    , d = a._tabModel = new Vh
                    , e = d.sm()
                    , f = a.invalidate;
                a._7o = new Rh,
                    a._canvas = Sd(c),
                    Wd(b, c),
                    Wd(b, a._92O = Rd(1)),
                    e.setSelectionMode(Z),
                    e.ms(f, a),
                    d.mm(f, a),
                    d.md(f, a),
                    d.mh(f, a),
                    new Xm(a),
                    a.iv()
            }
            ,
            Sm("TabView", b, {
                ms_v: 1,
                ms_fire: 1,
                ms_tx: 1,
                ms_ty: 1,
                ms_lp: 1,
                ms_ac: ["movable", "tabGap", "tabHeight", "tabPosition", Qa, Pa, "tabBackground", "selectWidth", eb, "moveBackground", "insertColor"],
                _tabPosition: da,
                _tabHeight: kg,
                _tabGap: m.tabViewTabGap,
                _labelColor: m.tabViewLabelColor,
                _labelFont: m.tabViewLabelFont,
                _tabBackground: m.tabViewTabBackground,
                _selectWidth: m.tabViewSelectWidth,
                _selectBackground: m.tabViewSelectBackground,
                _moveBackground: m.tabViewMoveBackground,
                _insertColor: m.tabViewInsertColor,
                _movable: !0,
                getContentDiv: function() {
                    return this._92O
                },
                getTitleDiv: function() {
                    return this._91O
                },
                getTabModel: function() {
                    return this._tabModel
                },
                add: function(a, b, c) {
                    var d = new Tm
                        , e = this._tabModel;
                    return d.setName(a),
                        d.setView(b),
                        e.add(d),
                    c && e.sm().ss(d),
                        d
                },
                getLabel: function(a) {
                    return a.toLabel()
                },
                onPropertyChanged: function() {
                    this.iv()
                },
                _7Q: function(a) {
                    this._23o = a,
                        this.iv()
                },
                get: function(a) {
                    var b = this
                        , c = b._tabModel;
                    if (hd(a))
                        return c._roots.get(a);
                    if (gd(a)) {
                        var d;
                        return c.each(function(c) {
                            a === b.getLabel(c) && (d = c)
                        }),
                            d
                    }
                    return a instanceof Tm ? a : j
                },
                select: function(a) {
                    this._tabModel.sm().ss(this.get(a))
                },
                remove: function(a) {
                    var b = this;
                    if (a = b.get(a)) {
                        var c = b._tabModel
                            , d = c._roots.indexOf(a);
                        b._tabModel.remove(a),
                            b._12Q(--d)
                    }
                },
                getCurrentTab: function() {
                    return this._8o
                },
                hideTabView: function(a, b) {
                    b.parentNode === this._92O && (rd(b) ? (b.style.display = la,
                        b._tab_ = a) : bh(b),
                        ag())
                },
                showTabView: function(a, b) {
                    rd(b) && (b.style.display = "block",
                        b._tab_ = a),
                    b.parentNode !== this._92O && (Wd(this._92O, b),
                        ag())
                },
                _24o: function() {
                    var a, b = this, c = b._8o, d = b._9o, e = b._tabModel.sm().ld();
                    e && (a = ge(e.getView())),
                    a !== d && (d && (c.getView().endEditing && c.getView().endEditing(),
                        b.hideTabView(c, d)),
                    a && b.showTabView(e, a)),
                        b._8o = e,
                        b._9o = a,
                    c !== e && b.onTabChanged(c, e)
                },
                onTabChanged: function() {},
                onTabClosed: function(a, b) {
                    this._12Q(--b)
                },
                _12Q: function(a) {
                    var b = this
                        , c = b._tabModel
                        , d = c.size();
                    if (d && !c.sm().ld()) {
                        a == j && (a = 0),
                        a >= d && (a = d - 1),
                        0 > a && (a = 0);
                        for (var e = a; e >= 0; e--) {
                            var f = b.get(e);
                            if (!f.isDisabled())
                                return b.select(f),
                                    f
                        }
                        for (e = a + 1; d > e; e++)
                            if (f = b.get(e),
                                    !f.isDisabled())
                                return b.select(f),
                                    f
                    }
                },
                _9Q: function(a) {
                    var b = 4
                        , c = yg(a.getIcon());
                    c && (b += Nh(c, a) + 4);
                    var d = this.getLabel(a);
                    return d && (b += Kg(this.getLabelFont(a), d).width + 4),
                    a.isClosable() && (b += 10),
                        b
                },
                _10Q: function(a, b, c, d, e, f, g) {
                    var h, i = this, j = i._tabPosition, k = c + 4, l = i._selectWidth, m = yg(b.getIcon()), n = b.isDisabled(), o = i.getLabelColor(b), p = i.getLabelFont(b), q = i.getLabel(b), r = i._selectBackground, s = j === ba + "-vertical", t = j === ca + "-vertical";
                    (s || t) && (k = d + 4),
                    n && (a.globalAlpha = Vf),
                        Xe(a, c, d, e, f, g),
                    b === i._8o && l && (j === da ? Xe(a, c, d + f - l, e, l, r) : j === ba ? Xe(a, c + e - l, d, l, f, r) : j === ca ? Xe(a, c, d, l, f, r) : s ? Xe(a, c + e - l, d, l, f, r) : t ? Xe(a, c, d, l, f, r) : Xe(a, c, d, e, l, r));
                    var u = e / 2;
                    if (s && (de(a, u, d + f / 2),
                            ee(a, D),
                            de(a, -u, -d - f / 2)),
                            m) {
                        var v = Oh(m, b)
                            , w = Nh(m, b);
                        if (s || t) {
                            var x = c + e / 2
                                , y = k + v / 2;
                            de(a, x, y),
                                ee(a, F),
                                de(a, -x, -y),
                                zg(a, m, c + e / 2, k + v / 2, b, i),
                                de(a, x, y),
                                ee(a, -F),
                                de(a, -x, -y),
                                k += v + 4
                        } else
                            zg(a, m, k + w / 2, d + f / 2, b, i),
                                k += w + 4
                    }
                    return s || t ? (de(a, e / 2, k + e / 2),
                        ee(a, F),
                        de(a, -e / 2, -k - e / 2),
                        Jg(a, q, p, o, c, k, f, e),
                        de(a, e / 2, k + e / 2),
                        ee(a, -F),
                        de(a, -e / 2, -k - e / 2)) : Jg(a, q, p, o, k, d, e, f),
                    s && (de(a, u, d + f / 2),
                        ee(a, -D),
                        de(a, -u, -d - f / 2)),
                    b.isClosable() && (a.strokeStyle = o,
                        a.lineWidth = 1,
                        a.beginPath(),
                        t ? (a.moveTo(c + e - 10, d + f - 4),
                            a.lineTo(c + e - 4, d + f - 10),
                            a.moveTo(c + e - 4, d + f - 4),
                            a.lineTo(c + e - 10, d + f - 10),
                            a.stroke(),
                            h = {
                                x: c + e - 12,
                                y: d + f - 12,
                                width: 12,
                                height: 12
                            }) : (a.moveTo(c + e - 10, d + 4),
                            a.lineTo(c + e - 4, d + 10),
                            a.moveTo(c + e - 4, d + 4),
                            a.lineTo(c + e - 10, d + 10),
                            a.stroke(),
                            h = {
                                x: c + e - 12,
                                y: d,
                                width: 12,
                                height: 12
                            })),
                    n && (a.globalAlpha = 1),
                        h
                },
                validateImpl: function() {
                    var a = this;
                    a._24o();
                    var b, c = a._canvas, d = a._tabPosition, e = a._91O, f = a._92O, g = a._tabModel, h = a.getWidth(), i = a.getHeight(), j = a._tabHeight, k = a._7o, l = a._tabGap, m = d === da, n = d === ba, o = d === ea, p = d === ca, q = d === ba + "-vertical", r = d === ca + "-vertical", s = a._23o, t = 0;
                    if ((n || p) && g._roots.each(function(b) {
                            t = v(a._9Q(b), t)
                        }),
                            m ? (he(e, 0, 0, h, j),
                                b = {
                                    x: 0,
                                    y: j,
                                    width: h,
                                    height: v(0, i - j)
                                }) : n ? (he(e, 0, 0, t, i),
                                b = {
                                    x: t,
                                    y: 0,
                                    width: v(0, h - t),
                                    height: i
                                }) : p ? (he(e, h - t, 0, t, i),
                                b = {
                                    x: 0,
                                    y: 0,
                                    width: v(0, h - t),
                                    height: i
                                }) : q ? (he(e, 0, 0, j, i),
                                b = {
                                    x: j,
                                    y: 0,
                                    width: v(0, h - j),
                                    height: i
                                }) : r ? (he(e, h - j, 0, j, i),
                                b = {
                                    x: 0,
                                    y: 0,
                                    width: v(0, h - j),
                                    height: i
                                }) : (he(e, 0, i - j, h, j),
                                b = {
                                    x: 0,
                                    y: 0,
                                    width: h,
                                    height: v(0, i - j)
                                }),
                            he(f, b),
                        q || r) {
                        a._9o && (b.x = 0,
                            he(a._8o.getView(), b)),
                            Vd(c, j, i);
                        var u = be(c)
                            , w = 0;
                        if (ce(u, 0, a.ty(), 1),
                                u.clearRect(0, 0, j, i),
                                k.clear(),
                                g._roots.each(function(b) {
                                    var c, d = a._9Q(b);
                                    s && s.tab === b || (c = a._10Q(u, b, 0, w, j, d, a._tabBackground),
                                    c && r && (c.x = h - 12)),
                                        k.add({
                                            _75o: c,
                                            tab: b,
                                            startY: w,
                                            endY: w + d,
                                            height: d
                                        }),
                                        w += d + l
                                }),
                                a._23Q = v(0, w - l),
                                s) {
                            var x = s.position;
                            a._10Q(u, s.tab, 0, s.startY, j, s.height, a._moveBackground),
                                Xe(u, 0, x, j, 1, a._insertColor)
                        }
                        u.restore(),
                            a.ty(a.ty())
                    } else if (n || p) {
                        a._9o && (b.x = 0,
                            he(a._8o.getView(), b)),
                            Vd(c, t, i);
                        var u = be(c)
                            , w = 0;
                        if (ce(u, 0, a.ty(), 1),
                                u.clearRect(0, 0, t, i),
                                k.clear(),
                                g._roots.each(function(b) {
                                    var c;
                                    s && s.tab === b || (c = a._10Q(u, b, 0, w, t, j, a._tabBackground),
                                    c && p && (c.x = h - 12)),
                                        k.add({
                                            _75o: c,
                                            tab: b,
                                            startY: w,
                                            endY: w + j,
                                            height: j
                                        }),
                                        w += j + l
                                }),
                                a._23Q = v(0, w - l),
                                s) {
                            var x = s.position;
                            a._10Q(u, s.tab, 0, s.startY, t, s.height, a._moveBackground),
                                Xe(u, 0, x, t, 1, a._insertColor)
                        }
                        u.restore(),
                            a.ty(a.ty())
                    } else {
                        a._9o && (b.y = 0,
                            he(a._8o.getView(), b)),
                            Vd(c, h, j);
                        var u = be(c)
                            , y = 0;
                        if (ce(u, a.tx(), 0, 1),
                                u.clearRect(0, 0, h, j),
                                k.clear(),
                                g._roots.each(function(b) {
                                    var c, d = a._9Q(b);
                                    s && s.tab === b || (c = a._10Q(u, b, y, 0, d, j, a._tabBackground),
                                    c && o && (c.y = i - j)),
                                        k.add({
                                            _75o: c,
                                            tab: b,
                                            startX: y,
                                            endX: y + d,
                                            width: d
                                        }),
                                        y += d + l
                                }),
                                a._64I = v(0, y - l),
                                s) {
                            var x = s.position;
                            a._10Q(u, s.tab, s.startX, 0, s.width, j, a._moveBackground),
                                Id(u, a._insertColor, x, 0, j)
                        }
                        u.restore(),
                            a.tx(a.tx())
                    }
                    for (var z = [], A = f.children, B = 0; B < A.length; B++) {
                        var C = A[B]
                            , D = C._tab_;
                        D && !g.contains(D) && z.push(C)
                    }
                    z.forEach(function(a) {
                        f.removeChild(a)
                    })
                }
            });
        var Xm = function(a) {
                this.tv = a,
                    this.addListeners()
            }
        ;
        gh(Xm, b, {
            ms_listener: 1,
            getView: function() {
                return this.tv._91O
            },
            handle_mousewheel: function(a) {
                this.handleScroll(a, 10 * (a.wheelDelta / 40))
            },
            handle_DOMMouseScroll: function(a) {
                this.handleScroll(a, 10 * -a.detail)
            },
            handleScroll: function(a, b) {
                wg(a);
                var c = this.tv
                    , d = c._tabPosition;
                !c._40o() || d !== da && d !== ea || c.tx(this.tv.tx() + b),
                !c._41o() || d !== ba && d !== ca && d !== ba + "-vertical" && d !== ca + "-vertical" || c.ty(this.tv.ty() + b)
            },
            _8Q: function(a) {
                var b, c, d = this.tv, e = d._tabPosition, f = d._7o;
                if (e === da || e === ea) {
                    var g = d.lp(a).x;
                    for (b = 0; b < f.size(); b++)
                        if (c = f.get(b),
                            c.startX <= g && g <= c.endX)
                            return c
                } else if (e === ba || e === ca || e === ba + "-vertical" || e === ca + "-vertical") {
                    var h = d.lp(a).y;
                    for (b = 0; b < f.size(); b++)
                        if (c = f.get(b),
                            c.startY <= h && h <= c.endY)
                            return c
                }
                return j
            },
            isClickable: function(a) {
                var b = this.tv
                    , c = b._tabPosition
                    , d = this._73o = this._8Q(a);
                return (!b._40o() || c !== da && c !== ea) && (!b._41o() || c !== ba && c !== ca && c !== ba + "-vertical" && c !== ca + "-vertical") ? d && (!d.tab.isDisabled() || b.isMovable()) : !0
            },
            handle_mousemove: function(a) {
                var b = this;
                ke ? b._74o = b._8Q(a) : b.getView().style.cursor = b.isClickable(a) ? _b : ""
            },
            handle_mousedown: function(a) {
                this.handle_mousemove(a),
                    this.handle_touchstart(a)
            },
            handle_touchstart: function(a) {
                var b = this
                    , c = b.tv
                    , d = c._tabPosition;
                wg(a),
                b.isClickable(a) && (d === da || d === ea ? (b.x = Qg(a).x,
                    b.lp = c.lp(a),
                    b.tx = c.tx()) : (b.y = Qg(a).y,
                    b.lp = c.lp(a),
                    b.ty = c.ty()),
                    ah(b, a))
            },
            handleWindowMouseMove: function(a) {
                this.handleWindowTouchMove(a)
            },
            handleWindowTouchMove: function(a) {
                var b, c = this, d = c.tv, e = d._tabPosition, f = c._73o;
                if (e === da || e === ea) {
                    if (b = Qg(a).x - c.x,
                        !c._25o && !c.moving && x(b) > 2 && (d._40o() && !Pg(a) ? c._25o = 1 : f && d.isMovable() && (c.moving = 1)),
                            c._25o)
                        d.tx(c.tx + b);
                    else if (c.moving) {
                        var g = c.lp.x + b
                            , h = d._tabGap / 2;
                        d._7o.each(function(a) {
                            var c = a.endX
                                , e = g - a.startX < c - g;
                            g >= a.startX && c >= g && d._7Q({
                                tab: f.tab,
                                startX: f.startX + b,
                                width: f.width,
                                front: e,
                                insertTab: a.tab,
                                position: e ? v(0, a.startX - h) : w(d._64I, c + h)
                            })
                        })
                    }
                } else if (b = Qg(a).y - c.y,
                    !c._25o && !c.moving && x(b) > 2 && (d._41o() && !Pg(a) ? c._25o = 1 : f && d.isMovable() && (c.moving = 1)),
                        c._25o)
                    d.ty(c.ty + b);
                else if (c.moving) {
                    var i = c.lp.y + b
                        , h = d._tabGap / 2;
                    d._7o.each(function(a) {
                        var c = a.endY
                            , e = i - a.startY < c - i;
                        i >= a.startY && c >= i && d._7Q({
                            tab: f.tab,
                            startY: f.startY + b,
                            height: f.height,
                            front: e,
                            insertTab: a.tab,
                            position: e ? v(0, a.startY - h) : w(d._23Q, c + h)
                        })
                    })
                }
            },
            handleWindowMouseUp: function(a) {
                this.handleWindowTouchEnd(a)
            },
            handleWindowTouchEnd: function() {
                var a = this
                    , b = a.tv
                    , c = b._tabPosition
                    , d = b.getTabModel()
                    , e = d._roots
                    , f = a._73o;
                if (a.moving) {
                    var g = b._23o;
                    if (g && g.insertTab !== g.tab) {
                        var h = g.tab
                            , i = e.remove(h)
                            , k = e.indexOf(g.insertTab);
                        k >= 0 && (g.front || k++,
                        k <= e.size() && (e.add(h, k),
                            d._38I(h, i, k)))
                    }
                    b._7Q(j),
                        delete a.moving
                } else if (!a._25o && f) {
                    h = f.tab;
                    var l = a._74o;
                    if (!l || l.tab === h)
                        if (!h.isDisabled() && Vg(f._75o, a.lp)) {
                            var m = e.indexOf(h);
                            d.remove(h),
                                b.onTabClosed(h, m)
                        } else
                            h.isDisabled() || b._8o === h || d.sm().ss(h)
                }
                a._25o = a._73o = a._74o = c === da || c === ea ? a.x = a.lp = a.tx = j : a.y = a.lp = a.ty = j
            }
        }),
            Rm.PropertyView = function(a) {
                var b = this;
                b._view = Rd(1),
                    b._canvas = Sd(b._view),
                    Wd(b._view, b._79O = Rd()),
                    b._rows = new Rh,
                    b._28o = new Rh,
                    b._26o = {},
                    b._26Q = {};
                var c = b._propertyModel = new Vh
                    , d = b.ivm;
                c.mm(d, b),
                    c.md(d, b),
                    c.mh(d, b),
                    b.dm(a ? a : new Vh),
                    new Ym(b)
            }
            ,
            Sm("PropertyView", b, {
                ms_ac: [Qa, Ra, Pa, ub, vb, "categorizable", jb, tb, pb, qb, rb, hb, ib, gb, "selectRowIndex", eb, "background", kb, ob, mb, nb, lb],
                ms_v: 1,
                ms_dm: 1,
                ms_fire: 1,
                ms_sm: 1,
                _49o: 1,
                ms_txy: 1,
                ms_lp: 1,
                ms_vs: 1,
                _45o: 1,
                _47o: 1,
                ms_tip: 1,
                _29I: Pc,
                _59I: 0,
                _9I: 0,
                _selectRowIndex: -1,
                _editable: !0,
                _batchEditable: !0,
                _categorizable: !0,
                _indent: hg,
                _background: m.propertyViewBackground,
                _expandIcon: m.propertyViewExpandIcon,
                _collapseIcon: m.propertyViewCollapseIcon,
                _scrollBarColor: lg,
                _scrollBarSize: mg,
                _autoHideScrollBar: Zf,
                _selectBackground: m.propertyViewSelectBackground,
                _rowHeight: ig,
                _rowLineVisible: m.propertyViewRowLineVisible,
                _rowLineColor: m.propertyViewRowLineColor,
                _10I: .5,
                _columnLineVisible: m.propertyViewColumnLineVisible,
                _columnLineColor: m.propertyViewColumnLineColor,
                _labelColor: m.propertyViewLabelColor,
                _labelSelectColor: m.propertyViewLabelSelectColor,
                _labelFont: m.propertyViewLabelFont,
                getRows: function() {
                    return this._rows
                },
                getColumnPosition: function() {
                    return this._10I
                },
                setColumnPosition: function(a) {
                    0 > a && (a = 0),
                    a > 1 && (a = 1);
                    var b = this
                        , c = b._10I;
                    b._10I = a,
                        b.fp("columnPosition", c, a)
                },
                getPropertyName: function(a) {
                    return a.toLabel()
                },
                getLabelFont: function() {
                    return this._labelFont
                },
                getLabelColor: function(a, b, c) {
                    return c === this._selectRowIndex ? this._labelSelectColor : this._labelColor
                },
                getPropertyFont: function() {
                    return this._labelFont
                },
                getPropertyColor: function(a, b) {
                    return b === this._selectRowIndex ? this._labelSelectColor : a.getColor() || this._labelColor
                },
                getCategoryFont: function() {
                    return this._labelFont
                },
                getCategoryColor: function() {
                    return this._labelColor
                },
                adjustTranslateX: function() {
                    return 0
                },
                adjustTranslateY: function(a) {
                    var b = this.getHeight() - this._59I;
                    return b > a && (a = b),
                        a > 0 ? 0 : r(a)
                },
                isExpanded: function(a) {
                    if (!a)
                        return !0;
                    var b = this._26o[a];
                    return b ? b.isExpanded : !(this._26Q[a] === !1)
                },
                toggle: function(a) {
                    var b = this;
                    b.isExpanded(a) ? b.collapse(a) : b.expand(a)
                },
                expandAll: function() {
                    this.validate();
                    for (var a in this._26o)
                        this.expand(a)
                },
                expand: function(a) {
                    if (a && a !== la) {
                        var b = this
                            , c = b._26o[a];
                        c && !c.isExpanded && (c.isExpanded = !0,
                            b.onExpanded(a),
                            b.ivm())
                    }
                },
                onExpanded: function() {},
                collapseAll: function() {
                    this.validate();
                    for (var a in this._26o)
                        this.collapse(a)
                },
                collapse: function(a) {
                    if (a && a !== la) {
                        var b = this
                            , c = b._26o[a];
                        c && c.isExpanded && (c.isExpanded = !1,
                            b.onCollapsed(a),
                            b.ivm())
                    }
                },
                onCollapsed: function() {},
                getCategoryName: function(a) {
                    if (!this.isCategorizable())
                        return la;
                    var b = a.getCategoryName();
                    return b ? b : la
                },
                getPropertyModel: function() {
                    return this._propertyModel
                },
                setDataModel: function(a) {
                    var b = this
                        , c = b._dataModel;
                    c !== a && (c && (c.umd(b.handlePropertyChange, b),
                    b._3o || c.sm().ums(b.ivm, b)),
                        b._dataModel = a,
                        a.md(b.handlePropertyChange, b),
                        b._3o ? b._3o._21I(a) : a.sm().ms(b.ivm, b),
                        b.fp(Eb, c, a))
                },
                isVisible: function(a) {
                    return this._visibleFunc ? this._visibleFunc(a) : !0
                },
                onPropertyChanged: function(a) {
                    var b = this
                        , c = a.property;
                    Mm[c] ? b.ivm() : b.iv(),
                    c === Db && b._43o()
                },
                getCurrentData: function() {
                    return this._27o
                },
                updateCurrentData: function() {
                    this._27o = this.sm().ld()
                },
                getRawProperties: function() {
                    return this._27o ? this._propertyModel._roots : Sh
                },
                handlePropertyChange: function(a) {
                    this._27o === a.data && this.iv()
                },
                ivm: function() {
                    this.invalidateModel()
                },
                invalidateModel: function() {
                    var a = this;
                    a._96I || (a.setSelectRowIndex(-1),
                        a._96I = 1,
                        a.iv())
                },
                redraw: function() {
                    this.iv()
                },
                validateModel: function() {
                    var a = this
                        , b = a._rows
                        , d = a._28o
                        , e = {}
                        , f = new Rh
                        , g = a._27o;
                    a.updateCurrentData(),
                    g !== a._27o && a.endEditing(),
                        b.clear(),
                        d.clear(),
                        a.getRawProperties().each(function(b) {
                            if (a.isVisible(b)) {
                                f.add(b);
                                var g = a.getCategoryName(b);
                                e[g] || (d.add(g, g === la ? 0 : c),
                                    e[g] = {
                                        isExpanded: a.isExpanded(g),
                                        properties: new Rh
                                    })
                            }
                        }),
                    a._sortFunc && f.sort(a._sortFunc);
                    for (var h in a._26o)
                        a._26Q[h] = a.isExpanded(h);
                    a._26o = e,
                        d.each(function(c) {
                            c !== la && b.add(c);
                            var d = e[c];
                            d.isExpanded && f.each(function(e) {
                                a.getCategoryName(e) === c && (d.properties.add(e),
                                    b.add({
                                        property: e,
                                        data: a._27o
                                    }))
                            }, a)
                        })
                },
                validateImpl: function() {
                    var a = this;
                    a._76o(),
                    a._96I && (a.validateModel(),
                        delete a._96I);
                    var b = a._canvas
                        , c = a.getWidth()
                        , d = a.getHeight()
                        , e = -a.ty()
                        , f = a._rowHeight
                        , g = a._indent
                        , h = c - g
                        , i = a._rows
                        , k = i.size()
                        , l = a._9I = g + h * a._10I
                        , m = a._59I = k * f;
                    Vd(b, c, d),
                        a._29I = {
                            x: 0,
                            y: e,
                            width: c,
                            height: d
                        },
                        a._31I = s(e / f),
                        a._14I = t((e + d) / f),
                    a._31I < 0 && (a._31I = 0),
                    a._14I > k && (a._14I = k);
                    var n, o = be(b), p = a._background;
                    ce(o, 0, -e, 1),
                        o.beginPath(),
                        o.rect(0, e, c, d),
                        o.clip(),
                        o.clearRect(0, e, c, d),
                        a._93db(o),
                    p && Xe(o, 0, 0, g, m, p);
                    for (var q = a._31I; q < a._14I; q++) {
                        var r = i.get(q)
                            , e = f * q;
                        if (gd(r))
                            p && Xe(o, g, e, h, f, p),
                                n = yg(a.isExpanded(r) ? a._expandIcon : a._collapseIcon),
                            n && Ag(o, n, Pb, 0, e, g, f),
                                o.save(),
                                o.beginPath(),
                                o.rect(g, e, h, f),
                                o.clip(),
                                a.drawCategoryName(o, r, q, g, e, h, f),
                                o.restore();
                        else {
                            var u = r.property
                                , v = r.data
                                , n = yg(u.getIcon())
                                , w = a._selectRowIndex === q ? a.getSelectBackground() : j;
                            if (n && Ag(o, n, Pb, 0, e, g, f),
                                w && Xe(o, g, e, h, f, w),
                                    o.save(),
                                    o.beginPath(),
                                    o.rect(g, e, l - g, f),
                                    o.clip(),
                                    a.drawPropertyName(o, u, q, g, e, l - g, f),
                                    o.restore(),
                                    !a.isEditing(v, u)) {
                                var x = l + 1
                                    , y = c - l - 1;
                                o.save(),
                                    o.beginPath(),
                                    o.rect(x, e, y, f),
                                    o.clip(),
                                    a._87o(a.drawPropertyValue(o, u, a.getValue(v, u), q, x, e, y, f, v), q, x, e, y, f),
                                    o.restore()
                            }
                        }
                        a._rowLineVisible && Xe(o, g, e + f - 1, h, 1, a._rowLineColor)
                    }
                    a._columnLineVisible && (Xe(o, l, 0, 1, m, a._columnLineColor),
                        Xe(o, c - 1, 0, 1, m)),
                        a._92db(o),
                        a._93I(),
                        o.restore(),
                        a.ty(a.ty())
                },
                drawCategoryName: function(a, b, c, d, e, f, g) {
                    Jg(a, b, this.getCategoryFont(b), this.getCategoryColor(b), d, e, f, g)
                },
                drawPropertyName: function(a, b, c, d, e, f, g) {
                    return b.drawPropertyName ? void b.drawPropertyName(a, b, c, d, e, f, g, this) : void Jg(a, this.getPropertyName(b), this.getPropertyFont(b, c), this.getPropertyColor(b, c), d, e, f, g)
                },
                drawPropertyValue: function(a, b, c, d, e, f, g, h, i) {
                    return b.drawPropertyValue ? b.drawPropertyValue(a, b, c, d, e, f, g, h, i, this) : void Om(a, c, b, this.getLabelFont(b, c, d), this.getLabelColor(b, c, d), e, f, g, h, i, this)
                },
                isPropertyEditable: function(a) {
                    return a.isEditable() && this.isEditable()
                },
                setProperties: function(a) {
                    this._propertyModel.clear(),
                        this.addProperties(a)
                },
                addProperties: function(a) {
                    if (a) {
                        var b = this._propertyModel;
                        a.forEach(function(a) {
                            if (!(a instanceof Vm)) {
                                var c = Fg(a.className);
                                a = vg(c ? c : Vm, a)
                            }
                            b.add(a)
                        })
                    }
                },
                getRowIndexAt: function(a) {
                    var b = this
                        , c = s(b.lp(a).y / b._rowHeight);
                    return c >= 0 && c < b._rows.size() ? c : -1
                },
                getPropertyAt: function(a) {
                    var b = this
                        , c = b.getRowIndexAt(a);
                    return c >= 0 ? b._rows.get(c).property : j
                },
                getToolTip: function(a) {
                    var b = this
                        , c = b.getPropertyAt(a)
                        , d = b._27o;
                    return c && d ? c.getToolTip(d, b._9I < b.lp(a).x, b) : j
                }
            });
        var Ym = function(a) {
                this.pv = a,
                    this.addListeners()
            }
        ;
        gh(Ym, b, {
            ms_listener: 1,
            getView: function() {
                return this.pv._view
            },
            setCursor: function(a) {
                this.getView().style.cursor = a
            },
            clear: function() {
                var a = this;
                a._62O = a.cp = a.ty = a.p = j,
                    a.setCursor(Y)
            },
            handle_mousedown: function(a) {
                this.handle_touchstart(a)
            },
            handle_touchstart: function(a) {
                var b = this
                    , c = b.pv;
                wg(a),
                c.setFocus(a) && (Lg(a) ? (b.cp = Qg(a),
                    b.ty = c.ty(),
                    b.p = c.getColumnPosition(),
                    b.handle_touchmove(a)) : c.setSelectRowIndex(c.getRowIndexAt(a)))
            },
            handleWindowMouseUp: function() {
                this.clear()
            },
            handleWindowTouchEnd: function() {
                this.clear()
            },
            handle_mouseup: function(a) {
                this.handle_touchend(a)
            },
            handle_touchend: function(a) {
                var b = this;
                if (b.cp && !b._62O) {
                    var c = b.pv
                        , d = c.lp(a)
                        , e = d.x
                        , f = d.y
                        , g = c._indent
                        , h = c.getRowIndexAt(a)
                        , i = c._9I;
                    if (h >= 0) {
                        var j = c._rowHeight
                            , k = j * h
                            , l = c._rows.get(h)
                            , m = l.property;
                        if (gd(l))
                            yg(c.isExpanded(l) ? c._expandIcon : c._collapseIcon) && e >= 0 && g >= e && f >= k && k + j >= f ? c.toggle(l) : Ng(a) && c.toggle(l);
                        else if (e > i && c.isPropertyEditable(m)) {
                            var n = {
                                x: i + 1,
                                y: k,
                                width: c.getWidth() - i - 1,
                                height: j
                            }
                                , o = {
                                x: n.x + c.tx(),
                                y: n.y + c.ty(),
                                width: n.width,
                                height: n.height
                            }
                                , p = 0
                                , q = c._29I;
                            n.y < q.y ? p = n.y - q.y : n.y + j > q.y + q.height && (p = n.y + j - q.y - q.height),
                            p && (c.ty(c.ty() - p),
                                o.y -= p),
                                c.beginEditing({
                                    data: l.data,
                                    property: m,
                                    value: c.getValue(l.data, m),
                                    event: a,
                                    rect: n,
                                    editorRect: o,
                                    view: c
                                })
                        }
                    }
                    c.setSelectRowIndex(h)
                }
                b.clear()
            },
            handleWindowMouseMove: function(a) {
                this.handleWindowTouchMove(a)
            },
            handleWindowTouchMove: function(a) {
                var b = this
                    , c = b.pv
                    , d = b.ty
                    , e = b.cp
                    , f = Qg(a)
                    , g = b._62O;
                if ("p" === g)
                    c.setTranslateY(d + f.y - e.y);
                else if ("c" === g) {
                    var h = c.getWidth() - c._indent;
                    if (h > 16) {
                        var i = b.p - (e.x - f.x) / h
                            , j = 16 / h;
                        j > i && (i = j),
                        i > 1 - j && (i = 1 - j),
                            c.setColumnPosition(i)
                    }
                } else
                    "s" === g && c.setTranslateY(d + (e.y - f.y) * c._59I / c._29I.height)
            },
            handle_mousemove: function(a) {
                this.handle_touchmove(a)
            },
            handle_touchmove: function(a) {
                if (!ke && Lg(a)) {
                    var b = this
                        , c = b.pv
                        , d = x(c.lp(a).x - c._9I) <= (X ? 8 : 3);
                    b.cp ? b._62O || (d ? (b._62O = "c",
                            ah(b)) : x(Qg(a).y - b.cp.y) >= 2 && (b._62O = b.isV(a) ? "s" : "p",
                                ah(b))) : (d ? b.setCursor(Zb) : b.setCursor(Y),
                    b.isV(a) && c._43o())
                }
            },
            isV: function(a) {
                var b = this.pv
                    , c = b._29I;
                return b._41o() && c.x + c.width - b.lp(a).x < pg
            },
            handle_mousewheel: function(a) {
                this.handleScroll(a, a.wheelDelta / 40)
            },
            handle_DOMMouseScroll: function(a) {
                2 === a.axis && this.handleScroll(a, -a.detail)
            },
            handleScroll: function(a, b) {
                var c = this.pv;
                wg(a),
                    c.endEditing(),
                    c.translate(0, b * c.getRowHeight())
            },
            handle_keydown: function(a) {
                var b = this.pv
                    , c = b._rows.size()
                    , d = b._selectRowIndex + (Be(a) ? -1 : 1);
                (Be(a) || De(a)) && (0 > d && (d = 0),
                d >= c && (d = c - 1),
                    b.setSelectRowIndex(d))
            }
        }),
            Rm.ListView = function(a) {
                this._5o(a),
                    new Zm(this)
            }
            ,
            Sm("ListView", b, {
                ms_ac: [Qa, Ra, Pa, kb, jb, ob, mb, tb, pb, hb, ib, gb, fb, eb],
                ms_v: 1,
                ms_bnb: 1,
                ms_tip: 1,
                ms_fire: 1,
                ms_sm: 1,
                _49o: 1,
                ms_txy: 1,
                ms_lp: 1,
                ms_vs: 1,
                ms_hs: 1,
                _15Q: 1,
                _14Q: 1,
                ms_dm: 1,
                _45o: 1,
                _checkMode: !1,
                _indent: hg,
                _rowHeight: ig,
                _rowLineVisible: m.listViewRowLineVisible,
                _rowLineColor: m.listViewRowLineColor,
                _scrollBarColor: lg,
                _scrollBarSize: mg,
                _autoMakeVisible: Yf,
                _autoHideScrollBar: Zf,
                _selectBackground: m.listViewSelectBackground,
                _labelColor: m.listViewLabelColor,
                _labelSelectColor: m.listViewLabelSelectColor,
                _labelFont: m.listViewLabelFont,
                isCheckMode: function() {
                    return this._checkMode
                },
                setCheckMode: function(a) {
                    var b = this
                        , c = b._checkMode;
                    b._checkMode = a,
                        b.fp(sb, c, a)
                },
                drawRow: function(a, b, c, d, e, f, g) {
                    var h = this
                        , i = 0
                        , j = h._indent
                        , k = h.getIconWidth(b);
                    h.drawRowBackground(a, b, c, d, e, f, g),
                    h._checkMode && (zg(a, h.getCheckIcon(b), i + j / 2, e + g / 2, b, h),
                        i += j),
                        h.drawIcon(a, b, i, e, k, g),
                        h.drawLabel(a, b, i + k, e, g)
                }
            });
        var Zm = function(a) {
                this.list = a,
                    this.addListeners()
            }
        ;
        gh(Zm, b, {
            ms_listener: 1,
            getView: function() {
                return this.list._view
            },
            clear: function(a) {
                var b = this;
                a && "d" === b._62O && b.list.handleDragAndDrop(a, "end"),
                    b._62O = b.cp = b.tx = b.ty = j
            },
            handle_mousedown: function(a) {
                this.handle_touchstart(a)
            },
            handle_touchstart: function(a) {
                var b = this
                    , c = b.list;
                if (wg(a),
                        c.setFocus(a))
                    if (b.cp = Qg(a),
                            b.tx = c.tx(),
                            b.ty = c.ty(),
                            Lg(a))
                        b.isV(a) || b.isH(a) || !c.handleDragAndDrop || c.handleDragAndDrop(a, "prepare");
                    else {
                        var d = c.getDataAt(a);
                        d && b._33o(a, d),
                            b.clear(a)
                    }
            },
            handleWindowMouseUp: function(a) {
                this.clear(a)
            },
            handleWindowTouchEnd: function(a) {
                this.clear(a)
            },
            handle_mouseup: function(a) {
                this.handle_touchend(a)
            },
            handle_touchend: function(a) {
                var b = this
                    , c = b.list;
                if (b.cp && !b._62O) {
                    var d = c.getDataAt(a);
                    d && (c.isCheckMode() ? b._34o(a, d) : b._33o(a, d),
                        Ng(a) ? c.onDataDoubleClicked(d, a) : c.onDataClicked(d, a))
                }
                b.clear(a)
            },
            handleWindowMouseMove: function(a) {
                this.handleWindowTouchMove(a)
            },
            handleWindowTouchMove: function(a) {
                var b = this
                    , c = b.list
                    , d = b._62O
                    , e = b.tx
                    , f = b.ty
                    , g = b.cp
                    , h = Qg(a)
                    , i = c._29I;
                "p" === d ? c.setTranslate(e + h.x - g.x, f + h.y - g.y) : "v" === d ? c.ty(f + (g.y - h.y) * c._59I / i.height) : "h" === d ? c.tx(e + (g.x - h.x) * c._91I / i.width) : "d" === d && c.handleDragAndDrop(a, "between")
            },
            handle_mousemove: function(a) {
                this.handle_touchmove(a)
            },
            handle_touchmove: function(a) {
                if (!ke && Lg(a)) {
                    var b = this
                        , c = b.list
                        , d = b.isV(a)
                        , e = b.isH(a);
                    if (b.cp) {
                        if (!b._62O) {
                            if (Sg(Qg(a), b.cp) < 2)
                                return;
                            d ? b._62O = "v" : e ? b._62O = "h" : c.handleDragAndDrop ? (b._62O = "d",
                                c.handleDragAndDrop(a, "begin")) : b._62O = "p",
                                ah(b)
                        }
                    } else
                        d && c._43o(),
                        e && c._42o()
                }
            },
            isV: function(a) {
                var b = this.list
                    , c = b._29I;
                return b._41o() && c.x + c.width - b.lp(a).x < pg
            },
            isH: function(a) {
                var b = this.list
                    , c = b._29I;
                return b._40o() && c.y + c.height - b.lp(a).y < pg
            },
            handle_mousewheel: function(a) {
                this.handleScroll(a, a.wheelDelta / 40, a.wheelDelta !== a.wheelDeltaX)
            },
            handle_DOMMouseScroll: function(a) {
                this.handleScroll(a, -a.detail, 1)
            },
            handleScroll: function(a, b, c) {
                var d = this.list;
                wg(a),
                d.endEditing && d.endEditing(),
                    c && d._41o() ? d.translate(0, b * d.getRowHeight()) : d._40o() && d.translate(10 * b, 0)
            },
            handle_keydown: function(a) {
                var b, c = this.list, d = c.sm(), e = c._rows, f = e.size();
                if (re(a))
                    c.selectAll();
                else if (se(a))
                    c.handleDelete && c.handleDelete(a);
                else if (Ee(a))
                    c.isCheckMode() && (b = c.getFocusData(),
                    b && c.checkData(b));
                else if (Be(a) || De(a)) {
                    var g = c.isCheckMode();
                    if (b = g ? c.getFocusData() : d.ld()) {
                        var h = c.getRowIndex(b);
                        h >= 0 && (Be(a) ? 0 !== h && (b = e.get(h - 1),
                                g ? c.setFocusData(b) : d.ss(b)) : h !== f - 1 && (b = e.get(h + 1),
                                g ? c.setFocusData(b) : d.ss(b)))
                    } else
                        f > 0 && (b = e.get(0),
                            g ? c.setFocusData(b) : d.ss(b))
                }
            },
            _34o: function(a, b) {
                var c = this.list
                    , d = c.lp(a).x;
                return d >= 0 && d <= c._indent ? void c.checkData(b) : void c.setFocusData(b)
            },
            _33o: function(a, b) {
                var c = this.list
                    , d = c.sm()
                    , e = d.ld();
                if (Pg(a))
                    c.isSelected(b) ? d.rs(b) : d.as(b);
                else if (Og(a))
                    if (e)
                        for (var f = c.getRowIndex(e), g = c.getRowIndex(b); f !== g; )
                            f += g > f ? 1 : -1,
                                d.as(c._rows.get(f));
                    else
                        d.ss(b);
                else
                    (Lg(a) || !d.contains(b)) && d.ss(b)
            }
        }),
            Rm.TreeView = function(a) {
                var b = this;
                b._35o(),
                    b._5o(a),
                    new $m(b)
            }
            ,
            Sm("TreeView", b, {
                ms_ac: [Qa, Ra, Pa, "rootVisible", sb, "rootData", tb, pb, hb, ib, gb, jb, kb, ob, mb, qb, rb, fb, eb, "loader"],
                ms_v: 1,
                ms_bnb: 1,
                ms_tip: 1,
                ms_fire: 1,
                ms_sm: 1,
                _49o: 1,
                ms_txy: 1,
                ms_lp: 1,
                ms_vs: 1,
                ms_hs: 1,
                _15Q: 1,
                ms_dm: 1,
                _48o: 1,
                _14Q: 1,
                _45o: 1,
                _checkMode: j,
                _indent: hg,
                _rowHeight: ig,
                _rowLineVisible: m.treeViewRowLineVisible,
                _rowLineColor: m.treeViewRowLineColor,
                _scrollBarColor: lg,
                _scrollBarSize: mg,
                _autoHideScrollBar: Zf,
                _expandIcon: m.treeViewExpandIcon,
                _collapseIcon: m.treeViewCollapseIcon,
                _autoMakeVisible: Yf,
                _selectBackground: m.treeViewSelectBackground,
                _labelColor: m.treeViewLabelColor,
                _labelSelectColor: m.treeViewLabelSelectColor,
                _labelFont: m.treeViewLabelFont,
                drawRow: function(a, b, c, d, e, f, g) {
                    var h = this;
                    h.drawRowBackground(a, b, c, d, e, f, g),
                        h._97I(a, b, c, 0, e, f, g)
                }
            });
        var $m = function(a) {
                yd($m, this, [a])
            }
        ;
        gh($m, Zm, {
            toggle: function(a, b, c, d) {
                var e = this.list
                    , f = e.lp(a).x;
                if (yg(e.getToggleIcon(b))) {
                    var g = c * d;
                    if (f >= g && g + c >= f)
                        return e.toggle(b),
                            !0
                }
                return Ng(a) ? (e.toggle(b),
                    !0) : !1
            },
            _34o: function(a, b) {
                var c = this.list
                    , d = c.lp(a).x
                    , e = c._levelMap[b._id]
                    , f = c._indent
                    , g = f * (e + 1);
                return d >= g && g + f >= d ? void c.checkData(b) : void (this.toggle(a, b, f, e) || c.setFocusData(b))
            },
            _33o: function(a, b) {
                var c = this
                    , d = c.list;
                c.toggle(a, b, d._indent, d.getLevel(b)) || $m.superClass._33o.call(c, a, b)
            },
            handle_keydown: function(a) {
                if (Ae(a) || Ce(a)) {
                    var b = this.list
                        , c = b._rows
                        , d = b.isCheckMode()
                        , e = b.sm()
                        , f = d ? b.getFocusData() : e.ld();
                    f ? f.hasChildren() && (Ae(a) ? b.collapse(f) : b.expand(f)) : c.size() > 0 && (f = c.get(0),
                            d ? b.setFocusData(f) : e.ss(f))
                } else
                    $m.superClass.handle_keydown.call(this, a)
            }
        });
        var _m = Rm.TableView = function(a) {
                this._98I(),
                    this._5o(a),
                    new an(this)
            }
        ;
        Sm("TableView", b, {
            ms_ac: [Qa, Ra, Pa, "sortMode", ub, vb, kb, ob, mb, nb, lb, "sortColumn", tb, pb, hb, ib, gb, fb, eb],
            ms_v: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            ms_tip: 1,
            _50o: 1,
            _45o: 1,
            _47o: 1,
            _sortMode: wb,
            _editable: !0,
            _batchEditable: !1,
            _rowHeight: ig,
            _rowLineVisible: m.tableViewRowLineVisible,
            _rowLineColor: m.tableViewRowLineColor,
            _columnLineVisible: m.tableViewColumnLineVisible,
            _columnLineColor: m.tableViewColumnLineColor,
            _scrollBarColor: lg,
            _scrollBarSize: mg,
            _autoHideScrollBar: Zf,
            _autoMakeVisible: Yf,
            _selectBackground: m.tableViewSelectBackground,
            _labelColor: m.tableViewLabelColor,
            _labelSelectColor: m.tableViewLabelSelectColor,
            _labelFont: m.tableViewLabelFont,
            getCheckColumn: function() {
                var a = this;
                if (!a._31o) {
                    var b = a._31o = new Um;
                    b.setEditable(!0),
                        b.setWidth(40),
                        b.getValue = a.getCheckColumValue,
                        b.drawCell = a.drawCheckColumnCell
                }
                return a._31o
            },
            isCheckMode: function() {
                return this._39o.contains(this._31o)
            },
            setCheckMode: function(a) {
                var b = this
                    , c = b._39o
                    , d = b.getCheckColumn();
                a !== b.isCheckMode() && (a ? c.add(d, 0) : c.remove(d),
                    b.fp(sb, !a, a))
            },
            getCheckColumValue: function(a, b, c) {
                return c.isSelected(a)
            },
            drawCheckColumnCell: function(a, b, c, d, e, f, g, h, i) {
                zg(a, i.getCheckIcon(b), e + g / 2, f + h / 2, b, i)
            }
        });
        var an = function(a) {
                yd(an, this, [a])
            }
        ;
        gh(an, Zm, {
            _34o: function(a, b) {
                var c = this.list
                    , d = c._31o;
                if (c.isCellEditable(b, d)) {
                    var e = c._3Q(d)
                        , f = c.lp(a).x;
                    if (e && f >= e.startX && f < e.startX + d.getWidth())
                        return void c.checkData(b)
                }
                c.setFocusData(b),
                    c._37O(b, a)
            },
            _33o: function(a, b) {
                an.superClass._33o.apply(this, arguments),
                    this.list._37O(b, a)
            }
        });
        var bn = Rm.TreeTableView = function(a) {
                var b = this
                    , c = b._4o = new Um;
                b._35o(),
                    b._98I(),
                    b._5o(a),
                    c.setDisplayName("Name"),
                    c.setEditable(!0),
                    c.setWidth(180),
                    c.drawCell = cn,
                    c.getValue = dn,
                    b._39o.add(c),
                    new en(b)
            }
            , cn = function(a, b, c, d, e, f, g, h, i) {
                i._97I(a, b, c, e, f, g, h)
            }
            , dn = function(a, b, c) {
                return c.getLabel(a)
            }
        ;
        Sm("TreeTableView", b, {
            ms_ac: [Qa, Ra, Pa, "sortMode", ub, vb, jb, sb, "rootData", "rootVisible", tb, pb, "sortColumn", qb, rb, hb, ib, gb, fb, mb, kb, ob, nb, lb, eb, "loader"],
            ms_v: 1,
            ms_bnb: 1,
            ms_fire: 1,
            ms_sm: 1,
            _49o: 1,
            ms_txy: 1,
            ms_lp: 1,
            ms_vs: 1,
            ms_hs: 1,
            _15Q: 1,
            ms_dm: 1,
            ms_tip: 1,
            _50o: 1,
            _48o: 1,
            _14Q: 1,
            _45o: 1,
            _47o: 1,
            _sortMode: wb,
            _checkMode: j,
            _editable: !0,
            _batchEditable: !1,
            _indent: hg,
            _rowHeight: ig,
            _rowLineVisible: m.treeTableViewRowLineVisible,
            _rowLineColor: m.treeTableViewRowLineColor,
            _columnLineVisible: m.treeTableViewColumnLineVisible,
            _columnLineColor: m.treeTableViewColumnLineColor,
            _expandIcon: m.treeTableViewExpandIcon,
            _collapseIcon: m.treeTableViewCollapseIcon,
            _scrollBarColor: lg,
            _scrollBarSize: mg,
            _autoHideScrollBar: Zf,
            _autoMakeVisible: Yf,
            _selectBackground: m.treeTableViewSelectBackground,
            _labelColor: m.treeTableViewLabelColor,
            _labelSelectColor: m.treeTableViewLabelSelectColor,
            _labelFont: m.treeTableViewLabelFont,
            getTreeColumn: function() {
                return this._4o
            }
        });
        var en = function(a) {
                yd(en, this, [a])
            }
        ;
        gh(en, Zm, {
            _34o: function(a, b) {
                var c = this.list
                    , d = c._4o
                    , e = c._3Q(d)
                    , f = c.lp(a).x;
                if (e) {
                    var g = c._indent
                        , h = e.startX + g * c.getLevel(b);
                    if (yg(c.getToggleIcon(b)) && f >= h && h + g >= f)
                        return void c.toggle(b);
                    if (c.isCellEditable(b, d) && (h += g,
                        f >= h && h + g >= f))
                        return void c.checkData(b)
                }
                c.setFocusData(b),
                    c._37O(b, a)
            },
            _33o: function(a, b) {
                var c = this.list
                    , d = c.lp(a).x;
                if (yg(c.getToggleIcon(b))) {
                    var e = c._3Q(c._4o);
                    if (e) {
                        var f = c._indent
                            , g = e.startX + f * c.getLevel(b);
                        if (d >= g && g + f >= d)
                            return void c.toggle(b)
                    }
                }
                en.superClass._33o.apply(this, arguments),
                    c._37O(b, a)
            }
        });
        var fn = Rm.TableHeader = function(a) {
                var b = this
                    , c = b._view = Rd(1)
                    , d = b._39o = a.getColumnModel()
                    , e = b.iv;
                b.tv = b._tableView = a,
                    b._60I = new Rh,
                    b._canvas = Sd(c),
                    c.style.background = m.tableHeaderBackground || "",
                    c.style.height = jg + ma,
                    d.mm(e, b),
                    d.md(e, b),
                    d.mh(e, b),
                    a.mp(function(a) {
                        Im[a.property] && b.iv()
                    }, b),
                    new gn(b),
                    b.iv()
            }
        ;
        Sm("TableHeader", b, {
            ms_v: 1,
            ms_lp: 1,
            ms_fire: 1,
            ms_ac: ["checkIcon", "sortDescIcon", "sortAscIcon", Qa, Pa, jb, "moveBackground", "insertColor", nb, lb, "resizable", "movable"],
            _checkIcon: Ca,
            _movable: !0,
            _resizable: !0,
            _labelColor: m.tableHeaderLabelColor,
            _labelFont: m.tableHeaderLabelFont,
            _columnLineColor: m.tableHeaderColumnLineColor,
            _columnLineVisible: m.tableHeaderColumnLineVisible,
            _sortDescIcon: m.tableHeaderSortDescIcon,
            _sortAscIcon: m.tableHeaderSortAscIcon,
            _moveBackground: m.tableHeaderMoveBackground,
            _insertColor: m.tableHeaderInsertColor,
            _indent: hg,
            getCheckIcon: function() {
                return this._checkIcon
            },
            getTableView: function() {
                return this.tv
            },
            getLabel: function(a) {
                return a.toLabel()
            },
            getLabelFont: function() {
                return this._labelFont
            },
            getLabelColor: function(a) {
                return a.getColor() || this._labelColor
            },
            getLabelAlign: function(a) {
                return a._align
            },
            onPropertyChanged: function() {
                this.iv()
            },
            _5Q: function(a) {
                this._61I = a,
                    this.iv()
            },
            getLogicalPoint: function(a) {
                return _g(a, this._canvas, this.tv.tx())
            },
            validateImpl: function() {
                var a = this
                    , b = a._canvas
                    , c = a.getWidth()
                    , d = a.getHeight()
                    , e = a.tv
                    , f = a._60I
                    , g = a._61I
                    , h = -e.tx()
                    , i = 0;
                (c !== b.clientWidth || d !== b.clientHeight) && Vd(b, c, d),
                    f.clear(),
                    a._39o._roots.each(function(a) {
                        if (a.isVisible()) {
                            var b = i + a.getWidth();
                            h + c >= i && b >= h && f.add({
                                column: a,
                                startX: i
                            }),
                                i = b
                        }
                    });
                var j = be(b);
                if (ce(j, -h, 0, 1),
                        j.beginPath(),
                        j.rect(h, 0, c, d),
                        j.clip(),
                        j.clearRect(h, 0, c, d),
                        f.each(function(b) {
                            var c = b.column
                                , e = b.startX
                                , f = c.getWidth();
                            f > 0 && (j.save(),
                                j.beginPath(),
                                j.rect(e, 0, f, d),
                                j.clip(),
                            g && g.column === c || a.drawColumn(j, c, e, 0, f, d),
                            a._columnLineVisible && Xe(j, e + f - 1, 0, 1, d, a._columnLineColor),
                                j.restore())
                        }),
                        g) {
                    var k = g.column
                        , i = g.startX
                        , l = g.position
                        , m = k.getWidth();
                    j.save(),
                        j.beginPath(),
                        j.rect(i, 0, m, d),
                        j.clip(),
                        j.fillStyle = a._moveBackground,
                        j.fill(),
                        a.drawColumn(j, k, i, 0, m, d),
                        j.restore(),
                        Id(j, a._insertColor, l, 0, d)
                }
                j.restore()
            },
            _6Q: function(a) {
                var b = this.tv;
                return b._31o === a && b.sm().getSelectionMode() === $
            },
            drawColumn: function(a, b, c, d, e, f) {
                var g = this
                    , h = g.tv
                    , i = yg(b.getIcon())
                    , j = g.getLabelAlign(b);
                if (g._6Q(b)) {
                    var k = yg(g._checkIcon);
                    zg(a, k, c + e / 2, d + f / 2, b, g)
                } else {
                    var l = g.getLabel(b)
                        , m = g.getLabelFont(b)
                        , n = g.getLabelColor(b)
                        , o = Kg(m, l).width
                        , p = i ? g._indent : 0;
                    j === ba ? (i && Ag(a, i, Pb, c, d, p, f),
                        Jg(a, l, m, n, c + p, d, e, f, ba)) : j === ca ? (i && Ag(a, i, Pb, c + e - o - p, d, p, f),
                        Jg(a, l, m, n, c, d, e, f, ca)) : (i && Ag(a, i, Pb, c + (e - o - p) / 2, d, p, f),
                        Jg(a, l, m, n, c + (e - o + p) / 2, d, 0, f, ba))
                }
                if (b.isSortable() && h.getSortColumn() === b && (i = yg(b.getSortOrder() === xb ? g._sortAscIcon : g._sortDescIcon))) {
                    var q = Nh(i, b) / 2 + 2;
                    zg(a, i, j === ca ? c + q : c + e - q, d + f / 2, b, h)
                }
            }
        });
        var gn = function(a) {
                var b = this;
                b.th = a,
                    b.tv = a._tableView,
                    b.addListeners()
            }
        ;
        gh(gn, b, {
            ms_listener: 1,
            getView: function() {
                return this.th.getView()
            },
            setCursor: function(a) {
                this.getView().style.cursor = a
            },
            handle_mousemove: function(a) {
                if (!ke) {
                    var b = this;
                    delete b._29o,
                        b.setCursor(Y);
                    for (var c = b.th, d = c._60I, e = c.lp(a).x, f = d.size() - 1; f >= 0; f--) {
                        var g = d.get(f)
                            , h = g.column
                            , i = g.startX + h.getWidth();
                        if (c.isResizable() && x(i - e) <= (X ? 10 : 3))
                            return b._29o = g,
                                void b.setCursor(Zb);
                        (h.isSortable() || c.isMovable() || h === b.tv.getCheckColumn()) && e >= g.startX && i >= e && h.getWidth() > 0 && (b._29o = g,
                            b.setCursor(_b))
                    }
                }
            },
            handle_mousedown: function(a) {
                this.handle_touchstart(a)
            },
            handle_touchstart: function(a) {
                var b = this;
                wg(a),
                    b.tv.endEditing(),
                    b.handle_mousemove(a),
                b._29o && (b.x = Qg(a).x,
                    b.lx = b.th.lp(a).x,
                    b.w = b._29o.column.getWidth(),
                    ah(b, a))
            },
            handleWindowMouseMove: function(a) {
                this.handleWindowTouchMove(a)
            },
            handleWindowTouchMove: function(a) {
                var b = this
                    , c = b.th
                    , d = b.getView().style.cursor
                    , e = b._29o
                    , f = Qg(a).x - b.x;
                if (b.resizing || b.moving || (d === Zb ? b.resizing = 1 : c.isMovable() && d === _b && x(f) > 2 && (b.moving = 1)),
                        b.resizing)
                    e.column.setWidth(b.w + f);
                else if (b.moving) {
                    var g = b.lx + f;
                    c._60I.each(function(a) {
                        var b = a.startX
                            , d = b + a.column.getWidth();
                        if (g >= b && d >= g) {
                            var h = {
                                column: e.column,
                                startX: e.startX + f,
                                front: d - g > g - b,
                                insertColumn: a.column
                            };
                            h.position = h.front ? b : d,
                                c._5Q(h)
                        }
                    })
                }
            },
            _16Q: function(a, b) {
                var c = this
                    , d = c.tv
                    , e = c.th
                    , f = e._checkIcon;
                if (e._6Q(a)) {
                    var g = yg(f)
                        , h = c.lx
                        , i = a.getWidth()
                        , j = Nh(g, a);
                    if (h >= b + i / 2 - j && b + i / 2 + j >= h) {
                        e.setCheckIcon(f === Ba ? Ca : Ba);
                        var k = d.sm()
                            , l = d._rows;
                        return f === Ba ? k.rs(l) : k.ss(l),
                            d.onCheckColumnClicked(a),
                            !0
                    }
                }
                return !1
            },
            handleWindowMouseUp: function(a) {
                this.handleWindowTouchEnd(a)
            },
            handleWindowTouchEnd: function(a) {
                var b = this
                    , c = b.tv
                    , d = b.th
                    , e = b._29o;
                if (b.moving) {
                    var f = d._61I;
                    if (f && f.insertColumn !== f.column) {
                        var g = f.column
                            , h = c.getColumnModel()._roots
                            , i = h.remove(g)
                            , k = h.indexOf(f.insertColumn);
                        k >= 0 && (f.front || k++,
                        k <= h.size() && (h.add(g, k),
                            c.getColumnModel()._38I(g, i, k)))
                    }
                    d._5Q(j),
                        delete b.moving
                } else if (!b.resizing && e) {
                    g = e.column;
                    var l = d.lp(a).x
                        , m = e.startX
                        , n = !0;
                    if (d.onColumnClicked) {
                        var o = d.onColumnClicked(g, a);
                        o === !1 && (n = !1)
                    }
                    if (n && l >= m && l <= m + g.getWidth() && !b._16Q(g, m)) {
                        if (g.isSortable()) {
                            var p = c.getSortMode()
                                , q = g.getSortOrder();
                            p === wb ? c.getSortColumn() === g ? (q === yb && c.setSortColumn(j),
                                g.setSortOrder(q === xb ? yb : xb)) : c.setSortColumn(g) : "bistate" === p && (c.getSortColumn() === g ? g.setSortOrder(q === xb ? yb : xb) : c.setSortColumn(g))
                        }
                        c.onColumnClicked(g, a)
                    }
                }
                b._29o = b.resizing = b.x = b.lx = b.w = j
            }
        }),
            Rm.TablePane = function(a) {
                this.init(new _m(a))
            }
            ,
            Sm("TablePane", b, {
                ms_v: 1,
                _44o: 1
            }),
            Rm.TreeTablePane = function(a) {
                this.init(new bn(a))
            }
            ,
            Sm("TreeTablePane", b, {
                ms_v: 1,
                _44o: 1
            }),
            Rm.Toolbar = function(a) {
                var b = this
                    , c = b._view = Rd(1)
                    , d = c.style;
                d.background = m.toolbarBackground || "",
                    d.height = kg + ma,
                    b._canvas = Sd(c),
                    b._30o = new Rh,
                    b._90I = new Rh,
                    b.setItems(a || []),
                    c.handleGroupSelectedChanged = function(a) {
                        if (a.isSelected()) {
                            var c = a.getGroupId();
                            null != c && b._items.forEach(function(b) {
                                var d = b.element;
                                d && d !== a && d.setSelected && d.getGroupId && d.getGroupId() === c && d.setSelected(!1)
                            })
                        }
                    }
                    ,
                    new hn(b)
            }
            ,
            Sm("Toolbar", b, {
                ms_v: 1,
                ms_fire: 1,
                ms_tx: 1,
                ms_lp: 1,
                ms_tip: 1,
                ms_value: 1,
                ms_ac: [ua, Qa, Pa, Ra, eb, "itemGap", "separatorColor", "currentItem", "stickToRight"],
                _labelColor: m.toolbarLabelColor,
                _labelSelectColor: m.toolbarLabelSelectColor,
                _labelFont: m.toolbarLabelFont,
                _selectBackground: m.toolbarSelectBackground,
                _itemGap: m.toolbarItemGap,
                _separatorColor: m.toolbarSeparatorColor,
                _stickToRight: !1,
                getSumWidth: function() {
                    return this._64I
                },
                getToolTip: function(a) {
                    var b = this.getItemInfoAt(a);
                    return b ? b.item.toolTip : j
                },
                getLabelColor: function(a) {
                    return a.selected && a.type !== Ba && a.type !== Da ? this._labelSelectColor : this._labelColor
                },
                onPropertyChanged: function(a) {
                    this.iv(),
                    a.property === ua && this._items.forEach(function(a) {
                        Qd(a)
                    })
                },
                redraw: function() {
                    this.iv()
                },
                addItem: function(a, b) {
                    var c = this._items;
                    b == j ? c.push(a) : c.splice(b, 0, a),
                        this.fp(ua, j, c)
                },
                removeItem: function(a) {
                    if (a)
                        for (var b = this._items, c = 0; c < b.length; c++)
                            a === b[c] && (b.splice(c, 1),
                                this.fp(ua, j, b))
                },
                removeItemById: function(a) {
                    if (a != j)
                        for (var b = this._items, c = 0; c < b.length; c++)
                            a === b[c].id && (b.splice(c, 1),
                                this.fp(ua, j, b))
                },
                getItemById: function(a) {
                    if (a != j)
                        for (var b = this._items, c = 0; c < b.length; c++) {
                            var d = b[c];
                            if (a === d.id)
                                return d
                        }
                },
                getItemInfos: function() {
                    return this._30o
                },
                getItemInfoAt: function(a) {
                    var b = this
                        , c = 0
                        , d = b._30o
                        , e = b.lp(a)
                        , f = e.x
                        , g = e.y;
                    if (g >= 0 && g <= b.getHeight())
                        for (; c < d.size(); c++) {
                            var h = d.get(c);
                            if (h.startX <= f && f <= h.endX)
                                return h
                        }
                    return j
                },
                drawItem: function(a, b, c, d, e) {
                    if (b.visible === !1)
                        return 0;
                    var f = this
                        , g = b.disabled;
                    g && (a.globalAlpha = Vf);
                    var h = f.drawItemImpl(a, b, c, d, e)
                        , i = f._itemGap;
                    return g && (a.globalAlpha = 1),
                    this._currentItem !== b || "separator" === b || b.unfocusable || bf(a, f._separatorColor, c - i / 2, 0, h + i, d),
                        h
                },
                drawItemImpl: function(a, b, c, d, e) {
                    var f, g = this, h = g._view, i = g._itemGap, j = d / 2, k = b.type, l = b.label, m = g.getLabelFont(b), n = g.getLabelColor(b), o = b.selected, p = yg(b.icon), q = Nh(p, b), r = 0, s = b.element, t = q + (l ? Kg(m, l).width : 0);
                    if ("separator" === b)
                        return Id(a, g._separatorColor, c, d / 4, j),
                            1;
                    if (s) {
                        p && zg(a, p, c + q / 2, j),
                            Jg(a, l, m, n, c + q, 0, 0, d);
                        var u = ge(s);
                        e || g._90I.add(u),
                        u.parentNode !== h && Wd(h, u),
                        s.iv && s.iv(),
                        s.validate && s.validate();
                        var v = u.getBoundingClientRect()
                            , w = v.width
                            , x = u.style;
                        return Ud(u),
                            x.left = g.tx() + c + t + ma,
                            x.top = (d - v.height) / 2 + ma,
                        t + w
                    }
                    return k === Da ? f = yg(o ? Ea : Fa) : k === Ba && (f = yg(o ? Ba : Ca)),
                        f ? (r = Nh(f, b),
                            zg(a, f, c + r / 2, j),
                            c += r,
                            t += r) : o && Xe(a, c - i / 2, 0, t + i, d, g.getSelectBackground(b)),
                    p && zg(a, p, c + q / 2, j),
                        Jg(a, l, m, n, c + q, 0, 0, d),
                        t
                },
                validateImpl: function() {
                    var a = this
                        , b = a._canvas
                        , c = a.getWidth()
                        , d = a.getHeight()
                        , e = a._30o
                        , f = a._items;
                    Vd(b, c, d);
                    var g = be(b)
                        , h = a._itemGap
                        , i = h / 2;
                    ce(g, a.tx(), 0, 1),
                        g.clearRect(0, 0, c, d);
                    var j = a._90I;
                    a._90I = new Rh,
                        e.clear(),
                        f.forEach(function(b) {
                            var c = a.drawItem(g, b, i, d);
                            e.add({
                                item: b,
                                startX: i,
                                endX: i + c,
                                width: c
                            }),
                            c && (i += c + h)
                        }),
                        j.each(function(b) {
                            a._90I.contains(b) || bh(b)
                        }),
                        a._64I = v(0, i),
                        g.restore(),
                        a._stickToRight ? (a._65O = 0,
                            g = be(b),
                            i = c - a._64I + h,
                            ce(g, 0, 0, 1),
                            g.clearRect(0, 0, c, d),
                            e.clear(),
                            f.forEach(function(b) {
                                var c = a.drawItem(g, b, i, d, !0);
                                e.add({
                                    item: b,
                                    startX: i,
                                    endX: i + c,
                                    width: c
                                }),
                                c && (i += c + h)
                            }),
                            g.restore()) : a.tx(a.tx())
                },
                handleClick: function(a) {
                    var b = this
                        , c = a.type
                        , d = a.action
                        , e = a.groupId
                        , f = a.selected;
                    a.disabled || (e != j ? f || (a.selected = !0,
                            this._items.forEach(function(b) {
                                b.groupId === e && a !== b && (b.selected = !1)
                            }),
                        d && a.action(a, b)) : c === Ba || "toggle" === c ? (a.selected = !f,
                    d && a.action(a, b)) : d && a.action(a, b)),
                        ag(),
                        b.iv()
                }
            });
        var hn = function(a) {
                this.tb = a,
                    this.addListeners()
            }
        ;
        gh(hn, b, {
            ms_listener: 1,
            getView: function() {
                return this.tb._view
            },
            handle_mousewheel: function(a) {
                this.handleScroll(a, 10 * (a.wheelDelta / 40))
            },
            handle_DOMMouseScroll: function(a) {
                this.handleScroll(a, 10 * -a.detail)
            },
            handleScroll: function(a, b) {
                wg(a);
                var c = this.tb;
                c.isScrollable() && !c._stickToRight && (c.tx(c.tx() + b),
                    je())
            },
            handle_mousemove: function(a) {
                var b = this;
                ke ? b.info2 = b.tb.getItemInfoAt(a) : b.setItem(a)
            },
            handle_mouseout: function(a) {
                var b = this;
                a.target === b.getView() ? b.tb.setCurrentItem(j) : b.handle_mousemove(a)
            },
            handle_mousedown: function(a) {
                this.handle_mousemove(a),
                    this.handle_touchstart(a)
            },
            handle_touchstart: function(a) {
                var b = this
                    , c = b.tb
                    , d = a.target;
                (d === b.getView() || d === c._canvas) && (wg(a),
                c.setFocus(a) && (this.setItem(a),
                (c.isScrollable() || b.info && !b.info.item.disabled) && (b.x = Qg(a).x,
                    b.tx = c.tx(),
                    ah(b, a))))
            },
            handleWindowMouseMove: function(a) {
                this.handleWindowTouchMove(a)
            },
            handleWindowTouchMove: function(a) {
                var b = this
                    , c = b.tb;
                if (!c._stickToRight) {
                    var d = Qg(a).x - b.x;
                    !b._25o && x(d) > 2 && c.isScrollable() && (b._25o = 1),
                    b._25o && c.tx(b.tx + d)
                }
            },
            handleWindowMouseUp: function(a) {
                this.handleWindowTouchEnd(a)
            },
            handleWindowTouchEnd: function() {
                var a = this
                    , b = a.tb
                    , c = a.info
                    , d = a.info2;
                if (!a._25o && c) {
                    var e = c.item;
                    d && d.item !== e || b.handleClick(e)
                }
                a._25o = a.x = a.tx = a.info2 = j,
                    a.setItem()
            },
            setItem: function(a) {
                var b = this
                    , c = b.tb
                    , d = b.info = a ? c.getItemInfoAt(a) : j;
                c.setCurrentItem(d ? d.item : j)
            }
        }),
            Rm.BorderPane = function() {
                this._view = Rd(1),
                    this.iv()
            }
            ,
            Sm("BorderPane", b, {
                ms_v: 1,
                ms_ac: ["topHeight", "bottomHeight", "leftWidth", "rightWidth"],
                ms_fire: 1,
                getLeftView: function() {
                    return this._leftView
                },
                setLeftView: function(a, b) {
                    this._12o("leftView", a),
                    b != j && this.setLeftWidth(b)
                },
                getRightView: function() {
                    return this._rightView
                },
                setRightView: function(a, b) {
                    this._12o("rightView", a),
                    b != j && this.setRightWidth(b)
                },
                getTopView: function() {
                    return this._topView
                },
                setTopView: function(a, b) {
                    this._12o("topView", a),
                    b != j && this.setTopHeight(b)
                },
                getBottomView: function() {
                    return this._bottomView
                },
                setBottomView: function(a, b) {
                    this._12o("bottomView", a),
                    b != j && this.setBottomHeight(b)
                },
                getCenterView: function() {
                    return this._centerView
                },
                setCenterView: function(a) {
                    this._12o("centerView", a)
                },
                _12o: function(a, b) {
                    var c = this
                        , d = "_" + a
                        , e = c._view
                        , f = c[d];
                    f !== b && (f && bh(f.getView ? f.getView() : f),
                        c[d] = b,
                    b && (b.getView ? Wd(e, b.getView(), 1) : Wd(e, b, 1)),
                        c.fp(a, f, b))
                },
                onPropertyChanged: function() {
                    this.iv()
                },
                validateImpl: function() {
                    var a = this
                        , b = a._topView
                        , c = a._bottomView
                        , d = a._leftView
                        , e = a._rightView
                        , f = a._centerView
                        , g = a.getWidth()
                        , h = a.getHeight()
                        , i = 0
                        , k = 0
                        , l = g
                        , m = h
                        , n = 0
                        , o = 0
                        , p = 0
                        , q = 0;
                    b && (n = a._topHeight == j ? _d(b) : a._topHeight,
                        k = n),
                    c && (o = a._bottomHeight == j ? _d(c) : a._bottomHeight,
                        m = h - o),
                    d && (p = a._leftWidth == j ? $d(d) : a._leftWidth,
                        i = p),
                    e && (q = a._rightWidth == j ? $d(e) : a._rightWidth,
                        l = g - q);
                    var r = v(0, l - i)
                        , s = v(0, m - k);
                    b && he(b, 0, 0, g, n),
                    c && he(c, 0, m, g, o),
                    d && he(d, 0, k, p, s),
                    e && he(e, l, k, q, s),
                    f && he(f, i, k, r, s)
                }
            })
    }
}(this, Object);
/*!最后修改于： 2015-12-08 */
