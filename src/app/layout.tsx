import "~/styles/globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";

export const metadata: Metadata = {
  title: "Raumausstattung Franke",
  description:
    "Ich bin Maren Franke, Raumausstatterin seit fast 30 Jahren in Bremen, und fertige in meinem eigenen Nähatelier alles in Handarbeit an. Handwerkliche Perfektion – individuell und maßgefertigt.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
