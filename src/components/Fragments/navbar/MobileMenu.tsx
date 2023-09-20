"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-gray-800 text-white z-10 p-4"
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={onClose}
          >
            Close
          </button>
          <ul className="text-right mt-5">
            <li className="py-2">Menu Item 1</li>
            <li className="py-2">Menu Item 2</li>
            <li className="py-2">Menu Item 3</li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
