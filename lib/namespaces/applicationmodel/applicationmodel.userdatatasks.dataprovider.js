/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.userdatatasks.dataprovider
  name: "windows.applicationmodel.userdatatasks.dataprovider",
  externalReference: [
    "Windows.Foundation",
    "Windows.ApplicationModel.UserDataTasks",
  ]
};

export const {
  UserDataTaskDataProviderConnection,
  UserDataTaskDataProviderTriggerDetails,
  UserDataTaskListCompleteTaskRequest,
  UserDataTaskListCompleteTaskRequestEventArgs,
  UserDataTaskListCreateOrUpdateTaskRequest,
  UserDataTaskListCreateOrUpdateTaskRequestEventArgs,
  UserDataTaskListDeleteTaskRequest,
  UserDataTaskListDeleteTaskRequestEventArgs,
  UserDataTaskListSkipOccurrenceRequest,
  UserDataTaskListSkipOccurrenceRequestEventArgs,
  UserDataTaskListSyncManagerSyncRequest,
  UserDataTaskListSyncManagerSyncRequestEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
