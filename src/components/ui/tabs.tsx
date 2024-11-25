import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode; // Removed 'any' and specified the types
};

export const Tabs = ({
  tabs,
  activeTab,
  onTabChange,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabValue: string) => void;
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-row mb-7 items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
        containerClassName
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab.title}
          onClick={() => onTabChange(tab.value)} // Handle tab change
          className={cn(
            "relative px-4 py-2 rounded-full",
            tabClassName,
            activeTab === tab.value ? activeTabClassName : ""
          )}
        >
          <motion.div
            layoutId="clickedbutton"
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className={cn(
              "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
              activeTab === tab.value ? activeTabClassName : ""
            )}
          />
          <span className="relative block text-black dark:text-white">
            {tab.title}
          </span>
        </button>
      ))}
    </div>
  );
};
