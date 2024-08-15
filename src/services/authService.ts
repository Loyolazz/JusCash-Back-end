import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { LoginDTO } from "../dtos/authDto";
import { UserRepository } from "../repositories/userRepository";

const jwtSecret = process.env.JWT_SECRET;
const userRepository = new UserRepository();

export class AuthService {
    async login(credentials: LoginDTO) {
        const user = await userRepository.findByEmail(credentials.email);
        if (!user || !user.password) {
            throw new Error("Usuário não encontrado");
        }

        const authorized = bcrypt.compare(credentials.password, user.password);
        if (!authorized) {
            throw new Error("Não autorizado");
        }

        const jwt = await new SignJWT({ id: user.id, name: user.name, email: user.email })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("1h")
            .sign(new TextEncoder().encode(jwtSecret));

        return jwt;
    }
}
