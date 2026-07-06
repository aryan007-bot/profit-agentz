"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function PolicyLayout({ title, lastUpdated, children }: PolicyLayoutProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white min-h-screen">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col space-y-4 max-w-3xl sm:mb-16 md:mb-20 text-left items-start mb-12 border-b border-zinc-200 pb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900">
              {title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-light text-zinc-600">
              Last updated: {lastUpdated}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <div className="space-y-10 text-left text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
