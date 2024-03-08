// page.tsx
"use client";

import '../app/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import SSRProvider from 'react-bootstrap/SSRProvider';
import React from 'react';
import { WavyBackground } from '@/app/utils/components/ui/wavy-background'; // using the @ alias
import Link from 'next/link';
import Layout from '../app/layout.js'

const Page = () => {
  return (
  <SSRProvider>
  <WavyBackground>
    <Layout>  </Layout>
    <h1 className='text-danger'>Hello Bootstrap</h1>
   
  </WavyBackground>
  </SSRProvider>
  );
};

export default Page;
