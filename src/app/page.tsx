import HomePage from "@/components/Pages/HomePage";
import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GizmoGear",
  description: "GizmoGear"
};

const Home = () => {
  return <HomePage />;
};

export default Home;
