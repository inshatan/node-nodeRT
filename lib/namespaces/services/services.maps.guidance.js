/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.services.maps.guidance
  name: "windows.services.maps.guidance",
  externalReference: [
    "Windows.Devices.Geolocation",
    "Windows.Services.Maps",
  ]
};

export const {
  GuidanceAudioMeasurementSystem,
  GuidanceAudioNotificationKind,
  GuidanceAudioNotifications,
  GuidanceLaneMarkers,
  GuidanceManeuverKind,
  GuidanceMode,
  GuidanceAudioNotificationRequestedEventArgs,
  GuidanceLaneInfo,
  GuidanceManeuver,
  GuidanceMapMatchedCoordinate,
  GuidanceNavigator,
  GuidanceReroutedEventArgs,
  GuidanceRoadSegment,
  GuidanceRoadSignpost,
  GuidanceRoute,
  GuidanceTelemetryCollector,
  GuidanceUpdatedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
