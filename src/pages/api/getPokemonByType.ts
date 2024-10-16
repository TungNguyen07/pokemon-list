import { apiService } from "@/service/api";
import { DamageRelations } from "@/types/damageRelations";
import { GameIndex } from "@/types/gameIndex";
import { Generation } from "@/types/generation";
import { Move } from "@/types/move";
import { MoveDamageClass } from "@/types/moveDamage";
import { Name } from "@/types/name";
import { PastDamageRelation } from "@/types/pastDamageRelation";
import { PokemonType } from "@/types/pokemon";

export type GetPokemonListByTypeResponse = {
    id: number;
    name: string;
    pokemon: PokemonType[];
    generation: Generation;
    damage_relations: DamageRelations;
    move_damage_class: MoveDamageClass;
    past_damage_relations?: (PastDamageRelation)[] | null;
    game_indices?: (GameIndex)[] | null;
    names?: (Name)[] | null;
    moves?: (Move)[] | null;
};

export async function getPokemonListByType(typeId: string): Promise<GetPokemonListByTypeResponse> {
    return apiService.get<GetPokemonListByTypeResponse>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/type/${typeId}`
    );
}
