import React from 'react';
import { SectionType, TSection } from '../../../types/section';
import { CTALinkTarget, TileHeight, TileType } from '../../../types/tile';
import { render } from '../../__test__/test-utils';
import Section from './index';

const sectionMock: TSection = {
  details: [],
  defaultLocale: 'en',
  name: 'Elite Member Benefits',
  type: SectionType.Grid,
  active: true,
  id: 'a35399a7-580a-4493-afff-24ef4facf3f4',
  createdAt: '2024-11-19T15:50:37.701Z',
  updatedAt: '2024-12-06T11:18:16.842Z',
  priority: 2,
  tiles: [
    {
      tileHeight: TileHeight.Full,
      active: true,
      type: TileType.Content,
      configuration: {
        defaultLocale: 'en',
        details: [],
        ctaLinkTarget: CTALinkTarget.newWindow,
        locale: 'en',
        title: 'Welcome to Platinum Status',
        body: 'Enjoy premium benefits including priority check-in, lounge access, and complimentary upgrades. Your elite journey begins here.',
        artworkUrl:
          'https://ucarecdn.com/b129c5c2-08fd-4962-83b1-5c35301148c1/',
      },
      id: '6d49d8c5-6fc4-4db6-900d-6dbe2fcf04c2',
      priority: 7,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
  title: 'Elite Member Benefits',
  locale: 'en',
  pointsSuffix: 'miles',
};

describe('<Section/>', () => {
  it('matches snapshot', () => {
    const { container } = render(<Section section={sectionMock} />);
    expect(container).toMatchSnapshot();
  });
});
