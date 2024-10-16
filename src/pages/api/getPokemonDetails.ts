import { apiService } from "@/service/api";
import { PokemonDetails } from "@/types/pokemon";

export type GetPokemonDetailsResponse = PokemonDetails;

export async function getPokemonDetails(id: string): Promise<GetPokemonDetailsResponse> {
    const response = await apiService.get<GetPokemonDetailsResponse>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/type/${id}`
    );
    return response;
}
