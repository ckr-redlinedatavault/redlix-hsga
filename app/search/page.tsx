import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type SearchPageProps = {
  searchParams: {
    q?: string;
  };
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = (searchParams.q || "").trim();

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow">
        <section className="py-16 md:py-20 bg-zinc-50 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <h1 className="text-3xl md:text-4xl font-light text-zinc-900 uppercase tracking-tighter mb-4">
              Search Results
            </h1>
            <p className="text-sm text-zinc-600 mb-8">
              {query
                ? `Showing information related to “${query}”.`
                : "Enter a topic or keyword in the search bar to explore pages on this site."}
            </p>

            <div className="space-y-4 text-sm text-zinc-700">
              <p>
                Use the main navigation and the search bar to quickly reach key
                areas such as Programs, Team, Gallery, and Contact. You can also
                explore:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Registration and joining information on the Registration and
                  How to Join pages.
                </li>
                <li>
                  Detailed program information under the Prashiksham Yojna
                  section.
                </li>
                <li>
                  News, careers, and downloads in the Insights section.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

