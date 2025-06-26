import React from "react";

import { motion } from "motion/react";

const Button = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px,rgba(6,182,212,0.1)1px,transparent 0)`,
          backgroundSize: "8px 8px",
          backgroundRepeat: "repeat",
        }}
        className="bg-neutral-900 h-screen flex items-center justify-center w-full"
      >
        <motion.div
          className="group p-20 mx-20"
          // initial={{ transform: "translateY(0px)" }}
          // animate={{ transform: "translateY(-50px)" }}
          // transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.button
            initial={{ transform: "translateY(0px)" }}
            animate={{ transform: "translateY(-50px)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative cursor-pointer text-neutral-500 hover:text-white duration-300 px-12 py-4 bg-black rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]"
          >
            Subscribe
            <motion.span
              initial={{ left: 0, right: 0 }}
              animate={{ left: "", right: "10px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute bottom-0 bg-gradient-to-r via-cyan-400 to bg-transparent h-px w-full mx-auto"
            ></motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute opacity-100 group-hover:opacity-100 duration-300 bottom-0 left-0 right-0 bg-gradient-to-r via-cyan-400 to bg-transparent h-[4px] w-3/4 mx-auto blur-sm"
            ></motion.span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Button;
