import React from 'react';
import { IS_MOBILE } from '../../../constants/device';
import { ContentTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useContentTileStyles } from './styles';

export const ContentTileTitle = (): JSX.Element | null => {
  const tileContext = useTileContext();
  const styles = useContentTileStyles();

  if (!isContextValid(tileContext)) return null;

  const { title, ctaLink } = tileContext.configuration as ContentTileConfig;

  if (!title) return null;

  const handleTitleWidth = () => {
    if (IS_MOBILE && ctaLink) {
      return styles.titleWithLink;
    }
  };

  return (
    <Text
      variant="title"
      accessibilityRole="header"
      accessibilityLabel={title}
      numberOfLines={1}
      style={handleTitleWidth()}
      testID="content-tile-title"
    >
      {title}
    </Text>
  );
};
