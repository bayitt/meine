"use server";

import fs from "node:fs";
import path from "node:path";
import { redirect } from "next/navigation";

export const recordRelationshipStart = async () => {
  const relationshipFilePath = path.join(
    process.cwd(),
    "src",
    "relationship.txt"
  );

  const fileContent = fs.readFileSync(relationshipFilePath, "utf8");

  if (fileContent.trim() !== "") return;

  fs.writeFileSync(relationshipFilePath, new Date().toISOString());
  redirect("/dating");
};
