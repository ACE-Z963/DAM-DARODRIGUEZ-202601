import { User } from "../../entities";
import AuthRepository from "../../repositories/AuthRepository/AuthRepository";
import UserRepository from "../../repositories/UserRepository/UserRepository";

const AuthService = {
    register: async (user: User): Promise<User> => {
        const userExist = UserRepository.findByUsername(user.username);

        if (userExist) {
            console.error(`Username: ${user.username} ya existe`);
            throw new Error("El usuario ya existe");
        }

        const id = UserRepository.create(user);

        if (id === undefined) {
            console.error(`Usuario con username: ${user.username} no se pudo crear`);
            throw new Error("El usuario no se pudo crear");
        }

        const newUser = { ...user, id };
        await AuthRepository.save(newUser);
        return newUser;
    },

    login: (username: string, contrasena: string): User => {
        const user = UserRepository.findByUsername(username);

        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        if (user.contrasena !== contrasena) {
            throw new Error("Contraseña incorrecta");
        }

        return user;
    }
}

export default AuthService;