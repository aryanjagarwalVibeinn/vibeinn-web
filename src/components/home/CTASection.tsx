import React from "react";
import Section from "@/components/Section";
import AppStoreButton from "@/components/AppStoreButton";
import EmailSubscribe from "./EmailSubscribe";

const CTASection = () => {
  return (
    <Section bgClass="bg-gradient-to-r from-blue-600 to-indigo-700 text-white dark:from-gray-800 dark:to-gray-900 dark:text-gray-100">
      <div className="text-center animate-on-scroll opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Express Your True Self?
        </h2>
        <p className="text-xl text-white/90 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Join thousands of users already connecting authentically on Vibeinn.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <AppStoreButton
            type="apple"
            className="border-white/20 bg-white/10 hover:bg-white/20 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
          />
          <AppStoreButton
            type="google"
            className="border-white/20 bg-white/10 hover:bg-white/20 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
          />
        </div>
      </div>

      <EmailSubscribe />
    </Section>
  );
};

export default CTASection;
