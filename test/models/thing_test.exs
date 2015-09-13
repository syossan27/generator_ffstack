defmodule GeneratorFfstack.ThingTest do
  use GeneratorFfstack.ModelCase

  alias GeneratorFfstack.Thing

  @valid_attrs %{id: 42, info: "some content", name: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Thing.changeset(%Thing{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Thing.changeset(%Thing{}, @invalid_attrs)
    refute changeset.valid?
  end
end
