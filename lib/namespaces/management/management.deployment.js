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
    "Windows.Foundation",
    "Windows.ApplicationModel",
  ]
};

export const {
  AddPackageByAppInstallerOptions,
  DeploymentOptions,
  DeploymentProgressState,
  PackageInstallState,
  PackageState,
  PackageStatus,
  PackageStubPreference,
  PackageTypes,
  RemovalOptions,
  SharedPackageContainerCreationCollisionOptions,
  SharedPackageContainerOperationStatus,
  StubPackageOption,
  AddPackageOptions,
  AppInstallerManager,
  AutoUpdateSettingsOptions,
  CreateSharedPackageContainerOptions,
  CreateSharedPackageContainerResult,
  DeleteSharedPackageContainerOptions,
  DeleteSharedPackageContainerResult,
  DeploymentResult,
  FindSharedPackageContainerOptions,
  PackageAllUserProvisioningOptions,
  PackageManager,
  PackageManagerDebugSettings,
  PackageUserInformation,
  PackageVolume,
  RegisterPackageOptions,
  SharedPackageContainer,
  SharedPackageContainerManager,
  SharedPackageContainerMember,
  StagePackageOptions,
  UpdateSharedPackageContainerOptions,
  UpdateSharedPackageContainerResult,
} = load(namespace.name);

reference(namespace.externalReference);
