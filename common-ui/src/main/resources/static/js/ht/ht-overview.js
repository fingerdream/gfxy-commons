!function(L, n) {
    "use strict";
    var K = "ht",
        I = K + ".graph.",
        Y = L[K],
        z = Y.graph,
        B = Y.Default,
        p = Y.Color,
        t = null,
        v = "px",
        f = B.getInternal(),
        l = f.getPinchDist,
        s = B.preventDefault,
        F = B.getTouchCount,
        M = B.startDragging;
    f.addMethod(B, {
        overviewBackground : p.widgetBackground,
        overviewMaskBackground : p.transparent,
        overviewContentBorderColor : p.widgetBorder,
        overviewContentBackground : p.background
    }, !0), z.Overview = function(E) {
        var d = this,
            P = d._view = f.createDiv(1);
        d._canvas = f.createCanvas(P), P.style.background = B.overviewBackground, P.appendChild(d._mask = f.createDiv()), d.gv = E, d.redraw(), d.addListeners(), E.addViewListener(d.handleView, d)
    }, B.def(I + "Overview", n, {
        ms_v : 1,
        ms_fire : 1,
        ms_listener : 1,
        ms_ac : [ "maskBackground", "contentBorderColor", "contentBackground", "autoUpdate" ],
        _autoUpdate : !0,
        _rate : 1,
        _scrollRect : {
            x : 0,
            y : 0,
            width : 0,
            height : 0
        },
        _maskBackground : B.overviewMaskBackground,
        _contentBorderColor : B.overviewContentBorderColor,
        _contentBackground : B.overviewContentBackground,
        getCanvas : function() {
            return this._canvas
        },
        getMask : function() {
            return this._mask
        },
        dispose : function() {
            var k = this;
            k.gv.removeViewListener(k.handleView, k)
        },
        onPropertyChanged : function() {
            this.redraw()
        },
        handleView : function(z) {
            this._autoUpdate && "validate" === z.kind && this.redraw()
        },
        redraw : function() {
            var e = this;
            e._redraw || (e._redraw = 1, e.iv(50))
        },
        validateImpl : function() {
            var S = this,
                y = S.gv,
                h = S._canvas,
                g = S._mask,
                A = g.style,
                e = S.getWidth(),
                P = S.getHeight(),
                Y = y.getViewRect(),
                T = y.getScrollRect(),
                N = T.x,
                I = T.y,
                j = T.width,
                V = T.height,
                n = S._rate = Math.max(j / e, V / P),
                M = S._x = (e - j / n) / 2,
                i = S._y = (P - V / n) / 2,
                l = S._redraw;
            if (0 !== Y.width && 0 !== Y.height || S.hasRetry || (B.callLater(S.iv, S, t), S.hasRetry = !0), (e !== h.clientWidth || P !== h.clientHeight) && (f.setCanvas(h, e, P, 1), l = 1), f.isSameRect(T, S._scrollRect) || (S._scrollRect = T, l = 1), l) {
                var q = f.initContext(h),
                    E = S._contentBackground,
                    x = S._contentBorderColor;
                q.clearRect(0, 0, e, P), E && f.fillRect(q, M, i, j / n, V / n, E), x && f.drawBorder(q, x, M, i, j / n, V / n), q.translate(-N / n + M, -I / n + i), q.scale(1 / n, 1 / n), y._42(q), q.restore()
            }
            A.background = S._maskBackground, A.left = M + (Y.x - N) / n + v, A.top = i + (Y.y - I) / n + v, A.width = Y.width / n + v, A.height = Y.height / n + v,
                delete S._redraw
        },
        center : function(G) {
            var D = this,
                s = D.gv,
                O = s._zoom,
                A = s._29I,
                H = D._rate,
                L = D._scrollRect,
                K = B.getLogicalPoint(G, D._canvas),
                Z = L.x + (K.x - D._x) * H,
                f = L.y + (K.y - D._y) * H;
            s.setTranslate((A.width / 2 - Z) * O, (A.height / 2 - f) * O)
        },
        handle_mousedown : function(v) {
            this.handle_touchstart(v)
        },
        handleWindowMouseUp : function(Z) {
            this.handleWindowTouchEnd(Z)
        },
        handleWindowMouseMove : function(t) {
            this.handleWindowTouchMove(t)
        },
        handle_mousewheel : function(H) {
            this.handleScroll(H, H.wheelDelta)
        },
        handle_DOMMouseScroll : function(l) {
            2 === l.axis && this.handleScroll(l, -l.detail)
        },
        handleScroll : function(D, C) {
            s(D);
            var r = this.gv;
            C > 0 ? r.scrollZoomIn() : 0 > C && r.scrollZoomOut()
        },
        handle_touchstart : function(d) {
            if (s(d), B.isLeftButton(d)) {
                var i = this,
                    b = i.gv,
                    V = F(d);
                1 === V ? B.isDoubleClick(d) && b.isResettable() ? b.reset() : (i.center(d), M(i, d)) : 2 === V && (i._dist = l(d), M(i, d))
            }
        },
        handleWindowTouchEnd : function() {
            delete this._dist
        },
        handleWindowTouchMove : function(u) {
            var N = this,
                S = N._dist,
                f = F(u);
            1 === f ? N.center(u) : 2 === f && S != t && N.gv.handlePinch(t, l(u), S)
        }
    })
}(this, Object);