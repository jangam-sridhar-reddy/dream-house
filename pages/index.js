import Head from "next/head";

import Layout from "../components/layout/layout.component";
import SliderSection from "../components/home/slider-section/slider-section.components";
import ServiceSection from "../components/home/services-section/services-section.components";
import OurStory from "../components/home/our-story/our-story.component";
import CriticalThinking from "../components/home/critical-thinking/critical-thinking.component";
import OurWorks from "../components/home/our-works/our-works.components";
import Testimonial from "../components/home/testimonial/testimonial.components";
import Blog from "../components/home/blog/blog.component";
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Dream House</title>
      </Head>
      <>
        <SliderSection />
        <ServiceSection />
        <OurStory />
        <CriticalThinking />
        <OurWorks />
        <Testimonial />
        <Blog />
      </>
    </Layout>
  );
}
