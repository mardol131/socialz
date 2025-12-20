import { getCollection, getColors, getRatios } from "@/app/_api/cms";
import Footer from "../../_components/Footer";
import CatalogClient from "./_components/CatalogClient";
import { categories, themes, colors, ratios } from "./_fixtures/filters";
import { templates } from "./_fixtures/templates";

// Tato funkce může být rozšířena o fetchování dat z API
async function getCatalogData() {
  try {
    const colorsResponse = await getColors();
    const ratiosResponse = await getRatios();

    return {
      templates,
      categories,
      themes,
      colors: colorsResponse.docs,
      ratios: ratiosResponse.docs,
      socials: [],
    };
  } catch (error) {
    console.error("Chyba při fetchování dat z CMS:", error);
  }

  // Prozatím vracíme mock data
}

export default async function CatalogPage() {
  // Server-side data fetching
  const catalogData = await getCatalogData();

  return (
    <div className="min-h-screen bg-zinc-950">
      <main className="pt-24 pb-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Katalog <span className="gradient-text">šablon</span>
            </h1>
            <p className="text-lg text-zinc-400">
              Prohlédněte si naši kompletní kolekci profesionálních šablon pro
              sociální sítě
            </p>
          </div>

          <CatalogClient
            templates={catalogData?.templates || []}
            categories={catalogData?.categories || []}
            themes={catalogData?.themes || []}
            colors={catalogData?.colors || []}
            ratios={catalogData?.ratios || []}
            socials={catalogData?.socials || []}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
