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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-slate-200 dark:border-slate-700">
                {/* Phone frame */}
                <div className="bg-black rounded-2xl md:rounded-3xl p-1 md:p-3">
                  {/* Status bar */}
                  <div className="h-3 md:h-6 rounded-t-xl md:rounded-t-2xl bg-black flex justify-center">
                    <div className="w-12 h-2 md:w-20 md:h-4 bg-black rounded-b-lg md:rounded-b-xl mx-auto"></div>
                  </div>

                  {/* Screenshot */}
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="rounded-xl md:rounded-2xl w-full aspect-[9/19] object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `<div class="rounded-xl md:rounded-2xl w-full aspect-[9/19] bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xs md:text-sm">${screenshot.alt}</div>`;
                    }}
                  />
                </div>
              </div>
              <p className="mt-2 md:mt-4 text-center text-slate-700 dark:text-slate-300 font-medium text-xs md:text-sm">
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
