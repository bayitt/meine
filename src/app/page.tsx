import fs from "node:fs";
import path from "node:path";
import { redirect } from "next/navigation";
import { Home } from "@/src/components/Home";

export default function HomePage() {
  const relationshipFilePath = path.join(
    process.cwd(),
    "src",
    "relationship.txt"
  );

  const fileContent = fs.readFileSync(relationshipFilePath, "utf8");

  if (fileContent.trim() !== "") {
    redirect("/in-a-relationship");
  }

  return <Home />;
}
