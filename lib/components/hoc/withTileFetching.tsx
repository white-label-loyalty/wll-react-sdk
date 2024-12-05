import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useWllSdk } from '../../context/WllSdkContext';
import { Tile } from '../../types/tile';
import { commonStyles } from '../../utils/styling';
import SkeletonTile from '../atoms/SkeletonTile';

export type WithTileFetchingProps = {
  tile?: Tile;
  tileId?: string;
};

export function withTileFetching<P extends { tile: Tile }>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithTileFetchingComponent(
    props: Omit<P, 'tile'> & WithTileFetchingProps
  ) {
    const { tile, tileId } = props;
    const { getTileByID } = useWllSdk();
    const [tileData, setTileData] = useState<Tile | null>(tile || null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      if (tile) {
        setTileData(tile);
      } else if (tileId) {
        const fetchTile = async () => {
          setIsLoading(true);
          try {
            const response = await getTileByID(tileId);
            if (response.status === 'success' && response.data) {
              setTileData(response.data);
            } else {
              setError(response.error || 'Failed to fetch tile');
            }
          } catch (err) {
            setError(
              err instanceof Error ? err.message : 'Failed to fetch tile'
            );
          } finally {
            setIsLoading(false);
          }
        };
        fetchTile();
      }
    }, [tile, tileId, getTileByID]);

    if (isLoading) {
      return <SkeletonTile style={{ width: '100%' }} />;
    }

    if (error || !tileData) {
      return (
        <View style={commonStyles.emptyContainer}>
          <Text>No tile data available</Text>
        </View>
      );
    }

    return <WrappedComponent {...(props as P)} tile={tileData} />;
  };
}
