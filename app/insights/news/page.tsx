import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function News() {
  return (
    <div
      className="min-h-screen bg-background"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-3xl font-bold text-foreground">News</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">
          Latest updates, announcements, and press from HSGA TG.
        </p>
      </main>
      <Footer />
    </div>
  );
}
