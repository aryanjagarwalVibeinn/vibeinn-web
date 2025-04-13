import React from "react";
import Section from "@/components/Section";
import { Heart, Star, Gift, TrendingUp } from "lucide-react";

const RewardsSection = () => {
  return (
    <Section id="rewards" bgClass="bg-slate-50" darkBgClass="bg-slate-900">
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center">
        <div className="md:w-1/2 animate-on-scroll opacity-0">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-primary opacity-10 rounded-full"></div>

            <h3 className="text-2xl font-bold mb-4 dark:text-white">
              Reward Program
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Heart className="w-5 h-5 mt-1 flex-shrink-0 text-primary dark:text-blue-400" />
                <span className="dark:text-gray-300">
                  Premium subscriptions and exclusive content access
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-5 h-5 mt-1 flex-shrink-0 text-primary dark:text-blue-400" />
                <span className="dark:text-gray-300">
                  Gift cards and merchandise from our partners
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-5 h-5 mt-1 flex-shrink-0 text-primary dark:text-blue-400" />
                <span className="dark:text-gray-300">
                  Platform status badges and profile enhancements
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-5 h-5 mt-1 flex-shrink-0 text-primary dark:text-blue-400" />
                <span className="dark:text-gray-300">
                  Chance to be featured in our spotlight program
                </span>
              </li>
            </ul>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">
              How to earn points:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-2 items-center">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="dark:text-gray-300">Daily check-ins</span>
              </div>
              <div className="flex gap-2 items-center">
                <Gift className="w-5 h-5 text-pink-500" />
                <span className="dark:text-gray-300">Referring friends</span>
              </div>
              <div className="flex gap-2 items-center">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="dark:text-gray-300">Creating content</span>
              </div>
              <div className="flex gap-2 items-center">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="dark:text-gray-300">Community engagement</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-6 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight dark:text-white">
            Be Rewarded for{" "}
            <span className="text-primary dark:text-blue-400">
              Being Yourself
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            At Vibeinn, we believe authentic expression should be rewarded. Our
            unique point system allows you to earn rewards for being active and
            engaging genuinely with others on the platform.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The more authentic you are, the more you'll be rewarded. Points can
            be redeemed for various benefits including premium features, gift
            cards, and exclusive access to events.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default RewardsSection;
