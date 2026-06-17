import Navbar from "./components/Navbar";
import StickyNavbar from "./components/StickyNavbar";
import Hero from "./components/Hero";
import FairInfo from "./components/FairInfo";
import CEIAdvantage from "./components/CEIAdvantage";
import ExhibitorProfile from "./components/ExhibitorProfile";
import BuyerProfile from "./components/BuyerProfile";
import MarketInfo from "./components/MarketInfo";
import PastEdition from "./components/PastEdition";
import Partners from "./components/Partners";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <Hero />
      <FairInfo />
      <CEIAdvantage />
      <ExhibitorProfile />
      <MarketInfo />
      <PastEdition />
      <BuyerProfile />
      <Partners />
      <ContactSection />
      <Footer />
    </>
  );
}
