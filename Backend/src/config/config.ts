import dotenv from "dotenv";
import type { IConfig } from "../types/config.types.ts";
dotenv.config();

// interface IConfig {
//   PORT: string | undefined;
//   MONGO_URI: string | undefined;
//   JWT_SECRET: string | undefined;
// }

const config: IConfig = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};

export default config;