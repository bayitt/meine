import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "600"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className={`${onest.className} min-h-full bg-[#F9EAE1] font-light`}>
        <section className="w-9/10 max-w-[1080px] mx-auto">{children}</section>
      </body>
    </html>
  );
}
