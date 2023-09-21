export class ResponseModel<T> {
    declare data: T;
}

export class ErrorResponseModel {
    declare timestamp: string;
    declare message: string;
    declare details: string;
}
