import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "My Blog",
  description: "A blog created with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
    lang="jp"
    className={`${notoSansJP} h-full antialiased`}
    >
    <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
