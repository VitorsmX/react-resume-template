import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import {homePageMeta} from '../data/data';
import type { Metadata } from 'next';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: 'https://i.imgur.com/P5AUw2b.jpeg',
        width: 800,
        height: 600,
        alt: 'Home Page',
      },
      {
        url: 'https://i.imgur.com/P5AUw2b.jpeg',
        width: 1800,
        height: 1600,
        alt: 'Home Page',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

const Home: FC = memo(() => {
  const {title, description, ogImageUrl} = homePageMeta;
  return (
    <Page description={description} title={title} ogImageUrl={ogImageUrl}>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
