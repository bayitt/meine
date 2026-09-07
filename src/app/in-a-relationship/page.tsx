import fs from "node:fs";
import path from "node:path";
import { Relationship } from "@/src/components/Relationship";

export default function InARelationship() {
  const relationshipFilePath = path.join(
    process.cwd(),
    "src",
    "relationship.txt"
  );

  const relationshipStart = fs.readFileSync(relationshipFilePath, "utf8");
  let relationshipStartDate = new Date(relationshipStart);
  relationshipStartDate = isNaN(relationshipStartDate.getTime())
    ? new Date()
    : relationshipStartDate;

  return <Relationship startDate={relationshipStartDate} />;
}
