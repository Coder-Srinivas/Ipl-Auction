(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    139: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "fetchNews", function () {
          return o;
        });
      var a = n(7),
        r = n.n(a),
        c = n(14),
        s = n(41),
        i =
          Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
          }).BACKEND_URL || "http://localhost:8000/",
        o = (function () {
          var e = Object(c.a)(
            r.a.mark(function e() {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        s.get(i + "news").then(function (e) {
                          return e.data.results;
                        })
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
    },
    143: function (e, t, n) {
      var a = n(144);
      e.exports = {
        validateEmail: function (e) {
          return a.isEmail(e);
        },
        validatePassword: function (e) {
          return a.isStrongPassword(e, { minLength: 4 });
        },
      };
    },
    252: function (e, t, n) {},
    256: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(1),
        r = n(93),
        c = n.n(r),
        s = n(13),
        i = n(3),
        o = n(4),
        u = n(6),
        l = n(7),
        j = n.n(l),
        b = n(14),
        d = n(0),
        m = function (e) {
          var t = e.barState,
            n = e.setBarState;
          return Object(d.jsxs)("div", {
            className: "bars",
            onClick: function () {
              n(function (e) {
                return !e;
              });
            },
            children: [
              Object(d.jsx)("div", {
                className: t ? "bars-main bars-main-top" : "bars-main",
              }),
              Object(d.jsx)("div", {
                className: t ? "bars-main bars-main-center" : "bars-main",
              }),
              Object(d.jsx)("div", {
                className: t ? "bars-main bars-main-bottom" : "bars-main",
              }),
            ],
          });
        },
        O = Object(a.createContext)(null),
        f = function (e) {
          var t = e.size,
            n = void 0 === t ? 5 : t,
            a = { width: n + "rem", height: n + "rem" };
          return Object(d.jsx)("div", {
            className: "loading-component",
            children: Object(d.jsx)("div", {
              style: a,
              className: "loading-component-main",
            }),
          });
        },
        h = n(31).logout,
        p = function () {
          var e = Object(a.useState)(!1),
            t = Object(o.a)(e, 2),
            n = t[0],
            r = t[1],
            c = Object(a.useContext)(O),
            i = c.user,
            l = c.setUser,
            p = c.loading,
            x = Object(u.g)(),
            v = (function () {
              var e = Object(b.a)(
                j.a.mark(function e() {
                  return j.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (i) {
                            e.next = 3;
                            break;
                          }
                          return x.push("/login"), e.abrupt("return");
                        case 3:
                          return (e.next = 5), h();
                        case 5:
                          l(null);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(d.jsxs)("header", {
            className: "nav-container",
            children: [
              Object(d.jsx)("img", {
                className: "nav-container-logo",
                src: "logo.png",
                alt: "Logo",
              }),
              Object(d.jsxs)("nav", {
                className: n
                  ? "nav-container-main activate"
                  : "nav-container-main deactivate",
                children: [
                  Object(d.jsx)(s.b, {
                    to: "/",
                    className: "nav-container-main-content",
                    children: "Home",
                  }),
                  Object(d.jsx)(s.b, {
                    to: "/about",
                    className: "nav-container-main-content",
                    children: "About",
                  }),
                  Object(d.jsx)(s.b, {
                    to: "/rules",
                    className: "nav-container-main-content",
                    children: "Rules",
                  }),
                ],
              }),
              Object(d.jsx)("div", {
                className: n ? "activate" : "deactivate",
                children: p
                  ? Object(d.jsx)(f, { size: "2" })
                  : Object(d.jsx)("button", {
                      className: "button",
                      onClick: function () {
                        return v();
                      },
                      children: i ? "Logout" : "Login",
                    }),
              }),
              Object(d.jsx)("div", {
                className: "bar-container",
                children: Object(d.jsx)(m, { barState: n, setBarState: r }),
              }),
            ],
          });
        },
        x = n(38),
        v = n.n(x),
        g = n(25),
        N = function (e) {
          var t = e.image;
          return Object(d.jsx)("div", {
            style: { backgroundImage: "url(".concat(t, ")") },
            className: "news-image",
          });
        },
        S = function (e) {
          var t = e.title;
          return Object(d.jsx)("div", {
            className: "news-content-title",
            children: t,
          });
        },
        C = function (e) {
          var t = e.description;
          return Object(d.jsx)("div", {
            className: "news-content-desc",
            children: t,
          });
        },
        w = function (e) {
          var t = e.weekDate,
            n = e.date;
          return Object(d.jsxs)("div", {
            className: "news-content-date",
            children: [
              Object(d.jsx)("div", { children: t }),
              Object(d.jsx)("div", { children: n }),
            ],
          });
        },
        E = function (e) {
          var t = e.title,
            n = e.description,
            a = e.weekDate,
            r = e.date;
          return Object(d.jsx)("div", {
            className: "news-container",
            children: Object(d.jsxs)("div", {
              className: "news-content",
              children: [
                Object(d.jsx)(S, { title: t }),
                Object(d.jsx)(C, { description: n }),
                Object(d.jsx)(w, { weekDate: a, date: r }),
              ],
            }),
          });
        },
        y = function (e) {
          var t = e.image,
            n = Object(g.a)(e, ["image"]);
          return Object(d.jsxs)("div", {
            className: "news",
            children: [
              Object(d.jsx)(N, { image: t }),
              Object(d.jsx)(E, Object(i.a)({}, n)),
            ],
          });
        },
        _ = function (e) {
          var t = e.text;
          return Object(d.jsxs)("div", {
            className: "error-component",
            children: [
              Object(d.jsx)("div", {
                className: "error-component-image-container",
                children: Object(d.jsx)("img", {
                  alt: "Indicates an error",
                  class: "error-component-image",
                  src: "Images/error.svg",
                }),
              }),
              Object(d.jsx)("div", {
                className: "error-component-text",
                children: t,
              }),
            ],
          });
        },
        T = (n(60), n(61), n(139).fetchNews),
        k = function () {
          var e = Object(a.useState)(null),
            t = Object(o.a)(e, 2),
            n = t[0],
            r = t[1],
            c = Object(a.useState)(!1),
            s = Object(o.a)(c, 2),
            u = s[0],
            l = s[1];
          if (
            (Object(a.useEffect)(function () {
              T()
                .then(function (e) {
                  r(e);
                })
                .catch(function (e) {
                  r([]), console.log(e.message), l(!0);
                });
            }, []),
            !n)
          )
            return Object(d.jsx)("div", {
              className: "news-loader",
              children: Object(d.jsx)(f, {}),
            });
          if (u)
            return Object(d.jsx)(_, {
              text: "Sorry, unable to fetch the news, please try reloading the page.",
            });
          return Object(d.jsx)(
            v.a,
            Object(i.a)(
              Object(i.a)(
                {},
                {
                  dots: !1,
                  infinite: !0,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: !0,
                  autoplaySpeed: 2e3,
                  pauseOnHover: !0,
                }
              ),
              {},
              {
                children: n.map(function (e, t) {
                  return Object(d.jsx)(y, Object(i.a)({}, e), t);
                }),
              }
            )
          );
        },
        P = function (e) {
          var t = e.title,
            n = e.fadeAnimation;
          return Object(d.jsx)("div", {
            className: "title ".concat("left" === n ? "fadeLeft" : "fadeRight"),
            children: Object(d.jsx)("h1", { children: t }),
          });
        },
        R = function () {
          return Object(d.jsxs)("div", {
            className: "home",
            children: [
              Object(d.jsxs)("div", {
                className: "home-title",
                children: [
                  Object(d.jsx)(P, { title: "Ipl", fadeAnimation: "right" }),
                  Object(d.jsx)(P, { title: "Auction", fadeAnimation: "left" }),
                ],
              }),
              Object(d.jsx)(k, {}),
            ],
          });
        },
        D = n(21),
        A = n(31),
        L = n(32),
        U = function (e) {
          var t = e.type,
            n = e.placeholder,
            a = e.onChange,
            r = e.icon,
            c = e.error,
            s = e.title;
          return Object(d.jsxs)("div", {
            className: "form-container-input-container",
            children: [
              Object(d.jsxs)("label", {
                htmlFor: t,
                className: "form-container-desc",
                children: [s, ":", " "],
              }),
              r
                ? Object(d.jsx)(L.a, {
                    icon: r,
                    className: "form-container-icon",
                  })
                : "",
              Object(d.jsx)("input", {
                id: t,
                className: "form-container-input",
                placeholder: n,
                type: t,
                onChange: function (e) {
                  return a(e.target.value);
                },
              }),
              Object(d.jsx)("p", {
                className: "" === c ? "invisible" : "error",
                children: c,
              }),
            ],
          });
        },
        B = function (e) {
          var t = e.title,
            n = e.data,
            a = e.onFormSubmit,
            r = e.message,
            c = void 0 === r ? function () {} : r,
            s = e.error,
            o = e.loading;
          return Object(d.jsx)("div", {
            className: "form",
            children: Object(d.jsxs)("div", {
              className: "form-container",
              children: [
                Object(d.jsx)("h3", {
                  className: "form-container-title",
                  children: t,
                }),
                Object(d.jsxs)("form", {
                  id: "form",
                  onSubmit: a,
                  noValidate: !0,
                  children: [
                    n.map(function (e, t) {
                      return Object(d.jsx)(U, Object(i.a)({}, e), t);
                    }),
                    o
                      ? Object(d.jsx)(f, { size: "2" })
                      : Object(d.jsxs)("div", {
                          className: "center",
                          children: [
                            " ",
                            Object(d.jsx)("button", {
                              type: "submit",
                              className: "button",
                              children: t,
                            }),
                            " ",
                          ],
                        }),
                  ],
                }),
                Object(d.jsx)("p", {
                  className: "" === s ? "invisible" : "error",
                  children: s,
                }),
                Object(d.jsx)("div", {
                  className: "form-container-additional",
                  children: c(),
                }),
              ],
            }),
          });
        },
        F = n(62),
        K = F.handleEmailChange,
        H = F.handlePasswordChange,
        q = function (e) {
          var t = Object(a.useContext)(O).setUser,
            n = Object(a.useState)(""),
            r = Object(o.a)(n, 2),
            c = r[0],
            u = r[1],
            l = Object(a.useState)(""),
            m = Object(o.a)(l, 2),
            f = m[0],
            h = m[1],
            p = Object(a.useState)(!1),
            x = Object(o.a)(p, 2),
            v = x[0],
            g = x[1],
            N = Object(a.useState)({ email: "", password: "", form: "" }),
            S = Object(o.a)(N, 2),
            C = S[0],
            w = S[1],
            E = [
              {
                type: "email",
                title: "Email",
                placeholder: "Enter your email",
                onChange: function (e) {
                  K(e, u, w);
                },
                icon: D.a,
                error: C.email,
              },
              {
                type: "password",
                title: "Password",
                placeholder: "Enter your Password",
                onChange: function (e) {
                  H(e, h, w);
                },
                icon: D.b,
                error: C.password,
              },
            ],
            y = (function () {
              var n = Object(b.a)(
                j.a.mark(function n(a) {
                  var r;
                  return j.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            (a.preventDefault(),
                            "" === C.email && "" === C.password)
                          ) {
                            n.next = 3;
                            break;
                          }
                          return n.abrupt("return");
                        case 3:
                          return g(!0), (n.next = 6), Object(A.login)(c, f);
                        case 6:
                          if (((r = n.sent), g(!1), r.success)) {
                            n.next = 10;
                            break;
                          }
                          return n.abrupt(
                            "return",
                            w(function (e) {
                              return Object(i.a)(
                                Object(i.a)({}, e),
                                {},
                                { form: r.message }
                              );
                            })
                          );
                        case 10:
                          w(function (e) {
                            return Object(i.a)(
                              Object(i.a)({}, e),
                              {},
                              { form: "" }
                            );
                          }),
                            t(r.user),
                            e.history.push("/auction");
                        case 13:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function (e) {
                return n.apply(this, arguments);
              };
            })();
          return Object(d.jsx)(B, {
            title: "Login",
            data: E,
            onFormSubmit: y,
            message: function () {
              return Object(d.jsxs)("div", {
                className: "form-container-additional",
                children: [
                  Object(d.jsxs)("div", {
                    className: "form-container-desc--2",
                    children: [
                      "New User? ",
                      Object(d.jsx)(s.b, {
                        to: "/signup",
                        children: " Click here",
                      }),
                    ],
                  }),
                  Object(d.jsx)("div", {
                    className: "form-container-desc--2",
                    children: Object(d.jsx)(s.b, {
                      to: "/reset/forgot",
                      children: "Forgot Password?",
                    }),
                  }),
                ],
              });
            },
            error: C.form,
            loading: v,
          });
        },
        W = n(62),
        I = W.handleChange,
        J = W.handleEmailChange,
        V = W.handlePasswordChange,
        z = function (e) {
          var t = Object(a.useContext)(O).setUser,
            n = Object(a.useState)(""),
            r = Object(o.a)(n, 2),
            c = r[0],
            s = r[1],
            u = Object(a.useState)(""),
            l = Object(o.a)(u, 2),
            m = l[0],
            f = l[1],
            h = Object(a.useState)(""),
            p = Object(o.a)(h, 2),
            x = p[0],
            v = p[1],
            g = Object(a.useState)(!1),
            N = Object(o.a)(g, 2),
            S = N[0],
            C = N[1],
            w = Object(a.useState)({ email: "", password: "", form: "" }),
            E = Object(o.a)(w, 2),
            y = E[0],
            _ = E[1],
            T = [
              {
                type: "username",
                title: "Username",
                placeholder: "Enter your username",
                onChange: function (e) {
                  I(e, f);
                },
                icon: D.c,
                error: "",
              },
              {
                type: "email",
                title: "Email",
                placeholder: "Enter your email",
                onChange: function (e) {
                  J(e, s, _);
                },
                icon: D.a,
                error: y.email,
              },
              {
                type: "password",
                title: "Password",
                placeholder: "Enter your Password",
                onChange: function (e) {
                  V(e, v, _);
                },
                icon: D.b,
                error: y.password,
              },
            ],
            k = (function () {
              var n = Object(b.a)(
                j.a.mark(function n(a) {
                  var r;
                  return j.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            (a.preventDefault(),
                            "" === y.email && "" === y.password)
                          ) {
                            n.next = 3;
                            break;
                          }
                          return n.abrupt("return");
                        case 3:
                          return (
                            C(!0), (n.next = 6), Object(A.register)(m, c, x)
                          );
                        case 6:
                          if (((r = n.sent), C(!1), r.success)) {
                            n.next = 10;
                            break;
                          }
                          return n.abrupt(
                            "return",
                            _(function (e) {
                              return Object(i.a)(
                                Object(i.a)({}, e),
                                {},
                                { form: r.message }
                              );
                            })
                          );
                        case 10:
                          _(function (e) {
                            return Object(i.a)(
                              Object(i.a)({}, e),
                              {},
                              { form: "" }
                            );
                          }),
                            t(r.user),
                            e.history.push("/auction");
                        case 13:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function (e) {
                return n.apply(this, arguments);
              };
            })();
          return Object(d.jsx)(B, {
            title: "Sign Up",
            data: T,
            onFormSubmit: k,
            error: y.form,
            loading: S,
          });
        },
        M = function (e) {
          var t = e.socket,
            n = e.user,
            a = e.room,
            r = e.setRoom,
            c = e.errors,
            s = e.loading,
            i = e.setLoading,
            o = [
              {
                type: "room",
                title: "Room Id",
                placeholder: "Enter the auction room id",
                onChange: function (e) {
                  r(e);
                },
                icon: "",
                error: c.room,
              },
            ];
          return Object(d.jsx)("div", {
            children: Object(d.jsx)(B, {
              title: "Join Auction",
              data: o,
              onFormSubmit: function (e) {
                e.preventDefault(),
                  i(!0),
                  t.emit("joinAuction", { username: n.username, room: a }),
                  i(!1);
              },
              message: function () {
                return null;
              },
              error: c.form,
              loading: s,
            }),
          });
        },
        G = n(258),
        Q = function (e) {
          var t = e.socket,
            n = e.user,
            a = e.setCreated,
            r = e.setJoin,
            c = e.setRoom;
          return Object(d.jsx)("div", {
            className: "form",
            children: Object(d.jsxs)("div", {
              className: "form-container",
              children: [
                Object(d.jsx)("button", {
                  onClick: function () {
                    !(function () {
                      var e = Object(G.a)();
                      t.emit("createAuction", {
                        username: n.username,
                        room: e,
                      }),
                        a(!0),
                        c(e);
                    })();
                  },
                  className: "create-auction-button button",
                  children: "Create Auction",
                }),
                Object(d.jsx)("button", {
                  onClick: function () {
                    r(!0);
                  },
                  className: "create-auction-button button",
                  children: "Join Auction",
                }),
              ],
            }),
          });
        },
        X = function (e) {
          var t = e.stats,
            n = e.role;
          return Object(d.jsxs)("div", {
            className: "playerCard-info-stats",
            children: [
              Object(d.jsxs)("div", {
                className: "playerCard-info-stats-title",
                children: [n, ":"],
              }),
              t
                ? t.map(function (e, t) {
                    return Object(d.jsxs)(
                      "div",
                      {
                        className: "playerCard-info-stat-container",
                        children: [
                          Object(d.jsxs)("span", {
                            className: "playerCard-info-stat-label",
                            children: [e.label, ":"],
                          }),
                          Object(d.jsx)("span", {
                            className: "playerCard-info-stat-value",
                            children: e.value,
                          }),
                        ],
                      },
                      t
                    );
                  })
                : "First Timer",
            ],
          });
        },
        Y = function (e) {
          var t = e.image,
            n = e.name,
            a = (e.squad, e.stats);
          return Object(d.jsxs)("div", {
            className: "playerCard",
            children: [
              Object(d.jsxs)("div", {
                className: "playerCard-image",
                children: [
                  Object(d.jsx)("img", { src: t, alt: "player profile" }),
                  Object(d.jsx)("h2", {
                    className: "playerCard-info-name",
                    children: n,
                  }),
                ],
              }),
              Object(d.jsxs)("div", {
                className: "playerCard-info",
                children: [
                  Object(d.jsx)("div", {
                    className: "playerCard-info-role",
                    children: a.role,
                  }),
                  a.batting && a.bowling
                    ? Object(d.jsx)("div", {
                        className: "playerCard-info-slider",
                        children: Object(d.jsxs)(
                          v.a,
                          Object(i.a)(
                            Object(i.a)(
                              {},
                              {
                                dots: !1,
                                infinite: !0,
                                speed: 500,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                autoplay: !0,
                                autoplaySpeed: 2e3,
                                pauseOnHover: !0,
                              }
                            ),
                            {},
                            {
                              children: [
                                Object(d.jsx)(X, {
                                  stats: a.batting,
                                  role: "Batting",
                                }),
                                Object(d.jsx)(X, {
                                  stats: a.bowling,
                                  role: "Bowling",
                                }),
                              ],
                            }
                          )
                        ),
                      })
                    : a.batting
                    ? Object(d.jsx)(X, { stats: a.batting, role: "Batting" })
                    : Object(d.jsx)(X, { stats: a.bowling, role: "Bowling" }),
                ],
              }),
            ],
          });
        },
        Z = function (e) {
          var t = e.users,
            n = e.socket,
            r = e.room,
            c = e.user,
            s = e.me,
            u = Object(a.useState)(10),
            l = Object(o.a)(u, 2),
            j = l[0],
            b = l[1],
            m = Object(a.useState)(""),
            O = Object(o.a)(m, 2),
            f = O[0],
            h = O[1],
            p = Object(a.useState)(0),
            x = Object(o.a)(p, 2),
            v = x[0],
            g = x[1],
            N = Object(a.useState)(0),
            S = Object(o.a)(N, 2),
            C = S[0],
            w = S[1],
            E = Object(a.useState)(""),
            y = Object(o.a)(E, 2),
            _ = y[0],
            T = y[1],
            k = Object(a.useState)(!1),
            P = Object(o.a)(k, 2),
            R = P[0],
            D = P[1];
          Object(a.useEffect)(
            function () {
              n.on("display", function (e) {
                console.log(e), b(e.time);
              }),
                n.on("bid", function (e) {
                  h(e.currentBidder.bidder), g(e.currentBidder.bid);
                }),
                n.on("bid-error", function (e) {
                  w(e.message);
                }),
                n.on("player", function (e) {
                  T(e.player);
                });
            },
            [n]
          ),
            Object(a.useEffect)(
              function () {
                0 === j && (h(""), g(0), D(!0));
              },
              [j]
            );
          return Object(d.jsxs)("div", {
            className: "game",
            children: [
              "Budget:",
              s.budget,
              "Let the game start",
              j,
              f || "",
              0 !== v ? v : "",
              t.map(function (e) {
                var t = e.user;
                return Object(d.jsx)("div", { children: t }, t);
              }),
              _ ? Object(d.jsx)(Y, Object(i.a)({}, _)) : "",
              Object(d.jsx)("button", {
                onClick: function () {
                  n.emit("bid", { room: r, user: c.username });
                },
                className: "button",
                children: "Bid",
              }),
              R
                ? Object(d.jsx)("button", {
                    onClick: function () {
                      n.emit("next", { room: r, user: c.username }), D(!1);
                    },
                    className: "button",
                    children: "Next",
                  })
                : "",
              C
                ? Object(d.jsx)("div", { className: "error", children: C })
                : "",
              s.players.map(function (e, t) {
                return Object(d.jsxs)(
                  "div",
                  { children: [console.log(e), e.player.name, e.amount] },
                  t
                );
              }),
            ],
          });
        },
        $ = function (e) {
          var t = e.socket,
            n = e.userCount,
            a = e.code,
            r = (e.setPlay, e.setErrors),
            c = e.error;
          return Object(d.jsx)(d.Fragment, {
            children: Object(d.jsxs)("div", {
              className: "lobby",
              children: [
                "Share the code ",
                a,
                " with your friends to join the auction. Users Joined: ",
                n,
                Object(d.jsx)("button", {
                  className: "button",
                  onClick: function () {
                    !(function () {
                      if (n < 2)
                        return r(function (e) {
                          return Object(i.a)(
                            Object(i.a)({}, e),
                            {},
                            {
                              lobby:
                                "At least four users should join for the auction to start.",
                            }
                          );
                        });
                      t.emit("requestPlay", { room: a }),
                        t.emit("start", { room: a });
                    })();
                  },
                  children: "Start",
                }),
                c
                  ? Object(d.jsx)("div", { className: "error", children: c })
                  : "",
              ],
            }),
          });
        },
        ee = function () {
          return Object(d.jsx)("div", {
            className: "loading",
            children: Object(d.jsx)(f, {}),
          });
        },
        te = n(95),
        ne = n.n(te),
        ae =
          Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
          }).BACKEND_URL || "http://localhost:8000",
        re = function (e) {
          var t = Object(a.useContext)(O).user,
            n = Object(a.useState)(ne()(ae, { user: "Hello" })),
            r = Object(o.a)(n, 1)[0],
            c = Object(a.useState)(""),
            s = Object(o.a)(c, 2),
            u = s[0],
            l = s[1],
            j = Object(a.useState)(!1),
            b = Object(o.a)(j, 2),
            m = b[0],
            f = b[1],
            h = Object(a.useState)(!1),
            p = Object(o.a)(h, 2),
            x = p[0],
            v = p[1],
            g = Object(a.useState)({ form: "", room: "", lobby: "" }),
            N = Object(o.a)(g, 2),
            S = N[0],
            C = N[1],
            w = Object(a.useState)([]),
            E = Object(o.a)(w, 2),
            y = E[0],
            _ = E[1],
            T = Object(a.useState)(!1),
            k = Object(o.a)(T, 2),
            P = k[0],
            R = k[1],
            D = Object(a.useState)(!1),
            A = Object(o.a)(D, 2),
            L = A[0],
            U = A[1],
            B = Object(a.useState)(""),
            F = Object(o.a)(B, 2),
            K = F[0],
            H = F[1],
            q = Object(a.useState)(!1),
            W = Object(o.a)(q, 2),
            I = W[0],
            J = W[1];
          return (
            Object(a.useEffect)(
              function () {
                r.emit("check-user"),
                  r.on("existing-user", function (e) {
                    J(!1);
                  }),
                  r.on("join-result", function (e) {
                    return e.success
                      ? (console.log(e), l(e.room), R(!0))
                      : C(function (t) {
                          return Object(i.a)(
                            Object(i.a)({}, t),
                            {},
                            { form: e.error }
                          );
                        });
                  }),
                  r.on("start", function () {
                    console.log("Started"), v(!0);
                  });
              },
              [r]
            ),
            Object(a.useEffect)(
              function () {
                r.on("users", function (e) {
                  _(e.users);
                  var n = e.users.find(function (e) {
                    return e.user === t.username;
                  });
                  H(n), console.log(t.username, e.users);
                });
              },
              [t, r]
            ),
            Object(d.jsx)("div", {
              className: "auction",
              children: I
                ? Object(d.jsx)(ee, {})
                : x
                ? Object(d.jsx)(Z, {
                    room: u,
                    socket: r,
                    users: y,
                    user: t,
                    me: K,
                  })
                : P || L
                ? P
                  ? Object(d.jsx)($, {
                      socket: r,
                      userCount: y.length,
                      code: u,
                      setPlay: v,
                      setErrors: C,
                      error: S.lobby,
                    })
                  : Object(d.jsx)(M, {
                      socket: r,
                      user: t,
                      room: u,
                      setRoom: l,
                      errors: S,
                      loading: m,
                      setLoading: f,
                    })
                : Object(d.jsx)(Q, {
                    socket: r,
                    user: t,
                    setCreated: R,
                    setJoin: U,
                    setRoom: l,
                  }),
            })
          );
        },
        ce = n(49),
        se = function () {
          return Object(d.jsxs)("div", {
            className: "about",
            children: [
              Object(d.jsx)("h1", {
                className: "about-head",
                children: "About Us",
              }),
              Object(d.jsxs)("div", {
                className: "about-content",
                children: [
                  Object(d.jsx)("img", {
                    className: "about-content-img",
                    alt: "about-svg",
                    src: "Images/about.jpg",
                  }),
                  Object(d.jsxs)("div", {
                    className: "about-content-txt",
                    children: [
                      Object(d.jsx)("h2", {
                        className: "about-content-txt-1",
                        children: "M. Srinivas(the ultimate dog)",
                      }),
                      Object(d.jsx)("h4", {
                        className: "about-content-txt-2",
                        children: "Competitive Coder | Full Stack Developer",
                      }),
                      Object(d.jsx)("h3", {
                        className: "about-content-txt-3",
                        children: "Find me on",
                      }),
                      Object(d.jsxs)("div", {
                        className: "about-content-social",
                        children: [
                          Object(d.jsx)("a", {
                            href: "https://github.com/coder-srinivas",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "about-content-social-1",
                            children: Object(d.jsx)(L.a, {
                              className: "about-content-social-icon",
                              icon: ce.b,
                            }),
                          }),
                          Object(d.jsx)("a", {
                            href: "https://www.linkedin.com/in/srinivas-m-298764191/",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "about-content-social-2",
                            children: Object(d.jsx)(L.a, {
                              className: "about-content-social-icon",
                              icon: ce.a,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(d.jsxs)("div", {
                className: "about-proj",
                children: [
                  Object(d.jsx)("h1", {
                    className: "about-proj-head",
                    children: "What is the IPL auction?",
                  }),
                  Object(d.jsx)("p", {
                    className: "about-proj-para",
                    children:
                      "in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio h",
                  }),
                ],
              }),
            ],
          });
        },
        ie = n(41),
        oe =
          Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
          }).BACKEND_URL || "http://localhost:8000/",
        ue = function () {
          var e = Object(a.useState)(null),
            t = Object(o.a)(e, 2),
            n = t[0],
            r = t[1],
            c = Object(a.useState)(!0),
            s = Object(o.a)(c, 2),
            i = s[0],
            u = s[1];
          return (
            Object(a.useEffect)(function () {
              ie.get(oe + "user")
                .then(function (e) {
                  e.data.success && (r(e.data.user), u(!1));
                })
                .catch(function (e) {
                  u(!1);
                });
            }, []),
            [n, r, i]
          );
        },
        le = function (e) {
          var t = e.component,
            n = Object(g.a)(e, ["component"]),
            r = Object(a.useContext)(O),
            c = r.user;
          return r.loading
            ? Object(d.jsx)(ee, {})
            : c
            ? Object(d.jsx)(
                u.b,
                Object(i.a)(
                  Object(i.a)({}, n),
                  {},
                  {
                    render: function (e) {
                      return Object(d.jsx)(t, Object(i.a)({}, e));
                    },
                  }
                )
              )
            : Object(d.jsx)(u.a, { to: "/login" });
        },
        je = function (e) {
          var t = e.component,
            n = Object(g.a)(e, ["component"]),
            r = Object(a.useContext)(O),
            c = r.user;
          return r.loading
            ? Object(d.jsx)(ee, {})
            : c
            ? Object(d.jsx)(u.a, { to: "/" })
            : Object(d.jsx)(
                u.b,
                Object(i.a)(
                  Object(i.a)({}, n),
                  {},
                  {
                    render: function (e) {
                      return Object(d.jsx)(t, Object(i.a)({}, e));
                    },
                  }
                )
              );
        };
      var be = function () {
        var e = ue(),
          t = Object(o.a)(e, 3),
          n = t[0],
          a = t[1],
          r = t[2];
        return Object(d.jsx)(O.Provider, {
          value: { user: n, setUser: a, loading: r },
          children: Object(d.jsxs)("div", {
            className: "App",
            children: [
              Object(d.jsx)(p, {}),
              Object(d.jsx)("div", { className: "ball ball1" }),
              Object(d.jsx)("div", { className: "ball ball2" }),
              Object(d.jsx)("div", { className: "ball ball3" }),
              Object(d.jsx)("div", { className: "ball ball4" }),
              Object(d.jsxs)(u.d, {
                children: [
                  Object(d.jsx)(u.b, {
                    exact: !0,
                    path: "/",
                    render: function (e) {
                      return Object(d.jsx)(R, Object(i.a)({}, e));
                    },
                  }),
                  Object(d.jsx)(je, {
                    exact: !0,
                    path: "/login",
                    component: q,
                  }),
                  Object(d.jsx)(je, {
                    exact: !0,
                    path: "/signup",
                    component: z,
                  }),
                  Object(d.jsx)(u.b, {
                    exact: !0,
                    path: "/about",
                    render: function (e) {
                      return Object(d.jsx)(se, Object(i.a)({}, e));
                    },
                  }),
                  Object(d.jsx)(le, {
                    exact: !0,
                    path: "/auction",
                    component: re,
                  }),
                ],
              }),
            ],
          }),
        });
      };
      n(252);
      n(253).config(),
        c.a.render(
          Object(d.jsx)(s.a, { children: Object(d.jsx)(be, {}) }),
          document.getElementById("root")
        );
    },
    31: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "login", function () {
          return o;
        }),
        n.d(t, "register", function () {
          return u;
        }),
        n.d(t, "logout", function () {
          return l;
        });
      var a = n(7),
        r = n.n(a),
        c = n(14),
        s = n(41),
        i =
          Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
          }).BACKEND_URL || "http://localhost:8000/",
        o = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, n) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        s
                          .post(i + "login", { email: t, password: n })
                          .then(function (e) {
                            return e.data;
                          })
                          .catch(function (e) {
                            return e.response.data;
                          })
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        u = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, n, a) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        s
                          .post(i + "signup", {
                            email: n,
                            password: a,
                            username: t,
                          })
                          .then(function (e) {
                            return e.data;
                          })
                          .catch(function (e) {
                            return e.response.data;
                          })
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, a) {
            return e.apply(this, arguments);
          };
        })(),
        l = (function () {
          var e = Object(c.a)(
            r.a.mark(function e() {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        s.get(i + "logout").then(function (e) {
                          return e.data;
                        })
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })();
    },
    41: function (e, t, n) {
      var a = n(102),
        r =
          Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
          }).BACKEND_URL || "http://localhost:8000/",
        c = a.create({ withCredentials: !0, baseURL: r });
      e.exports = c;
    },
    62: function (e, t, n) {
      "use strict";
      n.r(t),
        function (e) {
          var t = n(3),
            a = n(143),
            r = a.validateEmail,
            c = a.validatePassword,
            s = function (e, t) {
              t(e);
            };
          e.exports = {
            handleEmailChange: function (e, n, a) {
              if ((s(e, n), !r(e)))
                return a(function (e) {
                  return Object(t.a)(
                    Object(t.a)({}, e),
                    {},
                    { email: "Please enter a valid email." }
                  );
                });
              a(function (e) {
                return Object(t.a)(Object(t.a)({}, e), {}, { email: "" });
              });
            },
            handlePasswordChange: function (e, n, a) {
              if ((s(e, n), !c(e)))
                return a(function (e) {
                  return Object(t.a)(
                    Object(t.a)({}, e),
                    {},
                    {
                      password:
                        "Password should contain at least 1 special character, 1 uppercase character, 1 lowercase character and 1 number.",
                    }
                  );
                });
              a(function (e) {
                return Object(t.a)(Object(t.a)({}, e), {}, { password: "" });
              });
            },
            handleChange: s,
          };
        }.call(this, n(142)(e));
    },
  },
  [[256, 1, 2]],
]);
//# sourceMappingURL=main.083bab44.chunk.js.map
