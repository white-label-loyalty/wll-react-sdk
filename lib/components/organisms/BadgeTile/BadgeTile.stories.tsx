// @ts-nocheck
// TypeScript will now ignore all errors in this file Tile Deprecated

import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { BadgeTileType, TileHeight, TileType } from '../../../types/tile';
import BadgeTile from './index';
// @ts-ignore
import { TileWrapper } from '../../../utils/storybookHelpers';

export default {
  title: 'components/organisms/BadgeTile',
  component: BadgeTile,
  parameters: {
    skip: true,
  },
} as Meta;

const Template: StoryFn<typeof BadgeTile> = (args) => (
  <TileWrapper isHalfTile={args.tile.tileHeight === TileHeight.Half}>
    <BadgeTile {...args} />
  </TileWrapper>
);

export const Default = Template.bind({});
Default.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.Badge,
    configuration: {
      type: BadgeTileType.SPECIFIC,
      badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
      internalName: 'Epicurean Elite',
      priority: 0,
      internalDescription: null,
      status: 'ACTIVE',
      id: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
      createdAt: '2024-08-06T08:53:24.307Z',
      updatedAt: '2024-08-06T08:53:24.307Z',
      details: [
        {
          name: 'Epicurean Elite',
          locale: 'en',
          description:
            'Granted to those who achieve the highest tier in the loyalty program.',
          artworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
          id: '8962205c-e32a-4651-ac7a-4c584449d9fa',
          createdAt: '2024-08-06T08:53:24.307Z',
          updatedAt: '2024-08-06T08:53:24.307Z',
        },
      ],
      count: 10,
    },
    id: '72bb5e51-fe61-4a06-8450-d49030db0a03',
    createdAt: '2024-10-16T09:47:56.359Z',
    updatedAt: '2024-10-16T09:47:56.359Z',
    priority: 3,
  },
};

export const Locked = Template.bind({});
Locked.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.Badge,
    configuration: {
      type: BadgeTileType.SPECIFIC,
      badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
      internalName: 'Epicurean Elite',
      priority: 0,
      internalDescription: null,
      status: 'ACTIVE',
      id: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
      createdAt: '2024-08-06T08:53:24.307Z',
      updatedAt: '2024-08-06T08:53:24.307Z',
      details: [
        {
          name: 'Epicurean Elite',
          locale: 'en',
          description:
            'Granted to those who achieve the highest tier in the loyalty program.',
          artworkUrl:
            'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
          id: '8962205c-e32a-4651-ac7a-4c584449d9fa',
          createdAt: '2024-08-06T08:53:24.307Z',
          updatedAt: '2024-08-06T08:53:24.307Z',
        },
      ],
      count: 0,
    },
    id: '72bb5e51-fe61-4a06-8450-d49030db0a03',
    createdAt: '2024-10-16T09:47:56.359Z',
    updatedAt: '2024-10-16T09:47:56.359Z',
    priority: 3,
  },
};
