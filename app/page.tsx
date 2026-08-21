import Hero from "./components/Hero";
import FairInfo from "./components/FairInfo";
import ExhibitorProfile from "./components/ExhibitorProfile";
import BuyerProfile from "./components/BuyerProfile";
import MarketInfo from "./components/MarketInfo";
import PastEdition from "./components/PastEdition";
import Partners from "./components/Partners";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <FairInfo />
      <ExhibitorProfile />
      <MarketInfo />
      <PastEdition />
      <BuyerProfile />
      <Partners />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </>
  );
}
