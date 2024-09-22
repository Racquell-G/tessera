import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'tessera',
  description: 'An event management platform',
  icons: {
    icon: '/assets/images/favicon.svg'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
