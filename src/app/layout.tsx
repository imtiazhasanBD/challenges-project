import "./globals.css";
import { Providers } from "@/components/providers";
import { headers } from "next/headers";
import { Layout } from "@/components/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "Unknown";

  return (
    <html lang="en">
      <body>
        <Providers userAgent={userAgent}>
         <Layout>{children}</Layout>
          </Providers>
      </body>
    </html>
  );
}
