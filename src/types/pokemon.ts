import { Stats } from "fs";
import { Ability, AbilityDetails } from "./ability";
import { Cries } from "./cries";
import { GameIndex } from "./gameIndex";
import { Move } from "./move";
import { Sprites } from "./sprites";
import { Type } from "./type";

export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonType {
    pokemon: Pokemon;
    slot: number;
}

export type PokemonByType = Record<string, PokemonType[]>;

export interface PokemonDetails {
    abilities?: Ability[] | null;
    base_experience: number;
    cries: Cries;
    forms?: AbilityDetails[] | null;
    game_indices?: GameIndex[] | null;
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves?: Move[] | null;
    name: string;
    order: number;
    species: AbilityDetails;
    sprites: Sprites;
    stats?: Stats[] | null;
    types?: Type[] | null;
    weight: number;
}