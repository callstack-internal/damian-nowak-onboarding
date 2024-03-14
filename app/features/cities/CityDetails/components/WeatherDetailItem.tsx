import React from 'react';

import {Text, View} from 'react-native';
import {List, Divider} from 'react-native-paper';

import {useTheme} from '../../../../theme';

export interface WeatherDetailItemProps {
  id: string;
  name: string;
  value: string;
}
export default function WeatherDetailItem({
  id,
  name,
  value,
}: WeatherDetailItemProps) {
  const theme = useTheme();
  return (
    <View>
      <List.Item
        title={name}
        right={() => (
          <Text
            style={{color: theme.colors.textSecondary}}
            testID={`weather-detail-${id}-value`}>
            {value}
          </Text>
        )}
      />
      <Divider />
    </View>
  );
}
