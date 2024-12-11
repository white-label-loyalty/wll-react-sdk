import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { WllSdkProvider } from '../../../context/WllSdkContext';
import { defaultTheme } from '../../../utils/styling';

// @ts-ignore
import gamified from '../../../assets/gamified.jpg';
// @ts-ignore
import golden from '../../../assets/golden.png';
// @ts-ignore
import ap from '../../../assets/ap.png';
// @ts-ignore
import airmiles from '../../../assets/airmiles.png';
// @ts-ignore
import numberOne from '../../../assets/numberOne.png';
// @ts-ignore
import numberTwo from '../../../assets/numberTwo.png';
// @ts-ignore
import numberThree from '../../../assets/numberThree.png';
// @ts-ignore
import numberFour from '../../../assets/numberFour.png';
// @ts-ignore
import rollTheDice from '../../../assets/roll-the-dice.jpg';

import { themes } from '../../../utils/themeHelpers';
import Group from './index';

const programData = {
  status: 'success',
  data: {
    name: 'SkyRewards Elite',
    sections: [
      {
        name: 'Travel Status',
        type: 'GRID',
        title: 'Travel Dashboard',
        description:
          'Track your miles, unlock premium benefits, and explore exclusive travel perks!',
        tiles: [
          {
            // First Full Tile - Welcome Banner
            tileHeight: 'FULL',
            type: 'CONTENT',
            configuration: {
              artworkUrl:
                'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              title: 'Welcome Explorer!',
              body: 'Your journey to premium travel begins here! Earn miles on every flight and unlock exclusive benefits along the way.',
              ctaLink: '/my-rewards',
              ctaLinkTarget: 'NEW_TAB',
            },
          },
          {
            // First Half Tile - Miles Counter
            tileHeight: 'HALF',
            type: 'POINTS',
            configuration: {
              title: 'Available Miles',
              points: 75000,
              artworkUrl: airmiles,
              pointsPrefix: '',
              pointsSuffix: 'mi',
              pointsMultiplier: 1,
            },
          },
          {
            // Second Half Tile - Elite Status Progress
            tileHeight: 'HALF',
            type: 'TIER',
            configuration: {
              title: 'Elite Status',
              type: 'CURRENT',
              tier: {
                name: 'Platinum Voyager',
                pointsRequirement: 100000,
              },
              pointsSuffix: 'miles',
              pointsToTierPrefix: 'Earn',
              pointsToTierSuffix: 'miles for Platinum status!',
              emptyDescription: 'Start your journey to Elite status!',
            },
          },
          {
            // Second Full Tile - Premium Offers
            tileHeight: 'FULL',
            type: 'CONTENT',
            configuration: {
              title: '',
              body: '',
              artworkUrl:
                'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
          },
          {
            tileHeight: 'HALF',
            type: 'CONTENT',
            configuration: {
              title: '2X Miles Bonus!',
              body: 'Book your next flight by December 31st to earn double miles! Perfect for reaching Platinum status faster.',
              ctaLink: '/book-flight',
            },
          },
          {
            // Fourth Half Tile - Travel Benefits
            tileHeight: 'HALF',
            type: 'CONTENT',
            configuration: {
              title: 'Your Elite Benefits',
              body: 'Access your premium travel perks: Priority Check-in, Extra Baggage, Lounge Access, and more!',
              ctaLink: '/benefits',
            },
          },
        ],
      },
      {
        details: [],
        defaultLocale: 'en',
        name: 'Travel Reward Categories',
        type: 'GRID',
        active: true,
        id: 'c7671657-8634-4b2f-8c25-49022ba4f950',
        tiles: [
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD_CATEGORY',
            configuration: {
              details: [],
              rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
              allowDecorationOverlay: true,
              showName: true,
              showArtwork: true,
              artworkUrl:
                'https://images.pexels.com/photos/2033343/pexels-photo-2033343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              name: 'Premium Cabin Upgrades',
            },
            id: 'f57f2f98-cabf-4b81-82ac-a0249172d65c',
            priority: 4,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD_CATEGORY',
            configuration: {
              details: [],
              rewardCategoryId: 'e2aa1cab-60c3-4fad-adfb-88f1f7bc6825',
              allowDecorationOverlay: true,
              showName: true,
              showArtwork: true,
              artworkUrl:
                'https://images.pexels.com/photos/16739115/pexels-photo-16739115/free-photo-of-a-large-circular-table-with-chairs-and-a-large-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              name: 'Airport Lounge Access',
            },
            id: 'ed598f88-cda4-4b3d-930e-3d38bf0a0fc2',
            priority: 3,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD_CATEGORY',
            configuration: {
              details: [],
              rewardCategoryId: '257c8c80-00a0-4512-ab15-235d6fd8f749',
              allowDecorationOverlay: true,
              showName: true,
              showArtwork: true,
              artworkUrl:
                'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              name: 'Hotel & Resort Packages',
            },
            id: 'e0945f47-8d89-4d7c-bf70-9b91d41f97b6',
            priority: 2,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD_CATEGORY',
            configuration: {
              details: [],
              rewardCategoryId: '0251ca85-d75a-4293-a0f9-ad7f86a1ca3d',
              allowDecorationOverlay: true,
              showName: true,
              showArtwork: true,
              artworkUrl:
                'https://images.pexels.com/photos/104826/aircraft-holiday-sun-tourism-104826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              name: 'Exclusive Experiences',
            },
            id: '0132a078-4398-41f2-aea9-8d32a43193ac',
            priority: 1,
          },
        ],
        title: 'Travel Rewards at a Glance',
        locale: 'en',
        description:
          'Discover exceptional ways to enhance your travel experience with our curated selection of premium rewards.',
      },
      {
        details: [],
        defaultLocale: 'en',
        name: 'Badge Tiles',
        type: 'GRID',
        active: true,
        id: '60a6b9e3-14c7-4b49-a363-b6dc2f16dae0',
        tiles: [
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BADGE',
            configuration: {
              defaultLocale: 'en',
              details: [],
              type: 'SPECIFIC',
              badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
              internalName: 'Global Navigator',
              priority: 0,
              status: 'ACTIVE',
              id: '8962205c-e32a-4651-ac7a-4c584449d9fa',
              name: 'Global Navigator',
              locale: 'en',
              description:
                'Achieved by visiting all major continents within a calendar year. A true citizen of the skies who has mastered worldwide travel.',
              artworkUrl: airmiles,
              count: 0,
              awardedDatePrefix: 'World Master since',
              emptyBadgeMessage: 'Your journey around the world awaits!',
              emptyBadgeArtworkUrl: airmiles,
              badgeNotEarnedMessage: 'Continue exploring to unlock',
              createdAt: '2024-08-06T08:53:24.307Z',
              updatedAt: '2024-08-06T08:53:24.307Z',
            },
            createdAt: '2024-11-11T16:17:23.784Z',
            updatedAt: '2024-11-11T16:17:23.784Z',
            priority: 4,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BADGE',
            configuration: {
              defaultLocale: 'en',
              details: [],
              type: 'SPECIFIC',
              badgeId: 'd3a2b1fa-3963-4117-8c6f-69e5f8fea009',
              internalName: 'Mile High Maven',
              priority: 0,
              status: 'ACTIVE',
              id: '79021b66-a7cf-4809-bef9-872467c0cd66',
              name: 'Mile High Maven',
              locale: 'en',
              createdAt: '2024-08-06T08:53:24.307Z',
              updatedAt: '2024-08-06T08:53:24.307Z',
              description:
                'Earned by completing 50 flights in premium cabins. A connoisseur of luxury travel who knows the art of flying in style.',
              artworkUrl: airmiles,
              count: 1,
              awardedDatePrefix: 'Elite since',
              emptyBadgeMessage: 'Your premium journey begins here',
              emptyBadgeArtworkUrl: "You haven't earned any badges yet.",
              badgeNotEarnedMessage: 'Keep flying premium to unlock',
            },
            createdAt: '2024-11-11T16:17:23.784Z',
            updatedAt: '2024-11-11T16:17:23.784Z',
            priority: 3,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BADGE',
            configuration: {
              defaultLocale: 'en',
              details: [],
              type: 'SPECIFIC',
              badgeId: '30528c0a-30c2-44aa-9640-25647b8a594c',
              internalName: 'Dawn Traveler',
              priority: 0,
              status: 'ACTIVE',
              createdAt: '2024-08-06T08:53:24.307Z',
              updatedAt: '2024-08-06T08:53:24.307Z',
              id: '656539e7-0b33-4952-8cff-8fbca4883621',
              name: 'Dawn Traveler',
              locale: 'en',
              description:
                'Awarded for completing 25 red-eye or early morning flights. A master of sunrise departures who makes the most of every travel day.',
              artworkUrl: airmiles,
              count: 1,
              awardedDatePrefix: 'Early Bird since',
              emptyBadgeMessage: 'Rise and fly!',
              emptyBadgeArtworkUrl: airmiles,
              badgeNotEarnedMessage: 'More early flights needed',
            },
            createdAt: '2024-11-11T16:17:23.784Z',
            updatedAt: '2024-11-11T16:17:23.784Z',
            priority: 2,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BADGE',
            configuration: {
              createdAt: '2024-08-06T08:53:24.307Z',
              updatedAt: '2024-08-06T08:53:24.307Z',
              defaultLocale: 'en',
              details: [],
              type: 'SPECIFIC',
              badgeId: '84bd0af7-bef3-4201-8541-d60431116597',
              internalName: 'Route Pioneer',
              priority: 0,
              status: 'ACTIVE',
              id: '4570996f-5af5-4adb-a59f-67c817cc5874',
              name: 'Route Pioneer',
              locale: 'en',
              description:
                'Granted for being among the first 100 passengers on a new route launch. A trendsetter who charts new paths across the skies.',
              artworkUrl: airmiles,
              count: 3,
              awardedDatePrefix: 'Pioneer since',
              emptyBadgeMessage: 'New routes await your discovery',
              emptyBadgeArtworkUrl: airmiles,
              badgeNotEarnedMessage: 'Watch for new route launches',
            },
            priority: 1,
            createdAt: '2024-11-11T16:17:23.784Z',
            updatedAt: '2024-11-11T16:17:23.784Z',
          },
        ],
        title: 'Flight Achievement Gallery',
        locale: 'en',
        description:
          'Your aviation milestones captured in prestigious badges. Each one tells the story of your journey through the skies, from dawn flights to global adventures.',
      },
    ],
  },
};

const gamifiedGroupData = {
  status: 'success',
  data: {
    name: 'Adventure Quest Hub',
    active: true,
    id: '32697712-8dc0-4717-9775-e1f3502acc48',
    createdAt: '2024-11-14T19:14:30.212Z',
    updatedAt: '2024-11-14T19:14:30.212Z',
    sections: [
      {
        details: [],
        defaultLocale: 'en',
        name: 'Player Status',
        type: 'GRID',
        active: true,
        id: 'cc1bf03b-42fd-4276-b543-84ec7a1cc527',
        createdAt: '2024-11-14T19:00:31.894Z',
        updatedAt: '2024-11-15T09:48:37.232Z',
        visibilityCriteria: null,
        priority: 5,
        tiles: [
          {
            tileHeight: 'HALF',
            active: true,
            type: 'CONTENT',
            configuration: {
              defaultLocale: 'en',
              details: [],
              ctaLinkTarget: 'NEW_TAB',
              locale: 'en',
              title: 'Welcome Explorer Graeme!',
              body: 'Your quest for rewards begins! Complete missions and unlock treasures on your journey.',
              ctaLink: '/quests',
            },
            id: 'fb42e341-c477-4b84-a8cf-02aa1f76a351',
            createdAt: '2024-11-14T17:58:13.107Z',
            updatedAt: '2024-11-21T21:44:41.237Z',
            priority: 8,
          },
          {
            tileHeight: 'HALF',
            active: true,
            type: 'TIER',
            configuration: {
              defaultLocale: 'en',
              details: [],
              type: 'CURRENT',
              tierId: '54f0658a-9409-41f7-a508-ca02c6ac23e1',
              progressType: 'NAME',
              tier: {
                id: '5607df63-8e18-4a5c-ab71-06330368c1b3',
                name: 'Master Explorer',
                description: null,
                artworkUrl: golden,
                pointsRequirement: 10000,
              },
              locale: 'en',
              title: 'Adventure Rank',
              pointsSuffix: 'XP',
              emptyArtworkUrl: gamified,
              emptyDescription:
                'Begin your journey to become a Master Explorer!',
              pointsToTierPrefix: 'Gain',
              pointsToTierSuffix: 'XP to reach next rank!',
            },
            id: 'bcd700c0-1288-4117-9ff0-fe2a72913e77',
            createdAt: '2024-11-14T18:06:25.686Z',
            updatedAt: '2024-11-14T18:06:25.686Z',
            priority: 7,
          },
          {
            tileHeight: 'HALF',
            active: true,
            type: 'POINTS',
            configuration: {
              defaultLocale: 'en',
              details: [],
              points: 5600,
              locale: 'en',
              title: 'Adventure Points',
              artworkUrl: ap,
              pointsPrefix: '⚡',
              pointsSuffix: 'AP',
              pointsMultiplier: 1,
            },
            id: '7530fc60-6352-47bc-86a1-8d54e9848fcc',
            createdAt: '2024-11-14T18:07:37.939Z',
            updatedAt: '2024-11-14T18:07:37.939Z',
            priority: 6,
          },
          {
            tileHeight: 'HALF',
            active: true,
            type: 'CONTENT',
            configuration: {
              defaultLocale: 'en',
              details: [],
              ctaLinkTarget: 'NEW_TAB',
              locale: 'en',
              title: 'Daily Quest Bonus!',
              body: 'Complete your daily missions to earn 2X AP! Every adventure brings you closer to legendary rewards!',
              artworkUrl: rollTheDice,

              ctaLink: '/daily-quests',
            },
            id: '288c9873-729e-4766-83fc-1e15cafde6ba',
            createdAt: '2024-11-14T18:44:18.897Z',
            updatedAt: '2024-11-14T18:44:18.897Z',
            priority: 5,
          },
        ],
        title: 'Adventure Dashboard',
        locale: 'en',
        description:
          'Track your progress, unlock achievements, and embark on epic quests!',
      },
      {
        details: [],
        defaultLocale: 'en',
        name: 'Achievement Hall',
        type: 'GRID',
        active: true,
        id: '60a6b9e3-14c7-4b49-a363-b6dc2f16dae0',
        createdAt: '2024-11-11T16:28:32.848Z',
        updatedAt: '2024-11-11T16:28:32.848Z',
        visibilityCriteria: null,
        priority: 4,
        tiles: [
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BADGE',
            configuration: {
              defaultLocale: 'en',
              details: [],
              type: 'SPECIFIC',
              badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
              internalName: 'Legendary Explorer',
              priority: 0,
              status: 'ACTIVE',
              id: '8962205c-e32a-4651-ac7a-4c584449d9fa',
              name: 'Legendary Explorer',
              locale: 'en',
              description:
                'Achieved by reaching the highest Explorer rank and completing 100 quests.',
              artworkUrl:
                'https://images.pexels.com/photos/17333075/pexels-photo-17333075/free-photo-of-man-with-beard-holding-dice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              count: 0,
              awardedDatePrefix: 'Legend status achieved',
              emptyBadgeMessage:
                'Your trophy case awaits its first achievement!',
              emptyBadgeArtworkUrl: numberOne,
              badgeNotEarnedMessage: 'Continue your journey',
            },
            priority: 4,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BADGE',
            configuration: {
              defaultLocale: 'en',
              details: [],
              type: 'SPECIFIC',
              badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
              internalName: 'Legendary Explorer',
              priority: 0,
              status: 'ACTIVE',
              id: '8962205c-e32a-4651-ac7a-4c584449d9fa',
              name: 'Legendary Explorer',
              locale: 'en',
              description:
                'Achieved by reaching the highest Explorer rank and completing 100 quests.',
              artworkUrl:
                'https://images.pexels.com/photos/17333075/pexels-photo-17333075/free-photo-of-man-with-beard-holding-dice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              count: 0,
              awardedDatePrefix: 'Legend status achieved',
              emptyBadgeMessage:
                'Your trophy case awaits its first achievement!',
              emptyBadgeArtworkUrl: numberTwo,
              badgeNotEarnedMessage: 'Continue your journey',
            },
            priority: 4,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BADGE',
            configuration: {
              defaultLocale: 'en',
              details: [],
              type: 'SPECIFIC',
              badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
              internalName: 'Legendary Explorer',
              priority: 0,
              status: 'ACTIVE',
              id: '8962205c-e32a-4651-ac7a-4c584449d9fa',
              name: 'Legendary Explorer',
              locale: 'en',
              description:
                'Achieved by reaching the highest Explorer rank and completing 100 quests.',
              artworkUrl:
                'https://images.pexels.com/photos/17333075/pexels-photo-17333075/free-photo-of-man-with-beard-holding-dice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              count: 0,
              awardedDatePrefix: 'Legend status achieved',
              emptyBadgeMessage:
                'Your trophy case awaits its first achievement!',
              emptyBadgeArtworkUrl: numberThree,
              badgeNotEarnedMessage: 'Continue your journey',
            },
            priority: 4,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BADGE',
            configuration: {
              defaultLocale: 'en',
              details: [],
              type: 'SPECIFIC',
              badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
              internalName: 'Legendary Explorer',
              priority: 0,
              status: 'ACTIVE',
              id: '8962205c-e32a-4651-ac7a-4c584449d9fa',
              name: 'Legendary Explorer',
              locale: 'en',
              description:
                'Achieved by reaching the highest Explorer rank and completing 100 quests.',
              artworkUrl:
                'https://images.pexels.com/photos/17333075/pexels-photo-17333075/free-photo-of-man-with-beard-holding-dice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              count: 0,
              awardedDatePrefix: 'Legend status achieved',
              emptyBadgeMessage:
                'Your trophy case awaits its first achievement!',
              emptyBadgeArtworkUrl: numberFour,
              badgeNotEarnedMessage: 'Continue your journey',
            },
            priority: 4,
          },
          // [Additional achievement badges following similar pattern...]
        ],
        title: 'Hall of Legends',
        locale: 'en',
        description:
          'Showcase your legendary achievements and epic milestones!',
      },
      // [Additional sections with similar gamification elements...]
    ],
  },
};

const mockGroupData = {
  status: 'success',
  data: {
    name: 'Demo Group',
    active: true,
    id: '32697712-8dc0-4717-9775-e1f3502acc48',
    createdAt: '2024-11-14T19:14:30.212Z',
    updatedAt: '2024-11-14T19:14:30.212Z',
    sections: [
      {
        details: [],
        defaultLocale: 'en',
        name: 'Misc Tiles',
        type: 'GRID',
        active: true,
        id: 'cc1bf03b-42fd-4276-b543-84ec7a1cc527',
        createdAt: '2024-11-14T19:00:31.894Z',
        updatedAt: '2024-11-15T09:48:37.232Z',
        visibilityCriteria: null,
        priority: 5,
        tiles: [
          {
            tileHeight: 'HALF',
            active: true,
            type: 'CONTENT',
            configuration: {
              defaultLocale: 'en',
              details: [],
              ctaLinkTarget: 'NEW_TAB',
              locale: 'en',
              title: 'Welcome Graeme',
              body: 'Your culinary adventure awaits, tuck in and start earning!',
              ctaLink: 'https://www.google.com',
            },
            id: 'fb42e341-c477-4b84-a8cf-02aa1f76a351',
            createdAt: '2024-11-14T17:58:13.107Z',
            updatedAt: '2024-11-21T21:44:41.237Z',
            priority: 8,
          },
          {
            tileHeight: 'HALF',
            active: true,
            type: 'TIER',
            configuration: {
              defaultLocale: 'en',
              details: [],
              type: 'CURRENT',
              tierId: '54f0658a-9409-41f7-a508-ca02c6ac23e1',
              progressType: 'NAME',
              tier: {
                id: '5607df63-8e18-4a5c-ab71-06330368c1b3',
                name: 'Platinum',
                description: null,
                artworkUrl: null,
                pointsRequirement: 10000,
              },
              locale: 'en',
              title: 'Your Tier',
              pointsSuffix: 'points',
              emptyArtworkUrl:
                'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
              emptyDescription: 'Oops. You’re not in a tier.',
              pointsToTierPrefix: 'Earn',
              pointsToTierSuffix: 'to achieve this tier.',
            },
            id: 'bcd700c0-1288-4117-9ff0-fe2a72913e77',
            createdAt: '2024-11-14T18:06:25.686Z',
            updatedAt: '2024-11-14T18:06:25.686Z',
            priority: 7,
          },
          {
            tileHeight: 'HALF',
            active: true,
            type: 'POINTS',
            configuration: {
              defaultLocale: 'en',
              details: [],
              points: 5600,
              locale: 'en',
              title: 'Points balance',
              artworkUrl:
                'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
              pointsPrefix: '',
              pointsSuffix: 'pts',
              pointsMultiplier: 1,
            },
            id: '7530fc60-6352-47bc-86a1-8d54e9848fcc',
            createdAt: '2024-11-14T18:07:37.939Z',
            updatedAt: '2024-11-14T18:07:37.939Z',
            priority: 6,
          },
          {
            tileHeight: 'HALF',
            active: true,
            type: 'CONTENT',
            configuration: {
              defaultLocale: 'en',
              details: [],
              ctaLinkTarget: 'NEW_TAB',
              locale: 'en',
              title: '',
              body: 'Every bite brings you closer to rewards! Earn 1 point for every $1 spent!',
              artworkUrl: '',
              ctaLink: 'https://google.co.uk',
            },
            id: '288c9873-729e-4766-83fc-1e15cafde6ba',
            createdAt: '2024-11-14T18:44:18.897Z',
            updatedAt: '2024-11-14T18:44:18.897Z',
            priority: 5,
          },
        ],
        title: 'Profile',
        locale: 'en',
        description:
          'Welcome to WLL Explorer! Find out more about our exciting loyalty program.',
      },
      {
        details: [],
        defaultLocale: 'en',
        name: 'Badge Tiles',
        type: 'GRID',
        active: true,
        id: '60a6b9e3-14c7-4b49-a363-b6dc2f16dae0',
        createdAt: '2024-11-11T16:28:32.848Z',
        updatedAt: '2024-11-11T16:28:32.848Z',
        visibilityCriteria: null,
        priority: 4,
        tiles: [
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BADGE',
            configuration: {
              defaultLocale: 'en',
              details: [],
              type: 'SPECIFIC',
              badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
              internalName: 'Epicurean Elite',
              priority: 0,
              internalDescription: null,
              status: 'ACTIVE',
              id: '8962205c-e32a-4651-ac7a-4c584449d9fa',
              createdAt: '2024-08-06T08:53:24.307Z',
              updatedAt: '2024-08-06T08:53:24.307Z',
              name: 'Epicurean Elite',
              locale: 'en',
              description:
                'Granted to those who achieve the highest tier in the loyalty program.',
              artworkUrl:
                'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
              count: 0,
              awardedDatePrefix: 'Awarded',
              emptyBadgeMessage: 'You haven’t earned any badges yet.',
              emptyBadgeArtworkUrl:
                'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
              badgeNotEarnedMessage: 'Badge not earned yet',
            },
            id: '902258a6-f7af-4da5-9069-43042ac1a326',
            createdAt: '2024-11-11T16:17:23.784Z',
            updatedAt: '2024-11-11T16:17:23.784Z',
            priority: 4,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BADGE',
            configuration: {
              defaultLocale: 'en',
              details: [],
              type: 'SPECIFIC',
              badgeId: 'd3a2b1fa-3963-4117-8c6f-69e5f8fea009',
              internalName: 'Tasty Trailblazer',
              priority: 0,
              status: 'ACTIVE',
              id: '79021b66-a7cf-4809-bef9-872467c0cd66',
              createdAt: '2024-08-06T08:52:49.093Z',
              updatedAt: '2024-08-06T08:52:49.093Z',
              name: 'Tasty Trailblazer',
              locale: 'en',
              description:
                'Awarded for being among the first to try new menu items.',
              artworkUrl:
                'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
              count: 1,
              awardedDatePrefix: 'Earned on',
              emptyBadgeMessage: 'You haven’t earned any badges yet.',
              emptyBadgeArtworkUrl: 'You haven’t earned any badges yet.',
              badgeNotEarnedMessage: 'Badge not earned yet',
            },
            id: '29b1982c-2774-4ce6-9712-c8732e790dbf',
            createdAt: '2024-11-11T16:18:47.130Z',
            updatedAt: '2024-11-11T16:18:47.130Z',
            priority: 3,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BADGE',
            configuration: {
              defaultLocale: 'en',
              details: [],
              type: 'SPECIFIC',
              badgeId: '30528c0a-30c2-44aa-9640-25647b8a594c',
              internalName: 'Flavour Fanatic',
              priority: 0,
              status: 'ACTIVE',
              id: '656539e7-0b33-4952-8cff-8fbca4883621',
              createdAt: '2024-08-06T08:43:13.594Z',
              updatedAt: '2024-08-06T08:51:48.468Z',
              name: 'Flavour Fanatic',
              locale: 'en',
              description: ' Earned by frequently rating or reviewing dishes.',
              artworkUrl:
                'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
              count: 1,
              awardedDatePrefix: 'Swindled on',
              emptyBadgeMessage: 'You haven’t earned any badges yet.',
              emptyBadgeArtworkUrl:
                'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
              badgeNotEarnedMessage: 'Badge not earned yet',
            },
            id: '87ada9f9-5a9f-4dde-a9bc-12dec8385a7f',
            createdAt: '2024-11-11T16:21:30.457Z',
            updatedAt: '2024-11-11T16:21:30.457Z',
            priority: 2,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BADGE',
            configuration: {
              defaultLocale: 'en',
              details: [],
              type: 'SPECIFIC',
              badgeId: '84bd0af7-bef3-4201-8541-d60431116597',
              internalName: 'Gourmet Explorer',
              priority: 0,
              status: 'ACTIVE',
              id: '4570996f-5af5-4adb-a59f-67c817cc5874',
              createdAt: '2024-08-06T08:50:54.043Z',
              updatedAt: '2024-08-06T08:50:54.043Z',
              name: 'Gourmet Explorer',
              locale: 'en',
              description:
                'Awarded for trying a diverse range of menu items or cuisines.',
              artworkUrl:
                'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
              count: 3,
              awardedDatePrefix: 'Swiped upon',
              emptyBadgeMessage: 'You haven’t earned any badges yet.',
              emptyBadgeArtworkUrl:
                'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
              badgeNotEarnedMessage: 'Badge not earned yet',
            },
            id: '9d4cd1a7-637d-4a53-8a83-69a458d86f69',
            createdAt: '2024-11-11T16:22:51.819Z',
            updatedAt: '2024-11-11T16:22:51.819Z',
            priority: 1,
          },
        ],
        title: 'Achievement Gallery',
        locale: 'en',
        description:
          "Your achievements, but make them sparkle. Each badge here is a little piece of bragging rights you've earned along the way. ",
        pointsPrefix: 'Ca$h',
        pointsSuffix: 'pts',
        pointsMultiplier: 1,
      },
      {
        details: [],
        defaultLocale: 'en',
        name: 'Reward Tiles Updated',
        type: 'GRID',
        active: true,
        id: '852785cf-d72a-4c62-b9d0-989a035610c3',
        createdAt: '2024-11-14T19:09:04.432Z',
        updatedAt: '2024-11-14T19:28:23.150Z',
        visibilityCriteria: null,
        priority: 3,
        tiles: [
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD',
            configuration: {
              defaultLocale: 'en',
              details: [],
              rewardId: 'cb39dd5e-bdd9-4595-a924-4f2dfb36c53b',
              showPrice: true,
              showArtwork: true,
              showDetails: true,
              name: 'Chicken Noodles',
              pictureUrl:
                'https://ucarecdn.com/ea0a6ca5-1ede-4ab4-a304-54a1c401eef8/',
              price: 10,
              availability: {
                start: '2023-05-05T13:49:36.490Z',
                end: null,
              },
              purchasable: true,
              priority: 100,
              value: 1000,
              type: 'VOUCHER',
              codeType: 'HUMAN',
              hideCode: false,
              notificationConfig: null,
              id: 'cb39dd5e-bdd9-4595-a924-4f2dfb36c53b',
              createdAt: '2023-05-05T13:50:30.598Z',
              updatedAt: '2024-11-14T19:30:08.744Z',
              summary: 'Test',
              redemptionMessage: null,
              metadata: null,
              visibilityCriteria: null,
              code: null,
              purchaseExpiration: null,
              tier: null,
              category: {
                name: 'Chicken Salad',
                priority: 0,
                type: 'REWARD',
                details: null,
                defaultLocale: 'en',
                id: '677b6b88-d97c-4b8d-80f4-88b04c86948f',
                createdAt: '2023-05-05T10:39:57.595Z',
                updatedAt: '2023-05-05T10:39:57.595Z',
                description: null,
                metadata: null,
                pictureUrl:
                  'https://ucarecdn.com/9cda5d3c-75f4-48f0-9f3f-1ece144f6136/',
              },
              discounts: [],
              artworkUrl:
                'https://ucarecdn.com/ea0a6ca5-1ede-4ab4-a304-54a1c401eef8/',
            },
            id: 'bacda827-cdb9-4e30-b783-6c0a3f7e718f',
            createdAt: '2024-11-14T18:49:10.387Z',
            updatedAt: '2024-11-14T18:49:10.387Z',
            priority: 4,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD',
            configuration: {
              defaultLocale: 'en',
              details: [],
              rewardId: 'f7ce508f-ca52-46ff-bfb7-03e3761feb4a',
              showPrice: true,
              showArtwork: true,
              showDetails: true,
              name: 'Sweet Chilli Lobster Noodles',
              pictureUrl:
                'https://ucarecdn.com/a486d015-b4ab-4831-bfa5-68f5bbbf63b1/',
              price: 1000,
              availability: {
                start: '2023-05-05T15:10:31.274Z',
                end: null,
              },
              purchasable: true,
              priority: 10,
              value: 800,
              type: 'VOUCHER',
              codeType: 'HUMAN',
              hideCode: false,
              notificationConfig: null,
              id: 'f7ce508f-ca52-46ff-bfb7-03e3761feb4a',
              createdAt: '2023-05-05T15:11:42.342Z',
              updatedAt: '2024-11-14T19:39:16.764Z',
              summary: 'test',
              redemptionMessage: null,
              metadata: null,
              visibilityCriteria: null,
              code: null,
              purchaseExpiration: null,
              tier: null,
              category: {
                name: 'Chicken Salad',
                priority: 0,
                type: 'REWARD',
                details: null,
                defaultLocale: 'en',
                id: '677b6b88-d97c-4b8d-80f4-88b04c86948f',
                createdAt: '2023-05-05T10:39:57.595Z',
                updatedAt: '2023-05-05T10:39:57.595Z',
                description: null,
                metadata: null,
                pictureUrl:
                  'https://ucarecdn.com/9cda5d3c-75f4-48f0-9f3f-1ece144f6136/',
              },
              discounts: [],
              artworkUrl:
                'https://ucarecdn.com/a486d015-b4ab-4831-bfa5-68f5bbbf63b1/',
            },
            id: '5c2c7a46-c662-43c9-b6e4-0d5b470e4904',
            createdAt: '2024-11-14T18:49:00.659Z',
            updatedAt: '2024-11-14T18:49:00.659Z',
            priority: 3,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD',
            configuration: {
              defaultLocale: 'en',
              details: [],
              rewardId: 'e8d63f0b-7911-4275-9651-441840a18b18',
              showPrice: true,
              showArtwork: true,
              showDetails: true,
              name: 'Sesame Salmon Noodles',
              pictureUrl:
                'https://ucarecdn.com/42216985-1225-46f5-bec6-6ff50841fc24/',
              price: 10,
              availability: {
                start: '2023-05-05T15:11:51.211Z',
                end: null,
              },
              purchasable: true,
              priority: 10,
              value: 1000,
              type: 'VOUCHER',
              codeType: 'HUMAN',
              hideCode: false,
              notificationConfig: null,
              id: 'e8d63f0b-7911-4275-9651-441840a18b18',
              createdAt: '2023-05-05T15:12:45.405Z',
              updatedAt: '2024-07-17T10:44:53.570Z',
              summary: 'Test',
              redemptionMessage: null,
              metadata: null,
              visibilityCriteria: null,
              code: null,
              purchaseExpiration: null,
              tier: null,
              category: {
                name: 'Chicken Salad',
                priority: 0,
                type: 'REWARD',
                details: null,
                defaultLocale: 'en',
                id: '677b6b88-d97c-4b8d-80f4-88b04c86948f',
                createdAt: '2023-05-05T10:39:57.595Z',
                updatedAt: '2023-05-05T10:39:57.595Z',
                description: null,
                metadata: null,
                pictureUrl:
                  'https://ucarecdn.com/9cda5d3c-75f4-48f0-9f3f-1ece144f6136/',
              },
              discounts: [],
              artworkUrl:
                'https://ucarecdn.com/42216985-1225-46f5-bec6-6ff50841fc24/',
            },
            id: '0b7fa0b4-a6d5-4a2b-af21-910121bf7efa',
            createdAt: '2024-11-14T18:48:45.931Z',
            updatedAt: '2024-11-14T18:48:45.931Z',
            priority: 2,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD',
            configuration: {
              defaultLocale: 'en',
              details: [],
              rewardId: '56254b8a-f142-4131-a396-6b313cac651d',
              showPrice: true,
              showArtwork: true,
              showDetails: true,
              name: 'Thai Chicken Peanut Noodles',
              pictureUrl:
                'https://ucarecdn.com/0c4d4474-baf7-4563-bb02-ad67d803a970/',
              price: 10,
              availability: {
                start: '2022-10-25T14:23:10.021Z',
                end: null,
              },
              purchasable: true,
              priority: 0,
              value: 1000,
              type: 'VOUCHER',
              codeType: 'HUMAN',
              hideCode: false,
              notificationConfig: null,
              id: '56254b8a-f142-4131-a396-6b313cac651d',
              createdAt: '2022-10-25T14:24:55.591Z',
              updatedAt: '2023-05-05T14:55:21.691Z',
              summary: 'An easy, healthy meal you will love!',
              redemptionMessage: null,
              metadata: null,
              visibilityCriteria: null,
              code: null,
              purchaseExpiration: null,
              tier: null,
              category: {
                name: 'Noodle Salad',
                priority: 0,
                type: 'REWARD',
                details: null,
                defaultLocale: 'en',
                id: 'b6dca41a-9e8b-45d9-83ce-4f3cf2aa32e0',
                createdAt: '2023-05-05T10:40:19.837Z',
                updatedAt: '2023-05-05T15:20:15.402Z',
                description: null,
                metadata: null,
                pictureUrl:
                  'https://ucarecdn.com/0bd46eee-97b1-4f4d-943a-32d8005d62e1/',
              },
              discounts: [
                {
                  id: 'feb17453-5600-4b64-8aed-1f101797e0f6',
                  type: 'PERCENTAGE',
                  value: '1000',
                  sku: null,
                  productSku: null,
                },
              ],
              artworkUrl:
                'https://ucarecdn.com/0c4d4474-baf7-4563-bb02-ad67d803a970/',
            },
            id: 'ff4a431d-3626-4515-baef-0794e69f9e53',
            createdAt: '2024-11-14T19:24:32.976Z',
            updatedAt: '2024-11-14T19:24:32.976Z',
            priority: 1,
          },
        ],
        title: 'Just Added',
        locale: 'en',
        description:
          'Fresh flavors and new rewards added weekly. Your next food adventure awaits!',
      },
      {
        details: [],
        defaultLocale: 'en',
        name: 'Reward Category Tiles',
        type: 'GRID',
        active: true,
        id: 'c7671657-8634-4b2f-8c25-49022ba4f950',
        createdAt: '2024-11-14T19:11:03.930Z',
        updatedAt: '2024-11-14T19:29:02.516Z',
        visibilityCriteria: null,
        priority: 2,
        tiles: [
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD_CATEGORY',
            configuration: {
              details: [],
              rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
              allowDecorationOverlay: true,
              showName: true,
              showArtwork: true,
              artworkUrl:
                'https://ucarecdn.com/9efdd2f9-0e76-4634-8713-f20510415268/',
              name: 'Multi Salad',
            },
            id: 'f57f2f98-cabf-4b81-82ac-a0249172d65c',
            createdAt: '2024-10-18T14:40:37.835Z',
            updatedAt: '2024-10-18T14:40:37.835Z',
            priority: 8,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD_CATEGORY',
            configuration: {
              details: [],
              rewardCategoryId: 'e2aa1cab-60c3-4fad-adfb-88f1f7bc6825',
              allowDecorationOverlay: true,
              showName: false,
              showArtwork: true,
              artworkUrl:
                'https://ucarecdn.com/c840ef87-e737-4038-ae27-042088f88ea4/',
              name: 'Peanut Crunch Chicken Noodle Salad',
            },
            id: 'ed598f88-cda4-4b3d-930e-3d38bf0a0fc2',
            createdAt: '2024-10-18T14:41:02.719Z',
            updatedAt: '2024-10-18T14:41:02.719Z',
            priority: 7,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD_CATEGORY',
            configuration: {
              details: [],
              rewardCategoryId: '257c8c80-00a0-4512-ab15-235d6fd8f749',
              allowDecorationOverlay: true,
              showName: false,
              showArtwork: true,
              artworkUrl:
                'https://ucarecdn.com/2b20b6a1-ee34-40b7-b57f-9a45e21befe4/',
              name: 'Firecracker Chicken Noodle Salad',
            },
            id: 'e0945f47-8d89-4d7c-bf70-9b91d41f97b6',
            createdAt: '2024-10-18T14:41:20.515Z',
            updatedAt: '2024-10-18T14:41:20.515Z',
            priority: 6,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD_CATEGORY',
            configuration: {
              details: [],
              rewardCategoryId: '0251ca85-d75a-4293-a0f9-ad7f86a1ca3d',
              allowDecorationOverlay: true,
              showName: false,
              showArtwork: true,
              artworkUrl:
                'https://ucarecdn.com/a5dde823-44ba-42bc-8391-8b7fea0ccc9f/',
              name: 'Thai Noodle Salads',
            },
            id: '0132a078-4398-41f2-aea9-8d32a43193ac',
            createdAt: '2024-10-18T14:41:37.328Z',
            updatedAt: '2024-10-18T14:41:37.328Z',
            priority: 5,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD_CATEGORY',
            configuration: {
              details: [],
              rewardCategoryId: '1a7e0123-4f3e-4bf5-8bea-fb7ba98e0df3',
              allowDecorationOverlay: true,
              showName: false,
              showArtwork: true,
              artworkUrl:
                'https://ucarecdn.com/b2946fef-3f11-47c2-822f-6880de60cc18/',
              name: 'Japanese Miso Chicken Peanut Salad',
            },
            id: 'e00fdd09-cb16-4d78-8279-2ac02935952b',
            createdAt: '2024-10-18T14:41:53.020Z',
            updatedAt: '2024-10-18T14:41:53.020Z',
            priority: 4,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD_CATEGORY',
            configuration: {
              details: [],
              rewardCategoryId: 'ea38991c-1d2b-4d89-851b-123201ca2249',
              allowDecorationOverlay: true,
              showName: false,
              showArtwork: true,
              artworkUrl:
                'https://ucarecdn.com/b748969f-316a-46c6-aa9c-580c3539f2f2/',
              name: 'Seafood Salad',
            },
            id: '051426fa-3cf8-4b74-b8a4-34c40e2d2903',
            createdAt: '2024-10-18T14:42:11.381Z',
            updatedAt: '2024-10-18T14:42:11.381Z',
            priority: 3,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BANNER',
            configuration: {
              details: [],
              title: 'New iPhone 15 Pro',
              ctaLink: '/products/iphone15pro',
              ctaText: 'Shop Now',
              artworkUrl:
                'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/iphone-15-pro-wallpaper-2.webp?w=1500&quality=82&strip=all&ssl=1',
              description:
                'Experience the power of our most advanced iPhone yet. Available now with exclusive launch offers.',
              ctaLinkTarget: 'SAME_FRAME',
            },
            id: '8854230a-222a-42a2-b34a-d6db9f9218bf',
            createdAt: '2024-10-17T11:33:09.167Z',
            updatedAt: '2024-10-17T11:33:09.167Z',
            priority: 3,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BANNER',
            configuration: {
              details: [],
              title: 'Unlock Your Rewards',
              ctaLink: '#member-card',
              ctaText: 'View Rewards',
              artworkUrl:
                'https://images.pexels.com/photos/39389/keyboard-key-success-online-39389.jpeg',
              description:
                'You have 5000 points waiting! Redeem now for exclusive discounts and perks.',
              ctaLinkTarget: 'SAME_FRAME',
            },
            id: '076015e9-74cb-4c2a-8f50-9e661abb9c66',
            createdAt: '2024-10-17T11:36:48.595Z',
            updatedAt: '2024-10-17T11:36:48.595Z',
            priority: 2,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD_CATEGORY',
            configuration: {
              details: [],
              rewardCategoryId: '3be7a630-556b-490f-b00f-f8f162875b56',
              allowDecorationOverlay: true,
              showName: false,
              showArtwork: true,
              artworkUrl:
                'https://ucarecdn.com/9b86476f-a70e-4423-94df-4c0bda8ef867/',
              name: 'Burger Joints',
            },
            id: '0b75ab9e-0734-46c2-b847-c8a9a7bfa17b',
            createdAt: '2024-10-18T14:42:38.830Z',
            updatedAt: '2024-10-18T14:42:38.830Z',
            priority: 2,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'REWARD_CATEGORY',
            configuration: {
              details: [],
              rewardCategoryId: '7597ec32-bc50-4d10-bb33-4d193d11f641',
              allowDecorationOverlay: true,
              showName: true,
              showArtwork: true,
              artworkUrl:
                'https://ucarecdn.com/f19e08e3-49fc-4e86-b023-50f20101075f/',
              name: 'Asian Food',
            },
            id: '62a2dea5-5a26-4b52-b7ab-6cdd12b318d3',
            createdAt: '2024-10-18T14:42:58.657Z',
            updatedAt: '2024-10-18T14:42:58.657Z',
            priority: 1,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BANNER',
            configuration: {
              details: [],
              title: 'TechCon 2024',
              ctaLink: 'https://techcon2024.com/register',
              ctaText: 'Register Now',
              artworkUrl:
                'https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg',
              description:
                'Join the biggest tech conference of the year. Keynotes, workshops, and networking opportunities await!',
              ctaLinkTarget: 'NEW_TAB',
            },
            id: 'dfbb2ac3-533f-4bc8-a9bf-c143249ab5d3',
            createdAt: '2024-10-17T11:36:54.141Z',
            updatedAt: '2024-10-17T11:36:54.141Z',
            priority: 1,
          },
        ],
        title: 'Reward category',
        locale: 'en',
        description:
          'Welcome to WLL Explorer! Find out more about our exciting loyalty program.',
      },
      {
        details: [],
        defaultLocale: 'en',
        name: 'Banner Section',
        type: 'BANNER',
        active: true,
        id: '6cf0f959-a758-41bf-b99e-93d9b689a5d9',
        createdAt: '2024-11-11T16:44:57.197Z',
        updatedAt: '2024-11-11T16:44:57.197Z',
        visibilityCriteria: null,
        priority: 1,
        tiles: [
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BANNER',
            configuration: {
              defaultLocale: 'en',
              details: [],
              ctaLinkTarget: 'SAME_FRAME',
              locale: 'en',
              title: 'New iPhone 15 Pro',
              ctaLink: '/products/iphone15pro',
              ctaText: 'Shop Now',
              artworkUrl:
                'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/iphone-15-pro-wallpaper-2.webp?resize=1200%2C628&quality=82&strip=all&ssl=1',
              description:
                'Experience the power of our most advanced iPhone yet. Available now with exclusive launch offers.',
            },
            id: '8f28093b-6251-4ea9-a43b-1c9a9fe1e181',
            createdAt: '2024-11-08T15:02:53.149Z',
            updatedAt: '2024-11-08T15:02:53.149Z',
            priority: 3,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BANNER',
            configuration: {
              defaultLocale: 'en',
              details: [],
              ctaLinkTarget: 'SAME_FRAME',
              locale: 'en',
              title: 'Unlock Your Rewards',
              ctaLink: '#member-card',
              ctaText: 'View Rewards',
              artworkUrl:
                'https://images.pexels.com/photos/39389/keyboard-key-success-online-39389.jpeg',
              description:
                'You have 5000 points waiting! Redeem now for exclusive discounts and perks.',
            },
            id: 'ec7d5b2d-1dff-4491-a936-4f5acc1c5a44',
            createdAt: '2024-11-08T15:03:03.906Z',
            updatedAt: '2024-11-08T15:03:03.906Z',
            priority: 2,
          },
          {
            tileHeight: 'FULL',
            active: true,
            type: 'BANNER',
            configuration: {
              defaultLocale: 'en',
              details: [],
              ctaLinkTarget: 'NEW_TAB',
              locale: 'en',
              title: 'TechCon 2024',
              ctaLink: 'https://techcon2024.com/register',
              ctaText: 'Register Now',
              artworkUrl:
                'https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg',
              description:
                'Join the biggest tech conference of the year. Keynotes, workshops, and networking opportunities await!',
            },
            id: 'a1e7f8e8-f4d0-4c5b-a018-cca673fadc2c',
            createdAt: '2024-11-08T15:03:22.485Z',
            updatedAt: '2024-11-08T15:03:22.485Z',
            priority: 1,
          },
        ],
        title: 'Highlights Hub',
        locale: 'en',
        description:
          'Your front-row seat to all things exciting. Discover special events, unlock rewards, and stay in the know with our latest and greatest offerings – all in one place.',
        pointsMultiplier: 1,
      },
    ],
  },
};

const mockEmptyGroupData = {
  status: 'success',
  data: null,
};

const mockEmptySectionsData = {
  status: 'success',
  data: {
    name: 'Empty Sections Group',
    active: true,
    id: '29719640-b1ee-4b3c-b746-e563bc136769',
    createdAt: '2024-10-15T14:21:06.135Z',
    updatedAt: '2024-10-16T10:00:09.823Z',
    sections: [],
  },
};

const meta: Meta<typeof Group> = {
  title: 'components/organisms/Group',
  component: Group,
  decorators: [
    (Story, context) => {
      const [currentTheme, setCurrentTheme] = React.useState(
        themes[context.globals.theme as keyof typeof themes] || defaultTheme
      );

      React.useEffect(() => {
        const newTheme =
          themes[context.globals.theme as keyof typeof themes] || defaultTheme;
        setCurrentTheme(newTheme);
      }, [context.globals.theme]);

      const mockData = context.parameters.mockData?.[0]?.response || null;

      const config = {
        apiKey: 'test-api-key',
        fetcher: async () => mockData,
      };

      return (
        <WllSdkProvider config={config} theme={currentTheme}>
          <Story />
        </WllSdkProvider>
      );
    },
  ],
  parameters: {
    mockData: [{ response: mockGroupData }],
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Group>;

export default meta;

type Story = StoryObj<typeof Group>;

export const EmptyGroup: Story = {
  args: {
    id: 'empty-group-id',
  },
  parameters: {
    mockData: [{ response: mockEmptyGroupData }],
  },
};

export const EmptySections: Story = {
  args: {
    id: 'empty-sections-id',
  },
  parameters: {
    mockData: [{ response: mockEmptySectionsData }],
  },
};

export const FullGroup: Story = {
  args: {
    id: 'full-group-id',
  },
  parameters: {
    mockData: [{ response: mockGroupData }],
  },
};

export const GamificationFullGroup: Story = {
  args: {
    id: 'gamifiedfull-group-id',
  },
  parameters: {
    mockData: [{ response: gamifiedGroupData }],
  },
};
export const AirMilesTravelFullGroup: Story = {
  args: {
    id: 'air-miles-travel-group-id',
  },
  parameters: {
    mockData: [{ response: programData }],
  },
};
