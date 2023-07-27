import RootStyleRegistry from "./emotion";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en-US">
        <body>
          <RootStyleRegistry>{children}</RootStyleRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
}
