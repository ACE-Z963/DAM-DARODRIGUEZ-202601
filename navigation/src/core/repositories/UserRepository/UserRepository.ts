import { User } from "../../entities";
import { db } from "../../config";

const UserRepository = {

        create: (user:User): number | undefined => {
            const query = `INSERT INTO users (nombre, username, correo, fechaNacimiento, contrasena) 
            VALUES (?, ?, ?, ?, ?);`;

            const result = db.execute(query, [
                user.nombre, 
                user.username, 
                user.correo, 
                user.fechaNacimiento,
                user.contrasena
            ]);
            return result.insertId;
        },
        findByUsername: (username: string): User | null => {
            const query = `SELECT * FROM  users WHERE username = ? LIMIT 1;`;
            const { rows } = db.execute(query, [username]);
            
            if  (rows != undefined) {
                return rows._array.length > 0 ? rows._array[0] : null;
            } 
            return null;
        },
        update: (id:number, user: User): void => {
        
        },

        delete: (userId: number): void => {
            const query = `DELETE FROM users WHERE id = ?;`;
            db.execute(query, [userId]);
        }

    };

export default UserRepository;