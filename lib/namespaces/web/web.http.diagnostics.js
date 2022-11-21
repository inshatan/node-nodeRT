/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.web.http.diagnostics
  name: "windows.web.http.diagnostics",
  externalReference: [
    "Windows.Foundation",
    "Windows.Web.Http",
    "Windows.System.Diagnostics",
  ]
};

export const {
  HttpDiagnosticRequestInitiator,
  HttpDiagnosticSourceLocation,
  HttpDiagnosticProviderRequestSentEventArgs,
  HttpDiagnosticProviderResponseReceivedEventArgs,
  HttpDiagnosticProviderRequestResponseTimestamps,
  HttpDiagnosticProviderRequestResponseCompletedEventArgs,
  HttpDiagnosticProvider,
} = load(namespace.name);

reference(namespace.externalReference);
