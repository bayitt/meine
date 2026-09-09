import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Relationship } from "@/src/components/Relationship";
import { title, description, openGraph, twitter, icons } from "@/src/utilities";
import { getTimeCount } from "@/src/utilities";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { ...openGraph, url: "https://stephanie.olamileke.dev/dating" },
  twitter: { ...twitter, url: "https://stephanie.olamileke.dev/dating" } as any,
  icons,
};

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

  const { years, days, hours, minutes, seconds } = getTimeCount(
    relationshipStartDate
  );

  return (
    <Relationship
      startDate={relationshipStartDate}
      years={years}
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
}
