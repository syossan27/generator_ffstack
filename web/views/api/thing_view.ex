defmodule GeneratorFfstack.Api.ThingView do
  use GeneratorFfstack.Web, :view

  def render("index.json", %{things: things}) do
    %{data: render_many(things, GeneratorFfstack.Api.ThingView, "thing.json")}
  end

  def render("show.json", %{thing: thing}) do
    %{data: render_one(thing, GeneratorFfstack.Api.ThingView, "thing.json")}
  end

  def render("thing.json", %{thing: thing}) do
    %{id: thing.id,
      name: thing.name,
      info: thing.info}
  end
end
