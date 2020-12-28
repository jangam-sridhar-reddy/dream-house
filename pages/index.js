import Head from "next/head";

import Layout from "../components/layout/layout.component";
import SliderSection from "../components/home/slider-section/slider-section.components";
import ServiceSection from "../components/home/services-section/services-section.components";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Dream House</title>
      </Head>
      <>
        <SliderSection />
        <ServiceSection />
      </>
    </Layout>
  );
}
