// Components
var header = {};

var menu = [
  {
    'title': 'Home',
    'link': '/'
  },
];

// View-Model
header.vm = (function() {
    var vm = {}
    vm.init = function() {
      vm.signup = function() {
        // noop
      }

      vm.login = function() {
        // noop
      }

      vm.logout = function() {
        // noop
      }

      // m.requestでログイン状態を取得
      // return Boolean
      vm.isLoggedIn = m.prop(false);
    }
    return vm
}())

// Controller
header.controller = function() {
  header.vm.init();
}

// View
header.view = function() {
  return m(".navbar.navbar-default.navbar-static-top", [
           m(".container", [
             m(".navbar-header", [
               m("button.navbar-toggle[type='button'][data-toggle='collapse'][data-target='#demo']", [
                 m("span.sr-only", "Toggle navigation"),
                 m("span.icon-bar"),
                 m("span.icon-bar"),
                 m("span.icon-bar")
               ]),
               m("a.navbar-brand[href='/']", "sample")
             ]),
             m(".navbar-collapse.collapse[collapse='isCollapsed'][id='navbar-main'][id='demo']", [
               m("ul.nav.navbar-nav", [
                 menu.map(function(menu, index) {
                   return m("li", {class: m.route() === menu.link ? 'active' : ''}, [
                            m("a", {href: menu.link}, menu.title)
                          ])
                 }),
                 m("li", {class: m.route() === '/admin' ? 'active' : '', href: '/admin'})
               ]),
               m("ul.nav.navbar-nav.navbar-right", [
                 m("li", {class: (m.route() === '/signup' ? 'active' : '') + (header.vm.isLoggedIn() ? 'hidden' : ''), href: '/signup'}, [
                   m("a[href='']", {onclick: header.vm.signup()}, "Sign up")
                 ]),
                 m("li", {class: (m.route() === '/login' ? 'active' : '') + (header.vm.isLoggedIn() ? 'hidden' : ''), href: '/login'}, [
                   m("a[href='']", {onclick: header.vm.login()}, "Login")
                 ]),
                 m("li", {class: header.vm.isLoggedIn() ? '' : 'hidden'}, [
                   // m("p.navbar-text", "Hello {{ getCurrentUser().name }}")," "
                 ]),
                 m("li", {class: (m.route() === '/settings' ? 'active' : '') + (header.vm.isLoggedIn() ? '' : 'hidden')}, [
                   m("a[href='/settings']", [
                     m("span.glyphicon.glyphicon-cog")
                   ])
                 ]),
                 m("li", {class: (m.route() === '/logout' ? 'active' : '') + (header.vm.isLoggedIn() ? '' : 'hidden')}, [
                   m("a[href='']", {onclick: header.vm.logout()}, "Logout")
                 ])
               ])
             ])
           ])
         ]);
};

m.module(document.getElementById("header"), {controller: header.controller, view: header.view});
