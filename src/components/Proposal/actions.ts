"use server";

import fs from "node:fs";
import path from "node:path";

export const recordRelationshipStart = async () => {
  const relationshipFilePath = path.join(
    process.cwd(),
    "src",
    "relationship.txt"
  );

  fs.writeFileSync(relationshipFilePath, new Date().toISOString());
};
