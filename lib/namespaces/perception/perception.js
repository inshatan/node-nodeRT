/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.perception
  name: "windows.perception",
  externalReference: [
  ]
};

export const {
  PerceptionTimestamp,
  PerceptionTimestampHelper,
} = load(namespace.name);

reference(namespace.externalReference);

export * as automation from "./perception.automation.js";
export * as people from "./perception.people.js";
export * as spatial from "./perception.spatial.js";