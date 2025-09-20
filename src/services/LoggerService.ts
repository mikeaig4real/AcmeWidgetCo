/**
 * Simple logging service for tracking application events.
 * Prepends a context string and method name to log messages.
 */
export class LoggerService {
  /**
   * Creates a new LoggerService.
   *
   * @param context - Context or class name to include in log messages
   */
  constructor(private readonly context: string) {}

  /**
   * Logs an informational message to the console.
   *
   * @param method - The name of the method or operation generating the log
   * @param message - The log message
   * @param args - Additional optional values to include in the log
   */
  log(method: string, message: string, ...args: unknown[]) {
    console.log(`[${this.context}.${method}] ${message}`, ...args);
  }
}
