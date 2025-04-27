import winston from 'winston';

const auditLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/audit.log' }),
    new winston.transports.Console(),
  ],
});

export interface AuditEvent {
  userId?: string;
  action: string;
  details?: any;
  ip?: string;
}

export function logAuditEvent(event: AuditEvent) {
  auditLogger.info({
    ...event,
    timestamp: new Date().toISOString(),
  });
} 