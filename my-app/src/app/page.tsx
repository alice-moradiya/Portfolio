"use client";
// import dynamic from 'next/dynamic';
import useClientSideEffect from './main.js';
import '../app/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import SSRProvider from 'react-bootstrap/SSRProvider';
import React from 'react';
import { WavyBackground } from '@/app/utils/components/ui/wavy-background'; 
import Link from 'next/link';
import Layout from '../app/layout'
import Header from './header'
import Home from './home.js'
import HomePageContent from './home'; 
import Footer from './footer'
import About from './about'
import Education from './education'
import Skills from './skills'
import Experience from './experience'
import ProjectsSection from './projects';
import Contact from './contact'
import { SpeedInsights } from "@vercel/speed-insights/next"


// const WavyBackgroundWithNoSSR = dynamic(
//   () => import('@/app/utils/components/ui/wavy-background').then(mod => mod.WavyBackground),
//   { ssr: false }
// );

const Page = () => {
  useClientSideEffect();
  return (
    <SSRProvider>
      <SpeedInsights/>
      <Header />
      <WavyBackground />
      <HomePageContent />
      <About />
      <Education/>
      <Skills />
      {/* <Experience /> */}
      <ProjectsSection />
      {/* <Contact/> */}
     <Footer />

    </SSRProvider>
      );
};

export default Page;
