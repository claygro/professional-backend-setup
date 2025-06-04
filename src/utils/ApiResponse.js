class ApiResponse {
  constructor(statusCode, data, message = "Success in ApiResponse.js") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode;
    // status code must be lessthan 400
  }
}
