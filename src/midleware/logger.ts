import winston from "winston";

// Create the logger
const logger = winston.createLogger({
  level: "info", // Log levels: error, warn, info, http, verbose, debug, silly
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    // Log to console
    new winston.transports.Console(),
    // Log to a file
    new winston.transports.File({ filename: "logs/app.log" }),
  ],
});

export default logger;
