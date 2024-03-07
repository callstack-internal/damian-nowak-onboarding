import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

interface ErrorLoadingCitiesListProps {
  onRefresh: () => void;
}

export const ErrorLoadingCitiesList = ({
  onRefresh,
}: ErrorLoadingCitiesListProps) => {
  return (
    <View style={styles.content}>
      <Text>
        Error: something went wrong. Please check your internet connection and
        try again.
      </Text>
      <Button title={'Refresh'} onPress={onRefresh} />
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
