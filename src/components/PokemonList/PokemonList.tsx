import { paginate } from "@/utils/paginate";
import { useEffect, useMemo, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import { PokemonListProps } from "./PokemonList.types";

const PokemonList = ({
  pokemonByType,
  pokemonList,
  selectTypes,
}: PokemonListProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [pokemonByType]);

  const { pokemon, totalPage, count } = useMemo(
    () =>
      paginate({
        data: pokemonList,
        page: currentPage,
        pokemonByType,
        selectTypes,
      }),
    [currentPage, pokemonByType, pokemonList, selectTypes]
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-sm font-bold">Count: {count}</p>
      <ul className="grid grid-cols-5 gap-4 my-5 w-full min-h-[600px]">
        {pokemon.map((pokemon) => (
          <Pokemon key={pokemon.url} src={pokemon.url} name={pokemon.name} />
        ))}
      </ul>
      <div className="flex justify-center gap-2 mt-auto mb-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed disabled:opacity-50"
          disabled={currentPage === totalPage}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
