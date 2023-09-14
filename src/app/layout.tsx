import ClientProvider from "@/context/ClientProvider";
import "../styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navigation/Navbar";

const overUsedGrotesk = localFont({
    src: [
        {
            path: "../../public/fonts/light.otf",
            weight: "400",
        },
        {
            path: "../../public/fonts/rom.otf",
            weight: "500",
        },
        {
            path: "../../public/fonts/med.otf",
            weight: "600",
        },
        {
            path: "../../public/fonts/bold.otf",
            weight: "800",
        },
    ],
});

export const metadata: Metadata = {
    title: "Katze Speaks",
    description: "Creepy stuff, horror blogs, and maybe some creepy pasta",
    authors: [{ name: "diptanshumahish" }],
    category: "blogs",
    icons: "/favicon.ico",
    openGraph: {
        type: "website",
        description: "Creepy stuff, horror blogs, and maybe some creepy pasta",
        title: "Katze Speaks",
        images: "https://img.playbook.com/llC3BhEIj78RT80jpQ_Lu9R0bNrhlUPj62ynJ6tavBA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzZmODZhNDFl/LTE4ZDktNDYyNi05/MTZiLTcxYjMwOTUw/NDIyYw",
    },
    keywords: ["Katze speaks", "creepy pasta", "creep"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${overUsedGrotesk.className} bg-background-dark`}>
                <ClientProvider>
                    <Navbar />
                    {children}
                </ClientProvider>
            </body>
        </html>
    );
}
