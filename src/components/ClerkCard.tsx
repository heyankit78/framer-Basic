import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "motion/react";
import {
  CalendarClockIcon,
  LucideMove3D,
  MessageCircle,
  SparkleIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";

const ClerkCard = () => {
  const [openCard, setOpenCard] = useState(true);
  return (
    <>
      <AnimatePresence>
        {openCard && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1.05,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={cn(
              "w-85 min-h-[28rem] h-[28rem] rounded-xl",
              "flex flex-col p-4",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
            )}
          >
            <h2 className="font-bold text-[15px]">Aceternity UI Components</h2>
            <p className=" mt-2 text-[12px] text-neutral-600">
              A collection of beautiful UI components
            </p>
            <div className="cursor-pointer flex justify-center items-center">
              <Button
                onClick={() => setOpenCard(false)}
                className="px-2 py-1 rounded-lg flex items-center gap-1 mt-4 text-[13px] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
              >
                <img src="/vite.svg" width={15} height={20}></img>
                Aceternity
                <XIcon className="text-blue-600 cursor-pointer" />
              </Button>
            </div>
            <div className="bg-gray-100 rounded-lg flex-1 mt-4 border-dashed border-neutral-200 relative">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="border border-neutral-200 absolute inset-0 w-full h-full bg-red rounded-lg bg-gray-100 divide-y divide-neutral-200"
              >
                <div className="flex gap-2 p-4">
                  <div
                    className="h-7 w-7 flex-shrink-0 bg-gradient-to-br 
           shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
           bg-white rounded-md flex items-center justify-center"
                  >
                    <MessageCircle className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A collection of UI components
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div
                    className="h-7 w-7 flex-shrink-0 bg-gradient-to-br 
           shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
           bg-white rounded-md flex items-center justify-center"
                  >
                    <CalendarClockIcon className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A collection of UI components
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div
                    className="h-7 w-7 flex-shrink-0 bg-gradient-to-br 
           shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
           bg-white rounded-md flex items-center justify-center"
                  >
                    <CalendarClockIcon className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A collection of UI components
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div
                    className="h-7 w-7 flex-shrink-0 bg-gradient-to-br 
           shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
           bg-white rounded-md flex items-center justify-center"
                  >
                    <LucideMove3D className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A collection of UI components
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div
                    className="h-7 w-7 flex-shrink-0 bg-gradient-to-br 
           shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
           bg-white rounded-md flex items-center justify-center"
                  >
                    <SparkleIcon className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Aceternity UI Components
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      A collection of UI components
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ClerkCard;
