import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactQueryProvider from "@/Providers/ReactQueryProvider";

export const metadata: Metadata = {
    title: "Car Store",
    description: "Discover the best cars in the world",
};

interface rootPropTypes {
    children: React.ReactNode;
}

export default function RootLayout({ children }: rootPropTypes) {
    return (
        <html lang="en">
            <body className="relative">
                <ReactQueryProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </ReactQueryProvider>
            </body>
        </html>
    );
}
