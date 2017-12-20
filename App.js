import React from 'react';
import { StyleSheet, Text, View, FlatList, AppRegistry } from 'react-native';
import SymbolList from './SymbolList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <SymbolList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

AppRegistry.registerComponent("SymbolList", () => SymbolList);
