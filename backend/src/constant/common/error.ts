const errorResponse = {
    // Authentication & Authorization Errors
    USER_ALREADY_EXIST: "User already exists",
    USER_NOT_FOUND: "User not found",
    INVALID_CREDENTIALS: "Invalid credentials",
    UNAUTHORIZED_ACCESS: "Unauthorized access",
    FORBIDDEN_ACCESS: "Forbidden access",

    // Validation Errors
    BAD_REQUEST: "Bad request",
    INVALID_INPUT: "Invalid input provided",
    MISSING_REQUIRED_FIELDS: "Missing required fields",
    UNPROCESSABLE_ENTITY: "Unprocessable entity",

    // Resource Errors
    RESOURCE_NOT_FOUND: "Requested resource not found",
    DUPLICATE_RESOURCE: "Duplicate resource detected",
    CONFLICT_ERROR: "Conflict with existing data",
    OPERATION_NOT_ALLOWED: "Operation not allowed",

    // Server Errors
    INTERNAL_SERVER_ERROR: "Internal server error",
    SERVICE_UNAVAILABLE: "Service unavailable",
    BAD_GATEWAY: "Bad gateway",
    GATEWAY_TIMEOUT: "Gateway timeout",

    // Rate Limiting & Throttling
    TOO_MANY_REQUESTS: "Too many requests, please try again later",

    // File & Upload Errors
    FILE_TOO_LARGE: "File size exceeds the allowed limit",
    UNSUPPORTED_FILE_TYPE: "Unsupported file type"
};

export default errorResponse;
