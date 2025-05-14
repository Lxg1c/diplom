import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/widgets/header/Header";
import Script from "next/script";

const montserrat = Montserrat({
    subsets: ['latin'],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${montserrat.className} relative min-h-screen`}>
        <Header />
        <main className="relative z-10">
            {children}
        </main>
        <Script
            src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY}&lang=ru_RU`}
            strategy="beforeInteractive"
        />
        </body>
        </html>
    );
}