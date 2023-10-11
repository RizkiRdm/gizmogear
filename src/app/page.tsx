import React from 'react'
import HomePages from '@/components/Pages/HomePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GizmoGear",
  description: "GizmoGear"
};

const HomePage = () => {
  return (
    <HomePages />
  )
}

export default HomePage