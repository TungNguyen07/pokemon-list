export interface Ability {
    ability: AbilityDetails;
    is_hidden: boolean;
    slot: number;
}
export interface AbilityDetails {
    name: string;
    url: string;
}