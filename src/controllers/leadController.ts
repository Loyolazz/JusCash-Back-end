import { Request, Response } from "express";
import { LeadService } from "../services/leadService";
import { CreateLeadDTO, GetLeadsDTO, UpdateLeadDTO } from "../dtos/leadDto";

const leadService = new LeadService();

export const createLead = async (req: Request, res: Response): Promise<void> => {
    try {
        const dto: CreateLeadDTO = req.body;
        const lead = await leadService.createLead(dto);
        res.status(201).send(lead);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar lead" });
    }
};

export const updateLead = async (req: Request, res: Response): Promise<void> => {
    try {
        const dto: UpdateLeadDTO = req.body;
        const lead = await leadService.updateLead(dto);
        res.status(201).send(lead);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar lead" });
    }
};

export const getLead = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const lead = await leadService.getLeadById({ id: Number(id), userId: Number(userId) });
        res.status(201).send(lead);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar o lead" });
    }
};

export const getLeads = async (req: Request, res: Response): Promise<void> => {
    try {
        const dto: GetLeadsDTO = req.body;
        const leads = await leadService.getAllLeads(dto);
        res.status(201).send(leads);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar os leads" });
    }
};
