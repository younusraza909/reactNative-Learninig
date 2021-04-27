import React from 'react';
import { Text, StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.Status)}>{item.Subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  console.log(focusHistory);
  return (
    <>
      <SafeAreaView style={{ flex: '0.5', alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Thing we have focused on:</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                title={'Clear'}
                size={75}
                onPress={() => {
                  onClear();
                }}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: '20',
  }),
  title: {
    color: 'white',
    fontSize: 30,
  },
  clearContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
});
