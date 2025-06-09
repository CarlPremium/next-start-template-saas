import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import dynamic from 'next/dynamic';
import Footer from '@/components/footer';

const CasesSection = dynamic(() => import(`@/components/cases-section`), { ssr: false });
const SocialProof = dynamic(() => import(`@/components/social-proof`), { ssr: false });
const PricingTable = dynamic(() => import(`@/components/pricing-table`), { ssr: false });

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="STARTD - Template"
        // eslint-disable-next-line max-len
        description="Ship your startup in days, not weeks. The Next.js boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast."
      />
      <Header />
      <main>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <SocialProof />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
