import { TypeDetails } from "@/types/type";

export interface TypeItemProps {
    type: TypeDetails;
    isActive: boolean;
    onClick: (type: TypeDetails) => void;
}