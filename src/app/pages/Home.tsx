import { Hero } from "../components/Hero";
import {
  AboutStrip,
  TeamsStrip,
  JoinStrip,
  LocationsStrip,
  ClubInfoStrip,
  ContactStrip,
} from "../components/HomeSections";
import { SponsorsStrip } from "../components/SponsorsStrip";
import { NewsStrip } from "../components/NewsStrip";

export function Home() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <NewsStrip />
      <TeamsStrip />
      <SponsorsStrip />
      <JoinStrip />
      <LocationsStrip />
      <ClubInfoStrip />
      <ContactStrip />
    </>
  );
}
