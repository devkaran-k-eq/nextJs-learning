import Link from "next/link";
import "./globals.css";
import ThemeContextProvider from "@/context/ThemeContext";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
