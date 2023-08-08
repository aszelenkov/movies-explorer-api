class ConflictingRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ConflictingRequestError';
    this.statusCode = 409;
  }
}

module.exports = ConflictingRequestError;
