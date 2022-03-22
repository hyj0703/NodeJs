;(function (e) {
  function t(t) {
    var r = t[0]
    var a = t[1]
    var u = t[2]
    var l = t[3] || []
    var s,
      f,
      d = 0,
      m = []
    for (; d < r.length; d++) {
      f = r[d]
      if (Object.prototype.hasOwnProperty.call(o, f) && o[f]) m.push(o[f][0])
      o[f] = 0
    }
    for (s in a) if (Object.prototype.hasOwnProperty.call(a, s)) e[s] = a[s]
    if (v) v(t)
    c.push.apply(c, l)
    while (m.length) m.shift()()
    i.push.apply(i, u || [])
    return n()
  }
  function n() {
    var e
    for (var t = 0; t < i.length; t++) {
      var n = i[t]
      var r = true
      for (var a = 1; a < n.length; a++) {
        var s = n[a]
        if (0 !== o[s]) r = false
      }
      if (r) {
        i.splice(t--, 1)
        e = l((l.s = n[0]))
      }
    }
    if (0 === i.length) {
      c.forEach(function (e) {
        if (void 0 === o[e]) {
          o[e] = null
          var t = document.createElement('link')
          if (l.nc) t.setAttribute('nonce', l.nc)
          t.rel = 'prefetch'
          t.as = 'script'
          t.href = u(e)
          document.head.appendChild(t)
        }
      })
      c.length = 0
    }
    return e
  }
  var r = {}
  var a = {
    9: 0,
  }
  var o = {
    9: 0,
  }
  var i = [],
    c = []
  function u(e) {
    return (
      l.p +
      'common/' +
      ({
        13: 'ttwid_m',
        14: 'xgplayer',
        15: 'xgplayer_m',
      }[e] || e) +
      '.' +
      {
        13: '82af7a95',
        14: '67b8e0a4',
        15: 'b0ac70d3',
      }[e] +
      '.js'
    )
  }
  function l(t) {
    if (r[t]) return r[t].exports
    var n = (r[t] = {
      i: t,
      l: false,
      exports: {},
    })
    e[t].call(n.exports, n, n.exports, l)
    n.l = true
    return n.exports
  }
  l.e = function e(t) {
    var n = []
    if (!f || !f.prototype.then) {
      function r(e) {
        var t = this.constructor
        return this.then(
          function (n) {
            return t.resolve(e()).then(function () {
              return n
            })
          },
          function (n) {
            return t.resolve(e()).then(function () {
              return t.reject(n)
            })
          }
        )
      }
      var i = setTimeout
      function c() {}
      function s(e, t) {
        return function () {
          e.apply(t, arguments)
        }
      }
      function f(e) {
        if (!(this instanceof f))
          throw new TypeError('Promises must be constructed via new')
        if ('function' !== typeof e) throw new TypeError('not a function')
        this._state = 0
        this._handled = false
        this._value = void 0
        this._deferreds = []
        h(e, this)
      }
      function d(e, t) {
        while (3 === e._state) e = e._value
        if (0 === e._state) {
          e._deferreds.push(t)
          return
        }
        e._handled = true
        f._immediateFn(function () {
          var n = 1 === e._state ? t.onFulfilled : t.onRejected
          if (null === n) {
            ;(1 === e._state ? v : m)(t.promise, e._value)
            return
          }
          var r
          try {
            r = n(e._value)
          } catch (a) {
            m(t.promise, a)
            return
          }
          v(t.promise, r)
        })
      }
      function v(e, t) {
        try {
          if (t === e)
            throw new TypeError('A promise cannot be resolved with itself.')
          if (t && ('object' === typeof t || 'function' === typeof t)) {
            var n = t.then
            if (t instanceof f) {
              e._state = 3
              e._value = t
              p(e)
              return
            } else if ('function' === typeof n) {
              h(s(n, t), e)
              return
            }
          }
          e._state = 1
          e._value = t
          p(e)
        } catch (r) {
          m(e, r)
        }
      }
      function m(e, t) {
        e._state = 2
        e._value = t
        p(e)
      }
      function p(e) {
        if (2 === e._state && 0 === e._deferreds.length)
          f._immediateFn(function () {
            if (!e._handled) f._unhandledRejectionFn(e._value)
          })
        for (var t = 0, n = e._deferreds.length; t < n; t++)
          d(e, e._deferreds[t])
        e._deferreds = null
      }
      function b(e, t, n) {
        this.onFulfilled = 'function' === typeof e ? e : null
        this.onRejected = 'function' === typeof t ? t : null
        this.promise = n
      }
      function h(e, t) {
        var n = false
        try {
          e(
            function (e) {
              if (n) return
              n = true
              v(t, e)
            },
            function (e) {
              if (n) return
              n = true
              m(t, e)
            }
          )
        } catch (r) {
          if (n) return
          n = true
          m(t, r)
        }
      }
      f.prototype['catch'] = function (e) {
        return this.then(null, e)
      }
      f.prototype.then = function (e, t) {
        var n = new this.constructor(c)
        d(this, new b(e, t, n))
        return n
      }
      f.prototype['finally'] = r
      f.all = function (e) {
        return new f(function (t, n) {
          if (!e || 'undefined' === typeof e.length)
            throw new TypeError('Promise.all accepts an array')
          var r = Array.prototype.slice.call(e)
          if (0 === r.length) return t([])
          var a = r.length
          function o(e, i) {
            try {
              if (i && ('object' === typeof i || 'function' === typeof i)) {
                var c = i.then
                if ('function' === typeof c) {
                  c.call(
                    i,
                    function (t) {
                      o(e, t)
                    },
                    n
                  )
                  return
                }
              }
              r[e] = i
              if (0 === --a) t(r)
            } catch (u) {
              n(u)
            }
          }
          for (var i = 0; i < r.length; i++) o(i, r[i])
        })
      }
      f.resolve = function (e) {
        if (e && 'object' === typeof e && e.constructor === f) return e
        return new f(function (t) {
          t(e)
        })
      }
      f.reject = function (e) {
        return new f(function (t, n) {
          n(e)
        })
      }
      f.race = function (e) {
        return new f(function (t, n) {
          for (var r = 0, a = e.length; r < a; r++) e[r].then(t, n)
        })
      }
      f._immediateFn =
        ('function' === typeof setImmediate &&
          function (e) {
            setImmediate(e)
          }) ||
        function (e) {
          i(e, 0)
        }
      f._unhandledRejectionFn = function e(t) {
        if ('undefined' !== typeof console && console) void 0
      }
    }
    var g = {
      14: 1,
    }
    if (a[t]) n.push(a[t])
    else if (0 !== a[t] && g[t])
      n.push(
        (a[t] = new f(function (e, n) {
          var r =
            'common/' +
            ({
              13: 'ttwid_m',
              14: 'xgplayer',
              15: 'xgplayer_m',
            }[t] || t) +
            '.' +
            {
              13: '31d6cfe0',
              14: '29b700ea',
              15: '31d6cfe0',
            }[t] +
            '.css'
          var o = l.p + r
          var i = document.getElementsByTagName('link')
          for (var c = 0; c < i.length; c++) {
            var u = i[c]
            var s = u.getAttribute('data-href') || u.getAttribute('href')
            if ('stylesheet' === u.rel && (s === r || s === o)) return e()
          }
          var f = document.getElementsByTagName('style')
          for (var c = 0; c < f.length; c++) {
            var u = f[c]
            var s = u.getAttribute('data-href')
            if (s === r || s === o) return e()
          }
          var d = document.createElement('link')
          d.rel = 'stylesheet'
          d.type = 'text/css'
          d.onload = e
          d.onerror = function (e) {
            var r = (e && e.target && e.target.src) || o
            var i = new Error(
              'Loading CSS chunk ' + t + ' failed.\n(' + r + ')'
            )
            i.code = 'CSS_CHUNK_LOAD_FAILED'
            i.request = r
            delete a[t]
            d.parentNode.removeChild(d)
            n(i)
          }
          d.href = o
          var v = document.getElementsByTagName('head')[0]
          v.appendChild(d)
        }).then(function () {
          a[t] = 0
        }))
      )
    var _ = o[t]
    if (0 !== _)
      if (_) n.push(_[2])
      else {
        var y = new f(function (e, n) {
          _ = o[t] = [e, n]
        })
        n.push((_[2] = y))
        var w = document.createElement('script')
        var E
        w.charset = 'utf-8'
        w.timeout = 120
        if (l.nc) w.setAttribute('nonce', l.nc)
        w.src = u(t)
        var k = new Error()
        E = function (e) {
          w.onerror = w.onload = null
          clearTimeout(A)
          var n = o[t]
          if (0 !== n) {
            if (n) {
              var r = e && ('load' === e.type ? 'missing' : e.type)
              var a = e && e.target && e.target.src
              k.message =
                'Loading chunk ' + t + ' failed.\n(' + r + ': ' + a + ')'
              k.name = 'ChunkLoadError'
              k.type = r
              k.request = a
              n[1](k)
            }
            o[t] = void 0
          }
        }
        var A = setTimeout(function () {
          E({
            type: 'timeout',
            target: w,
          })
        }, 12e4)
        w.onerror = w.onload = E
        document.head.appendChild(w)
      }
    return f.all(n)
  }
  l.m = e
  l.c = r
  l.d = function (e, t, n) {
    if (!l.o(e, t))
      Object.defineProperty(e, t, {
        enumerable: true,
        get: n,
      })
  }
  l.r = function (e) {
    if ('undefined' !== typeof Symbol && Symbol.toStringTag)
      Object.defineProperty(e, Symbol.toStringTag, {
        value: 'Module',
      })
    Object.defineProperty(e, '__esModule', {
      value: true,
    })
  }
  l.t = function (e, t) {
    if (1 & t) e = l(e)
    if (8 & t) return e
    if (4 & t && 'object' === typeof e && e && e.__esModule) return e
    var n = Object.create(null)
    l.r(n)
    Object.defineProperty(n, 'default', {
      enumerable: true,
      value: e,
    })
    if (2 & t && 'string' != typeof e)
      for (var r in e)
        l.d(
          n,
          r,
          function (t) {
            return e[t]
          }.bind(null, r)
        )
    return n
  }
  l.n = function (e) {
    var t =
      e && e.__esModule
        ? function t() {
            return e['default']
          }
        : function t() {
            return e
          }
    l.d(t, 'a', t)
    return t
  }
  l.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }
  l.p = '//lf3-cdn2-tos.bytescm.com/toutiao/toutiao_web_pc/'
  l.oe = function (e) {
    void 0
    throw e
  }
  var s = (window['webpackJsonp'] = window['webpackJsonp'] || [])
  var f = s.push.bind(s)
  s.push = t
  s = s.slice()
  for (var d = 0; d < s.length; d++) t(s[d])
  var v = f
  var m = (function () {
    i.push([7, 0])
    return n()
  })()
  t([[], {}, 0, [15, 14]])
  return m
})({
  '026072270aed286a9aad': function (e, t, n) {},
  '028f84ba6d27e52aa246': function (e, t, n) {},
  '0faef3a5864b370ab140': function (e, t, n) {},
  '10130cfc2ba27a09b7e5': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return u
    })
    n.d(t, 'c', function () {
      return l
    })
    n.d(t, 'e', function () {
      return v
    })
    n.d(t, 'b', function () {
      return m
    })
    n.d(t, 'd', function () {
      return p
    })
    var r = n('be733e83b22a409848c9')
    var a = n.n(r)
    var o = n('be6323750fae7868d676')
    var i = n('cca19b4e684695ffc3da')
    var c = n.n(i)
    var u = {
      all: {
        key: 'all',
        category: '__all__',
        channelId: 0,
        name: '\u63a8\u8350',
      },
      hot: {
        key: 'hot',
        category: 'news_hot',
        channelId: 3189398996,
        name: '\u70ed\u70b9',
      },
      xigua: {
        key: 'xigua',
        category: 'xigua',
        channelId: -1,
        name: '\u897f\u74dc\u89c6\u9891',
        url: 'https://www.ixigua.com/',
      },
      finance: {
        key: 'finance',
        category: 'news_finance',
        channelId: 3189399007,
        name: '\u8d22\u7ecf',
      },
      tech: {
        key: 'tech',
        category: 'news_tech',
        channelId: 3189398999,
        name: '\u79d1\u6280',
      },
      entertainment: {
        key: 'entertainment',
        category: 'news_entertainment',
        channelId: 3189398972,
        name: '\u5a31\u4e50',
      },
      sports: {
        key: 'sports',
        category: 'news_sports',
        channelId: 3189398957,
        name: '\u4f53\u80b2',
      },
      dcd: {
        key: 'dcd',
        category: 'dcd',
        channelId: -1,
        name: '\u61c2\u8f66\u5e1d',
        url: 'https://www.dongchedi.com/?zt=tt_pc_home_channel',
      },
      live: {
        key: 'live',
        category: 'live',
        channelId: 94349530259,
        name: '\u76f4\u64ad',
        url: 'https://live.ixigua.com',
      },
      gallery: {
        key: 'gallery',
        category: '\u7ec4\u56fe',
        channelId: 5443492141,
        name: '\u56fe\u7247',
      },
      word: {
        key: 'word',
        category: 'news_world',
        channelId: 3189398968,
        name: '\u56fd\u9645',
      },
      digital: {
        key: 'digital',
        category: 'digital',
        channelId: 3189398981,
        name: '\u6570\u7801',
      },
      military: {
        key: 'military',
        category: 'news_military',
        channelId: 3189398960,
        name: '\u519b\u4e8b',
      },
      game: {
        key: 'game',
        category: 'news_game',
        channelId: 3189398995,
        name: '\u6e38\u620f',
      },
      history: {
        key: 'history',
        category: 'news_history',
        channelId: 3189398965,
        name: '\u5386\u53f2',
      },
      food: {
        key: 'food',
        category: 'news_food',
        channelId: 3189399002,
        name: '\u7f8e\u98df',
      },
      essay: {
        key: 'essay',
        category: 'news_essay',
        channelId: 3189399001,
        name: '\u7f8e\u6587',
      },
      regimen: {
        key: 'regimen',
        category: 'news_regimen',
        channelId: 3189398959,
        name: '\u517b\u751f',
      },
      travel: {
        key: 'travel',
        category: 'news_travel',
        channelId: 3189398983,
        name: '\u65c5\u6e38',
      },
      discovery: {
        key: 'discovery',
        category: 'news_discovery',
        channelId: 3189398978,
        name: '\u63a2\u7d22',
      },
      fashion: {
        key: 'fashion',
        category: 'news_fashion',
        channelId: 3189398984,
        name: '\u65f6\u5c1a',
      },
      baby: {
        key: 'baby',
        category: 'news_baby',
        channelId: 3189399004,
        name: '\u80b2\u513f',
      },
    }
    function l(e) {
      return a()(u).filter(function (t) {
        return t.channelId === e
      })[0]
    }
    var s = '__feed_out_channel_key'
    function f(e) {
      c.a.set(s, e, {
        expires: 365,
      })
    }
    function d(e, t) {
      var n = e
      if (t) {
        var r = n.more.some(function (e) {
          if (e === t) return true
          return false
        })
        if (r)
          return {
            default: n.default.map(function (e, r) {
              if (r === n.default.length - 1) return t
              return e
            }),
            more: n.more.map(function (e) {
              if (e === t) return n.default[n.default.length - 1]
              return e
            }),
          }
      }
      return n
    }
    function v(e, t) {
      var n = d(e, t)
      var r = {
        default: n.default.map(function (e) {
          return u[e]
        }),
        more: n.more.map(function (e) {
          return u[e]
        }),
      }
      return r
    }
    function m(e, t) {
      var n = {
        default: t.default.map(function (e) {
          return e.key
        }),
        more: t.more.map(function (e) {
          return e.key
        }),
      }
      var r = d(n, e)
      var a = v(r)
      f(e)
      return a
    }
    function p() {
      var e = Object(o['m'])()
      var t = u[e.channel || u.all.key] || u.all
      return t
    }
  },
  '131d74e95e8c5fcb4771': function (e, t, n) {
    e.exports = n.p + 'svgs/wenda_icon.0d6d1616.svg'
  },
  '167789bd516d2baf7295': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return o
    })
    n.d(t, 'c', function () {
      return c
    })
    n.d(t, 'b', function () {
      return u
    })
    var r = n('58f4bdab2bfbce271dc1')
    var a = n.n(r)
    var o = 'undefined' !== typeof window
    var i =
      o && /macintosh|mac os x/.test(window.navigator.userAgent.toLowerCase())
    var c =
      o &&
      (/localhost/.test(location.origin) ||
        /dev.eden.net/.test(location.origin))
    var u = function e() {
      if (!o) return false
      var t = window.navigator.userAgent
      var n = t.indexOf('MSIE ')
      if (n > -1) return !!a()(t.substring(n + 5, t.indexOf('.', n)), 10)
      var r = t.indexOf('Trident/')
      if (r > -1) {
        var i = t.indexOf('rv:')
        return !!a()(t.substring(i + 3, t.indexOf('.', i)), 10)
      }
      return false
    }
  },
  '18ead25236b2b90fe743': function (e, t, n) {},
  '1996c46f3c8a49327c94': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return r
    })
    var r = function e(t, n) {
      if (!t) {
        window.location.href =
          'https://sso.toutiao.com/login/' +
          '?service='.concat(window.encodeURIComponent(window.location.href))
        return false
      }
      n && n()
      return true
    }
  },
  '1b6e0af22b27be14137b': function (e, t, n) {},
  '1d5b1b50324e921422fc': function (e, t, n) {},
  '1d99b55e77b90fe5cc88': function (e, t, n) {},
  '1e57c421e41f48e4643f': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return o
    })
    n.d(t, 'b', function () {
      return i
    })
    var r = n('167789bd516d2baf7295')
    var a = n('be6323750fae7868d676')
    function o() {
      if (!r['a']) return
      var e = document.createElement('script')
      e.src =
        '//lf3-cdn-tos.bytescm.com/goofy/toutiao/toutiao_web_pc/wza/aria.js?appid=df8e29823e2f4c0822e3693ee653bfc5&__v=3'
      document.body.appendChild(e)
    }
    function i() {
      var e, t
      if (!r['a']) return false
      var n = Object(a['r'])(window.localStorage.getItem('aria') || '{}')
      return null === n || void 0 === n
        ? void 0
        : null === (e = n.df8e29823e2f4c0822e3693ee653bfc5) || void 0 === e
        ? void 0
        : null === (t = e.runtime) || void 0 === t
        ? void 0
        : t.status
    }
  },
  '2422758950d9f66b7423': function (e, t, n) {
    'use strict'
    n.d(t, 'f', function () {
      return r
    })
    n.d(t, 'g', function () {
      return a
    })
    n.d(t, 'h', function () {
      return o
    })
    n.d(t, 'a', function () {
      return i
    })
    n.d(t, 'c', function () {
      return c
    })
    n.d(t, 'e', function () {
      return l
    })
    n.d(t, 'd', function () {
      return s
    })
    n.d(t, 'b', function () {
      return f
    })
    var r = 24
    var a = 'toutiao_web'
    var o = {
      0: '//p3.toutiaoimg.com/origin/pgc-image/b13dded4c4e948e293e217f95e8565b4',
      1: '//p3.toutiaoimg.com/origin/pgc-image/49b94e2643784e93bee691e8752e5176',
      2: '//p3.toutiaoimg.com/origin/pgc-image/94241aec5d0e4ffcb5d8c3eda3b2abf6',
    }
    var i = {
      article: 'article',
      ugc: 'ugc',
      comment: 'comment',
      gallery: 'gallery',
    }
    var c = {
      article: 'tuwen_detail',
      gallery: 'tuwen_detail',
      ugc: 'weitoutiao_detail',
      comment: 'weitoutiao_detail',
    }
    var u = {
      news_hot: '\u70ed\u70b9',
      video: '\u89c6\u9891',
      news_image: '\u56fe\u96c6',
      essay_joke: '\u6bb5\u5b50',
      news_entertainment: '\u5a31\u4e50',
      news_tech: '\u79d1\u6280',
      news_sports: '\u4f53\u80b2',
      news_car: '\u6c7d\u8f66',
      news_finance: '\u8d22\u7ecf',
      funny: '\u641e\u7b11',
      news_military: '\u519b\u4e8b',
      news_world: '\u56fd\u9645',
      news_fashion: '\u65f6\u5c1a',
      news_travel: '\u65c5\u6e38',
      news_discovery: '\u63a2\u7d22',
      news_baby: '\u80b2\u513f',
      news_regimen: '\u517b\u751f',
      news_essay: '\u7f8e\u6587',
      news_game: '\u6e38\u620f',
      news_history: '\u5386\u53f2',
      news_food: '\u7f8e\u98df',
      medicine: '\u533b\u836f',
      news_health: '\u5065\u5eb7',
      news_home: '\u5bb6\u5c45',
    }
    var l = {
      DEFAULT: 200,
      ARTICLE: 206,
      WTT: 201,
      WENDA_QUESTION: 202,
      WENDA_ANSWER: 203,
      VIDEO: 207,
      SHORT_VIDEO: 208,
    }
    var s = [
      {
        icon: n('b3d627bf45117b33693e'),
        text: '\u5199\u6587\u7ae0',
        url: 'https://mp.toutiao.com/profile_v4/graphic/publish?from=toutiao_pc',
        position: 'tuwen',
      },
      {
        icon: n('305576e46300a8ac2ace'),
        text: '\u53d1\u5fae\u5934\u6761',
        url: 'https://mp.toutiao.com/profile_v4/weitoutiao/publish?from=toutiao_pc',
        position: 'weitoutiao',
      },
      {
        icon: n('131d74e95e8c5fcb4771'),
        text: '\u5199\u56de\u7b54',
        url: 'https://mp.toutiao.com/profile_v4/wenda/home/recommended?from=toutiao_pc',
        position: 'wenda',
      },
      {
        icon: n('54d78c4ccd85f964eb38'),
        text: '\u53d1\u89c6\u9891',
        url: 'https://mp.toutiao.com/profile_v4/xigua/upload-video?from=toutiao_pc',
        position: 'video',
      },
    ]
    var f = {
      USER: '0',
      MEDIA: '1',
      WEMEDIA: '2',
      GOV: '3',
      ADVERTISER: '4',
      ENTERPRISE: '5',
      ORGANIZATION: '6',
      NEWS_MEDIA: '7',
      CO_MEDIA: '8',
    }
  },
  '29db0d57f834912a092c': function (e, t, n) {},
  '302e7cd491a3c75c7a06': function (e, t, n) {},
  '305576e46300a8ac2ace': function (e, t, n) {
    e.exports = n.p + 'svgs/wtt_icon.0c5bb1de.svg'
  },
  '36091a6286193bdd62ec': function (e, t, n) {
    'use strict'
    n.d(t, 'b', function () {
      return d
    })
    n.d(t, 'a', function () {
      return v
    })
    var r = n('a0199d72cedba8967335')
    var a = n.n(r)
    var o = n('2e2e432f825443caa710')
    var i = n.n(o)
    var c = n('0d9dfce0e45672081850')
    var u = n.n(c)
    var l = n('be6323750fae7868d676')
    var s = 'log_from'
    function f() {
      return ''.concat(Math.random().toString(16).substr(2), '_').concat(u()())
    }
    function d(e, t) {
      if (!t) return e
      var n = f()
      var r = Object(l['q'])(e, i()({}, s, n))
      window.sessionStorage.setItem(n, a()(t))
      return r
    }
    function v() {
      var e = Object(l['m'])(s)
      var t = window.sessionStorage.getItem(e)
      if (t) {
        var n = Object(l['r'])(t)
        return n
      }
      return null
    }
  },
  '38c58096afa111fcdfd2': function (e, t, n) {
    'use strict'
    var r = n('b6196699b5f3c8d65fe7')
    var a = n.n(r)
    var o = n('be6c8b3ad4a3607621d1')
    var i = n.n(o)
    var c = n('69084d01d3449fc1bc27')
    var u = n.n(c)
    var l = n('36091a6286193bdd62ec')
    var s = function e(t) {
      var n = t.href,
        r = t.target,
        o = t.rel,
        c = t.logInfo,
        s = t.onClick,
        f = t.children,
        d = i()(t, ['href', 'target', 'rel', 'logInfo', 'onClick', 'children'])
      function v(e) {
        if (c) {
          e.preventDefault()
          var t = Object(l['b'])(n, c)
          window.open(t)
        }
        null === s || void 0 === s ? void 0 : s(e)
      }
      return u.a.createElement(
        'a',
        a()(
          {
            href: n,
            target: r,
            rel: o,
            onClick: v,
          },
          d
        ),
        f
      )
    }
    t['a'] = s
  },
  '3913995df42cd6165f91': function (e, t, n) {
    'use strict'
    var r = n('67b7230afda0f2d40a92')
    var a = n.n(r)
    var o = n('91e23d109ce8d2fa247c')
    var i = n.n(o)
    var c = n('5ee0eaa4845580757e29')
    var u = n.n(c)
    var l = n('69084d01d3449fc1bc27')
    var s = n.n(l)
    var f = n('4801e98867402f33e3f9')
    var d = n('be6323750fae7868d676')
    var v = n('be733e83b22a409848c9')
    var m = n.n(v)
    var p = n('4f62953806061e33549d')
    var b = n.n(p)
    var h = n('a2a762effdaf408569d9')
    var g = n.n(h)
    var _ = n('503842039fadac61275a')
    var y = n.n(_)
    var w = n('a99d8596674b8a971a00')
    function E(e) {
      return b()('//vas-lf-x.snssdk.com/video/urls/v/1/toutiao/mp4/'.concat(e))
    }
    function k(e) {
      return g()(e)
    }
    function A(e) {
      return j.apply(this, arguments)
    }
    function j() {
      j = i()(
        a.a.mark(function e(t) {
          var n, r, o, i
          return a.a.wrap(
            function e(a) {
              while (1)
                switch ((a.prev = a.next)) {
                  case 0:
                    n = E(t)
                    a.prev = 1
                    a.next = 4
                    return Object(w['a'])({
                      url: n,
                      adapter: y.a,
                    })
                  case 4:
                    r = a.sent
                    o = r.data
                    if (!(0 === o.code)) {
                      a.next = 10
                      break
                    }
                    i = o.data.video_list
                    if (!i) {
                      a.next = 10
                      break
                    }
                    return a.abrupt(
                      'return',
                      m()(i)
                        .map(function (e) {
                          var t = {
                            src: '',
                            definition: '',
                          }
                          var n = e.main_url || e.backup_url_1
                          if (n) {
                            t.src = g()(n).replace(/^http:/, '')
                            t.definition = e.definition
                          }
                          return t
                        })
                        .filter(function (e) {
                          return !!e.src
                        })
                    )
                  case 10:
                    a.next = 15
                    break
                  case 12:
                    a.prev = 12
                    a.t0 = a['catch'](1)
                    void 0
                  case 15:
                    return a.abrupt('return', null)
                  case 16:
                  case 'end':
                    return a.stop()
                }
            },
            e,
            null,
            [[1, 12]]
          )
        })
      )
      return j.apply(this, arguments)
    }
    var x = n('54b2d6dda1f17486c719')
    var O = null
    var C = function e(t) {
      var r = t.data,
        o = t.disableVideo,
        c = t.detailUrl,
        f = t.onClickToDetail,
        v = t.onPlay,
        m = t.onEnded,
        p = t.onHalfEnded,
        b = t.onReplay
      var h = Object(l['useState'])(false),
        g = u()(h, 2),
        _ = g[0],
        y = g[1]
      var w = Object(l['useRef'])(null)
      var E = Object(l['useRef'])(null)
      var k = Object(l['useRef'])(false)
      function j(e) {
        return C.apply(this, arguments)
      }
      function C() {
        C = i()(
          a.a.mark(function e(t) {
            var n
            return a.a.wrap(
              function e(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      t.prev = 0
                      t.next = 3
                      return A(r.videoId)
                    case 3:
                      n = t.sent
                      if (!n) {
                        t.next = 6
                        break
                      }
                      return t.abrupt('return', n[n.length - 1].src || '')
                    case 6:
                      t.next = 11
                      break
                    case 8:
                      t.prev = 8
                      t.t0 = t['catch'](0)
                      void 0
                    case 11:
                      return t.abrupt('return', '')
                    case 12:
                    case 'end':
                      return t.stop()
                  }
              },
              e,
              null,
              [[0, 8]]
            )
          })
        )
        return C.apply(this, arguments)
      }
      function I(e) {
        return S.apply(this, arguments)
      }
      function S() {
        S = i()(
          a.a.mark(function e(t) {
            var n
            return a.a.wrap(function e(t) {
              while (1)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!k.current) {
                      t.next = 2
                      break
                    }
                    return t.abrupt('return')
                  case 2:
                    k.current = true
                    t.next = 5
                    return j(r.videoId)
                  case 5:
                    n = t.sent
                    if (E.current && n) E.current.config.url = n
                    k.current = false
                  case 8:
                  case 'end':
                    return t.stop()
                }
            }, e)
          })
        )
        return S.apply(this, arguments)
      }
      function T() {
        return N.apply(this, arguments)
      }
      function N() {
        N = i()(
          a.a.mark(function e() {
            var t
            return a.a.wrap(function e(n) {
              while (1)
                switch ((n.prev = n.next)) {
                  case 0:
                    if (O) {
                      n.next = 2
                      break
                    }
                    return n.abrupt('return')
                  case 2:
                    n.next = 4
                    return j(r.videoId)
                  case 4:
                    t = n.sent
                    O.then(function (e) {
                      var n, a, o, i
                      E.current = new e.default({
                        el: w.current,
                        url: t,
                        width: '100%',
                        height: '100%',
                        autoplay: true,
                        volume: 0.3,
                        poster: r.cover,
                        ignores: ['loading'],
                      })
                      null === (n = E.current) || void 0 === n
                        ? void 0
                        : n.on('play', function () {
                            null === v || void 0 === v ? void 0 : v()
                            x['a'].emit.playVideo(r.videoId)
                          })
                      null === (a = E.current) || void 0 === a
                        ? void 0
                        : a.on('ended', function (e) {
                            null === m || void 0 === m
                              ? void 0
                              : m(
                                  null === e || void 0 === e
                                    ? void 0
                                    : e.logParams
                                )
                          })
                      null === (o = E.current) || void 0 === o
                        ? void 0
                        : o.on('replayBtnClick', function () {
                            null === b || void 0 === b ? void 0 : b()
                          })
                      null === (i = E.current) || void 0 === i
                        ? void 0
                        : i.on('error', I)
                    })
                  case 6:
                  case 'end':
                    return n.stop()
                }
            }, e)
          })
        )
        return N.apply(this, arguments)
      }
      function U() {
        if (o) {
          null === f || void 0 === f ? void 0 : f()
          window.open(c)
          return
        }
        y(true)
        T()
      }
      var D = Object(l['useCallback'])(
        function (e) {
          if (e !== r.videoId) {
            var t
            var n = E.current && !E.current.paused
            null === (t = E.current) || void 0 === t ? void 0 : t.pause()
            if (n) {
              var a
              null === p || void 0 === p
                ? void 0
                : p(
                    null === (a = E.current) || void 0 === a
                      ? void 0
                      : a.logParams
                  )
            }
          }
        },
        [r.videoId]
      )
      Object(l['useEffect'])(
        function () {
          if (o) return
          O = Promise.all([n.e(15), n.e(14)]).then(
            n.bind(null, '2b7b5a200444abd1a11b')
          )
        },
        [o]
      )
      Object(l['useEffect'])(
        function () {
          x['a'].on.playVideo(D)
          return function () {
            x['a'].off.playVideo(D)
          }
        },
        [D]
      )
      Object(l['useEffect'])(
        function () {
          return function () {
            if (E.current && !E.current.paused) {
              var e
              null === m || void 0 === m
                ? void 0
                : m(
                    null === (e = E.current) || void 0 === e
                      ? void 0
                      : e.logParams
                  )
            }
          }
        },
        [m]
      )
      return s.a.createElement(
        'div',
        {
          className: 'feed-card-video-player-wrapper',
        },
        !_ &&
          s.a.createElement(
            'div',
            {
              className: 'video-placeholder',
              onClick: U,
            },
            s.a.createElement('div', {
              className: 'cover',
              style: {
                backgroundImage: 'url('.concat(r.cover, ')'),
              },
            }),
            s.a.createElement('i', null),
            s.a.createElement(
              'span',
              {
                className: 'duration',
              },
              Object(d['g'])(r.duration)
            )
          ),
        s.a.createElement('div', {
          ref: w,
        })
      )
    }
    var I = (t['a'] = C)
  },
  '39b7a7dff0a3c3946bf2': function (e, t, n) {},
  '3c1e2970c75c2b3a9d2b': function (e, t, n) {},
  '3ce3cae18387fd3ef8b6': function (e, t) {
    e.exports =
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACgcHCAcGCggICAsKCgsOGBAODQ0OHRUWERgjHyUkIh8iISYrNy8mKTQpISIwQTE0OTs+Pj4lLkRJQzxINz0+O//bAEMBCgsLDg0OHBAQHDsoIig7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O//AABEIAHoAewMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAHAAUGBAMCAf/EAEAQAAECBAEFDQYGAgIDAAAAAAECAwAEBQYRFzaTsdEHEhYhMTQ1U1Vyc3SyExVBUVSiUnGRkqPSI4NhlEKBgv/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAAECBQb/xAA1EQABAwIBCQcDAwUAAAAAAAABAAIDBBEFEhMhMUFRYXHBBhQyYoGRoTM14SI00UJScqKx/9oADAMBAAIRAxEAPwC6rd8VqQrc5KMLZDbLykJxbxOAMcOUW4Osl9EIq7oznqXmF646retOauJh56XmGWg0oJIcx4+LH4COXlyF1gSvdNpqKOnbJKwAWGmy6sotwdZL6IRMotwdZL6IR25MKl9dK/dsiZMKl9dK/dsjdpuKBnMI8vt+FxZRbg6yX0QiZRbg6yX0QjtyYVL66V+7ZEyYVL66V+7ZEtNxUzmEeX2/C4sotwdZL6IRMotwdZL6IR25MKl9dK/dsiZMKl9dK/dsiWm4qZzCPL7fhcWUW4Osl9EImUW4Osl9EI7cmFS+ulfu2RMmFS+ulfu2RLTcVM5hHl9vwuLKLcHWS+iETKLcHWS+iEduTCpfXSv3bImTCpfXSv3bIlpuKmcwjy+34XFlFuDrJfRCJlFuDrJfRCO3JhUvrpX7tkV9asedolNcn3pphxCCAUoxx4zh8RFHPAXN1thwp7g1obc8F95Rbg6yX0QhVZUVsoWo8akgmAGH6X5s13Bqg9M5ziblczHKeKER5toF76vRC10Zz1LzC9cbTcv6NnvGTqjF3RnPUvML1xtNy/o2e8ZOqAw/W910MR+2Dk3oq2t3xWpCtzkowtkNsvKQnFvE4Axw5Rbg6yX0QirujOepeYXrjY0GxaPUaHKTj5mPavNhSt64AMf0igZHuIaVb2UNNTskljGkDZwVFlFuDrJfRCEqizbs9RZObfILrzKVqIGAxIiiyb0H8U1pRsjSSUo3ISTMozvvZsoCE744nAQ1CyRp/UVw8Qno5WAU7bG+6yNqhftclqlNMNrY3jTy0Jxa+AJAhFpMw5OUiSmnSPaPS7bi8BgMSkEwK1jpqe8w56jDNb+blM8m16BA6dzi43KbxeniigjcxoBP8I8m7/rrM4+0hxjeocUkYtDkBjxyi3B1kvohGvd3PKI88t1aprfLUVHBwcpOPyj5yb0H8U1pRsjObn3/ACitrMKsLx/CyWUW4Osl9EImUW4Osl9EIzTyA2+4hPIlRA/WE9nc6oa2ULJmsVJBP+QbIGzOv8J+U/VDD6UNMkY08FlcotwdZL6IRtN0DNGZ77fqEEULu6BmjM99v1CNxuLmPuUrXU8UNVT5toF3bOYRFD9L82a7g1QAw/S/Nmu4NUapdZQ+0OqP16IWujOepeYXrjabl/Rs94ydUYu6M56l5heuNpuX9Gz3jJ1QOH63umsR+2Dk3osXdGc9S8wvXHVJXpW6fJtSkvMIS00neoBaScBHLdGc9S8wvXG0oFkUWoUKTm5ht4uvN75W9cIGMYa1znkNR55qeKljNQ24sNl9izeUC4vqm9CnZEygXF9U3oU7IpqtLtydYnZZkENszDjaMTicAogRv6LY1EnqJJzb7bxceZSteDhAxIjTM682B+Vmp7hTRtkfGLHgEcPvLmX3H3DitxRWogYYknEw3W/m5TPJtegQLVBlEtUpphvEIaeWhOJ+AJAhpt/NymeTa9AglL4ikseIMEZGq/RHE3flwMzj7SJlsJQ4pI/wp5AfyjxygXF9U3oU7I27tgUF55bq2398tRUf8p5THzk7t/qn9KYmam3/ACsNrsLAF4v9Qidaitalq5VHEw+S/Nmu4NUAr6Qh9xCeRKiB+sPUvzZruDVF0msq+0Hhi9eiAYXd0DNGZ77fqEfGTu3+qf0pj73QM0Znvt+oRbY3MY66xUV8VXVQZu+h23iQiKH6X5s13BqgBh+l+bNdwaoql1lb7Q6o/Xoha6M56l5heuNpuX9Gz3jJ1Ri7oznqXmF642m5f0bPeMnVA4fre6axH7YOTeixd0Zz1LzC9cKtpZq07wRrjzmrOoE7NOzMxIb911RUtXtnBiT+SotZSUYkZRuVlkezZaG9QnEnAfmeOGIonMeXFcWvxCKop2RMBu22vlbehS4M46n5x31mF62M2Kb5ZGqOaYsy35qZdmHqfvnXVla1e2cGJJxJ4lRbysszJSzctLo3jTSQlCcScAP+TFxROY4kq8QxCKpgZGwG438uaD6x01PeYc9Rixl7zuCVlmpdmobxplAQhPsWzgkDADjTFdWOmp7zDnqMJNHsy35qiyMw9T9+69LNrWr2zgxJSCTxKhSNr3E5JsvQ1dRTwQsM7MoHVoB2cVi+Hdy9pfwN/wBYnDu5e0v4G/6xSzjaGp19tAwQhxSUjHkAMKNOsq3X6ZKvOU/fLcZQpR9s4MSQCf8Ayi48482DvlYq3UNK1rnxDTuaEUqUVrK1HEqOJMXyb5uRKQlNRwAGA/wN/wBYQuAltdm/zuf2icBLa7N/nc/tBBTyN1FKSYzQy2zkZNt4B6o+4d3L2l/A3/WN5ugZozPfb9Qj14CW12b/ADuf2jy3QM0Znvt+oQTIe1jso3SLqmlnqoO7sybO06ANo3Iih+l+bNdwaoAYfpfmzXcGqMUusprtDqj9eiFroznqXmF642m5f0bPeMnVGLujOepeYXrjabl/Rs94ydUDh+t7prEftg5N6Kjr9112Ur09LsVBaGm3lJQkJTxAH8or+GlxdpufsTshNmLVoU3MOTD9PQt11RUtRUrjJ/8AcefAy3ey2/3K2wQwS31/JSMeJ0DWAOi0gbgjbhpcXabn7E7InDS4u03P2J2RX1lluWrk+wykIbamXEISPgAogCEmg2pQpugyMw/Tm1uuMJUpRUrjJH5wJjZHmwK6lVJR00bZHRAg7gEWuurfeW84rfLcUVKPzJ4zFqxdtelpdthmorQ00kIQnep4gBgByQm8DLd7Lb/crbE4GW72W3+5W2NimkGopN+NUcgAfGTbeB/KHHFqdcU4s4qWSSfmTDnSOhpHy7fpECE6hLc9MNoGCUuqAHyGMN9I6GkfLt+kRdL4isY+QYoyOKKX7yuFEw4lNTcACyAN4n5/lC3JrU5JS7izipTaSo/MkQEzPOnu+rXDrT+jpbwUahF0riSblCxyGONkeQ0DXqFtyIuGlxdpufsTsjeXyoqst1SuMktEn/6EE0LN75kOf6tYjEbiWOudibr4Y46mnyGgfq2C20Imh+l+bNdwaoAYfpfmzXcGqN0usoHaHVH69ELXRnPUvML1xtNy/o2e8ZOqMXdGc9S8wvXG03L+jZ7xk6oHD9b3TWI/bByb0WduG4azLXDPss1KZbbQ+oJQlwgAYwjWy+7M25IvvuKcdW0CpajiSYJ7oznqXmF64VbSzVp3gjXBKckyFJYrGxtHEWgA6P8AiJbgzjqfnHfWY9WLnrcqwhhiovNtNpCUpBGAAjyuDOOp+cd9ZhJoFs0WaoEi+/TWXHHGEqWojjJw5YC1jnvIaurVVMNPTxulblA23buKP+F1wdqv/qIW6K85MUOQfeWVuOSza1qPKSUgkxy8Erf7KY/QxZssty7KGGkhDbaQlCRyAAYAQ3DG9hOUV5rEKynqGtETMm3AdEF1DpKa8ZfqMdzd011ltDbdTfShACUgEcQHJHDUOkprxl+owr021qG9S5R1ymMKWthClEjlJSMYTjY55s0r01bVQ08bDMzKvy6ohUoqUVKOJJxJi2RddebQlCKm+EpGAAI4hClwSt/spj9DE4JW/wBlMfoYKKaQaiue/G6R/jjJ5gIVhZvfMhz/AFaxBNCze+ZDn+rWIzF4Hckzif7mn/y6hE0P0vzZruDVADD9L82a7g1QSl1lJ9odUfr0QtdGc9S8wvXG03L+jZ7xk6oxd0Zz1LzC9cavc5qUhI0+cTNzsvLqU6CkOupQTxfDEwKI2lTmINLsNAAvob0WUujOepeYXrjwZrVVl2ktMVOcabQMEoQ+oAD/AIAMKTws2YeW887R3HFnFS1Otkk/Plj49hY/4qLpG9sbzBvcOCAzFGCNrHQuNgNiJXHFvOKddWpbiyVKUo4lRPKSY62q3VmGktM1ScbbQMEoRMLASPkADCf7Cx/xUXSN7YnsLH/FRdI3tisw4f1Bbdi0bhYwuPojLhBWu2J//sr2wx0RxbtApzrq1LWuVaUpSjiVEpGJJ+MVPsLH/FRdI3tixardCYZQy1VaehttISlKZhACQOIAccHiaWE3K5WI1AqWtEcRbbghqodJTXjL9RhtpHQ0j5dv0iKdTdlLWpa10ZSlHEkuN8Z/WLFuu0JptLbdWkEoQAlKRMowAHIOWKhjzZJJV4jVOq2Ma2Mi3BEsxXqymZdAq88AFkACZX8/zjy4QVrtif8A+yvbCcWbJUSSqjEk4klxvbH57Cx/xUXSN7YFmXf3LojE4QPoH2CIoWb3zIc/1axHp7Cx/wAVF0je2OK9qrS5m1n2JWoSjy98jettPJUcAofAGNCPIY65QZqs1dTDksIyXbeYRfD9L82a7g1QAw/S/Nmu4NUSl1lX2h1R+vRC10Zz1LzC9cVULc7S6e7PPOOSEstalklSmUkk/nhHh7npfZspoE7IXc3SV04Ku0TRk7AiuJCp7npfZspoE7Inuel9mymgTsislG755flFcSFT3PS+zZTQJ2RPc9L7NlNAnZEyVO+eX5RXEhU9z0vs2U0CdkT3PS+zZTQJ2RMlTvnl+UVxIVPc9L7NlNAnZE9z0vs2U0CdkTJU755flFcSFT3PS+zZTQJ2RPc9L7NlNAnZEyVO+eX5RXEhU9z0vs2U0CdkT3PS+zZTQJ2RMlTvnl+UVw/S/Nmu4NUZX3PS+zZTQJ2RrEABtIAwAENUwsSvP43NnQzRbX0X/9k='
  },
  '41e81a6b6b2e87160a0d': function (e, t, n) {
    'use strict'
    var r = n('69084d01d3449fc1bc27')
    var a = n.n(r)
    var o = n('be6323750fae7868d676')
    var i = n('fb622297466e7a637f99')
    var c = function e(t) {
      var n = Object(r['useRef'])(null)
      var c = Object(r['useRef'])(false)
      var u = Object(r['useCallback'])(
        Object(o['s'])(function () {
          if (!n.current) return
          var e = n.current.getBoundingClientRect().top
          var r = n.current.clientHeight
          var a = e - window.innerHeight
          if (a < -r) {
            if (!c.current) {
              Object(i['c'])(t.cell)
              c.current = true
            }
            window.removeEventListener('scroll', u)
          }
        }, 300),
        []
      )
      Object(r['useEffect'])(
        function () {
          window.addEventListener('scroll', u)
          return function () {
            window.removeEventListener('scroll', u)
          }
        },
        [u]
      )
      return a.a.cloneElement(t.children, {
        ref: n,
      })
    }
    t['a'] = c
  },
  '437c345b2a5779f983fd': function (e, t, n) {},
  '4459376f7bcc25f5262b': function (e, t, n) {},
  '467f8ddf0f7422983796': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return ca
    })
    var r = n('93bb9453334553ad78bb')
    var a = n.n(r)
    var o = n('67b7230afda0f2d40a92')
    var i = n.n(o)
    var c = n('91e23d109ce8d2fa247c')
    var u = n.n(c)
    var l = n('056dd54dadaa8f820dbe')
    var s = n.n(l)
    var f = n('768ba9cea7a0509ada36')
    var d = n.n(f)
    var v = n('aa2fb4f87afc8962f655')
    var m = n.n(v)
    var p = n('b66b65adbbdcfe0f4f3e')
    var b = n.n(p)
    var h = n('dba0de806d3803be2b0f')
    var g = n.n(h)
    var _ = n('69084d01d3449fc1bc27')
    var y = n.n(_)
    var w = n('7ecc01cf6c85b1ef1c34')
    var E = n('b146df89f85eeb19dada')
    var k = n('ad40a8aa22dad9b1213f')
    var A = n('6cf195ddfada1b0033e1')
    var j = n('4e16ef1abe038022cfb8')
    var x = n('be6323750fae7868d676')
    var O = n('ac9414e2d47df986f7f3')
    var C = n('5ee0eaa4845580757e29')
    var I = n.n(C)
    var S = n('a79cb04363dcc4858702')
    var T = n.n(S)
    var N = n('174811872339f1d02c40')
    var U = n.n(N)
    var D = n('d4dbca4e48dfe706de8d')
    var R = n('c9cd1e0339c82648866e')
    var L = n('8116b1c855dbba59c8a8')
    var P = function e(t) {
      var n = Object(_['useRef'])(false)
      var r = Object(_['useState'])(false),
        a = I()(r, 2),
        o = a[0],
        i = a[1]
      var c = Object(_['useCallback'])(function () {
        if (n.current) return
        n.current = true
        T()(function () {
          var e = window.scrollY || window.pageYOffset
          if (e > 0) i(true)
          else i(false)
          n.current = false
        })
      }, [])
      Object(_['useEffect'])(
        function () {
          window.addEventListener('scroll', c)
          return function () {
            window.removeEventListener('scroll', c)
          }
        },
        [c]
      )
      return y.a.createElement(D['a'], {
        className: U()('profile-header', {
          'no-scroll': !o,
        }),
        logParams: {
          page_name: t.logParams.page_name,
        },
        userInfo: t.userInfo,
      })
    }
    var M = Object(R['b'])(P)
    var F = n('020ba8dae3d3021d9966')
    var V = n.n(F)
    var K = n('2b4fba5b8716cb99e98e')
    var B = n.n(K)
    var W = n('bd61c3e57dc18e488613')
    var z = n.n(W)
    var H = n('8f4085b35f259db3270e')
    var Q = n.n(H)
    var q = n('92285e035e86b5e44a25')
    var G = n.n(q)
    var J = n('babc388b3bd2ae4e69b5')
    var Y = n.n(J)
    var Z = n('2e2e432f825443caa710')
    var X = n.n(Z)
    var $ = n('f379d8630b54b982148d')
    var ee = n('6eb445fd5003cfdfc689')
    var te = n('ba171699999e3c1cf739')
    var ne = n('cc225c8be7431245d3ca')
    var re = n('f497c1956dc2c7102505')
    var ae = n('ffefcdf7dd8e3bcb704c')
    var oe = n('04c233c55b3dbc9a7c1d')
    var ie = n('4c49014db78c8239e1c9')
    var ce = n('8baad6854b7235c2e103')
    var ue = n('0a85e9668458aebfdc91')
    var le = n('2810e53ad7174f3c046d')
    var se = n('29db0d57f834912a092c')
    var fe = n('abbf799a026c91d8612e')
    var de = n('1996c46f3c8a49327c94')
    var ve = n('98ad94a9d064c7351e07')
    var me = n('bd8ea4fd9e1bc4efca14')
    var pe = n('7f9308912c4b86f89747')
    function be(e, t, n, r, a, o, i) {
      try {
        var c = e[o](i)
        var u = c.value
      } catch (l) {
        n(l)
        return
      }
      if (c.done) t(u)
      else Promise.resolve(u).then(r, a)
    }
    function he(e) {
      return function () {
        var t = this,
          n = arguments
        return new Promise(function (r, a) {
          var o = e.apply(t, n)
          function i(e) {
            be(o, r, a, i, c, 'next', e)
          }
          function c(e) {
            be(o, r, a, i, c, 'throw', e)
          }
          i(void 0)
        })
      }
    }
    function ge(e, t) {
      return ke(e) || Ee(e, t) || ye(e, t) || _e()
    }
    function _e() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    }
    function ye(e, t) {
      if (!e) return
      if ('string' === typeof e) return we(e, t)
      var n = Object.prototype.toString.call(e).slice(8, -1)
      if ('Object' === n && e.constructor) n = e.constructor.name
      if ('Map' === n || 'Set' === n) return Array.from(e)
      if (
        'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return we(e, t)
    }
    function we(e, t) {
      if (null == t || t > e.length) t = e.length
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
      return r
    }
    function Ee(e, t) {
      if ('undefined' === typeof Symbol || !(Symbol.iterator in Object(e)))
        return
      var n = []
      var r = true
      var a = false
      var o = void 0
      try {
        for (
          var i = e[Symbol.iterator](), c;
          !(r = (c = i.next()).done);
          r = true
        ) {
          n.push(c.value)
          if (t && n.length === t) break
        }
      } catch (u) {
        a = true
        o = u
      } finally {
        try {
          if (!r && null != i['return']) i['return']()
        } finally {
          if (a) throw o
        }
      }
      return n
    }
    function ke(e) {
      if (Array.isArray(e)) return e
    }
    var Ae = function e(t) {
      var n = t.className,
        r = t.isFollowing,
        a = t.isFollowed,
        o = t.userId,
        i = t.loginUserInfo,
        c = t.onSuccess
      var u = Object(_['useState'])(false),
        l = ge(u, 2),
        s = l[0],
        f = l[1]
      var d = Object(_['useState'])(r),
        v = ge(d, 2),
        m = v[0],
        p = v[1]
      function b() {
        return h.apply(this, arguments)
      }
      function h() {
        h = he(
          regeneratorRuntime.mark(function e() {
            var t
            return regeneratorRuntime.wrap(
              function e(n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (Object(de['a'])(i)) {
                        n.next = 2
                        break
                      }
                      return n.abrupt('return')
                    case 2:
                      if (!s) {
                        n.next = 4
                        break
                      }
                      return n.abrupt('return')
                    case 4:
                      f(true)
                      n.prev = 5
                      t = null
                      if (!m) {
                        n.next = 14
                        break
                      }
                      Object(ve['a'])('unfollow_user', {
                        enter_from: Object(me['b'])('source'),
                        author_id: o,
                      })
                      n.next = 11
                      return fe['a'].relation.unfollowUser(o)
                    case 11:
                      t = n.sent
                      n.next = 18
                      break
                    case 14:
                      Object(ve['a'])('follow_user', {
                        enter_from: Object(me['b'])('source'),
                        author_id: o,
                      })
                      n.next = 17
                      return fe['a'].relation.followUser(o)
                    case 17:
                      t = n.sent
                    case 18:
                      if (
                        !(
                          'success' ===
                          (null === t || void 0 === t ? void 0 : t.data.message)
                        )
                      ) {
                        n.next = 23
                        break
                      }
                      p(!m)
                      f(false)
                      null === c || void 0 === c ? void 0 : c(!m)
                      return n.abrupt('return')
                    case 23:
                      throw new Error(
                        null === t || void 0 === t ? void 0 : t.data.message
                      )
                    case 26:
                      n.prev = 26
                      n.t0 = n['catch'](5)
                      pe['a'].info(
                        '\u64cd\u4f5c\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5'
                      )
                      void 0
                      f(false)
                    case 31:
                    case 'end':
                      return n.stop()
                  }
              },
              e,
              null,
              [[5, 26]]
            )
          })
        )
        return h.apply(this, arguments)
      }
      function g() {
        if (m) {
          if (a) return '\u4e92\u76f8\u5173\u6ce8'
          return '\u5df2\u5173\u6ce8'
        }
        return '\u5173\u6ce8'
      }
      return y.a.createElement(
        'button',
        {
          'aria-pressed': m,
          className: U()('ttp-user-subscribe', n, {
            following: m,
            followed: a,
          }),
          onClick: b,
        },
        s
          ? y.a.createElement('i', {
              className: 'loading-icon',
            })
          : y.a.createElement(
              y.a.Fragment,
              null,
              !m &&
                y.a.createElement('i', {
                  className: 'plus-icon',
                }),
              y.a.createElement('span', null, g())
            )
      )
    }
    var je = Ae
    var xe = n('c327dafe838ee24a5205')
    var Oe = n('2422758950d9f66b7423')
    var Ce = n('5704ef5558b67d65ccc1')
    var Ie = n('663529bce6ee6d8996f5')
    var Se = n('75bf50962692f2e139c7')
    var Te = n('b6196699b5f3c8d65fe7')
    var Ne = n.n(Te)
    var Ue = n('e06df67fb68d40eb8959')
    var De = n('3c1e2970c75c2b3a9d2b')
    var Re = n('d84b833f284337beaf9b')
    var Le = n('c0914cf85e1e6295f7dc')
    var Pe = function e(t) {
      var n = t.userInfo,
        r = t.isFollowing,
        a = t.isFollowed,
        o = t.loginUserInfo,
        i = t.onSubscribe
      var c = Object(_['useContext'])(k['a'])
      var u = (null === c || void 0 === c ? void 0 : c.isSelf)
        ? 'mine_home'
        : 'author_home'
      var l = n.uid !== (null === o || void 0 === o ? void 0 : o.userId)
      function s(e) {
        null === i || void 0 === i ? void 0 : i(e)
      }
      return y.a.createElement(
        'div',
        {
          className: 'relation-list-user',
        },
        y.a.createElement(
          'a',
          {
            className: 'user-info',
            href: '/c/user/token/'.concat(n.uid, '/?source=').concat(u),
            target: '_blank',
            rel: 'noopener',
          },
          y.a.createElement($['a'], {
            size: 'middle',
            url: n.avatarUrl,
            authType: n.authType,
          }),
          y.a.createElement(
            'div',
            {
              className: 'user-meta',
            },
            y.a.createElement(
              'span',
              {
                className: 'name',
              },
              n.name
            ),
            y.a.createElement(
              'p',
              {
                className: 'desc',
              },
              n.fansCount,
              '\u7c89\u4e1d ',
              n.authInfo && '\xb7 '.concat(n.authInfo)
            )
          )
        ),
        l &&
          y.a.createElement(je, {
            isFollowing: r,
            isFollowed: a,
            userId: n.uid,
            loginUserInfo: o,
            onSuccess: s,
          })
      )
    }
    var Me = Pe
    var Fe = function e(t) {
      return y.a.createElement(
        'button',
        {
          type: 'button',
          className: 'load-more-btn',
          onClick: t.onLoadMore,
        },
        y.a.createElement('span', null, t.children)
      )
    }
    var Ve = Fe
    function Ke(e) {
      return e.map(function (e) {
        var t = Object(x['r'])(e.user_auth_info || '{}')
        return {
          uid: e.user_id,
          name: e.name,
          avatarUrl: e.avatar_url,
          authType: t.auth_type,
          authInfo: t.auth_info,
          fansCount: e.fans,
          isFollowed: 'true' === e.is_followed,
          isFollowing: 'true' === e.is_following,
        }
      })
    }
    var Be = function e(t) {
      var n = Object(_['useState'])(false),
        r = I()(n, 2),
        a = r[0],
        o = r[1]
      var c = Object(_['useState'])(false),
        l = I()(c, 2),
        s = l[0],
        f = l[1]
      var d = Object(_['useState'])({
          cursor: 0,
          list: [],
        }),
        v = I()(d, 2),
        m = v[0],
        p = v[1]
      var b = Object(_['useState'])(0),
        h = I()(b, 2),
        g = h[0],
        w = h[1]
      function E(e) {
        return k.apply(this, arguments)
      }
      function k() {
        k = u()(
          i.a.mark(function e(n) {
            var r, a
            return i.a.wrap(
              function e(i) {
                while (1)
                  switch ((i.prev = i.next)) {
                    case 0:
                      i.prev = 0
                      o(true)
                      i.next = 4
                      return Ie['a'].relation.getFansList({
                        token: t.userId,
                        cursor: n || m.cursor,
                      })
                    case 4:
                      r = i.sent
                      if (!('success' === r.data.message)) {
                        i.next = 11
                        break
                      }
                      p({
                        cursor: r.data.data.cursor,
                        list: m.list.concat(
                          Ke(
                            (null === (a = r.data.data) || void 0 === a
                              ? void 0
                              : a.data) || []
                          )
                        ),
                      })
                      w(r.data.data.anonymous_fans || 0)
                      o(false)
                      f(r.data.data.has_more)
                      return i.abrupt('return')
                    case 11:
                      throw new Error(r.data.message)
                    case 14:
                      i.prev = 14
                      i.t0 = i['catch'](0)
                      o(false)
                      void 0
                      Re['a'].info(
                        '\u83b7\u53d6\u7c89\u4e1d\u5217\u8868\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5'
                      )
                    case 19:
                    case 'end':
                      return i.stop()
                  }
              },
              e,
              null,
              [[0, 14]]
            )
          })
        )
        return k.apply(this, arguments)
      }
      Object(_['useEffect'])(function () {
        E(0)
      }, [])
      function A() {
        if (a) return
        E(m.cursor)
      }
      return y.a.createElement(
        'div',
        null,
        y.a.createElement(
          'ul',
          null,
          m.list.map(function (e) {
            return y.a.createElement(
              'li',
              {
                key: e.uid,
              },
              y.a.createElement(Me, {
                userInfo: {
                  uid: e.uid,
                  name: e.name,
                  avatarUrl: e.avatarUrl,
                  authType: e.authType,
                  authInfo: e.authInfo,
                  fansCount: e.fansCount,
                },
                isFollowed: e.isFollowed,
                isFollowing: e.isFollowing,
                loginUserInfo: t.loginUserInfo,
                onSubscribe: t.onSubscribe,
              })
            )
          })
        ),
        !s &&
          !!g &&
          y.a.createElement(
            'p',
            {
              className: 'anonymous-count',
            },
            t.isSelf
              ? '\u8fd8\u6709'.concat(
                  g,
                  '\u4f4d\u6e38\u5ba2\u5173\u6ce8\u4e86\u4f60'
                )
              : '\u8fd8\u6709'.concat(
                  g,
                  '\u4f4d\u6e38\u5ba2\u5173\u6ce8\u4e86TA'
                )
          ),
        s &&
          y.a.createElement(
            Ve,
            {
              onLoadMore: A,
            },
            '\u67e5\u770b\u66f4\u591a\u7c89\u4e1d'
          ),
        !s &&
          !!m.list.length &&
          y.a.createElement(
            'p',
            {
              className: 'no-more',
            },
            '\u6682\u65e0\u66f4\u591a'
          )
      )
    }
    var We = Be
    function ze(e) {
      return e.map(function (e) {
        var t = Object(x['r'])(e.user_auth_info || '{}')
        return {
          uid: e.user_id,
          name: e.name,
          avatarUrl: e.avatar_url,
          authType: t.auth_type,
          authInfo: t.auth_info,
          fansCount: e.fans,
          isFollowed: 'true' === e.is_followed,
          isFollowing: 'true' === e.is_following,
        }
      })
    }
    var He = function e(t) {
      var n = Object(_['useState'])(false),
        r = I()(n, 2),
        a = r[0],
        o = r[1]
      var c = Object(_['useState'])(false),
        l = I()(c, 2),
        s = l[0],
        f = l[1]
      var d = Object(_['useState'])({
          cursor: 0,
          list: [],
        }),
        v = I()(d, 2),
        m = v[0],
        p = v[1]
      function b(e) {
        return h.apply(this, arguments)
      }
      function h() {
        h = u()(
          i.a.mark(function e(n) {
            var r, a
            return i.a.wrap(
              function e(i) {
                while (1)
                  switch ((i.prev = i.next)) {
                    case 0:
                      i.prev = 0
                      o(true)
                      i.next = 4
                      return Ie['a'].relation.getFollowingList({
                        token: t.userId,
                        cursor: n || m.cursor,
                      })
                    case 4:
                      r = i.sent
                      if (!('success' === r.data.message)) {
                        i.next = 10
                        break
                      }
                      p({
                        cursor: r.data.data.cursor,
                        list: m.list.concat(
                          ze(
                            (null === (a = r.data.data) || void 0 === a
                              ? void 0
                              : a.data) || []
                          )
                        ),
                      })
                      o(false)
                      f(r.data.data.has_more)
                      return i.abrupt('return')
                    case 10:
                      throw new Error(r.data.message)
                    case 13:
                      i.prev = 13
                      i.t0 = i['catch'](0)
                      o(false)
                      void 0
                      Re['a'].info(
                        '\u83b7\u53d6\u5173\u6ce8\u5217\u8868\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5'
                      )
                    case 18:
                    case 'end':
                      return i.stop()
                  }
              },
              e,
              null,
              [[0, 13]]
            )
          })
        )
        return h.apply(this, arguments)
      }
      Object(_['useEffect'])(function () {
        b(0)
      }, [])
      function g() {
        if (a) return
        b(m.cursor)
      }
      return y.a.createElement(
        'div',
        null,
        y.a.createElement(
          'ul',
          null,
          m.list.map(function (e) {
            return y.a.createElement(
              'li',
              {
                key: e.uid,
              },
              y.a.createElement(Me, {
                userInfo: {
                  uid: e.uid,
                  name: e.name,
                  avatarUrl: e.avatarUrl,
                  authType: e.authType,
                  authInfo: e.authInfo,
                  fansCount: e.fansCount,
                },
                isFollowed: e.isFollowed,
                isFollowing: e.isFollowing,
                loginUserInfo: t.loginUserInfo,
                onSubscribe: t.onSubscribe,
              })
            )
          })
        ),
        s &&
          y.a.createElement(
            Ve,
            {
              onLoadMore: g,
            },
            '\u67e5\u770b\u66f4\u591a\u5173\u6ce8'
          ),
        !s &&
          !!m.list.length &&
          y.a.createElement(
            'p',
            {
              className: 'no-more',
            },
            '\u5df2\u663e\u793a\u5168\u90e8\u5173\u6ce8\u7528\u6237'
          )
      )
    }
    var Qe = He
    var qe = function e(t) {
      var n = t.visible,
        r = t.activeTab,
        a = t.stat,
        o = t.loginUserInfo,
        i = t.userId,
        c = t.isSelf,
        u = t.onClose,
        l = t.onTabChange,
        s = t.onSubscribe
      function f(e) {
        if (e !== r) l(e)
      }
      function d(e, t) {
        var n = e.keyCode
        if (32 === n || 13 === n) {
          e.preventDefault()
          f(t)
        }
      }
      return y.a.createElement(
        Ue['a'],
        {
          className: 'relation-stat-list',
          title: y.a.createElement(
            'ul',
            {
              className: 'tabs',
            },
            y.a.createElement(
              'li',
              {
                role: 'tab',
                tabIndex: 0,
                'aria-selected': 'fans' === r,
                className: U()({
                  active: 'fans' === r,
                }),
                onClick: function e() {
                  return f('fans')
                },
                onKeyDown: function e(t) {
                  return d(t, 'fans')
                },
              },
              '\u7c89\u4e1d ',
              a.fans
            ),
            y.a.createElement(
              'li',
              {
                role: 'tab',
                tabIndex: 0,
                'aria-selected': 'following' === r,
                className: U()({
                  active: 'following' === r,
                }),
                onClick: function e() {
                  return f('following')
                },
                onKeyDown: function e(t) {
                  return d(t, 'following')
                },
              },
              '\u5173\u6ce8 ',
              a.following
            )
          ),
          visible: n,
          onClose: u,
        },
        y.a.createElement(
          'div',
          {
            className: 'list-wrapper',
          },
          'fans' === r &&
            y.a.createElement(We, {
              userId: i,
              loginUserInfo: o,
              isSelf: c,
              onSubscribe: s,
            }),
          'following' === r &&
            y.a.createElement(Qe, {
              userId: i,
              loginUserInfo: o,
              onSubscribe: s,
            })
        )
      )
    }
    var Ge = Object(R['b'])(function (e) {
      return y.a.createElement(w['a'], null, y.a.createElement(qe, Ne()({}, e)))
    })
    function Je(e, t) {
      var n = Y()(e)
      if (G.a) {
        var r = G()(e)
        if (t)
          r = r.filter(function (t) {
            return Q()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function Ye(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          Je(Object(n), true).forEach(function (t) {
            X()(e, t, n[t])
          })
        else if (z.a) B()(e, z()(n))
        else
          Je(Object(n)).forEach(function (t) {
            V()(e, t, Q()(n, t))
          })
      }
      return e
    }
    function Ze(e) {
      return ''.concat(e).replace(/[\u2E80-\u9FFF]+$/, function (e) {
        return e ? '<span class="unit">'.concat(e, '</span>') : ''
      })
    }
    var Xe = function e(t) {
      var n = Object(_['useState'])({
          fans: '0',
          following: '0',
          digg_count: '0',
        }),
        r = I()(n, 2),
        a = r[0],
        o = r[1]
      var i = Object(_['useState'])(false),
        c = I()(i, 2),
        u = c[0],
        l = c[1]
      var s = Object(_['useState'])(false),
        f = I()(s, 2),
        d = f[0],
        v = f[1]
      var m = Object(_['useState'])('fans'),
        p = I()(m, 2),
        b = p[0],
        h = p[1]
      Object(_['useEffect'])(
        function () {
          if (!t.uid) return
          Ie['a'].relation.getFansStat(t.uid).then(function (e) {
            o(e.data.data)
          })
        },
        [t.uid]
      )
      Object(_['useEffect'])(function () {
        var e = Object(x['m'])('tab')
        if (['fans', 'following'].indexOf(e) > -1) {
          h(e)
          v(true)
        }
      }, [])
      function g(e) {
        if (!t.isSelf || /[\u2E80-\u9FFF]+$/.test(a.following)) return
        var n = +a.following
        n = e ? n + 1 : n - 1
        o(
          Ye(
            Ye({}, a),
            {},
            {
              following: ''.concat(n),
            }
          )
        )
      }
      function w() {
        l(true)
      }
      function E() {
        l(false)
      }
      function k(e) {
        h(e)
        v(true)
      }
      function A() {
        v(false)
      }
      function j(e) {
        h(e)
      }
      return y.a.createElement(
        'div',
        {
          className: 'relation-stat',
        },
        y.a.createElement(
          'button',
          {
            type: 'button',
            className: 'stat-item',
            onClick: w,
          },
          y.a.createElement('span', {
            className: 'num',
            dangerouslySetInnerHTML: {
              __html: Ze(a.digg_count),
            },
          }),
          '\u83b7\u8d5e'
        ),
        y.a.createElement(
          'button',
          {
            type: 'button',
            className: 'stat-item',
            onClick: function e() {
              return k('fans')
            },
          },
          y.a.createElement('span', {
            className: 'num',
            dangerouslySetInnerHTML: {
              __html: Ze(a.fans),
            },
          }),
          '\u7c89\u4e1d'
        ),
        y.a.createElement(
          'button',
          {
            type: 'button',
            className: 'stat-item',
            onClick: function e() {
              return k('following')
            },
          },
          y.a.createElement('span', {
            className: 'num',
            dangerouslySetInnerHTML: {
              __html: Ze(a.following),
            },
          }),
          '\u5173\u6ce8'
        ),
        y.a.createElement(
          Se['a'],
          {
            className: 'like-count-modal',
            visible: u,
            onClose: E,
            footer: y.a.createElement(
              'button',
              {
                className: 'first-focus-el',
                type: 'button',
                onClick: E,
              },
              '\u6211\u77e5\u9053\u4e86'
            ),
          },
          y.a.createElement(
            'div',
            null,
            y.a.createElement(
              'p',
              {
                'aria-hidden': true,
              },
              t.userName
            ),
            y.a.createElement(
              'p',
              null,
              '\u5171\u83b7\u5f97',
              y.a.createElement('span', null, a.digg_count),
              '\u4e2a\u8d5e'
            ),
            y.a.createElement('i', {
              'aria-hidden': true,
              className: 'like-icon',
            })
          )
        ),
        y.a.createElement(Ge, {
          visible: d,
          activeTab: b,
          userId: t.uid,
          stat: {
            fans: a.fans,
            following: a.following,
          },
          loginUserInfo: t.loginUserInfo,
          isSelf: t.isSelf,
          onClose: A,
          onTabChange: j,
          onSubscribe: g,
        })
      )
    }
    var $e = Xe
    function et(e, t) {
      var n = Y()(e)
      if (G.a) {
        var r = G()(e)
        if (t)
          r = r.filter(function (t) {
            return Q()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function tt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          et(Object(n), true).forEach(function (t) {
            X()(e, t, n[t])
          })
        else if (z.a) B()(e, z()(n))
        else
          et(Object(n)).forEach(function (t) {
            V()(e, t, Q()(n, t))
          })
      }
      return e
    }
    var nt = function e(t) {
      var n, r
      var a = t.logParams
      var o = Object(_['useContext'])(k['a'])
      Object(_['useEffect'])(function () {
        if (!o) return
        var e = {
          enter_from: Object(x['m'])('source'),
          page_type: o.isSelf ? 'mine_home' : 'author_home',
          author_id: o.profileUserInfo.userId,
          is_following: o.relation.isFollowing ? 1 : 0,
          is_login: o.loginUserInfo ? 1 : 0,
        }
        Object(A['a'])('follow_user_show', tt({}, e))
        Object(A['a'])(
          'homepage_section_show',
          tt(
            tt({}, e),
            {},
            {
              section: 'homepage_info',
            }
          )
        )
      }, [])
      if (!o) return null
      var i = o.profileUserInfo
      var c = o.loginUserInfo
      var u =
        o.isSelf ||
        (null === (n = i.mediaInfo) || void 0 === n ? void 0 : n.type) !==
          Oe['b'].GOV
      return y.a.createElement(
        'div',
        {
          role: 'region',
          'aria-label': '\u4f5c\u8005\u4fe1\u606f',
          className: 'profile-info-wrapper',
        },
        y.a.createElement(
          'div',
          {
            className: 'profile-info-l',
          },
          y.a.createElement(
            'a',
            {
              className: 'avatar',
              href: '/c/user/token/'
                .concat(i.userId, '/?source=')
                .concat(a.page_name),
            },
            y.a.createElement($['a'], {
              url: i.avatarUrl,
              authType: i.authType,
            })
          ),
          y.a.createElement(
            'div',
            {
              className: 'detail',
            },
            y.a.createElement(
              'span',
              {
                className: 'name',
              },
              i.name
            ),
            u &&
              y.a.createElement($e, {
                uid: i.userId,
                userName: i.name,
                loginUserInfo: c,
                isSelf: o.isSelf,
              }),
            (null === (r = i.userAuthInfo) || void 0 === r
              ? void 0
              : r.auth_info) &&
              y.a.createElement(
                'p',
                {
                  className: 'user-auth-info',
                },
                y.a.createElement(
                  'span',
                  {
                    className: 'field',
                  },
                  '\u8ba4\u8bc1\uff1a'
                ),
                i.userAuthInfo.auth_info
              ),
            i.description &&
              y.a.createElement(
                'p',
                {
                  className: 'user-desc',
                },
                y.a.createElement(
                  'span',
                  {
                    className: 'field',
                  },
                  '\u7b80\u4ecb\uff1a'
                ),
                i.description
              )
          )
        ),
        y.a.createElement(
          'div',
          {
            className: 'profile-info-r',
          },
          !o.isSelf &&
            y.a.createElement(
              'div',
              {
                className: 'right-actions',
              },
              y.a.createElement(je, {
                className: 'profile-header-subscribe',
                isFollowing: o.relation.isFollowing,
                isFollowed: o.relation.isFollowed,
                userId: i.userId,
                loginUserInfo: o.loginUserInfo,
              })
            )
        )
      )
    }
    var rt = nt
    var at = n('0d9dfce0e45672081850')
    var ot = n.n(at)
    var it = n('ebc69a9d62eebb67413b')
    var ct = {
      all: {
        key: 'all',
        category: 'profile_all',
        show_name: '\u5168\u90e8',
      },
      article: {
        key: 'article',
        category: 'pc_profile_article',
        show_name: '\u6587\u7ae0',
      },
      video: {
        key: 'video',
        category: 'pc_profile_video',
        show_name: '\u89c6\u9891',
      },
      wenda: {
        key: 'wenda',
        category: 'profile_wenda',
        show_name: '\u95ee\u7b54',
      },
      wtt: {
        key: 'wtt',
        category: 'pc_profile_ugc',
        show_name: '\u5fae\u5934\u6761',
      },
      collection: {
        key: 'collection',
        category: 'profile_collection',
        show_name: '\u5408\u96c6',
      },
      fav: {
        key: 'fav',
        category: 'my_favorites',
        show_name: '\u6536\u85cf',
      },
      search: {
        key: 'search',
        category: '',
        show_name: '',
      },
    }
    var ut = n('be733e83b22a409848c9')
    var lt = n.n(ut)
    function st(e, t) {
      var n = Y()(e)
      if (G.a) {
        var r = G()(e)
        if (t)
          r = r.filter(function (t) {
            return Q()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function ft(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          st(Object(n), true).forEach(function (t) {
            X()(e, t, n[t])
          })
        else if (z.a) B()(e, z()(n))
        else
          st(Object(n)).forEach(function (t) {
            V()(e, t, Q()(n, t))
          })
      }
      return e
    }
    function dt(e) {
      var t = lt()(ct)
      return e.map(function (e) {
        var n
        return ft(
          ft({}, e),
          {},
          {
            key:
              null ===
                (n = t.filter(function (t) {
                  return t.category === e.category
                })[0]) || void 0 === n
                ? void 0
                : n.key,
          }
        )
      })
    }
    function vt(e, t) {
      var n = Y()(e)
      if (G.a) {
        var r = G()(e)
        if (t)
          r = r.filter(function (t) {
            return Q()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function mt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          vt(Object(n), true).forEach(function (t) {
            X()(e, t, n[t])
          })
        else if (z.a) B()(e, z()(n))
        else
          vt(Object(n)).forEach(function (t) {
            V()(e, t, Q()(n, t))
          })
      }
      return e
    }
    var pt = {
      ARTICLE: 'article',
      WTT: 'wtt',
      VIDEO: 'video',
      SHORT_VIDEO: 'short_video',
      WENDA: 'wenda',
      COLLECTION: 'collection',
    }
    var bt = {
      UGC: 'ugc',
      COMMENT: 'comment',
      WENDA_QUESTION: 'wenda_question',
      WENDA_ANSWER: 'wenda_answer',
    }
    function ht(e) {
      return e.map(function (e) {
        var t = e.group_id
        if (!t && 'string' === typeof e.id) t = e.id
        if (!t) t = e.id_str || Math.random().toString(16).substr(2)
        return mt(
          mt({}, e),
          {},
          {
            __uuid: t,
          }
        )
      })
    }
    function gt(e) {
      var t = e.cell_type
      if (0 === t) {
        if (e.has_video) return pt.VIDEO
        return pt.ARTICLE
      }
      if ([32, 56].indexOf(t) > -1) return pt.WTT
      if (48 === t) return pt.VIDEO
      if ([202, 203].indexOf(t) > -1) return pt.WENDA
      if (341 === t) return pt.COLLECTION
      if (49 === t) return pt.SHORT_VIDEO
      return pt.ARTICLE
    }
    function _t(e) {
      var t = []
      if (e.large_image_list && e.large_image_list.length)
        t = e.large_image_list
      else if (e.image_list && e.image_list.length) t = e.image_list
      else if (e.middle_image) t = [].concat(e.middle_image)
      return t.map(function (e) {
        return e.url.replace(/^http:/, '')
      })
    }
    function yt(e) {
      return 'https://www.toutiao.com/group/'.concat(e.group_id, '/')
    }
    function wt(e) {
      var t = e.user_info || e.user
      if (56 === e.cell_type) {
        var n, r
        t =
          null === (n = e.comment_base) || void 0 === n
            ? void 0
            : null === (r = n.user) || void 0 === r
            ? void 0
            : r.info
      }
      if (t)
        return {
          name: t.name,
          userSecToken: t.user_id,
          userAuthInfo:
            t.user_verified && Object(x['r'])(t.user_auth_info || '{}'),
        }
      return null
    }
    function Et(e, t) {
      var n = ht(e)
      return n.map(function (e) {
        return mt(
          mt({}, e),
          {},
          {
            __type: gt(e),
            __title: e.feed_title || e.title,
            __cover_urls: _t(e),
            __detail_url: yt(e),
            __user_info: wt(e),
            __tab_key: t,
          }
        )
      })
    }
    function kt(e, t, n) {
      if (!t)
        return n.map(function (e) {
          return mt(
            mt({}, e),
            {},
            {
              is_stick: t,
            }
          )
        })
      var r = n.filter(function (t) {
        return t.__uuid === e.__uuid
      })[0]
      if (!r) return n
      var a = n
        .map(function (e) {
          if (e.is_stick)
            return mt(
              mt({}, e),
              {},
              {
                is_stick: false,
              }
            )
          if (e.__uuid === r.__uuid) return null
          return e
        })
        .filter(Boolean)
      return [
        mt(
          mt({}, r),
          {},
          {
            is_stick: true,
          }
        ),
      ].concat(a)
    }
    function At(e, t, n) {
      return n.map(function (n) {
        if (n.__uuid === e.__uuid)
          return mt(
            mt({}, n),
            {},
            {
              digg_count: 1 === t ? ++n.digg_count : --n.digg_count,
              user_digg: t,
            }
          )
        return n
      })
    }
    function jt(e, t) {
      return t.filter(function (t) {
        return t.__uuid !== e.__uuid
      })
    }
    var xt = n('96f31318ffb574d3bbc2')
    var Ot = function e(t) {
      var n = t.onSubmit,
        r = t.onCancel
      var a = Object(_['useState'])(''),
        o = I()(a, 2),
        i = o[0],
        c = o[1]
      var u = Object(_['useRef'])(false)
      var l = !i.trim().length
      function s(e) {
        var t = e.target.value
        c(t)
      }
      function f() {
        var e = i.trim()
        if (!e.length) return
        n(e)
      }
      function d(e) {
        var t = e.key
        if ('Enter' === t && !u.current) f()
      }
      function v() {
        u.current = true
      }
      function m() {
        u.current = false
      }
      return y.a.createElement(
        'div',
        {
          className: 'profile-search-input',
        },
        y.a.createElement(
          'div',
          {
            className: 'input-wrapper',
          },
          y.a.createElement('input', {
            type: 'text',
            placeholder: '\u641c\u7d22 TA \u7684\u4f5c\u54c1',
            autoFocus: true,
            value: i,
            onChange: s,
            onKeyDown: d,
            onCompositionStart: v,
            onCompositionEnd: m,
          })
        ),
        y.a.createElement(
          'div',
          {
            className: 'search-actions',
          },
          y.a.createElement(
            'button',
            {
              type: 'button',
              className: U()('search-submit', {
                disable: l,
              }),
              disabled: l,
              onClick: f,
            },
            '\u641c\u7d22'
          ),
          y.a.createElement('div', {
            className: 'divide',
          }),
          y.a.createElement(
            'button',
            {
              type: 'button',
              className: 'search-cancel',
              onClick: r,
            },
            '\u53d6\u6d88'
          )
        )
      )
    }
    var Ct = Ot
    var It = function e(t) {
      var n = t.tabs,
        r = t.activeTabKey,
        a = t.onChange,
        o = t.onSearch,
        i = t.onCancelSearch
      var c = Object(_['useState'])(false),
        u = I()(c, 2),
        l = u[0],
        s = u[1]
      function f(e) {
        if (e !== r) {
          var t = e === ct.video.key ? 'latest_release' : ''
          a(e, t)
        }
      }
      function d(e, t) {
        var n = e.keyCode
        if (13 === n || 32 === n) {
          e.preventDefault()
          e.stopPropagation()
          f(t.key)
        }
      }
      function v() {
        s(true)
      }
      function m() {
        s(false)
        i()
      }
      function p(e) {
        o(e)
      }
      return y.a.createElement(
        'div',
        {
          className: 'profile-tabs-nav',
        },
        !l &&
          y.a.createElement(
            'ul',
            null,
            n.map(function (e) {
              return y.a.createElement(
                'li',
                {
                  tabIndex: 0,
                  role: 'tab',
                  'aria-label': e.show_name,
                  'aria-selected': r === e.key,
                  key: e.key,
                  className: U()({
                    active: r === e.key,
                  }),
                  onClick: function t() {
                    return f(e.key)
                  },
                  onKeyDown: function t(n) {
                    return d(n, e)
                  },
                },
                e.show_name
              )
            })
          ),
        l &&
          y.a.createElement(Ct, {
            onSubmit: p,
            onCancel: m,
          }),
        y.a.createElement('button', {
          'aria-label': '\u641c\u7d22',
          type: 'button',
          className: 'search-btn',
          style: {
            display: l ? 'none' : 'block',
          },
          onClick: v,
        })
      )
    }
    var St = It
    var Tt = n('4cd34af9804139d60939')
    var Nt = {
      toTopCell: x['b'],
      deleteCell: x['b'],
      updateLikeStatus: x['b'],
    }
    var Ut = y.a.createContext(Nt)
    var Dt = Ut
    var Rt = n('f9e7ab430b1eaeaf2713')
    var Lt = n('7d92094057582d9db023')
    var Pt = function e(t) {
      var n = Object(_['useRef'])(null)
      var r = Object(_['useRef'])(false)
      var a = Object(_['useCallback'])(
        Object(me['e'])(function () {
          if (!n.current) return
          var e = n.current.getBoundingClientRect()
          var o = e.top
          var i = e.height || n.current.clientHeight
          var c = o - window.innerHeight
          if (c < -i) {
            if (r.current) return
            t.onVisible(true)
            if (t.once) {
              r.current = true
              window.removeEventListener('scroll', a)
            }
          } else t.onVisible(false)
        }, 300),
        []
      )
      Object(_['useEffect'])(
        function () {
          window.addEventListener('scroll', a)
          a()
          return function () {
            window.removeEventListener('scroll', a)
          }
        },
        [a]
      )
      return y.a.cloneElement(t.children, {
        ref: n,
      })
    }
    var Mt = Pt
    var Ft = n('ec4896a27c0d90adc4f7')
    var Vt = n('ae17adf1c28fabf1305a')
    var Kt = n('53955f9dab771af04369')
    var Bt = n('5616f33a71e39794ee3e')
    var Wt = n('546ca7f10f62589ab9f4')
    var zt = n('d5c06b6cf3948fb34e9d')
    var Ht = n('5613e404f8159a52fc2b')
    var Qt = function e(t) {
      var n = t.className,
        r = t.children,
        a = t.onClick
      function o() {
        null === a || void 0 === a ? void 0 : a()
      }
      function i(e) {
        var t = e.keyCode
        if (32 === t || 13 === t) {
          e.preventDefault()
          o()
        }
      }
      return y.a.createElement(
        zt['a'].MenuItem,
        {
          onKeyDown: i,
        },
        y.a.createElement(
          'div',
          {
            className: U()('action-item', n),
            onClick: o,
          },
          r
        )
      )
    }
    var qt = Qt
    var Gt = n('86458b0d0c4daedfcb4f')
    var Jt = function e(t) {
      return y.a.createElement(
        qt,
        {
          className: 'report',
        },
        y.a.createElement(Gt['a'], {
          tabIndex: -1,
          groupId: t.groupId,
          source: t.source,
          webid: t.webid,
          from: 'web_profile_page',
          onModalOpen: t.onModalOpen,
          onModalClose: t.onModalClose,
        })
      )
    }
    var Yt = Jt
    var Zt = n('a5b25f8e99db71c1fcf2')
    var Xt = function e(t) {
      var n = Object(_['useState'])(t.isCollected),
        r = I()(n, 2),
        a = r[0],
        o = r[1]
      var c = Object(_['useRef'])(false)
      function l() {
        return s.apply(this, arguments)
      }
      function s() {
        s = u()(
          i.a.mark(function e() {
            var n, r, u, l
            return i.a.wrap(
              function e(i) {
                while (1)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (!(!Object(Zt['a'])(t.loginUserInfo) || c.current)) {
                        i.next = 2
                        break
                      }
                      return i.abrupt('return')
                    case 2:
                      i.prev = 2
                      c.current = true
                      u = null
                      if (!a) {
                        i.next = 11
                        break
                      }
                      i.next = 8
                      return Ie['a'].user.dislikeArticle(t.groupId, t.itemId)
                    case 8:
                      u = i.sent
                      i.next = 14
                      break
                    case 11:
                      i.next = 13
                      return Ie['a'].user.likeArticle(t.groupId, t.itemId)
                    case 13:
                      u = i.sent
                    case 14:
                      if (
                        !(
                          'success' ===
                          (null === (n = u) || void 0 === n
                            ? void 0
                            : n.data.message)
                        )
                      ) {
                        i.next = 20
                        break
                      }
                      Re['a'].info(
                        ''.concat(
                          a ? '\u53d6\u6d88\u6536\u85cf' : '\u6536\u85cf',
                          '\u6210\u529f'
                        )
                      )
                      o(!a)
                      null === (l = t.onChange) || void 0 === l
                        ? void 0
                        : l.call(t, !a)
                      c.current = false
                      return i.abrupt('return')
                    case 20:
                      throw new Error(
                        null === (r = u) || void 0 === r
                          ? void 0
                          : r.data.message
                      )
                    case 23:
                      i.prev = 23
                      i.t0 = i['catch'](2)
                      c.current = false
                      Re['a'].info(
                        '\u6536\u85cf\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5'
                      )
                      void 0
                    case 28:
                    case 'end':
                      return i.stop()
                  }
              },
              e,
              null,
              [[2, 23]]
            )
          })
        )
        return s.apply(this, arguments)
      }
      return y.a.createElement(
        qt,
        {
          onClick: l,
        },
        a ? '\u53d6\u6d88\u6536\u85cf' : '\u6536\u85cf'
      )
    }
    var $t = Xt
    var en = function e(t) {
      var n = Object(_['useRef'])(false)
      function r() {
        return a.apply(this, arguments)
      }
      function a() {
        a = u()(
          i.a.mark(function e() {
            var r, a, o, c, u
            return i.a.wrap(
              function e(i) {
                while (1)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (!n.current) {
                        i.next = 2
                        break
                      }
                      return i.abrupt('return')
                    case 2:
                      i.prev = 2
                      n.current = true
                      o = null
                      if (!(t.type === pt.VIDEO || t.type === pt.SHORT_VIDEO)) {
                        i.next = 11
                        break
                      }
                      i.next = 8
                      return Ie['a'].user.delUgcVideo(t.id)
                    case 8:
                      o = i.sent
                      i.next = 17
                      break
                    case 11:
                      if (!(t.type === pt.WTT)) {
                        i.next = 17
                        break
                      }
                      c = {
                        thread_id: t.id,
                      }
                      if (t.subType === bt.COMMENT)
                        c = {
                          comment_id: t.id,
                        }
                      i.next = 16
                      return Ie['a'].user.delUgcContent(c)
                    case 16:
                      o = i.sent
                    case 17:
                      if (
                        !(
                          'success' ===
                          (null === (r = o) || void 0 === r
                            ? void 0
                            : r.data.message)
                        )
                      ) {
                        i.next = 22
                        break
                      }
                      n.current = false
                      null === (u = t.onDelete) || void 0 === u
                        ? void 0
                        : u.call(t)
                      Re['a'].info('\u5df2\u5220\u9664')
                      return i.abrupt('return')
                    case 22:
                      throw new Error(
                        null === (a = o) || void 0 === a
                          ? void 0
                          : a.data.message
                      )
                    case 25:
                      i.prev = 25
                      i.t0 = i['catch'](2)
                      n.current = false
                      Re['a'].info(
                        '\u5220\u9664\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5'
                      )
                      void 0
                    case 30:
                    case 'end':
                      return i.stop()
                  }
              },
              e,
              null,
              [[2, 25]]
            )
          })
        )
        return a.apply(this, arguments)
      }
      function o() {
        if (window.confirm('\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f')) r()
      }
      return y.a.createElement(
        qt,
        {
          onClick: o,
        },
        '\u5220\u9664'
      )
    }
    var tn = en
    var nn = function e(t) {
      var n = t.isStick,
        r = t.itemId,
        a = t.onChange
      var o = Object(_['useRef'])(false)
      function c() {
        return l.apply(this, arguments)
      }
      function l() {
        l = u()(
          i.a.mark(function e() {
            var t
            return i.a.wrap(
              function e(i) {
                while (1)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (!o.current) {
                        i.next = 2
                        break
                      }
                      return i.abrupt('return')
                    case 2:
                      i.prev = 2
                      o.current = true
                      t = null
                      if (!n) {
                        i.next = 11
                        break
                      }
                      i.next = 8
                      return Ie['a'].profile.cancelTopItem(r)
                    case 8:
                      t = i.sent
                      i.next = 14
                      break
                    case 11:
                      i.next = 13
                      return Ie['a'].profile.toTopItem(r)
                    case 13:
                      t = i.sent
                    case 14:
                      if (!('success' === t.data.message)) {
                        i.next = 19
                        break
                      }
                      null === a || void 0 === a ? void 0 : a(!n)
                      o.current = false
                      Re['a'].info(
                        ''.concat(
                          n ? '\u53d6\u6d88\u7f6e\u9876' : '\u7f6e\u9876',
                          '\u6210\u529f'
                        )
                      )
                      return i.abrupt('return')
                    case 19:
                      throw new Error(t.data.message)
                    case 22:
                      i.prev = 22
                      i.t0 = i['catch'](2)
                      o.current = false
                      Re['a'].info(
                        '\u64cd\u4f5c\u5931\u8d25\uff0c \u8bf7\u7a0d\u540e\u91cd\u8bd5'
                      )
                      void 0
                    case 27:
                    case 'end':
                      return i.stop()
                  }
              },
              e,
              null,
              [[2, 22]]
            )
          })
        )
        return l.apply(this, arguments)
      }
      return y.a.createElement(
        qt,
        {
          onClick: c,
        },
        n ? '\u53d6\u6d88\u7f6e\u9876' : '\u7f6e\u9876'
      )
    }
    var rn = nn
    var an = function e(t) {
      var n = t.type,
        r = t.subType,
        a = t.activeTabKey,
        o = t.groupId,
        i = t.itemId,
        c = t.reportSource,
        u = t.isCollected,
        l = t.isStick,
        s = t.onStickStatusChange,
        f = t.onCollectStatusChange,
        d = t.onDelete
      var v = Object(_['useContext'])(k['a'])
      var m = Object(_['useRef'])(null)
      var p = Object(_['useRef'])(false)
      var b = Object(_['useState'])(null),
        h = I()(b, 2),
        g = h[0],
        w = h[1]
      var E = Object(_['useState'])(false),
        A = I()(E, 2),
        j = A[0],
        x = A[1]
      var O = null === v || void 0 === v ? void 0 : v.loginUserInfo
      var C = null === v || void 0 === v ? void 0 : v.isSelf
      var S = a === ct.fav.key
      var T = !S && [pt.WTT, pt.VIDEO, pt.SHORT_VIDEO].indexOf(n) > -1
      var N = !S && a !== ct.collection.key && a !== ct.wenda.key
      function D() {
        if (p.current) return
        var e = 'bottom'
        if (m.current) {
          var t = m.current.getBoundingClientRect()
          var n = window.innerHeight - t.top - 20
          if (n < 108 + 60) e = 'top'
        }
        w(e)
      }
      function R() {
        w(null)
      }
      function L() {
        p.current = true
        R()
        x(true)
      }
      function P() {
        p.current = false
        x(false)
      }
      var M = [
        n !== pt.COLLECTION &&
          y.a.createElement(Yt, {
            key: 'report',
            groupId: o,
            webid:
              (null === v || void 0 === v ? void 0 : v.identity.web_id) || '',
            source: c,
            onModalOpen: L,
            onModalClose: P,
          }),
        y.a.createElement($t, {
          key: 'collect',
          isCollected: u,
          groupId: o,
          itemId: i,
          loginUserInfo: O,
        }),
      ].filter(Boolean)
      if (C)
        M = [
          T &&
            y.a.createElement(tn, {
              key: 'delete',
              type: n,
              subType: r,
              id: t.itemId,
              onDelete: d,
            }),
          S &&
            y.a.createElement($t, {
              key: 'collect',
              isCollected: u,
              groupId: o,
              itemId: i,
              loginUserInfo: O,
              onChange: f,
            }),
          N &&
            y.a.createElement(rn, {
              key: 'toTop',
              itemId: i,
              isStick: l,
              onChange: s,
            }),
        ].filter(Boolean)
      if (!M.length) return null
      function F(e) {
        return Array.prototype.slice
          .call((null === e || void 0 === e ? void 0 : e.childNodes) || [])
          .map(function (e) {
            if (e.className.indexOf('report') > -1) return e.childNodes[0]
            return e
          })
          .filter(Boolean)
      }
      return y.a.createElement(
        zt['a'],
        {
          disable: j,
          onOpen: D,
          onClose: R,
          getListItems: F,
        },
        y.a.createElement(
          zt['a'].MenuButton,
          null,
          y.a.createElement(
            'div',
            {
              style: {
                display: 'inline-block',
              },
            },
            y.a.createElement(
              'div',
              {
                className: U()('profile-feed-card-tools-actions', {
                  'show-position-top': 'top' === g,
                  'show-position-bottom': 'bottom' === g,
                }),
                ref: m,
              },
              y.a.createElement('i', null),
              y.a.createElement(
                'div',
                {
                  className: 'actions-list-wrapper',
                },
                y.a.createElement(
                  zt['a'].MenuList,
                  null,
                  y.a.createElement(
                    'div',
                    {
                      className: 'actions-list',
                    },
                    M
                  )
                )
              )
            )
          )
        )
      )
    }
    var on = an
    var cn = n('026072270aed286a9aad')
    var un = function e(t) {
      return y.a.createElement(
        'div',
        {
          className: 'profile-feed-card-tools-text',
        },
        t.children
      )
    }
    var ln = un
    var sn = function e(t) {
      var n = t.data,
        r = t.logParams,
        a = t.onTopCell,
        o = t.onCollectStatusChange,
        i = t.onClickToDetail
      var c = Object(_['useState'])(false),
        u = I()(c, 2),
        l = u[0],
        s = u[1]
      function f() {
        s(true)
        i()
      }
      return y.a.createElement(
        'div',
        {
          className: U()('feed-card-wrapper feed-card-article-wrapper', {
            visited: l,
          }),
        },
        y.a.createElement(
          Kt['a'],
          Ne()({}, t, {
            logInfo: r,
            onClickToDetail: f,
            onDislike: x['b'],
            footer: y.a.createElement(Bt['a'], {
              leftTools: [
                n.isStick &&
                  y.a.createElement(Wt['f'], {
                    key: 'tag',
                    text: '\u7f6e\u9876',
                  }),
                y.a.createElement(
                  ln,
                  {
                    key: 'text',
                  },
                  Object(x['i'])(n.readCount),
                  '\u9605\u8bfb'
                ),
                y.a.createElement(Wt['b'], {
                  key: 'comment',
                  inside: 0 === n.articleType,
                  commentCount: n.commentCount,
                  articleUrl: n.articleUrl,
                  logInfo: r,
                  onClickToDetail: f,
                }),
                y.a.createElement(Wt['g'], {
                  key: 'time',
                  timestamp: n.timestamp,
                }),
              ],
              rightTools: [
                y.a.createElement(on, {
                  key: 'actions',
                  type: pt.ARTICLE,
                  activeTabKey: n.tabKey,
                  groupId: n.groupId,
                  itemId: n.itemId,
                  reportSource: Oe['e'].ARTICLE,
                  isCollected: n.isCollected,
                  isStick: n.isStick,
                  onStickStatusChange: a,
                  onCollectStatusChange: o,
                }),
              ],
            }),
          })
        )
      )
    }
    var fn = sn
    function dn(e, t) {
      var n = Y()(e)
      if (G.a) {
        var r = G()(e)
        if (t)
          r = r.filter(function (t) {
            return Q()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function vn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          dn(Object(n), true).forEach(function (t) {
            X()(e, t, n[t])
          })
        else if (z.a) B()(e, z()(n))
        else
          dn(Object(n)).forEach(function (t) {
            V()(e, t, Q()(n, t))
          })
      }
      return e
    }
    var mn = function e(t) {
      var n = t.cell,
        r = t.logParams,
        a = t.profileLogParams
      var o = Object(_['useContext'])(Dt)
      var i = {
        tabKey: n.__tab_key,
        groupId: n.group_id,
        itemId: n.item_id,
        articleType: n.article_type,
        title: n.__title,
        coverUrls: (n.__cover_urls || []).slice(0, 1),
        articleUrl:
          0 === n.article_type
            ? 'https://www.toutiao.com/a'.concat(n.group_id, '/')
            : n.__detail_url,
        userInfo: n.__user_info,
        source: n.source,
        commentCount: n.comment_count,
        timestamp: n.publish_time,
        isStick: n.is_stick,
        stickIndex: 0,
        stickStyle: -1,
        isCollected: !!n.user_repin,
        readCount: n.read_count,
      }
      function c(e) {
        o.toTopCell(n, e)
      }
      function u(e) {
        if (!e && n.__tab_key === ct.fav.key) o.deleteCell(n)
      }
      function l(e) {
        if (e)
          Object(A['a'])(
            'homepage_detail_show',
            vn(
              vn({}, a),
              {},
              {
                group_format: 'tuwen',
              }
            )
          )
      }
      function s() {
        Object(A['a'])(
          'homepage_detail_click',
          vn(
            vn({}, a),
            {},
            {
              group_format: 'tuwen',
            }
          )
        )
      }
      return y.a.createElement(
        Mt,
        {
          once: true,
          onVisible: l,
        },
        y.a.createElement(
          'div',
          {
            className: 'profile-article-card-wrapper',
          },
          y.a.createElement(fn, {
            data: i,
            logParams: r,
            onClickToDetail: s,
            onTopCell: c,
            onCollectStatusChange: u,
          })
        )
      )
    }
    var pn = mn
    var bn = n('ee65a21bd3f67b6172ab')
    var hn = n('7c4288154d94f45c1e67')
    var gn = n('b6051f0fa8998ea16e97')
    var _n = n('93fd3eb7060d3a0ca436')
    var yn = n('fc7745683e502800d3b7')
    var wn = n('b65c96faf0c123cf88e4')
    var En = n('38c58096afa111fcdfd2')
    function kn(e) {
      var t = e.user_info
      var n = Object(x['r'])(
        (null === t || void 0 === t ? void 0 : t.user_auth_info) || '{}'
      )
      return {
        groupId: e.group_id_str,
        itemId: e.item_id_str,
        userInfo: t && {
          uid: t.user_id,
          name: t.name,
          avatarUrl: t.avatar_url,
          authType: n.auth_type,
          authInfo: n.auth_info,
        },
        content: e.title,
        coverUrls: _t(e),
        articleUrl: 'https://www.toutiao.com/group/'.concat(
          e.group_id_str,
          '/'
        ),
        showOrigin: e.show_origin,
        showTips: e.show_tips,
      }
    }
    function An(e) {
      var t
      var n = e.raw_data
      var r = null === (t = n.user) || void 0 === t ? void 0 : t.info
      var a = Object(x['r'])(
        (null === r || void 0 === r ? void 0 : r.user_auth_info) || '{}'
      )
      return {
        groupId: n.group_id_str,
        itemId: n.item_id_str || n.item_id,
        userInfo: r && {
          uid: r.user_id,
          name: r.name,
          avatarUrl: r.avatar_url,
          authType: a.auth_type,
          authInfo: a.auth_info,
        },
        content: n.title,
        coverUrls: (n.thumb_image_list || [])
          .map(function (e) {
            var t
            return null === (t = e.url) || void 0 === t
              ? void 0
              : t.replace(/^http:/, '')
          })
          .filter(Boolean),
        articleUrl: 'https://www.toutiao.com/group/'.concat(
          n.group_id_str,
          '/'
        ),
        videoDuration: n.video.duration,
        showOrigin: e.show_origin,
        showTips: e.show_tips,
      }
    }
    function jn(e) {
      var t = e.user
      var n = Object(x['r'])(
        (null === t || void 0 === t ? void 0 : t.user_auth_info) || '{}'
      )
      return {
        groupId: e.thread_id_str,
        itemId: e.thread_id_str,
        userInfo: t && {
          uid: t.user_id,
          name: t.name,
          avatarUrl: t.avatar_url,
          authType: n.auth_type,
          authInfo: n.auth_info,
        },
        content: e.content,
        coverUrls: _t(e),
        articleUrl: e.share_url,
        showOrigin: e.show_origin,
        showTips: e.show_tips,
      }
    }
    var xn = function e(t) {
      var n
      var r = t.originGroup,
        a = t.originThread,
        o = t.originUgcVideo,
        i = t.logInfo
      var c = null
      if (r) c = kn(r)
      else if (a) c = jn(a)
      else if (o) c = An(o)
      var u = Object(_['useMemo'])(
        function () {
          var e, t
          if (!(null === (e = c) || void 0 === e ? void 0 : e.content)) {
            var n
            if (
              0 ===
                (null === (n = c) || void 0 === n ? void 0 : n.showOrigin) &&
              c.showTips
            )
              return c.showTips
          }
          return Object(_n['a'])(
            Object(x['c'])(
              (null === (t = c) || void 0 === t ? void 0 : t.content) || ''
            )
          )
        },
        [null === (n = c) || void 0 === n ? void 0 : n.content]
      )
      if (!c) return null
      var l = c.coverUrls.length
      function s() {
        void 0
      }
      return y.a.createElement(
        'div',
        {
          className: 'profile-feed-origin-card',
        },
        y.a.createElement(
          'div',
          {
            className: 'card-l',
          },
          c.userInfo &&
            y.a.createElement(
              'div',
              {
                className: 'user-info',
              },
              y.a.createElement(
                'a',
                {
                  href: '/c/user/token/'
                    .concat(c.userInfo.uid, '/?source=')
                    .concat(i.page_name),
                  target: '_blank',
                  rel: 'noopener',
                  title: c.userInfo.name,
                },
                y.a.createElement($['a'], {
                  url: c.userInfo.avatarUrl,
                }),
                y.a.createElement(
                  'span',
                  {
                    className: 'name',
                  },
                  c.userInfo.name
                ),
                c.userInfo.authType &&
                  y.a.createElement('i', {
                    className: 'auth-icon auth-'.concat(c.userInfo.authType),
                  })
              ),
              y.a.createElement(
                'span',
                {
                  className: 'auth-info',
                },
                c.userInfo.authInfo
              )
            ),
          y.a.createElement(
            'p',
            {
              className: 'origin-content',
            },
            c.content
              ? y.a.createElement(
                  En['a'],
                  {
                    href: c.articleUrl,
                    target: '_blank',
                    rel: 'noopener',
                    logInfo: i,
                    onClick: s,
                    dangerouslySetInnerHTML: {
                      __html: u,
                    },
                  },
                  null
                )
              : u
          )
        ),
        !!l &&
          y.a.createElement(
            'div',
            {
              className: 'card-r',
            },
            y.a.createElement(wn['a'], {
              cover: c.coverUrls[0],
              articleUrl: c.articleUrl,
              onClickToDetail: s,
            }),
            c.videoDuration &&
              y.a.createElement(
                'span',
                {
                  className: 'video-duration',
                },
                Object(x['g'])(c.videoDuration)
              )
          )
      )
    }
    var On = xn
    var Cn = function e() {}
    var In = function e(t) {
      var n = t.data,
        r = t.isSelf,
        a = t.loginUserInfo,
        o = t.logInfo,
        i = t.onShare,
        c = t.onClickToDetail,
        u = t.onLikeChange,
        l = t.onDelete,
        s = t.onTopCell,
        f = t.onCollectStatusChange
      var d = Object(_['useState'])(false),
        v = I()(d, 2),
        m = v[0],
        p = v[1]
      function b() {
        p(true)
        c()
      }
      return y.a.createElement(
        'div',
        {
          className: U()('feed-card-wrapper feed-card-wtt-wrapper', {
            visited: m,
          }),
        },
        y.a.createElement(
          gn['a'],
          Ne()({}, t, {
            disableSubscribe: true,
            origin: y.a.createElement(On, {
              originGroup: n.originGroup,
              originThread: n.originThread,
              originUgcVideo: n.originUgcVideo,
              logInfo: o,
            }),
            footer: y.a.createElement(Bt['a'], {
              leftTools: [
                n.isStick &&
                  y.a.createElement(Wt['f'], {
                    key: 'tag',
                    text: '\u7f6e\u9876',
                  }),
                y.a.createElement(Wt['e'], {
                  key: 'share',
                  articleUrl: n.articleUrl,
                  onSuccess: i,
                }),
                y.a.createElement(Wt['b'], {
                  key: 'comment',
                  styleType: '2',
                  commentCount: n.commentCount,
                  articleUrl: n.articleUrl,
                  logInfo: o,
                  onClickToDetail: b,
                }),
                y.a.createElement(Wt['d'], {
                  key: 'like',
                  groupId: n.groupId,
                  likeCount: n.likeCount,
                  isLiked: !!n.userDigg,
                  loginUserInfo: a,
                  onLikeChange: u,
                }),
              ],
              rightTools: [
                !!n.showCount &&
                  r &&
                  y.a.createElement(
                    ln,
                    {
                      key: 'text',
                    },
                    ''
                      .concat(Object(x['i'])(n.showCount))
                      .concat(n.showText || '\u5c55\u73b0')
                  ),
                y.a.createElement(on, {
                  key: 'actions',
                  type: pt.WTT,
                  subType: n.subType,
                  activeTabKey: n.tabKey,
                  groupId: n.groupId,
                  itemId: n.itemId,
                  reportSource: Oe['e'].ARTICLE,
                  isCollected: n.isCollected,
                  isStick: n.isStick,
                  onDelete: l,
                  onStickStatusChange: s,
                  onCollectStatusChange: f,
                }),
              ],
            }),
            onClickToDetail: b,
            onDislike: Cn,
            onSubscribe: Cn,
          })
        )
      )
    }
    var Sn = In
    function Tn(e, t) {
      var n = Y()(e)
      if (G.a) {
        var r = G()(e)
        if (t)
          r = r.filter(function (t) {
            return Q()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function Nn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          Tn(Object(n), true).forEach(function (t) {
            X()(e, t, n[t])
          })
        else if (z.a) B()(e, z()(n))
        else
          Tn(Object(n)).forEach(function (t) {
            V()(e, t, Q()(n, t))
          })
      }
      return e
    }
    var Un = function e(t) {
      var n = t.cell,
        r = t.logParams,
        a = t.profileLogParams
      var o = Object(_['useContext'])(k['a'])
      var i = Object(_['useContext'])(Dt)
      var c = null
      if (56 === n.cell_type) {
        var u, l, s, f, d, v, m, p
        c = {
          subType: bt.COMMENT,
          groupId: n.id_str,
          itemId: n.id_str,
          userInfo: Nn(
            Nn({}, n.__user_info),
            {},
            {
              avatarUrl:
                null === (u = n.comment_base) || void 0 === u
                  ? void 0
                  : null === (l = u.user) || void 0 === l
                  ? void 0
                  : null === (s = l.info) || void 0 === s
                  ? void 0
                  : s.avatar_url,
              isFollow: !!(null === (f = n.comment_base) || void 0 === f
                ? void 0
                : null === (d = f.user) || void 0 === d
                ? void 0
                : null === (v = d.relation) || void 0 === v
                ? void 0
                : v.is_following),
            }
          ),
          showSubscribe: false,
          commentCount: n.comment_count,
          userDigg: n.user_digg,
          likeCount: n.digg_count,
          timestamp:
            null === (m = n.comment_base) || void 0 === m
              ? void 0
              : m.create_time,
          content:
            null === (p = n.comment_base) || void 0 === p ? void 0 : p.content,
          articleUrl: 'https://www.toutiao.com/group/'.concat(n.id_str, '/'),
          coverUrls: [],
          isCollected: !!n.user_repin,
          isStick: n.is_stick,
          showCount: n.show_count,
          showText: n.show_text,
          tabKey: n.__tab_key,
          originGroup: n.origin_group,
          originThread: n.origin_thread,
          originUgcVideo: n.origin_ugc_video,
        }
      } else {
        var b, h
        c = {
          subType: bt.UGC,
          groupId: n.id,
          itemId: n.id,
          userInfo: Nn(
            Nn({}, n.__user_info),
            {},
            {
              avatarUrl:
                null === (b = n.user) || void 0 === b ? void 0 : b.avatar_url,
              isFollow: !!(null === (h = n.user) || void 0 === h
                ? void 0
                : h.is_following),
            }
          ),
          showSubscribe: false,
          commentCount: n.comment_count,
          userDigg: n.user_digg,
          likeCount: n.digg_count,
          timestamp: n.publish_time,
          content: n.content,
          articleUrl: 'https://www.toutiao.com/w/a'.concat(n.id, '/'),
          coverUrls: (n.__cover_urls || []).slice(0, 1),
          isCollected: !!n.user_repin,
          isStick: n.is_stick,
          showCount: n.show_count,
          showText: n.show_text,
          tabKey: n.__tab_key,
          originGroup: null,
          originThread: null,
          originUgcVideo: null,
        }
      }
      function g() {
        i.deleteCell(n)
      }
      function w(e) {
        i.toTopCell(n, e)
      }
      function E(e) {
        i.updateLikeStatus(n, e)
      }
      function j(e) {
        if (!e && n.__tab_key === ct.fav.key) i.deleteCell(n)
      }
      function O(e) {
        if (e) {
          var t
          Object(A['a'])(
            'homepage_detail_show',
            Nn(
              Nn({}, a),
              {},
              {
                group_id: null === (t = c) || void 0 === t ? void 0 : t.groupId,
                group_format: 'wtt',
              }
            )
          )
        }
      }
      function C() {
        var e
        Object(A['a'])(
          'homepage_detail_click',
          Nn(
            Nn({}, a),
            {},
            {
              group_id: null === (e = c) || void 0 === e ? void 0 : e.groupId,
              group_format: 'wtt',
            }
          )
        )
      }
      return y.a.createElement(
        Mt,
        {
          once: true,
          onVisible: O,
        },
        y.a.createElement(
          'div',
          {
            className: 'profile-wtt-card-wrapper',
          },
          y.a.createElement(Sn, {
            data: c,
            isSelf: !!(null === o || void 0 === o ? void 0 : o.isSelf),
            loginUserInfo:
              null === o || void 0 === o ? void 0 : o.loginUserInfo,
            logInfo: r,
            onClickToDetail: C,
            onLikeChange: E,
            onShare: x['b'],
            onDelete: g,
            onTopCell: w,
            onCollectStatusChange: j,
          })
        )
      )
    }
    var Dn = Un
    var Rn = n('1d99b55e77b90fe5cc88')
    var Ln = n('91ccd34fe1d322fa1c32')
    var Pn = n('7ff40e675dfee032084a')
    var Mn = function e(t) {
      var n = t.data,
        r = t.cardType,
        a = t.reportType,
        o = t.logParams,
        i = t.onClickToDetail,
        c = t.onDelete,
        u = t.onTopCell,
        l = t.onCollectStatusChange
      var s = Object(_['useState'])(false),
        f = I()(s, 2),
        d = f[0],
        v = f[1]
      function m() {
        v(true)
        i()
      }
      return y.a.createElement(
        'div',
        {
          className: U()('profile-normal-video-card', {
            visited: d,
          }),
        },
        y.a.createElement(Pn['a'], {
          data: n,
          logParams: o,
          footer: y.a.createElement(Bt['a'], {
            leftTools: [
              n.isStick &&
                y.a.createElement(Wt['f'], {
                  key: 'tag',
                  text: '\u7f6e\u9876',
                }),
              y.a.createElement(
                ln,
                {
                  key: 'text',
                },
                Object(x['i'])(n.playCount),
                '\u64ad\u653e'
              ),
              y.a.createElement(Wt['b'], {
                key: 'comment',
                commentCount: n.commentCount,
                articleUrl: n.detailUrl,
                inside: false,
                onClickToDetail: m,
              }),
              y.a.createElement(Wt['g'], {
                key: 'time',
                timestamp: n.timestamp,
              }),
            ],
            rightTools: [
              y.a.createElement(on, {
                key: 'actions',
                type: r || pt.VIDEO,
                activeTabKey: n.tabKey,
                groupId: n.groupId,
                itemId: n.groupId,
                isCollected: n.isCollected,
                isStick: n.isStick,
                reportSource: a || Oe['e'].VIDEO,
                onDelete: c,
                onStickStatusChange: u,
                onCollectStatusChange: l,
              }),
            ],
          }),
          onDislike: x['b'],
          onClickToDetail: m,
        })
      )
    }
    var Fn = Mn
    function Vn(e, t) {
      var n = Y()(e)
      if (G.a) {
        var r = G()(e)
        if (t)
          r = r.filter(function (t) {
            return Q()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function Kn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          Vn(Object(n), true).forEach(function (t) {
            X()(e, t, n[t])
          })
        else if (z.a) B()(e, z()(n))
        else
          Vn(Object(n)).forEach(function (t) {
            V()(e, t, Q()(n, t))
          })
      }
      return e
    }
    var Bn = function e(t) {
      var n
      var r = t.cell,
        a = t.logParams,
        o = t.profileLogParams
      var i = Object(_['useContext'])(Dt)
      var c = {
        title: r.__title,
        cover: Object(Ln['c'])(r),
        duration: r.video_duration,
        videoId: r.video_id,
        groupId: r.group_id,
        itemId: r.item_id,
        detailUrl: 'https://www.ixigua.com/i'.concat(r.group_id, '/'),
        userInfo: r.user_info && {
          name: r.user_info.name,
          userSecToken: r.user_info.user_id,
        },
        source: r.source,
        commentCount: r.comment_count,
        timestamp: r.publish_time,
        isCollected: !!r.user_repin,
        isStick: r.is_stick,
        playCount:
          null === (n = r.video_detail_info) || void 0 === n
            ? void 0
            : n.video_watch_count,
        tabKey: r.__tab_key,
      }
      function u() {
        i.deleteCell(r)
      }
      function l(e) {
        i.toTopCell(r, e)
      }
      function s(e) {
        if (!e && r.__tab_key === ct.fav.key) i.deleteCell(r)
      }
      function f(e) {
        if (e)
          Object(A['a'])(
            'homepage_detail_show',
            Kn(
              Kn({}, o),
              {},
              {
                group_format: 'video',
              }
            )
          )
      }
      function d() {
        Object(A['a'])(
          'homepage_detail_click',
          Kn(
            Kn({}, o),
            {},
            {
              group_format: 'video',
            }
          )
        )
      }
      return y.a.createElement(
        Mt,
        {
          once: true,
          onVisible: f,
        },
        y.a.createElement(
          'div',
          {
            className: 'profile-normal-video-card-wrapper',
          },
          y.a.createElement(Fn, {
            data: c,
            logParams: a,
            onClickToDetail: d,
            onDelete: u,
            onTopCell: l,
            onCollectStatusChange: s,
          })
        )
      )
    }
    var Wn = Bn
    function zn(e, t) {
      var n = Y()(e)
      if (G.a) {
        var r = G()(e)
        if (t)
          r = r.filter(function (t) {
            return Q()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function Hn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          zn(Object(n), true).forEach(function (t) {
            X()(e, t, n[t])
          })
        else if (z.a) B()(e, z()(n))
        else
          zn(Object(n)).forEach(function (t) {
            V()(e, t, Q()(n, t))
          })
      }
      return e
    }
    var Qn = function e(t) {
      var n, r, a, o
      var i = t.cell,
        c = t.logParams,
        u = t.profileLogParams
      var l = Object(_['useContext'])(Dt)
      var s = i.video || {}
      var f = i.user
      var d = {
        title: i.__title || '[\u65e0\u6587\u5b57]',
        cover: Object(Ln['c'])(i),
        duration: s.duration,
        videoId: s.video_id,
        groupId: i.group_id,
        itemId: i.item_id,
        detailUrl: 'https://www.ixigua.com/i'.concat(i.group_id, '/'),
        userInfo: f && {
          name: null === (n = f.info) || void 0 === n ? void 0 : n.name,
          userSecToken:
            null === (r = f.info) || void 0 === r ? void 0 : r.user_id,
        },
        source: i.source,
        commentCount:
          null === (a = i.action) || void 0 === a ? void 0 : a.comment_count,
        timestamp: i.publish_time,
        isCollected: !!i.user_repin,
        isStick: i.is_stick,
        playCount:
          null === (o = i.action) || void 0 === o ? void 0 : o.play_count,
        tabKey: i.__tab_key,
      }
      function v() {
        l.deleteCell(i)
      }
      function m(e) {
        l.toTopCell(i, e)
      }
      function p(e) {
        if (!e && i.__tab_key === ct.fav.key) l.deleteCell(i)
      }
      function b(e) {
        if (e)
          Object(A['a'])(
            'homepage_detail_show',
            Hn(
              Hn({}, u),
              {},
              {
                group_format: 'video',
              }
            )
          )
      }
      function h() {
        Object(A['a'])(
          'homepage_detail_click',
          Hn(
            Hn({}, u),
            {},
            {
              group_format: 'video',
            }
          )
        )
      }
      return y.a.createElement(
        Mt,
        {
          once: true,
          onVisible: b,
        },
        y.a.createElement(
          'div',
          {
            className: 'profile-normal-video-card-wrapper',
          },
          y.a.createElement(Fn, {
            data: d,
            cardType: pt.SHORT_VIDEO,
            reportType: Oe['e'].SHORT_VIDEO,
            logParams: c,
            onClickToDetail: h,
            onDelete: v,
            onTopCell: m,
            onCollectStatusChange: p,
          })
        )
      )
    }
    var qn = Qn
    var Gn = n('a50a2e38c375b9405e8f')
    var Jn = function e(t) {
      var n
      var r = t.data,
        a = t.isSelf,
        o = t.logParams,
        i = t.onCollectStatusChange,
        c = t.onClickToDetail
      var u = Object(_['useState'])(false),
        l = I()(u, 2),
        s = l[0],
        f = l[1]
      var d = null === (n = r.coverUrls) || void 0 === n ? void 0 : n.length
      function v() {
        f(true)
        c()
      }
      return y.a.createElement(
        'div',
        {
          className: U()('profile-wenda-card', {
            visited: s,
            'single-cover': !!d,
          }),
        },
        y.a.createElement(
          'div',
          {
            className: 'user-info',
          },
          y.a.createElement(
            'a',
            {
              href: '/c/user/token/'
                .concat(r.userInfo.uid, '/?source=')
                .concat(o.page_name),
              target: '_blank',
              rel: 'noopener',
            },
            y.a.createElement($['a'], {
              url: r.userInfo.avatarUrl,
              authType: r.userInfo.authType,
            }),
            y.a.createElement(
              'span',
              {
                className: 'name',
              },
              r.userInfo.name
            )
          ),
          y.a.createElement(
            'p',
            null,
            r.type === bt.WENDA_QUESTION ? '\u63d0\u51fa' : '\u56de\u7b54',
            '\u4e86\u95ee\u9898'
          )
        ),
        y.a.createElement(
          'a',
          {
            className: 'title',
            href: r.detailUrl,
            target: '_blank',
            rel: 'noopener',
            onClick: v,
          },
          y.a.createElement('h2', null, r.title)
        ),
        y.a.createElement(
          'div',
          {
            className: 'body',
          },
          y.a.createElement(
            'div',
            {
              className: 'wenda-l',
            },
            r.type === bt.WENDA_ANSWER &&
              y.a.createElement(
                'a',
                {
                  href: r.detailUrl,
                  target: '_blank',
                  rel: 'noopener',
                  onClick: v,
                },
                y.a.createElement(
                  'p',
                  {
                    className: 'answer-content',
                  },
                  r.answer || '[\u65e0\u6587\u5b57]'
                )
              ),
            y.a.createElement(Bt['a'], {
              leftTools: [
                r.isStick &&
                  y.a.createElement(Wt['f'], {
                    key: 'tag',
                    text: '\u7f6e\u9876',
                  }),
                r.type === bt.WENDA_QUESTION &&
                  r.questionStat &&
                  y.a.createElement(
                    ln,
                    {
                      key: 'ans_count',
                    },
                    ''.concat(
                      Object(x['i'])(r.questionStat.answerCount),
                      '\u56de\u7b54'
                    )
                  ),
                r.type === bt.WENDA_QUESTION &&
                  r.questionStat &&
                  y.a.createElement(
                    ln,
                    {
                      key: 'read_count',
                    },
                    ''
                      .concat(Object(x['i'])(r.questionStat.showCount))
                      .concat(r.questionStat.showText)
                  ),
                r.type === bt.WENDA_ANSWER &&
                  r.answerStat &&
                  a &&
                  y.a.createElement(
                    ln,
                    {
                      key: 'show_count',
                    },
                    ''
                      .concat(Object(x['i'])(r.answerStat.showCount))
                      .concat(r.answerStat.showText)
                  ),
                y.a.createElement(Wt['g'], {
                  key: 'time',
                  timestamp: r.timestamp,
                }),
              ],
              rightTools: [
                y.a.createElement(on, {
                  key: 'actions',
                  type: pt.WENDA,
                  activeTabKey: r.tabKey,
                  groupId: r.groupId,
                  itemId: r.itemId,
                  isCollected: r.isCollected,
                  isStick: r.isStick,
                  reportSource:
                    r.type === bt.WENDA_QUESTION
                      ? Oe['e'].WENDA_QUESTION
                      : Oe['e'].WENDA_ANSWER,
                  onCollectStatusChange: i,
                }),
              ],
            })
          ),
          !!d &&
            y.a.createElement(
              'div',
              {
                className: 'wenda-r',
              },
              y.a.createElement(wn['a'], {
                cover: r.coverUrls[0],
                articleUrl: r.detailUrl,
                onClickToDetail: v,
              })
            )
        )
      )
    }
    var Yn = Jn
    function Zn(e, t) {
      var n = Y()(e)
      if (G.a) {
        var r = G()(e)
        if (t)
          r = r.filter(function (t) {
            return Q()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function Xn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          Zn(Object(n), true).forEach(function (t) {
            X()(e, t, n[t])
          })
        else if (z.a) B()(e, z()(n))
        else
          Zn(Object(n)).forEach(function (t) {
            V()(e, t, Q()(n, t))
          })
      }
      return e
    }
    function $n(e) {
      if (!e) return []
      var t = e.large_image_list || e.origin_image_list
      if (t)
        return t
          .map(function (e) {
            var t
            return null === (t = e.url) || void 0 === t
              ? void 0
              : t.replace(/^http:/, '')
          })
          .filter(Boolean)
      return []
    }
    var er = function e(t) {
      var n = t.cell,
        r = t.logParams,
        a = t.profileLogParams
      var o = Object(_['useContext'])(k['a'])
      var i = Object(_['useContext'])(Dt)
      var c = 202 === n.cell_type ? bt.WENDA_ANSWER : bt.WENDA_QUESTION
      var u = n.content.user
      var l = Object(x['r'])(
        (null === u || void 0 === u ? void 0 : u.user_auth_info) || '{}'
      )
      var s = n.content.question
      var f = n.content.answer
      var d = {
        userInfo: {
          uid: u.user_id,
          name: u.uname,
          avatarUrl: u.avatar_url,
          authType: l.auth_type,
          authInfo: l.auth_info,
        },
        type: c,
        isStick: n.is_stick,
        tabKey: n.__tab_key,
        groupId: n.group_id,
        itemId: n.item_id,
        title: null === s || void 0 === s ? void 0 : s.title,
        answer: null === f || void 0 === f ? void 0 : f.abstract_text,
        detailUrl: 'https://www.toutiao.com/group/'.concat(n.group_id, '/'),
        isCollected: !!n.user_repin,
      }
      if (c === bt.WENDA_ANSWER) {
        d.coverUrls = $n(
          null === f || void 0 === f ? void 0 : f.content_abstract
        )
        d.timestamp = null === f || void 0 === f ? void 0 : f.create_time
        d.answerStat = {
          showCount: null === f || void 0 === f ? void 0 : f.show_count,
          showText: null === f || void 0 === f ? void 0 : f.show_text,
        }
      } else {
        d.coverUrls = $n(null === s || void 0 === s ? void 0 : s.content)
        d.timestamp = null === s || void 0 === s ? void 0 : s.create_time
        d.questionStat = {
          showCount: null === s || void 0 === s ? void 0 : s.show_count,
          showText: null === s || void 0 === s ? void 0 : s.show_text,
          answerCount: null === s || void 0 === s ? void 0 : s.normal_ans_count,
        }
      }
      function v(e) {
        if (!e && n.__tab_key === ct.fav.key) i.deleteCell(n)
      }
      function m(e) {
        if (e)
          Object(A['a'])(
            'homepage_detail_show',
            Xn(
              Xn({}, a),
              {},
              {
                group_format: 'wenda',
              }
            )
          )
      }
      function p() {
        Object(A['a'])(
          'homepage_detail_click',
          Xn(
            Xn({}, a),
            {},
            {
              group_format: 'wenda',
            }
          )
        )
      }
      return y.a.createElement(
        Mt,
        {
          once: true,
          onVisible: m,
        },
        y.a.createElement(
          'div',
          {
            className: 'profile-wenda-card-wrapper',
          },
          y.a.createElement(Yn, {
            data: d,
            isSelf: !!(null === o || void 0 === o ? void 0 : o.isSelf),
            logParams: r,
            onCollectStatusChange: v,
            onClickToDetail: p,
          })
        )
      )
    }
    var tr = er
    var nr = n('8e472dbfb80da30ee3f4')
    var rr = function e(t) {
      var n = t.data,
        r = t.onTopCell,
        a = t.onCollectStatusChange,
        o = t.onClickToDetail
      var i = Object(_['useState'])(false),
        c = I()(i, 2),
        u = c[0],
        l = c[1]
      function s() {
        l(true)
        o()
      }
      return y.a.createElement(
        'div',
        {
          className: U()('profile-collection-card', {
            visited: u,
          }),
        },
        y.a.createElement(
          'div',
          {
            className: 'collection-l',
          },
          y.a.createElement(
            'a',
            {
              className: 'title',
              href: n.detailUrl,
              target: '_blank',
              rel: 'noopener',
              onClick: s,
            },
            y.a.createElement('h2', null, n.title)
          ),
          y.a.createElement(Bt['a'], {
            leftTools: [
              n.isStick &&
                y.a.createElement(Wt['f'], {
                  key: 'tag',
                  text: '\u7f6e\u9876',
                }),
              y.a.createElement(
                ln,
                {
                  key: 'text',
                },
                Object(x['i'])(n.playCount),
                '\u64ad\u653e'
              ),
              y.a.createElement(Wt['g'], {
                key: 'time',
                timestamp: n.timestamp,
              }),
            ],
            rightTools: [
              y.a.createElement(on, {
                key: 'actions',
                type: pt.COLLECTION,
                activeTabKey: n.tabKey,
                groupId: n.groupId,
                itemId: n.itemId,
                isCollected: n.isCollected,
                isStick: n.isStick,
                reportSource: Oe['e'].DEFAULT,
                onStickStatusChange: r,
                onCollectStatusChange: a,
              }),
            ],
          })
        ),
        y.a.createElement(
          'div',
          {
            className: 'collection-r',
          },
          y.a.createElement(
            'div',
            {
              className: 'collection-cover',
            },
            y.a.createElement(wn['a'], {
              cover: n.coverUrl,
              articleUrl: n.detailUrl,
              onClickToDetail: s,
            }),
            y.a.createElement(
              'div',
              {
                className: 'collection-children-count',
              },
              y.a.createElement(
                'span',
                {
                  className: 'count',
                },
                n.count
              ),
              y.a.createElement('i', null)
            )
          )
        )
      )
    }
    var ar = rr
    function or(e, t) {
      var n = Y()(e)
      if (G.a) {
        var r = G()(e)
        if (t)
          r = r.filter(function (t) {
            return Q()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function ir(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          or(Object(n), true).forEach(function (t) {
            X()(e, t, n[t])
          })
        else if (z.a) B()(e, z()(n))
        else
          or(Object(n)).forEach(function (t) {
            V()(e, t, Q()(n, t))
          })
      }
      return e
    }
    var cr = function e(t) {
      var n, r
      var a = t.cell,
        o = t.profileLogParams
      var i = Object(_['useContext'])(Dt)
      var c = {
        groupId: a.group_id,
        itemId: a.group_id,
        title: a.title,
        coverUrl:
          null === (n = a.episodes[0]) || void 0 === n
            ? void 0
            : null === (r = n.middle_image.url) || void 0 === r
            ? void 0
            : r.replace(/^http:/, ''),
        detailUrl: a.url,
        timestamp: a.pub_time,
        count: a.episodes.length,
        playCount: a.play_count,
        isCollected: !!a.subscribe_status,
        isStick: a.is_stick,
        tabKey: a.__tab_key,
      }
      function u(e) {
        i.toTopCell(a, e)
      }
      function l(e) {
        if (!e && a.__tab_key === ct.fav.key) i.deleteCell(a)
      }
      function s(e) {
        if (e)
          Object(A['a'])(
            'homepage_detail_show',
            ir(
              ir({}, o),
              {},
              {
                group_format: 'collection',
              }
            )
          )
      }
      function f() {
        Object(A['a'])(
          'homepage_detail_click',
          ir(
            ir({}, o),
            {},
            {
              group_format: 'collection',
            }
          )
        )
      }
      return y.a.createElement(
        Mt,
        {
          once: true,
          onVisible: s,
        },
        y.a.createElement(
          'div',
          {
            className: 'profile-collection-card-wrapper',
          },
          y.a.createElement(ar, {
            data: c,
            onTopCell: u,
            onCollectStatusChange: l,
            onClickToDetail: f,
          })
        )
      )
    }
    var ur = cr
    var lr = n('18ead25236b2b90fe743')
    var sr = n('55545edfe9557f8e9717')
    var fr = function e(t) {
      var n = t.data,
        r = t.onClickToDetail,
        a = t.onDelete,
        o = t.onTopCell
      return y.a.createElement(
        'div',
        {
          className: 'profile-large-video-card',
        },
        y.a.createElement(
          sr['a'],
          Ne()({}, t, {
            footer: y.a.createElement(Bt['a'], {
              leftTools: [
                n.isStick &&
                  y.a.createElement(Wt['f'], {
                    key: 'tag',
                    text: '\u7f6e\u9876',
                  }),
                y.a.createElement(
                  ln,
                  {
                    key: 'text',
                  },
                  Object(x['i'])(n.playCount),
                  '\u64ad\u653e'
                ),
                y.a.createElement(Wt['b'], {
                  key: 'comment',
                  commentCount: n.commentCount,
                  articleUrl: n.detailUrl,
                  inside: false,
                  onClickToDetail: r,
                }),
                y.a.createElement(Wt['g'], {
                  key: 'time',
                  timestamp: n.timestamp,
                }),
              ],
              rightTools: [
                y.a.createElement(on, {
                  key: 'actions',
                  type: pt.VIDEO,
                  activeTabKey: n.tabKey,
                  groupId: n.groupId,
                  itemId: n.itemId,
                  isCollected: n.isCollected,
                  isStick: n.isStick,
                  reportSource: Oe['e'].VIDEO,
                  onDelete: a,
                  onStickStatusChange: o,
                }),
              ],
            }),
          })
        )
      )
    }
    var dr = fr
    function vr(e, t) {
      var n = Y()(e)
      if (G.a) {
        var r = G()(e)
        if (t)
          r = r.filter(function (t) {
            return Q()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function mr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          vr(Object(n), true).forEach(function (t) {
            X()(e, t, n[t])
          })
        else if (z.a) B()(e, z()(n))
        else
          vr(Object(n)).forEach(function (t) {
            V()(e, t, Q()(n, t))
          })
      }
      return e
    }
    var pr = function e(t) {
      var n
      var r = t.cell,
        a = t.logParams,
        o = t.profileLogParams
      var i = Object(_['useContext'])(k['a'])
      var c = Object(_['useContext'])(Dt)
      var u = Object(_['useRef'])(false)
      var l = Object(_['useRef'])(false)
      var s = Object(_['useRef'])(0)
      var f = {
        title: r.__title,
        cover: Object(Ln['c'])(r),
        duration: r.video_duration,
        videoId: r.video_id,
        groupId: r.group_id,
        itemId: r.item_id,
        detailUrl: 'https://www.ixigua.com/i'.concat(r.group_id, '/'),
        userInfo: r.user_info && {
          name: r.user_info.name,
          userSecToken: r.user_info.user_id,
        },
        source: r.source,
        commentCount: r.comment_count,
        timestamp: r.publish_time,
        isCollected: !!r.user_repin,
        isStick: r.is_stick,
        playCount:
          null === (n = r.video_detail_info) || void 0 === n
            ? void 0
            : n.video_watch_count,
        tabKey: r.__tab_key,
      }
      function d() {
        c.deleteCell(r)
      }
      function v(e) {
        c.toTopCell(r, e)
      }
      function m() {
        var e, t
        if (u.current) return
        Object(A['a'])(
          'video_play',
          mr(
            mr({}, a),
            {},
            {
              groupId: f.groupId,
              author_id:
                null === (e = f.userInfo) || void 0 === e
                  ? void 0
                  : e.userSecToken,
              article_type: 'video',
              is_following: (
                null === (t = r.user_info) || void 0 === t ? void 0 : t.follow
              )
                ? 1
                : 0,
              is_login: (null === i || void 0 === i ? void 0 : i.loginUserInfo)
                ? 1
                : 0,
              from_url: document.referrer,
              section: 'main',
              tab_name: 'video',
              rank: null === o || void 0 === o ? void 0 : o.rank,
            }
          )
        )
        u.current = true
      }
      function p(e, t) {
        var n, c
        if (l.current) return
        var u = 0
        var d = 0
        var v = 0
        try {
          u = ((null === t || void 0 === t ? void 0 : t.played) || []).reduce(
            function (e, t) {
              if (t.end < 0) return e
              return e + (t.end - t.begin)
            },
            0
          )
          d = u - s.current
          v = Object(Ln['b'])((d / t.vd) * 100)
        } catch (m) {
          void 0
        }
        Object(A['a'])(
          'video_over',
          mr(
            mr({}, a),
            {},
            {
              duration: ~~(1e3 * d),
              percent: v,
              groupId: e,
              author_id:
                null === (n = f.userInfo) || void 0 === n
                  ? void 0
                  : n.userSecToken,
              article_type: 'video',
              is_following: (
                null === (c = r.user_info) || void 0 === c ? void 0 : c.follow
              )
                ? 1
                : 0,
              is_login: (null === i || void 0 === i ? void 0 : i.loginUserInfo)
                ? 1
                : 0,
              from_url: document.referrer,
              section: 'main',
              tab_name: 'video',
              rank: null === o || void 0 === o ? void 0 : o.rank,
            }
          )
        )
        l.current = true
        s.current = u
      }
      function b(e, t) {
        p(e, t)
        u.current = false
        l.current = false
      }
      function h() {
        u.current = false
        l.current = false
        s.current = 0
      }
      function g(e) {
        if (e)
          Object(A['a'])(
            'homepage_detail_show',
            mr(
              mr({}, o),
              {},
              {
                group_format: 'video',
              }
            )
          )
      }
      function w() {
        Object(A['a'])(
          'homepage_detail_click',
          mr(
            mr({}, o),
            {},
            {
              group_format: 'video',
            }
          )
        )
      }
      return y.a.createElement(
        Mt,
        {
          once: true,
          onVisible: g,
        },
        y.a.createElement(
          'div',
          {
            className: 'profile-large-video-card-wrapper',
          },
          y.a.createElement(dr, {
            data: f,
            logParams: a,
            onClickToDetail: w,
            onPlay: m,
            onEnded: p,
            onHalfEnded: b,
            onReplay: h,
            onDelete: d,
            onTopCell: v,
          })
        )
      )
    }
    var br = pr
    var hr = function e(t) {
      var n = t.list,
        r = t.activeTabKey,
        a = t.cardStyle,
        o = void 0 === a ? 'large' : a,
        i = t.extraFetchParams
      var c = Object(_['useContext'])(k['a'])
      function u(e, t) {
        var n = {
          page_name: (null === c || void 0 === c ? void 0 : c.isSelf)
            ? 'mine_home'
            : 'author_home',
          enter_from: (null === c || void 0 === c ? void 0 : c.isSelf)
            ? 'mine_home'
            : 'author_home',
          category_name: ct.video.key,
          show_type: (null === i || void 0 === i ? void 0 : i.hot_video)
            ? 'hottest_content'
            : 'latest_release',
        }
        var a = {
          enter_from: (null === c || void 0 === c ? void 0 : c.isSelf)
            ? 'mine_home'
            : 'author_home',
          page_name: (null === c || void 0 === c ? void 0 : c.isSelf)
            ? 'mine_home'
            : 'author_home',
          author_id:
            null === c || void 0 === c ? void 0 : c.profileUserInfo.userId,
          tab_name: r,
          is_following:
            null === c || void 0 === c ? void 0 : c.relation.isFollowing,
          is_login: (null === c || void 0 === c ? void 0 : c.loginUserInfo)
            ? 1
            : 0,
          rank: t + 1,
          group_id: e.group_id,
          show_type: (null === i || void 0 === i ? void 0 : i.hot_video)
            ? 'hottest_content'
            : 'latest_release',
          section: 'main',
        }
        if ('normal' === o)
          return y.a.createElement(
            'li',
            {
              key: e.__uuid,
            },
            y.a.createElement(Wn, {
              cell: e,
              logParams: n,
              profileLogParams: a,
            })
          )
        return y.a.createElement(
          'li',
          {
            key: e.__uuid,
          },
          y.a.createElement(br, {
            cell: e,
            logParams: n,
            profileLogParams: a,
          })
        )
      }
      return y.a.createElement(
        'ul',
        {
          className: U()('profile-video-tab-list', {
            'double-column': 'large' === o,
          }),
        },
        n.map(function (e, t) {
          return u(e, t)
        })
      )
    }
    var gr = hr
    var _r = function e(t) {
      var n = t.activeTabKey,
        r = t.list,
        a = t.extraFetchParams
      var o = Object(_['useContext'])(k['a'])
      function i(e, t) {
        var r = {
          page_name: (null === o || void 0 === o ? void 0 : o.isSelf)
            ? 'mine_home'
            : 'author_home',
          enter_from: (null === o || void 0 === o ? void 0 : o.isSelf)
            ? 'mine_home'
            : 'author_home',
          category_name: n,
          section: 'main',
          tab_name: n,
          rank: t + 1,
        }
        var a = {
          enter_from: (null === o || void 0 === o ? void 0 : o.isSelf)
            ? 'mine_home'
            : 'author_home',
          page_name: (null === o || void 0 === o ? void 0 : o.isSelf)
            ? 'mine_home'
            : 'author_home',
          author_id:
            null === o || void 0 === o ? void 0 : o.profileUserInfo.userId,
          tab_name: n,
          is_following:
            null === o || void 0 === o ? void 0 : o.relation.isFollowing,
          is_login: (null === o || void 0 === o ? void 0 : o.loginUserInfo)
            ? 1
            : 0,
          rank: t + 1,
          group_id: e.group_id,
          section: 'main',
        }
        switch (e.__type) {
          case pt.WTT:
            return y.a.createElement(Dn, {
              key: e.__uuid,
              cell: e,
              logParams: r,
              profileLogParams: a,
            })
          case pt.VIDEO:
            return y.a.createElement(Wn, {
              key: e.__uuid,
              cell: e,
              logParams: r,
              profileLogParams: a,
            })
          case pt.SHORT_VIDEO:
            return y.a.createElement(qn, {
              key: e.__uuid,
              cell: e,
              logParams: r,
              profileLogParams: a,
            })
          case pt.WENDA:
            return y.a.createElement(tr, {
              key: e.__uuid,
              cell: e,
              logParams: r,
              profileLogParams: a,
            })
          case pt.COLLECTION:
            return y.a.createElement(ur, {
              key: e.__uuid,
              cell: e,
              profileLogParams: a,
            })
          default:
            return y.a.createElement(pn, {
              key: e.__uuid,
              cell: e,
              logParams: r,
              profileLogParams: a,
            })
        }
      }
      if (n === ct.video.key)
        return y.a.createElement(gr, {
          list: r,
          activeTabKey: n,
          cardStyle: 'large',
          extraFetchParams: a,
        })
      return y.a.createElement(
        y.a.Fragment,
        null,
        r.map(function (e, t) {
          return i(e, t)
        })
      )
    }
    var yr = _r
    var wr = n('39b7a7dff0a3c3946bf2')
    var Er = {
      NEW: 0,
      HOT: 1,
    }
    var kr = function e(t) {
      var n = Object(_['useState'])(Er.NEW),
        r = I()(n, 2),
        a = r[0],
        o = r[1]
      function i(e) {
        o(e)
        if (e !== a) t.onChange(e)
      }
      return y.a.createElement(
        'div',
        {
          className: 'profile-video-tab-filter',
        },
        y.a.createElement(
          'div',
          {
            className: U()('radio-option', {
              checked: a === Er.NEW,
            }),
            onClick: function e() {
              return i(Er.NEW)
            },
          },
          y.a.createElement('span', {
            className: 'option-thumb',
          }),
          y.a.createElement(
            'span',
            {
              className: 'option-label',
            },
            '\u6700\u65b0\u53d1\u5e03'
          )
        ),
        y.a.createElement(
          'div',
          {
            className: U()('radio-option', {
              checked: a === Er.HOT,
            }),
            onClick: function e() {
              return i(Er.HOT)
            },
          },
          y.a.createElement('span', {
            className: 'option-thumb',
          }),
          y.a.createElement(
            'span',
            {
              className: 'option-label',
            },
            '\u6700\u70ed\u5185\u5bb9'
          )
        )
      )
    }
    var Ar = kr
    var jr = n('a9610415f616cf6771b7')
    var xr = function e(t) {
      return y.a.createElement(
        'div',
        {
          className: 'profile-empty-tab-tips',
        },
        y.a.createElement('i', null),
        y.a.createElement('p', null, t.children)
      )
    }
    var Or = xr
    var Cr = n('d0a417eed13be1ae5863')
    var Ir = function e() {
      var t = Object(_['useRef'])(null)
      var n = Object(_['useState'])(false),
        r = I()(n, 2),
        a = r[0],
        o = r[1]
      Object(_['useEffect'])(function () {
        if (t.current) {
          var e = t.current.getBoundingClientRect()
          if (e.top - window.innerHeight >= 0) o(true)
        }
      }, [])
      return y.a.createElement(
        'div',
        {
          className: U()('profile-feed-no-more', {
            show: a,
          }),
          ref: t,
        },
        y.a.createElement('p', null, '\u65e0\u66f4\u591a\u5185\u5bb9')
      )
    }
    var Sr = Ir
    function Tr(e, t) {
      var n = Y()(e)
      if (G.a) {
        var r = G()(e)
        if (t)
          r = r.filter(function (t) {
            return Q()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function Nr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          Tr(Object(n), true).forEach(function (t) {
            X()(e, t, n[t])
          })
        else if (z.a) B()(e, z()(n))
        else
          Tr(Object(n)).forEach(function (t) {
            V()(e, t, Q()(n, t))
          })
      }
      return e
    }
    function Ur(e) {
      var t = Dr()
      return function n() {
        var r = g()(e),
          o
        if (t) {
          var i = g()(this).constructor
          o = a()(r, arguments, i)
        } else o = r.apply(this, arguments)
        return b()(this, o)
      }
    }
    function Dr() {
      if ('undefined' === typeof Reflect || !a.a) return false
      if (a.a.sham) return false
      if ('function' === typeof Proxy) return true
      try {
        Date.prototype.toString.call(a()(Date, [], function () {}))
        return true
      } catch (e) {
        return false
      }
    }
    var Rr = (function (e) {
      m()(n, e)
      var t = Ur(n)
      function n() {
        var e
        s()(this, n)
        e = t.apply(this, arguments)
        e.state = {
          refresh: true,
          loading: false,
          hasMore: false,
          refreshErrTips: '',
          list: [],
          cursor: 0,
        }
        e.extraFetchParams = null
        e.fetchList = function (e) {
          return Ie['a'].profile.getWritingsList(e)
        }
        e.setExtraParams = function (t) {
          if (t === ct.video.key) {
            e.extraFetchParams = {
              hot_video: 0,
            }
            return
          }
          e.extraFetchParams = null
        }
        e.refresh = u()(
          i.a.mark(function t() {
            var n, r, a, o
            return i.a.wrap(
              function t(i) {
                while (1)
                  switch ((i.prev = i.next)) {
                    case 0:
                      i.prev = 0
                      e.setState({
                        refresh: true,
                        refreshErrTips: '',
                        list: [],
                      })
                      n = e.props.activeTabKey
                      r = Nr(
                        {
                          category: ct[n].category,
                          token: e.props.userToken,
                          max_behot_time: 0,
                        },
                        e.extraFetchParams
                      )
                      i.next = 6
                      return e.fetchList(r)
                    case 6:
                      a = i.sent
                      if (!('success' === a.data.message)) {
                        i.next = 11
                        break
                      }
                      o = Et(a.data.data || [], n)
                      e.setState({
                        refresh: false,
                        hasMore: a.data.has_more,
                        list: o,
                        cursor: a.data.next.max_behot_time,
                      })
                      return i.abrupt('return')
                    case 11:
                      throw new Error(a.data.message)
                    case 14:
                      i.prev = 14
                      i.t0 = i['catch'](0)
                      e.setState(
                        {
                          refreshErrTips: Lt['a'].SERVICE_ERR,
                          list: [],
                        },
                        function () {
                          setTimeout(function () {
                            e.setState({
                              refresh: false,
                            })
                          }, 1500)
                        }
                      )
                      void 0
                    case 18:
                    case 'end':
                      return i.stop()
                  }
              },
              t,
              null,
              [[0, 14]]
            )
          })
        )
        e.loadMore = u()(
          i.a.mark(function t() {
            var n, r, a, o
            return i.a.wrap(
              function t(i) {
                while (1)
                  switch ((i.prev = i.next)) {
                    case 0:
                      i.prev = 0
                      e.setState({
                        loading: true,
                      })
                      n = e.props.activeTabKey
                      r = Nr(
                        {
                          category: ct[n].category,
                          token: e.props.userToken,
                          max_behot_time: e.state.cursor,
                        },
                        e.extraFetchParams
                      )
                      i.next = 6
                      return e.fetchList(r)
                    case 6:
                      a = i.sent
                      if (!(n !== e.props.activeTabKey)) {
                        i.next = 10
                        break
                      }
                      e.setState({
                        loading: false,
                      })
                      return i.abrupt('return')
                    case 10:
                      if (!('success' === a.data.message)) {
                        i.next = 14
                        break
                      }
                      o = Et(a.data.data || [], n)
                      e.setState(
                        function (e) {
                          return {
                            hasMore: a.data.has_more,
                            list: e.list.concat(o),
                            cursor: a.data.next.max_behot_time,
                          }
                        },
                        function () {
                          e.setState({
                            loading: false,
                          })
                        }
                      )
                      return i.abrupt('return')
                    case 14:
                      throw new Error(a.data.message)
                    case 17:
                      i.prev = 17
                      i.t0 = i['catch'](0)
                      e.setState({
                        loading: false,
                      })
                      void 0
                    case 21:
                    case 'end':
                      return i.stop()
                  }
              },
              t,
              null,
              [[0, 17]]
            )
          })
        )
        e.handleVideoFilterChange = function (t) {
          e.extraFetchParams = {
            hot_video: t,
          }
          e.refresh()
          e.props.onSubTabChange(1 === t ? 'hottest_content' : 'latest_release')
        }
        e.handleToTopCell = function (t, n) {
          e.setState(function (e) {
            return {
              list: kt(t, n, e.list),
            }
          })
        }
        e.handleDeleteCell = function (t) {
          e.setState(function (e) {
            return {
              list: jt(t, e.list),
            }
          })
        }
        e.handleUpdateLikeStatus = function (t, n) {
          e.setState(function (e) {
            return {
              list: At(t, n, e.list),
            }
          })
        }
        return e
      }
      d()(n, [
        {
          key: 'componentDidMount',
          value: function e() {
            if (this.props.activeTabKey) {
              this.setExtraParams(this.props.activeTabKey)
              this.refresh()
            }
          },
        },
        {
          key: 'componentDidUpdate',
          value: function e(t) {
            if (t.activeTabKey !== this.props.activeTabKey) {
              this.setExtraParams(this.props.activeTabKey)
              this.refresh()
            }
          },
        },
        {
          key: 'render',
          value: function e() {
            var t = this.props,
              n = t.activeTabKey,
              r = t.hide
            var a = this.state,
              o = a.refresh,
              i = a.loading,
              c = a.hasMore,
              u = a.refreshErrTips,
              l = a.list
            return y.a.createElement(
              Dt.Provider,
              {
                value: {
                  toTopCell: this.handleToTopCell,
                  deleteCell: this.handleDeleteCell,
                  updateLikeStatus: this.handleUpdateLikeStatus,
                },
              },
              y.a.createElement(
                Rt['a'],
                {
                  disable: r,
                  refresh: o,
                  loading: i,
                  hasMore: c,
                  onLoadMore: this.loadMore,
                },
                y.a.createElement(
                  'div',
                  {
                    className: 'profile-tab-feed',
                  },
                  n === ct.video.key &&
                    y.a.createElement(Ar, {
                      onChange: this.handleVideoFilterChange,
                    }),
                  o &&
                    y.a.createElement(Lt['b'], {
                      count: 0,
                      errorTips: u,
                    }),
                  y.a.createElement(yr, {
                    list: l,
                    activeTabKey: this.props.activeTabKey,
                    extraFetchParams: this.extraFetchParams,
                  }),
                  !o && !!l.length && !c && y.a.createElement(Sr, null),
                  !o &&
                    !l.length &&
                    y.a.createElement(
                      Or,
                      null,
                      n === ct.fav.key
                        ? '\u6682\u65e0\u6536\u85cf'
                        : '\u6682\u672a\u53d1\u8868\u4f5c\u54c1'
                    )
                )
              )
            )
          },
        },
      ])
      return n
    })(y.a.Component)
    function Lr(e) {
      var t = Pr()
      return function n() {
        var r = g()(e),
          o
        if (t) {
          var i = g()(this).constructor
          o = a()(r, arguments, i)
        } else o = r.apply(this, arguments)
        return b()(this, o)
      }
    }
    function Pr() {
      if ('undefined' === typeof Reflect || !a.a) return false
      if (a.a.sham) return false
      if ('function' === typeof Proxy) return true
      try {
        Date.prototype.toString.call(a()(Date, [], function () {}))
        return true
      } catch (e) {
        return false
      }
    }
    var Mr = (function (e) {
      m()(n, e)
      var t = Lr(n)
      function n() {
        var e, r, a
        var o
        s()(this, n)
        o = t.apply(this, arguments)
        o.state = {
          loading: false,
          hasMore: !!(null === (e = o.props.initialData) || void 0 === e
            ? void 0
            : e.hasMore),
          cursor:
            (null === (r = o.props.initialData) || void 0 === r
              ? void 0
              : r.cursor) || 0,
          list:
            (null === (a = o.props.initialData) || void 0 === a
              ? void 0
              : a.list) || [],
        }
        o.loadMore = u()(
          i.a.mark(function e() {
            var t
            return i.a.wrap(
              function e(n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      n.prev = 0
                      o.setState({
                        loading: true,
                      })
                      n.next = 4
                      return Ie['a'].profile.getSearchList({
                        token: o.props.userToken,
                        offset: o.state.cursor,
                        keyword: o.props.keyword,
                      })
                    case 4:
                      t = n.sent
                      if (!('success' === t.data.message)) {
                        n.next = 8
                        break
                      }
                      o.setState(
                        function (e) {
                          return {
                            list: e.list.concat(Et(t.data.data || [])),
                            cursor: t.data.offset,
                            hasMore: t.data.has_more,
                          }
                        },
                        function () {
                          o.setState({
                            loading: false,
                          })
                        }
                      )
                      return n.abrupt('return')
                    case 8:
                      throw new Error(t.data.message)
                    case 11:
                      n.prev = 11
                      n.t0 = n['catch'](0)
                      o.setState({
                        loading: false,
                      })
                      void 0
                    case 15:
                    case 'end':
                      return n.stop()
                  }
              },
              e,
              null,
              [[0, 11]]
            )
          })
        )
        o.handleToTopCell = function (e, t) {
          o.setState(function (n) {
            return {
              list: kt(e, t, n.list),
            }
          })
        }
        o.handleDeleteCell = function (e) {
          o.setState(function (t) {
            return {
              list: jt(e, t.list),
            }
          })
        }
        o.handleUpdateLikeStatus = function (e, t) {
          o.setState(function (n) {
            return {
              list: At(e, t, n.list),
            }
          })
        }
        return o
      }
      d()(n, [
        {
          key: 'render',
          value: function e() {
            var t = this.state,
              n = t.loading,
              r = t.hasMore,
              a = t.list
            return y.a.createElement(
              Dt.Provider,
              {
                value: {
                  toTopCell: this.handleToTopCell,
                  deleteCell: this.handleDeleteCell,
                  updateLikeStatus: this.handleUpdateLikeStatus,
                },
              },
              y.a.createElement(
                Rt['a'],
                {
                  refresh: false,
                  loading: n,
                  hasMore: r,
                  onLoadMore: this.loadMore,
                },
                y.a.createElement(
                  'div',
                  {
                    className: 'profile-search-result',
                  },
                  y.a.createElement(yr, {
                    list: a,
                    activeTabKey: 'search',
                  }),
                  !n && !!a.length && !r && y.a.createElement(Sr, null),
                  !a.length &&
                    y.a.createElement(
                      Or,
                      null,
                      '\u6682\u65e0\u76f8\u5173\u5185\u5bb9'
                    )
                )
              )
            )
          },
        },
      ])
      return n
    })(y.a.Component)
    var Fr = Object(R['b'])(Mr)
    var Vr = function e(t) {
      return y.a.createElement(
        'div',
        {
          className: 'profile-search-loading',
        },
        y.a.createElement(Lt['b'], {
          count: 0,
          errorTips: t.errTips || '',
        })
      )
    }
    var Kr = Vr
    function Br(e, t) {
      var n = Y()(e)
      if (G.a) {
        var r = G()(e)
        if (t)
          r = r.filter(function (t) {
            return Q()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function Wr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          Br(Object(n), true).forEach(function (t) {
            X()(e, t, n[t])
          })
        else if (z.a) B()(e, z()(n))
        else
          Br(Object(n)).forEach(function (t) {
            V()(e, t, Q()(n, t))
          })
      }
      return e
    }
    function zr(e) {
      var t = Hr()
      return function n() {
        var r = g()(e),
          o
        if (t) {
          var i = g()(this).constructor
          o = a()(r, arguments, i)
        } else o = r.apply(this, arguments)
        return b()(this, o)
      }
    }
    function Hr() {
      if ('undefined' === typeof Reflect || !a.a) return false
      if (a.a.sham) return false
      if ('function' === typeof Proxy) return true
      try {
        Date.prototype.toString.call(a()(Date, [], function () {}))
        return true
      } catch (e) {
        return false
      }
    }
    var Qr = (function (e) {
      m()(n, e)
      var t = zr(n)
      function n() {
        var e
        s()(this, n)
        e = t.apply(this, arguments)
        e.state = {
          tabs: [],
          activeTabKey: '',
          showSearch: false,
          searchElKey: '',
          searchLoading: false,
          searchKeyword: '',
          searchData: {
            list: [],
            cursor: 0,
            hasMore: false,
          },
        }
        e.enterTabTime = ot()()
        e.prevSubTabKey = ''
        e._sendTabEventLog = function (t, n) {
          var r = e.context,
            a = r.isSelf,
            o = r.profileUserInfo,
            i = r.relation,
            c = r.loginUserInfo
          var u = {
            enter_from: Object(x['m'])('source'),
            page_type: a ? 'mine_home' : 'author_home',
            author_id: o.userId,
            is_following: i.isFollowing ? 1 : 0,
            is_login: c ? 1 : 0,
          }
          if (!n.show_type) delete n.show_type
          Object(A['a'])(t, Wr(Wr({}, u), n))
        }
        e.initTabs = (function () {
          var t = u()(
            i.a.mark(function t(n) {
              var r
              var a, o, c, u, l, s
              return i.a.wrap(function t(i) {
                while (1)
                  switch ((i.prev = i.next)) {
                    case 0:
                      ;(a = e.context), (o = a.isSelf), (c = a.profileUserInfo)
                      i.next = 3
                      return Ie['a'].feed.getProfileTabs(c.userId)
                    case 3:
                      u = i.sent
                      l = dt(
                        (null === (r = u.data) || void 0 === r
                          ? void 0
                          : r.data) || []
                      )
                      if (o) l = l.concat(ct.fav)
                      s =
                        l.filter(function (e) {
                          var t
                          return (
                            e.category ===
                            (null === (t = ct[n]) || void 0 === t
                              ? void 0
                              : t.category)
                          )
                        })[0] || ct.all
                      e.setState({
                        tabs: l,
                        activeTabKey: s.key,
                      })
                      e.enterTabTime = ot()()
                      if (s.key === ct.video.key)
                        e.prevSubTabKey = 'latest_release'
                      e._sendTabEventLog('profile_tab_enter', {
                        tab_name: s.key,
                        show_type: e.prevSubTabKey,
                      })
                    case 11:
                    case 'end':
                      return i.stop()
                  }
              }, t)
            })
          )
          return function (e) {
            return t.apply(this, arguments)
          }
        })()
        e.changeUrlTabParams = function (e) {
          var t = Object(x['q'])(window.location.href, {
            tab: e,
          })
          if (window.history.pushState) window.history.pushState({}, '', t)
        }
        e.handleChangeTab = function (t, n) {
          e._sendTabEventLog('profile_tab_stay', {
            tab_name: e.state.activeTabKey,
            show_type: e.prevSubTabKey,
            stay_time: ot()() - e.enterTabTime,
          })
          e._sendTabEventLog('profile_tab_enter', {
            show_type: n || '',
            tab_name: t,
          })
          e.enterTabTime = ot()()
          e.prevSubTabKey = n || ''
          if (t !== e.state.activeTabKey)
            e.setState({
              activeTabKey: t,
            })
          e.changeUrlTabParams(t)
        }
        e.handleChangeSubTab = function (t) {
          e.handleChangeTab(e.state.activeTabKey, t)
        }
        e.handleSearch = (function () {
          var t = u()(
            i.a.mark(function t(n) {
              var r
              return i.a.wrap(
                function t(a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        a.prev = 0
                        e.setState({
                          searchLoading: true,
                        })
                        a.next = 4
                        return Ie['a'].profile.getSearchList({
                          token: e.context.profileUserInfo.userId,
                          offset: 0,
                          keyword: n,
                        })
                      case 4:
                        r = a.sent
                        if (!('success' === r.data.message)) {
                          a.next = 9
                          break
                        }
                        e.setState(
                          {
                            searchElKey: Math.random().toString(16).substr(2),
                            searchData: {
                              list: Et(r.data.data || []),
                              cursor: r.data.offset,
                              hasMore: r.data.has_more,
                            },
                            searchKeyword: n,
                          },
                          function () {
                            e.setState({
                              searchLoading: false,
                            })
                          }
                        )
                        e.handleShowSearch()
                        return a.abrupt('return')
                      case 9:
                        throw new Error(r.data.message)
                      case 12:
                        a.prev = 12
                        a.t0 = a['catch'](0)
                        e.setState({
                          searchLoading: false,
                        })
                        e.handleShowSearch()
                        void 0
                      case 17:
                      case 'end':
                        return a.stop()
                    }
                },
                t,
                null,
                [[0, 12]]
              )
            })
          )
          return function (e) {
            return t.apply(this, arguments)
          }
        })()
        e.handleShowSearch = function () {
          if (!e.state.showSearch) {
            e._sendTabEventLog('profile_tab_stay', {
              tab_name: e.state.activeTabKey,
              show_type: e.prevSubTabKey,
              stay_time: ot()() - e.enterTabTime,
            })
            e._sendTabEventLog('profile_tab_enter', {
              show_type: '',
              tab_name: ct.search.key,
            })
            e.enterTabTime = ot()()
          }
          e.setState({
            showSearch: true,
          })
        }
        e.handleHideSearch = function () {
          if (e.state.showSearch) {
            e._sendTabEventLog('profile_tab_stay', {
              tab_name: ct.search.key,
              show_type: '',
              stay_time: ot()() - e.enterTabTime,
            })
            e._sendTabEventLog('profile_tab_enter', {
              show_type: e.prevSubTabKey,
              tab_name: e.state.activeTabKey,
            })
            e.enterTabTime = ot()()
          }
          e.setState({
            showSearch: false,
          })
        }
        return e
      }
      d()(n, [
        {
          key: 'componentDidMount',
          value: function e() {
            var t = Object(x['m'])('tab') || ''
            this.initTabs(t)
            this._sendTabEventLog('homepage_section_show', {
              section: 'main',
            })
          },
        },
        {
          key: 'render',
          value: function e() {
            var t
            var n = this.state,
              r = n.tabs,
              a = n.activeTabKey,
              o = n.showSearch,
              i = n.searchLoading,
              c = n.searchElKey,
              u = n.searchKeyword,
              l = n.searchData
            var s =
              null === (t = this.context) || void 0 === t
                ? void 0
                : t.profileUserInfo.userId
            return y.a.createElement(
              'div',
              {
                role: 'main',
                className: 'profile-tabs-wrapper',
              },
              y.a.createElement(St, {
                tabs: r,
                activeTabKey: a,
                onChange: this.handleChangeTab,
                onSearch: this.handleSearch,
                onCancelSearch: this.handleHideSearch,
              }),
              y.a.createElement(
                'div',
                {
                  style: {
                    display: o || i ? 'none' : 'block',
                  },
                },
                y.a.createElement(Rr, {
                  hide: o,
                  activeTabKey: a,
                  userToken: s,
                  onSubTabChange: this.handleChangeSubTab,
                })
              ),
              i && y.a.createElement(Kr, null),
              o &&
                y.a.createElement(Fr, {
                  key: c,
                  initialData: l,
                  userToken: s,
                  keyword: u,
                })
            )
          },
        },
      ])
      return n
    })(y.a.Component)
    Qr.contextType = k['a']
    var qr = Object(R['b'])(Qr)
    var Gr = n('d1168368cb87a97d8ea2')
    var Jr = n('1d5b1b50324e921422fc')
    var Yr = n('6d28fddc554cfed6e598')
    var Zr = function e(t) {
      var n = t.index
      return y.a.createElement(
        y.a.Fragment,
        null,
        y.a.createElement('rect', {
          x: '0',
          y: 52 + 104 * n,
          rx: '4',
          ry: '4',
          width: '96',
          height: '72',
        }),
        y.a.createElement('rect', {
          x: '108',
          y: 52 + 104 * n,
          rx: '11',
          ry: '11',
          width: '190',
          height: '20',
        }),
        y.a.createElement('rect', {
          x: '108',
          y: 104 + 104 * n,
          rx: '10',
          ry: '10',
          width: '127',
          height: '18',
        })
      )
    }
    var Xr = function e() {
      var t = Object(_['useState'])(false),
        n = I()(t, 2),
        r = n[0],
        a = n[1]
      Object(_['useEffect'])(function () {
        if (window.SVGAnimateElement) a(true)
      }, [])
      return y.a.createElement(
        Yr['a'],
        {
          animate: r,
          viewBox: '0 0 298 1088',
          width: 298,
          height: 1088,
          uniqueKey: 'profile-popular-loading',
        },
        y.a.createElement('rect', {
          x: '0',
          y: '0',
          rx: '11',
          ry: '11',
          width: '120',
          height: '22',
        }),
        y.a.createElement(Zr, {
          index: 0,
        }),
        y.a.createElement(Zr, {
          index: 1,
        }),
        y.a.createElement(Zr, {
          index: 2,
        }),
        y.a.createElement(Zr, {
          index: 3,
        }),
        y.a.createElement(Zr, {
          index: 4,
        }),
        y.a.createElement(Zr, {
          index: 5,
        }),
        y.a.createElement(Zr, {
          index: 6,
        }),
        y.a.createElement(Zr, {
          index: 7,
        }),
        y.a.createElement(Zr, {
          index: 8,
        }),
        y.a.createElement(Zr, {
          index: 9,
        })
      )
    }
    var $r = Xr
    var ea = function e(t) {
      var n = t.profileToken
      var r = Object(_['useContext'])(k['a'])
      var a = Object(_['useState'])(true),
        o = I()(a, 2),
        c = o[0],
        l = o[1]
      var s = Object(_['useState'])([]),
        f = I()(s, 2),
        d = f[0],
        v = f[1]
      var m = Object(_['useState'])(''),
        p = I()(m, 2),
        b = p[0],
        h = p[1]
      function g(e) {
        return w.apply(this, arguments)
      }
      function w() {
        w = u()(
          i.a.mark(function e(t) {
            var a, o, c, u
            return i.a.wrap(
              function e(i) {
                while (1)
                  switch ((i.prev = i.next)) {
                    case 0:
                      i.prev = 0
                      i.next = 3
                      return Ie['a'].profile.getPopularWorks(t)
                    case 3:
                      a = i.sent
                      o = (a.data.data || []).slice(0, 10)
                      c = false
                      if (o[0]) c = !!(o[0].has_video && o[0].video_id)
                      u = o.map(function (e) {
                        var t
                        return {
                          groupId: e.group_id,
                          itemId: e.item_id,
                          type: c ? 'video' : 'article',
                          title: e.title,
                          cover: _t(e)[0],
                          detailUrl: 'https://www.toutiao.com/group/'.concat(
                            e.group_id,
                            '/'
                          ),
                          durationStr:
                            e.video_duration &&
                            Object(x['g'])(e.video_duration),
                          readCountStr: !c
                            ? Object(x['i'])(e.read_count)
                            : void 0,
                          playCountStr: c
                            ? Object(x['i'])(
                                null === (t = e.action) || void 0 === t
                                  ? void 0
                                  : t.play_count
                              )
                            : void 0,
                          createTimeStr: Object(x['j'])(e.publish_time),
                        }
                      })
                      v(u)
                      h(
                        c
                          ? '\u8fd1\u671f\u6700\u70ed\u89c6\u9891'
                          : '\u8fd1\u671f\u6700\u70ed\u6587\u7ae0'
                      )
                      if (u.length)
                        Object(A['a'])('homepage_section_show', {
                          enter_from: Object(x['m'])('source'),
                          page_type: (
                            null === r || void 0 === r ? void 0 : r.isSelf
                          )
                            ? 'mine_home'
                            : 'author_home',
                          author_id: n,
                          is_following: (
                            null === r || void 0 === r
                              ? void 0
                              : r.relation.isFollowing
                          )
                            ? 1
                            : 0,
                          is_login: (
                            null === r || void 0 === r
                              ? void 0
                              : r.loginUserInfo
                          )
                            ? 1
                            : 0,
                          section: 'latest_best',
                        })
                      i.next = 16
                      break
                    case 13:
                      i.prev = 13
                      i.t0 = i['catch'](0)
                      void 0
                    case 16:
                      l(false)
                    case 17:
                    case 'end':
                      return i.stop()
                  }
              },
              e,
              null,
              [[0, 13]]
            )
          })
        )
        return w.apply(this, arguments)
      }
      Object(_['useEffect'])(function () {
        g(n)
      }, [])
      function E(e, t, a) {
        if (e)
          Object(A['a'])('homepage_detail_show', {
            enter_from: Object(x['m'])('source'),
            page_type: (null === r || void 0 === r ? void 0 : r.isSelf)
              ? 'mine_home'
              : 'author_home',
            author_id: n,
            is_following: (
              null === r || void 0 === r ? void 0 : r.relation.isFollowing
            )
              ? 1
              : 0,
            is_login: (null === r || void 0 === r ? void 0 : r.loginUserInfo)
              ? 1
              : 0,
            rank: a + 1,
            group_id: t.groupId,
            group_format: 'video' === t.type ? 'video' : 'tuwen',
            section: 'latest_best',
          })
      }
      function j(e, t) {
        Object(A['a'])('homepage_detail_click', {
          enter_from: Object(x['m'])('source'),
          page_type: (null === r || void 0 === r ? void 0 : r.isSelf)
            ? 'mine_home'
            : 'author_home',
          author_id: n,
          is_following: (
            null === r || void 0 === r ? void 0 : r.relation.isFollowing
          )
            ? 1
            : 0,
          is_login: (null === r || void 0 === r ? void 0 : r.loginUserInfo)
            ? 1
            : 0,
          rank: t + 1,
          group_id: e.groupId,
          group_format: 'video' === e.type ? 'video' : 'tuwen',
          section: 'latest_best',
        })
      }
      if (c) return y.a.createElement($r, null)
      if (!d.length) return null
      return y.a.createElement(
        'div',
        {
          role: 'complementary',
          'aria-label': b,
          className: 'profile-popular-works',
        },
        y.a.createElement(
          'h2',
          {
            className: 'section-title',
          },
          b
        ),
        y.a.createElement(
          'ul',
          null,
          y.a.createElement(
            'li',
            null,
            d.map(function (e, t) {
              return y.a.createElement(
                Mt,
                {
                  key: e.groupId,
                  once: true,
                  onVisible: function n(r) {
                    return E(r, e, t)
                  },
                },
                y.a.createElement(
                  'div',
                  {
                    className: 'work-item',
                  },
                  e.cover &&
                    y.a.createElement(
                      'a',
                      {
                        tabIndex: -1,
                        'aria-label': 'hidden',
                        target: '_blank',
                        className: U()('cover', {
                          'video-cover': 'video' === e.type,
                        }),
                        rel: 'noopener',
                        href: e.detailUrl,
                        onClick: function n() {
                          return j(e, t)
                        },
                      },
                      y.a.createElement('img', {
                        src: e.cover,
                        alt: '',
                      }),
                      'video' === e.type &&
                        e.durationStr &&
                        y.a.createElement(
                          'span',
                          {
                            className: 'duration',
                          },
                          e.durationStr
                        )
                    ),
                  y.a.createElement(
                    'div',
                    {
                      className: 'info',
                    },
                    y.a.createElement(
                      'a',
                      {
                        className: 'work-title',
                        target: '_blank',
                        rel: 'noopener',
                        href: e.detailUrl,
                        onClick: function n() {
                          return j(e, t)
                        },
                      },
                      y.a.createElement('h3', null, e.title)
                    ),
                    y.a.createElement(
                      'div',
                      {
                        className: 'extra',
                      },
                      'article' === e.type &&
                        e.readCountStr &&
                        y.a.createElement(
                          'span',
                          null,
                          e.readCountStr,
                          '\u9605\u8bfb'
                        ),
                      'video' === e.type &&
                        e.playCountStr &&
                        y.a.createElement(
                          'span',
                          null,
                          e.playCountStr,
                          '\u64ad\u653e'
                        ),
                      y.a.createElement('span', null, e.createTimeStr)
                    )
                  )
                )
              )
            })
          )
        )
      )
    }
    var ta = ea
    var na = n('5401f94f5b54273d68ed')
    var ra = function e() {
      return y.a.createElement(
        'div',
        {
          className: 'profile-license',
        },
        y.a.createElement(
          na['a'],
          null,
          y.a.createElement(
            'p',
            null,
            '\u516c\u53f8\u540d\u79f0\uff1a\u5317\u4eac\u5b57\u8282\u8df3\u52a8\u79d1\u6280\u6709\u9650\u516c\u53f8'
          )
        )
      )
    }
    var aa = ra
    function oa(e) {
      var t = ia()
      return function n() {
        var r = g()(e),
          o
        if (t) {
          var i = g()(this).constructor
          o = a()(r, arguments, i)
        } else o = r.apply(this, arguments)
        return b()(this, o)
      }
    }
    function ia() {
      if ('undefined' === typeof Reflect || !a.a) return false
      if (a.a.sham) return false
      if ('function' === typeof Proxy) return true
      try {
        Date.prototype.toString.call(a()(Date, [], function () {}))
        return true
      } catch (e) {
        return false
      }
    }
    var ca = (function (e) {
      m()(n, e)
      var t = oa(n)
      function n() {
        var e
        s()(this, n)
        e = t.apply(this, arguments)
        e.showRelation = function () {
          var t, n
          var r = e.props.data
          return !(
            '3' ===
            (null === r || void 0 === r
              ? void 0
              : null === (t = r.profileUserInfo) || void 0 === t
              ? void 0
              : null === (n = t.mediaInfo) || void 0 === n
              ? void 0
              : n.type)
          )
        }
        return e
      }
      d()(n, [
        {
          key: 'componentDidMount',
          value: function e() {
            var t = this.props.data || {},
              n = t.isSelf,
              r = t.loginUserInfo,
              a = t.identity,
              o = t.abtestInfo,
              i = t.profileUserInfo,
              c = t.relation
            var u = Object(x['m'])()
            Object(j['a'])(
              {
                pid: 'news_profile',
              },
              a
            )
            Object(A['b'])(a, o)
            Object(A['a'])('pageview', {
              page_type: 'profile_new',
              is_login: r ? 1 : 0,
              is_self: n ? 1 : 0,
              is_author: (null === r || void 0 === r ? void 0 : r.isPgc)
                ? 1
                : 0,
              referrer: document.referrer,
            })
            Object(A['a'])('enter_home_page', {
              enter_from: u.source,
              page_type: n ? 'mine_home' : 'author_home',
              author_id: i.userId,
              is_following: c.isFollowing ? 1 : 0,
              is_login: r ? 1 : 0,
              from_url: document.referrer,
            })
            var l = new O['a']({
              event: 'stay_home_page',
              params: {
                enter_from: u.source,
                page_type: n ? 'mine_home' : 'author_home',
                author_id: i.userId,
                is_following: c.isFollowing ? 1 : 0,
                is_login: r ? 1 : 0,
                from_url: document.referrer,
              },
            })
            l.start()
          },
        },
        {
          key: 'render',
          value: function e() {
            var t, n, r, a, o, i, c, u
            var l =
              null === (t = this.props) || void 0 === t
                ? void 0
                : null === (n = t.data) || void 0 === n
                ? void 0
                : n.loginUserInfo
            var s = {
              page_name: (
                null === (r = this.props) || void 0 === r
                  ? void 0
                  : null === (a = r.data) || void 0 === a
                  ? void 0
                  : a.isSelf
              )
                ? 'mine_home'
                : 'author_home',
            }
            return y.a.createElement(
              k['a'].Provider,
              {
                value:
                  null === (o = this.props) || void 0 === o ? void 0 : o.data,
              },
              y.a.createElement(
                'div',
                {
                  className: 'profile-container',
                },
                y.a.createElement(M, {
                  userInfo: l && {
                    avatarUrl: l.avatarUrl,
                    userId: l.userId,
                    name: l.name,
                  },
                  logParams: s,
                }),
                y.a.createElement(rt, {
                  logParams: s,
                }),
                y.a.createElement(
                  'div',
                  {
                    className: 'main-wrapper',
                  },
                  y.a.createElement(
                    'div',
                    {
                      className: 'main-l',
                    },
                    y.a.createElement(w['a'], null, y.a.createElement(qr, null))
                  ),
                  y.a.createElement(
                    'div',
                    {
                      className: 'main-r',
                    },
                    y.a.createElement(ta, {
                      profileToken:
                        null === (i = this.props) || void 0 === i
                          ? void 0
                          : null === (c = i.data) || void 0 === c
                          ? void 0
                          : null === (u = c.profileUserInfo) || void 0 === u
                          ? void 0
                          : u.userId,
                    }),
                    y.a.createElement(aa, null)
                  )
                ),
                y.a.createElement(Gr['a'], {
                  showHome: true,
                  logParams: s,
                })
              )
            )
          },
        },
      ])
      return n
    })(y.a.Component)
    ca.getDerivedHeadElement = (function () {
      var e = u()(
        i.a.mark(function e(t, n) {
          var r
          return i.a.wrap(function e(t) {
            while (1)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt('return', {
                    head: y.a.createElement(
                      y.a.Fragment,
                      null,
                      false && false,
                      y.a.createElement(
                        'title',
                        null,
                        null === n || void 0 === n
                          ? void 0
                          : null === (r = n.data) || void 0 === r
                          ? void 0
                          : r.title,
                        ' - \u4eca\u65e5\u5934\u6761(www.toutiao.com)'
                      )
                    ),
                    position: 'after',
                  })
                case 1:
                case 'end':
                  return t.stop()
              }
          }, e)
        })
      )
      return function (t, n) {
        return e.apply(this, arguments)
      }
    })()
  },
  '47244cda85051673e101': function (e, t, n) {},
  '4801e98867402f33e3f9': function (e, t, n) {},
  '4c4ea2a98c1c93e67edd': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return i
    })
    var r = n('cca19b4e684695ffc3da')
    var a = n.n(r)
    var o = n('663529bce6ee6d8996f5')
    function i() {
      if ('undefined' === typeof window) return
      o['a'].csrf.getCSRFToken()
      o['a'].csrf.getTTAntiToken().then(function (e) {
        var t = e.data || {}
        if ('Success' === t.message) {
          var n
          var r = null === (n = t.data) || void 0 === n ? void 0 : n.token
          if (r)
            a.a.set('tt_anti_token', r, {
              expires: 365,
            })
        }
      })
    }
  },
  '4cd34af9804139d60939': function (e, t, n) {},
  '4e16ef1abe038022cfb8': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return r
    })
    function r(e, t) {
      window.Slardar &&
        window.Slardar('config', {
          pid: e.pid,
          slardar_web_id: t.user_id || t.web_id,
        })
    }
  },
  '4fc4ab1a10c05441b62b': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return x
    })
    var r = n('8baad6854b7235c2e103')
    var a = n('0a85e9668458aebfdc91')
    var o = n('ffefcdf7dd8e3bcb704c')
    var i = n('04c233c55b3dbc9a7c1d')
    var c = n('c5e07f1c13900756393d')
    var u = n('69084d01d3449fc1bc27')
    var l = n.n(u)
    var s = l.a.createContext({
      value: '',
      checkedPrev: function e() {},
      checkedNext: function e() {},
      onChange: function e() {},
    })
    var f = s
    var d = n('9ab2f1ff086dee039972')
    var v = function e(t) {
      var n = t.children,
        r = t.index,
        a = t.option
      var o = Object(u['useContext'])(f)
      var i = Object(u['useRef'])(null)
      Object(u['useEffect'])(
        function () {
          var e
          if (o.value === a)
            null === (e = i.current) || void 0 === e ? void 0 : e.focus()
        },
        [o.value]
      )
      function c(e) {
        e.stopPropagation()
        switch (e.keyCode) {
          case d['a'].SPACE:
          case d['a'].ENTER:
            e.preventDefault()
            o.onChange(a)
            break
          case d['a'].UP:
            o.checkedPrev(r)
            break
          case d['a'].DOWN:
            o.checkedNext(r)
            break
          default:
            break
        }
      }
      function s() {
        if (!o.value && 0 === r) return 0
        if (o.value === a) return 0
        return -1
      }
      return l.a.cloneElement(n, {
        role: 'radio',
        'aria-checked': a === o.value,
        tabIndex: s(),
        ref: i,
        onKeyDown: c,
      })
    }
    var m = v
    function p(e) {
      '@babel/helpers - typeof'
      if ('function' === typeof Symbol && 'symbol' === typeof Symbol.iterator)
        p = function e(t) {
          return typeof t
        }
      else
        p = function e(t) {
          return t &&
            'function' === typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t
        }
      return p(e)
    }
    function b(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    }
    function h(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        r.enumerable = r.enumerable || false
        r.configurable = true
        if ('value' in r) r.writable = true
        Object.defineProperty(e, r.key, r)
      }
    }
    function g(e, t, n) {
      if (t) h(e.prototype, t)
      if (n) h(e, n)
      return e
    }
    function _(e, t) {
      if ('function' !== typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: true,
          configurable: true,
        },
      })
      if (t) y(e, t)
    }
    function y(e, t) {
      y =
        Object.setPrototypeOf ||
        function e(t, n) {
          t.__proto__ = n
          return t
        }
      return y(e, t)
    }
    function w(e) {
      var t = A()
      return function n() {
        var r = j(e),
          a
        if (t) {
          var o = j(this).constructor
          a = Reflect.construct(r, arguments, o)
        } else a = r.apply(this, arguments)
        return E(this, a)
      }
    }
    function E(e, t) {
      if (t && ('object' === p(t) || 'function' === typeof t)) return t
      return k(e)
    }
    function k(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return e
    }
    function A() {
      if ('undefined' === typeof Reflect || !Reflect.construct) return false
      if (Reflect.construct.sham) return false
      if ('function' === typeof Proxy) return true
      try {
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        )
        return true
      } catch (e) {
        return false
      }
    }
    function j(e) {
      j = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function e(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
      return j(e)
    }
    var x = (function (e) {
      _(n, e)
      var t = w(n)
      function n() {
        var e
        b(this, n)
        e = t.apply(this, arguments)
        e.handleCheckedPrev = function (t) {
          var n = (t - 1 + e.props.options.length) % e.props.options.length
          e.props.onChange(e.props.options[n])
        }
        e.handleCheckedNext = function (t) {
          var n = (t + 1) % e.props.options.length
          e.props.onChange(e.props.options[n])
        }
        return e
      }
      g(n, [
        {
          key: 'render',
          value: function e() {
            var t = this.props,
              n = t.children,
              r = t.value,
              a = t.onChange
            return l.a.createElement(
              f.Provider,
              {
                value: {
                  value: r,
                  checkedPrev: this.handleCheckedPrev,
                  checkedNext: this.handleCheckedNext,
                  onChange: a,
                },
              },
              l.a.cloneElement(n, {
                role: 'radiogroup',
                'aria-label': this.props['aria-label'],
              })
            )
          },
        },
      ])
      return n
    })(l.a.Component)
    x.RadioButton = m
  },
  '53955f9dab771af04369': function (e, t, n) {
    'use strict'
    var r = n('69084d01d3449fc1bc27')
    var a = n.n(r)
    var o = n('174811872339f1d02c40')
    var i = n.n(o)
    var c = n('5616f33a71e39794ee3e')
    var u = n('546ca7f10f62589ab9f4')
    var l = n('b65c96faf0c123cf88e4')
    var s = n('38c58096afa111fcdfd2')
    var f = function e(t) {
      var n
      var r = t.data,
        o = t.logInfo,
        f = t.logParams,
        d = t.footer,
        v = t.onDislike,
        m = t.onClickToDetail
      var p =
        (null === (n = r.coverUrls) || void 0 === n ? void 0 : n.length) || 0
      var b = (r.coverUrls || []).slice(0, 4)
      var h = r.isStick && 1 === r.stickStyle
      return a.a.createElement(
        'div',
        {
          className: i()('feed-card-article', {
            'no-cover': !p,
            'single-cover': p > 0 && p < 4,
            'multi-cover': p >= 4,
          }),
        },
        p > 0 &&
          p < 4 &&
          a.a.createElement(
            'div',
            {
              className: 'feed-card-article-r',
            },
            a.a.createElement(l['a'], {
              cover: b[0],
              articleUrl: r.articleUrl,
              desc: r.title,
              logInfo: o,
              onClickToDetail: m,
            })
          ),
        a.a.createElement(
          'div',
          {
            className: 'feed-card-article-l',
          },
          a.a.createElement(
            s['a'],
            {
              className: 'title',
              href: r.articleUrl,
              target: '_blank',
              rel: 'noopener',
              'aria-label': ''
                .concat(r.isStick ? '\u7f6e\u9876\uff0c' : '')
                .concat(r.title),
              logInfo: o,
              onClick: m,
            },
            a.a.createElement(
              'h2',
              {
                title: r.title,
              },
              r.title
            )
          ),
          p >= 4 &&
            a.a.createElement(
              'ul',
              {
                className: 'cover-list',
              },
              b.map(function (e, t) {
                return a.a.createElement(
                  'li',
                  {
                    key: t,
                  },
                  a.a.createElement(l['a'], {
                    cover: e,
                    articleUrl: r.articleUrl,
                    logInfo: o,
                    onClickToDetail: m,
                  })
                )
              })
            ),
          d ||
            a.a.createElement(c['a'], {
              leftTools: [
                h &&
                  a.a.createElement(u['f'], {
                    key: 'tag',
                    text: '\u7f6e\u9876',
                  }),
                a.a.createElement(u['a'], {
                  key: 'author',
                  userInfo: r.userInfo,
                  source: r.source,
                  logInfo: f,
                }),
                a.a.createElement(u['b'], {
                  key: 'comment',
                  inside: 0 === r.articleType,
                  commentCount: r.commentCount,
                  articleUrl: r.articleUrl,
                  logInfo: o,
                  onClickToDetail: m,
                }),
                a.a.createElement(u['g'], {
                  key: 'time',
                  timestamp: r.timestamp,
                }),
              ],
              rightTools: [
                !r.isStick &&
                  a.a.createElement(u['c'], {
                    key: 'dislike',
                    data: {
                      itemId: r.itemId,
                      groupId: r.groupId,
                    },
                    onDislike: v,
                  }),
              ],
            })
        )
      )
    }
    t['a'] = f
  },
  '5401f94f5b54273d68ed': function (e, t, n) {
    'use strict'
    var r = n('69084d01d3449fc1bc27')
    var a = n.n(r)
    var o = n('3ce3cae18387fd3ef8b6')
    var i = n.n(o)
    var c = n('d1de1ecd4cfc41254218')
    var u = n.n(c)
    var l = n('e659acf6991f02d5cf55')
    var s = n.n(l)
    var f = function e(t) {
      return a.a.createElement(
        'div',
        {
          role: 'contentinfo',
          'aria-label': '\u516c\u53f8\u6267\u7167',
          className: 'company-wrapper',
        },
        a.a.createElement(
          'p',
          null,
          ' \xa9 ',
          new Date().getFullYear(),
          ' \u4eca\u65e5\u5934\u6761'
        ),
        a.a.createElement(
          'a',
          {
            href: 'http://www.shdf.gov.cn/shdf/channels/740.html',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          a.a.createElement('img', {
            className: 'shdf',
            src: i.a,
          }),
          '\xa0\u626b\u9ec4\u6253\u975e\u7f51\u4e0a\u4e3e\u62a5'
        ),
        a.a.createElement('br', null),
        a.a.createElement(
          'a',
          {
            href: 'http://www.piyao.org.cn/yybgt/index.htm',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          '\u7f51\u7edc\u8c23\u8a00\u66dd\u5149\u53f0'
        ),
        a.a.createElement('br', null),
        a.a.createElement(
          'a',
          {
            href: '//www.12377.cn/',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          '\u4e2d\u56fd\u4e92\u8054\u7f51\u4e3e\u62a5\u4e2d\u5fc3'
        ),
        a.a.createElement('br', null),
        a.a.createElement(
          'p',
          null,
          '\u672a\u6210\u5e74\u4eba\u76f8\u5173\u4e3e\u62a5\uff1a400-140-2108 \u63095'
        ),
        a.a.createElement(
          'a',
          {
            href: '//tsm.miit.gov.cn/dxxzsp/',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          '\u4eacICP\u8bc1140141\u53f7'
        ),
        a.a.createElement('br', null),
        a.a.createElement(
          'a',
          {
            href: '//beian.miit.gov.cn',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          '\u4eacICP\u590712025439\u53f7-3'
        ),
        a.a.createElement(
          'a',
          {
            href: '/license/',
            target: '_blank',
          },
          '\xa0\u7f51\u7edc\u6587\u5316\u7ecf\u8425\u8bb8\u53ef\u8bc1'
        ),
        a.a.createElement('br', null),
        a.a.createElement(
          'a',
          {
            href: '/business_license/',
            target: '_blank',
          },
          '\u8425\u4e1a\u6267\u7167'
        ),
        a.a.createElement(
          'p',
          null,
          '\u4eac-\u975e\u7ecf\u8425\u6027-2016-0081'
        ),
        a.a.createElement(
          'p',
          null,
          '\u4e92\u8054\u7f51\u836f\u54c1\u4fe1\u606f\u670d\u52a1\u8d44\u683c\u8bc1\u4e66'
        ),
        a.a.createElement(
          'a',
          {
            href: '/a3642705768/',
            target: '_blank',
          },
          '\u8ddf\u5e16\u8bc4\u8bba\u81ea\u5f8b\u7ba1\u7406\u627f\u8bfa\u4e66'
        ),
        a.a.createElement('br', null),
        a.a.createElement(
          'a',
          {
            href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002002023',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          a.a.createElement('img', {
            className: 'gongan',
            src: u.a,
          }),
          '\xa0\u4eac\u516c\u7f51\u5b89\u5907 11000002002023\u53f7'
        ),
        t.children
      )
    }
    t['a'] = f
  },
  '546ca7f10f62589ab9f4': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return c
    })
    n.d(t, 'b', function () {
      return m
    })
    n.d(t, 'g', function () {
      return h
    })
    n.d(t, 'c', function () {
      return C
    })
    n.d(t, 'e', function () {
      return U
    })
    n.d(t, 'd', function () {
      return L
    })
    n.d(t, 'f', function () {
      return F
    })
    var r = n('69084d01d3449fc1bc27')
    var a = n.n(r)
    var o = n('b47836c813468e99d194')
    var i = function e(t) {
      var n = t.userInfo,
        r = t.source,
        o = t.logInfo
      var i = null
      if (n)
        i = n.userSecToken
          ? '/c/user/token/'
              .concat(n.userSecToken, '/?source=')
              .concat(null === o || void 0 === o ? void 0 : o.page_name)
          : ''
      return a.a.createElement(
        'div',
        {
          className: 'feed-card-footer-cmp-author',
        },
        i &&
          a.a.createElement(
            'a',
            {
              href: i,
              target: '_blank',
              rel: 'noopener',
            },
            null === n || void 0 === n ? void 0 : n.name
          ),
        !i &&
          a.a.createElement(
            'span',
            {
              className: 'source',
            },
            r
          )
      )
    }
    var c = i
    var u = n('174811872339f1d02c40')
    var l = n.n(u)
    var s = n('7ca4db6440f85a7a6df5')
    var f = n('be6323750fae7868d676')
    var d = n('38c58096afa111fcdfd2')
    var v = function e(t) {
      var n = t.commentCount,
        r = t.articleUrl,
        o = t.styleType,
        i = void 0 === o ? '1' : o,
        c = t.inside,
        u = void 0 === c ? true : c,
        s = t.logInfo,
        v = t.onClickToDetail
      return a.a.createElement(
        'div',
        {
          className: l()('feed-card-footer-comment-cmp', {
            'style-2': '2' === i,
          }),
        },
        a.a.createElement(
          d['a'],
          {
            href: u ? ''.concat(r, '#comment') : r,
            target: '_blank',
            rel: 'noopener',
            logInfo: s,
            onClick: v,
            'aria-label': '\u8bc4\u8bba\u6570'.concat(n),
          },
          '2' === i && a.a.createElement('i', null),
          Object(f['i'])(n),
          '1' === i && '\u8bc4\u8bba'
        )
      )
    }
    var m = v
    var p = n('7801182153876d8ab215')
    var b = function e(t) {
      return a.a.createElement(
        'div',
        {
          className: 'feed-card-footer-time-cmp',
        },
        Object(f['j'])(t.timestamp)
      )
    }
    var h = b
    var g = n('67b7230afda0f2d40a92')
    var _ = n.n(g)
    var y = n('91e23d109ce8d2fa247c')
    var w = n.n(y)
    var E = n('c7601c7a671b6dcebbc8')
    var k = n('663529bce6ee6d8996f5')
    var A = n('7009f854fb449fc1b23d')
    var j = n('a5b25f8e99db71c1fcf2')
    var x = n('d84b833f284337beaf9b')
    var O = function e(t) {
      var n = t.data,
        o = t.onDislike
      var i = Object(r['useContext'])(A['a'])
      var c = Object(r['useRef'])(false)
      function u() {
        return l.apply(this, arguments)
      }
      function l() {
        l = w()(
          _.a.mark(function e() {
            var t
            return _.a.wrap(
              function e(r) {
                while (1)
                  switch ((r.prev = r.next)) {
                    case 0:
                      if (!c.current) {
                        r.next = 2
                        break
                      }
                      return r.abrupt('return')
                    case 2:
                      if (Object(j['a'])(i)) {
                        r.next = 4
                        break
                      }
                      return r.abrupt('return')
                    case 4:
                      r.prev = 4
                      c.current = true
                      r.next = 8
                      return k['a'].user.dislikeFeed(n.itemId, n.groupId)
                    case 8:
                      t = r.sent
                      if ('success' === t.data.message) {
                        o()
                        x['a'].info(
                          '\u5c06\u51cf\u5c11\u63a8\u8350\u7c7b\u4f3c\u5185\u5bb9'
                        )
                      } else
                        x['a'].info(
                          '\u64cd\u4f5c\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5'
                        )
                      c.current = false
                      r.next = 17
                      break
                    case 13:
                      r.prev = 13
                      r.t0 = r['catch'](4)
                      c.current = false
                      x['a'].info(
                        '\u7f51\u7edc\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5'
                      )
                    case 17:
                    case 'end':
                      return r.stop()
                  }
              },
              e,
              null,
              [[4, 13]]
            )
          })
        )
        return l.apply(this, arguments)
      }
      function s(e) {
        var t = e.keyCode
        if (13 === t || 32 === t) {
          e.preventDefault()
          e.stopPropagation()
          u()
        }
      }
      return a.a.createElement(
        'div',
        {
          className: 'feed-card-footer-dislike-cmp',
        },
        a.a.createElement(
          'div',
          {
            className: 'dislike-wrapper',
            role: 'button',
            tabIndex: 0,
            onKeyDown: s,
          },
          a.a.createElement('i', {
            className: 'dislike-icon',
          }),
          a.a.createElement(
            'div',
            {
              className: 'dislike-btn',
              onClick: u,
            },
            '\u4e0d\u611f\u5174\u8da3'
          )
        )
      )
    }
    var C = O
    var I = n('428fcc3216b28ebf1917')
    var S = n.n(I)
    var T = n('600ef62ec3ad32ec1243')
    var N = function e(t) {
      var n = Object(r['useRef'])(null)
      Object(r['useEffect'])(function () {
        if (n.current) {
          var e = new S.a(n.current)
          e.on('success', function () {
            var e
            x['a'].info(
              '\u5df2\u590d\u5236\u6587\u7ae0\u94fe\u63a5\n\u53bb\u5206\u4eab\u5427'
            )
            null === (e = t.onSuccess) || void 0 === e ? void 0 : e.call(t)
            setTimeout(function () {
              var e
              null === (e = n.current) || void 0 === e ? void 0 : e.focus()
            }, 2500)
          })
        }
      }, [])
      return a.a.createElement(
        'div',
        {
          className: 'feed-card-footer-share-cmp',
        },
        a.a.createElement(
          'button',
          {
            type: 'button',
            className: 'inner',
            ref: n,
            'data-clipboard-text': t.articleUrl,
          },
          a.a.createElement('i', null),
          a.a.createElement('span', null, '\u5206\u4eab')
        )
      )
    }
    var U = N
    var D = n('5f490fd0667aa88b93fb')
    var R = function e(t) {
      var n = Object(r['useRef'])(false)
      var o = Object(r['useContext'])(A['a'])
      function i() {
        return c.apply(this, arguments)
      }
      function c() {
        c = w()(
          _.a.mark(function e() {
            var r
            return _.a.wrap(
              function e(a) {
                while (1)
                  switch ((a.prev = a.next)) {
                    case 0:
                      if (Object(j['a'])(t.loginUserInfo || o)) {
                        a.next = 2
                        break
                      }
                      return a.abrupt('return')
                    case 2:
                      if (!n.current) {
                        a.next = 4
                        break
                      }
                      return a.abrupt('return')
                    case 4:
                      a.prev = 4
                      n.current = true
                      a.next = 8
                      return k['a'].user.diggArticle(
                        t.groupId,
                        t.isLiked ? -1 : 1
                      )
                    case 8:
                      r = a.sent
                      if (!('success' === r.data.message)) {
                        a.next = 14
                        break
                      }
                      t.onLikeChange(t.isLiked ? 0 : 1)
                      n.current = false
                      a.next = 15
                      break
                    case 14:
                      throw new Error(r.data.message)
                    case 15:
                      a.next = 22
                      break
                    case 17:
                      a.prev = 17
                      a.t0 = a['catch'](4)
                      x['a'].info(
                        '\u64cd\u4f5c\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5'
                      )
                      n.current = false
                      void 0
                    case 22:
                    case 'end':
                      return a.stop()
                  }
              },
              e,
              null,
              [[4, 17]]
            )
          })
        )
        return c.apply(this, arguments)
      }
      return a.a.createElement(
        'div',
        {
          className: 'feed-card-footer-like-cmp',
        },
        a.a.createElement(
          'button',
          {
            type: 'button',
            'aria-label': ''.concat(
              Object(f['i'])(t.likeCount),
              '\u70b9\u8d5e'
            ),
            'aria-pressed': t.isLiked,
            className: l()('inner', {
              liked: t.isLiked,
            }),
            onClick: i,
          },
          a.a.createElement('i', null),
          a.a.createElement('span', null, Object(f['i'])(t.likeCount))
        )
      )
    }
    var L = R
    var P = n('0faef3a5864b370ab140')
    var M = function e(t) {
      return a.a.createElement(
        'div',
        {
          className: 'feed-card-footer-tag-cmp',
        },
        t.text
      )
    }
    var F = M
  },
  '54b2d6dda1f17486c719': function (e, t, n) {
    'use strict'
    var r = n('bd2555d9b4311aab9971')
    var a = n.n(r)
    var o = new a.a()
    var i = {
      REFRESH: 'feed_action_refresh',
      CHANGE_CHANNEL: 'feed_action_change_channel',
      SCROLL_TO_TOP: 'feed_action_scrollTo_top',
      PLAY_VIDEO: 'play_video',
    }
    var c = {
      refresh: function e(t) {
        o.addListener(i.REFRESH, t)
      },
      scrollToTop: function e(t) {
        o.addListener(i.SCROLL_TO_TOP, t)
      },
      changeChannel: function e(t) {
        o.addListener(i.CHANGE_CHANNEL, t)
      },
      playVideo: function e(t) {
        o.addListener(i.PLAY_VIDEO, t)
      },
    }
    var u = {
      refresh: function e(t) {
        o.removeListener(i.REFRESH, t)
      },
      scrollToTop: function e(t) {
        o.removeListener(i.SCROLL_TO_TOP, t)
      },
      changeChannel: function e(t) {
        o.removeListener(i.CHANGE_CHANNEL, t)
      },
      playVideo: function e(t) {
        o.removeListener(i.PLAY_VIDEO, t)
      },
    }
    var l = {
      refresh: function e() {
        o.emit(i.REFRESH)
      },
      scrollToTop: function e() {
        o.emit(i.SCROLL_TO_TOP)
      },
      changeChannel: function e(t, n) {
        o.emit(i.CHANGE_CHANNEL, t, n)
      },
      playVideo: function e(t) {
        o.emit(i.PLAY_VIDEO, t)
      },
    }
    t['a'] = {
      on: c,
      off: u,
      emit: l,
    }
  },
  '54d78c4ccd85f964eb38': function (e, t, n) {
    e.exports = n.p + 'svgs/video_icon.a243e80b.svg'
  },
  '551b08500577ddfa1bce': function (e, t, n) {
    'use strict'
    n.r(t)
    ;(function (e) {
      n.d(t, 'getServerSideInitialProps', function () {
        return h
      })
      var r = n('67b7230afda0f2d40a92')
      var a = n.n(r)
      var o = n('91e23d109ce8d2fa247c')
      var i = n.n(o)
      var c = n('6ebc429a21c1841afaf9')
      var u = n('150fc7282b1f8ece2655')
      var l = n.n(u)
      var s = n('3a714220fffd07ce0f25')
      var f = n('8f733a24568c21239759')
      var d = n.n(f)
      var v = n('467f8ddf0f7422983796')
      var m = n('4c4ea2a98c1c93e67edd')
      var p = n('ecc80ba510baa97c03b0')
      var b = n('1e57c421e41f48e4643f')
      Object(u['hot'])(e)(v['a'])
      Object(m['a'])()
      Object(p['a'])()
      Object(b['a'])()
      Object(s['a'])(v['a'])
      t['default'] = v['a']
      var h = (function () {
        var e = i()(
          a.a.mark(function e(t) {
            var n
            return a.a.wrap(function e(r) {
              while (1)
                switch ((r.prev = r.next)) {
                  case 0:
                    return r.abrupt('return', {
                      data:
                        null === (n = t.ctx) || void 0 === n
                          ? void 0
                          : n.initialData,
                      query: t.query,
                    })
                  case 1:
                  case 'end':
                    return r.stop()
                }
            }, e)
          })
        )
        return function t(n) {
          return e.apply(this, arguments)
        }
      })()
    }.call(this, n('f18f0631214408a1bad3')(e)))
  },
  '55545edfe9557f8e9717': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return f
    })
    var r = n('69084d01d3449fc1bc27')
    var a = n.n(r)
    var o = n('e6c0fa9948fe7e0bc082')
    var i = n.n(o)
    var c = n('41e81a6b6b2e87160a0d')
    var u = n('5616f33a71e39794ee3e')
    var l = n('546ca7f10f62589ab9f4')
    var s = n('3913995df42cd6165f91')
    var f = function e(t) {
      var n = t.data,
        r = t.logParams,
        o = t.footer,
        i = t.onPlay,
        c = t.onEnded,
        f = t.onHalfEnded,
        d = t.onReplay,
        v = t.onClickToDetail
      return a.a.createElement(
        'div',
        {
          className: 'feed-card-video-multi-item',
        },
        a.a.createElement(
          'div',
          {
            className: 'feed-video-item',
          },
          a.a.createElement(s['a'], {
            data: {
              cover: n.cover,
              duration: n.duration,
              videoId: n.videoId,
            },
            onPlay: function e() {
              i(n.groupId)
            },
            onEnded: function e(t) {
              c(n.groupId, t)
            },
            onReplay: function e() {
              d(n.groupId)
            },
            onHalfEnded: function e(t) {
              null === f || void 0 === f ? void 0 : f(n.groupId, t)
            },
          })
        ),
        a.a.createElement(
          'a',
          {
            className: 'title',
            href: n.detailUrl,
            target: '_blank',
            rel: 'noopener',
            title: n.title,
            onClick: v,
          },
          a.a.createElement('h2', null, n.title)
        ),
        a.a.createElement(
          'div',
          {
            className: 'footer',
          },
          o ||
            a.a.createElement(u['a'], {
              leftTools: [
                a.a.createElement(l['a'], {
                  key: 'author',
                  userInfo: n.userInfo,
                  source: n.source,
                  logInfo: r,
                }),
                a.a.createElement(l['b'], {
                  key: 'comment',
                  commentCount: n.commentCount,
                  articleUrl: n.detailUrl,
                  inside: false,
                  onClickToDetail: v,
                }),
                a.a.createElement(l['g'], {
                  key: 'time',
                  timestamp: n.timestamp,
                }),
              ],
              rightTools: [],
            })
        )
      )
    }
    var d = function e(t) {
      var n = t.data,
        r = t.logParams,
        o = t.onClickToDetail,
        i = t.onPlay,
        u = t.onEnded,
        l = t.onHalfEnded,
        s = t.onReplay
      return a.a.createElement(
        c['a'],
        {
          cell: n,
        },
        a.a.createElement(
          'div',
          {
            className: 'feed-card-video-multi',
          },
          a.a.createElement(
            'ul',
            null,
            n.map(function (e) {
              return a.a.createElement(
                'li',
                {
                  key: e.groupId,
                },
                a.a.createElement(f, {
                  data: e,
                  logParams: r,
                  onClickToDetail: function t() {
                    return o(e.groupId)
                  },
                  onPlay: i,
                  onEnded: u,
                  onHalfEnded: l,
                  onReplay: s,
                })
              )
            })
          )
        )
      )
    }
    t['b'] = d
  },
  '5613e404f8159a52fc2b': function (e, t, n) {},
  '5616f33a71e39794ee3e': function (e, t, n) {
    'use strict'
    var r = n('69084d01d3449fc1bc27')
    var a = n.n(r)
    var o = n('ab64641ae399574b8de3')
    var i = n.n(o)
    var c = function e(t) {
      return a.a.createElement(
        'div',
        {
          className: 'feed-card-footer-cmp',
        },
        a.a.createElement(
          'div',
          {
            className: 'left-tools',
          },
          t.leftTools
        ),
        a.a.createElement(
          'div',
          {
            className: 'right-tools',
          },
          t.rightTools
        )
      )
    }
    t['a'] = c
  },
  '5704ef5558b67d65ccc1': function (e, t, n) {},
  '583766baffb257cbf38f': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return a
    })
    var r
    function a(e) {
      if ('undefined' === typeof document) return 0
      if (e || void 0 === r) {
        var t = document.createElement('div')
        t.style.width = '100%'
        t.style.height = '200px'
        var n = document.createElement('div')
        var a = n.style
        a.position = 'absolute'
        a.top = '0'
        a.left = '0'
        a.pointerEvents = 'none'
        a.visibility = 'hidden'
        a.width = '200px'
        a.height = '150px'
        a.overflow = 'hidden'
        n.appendChild(t)
        document.body.appendChild(n)
        var o = t.offsetWidth
        n.style.overflow = 'scroll'
        var i = t.offsetWidth
        if (o === i) i = n.clientWidth
        document.body.removeChild(n)
        r = o - i
      }
      return r
    }
  },
  '5f490fd0667aa88b93fb': function (e, t, n) {},
  '600ef62ec3ad32ec1243': function (e, t, n) {},
  '62ea6c1add15eea97123': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return f
    })
    var r = n('4c49014db78c8239e1c9')
    var a = n.n(r)
    var o = n('9e3b015f2d1ca367b131')
    var i = n.n(o)
    var c = n('04c233c55b3dbc9a7c1d')
    var u = n.n(c)
    var l = n('56e9e14be0f919933f17')
    var s = n.n(l)
    function f(e, t) {
      if (!e || !t) return {}
      var n = {}
      var r = Object.keys(e)
      r.forEach(function (e) {
        n[e] = t.style[e]
      })
      r.forEach(function (n) {
        t.style[n] = e[n]
      })
      return n
    }
  },
  '663529bce6ee6d8996f5': function (e, t, n) {
    'use strict'
    var r = {}
    n.r(r)
    n.d(r, 'getProfileTabs', function () {
      return T
    })
    n.d(r, 'getRecentList', function () {
      return N
    })
    n.d(r, 'getFeedData', function () {
      return U
    })
    n.d(r, 'getFavData', function () {
      return D
    })
    n.d(r, 'getFollowData', function () {
      return R
    })
    n.d(r, 'getFeedList', function () {
      return L
    })
    n.d(r, 'getHotNews', function () {
      return P
    })
    n.d(r, 'getHotList', function () {
      return M
    })
    n.d(r, 'getRelatedList', function () {
      return F
    })
    n.d(r, 'getFeedApiData', function () {
      return V
    })
    n.d(r, 'getDetailRelatedList', function () {
      return K
    })
    n.d(r, 'getDetailFeedList', function () {
      return B
    })
    n.d(r, 'getDetailHotList', function () {
      return W
    })
    var a = {}
    n.r(a)
    n.d(a, 'getWeatherCity', function () {
      return Q
    })
    n.d(a, 'getWeatherData', function () {
      return q
    })
    var o = {}
    n.r(o)
    n.d(o, 'getFansStat', function () {
      return Y
    })
    n.d(o, 'followUser', function () {
      return Z
    })
    n.d(o, 'unfollowUser', function () {
      return X
    })
    n.d(o, 'getFansList', function () {
      return $
    })
    n.d(o, 'getFollowingList', function () {
      return ee
    })
    var i = {}
    n.r(i)
    n.d(i, 'followUsers', function () {
      return ie
    })
    n.d(i, 'submitFeedback', function () {
      return ce
    })
    n.d(i, 'likeArticle', function () {
      return ue
    })
    n.d(i, 'dislikeArticle', function () {
      return le
    })
    n.d(i, 'delUgcVideo', function () {
      return se
    })
    n.d(i, 'delUgcContent', function () {
      return fe
    })
    n.d(i, 'dislikeFeed', function () {
      return de
    })
    n.d(i, 'feedbackContent', function () {
      return ve
    })
    n.d(i, 'repostContent', function () {
      return me
    })
    n.d(i, 'diggArticle', function () {
      return pe
    })
    var c = {}
    n.r(c)
    n.d(c, 'getCSRFToken', function () {
      return be
    })
    n.d(c, 'getTTAntiToken', function () {
      return he
    })
    var u = {}
    n.r(u)
    n.d(u, 'getReplyList', function () {
      return Ee
    })
    n.d(u, 'getTabComments', function () {
      return ke
    })
    n.d(u, 'submitComment', function () {
      return Ae
    })
    n.d(u, 'submitReply', function () {
      return je
    })
    n.d(u, 'commentAction', function () {
      return xe
    })
    n.d(u, 'diggReply', function () {
      return Oe
    })
    n.d(u, 'reportUser', function () {
      return Ce
    })
    var l = {}
    n.r(l)
    n.d(l, 'getSearchSug', function () {
      return Se
    })
    n.d(l, 'getHotWord', function () {
      return Te
    })
    var s = {}
    n.r(s)
    n.d(s, 'getWritingsList', function () {
      return De
    })
    n.d(s, 'getSearchList', function () {
      return Re
    })
    n.d(s, 'toTopItem', function () {
      return Le
    })
    n.d(s, 'cancelTopItem', function () {
      return Pe
    })
    n.d(s, 'getPopularWorks', function () {
      return Me
    })
    var f = n('020ba8dae3d3021d9966')
    var d = n.n(f)
    var v = n('2b4fba5b8716cb99e98e')
    var m = n.n(v)
    var p = n('bd61c3e57dc18e488613')
    var b = n.n(p)
    var h = n('8f4085b35f259db3270e')
    var g = n.n(h)
    var _ = n('92285e035e86b5e44a25')
    var y = n.n(_)
    var w = n('babc388b3bd2ae4e69b5')
    var E = n.n(w)
    var k = n('2e2e432f825443caa710')
    var A = n.n(k)
    var j = n('a99d8596674b8a971a00')
    var x = n('a52ab4297c6c7cd8920c')
    var O = n.n(x)
    var C = n('10130cfc2ba27a09b7e5')
    function I(e, t) {
      var n = E()(e)
      if (y.a) {
        var r = y()(e)
        if (t)
          r = r.filter(function (t) {
            return g()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function S(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          I(Object(n), true).forEach(function (t) {
            A()(e, t, n[t])
          })
        else if (b.a) m()(e, b()(n))
        else
          I(Object(n)).forEach(function (t) {
            d()(e, t, g()(n, t))
          })
      }
      return e
    }
    function T(e) {
      var t = O.a.stringify({
        token: e,
      })
      return j['a'].post('/api/pc/user/tabs_info', t)
    }
    function N(e, t) {
      return j['a'].get('/api/pc/media_hot/', {
        params: {
          media_id: t,
          user_token: e,
        },
      })
    }
    function U(e, t, n) {
      if ('profile_collection' === e)
        return j['a'].get('/api/pc/list/feed', {
          params: {
            category: e,
            token: t,
            max_behot_time: n,
          },
        })
      return j['a'].get('/api/pc/feed/', {
        params: {
          category: e,
          utm_source: 'toutiao',
          visit_user_token: t,
          max_behot_time: n,
        },
      })
    }
    function D(e, t) {
      return j['a'].get('/c/user/favourite/', {
        params: {
          page_type: 2,
          user_token: e,
          max_behot_time: 0,
          count: 20,
          max_repin_time: t,
        },
      })
    }
    function R(e, t, n) {
      var r = 'following' === e ? '/c/user/following/' : '/c/user/followed/'
      return j['a'].get(r, {
        params: {
          user_token: t,
          cursor: n,
          count: 20,
        },
      })
    }
    function L(e, t) {
      return j['a'].get(e, {
        params: t,
      })
    }
    function P() {
      return j['a'].get('/api/pc/realtime_news/')
    }
    function M() {
      return j['a'].get('/hot-event/hot-board/?origin=toutiao_pc')
    }
    function F(e) {
      return j['a'].get('/api/article/related/', {
        params: {
          group_id: e,
        },
      })
    }
    function V(e) {
      var t = 'pc_profile_channel'
      if (e.channel_id === C['a'].all.channelId) t = 'pc_profile_recommend'
      return j['a'].get('/api/pc/list/feed', {
        params: S(
          S({}, e),
          {},
          {
            category: t,
          }
        ),
      })
    }
    function K(e) {
      return j['a'].get('/api/pc/list/feed', {
        params: {
          channel_id: 94349561185,
          category: 'pc_profile_channel',
          gid_need_related: e.gid,
        },
      })
    }
    function B(e) {
      return j['a'].get('/api/pc/list/feed', {
        params: S(
          {
            channel_id: 0,
            category: 'pc_profile_recommend',
            need_top: false,
          },
          e
        ),
      })
    }
    function W(e) {
      return j['a'].get('/api/pc/list/feed', {
        params: {
          min_behot_time: 0,
          category: 'pc_profile_article',
          author_token: e.userId,
        },
      })
    }
    function z(e, t) {
      var n = E()(e)
      if (y.a) {
        var r = y()(e)
        if (t)
          r = r.filter(function (t) {
            return g()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function H(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          z(Object(n), true).forEach(function (t) {
            A()(e, t, n[t])
          })
        else if (b.a) m()(e, b()(n))
        else
          z(Object(n)).forEach(function (t) {
            d()(e, t, g()(n, t))
          })
      }
      return e
    }
    function Q() {
      return j['a'].get('/stream/widget/local_weather/city/')
    }
    function q(e) {
      return j['a'].get('/stream/widget/local_weather/data/', {
        params: H(
          {},
          e
            ? {
                city: e,
              }
            : {}
        ),
      })
    }
    function G(e, t) {
      var n = E()(e)
      if (y.a) {
        var r = y()(e)
        if (t)
          r = r.filter(function (t) {
            return g()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function J(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          G(Object(n), true).forEach(function (t) {
            A()(e, t, n[t])
          })
        else if (b.a) m()(e, b()(n))
        else
          G(Object(n)).forEach(function (t) {
            d()(e, t, g()(n, t))
          })
      }
      return e
    }
    function Y(e) {
      var t = O.a.stringify({
        token: e,
      })
      return j['a'].post('/api/pc/user/fans_stat', t)
    }
    function Z(e) {
      return j['a'].post(
        '/c/user/follow/',
        O.a.stringify({
          user_token: e,
        })
      )
    }
    function X(e) {
      return j['a'].post(
        '/c/user/unfollow/',
        O.a.stringify({
          user_token: e,
        })
      )
    }
    function $(e) {
      return j['a'].get('/api/pc/user/followed', {
        params: J(
          J({}, e),
          {},
          {
            count: 20,
          }
        ),
      })
    }
    function ee(e) {
      return j['a'].get('/api/pc/user/following', {
        params: J(
          J({}, e),
          {},
          {
            count: 20,
          }
        ),
      })
    }
    var te = n('a0199d72cedba8967335')
    var ne = n.n(te)
    var re = n('2422758950d9f66b7423')
    function ae(e, t) {
      var n = E()(e)
      if (y.a) {
        var r = y()(e)
        if (t)
          r = r.filter(function (t) {
            return g()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function oe(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          ae(Object(n), true).forEach(function (t) {
            A()(e, t, n[t])
          })
        else if (b.a) m()(e, b()(n))
        else
          ae(Object(n)).forEach(function (t) {
            d()(e, t, g()(n, t))
          })
      }
      return e
    }
    function ie(e, t) {
      return j['a'].get('/c/user/'.concat(e, '/'), {
        params: {
          user_token: t,
        },
      })
    }
    function ce(e, t, n) {
      var r = O.a.stringify({
        aid: 13,
        appkey: 'web',
        app_name: re['g'],
        contact: e,
        content: '['.concat(window.location.host, ']').concat(t),
        extra_persistent_params: ne()(n),
      })
      return j['a'].post('/feedback/2/post_message/', r, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
    }
    function ue(e, t) {
      return j['a'].post(
        '/group/repin/',
        O.a.stringify({
          group_id: e,
          item_id: t,
        })
      )
    }
    function le(e, t) {
      return j['a'].post('/group/unrepin/', null, {
        params: {
          group_id: e,
          item_id: t,
        },
      })
    }
    function se(e) {
      return j['a'].get('/c/ugc/video/delete/', {
        params: {
          item_id: e,
        },
      })
    }
    function fe(e) {
      return j['a'].post('/c/ugc/content/delete/', O.a.stringify(e))
    }
    function de(e, t) {
      return j['a'].post('/user_data/batch_action/?aid=24', {
        actions: [
          {
            action: 'dislike',
            aggr_type: 1,
            id: t,
            item_id: e,
            ad_extra: {},
            type: 1,
            timestamp: Math.floor(+new Date() / 1e3),
          },
        ],
      })
    }
    function ve(e, t, n) {
      var r =
        arguments.length > 3 && void 0 !== arguments[3]
          ? arguments[3]
          : re['e'].ARTICLE
      var a = arguments.length > 4 ? arguments[4] : void 0
      var o = arguments.length > 5 ? arguments[5] : void 0
      var i = O.a.stringify({
        group_id: e,
        report_from: o || 'web_detail_page',
        report_from2: o || 'web_detail_page',
        platform: null,
        description: t,
        source: r,
        report_types: n,
        app_key: 'toutiao-web',
      })
      var c = {
        app_name: 'toutiao-web',
        app_key: 'toutiao-web',
        aid: re['f'],
        webid: a,
      }
      return j['a'].post('/api/feedback/v1/report_content/', i, {
        params: c,
      })
    }
    function me(e) {
      return j['a'].post('/c/ugc/content/repost/', O.a.stringify(oe({}, e)))
    }
    function pe(e, t) {
      return j['a'].post('/api/pc/user/fans_digg', null, {
        params: {
          gid: e,
          op: t,
        },
      })
    }
    function be() {
      return j['a'].get('/api/pc/info')
    }
    function he() {
      return j['a'].get('/tt-anti-token')
    }
    var ge = n('cca19b4e684695ffc3da')
    var _e = n.n(ge)
    function ye(e, t) {
      var n = E()(e)
      if (y.a) {
        var r = y()(e)
        if (t)
          r = r.filter(function (t) {
            return g()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function we(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          ye(Object(n), true).forEach(function (t) {
            A()(e, t, n[t])
          })
        else if (b.a) m()(e, b()(n))
        else
          ye(Object(n)).forEach(function (t) {
            d()(e, t, g()(n, t))
          })
      }
      return e
    }
    function Ee(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
      return j['a'].get('/2/comment/v2/reply_list/', {
        params: {
          aid: re['f'],
          app_name: re['g'],
          id: e,
          offset: t,
          count: n,
          repost: r,
        },
      })
    }
    function ke(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5
      return j['a'].get('/article/v2/tab_comments/', {
        params: {
          aid: re['f'],
          app_name: re['g'],
          offset: n,
          count: r,
          group_id: e,
          item_id: t,
        },
      })
    }
    function Ae(e, t, n) {
      return j['a'].post(
        '/browser/2/data/v5/post_message/',
        O.a.stringify({
          group_id: e,
          item_id: t,
          text: n,
        }),
        {
          params: {
            aid: re['f'],
            app_name: re['g'],
          },
        }
      )
    }
    function je(e, t, n, r) {
      var a = {
        id: e,
        content: t,
      }
      if (n || r) {
        a.reply_user_id = n
        a.reply_comment_id = r
      }
      return j['a'].post(
        '/api/pc/2/comment/v3/create_reply/',
        O.a.stringify(a),
        {
          params: {
            aid: re['f'],
            app_name: re['g'],
          },
        }
      )
    }
    function xe(e, t, n) {
      return j['a'].post(
        '/api/pc/2/data/comment_action/',
        O.a.stringify({
          comment_id: e,
          group_id: t,
          item_id: n,
          action: 'digg',
        }),
        {
          params: {
            aid: re['f'],
            app_name: re['g'],
          },
        }
      )
    }
    function Oe(e, t) {
      return j['a'].get('/api/pc/2/comment/v1/digg_reply/', {
        params: {
          aid: re['f'],
          app_name: re['g'],
          id: e,
          reply_id: t,
          action: 'digg',
        },
      })
    }
    function Ce(e) {
      return j['a'].post(
        '/api/pc/feedback/2/report_user_comment/',
        O.a.stringify(
          we(
            we({}, e),
            {},
            {
              report_source: 0,
              source: 1,
              aid: re['f'],
            }
          )
        ),
        {
          params: {
            aid: re['f'],
            app_name: 'toutiao-web',
            app_key: 'toutiao-web',
            webid: _e.a.get('tt_webid'),
          },
        }
      )
    }
    var Ie = n('167789bd516d2baf7295')
    function Se(e) {
      return j['a'].get('/2/article/search_sug/', {
        params: {
          keyword: e,
          ps_type: 'sug',
          aid: 4916,
        },
      })
    }
    function Te() {
      var e = Ie['c']
        ? '/search/suggest/hot_words/'
        : 'https://tsearch.snssdk.com/search/suggest/hot_words/'
      return j['a'].get(e)
    }
    function Ne(e, t) {
      var n = E()(e)
      if (y.a) {
        var r = y()(e)
        if (t)
          r = r.filter(function (t) {
            return g()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function Ue(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          Ne(Object(n), true).forEach(function (t) {
            A()(e, t, n[t])
          })
        else if (b.a) m()(e, b()(n))
        else
          Ne(Object(n)).forEach(function (t) {
            d()(e, t, g()(n, t))
          })
      }
      return e
    }
    function De(e) {
      return j['a'].get('/api/pc/list/user/feed', {
        params: Ue({}, e),
      })
    }
    function Re(e) {
      return j['a'].get('/api/pc/list/feed', {
        params: Ue(
          Ue({}, e),
          {},
          {
            category: 'profile_search',
          }
        ),
      })
    }
    function Le(e) {
      return j['a'].post('/api/pc/user/stick', null, {
        params: {
          item_id: e,
        },
      })
    }
    function Pe(e) {
      return j['a'].post('/api/pc/user/unstick', null, {
        params: {
          item_id: e,
        },
      })
    }
    function Me(e) {
      return j['a'].get('/api/pc/list/feed', {
        params: {
          category: 'pc_user_hot',
          token: e,
        },
      })
    }
    var Fe = {
      feed: r,
      weather: a,
      relation: o,
      user: i,
      csrf: c,
      comment: u,
      search: l,
      profile: s,
    }
    var Ve = (t['a'] = Fe)
  },
  '698918b37c8f26bd36fc': function (e, t, n) {},
  '6cf195ddfada1b0033e1': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return _
    })
    n.d(t, 'b', function () {
      return y
    })
    var r = n('020ba8dae3d3021d9966')
    var a = n.n(r)
    var o = n('2b4fba5b8716cb99e98e')
    var i = n.n(o)
    var c = n('bd61c3e57dc18e488613')
    var u = n.n(c)
    var l = n('8f4085b35f259db3270e')
    var s = n.n(l)
    var f = n('92285e035e86b5e44a25')
    var d = n.n(f)
    var v = n('babc388b3bd2ae4e69b5')
    var m = n.n(v)
    var p = n('2e2e432f825443caa710')
    var b = n.n(p)
    function h(e, t) {
      var n = m()(e)
      if (d.a) {
        var r = d()(e)
        if (t)
          r = r.filter(function (t) {
            return s()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function g(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          h(Object(n), true).forEach(function (t) {
            b()(e, t, n[t])
          })
        else if (u.a) i()(e, u()(n))
        else
          h(Object(n)).forEach(function (t) {
            a()(e, t, s()(n, t))
          })
      }
      return e
    }
    function _(e, t) {
      if (!window.collectEvent) return
      window.collectEvent(e, t || {})
    }
    function y(e, t) {
      window.collectEvent(
        'config',
        g(
          g({}, e),
          {},
          {
            user_unique_id: e.web_id,
            ab_sdk_version:
              (null === t || void 0 === t ? void 0 : t.version_name) || '',
            user_agent: window.navigator.userAgent,
          }
        )
      )
      window.collectEvent('start')
    }
  },
  '6ebc429a21c1841afaf9': function (e, t, n) {
    'use strict'
    var r = n('6eb445fd5003cfdfc689')
    var a = n.n(r)
    var o = n('04c233c55b3dbc9a7c1d')
    var i = n.n(o)
    var c = n('3a97f5f6681ee5a745ff')
    var u = n.n(c)
    n('e701b1ed5d1dfb9348d2')
    n('982bf306251bb1e523ea')
    n('07ecd529ddb87d9e11e5')
    n('79175769be6cfab5b131')
    n('0633c610780e24aec328')
    n('01cc398d4b8b72e800c7')
    Object.assign = n('31a4c8eb333c5536aeaa')
    n('e5eec3cd4a425dbc621b')
    n('57b18afc192a09e6fdf3')
    n('1373275778fc92ef5d18')
    n('f97842264a2b1020c7f0')
    if ('undefined' === typeof Promise) {
      n('0d4ee9ff5eecd3f6c263').enable()
      window.Promise = n('f231c94d51b6058e28c6')
    }
  },
  7: function (e, t, n) {
    e.exports = n('551b08500577ddfa1bce')
  },
  '7009f854fb449fc1b23d': function (e, t, n) {
    'use strict'
    var r = n('69084d01d3449fc1bc27')
    var a = n.n(r)
    var o = a.a.createContext(null)
    t['a'] = o
  },
  '75bf50962692f2e139c7': function (e, t, n) {
    'use strict'
    var r = n('b6196699b5f3c8d65fe7')
    var a = n.n(r)
    var o = n('69084d01d3449fc1bc27')
    var i = n.n(o)
    var c = n('7ecc01cf6c85b1ef1c34')
    var u = n('583766baffb257cbf38f')
    var l = n('62ea6c1add15eea97123')
    var s = n('698918b37c8f26bd36fc')
    var f = n('5ee0eaa4845580757e29')
    var d = n.n(f)
    var v = n('2e0796c118320b51c6e6')
    var m = n.n(v)
    var p = n('174811872339f1d02c40')
    var b = n.n(p)
    function h(e) {
      return null === e || void 0 === e ? void 0 : e.clientWidth
    }
    var g = function e(t) {
      var n = t.children,
        r = t.onMount
      Object(o['useEffect'])(function () {
        r && r()
      }, [])
      return m.a.createPortal(n, document.body)
    }
    var _ = function e(t) {
      var n = t.visible,
        r = t.className,
        a = t.closeTimeout,
        c = void 0 === a ? 200 : a,
        u = t.children
      var l = Object(o['useState'])(n),
        s = d()(l, 2),
        f = s[0],
        v = s[1]
      var m = Object(o['useRef'])(null)
      function p() {
        if (m.current) {
          m.current.classList.add('modal-show')
          m.current.classList.remove('modal-hide')
          h(m.current)
          m.current.classList.add('modal-anime-show')
          m.current.classList.remove('modal-anime-hide')
        }
      }
      function _() {
        if (m.current) {
          m.current.classList.add('modal-anime-hide')
          m.current.classList.remove('modal-anime-show')
        }
        setTimeout(function () {
          var e, t
          null === (e = m.current) || void 0 === e
            ? void 0
            : e.classList.add('modal-hide')
          null === (t = m.current) || void 0 === t
            ? void 0
            : t.classList.remove('modal-show')
        }, c)
      }
      Object(o['useEffect'])(
        function () {
          if (n) {
            v(true)
            if (m.current) p()
          } else _()
        },
        [n]
      )
      if (f)
        return i.a.createElement(
          g,
          {
            onMount: p,
          },
          i.a.createElement(
            'div',
            {
              className: b()('tt-modal-wrapper', r),
              ref: m,
            },
            u
          )
        )
      return null
    }
    var y = _
    var w = '.first-focus-el'
    var E = '.initial-focus-el'
    var k = function e(t) {
      var n = t.className,
        r = t.title,
        a = t.visible,
        c = t.maskClosable,
        s = void 0 === c ? true : c,
        f = t.onClose,
        d = t.onOk,
        v = t.children,
        m = t.footer
      var p = Object(o['useRef'])({})
      var b = Object(o['useRef'])(null)
      var h = Object(o['useRef'])(null)
      var g = Object(o['useRef'])(null)
      var _ = Object(o['useRef'])(null)
      function k() {
        f()
      }
      function A() {
        d && d()
      }
      function j() {
        if (s) k()
      }
      function x() {
        h.current = document.activeElement
        setTimeout(function () {
          if (!b.current) return
          g.current = b.current.querySelector(w)
          if (!g.current)
            g.current = b.current.querySelector('.tt-modal-close-btn')
          var e = b.current.querySelector(E)
          if (e) {
            var t
            null === (t = e.focus) || void 0 === t ? void 0 : t.call(e)
          } else {
            var n
            null === (n = g.current) || void 0 === n ? void 0 : n.focus()
          }
        })
      }
      function O() {
        var e
        null === (e = h.current) || void 0 === e ? void 0 : e.focus()
      }
      var C = Object(o['useCallback'])(function (e) {
        if (27 === e.keyCode) k()
      }, [])
      var I = Object(o['useCallback'])(function (e) {
        var t = e.target
        if (!b.current || !t) return
        if (t.dataset.focusTrapDisable) return
        try {
          if (t === _.current || !(16 & b.current.compareDocumentPosition(t))) {
            var n
            null === (n = g.current) || void 0 === n ? void 0 : n.focus()
          }
        } catch (r) {
          void 0
        }
      }, [])
      Object(o['useEffect'])(
        function () {
          if (a) {
            var e = Object(u['a'])()
            p.current = Object(l['a'])(
              {
                overflow: 'hidden',
                width: 'calc(100% - '.concat(e, 'px)'),
              },
              document.body
            )
            window.addEventListener('keydown', C)
            window.addEventListener('focus', I, true)
            x()
          } else {
            Object(l['a'])(p.current, document.body)
            window.removeEventListener('keydown', C)
            window.removeEventListener('focus', I, true)
            O()
          }
          return function () {
            window.removeEventListener('keydown', C)
            window.removeEventListener('focus', I, true)
            O()
          }
        },
        [a, C, I]
      )
      return i.a.createElement(
        y,
        {
          visible: a,
          className: n,
        },
        i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement('div', {
            className: 'modal-mask',
            onClick: j,
          }),
          i.a.createElement(
            'div',
            {
              role: 'dialog',
              'aria-modal': true,
              'aria-label': r,
              className: 'tt-modal',
              ref: b,
            },
            i.a.createElement(
              'div',
              {
                className: 'tt-modal-header',
              },
              i.a.createElement(
                'span',
                {
                  className: 'tt-modal-title',
                },
                r
              ),
              i.a.createElement(
                'button',
                {
                  type: 'button',
                  'aria-label': '\u5173\u95ed\u5f39\u7a97',
                  className: 'tt-modal-close-btn',
                  onClick: k,
                },
                i.a.createElement('i', {
                  className: 'bui-icon icon-close-big',
                })
              )
            ),
            i.a.createElement(
              'div',
              {
                className: 'tt-modal-body',
              },
              v
            ),
            i.a.createElement(
              'div',
              {
                className: 'tt-modal-footer',
              },
              m
                ? m
                : i.a.createElement(
                    'div',
                    {
                      className: 'tt-modal-footer-btn',
                    },
                    i.a.createElement(
                      'button',
                      {
                        type: 'button',
                        className: 'btn-cancel',
                        onClick: k,
                      },
                      '\u53d6\u6d88'
                    ),
                    i.a.createElement(
                      'button',
                      {
                        type: 'button',
                        className: 'btn-ok',
                        onClick: A,
                      },
                      '\u786e\u8ba4'
                    )
                  )
            ),
            i.a.createElement('div', {
              tabIndex: 0,
              ref: _,
            })
          )
        )
      )
    }
    var A = (t['a'] = function (e) {
      return i.a.createElement(c['a'], null, i.a.createElement(k, a()({}, e)))
    })
  },
  '7801182153876d8ab215': function (e, t, n) {},
  '7c04e1c6a9d8a4a067f5': function (e, t, n) {},
  '7c4288154d94f45c1e67': function (e, t, n) {},
  '7ca4db6440f85a7a6df5': function (e, t, n) {},
  '7d92094057582d9db023': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return l
    })
    var r = n('69084d01d3449fc1bc27')
    var a = n.n(r)
    var o = n('174811872339f1d02c40')
    var i = n.n(o)
    var c = n('302e7cd491a3c75c7a06')
    var u = n.n(c)
    var l = {
      NETWORK_ERR:
        '\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5',
      SERVICE_ERR:
        '\u52a0\u8f7d\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5',
    }
    var s = function e(t) {
      var n = t.count,
        r = t.errorTips
      return a.a.createElement(
        'div',
        {
          className: i()('feed-m-top-refresh', {
            'fade-out': !!n || r,
          }),
        },
        a.a.createElement(
          'div',
          {
            className: i()('refresh-loading', {
              show: !n && !r,
            }),
          },
          a.a.createElement('i', null)
        ),
        a.a.createElement(
          'p',
          {
            className: i()('refresh-increase-count', {
              show: !!n || r,
              error: r,
            }),
          },
          r ||
            '\u4eca\u65e5\u5934\u6761\u63a8\u8350\u5f15\u64ce\u6709 '.concat(
              n,
              ' \u6761\u66f4\u65b0'
            )
        )
      )
    }
    t['b'] = s
  },
  '7f9308912c4b86f89747': function (e, t, n) {
    'use strict'
    var r = n('3a97f5f6681ee5a745ff')
    var a = n('69084d01d3449fc1bc27')
    var o = n.n(a)
    var i = n('2e0796c118320b51c6e6')
    var c = n.n(i)
    var u = n('8baad6854b7235c2e103')
    var l = n('0a85e9668458aebfdc91')
    var s = n('ffefcdf7dd8e3bcb704c')
    var f = n('04c233c55b3dbc9a7c1d')
    var d = n('c5e07f1c13900756393d')
    var v = n('174811872339f1d02c40')
    var m = n.n(v)
    var p = n('c0148195f357fac179f5')
    function b(e) {
      '@babel/helpers - typeof'
      if ('function' === typeof Symbol && 'symbol' === typeof Symbol.iterator)
        b = function e(t) {
          return typeof t
        }
      else
        b = function e(t) {
          return t &&
            'function' === typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t
        }
      return b(e)
    }
    function h(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    }
    function g(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        r.enumerable = r.enumerable || false
        r.configurable = true
        if ('value' in r) r.writable = true
        Object.defineProperty(e, r.key, r)
      }
    }
    function _(e, t, n) {
      if (t) g(e.prototype, t)
      if (n) g(e, n)
      return e
    }
    function y(e, t) {
      if ('function' !== typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: true,
          configurable: true,
        },
      })
      if (t) w(e, t)
    }
    function w(e, t) {
      w =
        Object.setPrototypeOf ||
        function e(t, n) {
          t.__proto__ = n
          return t
        }
      return w(e, t)
    }
    function E(e) {
      var t = j()
      return function n() {
        var r = x(e),
          a
        if (t) {
          var o = x(this).constructor
          a = Reflect.construct(r, arguments, o)
        } else a = r.apply(this, arguments)
        return k(this, a)
      }
    }
    function k(e, t) {
      if (t && ('object' === b(t) || 'function' === typeof t)) return t
      return A(e)
    }
    function A(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return e
    }
    function j() {
      if ('undefined' === typeof Reflect || !Reflect.construct) return false
      if (Reflect.construct.sham) return false
      if ('function' === typeof Proxy) return true
      try {
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        )
        return true
      } catch (e) {
        return false
      }
    }
    function x(e) {
      x = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function e(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
      return x(e)
    }
    var O = (function (e) {
      y(n, e)
      var t = E(n)
      function n() {
        var e
        h(this, n)
        e = t.apply(this, arguments)
        e.state = {
          fade: false,
        }
        e.toastEl = null
        return e
      }
      _(n, [
        {
          key: 'componentDidMount',
          value: function e() {
            var t = this
            var n
            var r = document.activeElement
            null === (n = this.toastEl) || void 0 === n ? void 0 : n.focus()
            this.timer = setTimeout(function () {
              var e
              t.setState({
                fade: true,
              })
              null === (e = r) || void 0 === e ? void 0 : e.focus()
            }, 2e3)
          },
        },
        {
          key: 'componentWillUnmount',
          value: function e() {
            clearTimeout(this.timer)
          },
        },
        {
          key: 'render',
          value: function e() {
            var t = this
            var n = this.state.fade
            var r = this.props.msg
            return o.a.createElement(
              'div',
              {
                role: 'alert',
                tabIndex: 0,
                'aria-label': r,
                ref: function e(n) {
                  t.toastEl = n
                },
                className: m()('ttp-toast', {
                  fade: n,
                }),
              },
              r
            )
          },
        },
      ])
      return n
    })(o.a.PureComponent)
    function C(e) {
      var t = document.createElement('div')
      document.body.appendChild(t)
      function n(e) {
        c.a.render(o.a.createElement(O, Object.assign({}, e)), t)
      }
      function r() {
        var e = c.a.unmountComponentAtNode(t)
        if (e && t.parentNode) t.parentNode.removeChild(t)
      }
      n(Object.assign({}, e))
      setTimeout(function () {
        return r()
      }, 3e3)
    }
    O.info = function (e) {
      return C({
        msg: e,
      })
    }
    var I = (t['a'] = O)
  },
  '7ff40e675dfee032084a': function (e, t, n) {
    'use strict'
    var r = n('69084d01d3449fc1bc27')
    var a = n.n(r)
    var o = n('9551a6727f53aa482a36')
    var i = n.n(o)
    var c = n('41e81a6b6b2e87160a0d')
    var u = n('5616f33a71e39794ee3e')
    var l = n('546ca7f10f62589ab9f4')
    var s = n('3913995df42cd6165f91')
    var f = function e(t) {
      var n = t.data,
        r = t.logParams,
        o = t.footer,
        i = t.onDislike,
        f = t.onClickToDetail
      return a.a.createElement(
        c['a'],
        {
          cell: n,
        },
        a.a.createElement(
          'div',
          {
            className: 'feed-card-video-single',
          },
          a.a.createElement(
            'div',
            {
              className: 'r-content',
            },
            a.a.createElement(
              'div',
              {
                className: 'feed-video-item',
              },
              a.a.createElement(s['a'], {
                data: {
                  cover: n.cover,
                  duration: n.duration,
                  videoId: n.videoId,
                },
                disableVideo: true,
                detailUrl: n.detailUrl,
                onClickToDetail: f,
              })
            )
          ),
          a.a.createElement(
            'div',
            {
              className: 'l-content',
            },
            a.a.createElement(
              'div',
              {
                className: 'title-wrapper',
              },
              a.a.createElement(
                'a',
                {
                  className: 'title',
                  href: n.detailUrl,
                  target: '_blank',
                  rel: 'noopener',
                  onClick: f,
                },
                a.a.createElement('h2', null, n.title)
              )
            ),
            a.a.createElement(
              'div',
              {
                className: 'footer',
              },
              o ||
                a.a.createElement(u['a'], {
                  leftTools: [
                    a.a.createElement(l['a'], {
                      key: 'author',
                      userInfo: n.userInfo,
                      source: n.source,
                      logInfo: r,
                    }),
                    a.a.createElement(l['b'], {
                      key: 'comment',
                      commentCount: n.commentCount,
                      articleUrl: n.detailUrl,
                      inside: false,
                      onClickToDetail: f,
                    }),
                    a.a.createElement(l['g'], {
                      key: 'time',
                      timestamp: n.timestamp,
                    }),
                  ],
                  rightTools: [
                    a.a.createElement(l['c'], {
                      key: 'dislike',
                      data: {
                        groupId: n.groupId,
                        itemId: n.itemId,
                      },
                      onDislike: i,
                    }),
                  ],
                })
            )
          )
        )
      )
    }
    t['a'] = f
  },
  '8116b1c855dbba59c8a8': function (e, t, n) {},
  '86458b0d0c4daedfcb4f': function (e, t, n) {
    'use strict'
    var r = n('67b7230afda0f2d40a92')
    var a = n.n(r)
    var o = n('91e23d109ce8d2fa247c')
    var i = n.n(o)
    var c = n('5ee0eaa4845580757e29')
    var u = n.n(c)
    var l = n('69084d01d3449fc1bc27')
    var s = n.n(l)
    var f = n('174811872339f1d02c40')
    var d = n.n(f)
    var v = n('4fc4ab1a10c05441b62b')
    var m = n('9d35318f143127ea9561')
    var p = n.n(m)
    var b = n('663529bce6ee6d8996f5')
    var h = n('be6323750fae7868d676')
    var g = n('6cf195ddfada1b0033e1')
    var _ = n('75bf50962692f2e139c7')
    var y = n('d84b833f284337beaf9b')
    var w = [
      {
        id: '302',
        value: '\u5e7f\u544a',
      },
      {
        id: '303',
        value: '\u91cd\u590d\u3001\u65e7\u95fb',
      },
      {
        id: '3',
        value: '\u683c\u5f0f\u95ee\u9898',
      },
      {
        id: '304',
        value: '\u4f4e\u4fd7',
      },
      {
        id: '316',
        value: '\u6807\u9898\u5938\u5f20',
      },
      {
        id: '301',
        value: '\u4e0e\u4e8b\u5b9e\u4e0d\u7b26',
      },
    ]
    var E = 'https://mp.toutiao.com/profile_v3_public/public/apply-complain'
    var k = function e(t) {
      var n = t.groupId,
        r = t.source,
        o = t.from,
        c = t.webid,
        f = t.tabIndex,
        m = t.onModalOpen,
        p = t.onModalClose
      var k = Object(l['useState'])(false),
        A = u()(k, 2),
        j = A[0],
        x = A[1]
      var O = Object(l['useState'])(false),
        C = u()(O, 2),
        I = C[0],
        S = C[1]
      var T = Object(l['useState'])([]),
        N = u()(T, 2),
        U = N[0],
        D = N[1]
      var R = Object(l['useState'])(''),
        L = u()(R, 2),
        P = L[0],
        M = L[1]
      function F() {
        x(true)
        null === m || void 0 === m ? void 0 : m()
      }
      function V() {
        x(false)
        null === p || void 0 === p ? void 0 : p()
      }
      function K(e) {
        D([e.target.value])
      }
      var B = Object(h['s'])(function (e) {
        M(e.target.value)
      }, 300)
      function W(e, t) {
        e.preventDefault()
        var n =
          'https://mp.toutiao.com/profile_v3_public/public/apply-complain' +
          '?type='
            .concat(t, '&origin_url=')
            .concat(encodeURIComponent(window.location.href))
        window.open(n)
      }
      function z() {
        return H.apply(this, arguments)
      }
      function H() {
        H = i()(
          a.a.mark(function e() {
            var t, i
            return a.a.wrap(
              function e(a) {
                while (1)
                  switch ((a.prev = a.next)) {
                    case 0:
                      Object(g['a'])('report_article')
                      a.prev = 1
                      t = I ? ['315'] : U
                      if (!(!t || !t.length)) {
                        a.next = 5
                        break
                      }
                      return a.abrupt('return')
                    case 5:
                      a.next = 7
                      return b['a'].user.feedbackContent(
                        n,
                        P,
                        t.join(','),
                        r,
                        c,
                        o
                      )
                    case 7:
                      i = a.sent
                      if (!('success' === i.data.message)) {
                        a.next = 12
                        break
                      }
                      x(false)
                      setTimeout(function () {
                        y['a'].info('\u53cd\u9988\u6210\u529f')
                      }, 0)
                      return a.abrupt('return')
                    case 12:
                      throw new Error(i.data.message)
                    case 15:
                      a.prev = 15
                      a.t0 = a['catch'](1)
                      y['a'].info(
                        '\u64cd\u4f5c\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5'
                      )
                      void 0
                    case 19:
                    case 'end':
                      return a.stop()
                  }
              },
              e,
              null,
              [[1, 15]]
            )
          })
        )
        return H.apply(this, arguments)
      }
      function Q() {
        S(!I)
        D([])
      }
      function q(e) {
        var t = e.keyCode
        if (32 === t || 13 === t) {
          e.preventDefault()
          F()
        }
      }
      function G(e) {
        D([e])
      }
      return s.a.createElement(
        s.a.Fragment,
        null,
        s.a.createElement(
          'div',
          {
            tabIndex: f || 0,
            role: 'button',
            'aria-label': '\u4e3e\u62a5',
            className: 'detail-report',
            onClick: F,
            onKeyDown: q,
          },
          s.a.createElement('i', null),
          s.a.createElement('span', null, '\u4e3e\u62a5')
        ),
        s.a.createElement(
          _['a'],
          {
            title: '\u4e3e\u62a5\u6587\u7ae0\u95ee\u9898',
            visible: j,
            onClose: V,
            onOk: z,
          },
          s.a.createElement(
            'div',
            {
              className: 'report-modal-content',
            },
            s.a.createElement(
              v['a'],
              {
                'aria-label': '\u9009\u62e9\u539f\u56e0',
                options: w.map(function (e) {
                  return e.id
                }),
                value: U[0],
                onChange: G,
              },
              s.a.createElement(
                'div',
                null,
                w.map(function (e, t) {
                  return s.a.createElement(
                    v['a'].RadioButton,
                    {
                      key: e.id,
                      index: t,
                      option: e.id,
                    },
                    s.a.createElement(
                      'div',
                      {
                        className: 'option',
                      },
                      s.a.createElement(
                        'label',
                        {
                          htmlFor: 'reportType-'.concat(e.id),
                        },
                        e.value
                      ),
                      s.a.createElement('input', {
                        'aria-hidden': true,
                        tabIndex: -1,
                        type: 'radio',
                        id: 'reportType-'.concat(e.id),
                        name: 'reportType',
                        value: e.id,
                        checked: U[0] === e.id,
                        onChange: K,
                      })
                    )
                  )
                })
              )
            ),
            s.a.createElement(
              'div',
              {
                className: 'option',
              },
              s.a.createElement(
                'a',
                {
                  className: 'link-btn',
                  href: E,
                  onClick: function e(t) {
                    return W(t, '2')
                  },
                },
                '\u6284\u88ad'
              )
            ),
            s.a.createElement(
              'div',
              {
                className: 'option',
              },
              s.a.createElement(
                'a',
                {
                  className: 'link-btn',
                  href: E,
                  onClick: function e(t) {
                    return W(t, '3')
                  },
                },
                '\u4fb5\u72af\u540d\u8a89/\u5546\u8a89/\u8096\u50cf/\u9690\u79c1\u6743'
              )
            ),
            s.a.createElement(
              'div',
              {
                className: d()('option other-reason', {
                  open: I,
                }),
              },
              s.a.createElement(
                'button',
                {
                  type: 'button',
                  onClick: Q,
                },
                '\u5176\u4ed6\u95ee\u9898\uff0c\u6211\u8981\u5410\u69fd',
                s.a.createElement('i', null)
              ),
              s.a.createElement('textarea', {
                onChange: B,
              })
            )
          )
        )
      )
    }
    t['a'] = k
  },
  '89fc23cc70b02aad75a9': function (e, t, n) {},
  '8e472dbfb80da30ee3f4': function (e, t, n) {},
  '8f733a24568c21239759': function (e, t, n) {},
  '91ccd34fe1d322fa1c32': function (e, t, n) {
    'use strict'
    n.d(t, 'c', function () {
      return O
    })
    n.d(t, 'b', function () {
      return C
    })
    var r = n('020ba8dae3d3021d9966')
    var a = n.n(r)
    var o = n('2b4fba5b8716cb99e98e')
    var i = n.n(o)
    var c = n('bd61c3e57dc18e488613')
    var u = n.n(c)
    var l = n('8f4085b35f259db3270e')
    var s = n.n(l)
    var f = n('92285e035e86b5e44a25')
    var d = n.n(f)
    var v = n('babc388b3bd2ae4e69b5')
    var m = n.n(v)
    var p = n('2e2e432f825443caa710')
    var b = n.n(p)
    var h = n('69084d01d3449fc1bc27')
    var g = n.n(h)
    var _ = n('f916861225cf3448ecd3')
    var y = n.n(_)
    var w = n('fb622297466e7a637f99')
    var E = n('be6323750fae7868d676')
    var k = n('55545edfe9557f8e9717')
    var A = n('7ff40e675dfee032084a')
    function j(e, t) {
      var n = m()(e)
      if (d.a) {
        var r = d()(e)
        if (t)
          r = r.filter(function (t) {
            return s()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function x(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          j(Object(n), true).forEach(function (t) {
            b()(e, t, n[t])
          })
        else if (u.a) i()(e, u()(n))
        else
          j(Object(n)).forEach(function (t) {
            a()(e, t, s()(n, t))
          })
      }
      return e
    }
    function O(e) {
      var t, n
      var r =
        (null === (t = e.large_image_list) || void 0 === t ? void 0 : t[0]) ||
        e.middle_image ||
        (null === (n = e.video_detail_info) || void 0 === n
          ? void 0
          : n.detail_video_large_image)
      if (!r || !r.url) return ''
      return r.url.replace(/^http:/, '')
    }
    function C(e) {
      var t = Object(E['d'])(e, 1)
      return +t
    }
    function I(e) {
      if (0 === e.cell_type) return [e]
      return (e.data || []).slice(0, 2)
    }
    function S(e, t) {
      var n, r
      if (null === (n = t.log_pb) || void 0 === n ? void 0 : n.impr_id)
        return t.log_pb
      return x(
        x({}, t.log_pb),
        {},
        {
          impr_id: null === (r = e.log_pb) || void 0 === r ? void 0 : r.impr_id,
        }
      )
    }
    var T = function e(t) {
      var n = t.cell,
        r = t.logParams,
        a = t.onDislike
      var o = Object(h['useRef'])(false)
      var i = Object(h['useRef'])(false)
      var c = Object(h['useRef'])(0)
      var u = I(n).map(function (e) {
        return {
          title: e.title,
          cover: O(e),
          duration: e.video_duration,
          videoId: e.video_id,
          groupId: e.group_id,
          itemId: e.item_id,
          detailUrl: 'https://www.ixigua.com/i'.concat(e.group_id, '/'),
          userInfo: e.user_info && {
            name: e.user_info.name,
            userSecToken: e.user_info.user_id,
          },
          source: e.source,
          commentCount: e.comment_count,
          timestamp: e.publish_time,
          log_pb: S(n, e),
          group_id: e.group_id,
          group_source: e.group_source,
          cell_type: n.cell_type,
          __channel_id: n.__channel_id,
          __channel_info: n.__channel_info,
          __type: n.__type,
          __log_enter_from: n.__log_enter_from,
          __log_impr_type: n.__log_impr_type,
        }
      })
      var l = u.length
      function s() {
        var e
        a(n)
        Object(w['i'])(u[0], {
          is_following: (
            null === (e = u[0].userInfo) || void 0 === e ? void 0 : e.follow
          )
            ? '1'
            : '0',
          article_type: 'shipin',
        })
      }
      function f(e) {
        var t, a
        var o = u.filter(function (t) {
          return t.group_id === e
        })[0]
        Object(w['b'])(
          x(
            x(
              {
                area:
                  n.__log_area ||
                  ('all' ===
                  (null === (t = n.__channel_info) || void 0 === t
                    ? void 0
                    : t.key)
                    ? 'feed'
                    : 'category'),
                gid: e,
                href: o.detailUrl,
              },
              r
            ),
            {},
            {
              category_name:
                null === (a = n.__channel_info) || void 0 === a
                  ? void 0
                  : a.category,
            }
          )
        )
      }
      function d(e) {
        if (o.current) return
        var t = u.filter(function (t) {
          return t.group_id === e
        })[0]
        Object(w['r'])(t, {})
        o.current = true
      }
      function v(e, t) {
        if (i.current) return
        var n = 0
        var r = 0
        var a = 0
        var o = 0
        try {
          n = ((null === t || void 0 === t ? void 0 : t.played) || []).reduce(
            function (e, t) {
              if (t.end < 0) return e
              return e + (t.end - t.begin)
            },
            0
          )
          r = n - c.current
          a = C((r / t.vd) * 100)
          o = C((c.current / t.vd) * 100)
        } catch (s) {
          void 0
        }
        var l = u.filter(function (t) {
          return t.group_id === e
        })[0]
        Object(w['q'])(l, {
          duration: ~~(1e3 * r),
          percent: a,
          from_percent: o,
        })
        i.current = true
        c.current = n
      }
      function m(e, t) {
        v(e, t)
        o.current = false
        i.current = false
      }
      function p() {
        o.current = false
        i.current = false
        c.current = 0
      }
      if (!l) return null
      return g.a.createElement(
        'div',
        {
          className: 'feed-card-wrapper feed-card-video-wrapper',
        },
        l > 1
          ? g.a.createElement(k['b'], {
              data: u,
              logParams: r,
              onClickToDetail: f,
              onPlay: d,
              onEnded: v,
              onHalfEnded: m,
              onReplay: p,
            })
          : g.a.createElement(A['a'], {
              data: u[0],
              logParams: r,
              onDislike: s,
              onClickToDetail: function e() {
                return f(u[0].groupId)
              },
            })
      )
    }
    t['a'] = T
  },
  '93fd3eb7060d3a0ca436': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return l
    })
    var r = n('8e69b3d65fe197ac8eac')
    var a = n.n(r)
    var o = n('b202eb72faae84e11513')
    var i = n.n(o)
    var c = {
      '[\u5fae\u7b11]': {
        index: 1,
        name: '[\u5fae\u7b11]',
        image: 'emoji_1_smile@3x.png',
        key: 'emoji_1_smile@3x.png',
        width: 96,
        height: 96,
      },
      '[\u7231\u6155]': {
        index: 2,
        name: '[\u7231\u6155]',
        image: 'emoji_2_kiss@3x.png',
        key: 'emoji_2_kiss@3x.png',
        width: 96,
        height: 96,
      },
      '[\u60ca\u5446]': {
        index: 3,
        name: '[\u60ca\u5446]',
        image: 'emoji_3_daze@3x.png',
        key: 'emoji_3_daze@3x.png',
        width: 96,
        height: 96,
      },
      '[\u9177\u62fd]': {
        index: 4,
        name: '[\u9177\u62fd]',
        image: 'emoji_4_cool@3x.png',
        key: 'emoji_4_cool@3x.png',
        width: 96,
        height: 96,
      },
      '[\u62a0\u9f3b]': {
        index: 5,
        name: '[\u62a0\u9f3b]',
        image: 'emoji_5_pick_nose@3x.png',
        key: 'emoji_5_pick_nose@3x.png',
        width: 96,
        height: 96,
      },
      '[\u6d41\u6cea]': {
        index: 6,
        name: '[\u6d41\u6cea]',
        image: 'emoji_6_cry@3x.png',
        key: 'emoji_6_cry@3x.png',
        width: 96,
        height: 96,
      },
      '[\u53d1\u6012]': {
        index: 7,
        name: '[\u53d1\u6012]',
        image: 'emoji_7_anger@3x.png',
        key: 'emoji_7_anger@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5472\u7259]': {
        index: 8,
        name: '[\u5472\u7259]',
        image: 'emoji_8_laugh@3x.png',
        key: 'emoji_8_laugh@3x.png',
        width: 96,
        height: 96,
      },
      '[\u9f3e\u7761]': {
        index: 9,
        name: '[\u9f3e\u7761]',
        image: 'emoji_9_sleep@3x.png',
        key: 'emoji_9_sleep@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5bb3\u7f9e]': {
        index: 10,
        name: '[\u5bb3\u7f9e]',
        image: 'emoji_10_shy@3x.png',
        key: 'emoji_10_shy@3x.png',
        width: 96,
        height: 96,
      },
      '[\u53ef\u7231]': {
        index: 11,
        name: '[\u53ef\u7231]',
        image: 'emoji_11_naughty@3x.png',
        key: 'emoji_11_naughty@3x.png',
        width: 102,
        height: 96,
      },
      '[\u6655]': {
        index: 12,
        name: '[\u6655]',
        image: 'emoji_12_dizzy@3x.png',
        key: 'emoji_12_dizzy@3x.png',
        width: 96,
        height: 96,
      },
      '[\u8870]': {
        index: 13,
        name: '[\u8870]',
        image: 'emoji_13_stunned@3x.png',
        key: 'emoji_13_stunned@3x.png',
        width: 96,
        height: 96,
      },
      '[\u95ed\u5634]': {
        index: 14,
        name: '[\u95ed\u5634]',
        image: 'emoji_14_shut_up@3x.png',
        key: 'emoji_14_shut_up@3x.png',
        width: 96,
        height: 96,
      },
      '[\u673a\u667a]': {
        index: 15,
        name: '[\u673a\u667a]',
        image: 'emoji_15_wit@3x.png',
        key: 'emoji_15_wit@3x.png',
        width: 96,
        height: 96,
      },
      '[\u7075\u5149\u4e00\u95ea]': {
        index: 17,
        name: '[\u7075\u5149\u4e00\u95ea]',
        image: 'emoji_17_hand_sample@3x.png',
        key: 'emoji_17_hand_sample@3x.png',
        width: 102,
        height: 96,
      },
      '[\u8036]': {
        index: 18,
        name: '[\u8036]',
        image: 'emoji_18_ye@3x.png',
        key: 'emoji_18_ye@3x.png',
        width: 99,
        height: 96,
      },
      '[\u6342\u8138]': {
        index: 19,
        name: '[\u6342\u8138]',
        image: 'emoji_19_distress_situation@3x.png',
        key: 'emoji_19_distress_situation@3x.png',
        width: 96,
        height: 96,
      },
      '[\u6253\u8138]': {
        index: 20,
        name: '[\u6253\u8138]',
        image: 'emoji_20_play_face@3x.png',
        key: 'emoji_20_play_face@3x.png',
        width: 102,
        height: 96,
      },
      '[\u5927\u7b11]': {
        index: 21,
        name: '[\u5927\u7b11]',
        image: 'emoji_21_smile@3x.png',
        key: 'emoji_21_smile@3x.png',
        width: 96,
        height: 96,
      },
      '[\u54c8\u6b20]': {
        index: 22,
        name: '[\u54c8\u6b20]',
        image: 'emoji_22_yawn@3x.png',
        key: 'emoji_22_yawn@3x.png',
        width: 96,
        height: 96,
      },
      '[\u9707\u60ca]': {
        index: 23,
        name: '[\u9707\u60ca]',
        image: 'emoji_23_surprise@3x.png',
        key: 'emoji_23_surprise@3x.png',
        width: 96,
        height: 96,
      },
      '[\u9001\u5fc3]': {
        index: 24,
        name: '[\u9001\u5fc3]',
        image: 'emoji_24_take_heart@3x.png',
        key: 'emoji_24_take_heart@3x.png',
        width: 96,
        height: 96,
      },
      '[\u56f0]': {
        index: 25,
        name: '[\u56f0]',
        image: 'emoji_25_sleepy@3x.png',
        key: 'emoji_25_sleepy@3x.png',
        width: 96,
        height: 96,
      },
      '[what]': {
        index: 26,
        name: '[what]',
        image: 'emoji_26_what@3x.png',
        key: 'emoji_26_what@3x.png',
        width: 105,
        height: 96,
      },
      '[\u6ce3\u4e0d\u6210\u58f0]': {
        index: 27,
        name: '[\u6ce3\u4e0d\u6210\u58f0]',
        image: 'emoji_27_sobbing@3x.png',
        key: 'emoji_27_sobbing@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5c0f\u9f13\u638c]': {
        index: 28,
        name: '[\u5c0f\u9f13\u638c]',
        image: 'emoji_28_handclap@3x.png',
        key: 'emoji_28_handclap@3x.png',
        width: 96,
        height: 96,
      },
      '[\u9177]': {
        index: 29,
        name: '[\u9177]',
        image: 'emoji_29_cool@3x.png',
        key: 'emoji_29_cool@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5927\u91d1\u7259]': {
        index: 29,
        name: '[\u5927\u91d1\u7259]',
        image: 'emoji_29_cool@3x.png',
        key: 'emoji_29_cool@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5077\u7b11]': {
        index: 30,
        name: '[\u5077\u7b11]',
        image: 'emoji_30_titter@3x.png',
        key: 'emoji_30_titter@3x.png',
        width: 96,
        height: 96,
      },
      '[\u77f3\u5316]': {
        index: 31,
        name: '[\u77f3\u5316]',
        image: 'emoji_31_lightning_strike@3x.png',
        key: 'emoji_31_lightning_strike@3x.png',
        width: 96,
        height: 96,
      },
      '[\u601d\u8003]': {
        index: 32,
        name: '[\u601d\u8003]',
        image: 'emoji_32_meditation@3x.png',
        key: 'emoji_32_meditation@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5410\u8840]': {
        index: 33,
        name: '[\u5410\u8840]',
        image: 'emoji_33_vomiting_blood@3x.png',
        key: 'emoji_33_vomiting_blood@3x.png',
        width: 96,
        height: 96,
      },
      '[\u53ef\u601c]': {
        index: 34,
        name: '[\u53ef\u601c]',
        image: 'emoji_34_acting_cute@3x.png',
        key: 'emoji_34_acting_cute@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5618]': {
        index: 35,
        name: '[\u5618]',
        image: 'emoji_35_quietly@3x.png',
        key: 'emoji_35_quietly@3x.png',
        width: 96,
        height: 96,
      },
      '[\u6487\u5634]': {
        index: 36,
        name: '[\u6487\u5634]',
        image: 'emoji_36_hum@3x.png',
        key: 'emoji_36_hum@3x.png',
        width: 96,
        height: 96,
      },
      '[\u9ed1\u7ebf]': {
        index: 37,
        name: '[\u9ed1\u7ebf]',
        image: 'emoji_37_khan@3x.png',
        key: 'emoji_37_khan@3x.png',
        width: 96,
        height: 96,
      },
      '[\u7b11\u54ed]': {
        index: 38,
        name: '[\u7b11\u54ed]',
        image: 'emoji_38_forced_smile@3x.png',
        key: 'emoji_38_forced_smile@3x.png',
        width: 111,
        height: 96,
      },
      '[\u96fe\u973e]': {
        index: 39,
        name: '[\u96fe\u973e]',
        image: 'emoji_39_haze@3x.png',
        key: 'emoji_39_haze@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5978\u7b11]': {
        index: 40,
        name: '[\u5978\u7b11]',
        image: 'emoji_40_smirk@3x.png',
        key: 'emoji_40_smirk@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5f97\u610f]': {
        index: 41,
        name: '[\u5f97\u610f]',
        image: 'emoji_41_cool@3x.png',
        key: 'emoji_41_cool@3x.png',
        width: 96,
        height: 96,
      },
      '[\u61a8\u7b11]': {
        index: 42,
        name: '[\u61a8\u7b11]',
        image: 'emoji_42_bad_smile@3x.png',
        key: 'emoji_42_bad_smile@3x.png',
        width: 96,
        height: 96,
      },
      '[\u6293\u72c2]': {
        index: 43,
        name: '[\u6293\u72c2]',
        image: 'emoji_43_crazy@3x.png',
        key: 'emoji_43_crazy@3x.png',
        width: 96,
        height: 96,
      },
      '[\u6cea\u5954]': {
        index: 44,
        name: '[\u6cea\u5954]',
        image: 'emoji_44_tears@3x.png',
        key: 'emoji_44_tears@3x.png',
        width: 96,
        height: 96,
      },
      '[\u94b1]': {
        index: 45,
        name: '[\u94b1]',
        image: 'emoji_45_money@3x.png',
        key: 'emoji_45_money@3x.png',
        width: 96,
        height: 96,
      },
      '[\u543b]': {
        index: 46,
        name: '[\u543b]',
        image: 'emoji_46_kiss@3x.png',
        key: 'emoji_46_kiss@3x.png',
        width: 96,
        height: 96,
      },
      '[\u6050\u60e7]': {
        index: 47,
        name: '[\u6050\u60e7]',
        image: 'emoji_47_fear@3x.png',
        key: 'emoji_47_fear@3x.png',
        width: 96,
        height: 96,
      },
      '[\u7b11]': {
        index: 48,
        name: '[\u7b11]',
        image: 'emoji_48_smile@3x.png',
        key: 'emoji_48_smile@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5feb\u54ed\u4e86]': {
        index: 49,
        name: '[\u5feb\u54ed\u4e86]',
        image: 'emoji_49_injustice@3x.png',
        key: 'emoji_49_injustice@3x.png',
        width: 96,
        height: 96,
      },
      '[\u7ffb\u767d\u773c]': {
        index: 50,
        name: '[\u7ffb\u767d\u773c]',
        image: 'emoji_50_their@3x.png',
        key: 'emoji_50_their@3x.png',
        width: 96,
        height: 96,
      },
      '[\u8d5e]': {
        index: 52,
        name: '[\u8d5e]',
        image: 'emoji_52_like@3x.png',
        key: 'emoji_52_like@3x.png',
        width: 96,
        height: 96,
      },
      '[\u9f13\u638c]': {
        index: 53,
        name: '[\u9f13\u638c]',
        image: 'emoji_53_handclap@3x.png',
        key: 'emoji_53_handclap@3x.png',
        width: 96,
        height: 96,
      },
      '[\u8c22\u8c22]': {
        index: 54,
        name: '[\u8c22\u8c22]',
        image: 'emoji_54_3Q@3x.png',
        key: 'emoji_54_3Q@3x.png',
        width: 96,
        height: 96,
      },
      '[\u7948\u7977]': {
        index: 54,
        name: '[\u7948\u7977]',
        image: 'emoji_54_3Q@3x.png',
        key: 'emoji_54_3Q@3x.png',
        width: 96,
        height: 96,
      },
      '[kiss]': {
        index: 55,
        name: '[kiss]',
        image: 'emoji_55_kiss@3x.png',
        key: 'emoji_55_kiss@3x.png',
        width: 96,
        height: 96,
      },
      '[\u53bb\u6c61\u7c89]': {
        index: 56,
        name: '[\u53bb\u6c61\u7c89]',
        image: 'emoji_56_household_cleanser@3x.png',
        key: 'emoji_56_household_cleanser@3x.png',
        width: 96,
        height: 96,
      },
      '[666]': {
        index: 57,
        name: '[666]',
        image: 'emoji_57_666@3x.png',
        key: 'emoji_57_666@3x.png',
        width: 96,
        height: 96,
      },
      '[\u73ab\u7470]': {
        index: 58,
        name: '[\u73ab\u7470]',
        image: 'emoji_58_rose@3x.png',
        key: 'emoji_58_rose@3x.png',
        width: 96,
        height: 96,
      },
      '[\u80e1\u74dc]': {
        index: 59,
        name: '[\u80e1\u74dc]',
        image: 'emoji_59_cucumber@3x.png',
        key: 'emoji_59_cucumber@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5564\u9152]': {
        index: 60,
        name: '[\u5564\u9152]',
        image: 'emoji_60_beer@3x.png',
        key: 'emoji_60_beer@3x.png',
        width: 96,
        height: 96,
      },
      '[\u6211\u60f3\u9759\u9759]': {
        index: 61,
        name: '[\u6211\u60f3\u9759\u9759]',
        image: 'emoji_61_distress_situation@3x.png',
        key: 'emoji_61_distress_situation@3x.png',
        width: 105,
        height: 96,
      },
      '[\u59d4\u5c48]': {
        index: 62,
        name: '[\u59d4\u5c48]',
        image: 'emoji_62_injustice@3x.png',
        key: 'emoji_62_injustice@3x.png',
        width: 96,
        height: 96,
      },
      '[\u8214\u5c4f]': {
        index: 63,
        name: '[\u8214\u5c4f]',
        image: 'emoji_63_lick_screen@3x.png',
        key: 'emoji_63_lick_screen@3x.png',
        width: 96,
        height: 96,
      },
      '[\u9119\u89c6]': {
        index: 64,
        name: '[\u9119\u89c6]',
        image: 'emoji_64_despise@3x.png',
        key: 'emoji_64_despise@3x.png',
        width: 96,
        height: 96,
      },
      '[\u98de\u543b]': {
        index: 65,
        name: '[\u98de\u543b]',
        image: 'emoji_65_kiss@3x.png',
        key: 'emoji_65_kiss@3x.png',
        width: 96,
        height: 96,
      },
      '[\u518d\u89c1]': {
        index: 66,
        name: '[\u518d\u89c1]',
        image: 'emoji_66_bye@3x.png',
        key: 'emoji_66_bye@3x.png',
        width: 96,
        height: 96,
      },
      '[\u7d2b\u8587\u522b\u8d70]': {
        index: 67,
        name: '[\u7d2b\u8587\u522b\u8d70]',
        image: 'emoji_67_erkang@3x.png',
        key: 'emoji_67_erkang@3x.png',
        width: 108,
        height: 96,
      },
      '[\u6c42\u62b1\u62b1]': {
        index: 68,
        name: '[\u6c42\u62b1\u62b1]',
        image: 'emoji_68_hug@3x.png',
        key: 'emoji_68_hug@3x.png',
        width: 108,
        height: 96,
      },
      '[\u542c\u6b4c]': {
        index: 69,
        name: '[\u542c\u6b4c]',
        image: 'emoji_69_hitler@3x.png',
        key: 'emoji_69_hitler@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5468\u51ac\u96e8\u7684\u51dd\u89c6]': {
        index: 70,
        name: '[\u5468\u51ac\u96e8\u7684\u51dd\u89c6]',
        image: 'emoji_70_zhoudongyu_gaze@3x.png',
        key: 'emoji_70_zhoudongyu_gaze@3x.png',
        width: 96,
        height: 96,
      },
      '[\u9a6c\u601d\u7eaf\u7684\u5fae\u7b11]': {
        index: 71,
        name: '[\u9a6c\u601d\u7eaf\u7684\u5fae\u7b11]',
        image: 'emoji_71_masichun_smile@3x.png',
        key: 'emoji_71_masichun_smile@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5410\u820c]': {
        index: 72,
        name: '[\u5410\u820c]',
        image: 'emoji_72_dogo@3x.png',
        key: 'emoji_72_dogo@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5446\u65e0\u8f9c]': {
        index: 73,
        name: '[\u5446\u65e0\u8f9c]',
        image: 'emoji_73_cat@3x.png',
        key: 'emoji_73_cat@3x.png',
        width: 96,
        height: 96,
      },
      '[\u770b]': {
        index: 74,
        name: '[\u770b]',
        image: 'emoji_74_2ha@3x.png',
        key: 'emoji_74_2ha@3x.png',
        width: 96,
        height: 96,
      },
      '[\u767d\u773c]': {
        index: 75,
        name: '[\u767d\u773c]',
        image: 'emoji_75_dogo@3x.png',
        key: 'emoji_75_dogo@3x.png',
        width: 96,
        height: 96,
      },
      '[\u718a\u5409]': {
        index: 76,
        name: '[\u718a\u5409]',
        image: 'emoji_76_bear@3x.png',
        key: 'emoji_76_bear@3x.png',
        width: 96,
        height: 96,
      },
      '[\u9ab7\u9ac5]': {
        index: 77,
        name: '[\u9ab7\u9ac5]',
        image: 'emoji_77_skeleton@3x.png',
        key: 'emoji_77_skeleton@3x.png',
        width: 96,
        height: 96,
      },
      '[\u9ed1\u8138]': {
        index: 78,
        name: '[\u9ed1\u8138]',
        image: 'emoji_78_black_face@3x.png',
        key: 'emoji_78_black_face@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5403\u74dc\u7fa4\u4f17]': {
        index: 79,
        name: '[\u5403\u74dc\u7fa4\u4f17]',
        image: 'emoji_79_eat_melon@3x.png',
        key: 'emoji_79_eat_melon@3x.png',
        width: 96,
        height: 96,
      },
      '[\u7eff\u5e3d\u5b50]': {
        index: 80,
        name: '[\u7eff\u5e3d\u5b50]',
        image: 'emoji_80_newer_green_hat@3x.png',
        key: 'emoji_80_newer_green_hat@3x.png',
        width: 96,
        height: 96,
      },
      '[\u6c57]': {
        index: 81,
        name: '[\u6c57]',
        image: 'emoji_81_sweat@3x.png',
        key: 'emoji_81_sweat@3x.png',
        width: 96,
        height: 96,
      },
      '[\u6478\u5934]': {
        index: 82,
        name: '[\u6478\u5934]',
        image: 'emoji_82_lear_ropes@3x.png',
        key: 'emoji_82_lear_ropes@3x.png',
        width: 96,
        height: 96,
      },
      '[\u76b1\u7709]': {
        index: 83,
        name: '[\u76b1\u7709]',
        image: 'emoji_83_frown@3x.png',
        key: 'emoji_83_frown@3x.png',
        width: 96,
        height: 96,
      },
      '[\u64e6\u6c57]': {
        index: 84,
        name: '[\u64e6\u6c57]',
        image: 'emoji_84_wipe_sweat@3x.png',
        key: 'emoji_84_wipe_sweat@3x.png',
        width: 96,
        height: 96,
      },
      '[\u7ea2\u8138]': {
        index: 85,
        name: '[\u7ea2\u8138]',
        image: 'emoji_85_redface@3x.png',
        key: 'emoji_85_redface@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5c2c\u7b11]': {
        index: 86,
        name: '[\u5c2c\u7b11]',
        image: 'emoji_86_orz@3x.png',
        key: 'emoji_86_orz@3x.png',
        width: 96,
        height: 96,
      },
      '[\u505a\u9b3c\u8138]': {
        index: 87,
        name: '[\u505a\u9b3c\u8138]',
        image: 'emoji_87_makeface@3x.png',
        key: 'emoji_87_makeface@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5f3a]': {
        index: 88,
        name: '[\u5f3a]',
        image: 'emoji_88_intensity@3x.png',
        key: 'emoji_88_intensity@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5982\u82b1]': {
        index: 89,
        name: '[\u5982\u82b1]',
        image: 'emoji_89_ruhua@3x.png',
        key: 'emoji_89_ruhua@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5410]': {
        index: 90,
        name: '[\u5410]',
        image: 'emoji_90_spit@3x.png',
        key: 'emoji_90_spit@3x.png',
        width: 96,
        height: 96,
      },
      '[\u60ca\u559c]': {
        index: 91,
        name: '[\u60ca\u559c]',
        image: 'emoji_91_surprise@3x.png',
        key: 'emoji_91_surprise@3x.png',
        width: 96,
        height: 96,
      },
      '[\u6572\u6253]': {
        index: 92,
        name: '[\u6572\u6253]',
        image: 'emoji_92_knock@3x.png',
        key: 'emoji_92_knock@3x.png',
        width: 96,
        height: 96,
      },
      '[\u594b\u6597]': {
        index: 93,
        name: '[\u594b\u6597]',
        image: 'emoji_93_refuel@3x.png',
        key: 'emoji_93_refuel@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5410\u5f69\u8679]': {
        index: 94,
        name: '[\u5410\u5f69\u8679]',
        image: 'emoji_94_rainbow@3x.png',
        key: 'emoji_94_rainbow@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5927\u54ed]': {
        index: 95,
        name: '[\u5927\u54ed]',
        image: 'emoji_95_bigcry@3x.png',
        key: 'emoji_95_bigcry@3x.png',
        width: 96,
        height: 96,
      },
      '[\u6bd4\u5fc3]': {
        index: 96,
        name: '[\u6bd4\u5fc3]',
        image: 'emoji_96_fingerheart@3x.png',
        key: 'emoji_96_fingerheart@3x.png',
        width: 96,
        height: 96,
      },
      '[\u52a0\u6cb9]': {
        index: 97,
        name: '[\u52a0\u6cb9]',
        image: 'emoji_97_refuel@3x.png',
        key: 'emoji_97_refuel@3x.png',
        width: 96,
        height: 96,
      },
      '[\u78b0\u62f3]': {
        index: 98,
        name: '[\u78b0\u62f3]',
        image: 'emoji_98_fist@3x.png',
        key: 'emoji_98_fist@3x.png',
        width: 96,
        height: 96,
      },
      '[ok]': {
        index: 99,
        name: '[ok]',
        image: 'emoji_99_OK@3x.png',
        key: 'emoji_99_OK@3x.png',
        width: 96,
        height: 96,
      },
      '[\u51fb\u638c]': {
        index: 100,
        name: '[\u51fb\u638c]',
        image: 'emoji_100_highfive@3x.png',
        key: 'emoji_100_highfive@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5de6\u4e0a]': {
        index: 101,
        name: '[\u5de6\u4e0a]',
        image: 'emoji_101_left@3x.png',
        key: 'emoji_101_left@3x.png',
        width: 96,
        height: 96,
      },
      '[\u63e1\u624b]': {
        index: 102,
        name: '[\u63e1\u624b]',
        image: 'emoji_102_shakehand@3x.png',
        key: 'emoji_102_shakehand@3x.png',
        width: 96,
        height: 96,
      },
      '[18\u7981]': {
        index: 103,
        name: '[18\u7981]',
        image: 'emoji_103_18@3x.png',
        key: 'emoji_103_18@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5200]': {
        index: 104,
        name: '[\u5200]',
        image: 'emoji_104_knife@3x.png',
        key: 'emoji_104_knife@3x.png',
        width: 96,
        height: 96,
      },
      '[V5]': {
        index: 105,
        name: '[V5]',
        image: 'emoji_105_V5@3x.png',
        key: 'emoji_105_V5@3x.png',
        width: 96,
        height: 96,
      },
      '[\u7ed9\u529b]': {
        index: 106,
        name: '[\u7ed9\u529b]',
        image: 'emoji_106_awesome@3x.png',
        key: 'emoji_106_awesome@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5fc3]': {
        index: 107,
        name: '[\u5fc3]',
        image: 'emoji_107_heart@3x.png',
        key: 'emoji_107_heart@3x.png',
        width: 96,
        height: 96,
      },
      '[\u4f24\u5fc3]': {
        index: 108,
        name: '[\u4f24\u5fc3]',
        image: 'emoji_108_broken_heart@3x.png',
        key: 'emoji_108_broken_heart@3x.png',
        width: 96,
        height: 96,
      },
      '[\u5c4e]': {
        index: 109,
        name: '[\u5c4e]',
        image: 'emoji_109_shit@3x.png',
        key: 'emoji_109_shit@3x.png',
        width: 96,
        height: 96,
      },
      '[\u793c\u7269]': {
        index: 110,
        name: '[\u793c\u7269]',
        image: 'emoji_110_gifts@3x.png',
        key: 'emoji_110_gifts@3x.png',
        width: 96,
        height: 96,
      },
      '[\u86cb\u7cd5]': {
        index: 111,
        name: '[\u86cb\u7cd5]',
        image: 'emoji_111_cake@3x.png',
        key: 'emoji_111_cake@3x.png',
        width: 96,
        height: 96,
      },
      '[\u6492\u82b1]': {
        index: 112,
        name: '[\u6492\u82b1]',
        image: 'emoji_112_flower@3x.png',
        key: 'emoji_112_flower@3x.png',
        width: 96,
        height: 96,
      },
      '[\u4e0d\u770b]': {
        index: 113,
        name: '[\u4e0d\u770b]',
        image: 'emoji_113_lookat@3x.png',
        key: 'emoji_113_lookat@3x.png',
        width: 96,
        height: 96,
      },
      '[\u70b8\u5f39]': {
        index: 114,
        name: '[\u70b8\u5f39]',
        image: 'emoji_114_bomb@3x.png',
        key: 'emoji_114_bomb@3x.png',
        width: 96,
        height: 96,
      },
    }
    function u(e) {
      var t = c[e]
      if (t)
        return '//lf3-cdn-tos.bytegoofy.com/goofy/toutiao/tt_tps/static/images/ttemoji_v2/'.concat(
          t.image
        )
      return ''
    }
    function l(e) {
      var t = /(\[[^\]]+[\]])+?/g
      var n = RegExp(t.source)
      return e && n.test(e)
        ? e.replace(t, function (e) {
            var t = c[e]
            if (t)
              return '<i class="emoji" style="background-image: url(//lf3-cdn-tos.bytegoofy.com/goofy/toutiao/tt_tps/static/images/ttemoji_v2/'.concat(
                t.image,
                ')"></i>'
              )
            else return e
          })
        : e
    }
  },
  '9551a6727f53aa482a36': function (e, t, n) {},
  '96f31318ffb574d3bbc2': function (e, t, n) {},
  '98ad94a9d064c7351e07': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return r
    })
    function r(e, t) {
      if (!window.collectEvent) return
      window.collectEvent(e, t || {})
    }
  },
  '9ab2f1ff086dee039972': function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return r
    })
    var r = {
      ESC: 27,
      ENTER: 13,
      SPACE: 32,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
    }
  },
  '9d35318f143127ea9561': function (e, t, n) {},
  a50a2e38c375b9405e8f: function (e, t, n) {},
  a5b25f8e99db71c1fcf2: function (e, t, n) {
    'use strict'
    var r = function e(t, n) {
      if (!t) {
        window.location.href =
          'https://sso.toutiao.com/login/' +
          '?service='.concat(window.encodeURIComponent(window.location.href))
        return false
      }
      n && n()
      return true
    }
    t['a'] = r
  },
  a9610415f616cf6771b7: function (e, t, n) {},
  a99d8596674b8a971a00: function (e, t, n) {
    'use strict'
    var r = n('020ba8dae3d3021d9966')
    var a = n.n(r)
    var o = n('2b4fba5b8716cb99e98e')
    var i = n.n(o)
    var c = n('bd61c3e57dc18e488613')
    var u = n.n(c)
    var l = n('8f4085b35f259db3270e')
    var s = n.n(l)
    var f = n('92285e035e86b5e44a25')
    var d = n.n(f)
    var v = n('babc388b3bd2ae4e69b5')
    var m = n.n(v)
    var p = n('67b7230afda0f2d40a92')
    var b = n.n(p)
    var h = n('91e23d109ce8d2fa247c')
    var g = n.n(h)
    var _ = n('2e2e432f825443caa710')
    var y = n.n(_)
    var w = n('214eccfc06814c553a3c')
    var E = n.n(w)
    var k = n('cca19b4e684695ffc3da')
    var A = n.n(k)
    var j = ['/tt-anti-token', '/video/urls/v/1/toutiao/mp4/']
    var x = [
      '/api/pc/list/feed',
      '/search/suggest/hot_words',
      '/hot-event/hot-board/',
      '/stream/widget/local_weather/',
      'search/suggest/hot_words/',
      '/api/pc/list/user/feed',
    ]
    var O = ['/api/pc/list/feed', '/api/pc/list/user/feed']
    function C(e) {
      if (e)
        return !j.some(function (t) {
          return e.indexOf(t) > -1
        })
      return true
    }
    function I(e) {
      return !x.some(function (t) {
        // t = "/api/pc/list/feed"
        return e.indexOf(t) > -1
      })
    }
    function S(e, t) {
      var n, r
      var a = ''.concat(location.protocol, '//').concat(location.host) // a = https://www.toutiao.com/toutiao
      if (I(e))
        // e = https://www.toutiao.com/toutiao
        a += '/toutiao' // a = https://www.toutiao.com/toutiao
      if (false);
      var o = {
        url: a + e,
      }
      if (t.data) o.body = t.data
      var i =
        (null === (n = window.byted_acrawler) || void 0 === n
          ? void 0
          : null === (r = n.sign) || void 0 === r
          ? void 0
          : r.call(n, o)) || ''
      return i
    }
    function T(e) {
      if (e)
        return O.some(function (t) {
          return e.indexOf(t) > -1
        })
      return false
    }
    var N = n('1ea368dbac2fedf844a3')
    var U = n.n(N)
    var D = n('056dd54dadaa8f820dbe')
    var R = n.n(D)
    var L = n('768ba9cea7a0509ada36')
    var P = n.n(L)
    var M = n('2422758950d9f66b7423')
    function F(e) {
      if (!window.TTGCaptcha) {
        void 0
        return
      }
      window.TTGCaptcha.render({
        verify_data: e.verifyData,
        captchaOptions: {
          app_name: M['g'],
          showMode: 'mask',
          successCb: function t(n) {
            var r
            null === (r = e.successCb) || void 0 === r ? void 0 : r.call(e, n)
          },
          errorCb: function t(n) {
            var r
            null === (r = e.errorCb) || void 0 === r ? void 0 : r.call(e, n)
          },
          closeCb: function t() {
            var n
            null === (n = e.closeCb) || void 0 === n ? void 0 : n.call(e)
          },
        },
      })
    }
    var V = (function () {
      function e() {
        R()(this, e)
        this.show = false
        this.success = false
      }
      P()(e, [
        {
          key: 'verify',
          value: function e(t) {
            var n = this
            return new U.a(function (e) {
              n.show = true
              F({
                verifyData: t,
                successCb: function t() {
                  n.show = false
                  n.success = true
                  e()
                },
                closeCb: function t() {
                  n.show = false
                  n.success = false
                  e()
                },
              })
            })
          },
        },
        {
          key: 'waitVerifyFinish',
          value: function e() {
            var t = this
            return new U.a(function (e) {
              if (!t.show) {
                e()
                return
              }
              var n = setInterval(function () {
                if (!t.show) {
                  clearInterval(n)
                  e()
                }
              }, 1e3)
            })
          },
        },
      ])
      return e
    })()
    var K = new V()
    function B(e, t) {
      var n = m()(e)
      if (d.a) {
        var r = d()(e)
        if (t)
          r = r.filter(function (t) {
            return s()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function W(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          B(Object(n), true).forEach(function (t) {
            y()(e, t, n[t])
          })
        else if (u.a) i()(e, u()(n))
        else
          B(Object(n)).forEach(function (t) {
            a()(e, t, s()(n, t))
          })
      }
      return e
    }
    var z = E.a.create({
      timeout: 1e4,
    })
    z.interceptors.request.use(function (e) {
      if ('post' === e.method)
        e.headers = W(
          W({}, e.headers),
          {},
          {
            'X-CSRFToken': A.a.get('csrftoken'),
            'tt-anti-token': A.a.get('tt_anti_token'),
          }
        )
      return e
    })
    z.interceptors.request.use(function (e) {
      var t
      if (!C(e.url)) return e
      if (null === (t = e.params) || void 0 === t ? void 0 : t._signature)
        delete e.params._signature
      var n = z.getUri(e)
      var r = S(n, e)
      e.params = W(
        W({}, e.params),
        {},
        {
          _signature: r,
        }
      )
      return e
    })
    z.interceptors.request.use(function (e) {
      if (T(e.url))
        e.params = W(
          W({}, e.params),
          {},
          {
            aid: M['f'],
            app_name: M['g'],
          }
        )
      return e
    })
    z.interceptors.response.use(
      (function () {
        var e = g()(
          b.a.mark(function e(t) {
            var n
            var r
            return b.a.wrap(function e(a) {
              while (1)
                switch ((a.prev = a.next)) {
                  case 0:
                    r =
                      null === t || void 0 === t
                        ? void 0
                        : null === (n = t.data) || void 0 === n
                        ? void 0
                        : n.decision
                    if (!r) {
                      a.next = 19
                      break
                    }
                    if (K.show) {
                      a.next = 13
                      break
                    }
                    window.Slardar &&
                      window.Slardar('emit', 'counter', {
                        name: 'show-captcha',
                        value: 1,
                        tags: {
                          type: 'api',
                        },
                      })
                    a.next = 6
                    return K.verify(r)
                  case 6:
                    if (!K.success) {
                      a.next = 11
                      break
                    }
                    window.Slardar &&
                      window.Slardar('emit', 'counter', {
                        name: 'pass-captcha',
                        value: 1,
                        tags: {
                          type: 'api',
                        },
                      })
                    a.next = 10
                    return z.request(t.config)
                  case 10:
                    return a.abrupt('return', a.sent)
                  case 11:
                    a.next = 19
                    break
                  case 13:
                    a.next = 15
                    return K.waitVerifyFinish()
                  case 15:
                    if (!K.success) {
                      a.next = 19
                      break
                    }
                    a.next = 18
                    return z.request(t.config)
                  case 18:
                    return a.abrupt('return', a.sent)
                  case 19:
                    return a.abrupt('return', t)
                  case 20:
                  case 'end':
                    return a.stop()
                }
            }, e)
          })
        )
        return function (t) {
          return e.apply(this, arguments)
        }
      })()
    )
    var H = (t['a'] = z)
  },
  ab64641ae399574b8de3: function (e, t, n) {},
  abbf799a026c91d8612e: function (e, t, n) {
    'use strict'
    var r = {}
    n.r(r)
    n.d(r, 'getSearchSug', function () {
      return T
    })
    var a = {}
    n.r(a)
    n.d(a, 'getHotBoard', function () {
      return N
    })
    var o = {}
    n.r(o)
    n.d(o, 'repostContent', function () {
      return R
    })
    var i = {}
    n.r(i)
    n.d(i, 'getTabComments', function () {
      return M
    })
    n.d(i, 'getReplyList', function () {
      return F
    })
    n.d(i, 'submitComment', function () {
      return V
    })
    n.d(i, 'submitReply', function () {
      return K
    })
    n.d(i, 'commentAction', function () {
      return B
    })
    n.d(i, 'diggReply', function () {
      return W
    })
    n.d(i, 'reportUser', function () {
      return z
    })
    var c = {}
    n.r(c)
    n.d(c, 'followUser', function () {
      return H
    })
    n.d(c, 'unfollowUser', function () {
      return Q
    })
    var u = n('6eb445fd5003cfdfc689')
    var l = n('04c233c55b3dbc9a7c1d')
    var s = n('2810e53ad7174f3c046d')
    var f = n('3a97f5f6681ee5a745ff')
    var d = n('214eccfc06814c553a3c')
    var v = n.n(d)
    var m = n('cca19b4e684695ffc3da')
    var p = n.n(m)
    var b = ['/tt-anti-token', '/video/urls/v/1/toutiao/mp4/']
    function h(e) {
      if (e)
        return !b.some(function (t) {
          return e.indexOf(t) > -1
        })
      return true
    }
    function g(e, t) {
      var n, r
      var a = ''
        .concat(location.protocol, '//')
        .concat(location.host, '/toutiao')
      if (false);
      var o = {
        url: a + e,
      }
      if (t.data) o.body = t.data
      var i =
        (null ===
          (r =
            null === (n = window.byted_acrawler) || void 0 === n
              ? void 0
              : n.sign) || void 0 === r
          ? void 0
          : r.call(n, o)) || ''
      return i
    }
    function _(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    }
    function y(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        r.enumerable = r.enumerable || false
        r.configurable = true
        if ('value' in r) r.writable = true
        Object.defineProperty(e, r.key, r)
      }
    }
    function w(e, t, n) {
      if (t) y(e.prototype, t)
      if (n) y(e, n)
      return e
    }
    var E = 24
    var k = 'toutiao_web'
    function A(e) {
      if (!window.renderCaptcha) {
        void 0
        return
      }
      window.renderCaptcha({
        aid: E,
        app_name: k,
        iid: '0',
        did: '0',
        region: 'cn',
        showMode: 'mask',
        challenge_code: e.challengeCode,
        successCb: function t(n) {
          var r
          null === (r = e.successCb) || void 0 === r ? void 0 : r.call(e, n)
        },
        errorCb: function t(n) {
          var r
          null === (r = e.errorCb) || void 0 === r ? void 0 : r.call(e, n)
        },
        closeCb: function t() {
          var n
          null === (n = e.closeCb) || void 0 === n ? void 0 : n.call(e)
        },
      })
    }
    var j = (function () {
      function e() {
        _(this, e)
        this.show = false
        this.success = false
      }
      w(e, [
        {
          key: 'verify',
          value: function e(t) {
            var n = this
            return new Promise(function (e) {
              n.show = true
              A({
                challengeCode: t,
                successCb: function t() {
                  n.show = false
                  n.success = true
                  e()
                },
                closeCb: function t() {
                  n.show = false
                  n.success = false
                  e()
                },
              })
            })
          },
        },
        {
          key: 'waitVerifyFinish',
          value: function e() {
            var t = this
            return new Promise(function (e) {
              if (!t.show) {
                e()
                return
              }
              var n = setInterval(function () {
                if (!t.show) {
                  clearInterval(n)
                  e()
                }
              }, 1e3)
            })
          },
        },
      ])
      return e
    })()
    var x = new j()
    function O(e, t, n, r, a, o, i) {
      try {
        var c = e[o](i)
        var u = c.value
      } catch (l) {
        n(l)
        return
      }
      if (c.done) t(u)
      else Promise.resolve(u).then(r, a)
    }
    function C(e) {
      return function () {
        var t = this,
          n = arguments
        return new Promise(function (r, a) {
          var o = e.apply(t, n)
          function i(e) {
            O(o, r, a, i, c, 'next', e)
          }
          function c(e) {
            O(o, r, a, i, c, 'throw', e)
          }
          i(void 0)
        })
      }
    }
    var I = v.a.create({
      timeout: 2e3,
    })
    I.interceptors.request.use(function (e) {
      if (void 0 === 'true' && !/^http/.test(e.url || ''))
        e.url = 'http://dev.eden.net'.concat(e.url)
      return e
    })
    I.interceptors.request.use(function (e) {
      if ('post' === e.method)
        e.headers = Object.assign(Object.assign({}, e.headers), {
          'X-CSRFToken': p.a.get('csrftoken'),
          'tt-anti-token': p.a.get('tt_anti_token'),
        })
      return e
    })
    I.interceptors.request.use(function (e) {
      var t
      if (!h(e.url)) return e
      if (null === (t = e.params) || void 0 === t ? void 0 : t._signature)
        delete e.params._signature
      var n = I.getUri(e)
      var r = g(n, e)
      e.params = Object.assign(Object.assign({}, e.params), {
        _signature: r,
      })
      return e
    })
    I.interceptors.response.use(
      (function () {
        var e = C(
          regeneratorRuntime.mark(function e(t) {
            var n, r
            return regeneratorRuntime.wrap(function e(a) {
              while (1)
                switch ((a.prev = a.next)) {
                  case 0:
                    r =
                      null === (n = t.data.decision) || void 0 === n
                        ? void 0
                        : n.challenge_code
                    if (!r) {
                      a.next = 17
                      break
                    }
                    if (x.show) {
                      a.next = 11
                      break
                    }
                    a.next = 5
                    return x.verify(r)
                  case 5:
                    if (!x.success) {
                      a.next = 9
                      break
                    }
                    a.next = 8
                    return I.request(t.config)
                  case 8:
                    return a.abrupt('return', a.sent)
                  case 9:
                    a.next = 17
                    break
                  case 11:
                    a.next = 13
                    return x.waitVerifyFinish()
                  case 13:
                    if (!x.success) {
                      a.next = 17
                      break
                    }
                    a.next = 16
                    return I.request(t.config)
                  case 16:
                    return a.abrupt('return', a.sent)
                  case 17:
                    return a.abrupt('return', t)
                  case 18:
                  case 'end':
                    return a.stop()
                }
            }, e)
          })
        )
        return function (t) {
          return e.apply(this, arguments)
        }
      })()
    )
    var S = I
    function T(e) {
      return S.get('/2/article/search_sug/', {
        params: {
          keyword: e,
          ps_type: 'sug',
          aid: 4916,
        },
      })
    }
    function N() {
      return S.get('/hot-event/hot-board/?origin=toutiao_pc')
    }
    var U = n('a52ab4297c6c7cd8920c')
    var D = n.n(U)
    function R(e) {
      return S.post(
        '/c/ugc/content/repost/',
        D.a.stringify(Object.assign({}, e))
      )
    }
    var L = 24
    var P = 'toutiao_web'
    function M(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3
      return S.get('/article/v2/tab_comments/', {
        params: {
          aid: L,
          app_name: P,
          offset: n,
          count: r,
          group_id: e,
          item_id: t,
        },
      })
    }
    function F(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
      return S.get('/2/comment/v2/reply_list/', {
        params: {
          aid: L,
          app_name: P,
          id: e,
          offset: t,
          count: n,
          repost: r,
        },
      })
    }
    function V(e, t, n) {
      return S.post(
        '/browser/2/data/v5/post_message/',
        D.a.stringify({
          group_id: e,
          item_id: t,
          text: n,
        }),
        {
          params: {
            aid: L,
            app_name: P,
          },
        }
      )
    }
    function K(e) {
      var t = {
        id: e.id,
        content: e.content,
      }
      if (e.replyUserId || e.replyCommentId) {
        t.reply_user_id = e.replyUserId
        t.reply_comment_id = e.replyCommentId
      }
      return S.post('/browser/2/comment/v3/create_reply/', D.a.stringify(t), {
        params: {
          aid: L,
          app_name: P,
        },
      })
    }
    function B(e, t, n, r) {
      return S.post(
        '/browser/2/data/v1/comment_action/',
        D.a.stringify({
          comment_id: e,
          group_id: t,
          item_id: n,
          action: r,
        }),
        {
          params: {
            aid: L,
            app_name: P,
          },
        }
      )
    }
    function W(e, t, n) {
      return S.post(
        '/browser/2/comment/v1/digg_reply/',
        D.a.stringify({
          id: e,
          reply_id: t,
          action: n,
        }),
        {
          params: {
            aid: L,
            app_name: P,
          },
        }
      )
    }
    function z(e) {
      return S.post(
        '/api/pc/feedback/2/report_user_comment/',
        D.a.stringify(
          Object.assign(Object.assign({}, e), {
            report_source: 0,
            source: 1,
            aid: 24,
          })
        ),
        {
          params: {
            aid: 24,
            app_name: 'toutiao-web',
            app_key: 'toutiao-web',
            webid: e.webid,
          },
        }
      )
    }
    function H(e) {
      return S.post(
        '/c/user/follow/',
        D.a.stringify({
          user_token: e,
        })
      )
    }
    function Q(e) {
      return S.post(
        '/c/user/unfollow/',
        D.a.stringify({
          user_token: e,
        })
      )
    }
    var q = {
      search: r,
      hotboard: a,
      ugc: o,
      comment: i,
      relation: c,
    }
    var G = (t['a'] = q)
  },
  ac9414e2d47df986f7f3: function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return I
    })
    var r = n('020ba8dae3d3021d9966')
    var a = n.n(r)
    var o = n('2b4fba5b8716cb99e98e')
    var i = n.n(o)
    var c = n('bd61c3e57dc18e488613')
    var u = n.n(c)
    var l = n('8f4085b35f259db3270e')
    var s = n.n(l)
    var f = n('92285e035e86b5e44a25')
    var d = n.n(f)
    var v = n('2e2e432f825443caa710')
    var m = n.n(v)
    var p = n('babc388b3bd2ae4e69b5')
    var b = n.n(p)
    var h = n('0d9dfce0e45672081850')
    var g = n.n(h)
    var _ = n('056dd54dadaa8f820dbe')
    var y = n.n(_)
    var w = n('768ba9cea7a0509ada36')
    var E = n.n(w)
    var k = n('6cf195ddfada1b0033e1')
    function A(e, t) {
      var n = b()(e)
      if (d.a) {
        var r = d()(e)
        if (t)
          r = r.filter(function (t) {
            return s()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function j(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          A(Object(n), true).forEach(function (t) {
            m()(e, t, n[t])
          })
        else if (u.a) i()(e, u()(n))
        else
          A(Object(n)).forEach(function (t) {
            a()(e, t, s()(n, t))
          })
      }
      return e
    }
    var x = function e(t) {
      var n = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      if (n) window.addEventListener('pagehide', t, false)
      else window.addEventListener('beforeunload', t, false)
    }
    var O = 12 * 60 * 60 * 1e3
    var C = {
      event: 'stay_page',
      params: {},
    }
    var I = (function () {
      function e(t) {
        var n = this
        y()(this, e)
        this.config = C
        this.startTime = 0
        this.canSendCloseEvent = false
        this._handleVisibilitychange = function () {
          if ('hidden' === document.visibilityState) {
            n._sendEvent()
            n.canSendCloseEvent = false
          } else if ('visible' === document.visibilityState) {
            n.startTime = g()()
            n.canSendCloseEvent = true
          }
        }
        this._handlePageUnload = function () {
          if (n.canSendCloseEvent) {
            n._sendEvent()
            n.end()
          }
        }
        this.config = t || C
        this.startTime = g()()
        if ('visible' === document.visibilityState)
          this.canSendCloseEvent = true
      }
      E()(e, [
        {
          key: '_sendEvent',
          value: function e() {
            var t = g()() - this.startTime
            if (t > O) return
            var n = [].concat(this.config)
            n.forEach(function (e) {
              var n = b()(e.params).reduce(function (t, n) {
                t[n] =
                  'function' === typeof e.params[n]
                    ? e.params[n]()
                    : e.params[n]
                return t
              }, {})
              Object(k['a'])(
                e.event,
                j(
                  j({}, n),
                  {},
                  {
                    stay_time: t,
                  }
                )
              )
            })
          },
        },
        {
          key: 'start',
          value: function e() {
            document.addEventListener(
              'visibilitychange',
              this._handleVisibilitychange
            )
            x(this._handlePageUnload)
          },
        },
        {
          key: 'end',
          value: function e() {
            document.removeEventListener(
              'visibilitychange',
              this._handleVisibilitychange
            )
            window.removeEventListener('beforeunload', this._handlePageUnload)
            window.removeEventListener('pagehide', this._handlePageUnload)
          },
        },
      ])
      return e
    })()
  },
  ad40a8aa22dad9b1213f: function (e, t, n) {
    'use strict'
    var r = n('69084d01d3449fc1bc27')
    var a = n.n(r)
    var o = a.a.createContext(null)
    t['a'] = o
  },
  ae17adf1c28fabf1305a: function (e, t, n) {},
  b146df89f85eeb19dada: function (e, t, n) {},
  b3d627bf45117b33693e: function (e, t, n) {
    e.exports = n.p + 'svgs/article_icon.c91fb7e0.svg'
  },
  b47836c813468e99d194: function (e, t, n) {},
  b6051f0fa8998ea16e97: function (e, t, n) {
    'use strict'
    var r = n('69084d01d3449fc1bc27')
    var a = n.n(r)
    var o = n('174811872339f1d02c40')
    var i = n.n(o)
    var c = n('93fd3eb7060d3a0ca436')
    var u = n('be6323750fae7868d676')
    var l = n('b65c96faf0c123cf88e4')
    var s = n('67b7230afda0f2d40a92')
    var f = n.n(s)
    var d = n('91e23d109ce8d2fa247c')
    var v = n.n(d)
    var m = n('028f84ba6d27e52aa246')
    var p = n('663529bce6ee6d8996f5')
    var b = n('7009f854fb449fc1b23d')
    var h = n('a5b25f8e99db71c1fcf2')
    var g = n('d84b833f284337beaf9b')
    var _ = function e(t) {
      var n = t.userInfo,
        o = t.onSubscribe
      var c = Object(r['useRef'])(false)
      var u = Object(r['useContext'])(b['a'])
      function l() {
        return s.apply(this, arguments)
      }
      function s() {
        s = v()(
          f.a.mark(function e() {
            var t, r, a, i
            return f.a.wrap(
              function e(l) {
                while (1)
                  switch ((l.prev = l.next)) {
                    case 0:
                      if (!c.current) {
                        l.next = 2
                        break
                      }
                      return l.abrupt('return')
                    case 2:
                      if (Object(h['a'])(u)) {
                        l.next = 4
                        break
                      }
                      return l.abrupt('return')
                    case 4:
                      t = !n.isFollow
                      l.prev = 5
                      i = null
                      c.current = true
                      if (!t) {
                        l.next = 14
                        break
                      }
                      l.next = 11
                      return p['a'].relation.followUser(n.userSecToken)
                    case 11:
                      i = l.sent
                      l.next = 17
                      break
                    case 14:
                      l.next = 16
                      return p['a'].relation.unfollowUser(n.userSecToken)
                    case 16:
                      i = l.sent
                    case 17:
                      if (
                        !(
                          'success' ===
                          (null === (r = i) || void 0 === r
                            ? void 0
                            : r.data.message)
                        )
                      ) {
                        l.next = 21
                        break
                      }
                      o(t)
                      c.current = false
                      return l.abrupt('return')
                    case 21:
                      throw new Error(
                        null === (a = i) || void 0 === a ? void 0 : a.message
                      )
                    case 24:
                      l.prev = 24
                      l.t0 = l['catch'](5)
                      c.current = false
                      g['a'].info(
                        '\u64cd\u4f5c\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5'
                      )
                      void 0
                    case 29:
                    case 'end':
                      return l.stop()
                  }
              },
              e,
              null,
              [[5, 24]]
            )
          })
        )
        return s.apply(this, arguments)
      }
      function d(e) {
        var t = e.keyCode
        if (32 === t || 13 === t) {
          e.preventDefault()
          l()
        }
      }
      return a.a.createElement(
        'div',
        {
          tabIndex: 0,
          role: 'button',
          'aria-label': n.isFollow
            ? '\u53d6\u6d88\u5173\u6ce8'
            : '\u5173\u6ce8',
          className: i()('feed-card-subscribe-cmp', {
            followed: n.isFollow,
          }),
          onClick: l,
          onKeyDown: d,
        },
        a.a.createElement('i', null),
        a.a.createElement(
          'span',
          null,
          n.isFollow ? '\u5df2\u5173\u6ce8' : '\u5173\u6ce8'
        )
      )
    }
    var y = _
    var w = n('5616f33a71e39794ee3e')
    var E = n('546ca7f10f62589ab9f4')
    var k = n('38c58096afa111fcdfd2')
    var A = function e(t) {
      var n, o, s, f, d, v, m, p, b, h
      var g = t.data,
        _ = t.logInfo,
        A = t.footer,
        j = t.origin,
        x = t.disableSubscribe,
        O = t.onDislike,
        C = t.onSubscribe,
        I = t.onLikeChange,
        S = t.onClickToDetail,
        T = t.onShare
      var N = g.userInfo.userSecToken
        ? '/c/user/token/'
            .concat(g.userInfo.userSecToken, '/?source=')
            .concat(null === _ || void 0 === _ ? void 0 : _.page_name)
        : ''
      var U =
        (null === (n = g.coverUrls) || void 0 === n ? void 0 : n.length) || 0
      var D =
        (null === (o = g.coverUrls) || void 0 === o ? void 0 : o.slice(0, 4)) ||
        []
      var R = Object(r['useMemo'])(
        function () {
          return Object(c['a'])(Object(u['c'])(g.content))
        },
        [g.content]
      )
      return a.a.createElement(
        'div',
        {
          className: i()('feed-card-wtt', {
            'single-cover': U > 0 && U < 4,
            'multi-covers': U > 3,
          }),
        },
        a.a.createElement(
          'div',
          {
            className: 'feed-card-wtt-r',
          },
          a.a.createElement(l['a'], {
            cover: null === (s = g.coverUrls) || void 0 === s ? void 0 : s[0],
            articleUrl: g.articleUrl,
            number: U > 1 ? U : 0,
            numberDirection: 'bottom',
            logInfo: _,
            onClickToDetail: S,
          })
        ),
        a.a.createElement(
          'div',
          {
            className: 'feed-card-wtt-l',
          },
          a.a.createElement(
            'div',
            {
              className: i()('feed-card-wtt-header', {
                'padding-r': g.showSubscribe,
              }),
            },
            a.a.createElement(
              'div',
              {
                className: 'feed-card-wtt-user-info',
              },
              a.a.createElement(
                'a',
                {
                  href: N,
                  target: '_blank',
                  rel: 'noopener',
                  title: g.userInfo.name,
                },
                a.a.createElement('img', {
                  'aria-hidden': true,
                  src: g.userInfo.avatarUrl,
                }),
                a.a.createElement('span', null, g.userInfo.name)
              )
            ),
            a.a.createElement(
              'div',
              {
                className: 'time',
              },
              Object(u['j'])(g.timestamp)
            ),
            !x &&
              !g.showSubscribe &&
              (null === (f = g.userInfo) || void 0 === f
                ? void 0
                : f.isFollow) &&
              a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(
                  'div',
                  {
                    className: 'dot',
                  },
                  '\xb7'
                ),
                a.a.createElement(
                  'div',
                  {
                    className: 'text',
                  },
                  '\u5df2\u5173\u6ce8'
                )
              ),
            (null === (d = g.userInfo) || void 0 === d
              ? void 0
              : null === (v = d.userAuthInfo) || void 0 === v
              ? void 0
              : v.auth_info) &&
              a.a.createElement(
                a.a.Fragment,
                null,
                a.a.createElement(
                  'div',
                  {
                    className: 'dot',
                  },
                  '\xb7'
                ),
                a.a.createElement(
                  'div',
                  {
                    className: 'user-auth-desc',
                    title:
                      null === (m = g.userInfo) || void 0 === m
                        ? void 0
                        : null === (p = m.userAuthInfo) || void 0 === p
                        ? void 0
                        : p.auth_info,
                  },
                  null === (b = g.userInfo) || void 0 === b
                    ? void 0
                    : null === (h = b.userAuthInfo) || void 0 === h
                    ? void 0
                    : h.auth_info
                )
              ),
            !x &&
              g.showSubscribe &&
              a.a.createElement(
                'div',
                {
                  className: 'subscribe-wrapper',
                },
                a.a.createElement(y, {
                  userInfo: g.userInfo,
                  onSubscribe: C,
                })
              )
          ),
          a.a.createElement(
            'p',
            {
              className: 'content',
            },
            a.a.createElement(
              k['a'],
              {
                href: g.articleUrl,
                target: '_blank',
                rel: 'noopener',
                logInfo: _,
                onClick: S,
                dangerouslySetInnerHTML: {
                  __html: R || '[\u65e0\u6587\u5b57]',
                },
              },
              null
            )
          )
        ),
        U > 3 &&
          a.a.createElement(
            'ul',
            {
              className: 'covers-list',
            },
            D.map(function (e, t) {
              return a.a.createElement(
                'li',
                {
                  key: t,
                },
                a.a.createElement(l['a'], {
                  cover: e,
                  articleUrl: g.articleUrl,
                  number: t === D.length - 1 && U > 4 ? U - 4 : 0,
                  numberDirection: 'middle',
                  logInfo: _,
                  onClickToDetail: S,
                })
              )
            })
          ),
        j,
        a.a.createElement(
          'div',
          {
            className: 'feed-card-wtt-footer',
          },
          A ||
            a.a.createElement(w['a'], {
              leftTools: [
                a.a.createElement(E['e'], {
                  key: 'share',
                  articleUrl: g.articleUrl,
                  onSuccess: T,
                }),
                a.a.createElement(E['b'], {
                  key: 'comment',
                  styleType: '2',
                  commentCount: g.commentCount,
                  articleUrl: g.articleUrl,
                  logInfo: _,
                  onClickToDetail: S,
                }),
                a.a.createElement(E['d'], {
                  key: 'like',
                  groupId: g.groupId,
                  likeCount: g.likeCount,
                  isLiked: !!g.userDigg,
                  onLikeChange: I,
                }),
              ],
              rightTools: [
                a.a.createElement(E['c'], {
                  key: 'dislike',
                  data: {
                    itemId: g.itemId,
                    groupId: g.groupId,
                  },
                  onDislike: O,
                }),
              ],
            })
        )
      )
    }
    var j = (t['a'] = A)
  },
  b65c96faf0c123cf88e4: function (e, t, n) {
    'use strict'
    var r = n('a0199d72cedba8967335')
    var a = n.n(r)
    var o = n('69084d01d3449fc1bc27')
    var i = n.n(o)
    var c = n('174811872339f1d02c40')
    var u = n.n(c)
    var l = n('1b6e0af22b27be14137b')
    var s = n('3891ddb3fa5500b24dc8')
    var f = n.n(s)
    var d = ['p3.toutiaoimg.com', 'p6.toutiaoimg.com', 'p9.toutiaoimg.com']
    function v(e, t) {
      if (!e || !t) return e
      var n = e.split('?')
      var r = n[0].replace(/\.[a-z]*$/, '')
      var a = r + t
      if (n[1]) a += '?'.concat(n[1])
      return a
    }
    function m(e) {
      var t = (e && f()(e)) || [].concat(d)
      return function (e) {
        var n
        if (!e) return e
        var r =
          null === (n = e.match(/\/\/(.+com)\//)) || void 0 === n
            ? void 0
            : n[1]
        var a = t.shift()
        if (r && a) return e.replace(r, a)
        return e
      }
    }
    var p = n('38c58096afa111fcdfd2')
    var b = function e(t) {
      var n = Object(o['useRef'])(null)
      var r = Object(o['useRef'])(0)
      var c = Object(o['useRef'])(m())
      var l = Object(o['useMemo'])(
        function () {
          var e
          var n = t.cover
          if (!n) return n
          var r =
            null === (e = n.match(/\/\/(.+com)\//)) || void 0 === e
              ? void 0
              : e[1]
          if ('p26.toutiaoimg.com' === r) n = n.replace(r, 'p3.toutiaoimg.com')
          return n
        },
        [t.cover]
      )
      var s = Object(o['useCallback'])(
        function (e, t) {
          if (r.current >= 3 || !l) return
          var n = t || (null === e || void 0 === e ? void 0 : e.target)
          var o = v(l, '.jpg')
          o = c.current(o)
          n.src = o
          r.current += 1
          window.Slardar &&
            window.Slardar('emit', 'log', {
              value: a()({
                name: 'load_feed_cover_error',
                origin: l,
                retry: o,
                retryCount: r.current,
              }),
              level: 'error',
            })
        },
        [l]
      )
      Object(o['useEffect'])(
        function () {
          if (!n.current) return
          if (r.current > 0) return
          if (n.current.complete && !n.current.naturalWidth) s(null, n.current)
        },
        [s]
      )
      if (!l) return null
      return i.a.createElement(
        'div',
        {
          className: 'feed-card-cover',
        },
        i.a.createElement(
          p['a'],
          {
            href: t.articleUrl,
            target: '_blank',
            rel: 'noopener',
            logInfo: t.logInfo,
            onClick: t.onClickToDetail,
            title: t.desc,
            'aria-hidden': !t.desc,
            tabIndex: t.desc ? 0 : -1,
          },
          i.a.createElement('img', {
            ref: n,
            src: l,
            alt: '',
            onError: s,
          })
        ),
        !!t.number &&
          i.a.createElement(
            'div',
            {
              className: u()('cover-num', {
                middle: 'middle' === t.numberDirection,
              }),
            },
            i.a.createElement(
              'div',
              {
                className: 'num',
              },
              'middle' === t.numberDirection && '+',
              i.a.createElement(
                'span',
                null,
                t.number,
                'bottom' === t.numberDirection &&
                  i.a.createElement(i.a.Fragment, null, '\xa0')
              ),
              'bottom' === t.numberDirection && '\u56fe'
            )
          )
      )
    }
    var h = (t['a'] = b)
  },
  bd8ea4fd9e1bc4efca14: function (e, t, n) {
    'use strict'
    n.d(t, 'e', function () {
      return B
    })
    n.d(t, 'b', function () {
      return W
    })
    n.d(t, 'c', function () {
      return H
    })
    n.d(t, 'd', function () {
      return Q
    })
    n.d(t, 'a', function () {
      return G
    })
    var r = n('f497c1956dc2c7102505')
    var a = n.n(r)
    var o = n('ffefcdf7dd8e3bcb704c')
    var i = n.n(o)
    var c = n('ba171699999e3c1cf739')
    var u = n.n(c)
    var l = n('cc225c8be7431245d3ca')
    var s = n.n(l)
    var f = n('8baad6854b7235c2e103')
    var d = n.n(f)
    var v = n('0a85e9668458aebfdc91')
    var m = n.n(v)
    var p = n('3a97f5f6681ee5a745ff')
    var b = n.n(p)
    var h = n('4c49014db78c8239e1c9')
    var g = n.n(h)
    var _ = n('9e3b015f2d1ca367b131')
    var y = n.n(_)
    var w = n('04c233c55b3dbc9a7c1d')
    var E = n.n(w)
    var k = n('56e9e14be0f919933f17')
    var A = n.n(k)
    var j = n('8e69b3d65fe197ac8eac')
    var x = n.n(j)
    var O = n('11efe8d9f5087686369c')
    var C = n.n(O)
    var I = n('387f198293f6c9509d78')
    var S = n.n(I)
    var T = n('11720b014c5c4f26ef22')
    var N = n.n(T)
    function U(e, t) {
      return K(e) || D(e, t) || M(e, t) || P()
    }
    function D(e, t) {
      if ('undefined' === typeof Symbol || !(Symbol.iterator in Object(e)))
        return
      var n = []
      var r = true
      var a = false
      var o = void 0
      try {
        for (
          var i = e[Symbol.iterator](), c;
          !(r = (c = i.next()).done);
          r = true
        ) {
          n.push(c.value)
          if (t && n.length === t) break
        }
      } catch (u) {
        a = true
        o = u
      } finally {
        try {
          if (!r && null != i['return']) i['return']()
        } finally {
          if (a) throw o
        }
      }
      return n
    }
    function R(e) {
      '@babel/helpers - typeof'
      if ('function' === typeof Symbol && 'symbol' === typeof Symbol.iterator)
        R = function e(t) {
          return typeof t
        }
      else
        R = function e(t) {
          return t &&
            'function' === typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t
        }
      return R(e)
    }
    function L(e) {
      return K(e) || V(e) || M(e) || P()
    }
    function P() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    }
    function M(e, t) {
      if (!e) return
      if ('string' === typeof e) return F(e, t)
      var n = Object.prototype.toString.call(e).slice(8, -1)
      if ('Object' === n && e.constructor) n = e.constructor.name
      if ('Map' === n || 'Set' === n) return Array.from(e)
      if (
        'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return F(e, t)
    }
    function F(e, t) {
      if (null == t || t > e.length) t = e.length
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
      return r
    }
    function V(e) {
      if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
        return Array.from(e)
    }
    function K(e) {
      if (Array.isArray(e)) return e
    }
    function B(e, t) {
      var n = 0
      var r
      return function () {
        for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
          o[i] = arguments[i]
        var c = Date.now()
        if (c - n >= t) {
          e.apply(void 0, o)
          n = c
        } else {
          clearTimeout(r)
          r = setTimeout(function () {
            n = c
            e.apply(void 0, o)
          }, t)
        }
      }
    }
    function W(e, t) {
      if (void 0 === t)
        t =
          'undefined' !== typeof window
            ? window.location && window.location.search.substr(1)
            : ''
      var n = {}
      t &&
        t.split('&').forEach(function (e) {
          if ('' === e) return
          var t = e.split('='),
            r = L(t),
            a = r[0],
            o = r.slice(1)
          var i = decodeURIComponent(a)
          var c = decodeURIComponent(o.join('='))
          if (i.match(/\[\]$/)) {
            var u = i.replace(/\[\]$/, '')
            if (n[u] && n[u] instanceof Array) n[u].push(c)
            else n[u] = [c]
          } else n[i] = c
        })
      return e ? n[e] : n
    }
    function z(e, t) {
      var n = []
      var r = function r() {
        var i = o[a]
        var c = e[i]
        if (null !== c && void 0 !== c)
          if ('object' === R(c))
            if (
              t &&
              c instanceof Array &&
              c.every(function (e) {
                return 'object' !== R(e)
              })
            )
              c.forEach(function (e) {
                n.push(
                  ''
                    .concat(encodeURIComponent(i), '[]=')
                    .concat(encodeURIComponent(e))
                )
              })
            else
              n.push(
                ''
                  .concat(encodeURIComponent(i), '=')
                  .concat(encodeURIComponent(JSON.stringify(c)))
              )
          else
            n.push(
              ''
                .concat(encodeURIComponent(i), '=')
                .concat(encodeURIComponent(c))
            )
      }
      for (var a = 0, o = Object.keys(e); a < o.length; a++) r()
      return n.join('&')
    }
    function H(e, t, n) {
      if (void 0 === t || 0 === Object.keys(t).length) return e
      var r = e.split('?'),
        a = U(r, 2),
        o = a[0],
        i = a[1],
        c = void 0 === i ? '' : i
      var u
      if (c) {
        var l = c.split('#')
        var s = U(l, 2)
        c = s[0]
        var f = s[1]
        u = void 0 === f ? '' : f
      } else {
        var d = e.split('#')
        var v = U(d, 2)
        o = v[0]
        var m = v[1]
        u = void 0 === m ? '' : m
      }
      var p = W(void 0, c)
      p = Object.assign(p, t)
      c = z(p, n)
      c = c && '?'.concat(c)
      u = u && '#'.concat(u)
      return ''.concat(o).concat(c).concat(u)
    }
    function Q(e) {
      try {
        return JSON.parse(e)
      } catch (t) {
        void 0
        return null
      }
    }
    function q(e, t) {
      if (t <= 0) return ''.concat(Math.floor(e))
      var n = Math.pow(10, t)
      var r = ''.concat(Math.floor(e * n))
      return ''.concat(r.slice(0, -t), '.').concat(r.slice(-t))
    }
    function G(e, t) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : true
      if (t) {
        var r = ''.concat(e)
        if (r.indexOf('.') >= 0) {
          var a = r.split('.'),
            o = U(a, 2),
            i = o[0],
            c = o[1]
          return ''
            .concat(i.replace(/(?=\B(?:\d{3})+$)/g, ','), '.')
            .concat(c.replace(/\d{3}\B/g, '$&,'))
        }
        return r.replace(/(?=\B(?:\d{3})+$)/g, ',')
      }
      var u
      if ('number' !== typeof e) e = parseFloat(e) ? parseFloat(e) : 0
      if (e < 1e4) return ''.concat(e)
      if (e < 1e5 && n) {
        u = q(e / 1e4, 1)
        return '0' === u.split('.')[1]
          ? ''.concat(u.split('.')[0], '\u4e07')
          : ''.concat(u, '\u4e07')
      }
      if (e < 1e8) return ''.concat(Math.floor(e / 1e4), '\u4e07')
      if (e < 1e9 && n) {
        u = q(e / 1e8, 1)
        return '0' === u.split('.')[1]
          ? ''.concat(u.split('.')[0], '\u4ebf')
          : ''.concat(u, '\u4ebf')
      }
      return ''.concat(Math.floor(e / 1e8), '\u4ebf')
    }
  },
  be6323750fae7868d676: function (e, t, n) {
    'use strict'
    n.d(t, 'm', function () {
      return _
    })
    n.d(t, 'f', function () {
      return w
    })
    n.d(t, 'g', function () {
      return E
    })
    n.d(t, 'j', function () {
      return k
    })
    n.d(t, 'q', function () {
      return j
    })
    n.d(t, 'r', function () {
      return x
    })
    n.d(t, 's', function () {
      return O
    })
    n.d(t, 'h', function () {
      return C
    })
    n.d(t, 'd', function () {
      return I
    })
    n.d(t, 'i', function () {
      return S
    })
    n.d(t, 'a', function () {
      return T
    })
    n.d(t, 'n', function () {
      return N
    })
    n.d(t, 'c', function () {
      return U
    })
    n.d(t, 'o', function () {
      return D
    })
    n.d(t, 'p', function () {
      return R
    })
    n.d(t, 'k', function () {
      return L
    })
    n.d(t, 'b', function () {
      return P
    })
    n.d(t, 'l', function () {
      return M
    })
    n.d(t, 'e', function () {
      return F
    })
    var r = n('4fd33368f4a71d7bf4bc')
    var a = n.n(r)
    var o = n('b6196699b5f3c8d65fe7')
    var i = n.n(o)
    var c = n('5ee0eaa4845580757e29')
    var u = n.n(c)
    var l = n('a0199d72cedba8967335')
    var s = n.n(l)
    var f = n('087f1d096d234182f9fa')
    var d = n.n(f)
    var v = n('babc388b3bd2ae4e69b5')
    var m = n.n(v)
    var p = n('0d9dfce0e45672081850')
    var b = n.n(p)
    var h = n('91fd518c8e0a4e34db75')
    var g = n.n(h)
    function _(e, t) {
      if (void 0 === t)
        t =
          'undefined' !== typeof window
            ? window.location && window.location.search.substr(1)
            : ''
      var n = {}
      t &&
        t.split('&').forEach(function (e) {
          if ('' === e) return
          var t = e.split('='),
            r = g()(t),
            a = r[0],
            o = r.slice(1)
          var i = decodeURIComponent(a)
          var c = decodeURIComponent(o.join('='))
          if (i.match(/\[\]$/)) {
            var u = i.replace(/\[\]$/, '')
            if (n[u] && n[u] instanceof Array) n[u].push(c)
            else n[u] = [c]
          } else n[i] = c
        })
      return e ? n[e] : n
    }
    function y(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
      var n = ''.concat(e)
      return Array(Math.abs(n.length - (t + 1))).join('0') + e
    }
    function w(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : 'MM\u6708dd\u65e5 hh:mm:ss'
      var n = new Date(e)
      var r = n.getFullYear()
      var a = n.getMonth() + 1
      var o = n.getDate()
      var i = n.getHours()
      var c = n.getMinutes()
      var u = n.getSeconds()
      return t.replace(/Y|y|MM?|dd?|hh?|mm?|ss?/g, function (e) {
        return {
          M: ''.concat(a),
          MM: y(a),
          Y: ''.concat(r),
          d: ''.concat(o),
          dd: y(o),
          h: ''.concat(i),
          hh: y(i),
          m: ''.concat(c),
          mm: y(c),
          s: ''.concat(u),
          ss: y(u),
          y: ''.concat(r % 100),
        }[e]
      })
    }
    function E(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false
      var n = y(~~(e % 60))
      if (t) {
        var r = y(~~(e / 3600))
        var a = y(~~(e / 60) % 60)
        return ''.concat(r, ':').concat(a, ':').concat(n)
      }
      var o = y(~~(e / 60))
      return ''.concat(o, ':').concat(n)
    }
    function k() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
      if (!e) return ''
      var t = 1e3 * 60
      var n = b()() - 1e3 * e
      var r = Math.floor(n / t)
      if (r < 1) return '\u521a\u521a'
      if (r < 60) return ''.concat(r, '\u5206\u949f\u524d')
      else if (r < 60 * 24)
        return ''.concat(Math.floor(r / 60), '\u5c0f\u65f6\u524d')
      else if (r < 60 * 24 * 30)
        return ''.concat(Math.floor(r / 1440), '\u5929\u524d')
      else if (r < 60 * 24 * 30 * 12)
        return ''.concat(Math.floor(r / 43200), '\u6708\u524d')
      return w(1e3 * e, 'Y\u5e74M\u6708d\u65e5')
    }
    function A(e, t) {
      var n = []
      var r = function r() {
        var i = o[a]
        var c = e[i]
        if (null !== c && void 0 !== c)
          if ('object' === d()(c))
            if (
              t &&
              c instanceof Array &&
              c.every(function (e) {
                return 'object' !== d()(e)
              })
            )
              c.forEach(function (e) {
                n.push(
                  ''
                    .concat(encodeURIComponent(i), '[]=')
                    .concat(encodeURIComponent(e))
                )
              })
            else
              n.push(
                ''
                  .concat(encodeURIComponent(i), '=')
                  .concat(encodeURIComponent(s()(c)))
              )
          else
            n.push(
              ''
                .concat(encodeURIComponent(i), '=')
                .concat(encodeURIComponent(c))
            )
      }
      for (var a = 0, o = m()(e); a < o.length; a++) r()
      return n.join('&')
    }
    function j(e, t, n) {
      if (void 0 === t || 0 === m()(t).length) return e
      var r = e.split('?'),
        a = u()(r, 2),
        o = a[0],
        c = a[1],
        l = void 0 === c ? '' : c
      var s
      if (l) {
        var f = l.split('#')
        var d = u()(f, 2)
        l = d[0]
        var v = d[1]
        s = void 0 === v ? '' : v
      } else {
        var p = e.split('#')
        var b = u()(p, 2)
        o = b[0]
        var h = b[1]
        s = void 0 === h ? '' : h
      }
      var g = _(void 0, l)
      g = i()(g, t)
      l = A(g, n)
      l = l && '?'.concat(l)
      s = s && '#'.concat(s)
      return ''.concat(o).concat(l).concat(s)
    }
    function x(e) {
      try {
        return JSON.parse(e)
      } catch (t) {
        void 0
        return null
      }
    }
    function O(e, t) {
      var n = 0
      var r
      return function () {
        for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
          o[i] = arguments[i]
        var c = b()()
        if (c - n >= t) {
          e.apply(void 0, o)
          n = c
        } else {
          clearTimeout(r)
          r = setTimeout(function () {
            n = c
            e.apply(void 0, o)
          }, t)
        }
      }
    }
    function C(e) {
      if (!e) return ''
      if (0 === e.indexOf('http://')) return e.substr(5)
      return e
    }
    function I(e, t) {
      if (t <= 0) return ''.concat(Math.floor(e))
      var n = Math.pow(10, t)
      var r = ''.concat(Math.floor(e * n))
      return ''.concat(r.slice(0, -t), '.').concat(r.slice(-t))
    }
    function S(e, t) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : true
      if (t) {
        var r = ''.concat(e)
        if (r.indexOf('.') >= 0) {
          var o = r.split('.'),
            i = u()(o, 2),
            c = i[0],
            l = i[1]
          return ''
            .concat(c.replace(/(?=\B(?:\d{3})+$)/g, ','), '.')
            .concat(l.replace(/\d{3}\B/g, '$&,'))
        }
        return r.replace(/(?=\B(?:\d{3})+$)/g, ',')
      }
      var s
      if ('number' !== typeof e) e = a()(e) ? a()(e) : 0
      if (e < 1e4) return ''.concat(e)
      if (e < 1e5 && n) {
        s = I(e / 1e4, 1)
        return '0' === s.split('.')[1]
          ? ''.concat(s.split('.')[0], '\u4e07')
          : ''.concat(s, '\u4e07')
      }
      if (e < 1e8) return ''.concat(Math.floor(e / 1e4), '\u4e07')
      if (e < 1e9 && n) {
        s = I(e / 1e8, 1)
        return '0' === s.split('.')[1]
          ? ''.concat(s.split('.')[0], '\u4ebf')
          : ''.concat(s, '\u4ebf')
      }
      return ''.concat(Math.floor(e / 1e8), '\u4ebf')
    }
    function T(e) {
      var t = 0
      var n = 0
      var r = e
      while (null !== r && r !== document.body) {
        t += r.offsetLeft
        n += r.offsetTop
        r = r.offsetParent
      }
      return {
        left: t,
        top: n,
      }
    }
    function N() {
      return Math.floor(b()() / 1e3)
    }
    function U(e) {
      if (!e || 'string' !== typeof e) return e
      return e.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    }
    function D(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
      if (!e) return ''
      var n = 1e3 * 60 * 60 * 24
      var r = [
        '\u5468\u65e5',
        '\u5468\u4e00',
        '\u5468\u4e8c',
        '\u5468\u4e09',
        '\u5468\u56db',
        '\u5468\u4e94',
        '\u5468\u516d',
      ]
      var a = new Date(1e3 * Number(e) + t * n).getDay()
      return r[a]
    }
    function R(e) {
      if (!e) return false
      var t = window.innerWidth
      var n = window.innerHeight
      var r = null === e || void 0 === e ? void 0 : e.getBoundingClientRect(),
        a = r.top,
        o = r.left,
        i = r.height
      if (!i) return false
      if (a > 0 && a < n && o > 0 && o < t) return true
      return false
    }
    function L(e) {
      if (!e) return ''
      return e.replace(/^http[s]?:/, '')
    }
    function P() {}
    function M(e) {
      if (!e) return []
      return Array.prototype.slice
        .call(
          e.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
          )
        )
        .filter(function (e) {
          return !e.hasAttribute('disabled') && !e.getAttribute('aria-hidden')
        })
    }
    function F(e, t) {
      var n
      var r = -1
      t.some(function (t, n) {
        if (t === e) {
          r = n
          return true
        }
        return false
      })
      if (r < 0) return
      var a = (r + 1) % t.length
      null === (n = t[a]) || void 0 === n ? void 0 : n.focus()
    }
  },
  c0148195f357fac179f5: function (e, t, n) {},
  c0914cf85e1e6295f7dc: function (e, t, n) {},
  c2e67fcd203473e40384: function (e, t, n) {},
  c327dafe838ee24a5205: function (e, t, n) {},
  c3cdc631e8328a3bec0b: function (e, t, n) {
    'use strict'
    n.d(t, 'c', function () {
      return c
    })
    n.d(t, 'b', function () {
      return u
    })
    n.d(t, 'a', function () {
      return s
    })
    var r = n('0d9dfce0e45672081850')
    var a = n.n(r)
    var o = n('a79cb04363dcc4858702')
    var i = n.n(o)
    function c() {
      return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      )
    }
    function u() {
      return (
        window.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft ||
        0
      )
    }
    function l(e, t, n, r) {
      var a = n - t
      e /= r / 2
      if (e < 1) return (a / 2) * e * e * e + t
      return (a / 2) * ((e -= 2) * e * e + 2) + t
    }
    function s(e, t) {
      var n = t || {},
        r = n.container,
        o = void 0 === r ? window : r,
        c = n.callback,
        u = n.duration,
        s = void 0 === u ? 450 : u
      var f = o.scrollY
      var d = a()()
      var v = function t() {
        var n = a()()
        var r = n - d
        var u = l(r > s ? s : r, f, e, s)
        if (o === o.window) o.scrollTo(window.scrollX, u)
        else if (o instanceof Document) o.documentElement.scrollTop = u
        else o.scrollTop = u
        if (r < s) i()(t)
        else if (c) c()
      }
      i()(v)
    }
  },
  c7601c7a671b6dcebbc8: function (e, t, n) {},
  c9cd1e0339c82648866e: function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return S
    })
    n.d(t, 'b', function () {
      return T
    })
    var r = n('8baad6854b7235c2e103')
    var a = n.n(r)
    var o = n('0a85e9668458aebfdc91')
    var i = n.n(o)
    var c = n('ffefcdf7dd8e3bcb704c')
    var u = n.n(c)
    var l = n('04c233c55b3dbc9a7c1d')
    var s = n.n(l)
    var f = n('c5e07f1c13900756393d')
    var d = n.n(f)
    var v = n('f497c1956dc2c7102505')
    var m = n.n(v)
    var p = n('3a97f5f6681ee5a745ff')
    var b = n.n(p)
    var h = n('69084d01d3449fc1bc27')
    var g = n.n(h)
    function _(e) {
      '@babel/helpers - typeof'
      if ('function' === typeof Symbol && 'symbol' === typeof Symbol.iterator)
        _ = function e(t) {
          return typeof t
        }
      else
        _ = function e(t) {
          return t &&
            'function' === typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t
        }
      return _(e)
    }
    function y(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    }
    function w(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        r.enumerable = r.enumerable || false
        r.configurable = true
        if ('value' in r) r.writable = true
        Object.defineProperty(e, r.key, r)
      }
    }
    function E(e, t, n) {
      if (t) w(e.prototype, t)
      if (n) w(e, n)
      return e
    }
    function k(e, t) {
      if ('function' !== typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: true,
          configurable: true,
        },
      })
      if (t) A(e, t)
    }
    function A(e, t) {
      A =
        Object.setPrototypeOf ||
        function e(t, n) {
          t.__proto__ = n
          return t
        }
      return A(e, t)
    }
    function j(e) {
      var t = C()
      return function n() {
        var r = I(e),
          a
        if (t) {
          var o = I(this).constructor
          a = Reflect.construct(r, arguments, o)
        } else a = r.apply(this, arguments)
        return x(this, a)
      }
    }
    function x(e, t) {
      if (t && ('object' === _(t) || 'function' === typeof t)) return t
      return O(e)
    }
    function O(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return e
    }
    function C() {
      if ('undefined' === typeof Reflect || !Reflect.construct) return false
      if (Reflect.construct.sham) return false
      if ('function' === typeof Proxy) return true
      try {
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        )
        return true
      } catch (e) {
        return false
      }
    }
    function I(e) {
      I = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function e(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
      return I(e)
    }
    var S = (function (e) {
      k(n, e)
      var t = j(n)
      function n() {
        y(this, n)
        return t.apply(this, arguments)
      }
      E(n, [
        {
          key: 'componentDidCatch',
          value: function e(t, n) {
            var r, a
            if (window.Slardar) {
              window.Slardar(
                'captureException',
                t,
                Object.assign(
                  {
                    type: 'ErrorBoundary-catch-error',
                    stackInfo: n.componentStack,
                  },
                  this.props.extraReportParams
                )
              )
              null === (a = (r = this.props).onError) || void 0 === a
                ? void 0
                : a.call(r, t, n)
            }
          },
        },
        {
          key: 'render',
          value: function e() {
            return this.props.children
          },
        },
      ])
      return n
    })(g.a.Component)
    function T(e, t) {
      var n = function n(r) {
        return g.a.createElement(
          S,
          Object.assign({}, t),
          g.a.createElement(e, Object.assign({}, r))
        )
      }
      var r = e.displayName || e.name || 'Unknown'
      n.displayName = 'withErrorBoundary('.concat(r, ')')
      return n
    }
  },
  d0a417eed13be1ae5863: function (e, t, n) {},
  d1168368cb87a97d8ea2: function (e, t, n) {
    'use strict'
    var r = n('020ba8dae3d3021d9966')
    var a = n.n(r)
    var o = n('2b4fba5b8716cb99e98e')
    var i = n.n(o)
    var c = n('bd61c3e57dc18e488613')
    var u = n.n(c)
    var l = n('8f4085b35f259db3270e')
    var s = n.n(l)
    var f = n('92285e035e86b5e44a25')
    var d = n.n(f)
    var v = n('babc388b3bd2ae4e69b5')
    var m = n.n(v)
    var p = n('2e2e432f825443caa710')
    var b = n.n(p)
    var h = n('5ee0eaa4845580757e29')
    var g = n.n(h)
    var _ = n('69084d01d3449fc1bc27')
    var y = n.n(_)
    var w = n('e101535ac9d197332c92')
    var E = n.n(w)
    var k = n('c3cdc631e8328a3bec0b')
    var A = n('6cf195ddfada1b0033e1')
    var j = n('be6323750fae7868d676')
    function x(e, t) {
      var n = m()(e)
      if (d.a) {
        var r = d()(e)
        if (t)
          r = r.filter(function (t) {
            return s()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function O(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          x(Object(n), true).forEach(function (t) {
            b()(e, t, n[t])
          })
        else if (u.a) i()(e, u()(n))
        else
          x(Object(n)).forEach(function (t) {
            a()(e, t, s()(n, t))
          })
      }
      return e
    }
    function C(e, t) {
      var n = e.keyCode
      if (32 === n || 13 === n) {
        e.preventDefault()
        t()
      }
    }
    var I = function e(t) {
      var n = t.logParams,
        r = t.showHome,
        a = t.showReport,
        o = t.showRefresh,
        i = t.refresh
      var c = Object(_['useState'])(false),
        u = g()(c, 2),
        l = u[0],
        s = u[1]
      var f = Object(_['useState'])('auto'),
        d = g()(f, 2),
        v = d[0],
        m = d[1]
      var p = Object(_['useRef'])(null)
      function b(e, t) {
        Object(A['a'])(
          'function_bar_click',
          O(
            O({}, n),
            {},
            {
              action_type: t || 'click',
              from_position: e,
            }
          )
        )
      }
      function h() {
        b('back_to_feed')
      }
      function w() {
        b('back_to_top')
        Object(k['a'])(0)
      }
      function E() {
        b('refresh')
        null === i || void 0 === i ? void 0 : i()
      }
      function x(e) {
        Object(A['a'])(
          'function_bar_click',
          O(
            O({}, n),
            {},
            {
              action_type: 'hover',
              from_position: e,
            }
          )
        )
        Object(A['a'])('function_bar_intro_show')
      }
      Object(_['useEffect'])(function () {
        var e
        var t =
          (null === (e = p.current) || void 0 === e
            ? void 0
            : e.clientHeight) || 0
        var n = window.innerHeight
        var r = Object(j['s'])(function () {
          var e = Object(k['c'])()
          if (e > n) {
            m(Number(t) + 44)
            setTimeout(function () {
              s(true)
            }, 80)
          } else {
            m(t)
            s(false)
          }
        }, 300)
        window.addEventListener('scroll', r)
        return function () {
          return window.removeEventListener('scroll', r)
        }
      }, [])
      return y.a.createElement(
        'div',
        {
          className: 'toolbar',
        },
        y.a.createElement(
          'ul',
          {
            className: 'tool-container',
            style: {
              height: v,
            },
            ref: p,
          },
          r &&
            y.a.createElement(
              'li',
              {
                className: 'tool-item back-home',
                onMouseEnter: function e() {
                  return x('back_to_feed')
                },
              },
              y.a.createElement(
                'a',
                {
                  href: '//www.toutiao.com',
                  onClick: h,
                  'aria-label': '\u53bb\u9996\u9875',
                },
                y.a.createElement('img', {
                  className: 'icon',
                  src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAJ1BMVEUAAAAiIiIiIiIhISEhISEiIiIgICAgICAjIyMiIiIgICAiIiIiIiLh1CX3AAAADHRSTlMAj9/foEAgEF/vYIBOs+N8AAAAyElEQVRIx+3OIQ7CQBCF4akAEhQOU0vSQ1SjECRcoIIDwA04BLKOC2BJMG0wDXsoKLykC8ObVTV0n9pJ/mw+GdYml2MRjDbOZaFm755b2s0ob6P6YIJS99qtMEFYFgDVOVgWaL4FywAtRE5gUVC1ExmvwGKgdfucgsVA7wMsBsLAIiAMLAbCwKIgzdIgxfoFIqzEB32zZrhSD6RYdxxlB9KsBm8fpFldBJBifURCFqMYxShGvUV8fUSl1TSIrlZUIUpK46Oz/Pse7UrB/Kh3WUoAAAAASUVORK5CYII=',
                  alt: '',
                })
              ),
              y.a.createElement(
                'div',
                {
                  className: 'bubble',
                },
                '\u53bb\u9996\u9875'
              )
            ),
          a &&
            y.a.createElement(
              'li',
              {
                className: 'tool-item report-item',
              },
              y.a.createElement(
                'a',
                {
                  href: '//www.12377.cn/',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  'aria-label':
                    '\u7f51\u4e0a\u6709\u5bb3\u4fe1\u606f\u4e3e\u62a5',
                },
                y.a.createElement('img', {
                  src: 'https://lf3-cdn-tos.bytescm.com/obj/cdn-static-resource/toutiao/resource/ntoutiao_web/static/image/other/report_logo_15cc24e.png',
                  alt: '',
                }),
                y.a.createElement(
                  'span',
                  null,
                  '\u7f51\u4fe1\u4e0a\u606f\u6709\u4e3e\u5bb3\u62a5'
                )
              )
            ),
          o &&
            y.a.createElement(
              'li',
              {
                tabIndex: 0,
                role: 'button',
                'aria-label': '\u5237\u65b0',
                className: 'tool-item',
                onClick: E,
                onMouseEnter: function e() {
                  return x('refresh')
                },
                onKeyDown: function e(t) {
                  return C(t, E)
                },
              },
              y.a.createElement('img', {
                className: 'icon',
                src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAPFBMVEUAAAAhISEiIiIgICAgICAiIiIiIiIiIiIiIiIhISEiIiIiIiIhISEhISEhISEiIiIgICAgICAjIyMiIiKs2CuEAAAAE3RSTlMA34AgEL9Ab+9Qn5DPoK+PMGBfMVP3dwAAAf9JREFUWMPtmNuygyAMRUsIIIgW6///6zkdsVgTiTjTl073o9oFuWwavf30bULvQlTzv5QZweJFCph5J+N0M8ZmCmHZixgq5U9jtJmrCicDdN0sqHucyfF9+4vgvMbnJq0b1Vx0lzmxUGCX2DQUVhTC06pguLaZXveVPsfJGKr+1Qg1UFyXSwcLbZu00uhrngf2GQt5vyJoWsPiKP1CKeqFBPEcIK0Ex4ENOS5ujR2lrznO5zwje69IgeDbHBjbHulVc0IhsiRBpHsMvK+CrmdOArPs+7Ci4JArDhykk9paKs4e78iGiPgYgL0aWkDAWQ6XyFILyHJOsTQyWctJ6pltjk2cnG33dm2k12S5nFeaa65rRVNFxh+6DaSZxC4FaKGUUosgWZ8H4SXQZ5IdaZPKsozZhusNObJNKoraAZgm7dpAirEDzu0eSaXU9LhrN7+RjjtZii0QNmd7OvgfBG54QgePyob4GHzvkBuG7jwHTpbHlpEq8fYg/hCHIS44zA/4KqUrkCMrh1kqDmwo4tzVaWGKLFK95Tg0aNpN8kiFoYz/EqgMQ1RpLUSsTxjCagito796sJhO4BRSLCkKad+kpaQRb5L6bbpHZ58ro/YubBvjTjj8G5Cg7uThroc6x+jzc4aqYOxnXtdl6ckQClz9GGFhNMsnjRicx9tPX6Y/6NJOJdVEp50AAAAASUVORK5CYII=',
                alt: '',
              }),
              y.a.createElement(
                'div',
                {
                  className: 'bubble',
                },
                '\u5237\u65b0\u7f51\u9875'
              )
            ),
          l &&
            y.a.createElement(
              'li',
              {
                tabIndex: 0,
                role: 'button',
                'aria-label': '\u56de\u5230\u9876\u90e8',
                className: 'tool-item',
                onClick: w,
                onMouseEnter: function e() {
                  return x('back_to_top')
                },
                onKeyDown: function e(t) {
                  return C(t, w)
                },
              },
              y.a.createElement('img', {
                className: 'icon',
                src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA8BAMAAAA3cOGjAAAAKlBMVEUAAAAiIiIgICAhISEhISEiIiIgICAgICAgICAiIiIhISEgICAgICAiIiLQNQWnAAAADXRSTlMA7zBgz3AgEDHfv1BAyZJQowAAAKxJREFUSMftzL0JAkEQhuFB8QfMzA8ULMDIzBIES7AEEwuwFSuxBfGSC7aXg90bvmCOdxvYN/qGgcdasdfFqi2638FqHVPa16GUCsWQKIBEASSKoEwx9L9miqHzMlMMmWWKIbNCMSQKIFEAiQJIFECiABIFkCiCRAEkiiBRAIkiSFSEkNo6RNS7QEitBUXq6YegSN2nvXIoUnpsOociNTx8n/qvzba7fazVapVGa1+uy8qU6+8AAAAASUVORK5CYII=',
                alt: '',
              }),
              y.a.createElement(
                'div',
                {
                  className: 'bubble',
                },
                '\u56de\u5230\u9876\u90e8'
              )
            )
        )
      )
    }
    t['a'] = I
  },
  d1de1ecd4cfc41254218: function (e, t) {
    e.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABvFBMVEVHcEz25qTk0JXnxWXs04vktmTlzXP89t337Lr+/OD69M3eqFf53I316pzu46vu3H/Yrn3owH7UrFrftWjx166xkHz7x2fcrGrgvovz6ZLcp1nkvFnTk3DZr4LKhFvDfz7jrFPnvGzbnFHoxnz/+dDqw3r/74bktoCaaVyfaFXRrnbqvlkABHjVHhjWPCEFAWQBAW3qxmDmv1HvzGPw1nHkslTuy2zdm0T/1FXWAgjNAALcSSbWZDTquVDuyVnmuFjfo0rrsEnluF3VkkPdkkbUh0D8xVS5kVp2eX//3WDklTjUxXVreYnrXyPtgjvqcDLEun+Ujn3143PpwWDjrVPTLhw5FDjVdC/yoEHjrUqTeFpRNlHdhTXDEgpZVnPJJxNkEUPREg7MPSfYVi7URCj9LA/acTi7ABA8H0h7ipcAEpBzY2EZN5D2qjy7TCYAAID9vUbuvlDWjjzzfCjYnlj8jizXkVOsonP/723twmKTYDa0o2aptJHJWSr/vmBODk6NhnfFUiReWWbGPh1MADmxDg770m//0maBWDqEaUrEazOeXzCjfVKnjVm1gD/TvIfFrnz8zGSjmYTOeDoOTxX1AAAAK3RSTlMAKgLukeT5HEEIW8a2PIDnrMb6/GnOwuCcq+v0FEhdnOS80vtM5r6x+/dvgk6cRwAAAWVJREFUGNNjYIAAdhFRURF2BmTAIaDZ3dHZoyGgghDjdA+r6vL1Fy4Pc+eEibGLRUcVW+pZW0XURPNARRmFM5pKdXVDrRNj63wyVBnBgryB+b2+lqG6iXpWvgEGDYwQzYE6fdaWunp6ulZ63gYeaiA3aOVOynf3s6p1NnJJ9Pc2CLTgAwpKeE3Iyi7Ia7ZJS3P1zNYJyJUACorHmOUY5PmlJNmk+Nvo55h4iQMFhSYXZOqkp9o0hvulphv4uLmyAgXVzSf2Z7W0xsbHWycl6AS0mbIABQVdQtozdfT16xP09XU8PJ0iBYGCyiVlXmbeUT7VQnFxHpUR5pH8QEEuIwfncDdPCzdHiwqLGGdTOw6Q67mYjVyLjLVNtY1NzF3MmDkg4cZqaGivbRhsrO1gbxIsxQsW5AkycTLVDgm2NXewdzILkoSEJou0rV2ho62jtp2RIT8fEzRAZeTkuZUUWLkVWWTBQgDxBU8MyWNkzgAAAABJRU5ErkJggg=='
  },
  d33c2300cbe78d91d36c: function (e, t, n) {},
  d4dbca4e48dfe706de8d: function (e, t, n) {
    'use strict'
    var r = n('ba171699999e3c1cf739')
    var a = n('cc225c8be7431245d3ca')
    var o = n('f497c1956dc2c7102505')
    var i = n('ffefcdf7dd8e3bcb704c')
    var c = n('04c233c55b3dbc9a7c1d')
    var u = n('4c49014db78c8239e1c9')
    var l = n('8baad6854b7235c2e103')
    var s = n('0a85e9668458aebfdc91')
    var f = n('3a97f5f6681ee5a745ff')
    var d = n('69084d01d3449fc1bc27')
    var v = n.n(d)
    var m = n('174811872339f1d02c40')
    var p = n.n(m)
    var b = n('a79cb04363dcc4858702')
    var h = n.n(b)
    var g = n('d33c2300cbe78d91d36c')
    var _ = n('98ad94a9d064c7351e07')
    var y = n('47244cda85051673e101')
    function w(e, t) {
      return x(e) || j(e, t) || k(e, t) || E()
    }
    function E() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    }
    function k(e, t) {
      if (!e) return
      if ('string' === typeof e) return A(e, t)
      var n = Object.prototype.toString.call(e).slice(8, -1)
      if ('Object' === n && e.constructor) n = e.constructor.name
      if ('Map' === n || 'Set' === n) return Array.from(e)
      if (
        'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return A(e, t)
    }
    function A(e, t) {
      if (null == t || t > e.length) t = e.length
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
      return r
    }
    function j(e, t) {
      if ('undefined' === typeof Symbol || !(Symbol.iterator in Object(e)))
        return
      var n = []
      var r = true
      var a = false
      var o = void 0
      try {
        for (
          var i = e[Symbol.iterator](), c;
          !(r = (c = i.next()).done);
          r = true
        ) {
          n.push(c.value)
          if (t && n.length === t) break
        }
      } catch (u) {
        a = true
        o = u
      } finally {
        try {
          if (!r && null != i['return']) i['return']()
        } finally {
          if (a) throw o
        }
      }
      return n
    }
    function x(e) {
      if (Array.isArray(e)) return e
    }
    var O = (function () {
      var e
      return function () {
        var t
        if (void 0 === e)
          e =
            null === (t = window.CSS) || void 0 === t
              ? void 0
              : t.supports('position', 'sticky')
        return e
      }
    })()
    var C = function e(t) {
      var n = t.children,
        r = t.className,
        a = t.activeOffset,
        o = void 0 === a ? 0 : a,
        i = t.position,
        c =
          void 0 === i
            ? {
                top: 0,
                left: 0,
              }
            : i,
        u = t.placeholderHeight,
        l = void 0 === u ? 0 : u
      var s = Object(d['useRef'])(null)
      var f = Object(d['useRef'])(null)
      var m = Object(d['useRef'])(false)
      var b = Object(d['useState'])(false),
        g = w(b, 2),
        _ = g[0],
        y = g[1]
      var E = Object(d['useState'])(true),
        k = w(E, 2),
        A = k[0],
        j = k[1]
      var x = Object(d['useCallback'])(
        function () {
          if (O()) return true
          var e = _ ? f.current : s.current
          var t =
            null === e || void 0 === e ? void 0 : e.getBoundingClientRect()
          if (t && t.top <= o) return true
          return false
        },
        [_]
      )
      var C = Object(d['useCallback'])(
        function () {
          if (m.current) return
          m.current = true
          h()(function () {
            var e = window.scrollX
            if (e >= 0 && s.current && _)
              s.current.style.transform = 'translateX(-'.concat(e, 'px)')
            y(x())
            m.current = false
          })
        },
        [x, _]
      )
      Object(d['useEffect'])(function () {
        j(O())
      }, [])
      Object(d['useEffect'])(
        function () {
          if (!O()) {
            window.addEventListener('scroll', C)
            C()
          }
          return function () {
            window.removeEventListener('scroll', C)
          }
        },
        [C]
      )
      return v.a.createElement(
        v.a.Fragment,
        null,
        !A &&
          _ &&
          v.a.createElement('div', {
            ref: f,
            style: {
              height: l,
            },
          }),
        v.a.createElement(
          'div',
          {
            className: p()(
              'ttp-sticky-container',
              {
                active: _,
              },
              r
            ),
            ref: s,
            style: Object.assign({}, c),
          },
          n
        )
      )
    }
    var I = C
    var S = n('c5e07f1c13900756393d')
    var T = n('c2e67fcd203473e40384')
    var N = n('9e3b015f2d1ca367b131')
    var U = n('e46d92f18c27073edc76')
    var D = {
      home: {
        key: 'home',
        category: 'home',
        channelId: -1,
        name: '\u9996\u9875',
        url: 'https://www.toutiao.com/',
      },
      hot: {
        key: 'hot',
        category: 'news_hot',
        channelId: 3189398996,
        name: '\u70ed\u70b9',
      },
      xigua: {
        key: 'xigua',
        category: 'xigua',
        channelId: -1,
        name: '\u897f\u74dc\u89c6\u9891',
        url: 'https://www.ixigua.com/',
      },
      finance: {
        key: 'finance',
        category: 'news_finance',
        channelId: 3189399007,
        name: '\u8d22\u7ecf',
      },
      tech: {
        key: 'tech',
        category: 'news_tech',
        channelId: 3189398999,
        name: '\u79d1\u6280',
      },
      entertainment: {
        key: 'entertainment',
        category: 'news_entertainment',
        channelId: 3189398972,
        name: '\u5a31\u4e50',
      },
      sports: {
        key: 'sports',
        category: 'news_sports',
        channelId: 3189398957,
        name: '\u4f53\u80b2',
      },
      dcd: {
        key: 'dcd',
        category: 'dcd',
        channelId: -1,
        name: '\u61c2\u8f66\u5e1d',
        url: 'https://www.dcdapp.com/?zt=tt_pc_home_channel',
      },
      live: {
        key: 'live',
        category: 'live',
        channelId: 94349530259,
        name: '\u76f4\u64ad',
        url: 'https://live.ixigua.com',
      },
      gallery: {
        key: 'gallery',
        category: '\u7ec4\u56fe',
        channelId: 5443492141,
        name: '\u56fe\u7247',
      },
      word: {
        key: 'word',
        category: 'news_world',
        channelId: 3189398968,
        name: '\u56fd\u9645',
      },
      digital: {
        key: 'digital',
        category: 'digital',
        channelId: 3189398981,
        name: '\u6570\u7801',
      },
      military: {
        key: 'military',
        category: 'news_military',
        channelId: 3189398960,
        name: '\u519b\u4e8b',
      },
      game: {
        key: 'game',
        category: 'news_game',
        channelId: 3189398995,
        name: '\u6e38\u620f',
      },
      history: {
        key: 'history',
        category: 'news_history',
        channelId: 3189398965,
        name: '\u5386\u53f2',
      },
      food: {
        key: 'food',
        category: 'news_food',
        channelId: 3189399002,
        name: '\u7f8e\u98df',
      },
      essay: {
        key: 'essay',
        category: 'news_essay',
        channelId: 3189399001,
        name: '\u7f8e\u6587',
      },
      regimen: {
        key: 'regimen',
        category: 'news_regimen',
        channelId: 3189398959,
        name: '\u517b\u751f',
      },
      travel: {
        key: 'travel',
        category: 'news_travel',
        channelId: 3189398983,
        name: '\u65c5\u6e38',
      },
      discovery: {
        key: 'discovery',
        category: 'news_discovery',
        channelId: 3189398978,
        name: '\u63a2\u7d22',
      },
      fashion: {
        key: 'fashion',
        category: 'news_fashion',
        channelId: 3189398984,
        name: '\u65f6\u5c1a',
      },
      baby: {
        key: 'baby',
        category: 'news_baby',
        channelId: 3189399004,
        name: '\u80b2\u513f',
      },
    }
    function R(e) {
      return Object.values(D).filter(function (t) {
        return t.channelId === e
      })[0]
    }
    var L = {
      default: [
        D.home.key,
        D.hot.key,
        D.xigua.key,
        D.finance.key,
        D.tech.key,
        D.entertainment.key,
        D.sports.key,
        D.live.key,
      ],
      more: [
        D.fashion.key,
        D.food.key,
        D.word.key,
        D.dcd.key,
        D.regimen.key,
        D.travel.key,
        D.military.key,
        D.gallery.key,
        D.baby.key,
        D.history.key,
        D.game.key,
        D.digital.key,
      ],
    }
    function P() {
      var e = L
      var t = {
        default: e.default.map(function (e) {
          return D[e]
        }),
        more: e.more.map(function (e) {
          return D[e]
        }),
      }
      return t
    }
    var M = n('d5c06b6cf3948fb34e9d')
    function F(e) {
      '@babel/helpers - typeof'
      if ('function' === typeof Symbol && 'symbol' === typeof Symbol.iterator)
        F = function e(t) {
          return typeof t
        }
      else
        F = function e(t) {
          return t &&
            'function' === typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t
        }
      return F(e)
    }
    function V(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    }
    function K(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        r.enumerable = r.enumerable || false
        r.configurable = true
        if ('value' in r) r.writable = true
        Object.defineProperty(e, r.key, r)
      }
    }
    function B(e, t, n) {
      if (t) K(e.prototype, t)
      if (n) K(e, n)
      return e
    }
    function W(e, t) {
      if ('function' !== typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: true,
          configurable: true,
        },
      })
      if (t) z(e, t)
    }
    function z(e, t) {
      z =
        Object.setPrototypeOf ||
        function e(t, n) {
          t.__proto__ = n
          return t
        }
      return z(e, t)
    }
    function H(e) {
      var t = G()
      return function n() {
        var r = J(e),
          a
        if (t) {
          var o = J(this).constructor
          a = Reflect.construct(r, arguments, o)
        } else a = r.apply(this, arguments)
        return Q(this, a)
      }
    }
    function Q(e, t) {
      if (t && ('object' === F(t) || 'function' === typeof t)) return t
      return q(e)
    }
    function q(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return e
    }
    function G() {
      if ('undefined' === typeof Reflect || !Reflect.construct) return false
      if (Reflect.construct.sham) return false
      if ('function' === typeof Proxy) return true
      try {
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        )
        return true
      } catch (e) {
        return false
      }
    }
    function J(e) {
      J = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function e(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
      return J(e)
    }
    var Y = function e(t) {
      var n = t.channel
      if (n.url)
        return v.a.createElement(
          'a',
          {
            href: n.url,
            target: '_blank',
            rel: 'noopener',
            tabIndex: -1,
            'aria-hidden': true,
          },
          n.name
        )
      return v.a.createElement(v.a.Fragment, null, n.name)
    }
    function Z(e) {
      Object(_['a'])('top_bar_click', {
        from_position: 'feed',
        action_type: e,
      })
    }
    var X = (function (e) {
      W(n, e)
      var t = H(n)
      function n() {
        var e
        V(this, n)
        e = t.apply(this, arguments)
        e.state = {
          config: P(),
          activeKey: '',
          morePanelVisible: false,
        }
        e.moreBtnTimer = 0
        e.moreBtnEl = null
        e.handleClickChannel = function (t) {
          var n, r, a
          if (t.url) {
            Object(_['a'])('enter_category', {
              category_name: t.category,
              page_name:
                null === (n = e.props.logParams) || void 0 === n
                  ? void 0
                  : n.page_name,
            })
            return
          }
          null === (a = (r = e.props).onChange) || void 0 === a
            ? void 0
            : a.call(r, t, D[e.state.activeKey])
          window.open(
            'https://www.toutiao.com?channel='
              .concat(t.key, '&source=')
              .concat(e.props.logParams.page_name)
          )
        }
        e.emitClickEvent = function (t) {
          e.handleClickChannel(t)
          if (t.key === D.home.key) Z('click')
        }
        e.handleMouseEnterNav = function (e) {
          if (e.key === D.home.key) Z('hover')
        }
        e.handleKeyDown = function (t, n) {
          var r = t.keyCode
          if (13 === r || 32 === r) {
            t.preventDefault()
            t.stopPropagation()
            e.emitClickEvent(n)
            if (n.url) window.open(n.url)
          }
        }
        e.openMorePanel = function () {
          e.setState({
            morePanelVisible: true,
          })
        }
        e.closeMorePanel = function () {
          e.setState({
            morePanelVisible: false,
          })
        }
        return e
      }
      B(n, [
        {
          key: 'render',
          value: function e() {
            var t = this
            var n = this.state,
              r = n.config,
              a = n.activeKey,
              o = n.morePanelVisible
            return v.a.createElement(
              'div',
              {
                className: 'ttp-channel-nav',
              },
              v.a.createElement(
                'ul',
                {
                  className: 'ttp-channel-default-nav',
                },
                r.default.map(function (e) {
                  return v.a.createElement(
                    'li',
                    {
                      key: e.key,
                      tabIndex: 0,
                      role: 'button',
                      'aria-label': ''.concat(e.name, '\u9891\u9053'),
                      onKeyDown: function n(r) {
                        return t.handleKeyDown(r, e)
                      },
                    },
                    v.a.createElement(
                      'div',
                      {
                        className: p()('ttp-channel-default-nav-item', {
                          active: e.key === a,
                        }),
                        onClick: function n() {
                          return t.emitClickEvent(e)
                        },
                        onMouseEnter: function n() {
                          return t.handleMouseEnterNav(e)
                        },
                      },
                      v.a.createElement(Y, {
                        channel: e,
                      })
                    )
                  )
                }),
                v.a.createElement(
                  M['a'],
                  {
                    onOpen: this.openMorePanel,
                    onClose: this.closeMorePanel,
                  },
                  v.a.createElement(
                    M['a'].MenuButton,
                    null,
                    v.a.createElement(
                      'li',
                      {
                        'aria-label': '\u66f4\u591a\u9891\u9053',
                        className: 'more-btn-wrapper',
                      },
                      v.a.createElement(
                        'div',
                        {
                          className: p()('more-btn', {
                            hover: o,
                          }),
                          ref: function e(n) {
                            return (t.moreBtnEl = n)
                          },
                        },
                        '\u66f4\u591a'
                      ),
                      v.a.createElement(
                        'div',
                        {
                          className: p()('ttp-channel-more-nav-wrapper', {
                            show: o,
                          }),
                        },
                        v.a.createElement(
                          M['a'].MenuList,
                          null,
                          v.a.createElement(
                            'ul',
                            {
                              className: 'ttp-channel-more-nav',
                            },
                            r.more.map(function (e) {
                              return v.a.createElement(
                                M['a'].MenuItem,
                                {
                                  key: e.key,
                                  onKeyDown: function n(r) {
                                    return t.handleKeyDown(r, e)
                                  },
                                },
                                v.a.createElement(
                                  'li',
                                  {
                                    'aria-label': ''.concat(
                                      e.name,
                                      '\u9891\u9053'
                                    ),
                                  },
                                  v.a.createElement(
                                    'div',
                                    {
                                      className: 'ttp-channel-more-nav-item',
                                      onClick: function n() {
                                        return t.emitClickEvent(e)
                                      },
                                    },
                                    v.a.createElement(Y, {
                                      channel: e,
                                    })
                                  )
                                )
                              )
                            })
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          },
        },
      ])
      return n
    })(v.a.Component)
    var $ = n('6eb445fd5003cfdfc689')
    var ee = n('11720b014c5c4f26ef22')
    var te = n('2810e53ad7174f3c046d')
    var ne = n('437c345b2a5779f983fd')
    var re = n('abbf799a026c91d8612e')
    var ae = n('bd8ea4fd9e1bc4efca14')
    var oe = n('387f198293f6c9509d78')
    var ie = n('8e69b3d65fe197ac8eac')
    function ce(e) {
      return (
        window.btoa &&
        window.btoa(
          encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function e(t, n) {
            return String.fromCharCode('0x' + n)
          })
        )
      )
    }
    function ue(e) {
      return (
        window.atob &&
        decodeURIComponent(
          window
            .atob(e)
            .split('')
            .map(function (e) {
              return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2)
            })
            .join('')
        )
      )
    }
    function le(e, t, n, r, a, o, i) {
      try {
        var c = e[o](i)
        var u = c.value
      } catch (l) {
        n(l)
        return
      }
      if (c.done) t(u)
      else Promise.resolve(u).then(r, a)
    }
    function se(e) {
      return function () {
        var t = this,
          n = arguments
        return new Promise(function (r, a) {
          var o = e.apply(t, n)
          function i(e) {
            le(o, r, a, i, c, 'next', e)
          }
          function c(e) {
            le(o, r, a, i, c, 'throw', e)
          }
          i(void 0)
        })
      }
    }
    function fe(e, t) {
      return be(e) || pe(e, t) || ve(e, t) || de()
    }
    function de() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    }
    function ve(e, t) {
      if (!e) return
      if ('string' === typeof e) return me(e, t)
      var n = Object.prototype.toString.call(e).slice(8, -1)
      if ('Object' === n && e.constructor) n = e.constructor.name
      if ('Map' === n || 'Set' === n) return Array.from(e)
      if (
        'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return me(e, t)
    }
    function me(e, t) {
      if (null == t || t > e.length) t = e.length
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
      return r
    }
    function pe(e, t) {
      if ('undefined' === typeof Symbol || !(Symbol.iterator in Object(e)))
        return
      var n = []
      var r = true
      var a = false
      var o = void 0
      try {
        for (
          var i = e[Symbol.iterator](), c;
          !(r = (c = i.next()).done);
          r = true
        ) {
          n.push(c.value)
          if (t && n.length === t) break
        }
      } catch (u) {
        a = true
        o = u
      } finally {
        try {
          if (!r && null != i['return']) i['return']()
        } finally {
          if (a) throw o
        }
      }
      return n
    }
    function be(e) {
      if (Array.isArray(e)) return e
    }
    var he = 40
    var ge = 38
    var _e = 13
    var ye = {
      focusStart: 0,
      pressDown: 0,
    }
    var we = function e(t) {
      var n = t.className,
        r = t.newSearch,
        a = t.autoFocus,
        o = void 0 === a ? false : a,
        i = t.logParams
      var c = Object(d['useRef'])(null)
      var u = Object(d['useRef'])(null)
      var l = Object(d['useRef'])(false)
      var s = Object(d['useState'])(''),
        f = fe(s, 2),
        m = f[0],
        b = f[1]
      var h = Object(d['useState'])(false),
        g = fe(h, 2),
        y = g[0],
        w = g[1]
      var E = Object(d['useState'])([]),
        k = fe(E, 2),
        A = k[0],
        j = k[1]
      var x = Object(d['useState'])(-1),
        O = fe(x, 2),
        C = O[0],
        I = O[1]
      var S = Object(d['useRef'])(m)
      S.current = m
      var T = Object(d['useMemo'])(
        function () {
          if (!y || C > -1)
            return function () {
              return
            }
          return Object(ae['e'])(
            se(
              regeneratorRuntime.mark(function e() {
                var t, n, r, a
                return regeneratorRuntime.wrap(function e(o) {
                  while (1)
                    switch ((o.prev = o.next)) {
                      case 0:
                        if (!S.current) {
                          o.next = 7
                          break
                        }
                        o.next = 3
                        return re['a'].search.getSearchSug(S.current)
                      case 3:
                        a = o.sent
                        if (
                          'success' ===
                          (null ===
                            (t =
                              null === a || void 0 === a ? void 0 : a.data) ||
                          void 0 === t
                            ? void 0
                            : t.message)
                        )
                          j(
                            null ===
                              (r =
                                null ===
                                  (n =
                                    null === a || void 0 === a
                                      ? void 0
                                      : a.data) || void 0 === n
                                  ? void 0
                                  : n.data) || void 0 === r
                              ? void 0
                              : r.slice(0, 8)
                          )
                        o.next = 9
                        break
                      case 7:
                        j([])
                        I(-1)
                      case 9:
                      case 'end':
                        return o.stop()
                    }
                }, e)
              })
            ),
            250
          )
        },
        [y, C]
      )
      Object(d['useEffect'])(T, [m, y])
      var N = function e() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : S.current
        var n = arguments.length > 1 ? arguments[1] : void 0
        var a = arguments.length > 2 ? arguments[2] : void 0
        if (!t.trim()) return
        var o = r
          ? '//so.toutiao.com/search?dvpf=pc&source='
              .concat(n, '&keyword=')
              .concat(encodeURIComponent(t))
          : '//www.toutiao.com/search/?keyword='.concat(encodeURIComponent(t))
        window.open(o)
        Object(_['a'])(
          'search_click_toutiao_pc',
          Object.assign(Object.assign({}, i), {
            search_hot_word: t,
            from_position: 'sug' === n ? 'detail_sug' : 'search',
          })
        )
        var c = {
          query_input_time: Date.now() - ye.focusStart,
          search_press_duration: Date.now() - ye.pressDown,
          search_viewport_x:
            (null === a || void 0 === a ? void 0 : a.clientX) || -1,
          search_viewport_y:
            (null === a || void 0 === a ? void 0 : a.clientY) || -1,
        }
        document.cookie = 'tt_search_log='.concat(
          ce(JSON.stringify(c)),
          '; domain=.toutiao.com'
        )
      }
      var U = Object(d['useCallback'])(function (e) {
        I(-1)
        b(e.target.value)
      }, [])
      var D = Object(d['useCallback'])(function () {
        ye.focusStart = Date.now()
        w(true)
        Object(_['a'])('search_tab_enter')
      }, [])
      var R = Object(d['useCallback'])(function () {
        setTimeout(function () {
          var e
          null === (e = u.current) || void 0 === e ? void 0 : e.blur()
          w(false)
          I(-1)
        }, 250)
      }, [])
      var L = Object(d['useCallback'])(
        function (e) {
          var t = e.which || e.keyCode || e.charCode
          var n = -1
          if (t === he) {
            e.preventDefault()
            n = (C + 1) % A.length
          } else if (t === ge) {
            e.preventDefault()
            n = (A.length + C - 1) % A.length
          } else if (t === _e) ye.pressDown = Date.now()
          if (n > -1) {
            I(n)
            b(A[n].keyword)
          }
        },
        [C, A]
      )
      var P = Object(d['useCallback'])(
        function (e) {
          if (l.current) {
            l.current = false
            return
          }
          var t = e.which || e.keyCode || e.charCode
          if (t === _e) {
            var n = C > -1 ? A[C].keyword : void 0
            N(n, C > -1 ? 'sug' : 'input')
          }
        },
        [C, A]
      )
      var M = Object(d['useCallback'])(function () {
        ye.pressDown = Date.now()
      }, [])
      var F = Object(d['useCallback'])(function () {
        l.current = true
      }, [])
      var V = Object(d['useCallback'])(function (e, t) {
        b(e)
        N(e, 'sug', t)
      }, [])
      Object(d['useEffect'])(function () {
        o && D()
      }, [])
      Object(d['useEffect'])(
        function () {
          var e = Object(ae['e'])(function () {
            var e
            if (!u.current || !y) return
            var t =
              null === (e = u.current) || void 0 === e
                ? void 0
                : e.getBoundingClientRect().bottom
            if (t < 0) R()
          }, 300)
          window.addEventListener('scroll', e)
          return function () {
            return window.removeEventListener('scroll', e)
          }
        },
        [y]
      )
      return v.a.createElement(
        'div',
        {
          ref: c,
          className: p()('ttp-search-wrapper', [n]),
        },
        v.a.createElement(
          'div',
          {
            className: 'search',
          },
          v.a.createElement('input', {
            type: 'text',
            'aria-label': '\u641c\u7d22',
            placeholder: '',
            value: m,
            ref: u,
            autoFocus: o,
            onChange: U,
            onFocus: D,
            onBlur: R,
            onKeyDown: L,
            onKeyUp: P,
            onCompositionEnd: F,
          }),
          v.a.createElement(
            'button',
            {
              type: 'button',
              'aria-label': '\u641c\u7d22',
              onClick: function e(t) {
                return N(m, C > -1 ? 'sug' : 'input', t)
              },
              onMouseDown: M,
            },
            v.a.createElement('i', null)
          ),
          y &&
            !!A.length &&
            v.a.createElement(
              'div',
              {
                className: 'sug',
              },
              A.map(function (e, t) {
                var n = e.keyword.indexOf(m)
                var r = e.keyword
                if (n > -1)
                  r = v.a.createElement(
                    v.a.Fragment,
                    null,
                    e.keyword.slice(0, n),
                    v.a.createElement('em', null, m),
                    e.keyword.slice(n + m.length)
                  )
                return v.a.createElement(
                  'div',
                  {
                    className: p()('sug-item', {
                      current: t === C,
                    }),
                    onClick: function t(n) {
                      return V(e.keyword, n)
                    },
                    onMouseDown: M,
                    key: e.keyword,
                  },
                  r
                )
              })
            )
        )
      )
    }
    var Ee = we
    var ke = n('89fc23cc70b02aad75a9')
    function Ae(e, t) {
      return Ie(e) || Ce(e, t) || xe(e, t) || je()
    }
    function je() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    }
    function xe(e, t) {
      if (!e) return
      if ('string' === typeof e) return Oe(e, t)
      var n = Object.prototype.toString.call(e).slice(8, -1)
      if ('Object' === n && e.constructor) n = e.constructor.name
      if ('Map' === n || 'Set' === n) return Array.from(e)
      if (
        'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return Oe(e, t)
    }
    function Oe(e, t) {
      if (null == t || t > e.length) t = e.length
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
      return r
    }
    function Ce(e, t) {
      if ('undefined' === typeof Symbol || !(Symbol.iterator in Object(e)))
        return
      var n = []
      var r = true
      var a = false
      var o = void 0
      try {
        for (
          var i = e[Symbol.iterator](), c;
          !(r = (c = i.next()).done);
          r = true
        ) {
          n.push(c.value)
          if (t && n.length === t) break
        }
      } catch (u) {
        a = true
        o = u
      } finally {
        try {
          if (!r && null != i['return']) i['return']()
        } finally {
          if (a) throw o
        }
      }
      return n
    }
    function Ie(e) {
      if (Array.isArray(e)) return e
    }
    var Se = 'https://sso.toutiao.com/login/'
    var Te = 108
    var Ne = function e(t) {
      var n = t.redirectUrl
      var r = Object(d['useState'])(Se),
        a = Ae(r, 2),
        o = a[0],
        i = a[1]
      Object(d['useEffect'])(function () {
        i(
          'https://sso.toutiao.com/login/?service='.concat(
            window.encodeURIComponent(n || window.location.href)
          )
        )
      }, [])
      return v.a.createElement(
        'a',
        {
          className: 'login-button',
          href: o,
        },
        '\u767b\u5f55'
      )
    }
    var Ue = function e(t) {
      var n = t || {},
        r = n.logParams,
        a = n.className,
        o = n.userInfo,
        i = n.loginRedirectUrl
      var c = Object(d['useState'])(false),
        u = Ae(c, 2),
        l = u[0],
        s = u[1]
      var f = Object(d['useRef'])(null)
      var m = Object(d['useState'])(Te / 2),
        b = Ae(m, 2),
        h = b[0],
        g = b[1]
      var y = [
        {
          href: '//www.toutiao.com/c/user/token/'
            .concat(null === o || void 0 === o ? void 0 : o.userId, '/?source=')
            .concat(r.pageType),
          text: '\u4e2a\u4eba\u4e3b\u9875',
          position: 'home_page',
        },
        {
          href: '//mp.toutiao.com',
          text: '\u521b\u4f5c\u5e73\u53f0',
          position: 'creator',
        },
        {
          href: '//www.toutiao.com/c/user/token/'
            .concat(
              null === o || void 0 === o ? void 0 : o.userId,
              '/?tab=fav&source='
            )
            .concat(r.pageType),
          text: '\u6211\u7684\u6536\u85cf',
          position: 'my_favorite',
        },
        {
          href: '//sso.toutiao.com/logout/',
          text: '\u9000\u51fa\u767b\u5f55',
          target: '_self',
          position: 'un_login',
        },
      ]
      function w() {
        Object(_['a'])('top_bar_click', {
          from_position: 'author',
          action_type: 'hover',
        })
        Object(_['a'])('top_bar_card_expo', {
          page_type: null === r || void 0 === r ? void 0 : r.pageType,
          card_name: 'author',
        })
        if (f.current) {
          var e = f.current.getBoundingClientRect()
          var t = e.width || f.current.clientWidth
          var n = window.innerWidth - e.x
          var a = n - t / 2 - Te / 2
          if (a < 0) g(Te / 2 - a)
          else g(Te / 2)
        }
        s(true)
      }
      function E(e) {
        Object(_['a'])('card_click', {
          page_type: null === r || void 0 === r ? void 0 : r.pageType,
          from_position: e,
          card_name: 'author',
        })
      }
      function k() {
        Object(_['a'])('top_bar_click', {
          from_position: 'author',
          action_type: 'click',
        })
      }
      var A = v.a.createElement(
        'div',
        {
          className: 'user-icon',
          ref: f,
          onMouseEnter: w,
          onMouseLeave: function e() {
            return s(false)
          },
        },
        v.a.createElement(
          'a',
          {
            'aria-label': null === o || void 0 === o ? void 0 : o.name,
            href: '//www.toutiao.com/c/user/token/'
              .concat(
                null === o || void 0 === o ? void 0 : o.userId,
                '/?source='
              )
              .concat(r.pageType),
            target: '_blank',
            rel: 'noopener',
            onClick: k,
          },
          v.a.createElement('img', {
            src: null === o || void 0 === o ? void 0 : o.avatarUrl,
            alt: '',
          })
        ),
        v.a.createElement(
          'div',
          {
            className: p()('user-list', {
              show: l,
              'hide-triangle': h !== Te / 2,
            }),
            style: {
              transform: 'translateX(-'.concat(h, 'px)'),
            },
          },
          v.a.createElement(
            'div',
            {
              className: 'user-list-content',
            },
            y.map(function (e) {
              return v.a.createElement(
                'a',
                {
                  href: e.href,
                  target: e.target || '_blank',
                  key: e.href,
                  rel: 'noopener',
                  onClick: function t() {
                    return E(e.position)
                  },
                },
                e.text
              )
            })
          )
        )
      )
      return v.a.createElement(
        'div',
        {
          className: p()('ttp-header-profile', [a]),
        },
        (null === o || void 0 === o ? void 0 : o.userId)
          ? A
          : v.a.createElement(Ne, {
              redirectUrl: i,
            })
      )
    }
    var De = Ue
    function Re(e, t) {
      return Ve(e) || Fe(e, t) || Pe(e, t) || Le()
    }
    function Le() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    }
    function Pe(e, t) {
      if (!e) return
      if ('string' === typeof e) return Me(e, t)
      var n = Object.prototype.toString.call(e).slice(8, -1)
      if ('Object' === n && e.constructor) n = e.constructor.name
      if ('Map' === n || 'Set' === n) return Array.from(e)
      if (
        'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return Me(e, t)
    }
    function Me(e, t) {
      if (null == t || t > e.length) t = e.length
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
      return r
    }
    function Fe(e, t) {
      if ('undefined' === typeof Symbol || !(Symbol.iterator in Object(e)))
        return
      var n = []
      var r = true
      var a = false
      var o = void 0
      try {
        for (
          var i = e[Symbol.iterator](), c;
          !(r = (c = i.next()).done);
          r = true
        ) {
          n.push(c.value)
          if (t && n.length === t) break
        }
      } catch (u) {
        a = true
        o = u
      } finally {
        try {
          if (!r && null != i['return']) i['return']()
        } finally {
          if (a) throw o
        }
      }
      return n
    }
    function Ve(e) {
      if (Array.isArray(e)) return e
    }
    var Ke = function e(t) {
      var n = t || {},
        r = n.logParams,
        a = n.className,
        o = n.userInfo,
        i = n.theme,
        c = n.loginRedirectUrl
      var u = Object(d['useRef'])(false)
      var l = Object(d['useState'])(false),
        s = Re(l, 2),
        f = s[0],
        m = s[1]
      var b = Object(d['useCallback'])(function () {
        if (u.current) return
        u.current = true
        h()(function () {
          var e = window.scrollY || window.pageYOffset
          if (e > 0) m(true)
          else m(false)
          u.current = false
        })
      }, [])
      Object(d['useEffect'])(function () {
        window.addEventListener('scroll', b)
        return function () {
          window.removeEventListener('scroll', b)
        }
      }, [])
      function g() {
        Object(_['a'])(
          'header_logo_click',
          Object.assign(Object.assign({}, r), {
            from_position: 'logo',
          })
        )
      }
      return v.a.createElement(
        I,
        {
          placeholderHeight: 64,
          position: {
            top: 0,
            left: 0,
            zIndex: 200,
          },
        },
        v.a.createElement(
          'div',
          {
            role: 'banner',
            className: p()('ttp-site-header-wrapper', a, {
              dark: 'dark' === i,
              shadow: f,
            }),
          },
          v.a.createElement(
            'div',
            {
              className: 'ttp-site-header',
            },
            v.a.createElement('a', {
              'aria-label': '\u4eca\u65e5\u5934\u6761\u5fbd\u6807',
              className: 'logo',
              href: '/',
              onClick: g,
            }),
            v.a.createElement(
              'div',
              {
                className: 'channel-wrapper',
              },
              v.a.createElement(X, {
                logParams: r,
              })
            ),
            v.a.createElement(Ee, {
              newSearch: true,
              logParams: {
                page_name: r.page_name,
                group_id: r.group_id,
                if_login: o ? '1' : '0',
              },
            }),
            v.a.createElement(
              'div',
              {
                style: {
                  marginLeft: 30,
                  flexShrink: 0,
                },
              },
              v.a.createElement(De, {
                logParams: {
                  pageType: null === r || void 0 === r ? void 0 : r.page_name,
                },
                userInfo: o,
                loginRedirectUrl: c,
              })
            )
          )
        )
      )
    }
    var Be = (t['a'] = Ke)
  },
  d5c06b6cf3948fb34e9d: function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return S
    })
    var r = n('8baad6854b7235c2e103')
    var a = n('0a85e9668458aebfdc91')
    var o = n('ffefcdf7dd8e3bcb704c')
    var i = n('04c233c55b3dbc9a7c1d')
    var c = n('c5e07f1c13900756393d')
    var u = n('69084d01d3449fc1bc27')
    var l = n.n(u)
    var s = l.a.createContext({
      disable: false,
      expand: false,
      listEl: null,
      buttonEl: null,
      setListEl: function e() {},
      setButtonEl: function e() {},
      setFocusStatus: function e() {},
      focusListItem: function e() {},
      openMenu: function e() {},
      closeMenu: function e() {},
    })
    var f = s
    var d = n('9ab2f1ff086dee039972')
    var v = function e(t) {
      var n = t.onFocus,
        r = t.onBlur,
        a = t.onMouseEnter,
        o = t.onMouseLeave,
        i = t.onKeyDown,
        c = t.children
      var s = Object(u['useContext'])(f)
      var v = Object(u['useRef'])(null)
      Object(u['useEffect'])(function () {
        if (v.current) s.setButtonEl(v.current)
      }, [])
      function m(e) {
        e.stopPropagation()
        s.setFocusStatus(true)
        null === n || void 0 === n ? void 0 : n()
      }
      function p(e) {
        e.stopPropagation()
        s.setFocusStatus(false)
        null === r || void 0 === r ? void 0 : r()
      }
      function b() {
        s.setFocusStatus(true)
        s.openMenu()
        null === a || void 0 === a ? void 0 : a()
      }
      function h() {
        s.setFocusStatus(false)
        null === o || void 0 === o ? void 0 : o()
      }
      function g(e) {
        if (!s.disable) {
          e.stopPropagation()
          switch (e.keyCode) {
            case d['a'].ENTER:
            case d['a'].SPACE:
              e.preventDefault()
              s.openMenu()
              s.focusListItem('next')
              break
            case d['a'].UP:
              e.preventDefault()
              s.openMenu()
              s.focusListItem('prev')
              break
            case d['a'].DOWN:
              e.preventDefault()
              s.openMenu()
              s.focusListItem('next')
              break
            default:
              return
          }
          null === i || void 0 === i ? void 0 : i(e)
        }
      }
      return l.a.cloneElement(c, {
        tabIndex: 0,
        role: 'button',
        'aria-haspopup': true,
        'aria-expanded': s.expand,
        ref: v,
        onFocus: m,
        onBlur: p,
        onMouseEnter: b,
        onMouseLeave: h,
        onKeyDown: g,
      })
    }
    var m = v
    var p = function e(t) {
      var n = t.children,
        r = t.onMouseEnter,
        a = t.onMouseLeave
      var o = Object(u['useContext'])(f)
      var i = Object(u['useRef'])(null)
      Object(u['useEffect'])(function () {
        if (i.current) o.setListEl(i.current)
      }, [])
      function c(e) {
        e.stopPropagation()
        o.setFocusStatus(true)
        o.openMenu()
        null === r || void 0 === r ? void 0 : r()
      }
      function s(e) {
        e.stopPropagation()
        o.setFocusStatus(false)
        null === a || void 0 === a ? void 0 : a()
      }
      return l.a.cloneElement(n, {
        role: 'menu',
        ref: i,
        onMouseEnter: c,
        onMouseLeave: s,
      })
    }
    var b = p
    var h = function e(t) {
      var n = t.children,
        r = t.onKeyDown,
        a = t.onFocus,
        o = t.onBlur
      var i = Object(u['useContext'])(f)
      function c(e) {
        e.stopPropagation()
        i.setFocusStatus(true)
        null === a || void 0 === a ? void 0 : a(e)
      }
      function s(e) {
        e.stopPropagation()
        i.setFocusStatus(false)
        null === o || void 0 === o ? void 0 : o(e)
      }
      function v(e) {
        var t
        if (!i.disable) {
          e.stopPropagation()
          switch (e.keyCode) {
            case d['a'].ESC:
              i.closeMenu()
              null === (t = i.buttonEl) || void 0 === t ? void 0 : t.focus()
              break
            case d['a'].UP:
              e.preventDefault()
              i.openMenu()
              i.focusListItem('prev')
              break
            case d['a'].DOWN:
              e.preventDefault()
              i.openMenu()
              i.focusListItem('next')
              break
            default:
              break
          }
          null === r || void 0 === r ? void 0 : r(e)
        }
      }
      return l.a.cloneElement(n, {
        role: 'menuitem',
        tabIndex: -1,
        onFocus: c,
        onBlur: s,
        onKeyDown: v,
      })
    }
    var g = h
    function _(e) {
      '@babel/helpers - typeof'
      if ('function' === typeof Symbol && 'symbol' === typeof Symbol.iterator)
        _ = function e(t) {
          return typeof t
        }
      else
        _ = function e(t) {
          return t &&
            'function' === typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t
        }
      return _(e)
    }
    function y(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    }
    function w(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        r.enumerable = r.enumerable || false
        r.configurable = true
        if ('value' in r) r.writable = true
        Object.defineProperty(e, r.key, r)
      }
    }
    function E(e, t, n) {
      if (t) w(e.prototype, t)
      if (n) w(e, n)
      return e
    }
    function k(e, t) {
      if ('function' !== typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        )
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: true,
          configurable: true,
        },
      })
      if (t) A(e, t)
    }
    function A(e, t) {
      A =
        Object.setPrototypeOf ||
        function e(t, n) {
          t.__proto__ = n
          return t
        }
      return A(e, t)
    }
    function j(e) {
      var t = C()
      return function n() {
        var r = I(e),
          a
        if (t) {
          var o = I(this).constructor
          a = Reflect.construct(r, arguments, o)
        } else a = r.apply(this, arguments)
        return x(this, a)
      }
    }
    function x(e, t) {
      if (t && ('object' === _(t) || 'function' === typeof t)) return t
      return O(e)
    }
    function O(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      return e
    }
    function C() {
      if ('undefined' === typeof Reflect || !Reflect.construct) return false
      if (Reflect.construct.sham) return false
      if ('function' === typeof Proxy) return true
      try {
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        )
        return true
      } catch (e) {
        return false
      }
    }
    function I(e) {
      I = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function e(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }
      return I(e)
    }
    var S = (function (e) {
      k(n, e)
      var t = j(n)
      function n() {
        var e
        y(this, n)
        e = t.apply(this, arguments)
        e.state = {
          expand: false,
          listEl: null,
          buttonEl: null,
        }
        e.hasFocus = false
        e.setFocusStatus = function (t) {
          e.hasFocus = t
          if (!t)
            setTimeout(function () {
              if (!e.hasFocus) e.closeMenu()
            }, e.props.closeTimeout || 300)
        }
        e.setListEl = function (t) {
          e.setState({
            listEl: t,
          })
        }
        e.setButtonEl = function (t) {
          e.setState({
            buttonEl: t,
          })
        }
        e.openMenu = function () {
          e.props.onOpen()
          e.setState({
            expand: true,
          })
        }
        e.closeMenu = function () {
          e.props.onClose()
          e.setState({
            expand: false,
          })
        }
        e.getListItems = function () {
          var t
          return Array.prototype.slice.call(
            (null === (t = e.state.listEl) || void 0 === t
              ? void 0
              : t.childNodes) || []
          )
        }
        e.focusListItem = function (t) {
          if (!e.state.listEl) return
          var n = e.props.getListItems
            ? e.props.getListItems(e.state.listEl)
            : e.getListItems()
          var r = -1
          n.some(function (e, t) {
            if (e === document.activeElement) {
              r = t
              return true
            }
            return false
          })
          if ('next' === t) r = (r + 1) % n.length
          else {
            r = r < 0 ? 0 : r
            r = (r - 1 + n.length) % n.length
          }
          setTimeout(function () {
            var e
            null === (e = n[r]) || void 0 === e ? void 0 : e.focus()
          })
        }
        return e
      }
      E(n, [
        {
          key: 'render',
          value: function e() {
            return l.a.createElement(
              f.Provider,
              {
                value: {
                  disable: this.props.disable || false,
                  expand: this.state.expand,
                  listEl: this.state.listEl,
                  buttonEl: this.state.buttonEl,
                  setListEl: this.setListEl,
                  setButtonEl: this.setButtonEl,
                  setFocusStatus: this.setFocusStatus,
                  focusListItem: this.focusListItem,
                  openMenu: this.openMenu,
                  closeMenu: this.closeMenu,
                },
              },
              this.props.children
            )
          },
        },
      ])
      return n
    })(l.a.Component)
    S.MenuButton = m
    S.MenuList = b
    S.MenuItem = g
  },
  d84b833f284337beaf9b: function (e, t, n) {
    'use strict'
    var r = n('020ba8dae3d3021d9966')
    var a = n.n(r)
    var o = n('2b4fba5b8716cb99e98e')
    var i = n.n(o)
    var c = n('bd61c3e57dc18e488613')
    var u = n.n(c)
    var l = n('8f4085b35f259db3270e')
    var s = n.n(l)
    var f = n('92285e035e86b5e44a25')
    var d = n.n(f)
    var v = n('babc388b3bd2ae4e69b5')
    var m = n.n(v)
    var p = n('2e2e432f825443caa710')
    var b = n.n(p)
    var h = n('b6196699b5f3c8d65fe7')
    var g = n.n(h)
    var _ = n('69084d01d3449fc1bc27')
    var y = n.n(_)
    var w = n('2e0796c118320b51c6e6')
    var E = n('93bb9453334553ad78bb')
    var k = n.n(E)
    var A = n('056dd54dadaa8f820dbe')
    var j = n.n(A)
    var x = n('768ba9cea7a0509ada36')
    var O = n.n(x)
    var C = n('aa2fb4f87afc8962f655')
    var I = n.n(C)
    var S = n('b66b65adbbdcfe0f4f3e')
    var T = n.n(S)
    var N = n('dba0de806d3803be2b0f')
    var U = n.n(N)
    var D = n('174811872339f1d02c40')
    var R = n.n(D)
    var L = n('7c04e1c6a9d8a4a067f5')
    var P = n('be6323750fae7868d676')
    function M(e) {
      var t = F()
      return function n() {
        var r = U()(e),
          a
        if (t) {
          var o = U()(this).constructor
          a = k()(r, arguments, o)
        } else a = r.apply(this, arguments)
        return T()(this, a)
      }
    }
    function F() {
      if ('undefined' === typeof Reflect || !k.a) return false
      if (k.a.sham) return false
      if ('function' === typeof Proxy) return true
      try {
        Date.prototype.toString.call(k()(Date, [], function () {}))
        return true
      } catch (e) {
        return false
      }
    }
    var V = (function (e) {
      I()(n, e)
      var t = M(n)
      function n() {
        var e
        j()(this, n)
        e = t.apply(this, arguments)
        e.state = {
          fade: false,
        }
        e.toastEl = null
        return e
      }
      O()(n, [
        {
          key: 'componentDidMount',
          value: function e() {
            var t,
              n = this
            var r = document.activeElement
            null === (t = this.toastEl) || void 0 === t ? void 0 : t.focus()
            this.timer = setTimeout(function () {
              n.setState({
                fade: true,
              })
              if (Object(P['p'])(r))
                null === r || void 0 === r ? void 0 : r.focus()
            }, 2e3)
          },
        },
        {
          key: 'componentWillUnmount',
          value: function e() {
            clearTimeout(this.timer)
          },
        },
        {
          key: 'render',
          value: function e() {
            var t = this
            var n = this.state.fade
            var r = this.props.msg
            return y.a.createElement(
              'div',
              {
                role: 'alert',
                tabIndex: 0,
                'aria-label': r,
                'data-focus-trap-disable': true,
                ref: function e(n) {
                  t.toastEl = n
                },
                className: R()('toast', {
                  fade: n,
                }),
              },
              r
            )
          },
        },
      ])
      return n
    })(y.a.PureComponent)
    function K(e, t) {
      var n = m()(e)
      if (d.a) {
        var r = d()(e)
        if (t)
          r = r.filter(function (t) {
            return s()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function B(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          K(Object(n), true).forEach(function (t) {
            b()(e, t, n[t])
          })
        else if (u.a) i()(e, u()(n))
        else
          K(Object(n)).forEach(function (t) {
            a()(e, t, s()(n, t))
          })
      }
      return e
    }
    function W(e) {
      var t = document.createElement('div')
      document.body.appendChild(t)
      function n(e) {
        w['render'](_['createElement'](V, g()({}, e)), t)
      }
      function r() {
        var e = w['unmountComponentAtNode'](t)
        if (e && t.parentNode) t.parentNode.removeChild(t)
      }
      n(B({}, e))
      setTimeout(function () {
        return r()
      }, 3e3)
      return {}
    }
    V.info = function (e) {
      return W({
        msg: e,
      })
    }
    var z = (t['a'] = V)
  },
  e06df67fb68d40eb8959: function (e, t, n) {
    'use strict'
    var r = n('69084d01d3449fc1bc27')
    var a = n.n(r)
    var o = n('174811872339f1d02c40')
    var i = n.n(o)
    var c = n('f02651e2b8a0012e1e7a')
    var u = n.n(c)
    var l = n('583766baffb257cbf38f')
    var s = n('62ea6c1add15eea97123')
    var f = n('9ab2f1ff086dee039972')
    var d = n('e2097d7c28f72f984fd6')
    var v = function e(t) {
      var n = t.className,
        o = t.ariaLabel,
        c = t.title,
        u = t.children,
        v = t.visible,
        m = t.maskClosable,
        p = void 0 === m ? true : m,
        b = t.hasClose,
        h = void 0 === b ? true : b,
        g = t.onClose
      var _ = Object(r['useRef'])(null)
      var y = Object(r['useRef'])(null)
      var w = Object(r['useRef'])(null)
      var E = Object(r['useRef'])(null)
      var k = Object(r['useRef'])(null)
      var A = Object(r['useRef'])(null)
      var j = Object(r['useRef'])({})
      var x = Object(r['useRef'])({})
      function O() {
        if (p) g()
      }
      function C() {
        if (!_.current)
          _.current = document.querySelector('.ttp-drawer-wrapper')
        return _.current
      }
      function I() {
        var e = Object(l['a'])()
        j.current = Object(s['a'])(
          {
            overflow: 'hidden',
            width: 'calc(100% - '.concat(e, 'px)'),
          },
          document.body
        )
        Object(s['a'])(
          {
            width: 'calc(100% - '.concat(e, 'px)'),
          },
          C()
        )
        if (y.current) Object(s['a'])(x.current, y.current)
      }
      function S() {
        var e = Object(l['a'])()
        Object(s['a'])(j.current, document.body)
        Object(s['a'])(
          {
            width: '100%',
          },
          C()
        )
        if (y.current)
          x.current = Object(s['a'])(
            {
              overflowY: 'hidden',
              width: 'calc(100% - '.concat(e, 'px)'),
            },
            y.current
          )
      }
      function T() {
        E.current = document.activeElement
        setTimeout(function () {
          var e
          if (!w.current) return
          if (!k.current) k.current = w.current.querySelector('.first-focus-el')
          null === (e = k.current) || void 0 === e ? void 0 : e.focus()
        })
      }
      function N() {
        var e
        null === (e = E.current) || void 0 === e ? void 0 : e.focus()
      }
      var U = Object(r['useCallback'])(function (e) {
        if (e.keyCode === f['a'].ESC) g()
      }, [])
      var D = Object(r['useCallback'])(function (e) {
        var t
        var n = e.target
        if (!w.current || !n) return
        try {
          if (n === A.current || !(16 & w.current.compareDocumentPosition(n)))
            null === (t = k.current) || void 0 === t ? void 0 : t.focus()
        } catch (r) {
          void 0
        }
      }, [])
      Object(r['useEffect'])(
        function () {
          if (v) {
            window.addEventListener('keydown', U)
            window.addEventListener('focus', D, true)
            T()
          } else {
            window.removeEventListener('keydown', U)
            window.removeEventListener('focus', D, true)
            N()
          }
          return function () {
            window.removeEventListener('keydown', U)
            window.removeEventListener('focus', D, true)
            N()
          }
        },
        [v]
      )
      return a.a.createElement(
        d['a'],
        {
          className: i()('ttp-drawer-wrapper', n),
          visible: v,
          closeTimeout: 300,
        },
        a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement('div', {
            className: 'mask',
            onClick: O,
          }),
          a.a.createElement(
            'div',
            {
              role: 'dialog',
              'aria-modal': true,
              'aria-label': o,
              className: 'ttp-drawer',
              ref: w,
              onMouseEnter: I,
              onMouseLeave: S,
            },
            a.a.createElement(
              'div',
              {
                tabIndex: 0,
                className: 'header first-focus-el',
              },
              c,
              h &&
                a.a.createElement('button', {
                  'aria-label': '\u5173\u95ed',
                  className: 'close-btn',
                  onClick: g,
                })
            ),
            a.a.createElement(
              'div',
              {
                className: 'body',
                ref: y,
              },
              u
            ),
            a.a.createElement('div', {
              tabIndex: 0,
              ref: A,
            })
          )
        )
      )
    }
    t['a'] = v
  },
  e101535ac9d197332c92: function (e, t, n) {},
  e2077f1c42c64000df64: function (e, t, n) {},
  e2097d7c28f72f984fd6: function (e, t, n) {
    'use strict'
    var r = n('ba171699999e3c1cf739')
    var a = n.n(r)
    var o = n('cc225c8be7431245d3ca')
    var i = n.n(o)
    var c = n('f497c1956dc2c7102505')
    var u = n.n(c)
    var l = n('ffefcdf7dd8e3bcb704c')
    var s = n.n(l)
    var f = n('04c233c55b3dbc9a7c1d')
    var d = n.n(f)
    var v = n('4c49014db78c8239e1c9')
    var m = n.n(v)
    var p = n('8baad6854b7235c2e103')
    var b = n.n(p)
    var h = n('0a85e9668458aebfdc91')
    var g = n.n(h)
    var _ = n('69084d01d3449fc1bc27')
    var y = n.n(_)
    var w = n('2e0796c118320b51c6e6')
    var E = n.n(w)
    var k = n('174811872339f1d02c40')
    var A = n.n(k)
    function j(e, t) {
      return S(e) || I(e, t) || O(e, t) || x()
    }
    function x() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    }
    function O(e, t) {
      if (!e) return
      if ('string' === typeof e) return C(e, t)
      var n = Object.prototype.toString.call(e).slice(8, -1)
      if ('Object' === n && e.constructor) n = e.constructor.name
      if ('Map' === n || 'Set' === n) return Array.from(e)
      if (
        'Arguments' === n ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return C(e, t)
    }
    function C(e, t) {
      if (null == t || t > e.length) t = e.length
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
      return r
    }
    function I(e, t) {
      if ('undefined' === typeof Symbol || !(Symbol.iterator in Object(e)))
        return
      var n = []
      var r = true
      var a = false
      var o = void 0
      try {
        for (
          var i = e[Symbol.iterator](), c;
          !(r = (c = i.next()).done);
          r = true
        ) {
          n.push(c.value)
          if (t && n.length === t) break
        }
      } catch (u) {
        a = true
        o = u
      } finally {
        try {
          if (!r && null != i['return']) i['return']()
        } finally {
          if (a) throw o
        }
      }
      return n
    }
    function S(e) {
      if (Array.isArray(e)) return e
    }
    function T(e) {
      return null === e || void 0 === e ? void 0 : e.clientWidth
    }
    var N = function e(t) {
      var n = t.children,
        r = t.onMount
      Object(_['useEffect'])(function () {
        r && r()
      }, [])
      return E.a.createPortal(n, document.body)
    }
    var U = function e(t) {
      var n = t.visible,
        r = t.className,
        a = t.closeTimeout,
        o = void 0 === a ? 200 : a,
        i = t.children
      var c = Object(_['useState'])(n),
        u = j(c, 2),
        l = u[0],
        s = u[1]
      var f = Object(_['useRef'])(null)
      function d() {
        if (f.current) {
          f.current.classList.add('ttp-portal-show')
          f.current.classList.remove('ttp-portal-hide')
          T(f.current)
          f.current.classList.add('ttp-portal-anime-show')
          f.current.classList.remove('ttp-portal-anime-hide')
        }
      }
      function v() {
        if (f.current) {
          f.current.classList.add('ttp-portal-anime-hide')
          f.current.classList.remove('ttp-portal-anime-show')
        }
        setTimeout(function () {
          var e, t
          null === (e = f.current) || void 0 === e
            ? void 0
            : e.classList.add('ttp-portal-hide')
          null === (t = f.current) || void 0 === t
            ? void 0
            : t.classList.remove('ttp-portal-show')
        }, o)
      }
      Object(_['useEffect'])(
        function () {
          if (n) {
            s(true)
            if (f.current) d()
          } else v()
        },
        [n]
      )
      if (l)
        return y.a.createElement(
          N,
          {
            onMount: d,
          },
          y.a.createElement(
            'div',
            {
              className: A()('ttp-portal-wrapper', r),
              ref: f,
            },
            i
          )
        )
      return null
    }
    t['a'] = U
  },
  e659acf6991f02d5cf55: function (e, t, n) {},
  e6c0fa9948fe7e0bc082: function (e, t, n) {},
  ebc69a9d62eebb67413b: function (e, t, n) {},
  ec4896a27c0d90adc4f7: function (e, t, n) {},
  ecc80ba510baa97c03b0: function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return r
    })
    function r() {
      if ('undefined' === typeof window) return
      if (false);
      Promise.all([n.e(13), n.e(0)])
        .then(n.t.bind(null, '9b6650a046270e743bbd', 7))
        .then(function (e) {
          var t = e.TtWid
          var n = new t({
            aid: 24,
            service: 'www.toutiao.com',
            region: 'cn',
            union: true,
            needFid: false,
          })
          try {
            n.checkWebId()
          } catch (r) {
            void 0
          }
        })
    }
  },
  ed0e645fb10944a4fb8f: function (e, t, n) {
    'use strict'
    n.d(t, 'a', function () {
      return k
    })
    n.d(t, 'e', function () {
      return T
    })
    n.d(t, 'd', function () {
      return N
    })
    n.d(t, 'c', function () {
      return U
    })
    n.d(t, 'f', function () {
      return D
    })
    n.d(t, 'g', function () {
      return R
    })
    n.d(t, 'b', function () {
      return L
    })
    var r = n('020ba8dae3d3021d9966')
    var a = n.n(r)
    var o = n('2b4fba5b8716cb99e98e')
    var i = n.n(o)
    var c = n('bd61c3e57dc18e488613')
    var u = n.n(c)
    var l = n('8f4085b35f259db3270e')
    var s = n.n(l)
    var f = n('92285e035e86b5e44a25')
    var d = n.n(f)
    var v = n('babc388b3bd2ae4e69b5')
    var m = n.n(v)
    var p = n('2e2e432f825443caa710')
    var b = n.n(p)
    var h = n('d6467703a3330d4159c4')
    var g = n.n(h)
    var _ = n('be6323750fae7868d676')
    var y = n('10130cfc2ba27a09b7e5')
    function w(e, t) {
      var n = m()(e)
      if (d.a) {
        var r = d()(e)
        if (t)
          r = r.filter(function (t) {
            return s()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function E(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          w(Object(n), true).forEach(function (t) {
            b()(e, t, n[t])
          })
        else if (u.a) i()(e, u()(n))
        else
          w(Object(n)).forEach(function (t) {
            a()(e, t, s()(n, t))
          })
      }
      return e
    }
    var k = {
      ARTICLE: 'article',
      WTT: 'wtt',
      VIDEO: 'video',
      REFRESH: 'refresh',
    }
    function A(e) {
      var t = e.cell_type
      if (e.is_stick) return k.ARTICLE
      if (0 === t) {
        if (e.has_video) return k.VIDEO
        return k.ARTICLE
      }
      if ([32, 56].indexOf(t) > -1) return k.WTT
      if (48 === t) return k.VIDEO
      return k.ARTICLE
    }
    function j(e) {
      if (165 === e.group_source) return e.open_url
      return 'https://www.toutiao.com/group/'.concat(e.group_id, '/')
    }
    function x(e) {
      var t = []
      if (e.thumb_image_list) t = e.thumb_image_list
      else if (e.large_image_list) t = e.large_image_list
      else if (e.image_list) t = e.image_list
      else if (e.middle_image) t = [].concat(e.middle_image)
      return t
        .map(function (e) {
          var t
          return null === (t = e.url) || void 0 === t
            ? void 0
            : t.replace(/^http:/, '')
        })
        .filter(Boolean)
    }
    function O(e) {
      var t = e.user_info || e.user
      if (t)
        return {
          name: t.name,
          userSecToken: t.user_id,
          userAuthInfo: Object(_['r'])(t.user_auth_info || '{}'),
        }
      return null
    }
    function C(e, t) {
      var n = new g.a()
      t.forEach(function (e) {
        return n.add(e.group_id)
      })
      return e.filter(function (e) {
        return !n.has(e.group_id)
      })
    }
    function I(e) {
      return e.map(function (e) {
        var t = e.group_id || e.id
        var n = e.item_id || e.id
        if (48 === e.cell_type) {
          var r = Math.random().toString(16).substr(2)
          t = r
          n = r
        }
        return E(
          E({}, e),
          {},
          {
            group_id: t,
            item_id: n,
          }
        )
      })
    }
    function S(e, t) {
      return e.map(function (e, n) {
        var r = E(
          E({}, e),
          {},
          {
            title: e.feed_title || e.title,
            __channel_id: t,
            __channel_info: Object(y['c'])(t),
            __type: A(e),
            __detail_url: j(e),
            __cover_urls: x(e),
            __user_info: O(e),
          }
        )
        if (4 === e.stick_style) r.is_stick = true
        if (r.__type === k.WTT) {
          var a
          r.__show_subscribe = !(null === (a = r.user) || void 0 === a
            ? void 0
            : a.is_following)
        }
        if (r.is_stick) r.__stick_index = n
        return r
      })
    }
    function T(e, t, n, r) {
      var a = t.filter(function (e) {
        if (e.is_stick) return false
        return true
      })
      var o = C(I(e), a)
      var i = S(o, n)
      if ('after' === r) return a.concat(i)
      return i
    }
    function N(e, t, n) {
      var r = C(I(e), t)
      var a = S(r, n)
      return t.concat(a)
    }
    function U(e, t) {
      return t.filter(function (t) {
        return t.group_id !== e
      })
    }
    function D(e, t, n) {
      return n.map(function (n) {
        if (n.__type === k.WTT)
          if (n.user.id === t.user.id)
            return E(
              E({}, n),
              {},
              {
                user: E(
                  E({}, n.user),
                  {},
                  {
                    is_following: e,
                  }
                ),
              }
            )
        return n
      })
    }
    function R(e, t, n) {
      return n.map(function (n) {
        if (n.group_id === e.group_id)
          return E(
            E({}, n),
            {},
            {
              digg_count: 1 === t ? ++n.digg_count : --n.digg_count,
              user_digg: t,
            }
          )
        return n
      })
    }
    function L(e, t) {
      return e.map(function (e) {
        return E(E({}, e), t)
      })
    }
  },
  ee65a21bd3f67b6172ab: function (e, t, n) {},
  f02651e2b8a0012e1e7a: function (e, t, n) {},
  f379d8630b54b982148d: function (e, t, n) {
    'use strict'
    var r = n('69084d01d3449fc1bc27')
    var a = n.n(r)
    var o = n('174811872339f1d02c40')
    var i = n.n(o)
    var c = n('4459376f7bcc25f5262b')
    var u = n.n(c)
    var l = function e(t) {
      var n = t.size,
        r = t.className,
        o = t.url,
        c = t.authType
      return a.a.createElement(
        'div',
        {
          className: i()('ttp-avatar', 'auth-'.concat(c || 'none'), r, n, {
            auth: c,
          }),
        },
        o &&
          a.a.createElement('img', {
            src: o,
            alt: '',
          })
      )
    }
    t['a'] = l
  },
  f916861225cf3448ecd3: function (e, t, n) {},
  f9e7ab430b1eaeaf2713: function (e, t, n) {
    'use strict'
    var r = n('93bb9453334553ad78bb')
    var a = n.n(r)
    var o = n('056dd54dadaa8f820dbe')
    var i = n.n(o)
    var c = n('768ba9cea7a0509ada36')
    var u = n.n(c)
    var l = n('aa2fb4f87afc8962f655')
    var s = n.n(l)
    var f = n('b66b65adbbdcfe0f4f3e')
    var d = n.n(f)
    var v = n('dba0de806d3803be2b0f')
    var m = n.n(v)
    var p = n('69084d01d3449fc1bc27')
    var b = n.n(p)
    var h = n('54b2d6dda1f17486c719')
    var g = n('be6323750fae7868d676')
    var _ = n('c3cdc631e8328a3bec0b')
    var y = n('e2077f1c42c64000df64')
    var w = function e() {
      return b.a.createElement(
        'div',
        {
          className: 'feed-m-loading',
        },
        b.a.createElement(
          'span',
          {
            className: 'text',
          },
          '\u6b63\u5728\u83b7\u53d6\u66f4\u591a\u5185\u5bb9'
        )
      )
    }
    var E = w
    function k(e) {
      var t = A()
      return function n() {
        var r = m()(e),
          o
        if (t) {
          var i = m()(this).constructor
          o = a()(r, arguments, i)
        } else o = r.apply(this, arguments)
        return d()(this, o)
      }
    }
    function A() {
      if ('undefined' === typeof Reflect || !a.a) return false
      if (a.a.sham) return false
      if ('function' === typeof Proxy) return true
      try {
        Date.prototype.toString.call(a()(Date, [], function () {}))
        return true
      } catch (e) {
        return false
      }
    }
    var j = (function (e) {
      s()(n, e)
      var t = k(n)
      function n() {
        var e
        i()(this, n)
        e = t.apply(this, arguments)
        e.containerEl = null
        e.handleScroll = Object(g['s'])(function () {
          if (e.props.disable) return
          if (!e.containerEl) return
          if (e.props.loading || e.props.refresh || !e.props.hasMore) return
          var t = e.containerEl.getBoundingClientRect()
          var n = t.top + e.containerEl.clientHeight - window.innerHeight
          if (n <= 600) e.props.onLoadMore()
        }, 300)
        e.handleEEScrollToTop = function () {
          var t, n, r
          var a =
            (null === (t = e.containerEl) || void 0 === t
              ? void 0
              : t.getBoundingClientRect().top) || 0
          var o = e.props.toTopOffset || -16
          var i = a + Object(_['c'])() + o
          window.scrollTo(0, i)
          null === (n = (r = e.props).onScrollToTop) || void 0 === n
            ? void 0
            : n.call(r, i)
        }
        return e
      }
      u()(n, [
        {
          key: 'componentDidMount',
          value: function e() {
            window.addEventListener('scroll', this.handleScroll)
            h['a'].on.scrollToTop(this.handleEEScrollToTop)
          },
        },
        {
          key: 'componentWillUnmount',
          value: function e() {
            window.removeEventListener('scroll', this.handleScroll)
            h['a'].off.scrollToTop(this.handleEEScrollToTop)
          },
        },
        {
          key: 'render',
          value: function e() {
            var t = this
            var n = this.props,
              r = n.children,
              a = n.loading
            return b.a.createElement(
              'div',
              {
                ref: function e(n) {
                  return (t.containerEl = n)
                },
              },
              r,
              a && b.a.createElement(E, null)
            )
          },
        },
      ])
      return n
    })(b.a.Component)
    var x = (t['a'] = j)
  },
  fb622297466e7a637f99: function (e, t, n) {
    'use strict'
    n.d(t, 'f', function () {
      return k
    })
    n.d(t, 'g', function () {
      return A
    })
    n.d(t, 'e', function () {
      return j
    })
    n.d(t, 'h', function () {
      return x
    })
    n.d(t, 'p', function () {
      return O
    })
    n.d(t, 'r', function () {
      return C
    })
    n.d(t, 'q', function () {
      return I
    })
    n.d(t, 'c', function () {
      return T
    })
    n.d(t, 'j', function () {
      return N
    })
    n.d(t, 'm', function () {
      return U
    })
    n.d(t, 'k', function () {
      return D
    })
    n.d(t, 'n', function () {
      return R
    })
    n.d(t, 'l', function () {
      return L
    })
    n.d(t, 'i', function () {
      return P
    })
    n.d(t, 'd', function () {
      return M
    })
    n.d(t, 'o', function () {
      return F
    })
    n.d(t, 'a', function () {
      return V
    })
    n.d(t, 'b', function () {
      return K
    })
    var r = n('020ba8dae3d3021d9966')
    var a = n.n(r)
    var o = n('2b4fba5b8716cb99e98e')
    var i = n.n(o)
    var c = n('bd61c3e57dc18e488613')
    var u = n.n(c)
    var l = n('8f4085b35f259db3270e')
    var s = n.n(l)
    var f = n('92285e035e86b5e44a25')
    var d = n.n(f)
    var v = n('babc388b3bd2ae4e69b5')
    var m = n.n(v)
    var p = n('2e2e432f825443caa710')
    var b = n.n(p)
    var h = n('6cf195ddfada1b0033e1')
    var g = n('ed0e645fb10944a4fb8f')
    var _
    function y(e, t) {
      var n = m()(e)
      if (d.a) {
        var r = d()(e)
        if (t)
          r = r.filter(function (t) {
            return s()(e, t).enumerable
          })
        n.push.apply(n, r)
      }
      return n
    }
    function w(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        if (t % 2)
          y(Object(n), true).forEach(function (t) {
            b()(e, t, n[t])
          })
        else if (u.a) i()(e, u()(n))
        else
          y(Object(n)).forEach(function (t) {
            a()(e, t, s()(n, t))
          })
      }
      return e
    }
    var E =
      ((_ = {}),
      b()(_, g['a'].ARTICLE, 'tuwen'),
      b()(_, g['a'].VIDEO, 'video'),
      b()(_, g['a'].WTT, 'weitoutiao'),
      _)
    function k(e) {
      var t = ''
      if (!e) t = 'no_picture'
      else if (e > 3) t = '4_picture'
      else t = '1_picture'
      return t
    }
    function A(e) {
      return (
        e.__log_impr_type ||
        (0 === e.__channel_id ? '__pc_feed__' : '__pc_channel')
      )
    }
    function j(e) {
      return (
        e.__log_enter_from ||
        (0 === e.__channel_id ? 'click_headline' : 'click_category')
      )
    }
    function x(e) {
      Object(h['a'])(
        'go_detail',
        w(
          w({}, e),
          {},
          {
            log_pb: w({}, e),
          }
        )
      )
    }
    function O(e, t, n) {
      var r, a
      var o =
        (null === (r = t.__cover_urls) || void 0 === r ? void 0 : r.length) || 0
      var i = w(
        w(
          w({}, t.log_pb),
          {},
          {
            impr_type: A(t),
            group_id: t.group_id,
            group_source: t.group_source,
            group_type: k(o),
            group_format: E[t.__type],
            category_name:
              null === (a = t.__channel_info) || void 0 === a
                ? void 0
                : a.category,
            enter_from: j(t),
          },
          n
        ),
        {},
        {
          url: window.location.href,
        }
      )
      Object(h['a'])(
        'stay_page',
        w(
          w({}, i),
          {},
          {
            stay_time: e,
            log_pb: i,
          }
        )
      )
    }
    function C(e, t) {
      var n
      var r = w(
        w({}, e.log_pb),
        {},
        {
          impr_type: A(e),
          group_id: e.group_id,
          group_source: e.group_source,
          category_name:
            null === (n = e.__channel_info) || void 0 === n
              ? void 0
              : n.category,
        },
        t
      )
      Object(h['a'])(
        'video_play',
        w(
          w({}, r),
          {},
          {
            page_type: 'toutiao_feed',
            log_pb: r,
          }
        )
      )
    }
    function I(e, t) {
      var n
      var r = w(
        w({}, e.log_pb),
        {},
        {
          impr_type: A(e),
          group_id: e.group_id,
          group_source: e.group_source,
          category_name:
            null === (n = e.__channel_info) || void 0 === n
              ? void 0
              : n.category,
        },
        t
      )
      Object(h['a'])(
        'video_over',
        w(
          w({}, r),
          {},
          {
            page_type: 'toutiao_feed',
          }
        )
      )
    }
    function S(e) {
      var t, n
      var r =
        (null === (t = e.__cover_urls) || void 0 === t ? void 0 : t.length) || 0
      Object(h['a'])(
        'client_show',
        w(
          w({}, e.log_pb),
          {},
          {
            impr_type: A(e),
            enter_from: j(e),
            category_name:
              null === (n = e.__channel_info) || void 0 === n
                ? void 0
                : n.category,
            group_id: e.group_id,
            group_source: e.group_source,
            group_type: k(r),
            group_format: E[e.__type],
            cell_type: e.cell_type,
          }
        )
      )
    }
    var T = (function () {
      var e = []
      var t = null
      function n() {
        while (e.length) S(e.shift())
      }
      function r() {
        clearTimeout(t)
        t = setInterval(function () {
          n()
        }, 6e4)
      }
      if ('undefined' !== typeof window) {
        r()
        window.addEventListener('visibilitychange', function () {
          if ('visible' === document.visibilityState) r()
          else {
            clearTimeout(t)
            n()
          }
        })
        window.addEventListener('beforeunload', function () {
          clearTimeout(t)
          n()
        })
      }
      return function (t) {
        e = e.concat(t)
      }
    })()
    function N(e, t) {
      var n
      Object(h['a'])('follow_user', {
        enter_from: j(e),
        category_name:
          null === (n = e.__channel_info) || void 0 === n ? void 0 : n.category,
        position: 'list',
        to_user_id: null === t || void 0 === t ? void 0 : t.userId,
        user_id: e.__user_info.userSecToken,
        author_id: e.__user_info.userSecToken,
        follow_type: 'from_group',
        group_id: e.group_id,
        article_type: 'weitoutiao',
      })
    }
    function U(e, t) {
      var n
      Object(h['a'])('unfollow_user', {
        enter_from: j(e),
        category_name:
          null === (n = e.__channel_info) || void 0 === n ? void 0 : n.category,
        position: 'list',
        to_user_id: null === t || void 0 === t ? void 0 : t.userId,
        user_id: e.__user_info.userSecToken,
        author_id: e.__user_info.userSecToken,
        follow_type: 'from_group',
        group_id: e.group_id,
        article_type: 'weitoutiao',
      })
    }
    function D(e, t) {
      var n, r
      Object(h['a'])('rt_like', {
        enter_from: j(e),
        category_name:
          null === (n = e.__channel_info) || void 0 === n ? void 0 : n.category,
        position: 'list',
        to_user_id: null === t || void 0 === t ? void 0 : t.userId,
        user_id: e.__user_info.userSecToken,
        group_id: e.group_id,
        article_type: 'weitoutiao',
        is_following:
          (null === (r = e.user) || void 0 === r ? void 0 : r.is_following) ||
          '0',
      })
    }
    function R(e, t) {
      var n, r
      Object(h['a'])('rt_unlike', {
        enter_from: j(e),
        category_name:
          null === (n = e.__channel_info) || void 0 === n ? void 0 : n.category,
        position: 'list',
        to_user_id: null === t || void 0 === t ? void 0 : t.userId,
        user_id: e.__user_info.userSecToken,
        group_id: e.group_id,
        article_type: 'weitoutiao',
        is_following:
          (null === (r = e.user) || void 0 === r ? void 0 : r.is_following) ||
          '0',
      })
    }
    function L(e, t) {
      var n, r
      Object(h['a'])('rt_share_to_platform', {
        enter_from: j(e),
        category_name:
          null === (n = e.__channel_info) || void 0 === n ? void 0 : n.category,
        position: 'list',
        to_user_id: null === t || void 0 === t ? void 0 : t.userId,
        user_id: e.__user_info.userSecToken,
        group_id: e.group_id,
        article_type: 'weitoutiao',
        is_following:
          (null === (r = e.user) || void 0 === r ? void 0 : r.is_following) ||
          '0',
      })
    }
    function P(e, t) {
      var n
      Object(h['a'])(
        'rt_dislike',
        w(
          {
            enter_from: j(e),
            category_name:
              null === (n = e.__channel_info) || void 0 === n
                ? void 0
                : n.category,
            position: 'list',
            group_id: e.group_id,
          },
          t
        )
      )
    }
    function M(e) {
      Object(h['a'])('enter_category', w({}, e))
    }
    function F(e) {
      Object(h['a'])('stay_category', w({}, e))
    }
    function V(e) {
      Object(h['a'])('category_refresh', w({}, e))
    }
    function K(e) {
      Object(h['a'])('click_feed_gid', w({}, e))
    }
  },
  fc7745683e502800d3b7: function (e, t, n) {},
})
//# sourceMappingURL=index.2a98051d.js.map
