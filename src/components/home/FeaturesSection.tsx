import React from "react";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import {
  Shield,
  UserPlus,
  Trophy,
  SmilePlus,
  MessageSquare,
  Zap,
} from "lucide-react";

const FeaturesSection = () => {
  return (
    <Section id="features">
      <div className="text-center mb-16 animate-on-scroll opacity-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
          Why Choose Vibeinn?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our platform offers unique features that make social media fun,
          authentic, and rewarding.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className="animate-on-scroll opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          <FeatureCard
            title="Judgment-Free Zone"
            description="Express your authentic thoughts without fear of criticism or judgment from others."
            icon={<Shield className="w-6 h-6 text-white" />}
            gradient="bg-gradient-primary dark:bg-gradient-to-br dark:from-blue-700 dark:to-blue-900"
          />
        </div>

        <div
          className="animate-on-scroll opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <FeatureCard
            title="Connect with Like-minded People"
            description="Our AI matches you with people who share your interests and perspectives."
            icon={<UserPlus className="w-6 h-6 text-white" />}
            gradient="bg-gradient-secondary dark:bg-gradient-to-br dark:from-blue-600 dark:to-cyan-700"
          />
        </div>

        <div
          className="animate-on-scroll opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          <FeatureCard
            title="Rewarding Engagement"
            description="Earn points and rewards for active participation and authentic engagement."
            icon={<Trophy className="w-6 h-6 text-white" />}
            gradient="bg-gradient-accent dark:bg-gradient-to-br dark:from-blue-600 dark:to-indigo-800"
          />
        </div>

        <div
          className="animate-on-scroll opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          <FeatureCard
            title="Positive Community"
            description="Be part of a community that promotes positivity and authentic self-expression."
            icon={<SmilePlus className="w-6 h-6 text-white" />}
            gradient="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-800"
          />
        </div>

        <div
          className="animate-on-scroll opacity-0"
          style={{ animationDelay: "0.5s" }}
        >
          <FeatureCard
            title="Quality Conversations"
            description="Engage in meaningful discussions rather than surface-level interactions."
            icon={<MessageSquare className="w-6 h-6 text-white" />}
            gradient="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700"
          />
        </div>

        <div
          className="animate-on-scroll opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          <FeatureCard
            title="AI-Powered Features"
            description="Advanced AI tools help filter toxic content and enhance your experience."
            icon={<Zap className="w-6 h-6 text-white" />}
            gradient="bg-gradient-to-r from-pink-500 to-red-500 dark:from-pink-700 dark:to-red-700"
          />
        </div>
      </div>
    </Section>
  );
};

export default FeaturesSection;
