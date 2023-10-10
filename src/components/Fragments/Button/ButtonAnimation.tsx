"use client";
import React from "react";
import { motion } from "framer-motion";

interface buttonProps {
  children: React.ReactNode;
  onBuy: () => void;
}

const Button: React.FC<buttonProps> = ({ children, onBuy }) => {
  return (
    <motion.button
      whileHover={{ opacity: 0.8 }}
      className="bg-sky-500 hover:bg-sky-700 text-white font-semibold py-1 px-2 rounded w-full"
      onClick={onBuy}
    >
      {children}
    </motion.button>
  );
};

export default Button;
