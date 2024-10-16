import PokemonList from "@/components/PokemonList";
import TypeItem from "@/components/TypeItem";
import { Pokemon, PokemonByType } from "@/types/pokemon";
import { TypeDetails } from "@/types/type";
import { useEffect, useState } from "react";
import { getPokemonListByType } from "./api/getPokemonByType";
import { getPokemonList } from "./api/getPokemonList";
import { getTypes } from "./api/getTypes";

export async function getServerSideProps() {
  const typesResponse = await getTypes();
  const pokemonList = await getPokemonList();

  return {
    props: {
      types: typesResponse.results,
      pokemonList: pokemonList.results,
    },
  };
}

export type HomeProps = {
  types: TypeDetails[];
  pokemonList: Pokemon[];
};

export default function Home({ types, pokemonList }: HomeProps) {
  const [pokemonByType, setPokemonByType] = useState<PokemonByType>({});
  const [selectTypes, setSelectTypes] = useState<string[]>([]);

  const onSelectType = (type: TypeDetails) => {
    if (selectTypes.includes(type.name)) {
      setSelectTypes((prev) => prev.filter((name) => name !== type.name));
    } else {
      setSelectTypes((prev) => [...prev, type.name]);
    }
  };

  useEffect(() => {
    Promise.all(types.map((type) => getPokemonListByType(type.name))).then(
      (res) => {
        res.forEach((response) => {
          setPokemonByType((prev) => ({
            ...prev,
            [response.name]: response.pokemon,
          }));
        });
      }
    );
  }, [types]);

  return (
    <div>
      <div className="flex gap-2 items-center">
        <span>Types:</span>
        <ul className="flex flex-wrap gap-4">
          {types.map((type) => (
            <TypeItem
              key={type.name}
              type={type}
              isActive={selectTypes.includes(type.name)}
              onClick={onSelectType}
            />
          ))}
        </ul>
      </div>
      <PokemonList
        pokemonByType={pokemonByType}
        pokemonList={pokemonList}
        selectTypes={selectTypes}
      />
    </div>
  );
}
