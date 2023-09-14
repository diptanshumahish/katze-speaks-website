export class ResponseModel<T> {
    declare data: T;
  }
  
  export class ErrorResponseModel {
     [x: string]: any;
     declare timestamp: string;
     declare message: string;
     declare details: string;
  }
  