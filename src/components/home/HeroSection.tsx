import React from "react";
import Section from "@/components/Section";
import AppStoreButton from "@/components/AppStoreButton";

const HeroSection = () => {
  return (
    <Section
      bgClass="bg-white"
      darkBgClass="bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <div className="md:w-1/2 space-y-6 animate-on-scroll opacity-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight dark:text-white">
            Express Yourself{" "}
            <span className="text-primary dark:text-blue-400">
              Without Filters
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 md:pr-12">
            Vibeinn is an AI-powered social platform that lets you speak your
            heart out without fear of judgment. Be authentic, connect with
            like-minded people, and win rewards!
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <AppStoreButton type="apple" />
            <AppStoreButton type="google" />
          </div>
        </div>

        <div className="md:w-1/2 relative animate-on-scroll opacity-0">
          <div className="bg-gradient-accent rounded-3xl shadow-2xl overflow-hidden relative p-2 animate-float">
            <img
              src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Vibeinn App Interface"
              className="rounded-2xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-2xl"></div>
          </div>
          <div className="absolute -bottom-10 -right-10 -z-10 w-64 h-64 bg-primary/20 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -left-10 -z-10 w-64 h-64 bg-accent/20 dark:bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
