/**
 * Custom error class for representing invalid input.
 * @class
 */
export class InvalidInput extends Error {
  /**
   * Creates an instance of InvalidInput.
   * @param {string} message The error message.
   */
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}
