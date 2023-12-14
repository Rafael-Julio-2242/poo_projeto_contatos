import { Users } from "@/models/Users";
import { DataSource } from "typeorm";


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "ControleContatos",
    synchronize: true,
    logging: true,
    entities: [Users],
    subscribers: [],
    migrations: [],
});

export {
    AppDataSource,
}
