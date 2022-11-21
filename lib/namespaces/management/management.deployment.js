/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.management.deployment
  name: "windows.management.deployment",
  externalReference: [
    "Windows.ApplicationModel",
    "Windows.Foundation",
  ]
};

export const {
  DeploymentProgressState,
  DeploymentOptions,
  RemovalOptions,
  AddPackageByAppInstallerOptions,
  PackageTypes,
  PackageInstallState,
  PackageState,
  PackageStatus,
  DeploymentResult,
  PackageUserInformation,
  PackageVolume,
  PackageManagerDebugSettings,
  PackageManager,
} = load(namespace.name);

reference(namespace.externalReference);

export * as preview from "./management.deployment.preview.js";