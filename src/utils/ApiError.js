class ApiError extends Error {
  constructor(
    statusCode,
    message = "somethis is error in ApiError.js file",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
  }
}
export { ApiError };
