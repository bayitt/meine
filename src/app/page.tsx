import fs from "node:fs";
import path from "node:path";
import { redirect } from "next/navigation";
import { Home } from "@/src/components/Home";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const relationshipFilePath = path.join(
    process.cwd(),
    "src",
    "relationship.txt"
  );

  const fileContent = fs.readFileSync(relationshipFilePath, "utf8");

  if (fileContent.trim() !== "") {
    const parsedSearchParams = await searchParams;

    if (!parsedSearchParams["ignore_file"]) {
      redirect("/in-a-relationship");
    }
  }

  return <Home />;
}
