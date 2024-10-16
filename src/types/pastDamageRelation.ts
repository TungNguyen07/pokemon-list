import { DamageRelations } from "./damageRelations";
import { Generation } from "./generation";

export interface PastDamageRelation {
    generation: Generation;
    damage_relations: DamageRelations;
}