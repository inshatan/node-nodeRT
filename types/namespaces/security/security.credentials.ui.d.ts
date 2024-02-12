  export enum AuthenticationProtocol {
    basic,
    digest,
    ntlm,
    kerberos,
    negotiate,
    credSsp,
    custom,
  }

  export enum CredentialSaveOption {
    unselected,
    selected,
    hidden,
  }

  export enum UserConsentVerificationResult {
    verified,
    deviceNotPresent,
    notConfiguredForUser,
    disabledByPolicy,
    deviceBusy,
    retriesExhausted,
    canceled,
  }

  export enum UserConsentVerifierAvailability {
    available,
    deviceNotPresent,
    notConfiguredForUser,
    disabledByPolicy,
    deviceBusy,
  }

  export class CredentialPicker {
    constructor();

    static pickAsync(options: CredentialPickerOptions, callback: (error: Error, result: CredentialPickerResults) => void): void ;
    static pickAsync(targetName: String, message: String, callback: (error: Error, result: CredentialPickerResults) => void): void ;
    static pickAsync(targetName: String, message: String, caption: String, callback: (error: Error, result: CredentialPickerResults) => void): void ;


  }

  export class CredentialPickerOptions {
    targetName: String;
    previousCredential: Object;
    message: String;
    errorCode: Number;
    customAuthenticationProtocol: String;
    credentialSaveOption: CredentialSaveOption;
    caption: String;
    callerSavesCredential: Boolean;
    authenticationProtocol: AuthenticationProtocol;
    alwaysDisplayDialog: Boolean;
    constructor();

  }

  export class CredentialPickerResults {
    credential: Object;
    credentialDomainName: String;
    credentialPassword: String;
    credentialSaveOption: CredentialSaveOption;
    credentialSaved: Boolean;
    credentialUserName: String;
    errorCode: Number;
    constructor();

  }

  export class UserConsentVerifier {
    constructor();

    static checkAvailabilityAsync(callback: (error: Error, result: UserConsentVerifierAvailability) => void): void ;


    static requestVerificationAsync(message: String, callback: (error: Error, result: UserConsentVerificationResult) => void): void ;


  }

