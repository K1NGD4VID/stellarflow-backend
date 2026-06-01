import winston from "winston";

import { HttpLogTransport } from "../transport/httpLogTransport";

const transports: winston.transport[] = [new winston.transports.Console()];

if (process.env.LOG_STREAM_ENABLED === "true") {
  transports.push(
    new HttpLogTransport({
      level: "info",
    }),
  );
}

export const logger = winston.createLogger({
  level: "info",

  format: winston.format.combine(
    winston.format.timestamp(),

    winston.format.json(),
  ),

  transports,
});
