/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.system.diagnostics
  name: "windows.system.diagnostics",
  externalReference: [
    "Windows.Data.Json",
    "Windows.System",
  ]
};

export const {
  DiagnosticActionState,
  DiagnosticActionResult,
  DiagnosticInvoker,
  ProcessCpuUsage,
  ProcessCpuUsageReport,
  ProcessDiagnosticInfo,
  ProcessDiskUsage,
  ProcessDiskUsageReport,
  ProcessMemoryUsage,
  ProcessMemoryUsageReport,
  SystemCpuUsage,
  SystemCpuUsageReport,
  SystemDiagnosticInfo,
  SystemMemoryUsage,
  SystemMemoryUsageReport,
} = load(namespace.name);

reference(namespace.externalReference);

export * as deviceportal from "./system.diagnostics.deviceportal.js";
export * as telemetry from "./system.diagnostics.telemetry.js";
export * as tracereporting from "./system.diagnostics.tracereporting.js";