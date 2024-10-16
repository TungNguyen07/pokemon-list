import { apiService } from "@/service/api";
import { Pokemon } from "@/types/pokemon";

export type GetPokemonListResponse = {
  results: Pokemon[];
  count: number;
  next: string | null;
  previous: string | null;
};

export async function getPokemonList(): Promise<GetPokemonListResponse> {
  return apiService.get<GetPokemonListResponse>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemon?limit=2000`
  );
}
