import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Home } from "@/src/components/Home";
import { title, description, openGraph, twitter, icons } from "@/src/utilities";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { ...openGraph, url: "https://stephanie.olamileke.dev" },
  twitter: { ...twitter, url: "https://stephanie.olamileke.dev" } as any,
  icons,
};

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
      redirect("/dating");
    }
  }

  return <Home />;
}
