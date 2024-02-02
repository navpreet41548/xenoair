import Head from "next/head";
import HomeSection from "../../section/HomeSection";
import AboutSection from "../../section/AboutSection";
import FlightOptionSection from "../../section/FlightOptionSection";
import AddOnSection from "../../section/AddOnSection";
import FaqSection from "../../section/FaqSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>XENOAIR</title>
        <meta name="description" content="HOME|XENOAIR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <HomeSection />
      <AboutSection />
      <FlightOptionSection />
      <AddOnSection />
      <FaqSection />
    </>
  );
}
