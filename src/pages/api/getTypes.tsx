import { apiService } from "@/service/api";
import { TypeDetails } from "@/types/type";

export type GetTypesResponse = {
  results: TypeDetails[];
  count: number;
  next: string;
  previous: string;
};

export async function getTypes(): Promise<GetTypesResponse> {
  const response = await apiService.get<GetTypesResponse>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/type`
  );
  return response;
}
