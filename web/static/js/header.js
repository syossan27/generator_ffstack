// Components
var header = {};

var menu = [
  {
    'title': 'Home',
    'link': '/'
  },
  {
    'title': 'Hoge',
    'link': '/hoge'
  }
];

// m.requestでログイン状態を取得
// return Boolean
var isLoggedIn = true;

// View-Model
header.vm = (function() {
    var vm = {}
    vm.init = function() {
//      vm.isActive = function(route) {
//        return route === 
//      };
      vm.logout = function() {
        // noop
      }
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
               m("li", {class: m.route() === '/signup' ? 'active' : '' + isLoggedIn ? 'hidden' : '', href: '/signup'}),
               m("li", {class: m.route() === '/login' ? 'active' : '' + isLoggedIn ? 'hidden' : '', href: '/login'}),
               m("li", {class: isLoggedIn ? '' : 'hidden'}, [
                 // m("p.navbar-text", "Hello {{ getCurrentUser().name }}")," "
               ]),
               m("li", {class: m.route() === '/settings' ? 'active' : ''}, [
                 m("a[href='/settings']", [
                   m("span.glyphicon.glyphicon-cog")
                 ])
               ]),
               m("li", {class: m.route() === '/logout' ? 'active' : ''}, [
                 m("a[href='']", {onclick: header.vm.logout()}, "Logout")
               ])
             ])
           ])
         ]);
};

m.module(document.getElementById("header"), {controller: header.controller, view: header.view});
