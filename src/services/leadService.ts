import { LeadRepository } from "../repositories/leadRepository";
import { Lead } from "../entities/leadEntity";
import { CreateLeadDTO, GetLeadDTO, GetLeadsDTO, UpdateLeadDTO } from "../dtos/leadDto";

export class LeadService {
    private leadRepository = new LeadRepository();

    async createLead(leadData: CreateLeadDTO): Promise<Lead> {
        try {
            const lead = await this.leadRepository.create(leadData);

            return lead;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    async updateLead(data: UpdateLeadDTO): Promise<Lead> {
        try {
            const lead = await this.leadRepository.update(data);

            return lead;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    async getLeadById(data: GetLeadDTO): Promise<Lead> {
        try {
            const lead = await this.leadRepository.findById(data);

            if (!lead) {
                throw new Error("Lead não encontrado");
            }

            return lead;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    async getAllLeads(data: GetLeadsDTO): Promise<Lead[]> {
        try {
            return await this.leadRepository.findAll(data);
        } catch (error) {
            throw new Error(String(error));
        }
    }
}
