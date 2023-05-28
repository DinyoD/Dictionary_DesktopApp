import { DataSourceOptions } from "typeorm";

const dbOptions: DataSourceOptions = {
  type: "sqlite",
  synchronize: true,
  database: "database.sqlite",
  entities: ["./src/entity/*.js"],
};

export default dbOptions;
