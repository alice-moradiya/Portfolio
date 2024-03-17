// page.tsx
"use client";

import '../app/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import SSRProvider from 'react-bootstrap/SSRProvider';
import React from 'react';
import { WavyBackground } from '@/app/utils/components/ui/wavy-background'; // using the @ alias
import Link from 'next/link';
import Layout from '../app/layout'
import Header from './header'
import Home from './home.js'
import HomePageContent from './home'; // Assuming home.js exports HomePageContent
import Footer from './footer'

const Page = () => {
  return (
    <SSRProvider>
      <Header />
      <WavyBackground />
      <HomePageContent />
     <Footer />

    </SSRProvider>
      );
};

export default Page;
