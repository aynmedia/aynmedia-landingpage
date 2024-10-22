/** @format */

import About from '@/components/about';
import Audit from '@/components/audit';
import Awards from '@/components/awards';
import CallToAction from '@/components/calltoaction';
import Clients from '@/components/clients';
import Hero from '@/components/hero';
import MarqueeGallery from '@/components/marquee';
import LogoScroller from '@/components/scroller';
import Services from '@/components/services';
import Testimonial from '@/components/testimonial';

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <LogoScroller />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Audit />
      </section>
      <section>
        <Awards />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <MarqueeGallery />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Clients />
      </section>
      <section>
        <CallToAction />
      </section>
    </>
  );
}
