// Components
var footer = {};

// View-Model
footer.vm = (function() {
    var vm = {}
    vm.init = function() {
    }
    return vm
}())

// Controller
footer.controller = function() {
  footer.vm.init();
}

// View
footer.view = function() {
return m("footer.footer", [
         m(".container", [
           m("p", [
             "FFstack v0.1 | ",
             m("a[href='https://twitter.com/syossan27'][target='_blank']", "@syossan27"),
             " | ",
             m("a[href='https://github.com/syossan27/generator-ffstack/issues?state=open'][target='_blank']", "Issues")
           ])
         ]),
       ]);
};

m.module(document.getElementById("footer"), {controller: footer.controller, view: footer.view});
