exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
//      joinTo: 'js/app.js'

      // To use a separate vendor.js bundle, specify two files path
      // https://github.com/brunch/brunch/blob/stable/docs/config.md#files
      joinTo: {
          'js/app.js': /^(web\/static\/js|deps|client\/app)/,
          'js/vendor.js':  /^bower_components/
      },
      //
      // To change the order of concatenation of files, explictly mention here
      // https://github.com/brunch/brunch/tree/master/docs#concatenation
       order: {
         before: [
//           'web/static/vendor/js/jquery-2.1.1.js',
//           'web/static/vendor/js/bootstrap.min.js'
         ],
         after: [
          '/bowercomponents/mithril/mithril.min.js'
         ]
       },
    },
    stylesheets: {
        joinTo: {
          'css/app.css': /^(web\/static\/css)/,
          'css/vendor.css':  /^bower_components/
        }
    },
    templates: {
        joinTo: 'js/app.js'
    }
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, we set this to '/web/static/assets'. Files in this directory
    // will be copied to `paths.public`, which is "priv/static" by default.
    assets: /^(web\/static\/assets)/
  },

  // Phoenix paths configuration
  paths: {
    // Dependencies and current project directories to watch
    watched: ["deps/phoenix/web/static",
              "deps/phoenix_html/web/static",
              "web/static", "test/static",
              "client/app/"],

    // Where to compile files to
    public: "priv/static"
  },

  // Configure your plugins
  plugins: {
    babel: {
      // Do not use ES6 compiler in vendor code
      ignore: [/web\/static\/vendor/]
    },

    // brunch-sass
    // https://github.com/brunch/sass-brunch
    sass: {
      options: {
        includePaths: [/web\/static\/css/]
      }
    },

    // brunch-sass
    // https://github.com/brunch/sass-brunch
    less: {
      dumpLineNumbers: 'comments'
    },

    afterBrunch: [
        'mkdir -p priv/static/fonts',
        'cp -f bower_components/bootstrap/dist/fonts/* priv/static/fonts',
    ]
  },

  modules: {
    autoRequire: {
      // app.jsに直接スクリプトを書かない場合は、ここでrequireされるように指定するか、処理を実施する箇所でrequireする必要がある
      'js/app.js': ['web/static/js/app',
                    'client/app/main/main',
                    'client/app/account/signup',
                    'client/app/header',
                    'client/app/footer',
                    'client/app/router']
    }
  },

  npm: {
    enabled: true
  }
};
