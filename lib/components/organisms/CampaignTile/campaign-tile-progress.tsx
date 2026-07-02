import React from 'react';
import { View } from 'react-native';
import { CampaignProgress } from '../../../types/tile';
import { ProgressBar } from '../../atoms';
import { useCampaignTileStyles } from './styles';

type CampaignTileProgressProps = {
  progress: CampaignProgress | null;
};

/**
 * Renders the progress bar and progress label for a Campaign Tile.
 * If progress is null, nothing is rendered.
 *
 * @param props - Component props
 * @param props.progress - The campaign progress data
 * @returns React.ReactElement or null if progress is null
 */

export const CampaignTileProgress = ({
  progress,
}: CampaignTileProgressProps): React.ReactElement | null => {
  const styles = useCampaignTileStyles();

  if (!progress) return null;

  const { currentValue, targetValue } = progress;
  const percentage =
    targetValue > 0 ? (currentValue / targetValue) * 100 : 0;

  return (
    <View style={styles.progressContainer} testID="campaign-tile-progress">
      <ProgressBar
        percentage={percentage}
        variant="primary"
        height="sm"
        currentValue={currentValue}
        targetValue={targetValue}
        showProgressLabel
      />
    </View>
  );
};
