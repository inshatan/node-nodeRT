/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//Mass edit compiler flags/args in binding.gyp
//NB: Make sure binding.gyp is valid JSON (eg: ' -> ")

import { join } from "node:path";
import { readJSON, writeJSON, ls } from "@xan105/fs";

const scopes = await ls("./node_modules", { pattern: /^@nodert-.*$/ })
for (const scope of scopes)
{
  const namespaces = await ls(join("./node_modules", scope));
  for (const namespace of namespaces)
  {
    console.log(scope + "/" + namespace);
    
    const binding = join("./node_modules", scope, namespace, "binding.gyp");
    const gyp = await readJSON(binding);
    
    gyp.targets.at(0).msvs_settings.VCCLCompilerTool.AdditionalOptions = ["/std:c++17", "/ZW"];
    gyp.targets.at(0).msvs_settings.VCCLCompilerTool.DisableSpecificWarnings = [4609];
    
    await writeJSON(binding, gyp);
  }
}