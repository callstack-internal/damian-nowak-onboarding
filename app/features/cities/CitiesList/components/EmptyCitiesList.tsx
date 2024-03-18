import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

interface EmptyCitiesListProps {
  onRefresh: () => void;
}

export const EmptyCitiesList = ({onRefresh}: EmptyCitiesListProps) => {
  return (
    <View style={styles.content}>
      <Text>Nothing to show</Text>
      <Button
        title={'Refresh'}
        onPress={onRefresh}
        testID={'refresh-cities-button'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
