import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import NavBar from "@/components/ui/NavBar";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import Footer from "@/components/ui/Footer";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remit-co",
  description: "Your Place to transfer money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
       

          <SignedOut>
          </SignedOut>
          <SignedIn>
            
          </SignedIn>
            <NavBar />
          {children}
        <Separator/>
        <Footer />
        </body>
      </html>
    </ClerkProvider>
    
    
  );
}
