import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { WllSdkProvider } from '../../../context/WllSdkContext';
import { defaultTheme } from '../../../utils/styling';

// @ts-ignore
// @ts-ignore
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
import avionPoints from '../../../assets/avion-points.png';

// @ts-ignore

import { themes } from '../../../utils/themeHelpers';
import Group from './index';
import { createContentTileMock } from '../../../mocks/tiles';
import { CTALinkTarget, TileHeight } from '../../../types/tile';

const programData = {
  status: 'success',
  data: {
    name: 'SkyRewards Elite',
    sections: [
      {
        name: 'Travel Status',
        type: 'GRID',
        active: true,
        title: 'Travel Dashboard',
        description:
          'Track your miles, unlock premium benefits, and explore exclusive travel perks!',
        tiles: [
          {
            active: true,
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
            tileHeight: 'HALF',
            type: 'POINTS',
            active: true,
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
            tileHeight: 'HALF',
            type: 'TIER',
            active: true,
            configuration: {
              title: 'Elite Status',
              type: 'CURRENT',
              tier: {
                name: 'Aviator',
                pointsRequirement: 100000,
                artworkUrl: avionPoints,
              },
              pointsSuffix: 'miles',

              pointsToTierPrefix: 'Earn',
              pointsToTierSuffix: 'miles for Platinum status!',
              emptyDescription: 'Start your journey to Elite status!',
            },
          },
          {
            tileHeight: 'FULL',
            active: true,
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
            active: true,
            type: 'CONTENT',
            configuration: {
              title: '2X Miles Bonus!',
              body: 'Book your next flight by December 31st to earn double miles! Perfect for reaching Platinum status faster.',
              ctaLink: '/book-flight',
            },
          },
          {
            tileHeight: 'HALF',
            active: true,
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
            type: 'REWARD_CATEGORY',
            active: true,
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
            type: 'REWARD_CATEGORY',
            active: true,
            configuration: {
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
            type: 'REWARD_CATEGORY',
            active: true,
            configuration: {
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
            type: 'REWARD_CATEGORY',
            active: true,
            configuration: {
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
              lastEarnedAt: '2024-11-11T16:17:23.784Z',
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
              lastEarnedAt: '2024-11-11T16:17:23.784Z',
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
              lastEarnedAt: '2024-11-11T16:17:23.784Z',
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
              lastEarnedAt: '2024-11-11T16:17:23.784Z',
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
    sections: [
      {
        name: 'Adventure Status',
        type: 'GRID',
        active: true,
        title: 'Quest Dashboard',
        description:
          'Track your experience points, unlock legendary abilities, and discover epic quests!',
        tiles: [
          {
            tileHeight: 'FULL',
            type: 'CONTENT',
            active: true,
            configuration: {
              artworkUrl:
                'https://images.pexels.com/photos/17333075/pexels-photo-17333075/free-photo-of-man-with-beard-holding-dice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              title: 'Brave Adventurer!',
              body: 'Your epic quest for rewards begins here! Complete missions, gain experience, and unlock legendary treasures along your journey.',
              ctaLink: '/my-quests',
              ctaLinkTarget: 'NEW_TAB',
            },
          },
          {
            tileHeight: 'HALF',
            type: 'POINTS',
            active: true,
            configuration: {
              title: 'Experience Points',
              points: 5600,
              artworkUrl: ap,
              pointsPrefix: '⚔️',
              pointsSuffix: 'XP',
              pointsMultiplier: 1,
            },
          },
          {
            tileHeight: 'HALF',
            type: 'TIER',
            active: true,
            configuration: {
              title: 'Character Level',
              type: 'CURRENT',
              tier: {
                name: 'Master Adventurer',
                pointsRequirement: 10000,
              },
              pointsSuffix: 'XP',
              pointsToTierPrefix: 'Gain',
              pointsToTierSuffix: 'XP to reach next level!',
              emptyDescription: 'Begin your journey to become a legend!',
            },
          },
          {
            tileHeight: 'FULL',
            type: 'CONTENT',
            active: true,
            configuration: {
              artworkUrl:
                'https://images.pexels.com/photos/5477775/pexels-photo-5477775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              title: 'Daily Quest Board',
              body: 'New adventures await! Check the quest board daily for fresh challenges and bonus rewards.',
              ctaLink: '/daily-quests',
              ctaLinkTarget: 'NEW_TAB',
            },
          },
          {
            tileHeight: 'HALF',
            type: 'CONTENT',
            active: true,
            configuration: {
              title: '2X XP Event!',
              body: 'The stars align! Complete quests by Winter Solstice to earn double experience points! Perfect for reaching Master rank faster.',
              ctaLink: '/special-events',
            },
          },
          {
            tileHeight: 'HALF',
            type: 'CONTENT',
            active: true,
            configuration: {
              title: 'Your Class Abilities',
              body: 'Access your special powers: Fast Travel, Extra Inventory Space, Legendary Item Crafting, and more!',
              ctaLink: '/abilities',
            },
          },
        ],
      },
      {
        name: 'Quest Categories',
        type: 'GRID',
        active: true,
        title: 'Available Adventures',
        description:
          'Embark on epic quests across magical realms and earn legendary rewards!',
        tiles: [
          {
            tileHeight: 'FULL',
            type: 'REWARD_CATEGORY',
            active: true,
            configuration: {
              rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
              allowDecorationOverlay: true,
              showName: true,
              showArtwork: true,
              artworkUrl:
                'https://images.pexels.com/photos/6039245/pexels-photo-6039245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              name: 'Dragon Slayer Missions',
            },
          },
          {
            tileHeight: 'FULL',
            type: 'REWARD_CATEGORY',
            active: true,
            configuration: {
              rewardCategoryId: 'e2aa1cab-60c3-4fad-adfb-88f1f7bc6825',
              allowDecorationOverlay: true,
              showName: true,
              showArtwork: true,
              artworkUrl:
                'https://images.pexels.com/photos/5477778/pexels-photo-5477778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              name: 'Mystic Tower Challenges',
            },
          },
          {
            tileHeight: 'FULL',
            type: 'REWARD_CATEGORY',
            active: true,
            configuration: {
              rewardCategoryId: '257c8c80-00a0-4512-ab15-235d6fd8f749',
              allowDecorationOverlay: true,
              showName: true,
              showArtwork: true,
              artworkUrl:
                'https://images.pexels.com/photos/5477896/pexels-photo-5477896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              name: 'Enchanted Forest Expeditions',
            },
          },
          {
            tileHeight: 'FULL',
            type: 'REWARD_CATEGORY',
            active: true,
            configuration: {
              rewardCategoryId: '0251ca85-d75a-4293-a0f9-ad7f86a1ca3d',
              allowDecorationOverlay: true,
              showName: true,
              showArtwork: true,
              artworkUrl:
                'https://images.pexels.com/photos/5477764/pexels-photo-5477764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              name: 'Legendary Item Crafting',
            },
          },
        ],
      },
      {
        name: 'Achievement Badges',
        type: 'GRID',
        active: true,
        title: 'Hall of Legends',
        description:
          'Your heroic deeds immortalized in legendary badges. Each one tells the tale of your epic adventures across the realms.',
        tiles: [
          {
            tileHeight: 'FULL',
            type: 'BADGE',
            active: true,
            configuration: {
              type: 'SPECIFIC',
              badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
              name: 'Dragon Slayer',
              description:
                'Achieved by defeating 100 dragons in combat. A true master of dragon-slaying techniques.',
              artworkUrl: numberOne,
              count: 0,
              awardedDatePrefix: 'Dragon Master since',
              createdAt: '2024-08-06T08:52:49.093Z',
              updatedAt: '2024-08-06T08:52:49.093Z',
              emptyBadgeMessage: 'Your first dragon awaits!',
              emptyBadgeArtworkUrl: numberOne,
              badgeNotEarnedMessage: 'Continue hunting dragons',
              lastEarnedAt: '2024-11-11T16:17:23.784Z',
            },
          },
          {
            tileHeight: 'FULL',
            type: 'BADGE',
            active: true,
            configuration: {
              type: 'SPECIFIC',
              badgeId: 'd3a2b1fa-3963-4117-8c6f-69e5f8fea009',
              name: 'Archmage',
              description:
                'Earned by mastering 50 powerful spells. A wielder of ancient magics who shapes reality itself.',
              artworkUrl: numberTwo,
              count: 1,
              awardedDatePrefix: 'Archmage since',
              emptyBadgeMessage: 'Begin your magical studies',
              createdAt: '2024-08-06T08:52:49.093Z',
              updatedAt: '2024-08-06T08:52:49.093Z',
              emptyBadgeArtworkUrl: numberTwo,
              badgeNotEarnedMessage: 'Master more spells to unlock',
              lastEarnedAt: '2024-11-11T16:17:23.784Z',
            },
          },
          {
            tileHeight: 'FULL',
            type: 'BADGE',
            active: true,
            configuration: {
              type: 'SPECIFIC',
              badgeId: '30528c0a-30c2-44aa-9640-25647b8a594c',
              name: 'Dungeon Delver',
              description:
                'Awarded for completing 25 legendary dungeons. A master of dungeon exploration who uncovers ancient treasures.',
              artworkUrl: numberThree,
              count: 1,
              awardedDatePrefix: 'Delver since',
              createdAt: '2024-08-06T08:52:49.093Z',
              updatedAt: '2024-08-06T08:52:49.093Z',
              emptyBadgeMessage: 'Your first dungeon awaits!',
              emptyBadgeArtworkUrl: numberThree,
              badgeNotEarnedMessage: 'More dungeons to explore',
              lastEarnedAt: '2024-11-11T16:17:23.784Z',
            },
          },
          {
            tileHeight: 'FULL',
            type: 'BADGE',
            active: true,
            configuration: {
              type: 'SPECIFIC',
              badgeId: '84bd0af7-bef3-4201-8541-d60431116597',
              name: 'Realm Pioneer',
              description:
                'Granted for being among the first 100 adventurers to discover a new realm. A trailblazer who charts unknown territories.',
              artworkUrl: numberFour,
              count: 3,
              awardedDatePrefix: 'Pioneer since',
              createdAt: '2024-08-06T08:52:49.093Z',
              updatedAt: '2024-08-06T08:52:49.093Z',
              emptyBadgeMessage: 'New realms await discovery',
              emptyBadgeArtworkUrl: numberFour,
              badgeNotEarnedMessage: 'Watch for new realm openings',
              lastEarnedAt: '2024-11-11T16:17:23.784Z',
            },
          },
        ],
      },
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
            type: 'CONTENT',
            active: true,
            configuration: {
              title: 'Welcome Graeme!',
              body: 'Your culinary adventure begins here! Earn points on every dish and unlock exclusive dining perks.',
              ctaLink: '/my-rewards',
              ctaLinkTarget: 'NEW_TAB',
            },
          },
          {
            tileHeight: 'HALF',
            type: 'POINTS',
            active: true,
            configuration: {
              title: 'Dining Points',
              points: 5600,
              artworkUrl:
                'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
              pointsPrefix: '',
              pointsSuffix: 'pts',
              pointsMultiplier: 1,
            },
          },
          {
            tileHeight: 'HALF',
            type: 'TIER',
            active: true,
            configuration: {
              title: 'Gourmet Status',
              type: 'CURRENT',
              tier: {
                name: 'Master Chef',
                pointsRequirement: 10000,
              },
              pointsSuffix: 'points',
              pointsToTierPrefix: 'Earn',
              pointsToTierSuffix: 'points for Master Chef status!',
              emptyDescription: 'Start your journey to culinary excellence!',
            },
          },
          {
            tileHeight: 'HALF',
            type: 'CONTENT',
            active: true,
            configuration: {
              title: 'Double Points!',
              body: 'Dine at our featured restaurants this week to earn 2X points! Perfect for reaching Master Chef status faster.',
              ctaLink: '/featured-restaurants',
            },
          },
          {
            tileHeight: 'FULL',
            type: 'CONTENT',
            active: true,
            configuration: {
              title: "Chef's Table!",
              body: "Join our exclusive wine and dine experiences! From chef's table events to cooking masterclasses!",
              artworkUrl:
                'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              ctaLink: '/events',
              ctaLinkTarget: 'NEW_TAB',
            },
          },
          {
            tileHeight: 'FULL',
            type: 'CONTENT',
            active: true,
            configuration: {
              title: 'Foodie Benefits',
              body: 'Enjoy premium perks with your current status: Priority Reservations and more!',
              artworkUrl:
                'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              ctaLink: '/benefits',
              ctaLinkTarget: 'NEW_TAB',
            },
          },
        ],
        title: 'Your Culinary Journey',
        locale: 'en',
        description:
          'Track your foodie adventures and unlock exclusive dining experiences!',
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
              lastEarnedAt: '2024-11-11T16:17:23.784Z',
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
              lastEarnedAt: '2024-11-11T16:17:23.784Z',
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
              lastEarnedAt: '2024-11-11T16:17:23.784Z',
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
              lastEarnedAt: '2024-11-11T16:17:23.784Z',
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
              summary: 'Should truncate at 1 line because there is',
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
              price: 0,
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
              summary:
                'This is a nice long summary, it should be truncated at 3 lines because there is no price.',
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
              showName: false,
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
              rewardCategoryId: 'ea38991c-1d2b-4d89-851b-124801ca2249',
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
              showName: false,
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
        ],
        title: 'Featured Dining Categories',
        locale: 'en',
        description:
          'Explore our curated collection of dining experiences. From fine dining to casual eats, discover the perfect venue for every occasion.',
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
              title: 'New Winter Menu',
              ctaLink: '/winter-menu',
              ctaText: 'View Menu',
              ctaLinkTarget: 'SAME_FRAME',
              artworkUrl:
                'https://images.pexels.com/photos/5638527/pexels-photo-5638527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              description:
                'Experience our seasonal delights with warming winter dishes crafted by our expert chefs. Available now with special tasting menus.',
            },
          },
          {
            tileHeight: 'FULL',
            type: 'BANNER',
            active: true,
            configuration: {
              title: 'Redeem Your Dining Points',
              ctaLink: '#rewards',
              ctaText: 'View Rewards',
              ctaLinkTarget: 'SAME_FRAME',
              artworkUrl:
                'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              description:
                'Turn your 5000 points into delicious rewards! Redeem now for complimentary dishes, exclusive tastings, and more.',
            },
          },
          {
            tileHeight: 'FULL',
            type: 'BANNER',
            active: true,
            configuration: {
              title: 'Culinary Masterclass 2024',
              ctaLink: '/masterclass',
              ctaText: 'Book Now',
              ctaLinkTarget: 'NEW_TAB',
              artworkUrl:
                'https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              description:
                'Join our expert chefs for an immersive cooking experience. Learn signature dishes, expert techniques, and insider tips!',
            },
          },
        ],
        title: 'Culinary Highlights',
        locale: 'en',
        description:
          'Your gateway to exceptional dining experiences. Discover seasonal menus, redeem rewards, and elevate your culinary journey with exclusive events and masterclasses.',
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

const mockContentTileGroupData = {
  status: 'success',
  data: {
    name: 'SkyRewards Elite',
    sections: [
      {
        name: 'Travel Status',
        type: 'GRID',
        active: true,
        title: 'Travel Dashboard',
        description:
          'Track your miles, unlock premium benefits, and explore exclusive travel perks!',
        tiles: [
          createContentTileMock({
            title:
              'This is a long standalone title that should take up multiple lines if needed to test overflow and clamping behaviour',
            body: `This body should fill the remaining space in the tile. If the title truncates correctly, this block should comfortably sit underneath and occupy the rest of the tile's vertical real estate.`,
            artworkUrl:
              'https://images.pexels.com/photos/7679473/pexels-photo-7679473.jpeg',
          }),
          createContentTileMock({
            title:
              'This is a long standalone title that should take up multiple lines if needed to test overflow and clamping behaviour',
            body: `This body should fill the remaining space in the tile. If the title truncates correctly, this block should comfortably sit underneath and occupy the rest of the tile's vertical real estate.`,
            artworkUrl:
              'https://images.pexels.com/photos/7679473/pexels-photo-7679473.jpeg',
          }),
          createContentTileMock({
            title:
              'This is a long standalone title that should take up multiple lines if needed to test overflow and clamping behaviour',
            body: `This body should fill the remaining space in the tile. If the title truncates correctly, this block should comfortably sit underneath and occupy the rest of the tile's vertical real estate.`,
            artworkUrl:
              'https://images.pexels.com/photos/7679473/pexels-photo-7679473.jpeg',
          }),
          createContentTileMock({
            title:
              'This is a long standalone title that should take up multiple lines if needed to test overflow and clamping behaviour',
            body: `This body should fill the remaining space in the tile. If the title truncates correctly, this block should comfortably sit underneath and occupy the rest of the tile's vertical real estate.`,
            artworkUrl:
              'https://images.pexels.com/photos/7679473/pexels-photo-7679473.jpeg',
          }),
        ],
      },
      {
        name: 'Full Tile Grid Test',
        type: 'GRID',
        active: true,
        title: 'Full Tile Grid Test',
        description:
          'This story tests the full tile grid layout with multiple lines of text.',
        tiles: [
          createContentTileMock({
            title:
              'This is a long standalone title that should take up multiple lines if needed to test overflow and clamping behaviour',
            body: undefined,
            artworkUrl: undefined,
          }),
          createContentTileMock({
            title: undefined,
            body: `This is a standalone body text block that should be allowed to expand as much as it needs, up to the vertical limit of the tile component. We're including multiple lines of text here to simulate the edge case and ensure that nothing is getting cut off unnecessarily at smaller or intermediate viewports.`,
            artworkUrl: undefined,
          }),
          createContentTileMock({
            title: 'Short Title (should be clamped to 2 lines max)',
            body: `This body should fill the remaining space in the tile. If the title truncates correctly, this block should comfortably sit underneath and occupy the rest of the tile's vertical real estate.`,
            artworkUrl: undefined,
          }),
          createContentTileMock({
            title:
              'This is a long standalone title that should take up multiple lines if needed to test overflow and clamping behaviour',
            body: `This body should fill the remaining space in the tile. If the title truncates correctly, this block should comfortably sit underneath and occupy the rest of the tile's vertical real estate.`,
            artworkUrl:
              'https://images.pexels.com/photos/7679473/pexels-photo-7679473.jpeg',
          }),
        ],
      },
      {
        name: 'Half & Full Tile Grid Test',
        type: 'GRID',
        active: true,
        title: 'Half & Full Tile Grid Test',
        description:
          'This story tests the half and full tile grid layout with multiple lines of text.',
        tiles: [
          createContentTileMock({
            tileHeight: TileHeight.Half,
            title:
              'Limited Time Offer with a long title that should be clamped to 2 lines max!',
            body: undefined,
            artworkUrl: undefined,
          }),
          createContentTileMock({
            tileHeight: TileHeight.Half,
            title: undefined,
            body: 'This body should fill 4 lines of space in the tile before being truncated as there is no title, so it should handle long pieces of copy.',
            artworkUrl: undefined,
          }),
          createContentTileMock({
            tileHeight: TileHeight.Half,
            title:
              'Flash Sale with a long title that should be clamped to 1 lines max!',
            body: 'This body should fill the remaining space 2 lines max',
            artworkUrl: undefined,
          }),
          createContentTileMock({
            tileHeight: TileHeight.Half,
            title: undefined,
            body: undefined,
            artworkUrl:
              'https://images.pexels.com/photos/3123915/pexels-photo-3123915.jpeg',
          }),
          createContentTileMock({
            title:
              'This is a long standalone title that should take up multiple lines if needed to test overflow and clamping behaviour',
            body: undefined,
            artworkUrl: undefined,
          }),
          createContentTileMock({
            title: 'New Partner Rewards!',
            body: 'Now earn points at our partner locations. Click to view participating partners.',
            artworkUrl:
              'https://images.pexels.com/photos/7236026/pexels-photo-7236026.jpeg',
            ctaLink: '/partner-locations',
            ctaLinkTarget: CTALinkTarget.newWindow,
          }),
        ],
      },
    ],
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
    chromatic: {
      viewports: [430, 479, 767, 1024, 1440],
    },
  },
};

export const GamificationFullGroup: Story = {
  args: {
    id: 'gamifiedfull-group-id',
  },
  parameters: {
    mockData: [{ response: gamifiedGroupData }],
    chromatic: {
      viewports: [430, 479, 767, 1024, 1440],
    },
  },
};

export const AirMilesTravelFullGroup: Story = {
  args: {
    id: 'air-miles-travel-group-id',
  },
  parameters: {
    mockData: [{ response: programData }],
    chromatic: {
      viewports: [430, 479, 767, 1024, 1440],
    },
  },
};

export const ContentTileGroup: Story = {
  args: {
    id: 'content-tile-group-id',
  },
  parameters: {
    mockData: [{ response: mockContentTileGroupData }],
    chromatic: {
      viewports: [430, 479, 767, 1024, 1440],
    },
  },
};
