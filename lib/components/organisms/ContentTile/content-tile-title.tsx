import React, { useMemo } from 'react';
import { IS_MOBILE } from '../../../constants/device';
import { ContentTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Text } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { useTileSize } from '../../../hooks/useTileSize';
import { useContentTileStyles } from './styles';

export const ContentTileTitle = (): React.ReactElement | null => {
  const tileContext = useTileContext();
  const styles = useContentTileStyles();
  const sizeInfo = useTileSize(tileContext);

  if (!isContextValid(tileContext)) return null;

  const { title, ctaLink, body, artworkUrl } =
    tileContext.configuration as ContentTileConfig;
  if (!sizeInfo) return null;

  const { isHalfSize } = sizeInfo;

  const numberOfLines = useMemo(() => {
    if (!title) return undefined;

    if (isHalfSize) {
      if (title && !body) return 3;
      if (title && body) return 1;
    }

    if (artworkUrl) return 1;
    if (!body) return 7;

    return 2;
  }, [title, body, artworkUrl, isHalfSize]);

  if (!title) return null;

  const handleTitleWidth = () => {
    if (IS_MOBILE && ctaLink) {
      return styles.titleWithLink;
    }
  };

  return (
    <Text
      variant="title"
      role="heading"
      accessibilityLabel={title}
      numberOfLines={numberOfLines}
      style={handleTitleWidth()}
      testID="content-tile-title"
    >
      {title}
    </Text>
  );
};
