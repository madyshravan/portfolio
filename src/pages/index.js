import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home({ theme, toggleTheme }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <section className="w-full">
        <HeroSection />
      </section>
      <Footer />
    </div>
  );
}
