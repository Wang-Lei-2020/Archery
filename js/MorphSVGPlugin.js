var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global: this || window; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var e = Math.PI / 180,
        t = 180 / Math.PI,
        r = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        n = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        o = /(^[#.]|[a-y][a-z])/gi,
        i = /[achlmqstvz]/gi,
        a = /[+\-]?\d*\.?\d+e[+\-]?\d+/gi,
        s = _gsScope._gsDefine.globals.TweenLite,
        h = "codepen",
        l = "MorphSVGPlugin",
        f = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        g = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
        u = function(e) {
            for (var t = -1 !== (window ? window.location.href: "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== e.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), r = [f, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], n = r.length; --n > -1;) if ( - 1 !== e.indexOf(r[n])) return ! 0;
            return t && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + l + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)),
                t
        } (window ? window.location.host: ""),
        c = function(e) {
            window.console && console.log(e)
        },
        p = function(t, r) {
            var n, o, i, a, s, h, l = Math.ceil(Math.abs(r) / 90),
                f = 0,
                g = [];
            for (t *= e, r *= e, n = r / l, o = 4 / 3 * Math.sin(n / 2) / (1 + Math.cos(n / 2)), h = 0; l > h; h++) i = t + h * n,
                a = Math.cos(i),
                s = Math.sin(i),
                g[f++] = a - o * s,
                g[f++] = s + o * a,
                i += n,
                a = Math.cos(i),
                s = Math.sin(i),
                g[f++] = a + o * s,
                g[f++] = s - o * a,
                g[f++] = a,
                g[f++] = s;
            return g
        },
        d = function(r, n, o, i, a, s, h, l, f) {
            if (r !== l || n !== f) {
                o = Math.abs(o),
                    i = Math.abs(i);
                var g = a % 360 * e,
                    u = Math.cos(g),
                    c = Math.sin(g),
                    d = (r - l) / 2,
                    m = (n - f) / 2,
                    v = u * d + c * m,
                    b = -c * d + u * m,
                    M = o * o,
                    C = i * i,
                    S = v * v,
                    A = b * b,
                    y = S / M + A / C;
                y > 1 && (o = Math.sqrt(y) * o, i = Math.sqrt(y) * i, M = o * o, C = i * i);
                var x = s === h ? -1 : 1,
                    w = (M * C - M * A - C * S) / (M * A + C * S);
                0 > w && (w = 0);
                var N = x * Math.sqrt(w),
                    z = N * (o * b / i),
                    _ = N * -(i * v / o),
                    P = (r + l) / 2,
                    T = (n + f) / 2,
                    L = P + (u * z - c * _),
                    G = T + (c * z + u * _),
                    q = (v - z) / o,
                    I = (b - _) / i,
                    Y = ( - v - z) / o,
                    B = ( - b - _) / i,
                    X = Math.sqrt(q * q + I * I),
                    V = q;
                x = 0 > I ? -1 : 1;
                var R = x * Math.acos(V / X) * t;
                X = Math.sqrt((q * q + I * I) * (Y * Y + B * B)),
                    V = q * Y + I * B,
                    x = 0 > q * B - I * Y ? -1 : 1;
                var O = x * Math.acos(V / X) * t; ! h && O > 0 ? O -= 360 : h && 0 > O && (O += 360),
                    O %= 360,
                    R %= 360;
                var F, j, H, D = p(R, O),
                    Q = u * o,
                    E = c * o,
                    U = c * -i,
                    W = u * i,
                    Z = D.length - 2;
                for (F = 0; Z > F; F += 2) j = D[F],
                    H = D[F + 1],
                    D[F] = j * Q + H * U + L,
                    D[F + 1] = j * E + H * W + G;
                return D[D.length - 2] = l,
                    D[D.length - 1] = f,
                    D
            }
        },
        m = function(e) {
            var t, n, o, i, s, h, l, f, g, u, p, m, v, b = (e + "").replace(a,
                function(e) {
                    var t = +e;
                    return 1e-4 > t && t > -1e-4 ? 0 : t
                }).match(r) || [],
                M = [],
                C = 0,
                S = 0,
                A = b.length,
                y = 2,
                x = 0;
            if (!e || !isNaN(b[0]) || isNaN(b[1])) return c("ERROR: malformed path data: " + e),
                M;
            for (t = 0; A > t; t++) if (v = s, isNaN(b[t]) ? (s = b[t].toUpperCase(), h = s !== b[t]) : t--, o = +b[t + 1], i = +b[t + 2], h && (o += C, i += S), 0 === t && (f = o, g = i), "M" === s) l && l.length < 8 && (M.length -= 1, y = 0),
                C = f = o,
                S = g = i,
                l = [o, i],
                x += y,
                y = 2,
                M.push(l),
                t += 2,
                s = "L";
            else if ("C" === s) l || (l = [0, 0]),
                l[y++] = o,
                l[y++] = i,
            h || (C = S = 0),
                l[y++] = C + 1 * b[t + 3],
                l[y++] = S + 1 * b[t + 4],
                l[y++] = C += 1 * b[t + 5],
                l[y++] = S += 1 * b[t + 6],
                t += 6;
            else if ("S" === s)"C" === v || "S" === v ? (u = C - l[y - 4], p = S - l[y - 3], l[y++] = C + u, l[y++] = S + p) : (l[y++] = C, l[y++] = S),
                l[y++] = o,
                l[y++] = i,
            h || (C = S = 0),
                l[y++] = C += 1 * b[t + 3],
                l[y++] = S += 1 * b[t + 4],
                t += 4;
            else if ("Q" === s) u = o - C,
                p = i - S,
                l[y++] = C + 2 * u / 3,
                l[y++] = S + 2 * p / 3,
            h || (C = S = 0),
                C += 1 * b[t + 3],
                S += 1 * b[t + 4],
                u = o - C,
                p = i - S,
                l[y++] = C + 2 * u / 3,
                l[y++] = S + 2 * p / 3,
                l[y++] = C,
                l[y++] = S,
                t += 4;
            else if ("T" === s) u = C - l[y - 4],
                p = S - l[y - 3],
                l[y++] = C + u,
                l[y++] = S + p,
                u = C + 1.5 * u - o,
                p = S + 1.5 * p - i,
                l[y++] = o + 2 * u / 3,
                l[y++] = i + 2 * p / 3,
                l[y++] = C = o,
                l[y++] = S = i,
                t += 2;
            else if ("H" === s) i = S,
                l[y++] = C + (o - C) / 3,
                l[y++] = S + (i - S) / 3,
                l[y++] = C + 2 * (o - C) / 3,
                l[y++] = S + 2 * (i - S) / 3,
                l[y++] = C = o,
                l[y++] = i,
                t += 1;
            else if ("V" === s) i = o,
                o = C,
            h && (i += S - C),
                l[y++] = o,
                l[y++] = S + (i - S) / 3,
                l[y++] = o,
                l[y++] = S + 2 * (i - S) / 3,
                l[y++] = o,
                l[y++] = S = i,
                t += 1;
            else if ("L" === s || "Z" === s)"Z" === s && (o = f, i = g, l.closed = !0),
            ("L" === s || Math.abs(C - o) > .5 || Math.abs(S - i) > .5) && (l[y++] = C + (o - C) / 3, l[y++] = S + (i - S) / 3, l[y++] = C + 2 * (o - C) / 3, l[y++] = S + 2 * (i - S) / 3, l[y++] = o, l[y++] = i, "L" === s && (t += 2)),
                C = o,
                S = i;
            else if ("A" === s) {
                if (m = d(C, S, 1 * b[t + 1], 1 * b[t + 2], 1 * b[t + 3], 1 * b[t + 4], 1 * b[t + 5], (h ? C: 0) + 1 * b[t + 6], (h ? S: 0) + 1 * b[t + 7])) for (n = 0; n < m.length; n++) l[y++] = m[n];
                C = l[y - 2],
                    S = l[y - 1],
                    t += 7
            } else c("Error: malformed path data: " + e);
            return M.totalPoints = x + y,
                M
        },
        v = function(e, t) {
            var r, n, o, i, a, s, h, l, f, g, u, c, p, d, m = 0,
                v = .999999,
                b = e.length,
                M = t / ((b - 2) / 6);
            for (p = 2; b > p; p += 6) for (m += M; m > v;) r = e[p - 2],
                n = e[p - 1],
                o = e[p],
                i = e[p + 1],
                a = e[p + 2],
                s = e[p + 3],
                h = e[p + 4],
                l = e[p + 5],
                d = 1 / (Math.floor(m) + 1),
                f = r + (o - r) * d,
                u = o + (a - o) * d,
                f += (u - f) * d,
                u += (a + (h - a) * d - u) * d,
                g = n + (i - n) * d,
                c = i + (s - i) * d,
                g += (c - g) * d,
                c += (s + (l - s) * d - c) * d,
                e.splice(p, 4, r + (o - r) * d, n + (i - n) * d, f, g, f + (u - f) * d, g + (c - g) * d, u, c, a + (h - a) * d, s + (l - s) * d),
                p += 6,
                b += 6,
                m--;
            return e
        },
        b = function(e) {
            var t, r, n, o, i = "",
                a = e.length,
                s = 100;
            for (r = 0; a > r; r++) {
                for (o = e[r], i += "M" + o[0] + "," + o[1] + " C", t = o.length, n = 2; t > n; n++) i += (o[n++] * s | 0) / s + "," + (o[n++] * s | 0) / s + " " + (o[n++] * s | 0) / s + "," + (o[n++] * s | 0) / s + " " + (o[n++] * s | 0) / s + "," + (o[n] * s | 0) / s + " ";
                o.closed && (i += "z")
            }
            return i
        },
        M = function(e) {
            for (var t = [], r = e.length - 1, n = 0; --r > -1;) t[n++] = e[r],
                t[n++] = e[r + 1],
                r--;
            for (r = 0; n > r; r++) e[r] = t[r];
            e.reversed = e.reversed ? !1 : !0
        },
        C = function(e) {
            var t, r = e.length,
                n = 0,
                o = 0;
            for (t = 0; r > t; t++) n += e[t++],
                o += e[t];
            return [n / (r / 2), o / (r / 2)]
        },
        S = function(e) {
            var t, r, n, o = e.length,
                i = e[0],
                a = i,
                s = e[1],
                h = s;
            for (n = 6; o > n; n += 6) t = e[n],
                r = e[n + 1],
                t > i ? i = t: a > t && (a = t),
                r > s ? s = r: h > r && (h = r);
            return e.centerX = (i + a) / 2,
                e.centerY = (s + h) / 2,
                e.size = (i - a) * (s - h)
        },
        A = function(e) {
            for (var t, r, n, o, i, a = e.length,
                     s = e[0][0], h = s, l = e[0][1], f = l; --a > -1;) for (i = e[a], t = i.length, o = 6; t > o; o += 6) r = i[o],
                n = i[o + 1],
                r > s ? s = r: h > r && (h = r),
                n > l ? l = n: f > n && (f = n);
            return e.centerX = (s + h) / 2,
                e.centerY = (l + f) / 2,
                e.size = (s - h) * (l - f)
        },
        y = function(e, t) {
            return t.length - e.length
        },
        x = function(e, t) {
            var r = e.size || S(e),
                n = t.size || S(t);
            return Math.abs(n - r) < (r + n) / 20 ? t.centerX - e.centerX || t.centerY - e.centerY: n - r
        },
        w = function(e, t) {
            var r, n, o = e.slice(0),
                i = e.length,
                a = i - 2;
            for (t = 0 | t, r = 0; i > r; r++) n = (r + t) % a,
                e[r++] = o[n],
                e[r] = o[n + 1]
        },
        N = function(e, t, r, n, o) {
            var i, a, s, h, l = e.length,
                f = 0,
                g = l - 2;
            for (r *= 6, a = 0; l > a; a += 6) i = (a + r) % g,
                h = e[i] - (t[a] - n),
                s = e[i + 1] - (t[a + 1] - o),
                f += Math.sqrt(s * s + h * h);
            return f
        },
        z = function(e, t, r) {
            var n, o, i, a = e.length,
                s = C(e),
                h = C(t),
                l = h[0] - s[0],
                f = h[1] - s[1],
                g = N(e, t, 0, l, f),
                u = 0;
            for (i = 6; a > i; i += 6) o = N(e, t, i / 6, l, f),
            g > o && (g = o, u = i);
            if (r) for (n = e.slice(0), M(n), i = 6; a > i; i += 6) o = N(n, t, i / 6, l, f),
            g > o && (g = o, u = -i);
            return u / 6
        },
        _ = function(e, t, r) {
            for (var n, o, i, a, s, h, l = e.length,
                     f = 99999999999,
                     g = 0,
                     u = 0; --l > -1;) for (n = e[l], h = n.length, s = 0; h > s; s += 6) o = n[s] - t,
                i = n[s + 1] - r,
                a = Math.sqrt(o * o + i * i),
            f > a && (f = a, g = n[s], u = n[s + 1]);
            return [g, u]
        },
        P = function(e, t, r, n, o, i) {
            var a, s, h, l, f, g = t.length,
                u = 0,
                c = Math.min(e.size || S(e), t[r].size || S(t[r])) * n,
                p = 999999999999,
                d = e.centerX + o,
                m = e.centerY + i;
            for (s = r; g > s && (a = t[s].size || S(t[s]), c <= a); s++) h = t[s].centerX - d,
                l = t[s].centerY - m,
                f = Math.sqrt(h * h + l * l),
            p > f && (u = s, p = f);
            return f = t[u],
                t.splice(u, 1),
                f
        },
        T = function(e, t, r, n) {
            var o, i, a, s, h, l, f, g = t.length - e.length,
                u = g > 0 ? t: e,
                p = g > 0 ? e: t,
                d = 0,
                m = "complexity" === n ? y: x,
                b = "position" === n ? 0 : "number" == typeof n ? n: .8,
                C = p.length,
                N = "object" == typeof r && r.push ? r.slice(0) : [r],
                T = "reverse" === N[0] || N[0] < 0,
                L = "log" === r;
            if (p[0]) {
                if (u.length > 1 && (e.sort(m), t.sort(m), l = u.size || A(u), l = p.size || A(p), l = u.centerX - p.centerX, f = u.centerY - p.centerY, m === x)) for (C = 0; C < p.length; C++) u.splice(C, 0, P(p[C], u, C, b, l, f));
                if (g) for (0 > g && (g = -g), u[0].length > p[0].length && v(p[0], (u[0].length - p[0].length) / 6 | 0), C = p.length; g > d;) s = u[C].size || S(u[C]),
                    a = _(p, u[C].centerX, u[C].centerY),
                    s = a[0],
                    h = a[1],
                    p[C++] = [s, h, s, h, s, h, s, h],
                    p.totalPoints += 8,
                    d++;
                for (C = 0; C < e.length; C++) o = t[C],
                    i = e[C],
                    g = o.length - i.length,
                    0 > g ? v(o, -g / 6 | 0) : g > 0 && v(i, g / 6 | 0),
                T && !i.reversed && M(i),
                    r = N[C] || 0 === N[C] ? N[C] : "auto",
                r && (i.closed || Math.abs(i[0] - i[i.length - 2]) < .5 && Math.abs(i[1] - i[i.length - 1]) < .5 ? "auto" === r || "log" === r ? (N[C] = r = z(i, o, 0 === C), 0 > r && (T = !0, M(i), r = -r), w(i, 6 * r)) : "reverse" !== r && (C && 0 > r && M(i), w(i, 6 * (0 > r ? -r: r))) : !T && ("auto" === r && Math.abs(o[0] - i[0]) + Math.abs(o[1] - i[1]) + Math.abs(o[o.length - 2] - i[i.length - 2]) + Math.abs(o[o.length - 1] - i[i.length - 1]) > Math.abs(o[0] - i[i.length - 2]) + Math.abs(o[1] - i[i.length - 1]) + Math.abs(o[o.length - 2] - i[0]) + Math.abs(o[o.length - 1] - i[1]) || r % 2) ? (M(i), N[C] = -1, T = !0) : "auto" === r ? N[C] = 0 : "reverse" === r && (N[C] = -1), i.closed !== o.closed && (i.closed = o.closed = !1));
                return L && c("shapeIndex:[" + N.join(",") + "]"),
                    N
            }
        },
        L = function(e, t, r, n) {
            var o = m(e[0]),
                i = m(e[1]);
            T(o, i, t || 0 === t ? t: "auto", r) && (e[0] = b(o), e[1] = b(i), ("log" === n || n === !0) && c('precompile:["' + e[0] + '","' + e[1] + '"]'))
        },
        G = function(e, t, r) {
            return t || r || e || 0 === e ?
                function(n) {
                    L(n, e, t, r)
                }: L
        },
        q = function(e, t) {
            if (!t) return e;
            var r, o, i, a = e.match(n) || [],
                s = a.length,
                h = "";
            for ("reverse" === t ? (o = s - 1, r = -2) : (o = (2 * (parseInt(t, 10) || 0) + 1 + 100 * s) % s, r = 2), i = 0; s > i; i += 2) h += a[o - 1] + "," + a[o] + " ",
                o = (o + r) % s;
            return h
        },
        I = function(e, t) {
            var r, n, o, i, a, s, h, l = 0,
                f = parseFloat(e[0]),
                g = parseFloat(e[1]),
                u = f + "," + g + " ",
                c = .999999;
            for (o = e.length, r = .5 * t / (.5 * o - 1), n = 0; o - 2 > n; n += 2) {
                if (l += r, s = parseFloat(e[n + 2]), h = parseFloat(e[n + 3]), l > c) for (a = 1 / (Math.floor(l) + 1), i = 1; l > c;) u += (f + (s - f) * a * i).toFixed(2) + "," + (g + (h - g) * a * i).toFixed(2) + " ",
                    l--,
                    i++;
                u += s + "," + h + " ",
                    f = s,
                    g = h
            }
            return u
        },
        Y = function(e) {
            var t = e[0].match(n) || [],
                r = e[1].match(n) || [],
                o = r.length - t.length;
            o > 0 ? e[0] = I(t, o) : e[1] = I(r, -o)
        },
        B = function(e) {
            return isNaN(e) ? Y: function(t) {
                Y(t),
                    t[1] = q(t[1], parseInt(e, 10))
            }
        },
        X = function(e, t) {
            var r = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                n = Array.prototype.slice.call(e.attributes),
                o = n.length;
            for (t = "," + t + ","; --o > -1;) - 1 === t.indexOf("," + n[o].nodeName + ",") && r.setAttributeNS(null, n[o].nodeName, n[o].nodeValue);
            return r
        },
        V = function(e, t) {
            var r, o, i, a, s, h, l, f, g, u, c, p, d, m, v, b, M, C, S, A, y, x = e.tagName.toLowerCase(),
                w = .552284749831;
            return "path" !== x && e.getBBox ? (h = X(e, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), "rect" === x ? (a = +e.getAttribute("rx") || 0, s = +e.getAttribute("ry") || 0, o = +e.getAttribute("x") || 0, i = +e.getAttribute("y") || 0, u = ( + e.getAttribute("width") || 0) - 2 * a, c = ( + e.getAttribute("height") || 0) - 2 * s, a || s ? (p = o + a * (1 - w), d = o + a, m = d + u, v = m + a * w, b = m + a, M = i + s * (1 - w), C = i + s, S = C + c, A = S + s * w, y = S + s, r = "M" + b + "," + C + " V" + S + " C" + [b, A, v, y, m, y, m - (m - d) / 3, y, d + (m - d) / 3, y, d, y, p, y, o, A, o, S, o, S - (S - C) / 3, o, C + (S - C) / 3, o, C, o, M, p, i, d, i, d + (m - d) / 3, i, m - (m - d) / 3, i, m, i, v, i, b, M, b, C].join(",") + "z") : r = "M" + (o + u) + "," + i + " v" + c + " h" + -u + " v" + -c + " h" + u + "z") : "circle" === x || "ellipse" === x ? ("circle" === x ? (a = s = +e.getAttribute("r") || 0, f = a * w) : (a = +e.getAttribute("rx") || 0, s = +e.getAttribute("ry") || 0, f = s * w), o = +e.getAttribute("cx") || 0, i = +e.getAttribute("cy") || 0, l = a * w, r = "M" + (o + a) + "," + i + " C" + [o + a, i + f, o + l, i + s, o, i + s, o - l, i + s, o - a, i + f, o - a, i, o - a, i - f, o - l, i - s, o, i - s, o + l, i - s, o + a, i - f, o + a, i].join(",") + "z") : "line" === x ? r = "M" + e.getAttribute("x1") + "," + e.getAttribute("y1") + " L" + e.getAttribute("x2") + "," + e.getAttribute("y2") : ("polyline" === x || "polygon" === x) && (g = (e.getAttribute("points") + "").match(n) || [], o = g.shift(), i = g.shift(), r = "M" + o + "," + i + " L" + g.join(","), "polygon" === x && (r += "," + o + "," + i + "z")), h.setAttribute("d", r), t && e.parentNode && (e.parentNode.insertBefore(h, e), e.parentNode.removeChild(e)), h) : e
        },
        R = function(e, t, r) {
            var i, a, h = "string" == typeof e;
            return (!h || o.test(e) || (e.match(n) || []).length < 3) && (i = h ? s.selector(e) : e && e[0] ? e: [e], i && i[0] ? (i = i[0], a = i.nodeName.toUpperCase(), t && "PATH" !== a && (i = V(i, !1), a = "PATH"), e = i.getAttribute("PATH" === a ? "d": "points") || "", i === r && (e = i.getAttributeNS(null, "data-original") || e)) : (c("WARNING: invalid morph to: " + e), e = !1)),
                e
        },
        O = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
        F = _gsScope._gsDefine.plugin({
            propName: "morphSVG",
            API: 2,
            global: !0,
            version: "0.8.8",
            init: function(e, t, r, n) {
                var o, a, s, p, d;
                return "function" != typeof e.setAttribute ? !1 : u ? ("function" == typeof t && (t = t(n, e)), o = e.nodeName.toUpperCase(), d = "POLYLINE" === o || "POLYGON" === o, "PATH" === o || d ? (a = "PATH" === o ? "d": "points", ("string" == typeof t || t.getBBox || t[0]) && (t = {
                    shape: t
                }), p = R(t.shape || t.d || t.points || "", "d" === a, e), d && i.test(p) ? (c("WARNING: a <" + o + "> cannot accept path data. " + O), !1) : (p && (this._target = e, e.getAttributeNS(null, "data-original") || e.setAttributeNS(null, "data-original", e.getAttribute(a)), s = this._addTween(e, "setAttribute", e.getAttribute(a) + "", p + "", "morphSVG", !1, a, "object" == typeof t.precompile ?
                    function(e) {
                        e[0] = t.precompile[0],
                            e[1] = t.precompile[1]
                    }: "d" === a ? G(t.shapeIndex, t.map || F.defaultMap, t.precompile) : B(t.shapeIndex)), s && (this._overwriteProps.push("morphSVG"), s.end = p, s.endProp = a)), u)) : (c("WARNING: cannot morph a <" + o + "> SVG element. " + O), !1)) : (window.location.href = "http://" + f + g + "?plugin=" + l + "&source=" + h, !1)
            },
            set: function(e) {
                var t;
                if (this._super.setRatio.call(this, e), 1 === e) for (t = this._firstPT; t;) t.end && this._target.setAttribute(t.endProp, t.end),
                    t = t._next
            }
        });
    F.pathFilter = L,
        F.pointsFilter = Y,
        F.subdivideRawBezier = v,
        F.defaultMap = "size",
        F.pathDataToRawBezier = function(e) {
            return m(R(e, !0))
        },
        F.equalizeSegmentQuantity = T,
        F.convertToPath = function(e, t) {
            "string" == typeof e && (e = s.selector(e));
            for (var r = e && 0 !== e.length ? e.length && e[0] && e[0].nodeType ? Array.prototype.slice.call(e, 0) : [e] : [], n = r.length; --n > -1;) r[n] = V(r[n], t !== !1);
            return r
        },
        F.pathDataToBezier = function(e, t) {
            var r, n, o, i, a, h, l, f, g = m(R(e, !0))[0] || [],
                u = 0;
            if (t = t || {},
                f = t.align || t.relative, i = t.matrix || [1, 0, 0, 1, 0, 0], a = t.offsetX || 0, h = t.offsetY || 0, "relative" === f || f === !0 ? (a -= g[0] * i[0] + g[1] * i[2], h -= g[0] * i[1] + g[1] * i[3], u = "+=") : (a += i[4], h += i[5], f && (f = "string" == typeof f ? s.selector(f) : f && f[0] ? f: [f], f && f[0] && (l = f[0].getBBox() || {
                x: 0,
                y: 0
            },
                a -= l.x, h -= l.y))), r = [], o = g.length, i) for (n = 0; o > n; n += 2) r.push({
                x: u + (g[n] * i[0] + g[n + 1] * i[2] + a),
                y: u + (g[n] * i[1] + g[n + 1] * i[3] + h)
            });
            else for (n = 0; o > n; n += 2) r.push({
                x: u + (g[n] + a),
                y: u + (g[n + 1] + h)
            });
            return r
        }
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[e]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
    } ("MorphSVGPlugin");
