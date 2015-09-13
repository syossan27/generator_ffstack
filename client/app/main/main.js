// Components
var main = {};

main.Thing = function(thing) {
  if (thing.id === undefined) {
    this.id = m.prop(main.awesomeThings.length + 1)
  } else {
    this.id = m.prop(thing.id)
  }
  this.name = m.prop(thing.name)
  this.info = m.prop(thing.info)
};

// View-Model
main.vm = (function() {
  var vm = {}
  vm.init = function() {

    vm.setThing = function() {
      // m.requestで取得
      main.awesomeThings = []
      var getThings = m.prop([])
      var setThings = function() {
        var things = getThings()['data']
        things.map(function(thing, index){
          var newThing = new main.Thing({id: thing.id, name: thing.name, info: thing.info})
          main.awesomeThings.push(newThing)
        })
      }
      m.request({method: 'GET', url: '/api/things'}).then(getThings).then(setThings)
    }

    vm.setThing()
    vm.id   = m.prop("")
    vm.name = m.prop("")
    vm.info = m.prop("")

    vm.addThing = function() {
      var newThing = new main.Thing({name: vm.name(), info: vm.info()})
      // m.requestを使ってphoenixでDBに値を入れる
      m.request({
        method: 'POST',
        url: '/api/things',
        data: {
          thing: {
            name: newThing.name(),
            info: newThing.info()
          }
        }
      })
      vm.setThing()
    }

    vm.deleteThing = function(id) {
      // m.requestを使ってphoenixでDBの値を削除する
      for (var i in main.awesomeThings) {
        var thing = main.awesomeThings[i]
        if (thing.id() == id) {
          main.awesomeThings.splice(i, 1)
          m.request({method: 'DELETE', url: '/api/things/'+id})
        }
      }
    }

    vm.noop = function() {
      // noop
    }
  }

  return vm
}())

// Controller
main.controller = function() {
    main.vm.init()
}

//here's the view
main.view = function() {
  return [
           m("header.hero-unit[id='banner']", [
             m(".container", [
               m("h1", "'Allo, 'Allo!"),
               m("p.lead", "Kick-start your next web app with Angular Fullstack"),
               m("img[alt='I\'m Yeoman'][src='images/yeoman.png']")
             ])
           ]),
           m(".container", [
             m(".row", [
               m(".col-lg-12", [
                 m("h1.page-header", "Features:"),
                 main.awesomeThings.map(function(thing, index) {
                   return m("ul.nav.nav-tabs.nav-stacked.col-md-4.col-lg-4.col-sm-6", [
                            m("li", [
                              m("a", {tooltip: thing.info(), onclick: main.vm.noop}, [
                                thing.name(),
                                m("button.close[type='button']", {value: thing.id(), onclick: m.withAttr("value", main.vm.deleteThing)} ,"×")
                              ])
                            ])
                          ]);
                 })
               ])
             ]),

             m("form.thing-form", [
               m("label", "Syncs in realtime across clients"),
               m("p.input-group", [
                 m("input#thing-name.form-control[placeholder='Add a new thing here.'][type='text']", {onchange: m.withAttr("value", main.vm.name)}),
                 m("input#thing-info.form-control[placeholder='Add a new thing info.'][type='text']", {onchange: m.withAttr("value", main.vm.info)}),
                 m("span.input-group-btn", [
                   m("button.btn.btn-primary[type='button']", {onclick: main.vm.addThing}, "Add New")
                 ])
               ])
             ]),
           ])
         ];
};

module.exports = main
