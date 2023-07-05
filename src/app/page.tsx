'use client';
import { useState } from 'react';
import { Accordion } from '@components/atoms';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

const Home = (): JSX.Element => {
  return (
    <div className="bg-white isolate">
      <Accordion />
    </div>
  );
};

export default Home;
