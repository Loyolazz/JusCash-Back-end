import { $Enums } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";

export interface CreateLeadDTO {
    name: string;
    email: string;
    phone: string;
    status: $Enums.Status;
    opportunities: JsonValue;
    userId: number;
}

export interface UpdateLeadDTO {
    id: number;
    status: $Enums.Status;
    userId: number;
}

export interface GetLeadDTO {
    id: number;
    userId: number;
}

export interface GetLeadsDTO {
    userId: number;
}
