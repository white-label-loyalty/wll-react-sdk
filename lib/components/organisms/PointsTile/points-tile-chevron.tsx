import React from 'react';
import { IS_MOBILE } from '../../../constants/device';
import { useWllSdk } from '../../../context/WllSdkContext';
import { PointsTileConfig } from '../../../types/tile';
import { isContextValid } from '../../../utils/contextHelpers';
import { Icon } from '../../atoms';
import { useTileContext } from '../../atoms/BaseTile';
import { View } from 'react-native';
import { usePointsTileStyles } from './styles';
/**
 * Renders a chevron icon for a Roundup Tile.
 *
 * @returns React.ReactElement
 */

export const PointsTileChevron = (): React.ReactElement | null => {
    const tileContext = useTileContext();
    const sdk = useWllSdk();
    const styles = usePointsTileStyles();

    if (!isContextValid(tileContext)) return null;

    const { ctaLink } = tileContext.configuration as PointsTileConfig;

    if (!ctaLink) return null;

    return (
        <View style={styles.chevronContainer}>
            <Icon
                name="ChevronRight"
                size={16}
                color={sdk.theme?.derivedSurfaceText?.[20] || '#000000'}
                role="img"
                accessibilityLabel="View balance"
            />
        </View>
    );
};
