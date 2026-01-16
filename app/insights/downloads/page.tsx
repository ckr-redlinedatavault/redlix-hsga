import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Downloads() {
  return (
    <div
      className="min-h-screen bg-background"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-12" id="main-content">
        <Breadcrumbs />
        <div className="pt-8">
          <h1 className="text-3xl font-bold text-foreground">Downloads</h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Forms, resources, and documents available for download.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
