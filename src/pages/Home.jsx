import React from 'react';
import Hero from '../components/home/Hero';
import ProofStrip from '../components/home/ProofStrip';
import ModuleGrid from '../components/home/ModuleGrid';
import ScrollStory from '../components/home/ScrollStory';
import TaxLadder from '../components/home/TaxLadder';
import HowItWorks from '../components/home/HowItWorks';
import WhySwitch from '../components/home/WhySwitch';
import CtaBand from '../components/home/CtaBand';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProofStrip />
      <ModuleGrid />
      <ScrollStory />
      <TaxLadder />
      <HowItWorks />
      <WhySwitch />
      <CtaBand />
    </div>
  );
}

