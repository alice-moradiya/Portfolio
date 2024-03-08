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


const Page = () => {
  return (
    <SSRProvider>
      <Header />
      <WavyBackground>
      <Layout> </Layout>
      </WavyBackground>
    </SSRProvider>
      );
};

export default Page;
