defmodule GeneratorFfstack.Repo.Migrations.CreateThing do
  use Ecto.Migration

  def change do
    create table(:things) do
      add :name, :string
      add :info, :string

      timestamps
    end

  end
end
