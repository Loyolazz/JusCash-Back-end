import { PrismaClient } from "@prisma/client";
import { prisma } from "../database/index";

export class Repository {
    protected db: PrismaClient;

    constructor() {
        this.db = prisma;
    }
}
