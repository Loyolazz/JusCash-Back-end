import { $Enums } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";

export interface Lead {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: $Enums.Status;
    opportunities: JsonValue;
    userId: number;
}
