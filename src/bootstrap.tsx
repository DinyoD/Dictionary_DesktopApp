import { DataSource } from "typeorm";
import { createRoot } from "react-dom/client";

import App from "./App";
import dbOptions from "../db/ormconfig";

export const appDataSource: DataSource = new DataSource(dbOptions);
appDataSource
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  });

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
