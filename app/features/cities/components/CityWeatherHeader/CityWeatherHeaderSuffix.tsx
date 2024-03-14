import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Chip, List} from 'react-native-paper';

import {useTheme} from '../../../../theme';

interface CityWeatherHeaderSuffixProps {
  temperature: number;
  displayNavigation: boolean;
}

export const CityWeatherHeaderSuffix = ({
  temperature,
  displayNavigation,
}: CityWeatherHeaderSuffixProps) => {
  const theme = useTheme();

  return (
    <View style={CityWeatherHeaderSuffixStyle.content}>
      <Chip
        style={{
          backgroundColor: theme.colors.primary,
        }}
        selectedColor={theme.colors.onPrimary}>
        {temperature} °F
      </Chip>
      {displayNavigation && (
        <List.Icon icon="chevron-right" color={theme.colors.textSecondary} />
      )}
    </View>
  );
};

const CityWeatherHeaderSuffixStyle = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
});
