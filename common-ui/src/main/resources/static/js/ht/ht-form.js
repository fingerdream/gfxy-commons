!function(T, O, p) {
    "use strict";
    var z = "ht",
        P = z + ".widget.",
        C = T[z],
        m = C.Color,
        f = C.widget,
        V = m.widgetBorder,
        x = m.widgetBackground,
        A = m.widgetIconBorder,
        s = m.transparent,
        t = m.background,
        v = m.highlight,
        i = C.Default,
        k = i.def,
        Q = i.widgetRowHeight,
        u = i.removeHTML,
        o = i.drawText,
        S = i.getTextSize,
        B = i.isLeftButton,
        g = i.getWindowInfo,
        h = i.getImage,
        K = i.drawCenterImage,
        Y = i.preventDefault,
        $ = i.getLogicalPoint,
        b = i.labelFont,
        N = i.labelColor,
        y = i.labelSelectColor,
        j = i.widgetIndent,
        W = i.startDragging,
        n = i.createElement,
        X = i.getClientPoint,
        l = i.scrollBarInteractiveSize,
        U = i.getInternal(),
        G = U.createDiv,
        M = U.createCanvas,
        w = U.createImage,
        r = U.setCanvas,
        H = U.initContext,
        J = U.translateAndScale,
        d = U.isString,
        q = U.drawBorder,
        R = U.getImageWidth,
        a = U.getImageHeight,
        E = U.fillRect,
        Z = U.layout,
        D = U.formatNumber,
        I = U.addMethod,
        e = U.isH,
        c = i.isTouchable,
        F = Math.round,
        _ = "readonly",
        L = c ? "touchstart" : "mousedown",
        js = {
            x : 0,
            y : 0,
            width : 0,
            height : 0
        },
        bm = function(S) {
            var A = S.touches[0];
            return A ? A : S.changedTouches[0]
        },
        Rc = function(Q, S) {
            return Q.querySelector(S)
        },
        Pr = function(H, A) {
            var D = i.getLogicalPoint(A, H._canvas || H._view);
            return D.x >= 0 && D.y >= 0 && D.x <= H.getWidth() && D.y <= H.getHeight()
        };
    I(i, {
        textFieldFont : b,
        textFieldColor : N,
        textFieldBorderColor : V,
        textAreaFont : b,
        textAreaColor : N,
        textAreaBorderColor : V,
        radioButtonLabelFont : b,
        radioButtonLabelColor : N,
        radioButtonPressBackground : V,
        checkBoxLabelFont : b,
        checkBoxLabelColor : N,
        checkBoxPressBackground : V,
        buttonLabelFont : b,
        buttonLabelColor : N,
        buttonLabelSelectColor : y,
        buttonBackground : x,
        buttonBorderColor : V,
        buttonSelectBackground : v,
        sliderBackground : m.widgetIconBackground,
        sliderLeftBackground : m.widgetIconHighlight,
        sliderThickness : 3,
        sliderPadding : 4,
        sliderButton : w(14, 14, {
            type : "circle",
            rect : [ 0, 0, 14, 14 ],
            borderWidth : 1,
            borderColor : A,
            gradient : "linear.northeast",
            gradientColor : m.widgetIconGradient,
            background : x
        }),
        comboBoxMaxHeight : -1,
        comboBoxLabelFont : b,
        comboBoxLabelColor : N,
        comboBoxLabelSelectColor : y,
        comboBoxShadowColor : s,
        comboBoxBorderColor : V,
        comboBoxBackground : t,
        comboBoxSelectBackground : v,
        comboBoxDropDownIcon : w(12, 16, {
            type : "shape",
            points : [ 1, 5, 6, 11, 11, 5 ],
            borderWidth : 2,
            borderColor : A
        }),
        imageBorderColor : p,
        imageBackground : p,
        formPaneLabelColor : N,
        formPaneLabelFont : b,
        formPaneLabelAlign : "left",
        formPaneLabelVAlign : "middle",
        formPaneHPadding : 8,
        formPaneVPadding : 8,
        formPaneLabelHPadding : 2,
        formPaneLabelVPadding : 0,
        formPaneHGap : 6,
        formPaneVGap : 6
    }, !0);
    var bn = function(R, h) {
        var H = this;
        (H._view = G()).appendChild(H._element = n(R, h)), H.setHeight(Q), H.setWidth(80), H.iv()
    };
    k(bn, O, {
        ms_v : 1,
        ms_fire : 1,
        ms_tip : 1,
        ms_ac : [ "toolTip" ],
        onPropertyChanged : function() {
            this.iv()
        },
        getToolTip : function() {
            return this._toolTip || this.getText()
        },
        getElement : function() {
            return this._element
        },
        getText : function() {
            return this._element.value
        },
        setText : function(d) {
            this._element.value = d
        },
        getValue : function() {
            return this.getText()
        },
        setValue : function(m) {
            this.setText(m)
        },
        getColor : function() {
            return this._element.style.color
        },
        setColor : function(Z) {
            this._element.style.color = Z
        },
        getBackground : function() {
            return this._element.style.background
        },
        setBackground : function(g) {
            this._element.style.background = g
        },
        getFont : function() {
            return this._element.style.font
        },
        setFont : function(g) {
            this._element.style.font = g
        },
        isEditable : function() {
            return this._element.hasAttribute(_)
        },
        setEditable : function(A) {
            var G = this._element;
            A ? G.removeAttribute(_) : G.setAttribute(_, !0)
        },
        validateImpl : function() {
            var y = this;
            Z(y._element, 0, 0, y.getWidth(), y.getHeight())
        }
    }), f.TextField = function() {
        f.TextField.superClass.constructor.call(this, "input", i.textFieldBorderColor), this.setColor(i.textFieldLabelColor), this.setFont(i.textFieldLabelFont)
    }, k(P + "TextField", bn, {
        getType : function() {
            return this._element.getAttribute("type")
        },
        setType : function(J) {
            var K = this._element,
                L = i.numberListener;
            K.setAttribute("type", J), K.removeEventListener("keydown", L, !1), "number" === J && K.addEventListener("keydown", L, !1)
        }
    }), f.TextArea = function() {
        f.TextArea.superClass.constructor.call(this, "textarea", i.textAreaBorderColor), this.setColor(i.textAreaLabelColor), this.setFont(i.textAreaLabelFont)
    }, k(P + "TextArea", bn, {}), f.Button = function() {
        var n = this,
            V = n._view = G();
        n.setHeight(Q), n.setWidth(80), n._canvas = M(V), new ec(n), n.iv()
    }, k(P + "Button", O, {
        ms_v : 1,
        ms_fire : 1,
        ms_tip : 1,
        ms_ac : [ "groupId", "label", "icon", "iconColor", "orientation", "toolTip", "labelFont", "labelColor", "labelSelectColor", "borderColor", "background", "selectBackground", "togglable", "selected", "pressed", "clickable" ],
        _clickable : !0,
        _togglable : !1,
        _selected : !1,
        _pressed : !1,
        _orientation : "h",
        _labelFont : i.buttonLabelFont,
        _labelColor : i.buttonLabelColor,
        _labelSelectColor : i.buttonLabelSelectColor,
        _borderColor : i.buttonBorderColor,
        _background : i.buttonBackground,
        _selectBackground : i.buttonSelectBackground,
        onClicked : function() {},
        onSelectedChanged : function() {},
        onValueChanged : function() {},
        onPropertyChanged : function(x) {
            var V = this,
                R = V._view.parentNode;
            V.iv(), "selected" === x.property && (null != V.getGroupId() && R && R.handleGroupSelectedChanged && R.handleGroupSelectedChanged(V), V.onSelectedChanged(), V.onValueChanged(x.oldValue, x.newValue))
        },
        getToolTip : function() {
            return this._toolTip || this._label
        },
        validateImpl : function() {
            var b = this,
                D = b._canvas,
                O = b.getWidth(),
                Z = b.getHeight(),
                j = b._pressed || b._selected,
                T = j ? b._selectBackground : b._background;
            r(D, O, Z);
            var w = H(D);
            J(w, 0, 0, 1), w.clearRect(0, 0, O, Z), T && E(w, 0, 0, O, Z, T), q(w, b._borderColor, 0, 0, O, Z);
            var l = b._iconColor,
                n = h(b._icon, l),
                Y = R(n),
                z = a(n),
                X = b._label,
                $ = b.getLabelFont(),
                s = j ? b._labelSelectColor : b._labelColor,
                M = null == X ? js : S($, X),
                f = M.width,
                v = M.height;
            e(b) ? (Y && K(w, n, O / 2 - (Y + f) / 2 + Y / 2, Z / 2, b, b, l), f && o(w, X, $, s, O / 2 - (Y + f) / 2 + Y, 0, f, Z, "center")) : (Y && K(w, n, O / 2, Z / 2 - (z + v) / 2 + z / 2, b, b, l), f && o(w, X, $, s, O / 2 - f / 2, Z / 2 - (z + v) / 2 + z, f, v, "center")), w.restore()
        }
    });
    var ec = function(e) {
        this.button = e, this.addListeners()
    };
    k(ec, O, {
        ms_listener : 1,
        getView : function() {
            return this.button._view
        },
        handle_mousedown : function(b) {
            B(b) && this.handle_touchstart(b)
        },
        handleWindowMouseMove : function(O) {
            this.handleWindowTouchMove(O)
        },
        handleWindowMouseUp : function(w) {
            this.handleWindowTouchEnd(w)
        },
        handle_touchstart : function(N) {
            Y(N), this.button.isClickable() && (W(this, N), this.button.setPressed(!0))
        },
        handleWindowTouchMove : function() {},
        handleWindowTouchEnd : function(b) {
            var W = this,
                E = W.button;
            E.setPressed(!1), Pr(E, b) && (E.isTogglable() && (null != E.getGroupId() ? E.setSelected(!0) : E.setSelected(!E.isSelected())), E.onClicked(b))
        }
    });
    var rf = function() {
        var t = this,
            z = t._view = G();
        t.setHeight(Q), t.setWidth(80), t._canvas = M(z), new km(t), t.iv()
    };
    k(rf, O, {
        ms_v : 1,
        ms_fire : 1,
        ms_tip : 1,
        ms_ac : [ "label", "labelFont", "labelColor", "toolTip", "icon", "iconColor", "selected", "pressed", "pressBackground", "padding" ],
        _padding : 0,
        _selected : !1,
        _pressed : !1,
        onClicked : function() {},
        onSelectedChanged : function() {},
        onValueChanged : function() {},
        getValue : function() {
            return this.isSelected()
        },
        setValue : function(g) {
            this.setSelected(g)
        },
        onPropertyChanged : function(f) {
            var h = this;
            h.iv(), "selected" === f.property && (h.onSelectedChanged(), h.onValueChanged(f.oldvalue, f.newValue))
        },
        getToolTip : function() {
            return this._toolTip || this._label
        },
        validateImpl : function() {
            var O = this,
                F = O._canvas,
                D = O.getWidth(),
                d = O.getHeight(),
                n = O.getCheckIcon;
            r(F, D, d);
            var e = H(F);
            J(e, 0, 0, 1), e.clearRect(0, 0, D, d);
            var W = O._padding,
                T = O._iconColor,
                Z = h(n ? O.getCheckIcon() : O.getRadioIcon()),
                G = R(Z),
                $ = a(Z);
            O._pressed && (e.fillStyle = O._pressBackground, e.beginPath(), n ? e.rect(W, d / 2 - $ / 2, G, $) : e.arc(W + G / 2, d / 2, Math.min(G, $) / 2, 0, 2 * Math.PI, !0), e.fill()), K(e, Z, W + G / 2, d / 2, O, O), W += G + 1, Z = h(O.getIcon(), T), G = R(Z), K(e, Z, W + G / 2, d / 2, O, O, T), W += G, o(e, O._label, O._labelFont, O._labelColor, W, 0, 0, d), e.restore()
        }
    });
    var km = function(F) {
        this.c = F, this.addListeners()
    };
    k(km, O, {
        ms_listener : 1,
        getView : function() {
            return this.c._view
        },
        handle_mousedown : function(m) {
            B(m) && this.handle_touchstart(m)
        },
        handleWindowMouseMove : function(p) {
            this.handleWindowTouchMove(p)
        },
        handleWindowMouseUp : function(c) {
            this.handleWindowTouchEnd(c)
        },
        handle_touchstart : function(f) {
            Y(f), W(this, f), this.c.setPressed(!0)
        },
        handleWindowTouchMove : function() {},
        handleWindowTouchEnd : function(p) {
            var h = this,
                y = h.c;
            y.setPressed(!1), Pr(y, p) && (y.handleClick(p), y.onClicked(p))
        }
    }), f.CheckBox = function() {
        f.CheckBox.superClass.constructor.call(this)
    }, k(P + "CheckBox", rf, {
        _labelFont : i.checkBoxLabelFont,
        _labelColor : i.checkBoxLabelColor,
        _pressBackground : i.checkBoxPressBackground,
        getCheckIcon : function() {
            return this._selected ? "check" : "uncheck"
        },
        handleClick : function() {
            this.setSelected(!this.isSelected())
        }
    }), f.RadioButton = function() {
        f.RadioButton.superClass.constructor.call(this)
    }, k(P + "RadioButton", rf, {
        ms_ac : [ "groupId" ],
        _pressBackground : i.radioButtonPressBackground,
        _labelFont : i.radioButtonLabelFont,
        _labelColor : i.radioButtonLabelColor,
        getRadioIcon : function() {
            return this._selected ? "radioOn" : "radioOff"
        },
        onPropertyChanged : function(x) {
            var u = this,
                M = u._view.parentNode;
            u.iv(), null != u.getGroupId() && "selected" === x.property && (M && M.handleGroupSelectedChanged && M.handleGroupSelectedChanged(u), u.onSelectedChanged(), u.onValueChanged(x.oldValue, x.newValue))
        },
        handleClick : function() {
            this.setSelected(!0)
        }
    }), f.Slider = function() {
        var n = this,
            d = n._view = G();
        n.setHeight(Q), n.setWidth(80), n._canvas = M(d), new nl(n), n.iv(), n.enableToolTip()
    }, k(P + "Slider", O, {
        ms_v : 1,
        ms_fire : 1,
        ms_tip : 1,
        ms_ac : [ "value", "min", "max", "step", "button", "toolTip", "instant", "thickness", "padding", "background", "leftBackground" ],
        _min : 0,
        _max : 100,
        _value : 50,
        _step : p,
        _instant : !0,
        _button : i.sliderButton,
        _thickness : i.sliderThickness,
        _padding : i.sliderPadding,
        _background : i.sliderBackground,
        _leftBackground : i.sliderLeftBackground,
        onPropertyChanged : function(c) {
            var w = this,
                d = c.property;
            ("min" === d || "max" === d || "step" === d) && w.setValue(w._value), w.iv()
        },
        adjustValue : function(I) {
            null == I && (I = 0);
            var Z = this,
                j = Z._min,
                E = Z._max,
                f = Z._step;
            return j > I && (I = j), I > E && (I = E), f > 0 && (I = Math.floor((I - j) / f) * f + j), I
        },
        getToolTip : function() {
            return this._toolTip || D(this._value)
        },
        getValue : function() {
            return this._value
        },
        setValue : function(z) {
            var m = this,
                c = m._value;
            z = m.adjustValue(z), c !== z && (m._value = z, m.fp("value", c, z), m.onValueChanged(c, z))
        },
        onValueChanged : function() {},
        onEndValueChanged : function() {},
        drawBackground : function(H, $, r, Y, q) {
            E(H, $, r, Y, q, this.getBackground())
        },
        drawLeftBackground : function(f, Z, $, v, e) {
            var w = this.getLeftBackground();
            w && E(f, Z, $, v, e, w)
        },
        drawButton : function(j, s, p, W, $) {
            K(j, h(this._button), s + W / 2, p + $ / 2, this, this)
        },
        getButtonWidth : function() {
            var V = h(this._button);
            return V ? V.width : 0
        },
        validateImpl : function() {
            var n = this,
                m = n._canvas,
                S = n._min,
                q = n._max,
                j = n._value,
                E = n._padding,
                f = n._thickness,
                G = n.getWidth(),
                Q = n.getHeight(),
                l = n.getButtonWidth(),
                R = (Q - f) / 2,
                V = l / 2 + (j - S) / (q - S) * (G - 2 * E - l);
            r(m, G, Q);
            var y = H(m);
            J(y, 0, 0, 1), y.clearRect(0, 0, G, Q), n.drawBackground(y, E, R, G - 2 * E, f), n.drawLeftBackground(y, E, R, V, f), n.drawButton(y, E + V - l / 2, 0, l, Q), y.restore()
        }
    });
    var nl = function(U) {
        this.slider = U, this.addListeners()
    };
    k(nl, O, {
        ms_listener : 1,
        getView : function() {
            return this.slider._view
        },
        handle_mousedown : function(o) {
            B(o) && this.handle_touchstart(o)
        },
        handleWindowMouseMove : function(o) {
            this.handleWindowTouchMove(o)
        },
        handleWindowMouseUp : function(C) {
            this.handleWindowTouchEnd(C)
        },
        setValue : function(o) {
            var T = this.slider,
                W = T.getPadding() + T.getButtonWidth() / 2,
                h = T.getMin();
            T.setValue(h + ($(o, T._canvas).x - W) / (T.getWidth() - 2 * W) * (T.getMax() - h))
        },
        handle_touchstart : function(h) {
            var M = this;
            Y(h), M.setValue(h), W(M, h), i.showToolTip(h, M.slider.getToolTip(h))
        },
        handleWindowTouchMove : function(N) {
            this.setValue(N), i.showToolTip(N, this.slider.getToolTip(N))
        },
        handleWindowTouchEnd : function(g) {
            this.setValue(g), this.slider.onEndValueChanged(), i.hideToolTip()
        }
    }), f.ComboBox = function() {
        var $ = this,
            O = $._view = G(),
            z = $._listView = new f.ListView,
            T = $._canvas = M(O),
            I = z._view,
            a = z.sm();
        $.setHeight(Q), $.setWidth(80), a.setSelectionMode("single"), z.drawRow = function(q, O, A, E, D, m, W) {
            $.drawRow(q, O, A, E, D, m, W)
        }, O.style.display = "inline-block", U.setBorder(O, i.comboBoxBorderColor), I.style.boxShadow = "0px 0px 10px " + i.comboBoxShadowColor, null != i.baseZIndex && (I.style.zIndex = parseInt(i.baseZIndex) + 1 + ""), I.addEventListener("mousemove", function(X) {
            a.ss(z.getDataAt(X))
        }, !1), I.addEventListener("keydown", function(S) {
            if (U.isEnter(S)) {
                var o = a.ld();
                o && ($.setValue(o.value), $.close())
            }
            U.isEsc(S) && $.close()
        }, !1), O.addEventListener("keydown", function(F) {
            (U.isDown(F) || U.isUp(F)) && $.open()
        }, !1), z.onDataClicked = function(p) {
            $.setValue(p.value), $.close()
        }, O.addEventListener(L, function(G) {
            if (B(G)) {
                var R = G.target;
                (R === T || R === O) && (Y(G), $.toggle())
            }
        }, !1), $._handleWindowClick = function(o) {
            if (B(o)) {
                var _ = o.target;
                _ === $._input || _ === I || _ === O || $.close()
            }
        }, $.iv()
    }, i.def(P + "ComboBox", O, {
        ms_v : 1,
        ms_fire : 1,
        ms_tip : 1,
        ms_ac : [ "dropDownIcon", "dropDownWidth", "toolTip", "strict", "indent", "background", "labelFont", "labelColor", "labelSelectColor", "maxHeight", "selectBackground", "value", "values", "labels", "icons", "editable" ],
        _strict : !0,
        _editable : !1,
        _maxHeight : i.comboBoxMaxHeight,
        _labelFont : i.comboBoxLabelFont,
        _labelColor : i.comboBoxLabelColor,
        _labelSelectColor : i.comboBoxLabelSelectColor,
        _background : i.comboBoxBackground,
        _dropDownWidth : p,
        _dropDownIcon : i.comboBoxDropDownIcon,
        _selectBackground : i.comboBoxSelectBackground,
        _indent : j,
        getListView : function() {
            return this._listView
        },
        onPropertyChanged : function(m) {
            this.iv(), "value" === m.property && this.onValueChanged(m.oldValue, m.newValue)
        },
        onValueChanged : function() {},
        getToolTip : function() {
            return this._toolTip || this.toLabel(this._value)
        },
        getLabelColor : function(D, K) {
            return K ? this._labelSelectColor : this._labelColor
        },
        isEqual : function(r, u) {
            return this._strict ? r === u : r == u
        },
        toLabel : function(M) {
            var m = this,
                w = m._values,
                T = m._labels;
            if (T && w && T.length === w.length)
                for (var U = 0; U < w.length; U++)
                    if (m.isEqual(w[U], M)) return T[U];
            return null == M ? "" : M + ""
        },
        toIcon : function(t) {
            var j = this,
                E = j._values,
                M = j._icons;
            if (M && E && M.length === E.length)
                for (var F = 0; F < E.length; F++)
                    if (j.isEqual(E[F], t)) return M[F];
            return null
        },
        drawValue : function(x, p, n, F, f, y, Z) {
            var w = this,
                S = w._indent,
                i = w.toLabel(p),
                c = h(w.toIcon(p));
            c && (K(x, c, F + S / 2, f + Z / 2), F += S), i && o(x, i, w.getLabelFont(p, n), w.getLabelColor(p, n), F, f, 0, Z)
        },
        drawRow : function(Y, n, Z, H, r, O, p) {
            var l = this,
                W = n.value,
                A = l._indent;
            Z && E(Y, H, r, O, p, l._selectBackground), l.drawValue(Y, W, Z, H, r, O - A, p)
        },
        validateImpl : function() {
            var a = this,
                Z = a._canvas,
                x = a._indent,
                C = a.getWidth(),
                U = a.getHeight(),
                z = C - x,
                l = a._background || "";
            a._view.style.background = l, a._listView._view.style.background = l, r(Z, C, U);
            var D = H(Z);
            J(D, 0, 0, 1), D.clearRect(0, 0, C, U), K(D, h(a._dropDownIcon), z + x / 2, U / 2, a, a), D.beginPath(), D.rect(0, 0, z, U), D.clip(), a.drawValue(D, a._value, !1, 0, 0, z, U), D.restore()
        },
        isOpened : function() {
            return !!this._listView._view.parentNode
        },
        open : function() {
            var b = this,
                E = b._listView,
                x = E.dm(),
                e = b._values || [],
                N = e.length;
            if (!b.isOpened()) {
                x.clear();
                for (var h = 0; N > h; h++) {
                    var H = new C.Data,
                        q = e[h];
                    H.setName(b.toLabel(q)), H.value = q, x.add(H), b.isEqual(q, b._value) && x.sm().ss(H)
                }
                var c = g(),
                    X = c.left,
                    v = c.top,
                    B = c.height,
                    p = b._view.getBoundingClientRect(),
                    K = p.left + X,
                    J = p.top + v,
                    u = p.height,
                    F = b.getIndent(),
                    G = b.getWidth(),
                    P = b.getHeight(),
                    O = K + 1,
                    I = J + u,
                    Q = b.getDropDownWidth() || G,
                    W = N * P;
                if (b._maxHeight > 0 && (W = Math.min(W, b._maxHeight)), E.setRowHeight(P), I + W > v + B && (J - v > v + B - J - u ? (W = Math.min(W, J - v), I = J - W) : W = v + B - I), b._editable) {
                    var f = b._input = i.createElement("input", b.getSelectBackground(), b.getLabelFont(), b.toLabel(b._value));
                    document.body.appendChild(f), Z(f, K, J + 1, G - F, P), f.addEventListener("keydown", function(X) {
                        U.isEnter(X) ? b.setInputValue(f) : U.isEsc(X) && b.close()
                    }, !1), b.onInputCreated(f)
                }
                document.body.appendChild(E.getView()), Z(E, O, I, Q, W), E.setFocus(), T.addEventListener(L, b._handleWindowClick, !1), b.onOpened && b.onOpened(), U.closePopup(b)
            }
        },
        onInputCreated : function() {},
        setInputValue : function(K) {
            var W = this,
                A = W._labels,
                Q = W._values,
                f = K.value;
            if (A)
                for (var d = 0; d < A.length; d++) f === A[d] && (f = Q[d]);
            "string" == typeof f && Q && Q.length && "number" == typeof Q[0] && (f = parseFloat(f)), W.setValue(f), W.close()
        },
        close : function() {
            var N = this;
            N.isOpened() && (u(N._listView._view), N._input && (u(N._input),
                        delete N._input
                ), T.removeEventListener(L, N._handleWindowClick, !1), N.onClosed && N.onClosed(), i.popup === N &&
                delete i.popup
            ), N.setFocus()
        },
        toggle : function() {
            var X = this;
            X.isOpened() ? X.close() : X.open()
        }
    }), f.BaseDropDownTemplate = function(z) {
        this._master = z
    }, i.def(P + "BaseDropDownTemplate", O, {
        ms_ac : [ "master" ],
        getView : function() {},
        onOpened : function() {},
        onClosed : function() {},
        getValue : function() {},
        getWidth : function() {},
        getHeight : function() {}
    }), f.MultiComboBox = function() {
        var l = this,
            x = l._view = G(),
            n = l._canvas = M(x);
        l.setHeight(Q), l.setWidth(80), x.style.display = "inline-block", U.setBorder(x, i.comboBoxBorderColor), x.addEventListener("keydown", function(Z) {
            (U.isDown(Z) || U.isUp(Z)) && l.open()
        }, !1), x.addEventListener(L, function(u) {
            if (B(u)) {
                var z = u.target;
                (z === n || z === x) && (Y(u), l.toggle())
            }
        }, !1), l._handleWindowClick = function(m) {
            if (B(m)) {
                var f = m.target,
                    P = l._dropDownComponentInstanceView;
                f === l._input || f === x || P && P.contains(f) || l.close()
            }
        }, l.iv()
    }, i.def(P + "MultiComboBox", O, {
        ms_v : 1,
        ms_fire : 1,
        ms_tip : 1,
        ms_ac : [ "dropDownIcon", "toolTip", "background", "labelFont", "labelColor", "value", "editable", "indent", "dropDownComponent" ],
        _editable : !1,
        _background : i.comboBoxBackground,
        _dropDownIcon : i.comboBoxDropDownIcon,
        _indent : j,
        _labelFont : i.comboBoxLabelFont,
        _labelColor : i.comboBoxLabelColor,
        onPropertyChanged : function(x) {
            var L = this;
            L.iv(), "value" === x.property && L.onValueChanged(x.oldValue, x.newValue)
        },
        onValueChanged : function() {},
        getDropDownComponentInstance : function() {
            return this._dropDownComponentInstance
        },
        getToolTip : function() {
            return this._toolTip
        },
        validateImpl : function() {
            var P = this,
                x = P._canvas,
                n = P._indent,
                z = P.getWidth(),
                j = P.getHeight(),
                d = z - n,
                v = P._background || "";
            P._view.style.background = v, r(x, z, j);
            var W = H(x);
            J(W, 0, 0, 1), W.clearRect(0, 0, z, j), K(W, h(P._dropDownIcon), d + n / 2, j / 2, P, P), W.beginPath(), W.rect(0, 0, d, j), W.clip(), o(W, P._value, P.getLabelFont(), P.getLabelColor(), 0, 0, 0, j), P._input && P._input.value !== P._value && (P._input.value = null == P._value ? "" : P._value), W.restore()
        },
        isOpened : function() {
            var c = this,
                X = c._dropDownComponentInstanceView;
            return !!X
        },
        open : function() {
            var b = this;
            if (!b.isOpened()) {
                var N = i.getClass(b._dropDownComponent),
                    n = b._dropDownComponentInstance = new N(b),
                    a = b._dropDownComponentInstanceView = n.getView(),
                    _ = g(),
                    s = _.left,
                    Q = _.top,
                    O = _.width,
                    C = _.height,
                    D = b._view.getBoundingClientRect(),
                    M = D.left + s,
                    I = D.top + Q,
                    f = (D.width, D.height),
                    P = b.getIndent(),
                    K = b.getWidth(),
                    X = b.getHeight(),
                    m = M,
                    R = I + f,
                    $ = n.getWidth() || K,
                    l = n.getHeight();
                if (R + l > Q + C && I - Q > Q + C - I - f && (R = I - l), m + $ > s + O && (m -= m + $ - s - O), b._editable) {
                    var w = b._input = i.createElement("input", i.comboBoxSelectBackground, b.getLabelFont(), b._value);
                    document.body.appendChild(w), Z(w, M, I + 1, K - P, X), w.addEventListener("keydown", function(E) {
                        U.isEnter(E) ? (b.setValue(w.value), b.close(!0)) : U.isEsc(E) && b.close(!0)
                    }, !1), b.onInputCreated(w)
                }
                a.style.boxShadow = "0px 0px 10px " + i.toolTipShadowColor, a.style.position = "absolute", null != i.baseZIndex && (a.style.zIndex = parseInt(i.baseZIndex) + 1 + ""), document.body.appendChild(a), a.focus(), Z(n, m, R, $, l), n.onOpened && n.onOpened(b._value), T.addEventListener(L, b._handleWindowClick, !1), b.onOpened && b.onOpened(), U.closePopup(b)
            }
        },
        onInputCreated : function() {},
        close : function(F) {
            var H = this;
            if (H.isOpened()) {
                F || H.setValue(H._dropDownComponentInstance.getValue());
                var r = H._dropDownComponentInstance,
                    t = H._dropDownComponentInstanceView;
                r.onClosed && r.onClosed(), u(t),
                    delete H._dropDownComponentInstanceView
                    ,
                    delete H._dropDownComponentInstance
                    , H._input && (u(H._input),
                        delete H._input
                ), T.removeEventListener(L, H._handleWindowClick, !1), H.onClosed && H.onClosed(), i.popup === H &&
                delete i.popup
            }
            H.setFocus()
        },
        toggle : function() {
            var S = this;
            S.isOpened() ? S.close() : S.open()
        }
    }), f.Image = function() {
        var r = this,
            s = r._view = G();
        s.onmousedown = Y, r.setHeight(Q), r.setWidth(80), r._canvas = M(s), new $j(r), r.iv()
    }, k(P + "Image", O, {
        ms_v : 1,
        ms_fire : 1,
        ms_tip : 1,
        ms_ac : [ "icon", "iconColor", "stretch", "toolTip", "borderColor", "background" ],
        _borderColor : i.imageBorderColor,
        _background : i.imageBackground,
        _stretch : "centerUniform",
        onClicked : function() {},
        onPropertyChanged : function() {
            this.iv()
        },
        validateImpl : function() {
            var t = this,
                T = t._canvas,
                B = t.getWidth(),
                k = t.getHeight(),
                Z = t._iconColor,
                D = h(t._icon, Z),
                Q = t._background;
            r(T, B, k);
            var e = H(T);
            J(e, 0, 0, 1), e.clearRect(0, 0, B, k), Q && E(e, 0, 0, B, k, Q), D && i.drawStretchImage(e, D, t._stretch, 0, 0, B, k, t, t, Z), q(e, t._borderColor, 0, 0, B, k), e.restore()
        }
    });
    var $j = function(D) {
        this.image = D, this.addListeners()
    };
    k($j, O, {
        ms_listener : 1,
        getView : function() {
            return this.image._view
        },
        handle_mousedown : function(p) {
            B(p) && this.handle_touchstart(p)
        },
        handleWindowMouseMove : function(I) {
            this.handleWindowTouchMove(I)
        },
        handleWindowMouseUp : function(w) {
            this.handleWindowTouchEnd(w)
        },
        handle_touchstart : function(U) {
            Y(U), W(this, U)
        },
        handleWindowTouchMove : function() {},
        handleWindowTouchEnd : function(C) {
            var J = this,
                F = J.image;
            Pr(F, C) && F.onClicked(C)
        }
    });
    var Nf = "data:image/png;base64,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",
        te = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAEACAIAAABdw+MhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALBJREFUeNrs2sEJgDAQRNGJBPuvV5R4FAuYnF4aeGRv+9mx0n0zOQEAAAAAAAAAAAAAAABsAsbK0/3Bk6MLXO1WAQAAAAAAAAAAAAAAAOBLCUn3bGCWWwgAAAAAAAAAAAAAAACA36Z/rzKw7vKIcgEAAAAAAAAAAAAAAADYBIzyzUBmuYUAAAAAAAAAAAAAAAAA2AmM8s1AZrmFAAAAAAAAAAAAAAAAAPht+uWU8AowAGyEi9doBGciAAAAAElFTkSuQmCC",
        Vj = "data:image/png;base64,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",
        $i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA6SURBVChTY/iPCk6DwRkYoKv0sWPHjiIBBohyCADKQVXBAIr0kSNHoMIwwAC1BAyApkGFYYAS6f//AVzgDAPz1XkAAAAAAElFTkSuQmCC",
        Ll = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAANUlEQVR42myNsQ0AMAzC8P9Hu0sjpU3YkLFADWBmIInqQsgDAar8kCY6zDtYzfUzte5ROQMAeFAiAMRBE+oAAAAASUVORK5CYII=";
    f.ColorPicker = function() {
        var d = this;
        f.ColorPicker.superClass.constructor.call(d), d.setEditable(!0), d.setDropDownComponent(f.ColorPickerTemp)
    }, k(P + "ColorPicker", f.MultiComboBox, {
        ms_ac : [ "instant", "clearButtonVisible" ],
        _clearButtonVisible : !0,
        setValue : function(q) {
            var k = this;
            if (q !== p) {
                var d = k._value;
                k._value = q, k.fp("value", d, q)
            }
        }
    }), f.ColorPickerTemp = function(Y) {
        var Z = this,
            B = "px",
            _ = Z._view = document.createElement("div"),
            b = Z.$10o = document.createElement("div"),
            g = Z.$11o = G(),
            l = Z.$12o = G(),
            Q = b.style;
        Z._h = 360, Z._s = 100, Z._v = 100, _.className = "colorPickerPopup", _.style.position = "absolute", _.style.background = "white", f.ColorPickerTemp.superClass.constructor.call(Z, Y);
        var E = '<div style="border: 1px solid rgba(0, 0, 0, 0); position: absolute; width: 40px; height: 20px; top: 5px; left: 5px; bottom: 5px; background: url(' + $i + ') repeat;"></div>                      <div class= "preview" style="border: 1px solid black; position: absolute; width: 40px; height: 20px; top: 5px; left: 5px; bottom: 5px;"></div>                      <div style="margin-left: 50px; font: ' + i.labelFont + '; line-height: 30px;" >                             R:<input class="color_R" style="width: 28px;" type="' + (c ? "number" : "text") + '">                             G:<input class="color_G" style="width: 28px" type="' + (c ? "number" : "text") + '">                             B:<input class="color_B" style="width: 28px" type="' + (c ? "number" : "text") + '">                             A:<input class="color_A" style="width: 28px" value="1" type="' + (c ? "number" : "text") + '">                      </div>',
            D = '<div>        <div class="satval" style="position: absolute;cursor:crosshair;margin-left:5px;top: 6px;border:1px solid black;width:128px;height:128px;background-image: url(' + Nf + ');background-color: red;background-size:contain;">            <div class="satval_pointer" style="position:absolute;left: 124px; top: -3px;width: 7px; height: 7px;background-image: url(' + Ll + ')"></div>        </div>        <div class="hue_picker" style="position:absolute;width: 46px; height: 140px;left: 152px;top:0;">            <div class="hue_image" style="border: 1px solid black;position:absolute;left:7px;top:6px;width:30px; height:128px; background: url(' + te + ');background-size:contain;"></div>            <div class="hue_pointer" style="position:absolute;top:1px;left:0;width:46px; height:12px; background: url(' + Vj + ')"></div>        </div>        <div style="position: absolute; left: 210px;top:6px;">        <input type="button" value="&#10003" class="color_ok"><br><br>        <input type="button" value="&#10005" class="color_clear">        </div>        </div>';
        Q.font = i.labelFont, Q.height = 30 + B, Q.lineHeight = 30 + B, Q.position = "relative", Q.whiteSpace = "nowrap", b.innerHTML = E, l.innerHTML = D, _.appendChild(b), _.appendChild(l), _.addEventListener("click", function(R) {
            var E = R.target,
                N = E.className;
            "color_ok" === N ? (Z.$13o = Z.$9o(), Y.close()) : "color_clear" === N ? (Z.$13o = null, Y.close()) : [ "color_R", "color_G", "color_B", "color_A" ].indexOf(N) >= 0 && E.select()
        });
        var r = function(K) {
            var l,
                m = K.target,
                A = m.className,
                z = !1;
            [ "color_R", "color_G", "color_B" ].indexOf(A) >= 0 ? (l = parseInt(m.value), m.value = l >= 0 && 255 >= l ? parseInt(m.value) : 0, z = !0) : "color_A" === A && (l = parseFloat(m.value), m.value = l >= 0 && 1 >= l ? parseFloat(m.value) : 0, z = !0), z && (g.style.backgroundColor = Z.$9o())
        };
        _.addEventListener("keydown", function(S) {
            var C = S.target,
                k = C.className;
            [ "color_R", "color_G", "color_B", "color_A", "color_ok", "color_clear" ].indexOf(k) >= 0 && 13 == S.keyCode && (r(S), Z.$13o = Z.$9o(), Y.close())
        }), new Zc(Z), _.addEventListener("change", r);
        var o = Rc(_, ".color_clear");
        Y._clearButtonVisible || (o.style.display = "none")
    }, k(f.ColorPickerTemp, f.BaseDropDownTemplate, {
        $6o : function() {
            var C = this,
                l = C._view,
                Y = C._master,
                o = C._h,
                Q = C._s,
                D = C._v,
                g = C.$2o(o / 360, Q / 100, D / 100),
                w = g.r,
                t = g.g,
                $ = g.b;
            l.querySelector("input.color_R").value = F(255 * w), l.querySelector("input.color_G").value = F(255 * t), l.querySelector("input.color_B").value = F(255 * $);
            var H = C.$9o();
            l.querySelector(".preview").style.backgroundColor = H;
            var s = C.$2o(o / 360, 1, 1);
            l.querySelector(".satval").style.backgroundColor = C.$4o(s.r, s.g, s.b, !0), Y._instant && Y.setValue(H)
        },
        $5o : function(T, E, D) {
            var v,
                W,
                x = Math.max(Math.max(T, E), D),
                e = Math.min(Math.min(T, E), D),
                H = x;
            if (e == x) v = 0, W = 0;else {
                var B = x - e;
                W = B / x, v = T == x ? (E - D) / B : E == x ? 2 + (D - T) / B : 4 + (T - E) / B, v /= 6, 0 > v && (v += 1), v > 1 && (v -= 1)
            }
            return {
                h : v,
                s : W,
                v : H
            }
        },
        $4o : function(h, T, $, c) {
            return h = F(255 * h), T = F(255 * T), $ = F(255 * $), c == p && (c = !0), h = h.toString(16), 1 == h.length && (h = "0" + h), T = T.toString(16), 1 == T.length && (T = "0" + T), $ = $.toString(16), 1 == $.length && ($ = "0" + $), ((c ? "#" : "") + h + T + $).toUpperCase()
        },
        $3o : function(l, c, w) {
            w == p && (w = null), "#" == l.substr(0, 1) && (l = l.substr(1));
            var T,
                Z,
                b;
            if (3 == l.length) T = l.substr(0, 1), T += T, Z = l.substr(1, 1), Z += Z, b = l.substr(2, 1), b += b;else {
                if (6 != l.length) return w;
                T = l.substr(0, 2), Z = l.substr(2, 2), b = l.substr(4, 2)
            }
            return T = parseInt(T, 16), Z = parseInt(Z, 16), b = parseInt(b, 16), isNaN(T) || isNaN(Z) || isNaN(b) ? w : c ? {
                r : T,
                g : Z,
                b : b
            } : {
                r : T / 255,
                g : Z / 255,
                b : b / 255
            }
        },
        $2o : function(t, W, h) {
            var j,
                n,
                R;
            if (0 == h) j = 0, n = 0, R = 0;else {
                var S = Math.floor(6 * t),
                    k = 6 * t - S,
                    L = h * (1 - W),
                    F = h * (1 - W * k),
                    H = h * (1 - W * (1 - k));
                switch (S) {
                    case 1:
                        j = F, n = h, R = L;
                        break;case 2:
                    j = L, n = h, R = H;
                    break;case 3:
                    j = L, n = F, R = h;
                    break;case 4:
                    j = H, n = L, R = h;
                    break;case 5:
                    j = h, n = L, R = F;
                    break;case 6:
                    case 0:
                        j = h, n = H, R = L
                }
            }
            return {
                r : j,
                g : n,
                b : R
            }
        },
        $9o : function() {
            var A = this._view,
                V = Rc(A, "input.color_R").value,
                y = Rc(A, "input.color_G").value,
                h = Rc(A, "input.color_B").value,
                Y = Rc(A, "input.color_A").value || 1;
            return "" === V || "" === y || "" === h || "" === Y ? p : 1 == Y ? "rgb(" + V + "," + y + "," + h + ")" : "rgba(" + V + "," + y + "," + h + "," + Y + ")"
        },
        getView : function() {
            return this._view
        },
        onOpened : function(l) {
            if (l) {
                var w,
                    v = this,
                    S = v._view;
                if (v.$11o.style.backgroundColor = l, 0 === l.indexOf("#") ? (l = l.substr(1, 6), w = v.$3o(l, !0), w = [ w.r, w.g, w.b ]) : 0 === l.indexOf("rgb") && (l = l.substring(l.indexOf("(") + 1, l.indexOf(")")), w = l.split(",")), w) {
                    var H = 4 === w.length ? w[3] : 1,
                        J = v.$5o(w[0] / 255, w[1] / 255, w[2] / 255),
                        n = Rc(S, ".satval_pointer");
                    Rc(S, "input.color_R").value = w[0], Rc(S, "input.color_G").value = w[1], Rc(S, "input.color_B").value = w[2], Rc(S, "input.color_A").value = H, v._h = F(360 * J.h), v._s = F(100 * J.s), v._v = F(100 * J.v), n.style.left = 127 * J.s - 3 + "px", n.style.top = 127 - 127 * J.v - 3 + "px", Rc(S, ".hue_pointer").style.top = 128 - 127 * J.h + "px", v.$6o()
                }
            }
        },
        onClosed : function() {},
        getValue : function() {
            return this.$13o
        },
        getHeight : function() {
            return 170
        },
        getWidth : function() {
            return 252
        }
    });
    var Zc = function(_) {
        this.$8o = _, this.setUp()
    };
    k(Zc, O, {
        ms_listener : 1,
        getView : function() {
            return this.$8o._view
        },
        setUp : function() {
            this.addListeners()
        },
        tearDown : function() {
            this.removeListeners(), this.clear()
        },
        clear : function() {
            delete this.$7o
        },
        handle_touchstart : function(D) {
            var X = this,
                N = D.target,
                q = X.$8o,
                p = X.getView(),
                $ = Rc(p, ".hue_picker"),
                t = Rc(p, ".satval");
            $.contains(N) ? (X.$7o = 1, X.$1o(D, 1)) : t.contains(N) && (X.$7o = 2, X.$1o(D, 2)), X.$7o && i.isDoubleClick(D) && (q.$13o = q.$9o(), q._master.close())
        },
        $1o : function(M, h) {
            i.preventDefault(M);
            var s,
                C,
                A,
                T = this,
                L = T.$8o,
                b = T.getView(),
                g = Rc(b, ".hue_picker"),
                O = Rc(b, ".satval");
            if (M = c ? bm(M) : M, 1 === h) {
                s = g.getBoundingClientRect(), A = M.clientY - s.top, A -= 7, 0 > A && (A = 0), A > 127 && (A = 127), Rc(b, ".hue_pointer").style.top = A + 1 + "px";
                var K = A;
                K = F(360 - K * (360 / 127)), L._h = K, L.$6o()
            } else if (2 === h) {
                s = O.getBoundingClientRect(), C = M.clientX - s.left - 1, A = M.clientY - s.top - 1, 0 > C && (C = 0), C > 127 && (C = 127), 0 > A && (A = 0), A > 127 && (A = 127), L._s = F(100 * C / 127), L._v = F(100 - 100 * A / 127);
                var H = Rc(b, ".satval_pointer");
                H.style.left = C - 3 + "px", H.style.top = A - 3 + "px", L.$6o()
            }
        },
        handle_mousedown : function(U) {
            this.handle_touchstart(U)
        },
        handle_mouseup : function(G) {
            this.handle_touchend(G)
        },
        handle_touchend : function(n) {
            var w = this;
            w.clear(n)
        },
        handle_mousemove : function(M) {
            this.handle_touchmove(M)
        },
        handle_touchmove : function() {
            var O = this;
            O.$7o && i.startDragging(O)
        },
        handleWindowMouseUp : function(v) {
            this.handleWindowTouchEnd(v)
        },
        handleWindowTouchEnd : function(t) {
            var _ = this;
            _.clear(t)
        },
        handleWindowMouseMove : function(T) {
            this.handleWindowTouchMove(T)
        },
        handleWindowTouchMove : function(K) {
            var Z = this,
                $ = Z.$7o;
            $ && Z.$1o(K, $)
        }
    }), f.FormPane = function(F) {
        var b = this,
            I = b._view = G(1);
        F || (b._canvas = M(I)), I.appendChild(b._79O = G()), b._rows = [], b._itemMap = {}, b.iv(), I.handleGroupSelectedChanged = function(W) {
            if (W.isSelected()) {
                var U = W.getGroupId();
                null != U && b._rows.forEach(function(k) {
                    var E = k.items;
                    E && E.forEach(function(v) {
                        if (v) {
                            var l = v.element;
                            l && l !== W && l.setSelected && l.getGroupId && l.getGroupId() === U && l.setSelected(!1)
                        }
                    })
                })
            }
        }, new ip(b)
    }, k(P + "FormPane", O, {
        ms_v : 1,
        ms_fire : 1,
        ms_txy : 1,
        ms_lp : 1,
        ms_vs : 1,
        ms_hs : 1,
        ms_value : 1,
        ms_ac : [ "labelColor", "labelFont", "labelAlign", "labelVAlign", "vPadding", "hPadding", "labelHPadding", "labelVPadding", "hGap", "vGap", "rows", "rowHeight", "scrollBarColor", "scrollBarSize", "autoHideScrollBar" ],
        _29I : js,
        _91I : 0,
        _59I : 0,
        _labelColor : i.formPaneLabelColor,
        _labelFont : i.formPaneLabelFont,
        _labelAlign : i.formPaneLabelAlign,
        _labelVAlign : i.formPaneLabelVAlign,
        _hPadding : i.formPaneHPadding,
        _vPadding : i.formPaneVPadding,
        _labelHPadding : i.formPaneLabelHPadding,
        _labelVPadding : i.formPaneLabelVPadding,
        _hGap : i.formPaneHGap,
        _vGap : i.formPaneVGap,
        _rowHeight : i.widgetRowHeight,
        _scrollBarColor : i.scrollBarColor,
        _scrollBarSize : i.scrollBarSize,
        _autoHideScrollBar : i.autoHideScrollBar,
        onPropertyChanged : function(I) {
            var H = this,
                R = I.property;
            H.iv(), "translateX" === R ? H._42o() : "translateY" === R && H._43o()
        },
        adjustTranslateX : function(c) {
            var o = this.getWidth() - this._91I;
            return o > c && (c = o), c > 0 ? 0 : Math.round(c)
        },
        adjustTranslateY : function(Z) {
            var W = this.getHeight() - this._59I;
            return W > Z && (Z = W), Z > 0 ? 0 : Math.round(Z)
        },
        setPadding : function(d) {
            this.setVPadding(d), this.setHPadding(d)
        },
        getLabelFont : function(g) {
            return g && g.font ? g.font : this._labelFont
        },
        getLabelColor : function(G) {
            return G && G.color ? G.color : this._labelColor
        },
        getLabelAlign : function(s) {
            return s && s.align ? s.align : this._labelAlign
        },
        getLabelVAlign : function(q) {
            return q && q.vAlign ? q.vAlign : this._labelVAlign
        },
        getItemView : function(G) {
            if (G) {
                var X = G.element;
                if (X) {
                    if (X.tagName) return X;
                    if (X.getView) return X.getView()
                }
            }
            return null
        },
        getRowBorderColor : function(V) {
            return V ? V.borderColor : null
        },
        getRowBackground : function(c) {
            return c ? c.background : null
        },
        getItemBorderColor : function(W) {
            return W ? W.borderColor : null
        },
        getItemBackground : function(p) {
            return p ? p.background : null
        },
        getItemById : function(D) {
            return this._itemMap[D]
        },
        addRow : function(G, q, B, K) {
            var x = this,
                $ = x._view;
            if (G) {
                for (var S = 0; S < G.length; S++) {
                    var g = G[S];
                    g && ((g.tagName || g.getView) && (G[S] = {
                        element : g
                    }), U.initItemElement(g), null != g.id && (x._itemMap[g.id] = g))
                }
                G.forEach(function(A) {
                    var Z = x.getItemView(A);
                    Z && (Z.style.position = "absolute", $.insertBefore(Z, x._79O))
                })
            }
            var A = K || {};
            A.items = G, A.widths = q, A.height = B, null == A.index ? x._rows.push(A) : x._rows.splice(A.index, 0, A), x.iv()
        },
        removeRow : function(V) {
            var i = this,
                S = i._rows.splice(V, 1)[0].items;
            S && S.forEach(function(e) {
                var D = i.getItemView(e);
                D && i._view.removeChild(D), null != e.id &&
                delete i._itemMap[e.id]
            }), i.iv()
        },
        clear : function() {
            for (var P = this, e = P._view; e.firstChild;) e.removeChild(e.firstChild);
            P._canvas && e.appendChild(P._canvas), e.appendChild(P._79O), P._rows = [], P._itemMap = {}, P.iv()
        },
        validateImpl : function() {
            var T,
                X,
                P,
                W,
                S,
                o,
                t = this,
                U = t._canvas,
                I = t._rowHeight,
                s = t.getWidth(),
                l = t.getHeight(),
                A = t._hPadding,
                p = t._vPadding,
                b = t._vGap,
                w = t.ty(),
                u = t.tx(),
                R = s - 2 * A,
                g = l - 2 * p,
                j = t._rows,
                n = j.length,
                D = 0,
                a = g - (n - 1) * b;
            for (t._29I = {
                x : -u,
                y : -w,
                width : s,
                height : l
            }, U && (r(U, s, l), o = H(U), J(o, 0, 0, 1), o.clearRect(0, 0, s, l)), P = 0; n > P; P++) W = j[P], S = W.height, null == S ? a -= I : d(S) ? (T = S.split("+"), X = parseFloat(T[0]), X > 1 ? a -= X : D += X, X = parseFloat(T[1]), X > 1 ? a -= X : D += X) : S > 1 ? a -= S : D += S;
            0 > a ? (t._59I = l - a, a = 0) : t._59I = l;
            var O = p + w,
                m = s;
            for (P = 0; n > P; P++) {
                W = j[P], S = W.height, null == S ? S = I : d(S) ? (T = S.split("+"), X = parseFloat(T[0]), S = X > 1 ? X : X / D * a, X = parseFloat(T[1]), S += X > 1 ? X : X / D * a) : 1 >= S && (S = S / D * a);var L = A + u;
                if (o) {
                    var B = t.getRowBorderColor(W),
                        Y = t.getRowBackground(W);
                    Y && E(o, L, O, R, S, Y), B && q(o, B, L, O, R, S)
                }
                var i = t.validateRow(o, W.items, W.widths, L, O, R, S);
                i > m && (m = i), O += S + b
            }
            o && o.restore(), t._91I = m, t._92I(), t._93I(), t.tx(t.tx()), t.ty(t.ty())
        },
        validateRow : function(m, A, F, $, L, K, U) {
            if (!A) return 0;
            var r,
                t,
                W,
                v,
                _,
                y = this,
                i = y.getWidth(),
                w = y._hGap,
                s = A.length,
                T = 0,
                H = K - (s - 1) * w;
            for (W = 0; s > W; W++) v = F[W], d(v) ? (r = v.split("+"), t = parseFloat(r[0]), t > 1 ? H -= t : T += t, t = parseFloat(r[1]), t > 1 ? H -= t : T += t) : v > 1 ? H -= v : T += v;
            for (0 > H && (i -= H, H = 0), W = 0; s > W; W++) {
                if (_ = A[W], v = F[W], d(v) ? (r = v.split("+"), t = parseFloat(r[0]), v = t > 1 ? t : t / T * H, t = parseFloat(r[1]), v += t > 1 ? t : t / T * H) : 1 >= v && (v = v / T * H), _) {
                    if (m) {
                        var M = y.getItemBorderColor(_),
                            z = y.getItemBackground(_);
                        z && E(m, $, L, v, U, z), M && q(m, M, $, L, v, U)
                    }
                    y.validateItem(m, _, $, L, v, U)
                }
                $ += v + w
            }
            return i
        },
        validateItem : function(G, L, _, i, q, T) {
            var l,
                c = this,
                W = L.element;
            W && !d(W) ? Z(W, _, i, q, T) : G && (d(L) ? l = L : d(L.element) && (l = L.element), l && (G.save(), G.beginPath(), G.rect(_, i, q, T), G.clip(), o(G, l, c.getLabelFont(L), c.getLabelColor(L), _ + c._labelHPadding, i - c._labelVPadding, q - 2 * c._labelHPadding, T - 2 * c._labelVPadding, c.getLabelAlign(L), c.getLabelVAlign(L)), G.restore()))
        }
    });
    var ip = function(e) {
        this.f = e, this.addListeners()
    };
    k(ip, O, {
        ms_listener : 1,
        getView : function() {
            return this.f._view
        },
        handle_mousedown : function(S) {
            B(S) && this.handle_touchstart(S)
        },
        handleWindowMouseMove : function(L) {
            this.handleWindowTouchMove(L)
        },
        handleWindowMouseUp : function(r) {
            this.handleWindowTouchEnd(r)
        },
        handle_touchstart : function(I) {
            var F,
                j = this,
                T = j.f,
                k = I.target;
            j.isV(I) ? F = "v" : j.isH(I) ? F = "h" : (k === j.getView() || T._79O.contains(k)) && (F = "p"), (j.s = F) && (j.cp = X(I), j.tx = T.tx(), j.ty = T.ty(), Y(I), W(j, I))
        },
        handle_mousemove : function(B) {
            var J = this,
                n = J.f;
            J.isV(B) && n._43o(), J.isH(B) && n._42o()
        },
        handleWindowTouchMove : function(V) {
            var I = this,
                E = I.f,
                D = I.s,
                c = I.tx,
                J = I.ty,
                i = I.cp,
                u = X(V),
                P = E._29I;
            "p" === D ? E.setTranslate(c + u.x - i.x, J + u.y - i.y) : "v" === D ? E.ty(J + (i.y - u.y) * E._59I / P.height) : "h" === D && E.tx(c + (i.x - u.x) * E._91I / P.width)
        },
        handleWindowTouchEnd : function() {},
        handle_mousewheel : function(A) {
            this.h(A, A.wheelDelta / 40, A.wheelDelta !== A.wheelDeltaX)
        },
        handle_DOMMouseScroll : function(i) {
            this.h(i, -i.detail, 1)
        },
        h : function(l, G, _) {
            var p = this.f;
            Y(l), U.closePopup(), _ && p._41o() ? p.translate(0, 10 * G) : p._40o() && p.translate(10 * G, 0)
        },
        isV : function(u) {
            var p = this.f,
                c = p._29I;
            return p._41o() && c.x + c.width - p.lp(u).x < l
        },
        isH : function(r) {
            var U = this.f,
                I = U._29I;
            return U._40o() && I.y + I.height - U.lp(r).y < l
        }
    })
}(this, Object);