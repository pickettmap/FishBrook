import { fishDetails } from "./fishDetails";

export interface fishApi {
    count: number;
    data: fishDetails[];
    error: string;
    returned: number;
}