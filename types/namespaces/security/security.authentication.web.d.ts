  export enum TokenBindingKeyType {
    rsa2048,
    ecdsaP256,
    anyExisting,
  }

  export enum WebAuthenticationStatus {
    success,
    userCancel,
    errorHttp,
  }

  export enum WebAuthenticationOptions {
    none,
    silentMode,
    useTitle,
    useHttpPost,
    useCorporateNetwork,
  }

  export class WebAuthenticationResult {
    responseData: string;
    responseErrorDetail: number;
    responseStatus: WebAuthenticationStatus;
    constructor();

  }

  export class WebAuthenticationBroker {
    constructor();

    static authenticateSilentlyAsync(requestUri: Object, callback: (error: Error, result: WebAuthenticationResult) => void): void ;
    static authenticateSilentlyAsync(requestUri: Object, options: WebAuthenticationOptions, callback: (error: Error, result: WebAuthenticationResult) => void): void ;


    static authenticateAsync(options: WebAuthenticationOptions, requestUri: Object, callbackUri: Object, callback: (error: Error, result: WebAuthenticationResult) => void): void ;
    static authenticateAsync(options: WebAuthenticationOptions, requestUri: Object, callback: (error: Error, result: WebAuthenticationResult) => void): void ;


    static authenticateAndContinue(requestUri: Object): void;
    static authenticateAndContinue(requestUri: Object, callbackUri: Object): void;
    static authenticateAndContinue(requestUri: Object, callbackUri: Object, continuationData: Object, options: WebAuthenticationOptions): void;


    static getCurrentApplicationCallbackUri(): Object;


  }

export * as core from "./security.authentication.web.core.js";
export * as provider from "./security.authentication.web.provider.js";