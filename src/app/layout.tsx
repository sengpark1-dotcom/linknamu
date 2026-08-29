import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "링크나무",
  description: "내 모든 링크를 한 페이지에 모아 하나의 URL로 공유하는 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-[linear-gradient(135deg,#fff8f0_0%,#ffecd6_35%,#ffe1e6_70%,#ffd7e6_100%)] font-sans text-stone-800 antialiased dark:bg-[linear-gradient(135deg,#1a1420_0%,#241826_40%,#2b1b22_70%,#1f1420_100%)] dark:text-stone-100">
        {children}
      </body>
    </html>
  );
}
