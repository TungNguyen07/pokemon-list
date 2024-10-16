import { apiService } from "@/service/api";
import { PokemonDetails } from "@/types/pokemon";
import BaseImage from "next/image";
import { useEffect, useState } from "react";
import { ImageProps } from "./Pokemon.types";

const Pokemon = ({ name, src }: ImageProps) => {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    function fetchData() {
      setLoading(true);
      apiService
        .get<PokemonDetails>(src)
        .then((response) =>
          setImgSrc(response.sprites.other["official-artwork"].front_default)
        )
        .finally(() => setLoading(false));
    }
    fetchData();
  }, [src]);

  return (
    <li className="flex justify-center min-h-[150px]">
      {loading ? (
        <div className="animate-pulse" />
      ) : (
        <div className="cursor-pointer group flex-col items-center flex  w-max">
          {imgSrc && (
            <BaseImage
              className="transition-transform duration-300 ease-in-out group-hover:scale-110"
              src={imgSrc}
              alt={name}
              width={100}
              height={100}
            />
          )}
          <p className="transition-transform duration-300 ease-in-out group-hover:scale-110 mt-4 text-lg">
            {name}
          </p>
        </div>
      )}
    </li>
  );
};

export default Pokemon;
