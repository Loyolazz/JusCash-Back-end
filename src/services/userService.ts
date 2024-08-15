import { User } from "../entities/userEntity";
import { UserRepository } from "../repositories/userRepository";
import { CreateUserDTO } from "../dtos/userDto";

export class UserService {
    private userRepository = new UserRepository();

    async createUser(userData: CreateUserDTO): Promise<void> {
        try {
            await this.userRepository.create(userData);
        } catch (error) {
            throw new Error(String(error));
        }
    }

    async getUserById(id: number): Promise<User> {
        try {
            const user = await this.userRepository.findById(id);

            if (!user) {
                throw new Error("Usuário não encontrado");
            }

            return user;
        } catch (error) {
            throw new Error(String(error));
        }
    }
}
