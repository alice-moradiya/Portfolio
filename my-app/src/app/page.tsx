"use client";

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
const Page = () => {
  return (
    <SSRProvider>
      <Header />
      <WavyBackground />
      <HomePageContent />
      <About />
      <Education/>
      <Skills />
      <Experience />
     <Footer />

    </SSRProvider>
      );
};

export default Page;
