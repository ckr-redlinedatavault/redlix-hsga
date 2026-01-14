import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import History from "@/components/History";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingTag from "@/components/FloatingTag";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-background"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />
      <main>
        <Hero />
        <History />
        <About />
      </main>
      <Footer />
      <FloatingTag />
    </div>
  );
}
