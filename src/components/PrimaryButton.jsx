import React from "react";
import { motion } from "framer-motion";

const PrimaryButton = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="flex items-center justify-center bg-[#7A9E7E] font-skranji rounded-full w-28 md:w-32 lg:w-40 sm:w-28 h-12 md:h-12 lg:h-14 text-NightBlack sm:text-[1.2rem] text-xl md:text-lg lg:text-2xl"
    >
      <div className="flex items-center justify-center md:pt-1">{text}</div>
    </motion.button>
  );
};

export default PrimaryButton;