import React from 'react';

import {Text, View} from 'react-native';
import {List, Divider} from 'react-native-paper';

import {useTheme} from '../../../../theme';

export interface WeatherDetailItemProps {
  name: string;
  value: string;
}
export default function WeatherDetailItem({
  name,
  value,
}: WeatherDetailItemProps) {
  const theme = useTheme();
  return (
    <View>
      <List.Item
        title={name}
        right={() => (
          <Text style={{color: theme.colors.textSecondary}}>{value}</Text>
        )}
      />
      <Divider />
    </View>
  );
}
