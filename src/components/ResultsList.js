import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetails from './ResultsDetails';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) return null;
  return (
    <View style={style.container}>
      <Text style={style.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true} //just put 'horizontal' would be the same
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultScreen', { id: item.id })
              }
            >
              <ResultsDetails result={item} />
            </TouchableOpacity>
          );
        }}
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default withNavigation(ResultsList);
