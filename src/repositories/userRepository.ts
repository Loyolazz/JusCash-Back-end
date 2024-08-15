import bcrypt from "bcrypt";
import { CreateUserDTO } from "../dtos/userDto";
import { Repository } from "./Repository";
import { User } from "../entities/userEntity";

export class UserRepository extends Repository {
    async create(userData: CreateUserDTO): Promise<void> {
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        await this.db.user.create({
            data: {
                ...userData,
                password: hashedPassword,
            },
        });
    }

    async findById(id: number): Promise<User | null> {
        return await this.db.user.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });
    }

    async findByEmail(email: string): Promise<User | null> {
        return await this.db.user.findUnique({
            where: {
                email: email,
            },
        });
    }
}
