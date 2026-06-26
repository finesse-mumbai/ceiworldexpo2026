import Navbar from "./components/Navbar";
import StickyNavbar from "./components/StickyNavbar";
import Hero from "./components/Hero";
import FairInfo from "./components/FairInfo";
import ExhibitorProfile from "./components/ExhibitorProfile";
import BuyerProfile from "./components/BuyerProfile";
import MarketInfo from "./components/MarketInfo";
import PastEdition from "./components/PastEdition";
import Partners from "./components/Partners";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CEIAdvantage from "./components/CEIAdvantage";
import CEIAdvantageDetails from "./components/CEIAdvantageDetails";
import AdvantageAccordion from "./components/AdvantageAccordion";

export default function Home() {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      <Hero />
      <AdvantageAccordion />
      <FairInfo />
      {/* <CEIAdvantage /> */}
      <CEIAdvantageDetails />
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
