defmodule GeneratorFfstack.Router do
  use GeneratorFfstack.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", GeneratorFfstack do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index

    #scope "/api", Api, as: :api do
    #  pipe_through :api

    #  resources "/things", ThingController
    #end
  end

  scope "/api", as: :api do
    pipe_through :api

    resources "/things", GeneratorFfstack.Api.ThingController
  end

  # Other scopes may use custom stacks.
  # scope "/api", GeneratorFfstack do
  #   pipe_through :api
  # end
end
