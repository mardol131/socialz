import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Showcase from "./_components/Showcase";
import CTA from "./_components/CTA";

export const metadata = {
  title:
    "Socialz - Profesionální šablony pro sociální sítě | Instagram, Facebook, LinkedIn",
  description:
    "Objevte prémiové šablony pro sociální sítě editovatelné v Canvě. Vytvářejte profesionální obsah pro Instagram, Facebook, LinkedIn a Pinterest během pár minut. Více než 500+ šablon připravených k použití.",
  keywords:
    "šablony pro sociální sítě, Instagram šablony, Facebook šablony, LinkedIn šablony, Canva šablony, social media templates, grafické šablony, marketing templates",
  openGraph: {
    title: "Socialz - Profesionální šablony pro sociální sítě",
    description:
      "Vytvářejte úžasný obsah pro sociální sítě během několika minut. 500+ profesionálních šablon plně upravitelných v Canvě.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
