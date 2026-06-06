import { HeroBlock } from "./HeroBlock";
import { PageHeroBlock } from "./PageHeroBlock";
import { RichTextBlock } from "./RichTextBlock";
import { SplitContentBlock } from "./SplitContentBlock";
import { StatsBlock } from "./StatsBlock";
import { TimelineBlock } from "./TimelineBlock";
import { ValuesBlock } from "./ValuesBlock";
import { CtaBlock } from "./CtaBlock";
import { CtaCardsBlock } from "./CtaCardsBlock";
import { TestimonialsBlock } from "./TestimonialsBlock";
import { SponsorsBlock } from "./SponsorsBlock";
import { TeamsBlock } from "./TeamsBlock";
import { FixturesBlock } from "./FixturesBlock";
import { NewsBlock } from "./NewsBlock";
import { LocationsBlock } from "./LocationsBlock";
import { CommitteeBlock } from "./CommitteeBlock";
import { FaqBlock } from "./FaqBlock";
import { ContactFormBlock } from "./ContactFormBlock";
import { ContactsBlock } from "./ContactsBlock";
import { DocumentsBlock } from "./DocumentsBlock";
import { FeesBlock } from "./FeesBlock";
import { StepsBlock } from "./StepsBlock";
import { GalleryBlock } from "./GalleryBlock";
import { TabbedContentBlock } from "./TabbedContentBlock";

const REGISTRY: Record<string, React.ComponentType<{ block: any }>> = {
  heroBlock: HeroBlock,
  pageHeroBlock: PageHeroBlock,
  richTextBlock: RichTextBlock,
  splitContentBlock: SplitContentBlock,
  statsBlock: StatsBlock,
  timelineBlock: TimelineBlock,
  valuesBlock: ValuesBlock,
  ctaBlock: CtaBlock,
  ctaCardsBlock: CtaCardsBlock,
  testimonialsBlock: TestimonialsBlock,
  sponsorsBlock: SponsorsBlock,
  teamsBlock: TeamsBlock,
  fixturesBlock: FixturesBlock,
  newsBlock: NewsBlock,
  locationsBlock: LocationsBlock,
  committeeBlock: CommitteeBlock,
  faqBlock: FaqBlock,
  contactFormBlock: ContactFormBlock,
  contactsBlock: ContactsBlock,
  documentsBlock: DocumentsBlock,
  feesBlock: FeesBlock,
  stepsBlock: StepsBlock,
  galleryBlock: GalleryBlock,
  tabbedContentBlock: TabbedContentBlock,
};

export function Blocks({ blocks }: { blocks: any[] }) {
  if (!blocks || blocks.length === 0) return null;
  return (
    <>
      {blocks.map((b, i) => {
        const Cmp = REGISTRY[b?._type];
        if (!Cmp) return null;
        return <Cmp key={b._key || i} block={b} />;
      })}
    </>
  );
}
