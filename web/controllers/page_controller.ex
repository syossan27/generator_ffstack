defmodule GeneratorFfstack.PageController do
  use GeneratorFfstack.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
