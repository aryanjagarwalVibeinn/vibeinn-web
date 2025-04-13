import React from "react";
import Section from "@/components/Section";

const HowItWorksSection = () => {
  return (
    <Section
      id="how-it-works"
      bgClass="bg-white"
      darkBgClass="bg-gradient-to-br from-slate-800 to-slate-900"
    >
      <div className="text-center mb-16 animate-on-scroll opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
          How Vibeinn Works
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get started in just a few simple steps and begin your journey to
          authentic social interactions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div
          className="flex flex-col items-center text-center animate-on-scroll opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <span className="text-2xl font-bold text-white">1</span>
          </div>
          <h3 className="text-xl font-bold mb-3 dark:text-white">
            Download the App
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Available for iOS and Android. Download Vibeinn and create your
            profile in minutes.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center animate-on-scroll opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <span className="text-2xl font-bold text-white">2</span>
          </div>
          <h3 className="text-xl font-bold mb-3 dark:text-white">
            Share Your Thoughts
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Express yourself authentically without worrying about judgment or
            criticism.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center animate-on-scroll opacity-0"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <span className="text-2xl font-bold text-white">3</span>
          </div>
          <h3 className="text-xl font-bold mb-3 dark:text-white">
            Earn Rewards
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Get points for engagement that can be redeemed for exciting rewards
            and exclusive content.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorksSection;
