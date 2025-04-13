import React from "react";
import { motion } from "framer-motion";

const AppScreenshotsSection = () => {
  // Array of screenshot data
  const screenshots = [
    {
      id: 1,
      src: "/screenshots/mobile-1.png",
      alt: "Vibeinn Home Screen",
      description: "Explore unfiltered perspectives",
    },
    {
      id: 2,
      src: "/screenshots/mobile-2.png",
      alt: "Vibeinn Chat Screen",
      description: "Connect without judgment",
    },
    {
      id: 3,
      src: "/screenshots/mobile-3.png",
      alt: "Vibeinn Profile Screen",
      description: "Express your authentic self",
    },
    {
      id: 4,
      src: "/screenshots/mobile-4.png",
      alt: "Vibeinn Rewards Screen",
      description: "Earn rewards for engagement",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Experience Vibeinn
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            See how our platform helps you connect authentically in a
            judgment-free zone
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700">
                {/* Phone frame */}
                <div className="bg-black rounded-3xl p-2 md:p-3">
                  {/* Status bar */}
                  <div className="h-6 rounded-t-2xl bg-black flex justify-center">
                    <div className="w-20 h-4 bg-black rounded-b-xl mx-auto"></div>
                  </div>

                  {/* Screenshot */}
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="rounded-2xl w-48 md:w-64 aspect-[9/19] object-cover"
                  />
                </div>
              </div>
              <p className="mt-4 text-center text-slate-700 dark:text-slate-300 font-medium">
                {screenshot.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppScreenshotsSection;
