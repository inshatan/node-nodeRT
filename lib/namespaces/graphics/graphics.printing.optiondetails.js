/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.graphics.printing.optiondetails
  name: "windows.graphics.printing.optiondetails",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Graphics.Printing",
  ]
};

export const {
  PrintOptionStates,
  PrintOptionType,
  IPrintOptionDetails,
  IPrintNumberOptionDetails,
  IPrintTextOptionDetails,
  IPrintItemListOptionDetails,
  PrintCopiesOptionDetails,
  PrintMediaSizeOptionDetails,
  PrintMediaTypeOptionDetails,
  PrintOrientationOptionDetails,
  PrintQualityOptionDetails,
  PrintColorModeOptionDetails,
  PrintDuplexOptionDetails,
  PrintCollationOptionDetails,
  PrintStapleOptionDetails,
  PrintHolePunchOptionDetails,
  PrintBindingOptionDetails,
  PrintBorderingOptionDetails,
  PrintPageRangeOptionDetails,
  IPrintCustomOptionDetails,
  PrintCustomTextOptionDetails,
  PrintCustomToggleOptionDetails,
  PrintCustomItemDetails,
  PrintCustomItemListOptionDetails,
  PrintTaskOptionChangedEventArgs,
  PrintTaskOptionDetails,
} = load(namespace.name);

reference(namespace.externalReference);
