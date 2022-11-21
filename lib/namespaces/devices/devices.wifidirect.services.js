/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.wifidirect.services
  name: "windows.devices.wifidirect.services",
  externalReference: [
    "Windows.Foundation",
    "Windows.Networking.Sockets",
    "Windows.Networking",
    "Windows.Storage.Streams",
    "Windows.Devices.Enumeration",
  ]
};

export const {
  WiFiDirectServiceConfigurationMethod,
  WiFiDirectServiceStatus,
  WiFiDirectServiceSessionStatus,
  WiFiDirectServiceSessionErrorStatus,
  WiFiDirectServiceAdvertisementStatus,
  WiFiDirectServiceError,
  WiFiDirectServiceIPProtocol,
  WiFiDirectServiceProvisioningInfo,
  WiFiDirectServiceSession,
  WiFiDirectServiceAutoAcceptSessionConnectedEventArgs,
  WiFiDirectServiceRemotePortAddedEventArgs,
  WiFiDirectServiceSessionDeferredEventArgs,
  WiFiDirectServiceSessionRequest,
  WiFiDirectServiceSessionRequestedEventArgs,
  WiFiDirectServiceAdvertiser,
  WiFiDirectService,
} = load(namespace.name);

reference(namespace.externalReference);
