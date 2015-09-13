# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     GeneratorFfstack.Repo.insert!(%SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias GeneratorFfstack.Thing
alias GeneratorFfstack.Repo

initial_things = [
    [
        {:name, "Development Tools"},
        {:info, "Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less."}
    ],
    [
        {:name, "Server and Client integration"},
        {:info, "Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node."}
    ],
    [
        {:name, "Smart Build System"},
        {:info, "Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html"}
    ],
    [
        {:name, "Modular Structure"},
        {:info, "Best practice client and server structures allow for more code reusability and maximum scalability"}
    ],
    [
        {:name, "Optimized Build"},
        {:info, "Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching."}
    ],
    [
        {:name, "Deployment Ready"},
        {:info, "Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators"}
    ]
]

for thing <- initial_things do
    Repo.insert!(
        %Thing{
            name: thing[:name],
            info: thing[:info]
        }
    )
end
