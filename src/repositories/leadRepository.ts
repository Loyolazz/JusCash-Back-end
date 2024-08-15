import { Repository } from "./Repository";
import { CreateLeadDTO, GetLeadDTO, GetLeadsDTO, UpdateLeadDTO } from "../dtos/leadDto";
import { Lead } from "../entities/leadEntity";

export class LeadRepository extends Repository {
    async create(leadData: CreateLeadDTO): Promise<any> {
        const lead = await this.db.lead.create({
            data: leadData as any,
        });

        return lead;
    }

    async update(leadData: UpdateLeadDTO): Promise<Lead> {
        const lead = await this.db.lead.update({
            where: {
                id: leadData.id,
                userId: leadData.userId,
            },
            data: {
                status: leadData.status,
            },
        });

        return lead;
    }

    async findById(leadData: GetLeadDTO): Promise<Lead | null> {
        const lead = this.db.lead.findUnique({
            where: {
                id: leadData.id,
                userId: leadData.userId,
            },
        });

        return lead;
    }

    async findAll(data: GetLeadsDTO): Promise<Lead[]> {
        const leads = await this.db.lead.findMany({
            where: {
                userId: data.userId,
            },
        });

        return leads;
    }
}
