import React from 'react';

import { motion } from 'framer-motion';

import About from '../components/About';
import Canvas from '../components/Canvas';
import ContactSection from '../components/ContactSection';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Product from '../components/Product';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const App = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-background grid gap-y-16 overflow-hidden"
    >
      <motion.div variants={fadeIn} className="relative bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeIn}
            className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
          >
            <Header />
            <MainHero />
          </motion.div>
        </div>
        <MainHeroImage />
      </motion.div>

      <Canvas />

      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <ContactSection />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      {/* <Analytics /> */}
    </motion.div>
  );
};

export default App;
